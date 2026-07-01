'use client';
import Link from 'next/link';
import Image from 'next/image';

const productData = [
  {
    id: 'robotic-welding', title: 'Robotic Welding', icon: '🤖',
    img: '/images/products/robotic-welding.jpg',
    desc: 'A wide demand across industries around the world, robotic welding cells were designed to work with an array of welding processes. Mantronix works with Fanuc ARC Mate robots and leading OEM brands to build systems of any size.',
    subcategories: [
      { name: 'Welding Robot',            img: '/images/products/fanuc-robot.jpg',                                        items: ['Fanuc ARC Mate 100ID (1441mm Reach)', 'Fanuc ARC Mate 100ID/8L (2032mm Reach)'] },
      { name: 'Robot Linear Track',       img: '/images/products/robot-linear-track.jpg',                                items: ['RLT-1 Addon', 'RLT-3', 'RLT-6', 'RLT-10'] },
      { name: 'Robotic Welding Cell',     img: '/images/products/robotic-welding.jpg',                                         items: ['Robot with Table', 'Robot with HSTS Positioner', 'Robot with Dual HSTS Positioner', 'Robot with 2 Axis Positioner', 'Robot with 1 Axis Positioner', 'Robot With Linear Track', 'Formwork Robotic Welding', 'Cuplock Pin Robotic Welding', 'Spade Robotic Welding', 'Scaffolding Base Jack Welding', 'Hospital Bed Robotic Welding', 'Battery Box Laser Welding', 'CNC Material Handling'] },
      { name: 'Single Axis H&T Positioner', img: '/images/products/hsts-positioner.jpg',         items: ['RSAP-N 2x1x300 (Non Sync)', 'RSAP-S 2x1x300 (Sync)', 'RSAP-N 2.5x1x300', 'RSAP-N 2.5x1x500', 'RSAP-N 2x1x1000', 'RSAP-N 2.5x1x1000'] },
      { name: 'Two Axis Positioner',      img: '/images/products/two-axis-positioner.jpg',                       items: ['RTAP-500 (Non Sync)', 'RTAP-300 (Non Sync)'] },
      { name: 'Robotic Rotary Turn Table', img: '/images/products/turn-table.jpg',                                       items: ['RTT-300', 'RTT-500', 'RTT-1000', 'RTT-2000'] },
      { name: 'Robotic Welding Machine',  img: '/images/products/welding-machine.jpg',     items: ['Fronius', 'EWM', 'OTC', 'AOTAI', 'MAGMEET', 'CLOOS'] },
      { name: 'Accessories',             img: '/images/products/safety-fence.jpg',                     items: ['Robot Safety Fence (Barricade)', 'Robot Pedestal', 'Welding Fixture'] },
    ],
  },
  {
    id: 'welding-spm', title: 'Welding SPM', icon: '⚙️',
    img: '/images/products/welding-spm.jpg',
    desc: 'Custom Special Purpose Machines for automated, high-volume welding across diverse industrial applications — scaffolding, hydraulic cylinders, compressor tanks, submersible pumps, and more.',
    subcategories: [
      { name: 'Automatic Scaffolding Welding SPM',        img: '/images/products/welding-spm.jpg', items: ['Cuplock (Vertical) Welding SPM', 'Ledger (Horizontal) Welding SPM', 'Base Jack Welding SPM', 'Inner/Outer PROP Welding SPM', 'Robotic Cuplock PIN Welding', 'Aluminium Formwork Robotic Welding', 'Fully Automatic PIPE Drilling SPM'] },
      { name: 'Automatic Hydraulic Cylinder Welding SPM', img: '/images/products/welding-spm.jpg', items: ['Oil Port Welding SPM', 'Hydraulic Cylinder SPM 2000', 'Hydraulic Cylinder SPM 3000'] },
      { name: 'Automatic Compressor Tank Welding SPM',    img: '/images/products/welding-spm.jpg', items: ['Automatic Compressor Welding RCW-1000', 'Automatic Compressor Welding RCW-2000', 'Automatic Compressor Welding RCW-3000'] },
      { name: 'Submersible Pump Welding Solution',        img: '/images/products/welding-spm.jpg', items: ['Bowl Welding SPM', 'Stator Body SPM – Dual Head', 'Stator Body SPM – Single Head', 'Patti to Stud Welding SPM', 'Sleeve Welding SPM'] },
      { name: 'Pipe to Flange Welding SPM',               img: '/images/products/welding-spm.jpg', items: ['Automatic Pipe Spool Welding SPM', 'Automatic Slip-on Flange SPM', 'Pipe Flange SPM – Dual Head'] },
      { name: 'Conveyor Welding SPM',                     img: '/images/products/welding-spm.jpg', items: ['Automatic Conveyor Roller Welding SPM', 'Fully Automatic Roller Welding SPM', 'Conveyor Roller Pulley SPM'] },
      { name: 'TMT Wiremesh Welding SPM',                 img: '/images/products/welding-spm.jpg', items: ['Semi Automatic TMT Wiremesh SPM', 'Fully Automatic TMT Wiremesh SPM'] },
      { name: 'Others',                                   img: '/images/products/welding-spm.jpg', items: ['Tiles Mold Edge Hardfacing SPM', 'Longseam Welding SPM', 'Crane Hoist Shaft Welding SPM', 'Ball Welding SPM'] },
    ],
  },
  {
    id: 'welding-equipment', title: 'Welding Automation Equipment', icon: '🔧',
    img: '/images/products/welding-equipment.jpg',
    desc: 'Industrial-grade welding automation equipment for enhanced productivity and precision — turn tables, rotators, positioners, carriages, and column-and-boom manipulators.',
    subcategories: [
      { name: 'Welding Turn Table',              img: '/images/products/welding-equipment.jpg', items: ['50 KG', '100 KG', '300 KG', '500 KG', '1000 KG', '2000 KG', '3000 KG', '5000 KG', '10000 KG'] },
      { name: 'Welding Rotator',                 img: '/images/products/welding-equipment.jpg', items: ['Bolt Type Rotator', 'Self Centering Rotator (Screw Type)', 'Self Aligned Rotator'] },
      { name: 'Welding Positioner',              img: '/images/products/welding-equipment.jpg', items: ['150 KG', '300 KG', '500 KG', '1000 KG', '2000 KG', '3000 KG', '5000 KG', '10000 KG', '100 KG with Controller – Face Plate', '100 KG with Controller – Chuck'] },
      { name: 'Welding Carriage',                img: '/images/products/welding-equipment.jpg', items: ['MagBOT Magnetic Welding Carriage', 'LineBOT Linear Carriage', 'FlexBOT Flexible Carriage'] },
      { name: 'Column and Boom (Manipulator)',   img: '/images/products/welding-equipment.jpg', items: ['Fixed Type', 'Manual Swivel', 'Motorised Swivel'] },
      { name: 'Others',                          img: '/images/products/welding-equipment.jpg', items: ['Torch Pole with Pneumatic Slide'] },
    ],
  },
  {
    id: 'welding-accessories', title: 'Welding Automation Accessories', icon: '🔩',
    img: '/images/products/welding-accessories.jpg',
    desc: 'High-quality welding automation accessories to complete and enhance your automation systems — oscillators, AVC units, water circulation units, cold wire feeders, and more.',
    subcategories: [
      { name: 'Welding Accessories', img: '/images/products/welding-accessories.jpg', items: ['Welding Oscillator', 'Welding AVC (Arc Voltage Controller)', 'Water Circulation Unit', 'Cold Wire Feeder', 'XY Slide', 'Teach Pendant'] },
      { name: 'Welding Chuck',       img: '/images/products/welding-accessories.jpg', items: ['250 mm', '300 mm', 'Extension JAW'] },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: 340, background: 'linear-gradient(135deg, #020d1f 0%, #0d2d5e 60%, #004974 100%)', position: 'relative', display: 'flex', alignItems: 'center', padding: '110px 0 72px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/products/robotic-welding.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.1 }} />
        <div style={{ position: 'absolute', top: '-80px', right: '-100px', width: 600, height: 600, background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: 14 }}>Products</span>
          <h1 style={{ fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: 20 }}>Our Product <span style={{ color: '#42A5F5' }}>Solutions</span></h1>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.8)' }}>Home</Link>
            <span>›</span><span>Products</span>
          </nav>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: '#fff', padding: '72px 0 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto', paddingBottom: 72 }}>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#4a6080' }}>
            Mantronix Solutions offers a comprehensive range of welding automation products – from complete robotic welding cells to special purpose machines (SPM), welding equipment, and automation accessories. We serve industries across India with turnkey solutions.
          </p>
        </div>
      </section>

      {/* Category Sections */}
      {productData.map((cat, ci) => (
        <section key={cat.id} id={cat.id} className="section-py" style={{ background: ci % 2 === 0 ? '#f4f7fb' : '#fff', borderTop: '1px solid rgba(10,31,61,0.06)' }}>
          <div className="container">
            {/* Category intro row */}
            <div className={`grid-product-feature ${ci % 2 === 0 ? 'even' : 'odd'}`}>
              <div style={{ order: ci % 2 === 0 ? 1 : 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                  <span style={{ fontSize: '2.2rem' }}>{cat.icon}</span>
                  <span style={{ display: 'inline-block', padding: '5px 16px', borderRadius: 100, background: 'rgba(13,45,94,0.08)', color: '#0d2d5e', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid rgba(13,45,94,0.18)' }}>Category {ci + 1} of 4</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, color: '#0a1f3d', marginBottom: 16 }}>{cat.title}</h2>
                <div className="gold-divider" />
                <p style={{ lineHeight: 1.85, marginBottom: 28, fontSize: '1.05rem' }}>{cat.desc}</p>
                <Link href={`/products/${cat.id}`} className="btn btn-primary" style={{ padding: '15px 36px' }}>
                  View All {cat.title} <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div style={{ order: ci % 2 === 0 ? 2 : 1, position: 'relative', height: 340, borderRadius: 18, overflow: 'hidden', boxShadow: '0 16px 56px rgba(10,31,61,0.16)', border: '1px solid rgba(10,31,61,0.07)' }}>
                <Image src={cat.img} alt={cat.title} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,31,61,0.3) 0%, transparent 60%)' }} />
              </div>
            </div>

            {/* Subcategory cards */}
            <div className="grid-4" style={{ gap: 24 }}>
              {cat.subcategories.map(sub => (
                <div key={sub.name} className="subcat-card">
                  <div className="subcat-card-img">
                    <Image src={sub.img} alt={sub.name} fill style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,31,61,0.55) 0%, transparent 60%)' }} />
                  </div>
                  <div className="subcat-card-body">
                    <h4 className="subcat-card-title">{sub.name}</h4>
                    <ul>
                      {sub.items.map(item => (
                        <li key={item} className="subcat-card-item">
                          <span className="subcat-card-dot" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0a1f3d, #004974)', padding: '100px 0', borderTop: '4px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, color: '#fff', marginBottom: 18 }}>
            Need a Custom <span style={{ color: '#42A5F5' }}>Automation Solution?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 40, fontSize: '1.08rem' }}>
            Our engineers will design and build a bespoke automation solution tailored to your exact requirements.
          </p>
          <Link href="/contact" className="btn" style={{ padding: '16px 48px', background: '#fff', color: '#0a1f3d', fontWeight: 800, fontSize: '0.95rem' }}>
            <i className="fas fa-phone-alt" /> Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
