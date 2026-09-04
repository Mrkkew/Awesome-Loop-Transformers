'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { categories, categoryZh, lastUpdated, papers, type Category, type Lang } from '../lib/papers';

const githubUrl = 'https://github.com/Mrkkew/Awesome-Loop-Transformers';

const copy = {
  en: {
    atlas: 'OPEN-SOURCE · BILINGUAL · CONTINUOUSLY UPDATED',
    headlineA: 'The research map', headlineB: 'for models that', headlineC: 'think in loops.',
    dek: 'A clear path through looped and recurrent-depth Transformers, latent reasoning, adaptive compute, and test-time scaling.',
    explore: 'Explore 142 works', star: 'Star on GitHub', proof: 'Built for researchers, engineers, and anyone tracking the next axis of model scaling.',
    papers: 'works catalogued', recent: 'from 2024 onward', tracks: 'research tracks', languages: 'languages',
    visualTitle: 'One core. More depth.', visualCaption: 'The same learned block refines a latent state across repeated passes.',
    input: 'Input tokens', shared: 'Shared core', refine: 'Refine × N', output: 'Output',
    thesis: 'THE FIELD, IN ONE SENTENCE',
    thesisText: 'Looped models separate parameter depth from computation depth: one compact module can keep refining a latent state, while routing, halting, and stability determine when more compute becomes better reasoning.',
    route: 'A FIVE-STEP READING ROUTE', routeText: 'Understand the field before diving into the full catalog.',
    catalog: 'RESEARCH CATALOG', catalogText: 'Find the paper that answers your question.',
    all: 'All topics', search: 'Search titles, models, authors, venues…', recentOnly: '2024—present', allYears: 'All years',
    results: 'results', paper: 'Paper', code: 'Code', project: 'Project', key: 'Key work',
    broaderTitle: 'A wider view of latent reasoning',
    broaderText: 'Coconut, HRM, TRM, implicit CoT, and related methods do not all use a looped Transformer. They appear in a separate, clearly labeled track because they pursue the same goal: multi-step computation inside learned latent states.',
    method: 'CURATION STANDARD',
    methodText: 'A research index should help you judge relevance—not just collect links.',
    methodDetail: 'The catalog separates the recurrent-depth Transformer core from representative broader latent-reasoning work, records first-public dates, and links to primary sources.',
    include: 'Included', includeItems: ['Weight-tied or recurrent-depth Transformer blocks', 'Learned halting, routing, stability, and loop systems', 'Direct analyses and applications of looped models', 'Closely related latent-state reasoning research'],
    exclude: 'Out of scope', excludeItems: ['Agent loops or repeated API calls', 'Ordinary RNNs without a latent-reasoning connection', 'Entries supported only by secondary summaries', 'Unverifiable or mismatched repositories'],
    updated: 'Research snapshot', contribute: 'Help map the field.', contributeText: 'Star the repository to follow new work, or suggest a paper we should add.', suggest: 'Suggest a paper',
  },
  zh: {
    atlas: '开源 · 双语 · 持续更新',
    headlineA: '循环模型研究，', headlineB: '从这里', headlineC: '开始。',
    dek: '系统梳理循环与递归深度 Transformer、潜在推理、自适应计算和测试时扩展研究。',
    explore: '浏览 142 项工作', star: '前往 GitHub 点 Star', proof: '为研究者、工程师和关注新型计算扩展方式的读者而整理。',
    papers: '项收录工作', recent: '项来自 2024 年以后', tracks: '个研究方向', languages: '种语言',
    visualTitle: '一个核心，更深计算。', visualCaption: '共享模块在多次循环中持续更新隐状态。',
    input: '输入 token', shared: '共享核心', refine: '循环细化 × N', output: '输出',
    thesis: '一句话理解这个领域',
    thesisText: '循环模型将参数深度与计算深度分离：同一模块可以反复更新隐状态，而路由、停止策略与训练稳定性共同决定额外计算能否转化为更好的推理。',
    route: '五步阅读路线', routeText: '先建立研究脉络，再进入完整论文目录。',
    catalog: '论文目录', catalogText: '从问题出发，找到真正相关的论文。',
    all: '全部主题', search: '搜索标题、模型、作者或会议……', recentOnly: '2024 至今', allYears: '全部年份',
    results: '项结果', paper: '论文', code: '代码', project: '主页', key: '重点工作',
    broaderTitle: '从更广的视角看潜在推理',
    broaderText: 'Coconut、HRM、TRM、隐式 CoT 等方法并不都采用 Loop Transformer，但都关注在隐状态中完成多步计算。因此，本图谱将其作为独立板块，选取具有代表性的研究。',
    method: '收录原则',
    methodText: '研究目录不应只是链接集合，也应帮助读者判断工作的相关性。',
    methodDetail: '目录区分循环深度 Transformer 核心研究与广义潜在推理代表工作，记录首次公开日期，并优先链接论文、代码和项目的官方页面。',
    include: '收录范围', includeItems: ['权重共享或循环深度 Transformer', '停止、路由、稳定性与循环系统研究', '直接分析或应用循环模型的工作', '与主题紧密相关的隐空间推理研究'],
    exclude: '不在范围', excludeItems: ['Agent 循环或重复 API 调用', '与潜在推理无关的普通 RNN', '只有二手介绍、缺少论文原文的工作', '与论文不匹配的代码仓库'],
    updated: '最近更新', contribute: '一起完善这份研究图谱。', contributeText: '在 GitHub 上 Star 以关注后续更新，也欢迎补充我们遗漏的论文。', suggest: '推荐论文',
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
            <a className="secondary-button" href="#catalog">{t.explore}<span>↓</span></a>
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
        <p className="eyebrow">{t.thesis}</p><p className="thesis-copy">{t.thesisText}</p>
        <div className="axis-grid">
          <div><span>01</span><h3>{lang === 'en' ? 'Parameter axis' : '参数维度'}</h3><p>{lang === 'en' ? 'How much unique capacity is stored?' : '模型存储了多少独立参数容量？'}</p></div>
          <div><span>02</span><h3>{lang === 'en' ? 'Depth axis' : '深度维度'}</h3><p>{lang === 'en' ? 'How many transformations are applied?' : '隐状态经历了多少次变换？'}</p></div>
          <div><span>03</span><h3>{lang === 'en' ? 'Token axis' : 'Token 维度'}</h3><p>{lang === 'en' ? 'How much reasoning is externalized as text?' : '多少推理过程被外化为文本？'}</p></div>
        </div>
      </section>

      <section className="route-section" id="route">
        <div className="section-heading"><div><p className="eyebrow">{t.route}</p><h2>{t.routeText}</h2></div><span className="section-number">01—05</span></div>
        <div className="route-list">{route.map((item) => <div className="route-item" key={item.n}><span>{item.n}</span><h3>{item[lang]}</h3><p>{lang === 'en' ? item.detailEn : item.detailZh}</p><b>↘</b></div>)}</div>
      </section>

      <section className="broader-note">
        <div className="broader-number">+26</div><div><p className="eyebrow">{lang === 'en' ? 'EXTENDED SCOPE' : '扩展范围'}</p><h2>{t.broaderTitle}</h2><p>{t.broaderText}</p></div>
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
