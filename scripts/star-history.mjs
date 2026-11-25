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
 * Laid out like the chart most awesome lists embed (star-history.com): no card,
 * no headline, a single line, month labels, axis titles and one legend entry.
 * Drawn by hand so the picture and its data belong to this repository.
 */
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function renderSvg(points, meta, theme) {
  const dark = theme === 'dark';
  const W = 800;
  const H = 533;
  const pad = { l: 62, r: 20, t: 46, b: 62 };
  const bg = dark ? '#0D1117' : '#FFFFFF';
  const text = dark ? '#C9D1D9' : INK;
  const muted = dark ? '#8B949E' : '#4A5468';
  const grid = dark ? '#21262D' : '#E9EDF5';
  const axis = dark ? '#30363D' : '#D8DEE9';
  const line = dark ? LIME : CYAN;

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

  const linePath = points.map(([d, v], i) => `${i === 0 ? 'M' : 'L'}${sx(parse(d)).toFixed(1)},${sy(v).toFixed(1)}`).join(' ');

  const yTicks = Math.round(yMax / yStep);
  const yMarks = Array.from({ length: yTicks + 1 }, (_, i) => {
    const value = yStep * i;
    return `<line x1="${x0}" y1="${sy(value).toFixed(1)}" x2="${x1}" y2="${sy(value).toFixed(1)}" stroke="${grid}" stroke-width="1"/>
  <text x="${x0 - 10}" y="${(sy(value) + 4).toFixed(1)}" text-anchor="end" font-size="12" fill="${muted}">${Math.round(value)}</text>`;
  }).join('\n  ');

  // month names, like the chart people are used to: repeating dates read as a bug
  const months = [];
  const startMonth = new Date(Date.UTC(new Date(first).getUTCFullYear(), new Date(first).getUTCMonth(), 1));
  for (let cursor = startMonth; cursor.getTime() <= lastDate; cursor = new Date(Date.UTC(cursor.getUTCFullYear(), cursor.getUTCMonth() + 1, 1))) {
    months.push(cursor.getTime());
  }
  const multiYear = span > 3 * 365 * 86_400_000;
  const thin = Math.ceil(months.length / 7);
  const kept = months.filter((_, i) => i % thin === 0 || i === months.length - 1);
  const xMarks = kept.map((ms, i) => {
    const d = new Date(ms);
    const label = multiYear ? `${MONTHS[d.getUTCMonth()].slice(0, 3)} ${d.getUTCFullYear()}` : MONTHS[d.getUTCMonth()];
    // the first and last label would otherwise hang outside the plot
    const anchor = i === 0 ? 'start' : i === kept.length - 1 ? 'end' : 'middle';
    const x = sx(ms) + (i === 0 ? -6 : i === kept.length - 1 ? 6 : 0);
    return `<text x="${x.toFixed(1)}" y="${y1 + 20}" text-anchor="${anchor}" font-size="12" fill="${muted}">${label}</text>`;
  }).join('\n  ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${total} stars since ${points[0][0]}">
  <rect width="${W}" height="${H}" fill="${bg}"/>
  <line x1="${x0}" y1="${y1}" x2="${x1}" y2="${y1}" stroke="${axis}" stroke-width="1"/>
  ${yMarks}
  ${xMarks}
  <path d="${linePath}" fill="none" stroke="${line}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>
  <line x1="${x0}" y1="${y0 - 14}" x2="${x0 + 22}" y2="${y0 - 14}" stroke="${line}" stroke-width="2.6" stroke-linecap="round"/>
  <text x="${x0 + 30}" y="${y0 - 9.5}" font-size="12.5" fill="${text}">${meta.title}</text>
  <text x="${((x0 + x1) / 2).toFixed(1)}" y="${H - 16}" text-anchor="middle" font-size="13.5" fill="${muted}">Date</text>
  <text x="18" y="${((y0 + y1) / 2).toFixed(1)}" text-anchor="middle" font-size="13.5" fill="${muted}" transform="rotate(-90 18 ${((y0 + y1) / 2).toFixed(1)})">GitHub Stars</text>
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
