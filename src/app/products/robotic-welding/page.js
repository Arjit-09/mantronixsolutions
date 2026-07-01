'use client';

import Link from 'next/link';
import Image from 'next/image';

const subcategories = [
  {
    name: 'Welding Robot',
    img: '/images/products/fanuc-robot.jpg',
    products: [
      { name: 'Fanuc ARC Mate 100ID – 1441mm Reach', img: '/images/products/fanuc-robot.jpg', desc: '6-axis Fanuc welding robot with 1441mm reach for precise MIG/TIG/Arc welding.' },
      { name: 'Fanuc ARC Mate 100ID/8L – 2032mm Reach', img: '/images/products/fanuc-robot.jpg', desc: 'Extended reach 2032mm Fanuc ARC Mate robot for large component welding.' },
    ],
  },
  {
    name: 'Robot Linear Track',
    img: '/images/products/robot-linear-track.jpg',
    products: [
      { name: 'RLT-1 Addon', img: '/images/products/robot-linear-track.jpg', desc: 'Add-on linear track for extended robot reach on single bay.' },
      { name: 'RLT-3', img: '/images/products/robot-linear-track.jpg', desc: '3 metre robot linear track for longitudinal weld runs.' },
      { name: 'RLT-6', img: '/images/products/robot-linear-track.jpg', desc: '6 metre robot linear track for large structure welding.' },
      { name: 'RLT-10', img: '/images/products/robot-linear-track.jpg', desc: '10 metre robot linear track for ship, rail, and construction steel.' },
    ],
  },
  {
    name: 'Robotic Welding Cell',
    img: '/images/products/robotic-welding.jpg',
    products: [
      { name: 'Robot with Table', img: '/images/products/robotic-welding.jpg', desc: 'Complete robotic welding cell with rotating work table for continuous production.' },
      { name: 'Robot with HSTS Positioner', img: '/images/products/hsts-positioner.jpg', desc: 'Robotic welding cell with Head and Tail Synchronized Positioner for heavy components.' },
      { name: 'Robot with Dual HSTS Positioner', img: '/images/products/hsts-positioner.jpg', desc: 'Dual positioner setup for back-to-back loading and continuous welding.' },
      { name: 'Robot with 2 Axis Positioner', img: '/images/products/two-axis-positioner.jpg', desc: 'Two-axis servo positioner for complex workpiece orientation.' },
      { name: 'Robot with 1 Axis Positioner', img: '/images/products/hsts-positioner.jpg', desc: 'Single-axis motorized positioner for cylindrical components.' },
      { name: 'Robot With Linear Track', img: '/images/products/robot-linear-track.jpg', desc: 'Extended-reach robotic welding with floor-mounted linear track.' },
      { name: 'Formwork Robotic Welding Solution', img: '/images/products/robotic-welding.jpg', desc: 'Specialized robotic welding for aluminium formwork panels.' },
      { name: 'Cuplock Pin Robotic Welding Solution', img: '/images/products/robotic-welding.jpg', desc: 'Automated robotic welding for cuplock pin scaffolding components.' },
      { name: 'Spade Robotic Welding Solution', img: '/images/products/robotic-welding.jpg', desc: 'Robotic cell for high-volume spade welding automation.' },
      { name: 'Scaffolding Base Jack Robotic Welding', img: '/images/products/robotic-welding.jpg', desc: 'Fully automated robotic welding for scaffolding base jacks.' },
      { name: 'Hospital Bed Robotic Welding Solution', img: '/images/products/robotic-welding.jpg', desc: 'Precision robotic welding for hospital bed frames and structures.' },
      { name: 'Battery Box Robotic Laser Welding', img: '/images/products/robotic-welding.jpg', desc: 'Laser robotic welding for EV battery boxes with high precision.' },
      { name: 'CNC Material Handling Robotic Solution', img: '/images/products/robotic-welding.jpg', desc: 'Robotic material handling integrated with CNC machining centers.' },
    ],
  },
  {
    name: 'Single Axis Head & Tail Positioner',
    img: '/images/products/hsts-positioner.jpg',
    products: [
      { name: 'RSAP-N 2x1x300 – Non Sync', img: '/images/products/hsts-positioner.jpg', desc: '2m span, 1m height, 300kg capacity non-synchronized single axis positioner.' },
      { name: 'RSAP-S 2x1x300 – Sync', img: '/images/products/hsts-positioner.jpg', desc: '2m span, 1m height, 300kg synchronized single axis positioner.' },
      { name: 'RSAP-N 2.5x1x300', img: '/images/products/hsts-positioner.jpg', desc: '2.5m span, 1m height, 300kg non-synchronized positioner.' },
      { name: 'RSAP-N 2.5x1x500', img: '/images/products/hsts-positioner.jpg', desc: '2.5m span, 1m height, 500kg non-synchronized positioner.' },
      { name: 'RSAP-N 2x1x1000', img: '/images/products/hsts-positioner.jpg', desc: '2m span, 1m height, 1000kg non-synchronized positioner.' },
      { name: 'RSAP-N 2.5x1x1000', img: '/images/products/hsts-positioner.jpg', desc: '2.5m span, 1m height, 1000kg non-synchronized positioner.' },
    ],
  },
  {
    name: 'Two Axis Positioner',
    img: '/images/products/two-axis-positioner.jpg',
    products: [
      { name: 'RTAP-500 Two Axis Positioner – Non Sync', img: '/images/products/two-axis-positioner.jpg', desc: '500kg dual-axis servo positioner for complex workpiece orientation.' },
      { name: 'RTAP-300 Two Axis Positioner – Non Sync', img: '/images/products/two-axis-positioner.jpg', desc: '300kg dual-axis servo positioner for medium-weight components.' },
    ],
  },
  {
    name: 'Robotic Rotary Turn Table',
    img: '/images/products/turn-table.jpg',
    products: [
      { name: 'RTT-300 – Non Sync', img: '/images/products/turn-table.jpg', desc: '300kg robotic rotary turn table for alternating weld cell operation.' },
      { name: 'RTT-500 – Non Sync', img: '/images/products/turn-table.jpg', desc: '500kg robotic rotary turn table for medium component welding.' },
      { name: 'RTT-1000 – Non Sync', img: '/images/products/turn-table.jpg', desc: '1000kg heavy duty robotic rotary turn table.' },
      { name: 'RTT-2000 – Non Sync', img: '/images/products/turn-table.jpg', desc: '2000kg extra-heavy duty robotic rotary turn table.' },
    ],
  },
  {
    name: 'Robotic Welding Machine',
    img: '/images/products/welding-machine.jpg',
    products: [
      { name: 'Fronius Robotic Welding Machine', img: '/images/products/welding-machine.jpg', desc: 'Austrian precision Fronius robotic MIG/TIG welding power sources.' },
      { name: 'EWM Robotic Welding Machine', img: '/images/products/welding-machine.jpg', desc: 'German EWM robotic welding machines for premium quality welds.' },
      { name: 'OTC Robotic Welding Machine', img: '/images/products/welding-machine.jpg', desc: 'Japanese OTC Daihen robotic welding power sources.' },
      { name: 'AOTAI Robotic Welding Machine', img: '/images/products/welding-machine.jpg', desc: 'AOTAI robotic welding machines for cost-effective automation.' },
      { name: 'MAGMEET Robotic Welding Machine', img: '/images/products/welding-machine.jpg', desc: 'MAGMEET robotic welding power sources with digital control.' },
      { name: 'CLOOS Robotic Welding Machine', img: '/images/products/welding-machine.jpg', desc: 'German CLOOS robotic welding systems for automotive grade quality.' },
    ],
  },
  {
    name: 'Safety & Accessories',
    img: '/images/products/safety-fence.jpg',
    products: [
      { name: 'Robot Safety Fence (Barricade)', img: '/images/products/safety-fence.jpg', desc: 'Modular steel safety fence systems for robotic welding cell perimeter guarding.' },
      { name: 'Robot Pedestal', img: '/images/products/robot-pedestal.jpg', desc: 'Heavy-duty steel robot pedestals for floor-mounted and elevated robot installations.' },
      { name: 'Welding Fixture', img: '/images/products/welding-fixture.jpg', desc: 'Custom robotic welding fixtures for precise component positioning and repeatability.' },
    ],
  },
];

