'use client';

import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import HoneyTypes from '@/components/HoneyTypes';
import BeeFlower from '@/components/BeeFlower';
import VideoSection from '@/components/VideoSection';
import Debunking from '@/components/Debunking';
import Quiz from '@/components/Quiz';
import Footer from '@/components/Footer';
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

      {/* Halaman 5 — Video Edukasi */}
      <VideoSection />

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
      <Footer />
    </main>
  );
}
