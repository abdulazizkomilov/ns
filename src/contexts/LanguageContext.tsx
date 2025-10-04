import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'uz' | 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  uz: {
    home: 'Bosh sahifa',
    about: 'Biz haqimizda',
    products: 'Mahsulotlar',
    greenEnergy: 'Yashil energiya',
    news: 'Yangiliklar',
    contact: 'Aloqa',
    viewProducts: 'Mahsulotlarni ko\'rish',
    aboutUs: 'Biz haqimizda',
    contactUs: 'Biz bilan bog\'laning',
    heroTitle: 'Narpay Spaghetti',
    heroSubtitle: 'Sifatli makaron mahsulotlari va yashil energiya bilan kelajakka',
    heroDescription: '2002-yildan buyon xalqimiz uchun sifatli va arzon makaron mahsulotlarini ishlab chiqarmoqdamiz',
    aboutText: 'Korxonamiz 2002-yildan buyon faoliyat yuritib kelmoqda. Biz xalqimiz uchun sifatli va arzon makaron mahsulotlari ishlab chiqarishni o\'z burchimiz deb bilamiz.',
    ourProducts: 'Bizning mahsulotlar',
    productsDescription: 'Eng yuqori sifatli bug\'doy unidan tayyorlangan turli xil makaron mahsulotlari',
    greenEnergyTitle: 'Yashil energiya va barqaror ishlab chiqarish',
    greenEnergyDescription: 'Biz ekologik toza ishlab chiqarish va qayta tiklanadigan energiya manbalariga sodiqmiz. Bizning zavodimiz quyosh panellari bilan jihozlangan.',
    sustainability: 'Barqarorlik',
    solarPower: 'Quyosh energiyasi',
    ecoFriendly: 'Ekologik toza',
    latestNews: 'So\'nggi yangiliklar',
    readMore: 'Batafsil',
    getInTouch: 'Biz bilan bog\'laning',
    contactInfo: 'Aloqa ma\'lumotlari',
    phone: 'Telefon',
    email: 'Email',
    address: 'Manzil',
    addressText: 'Samarqand v., Narpay t., Oqtosh sh., Tinchlik M.F.Y., Sanoat Qurilish Zonasi №1',
    bankingDetails: 'Bank rekvizitlari',
    company: 'Korxona',
    tin: 'STIR',
    account: 'Hisob raqami',
    bank: 'Bank',
    mfo: 'MFO',
    fshr: 'FSHR',
    allRightsReserved: 'Barcha huquqlar himoyalangan',
    spaghetti: 'Spagetti',
    vermicelli: 'Vermishel',
    penne: 'Penne',
    fusilli: 'Fusilli',
    spaghettiDesc: 'Klassik italyan spagetti - har qanday taom uchun mukammal',
    vermicelliDesc: 'Nozik vermishel - sho\'rva va salat uchun',
    penneDesc: 'Qisqa silindrsimon shakli - sous bilan ajoyib uyg\'unlashadi',
    fusilliDesc: 'Spiral shaklidagi makaron - barcha turdagi souslar uchun'
  },
  en: {
    home: 'Home',
    about: 'About Us',
    products: 'Products',
    greenEnergy: 'Green Energy',
    news: 'News',
    contact: 'Contact',
    viewProducts: 'View Products',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    heroTitle: 'Narpay Spaghetti',
    heroSubtitle: 'Quality Pasta Products and Green Energy for the Future',
    heroDescription: 'Since 2002, we have been producing high-quality and affordable pasta products for our people',
    aboutText: 'Our company has been operating since 2002. We produce food products for our people and community. Supplying our nation with affordable and high-quality pasta products is our mission and responsibility.',
    ourProducts: 'Our Products',
    productsDescription: 'Various types of pasta products made from the highest quality wheat flour',
    greenEnergyTitle: 'Green Energy and Sustainable Production',
    greenEnergyDescription: 'We are committed to environmentally friendly production and renewable energy sources. Our factory is equipped with solar panels.',
    sustainability: 'Sustainability',
    solarPower: 'Solar Power',
    ecoFriendly: 'Eco-Friendly',
    latestNews: 'Latest News',
    readMore: 'Read More',
    getInTouch: 'Get In Touch',
    contactInfo: 'Contact Information',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    addressText: 'Samarkand region, Narpay district, Oqtosh city, Tinchlik M.F.Y., Industrial Construction Zone №1',
    bankingDetails: 'Banking Details',
    company: 'Company',
    tin: 'TIN',
    account: 'Account',
    bank: 'Bank',
    mfo: 'MFO',
    fshr: 'FSHR',
    allRightsReserved: 'All rights reserved',
    spaghetti: 'Spaghetti',
    vermicelli: 'Vermicelli',
    penne: 'Penne',
    fusilli: 'Fusilli',
    spaghettiDesc: 'Classic Italian spaghetti - perfect for any dish',
    vermicelliDesc: 'Thin vermicelli - ideal for soups and salads',
    penneDesc: 'Short cylindrical shape - pairs wonderfully with sauces',
    fusilliDesc: 'Spiral-shaped pasta - great for all types of sauces'
  },
  ru: {
    home: 'Главная',
    about: 'О нас',
    products: 'Продукты',
    greenEnergy: 'Зеленая энергия',
    news: 'Новости',
    contact: 'Контакты',
    viewProducts: 'Смотреть продукты',
    aboutUs: 'О нас',
    contactUs: 'Свяжитесь с нами',
    heroTitle: 'Narpay Spaghetti',
    heroSubtitle: 'Качественные макаронные изделия и зеленая энергия для будущего',
    heroDescription: 'С 2002 года мы производим качественные и доступные макаронные изделия для нашего народа',
    aboutText: 'Наша компания работает с 2002 года. Мы производим продукты питания для нашего народа и общества. Обеспечивать население доступными и качественными макаронными изделиями — наша миссия и обязанность.',
    ourProducts: 'Наша продукция',
    productsDescription: 'Различные виды макаронных изделий из высококачественной пшеничной муки',
    greenEnergyTitle: 'Зеленая энергия и устойчивое производство',
    greenEnergyDescription: 'Мы привержены экологически чистому производству и возобновляемым источникам энергии. Наш завод оснащен солнечными панелями.',
    sustainability: 'Устойчивость',
    solarPower: 'Солнечная энергия',
    ecoFriendly: 'Экологичность',
    latestNews: 'Последние новости',
    readMore: 'Читать далее',
    getInTouch: 'Свяжитесь с нами',
    contactInfo: 'Контактная информация',
    phone: 'Телефон',
    email: 'Email',
    address: 'Адрес',
    addressText: 'Самаркандская обл., Нарпайский р-н, г. Октош, махалля Тинчлик, Промышленная строительная зона №1',
    bankingDetails: 'Банковские реквизиты',
    company: 'Компания',
    tin: 'ИНН',
    account: 'Счет',
    bank: 'Банк',
    mfo: 'МФО',
    fshr: 'FSHR',
    allRightsReserved: 'Все права защищены',
    spaghetti: 'Спагетти',
    vermicelli: 'Вермишель',
    penne: 'Пенне',
    fusilli: 'Фузилли',
    spaghettiDesc: 'Классические итальянские спагетти - идеальны для любого блюда',
    vermicelliDesc: 'Тонкая вермишель - для супов и салатов',
    penneDesc: 'Короткая цилиндрическая форма - прекрасно сочетается с соусами',
    fusilliDesc: 'Спиральные макароны - отлично подходят для всех видов соусов'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('uz');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.uz] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
