import { useEffect } from 'react';
import { CONTACT } from './site';

// Set document title + meta description per page.
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
  }, [title, description]);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Build a mailto: href that pre-fills the inquiry email (matches the reference
// site behaviour — opens the visitor's email app; no accounts or servers).
export function buildMailto(values) {
  const lines = [
    `Name: ${values.name}`,
    values.company ? `Company: ${values.company}` : '',
    `Email: ${values.email}`,
    values.country ? `Country / destination port: ${values.country}` : '',
    `Product interest: ${values.categoryLabel}`,
    values.spec ? `Spec / quantity:\n${values.spec}` : '',
    values.message ? `Message:\n${values.message}` : '',
    '',
    'Sent from the Wuxi Towel Textile website'
  ].filter(Boolean);
  const subject = `${CONTACT.mailtoSubjectPrefix} — ${values.categoryLabel}`;
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    lines.join('\n')
  )}`;
}

export function validateInquiry(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim() || !EMAIL_RE.test(values.email.trim()))
    errors.email = 'Please enter a valid work email.';
  return errors;
}
