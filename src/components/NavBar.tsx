'use client';

import { useLanguage } from '../LanguageContext';
import { translations } from '../data/honeyData';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const pathname = usePathname();
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (pathname !== '/') {
      router.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flex: 1, justifyContent: 'center' }} className="nav-links">
          {[
            { id: 'hero', label: t.nav_home },
            { id: 'explore', label: t.nav_types },
            { id: 'bees-flowers', label: t.nav_edu },
            { id: 'authenticity-video', label: t.nav_video },
            { id: 'debunking', label: t.nav_myth },
            { id: 'quiz', label: t.nav_quiz },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--secondary)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                padding: '0.5rem 0',
                opacity: 0.7,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
            >
              {item.label}
            </button>
          ))}
          <Link
            href="/katalog"
            style={{
              textDecoration: 'none',
              color: 'var(--secondary)',
              fontWeight: 800,
              fontSize: '0.85rem',
              padding: '0.4rem 1rem',
              background: 'var(--primary)',
              borderRadius: '99px',
              opacity: pathname === '/katalog' ? 1 : 0.8,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {t.nav_katalog}
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          {/* Mobile Menu Toggle */}
          <button
            className="mobile-only"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--secondary)',
              cursor: 'pointer',
              display: 'none', // Managed by CSS
              padding: '0.5rem'
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

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

          <Globe size={16} color="var(--tertiary)" className="desktop-only" />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'var(--background)',
              width: '100%',
              overflow: 'hidden',
              borderBottom: '1px solid rgba(163, 123, 77, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              padding: '1rem 0'
            }}
          >
            {[
              { id: 'hero', label: t.nav_home },
              { id: 'explore', label: t.nav_types },
              { id: 'bees-flowers', label: t.nav_edu },
              { id: 'authenticity-video', label: t.nav_video },
              { id: 'debunking', label: t.nav_myth },
              { id: 'quiz', label: t.nav_quiz },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--secondary)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  padding: '1rem 2rem',
                  textAlign: 'left',
                  width: '100%',
                  borderBottom: '1px solid rgba(163, 123, 77, 0.05)'
                }}
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/katalog"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'var(--secondary)',
                fontWeight: 800,
                fontSize: '1rem',
                padding: '1rem 2rem',
                background: 'var(--primary)',
                margin: '1rem 2rem',
                borderRadius: '12px',
                textAlign: 'center'
              }}
            >
              {t.nav_katalog}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
