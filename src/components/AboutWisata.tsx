'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { translations } from '../data/honeyData';
import { Compass, Sparkles, Video } from 'lucide-react';

export default function AboutWisata() {
  const { language } = useLanguage();
  const t = translations[language];

  const videos = [
    {
      url: "https://www.youtube.com/embed/XNP_q1Uhj8U",
      title: language === 'id' ? "Panen Madu Segar" : "Fresh Honey Harvest",
      desc: language === 'id'
        ? "Merasakan sensasi unik mengambil madu langsung dari sarang lebah secara aman."
        : "Experience the unique thrill of harvesting honey directly and safely from the hive."
    },
    {
      url: "https://www.youtube.com/embed/pv7x-Yr-3hA",
      title: language === 'id' ? "Edukasi & Tour Interaktif" : "Interactive Farm Tour",
      desc: language === 'id'
        ? "Mengenal ekosistem lebah madu secara dekat dibimbing langsung oleh tim ahli kami."
        : "Get up close with the honeybee ecosystem guided by our expert team."
    },
    {
      url: "https://www.youtube.com/embed/qaqMZuGExoA",
      title: language === 'id' ? "Dokumentasi Wisata" : "Tour Documentary",
      desc: language === 'id'
        ? "Keseruan rombongan pengunjung menikmati petualangan manis di Wisata Petik Madu."
        : "Watch visitors having a wonderful sweet adventure at our Harvesting Tour."
    }
  ];

  return (
    <section id="about-wisata" className="section" style={{ background: 'var(--white)', padding: '6rem 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <Compass size={14} /> {t.about_wisata_tag}
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.75rem' }}>{t.about_wisata_title}</h2>
          <p style={{ maxWidth: '700px', margin: '1rem auto 0 auto', opacity: 0.8 }}>
            {t.about_wisata_desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
          {videos.map((vid, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="card"
              style={{
                background: 'var(--background)',
                padding: '0',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(163, 123, 77, 0.1)',
                border: '1px solid rgba(163, 123, 77, 0.1)',
                display: 'flex',
                flexDirection: 'column'
              }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(163, 123, 77, 0.15)' }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#000' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src={vid.url}
                  title={vid.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ display: 'block', border: 'none' }}
                ></iframe>
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)' }}>
                  <Video size={16} style={{ color: 'var(--primary)' }} />
                  <h4 style={{ margin: 0, color: 'var(--secondary)', fontSize: '1.1rem' }}>{vid.title}</h4>
                </div>
                <p style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.5', margin: 0 }}>
                  {vid.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
