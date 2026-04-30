'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { translations } from '../data/honeyData';

export default function VideoSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="authenticity-video" className="section" style={{ background: 'var(--white)', padding: '6rem 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span className="tag">{language === 'id' ? 'Edukasi Visual' : 'Visual Education'}</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{t.accurate_way_title}</h2>
          <p style={{ maxWidth: '700px', margin: '1rem auto', opacity: 0.8 }}>
            {language === 'id' 
              ? 'Tonton video ini untuk mempelajari cara paling akurat dalam menentukan keaslian madu langsung dari ahlinya.' 
              : 'Watch this video to learn the most accurate way to determine honey authenticity directly from the experts.'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(163, 123, 77, 0.2)',
            background: 'var(--white)',
            border: '8px solid var(--white)',
            position: 'relative',
            aspectRatio: '16/9'
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/yK3tkBEZeLw"
            title="Cara Menentukan Keaslian Madu"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ borderRadius: '24px' }}
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
