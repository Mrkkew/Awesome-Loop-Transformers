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

const INK = '#0B1020';
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
  return points;
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
 * One card, drawn from scratch: header (name, span, total, 30-day delta), grid,
 * gradient area, the step line, and dots where more than one star landed on the
 * same day. Two themes, because GitHub picks the README variant.
 */
function renderSvg(points, meta, theme) {
  const dark = theme === 'dark';
  const W = 900;
  const H = 340;
  const pad = { l: 62, r: 30, t: 92, b: 40 };
  const card = dark ? '#0E1526' : '#FFFFFF';
  const border = dark ? '#1E2740' : '#E7EAF3';
  const text = dark ? '#E8ECF8' : INK;
  const muted = dark ? '#8E97AE' : '#6B7385';
  const grid = dark ? '#1A2238' : '#EDF0F7';
  const line = dark ? LIME : CYAN;
  const fillTop = dark ? 'rgba(200,255,98,0.26)' : 'rgba(31,122,153,0.16)';
  const pillBg = dark ? 'rgba(200,255,98,0.12)' : 'rgba(31,122,153,0.10)';

  const x0 = pad.l;
  const x1 = W - pad.r;
  const y0 = pad.t;
  const y1 = H - pad.b;
  const first = parse(points[0][0]);
  const lastDate = parse(points.at(-1)[0]);
  // keep a chart of a single day from collapsing into a vertical line
  const span = Math.max(lastDate - first, 14 * 86_400_000);
  const total = points.at(-1)[1];
  const yStep = niceStep(Math.max(total, 1));
  const yMax = Math.ceil(Math.max(total, 1) / yStep) * yStep;
  const sx = (ms) => x0 + ((ms - first) / span) * (x1 - x0);
  const sy = (v) => y1 - (v / yMax) * (y1 - y0);

  const steps = points.map(([d, v]) => [sx(parse(d)), sy(v)]);
  const linePath = steps.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const areaPath = `${linePath} L${steps.at(-1)[0].toFixed(1)},${y1} L${steps[0][0].toFixed(1)},${y1} Z`;

  const yTicks = Math.round(yMax / yStep);
  const yMarks = Array.from({ length: yTicks + 1 }, (_, i) => {
    const value = yStep * i;
    return `<line x1="${x0}" y1="${sy(value).toFixed(1)}" x2="${x1}" y2="${sy(value).toFixed(1)}" stroke="${grid}" stroke-width="1"/>
  <text x="${x0 - 14}" y="${(sy(value) + 4).toFixed(1)}" text-anchor="end" font-size="11" fill="${muted}">${Math.round(value)}</text>`;
  }).join('\n  ');

  // ticks on month boundaries: an evenly spaced grid repeats the month label and
  // reads as a rendering bug on a two-month history
  const multiYear = span > 3 * 365 * 86_400_000;
  const tickAt = [first];
  for (let cursor = new Date(Date.UTC(new Date(first).getUTCFullYear(), new Date(first).getUTCMonth() + 1, 1)); cursor.getTime() <= lastDate; cursor = new Date(Date.UTC(cursor.getUTCFullYear(), cursor.getUTCMonth() + 1, 1))) {
    tickAt.push(cursor.getTime());
  }
  const keepEvery = Math.ceil(tickAt.length / 6);
  const xMarks = tickAt.filter((_, i) => i % keepEvery === 0 || i === tickAt.length - 1)
    .map((ms) => {
      const label = fmt(ms);
      return `<text x="${sx(ms).toFixed(1)}" y="${y1 + 24}" text-anchor="middle" font-size="11" fill="${muted}">${multiYear ? label.slice(0, 4) : label.slice(2)}</text>`;
    }).join('\n  ');

  // stars that arrived on a day that already had one: the bursts worth seeing
  const bursts = steps.filter((_, i) => i > 0 && points[i][1] - points[i - 1][1] > 1);
  const burstDots = bursts.map(([x, y]) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.1" fill="${line}" opacity="0.55"/>`).join('\n  ');

  const [lx, ly] = steps.at(-1);
  const since = points[0][0];
  const delta30 = total - (points.find(([d]) => parse(d) >= lastDate - 30 * 86_400_000)?.[1] ?? 0);
  const deltaText = delta30 > 0 ? `+${delta30} in 30 days` : 'no new stars in 30 days';
  const pillW = 6.4 * deltaText.length + 24;
  const pillX = x1 - pillW;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${total} stars since ${since}, ${deltaText}">
  <defs>
    <linearGradient id="area-${theme}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${fillTop}"/>
      <stop offset="100%" stop-color="${fillTop.replace(/[\d.]+\)$/, '0)')}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="${card}"/>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="14" fill="none" stroke="${border}"/>
  <text x="${pad.l}" y="36" font-size="15.5" font-weight="600" fill="${text}">${meta.title}</text>
  <text x="${pad.l}" y="57" font-size="11.5" fill="${muted}">since ${since} · last star ${meta.lastStar}</text>
  <text x="${x1}" y="42" text-anchor="end" font-size="31" font-weight="700" fill="${line}">${total}</text>
  <rect x="${pillX.toFixed(1)}" y="52" width="${pillW.toFixed(1)}" height="21" rx="10.5" fill="${pillBg}"/>
  <text x="${(x1 - pillW / 2).toFixed(1)}" y="66.5" text-anchor="middle" font-size="10.5" font-weight="600" fill="${line}">${deltaText}</text>
  ${yMarks}
  ${xMarks}
  <path d="${areaPath}" fill="url(#area-${theme})"/>
  <path d="${linePath}" fill="none" stroke="${line}" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
  ${burstDots}
  <circle cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}" r="4.6" fill="${line}" stroke="${card}" stroke-width="2.2"/>
  <line x1="${x0}" y1="${y1}" x2="${x1}" y2="${y1}" stroke="${border}" stroke-width="1"/>
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
