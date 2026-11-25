#!/usr/bin/env node
/**
 * Writes data/star-history.json plus two SVGs (light and dark) from the repo's
 * stargazer list, so the README can show a chart that this repository owns.
 *
 * The stargazer endpoint only returns timestamps to authenticated callers, so
 * this needs a token with `public_repo` (the workflow supplies GITHUB_TOKEN).
 *
 *   GITHUB_TOKEN=... node scripts/star-history.mjs
 *   node scripts/star-history.mjs --stars=stars.json  # already-fetched stargazers
 *   node scripts/star-history.mjs --fixture           # synthetic data, for styling
 */
import { existsSync, writeFileSync, mkdirSync, readFileSync } from 'node:fs';

const REPO = 'Mrkkew/Awesome-Loop-Transformers';
const OUT_JSON = 'data/star-history.json';
const OUT_LIGHT = 'public/star-history.svg';
const OUT_DARK = 'public/star-history-dark.svg';
const fixture = process.argv.includes('--fixture');
const starsFile = process.argv.find((arg) => arg.startsWith('--stars='))?.slice(8);

const INK = '#11182B';
const CYAN = '#1F7A99';
const LIME = '#C8FF62';

const day = (iso) => iso.slice(0, 10);
const parse = (s) => new Date(`${s}T00:00:00Z`).getTime();
const fmt = (ms) => new Date(ms).toISOString().slice(0, 10);

