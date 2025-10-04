import { ArrowRight, Wheat, Leaf, Sun } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-green-50 via-white to-yellow-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIyYzU1ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                  <Leaf className="w-4 h-4 mr-2" />
                  {t('greenEnergy')}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                {t('heroTitle')}
              </h1>

              <p className="text-2xl text-green-700 font-medium">
                {t('heroSubtitle')}
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                {t('heroDescription')}
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('products')}
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                >
                  {t('viewProducts')}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center px-8 py-4 bg-white text-green-700 rounded-xl font-semibold text-lg border-2 border-green-600 hover:bg-green-50 transform hover:-translate-y-0.5 transition-all"
                >
                  {t('aboutUs')}
                </button>
              </div>
            </div>

            <div className="relative lg:h-[600px] hidden lg:block">
              <div className="absolute inset-0 grid grid-cols-2 gap-6">
                <div className="space-y-6 animate-float">
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-green-100 transform hover:scale-105 transition-transform">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                      <Wheat className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('spaghetti')}</h3>
                    <p className="text-gray-600">{t('spaghettiDesc')}</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-green-100 transform hover:scale-105 transition-transform">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4">
                      <Leaf className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('ecoFriendly')}</h3>
                    <p className="text-gray-600">{t('greenEnergyDescription')}</p>
                  </div>
                </div>

                <div className="space-y-6 mt-12 animate-float-delay">
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-green-100 transform hover:scale-105 transition-transform">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                      <Sun className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('solarPower')}</h3>
                    <p className="text-gray-600">{t('sustainability')}</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-6 shadow-xl text-white transform hover:scale-105 transition-transform">
                    <div className="text-5xl font-bold mb-2">23+</div>
                    <p className="text-green-100 text-lg">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Wheat, label: 'Premium Quality', color: 'yellow' },
              { icon: Leaf, label: 'Eco-Friendly', color: 'green' },
              { icon: Sun, label: 'Solar Powered', color: 'orange' },
              { icon: ArrowRight, label: 'Since 2002', color: 'green' }
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <p className="font-semibold text-gray-900">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
