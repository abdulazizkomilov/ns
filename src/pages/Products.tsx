import { Wheat, Package, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Products() {
  const { t } = useLanguage();

  const products = [
    {
      name: t('spaghetti'),
      description: t('spaghettiDesc'),
      icon: Wheat,
      color: 'from-yellow-400 to-yellow-600',
      image: '/images/spaghetti.jpg'
    },
    {
      name: t('vermicelli'),
      description: t('vermicelliDesc'),
      icon: Package,
      color: 'from-orange-400 to-orange-600',
      image: '/images/vermicelli.jpg'
    },
    {
      name: t('penne'),
      description: t('penneDesc'),
      icon: Wheat,
      color: 'from-green-400 to-green-600',
      image: '/images/penne.jpg'
    },
    {
      name: t('fusilli'),
      description: t('fusilliDesc'),
      icon: Package,
      color: 'from-blue-400 to-blue-600',
      image: '/images/fusilli.jpg'
    },
    {
      name: t('rigatoni'),
      description: t('rigatoniDesc'),
      icon: Wheat,
      color: 'from-yellow-500 to-yellow-700',
      image: '/images/rigatoni.jpg'
    },
    {
      name: t('conchiglie'),
      description: t('conchiglieDesc'),
      icon: Package,
      color: 'from-orange-500 to-orange-700',
      image: '/images/conchiglie.jpg'
    },
    {
      name: t('rotelle'),
      description: t('rotelleDesc'),
      icon: Wheat,
      color: 'from-yellow-600 to-yellow-800',
      image: '/images/rotelle.jpg'
    },
    {
      name: t('tagliatelle'),
      description: t('tagliatelleDesc'),
      icon: Package,
      color: 'from-yellow-400 to-yellow-600',
      image: '/images/tagliatelle.jpg'
    },
    {
      name: t('macaroni'),
      description: t('macaroniDesc'),
      icon: Wheat,
      color: 'from-orange-400 to-orange-600',
      image: '/images/macaroni.jpg'
    },
    {
      name: t('farfalle'),
      description: t('farfalleDesc'),
      icon: Package,
      color: 'from-purple-400 to-purple-600',
      image: '/images/farfalle.jpg'
    },
    {
      name: t('ditalini'),
      description: t('ditaliniDesc'),
      icon: Wheat,
      color: 'from-green-500 to-green-700',
      image: '/images/ditalini.jpg'
    },
    {
      name: t('orzo'),
      description: t('orzoDesc'),
      icon: Package,
      color: 'from-yellow-500 to-yellow-700',
      image: '/images/orzo.jpg'
    },
    {
      name: t('tortellini'),
      description: t('tortelliniDesc'),
      icon: Wheat,
      color: 'from-red-400 to-red-600',
      image: '/images/tortellini.jpg'
    },
    {
      name: t('fettuccine'),
      description: t('fettuccineDesc'),
      icon: Package,
      color: 'from-yellow-400 to-yellow-600',
      image: '/images/fettuccine.jpg'
    },
    {
      name: t('lasagna'),
      description: t('lasagnaDesc'),
      icon: Wheat,
      color: 'from-orange-500 to-orange-700',
      image: '/images/lasagna.jpg'
    },
    {
      name: t('ravioli'),
      description: t('ravioliDesc'),
      icon: Package,
      color: 'from-red-500 to-red-700',
      image: '/images/ravioli.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('ourProducts')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('productsDescription')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-yellow-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="h-48 bg-gray-50 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <Award className="w-5 h-5 text-yellow-500" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600 font-semibold">Premium Quality</span>
                    <span className="text-gray-500">Since 2002</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <Wheat className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Premium Wheat</h3>
            <p className="text-green-100 leading-relaxed">
              We use only the finest quality wheat flour for all our pasta products.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Quality Assured</h3>
            <p className="text-yellow-100 leading-relaxed">
              Every batch meets international standards and quality certifications.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Fresh Production</h3>
            <p className="text-orange-100 leading-relaxed">
              Produced fresh daily with modern equipment and traditional methods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
