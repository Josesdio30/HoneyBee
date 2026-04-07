'use client';

import { useLanguage } from '../LanguageContext';
import { translations } from '../data/honeyData';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function NavBar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        background: 'rgba(253, 239, 212, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(163, 123, 77, 0.1)',
        padding: '1rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span style={{ fontSize: '1.5rem' }}>🍯</span>
          <span style={{ fontWeight: 800, color: 'var(--secondary)', fontSize: '1.2rem' }}>{t.brand}</span>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '0.5rem', background: 'var(--glass-dark)', padding: '0.25rem', borderRadius: '99px' }}>
            <button 
              onClick={() => setLanguage('id')}
              style={{
                borderRadius: '99px',
                padding: '0.4rem 1rem',
                border: 'none',
                background: language === 'id' ? 'var(--primary)' : 'transparent',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontSize: '0.85rem'
              }}
            >
              ID
            </button>
            <button 
              onClick={() => setLanguage('en')}
              style={{
                borderRadius: '99px',
                padding: '0.4rem 1rem',
                border: 'none',
                background: language === 'en' ? 'var(--primary)' : 'transparent',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontSize: '0.85rem'
              }}
            >
              EN
            </button>
          </div>
          
          <Globe size={18} color="var(--tertiary)" />
        </div>
      </div>
    </motion.nav>
  );
}
