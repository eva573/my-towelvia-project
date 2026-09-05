import { Link } from 'react-router-dom';
import { ArrowUpRight, BadgeCheck, CheckCircle2, CreditCard, Globe, Ship } from 'lucide-react';
import { CtaBand } from '../components/ui';
import { CAPABILITY, CONTACT, MARKETS, SNAPSHOT } from '../site';
import { usePageMeta } from '../util';

export default function About() {
  usePageMeta(
    'About us — Wuxi Towel Textile Co., Ltd.',
    'Wuxi Towel Textile Co., Ltd. — founded 2013 in Wuxi, Jiangsu. Specialists in microfiber fabric weaving, dyeing, brushing and export.'
  );

  return (
    <>
      <header className="page-head" data-component="page-head">
        <div className="container">
          <span className="eyebrow">Company</span>
          <h1 className="h1">A microfiber specialist since 2013</h1>
          <p className="lead">
            Wuxi Towel Textile Co., Ltd. weaves, dyes, brushes, prints and exports microfiber towels
            and cloths from Jiangsu, China — one team from yarn to your container.
          </p>
        </div>
      </header>

      {/* Company story */}
      <section className="about-section" data-component="company-story">
        <div className="container story-grid">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2 className="h2">Specialists in microfiber, not a general textile mill</h2>
            <p className="lede">
              Founded in 2013 in Wuxi, Jiangsu, Wuxi Towel Textile concentrates on one material
              family — microfiber. We run fabric weaving, dyeing, brushing and export in-house: 98
              looms make the fabric, 10 napping machines brush the finish, and our trade team of
              11–50 people manages order, QC and export logistics from the factory region.
            </p>
            <p className="lede">
              Production runs at more than 300,000 m of fabric and about 100,000 towels a month,
              with an annual towel volume near one million pieces through a factory we have
              cooperated with for over ten years. Our products ship to the US, Italy, Germany, Japan
              and other markets, covering beach towels, cooling and sport towels, ponchos, cleaning
              cloths, eyeglass cloths and custom microfiber fabric.
            </p>
            <p className="lede">
              We guarantee good quality, good service and prompt delivery — and we answer inquiries
              quickly because quoting speed is part of the product.
            </p>
          </div>
          <aside className="story-facts">
            <h3>Company snapshot</h3>
            <ul>
              {SNAPSHOT.map(([label, detail]) => (
                <li key={label}>
                  <CheckCircle2 size={17} />
                  <span>
                    <b>{label}</b>
                    <br />
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="container media-duo">
          <figure className="media-fig">
            <img
              src="/assets/images/about-factory.png"
              alt="Rows of looms in the weaving mill"
              loading="lazy"
            />
            <figcaption>Weaving hall — the fabric starts here, in-house, on 98 looms.</figcaption>
          </figure>
          <figure className="media-fig">
            <img
              src="/assets/images/about-export.png"
              alt="Wrapped textile cartons at the export warehouse"
              loading="lazy"
            />
            <figcaption>
              Export bay — packed goods staged for container loading near Shanghai, Yiwu and Ningbo.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Capability stats */}
      <section
        className="about-section"
        style={{ background: 'var(--surface)', borderBlock: '1px solid var(--border-soft)' }}
        data-component="capability-stats"
      >
        <div className="container">
          <div className="section-head-row">
            <div className="section-head">
              <span className="eyebrow">Capacity</span>
              <h2 className="h2">What 110K+ monthly production actually means</h2>
              <p className="lede" style={{ marginTop: 12 }}>
                Numbers we can back with orders — not superlatives. Volume peaks seasonally, and our
                partner mill absorbs overflow without breaking lead times.
              </p>
            </div>
          </div>
          <div
            className="cap-list"
            style={{ border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}
          >
            {CAPABILITY.map(([num, bold, detail], i) => (
              <div
                className="cap-item"
                key={bold}
                style={i ? { borderLeft: '1px solid var(--border-soft)', paddingLeft: 28 } : undefined}
              >
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

      {/* Export destinations + certifications */}
      <section className="about-section" data-component="export-destinations">
        <div
          className="container"
          style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'start' }}
        >
          <div>
            <span className="eyebrow">Markets</span>
            <h2 className="h2">Where our towels ship today</h2>
            <p className="lede" style={{ marginTop: 12 }}>
              Reported export split from our trade records — with named customers across the US,
              Italy, Germany and Japan.
            </p>
            <div className="split-bars">
              {MARKETS.map(([label, pct]) => (
                <div className="split-bar" key={label}>
                  <span className="split-label">{label}</span>
                  <span className="split-track">
                    <span className="split-fill" style={{ width: `${pct}%` }} />
                  </span>
                  <span className="split-val">{pct}%</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="eyebrow">Certifications & records</span>
            <h2 className="h2">Proof we publish — and what we don't claim</h2>
            <p className="lede" style={{ marginTop: 12 }}>
              We publish only verifiable platform records. Some product listings carry an “OEKO-TEX
              Certified” claim by the product line; our company profile does not list third-party
              factory certificates, so we do not display them here.
            </p>
            <div className="quality-note">
              <BadgeCheck size={18} />
              <span>
                Buyer-recorded data only: 4.9/5 average across 17 reviews and a 98.41% response rate
                with replies typically within 2 hours on business days.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trade & logistics */}
      <section
        className="about-section"
        id="trade"
        style={{ background: 'var(--surface)', borderTop: '1px solid var(--border-soft)' }}
        data-component="trade-logistics"
      >
        <div className="container">
          <div className="section-head-row">
            <div className="section-head">
              <span className="eyebrow">Trade & logistics</span>
              <h2 className="h2">Terms that make importing predictable</h2>
            </div>
          </div>
          <div className="terms-grid">
            <div className="term-card">
              <h3>
                <CreditCard size={18} /> Delivery & payments
              </h3>
              <p>
                FOB · CFR · CIF · EXW · FCA · DDP · DDU · Express delivery.
                <br />
                Payment: <b>T/T and L/C</b>.
              </p>
            </div>
            <div className="term-card">
              <h3>
                <Ship size={18} /> Ports & lead time
              </h3>
              <p>
                Loading from <b>Shanghai · Yiwu · Ningbo</b>.
                <br />
                Average lead time <b>~35 days</b>.
              </p>
            </div>
            <div className="term-card">
              <h3>
                <Globe size={18} /> Working with us
              </h3>
              <p>
                Languages: English · 中文.
                <br />
                Response <b>98.41%</b> · usually &lt; 2 h.
                <br />
                Annual revenue under US$1M — a focused, hands-on supplier.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Next step"
        title="Compare us against your current supplier — the quote is free."
        subtitle="Send the spec that matters to you. We reply within two business hours."
        actions={
          <>
            <Link className="btn btn-inverse" to="/contact">
              Talk to {CONTACT.person} <ArrowUpRight size={16} />
            </Link>
            <Link className="btn btn-ghost-dark" to="/products">
              Browse products
            </Link>
          </>
        }
      />
    </>
  );
}
