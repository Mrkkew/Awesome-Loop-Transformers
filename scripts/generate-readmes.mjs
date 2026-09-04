import { writeFileSync } from 'node:fs';
import { categories, categoryZh, lastUpdated, papers } from '../lib/papers.ts';

const repo = 'https://github.com/Mrkkew/Awesome-Loop-Transformers';
const site = 'https://awesome-loop-transformers.bright-haven-2369.chatgpt.site';

const intro = {
  en: {
    language: '<strong>English</strong>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="README.zh-CN.md">简体中文</a>',
    tagline: 'A survey-style atlas of looped and recurrent-depth Transformers, with a broader track for latent reasoning.',
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
    tagline: '围绕 Loop Transformer 整理的一份双语研究图谱：从循环与递归深度，到潜在推理和测试时计算。',
    overviewTitle: '一览',
    overviewHeaders: ['2024 年至今', '核心循环路线', '广义潜在路线', '完整目录'],
    overviewUnits: ['篇近期工作', '篇核心工作', '篇代表性工作', '篇（含基础工作）'],
    nav: [['收录范围', '收录范围'], ['综述分类', '综述分类'], ['核心必读', '核心必读'], ['完整目录', '完整目录'], ['参与贡献', '参与贡献']],
    trackHeader: '方向', countHeader: '数量', focusHeader: '关注问题',
    scopeTitle: '收录范围',
    scope: '主目录关注的是这样一类模型：在一次前向计算中，重复使用同一个 Transformer 层、模块或层栈；同时也收录直接讨论它们的理论、训练、系统和应用工作。**广义潜在推理** 单独成章，其中包括 Coconut、HRM、TRM、隐式 CoT 等代表性工作。它们未必属于 Loop Transformer，但都让模型在隐状态中完成多步计算。这个方向范围很大，因此这里只选有代表性的研究。',
    mapTitle: '综述分类',
    map: [
      ['基础与理论', '表达能力、可编程性，以及长度与深度泛化。'],
      ['架构与扩展', '参数共享、循环核心、MoE、多分辨率设计与扩展规律。'],
      ['潜在推理', '测试时深度、隐状态中的多步计算，以及潜在 CoT。'],
      ['自适应计算', 'Token 级路由、学习式停止、提前退出与预算条件深度。'],
      ['训练与机制分析', '优化、稳定性、收敛、不动点与过度思考。'],
      ['系统与应用', '推理延迟、KV 内存、并行循环，以及代码、多模态和机器人应用。'],
      ['广义潜在推理', '连续思维、隐式 CoT、层次循环、HRM 与 TRM。'],
    ],
    essentials: '核心必读', catalog: '完整目录', links: '链接', updated: '最近调研更新',
    methodTitle: '整理方式',
    method: [
      '论文链接优先使用 arXiv、OpenReview、正式会议论文页或作者项目主页。',
      '代码和模型链接只收录作者或项目方公开的版本。',
      '日期以论文首次公开时间为准；会议状态随公开信息更新。',
      '短评均为原创概述，不直接复制论文摘要。',
      'Loop Transformer 核心路线尽量完整；范围更大的广义潜在推理只选代表性工作。',
      'Agent 工作流、重复调用完整模型的 API 流程，以及无关的普通序列循环不在核心范围内。',
    ],
    contributeTitle: '一起完善这份图谱', contribute: '发现遗漏或错误，欢迎提交 Pull Request。具体格式见 [CONTRIBUTING.md](CONTRIBUTING.md)。',
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
    badge('Star this atlas', 'https://img.shields.io/github/stars/Mrkkew/Awesome-Loop-Transformers?style=flat-square&label=star%20this%20atlas&labelColor=080b18&color=d8ff55', repo),
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
    `<p align="center"><a href="${site}"><img src="public/og.png" alt="${lang === 'en' ? 'Awesome Loop Transformers — a bilingual research atlas' : 'Awesome Loop Transformers 双语研究图谱'}" width="100%" /></a></p>`, '',
    `<p align="center"><strong>${t.tagline}</strong></p>`, '',
    `<p align="center">${badges}</p>`, '',
    `<p align="center">${nav}</p>`, '',
    `## ${t.overviewTitle}`, '',
    `| ${t.overviewHeaders.join(' | ')} |`,
    `| ${t.overviewHeaders.map(() => ':---:').join(' | ')} |`,
    `| **${recentCount}** ${t.overviewUnits[0]} | **${coreCount}** ${t.overviewUnits[1]} | **${broaderCount}** ${t.overviewUnits[2]} | **${papers.length}** ${t.overviewUnits[3]} |`, '',
    `<p align="center"><sub>${t.updated}: <strong>${lastUpdated}</strong> · ${lang === 'en' ? 'Primary-source links and bilingual editorial summaries' : '论文、代码与项目主页一站直达'}</sub></p>`, '',
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
      out.push('<details>', `<summary><strong>${year}</strong> · ${yearCount} ${yearUnit}</summary>`, '');
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
