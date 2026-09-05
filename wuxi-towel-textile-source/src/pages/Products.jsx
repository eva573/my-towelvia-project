import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { ProductCard } from '../components/ui';
import {
  CATEGORIES,
  PRODUCTS,
  TOTAL,
  categoryCount,
  categoryOf,
  SEARCH_TERMS
} from '../data/catalog';
import { usePageMeta } from '../util';

const PAGE = 12;
const SORTS = [
  ['featured', 'Featured'],
  ['popular', 'Most popular'],
  ['price', 'Price (low to high)']
];

const soldNum = (p) => {
  const m = String(p.sold || '').replace(/,/g, '').match(/\d+/);
  return m ? parseInt(m[0], 10) : 0;
};
const priceNum = (p) => {
  const m = String(p.price || '').match(/\d+(\.\d+)?/);
  return m ? parseFloat(m[0]) : Number.POSITIVE_INFINITY;
};

export default function Products() {
  usePageMeta(
    `Product catalog — ${TOTAL} export-ready microfiber towels`,
    `Browse ${TOTAL} export-ready microfiber towels and cleaning cloths across nine product lines — all customizable with your logo. FOB quotes within two business hours.`
  );
  const [params, setParams] = useSearchParams();
  const category = params.get('category') || 'all';
  const q = params.get('q') || '';

  const [term, setTerm] = useState(q);
  const [sort, setSort] = useState('featured');
  const [visible, setVisible] = useState(PAGE);
  const debounce = useRef(null);

  useEffect(() => setTerm(q), [q]);
  useEffect(() => setVisible(PAGE), [category, q]);

  const onSearch = (value) => {
    setTerm(value);
    clearTimeout(debounce.current);
    debounce.current = setTimeout(() => {
      const next = new URLSearchParams(params);
      if (value) next.set('q', value);
      else next.delete('q');
      setParams(next, { replace: true });
    }, 220);
  };

  const setCategory = (key) => {
    const next = new URLSearchParams(params);
    if (key === 'all') next.delete('category');
    else next.set('category', key);
    if (next.get('q')) next.delete('q');
    setParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter(
      (p) => (category === 'all' ? true : categoryOf(p.title) === category) && (!q || SEARCH_TERMS(p).includes(q.toLowerCase()))
    );
    if (sort === 'popular') list = [...list].sort((a, b) => soldNum(b) - soldNum(a));
    if (sort === 'price') list = [...list].sort((a, b) => priceNum(a) - priceNum(b));
    return list;
  }, [category, q, sort]);

  const shown = filtered.slice(0, visible);

  return (
    <>
      <header className="page-head" data-component="page-head">
        <div className="container">
          <span className="eyebrow">Products</span>
          <h1 className="h1">Product catalog</h1>
          <p className="lead">
            Browse {TOTAL} export-ready microfiber towels and cleaning cloths — all customizable with
            your logo.
          </p>
          <div className="page-meta">
            <span className="badge badge-plain">{TOTAL} products</span>
            <span className="badge badge-plain">{CATEGORIES.length} categories</span>
            <span className="badge badge-plain">All customizable</span>
          </div>
        </div>
      </header>

      <div className="container" style={{ paddingBottom: 72 }}>
        <div className="catalog-toolbar" data-component="catalog-toolbar">
          <div className="search-box">
            <Search size={18} />
            <input
              type="search"
              value={term}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search by product, material, technique…"
              aria-label="Search products"
            />
          </div>
          <div className="filter-row" role="group" aria-label="Filter by category">
            <button
              type="button"
              className={`chip${category === 'all' ? ' active' : ''}`}
              onClick={() => setCategory('all')}
            >
              All <span className="chip-count">{TOTAL}</span>
            </button>
            {CATEGORIES.map((c) => (
              <button
                type="button"
                className={`chip${category === c.key ? ' active' : ''}`}
                key={c.key}
                onClick={() => setCategory(c.key)}
              >
                {c.label} <span className="chip-count">{categoryCount(c.key)}</span>
              </button>
            ))}
          </div>
          <div className="sort-row">
            <label htmlFor="sort">Sort by</label>
            <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
              {SORTS.map(([v, l]) => (
                <option value={v} key={v}>
                  {l}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="result-line">
          <span>
            <strong>{filtered.length}</strong> {filtered.length === 1 ? 'product' : 'products'}
            {filtered.length > PAGE ? (
              <>
                {' '}
                — showing 1–{Math.min(visible, filtered.length)} of {filtered.length}
              </>
            ) : null}
          </span>
        </div>

        {shown.length ? (
          <div className="product-grid">
            {shown.map((p) => (
              <ProductCard key={p.pid} product={p} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3 className="h3">No products match</h3>
            <p>Try a different keyword or clear the category filter to browse the full catalog.</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setTerm('');
                setParams({}, { replace: true });
              }}
            >
              Clear filters
            </button>
          </div>
        )}

        {filtered.length > visible ? (
          <div className="load-more-wrap">
            <button type="button" className="btn btn-secondary" onClick={() => setVisible((v) => v + PAGE)}>
              Show more ({filtered.length - visible} remaining)
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}