export default function RoboticWeldingPage() {
  return (
    <>
      <section style={{
        minHeight: 320,
        background: 'linear-gradient(135deg, #0d2d5e 0%, #1565C0 100%)',
        position: 'relative', display: 'flex', alignItems: 'center',
        padding: '100px 0 56px', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/products/fanuc-robot.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,45,94,0.92) 0%, rgba(21,101,192,0.85) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Products</span>
          <h1 style={{ fontFamily: 'var(--font-rajdhani)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: 16 }}>
            Robotic <span style={{ color: '#42A5F5' }}>Welding</span>
          </h1>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.8)' }}>Home</Link>
            <span>›</span>
            <Link href="/products" style={{ color: 'rgba(255,255,255,0.8)' }}>Products</Link>
            <span>›</span>
            <span>Robotic Welding</span>
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
                  <div style={{ position: 'relative', height: 180, overflow: 'hidden', background: '#e8eef6' }}>
                    <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                  </div>
                  <div style={{ padding: '18px 20px' }}>
                    <h3 style={{ fontFamily: 'var(--font-rajdhani)', fontSize: '1rem', fontWeight: 700, color: '#0d2d5e', marginBottom: 8, lineHeight: 1.3 }}>{p.name}</h3>
                    <p style={{ color: '#5a6a88', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: 14 }}>{p.desc}</p>
                    <Link href="/contact" className="btn btn-primary" style={{ fontSize: '0.75rem', padding: '7px 16px' }}>
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
          <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontSize: 'clamp(1.5rem,2.5vw,2.2rem)', fontWeight: 700, color: '#fff', marginBottom: 12 }}>
            Need a Custom Robotic Welding Cell?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>Our engineers design complete turnkey robotic welding solutions from concept to commissioning.</p>
          <Link href="/contact" className="btn" style={{ background: '#fff', color: '#0d2d5e', fontWeight: 700, padding: '13px 36px' }}>
            <i className="fas fa-phone-alt"></i> Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
