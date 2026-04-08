import React from 'react';

export type Language = 'id' | 'en';

export interface Translation {
  brand: string;
  intro_tag: string;
  hero_title: React.ReactNode;
  hero_desc: string;
  btn_start: string;
  section_types: string;
  types_desc: string;
  explore_tag: string;
  traits_label: string;
  origin_label: string;
  benefits_label: string;
  uniqueness_label: string;
  bees_title: string;
  flowers_title: string;
  disukai_label: string;
  relationship_title: string;
  relationship_desc: string;
  rel_1_title: string;
  rel_1_desc: string;
  rel_2_title: string;
  rel_2_desc: string;
  rel_3_title: string;
  rel_3_desc: string;
  myth_tag: string;
  myth_title: string;
  myth_desc: string;
  fact_label: string;
  conclusion_label: string;
  accurate_way_title: string;
  accurate_1: string;
  accurate_2: string;
  accurate_3: string;
  accurate_4: string;
  quiz_tag: string;
  quiz_title: string;
  quiz_soal: string;
  quiz_next: string;
  quiz_result: string;
  quiz_score: string;
  quiz_retry: string;
  footer_desc: string;
  footer_copy: string;
}

export const translations: Record<Language, Translation> = {
  id: {
    brand: "HoneyVerse",
    intro_tag: "Mengenal Madu Indonesia 🍯",
    hero_title: <>Eksplorasi <br /> Ragam <span style={{ color: 'var(--primary)', WebkitTextStroke: '1px var(--secondary)' }}>Keajaiban</span> <br /> Madu Nusantara</>,
    hero_desc: "Indonesia memiliki berbagai jenis madu yang berasal dari nektar bunga yang berbeda. Temukan rahasia di balik setiap tetesan manisnya.",
    btn_start: "Mulai Eksplorasi",
    section_types: "Jenis-Jenis Madu Indonesia",
    types_desc: "Klik pada kartu untuk mempelajari ciri khas, manfaat, dan keunikan tiap jenis madu.",
    explore_tag: "Eksplorasi",
    traits_label: "Ciri-Ciri:",
    origin_label: "Asal:",
    benefits_label: "Manfaat:",
    uniqueness_label: "Keunikan:",
    bees_title: "Lebah Penghasil Madu",
    flowers_title: "Bunga Sumber Nektar",
    disukai_label: "Disukai:",
    relationship_title: "Hubungan Madu, Lebah & Bunga",
    relationship_desc: "Madu adalah harmoni antara lebah dan nektar bunga. Tahukah kamu bahwa karakter madu sangat bergantung pada kombinasi keduanya?",
    rel_1_title: "Bunga Sama, Lebah Beda",
    rel_1_desc: "Karakter dasar madu mengikuti bunga, namun profil nutrisi dipengaruhi oleh spesies lebah.",
    rel_2_title: "Lebah Sama, Bunga Beda",
    rel_2_desc: "Sumber nektar adalah penentu utama rasa, warna, dan aroma madu yang dihasilkan.",
    rel_3_title: "Lebah & Bunga Beda",
    rel_3_desc: "Menciptakan varietas madu unik, seperti madu Trigona yang cenderung lebih asam.",
    myth_tag: "Waspada Mitos",
    myth_title: "Madu Asli vs Palsu",
    myth_desc: "Jangan mudah percaya pada metode sederhana. Keaslian madu tidak bisa ditentukan hanya dengan sekali lihat.",
    fact_label: "Kenyataannya:",
    conclusion_label: "Kesimpulan:",
    accurate_way_title: "Cara Menentukan Keaslian",
    accurate_1: "Cek Label Komposisi",
    accurate_2: "Peternak Terpercaya",
    accurate_3: "Sertifikasi BPOM/SNI",
    accurate_4: "Uji Laboratorium Akurat",
    quiz_tag: "Uji Pemahaman",
    quiz_title: "Seberapa Paham Kamu Tentang Madu?",
    quiz_soal: "Soal",
    quiz_next: "Lanjut",
    quiz_result: "Lihat Hasil",
    quiz_score: "Skor kamu:",
    quiz_retry: "Coba Lagi",
    footer_desc: "Mari lestarikan madu asli Indonesia dengan membeli produk dari sumber yang terpercaya dan mendukung peternak lokal.",
    footer_copy: "© 2026 HoneyVerse Indonesia. Dibuat dengan ❤️ untuk pecinta madu Nusantara."
  },
  en: {
    brand: "HoneyVerse Indonesia",
    intro_tag: "Meet Indonesian Honey 🍯",
    hero_title: <>Explore <br /> The <span style={{ color: 'var(--primary)', WebkitTextStroke: '1px var(--secondary)' }}>Wonder</span> <br /> of Nusantara Honey</>,
    hero_desc: "Indonesia has various types of honey derived from distinct flower nectars. Discover the secrets behind every sweet drop.",
    btn_start: "Start Exploration",
    section_types: "Types of Indonesian Honey",
    types_desc: "Click on a card to learn about the characteristics, benefits, and uniqueness of each honey type.",
    explore_tag: "Explore",
    traits_label: "Characteristics:",
    origin_label: "Origin:",
    benefits_label: "Benefits:",
    uniqueness_label: "Uniqueness:",
    bees_title: "Honey-Producing Bees",
    flowers_title: "Nectar Source Flowers",
    disukai_label: "Preferred by:",
    relationship_title: "The Harmony of Bee & Bloom",
    relationship_desc: "Honey is the masterpiece of bees and nectar. Did you know its character depends heavily on their partnership?",
    rel_1_title: "Same Flower, Different Bee",
    rel_1_desc: "Base character follows the flower, but nutritional profile is influenced by the bee species.",
    rel_2_title: "Same Bee, Different Flower",
    rel_2_desc: "Nectar source is the primary architect of flavor, color, and floral aroma.",
    rel_3_title: "Different Bee & Flower",
    rel_3_desc: "Creates unique varieties, like the sour-tinged Trigona honey.",
    myth_tag: "Myth Alert",
    myth_title: "Real vs Fake Honey",
    myth_desc: "Don't fall for simple household tests. Honey authenticity is more complex than it looks.",
    fact_label: "The Reality:",
    conclusion_label: "Conclusion:",
    accurate_way_title: "How to Verify Authenticity",
    accurate_1: "Check Composition Label",
    accurate_2: "Buy from Trusted Farmers",
    accurate_3: "BPOM/SNI Certification",
    accurate_4: "Accurate Laboratory Test",
    quiz_tag: "Knowledge Test",
    quiz_title: "How Well Do You Know Honey?",
    quiz_soal: "Question",
    quiz_next: "Next",
    quiz_result: "See Result",
    quiz_score: "Your score:",
    quiz_retry: "Try Again",
    footer_desc: "Protect Indonesian honey by purchasing from trusted sources and supporting local beekeepers.",
    footer_copy: "© 2026 HoneyVerse Indonesia. Made with ❤️ for Nusantara honey lovers."
  }
};

