'use client';

import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import HoneyTypes from '@/components/HoneyTypes';
import BeeFlower from '@/components/BeeFlower';
import Debunking from '@/components/Debunking';
import Quiz from '@/components/Quiz';
import { useLanguage } from '@/LanguageContext';
import { translations } from '@/data/honeyData';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main style={{ paddingTop: '80px' }}>
      <NavBar />
      
      {/* Halaman 1 — Intro */}
      <section id="hero">
        <Hero />
      </section>

      {/* Halaman 2 — Jenis Madu */}
      <section id="explore" className="section" style={{ background: 'var(--white)' }}>
        <HoneyTypes />
      </section>

      {/* Halaman 3 & 4 — Lebah & Bunga & Hubungan */}
      <section id="bees-flowers" className="section">
        <BeeFlower />
      </section>

      {/* Halaman 6 — Madu Asli vs Palsu */}
      <section id="debunking" className="section" style={{ background: '#fafafa', borderTop: '1px solid rgba(163, 123, 77, 0.05)', borderBottom: '1px solid rgba(163, 123, 77, 0.05)' }}>
        <Debunking />
      </section>

      {/* Halaman 7 — Quiz */}
      <section id="quiz" className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="tag">{t.quiz_tag}</span>
          <h2 style={{ marginBottom: '3rem' }}>{t.quiz_title}</h2>
          <Quiz />
        </div>
      </section>

      {/* Footer / Penutup */}
      <footer style={{ padding: '4rem 0', background: 'var(--secondary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem' }}>{t.brand}</h2>
          <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto 2rem' }}>
            {t.footer_desc}
          </p>
          <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>
            {t.footer_copy}
          </div>
        </div>
      </footer>
    </main>
  );
}
