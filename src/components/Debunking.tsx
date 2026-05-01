'use client';

import { motion } from 'framer-motion';
import { myths, translations } from '../data/honeyData';
import { useLanguage } from '../LanguageContext';
import { HelpCircle, CheckCircle2, AlertCircle, MousePointer2 } from 'lucide-react';

export default function Debunking() {
  const { language } = useLanguage();
  const t = translations[language];
  const list = myths[language];

  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <span className="tag" style={{ background: 'var(--secondary)', color: 'white' }}>{t.myth_tag}</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '1rem' }}>{t.myth_title}</h2>
        <p style={{ maxWidth: '700px', margin: '1rem auto', opacity: 0.8, fontSize: '1.1rem' }}>
          {t.myth_desc}
        </p>
      </motion.div>

      {/* Myth Flip Cards */}
      <div className="grid grid-cols-2" style={{
        perspective: '1000px',
        marginBottom: '6rem'
      }}>
        {list.map((myth, idx) => (
          <div key={idx} style={{ height: '350px', position: 'relative' }}>
            <motion.div
              className="flip-card-inner"
              initial={false}
              whileHover={{ rotateY: 180 }}
              whileTap={{ rotateY: 180 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Front Side */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                background: 'var(--white)',
                borderRadius: '32px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 15px 35px rgba(163, 123, 77, 0.1)',
                border: '1px solid rgba(163, 123, 77, 0.05)'
              }}>
                <div style={{ width: '100%', height: '160px', overflow: 'hidden' }}>
                  <img
                    src={myth.image}
                    alt={myth.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ background: 'var(--background)', color: 'var(--secondary)', padding: '0.5rem', borderRadius: '12px' }}>
                      <HelpCircle size={20} />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, opacity: 0.5, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {language === 'id' ? 'Konon Katanya...' : 'The Myth...'}
                      </h4>
                      <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{myth.title}</h3>
                    </div>
                  </div>
                  <p style={{ fontStyle: 'italic', opacity: 0.8, fontSize: '0.9rem', lineHeight: '1.5' }}>
                    “{myth.description}”
                  </p>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: 0.6, fontSize: '0.8rem', fontWeight: 700, color: 'var(--secondary)' }}>
                    <MousePointer2 size={14} />
                    <motion.span animate={{ opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 2 }}>
                      {language === 'id' ? 'Arahkan kursor untuk Fakta' : 'Hover to reveal Fact'}
                    </motion.span>
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                background: 'var(--primary)',
                color: 'var(--foreground)',
                borderRadius: '32px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 15px 35px rgba(250, 195, 41, 0.2)'
              }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem', fontWeight: 900 }}>
                  <AlertCircle size={20} />
                  {t.fact_label}
                </div>
                <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.5' }}>{myth.fact}</p>
                <div style={{
                  padding: '1rem',
                  background: 'rgba(255,255,255,0.4)',
                  borderRadius: '16px',
                  fontWeight: 800,
                  display: 'flex',
                  gap: '0.5rem',
                  alignItems: 'center',
                  fontSize: '0.9rem'
                }}>
                  <CheckCircle2 size={20} style={{ color: '#27ae60' }} />
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.6, display: 'block' }}>{t.conclusion_label}</span>
                    {myth.conclusion}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Accurate Ways Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center' }}
      >
        <div className="grid grid-cols-4">
          {[].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card"
              style={{
                background: 'var(--white)',
                border: 'none',
                padding: '2.5rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: '0 10px 30px rgba(163, 123, 77, 0.08)'
              }}
            >
              <div style={{
                fontSize: '2.5rem',

                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '24px'
              }}>

              </div>
              <p style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--secondary)' }}></p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
