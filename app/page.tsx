'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { categories, categoryZh, lastUpdated, papers, type Category, type Lang } from '../lib/papers';

const githubUrl = 'https://github.com/Mrkkew/Awesome-Loop-Transformers';

const copy = {
  en: {
    atlas: 'OPEN-SOURCE · BILINGUAL · CONTINUOUSLY UPDATED',
    headlineA: 'The research map', headlineB: 'for models that', headlineC: 'think in loops.',
    dek: 'A bilingual survey of looped and recurrent-depth Transformers, with a separate track for related latent-reasoning methods.',
    star: 'Star on GitHub', proof: 'Primary papers, official code, and concise original summaries in one place.',
    papers: 'works catalogued', recent: 'from 2024 onward', tracks: 'research tracks', languages: 'languages',
    visualTitle: 'Repeated computation, shared parameters.', visualCaption: 'The same learned block refines a latent state across repeated passes.',
    input: 'Input tokens', shared: 'Shared core', refine: 'Refine × N', output: 'Output',
    concept: 'CORE MECHANISM', conceptTitle: 'Reuse the weights. Extend the computation.',
    conceptText: 'A looped Transformer applies a shared block repeatedly through depth. Each pass updates the latent state, while routing or halting determines how much computation an input receives.',
    conceptSteps: [
      ['01', 'Share', 'Reuse one learned block across depth.'],
      ['02', 'Refine', 'Update the latent state on every pass.'],
      ['03', 'Adapt', 'Route or halt according to the input.'],
    ],
    route: 'A FIVE-STEP READING ROUTE', routeText: 'Understand the field before diving into the full catalog.',
    catalog: 'RESEARCH CATALOG', catalogText: 'Search the literature by question, topic, or model.',
    all: 'All topics', search: 'Search titles, models, authors, venues…', recentOnly: '2024—present', allYears: 'All years',
    results: 'results', paper: 'Paper', code: 'Code', project: 'Project', key: 'Key work',
    broaderTitle: 'Why include broader latent reasoning?',
    broaderText: 'Coconut, HRM, TRM, implicit CoT, and related methods do not necessarily use a looped Transformer, but they also extend reasoning through iterative computation in latent states. To keep the scope clear, representative work is collected in a separate “Broader Latent Reasoning” track.',
    method: 'CURATION STANDARD',
    methodText: 'How the catalog is organized.',
    methodDetail: 'The core looped-Transformer track is maintained for broad coverage; the larger latent-reasoning field is represented selectively. Dates refer to first public release, and links prioritize papers, official code, and project pages.',
    include: 'Included', includeItems: ['Weight-tied or recurrent-depth Transformer blocks', 'Learned halting, routing, stability, and loop systems', 'Direct analyses and applications of looped models', 'Closely related latent-state reasoning research'],
    exclude: 'Out of scope', excludeItems: ['Agent loops or repeated API calls', 'Ordinary RNNs without a latent-reasoning connection', 'Entries supported only by secondary summaries', 'Unverifiable or mismatched repositories'],
    updated: 'Research snapshot', contribute: 'Found something missing?', contributeText: 'Star the repository to follow updates, or open an issue with a primary-source link and a short note on the method.', suggest: 'Suggest a paper',
  },
  zh: {
    atlas: '开源 · 双语 · 持续更新',
    headlineA: '循环模型研究，', headlineB: '从这里', headlineC: '开始。',
    dek: '以循环与递归深度 Transformer 为核心，并单列相关的潜在推理研究。',
    star: '前往 GitHub 点 Star', proof: '聚合论文原文、官方代码与简明的中英文概述。',
    papers: '项收录工作', recent: '项来自 2024 年以后', tracks: '个研究方向', languages: '种语言',
    visualTitle: '共享参数，重复计算。', visualCaption: '同一学习模块在多次循环中持续更新隐状态。',
    input: '输入 token', shared: '共享核心', refine: '循环细化 × N', output: '输出',
    concept: '核心机制', conceptTitle: '复用同一组参数，扩展计算深度。',
    conceptText: 'Loop Transformer 在深度方向反复应用共享模块。每次循环都会更新隐状态，而路由或停止机制决定不同输入需要多少计算。',
    conceptSteps: [
      ['01', '共享', '在不同深度复用同一个学习模块。'],
      ['02', '细化', '每次循环继续更新隐状态。'],
      ['03', '调节', '根据输入选择路由或停止。'],
    ],
    route: '五步阅读路线', routeText: '先建立研究脉络，再进入完整论文目录。',
    catalog: '论文目录', catalogText: '按问题、主题或模型查找相关工作。',
    all: '全部主题', search: '搜索标题、模型、作者或会议……', recentOnly: '2024 至今', allYears: '全部年份',
    results: '项结果', paper: '论文', code: '代码', project: '主页', key: '重点工作',
    broaderTitle: '为什么收录广义潜在推理？',
    broaderText: 'Coconut、HRM、TRM、隐式 CoT 等方法不一定采用 Loop Transformer，但同样通过隐状态中的迭代计算扩展推理过程。为避免范围混淆，相关工作单列为“广义潜在推理”，仅收录具有代表性的研究。',
    method: '收录原则',
    methodText: '这份目录如何组织。',
    methodDetail: '核心方向尽量覆盖 Loop Transformer 的主要工作；范围更广的潜在推理则选取代表性研究。日期以首次公开时间为准，链接优先指向论文、代码或项目的官方页面。',
    include: '收录范围', includeItems: ['权重共享或循环深度 Transformer', '停止、路由、稳定性与循环系统研究', '直接分析或应用循环模型的工作', '与主题紧密相关的隐空间推理研究'],
    exclude: '不在范围', excludeItems: ['Agent 循环或重复 API 调用', '与潜在推理无关的普通 RNN', '只有二手介绍、缺少论文原文的工作', '与论文不匹配的代码仓库'],
    updated: '最近更新', contribute: '发现遗漏或错误？', contributeText: '在 GitHub 上 Star 以关注更新，也欢迎通过 Issue 提交论文原始链接和简要说明。', suggest: '推荐论文',
  },
};

