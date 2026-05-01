'use client';

import { useLanguage } from '../LanguageContext';
import { translations } from '../data/honeyData';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer style={{ padding: '6rem 0 4rem', background: 'var(--secondary)', color: 'white' }}>
      <div className="container">
        <div className="footer-grid" style={{ marginBottom: '4rem' }}>
          {/* Brand & Desc */}
          <div>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>{t.brand}</h2>
            <p style={{ opacity: 0.8, lineHeight: '1.6' }}>
              {t.footer_desc}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>{t.ecommerce_brand}</h3>
            <div style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '1.5rem' }}>{t.contact_title}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>
                  {language === 'id' ? 'Ingin tahu lebih lanjut? Daftar sesi edukasi madu sekarang' : 'Want to know more? Register for a honey education session now'}
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '8px', display: 'flex' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '0.2rem' }}>{t.phone_label}</div>
                    <a href="tel:+6281226677599" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>+62 812‑2667‑7599</a>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '8px', display: 'flex' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '0.2rem' }}>Instagram</div>
                    <a href="https://www.instagram.com/petikmadu.id?igsh=ZGJhaG82NHV6ZnZi" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>petikmadu.id</a>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '8px', display: 'flex' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '0.2rem' }}>{t.address_label}</div>
                  <div style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                    JI. DR. Wahidin No.8 (120, Polaman, Bedali, Kec. Lawang, Kabupaten Malang, Jawa Timur 65215
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ecommerce Links */}
          <div>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>{t.ecommerce_title}</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {['Tokopedia', 'Shopee', 'WhatsApp'].map((shop) => (
                <a 
                  key={shop}
                  href="#" 
                  style={{ 
                    background: 'white', 
                    color: 'var(--secondary)', 
                    padding: '0.6rem 1rem', 
                    borderRadius: '12px', 
                    fontSize: '0.85rem', 
                    fontWeight: 700, 
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {shop}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>
            {t.footer_copy}
          </div>
        </div>
      </div>
    </footer>
  );
}
