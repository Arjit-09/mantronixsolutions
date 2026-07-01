'use client';

import Link from 'next/link';
import Image from 'next/image';

const products = [
  { name: 'Welding Oscillator', img: '/images/products/welding-accessories.jpg', desc: 'Electronic welding oscillator for controlled weave and zigzag bead patterns in automated welding.', href: 'https://robologic.co.in/product_category/welding-oscillator/' },
  { name: 'Welding AVC (Arc Voltage Controller)', img: '/images/products/welding-accessories.jpg', desc: 'Arc Voltage Controller for maintaining constant arc length during automated TIG/GTAW welding.', href: 'https://robologic.co.in/product_category/welding-avc/' },
  { name: 'Water Circulation Unit', img: '/images/products/welding-accessories.jpg', desc: 'Closed-loop water cooling unit for welding torches and components during high-duty-cycle welding.', href: 'https://robologic.co.in/product_category/water-circularion-unit/' },
  { name: 'Cold Wire Feeder', img: '/images/products/welding-accessories.jpg', desc: 'Precision cold wire feeding system for TIG welding to improve deposition rate and weld quality.', href: 'https://robologic.co.in/product_category/cold-wire-feeder/' },
  { name: 'Welding Chuck (250mm)', img: '/images/products/welding-accessories.jpg', desc: 'Self-centering 3-jaw chuck for holding cylindrical workpieces in welding positioners and lathes.', href: 'https://robologic.co.in/product/250-mm/' },
  { name: 'XY Slide', img: '/images/products/xy-slide.jpg', desc: 'Precision XY cross-slide for fine torch positioning in automated welding and cladding applications.', href: 'https://robologic.co.in/product/xy-slide/' },
];

export default function WeldingAccessoriesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-label">Products</span>
            <h1 className="page-hero-title">Welding <span style={{ color: '#1565C0' }}>Accessories</span></h1>
            <nav className="breadcrumb">
              <Link href="/">Home</Link><span className="breadcrumb-separator">›</span>
              <Link href="/products">Products</Link><span className="breadcrumb-separator">›</span>
              <span>Welding Accessories</span>
            </nav>
          </div>
        </div>
      </section>
      <section className="section-py" style={{ background: '#f8faff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Automation Accessories</span>
            <h2 className="section-title">Welding <span>Automation Accessories</span></h2>
            <div className="gold-divider" style={{ margin: '16px auto 0' }} />
            <p className="section-subtitle" style={{ margin: '16px auto 0', textAlign: 'center' }}>
              High-quality accessories to complete and enhance your welding automation systems — from oscillators to arc voltage controllers.
            </p>
          </div>
          <div className="product-card-grid">
            {products.map((p) => (
              <div key={p.name} className="product-card-item">
                <div className="product-card-img-wrap">
                  <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} onError={(e) => { e.currentTarget.src = '/product-welding-accessories.png'; }} />
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
            <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: 700, color: '#fff', marginBottom: 12 }}>Need Complete Automation?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 28 }}>Bundle accessories with our welding equipment for a complete, integrated automation package.</p>
            <Link href="/contact" className="btn" style={{ background: '#fff', color: '#0d2d5e', fontWeight: 700 }}><i className="fas fa-phone-alt"></i> Enquire Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}
