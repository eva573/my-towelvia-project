import raw from './catalog-source.json';

const IMG_BASE = '/assets/images/products/';

// Products whose listing photo is no longer served (404 at scrape time).
const MISSING_IMAGES = new Set([
  '1601817626283',
  '1601782349184',
  '1601699051396',
  '1601626739009',
  '1601634663026',
  '1601599475341'
]);

export const CATEGORIES = raw.categories; // 9 lines: { key, label, blurb }

export const PRODUCTS = raw.products
  .filter((p) => p && p.pid)
  .map((p) => ({
    pid: String(p.pid),
    title: String(p.title || ''),
    price: p.price || '',
    moq: p.moq || '',
    sold: p.sold || '',
    href: p.href || '',
    img: p.imgUrl && !MISSING_IMAGES.has(String(p.pid)) ? IMG_BASE + p.file : ''
  }));

export const TOTAL = PRODUCTS.length;

// Title -> category slug, same rules as the reference catalog.
const RULES = [
  ['poncho', /poncho|bathrobe|\brobe\b|hooded|changing|cloak|wetsuit/],
  ['kids', /\bkids?\b|child|children|baby|girls|boys|cartoon|unicorn/],
  ['cooling', /cooling|ice.?cold|instant.?cool|ice towel|cold.?sense/],
  ['sport-gym', /gym|sport|fitness|workout|sweat|exercise|golf|tennis|running|athlet/],
  ['yoga', /yoga/],
  ['beach-swim', /beach|swim|surf|pool|sand.?free|sun.?protect/],
  ['glass', /glasses?|eyeglass|lens|screen|sunglasses|polish|jewelry|mirror|wine|optic/],
  ['fabric', /fabric|\bmeters?\b|\bkilograms?\b/]
];
const FALLBACK = 'cleaning';

export function categoryOf(title) {
  const t = String(title || '').toLowerCase();
  for (const [key, re] of RULES) if (re.test(t)) return key;
  return FALLBACK;
}

const counts = PRODUCTS.reduce((acc, p) => {
  const k = categoryOf(p.title);
  acc[k] = (acc[k] || 0) + 1;
  return acc;
}, {});

export const categoryCount = (key) => counts[key] || 0;
export const categoryLabel = (key) =>
  (CATEGORIES.find((c) => c.key === key) || {}).label || key;
export const categoryBlurb = (key) =>
  (CATEGORIES.find((c) => c.key === key) || {}).blurb || '';
export const productsInCategory = (key) => PRODUCTS.filter((p) => categoryOf(p.title) === key);

// One image per category (same anchor products as the reference site).
const CATEGORY_IMAGE_PID = {
  'beach-swim': '1601733241852',
  'sport-gym': '1601414419298',
  cooling: '1601516514237',
  poncho: '1601269875985',
  kids: '1601610005572',
  yoga: '1601685952340',
  cleaning: '1601809373822',
  glass: '1601516411382',
  fabric: '1601788843225'
};

export function categoryImage(key) {
  const byPid = PRODUCTS.find((p) => p.pid === CATEGORY_IMAGE_PID[key]);
  if (byPid && byPid.img) return byPid.img;
  const first = productsInCategory(key).find((p) => p.img);
  return first ? first.img : '';
}

// Hero proof collage (same three products as the reference).
const COLLAGE_PIDS = ['1601516514237', '1601733241852', '1601516411382'];
export function collageProducts() {
  const picked = COLLAGE_PIDS.map((pid) => PRODUCTS.find((p) => p.pid === pid)).filter(Boolean);
  return picked.length === COLLAGE_PIDS.length ? picked : PRODUCTS.slice(0, 3);
}

const soldNum = (p) => {
  const m = String(p.sold || '').replace(/,/g, '').match(/\d+/);
  return m ? parseInt(m[0], 10) : 0;
};

// Best sellers: products with sold counts first (desc), then the rest.
export function bestSellers(n = 6) {
  const sold = PRODUCTS.filter((p) => p.sold && soldNum(p) > 0).sort(
    (a, b) => soldNum(b) - soldNum(a)
  );
  const rest = PRODUCTS.filter((p) => !sold.includes(p));
  return [...sold, ...rest].slice(0, n);
}

export const SEARCH_TERMS = (p) =>
  `${p.title} ${categoryLabel(categoryOf(p.title))} ${p.moq}`.toLowerCase();
