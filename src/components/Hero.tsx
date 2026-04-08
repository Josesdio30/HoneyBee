'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../data/honeyData';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToExplore = () => {
    document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div className="honey-hero-blobs">
        <div className="blob" style={{ background: 'var(--primary)', width: '400px', height: '400px', top: '-100px', right: '-100px' }} />
        <div className="blob" style={{ background: 'var(--secondary)', width: '300px', height: '300px', bottom: '-50px', left: '-50px' }} />
      </div>
      
      <div className="container">
        <div className="responsive-grid" style={{ alignItems: 'center' }}>
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="tag" 
              style={{ marginBottom: '1.5rem', display: 'inline-block' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t.intro_tag}
            </motion.span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '2rem', color: 'var(--secondary)' }}>
              {t.hero_title}
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '500px' }}>
              {t.hero_desc}
            </p>
            
            <button className="btn-primary" onClick={scrollToExplore}>
              {t.btn_start} <ArrowRight size={20} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', width: '100%', maxWidth: '500px', justifySelf: 'center' }}
          >
            <div style={{ 
              borderRadius: '40px', 
              overflow: 'hidden', 
              boxShadow: '0 30px 60px rgba(163, 123, 77, 0.25)',
              border: '8px solid white',
              aspectRatio: '1/1',
              background: 'var(--glass)',
              position: 'relative'
            }}>
               <img 
                 src="/hero.png" 
                 alt="Indonesian Honey Hero" 
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
               />
               <div style={{ position: 'absolute', bottom: '10%', left: '10%', right: '10%' }}>
                  <div className="card" style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '1rem', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>Natural & Authentic</p>
                    <p style={{ fontSize: '0.8rem', margin: 0, opacity: 0.8 }}>Pure Nectar from Indonesian Blossoms</p>
                  </div>
               </div>
            </div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{ 
                position: 'absolute', 
                top: '-20px', 
                right: '-20px', 
                background: 'var(--primary)', 
                color: 'var(--foreground)',
                padding: '1rem 1.5rem',
                borderRadius: '24px',
                fontWeight: 800,
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                zIndex: 1,
                fontSize: '0.9rem'
              }}
            >
              100% ASLI
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={scrollToExplore} style={{ cursor: 'pointer' }}>
        <ChevronDown size={32} color="var(--secondary)" />
      </div>
    </section>
  );
}
