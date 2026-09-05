import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { COMPANY } from '../site';
import { categoryLabel, categoryOf } from '../data/catalog';

export function Logo() {
  return (
    <span className="brand">
      <span className="brand-mark" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M4.5 8.5h15M4.5 15.5h15M8.5 4.5v15M15.5 4.5v15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span>
        <span className="brand-name">{COMPANY.brand}</span>
        <span className="brand-sub">{COMPANY.brandSub}</span>
      </span>
    </span>
  );
}

export function ProductCard({ product, compact = false }) {
  const cat = categoryLabel(categoryOf(product.title));
  const quoteLink = `/contact?pid=${encodeURIComponent(product.pid)}&title=${encodeURIComponent(
    product.title
  )}`;
  return (
    <article className={`product-card${compact ? ' compact' : ''}`} data-component="product-card">
      <div className="pc-media img-box">
        {product.img ? (
          <img src={product.img} alt={product.title} loading="lazy" decoding="async" />
        ) : (
          <span className="pc-ph">Photo on request</span>
        )}
      </div>
      <div className="pc-body">
        <div className="pc-meta">
          <span className="badge badge-plain">{cat}</span>
          {product.sold ? <span className="badge badge-success">{product.sold}</span> : null}
        </div>
        <h3 className="pc-title u-clamp-2" title={product.title}>
          {product.title}
        </h3>
        <div className="pc-price">
          <span className="pc-price-main">{product.price || 'Price on request'}</span>
          {product.price ? <span className="pc-price-label">FOB reference</span> : null}
        </div>
        <div className="pc-meta mono">{product.moq || 'MOQ on request'}</div>
        <div className="pc-actions">
          <Link className="btn btn-secondary btn-sm" to={quoteLink}>
            Request quote
          </Link>
          {product.href ? (
            <a
              className="pc-ext"
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View this product on Alibaba (opens new tab)"
              title="View original listing on Alibaba.com"
            >
              <ArrowUpRight size={18} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

// Navy full-width quote band used on Home (Get a quote) and About (Next step).
export function CtaBand({ eyebrow, title, subtitle, actions, promise }) {
  return (
    <section className="cta-band" data-component="cta-banner">
      <div className="container cta-inner">
        <span className="eyebrow center" style={{ color: 'var(--accent-cyan)' }}>
          {eyebrow}
        </span>
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
        <div className="cta-actions">{actions}</div>
        {promise ? <p className="cta-promise">{promise}</p> : null}
      </div>
    </section>
  );
}
