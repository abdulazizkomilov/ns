import { Calendar, ArrowRight, Leaf, Award, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function News() {
  const { t } = useLanguage();

  const newsItems = [
    {
      title: {
        uz: 'Yangi quyosh panellari o\'rnatildi',
        en: 'New Solar Panels Installed',
        ru: 'Установлены новые солнечные панели'
      },
      excerpt: {
        uz: 'Korxonamizda 200 ta yangi quyosh paneli o\'rnatildi. Bu bizning yashil energiya yo\'nalishidagi katta qadamdir.',
        en: 'We have installed 200 new solar panels at our facility. This is a major step in our green energy initiative.',
        ru: 'На нашем предприятии установлено 200 новых солнечных панелей. Это важный шаг в нашей инициативе по зеленой энергии.'
      },
      date: '15.03.2025',
      category: 'Green Energy',
      icon: Leaf,
      color: 'from-green-500 to-green-700'
    },
    {
      title: {
        uz: 'Sifat sertifikati olindi',
        en: 'Quality Certificate Achieved',
        ru: 'Получен сертификат качества'
      },
      excerpt: {
        uz: 'Mahsulotlarimiz xalqaro sifat standartlariga mos kelishi tasdiqlab berildi.',
        en: 'Our products have been certified to meet international quality standards.',
        ru: 'Наша продукция сертифицирована на соответствие международным стандартам качества.'
      },
      date: '10.03.2025',
      category: 'Achievement',
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: {
        uz: 'Yangi ishlab chiqarish liniyasi',
        en: 'New Production Line',
        ru: 'Новая производственная линия'
      },
      excerpt: {
        uz: 'Zamonaviy uskunalar bilan jihozlangan yangi ishlab chiqarish liniyasi ishga tushirildi.',
        en: 'A new production line equipped with modern machinery has been launched.',
        ru: 'Запущена новая производственная линия с современным оборудованием.'
      },
      date: '05.03.2025',
      category: 'Production',
      icon: Zap,
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: {
        uz: 'Mahalliy bug\'doy yetishtiruvchilar bilan hamkorlik',
        en: 'Partnership with Local Wheat Farmers',
        ru: 'Партнерство с местными производителями пшеницы'
      },
      excerpt: {
        uz: 'Mahalliy fermerlar bilan hamkorlik shartnomasi imzolandi. Bu mahalliy iqtisodiyotni rivojlantirishga yordam beradi.',
        en: 'Partnership agreement signed with local farmers. This supports local economic development.',
        ru: 'Подписано партнерское соглашение с местными фермерами. Это поддерживает развитие местной экономики.'
      },
      date: '28.02.2025',
      category: 'Community',
      icon: Leaf,
      color: 'from-emerald-500 to-emerald-700'
    },
    {
      title: {
        uz: 'Energiya samaradorligi 20% ga oshdi',
        en: 'Energy Efficiency Increased by 20%',
        ru: 'Энергоэффективность увеличена на 20%'
      },
      excerpt: {
        uz: 'Yangi texnologiyalar joriy etilishi natijasida energiya sarfi 20% kamaydi.',
        en: 'Implementation of new technologies has reduced energy consumption by 20%.',
        ru: 'Внедрение новых технологий снизило энергопотребление на 20%.'
      },
      date: '20.02.2025',
      category: 'Green Energy',
      icon: Zap,
      color: 'from-green-500 to-green-700'
    },
    {
      title: {
        uz: 'Yangi mahsulot turi - Organik makaron',
        en: 'New Product - Organic Pasta',
        ru: 'Новый продукт - Органические макароны'
      },
      excerpt: {
        uz: 'Organik bug\'doydan tayyorlangan yangi mahsulot liniyasi taqdim etildi.',
        en: 'Launched new product line made from organic wheat.',
        ru: 'Представлена новая линейка продуктов из органической пшеницы.'
      },
      date: '15.02.2025',
      category: 'Product',
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('latestNews')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest developments, achievements, and initiatives
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-yellow-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border border-gray-100 group"
            >
              <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                  {item.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title[t('language') as 'uz' | 'en' | 'ru'] || item.title.en}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt[t('language') as 'uz' | 'en' | 'ru'] || item.excerpt.en}
                </p>

                <button className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 group-hover:translate-x-1 transition-transform">
                  {t('readMore')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Stay informed about our latest products, green energy initiatives, and company news
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-xl font-semibold text-white transition-colors shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
