'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const galleryImages = [
  { src: '/images/products/robotic-welding.jpg', title: 'Robot with Table Cell', category: 'Robotic Welding' },
  { src: '/images/products/hsts-positioner.jpg', title: 'HSTS Positioner Cell', category: 'Robotic Welding' },
  { src: '/images/products/hsts-positioner.jpg', title: 'Dual HSTS Positioner', category: 'Robotic Welding' },
  { src: '/images/products/robot-linear-track.jpg', title: 'Robot with Linear Track', category: 'Robotic Welding' },
  { src: '/images/products/scaffolding-spm.jpg', title: 'Scaffolding Robotic Cell', category: 'Robotic Welding' },
  { src: '/images/products/scaffolding-spm.jpg', title: 'Cuplock Vertical SPM', category: 'Welding SPM' },
  { src: '/images/products/scaffolding-spm.jpg', title: 'Ledger Horizontal SPM', category: 'Welding SPM' },
  { src: '/images/products/hydraulic-spm.jpg', title: 'Hydraulic Cylinder SPM', category: 'Welding SPM' },
  { src: '/images/products/compressor-spm.jpg', title: 'Compressor Welding SPM', category: 'Welding SPM' },
  { src: '/images/products/conveyor-spm.jpg', title: 'Conveyor Roller SPM', category: 'Welding SPM' },
  { src: '/images/products/turn-table.jpg', title: '500 KG Turn Table', category: 'Equipment' },
  { src: '/images/products/welding-equipment.jpg', title: 'Welding Positioner', category: 'Equipment' },
  { src: '/images/products/welding-equipment.jpg', title: 'MagBOT Carriage', category: 'Equipment' },
  { src: '/images/products/welding-equipment.jpg', title: 'Column and Boom', category: 'Equipment' },
  { src: '/images/products/self-centering-rotator.jpg', title: 'Welding Rotator', category: 'Equipment' },
  { src: '/images/products/wiremesh-spm.jpg', title: 'TMT Wiremesh SPM', category: 'Welding SPM' },
];

const categories = ['All', 'Robotic Welding', 'Welding SPM', 'Equipment'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-label">Our Work</span>
            <h1 className="page-hero-title">Project <span style={{ color: '#1565C0' }}>Gallery</span></h1>
            <nav className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-separator">›</span>
              <span>Gallery</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="section-py" style={{ background: '#f8faff' }}>
        <div className="container">
          {/* Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 24px',
                  borderRadius: 100,
                  border: activeCategory === cat ? '2px solid #0d2d5e' : '2px solid #d0d8e8',
                  background: activeCategory === cat ? '#0d2d5e' : '#fff',
                  color: activeCategory === cat ? '#fff' : '#4a5a78',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  fontFamily: 'var(--font-inter)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filtered.map((img, i) => (
              <div
                key={i}
                className="gallery-item"
                onClick={() => setLightbox(img)}
              >
                <div className="gallery-img-wrap">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    onError={(e) => { e.currentTarget.src = '/product-robotic-welding.png'; }}
                   
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-overlay-content">
                      <i className="fas fa-expand" style={{ fontSize: '1.5rem', color: '#fff', marginBottom: 8 }}></i>
                      <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>{img.title}</div>
                      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', marginTop: 4 }}>{img.category}</div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '12px 16px', background: '#fff' }}>
                  <div style={{ fontWeight: 700, color: '#1a2744', fontSize: '0.875rem' }}>{img.title}</div>
                  <div style={{ color: '#1565C0', fontSize: '0.75rem', fontWeight: 600, marginTop: 2 }}>{img.category}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: 64, padding: '40px', background: '#0d2d5e', borderRadius: 16 }}>
            <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: 700, color: '#fff', marginBottom: 12 }}>
              Want to See More Projects?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 28 }}>Contact us to learn about our completed projects and how we can help automate your production line.</p>
            <Link href="/contact" className="btn" style={{ background: '#fff', color: '#0d2d5e', fontWeight: 700 }}>
              <i className="fas fa-phone-alt"></i> Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: '90vw', maxHeight: '85vh', borderRadius: 12, overflow: 'hidden' }}>
            <Image src={lightbox.src} alt={lightbox.title} width={900} height={600} style={{ objectFit: 'contain', maxHeight: '80vh', width: 'auto' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.7)', padding: '12px 20px' }}>
              <div style={{ color: '#fff', fontWeight: 700 }}>{lightbox.title}</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>{lightbox.category}</div>
            </div>
            <button
              onClick={() => setLightbox(null)}
              style={{ position: 'absolute', top: 12, right: 12, width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
