'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { myths, translations } from '../data/honeyData';
import { useLanguage } from '../LanguageContext';
import { HelpCircle, CheckCircle2, AlertCircle } from 'lucide-react';

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
        style={{ textAlign: 'center', marginBottom: '5rem' }}
      >
        <span className="tag" style={{ background: 'var(--secondary)', color: 'white' }}>{t.myth_tag}</span>
        <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>{t.myth_title}</h2>
        <p style={{ maxWidth: '700px', margin: '1rem auto', opacity: 0.8, fontSize: '1.2rem' }}>
          {t.myth_desc}
        </p>
      </motion.div>

      {/* Myth Flip Cards */}
      <div className="grid grid-cols-2" style={{ gap: '3rem', perspective: '1000px', marginBottom: '6rem' }}>
        {list.map((myth, idx) => (
          <div key={idx} style={{ height: '320px', position: 'relative' }}>
             <motion.div
               className="flip-card-inner"
               initial={false}
               whileHover={{ rotateY: 180 }}
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
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxShadow: '0 15px 35px rgba(163, 123, 77, 0.1)',
                  border: '1px solid rgba(163, 123, 77, 0.05)'
                }}>
                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ background: 'var(--background)', color: 'var(--secondary)', padding: '1rem', borderRadius: '20px' }}>
                      <HelpCircle size={32} />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, opacity: 0.5, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 800 }}>
                        {language === 'id' ? 'Konon Katanya...' : 'The Myth...'}
                      </h4>
                      <h3 style={{ margin: 0, fontSize: '1.75rem' }}>{myth.title}</h3>
                    </div>
                  </div>
                  <p style={{ fontStyle: 'italic', opacity: 0.8, fontSize: '1.1rem', lineHeight: '1.6' }}>
                    “{myth.description}”
                  </p>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)', fontWeight: 800, fontSize: '0.9rem' }}>
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2 }}>
                      Hover untuk melihat fakta...
                    </motion.span>
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
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxShadow: '0 15px 35px rgba(250, 195, 41, 0.2)'
                }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem', fontWeight: 900, fontSize: '1.1rem' }}>
                    <AlertCircle size={24} />
                    {t.fact_label}
                  </div>
                  <p style={{ marginBottom: '1.5rem', fontSize: '1rem', lineHeight: '1.6' }}>{myth.fact}</p>
                  <div style={{ 
                    padding: '1.25rem', 
                    background: 'rgba(255,255,255,0.4)', 
                    borderRadius: '20px', 
                    fontWeight: 800, 
                    display: 'flex', 
                    gap: '0.75rem', 
                    alignItems: 'center',
                    fontSize: '0.95rem',
                    border: '1px solid rgba(255,255,255,0.5)'
                  }}>
                    <CheckCircle2 size={24} style={{ color: '#27ae60' }} />
                    <div>
                      <span style={{ opacity: 0.6, display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>{t.conclusion_label}</span>
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
        <h3 style={{ marginBottom: '3rem', fontSize: '2rem' }}>{t.accurate_way_title}</h3>
        <div className="grid grid-cols-4" style={{ gap: '1.5rem' }}>
          {[
            { tag: '🏷️', text: t.accurate_1, color: '#ffecb3' },
            { tag: '🏪', text: t.accurate_2, color: '#e1f5fe' },
            { tag: '🛡️', text: t.accurate_3, color: '#e8f5e9' },
            { tag: '🧪', text: t.accurate_4, color: '#f3e5f5' }
          ].map((item, idx) => (
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
                background: item.color, 
                width: '80px', 
                height: '80px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '24px',
                marginBottom: '0.5rem'
              }}>
                {item.tag}
              </div>
              <p style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--secondary)', lineHeight: 1.3 }}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
