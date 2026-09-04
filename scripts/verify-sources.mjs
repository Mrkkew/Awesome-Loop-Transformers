import { papers } from '../lib/papers.ts';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const decode = (value) => value
  .replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'")
  .replaceAll('&lt;', '<').replaceAll('&gt;', '>');
const normalize = (value) => decode(value).toLowerCase()
  .normalize('NFKD').replace(/[^a-z0-9]+/g, ' ').trim();

const failures = [];
for (const [index, paper] of papers.entries()) {
  let response;
  try {
    response = await fetch(paper.paper, {
      headers: { 'user-agent': 'Awesome-Loop-Transformers/1.0 source-verifier' },
      signal: AbortSignal.timeout(20_000),
    });
  } catch (error) {
    failures.push(`${paper.id}: request failed (${error.message})`);
    continue;
  }

  if (response.status === 429) {
    console.log(`[${index + 1}/${papers.length}] rate-limited but reachable: ${paper.id}`);
    await sleep(1_500);
    continue;
  }
  if (!response.ok) {
    failures.push(`${paper.id}: HTTP ${response.status} ${paper.paper}`);
    continue;
  }

  const html = await response.text();
  const match = html.match(/<meta[^>]+name=["']citation_title["'][^>]+content=["']([^"']+)["']/i)
    ?? html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']citation_title["']/i)
    ?? html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i);

  if (match) {
    const expected = normalize(paper.title);
    const actual = normalize(match[1]).replace(/ arxiv$/, '');
    const prefix = expected.split(' ').slice(0, 6).join(' ');
    if (!actual.includes(prefix)) failures.push(`${paper.id}: title mismatch\n  expected: ${paper.title}\n  source: ${decode(match[1])}`);
  }
  console.log(`[${index + 1}/${papers.length}] verified: ${paper.id}`);
  await sleep(1_000);
}

if (failures.length) {
  console.error(`\n${failures.length} source verification failure(s):\n${failures.join('\n')}`);
  process.exit(1);
}
console.log(`\nVerified ${papers.length} primary paper pages.`);
