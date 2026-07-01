'use client';

import Link from 'next/link';
import Image from 'next/image';

const productLinks = [
  { label: 'Robotic Welding', href: '/products/robotic-welding' },
  { label: 'Welding SPM', href: '/products/welding-spm' },
  { label: 'Welding Equipment', href: '/products/welding-equipment' },
  { label: 'Welding Accessories', href: '/products/welding-accessories' },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Project Gallery', href: '/gallery' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  return (
    <footer>
      {/* CTA Strip */}
      <div style={{ background: 'linear-gradient(135deg, #0d2d5e, #1565C0)', padding: '56px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', marginBottom: 8 }}>
              Ready to Automate Your Production?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
              Get expert guidance from India&apos;s leading welding automation integrators.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 7, background: '#fff', color: '#0d2d5e', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.04em', textTransform: 'uppercase', transition: 'all 0.3s', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)'; }}>
              <i className="fas fa-phone-alt"></i> Get a Quote
            </Link>
            <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 7, background: 'rgba(255,255,255,0.12)', color: '#fff', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.04em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.25)', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}>
              <i className="fas fa-th-large"></i> View Products
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Body */}
      <div style={{ background: '#040f24', padding: '64px 0 40px' }}>
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div>
              <Link href="/" style={{ display: 'block', marginBottom: 20 }}>
                <div style={{ position: 'relative', width: 140, height: 90, flexShrink: 0 }}>
                  <Image src="/new-logo.jpg" alt="Mantronix Solutions" fill style={{ objectFit: 'contain', objectPosition: 'left center', transform: 'scale(1.2)', transformOrigin: 'left center' }} />
                </div>
              </Link>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: 24, maxWidth: 300 }}>
                Premier Automation & Robotics Integrator based in Ghaziabad, UP. Delivering world-class welding automation across India since 2008.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { icon: 'fas fa-map-marker-alt', text: 'A-88, Chander Nagar, Ghaziabad, UP' },
                  { icon: 'fas fa-phone', text: '+91 8178075592', href: 'tel:+918178075592' },
                  { icon: 'fas fa-envelope', text: 'manansinghal@mantronixsolutions.com', href: 'mailto:manansinghal@mantronixsolutions.com' },
                ].map(c => (
                  c.href
                    ? <a key={c.text} href={c.href} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', lineHeight: 1.5, transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                        <i className={c.icon} style={{ color: '#1565C0', marginTop: 2, width: 14, flexShrink: 0 }}></i>
                        <span style={{ flex: 1, minWidth: 0, wordBreak: 'break-all' }}>{c.text}</span>
                      </a>
                    : <div key={c.text} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', lineHeight: 1.5 }}>
                        <i className={c.icon} style={{ color: '#1565C0', marginTop: 2, width: 14, flexShrink: 0 }}></i>
                        <span style={{ flex: 1, minWidth: 0, wordBreak: 'break-word' }}>{c.text}</span>
                      </div>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-rajdhani)', fontSize: '1rem', fontWeight: 700, color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                Products
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {productLinks.map(l => (
                  <li key={l.label}>
                    <Link href={l.href}
                      style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 8 }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.paddingLeft = '4px'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.paddingLeft = '0'; }}>
                      <i className="fas fa-chevron-right" style={{ fontSize: '0.55rem', color: '#1565C0' }}></i>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-rajdhani)', fontSize: '1rem', fontWeight: 700, color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                Quick Links
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {quickLinks.map(l => (
                  <li key={l.label}>
                    <Link href={l.href}
                      style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 8 }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.paddingLeft = '4px'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.paddingLeft = '0'; }}>
                      <i className="fas fa-chevron-right" style={{ fontSize: '0.55rem', color: '#1565C0' }}></i>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries / Certifications */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-rajdhani)', fontSize: '1rem', fontWeight: 700, color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                Industries Served
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Scaffolding', 'Automotive', 'Oil & Gas', 'Infrastructure', 'Agriculture', 'Hydraulics', 'Construction', 'Compressors'].map(tag => (
                  <span key={tag} style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 4, background: 'rgba(21,101,192,0.12)', color: 'rgba(255,255,255,0.7)', fontSize: '0.73rem', fontWeight: 600, border: '1px solid rgba(21,101,192,0.2)', letterSpacing: '0.04em' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: 28, padding: '20px', background: 'rgba(255,255,255,0.04)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontFamily: 'var(--font-rajdhani)', fontSize: '2rem', fontWeight: 800, color: '#1565C0', lineHeight: 1 }}>500+</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginTop: 4 }}>Projects Delivered Nationwide</div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>
              © {new Date().getFullYear()} Mantronix Solutions Pvt. Ltd. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: 'fab fa-linkedin-in', href: '#' },
                { icon: 'fab fa-whatsapp', href: 'https://wa.me/918178075592' },
                { icon: 'fab fa-youtube', href: 'https://www.youtube.com/@MantronixSolutions' },
              ].map(s => (
                <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#1565C0'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#1565C0'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}>
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
