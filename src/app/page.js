'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const stats = [
  { number: '750+', label: 'Projects Delivered' },
  { number: '200+', label: 'Happy Clients' },
  { number: '15+', label: 'Years Experience' },
  { number: '40+', label: 'Expert Engineers' },
];

const productCategories = [
  { title: 'Robotic Welding', desc: 'Complete robotic welding cell solutions using Fanuc ARC Mate robots with full cell configurations, positioners, linear tracks, and safety systems.', icon: '🤖', href: '/products/robotic-welding', img: '/images/products/robotic-welding.jpg', tags: ['Fanuc Robots', 'Welding Cells', 'Positioners'] },
  { title: 'Welding SPM', desc: 'Special Purpose Machines for high-volume welding automation – scaffolding, hydraulic cylinders, compressor tanks, submersible pumps, and more.', icon: '⚙️', href: '/products/welding-spm', img: '/images/products/welding-spm.jpg', tags: ['Scaffolding SPM', 'Hydraulic SPM', 'Custom SPM'] },
  { title: 'Welding Equipment', desc: 'Industrial-grade welding automation equipment – turn tables, rotators, positioners, MagBOT & LineBOT carriages, column-and-boom manipulators.', icon: '🔧', href: '/products/welding-equipment', img: '/images/products/welding-equipment.jpg', tags: ['Turn Tables', 'Rotators', 'Positioners'] },
  { title: 'Welding Accessories', desc: 'High-quality welding automation accessories – oscillators, AVC units, water circulation, cold wire feeders, welding chucks, XY slides, and teach pendants.', icon: '🔩', href: '/products/welding-accessories', img: '/images/products/welding-accessories.jpg', tags: ['Oscillators', 'AVC Units', 'Chucks'] },
];

const features = [
  { icon: 'fas fa-robot',            title: 'End-to-End Automation',  desc: 'Complete turnkey automation solutions from design to commissioning.' },
  { icon: 'fas fa-cogs',             title: 'Custom SPM Design',       desc: 'Bespoke Special Purpose Machines tailored to your exact production needs.' },
  { icon: 'fas fa-shield-alt',       title: 'Quality Assured',         desc: 'All systems rigorously tested before dispatch with full documentation.' },
  { icon: 'fas fa-headset',          title: 'After-Sales Support',     desc: '24/7 technical support and on-site service across India.' },
  { icon: 'fas fa-drafting-compass', title: 'Engineering Expertise',   desc: '15+ years of automation engineering in robotic welding systems.' },
  { icon: 'fas fa-industry',         title: 'Industry 4.0 Ready',      desc: 'Smart automation solutions compatible with modern Industry 4.0 standards.' },
];