export interface HoneyType {
  id: string;
  name: string;
  description: string;
  traits: string[];
  benefits: string[];
  origin: string;
  uniqueness: string;
}

export const honeyTypes: Record<Language, HoneyType[]> = {
  id: [
    {
      id: 'kaliandra',
      name: 'Kaliandra',
      description: 'Madu kaliandra berasal dari nektar bunga pohon kaliandra dan merupakan salah satu madu yang populer di Indonesia.',
      traits: ['Rasa manis', 'Aroma khas bunga', 'Warna cenderung gelap'],
      benefits: ['Lancar pencernaan', 'Atasi tekanan darah', 'Daya tahan tubuh', 'Antioksidan tinggi'],
      origin: 'Daerah pegunungan Jawa Tengah & Jawa Timur.',
      uniqueness: 'Berbunga sepanjang tahun, nektar melimpah.'
    },
    {
      id: 'randu',
      name: 'Randu',
      description: 'Madu randu berasal dari nektar bunga pohon randu atau kapuk.',
      traits: ['Rasa manis sedikit asam', 'Warna cokelat terang'],
      benefits: ['Nafsu makan', 'Penyembuhan tubuh', 'Sistem imun', 'Antioksidan'],
      origin: 'Perkebunan randu di Jawa Timur & Jawa Tengah.',
      uniqueness: 'Rasa khas manis sedikit asam, warna terang.'
    },
    {
      id: 'kelengkeng',
      name: 'Kelengkeng',
      description: 'Madu kelengkeng dihasilkan dari lebah yang menghisap nektar bunga pohon kelengkeng.',
      traits: ['Rasa manis gurih', 'Aroma harum'],
      benefits: ['Stamina & energi', 'Regenerasi sel', 'Daya tahan tubuh'],
      origin: 'Indonesia, Thailand, dan Vietnam.',
      uniqueness: 'Aroma sangat harum, menarik banyak lebah.'
    },
    {
      id: 'akasia',
      name: 'Akasia',
      description: 'Madu akasia berasal dari nektar bunga akasia.',
      traits: ['Transparan/cerah', 'Manis ringan (vanila)', 'Tahan lama'],
      benefits: ['Pencernaan', 'Sembuhkan luka', 'Antibakteri alami', 'Kontrol gula darah'],
      origin: 'Hutan akasia Sumatera dan Kalimantan.',
      uniqueness: 'Sangat jernih, tidak cepat mengkristal.'
    }
  ],
  en: [
    {
      id: 'kaliandra',
      name: 'Kaliandra',
      description: 'Kaliandra honey comes from the nectar of the Kaliandra tree and is popular in Indonesia.',
      traits: ['Sweet taste', 'Floral aroma', 'Darker color'],
      benefits: ['Digestion aid', 'Blood pressure', 'Immune system', 'High antioxidants'],
      origin: 'Mountains of Central & East Java.',
      uniqueness: 'Blooms all year round, abundant nectar.'
    },
    {
      id: 'randu',
      name: 'Randu',
      description: 'Randu honey comes from the nectar of the Randu or Kapok tree.',
      traits: ['Sweet and sour', 'Light brown color'],
      benefits: ['Appetite boost', 'Body healing', 'Immune system', 'Antioxidants'],
      origin: 'Randu plantations in East & Central Java.',
      uniqueness: 'Distinct sweet-sour taste, light color.'
    },
    {
      id: 'kelengkeng',
      name: 'Longan',
      description: 'Longan honey is produced by bees sucking nectar from longan tree flowers.',
      traits: ['Savory sweet', 'Fragrant aroma'],
      benefits: ['Stamina & energy', 'Cell regeneration', 'Immune system'],
      origin: 'Indonesia, Thailand, and Vietnam.',
      uniqueness: 'Highly fragrant, attracts many bees.'
    },
    {
      id: 'akasia',
      name: 'Acacia',
      description: 'Acacia honey comes from the nectar of acacia flowers.',
      traits: ['Transparent/bright', 'Mild sweet (vanilla)', 'Long shelf life'],
      benefits: ['Digestion', 'Wound healing', 'Natural antibacterial', 'Blood sugar control'],
      origin: 'Acacia forests of Sumatra and Kalimantan.',
      uniqueness: 'Highly clear, does not crystallize easily.'
    }
  ]
};

