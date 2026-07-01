'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '', product: '' });
  const [submitted, setSubmitted] = useState(false);
  useScrollReveal();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    
    const text = `*New Inquiry from Website*
*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone}
*Company:* ${form.company || 'N/A'}
*Product:* ${form.product || 'N/A'}
*Message:* ${form.message}`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
      ? `https://wa.me/918178075592?text=${encodeURIComponent(text)}`
      : `https://web.whatsapp.com/send?phone=918178075592&text=${encodeURIComponent(text)}`;
      
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', company: '', message: '', product: '' });
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-label">Contact Us</span>
            <h1 className="page-hero-title">Get In <span style={{ color: '#c9a227' }}>Touch</span></h1>
            <nav className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-separator">›</span>
              <span>Contact Us</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="section-py" style={{ background: '#f8faff' }}>
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="reveal-left">
              <span className="section-label">Reach Us</span>
              <h2 className="section-title">Let's Build Something <span>Together</span></h2>
              <div className="gold-divider" />
              <p style={{ color: '#5a6a88', lineHeight: 1.8, marginBottom: 36 }}>
                Whether you need a full robotic welding cell, a custom SPM machine, or welding automation equipment — our experts are ready to help. Contact us today for a free consultation.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { icon: 'fas fa-map-marker-alt', title: 'Address', lines: ['A-88, Chander Nagar,', 'Ghaziabad, Uttar Pradesh, India'] },
                  { icon: 'fas fa-phone', title: 'Phone', lines: ['+91 8178075592'], href: 'tel:+918178075592' },
                  { icon: 'fas fa-envelope', title: 'Email', lines: ['manansinghal@mantronixsolutions.com', 'Infosupport@mantronixsolutions.com'], href: 'mailto:manansinghal@mantronixsolutions.com' },
                  { icon: 'fas fa-globe', title: 'Website', lines: ['www.mantronixsolutions.com'], href: 'https://www.mantronixsolutions.com' },
                ].map(c => (
                  <div key={c.title} style={{ display: 'flex', gap: 16, padding: 20, background: '#fff', border: '1px solid rgba(13,45,94,0.06)', borderRadius: 10, transition: 'all 0.3s', boxShadow: '0 4px 16px rgba(13,45,94,0.04)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(21,101,192,0.2)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(13,45,94,0.08)'; e.currentTarget.style.transform='translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(13,45,94,0.06)'; e.currentTarget.style.boxShadow='0 4px 16px rgba(13,45,94,0.04)'; e.currentTarget.style.transform='none'; }}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(21,101,192,0.1)', border: '1px solid rgba(21,101,192,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={c.icon} style={{ color: '#1565C0' }}></i>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 700, color: '#1565C0', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{c.title}</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {c.lines.map(l => (
                          c.href ? <a key={l} href={c.href} style={{ color: '#0d2d5e', fontSize: '0.9rem', fontWeight: 600, transition: 'color 0.2s', wordBreak: 'break-all' }} onMouseEnter={e => e.currentTarget.style.color = '#1565C0'} onMouseLeave={e => e.currentTarget.style.color = '#0d2d5e'}>{l}</a>
                                 : <span key={l} style={{ color: '#2d3f60', fontSize: '0.9rem', fontWeight: 600, wordBreak: 'break-word' }}>{l}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="reveal-right" style={{ background: '#fff', borderRadius: 16, padding: 40, border: '1px solid rgba(13,45,94,0.08)', boxShadow: '0 10px 40px rgba(13,45,94,0.06)' }}>
              <h3 style={{ fontFamily: 'var(--font-rajdhani)', fontSize: '1.8rem', fontWeight: 700, color: '#0d2d5e', marginBottom: 8 }}>Send us a Message</h3>
              <p style={{ color: '#5a6a88', fontSize: '0.9rem', marginBottom: 24 }}>Fill out the form below and our team will get back to you within 24 hours.</p>
              
              {submitted && (
                <div className="alert alert-success">
                  <strong>Success!</strong> Your message has been sent successfully. We will contact you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div className="grid-2" style={{ gap: 20 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1a2744', marginBottom: 6 }}>Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} className="input" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1a2744', marginBottom: 6 }}>Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} className="input" placeholder="john@company.com" required />
                  </div>
                </div>

                <div className="grid-2" style={{ gap: 20 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1a2744', marginBottom: 6 }}>Phone Number *</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="input" placeholder="+91 98765 43210" required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1a2744', marginBottom: 6 }}>Company Name</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} className="input" placeholder="ABC Manufacturing" />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1a2744', marginBottom: 6 }}>Product / Solution of Interest</label>
                  <select name="product" value={form.product} onChange={handleChange} className="input" style={{ appearance: 'none', background: '#fff url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' fill=\'%230d2d5e\' viewBox=\'0 0 16 16\'%3E%3Cpath d=\'M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z\'/%3E%3C/svg%3E") no-repeat calc(100% - 16px) center', cursor: 'pointer' }}>
                    <option value="">Select a Product Category</option>
                    <option value="Robotic Welding">Robotic Welding Cells</option>
                    <option value="Welding SPM">Welding Special Purpose Machines (SPM)</option>
                    <option value="Welding Equipment">Welding Equipment (Turn Tables, Positioners)</option>
                    <option value="Welding Accessories">Welding Accessories</option>
                    <option value="Other">Other Automation Inquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1a2744', marginBottom: 6 }}>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} className="input" placeholder="Tell us about your requirements..." required></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1rem', marginTop: 8 }}>
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ height: 450, width: '100%', background: '#e8eef6', position: 'relative' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112028.98634123518!2d77.34963365!3d28.6631899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1714457813296!5m2!1sen!2sin"
          style={{ border: 0, width: '100%', height: '100%', filter: 'grayscale(1) contrast(1.2)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
