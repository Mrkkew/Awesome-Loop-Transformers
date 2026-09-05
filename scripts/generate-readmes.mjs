import { writeFileSync } from 'node:fs';
import { categories, categoryZh, lastUpdated, papers } from '../lib/papers.ts';

const repo = 'https://github.com/Mrkkew/Awesome-Loop-Transformers';
const site = 'https://awesome-loop-transformers.bright-haven-2369.chatgpt.site';

const intro = {
  en: {
    language: '<strong>English</strong>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="README.zh-CN.md">简体中文</a>',
    tagline: 'Looped Transformers, latent reasoning, and test-time compute.<br>A bilingual reading guide with papers, official code, and research summaries.',
    nav: [['🧭 Start here', 'start-here'], ['📌 Essential reading', 'essential-reading'], ['📚 Full catalog', 'complete-catalog'], ['🤝 Contribute', 'contributing']],
    trackHeader: 'Track', countHeader: 'Works', focusHeader: 'What it covers',
    scopeTitle: 'What this list covers',
    scope: '**Looped Transformers:** models that reuse a learned Transformer layer, block, or stack through depth within a forward pass, alongside related theory, training, systems, and applications.\n\n**Broader latent reasoning:** selected work on continuous thoughts, implicit CoT, and recursive reasoning, including Coconut, HRM, and TRM. These methods need not use a looped Transformer and are listed separately.',
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
    methodTitle: 'Sources and selection',
    method: [
      'Every paper link points to arXiv, OpenReview, an official proceedings page, or the authors’ project page.',
      'Code and model links are included only when an official author/project source could be identified.',
      'Dates refer to first public release; venues reflect the latest verified publication status in this snapshot.',
      'Summaries are original editorial notes, not copied abstracts.',
      'The core looped/recursive-Transformer track is searched for comprehensive coverage; the much larger broader latent-reasoning track is intentionally representative.',
      'Agent loops, repeated full-model API calls, and ordinary sequence recurrence without a direct latent-reasoning connection are out of core scope.',
    ],
    contributeTitle: 'Contributing', contribute: `Missing a paper or found an error? [Suggest a paper](${repo}/issues/new?template=paper-suggestion.yml), [report a correction](${repo}/issues/new?template=correction.yml), or open a pull request using the [contribution guide](CONTRIBUTING.md). English and Chinese contributions are both welcome.`,
    browse: 'Search the interactive catalog ↗', suggest: 'Suggest a paper',
    startTitle: 'Start here',
    routes: [
      ['Understand the architecture', '[Universal Transformers](https://arxiv.org/abs/1807.03819) → [programmable loops](https://proceedings.mlr.press/v202/giannou23a.html) → [foundations and theory](#foundations--theory).'],
      ['Study reasoning and scaling', '[Huginn](https://arxiv.org/abs/2502.05171) → [Ouro](https://arxiv.org/abs/2510.25741) → [adaptive compute](#adaptive-compute) and [parallel loops](https://arxiv.org/abs/2510.24824).'],
      ['Explore related methods', '[Coconut](https://arxiv.org/abs/2412.06769), [HRM](https://arxiv.org/abs/2506.21734), and [TRM](https://arxiv.org/abs/2510.04871) → [broader latent reasoning](#broader-latent-reasoning).'],
    ],
    essentialIntro: 'Eight entry points, from shared-depth architectures to latent reasoning. Short names link to the original papers; this is a reading selection, not a ranking.',
    essentialHeaders: ['Paper / model', 'Research question'],
    catalogHint: 'Choose a topic below, then expand a year. Papers are ordered newest first within each group. For title, author, or model search, use the [interactive catalog](' + site + '/#catalog).',
    back: '↑ Back to catalog',
  },
  zh: {
    language: '<strong>简体中文</strong>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="README.md">English</a>',
    tagline: '循环 Transformer、潜在推理与测试时计算。<br>汇集论文原文、官方代码与中英文概述，梳理研究进展。',
    nav: [['🧭 阅读路线', 'start-here'], ['📌 推荐阅读', 'essential-reading'], ['📚 完整目录', 'complete-catalog'], ['🤝 参与贡献', 'contributing']],
    trackHeader: '方向', countHeader: '数量', focusHeader: '关注问题',
    scopeTitle: '收录范围',
    scope: '**循环 Transformer：**在一次前向计算中沿深度复用 Transformer 层、模块或层栈的模型，以及相关的理论、训练、系统与应用研究。\n\n**广义潜在推理：**连续思维、隐式 CoT 与递归推理等方向的代表性工作，包括 Coconut、HRM 和 TRM。这些方法不一定采用循环 Transformer，因此单独分类。',
    map: [
      ['基础与理论', '表达能力、可编程性，以及长度与深度泛化。'],
      ['架构与扩展', '参数共享、循环核心、MoE、多分辨率设计与扩展规律。'],
      ['潜在推理', '测试时深度、隐状态中的多步计算，以及潜在 CoT。'],
      ['自适应计算', 'Token 级路由、学习式停止、提前退出与预算条件深度。'],
      ['训练与机制分析', '优化、稳定性、收敛、不动点与过度思考。'],
      ['系统与应用', '推理延迟、KV 内存、并行循环，以及代码、多模态和机器人应用。'],
      ['广义潜在推理', '连续思维、隐式 CoT、层次循环、HRM 与 TRM。'],
    ],
    essentials: '推荐阅读', catalog: '完整目录', links: '链接', updated: '文献更新',
    methodTitle: '整理方式',
    method: [
      '论文链接优先使用 arXiv、OpenReview、正式会议论文页或作者项目主页。',
      '代码和模型链接只收录作者或项目方公开的版本。',
      '日期以论文首次公开时间为准；会议状态随公开信息更新。',
      '短评均为原创概述，不直接复制论文摘要。',
      'Loop Transformer 核心路线尽量完整；范围更大的广义潜在推理只选代表性工作。',
      'Agent 工作流、重复调用完整模型的 API 流程，以及无关的普通序列循环不在核心范围内。',
    ],
    contributeTitle: '参与贡献', contribute: `欢迎[推荐论文](${repo}/issues/new?template=paper-suggestion.yml)、[反馈错误](${repo}/issues/new?template=correction.yml)，或按照[贡献指南](CONTRIBUTING.md)提交 Pull Request。中英文均可。`,
    browse: '搜索交互式论文目录 ↗', suggest: '推荐论文',
    startTitle: '阅读路线',
    routes: [
      ['理解架构', '[Universal Transformers](https://arxiv.org/abs/1807.03819) → [循环与可编程计算](https://proceedings.mlr.press/v202/giannou23a.html) → [基础与理论](#foundations--theory)。'],
      ['研究推理与扩展', '[Huginn](https://arxiv.org/abs/2502.05171) → [Ouro](https://arxiv.org/abs/2510.25741) → [自适应计算](#adaptive-compute)与[并行循环](https://arxiv.org/abs/2510.24824)。'],
      ['了解相关方法', '[Coconut](https://arxiv.org/abs/2412.06769)、[HRM](https://arxiv.org/abs/2506.21734)、[TRM](https://arxiv.org/abs/2510.04871) → [广义潜在推理](#broader-latent-reasoning)。'],
    ],
    essentialIntro: '从共享深度架构到潜在推理，以下八项工作可作为阅读起点。简称链接至论文原文，排列不代表评价高低。',
    essentialHeaders: ['论文 / 模型', '研究问题'],
    catalogHint: '先选择研究方向，再展开年份；各组按首次公开日期倒序排列。如需搜索标题、作者或模型，请使用[交互式目录](' + site + '/#catalog)。',
    back: '↑ 返回目录',
  },
};