const route = [
  { n: '01', en: 'Why loop?', zh: '为什么循环？', detailEn: 'Universal Transformers and programmable computation', detailZh: 'Universal Transformer 与可编程计算' },
  { n: '02', en: 'Can it learn algorithms?', zh: '能否学会算法？', detailEn: 'In-context optimization and length extrapolation', detailZh: '上下文优化与长度外推' },
  { n: '03', en: 'Can it scale?', zh: '能否规模化？', detailEn: 'Huginn, Ouro, MoE, and scaling laws', detailZh: 'Huginn、Ouro、MoE 与扩展规律' },
  { n: '04', en: 'When should it stop?', zh: '何时停止？', detailEn: 'Routing, halting, and elastic compute', detailZh: '路由、停止与弹性计算' },
  { n: '05', en: 'What can go wrong?', zh: '哪里会失效？', detailEn: 'Instability, overthinking, latency, and memory', detailZh: '不稳定、过度思考、延迟与内存' },
];

export default function Home() {
  const [lang, setLang] = useState<Lang>('en');
  const [category, setCategory] = useState<'All' | Category>('All');
  const [query, setQuery] = useState('');
  const [recentOnly, setRecentOnly] = useState(true);
  const t = copy[lang];

  const recentCount = papers.filter((paper) => Number(paper.date.slice(0, 4)) >= 2024).length;
  const broaderCount = papers.filter((paper) => paper.category === 'Broader Latent Reasoning').length;
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return papers
      .filter((item) => category === 'All' || item.category === category)
      .filter((item) => !recentOnly || Number(item.date.slice(0, 4)) >= 2024)
      .filter((item) => !normalized || [item.title, item.authors, item.venue, item.category, item.summary.en, item.summary.zh, ...item.tags].join(' ').toLowerCase().includes(normalized))
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [category, query, recentOnly]);

  return (
    <main>
      <nav className="nav-shell">
        <a className="wordmark" href="#top"><span className="loop-mark">∞</span><span>Awesome Loop Transformers</span></a>
        <div className="nav-links"><a href="#route">{lang === 'en' ? 'Reading route' : '阅读路线'}</a><a href="#catalog">{lang === 'en' ? 'Catalog' : '论文目录'}</a><a href="#method">{lang === 'en' ? 'Method' : '收录原则'}</a></div>
        <div className="nav-actions">
          <button className="language-pill" onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} aria-label="Switch language">{lang === 'en' ? '中文' : 'EN'}</button>
          <a className="github-link" href={githubUrl} target="_blank" rel="noreferrer">★ GitHub</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" />{t.atlas}</p>
          <h1>{t.headlineA}<br /><span>{t.headlineB}</span><br /><em>{t.headlineC}</em></h1>
          <p className="dek">{t.dek}</p>
          <div className="hero-actions">
            <a className="star-button" href={githubUrl} target="_blank" rel="noreferrer"><span>★</span>{t.star}<b>↗</b></a>
            <a className="secondary-button" href="#catalog">{lang === 'en' ? `Explore ${papers.length} works` : `浏览 ${papers.length} 项工作`}<span>↓</span></a>
          </div>
          <p className="hero-proof">{t.proof}</p>
        </div>

        <div className="hero-visual">
          <div className="visual-heading"><div><span>LOOP / 01</span><h2>{t.visualTitle}</h2></div><p>{t.visualCaption}</p></div>
          <div className="visual-frame">
            <Image src="/loop-architecture.jpg" alt={lang === 'en' ? 'A shared neural block repeatedly refining a latent state' : '共享神经模块在循环中反复更新隐状态'} width={1536} height={1024} priority />
            <div className="visual-glow" />
          </div>
          <div className="visual-legend"><span><b>01</b>{t.input}</span><span><b>02</b>{t.shared}</span><span><b>03</b>{t.refine}</span><span><b>04</b>{t.output}</span></div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Catalog statistics">
        <div><strong>{papers.length}</strong><span>{t.papers}</span></div>
        <div><strong>{recentCount}</strong><span>{t.recent}</span></div>
        <div><strong>{categories.length}</strong><span>{t.tracks}</span></div>
        <div><strong>2</strong><span>{t.languages}</span></div>
        <a href={githubUrl} target="_blank" rel="noreferrer"><span>{lang === 'en' ? 'Follow the project' : '关注项目更新'}</span><strong>GitHub ↗</strong></a>
      </section>

      <section className="thesis-section">
        <div className="thesis-intro"><p className="eyebrow">{t.concept}</p><h2>{t.conceptTitle}</h2><p>{t.conceptText}</p></div>
        <div className="concept-flow">
          {t.conceptSteps.map(([number, title, detail], index) => <div className="concept-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{detail}</p></div>{index < t.conceptSteps.length - 1 && <b>→</b>}</div>)}
        </div>
      </section>

      <section className="route-section" id="route">
        <div className="section-heading"><div><p className="eyebrow">{t.route}</p><h2>{t.routeText}</h2></div><span className="section-number">01—05</span></div>
        <div className="route-list">{route.map((item) => <div className="route-item" key={item.n}><span>{item.n}</span><h3>{item[lang]}</h3><p>{lang === 'en' ? item.detailEn : item.detailZh}</p><b>↘</b></div>)}</div>
      </section>

      <section className="broader-note">
        <div className="broader-number">+{broaderCount}</div><div><p className="eyebrow">{lang === 'en' ? 'EXTENDED SCOPE' : '扩展范围'}</p><h2>{t.broaderTitle}</h2><p>{t.broaderText}</p></div>
      </section>

      <section className="catalog-section" id="catalog">
        <div className="section-heading catalog-heading"><div><p className="eyebrow">{t.catalog}</p><h2>{t.catalogText}</h2></div><span className="result-count">{filtered.length} {t.results}</span></div>
        <div className="catalog-tools">
          <label className="search-box"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.search} aria-label={t.search} /></label>
          <button className={`year-toggle ${recentOnly ? 'active' : ''}`} onClick={() => setRecentOnly(!recentOnly)}>{recentOnly ? t.recentOnly : t.allYears}</button>
        </div>
        <div className="category-tabs">
          <button className={category === 'All' ? 'active' : ''} onClick={() => setCategory('All')}>{t.all}<span>{recentOnly ? recentCount : papers.length}</span></button>
          {categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{lang === 'en' ? item : categoryZh[item]}<span>{papers.filter((paper) => paper.category === item && (!recentOnly || Number(paper.date.slice(0,4)) >= 2024)).length}</span></button>)}
        </div>
        <div className="paper-list">
          {filtered.map((item, index) => (
            <article className="paper-row" key={item.id}>
              <div className="paper-index">{String(index + 1).padStart(2, '0')}</div>
              <div className="paper-main">
                <div className="paper-meta"><time>{item.date}</time><span>{item.venue}</span>{item.foundation && <b>{t.key}</b>}<i>{lang === 'en' ? item.category : categoryZh[item.category]}</i></div>
                <h3><a href={item.paper} target="_blank" rel="noreferrer">{item.title}</a></h3>
                <p className="authors">{item.authors}</p><p className="summary">{item.summary[lang]}</p>
                <div className="tag-list">{item.tags.filter(tag => tag !== 'broader-scope').map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className="paper-links"><a href={item.paper} target="_blank" rel="noreferrer">{t.paper} ↗</a>{item.code && <a href={item.code} target="_blank" rel="noreferrer">{t.code} ↗</a>}{item.project && <a href={item.project} target="_blank" rel="noreferrer">{t.project} ↗</a>}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="method-section" id="method">
        <div className="method-intro"><p className="eyebrow">{t.method}</p><h2>{t.methodText}</h2><p>{t.methodDetail}</p><p className="snapshot">{t.updated}: {lastUpdated}</p></div>
        <div className="method-columns"><div><h3>✓ {t.include}</h3>{t.includeItems.map(item => <p key={item}>{item}</p>)}</div><div><h3>× {t.exclude}</h3>{t.excludeItems.map(item => <p key={item}>{item}</p>)}</div></div>
      </section>

      <section className="contribute-section">
        <div><p className="eyebrow">OPEN RESEARCH · LIVING INDEX</p><h2>{t.contribute}</h2><p>{t.contributeText}</p></div>
        <div className="contribute-actions"><a className="star-button light" href={githubUrl} target="_blank" rel="noreferrer">★ {t.star}</a><a className="text-link" href={`${githubUrl}/issues/1`} target="_blank" rel="noreferrer">{t.suggest} ↗</a></div>
      </section>
      <footer><a className="wordmark" href="#top"><span className="loop-mark">∞</span><span>Awesome Loop Transformers</span></a><p>{lang === 'en' ? 'A bilingual map of recurrent depth and latent reasoning.' : '循环深度与潜在推理双语研究图谱。'}</p><a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a></footer>
    </main>
  );
}
