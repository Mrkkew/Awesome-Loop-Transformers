'use client';

import { useMemo, useState } from 'react';
import { categories, categoryZh, lastUpdated, papers, type Category, type Lang } from '../lib/papers';

const copy = {
  en: {
    atlas: 'A bilingual research atlas · 2024—present',
    headlineA: 'Models that think', headlineB: 'in depth,', headlineC: 'not only in tokens.',
    dek: 'A survey-style map of looped and recurrent-depth Transformers—plus the broader latent-reasoning ideas shaping this new compute axis.',
    explore: 'Explore the literature', verified: 'Papers, code, and project pages in one place.',
    papers: 'curated works', sources: 'primary sources', languages: 'languages',
    thesis: 'The field in one sentence',
    thesisText: 'Looped models decouple parameter depth from computation depth: a compact learned module can be reused to refine a latent state, while routing, halting, and stability decide whether extra computation actually helps.',
    route: 'A five-part reading route', routeText: 'Read the field as a sequence of questions, not a pile of links.',
    catalog: 'Research catalog', catalogText: 'Search across titles, authors, venues, tags, and original bilingual notes.',
    all: 'All topics', search: 'Search papers, models, authors…', recent: '2024—present only', allYears: 'All years',
    results: 'results', paper: 'Paper', code: 'Code', project: 'Project', key: 'Key work',
    broaderTitle: 'Why include broader latent reasoning?',
    broaderText: 'Coconut, HRM, TRM, implicit CoT, and related methods do not all use a looped Transformer. Representative works are included in a clearly labeled broader track because they pursue the same central goal: multi-step computation inside learned latent states rather than only through decoded text. This fast-growing broader field is curated selectively, while the core looped/recursive-Transformer track is maintained for comprehensive coverage.',
    method: 'Curation standard',
    methodText: 'Every entry is traced to an arXiv, OpenReview, proceedings, or official project page. The catalog separates the comprehensively searched recurrent-depth Transformer core from a representative broader latent-reasoning track, records the first public date, and uses original summaries rather than copied abstracts.',
    include: 'Included', includeItems: ['Weight-tied or recurrent-depth Transformer blocks', 'Learned halting, routing, stability, and loop systems', 'Direct analyses and applications of looped models', 'Broader latent-state reasoning with an explicit scope label'],
    exclude: 'Excluded', excludeItems: ['Agent loops or repeated API calls', 'Ordinary RNNs without a latent-reasoning connection', 'Papers linked only through secondary summaries', 'Unverifiable repositories or mismatched paper links'],
    updated: 'Research snapshot', contribute: 'Know a paper we missed?', contributeText: 'Open a pull request with a primary-source link and a short note explaining the loop or latent-reasoning mechanism.', contributeCta: 'Contribution guide',
  },
  zh: {
    atlas: '双语研究图谱 · 2024 至今',
    headlineA: '让模型在', headlineB: '深度中思考，', headlineC: '而不只在 token 中思考。',
    dek: '从 Loop Transformer 出发，梳理循环与递归深度、潜在推理和测试时计算的关键工作。',
    explore: '浏览论文图谱', verified: '论文、代码与项目主页一站直达。',
    papers: '篇收录工作', sources: '原始论文链接', languages: '种语言',
    thesis: '一句话理解这个领域',
    thesisText: '循环模型将参数深度与计算深度解耦：同一模块可反复更新隐状态，而路由、停止策略与训练稳定性共同决定额外计算能否转化为性能提升。',
    route: '五步阅读路线', routeText: '顺着五个问题，快速建立对这个方向的整体认识。',
    catalog: '论文目录', catalogText: '按标题、作者、会议、标签或双语短评搜索。',
    all: '全部主题', search: '搜索论文、模型、作者……', recent: '仅 2024 至今', allYears: '全部年份',
    results: '项结果', paper: '论文', code: '代码', project: '主页', key: '重点工作',
    broaderTitle: '为什么收录“广义潜在推理”？',
    broaderText: 'Coconut、HRM、TRM、隐式 CoT 并不都采用 Loop Transformer，但都关注在隐状态中完成多步计算、减少对显式思维链的依赖。因此，本图谱将其作为独立的扩展板块，并选取其中具有代表性的研究。',
    method: '收录原则',
    methodText: '核心目录尽量覆盖 Loop Transformer 的主要工作；广义潜在推理则选取代表性研究。日期以首次公开时间为准，链接优先指向论文、代码或项目的官方页面，短评均为原创概述。',
    include: '收录范围', includeItems: ['权重共享或循环深度 Transformer', '停止、路由、稳定性与循环系统研究', '直接分析或应用循环模型的工作', '与主题紧密相关的隐空间推理研究'],
    exclude: '不在范围', excludeItems: ['Agent 循环或重复 API 调用', '与潜在推理无关的普通 RNN', '只有二手介绍、缺少论文原文的工作', '与论文不匹配的代码仓库'],
    updated: '最近更新', contribute: '发现遗漏的论文？', contributeText: '欢迎提交 Pull Request，一起把这份图谱做得更完整。', contributeCta: '查看贡献方式',
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
        <div className="nav-links"><a href="#route">{lang === 'en' ? 'Start here' : '阅读路线'}</a><a href="#catalog">{lang === 'en' ? 'Papers' : '论文'}</a><a href="#method">{lang === 'en' ? 'Method' : '方法'}</a></div>
        <div className="nav-actions">
          <button className="language-pill" onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} aria-label="Switch language">{lang === 'en' ? '中文' : 'EN'}</button>
          <a className="github-link" href="https://github.com/Mrkkew/Awesome-Loop-Transformers" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.atlas}</p>
          <h1>{t.headlineA}<br /><em>{t.headlineB}</em><br />{t.headlineC}</h1>
          <p className="dek">{t.dek}</p>
          <div className="hero-actions"><a className="primary-button" href="#catalog">{t.explore}</a><span>{t.verified}</span></div>
        </div>
        <div className="diagram-wrap">
          <div className="loop-diagram" aria-label="A shared Transformer block repeated through depth">
            <div className="diagram-label">SHARED PARAMETERS</div><div className="diagram-block">Transformer block</div>
            <div className="loop-path"><span>latent state</span><strong>↻</strong><span>× N loops</span></div>
            <div className="diagram-caption">MORE COMPUTE · SAME CORE WEIGHTS</div>
          </div>
          <div className="stat-strip"><div><b>{recentCount}</b><span>{t.papers}</span></div><div><b>100%</b><span>{t.sources}</span></div><div><b>2</b><span>{t.languages}</span></div></div>
        </div>
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
        <div className="section-heading"><p className="eyebrow">{t.route}</p><h2>{t.routeText}</h2></div>
        <div className="route-list">{route.map((item) => <div className="route-item" key={item.n}><span>{item.n}</span><h3>{item[lang]}</h3><p>{lang === 'en' ? item.detailEn : item.detailZh}</p></div>)}</div>
      </section>

      <section className="broader-note">
        <div className="broader-icon">↗</div><div><p className="eyebrow">{lang === 'en' ? 'EXTENDED SCOPE' : '扩展范围'}</p><h2>{t.broaderTitle}</h2><p>{t.broaderText}</p></div>
      </section>

      <section className="catalog-section" id="catalog">
        <div className="section-heading catalog-heading"><div><p className="eyebrow">{t.catalog}</p><h2>{t.catalogText}</h2></div><span className="result-count">{filtered.length} {t.results}</span></div>
        <div className="catalog-tools">
          <label className="search-box"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.search} /></label>
          <button className={`year-toggle ${recentOnly ? 'active' : ''}`} onClick={() => setRecentOnly(!recentOnly)}>{recentOnly ? t.recent : t.allYears}</button>
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
        <div className="method-intro"><p className="eyebrow">{t.method}</p><h2>{t.methodText}</h2><p className="snapshot">{t.updated}: {lastUpdated}</p></div>
        <div className="method-columns"><div><h3>✓ {t.include}</h3>{t.includeItems.map(item => <p key={item}>{item}</p>)}</div><div><h3>× {t.exclude}</h3>{t.excludeItems.map(item => <p key={item}>{item}</p>)}</div></div>
      </section>

      <section className="contribute-section"><div><p className="eyebrow">OPEN RESEARCH · LIVING INDEX</p><h2>{t.contribute}</h2><p>{t.contributeText}</p></div><a className="primary-button" href="https://github.com/Mrkkew/Awesome-Loop-Transformers/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer">{t.contributeCta} ↗</a></section>
      <footer><a className="wordmark" href="#top"><span className="loop-mark">∞</span><span>Awesome Loop Transformers</span></a><p>Curated with rigor. Built for the research community.</p><span>CC BY 4.0 · {lastUpdated}</span></footer>
    </main>
  );
}
