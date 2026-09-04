import { writeFileSync } from 'node:fs';
import { categories, categoryZh, lastUpdated, papers } from '../lib/papers.ts';

const repo = 'https://github.com/Mrkkew/Awesome-Loop-Transformers';

const intro = {
  en: {
    language: '[中文](README.zh-CN.md) | **English**',
    tagline: 'A verified, survey-style atlas of looped and recurrent-depth Transformers, with a broader track for latent reasoning.',
    scopeTitle: 'What this list covers',
    scope: 'The core catalog focuses on models that reuse a learned Transformer layer, block, or stack through depth within one forward process. A separately labeled **Broader Latent Reasoning** track covers Coconut, HRM, TRM, implicit CoT, and related work that shares the goal of multi-step computation in learned hidden states but does not necessarily use a looped Transformer.',
    mapTitle: 'Survey map',
    map: [
      ['Foundations & Theory', 'Expressivity, programmability, in-context optimization, length and depth generalization.'],
      ['Architectures & Scaling', 'Weight sharing, recurrent cores, MoE, multi-resolution designs, and scaling laws.'],
      ['Latent Reasoning', 'Test-time depth, silent multi-step computation, Huginn, Ouro, and latent CoT.'],
      ['Adaptive Compute', 'Token routing, learned halting, early exit, and budget-conditioned depth.'],
      ['Training & Analysis', 'Optimization, stability, residual scaling, fixed points, and mechanistic studies.'],
      ['Systems & Applications', 'Serving, KV memory, parallel loops, code, multimodal, robotics, and tool use.'],
      ['Broader Latent Reasoning', 'Continuous thoughts, implicit CoT, hierarchical recurrence, HRM, and TRM.'],
    ],
    essentials: 'Essential reading', catalog: 'Complete catalog', links: 'Links', updated: 'Last research update',
    methodTitle: 'Verification and editorial policy',
    method: [
      'Every paper link points to arXiv, OpenReview, an official proceedings page, or the authors’ project page.',
      'Code and model links are included only when an official author/project source could be identified.',
      'Dates refer to first public release; venues reflect the latest verified publication status in this snapshot.',
      'Summaries are original editorial notes, not copied abstracts.',
      'Agent loops, repeated full-model API calls, and ordinary sequence recurrence without a direct latent-reasoning connection are out of core scope.',
    ],
    contributeTitle: 'Contributing', contribute: 'Corrections and new papers are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) and include a primary-source link plus evidence of the loop or latent-reasoning mechanism.',
  },
  zh: {
    language: '**中文** | [English](README.md)',
    tagline: '经过链接核验、按综述方式组织的循环与递归深度 Transformer 图谱，并扩展收录广义潜在推理工作。',
    scopeTitle: '收录范围',
    scope: '主目录聚焦在一次前向过程中沿深度重复使用 Transformer 层、模块或层栈的模型。另设明确标注的 **广义潜在推理** 板块，收录 Coconut、HRM、TRM、隐式 CoT 等具有共同目标的工作：它们都在学习到的隐状态中进行多步计算，但不一定采用循环 Transformer。',
    mapTitle: '综述分类',
    map: [
      ['基础与理论', '表达能力、可编程性、上下文优化、长度泛化与深度泛化。'],
      ['架构与扩展', '权重共享、循环核心、MoE、多分辨率设计与扩展规律。'],
      ['潜在推理', '测试时深度、静默多步计算、Huginn、Ouro 与潜在 CoT。'],
      ['自适应计算', 'Token 路由、学习式停止、提前退出与预算条件深度。'],
      ['训练与机制分析', '优化、稳定性、残差缩放、不动点与机制研究。'],
      ['系统与应用', '服务系统、KV 内存、并行循环、代码、多模态、机器人与工具调用。'],
      ['广义潜在推理', '连续思维、隐式 CoT、层次循环、HRM 与 TRM。'],
    ],
    essentials: '核心必读', catalog: '完整目录', links: '链接', updated: '最近调研更新',
    methodTitle: '链接核验与编辑规范',
    method: [
      '每个论文链接必须指向 arXiv、OpenReview、正式会议论文页或作者官方项目页。',
      '代码和模型链接只有在确认来自作者或官方项目时才会收录。',
      '日期采用首次公开时间；会议状态采用本次快照中能够确认的最新状态。',
      '所有短评均为原创编辑概述，不复制论文摘要。',
      'Agent 循环、重复调用完整模型的 API 流程，以及与潜在推理无直接关系的普通序列循环不属于核心范围。',
    ],
    contributeTitle: '参与贡献', contribute: '欢迎修正信息或补充论文。请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)，并提供论文原始链接及其循环或潜在推理机制的依据。',
  },
};

