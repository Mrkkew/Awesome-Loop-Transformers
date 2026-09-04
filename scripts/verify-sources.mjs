import { papers } from '../lib/papers.ts';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const decode = (value) => value
  .replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'")
  .replaceAll('&lt;', '<').replaceAll('&gt;', '>');
const normalize = (value) => decode(value)
  .replace(/\\['`^"~=]\{?([A-Za-z])\}?/g, '$1')
  .toLowerCase()
  .normalize('NFKD').replace(/\p{M}+/gu, '').replace(/[^a-z0-9]+/g, ' ').trim();

const requestedIds = new Set(process.argv.slice(2));
const selectedPapers = requestedIds.size ? papers.filter((paper) => requestedIds.has(paper.id)) : papers;
if (requestedIds.size && selectedPapers.length !== requestedIds.size) {
  const known = new Set(selectedPapers.map((paper) => paper.id));
  throw new Error(`Unknown paper ID(s): ${[...requestedIds].filter((id) => !known.has(id)).join(', ')}`);
}

const failures = [];
const months = new Map(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => [month, String(index + 1).padStart(2, '0')]));
for (const [index, paper] of selectedPapers.entries()) {
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
    console.log(`[${index + 1}/${selectedPapers.length}] rate-limited but reachable: ${paper.id}`);
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
  if (new URL(paper.paper).hostname === 'arxiv.org') {
    const submitted = html.match(/Submitted on\s+(\d{1,2})\s+([A-Z][a-z]{2})\s+(\d{4})/);
    if (submitted) {
      const sourceDate = `${submitted[3]}-${months.get(submitted[2])}-${submitted[1].padStart(2, '0')}`;
      if (sourceDate !== paper.date) failures.push(`${paper.id}: first-public date mismatch\n  catalog: ${paper.date}\n  source: ${sourceDate}`);
    }
  }
  console.log(`[${index + 1}/${selectedPapers.length}] verified: ${paper.id}`);
  await sleep(1_000);
}

if (failures.length) {
  console.error(`\n${failures.length} source verification failure(s):\n${failures.join('\n')}`);
  process.exit(1);
}
console.log(`\nVerified ${selectedPapers.length} primary paper pages.`);
