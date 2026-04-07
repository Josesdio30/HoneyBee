'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { honeyTypes, translations } from '../data/honeyData';
import { useLanguage } from '../LanguageContext';
import { Info, MapPin, Sparkles, Droplets } from 'lucide-react';

export default function HoneyTypes() {
  const { language } = useLanguage();
  const t = translations[language];
  const list = honeyTypes[language];
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedHoney = list.find(h => h.id === selectedId);

  return (
    <div className="container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <span className="tag">{t.explore_tag}</span>
        <h2>{t.section_types}</h2>
        <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
          {t.types_desc}
        </p>
      </motion.div>

      <div className="grid grid-cols-4">
        {list.map((honey) => (
          <motion.div
            layoutId={honey.id}
            key={honey.id}
            className="card"
            style={{ cursor: 'pointer', textAlign: 'center' }}
            onClick={() => setSelectedId(honey.id)}
            whileHover={{ scale: 1.05 }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🍯</div>
            <h3>{honey.name}</h3>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.8 }}>
              {honey.traits[0]}...
            </p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedHoney && (
          <div 
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              backgroundColor: 'rgba(45, 30, 18, 0.4)', 
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '20px'
            }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={selectedId}
              className="card"
              style={{ 
                maxWidth: '800px', 
                width: '100%', 
                maxHeight: '90vh', 
                overflowY: 'auto',
                cursor: 'auto',
                position: 'relative',
                color: 'var(--foreground)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedId(null)}
                style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}
              >
                ✕
              </button>

              <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
                <div>
                  <h2 style={{ marginBottom: '1rem', color: 'var(--secondary)' }}>{selectedHoney.name}</h2>
                  <p style={{ marginBottom: '1.5rem' }}>{selectedHoney.description}</p>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <Droplets size={18} /> {t.traits_label}
                    </h4>
                    <ul style={{ paddingLeft: '1.5rem' }}>
                      {selectedHoney.traits.map((t, idx) => <li key={idx}>{t}</li>)}
                    </ul>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <MapPin size={18} /> {t.origin_label}
                    </h4>
                    <p style={{ fontSize: '0.9rem' }}>{selectedHoney.origin}</p>
                  </div>
                </div>

                <div>
                  <div className="card" style={{ background: 'var(--primary)', color: 'var(--foreground)', marginBottom: '1.5rem' }}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <Sparkles size={18} /> {t.benefits_label}
                    </h4>
                    <ul style={{ paddingLeft: '1rem', listStyle: 'none' }}>
                      {selectedHoney.benefits.map((b, idx) => (
                        <li key={idx} style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                          ✓ {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card" style={{ background: 'var(--glass-dark)' }}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <Info size={18} /> {t.uniqueness_label}
                    </h4>
                    <p style={{ fontSize: '0.9rem' }}>{selectedHoney.uniqueness}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