function links(paper, lang) {
  return [
    `[${lang === 'en' ? 'Paper' : '论文'}](${paper.paper})`,
    paper.code && `[${lang === 'en' ? 'Code' : '代码'}](${paper.code})`,
    paper.project && `[${lang === 'en' ? 'Project' : '主页'}](${paper.project})`,
  ].filter(Boolean).join(' · ');
}

function render(lang) {
  const t = intro[lang];
  const recentCount = papers.filter((paper) => Number(paper.date.slice(0, 4)) >= 2024).length;
  const out = [
    '<!-- This file is generated from lib/papers.ts. Edit the data source, then run npm run readme. -->',
    '# Awesome Loop Transformers', '', t.language, '',
    `[![Curated papers](https://img.shields.io/badge/curated-${recentCount}%20works-d8ff55?style=flat-square&labelColor=181814)](${repo})`,
    `[![Link check](https://img.shields.io/github/actions/workflow/status/Mrkkew/Awesome-Loop-Transformers/links.yml?style=flat-square&label=links)](${repo}/actions/workflows/links.yml)`,
    `[![License: CC BY 4.0](https://img.shields.io/badge/license-CC%20BY%204.0-2b59ff?style=flat-square)](LICENSE)`,
    '', `> ${t.tagline}`, '',
    `**${t.updated}:** ${lastUpdated}  `,
    `**${lang === 'en' ? 'Coverage' : '收录数量'}:** ${recentCount} ${lang === 'en' ? 'works from 2024 onward' : '篇 2024 年以来的工作'} · ${papers.length} ${lang === 'en' ? 'total including foundations' : '篇（含基础工作）'}`,
    '', `## ${t.scopeTitle}`, '', t.scope, '',
    `## ${t.mapTitle}`, '',
    `| ${lang === 'en' ? 'Track' : '方向'} | ${lang === 'en' ? 'Focus' : '关注问题'} |`, '| --- | --- |',
    ...t.map.map(([name, desc]) => `| **${name}** | ${desc} |`), '',
    `## ${t.essentials}`, '',
    ...papers.filter((paper) => paper.foundation).map((paper) => `- **[${paper.title}](${paper.paper})** — ${paper.summary[lang]}`), '',
    `## ${t.catalog}`, '',
  ];

  for (const category of categories) {
    const group = papers.filter((paper) => paper.category === category).sort((a, b) => b.date.localeCompare(a.date));
    out.push(`### ${lang === 'en' ? category : categoryZh[category]}`, '');
    const byYear = Map.groupBy(group, (paper) => paper.date.slice(0, 4));
    for (const year of [...byYear.keys()].sort().reverse()) {
      const yearCount = byYear.get(year).length;
      const yearUnit = lang === 'en' ? (yearCount === 1 ? 'paper' : 'papers') : '篇';
      out.push(`<details${year >= '2024' ? ' open' : ''}>`, `<summary><strong>${year}</strong> · ${yearCount} ${yearUnit}</summary>`, '');
      for (const paper of byYear.get(year)) {
        out.push(`- **${paper.title}** — ${paper.authors}. *${paper.venue}*.  `, `  ${paper.summary[lang]}  `, `  ${links(paper, lang)}`, '');
      }
      out.push('</details>', '');
    }
  }

  out.push(`## ${t.methodTitle}`, '', ...t.method.map((item) => `- ${item}`), '', `## ${t.contributeTitle}`, '', t.contribute, '', '---', '', `CC BY 4.0 · Maintained by [Mrkkew](${repo}) · Data source: [lib/papers.ts](lib/papers.ts)`, '');
  return out.join('\n');
}

writeFileSync('README.md', render('en'));
writeFileSync('README.zh-CN.md', render('zh'));