export interface BeeType {
  name: string;
  tagline: string;
  description: string;
}

export const bees: Record<Language, BeeType[]> = {
  id: [
    { name: 'Apis cerana', tagline: 'Lebah Lokal', description: 'Banyak ditemukan di Indonesia. Produksi sedang.' },
    { name: 'Apis mellifera', tagline: 'Lebah Unggul', description: 'Produksi tinggi. Banyak dibudidayakan.' },
    { name: 'Apis dorsata', tagline: 'Lebah Hutan', description: 'Hidup liar di hutan. Produksi besar.' },
    { name: 'Trigona sp.', tagline: 'Lebah Kecil', description: 'Tidak menyengat. Madu sedikit & asam.' }
  ],
  en: [
    { name: 'Apis cerana', tagline: 'Local Bee', description: 'Commonly found in Indonesia. Medium production.' },
    { name: 'Apis mellifera', tagline: 'Superior Bee', description: 'High production. Widely cultivated.' },
    { name: 'Apis dorsata', tagline: 'Forest Bee', description: 'Lives wild in forests. High production.' },
    { name: 'Trigona sp.', tagline: 'Small Bee', description: 'Stingless. Low production & sour taste.' }
  ]
};

export interface FlowerType {
  name: string;
  traits: string;
  bees: string[];
}

export const flowers: Record<Language, FlowerType[]> = {
  id: [
    { name: 'Bunga Randu', traits: 'Putih kekuningan, nektar melimpah.', bees: ['Apis cerana', 'Apis mellifera'] },
    { name: 'Bunga Kelengkeng', traits: 'Kecil bergerombol, aroma harum.', bees: ['Apis mellifera', 'Apis cerana'] },
    { name: 'Bunga Kaliandra', traits: 'Merah/putih, bentuk sikat botol.', bees: ['Apis mellifera', 'Apis cerana'] },
    { name: 'Bunga Akasia', traits: 'Kecil bergerombol, mudah dijangkau.', bees: ['Apis mellifera'] }
  ],
  en: [
    { name: 'Randu Flower', traits: 'Yellowish white, abundant nectar.', bees: ['Apis cerana', 'Apis mellifera'] },
    { name: 'Longan Flower', traits: 'Small clusters, fragrant aroma.', bees: ['Apis mellifera', 'Apis cerana'] },
    { name: 'Kaliandra Flower', traits: 'Red/white, bottle brush shape.', bees: ['Apis mellifera', 'Apis cerana'] },
    { name: 'Acacia Flower', traits: 'Small clusters, easy to reach.', bees: ['Apis mellifera'] }
  ]
};