const readingSelection = [
  ['1807.03819', 'Universal Transformers', 'How can one shared Transformer transition replace a fixed stack of layers?', '如何以共享的 Transformer 变换替代固定深度的层栈？'],
  ['2301.13196', 'Programmable Looped Transformers', 'What kinds of iterative algorithms can a looped Transformer execute?', '循环 Transformer 能够执行哪些迭代算法？'],
  ['2502.05171', 'Huginn', 'Can additional recurrent depth improve reasoning without generating more tokens?', '增加循环深度能否在不生成更多 token 的情况下改善推理？'],
  ['2510.25741', 'Ouro', 'How can looped language models be pretrained and their depth allocation learned?', '如何预训练循环语言模型，并学习计算深度的分配？'],
  ['2507.10524', 'Mixture-of-Recursions', 'How can a shared model assign different recursion depths to individual tokens?', '如何在共享模型中为不同 token 分配递归深度？'],
  ['2510.24824', 'Parallel Loop Transformer', 'How can loop execution reduce sequential latency and KV-cache overhead?', '如何组织循环执行，以降低串行延迟与 KV 缓存开销？'],
  ['2412.06769', 'Coconut', 'How can hidden states serve as intermediate thoughts? · Broader latent reasoning', '如何以隐状态表示中间思维？· 广义潜在推理'],
  ['2510.04871', 'Tiny Recursive Model (TRM)', 'Can a tiny recursive network refine structured answers without a Transformer backbone? · Broader latent reasoning', '不依赖 Transformer 主干的微型递归网络能否逐步改进结构化答案？· 广义潜在推理'],
];

