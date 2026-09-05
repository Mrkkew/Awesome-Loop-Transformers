import test from 'node:test';
import assert from 'node:assert/strict';
import { assessSource } from './source-metadata.mjs';

const paper = { title: 'Looped Transformers Learn Iterative Algorithms with Shared Weights', date: '2025-10-28', paper: 'https://arxiv.org/abs/2510.24824' };
const page = (title = paper.title, date = '28 Oct 2025') => `<meta name="citation_title" content="${title}"><div>Submitted on ${date}</div>`;

test('matching metadata names only the checks actually performed', () => {
  assert.deepEqual(assessSource(paper, 200, page()), { kind: 'matched', checks: ['title', 'first-public date'], reasons: [] });
  const proceedings = { ...paper, paper: 'https://proceedings.mlr.press/example.html' };
  assert.deepEqual(assessSource(proceedings, 200, page()).checks, ['title']);
});

test('same first six words cannot hide a different paper title', () => {
  assert.equal(assessSource(paper, 200, page('Looped Transformers Learn Iterative Algorithms with Unshared Weights')).kind, 'mismatch');
});

test('rate limits, missing metadata, and blocked pages are unresolved', () => {
  for (const status of [429, 403, 404, 500]) assert.equal(assessSource(paper, status, page()).kind, 'unresolved');
  assert.equal(assessSource(paper, 200, '<title>Just a moment...</title>').kind, 'unresolved');
  assert.equal(assessSource(paper, 200, `<meta name="citation_title" content="${paper.title}">`).kind, 'unresolved');
});

test('an incorrect submission date is a mismatch', () => {
  assert.equal(assessSource(paper, 200, page(paper.title, '29 Oct 2025')).kind, 'mismatch');
});

test('quoted apostrophes, attribute order, entities and diacritics are supported', () => {
  const record = { ...paper, title: "A Researcher's Guide to Recurrence & Depth" };
  const html = '<META content="A Researcher\'s Guide to Récurrence &#38; Depth" name="citation_title">Submitted on 28 Oct 2025';
  assert.equal(assessSource(record, 200, html).kind, 'matched');
});

test('arXiv social title wrappers do not cause false mismatches', () => {
  assert.equal(assessSource(paper, 200, `<meta property='og:title' content='[2510.24824] ${paper.title} | arXiv'>Submitted on 28 Oct 2025`).kind, 'matched');
});
