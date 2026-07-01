'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'Robotic Welding',
        href: '/products/robotic-welding',
        icon: '🤖',
        sub: [
          'Welding Robot', 'Robot Linear Track', 'Robotic Welding Cell',
          'Single Axis Positioner', 'Two Axis Positioner', 'Rotary Turn Table',
          'Safety Fence', 'Robot Pedestal', 'Welding Fixture', 'Robotic Welding Machine'
        ]
      },
      {
        label: 'Welding SPM',
        href: '/products/welding-spm',
        icon: '⚙️',
        sub: [
          'Scaffolding Welding SPM', 'Hydraulic Cylinder SPM', 'Compressor Tank SPM',
          'Submersible Pump SPM', 'Pipe to Flange SPM', 'Conveyor Welding SPM',
          'TMT Wiremesh SPM', 'Ball Welding SPM'
        ]
      },
      {
        label: 'Welding Equipment',
        href: '/products/welding-equipment',
        icon: '🔧',
        sub: [
          'Welding Turn Table', 'Welding Rotator', 'MagBOT Carriage',
          'LineBOT Linear Carriage', 'Welding Positioner', 'FlexBOT Carriage',
          'Column and Boom', 'Torch Pole'
        ]
      },
      {
        label: 'Welding Accessories',
        href: '/products/welding-accessories',
        icon: '🔩',
        sub: [
          'Welding Oscillator', 'Welding AVC', 'Water Circulation Unit',
          'Cold Wire Feeder', 'Welding Chuck', 'XY Slide', 'Teach Pendant'
        ]
      },
    ]
  },
  { label: 'Project Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSub, setActiveSub] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
    setActiveSub(0);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 180);
  };

  const keepOpen = () => clearTimeout(timeoutRef.current);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: 'rgba(255,255,255,0.98)',
      backdropFilter: 'blur(16px)',
      borderBottom: scrolled
        ? '1px solid rgba(13,45,94,0.14)'
        : '1px solid rgba(13,45,94,0.08)',
      boxShadow: scrolled ? '0 4px 30px rgba(13,45,94,0.12)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      {/* Top bar */}
      <div style={{ background: '#0d2d5e', padding: '6px 0' }}>
        <div className="container top-bar-container">
          <a href="tel:+918178075592" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>
            <i className="fas fa-phone" style={{ color: '#c9a227', fontSize: '0.65rem' }}></i>
            +91 8178075592
          </a>
          <a href="mailto:manansinghal@mantronixsolutions.com" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>
            <i className="fas fa-envelope" style={{ color: '#c9a227', fontSize: '0.65rem' }}></i>
            manansinghal@mantronixsolutions.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 90 }}>
        {/* Logo - Only the image, no text */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <div style={{ position: 'relative', width: 120, height: 74, flexShrink: 0 }}>
            <Image
              src="/new-logo.jpg"
              alt="Mantronix Solutions"
              fill
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hide-mobile">
          {navItems.map(item => (
            <div
              key={item.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={item.href}
                style={{
                  display: 'flex', alignItems: 'center', gap: 4,
                  padding: '9px 16px',
                  borderRadius: 6,
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#1a2744',
                  transition: 'all 0.2s',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={e => { if (!item.children) e.currentTarget.style.color = '#1565C0'; e.currentTarget.style.background = 'rgba(21,101,192,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#1a2744'; e.currentTarget.style.background = 'transparent'; }}
              >
                {item.label}
                {item.children && <i className="fas fa-chevron-down" style={{ fontSize: '0.55rem', opacity: 0.6, transition: 'transform 0.2s', transform: activeDropdown === item.label ? 'rotate(180deg)' : 'rotate(0)' }}></i>}
              </Link>

              {/* Mega Dropdown */}
              {item.children && activeDropdown === item.label && (
                <div
                  onMouseEnter={keepOpen}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                    marginTop: 8,
                    background: '#fff',
                    borderRadius: 14,
                    boxShadow: '0 20px 60px rgba(13,45,94,0.2)',
                    border: '1px solid rgba(13,45,94,0.1)',
                    width: 720,
                    display: 'grid', gridTemplateColumns: '220px 1fr',
                    overflow: 'hidden',
                    animation: 'slideInDown 0.2s ease',
                    zIndex: 200,
                  }}
                >
                  {/* Category list */}
                  <div style={{ background: '#0d2d5e', padding: '24px 0' }}>
                    {item.children.map((child, ci) => (
                      <div
                        key={child.label}
                        onMouseEnter={() => setActiveSub(ci)}
                        style={{
                          padding: '12px 24px',
                          display: 'flex', alignItems: 'center', gap: 12,
                          cursor: 'pointer',
                          background: activeSub === ci ? 'rgba(255,255,255,0.1)' : 'transparent',
                          borderLeft: activeSub === ci ? '3px solid #c9a227' : '3px solid transparent',
                          transition: 'all 0.2s',
                        }}
                      >
                        <span style={{ fontSize: '1.2rem' }}>{child.icon}</span>
                        <div>
                          <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', fontFamily: 'var(--font-rajdhani)', letterSpacing: '0.04em' }}>
                            {child.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Sub-items */}
                  <div style={{ padding: '24px 28px' }}>
                    <div style={{ marginBottom: 12 }}>
                      <Link href={item.children[activeSub].href}
                        style={{ color: '#1565C0', fontWeight: 700, fontFamily: 'var(--font-rajdhani)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                        {item.children[activeSub].label}
                        <i className="fas fa-arrow-right" style={{ fontSize: '0.7rem' }}></i>
                      </Link>
                      <div style={{ width: 40, height: 2, background: '#1565C0', marginTop: 8, borderRadius: 2 }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 16px' }}>
                      {item.children[activeSub].sub.map(s => (
                        <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0', color: '#4a5a88', fontSize: '0.82rem', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.color = '#1565C0'}
                          onMouseLeave={e => e.currentTarget.style.color = '#4a5a88'}>
                          <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#1565C0', flexShrink: 0 }}></span>
                          {s}
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(13,45,94,0.08)' }}>
                      <Link href={item.children[activeSub].href} className="btn btn-primary" style={{ fontSize: '0.75rem', padding: '8px 18px' }}>
                        <i className="fas fa-eye"></i> View All
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link href="/contact" className="btn btn-primary hide-mobile" style={{ padding: '9px 20px', fontSize: '0.8rem' }}>
            <i className="fas fa-phone-alt"></i> Get a Quote
          </Link>
          <button
            className="show-mobile"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ width: 42, height: 42, borderRadius: 8, background: '#0d2d5e', color: '#fff', fontSize: '1rem', display: 'none', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
          >
            <i className={`fas fa-${mobileOpen ? 'times' : 'bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid rgba(13,45,94,0.1)', animation: 'slideInDown 0.25s ease' }}>
          <div className="container" style={{ padding: '16px var(--container-px)', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {navItems.map(item => (
              <div key={item.label}>
                <Link href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ display: 'block', padding: '12px 16px', color: '#1a2744', fontWeight: 600, fontSize: '0.95rem', borderRadius: 8, transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(21,101,192,0.08)'; e.currentTarget.style.color = '#1565C0'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1a2744'; }}>
                  {item.label}
                </Link>
                {item.children && (
                  <div style={{ paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {item.children.map(child => (
                      <Link key={child.label} href={child.href}
                        onClick={() => setMobileOpen(false)}
                        style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', color: '#4a5a88', fontSize: '0.85rem', borderRadius: 6, transition: 'all 0.2s' }}
                        onMouseEnter={e => { e.currentTarget.style.color = '#1565C0'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = '#4a5a88'; }}>
                        <span>{child.icon}</span> {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn btn-primary" style={{ marginTop: 8, justifyContent: 'center' }}>
              <i className="fas fa-phone-alt"></i> Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
