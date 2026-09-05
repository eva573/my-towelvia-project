import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  LayoutGrid,
  Star
} from 'lucide-react';
import { CtaBand, ProductCard } from '../components/ui';
import {
  CATEGORIES,
  TOTAL,
  bestSellers,
  categoryCount,
  categoryImage,
  collageProducts
} from '../data/catalog';
import { COMPANY, CONTACT, KPI, PROCESS, TEASER_FACTS, TRUST, WHY_ROWS } from '../site';
import { usePageMeta } from '../util';

function Eyebrow({ children, dark = false }) {
  return (
    <span className="eyebrow" style={dark ? { color: 'var(--accent-cyan)' } : undefined}>
      {children}
    </span>
  );
}

function SectionHead({ eyebrow, title, sub }) {
  return (
    <div className="section-head">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="h2">{title}</h2>
      {sub ? (
        <p className="lede" style={{ marginTop: 12 }}>
          {sub}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  usePageMeta(
    'Wuxi Towel Textile — Microfiber Towel Manufacturer & Exporter',
    'Microfiber towel manufacturer & exporter in Wuxi, China since 2013. Beach, sports & cooling towels, ponchos, cleaning cloths and custom fabric — printed with your logo.'
  );

  const [hero1, hero2, hero3] = collageProducts();
  const best = bestSellers(6);

  return (
    <>
      {/* Hero */}
      <section className="home-hero" data-component="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              Microfiber towel manufacturer · Wuxi, China · est. 2013
            </span>
            <h1 className="h1">Quick-dry towels, custom-printed at scale in Wuxi.</h1>
            <p className="lead">
              98 looms, in-house dyeing and napping, and a 10-year partner mill behind every roll —
              from beach towels and cooling towels to cleaning cloths and custom fabric. Exported to
              the US, Italy, Germany, Japan and beyond.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">
                Talk to {CONTACT.person} <ArrowUpRight size={18} />
              </Link>
              <Link className="btn btn-secondary" to="/products">
                Browse {TOTAL} products
              </Link>
            </div>
            <div className="hero-trust">
              <span>
                <Star size={15} /> {TRUST.reviews}
              </span>
              <span>
                <BadgeCheck size={15} /> {TRUST.response}
              </span>
            </div>
          </div>
          <div className="proof-panel">
            <div className="proof-stack">
              <figure className="proof-photo tall proof-main">
                <img src={hero1.img} alt="" loading="eager" />
              </figure>
              <figure className="proof-photo small">
                <img src={hero2.img} alt="" loading="lazy" />
              </figure>
              <figure className="proof-photo small">
                <img src={hero3.img} alt="" loading="lazy" />
              </figure>
            </div>
            <div className="proof-card">
              <div className="proof-head">
                <span className="badge badge-success">{TRUST.reviewsShort}</span>
              </div>
              <div className="proof-facts">
                <div className="proof-fact">
                  <span>Looms</span>
                  <b>98</b>
                </div>
                <div className="proof-fact">
                  <span>Napping machines</span>
                  <b>10</b>
                </div>
                <div className="proof-fact">
                  <span>Towels / year</span>
                  <b>≈1,000,000</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity band */}
      <section className="cap-band" data-component="capacity-band">
        <div className="container">
          <div className="cap-list">
            {KPI.map(([num, bold, detail]) => (
              <div className="cap-item" key={bold}>
                <span className="stat-num">{num}</span>
                <span className="stat-label">
                  <b>{bold}</b>
                  <br />
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product lines */}
      <section className="section-cat" data-component="product-lines">
        <div className="container">
          <div className="cat-head-row">
            <SectionHead
              eyebrow="Product lines"
              title="One factory, nine product lines"
              sub="Every style printable with your logo, from trial orders up to container loads."
            />
            <Link className="link-accent" to="/products">
              Open the full catalog <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="cat-grid">
            {CATEGORIES.map((c) => (
              <Link className="cat-tile" to={`/products?category=${c.key}`} key={c.key}>
                <span className="cat-tile-media img-box">
                  <img src={categoryImage(c.key)} alt="" loading="lazy" />
                </span>
                <span className="cat-tile-body">
                  <strong>{c.label}</strong>
                  <span className="mono">
                    {categoryCount(c.key)} {categoryCount(c.key) === 1 ? 'item' : 'items'}
                  </span>
                </span>
              </Link>
            ))}
            <Link className="cat-tile all" to="/products">
              <LayoutGrid className="icon-lg" />
              <strong>
                View all
                <br />
                {TOTAL} products
              </strong>
              <span className="mono">Customizable</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Best sellers */}
      <section className="section-featured" data-component="featured-products">
        <div className="container">
          <div className="cat-head-row">
            <SectionHead
              eyebrow="Proven styles"
              title="Best sellers & proven styles"
              sub="The configurations global buyers order most, ready for your logo."
            />
            <Link className="link-accent" to="/products">
              All products <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="feature-grid-3">
            {best.map((p) => (
              <ProductCard key={p.pid} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-process" data-component="process-section">
        <div className="container">
          <SectionHead eyebrow="How we work" title="From yarn to your container" />
          <div className="process-wrap">
            <ol className="process-steps">
              {PROCESS.map(([title, copy], s) => (
                <li className="process-step" key={title}>
                  <span className="process-num">
                    <span>0{s + 1}</span>
                  </span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section-why" data-component="why-choose">
        <div className="container">
          {WHY_ROWS.map((row, i) => {
            const imgSrc = row.img || (best[1] && best[1].img) || '';
            return (
              <div className={`why-row${row.flip ? ' flip' : ''}`} key={row.num}>
                <div className="why-media">
                  <div className="img-box">
                    <img src={imgSrc} alt={row.imgAlt} loading="lazy" />
                  </div>
                </div>
                <div className="why-copy">
                  <span className="why-kicker">{row.num}</span>
                  <h2 className="h2">{row.title}</h2>
                  <div className="why-features">
                    {row.points.map(([h, c]) => (
                      <div className="why-feature" key={h}>
                        <span className="icon">
                          <CheckCircle2 size={20} />
                        </span>
                        <div>
                          <h4>{h}</h4>
                          <p>{c}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Company teaser */}
      <section className="section-about-teaser" data-component="about-teaser">
        <div className="container teaser-grid">
          <div>
            <SectionHead
              eyebrow="Company"
              title="Founded in 2013 — a specialist, not a generalist"
              sub="Wuxi Towel Textile concentrates on microfiber woven and knitted products: fabric weaving, dyeing, brushing and export under one team, with QC and logistics run from the factory region."
            />
            <div className="hero-actions">
              <Link className="btn btn-secondary" to="/about">
                About the company <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          <aside className="teaser-facts">
            {TEASER_FACTS.map(([label, detail]) => (
              <div className="teaser-fact" key={label}>
                <CheckCircle2 size={18} />
                <span>
                  <b>{label}</b> — {detail}
                </span>
              </div>
            ))}
          </aside>
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand
        eyebrow="Get a quote"
        title={`Send us a spec — even if you're just comparing suppliers.`}
        subtitle={`Tell us the style or photo, size, weight (gsm), quantity and destination port. ${CONTACT.person} replies within two business hours.`}
        actions={
          <>
            <Link className="btn btn-inverse" to="/contact">
              Talk to {CONTACT.person} <ArrowUpRight size={16} />
            </Link>
            <Link className="btn btn-ghost-dark" to="/products">
              Browse the catalog <ArrowUpRight size={16} />
            </Link>
          </>
        }
        promise={
          <>
            <BadgeCheck size={14} style={{ verticalAlign: '-2px' }} /> Quotes within 2 hours ·{' '}
            {TRUST.response} · {TRUST.reviews}
          </>
        }
      />
    </>
  );
}
