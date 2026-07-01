'use client';

import Link from 'next/link';
import Image from 'next/image';

const SPM_BASE = '/images/products/welding-spm.jpg';
const SPM_SCAFFOLDING = '/images/products/scaffolding-spm.jpg';
const SPM_HYDRAULIC = '/images/products/hydraulic-spm.jpg';
const SPM_COMPRESSOR = '/images/products/compressor-spm.jpg';
const SPM_PUMP = '/images/products/pump-spm.jpg';
const SPM_FLANGE = '/images/products/flange-spm.jpg';
const SPM_CONVEYOR = '/images/products/conveyor-spm.jpg';
const SPM_WIREMESH = '/images/products/wiremesh-spm.jpg';
const SPM_BALL = '/images/products/ball-spm.jpg';
const SPM_TILES = '/images/products/tiles-spm.jpg';

const subcategories = [
  {
    name: 'Automatic Scaffolding Welding SPM',
    products: [
      { name: 'Cuplock (Vertical) Welding SPM', img: SPM_SCAFFOLDING, desc: 'Fully automatic SPM for welding cuplock standards at high production rates.' },
      { name: 'Ledger (Horizontal) Welding SPM', img: SPM_SCAFFOLDING, desc: 'Automated SPM for welding ledger pipes with precise cup positioning.' },
      { name: 'Base Jack Welding SPM', img: SPM_SCAFFOLDING, desc: 'Automatic SPM for welding base jacks — standard scaffold base with screw-threaded extension.' },
      { name: 'Inner/Outer PROP Welding SPM', img: SPM_SCAFFOLDING, desc: 'SPM for welding inner and outer prop scaffolding components.' },
      { name: 'Robotic Cuplock PIN Welding', img: '/images/products/fanuc-robot.jpg', desc: 'Robotic welding of cuplock pin components for scaffolding.' },
      { name: 'Aluminium Formwork Robotic Welding', img: '/images/products/fanuc-robot.jpg', desc: 'Specialized robotic welding for aluminium formwork panels.' },
      { name: 'Fully Automatic PIPE Drilling SPM', img: SPM_SCAFFOLDING, desc: 'Fully automatic pipe drilling SPM for scaffolding pipe preparation.' },
    ],
  },
  {
    name: 'Automatic Hydraulic Cylinder Welding SPM',
    products: [
      { name: 'Oil Port Welding SPM', img: SPM_HYDRAULIC, desc: 'Specialized SPM for welding oil port nipples on hydraulic cylinders.' },
      { name: 'Hydraulic Cylinder SPM 2000', img: SPM_HYDRAULIC, desc: 'High-precision SPM for automatic circumferential welding up to 2000mm cylinder length.' },
      { name: 'Hydraulic Cylinder SPM 3000', img: SPM_HYDRAULIC, desc: 'Extended capacity SPM for welding hydraulic cylinders up to 3000mm length.' },
    ],
  },
  {
    name: 'Automatic Compressor Tank Welding SPM',
    products: [
      { name: 'Automatic Compressor Welding RCW-1000', img: SPM_COMPRESSOR, desc: 'Dedicated SPM for welding compressor tank heads and shells – 1000L capacity.' },
      { name: 'Automatic Compressor Welding RCW-2000', img: SPM_COMPRESSOR, desc: 'SPM for welding compressor tanks – 2000L capacity with fast cycle times.' },
      { name: 'Automatic Compressor Welding RCW-3000', img: SPM_COMPRESSOR, desc: 'Heavy-duty SPM for welding large compressor tanks – 3000L capacity.' },
    ],
  },
  {
    name: 'Submersible Pump Welding Solution',
    products: [
      { name: 'Automatic Submersible Pump Bowl Welding SPM', img: SPM_PUMP, desc: 'Automated SPM for welding submersible pump bowls with enclosed body.' },
      { name: 'Stator Body Welding SPM – Dual Head', img: SPM_PUMP, desc: 'Dual head SPM for high-speed stator body welding.' },
      { name: 'Stator Body Welding SPM – Single Head', img: SPM_PUMP, desc: 'Single head SPM for precise stator body circumferential welding.' },
      { name: 'Patti to Stud Welding SPM', img: SPM_PUMP, desc: 'Automated SPM for welding patti (flat) to stud connections.' },
      { name: 'Sleeve Welding SPM', img: SPM_PUMP, desc: 'Specialized SPM for welding sleeves onto pump bodies.' },
    ],
  },
  {
    name: 'Pipe to Flange Welding SPM',
    products: [
      { name: 'Automatic Pipe Spool Welding SPM', img: SPM_FLANGE, desc: 'Automated SPM for accurate MIG welding of pipe spool assemblies.' },
      { name: 'Automatic Slip-on Flange Welding SPM', img: SPM_FLANGE, desc: 'Automated SPM for slip-on flange to pipe welding with precise alignment.' },
      { name: 'Pipe Flange Welding SPM – Dual Head', img: SPM_FLANGE, desc: 'Dual head SPM for increased throughput on pipe-to-flange welding.' },
    ],
  },
  {
    name: 'Conveyor Welding SPM',
    products: [
      { name: 'Automatic Conveyor Roller Welding SPM', img: SPM_CONVEYOR, desc: 'High-speed SPM for continuous automated welding of conveyor roller shells and end caps.' },
      { name: 'Fully Automatic Conveyor Roller Welding SPM', img: SPM_CONVEYOR, desc: 'Fully automatic conveyor roller welding with auto-loading and unloading.' },
      { name: 'Conveyor Roller Pulley Welding SPM', img: SPM_BASE, desc: 'Specialized SPM for welding conveyor roller pulley components.' },
    ],
  },
  {
    name: 'TMT Wiremesh Welding SPM',
    products: [
      { name: 'Semi Automatic TMT Wiremesh Welding SPM', img: SPM_WIREMESH, desc: 'Semi-automatic resistance welding SPM for TMT rebar wiremesh panels.' },
      { name: 'Fully Automatic TMT Wiremesh Welding SPM', img: SPM_WIREMESH, desc: 'Fully automatic high-speed TMT wiremesh welding machine for construction.' },
    ],
  },
  {
    name: 'Others',
    products: [
      { name: 'Tiles Mold Edge Hardfacing SPM', img: SPM_TILES, desc: 'Specialized SPM for hardfacing the edges of tiles mold for extended tool life.' },
      { name: 'Longseam Welding SPM', img: SPM_BASE, desc: 'Longitudinal seam welding SPM for tanks, pipes, and structural members.' },
      { name: 'Crane Hoist Shaft Welding SPM', img: SPM_BASE, desc: 'Precision SPM for welding crane hoist shafts and drum components.' },
      { name: 'Ball Welding SPM', img: SPM_BALL, desc: 'Specialized SPM for automated welding of ball-type components.' },
    ],
  },
];

