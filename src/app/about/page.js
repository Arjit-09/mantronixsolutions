'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

const team = [
  { name: 'Manan Singhal', role: 'Automation & Robotics Integrator and Engineer | Robotic Welding Expert', email: 'manansinghal@mantronixsolutions.com' },
];

const milestones = [
  { year: '2008', title: 'Founded', desc: 'Mantronix Solutions established in Ghaziabad, UP.' },
  { year: '2012', title: 'First Robotic Cell', desc: 'Delivered our first complete robotic welding cell to a manufacturing client.' },
  { year: '2016', title: '100+ Projects', desc: 'Crossed 100 successful automation project deliveries across India.' },
  { year: '2020', title: 'Industry 4.0', desc: 'Integrated smart automation solutions compatible with Industry 4.0 standards.' },
  { year: '2024', title: '500+ Projects', desc: 'Celebrating 500+ successful automation deployments nationwide.' },
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function AboutPage() {
  useScrollReveal();
  
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-label">About Us</span>
            <h1 className="page-hero-title">About <span style={{ color: '#c9a227' }}>Mantronix</span></h1>
            <nav className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-separator">›</span>
              <span>About</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-py" style={{ background: '#f8faff' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: 'center' }}>
            <div className="reveal-left">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Pioneers in Welding <span>Automation</span></h2>
              <div className="gold-divider" />
              <p style={{ color: '#5a6a88', lineHeight: 1.9, marginBottom: 20, fontSize: '0.95rem' }}>
                Mantronix Solutions is a premier Automation & Robotics Integrator and Engineering firm, founded with the mission to bring world-class welding automation technology to Indian manufacturers.
              </p>
              <p style={{ color: '#5a6a88', lineHeight: 1.9, marginBottom: 20, fontSize: '0.95rem' }}>
                Led by Manan Singhal — a seasoned Automation & Robotics Engineer and Robotic Welding Expert — we specialize in the design, integration, and commissioning of complete robotic welding cells, special purpose machines (SPM), and welding automation equipment.
              </p>
              <p style={{ color: '#5a6a88', lineHeight: 1.9, fontSize: '0.95rem' }}>
                From our base in Ghaziabad, UP, we serve clients pan-India across scaffolding, automotive, construction, oil & gas, agriculture, and infrastructure sectors.
              </p>
            </div>
            <div className="reveal-right" style={{ position: 'relative', height: 460, borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 30px rgba(13,45,94,0.1)' }}>
              <Image src="/product-robotic-welding.png" alt="Mantronix Engineering" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,45,94,0.8), transparent)' }} />
              <div style={{ position: 'absolute', bottom: 32, left: 32, right: 32 }}>
                <div style={{ fontFamily: 'var(--font-rajdhani)', fontSize: '2.5rem', fontWeight: 800, color: '#c9a227', lineHeight: 1, marginBottom: 8 }}>15+</div>
                <div style={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>Years of Engineering Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Facts */}
      <section style={{ background: 'linear-gradient(135deg, #0d2d5e 0%, #1565C0 100%)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 32 }}>
            {[
              { label: 'Founded', value: '2008' },
              { label: 'Projects Delivered', value: '500+' },
              { label: 'Client Retention', value: '98%' },
              { label: 'States Served', value: 'Pan-India' },
            ].map((s, i) => (
              <div key={s.label} className="reveal" style={{ transitionDelay: `${i * 0.1}s`, textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-rajdhani)', fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: 8 }}>{s.value}</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-py" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }} className="reveal">
            <span className="section-label">Leadership</span>
            <h2 className="section-title">Meet Our <span>Expert</span></h2>
            <div className="gold-divider" style={{ margin: '16px auto 0' }} />
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto', background: '#f8faff', border: '1px solid rgba(13,45,94,0.06)', borderRadius: 16, padding: 40, display: 'flex', alignItems: 'center', gap: 32, boxShadow: '0 4px 20px rgba(13,45,94,0.08)' }} className="reveal">
            <div style={{ width: 120, height: 120, borderRadius: '50%', background: '#0d2d5e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fff', fontSize: '3rem' }}>
              <i className="fas fa-user-tie"></i>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-rajdhani)', fontSize: '1.8rem', fontWeight: 700, color: '#0d2d5e', marginBottom: 8 }}>{team[0].name}</h3>
              <div style={{ color: '#1565C0', fontWeight: 600, fontSize: '0.9rem', marginBottom: 16 }}>{team[0].role}</div>
              <p style={{ color: '#5a6a88', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 20 }}>
                With profound expertise in robotics and welding automation, Manan leads the engineering teams at Mantronix to design cutting-edge solutions that solve complex manufacturing challenges.
              </p>
              <a href={`mailto:${team[0].email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#0d2d5e', fontWeight: 600, fontSize: '0.85rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#1565C0'} onMouseLeave={e => e.currentTarget.style.color = '#0d2d5e'}>
                <i className="fas fa-envelope"></i> Contact Manan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-py" style={{ background: '#f0f4f8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
            <span className="section-label">Milestones</span>
            <h2 className="section-title">Our Journey of <span>Innovation</span></h2>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {milestones.map((m, i) => (
              <div key={m.year} className="reveal" style={{ display: 'flex', gap: 32, marginBottom: i === milestones.length - 1 ? 0 : 40, position: 'relative' }}>
                {i !== milestones.length - 1 && <div style={{ position: 'absolute', left: 47, top: 40, bottom: -40, width: 2, background: 'rgba(21,101,192,0.2)' }} />}
                <div style={{ width: 96, flexShrink: 0, textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-rajdhani)', fontSize: '1.5rem', fontWeight: 800, color: '#1565C0' }}>{m.year}</div>
                </div>
                <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#fff', border: '4px solid #1565C0', marginTop: 8, position: 'relative', zIndex: 1 }} />
                <div style={{ flex: 1, paddingBottom: 12 }}>
                  <h4 style={{ fontFamily: 'var(--font-rajdhani)', fontSize: '1.25rem', fontWeight: 700, color: '#0d2d5e', marginBottom: 8 }}>{m.title}</h4>
                  <p style={{ color: '#5a6a88', fontSize: '0.9rem', lineHeight: 1.6 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ textAlign: 'center', padding: '64px 0', background: '#fff' }} className="reveal">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontSize: '2rem', fontWeight: 700, color: '#0d2d5e', marginBottom: 16 }}>Partner with Mantronix Solutions</h2>
          <p style={{ color: '#5a6a88', marginBottom: 32, maxWidth: 600, margin: '0 auto 32px' }}>
            Let our engineering team help you implement the right automation strategy for your production floor.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
