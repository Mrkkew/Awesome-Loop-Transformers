import { writeFileSync } from 'node:fs';
import { categories, categoryZh, lastUpdated, papers } from '../lib/papers.ts';

const repo = 'https://github.com/Mrkkew/Awesome-Loop-Transformers';

const intro = {
  en: {
    language: '<strong>English</strong>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="README.zh-CN.md">简体中文</a>',
    tagline: 'A verified, survey-style atlas of looped and recurrent-depth Transformers, with a broader track for latent reasoning.',
    overviewTitle: 'At a glance',
    overviewHeaders: ['2024—present', 'Core loop track', 'Broader latent track', 'Full catalog'],
    overviewUnits: ['recent works', 'core works', 'selected works', 'with foundations'],
    nav: [['Scope', 'what-this-list-covers'], ['Survey map', 'survey-map'], ['Essential reading', 'essential-reading'], ['Full catalog', 'complete-catalog'], ['Contribute', 'contributing']],
    trackHeader: 'Track', countHeader: 'Works', focusHeader: 'What it covers',
    scopeTitle: 'What this list covers',
    scope: 'The core catalog focuses on models that reuse a learned Transformer layer, block, or stack through depth within one forward process, plus direct theory, analysis, systems work, and applications of those models. It is maintained as a comprehensive snapshot through the date shown above. A separately labeled **Broader Latent Reasoning** track covers representative work such as Coconut, HRM, TRM, and implicit CoT that shares the goal of multi-step computation in learned hidden states but does not necessarily use a looped Transformer; this broader track is selective rather than exhaustive.',
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
      'The core looped/recursive-Transformer track is searched for comprehensive coverage; the much larger broader latent-reasoning track is intentionally representative.',
      'Agent loops, repeated full-model API calls, and ordinary sequence recurrence without a direct latent-reasoning connection are out of core scope.',
    ],
    contributeTitle: 'Contributing', contribute: 'Corrections and new papers are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) and include a primary-source link plus evidence of the loop or latent-reasoning mechanism.',
  },
  zh: {
    language: '<strong>简体中文</strong>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="README.md">English</a>',
    tagline: '经过链接核验、按综述方式组织的循环与递归深度 Transformer 图谱，并扩展收录广义潜在推理工作。',
    overviewTitle: '一览',
    overviewHeaders: ['2024 年至今', '核心循环路线', '广义潜在路线', '完整目录'],
    overviewUnits: ['篇近期工作', '篇核心工作', '篇代表性工作', '篇（含基础工作）'],
    nav: [['收录范围', '收录范围'], ['综述分类', '综述分类'], ['核心必读', '核心必读'], ['完整目录', '完整目录'], ['参与贡献', '参与贡献']],
    trackHeader: '方向', countHeader: '数量', focusHeader: '关注问题',
    scopeTitle: '收录范围',
    scope: '主目录聚焦在一次前向过程中沿深度重复使用 Transformer 层、模块或层栈的模型，以及直接研究这些模型的理论、机制、系统与应用工作，并按上方快照日期尽可能完整维护。另设明确标注的 **广义潜在推理** 板块，代表性收录 Coconut、HRM、TRM、隐式 CoT 等具有共同目标的工作：它们都在学习到的隐状态中进行多步计算，但不一定采用循环 Transformer；由于该领域范围极广，这一板块是精选而非穷举。',
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
      '循环/递归 Transformer 核心路线按完整覆盖目标检索；规模更大的广义潜在推理路线则有意采用代表性精选。',
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
  const broaderCount = papers.filter((paper) => Number(paper.date.slice(0, 4)) >= 2024 && paper.category === 'Broader Latent Reasoning').length;
  const coreCount = recentCount - broaderCount;
  const badge = (alt, src, href) => `<a href="${href}"><img alt="${alt}" src="${src}"></a>`;
  const badges = [
    badge('Curated papers', `https://img.shields.io/badge/curated-${recentCount}%20works-5df2ff?style=flat-square&labelColor=080b18`, repo),
    badge('Link check', 'https://img.shields.io/github/actions/workflow/status/Mrkkew/Awesome-Loop-Transformers/links.yml?style=flat-square&label=links&labelColor=080b18', `${repo}/actions/workflows/links.yml`),
    badge('License: CC BY 4.0', 'https://img.shields.io/badge/license-CC%20BY%204.0-a78bfa?style=flat-square&labelColor=080b18', 'LICENSE'),
    badge('JSON catalog', 'https://img.shields.io/badge/data-JSON-c6ff4a?style=flat-square&labelColor=080b18', 'data/papers.json'),
  ].join('&nbsp;');
  const nav = t.nav.map(([label, anchor]) => `<a href="#${anchor}"><strong>${label}</strong></a>`).join('&nbsp;&nbsp;·&nbsp;&nbsp;');
  const out = [
    '<!-- This file is generated from lib/papers.ts. Edit the data source, then run npm run artifacts. -->',
    '<h1 align="center">Awesome Loop Transformers</h1>', '',
    `<p align="center">${t.language}</p>`, '',
    `<p align="center"><img src="public/og.png" alt="${lang === 'en' ? 'Awesome Loop Transformers — a bilingual research atlas' : 'Awesome Loop Transformers 双语研究图谱'}" width="100%" /></p>`, '',
    `<p align="center"><strong>${t.tagline}</strong></p>`, '',
    `<p align="center">${badges}</p>`, '',
    `<p align="center">${nav}</p>`, '',
    `## ${t.overviewTitle}`, '',
    `| ${t.overviewHeaders.join(' | ')} |`,
    `| ${t.overviewHeaders.map(() => ':---:').join(' | ')} |`,
    `| **${recentCount}** ${t.overviewUnits[0]} | **${coreCount}** ${t.overviewUnits[1]} | **${broaderCount}** ${t.overviewUnits[2]} | **${papers.length}** ${t.overviewUnits[3]} |`, '',
    `<p align="center"><sub>${t.updated}: <strong>${lastUpdated}</strong> · ${lang === 'en' ? 'Primary-source links and bilingual editorial summaries' : '原始来源链接与中英双语原创短评'}</sub></p>`, '',
    '', `## ${t.scopeTitle}`, '', t.scope, '',
    `## ${t.mapTitle}`, '',
    `| ${t.trackHeader} | ${t.countHeader} | ${t.focusHeader} |`, '| --- | :---: | --- |',
    ...t.map.map(([name, desc], index) => {
      const category = categories[index];
      const count = papers.filter((paper) => paper.category === category).length;
      return `| **[${name}](#${lang === 'en' ? category.toLowerCase().replaceAll('&', '').replaceAll(' ', '-') : name})** | ${count} | ${desc} |`;
    }), '',
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
      out.push(`<details${year === lastUpdated.slice(0, 4) ? ' open' : ''}>`, `<summary><strong>${year}</strong> · ${yearCount} ${yearUnit}</summary>`, '');
      for (const paper of byYear.get(year)) {
        out.push(`- **${paper.title}** — ${paper.authors}. *${paper.venue}*.<br>`, `  ${paper.summary[lang]}<br>`, `  ${links(paper, lang)}`, '');
      }
      out.push('</details>', '');
    }
  }

  const dataLinks = lang === 'en'
    ? 'Data source: [lib/papers.ts](lib/papers.ts) · Machine-readable export: [data/papers.json](data/papers.json) · [Citation](CITATION.cff)'
    : '数据源：[lib/papers.ts](lib/papers.ts) · 机器可读数据：[data/papers.json](data/papers.json) · [引用信息](CITATION.cff)';
  out.push(`## ${t.methodTitle}`, '', ...t.method.map((item) => `- ${item}`), '', `## ${t.contributeTitle}`, '', t.contribute, '', '---', '', `CC BY 4.0 · Maintained by [Mrkkew](${repo}) · ${dataLinks}`, '');
  return out.join('\n');
}

writeFileSync('README.md', render('en'));
writeFileSync('README.zh-CN.md', render('zh'));