const categoryAnchor = (category) => category.toLowerCase().replaceAll('&', '').replaceAll(' ', '-');
const section = (title, anchor) => [`<a id="${anchor}"></a>`, '', `## ${title}`, ''];

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
  const broaderCount = papers.filter((paper) => Number(paper.date.slice(0, 4)) >= 2024 && paper.category === 'Broader Latent Reasoning').length;
  const badge = (alt, src, href) => `<a href="${href}"><img alt="${alt}" src="${src}"></a>`;
  const badges = [
    badge('GitHub stars', 'https://img.shields.io/github/stars/Mrkkew/Awesome-Loop-Transformers?style=flat-square&labelColor=080b18&color=d8ff55', `${repo}/stargazers`),
    badge('Papers in the full catalog', `https://img.shields.io/badge/papers-${papers.length}-5df2ff?style=flat-square&labelColor=080b18`, '#complete-catalog'),
    badge('Data and build', 'https://img.shields.io/github/actions/workflow/status/Mrkkew/Awesome-Loop-Transformers/ci.yml?style=flat-square&label=build&labelColor=080b18', `${repo}/actions/workflows/ci.yml`),
    badge('License: CC BY 4.0', 'https://img.shields.io/badge/license-CC%20BY%204.0-a78bfa?style=flat-square&labelColor=080b18', 'LICENSE'),
    badge('JSON catalog', 'https://img.shields.io/badge/data-JSON-c6ff4a?style=flat-square&labelColor=080b18', 'data/papers.json'),
  ].join('&nbsp;');
  const nav = t.nav.map(([label, anchor]) => `<a href="#${anchor}"><strong>${label}</strong></a>`).join('&nbsp;&nbsp;·&nbsp;&nbsp;');
  const out = [
    '<!-- This file is generated from lib/papers.ts. Edit the data source, then run npm run artifacts. -->',
    '<a id="top"></a>', '',
    `<p align="center">${t.language}</p>`, '',
    `<p align="center"><a href="${site}"><img src="public/readme-hero.png" alt="${lang === 'en' ? 'Awesome Loop Transformers: a shared Transformer block updates a latent state over repeated steps before readout.' : 'Awesome Loop Transformers：共享 Transformer 模块经多次循环更新隐状态，再输出结果。'}" width="100%" /></a></p>`, '',
    '<h1 align="center">Awesome Loop Transformers</h1>', '',
    `<p align="center"><strong>${t.tagline}</strong></p>`, '',
    `<p align="center">${badges}</p>`, '',
    `<p align="center"><a href="${site}/#catalog"><strong>${t.browse}</strong></a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="${repo}/issues/new?template=paper-suggestion.yml">${t.suggest}</a></p>`, '',
    `<p align="center">${nav}</p>`, '',
    `<p align="center"><sub>${papers.length} ${lang === 'en' ? 'papers' : '篇论文'} · ${categories.length} ${lang === 'en' ? 'research topics' : '个研究方向'} · English / 简体中文 · ${t.updated}: ${lastUpdated}</sub></p>`, '',
    '---', '',
    ...section(t.startTitle, 'start-here'),
    ...t.routes.map(([label, route]) => `- **${label}** — ${route}`), '',
    lang === 'en'
      ? '→ [Compare the mechanisms and learn what to measure](docs/reading-guide.md): recurrent depth, continuous thoughts, routing, and parallel loops.'
      : '→ [方法对照与阅读要点](docs/reading-guide.zh-CN.md)：辨析循环深度、连续思维、路由与并行循环，并了解如何比较实验结果。', '',
    ...section(t.essentials, 'essential-reading'), t.essentialIntro, '',
    `| ${t.essentialHeaders.join(' | ')} |`, '| --- | --- |',
    ...readingSelection.map(([id, name, en, zh]) => {
      const paper = papers.find((item) => item.id === id);
      if (!paper) throw new Error(`Reading selection refers to missing paper ${id}`);
      return `| **[${name}](${paper.paper})**<br><sub>${paper.date.slice(0, 4)}</sub> | ${lang === 'en' ? en : zh} |`;
    }), '',
    ...section(t.scopeTitle, 'scope'), t.scope, '',
    lang === 'en'
      ? `Of the **${recentCount} works from 2024 onward**, **${recentCount - broaderCount}** belong to the core track and **${broaderCount}** to broader latent reasoning. Earlier foundations are also included.`
      : `2024 年以来共收录 **${recentCount}** 项工作，其中核心方向 **${recentCount - broaderCount}** 项、广义潜在推理 **${broaderCount}** 项；目录同时保留更早的基础研究。`, '',
    ...section(t.catalog, 'complete-catalog'), t.catalogHint, '',
    `| ${t.trackHeader} | ${t.countHeader} | ${t.focusHeader} |`, '| --- | :---: | --- |',
    ...t.map.map(([name, desc], index) => {
      const category = categories[index];
      const count = papers.filter((paper) => paper.category === category).length;
      return `| **[${name}](#${categoryAnchor(category)})** | ${count} | ${desc} |`;
    }), '',
  ];

  for (const category of categories) {
    const group = papers.filter((paper) => paper.category === category).sort((a, b) => b.date.localeCompare(a.date));
    out.push(`<a id="${categoryAnchor(category)}"></a>`, '', `### ${lang === 'en' ? category : categoryZh[category]}`, '');
    const byYear = Map.groupBy(group, (paper) => paper.date.slice(0, 4));
    for (const year of [...byYear.keys()].sort().reverse()) {
      const yearCount = byYear.get(year).length;
      const yearUnit = lang === 'en' ? (yearCount === 1 ? 'paper' : 'papers') : '篇';
      out.push('<details>', `<summary><strong>${year}</strong> · ${yearCount} ${yearUnit}</summary>`, '');
      for (const paper of byYear.get(year)) {
        out.push(`- **[${paper.title}](${paper.paper})**<br>`, `  ${paper.authors} · *${paper.venue}*<br>`, `  ${paper.summary[lang]}<br>`, `  ${links(paper, lang)}`, '');
      }
      out.push('</details>', '');
    }
    out.push(`[${t.back}](#complete-catalog)`, '');
  }

  const dataLinks = lang === 'en'
    ? 'Data source: [lib/papers.ts](lib/papers.ts) · Machine-readable export: [data/papers.json](data/papers.json) · [Citation](CITATION.cff)'
    : '数据源：[lib/papers.ts](lib/papers.ts) · 机器可读数据：[data/papers.json](data/papers.json) · [引用信息](CITATION.cff)';
  out.push(`## ${t.methodTitle}`, '', ...t.method.map((item) => `- ${item}`), '', ...section(t.contributeTitle, 'contributing'), t.contribute, '', '---', '', `CC BY 4.0 · Maintained by [Yulin Li](${repo}) · ${dataLinks}`, '');
  return out.join('\n');
}

writeFileSync('README.md', render('en'));
writeFileSync('README.zh-CN.md', render('zh'));