const industries = ['Scaffolding','Automotive','Construction','Oil & Gas','Mining','Agriculture','HVAC','Infrastructure','Compressors','Hydraulics'];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const S = { /* inline style helpers */
  sectionLabelDark: { color: 'rgba(255,255,255,0.6)', paddingLeft: 32, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', display: 'inline-block', marginBottom: 14, position: 'relative' },
};

export default function HomePage() {
  const [vis, setVis] = useState(false);
  useScrollReveal();
  useEffect(() => { const t = setTimeout(() => setVis(true), 60); return () => clearTimeout(t); }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ minHeight: '95vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 120, background: '#f4f7fb' }}>
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/products/robotic-welding.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08, zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(244,247,251,0.97) 45%, rgba(244,247,251,0.65) 100%)', zIndex: 1 }} />
        {/* Blobs */}
        <div style={{ position: 'absolute', top: '8%', right: '4%', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(13,45,94,0.08) 0%, transparent 70%)', animation: 'float 7s ease-in-out infinite', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: '5%', left: '3%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,73,116,0.06) 0%, transparent 70%)', animation: 'float 9s ease-in-out infinite 2s', zIndex: 1 }} />

        {/* Product image right */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '46%', zIndex: 2, overflow: 'hidden', opacity: vis ? 1 : 0, transition: 'opacity 1s ease 0.5s' }}>
          <Image src="/images/products/robotic-welding.jpg" alt="Robotic Welding" fill style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #f4f7fb 0%, rgba(244,247,251,0.3) 40%, transparent 70%)' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div style={{ maxWidth: 680, opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(40px)', transition: 'opacity 0.9s ease, transform 0.9s ease' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(13,45,94,0.08)', border: '1px solid rgba(13,45,94,0.18)', borderRadius: 100, padding: '8px 20px', marginBottom: 28 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#0d2d5e', animation: 'pulse-ring 2s infinite' }} />
              <span style={{ color: '#0d2d5e', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>India's Leading Welding Automation Integrator</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', color: '#0a1f3d', marginBottom: 28, letterSpacing: '-0.01em' }}>
              Precision Welding<br />
              <span style={{ color: '#0d2d5e' }}>Automation</span> Solutions
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#4a6080', marginBottom: 44, lineHeight: 1.85, maxWidth: 560 }}>
              Mantronix Solutions delivers world-class robotic welding cells, special purpose machines, and welding automation equipment — engineered for precision, built for productivity.
            </p>
            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginBottom: 52 }}>
              <Link href="/products" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '0.92rem' }}>
                <i className="fas fa-layer-group" /> Explore Products
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{ padding: '16px 40px', fontSize: '0.92rem' }}>
                <i className="fas fa-phone-alt" /> Get Free Consultation
              </Link>
            </div>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {['ISO Certified','Pan India Service','Turnkey Solutions','Fanuc Authorised'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#4a6080', fontSize: '0.88rem' }}>
                  <i className="fas fa-check-circle" style={{ color: '#0d2d5e', fontSize: '0.8rem' }} /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: '#7a90b0', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', zIndex: 3 }}>
          <span>Scroll</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #0d2d5e, transparent)' }} />
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#0a1f3d' }}>
        <div className="container" style={{ padding: '56px var(--container-px)' }}>
          <div className="grid-4" style={{ gap: 0 }}>
            {stats.map((s, i) => (
              <div key={s.label} className="reveal" style={{ transitionDelay: `${i*0.1}s`, textAlign: 'center', padding: '24px 16px', borderRight: i < stats.length-1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.4rem,4vw,3.5rem)', fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: 8 }}>{s.number}</div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="section-py" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }} className="reveal">
            <span className="section-label">Our Product Range</span>
            <h2 className="section-title">Comprehensive Welding <span>Automation</span> Solutions</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              From robotic welding cells to custom SPM machines — end-to-end automation solutions for every industrial welding need.
            </p>
          </div>
          <div className="grid-2" style={{ gap: 32 }}>
            {productCategories.map((cat, i) => (
              <Link key={cat.title} href={cat.href} style={{ display: 'block', textDecoration: 'none' }}>
                <div className="reveal" style={{ transitionDelay: `${i*0.1}s`, background: '#fff', borderRadius: 18, overflow: 'hidden', boxShadow: '0 6px 28px rgba(10,31,61,0.10)', border: '1px solid rgba(10,31,61,0.06)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform='translateY(-10px)'; e.currentTarget.style.boxShadow='0 24px 64px rgba(10,31,61,0.18)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 6px 28px rgba(10,31,61,0.10)'; }}>
                  <div style={{ position: 'relative', height: 280, overflow: 'hidden', background: '#e8eef8' }}>
                    <Image src={cat.img} alt={cat.title} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,31,61,0.72) 0%, rgba(10,31,61,0.1) 55%, transparent 100%)' }} />
                    <div style={{ position: 'absolute', top: 20, left: 20 }}>
                      <span style={{ fontSize: '1.8rem', background: 'rgba(255,255,255,0.18)', padding: '10px 12px', borderRadius: 10, backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)' }}>{cat.icon}</span>
                    </div>
                    <div style={{ position: 'absolute', bottom: 20, right: 20 }}>
                      <span style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 100, padding: '6px 16px', fontSize: '0.75rem', fontWeight: 700, backdropFilter: 'blur(10px)' }}>View All →</span>
                    </div>
                  </div>
                  <div style={{ padding: '28px 32px' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.65rem', fontWeight: 700, color: '#0a1f3d', marginBottom: 12 }}>{cat.title}</h3>
                    <p style={{ color: '#4a6080', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: 18 }}>{cat.desc}</p>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      {cat.tags.map(t => <span key={t} className="chip" style={{ fontSize: '0.75rem' }}>{t}</span>)}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }} className="reveal">
            <Link href="/products" className="btn btn-outline" style={{ padding: '15px 40px' }}>View All Products <i className="fas fa-arrow-right" /></Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section-py" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/products/robotic-welding.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.05 }} />
        <div style={{ position: 'absolute', inset: 0, background: '#f4f7fb' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-2" style={{ gap: 72, alignItems: 'center' }}>
            <div className="reveal-left">
              <span className="section-label">Why Choose Mantronix</span>
              <h2 className="section-title">India&apos;s Trusted <span>Automation</span> &amp; Robotics Partner</h2>
              <div className="gold-divider" />
              <p style={{ marginBottom: 36, fontSize: '1.05rem' }}>With over 15 years of engineering excellence, Mantronix Solutions has delivered 500+ automation projects across India, helping manufacturers reduce costs and increase productivity.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {features.slice(0, 3).map(f => (
                  <div key={f.title} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: 'rgba(13,45,94,0.08)', border: '1px solid rgba(13,45,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={f.icon} style={{ color: '#0d2d5e', fontSize: '1.1rem' }} />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#0a1f3d', marginBottom: 5 }}>{f.title}</h4>
                      <p style={{ fontSize: '0.92rem', margin: 0 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn btn-primary" style={{ marginTop: 36, padding: '15px 38px' }}>Learn About Us <i className="fas fa-arrow-right" /></Link>
            </div>
            <div className="reveal-right grid-2" style={{ gap: 20 }}>
              {features.map((f, i) => (
                <div key={f.title} style={{ padding: 28, borderRadius: 16, background: '#fff', border: '1px solid rgba(10,31,61,0.07)', boxShadow: '0 4px 20px rgba(10,31,61,0.08)', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 16px 48px rgba(10,31,61,0.14)'; e.currentTarget.style.borderColor='rgba(13,45,94,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 20px rgba(10,31,61,0.08)'; e.currentTarget.style.borderColor='rgba(10,31,61,0.07)'; }}>
                  <i className={f.icon} style={{ color: '#0d2d5e', fontSize: '1.7rem', marginBottom: 14, display: 'block' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, color: '#0a1f3d', marginBottom: 8 }}>{f.title}</h4>
                  <p style={{ fontSize: '0.85rem', margin: 0, lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="section-py" style={{ background: '#0a1f3d' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
            <span style={S.sectionLabelDark}>Industries We Serve</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(2rem,3.5vw,2.75rem)', fontWeight: 700, marginBottom: 0 }}>Serving <span style={{ color: '#42A5F5' }}>Diverse</span> Industries</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }} className="reveal">
            {industries.map(c => (
              <div key={c} style={{ padding: '13px 30px', background: 'rgba(255,255,255,0.06)', border: '1.5px solid rgba(255,255,255,0.12)', borderRadius: 100, color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem', fontWeight: 600, transition: 'all 0.25s', letterSpacing: '0.04em' }}
                onMouseEnter={e => { e.currentTarget.style.background='#0d2d5e'; e.currentTarget.style.borderColor='#0d2d5e'; e.currentTarget.style.color='#fff'; e.currentTarget.style.transform='translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.12)'; e.currentTarget.style.color='rgba(255,255,255,0.85)'; e.currentTarget.style.transform='none'; }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="section-py" style={{ background: '#f4f7fb' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }} className="reveal">
            <div>
              <span className="section-label">Our Work</span>
              <h2 className="section-title">Project <span>Gallery</span></h2>
            </div>
            <Link href="/gallery" className="btn btn-outline" style={{ padding: '13px 32px' }}>View All Projects <i className="fas fa-arrow-right" /></Link>
          </div>
          <div className="grid-3" style={{ gap: 24 }}>
            {[
              { src: '/images/products/robotic-welding.jpg', title: 'Robotic Welding Cell' },
              { src: '/images/products/welding-spm.jpg', title: 'Welding SPM' },
              { src: '/images/products/welding-equipment.jpg', title: 'Welding Equipment' },
            ].map((img, i) => (
              <Link key={img.title} href="/gallery" style={{ display: 'block' }}>
                <div className="reveal" style={{ transitionDelay: `${i*0.1}s`, borderRadius: 16, overflow: 'hidden', position: 'relative', height: 260 }}
                  onMouseEnter={e => { e.currentTarget.querySelector('.gh-ov').style.opacity='1'; }}
                  onMouseLeave={e => { e.currentTarget.querySelector('.gh-ov').style.opacity='0'; }}>
                  <Image src={img.src} alt={img.title} fill style={{ objectFit: 'cover', transition: 'transform 0.45s ease' }} />
                  <div className="gh-ov" style={{ position: 'absolute', inset: 0, background: 'rgba(10,31,61,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s ease' }}>
                    <div style={{ textAlign: 'center', color: '#fff' }}>
                      <i className="fas fa-expand" style={{ fontSize: '1.8rem', marginBottom: 10, display: 'block' }} />
                      <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>{img.title}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #004974 100%)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-40%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, color: '#fff', marginBottom: 20 }} className="reveal">
            Ready to Automate Your <span style={{ color: '#42A5F5' }}>Production Line?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: 44, maxWidth: 560, margin: '0 auto 44px' }} className="reveal">
            Contact our automation experts for a free consultation and custom solution proposal.
          </p>
          <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }} className="reveal">
            <Link href="/contact" className="btn" style={{ padding: '16px 44px', fontSize: '0.95rem', background: '#fff', color: '#0a1f3d', fontWeight: 800 }}>
              <i className="fas fa-phone-alt" /> Get Free Quote
            </Link>
            <a href="tel:+918178075592" className="btn" style={{ padding: '16px 44px', fontSize: '0.95rem', background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}>
              <i className="fas fa-phone" /> Call: +91 8178075592
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