export default function WeldingSPMPage() {
  return (
    <>
      <section style={{
        minHeight: 320,
        background: 'linear-gradient(135deg, #0d2d5e 0%, #1565C0 100%)',
        position: 'relative', display: 'flex', alignItems: 'center',
        padding: '100px 0 56px', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${SPM_BASE})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,45,94,0.92) 0%, rgba(21,101,192,0.85) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Products</span>
          <h1 style={{ fontFamily: 'var(--font-rajdhani)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: 16 }}>
            Welding <span style={{ color: '#42A5F5' }}>SPM</span>
          </h1>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.8)' }}>Home</Link>
            <span>›</span>
            <Link href="/products" style={{ color: 'rgba(255,255,255,0.8)' }}>Products</Link>
            <span>›</span>
            <span>Welding SPM</span>
          </nav>
        </div>
      </section>

      {subcategories.map((sub, si) => (
        <section key={sub.name} className="section-py" style={{ background: si % 2 === 0 ? '#f8faff' : '#fff', borderTop: '1px solid rgba(13,45,94,0.06)' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36 }}>
              <div style={{ width: 4, height: 40, background: 'linear-gradient(to bottom, #0d2d5e, #1565C0)', borderRadius: 2, flexShrink: 0 }} />
              <div>
                <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 700, color: '#0d2d5e', marginBottom: 4 }}>{sub.name}</h2>
                <p style={{ color: '#5a6a88', fontSize: '0.875rem' }}>{sub.products.length} product{sub.products.length > 1 ? 's' : ''} available</p>
              </div>
            </div>
            <div className="grid-4" style={{ gap: 22 }}>
              {sub.products.map(p => (
                <div key={p.name} style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 20px rgba(13,45,94,0.08)', border: '1px solid rgba(13,45,94,0.06)', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(13,45,94,0.16)'; e.currentTarget.style.borderColor = 'rgba(21,101,192,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(13,45,94,0.08)'; e.currentTarget.style.borderColor = 'rgba(13,45,94,0.06)'; }}>
                  <div style={{ position: 'relative', height: 160, overflow: 'hidden', background: '#e8eef6' }}>
                    <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '16px 18px' }}>
                    <h3 style={{ fontFamily: 'var(--font-rajdhani)', fontSize: '0.95rem', fontWeight: 700, color: '#0d2d5e', marginBottom: 8, lineHeight: 1.3 }}>{p.name}</h3>
                    <p style={{ color: '#5a6a88', fontSize: '0.78rem', lineHeight: 1.6, marginBottom: 14 }}>{p.desc}</p>
                    <Link href="/contact" className="btn btn-primary" style={{ fontSize: '0.72rem', padding: '7px 14px' }}>
                      <i className="fas fa-phone-alt"></i> Enquire
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section style={{ background: 'linear-gradient(135deg, #0d2d5e, #1565C0)', padding: '64px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontSize: 'clamp(1.5rem,2.5vw,2.2rem)', fontWeight: 700, color: '#fff', marginBottom: 12 }}>Need a Custom SPM Machine?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>We design, build, and commission special purpose welding machines tailored to your production needs.</p>
          <Link href="/contact" className="btn" style={{ background: '#fff', color: '#0d2d5e', fontWeight: 700, padding: '13px 36px' }}>
            <i className="fas fa-phone-alt"></i> Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
