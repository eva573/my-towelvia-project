import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  AlertCircle,
  BadgeCheck,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
  Star
} from 'lucide-react';
import { CATEGORIES } from '../data/catalog';
import { CONTACT } from '../site';
import { buildMailto, usePageMeta, validateInquiry } from '../util';

const EMPTY = { name: '', company: '', email: '', country: '', category: '', spec: '', message: '' };

export default function Contact() {
  usePageMeta(
    'Contact & inquiry — Wuxi Towel Textile',
    `Send a wholesale inquiry to ${CONTACT.person} — replies within two business hours.`
  );
  const [params] = useSearchParams();
  const pid = params.get('pid') || '';
  const title = params.get('title') || '';

  const [values, setValues] = useState(() => ({
    ...EMPTY,
    spec: title
      ? `Interested in: ${title.slice(0, 140)}` + (pid ? `\nProduct ref: ${pid}` : '')
      : ''
  }));
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));
  const err = (key) =>
    errors[key] ? (
      <span className="error">
        <AlertCircle size={13} /> {errors[key]}
      </span>
    ) : null;

  const categoryLabel =
    (CATEGORIES.find((c) => c.key === values.category) || {}).label || 'Multiple / not sure';

  const submit = (e) => {
    e.preventDefault();
    const found = validateInquiry(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      window.location.href = buildMailto({ ...values, categoryLabel });
      setSent(true);
    }
  };

  return (
    <>
      <header className="page-head" data-component="page-head">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 className="h1">Request a quote</h1>
          <p className="lead">
            Tell us the style or photo, size, weight (gsm), quantity and destination port — we reply
            within two business hours on weekdays.
          </p>
          <div className="page-meta">
            <span className="badge badge-success">Replies ≤ 2 h</span>
            <span className="badge badge-success">98.41% response rate</span>
            <span className="badge badge-plain">FOB · CIF · DDP available</span>
          </div>
        </div>
      </header>

      <div className="container contact-wrap" data-component="contact-page">
        <div className="contact-card">
          <span className="eyebrow">Inquiry form</span>
          <h2 className="h2" style={{ marginTop: 10 }}>
            Send the spec
          </h2>
          {sent ? (
            <div className="form-success" role="status">
              <CheckCircle2 size={20} />
              <span>
                <b>Your email app should have opened with the inquiry pre-filled.</b>
                <br />
                If it did not, write to us directly at{' '}
                <a className="link-accent" href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
                , or message us on{' '}
                <a className="link-accent" href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
                  WhatsApp {CONTACT.whatsappDisplay}
                </a>
                .
              </span>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="form-grid">
                <div className={`field${errors.name ? ' invalid' : ''}`}>
                  <label htmlFor="f-name">
                    Name <span className="req">*</span>
                  </label>
                  <input
                    id="f-name"
                    autoComplete="name"
                    value={values.name}
                    onChange={set('name')}
                    placeholder="Your name"
                  />
                  {err('name')}
                </div>
                <div className="field">
                  <label htmlFor="f-company">Company</label>
                  <input
                    id="f-company"
                    autoComplete="organization"
                    value={values.company}
                    onChange={set('company')}
                    placeholder="Company name"
                  />
                </div>
                <div className={`field${errors.email ? ' invalid' : ''}`}>
                  <label htmlFor="f-email">
                    Work email <span className="req">*</span>
                  </label>
                  <input
                    id="f-email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={set('email')}
                    placeholder="you@company.com"
                  />
                  {err('email')}
                </div>
                <div className="field">
                  <label htmlFor="f-country">Country / destination port</label>
                  <input
                    id="f-country"
                    value={values.country}
                    onChange={set('country')}
                    placeholder="e.g. Hamburg, Germany"
                  />
                </div>
                <div className="field">
                  <label htmlFor="f-cat">Product interest</label>
                  <select id="f-cat" value={values.category} onChange={set('category')}>
                    <option value="">Multiple / not sure yet</option>
                    {CATEGORIES.map((c) => (
                      <option value={c.key} key={c.key}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="f-spec">Quantity or target spec</label>
                  <input
                    id="f-spec"
                    value={values.spec}
                    onChange={set('spec')}
                    placeholder="e.g. 5,000 pcs 30×100 cm cooling towel, sublimation logo"
                  />
                </div>
                <div className="field full">
                  <label htmlFor="f-msg">Message</label>
                  <textarea
                    id="f-msg"
                    value={values.message}
                    onChange={set('message')}
                    placeholder="Size, weight (gsm), printing technique, packaging, timeline — whatever helps us quote precisely."
                  />
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  Send inquiry <Send size={17} />
                </button>
                <span className="form-note">
                  <ShieldCheck size={16} /> No account needed. Your inquiry opens in your email app —
                  we never share your details.
                </span>
              </div>
              <p className="form-note">
                <BadgeCheck size={16} /> We reply within two business hours on weekdays.
              </p>
            </form>
          )}
        </div>

        <aside className="contact-side" data-component="contact-facts">
          <div className="contact-person">
            <h3>{CONTACT.person}</h3>
            <p className="role">{CONTACT.role}</p>
            <div className="channels">
              <div className="channel">
                <Mail size={17} />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
              <div className="channel">
                <MessageCircle size={17} />
                <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
                  WhatsApp {CONTACT.whatsappDisplay}
                </a>
              </div>
              <div className="channel">
                <MapPin size={17} />
                <span>{CONTACT.locationShort}</span>
              </div>
            </div>
          </div>
          <div className="contact-checks">
            <h3>Quote faster with these</h3>
            <ul>
              {[
                'Style or reference photo (or Alibaba product link)',
                'Size in cm and weight in gsm if known',
                'Estimated quantity and target unit price',
                'Destination port and preferred Incoterm',
                'Printing: sublimation / jacquard / knitted / embossed / embroidered'
              ].map((c) => (
                <li key={c}>
                  <CheckCircle2 size={16} /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-mini">
            <h3>Why buyers start here</h3>
            <p>
              <Star size={13} style={{ color: 'var(--warn)', verticalAlign: '-1px' }} /> 4.9/5 from
              17 reviews · 98.41% response rate · FOB/CFR/CIF/EXW/DDP from Shanghai, Yiwu and Ningbo ·
              ~35-day average lead time.
            </p>
          </div>
        </aside>
      </div>

      <div className="response-strip">
        <div className="container">
          <span>
            <BadgeCheck size={16} /> Quotes within 2 hours
          </span>
          <span>
            <BadgeCheck size={16} /> 98.41% response rate
          </span>
          <span>
            <BadgeCheck size={16} /> 4.9/5 from 17 buyer reviews
          </span>
        </div>
      </div>
    </>
  );
}
