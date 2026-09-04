import { categories, papers } from '../lib/papers.ts';

const errors = [];
const ids = new Set();
const titles = new Set();
const allowedPaperHosts = new Set([
  'arxiv.org', 'openreview.net', 'proceedings.mlr.press',
  'proceedings.neurips.cc', 'aclanthology.org',
]);

for (const [index, paper] of papers.entries()) {
  const at = `papers[${index}] (${paper.id || 'missing id'})`;
  if (!paper.id || ids.has(paper.id)) errors.push(`${at}: duplicate or missing id`);
  if (!paper.title || titles.has(paper.title.toLowerCase())) errors.push(`${at}: duplicate or missing title`);
  ids.add(paper.id);
  titles.add(paper.title.toLowerCase());
  if (!/^\d{4}-\d{2}-\d{2}$/.test(paper.date)) errors.push(`${at}: date must be YYYY-MM-DD`);
  if (!categories.includes(paper.category)) errors.push(`${at}: unknown category`);
  if (!paper.summary?.en || !paper.summary?.zh) errors.push(`${at}: both English and Chinese summaries are required`);
  if (!Array.isArray(paper.tags) || paper.tags.length < 2) errors.push(`${at}: at least two tags are required`);
  for (const [kind, rawUrl] of Object.entries({ paper: paper.paper, code: paper.code, project: paper.project })) {
    if (!rawUrl) continue;
    let url;
    try { url = new URL(rawUrl); } catch { errors.push(`${at}: invalid ${kind} URL`); continue; }
    if (url.protocol !== 'https:') errors.push(`${at}: ${kind} URL must use HTTPS`);
    if (kind === 'paper' && !allowedPaperHosts.has(url.hostname)) errors.push(`${at}: paper link must use an approved primary-source host (${url.hostname})`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validated ${papers.length} records: unique IDs/titles, bilingual summaries, taxonomy, dates, and primary-source URL hosts.`);
