import { mkdirSync, writeFileSync } from 'node:fs';
import { categories, categoryZh, lastUpdated, papers } from '../lib/papers.ts';

const repository = 'https://github.com/Mrkkew/Awesome-Loop-Transformers';

const catalog = {
  schemaVersion: 1,
  title: 'Awesome Loop Transformers',
  repository,
  lastUpdated,
  scope: {
    core: 'Looped, recursive, and recurrent-depth Transformer research, including direct theory, analysis, systems, and applications.',
    broader: 'A selective track of latent-reasoning work that performs multi-step computation in learned hidden states without necessarily using a looped Transformer.',
  },
  categories: categories.map((name) => ({ name, nameZh: categoryZh[name] })),
  counts: {
    total: papers.length,
    from2024: papers.filter((paper) => paper.date >= '2024-01-01').length,
    coreFrom2024: papers.filter((paper) => paper.date >= '2024-01-01' && paper.category !== 'Broader Latent Reasoning').length,
    broaderFrom2024: papers.filter((paper) => paper.date >= '2024-01-01' && paper.category === 'Broader Latent Reasoning').length,
  },
  papers,
};

mkdirSync('data', { recursive: true });
writeFileSync('data/papers.json', `${JSON.stringify(catalog, null, 2)}\n`);