export interface MythType {
  title: string;
  description: string;
  fact: string;
  conclusion: string;
}

export const myths: Record<Language, MythType[]> = {
  id: [
    {
      title: 'Uji Tisu',
      description: 'Madu diteteskan ke tisu. Jika tidak meresap, dianggap asli.',
      fact: 'Kekentalan tidak hanya dimiliki oleh madu. Sirup gula juga kental.',
      conclusion: 'Uji ini menunjukkan kekentalan, bukan keaslian.'
    },
    {
      title: 'Uji Semut',
      description: 'Percaya bahwa madu asli tidak didatangi semut.',
      fact: 'Semut tertarik pada semua cairan manis, termasuk madu asli.',
      conclusion: 'Semut bukan indikator keaslian madu.'
    },
    {
      title: 'Uji Korek Api',
      description: 'Oleskan ke korek, jika menyala dianggap asli.',
      fact: 'Cairan kental (termasuk gula) tetap membuat korek menyala.',
      conclusion: 'Hanya menunjukkan rendahnya kadar air.'
    },
    {
      title: 'Kristalisasi',
      description: 'Madu yang mengkristal dianggap mengandung gula pasir.',
      fact: 'Kristalisasi adalah proses alami tergantung nektar bunga.',
      conclusion: 'Bukan tanda madu palsu.'
    }
  ],
  en: [
    {
      title: 'Tissue Test',
      description: 'Honey dropped on tissue. If it doesn\'t soak through, it\'s real.',
      fact: 'Viscosity is not exclusive to honey. Sugar syrup is also thick.',
      conclusion: 'Indicates viscosity, not authenticity.'
    },
    {
      title: 'Ant Test',
      description: 'Believing that real honey won\'t attract ants.',
      fact: 'Ants are attracted to all sweet liquids, including pure honey.',
      conclusion: 'Ants are not an indicator of authenticity.'
    },
    {
      title: 'Matchstick Test',
      description: 'Coating matchsticks with honey; if they light up, it\'s real.',
      fact: 'Thick liquids (including sugar) still allow matchsticks to ignite.',
      conclusion: 'Only indicates low moisture content.'
    },
    {
      title: 'Crystallization',
      description: 'Crystallized honey is thought to contain added sugar.',
      fact: 'Crystallization is a natural process depending on nectar type.',
      conclusion: 'Not a sign of fake honey.'
    }
  ]
};

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
}

export const quizQuestions: Record<Language, QuizQuestion[]> = {
  id: [
    { question: 'Uji tisu bisa digunakan untuk memastikan madu asli', options: ['Benar', 'Salah'], answer: 1 },
    { question: 'Semut hanya datang ke madu asli', options: ['Benar', 'Salah'], answer: 1 },
    { question: 'Uji korek api dapat membuktikan keaslian madu', options: ['Benar', 'Salah'], answer: 1 },
    { question: 'Madu yang mengkristal bisa saja merupakan madu asli', options: ['Benar', 'Salah'], answer: 0 },
    { question: 'Uji laboratorium adalah cara paling akurat untuk memastikan madu asli', options: ['Benar', 'Salah'], answer: 0 }
  ],
  en: [
    { question: 'Tissue test can ensure honey authenticity', options: ['True', 'False'], answer: 1 },
    { question: 'Ants only come to real honey', options: ['True', 'False'], answer: 1 },
    { question: 'Matchstick test can prove honey is real', options: ['True', 'False'], answer: 1 },
    { question: 'Crystallized honey can be authentic', options: ['True', 'False'], answer: 0 },
    { question: 'Lab testing is the most accurate way to verify honey', options: ['True', 'False'], answer: 0 }
  ]
};

export const feedbacks: Record<Language, string[]> = {
  id: ["Masih percaya mitos 😄", "Sudah mulai paham!", "Kamu sudah paham tentang madu!"],
  en: ["Still believing in myths 😄", "Getting the hang of it!", "You're a honey expert!"]
};
