'use client';

import { motion } from 'framer-motion';
import { bees, flowers, translations } from '../data/honeyData';
import { useLanguage } from '../LanguageContext';
import { Bug, Flower, Heart, RefreshCw, Layers, Zap } from 'lucide-react';

export default function BeeFlower() {
  const { language } = useLanguage();
  const t = translations[language];
  const beeList = bees[language];
  const flowerList = flowers[language];

  return (
    <div className="container">
      <div className="grid grid-cols-2" style={{ gap: '3rem', marginBottom: '6rem' }}>
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
            <Bug size={32} />
            <h2>{t.bees_title}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {beeList.map((bee, idx) => (
              <motion.div 
                key={idx} 
                className="card" 
                style={{ padding: '1.5rem', border: '1px solid rgba(163, 123, 77, 0.1)' }}
                whileHover={{ scale: 1.02, borderColor: 'var(--primary)' }}
              >
                <span className="tag" style={{ background: 'var(--glass-dark)', color: 'var(--secondary)' }}>{bee.tagline}</span>
                <h4 style={{ margin: '0.5rem 0', color: 'var(--foreground)' }}>{bee.name}</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>{bee.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
            <Flower size={32} />
            <h2>{t.flowers_title}</h2>
          </div>
          <div className="grid grid-cols-1" style={{ gap: '1rem' }}>
            {flowerList.map((f, idx) => (
              <motion.div 
                key={idx} 
                className="card" 
                style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem', background: 'var(--white)' }}
                whileHover={{ x: 10 }}
              >
                <div style={{ fontSize: '2rem', background: 'var(--background)', padding: '0.75rem', borderRadius: '16px', display: 'flex', flexShrink: 0 }}>🌸</div>
                <div>
                  <h4 style={{ margin: '0' }}>{f.name}</h4>
                  <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>{f.traits}</p>
                  <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--secondary)', display: 'flex', gap: '0.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Heart size={12} /> {t.disukai_label} {f.bees.join(', ')}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <span className="tag">The Synergy</span>
        <h2>{t.relationship_title}</h2>
        <p style={{ margin: '1rem auto', maxWidth: '700px', opacity: 0.8 }}>
          {t.relationship_desc}
        </p>
      </motion.div>

      <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
        {[
          { icon: <Layers size={32} />, title: t.rel_1_title, desc: t.rel_1_desc },
          { icon: <RefreshCw size={32} />, title: t.rel_2_title, desc: t.rel_2_desc },
          { icon: <Zap size={32} />, title: t.rel_3_title, desc: t.rel_3_desc }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="card"
            style={{ 
              textAlign: 'center', 
              background: 'var(--glass)', 
              border: '1px solid rgba(255,255,255,0.8)',
              padding: '3rem 2rem'
            }}
            whileHover={{ y: -10, background: 'var(--white)' }}
          >
            <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              {item.icon}
            </div>
            <h4 style={{ marginBottom: '1rem', color: 'var(--secondary)' }}>{item.title}</h4>
            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
