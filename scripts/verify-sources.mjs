import { papers } from '../lib/papers.ts';
import { assessSource } from './source-metadata.mjs';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const requestedIds = new Set(process.argv.slice(2));
const selectedPapers = requestedIds.size ? papers.filter((paper) => requestedIds.has(paper.id)) : papers;
if (requestedIds.size && selectedPapers.length !== requestedIds.size) {
  const known = new Set(selectedPapers.map((paper) => paper.id));
  throw new Error(`Unknown paper ID(s): ${[...requestedIds].filter((id) => !known.has(id)).join(', ')}`);
}

const results = [];
for (const [index, paper] of selectedPapers.entries()) {
  let response;
  try {
    response = await fetch(paper.paper, {
      headers: { 'user-agent': 'Awesome-Loop-Transformers/1.0 source-verifier' },
      signal: AbortSignal.timeout(20_000),
    });
  } catch (error) {
    results.push({ id: paper.id, kind: 'unresolved', reasons: [`Request failed (${error.message})`] });
    console.log(`[${index + 1}/${selectedPapers.length}] unresolved: ${paper.id}`);
    continue;
  }

  let result;
  try {
    result = assessSource(paper, response.status, response.ok ? await response.text() : '');
  } catch (error) {
    result = { kind: 'unresolved', reasons: [`Response could not be read (${error.message})`] };
  }
  results.push({ id: paper.id, ...result });
  console.log(`[${index + 1}/${selectedPapers.length}] ${result.kind}: ${paper.id}${result.checks ? ` (${result.checks.join(', ')})` : ''}`);
  await sleep(1_000);
}

const count = (kind) => results.filter((result) => result.kind === kind).length;
console.log(`\nSource metadata: ${count('matched')} matched, ${count('mismatch')} mismatched, ${count('unresolved')} unresolved; ${selectedPapers.length} requested.`);
console.log('Checks cover titles and, for arXiv pages, first-submission dates. They do not verify authors, venue, summaries, or code ownership.');
for (const result of results.filter((item) => item.kind !== 'matched')) console.error(`${result.id}: ${result.reasons.join('; ')}`);
process.exitCode = count('mismatch') ? 1 : count('unresolved') ? 2 : 0;
