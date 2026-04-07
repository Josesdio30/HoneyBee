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
        padding: '0.75rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span style={{ fontSize: '1.25rem' }}>🍯</span>
          <span style={{ fontWeight: 800, color: 'var(--secondary)', fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}>{t.brand}</span>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', background: 'var(--glass-dark)', padding: '0.2rem', borderRadius: '99px', border: '1px solid rgba(0,0,0,0.05)' }}>
            <button 
              onClick={() => setLanguage('id')}
              style={{
                borderRadius: '99px',
                padding: '0.4rem 0.8rem',
                border: 'none',
                background: language === 'id' ? 'var(--primary)' : 'transparent',
                color: 'var(--foreground)',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontSize: '0.75rem'
              }}
            >
              ID
            </button>
            <button 
              onClick={() => setLanguage('en')}
              style={{
                borderRadius: '99px',
                padding: '0.4rem 0.8rem',
                border: 'none',
                background: language === 'en' ? 'var(--primary)' : 'transparent',
                color: 'var(--foreground)',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontSize: '0.75rem'
              }}
            >
              EN
            </button>
          </div>
          
          <Globe size={16} color="var(--tertiary)" />
        </div>
      </div>
    </motion.nav>
  );
}
