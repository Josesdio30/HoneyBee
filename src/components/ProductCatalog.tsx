'use client';

import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations, catalogProducts } from '../data/honeyData';

export default function ProductCatalog() {
  const { language } = useLanguage();
  const t = translations[language];
  const products = catalogProducts[language];

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <span className="tag">{t.nav_katalog}</span>
        <h2>{t.catalog_title}</h2>
        <p style={{ maxWidth: '600px', margin: '1rem auto', opacity: 0.8 }}>
          {t.catalog_desc}
        </p>
      </motion.div>

      <div className="grid grid-cols-2" style={{ gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        {products.map((product, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
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
              <ShoppingBag size={18} /> {t.buy_now}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