/** All stargazers, oldest first, as [{ starred_at }] — paginated 100 at a time. */
async function fetchStargazers(token) {
  const stars = [];
  for (let page = 1; page <= 100; page += 1) {
    const url = `https://api.github.com/repos/${REPO}/stargazers?per_page=100&page=${page}`;
    const res = await fetch(url, {
      headers: {
        accept: 'application/vnd.github.v3.star+json',
        'user-agent': 'awesome-loop-transformers-star-history',
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
      signal: AbortSignal.timeout(20_000),
    });
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText} for ${url}${res.status === 401 ? ' — stargazer timestamps need a token' : ''}`);
    }
    const batch = await res.json();
    if (!Array.isArray(batch) || batch.length === 0) break;
    stars.push(...batch.map((item) => item.starred_at ?? item));
    if (batch.length < 100) break;
  }
  return stars.filter(Boolean).sort();
}

async function repoMeta(token) {
  const res = await fetch(`https://api.github.com/repos/${REPO}`, {
    headers: { accept: 'application/vnd.github.v3+json', 'user-agent': 'awesome-loop-transformers-star-history', ...(token ? { authorization: `Bearer ${token}` } : {}) },
    signal: AbortSignal.timeout(20_000),
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for repo metadata`);
  const { stargazers_count: total, created_at: created } = await res.json();
  return { total, created: day(created) };
}

/** One point per day that gained a star, starting from zero on the creation day. */
function toSeries(stars, created) {
  const counts = new Map();
  for (const iso of stars) {
    const d = day(iso);
    counts.set(d, (counts.get(d) ?? 0) + 1);
  }
  const points = [[created, 0]];
  let running = 0;
  for (const d of [...counts.keys()].sort()) {
    running += counts.get(d);
    points.push([d, running]);
  }
  const last = points.at(-1);
  if (last[1] !== stars.length) points.push([fmt(Date.now()), stars.length]);
  // a day that appears twice draws a vertical hook; keep the later value
  return points.filter(([d], i) => i === 0 || d !== points[i - 1][0]);
}

/** Axis step that keeps the labels whole numbers and at most five rows. */
function niceStep(max) {
  for (let magnitude = 1; magnitude <= 10 ** 6; magnitude *= 10) {
    for (const multiplier of [1, 2, 2.5, 5]) {
      const step = multiplier * magnitude;
      if (max / step <= 5) return step;
    }
  }
  return 10 ** 6;
}

/**
 * Stars arrive as a point process, so a curve drawn straight through the daily
 * counts inherits every corner: long flats, then near-vertical rises. Smoothing
 * the *arrival rate* with a small Gaussian and integrating it keeps the curve
 * monotone, starts at zero, and still ends at the exact total — only the shape
 * between the corners is softened.
 */
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAY_MS = 86_400_000;
const SIGMA_DAYS = 4.2;

/** Daily arrivals → smoothed cumulative curve, anchored at the true day range and total. */
function smoothCumulative(points) {
  const start = parse(points[0][0]);
  const days = Math.round((parse(points.at(-1)[0]) - start) / DAY_MS) + 1;
  const arrivals = new Array(days).fill(0);
  for (let i = 1; i < points.length; i += 1) {
    arrivals[Math.round((parse(points[i][0]) - start) / DAY_MS)] += points[i][1] - points[i - 1][1];
  }
  const radius = Math.ceil(SIGMA_DAYS * 3);
  const kernel = Array.from({ length: radius * 2 + 1 }, (_, i) => Math.exp(-0.5 * ((i - radius) / SIGMA_DAYS) ** 2));
  const total = points.at(-1)[1];
  const raw = [];
  let running = 0;
  for (let i = 0; i < days; i += 1) {
    let sum = 0;
    let weight = 0;
    for (let k = -radius; k <= radius; k += 1) {
      const j = i + k;
      if (j < 0 || j >= days) continue;
      const w = kernel[k + radius];
      sum += arrivals[j] * w;
      weight += w;
    }
    running += weight ? sum / weight : 0;
    raw.push(running);
  }
  // the kernel spends mass past the final day, so rescale to land exactly on the total
  const scale = raw.at(-1) ? total / raw.at(-1) : 1;
  return raw.map((v, i) => [start + i * DAY_MS, Math.min(v * scale, total)]);
}

/** Monotone cubic: smooth, and it cannot overshoot the values it passes through. */
function smoothPath(pts) {
  const n = pts.length;
  if (n < 3) return pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const dx = [];
  const slope = [];
  for (let i = 0; i < n - 1; i += 1) {
    dx.push(pts[i + 1][0] - pts[i][0]);
    slope.push((pts[i + 1][1] - pts[i][1]) / (dx[i] || 1));
  }
  const m = new Array(n);
  m[0] = slope[0];
  m[n - 1] = slope[n - 2];
  for (let i = 1; i < n - 1; i += 1) m[i] = (slope[i - 1] + slope[i]) / 2;
  for (let i = 0; i < n - 1; i += 1) {
    if (slope[i] === 0) {
      m[i] = 0;
      m[i + 1] = 0;
      continue;
    }
    const a = m[i] / slope[i];
    const b = m[i + 1] / slope[i];
    const h = Math.hypot(a, b);
    if (h > 3) {
      const t = 3 / h;
      m[i] = t * a * slope[i];
      m[i + 1] = t * b * slope[i];
    }
  }
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < n - 1; i += 1) {
    const [x0, y0] = pts[i];
    const [x1, y1] = pts[i + 1];
    const h = dx[i] / 3;
    d += ` C${(x0 + h).toFixed(1)},${(y0 + m[i] * h).toFixed(1)} ${(x1 - h).toFixed(1)},${(y1 - m[i + 1] * h).toFixed(1)} ${x1.toFixed(1)},${y1.toFixed(1)}`;
  }
  return d;
}

function renderSvg(points, meta, theme) {
  const dark = theme === 'dark';
  const W = 800;
  const H = 533;
  const pad = { l: 54, r: 26, t: 58, b: 70 };
  const bg = dark ? '#0D1117' : '#FFFFFF';
  const text = dark ? '#E6EDF3' : INK;
  const muted = dark ? '#8B949E' : '#5C6578';
  const grid = dark ? '#1A2029' : '#F2F5FA';
  const base = dark ? '#2A313C' : '#E4E9F2';
  const accent = dark ? LIME : CYAN;

  const x0 = pad.l;
  const x1 = W - pad.r;
  const y0 = pad.t + 14;
  const y1 = H - pad.b;
  const first = parse(points[0][0]);
  const lastDate = parse(points.at(-1)[0]);
  const span = Math.max(lastDate - first, 14 * DAY_MS);
  const total = points.at(-1)[1];
  const yStep = niceStep(Math.max(total, 1));
  const yMax = Math.ceil(Math.max(total, 1) / yStep) * yStep;
  const sx = (ms) => x0 + ((ms - first) / span) * (x1 - x0);
  const sy = (v) => y1 - (v / yMax) * (y1 - y0);

  const series = smoothCumulative(points);
  const pts = series.map(([ms, v]) => [sx(ms), sy(v)]);
  const curve = smoothPath(pts);
  const area = `${curve} L${pts.at(-1)[0].toFixed(1)},${y1} L${pts[0][0].toFixed(1)},${y1} Z`;

  const yTicks = Math.round(yMax / yStep);
  const yMarks = Array.from({ length: yTicks + 1 }, (_, i) => {
    const value = yStep * i;
    return `<line x1="${x0}" y1="${sy(value).toFixed(1)}" x2="${x1}" y2="${sy(value).toFixed(1)}" stroke="${i === 0 ? base : grid}" stroke-width="1"/>
  <text x="${x0 - 12}" y="${(sy(value) + 4).toFixed(1)}" text-anchor="end" font-size="11.5" fill="${muted}">${Math.round(value)}</text>`;
  }).join('\n  ');

  const months = [];
  for (let cursor = new Date(Date.UTC(new Date(first).getUTCFullYear(), new Date(first).getUTCMonth(), 1)); cursor.getTime() <= lastDate; cursor = new Date(Date.UTC(cursor.getUTCFullYear(), cursor.getUTCMonth() + 1, 1))) {
    months.push(cursor.getTime());
  }
  const multiYear = span > 3 * 365 * DAY_MS;
  const thin = Math.ceil(months.length / 7);
  const kept = months.filter((_, i) => i % thin === 0 || i === months.length - 1);
  const xMarks = kept.map((ms, i) => {
    const d = new Date(ms);
    const label = multiYear ? `${MONTHS[d.getUTCMonth()].slice(0, 3)} ${d.getUTCFullYear()}` : MONTHS[d.getUTCMonth()];
    const anchor = i === 0 ? 'start' : i === kept.length - 1 ? 'end' : 'middle';
    const x = sx(ms) + (i === 0 ? -4 : i === kept.length - 1 ? 4 : 0);
    return `<text x="${x.toFixed(1)}" y="${y1 + 22}" text-anchor="${anchor}" font-size="12" fill="${muted}">${label}</text>`;
  }).join('\n  ');

  const endX = sx(lastDate);
  const endY = sy(total);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${total} stars since ${points[0][0]}">
  <defs>
    <linearGradient id="fill-${theme}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${accent}" stop-opacity="${dark ? 0.20 : 0.22}"/>
      <stop offset="70%" stop-color="${accent}" stop-opacity="${dark ? 0.05 : 0.06}"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="${bg}"/>
  ${yMarks}
  ${xMarks}
  <path d="${area}" fill="url(#fill-${theme})"/>
  <path d="${curve}" fill="none" stroke="${accent}" stroke-width="2.2" stroke-linecap="round"/>
  <circle cx="${endX.toFixed(1)}" cy="${endY.toFixed(1)}" r="7" fill="${accent}" opacity="0.10"/>
  <circle cx="${endX.toFixed(1)}" cy="${endY.toFixed(1)}" r="3.4" fill="${bg}" stroke="${accent}" stroke-width="2.2"/>
  <text x="${endX.toFixed(1)}" y="${Math.max(endY - 15, 26).toFixed(1)}" text-anchor="middle" font-size="13.5" font-weight="700" fill="${text}">${total}</text>
  <circle cx="${x0 + 4}" cy="${y0 - 34}" r="3.6" fill="${accent}"/>
  <text x="${x0 + 14}" y="${y0 - 29.5}" font-size="12.5" fill="${text}">${meta.title}</text>
  <text x="${((x0 + x1) / 2).toFixed(1)}" y="${H - 20}" text-anchor="middle" font-size="12.5" fill="${muted}">Date</text>
  <text x="16" y="${((y0 + y1) / 2).toFixed(1)}" text-anchor="middle" font-size="12.5" fill="${muted}" transform="rotate(-90 16 ${((y0 + y1) / 2).toFixed(1)})">GitHub Stars</text>
</svg>
`;
}

const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN ?? '';

let points;
let meta;

if (fixture) {
  // A fixed, obviously synthetic curve so the styling can be reviewed offline.
  meta = { title: 'Awesome Loop Transformers', total: 25, created: '2026-09-04', lastStar: '2026-11-24' };
  points = [['2026-09-04', 0], ['2026-09-18', 3], ['2026-10-02', 7], ['2026-10-19', 9], ['2026-11-05', 14], ['2026-11-16', 19], ['2026-11-24', 25]];
} else {
  // --stars exists because api.github.com is not reachable from every network
  // (this laptop has to talk to it through a gateway); the workflow does not
  // need it, it can call the API directly.
  const stars = starsFile
    ? JSON.parse(readFileSync(starsFile, 'utf8')).map((item) => item?.starred_at ?? item).filter(Boolean).sort()
    : await fetchStargazers(token);
  const onDisk = existsSync(OUT_JSON) ? JSON.parse(readFileSync(OUT_JSON, 'utf8')) : null;
  const { total, created } = starsFile
    ? { total: stars.length, created: onDisk?.points?.[0]?.[0] ?? day(stars[0]) }
    : await repoMeta(token);
  points = toSeries(stars, created);
  meta = {
    title: 'Awesome Loop Transformers',
    total: Math.max(total, points.at(-1)[1]),
    created,
    lastStar: day(stars.at(-1) ?? created),
  };
}

// A run that finds no new star must leave the tree alone: otherwise the daily
// workflow would commit a new timestamp every day.
const previous = existsSync(OUT_JSON) ? JSON.parse(readFileSync(OUT_JSON, 'utf8')) : null;
const drawn = existsSync(OUT_LIGHT) && existsSync(OUT_DARK);
if (previous && drawn && previous.total === meta.total && JSON.stringify(previous.points) === JSON.stringify(points)) {
  console.log(`${meta.total} stars, nothing new since ${day(previous.updated ?? '')}`);
  process.exit(0);
}

mkdirSync('data', { recursive: true });
mkdirSync('public', { recursive: true });
writeFileSync(OUT_JSON, `${JSON.stringify({ repo: REPO, updated: new Date().toISOString().slice(0, 19) + 'Z', total: meta.total, points }, null, 2)}\n`);
writeFileSync(OUT_LIGHT, renderSvg(points, meta, 'light'));
writeFileSync(OUT_DARK, renderSvg(points, meta, 'dark'));
console.log(`${meta.total} stars over ${points.length} points → ${OUT_JSON}, ${OUT_LIGHT}, ${OUT_DARK}`);
