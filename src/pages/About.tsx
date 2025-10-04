import { Award, Users, Target, Leaf } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('aboutUs')}</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('aboutText')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold mb-2">23+</div>
                <p className="text-green-100">Years</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-yellow-100">Quality</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md transform hover:-translate-y-2 transition-transform">
                  <Award className="w-12 h-12 text-yellow-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Premium Quality</h3>
                  <p className="text-sm text-gray-600">Highest standards in production</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md transform hover:-translate-y-2 transition-transform">
                  <Users className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Community Focus</h3>
                  <p className="text-sm text-gray-600">Serving our people</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md transform hover:-translate-y-2 transition-transform">
                  <Target className="w-12 h-12 text-orange-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Mission Driven</h3>
                  <p className="text-sm text-gray-600">Affordable excellence</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md transform hover:-translate-y-2 transition-transform">
                  <Leaf className="w-12 h-12 text-green-700 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Sustainable</h3>
                  <p className="text-sm text-gray-600">Green energy powered</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            {t('aboutText')}
          </p>
        </div>
      </div>
    </div>
  );
}
