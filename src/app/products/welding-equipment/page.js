'use client';

import Link from 'next/link';
import Image from 'next/image';

const products = [
  { name: '500 KG Welding Turn Table', img: '/images/products/turn-table.jpg', desc: 'Heavy-duty motorized turntable for rotating workpieces during welding operations. Variable speed control.', href: 'https://robologic.co.in/product/500-kg-turn-table/' },
  { name: 'Bolt Type Welding Rotator', img: '/images/products/self-centering-rotator.jpg', desc: 'Conventional welding rotator for cylindrical vessels and pipes. Sturdy bolt-type roller design.', href: 'https://robologic.co.in/product/bolt-type-rotator/' },
  { name: '500 KG Welding Positioner', img: '/images/products/welding-equipment.jpg', desc: 'Motorized welding positioner to tilt and rotate workpieces for optimal welding access angles.', href: 'https://robologic.co.in/product/500-kg-welding-positioner/' },
  { name: 'MagBOT Magnetic Welding Carriage', img: '/images/products/welding-equipment.jpg', desc: 'Magnetically attached automatic welding carriage for straight and curved seam welding on steel surfaces.', href: 'https://robologic.co.in/product_category/magbot-magnetic-welding-carriage/' },
  { name: 'Column and Boom Manipulator', img: '/images/products/welding-equipment.jpg', desc: 'Motorized welding manipulator for large vessel and tank welding. Available in fixed, manual swivel, and motorized swivel types.', href: 'https://robologic.co.in/product_category/column-and-boom-welding-manipulator/' },
  { name: 'Self Centering Rotator', img: '/images/products/self-centering-rotator.jpg', desc: 'Screw-type self-centering welding rotator for cylindrical components with variable diameter adjustment.', href: 'https://robologic.co.in/product/self-centering-rotator-screw-type/' },
];

export default function WeldingEquipmentPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-label">Products</span>
            <h1 className="page-hero-title">Welding <span style={{ color: '#1565C0' }}>Equipment</span></h1>
            <nav className="breadcrumb">
              <Link href="/">Home</Link><span className="breadcrumb-separator">›</span>
              <Link href="/products">Products</Link><span className="breadcrumb-separator">›</span>
              <span>Welding Equipment</span>
            </nav>
          </div>
        </div>
      </section>
      <section className="section-py" style={{ background: '#f8faff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Welding Automation</span>
            <h2 className="section-title">Industrial Welding <span>Equipment</span></h2>
            <div className="gold-divider" style={{ margin: '16px auto 0' }} />
            <p className="section-subtitle" style={{ margin: '16px auto 0', textAlign: 'center' }}>
              Industrial-grade turntables, rotators, positioners, and manipulators for precision welding operations.
            </p>
          </div>
          <div className="product-card-grid">
            {products.map((p) => (
              <div key={p.name} className="product-card-item">
                <div className="product-card-img-wrap">
                  <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} onError={(e) => { e.currentTarget.src = '/product-welding-equipment.png'; }} />
                </div>
                <div className="product-card-body">
                  <h3 className="product-card-title">{p.name}</h3>
                  <p className="product-card-desc">{p.desc}</p>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '8px 18px' }}>
                    <i className="fas fa-external-link-alt"></i> View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 56, padding: '40px', background: '#0d2d5e', borderRadius: 16 }}>
            <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: 700, color: '#fff', marginBottom: 12 }}>Ready to Automate?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 28 }}>Get expert recommendations for the right welding equipment for your production needs.</p>
            <Link href="/contact" className="btn" style={{ background: '#fff', color: '#0d2d5e', fontWeight: 700 }}><i className="fas fa-phone-alt"></i> Get a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
