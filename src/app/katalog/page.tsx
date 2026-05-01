'use client';

import NavBar from '@/components/NavBar';
import { useLanguage } from '@/LanguageContext';
import { translations } from '@/data/honeyData';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function CatalogPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const products = [
    { name: 'Madu Randu', image: '/katalog/MADU_RANDU.png', price: 'Rp 130.000', link: 'https://s.shopee.co.id/40d0ncJ9mR' },
    { name: 'Madu Kelengkeng', image: '/katalog/MADU_KELENGKENG.png', price: 'Rp 130.000', link: 'https://s.shopee.co.id/9UxxLrjJD9' },
  ];

  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--background)' }}>
      <NavBar />

      <div className="container" style={{ paddingBottom: '6rem' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)', textDecoration: 'none', fontWeight: 700, marginBottom: '2rem' }}>
          <ArrowLeft size={20} /> {language === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="tag">{t.nav_katalog}</span>
          <h1 style={{ marginBottom: '1rem' }}>{t.catalog_title}</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>
            {t.catalog_desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-2" style={{ gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="card"
              style={{ 
                background: 'var(--white)', 
                padding: '1.5rem', 
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
              whileHover={{ y: -10 }}
            >
              <div style={{ width: '100%', aspectRatio: '1/1', marginBottom: '1.5rem', position: 'relative' }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{product.name}</h3>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '1.5rem' }}>
                {product.price}
              </div>
              
              <a 
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary" 
                style={{ width: '100%', fontSize: '0.9rem', padding: '0.75rem 1rem' }}
              >
                <ShoppingBag size={18} /> {language === 'id' ? 'Beli Sekarang' : 'Buy Now'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
