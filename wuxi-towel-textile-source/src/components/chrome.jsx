import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Menu, MessageCircle, X } from 'lucide-react';
import { COMPANY, CONTACT } from '../site';
import { CATEGORIES, TOTAL } from '../data/catalog';
import { Logo } from './ui';

function TopStrip() {
  return (
    <div className="top-strip" data-component="top-strip">
      <div className="container">
        <span>{COMPANY.tagline}</span>
        <span className="ts-right">
          <strong>Replies ≤ 2 h</strong> · 4.9/5 (17 reviews)
        </span>
      </div>
    </div>
  );
}

const NAV = [
  ['/', 'Home'],
  ['/products', 'Products'],
  ['/about', 'About'],
  ['/contact', 'Contact']
];

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname, location.search]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const item = (to, label) => (
    <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
      {label}
    </NavLink>
  );

  return (
    <>
      <header className="site-header" data-component="site-header">
        <div className="header-main">
          <div className="container">
            <Link to="/" aria-label="Wuxi Towel Textile home">
              <Logo />
            </Link>
            <nav className="main-nav" aria-label="Primary">
              {NAV.map(([to, label]) => item(to, label))}
            </nav>
            <div className="header-cta">
              <Link className="btn btn-primary btn-sm" to="/contact">
                Request a quote <ArrowUpRight size={16} />
              </Link>
              <button
                type="button"
                className="nav-toggle"
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label={open ? 'Close menu' : 'Open menu'}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>
      <nav
        id="mobile-nav"
        className={`mobile-nav${open ? ' open' : ''}`}
        aria-label="Mobile"
        data-component="mobile-nav"
      >
        {NAV.map(([to, label]) => item(to, label))}
        <Link className="btn btn-primary btn-block" to="/contact">
          Request a quote <ArrowUpRight size={16} />
        </Link>
      </nav>
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer" data-component="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p className="footer-desc">{COMPANY.desc}</p>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              {CATEGORIES.slice(0, 6).map((c) => (
                <li key={c.key}>
                  <Link to={`/products?category=${c.key}`}>{c.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/products">View all {TOTAL} products</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/about#trade">Trade & logistics</Link>
              </li>
              <li>
                <Link to="/contact">Contact & inquiry</Link>
              </li>
              <li>
                <span className="mono">{COMPANY.originLine}</span>
              </li>
            </ul>
          </div>
          <div className="footer-col footer-contact">
            <h4>Talk to us</h4>
            <ul>
              <li>
                <span>
                  {CONTACT.person} — Export sales
                </span>
              </li>
              <li>
                <Mail size={16} />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <MessageCircle size={16} />
                <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
                  WhatsApp {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <MapPin size={16} />
                <span>{CONTACT.location}</span>
              </li>
              <li>
                <span className="mono">Terms: {CONTACT.terms}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {COMPANY.legal} All rights reserved.</span>
          <span className="mono">
            <Link to="/contact">
              Request a quote <ArrowUpRight size={12} style={{ verticalAlign: '-2px' }} />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

// Scroll management: top of page on route change; #anchor when a hash is present.
export function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  return (
    <>
      <TopStrip />
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
