const decode = (value) => value
  .replace(/&#(x[0-9a-f]+|[0-9]+);/gi, (entity, number) => {
    const point = number[0].toLowerCase() === 'x' ? parseInt(number.slice(1), 16) : Number(number);
    return point <= 0x10ffff ? String.fromCodePoint(point) : entity;
  })
  .replaceAll('&quot;', '"').replaceAll('&apos;', "'")
  .replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&amp;', '&');

const normalize = (value) => decode(value)
  .replace(/\\['`^"~=]\{?([A-Za-z])\}?/g, '$1')
  .toLowerCase().normalize('NFKD').replace(/\p{M}+/gu, '')
  .replace(/[^a-z0-9]+/g, ' ').trim();

const months = new Map(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => [month, String(index + 1).padStart(2, '0')]));

export function assessSource(paper, status, html = '') {
  if (status === 429) return { kind: 'unresolved', reasons: ['HTTP 429: rate limited; metadata not checked'] };
  if (status < 200 || status >= 300) return { kind: 'unresolved', reasons: [`HTTP ${status}: metadata not checked`] };

  const meta = new Map();
  for (const tag of html.matchAll(/<meta\b[^>]*>/gi)) {
    const attributes = new Map([...tag[0].matchAll(/([\w:-]+)\s*=\s*(["'])([\s\S]*?)\2/g)].map((match) => [match[1].toLowerCase(), match[3]]));
    const key = attributes.get('name') ?? attributes.get('property');
    if (key && attributes.has('content')) meta.set(key.toLowerCase(), attributes.get('content'));
  }
  const title = meta.get('citation_title') ?? meta.get('og:title');
  const missing = [];
  const mismatches = [];
  if (!title?.trim()) {
    missing.push('No citation_title or og:title metadata');
  } else {
    const sourceTitle = title.replace(/^\[\d{4}\.\d{4,5}(?:v\d+)?\]\s*/, '').replace(/\s*[|–—-]\s*arxiv\s*$/i, '');
    if (normalize(sourceTitle) !== normalize(paper.title)) {
      mismatches.push(`Title mismatch: catalog="${paper.title}"; source="${decode(title)}"`);
    }
  }

  const checks = ['title'];
  if (new URL(paper.paper).hostname === 'arxiv.org') {
    checks.push('first-public date');
    const submitted = html.match(/Submitted on\s+(\d{1,2})\s+([A-Z][a-z]{2})\s+(\d{4})/);
    if (!submitted || !months.has(submitted[2])) {
      missing.push('No arXiv first-submission date found');
    } else {
      const date = `${submitted[3]}-${months.get(submitted[2])}-${submitted[1].padStart(2, '0')}`;
      if (date !== paper.date) mismatches.push(`First-public date mismatch: catalog=${paper.date}; source=${date}`);
    }
  }
  if (mismatches.length) return { kind: 'mismatch', reasons: [...mismatches, ...missing] };
  if (missing.length) return { kind: 'unresolved', reasons: missing };
  return { kind: 'matched', checks, reasons: [] };
}
