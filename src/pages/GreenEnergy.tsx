import { Sun, Leaf, Zap, TreePine, Wind, Droplets } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function GreenEnergy() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Sun,
      title: 'Solar Panels',
      description: 'Our factory is powered by state-of-the-art solar panel installations',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable production methods that protect our environment',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Zap,
      title: 'Clean Energy',
      description: 'Reducing carbon footprint with renewable energy sources',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: TreePine,
      title: 'Zero Waste',
      description: 'Committed to minimizing waste and recycling materials',
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      icon: Wind,
      title: 'Clean Air',
      description: 'Low emission production for cleaner air quality',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Efficient water usage and recycling systems',
      color: 'from-teal-400 to-teal-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl mb-6 shadow-lg">
            <Leaf className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('greenEnergyTitle')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('greenEnergyDescription')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-yellow-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Our Commitment</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">100% Solar Powered</h4>
                  <p className="text-green-100">Our entire production facility runs on renewable solar energy</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Sustainable Practices</h4>
                  <p className="text-green-100">Every process is designed to minimize environmental impact</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Energy Efficiency</h4>
                  <p className="text-green-100">State-of-the-art equipment for maximum energy efficiency</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-600">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Solar Panels Installed</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-yellow-500">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">80%</div>
                  <div className="text-sm text-gray-600">Energy from Renewables</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">60%</div>
                  <div className="text-sm text-gray-600">Carbon Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Building a Sustainable Future</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We believe in producing quality products while caring for our planet. Our investment in green energy is our commitment to future generations.
          </p>
        </div>
      </div>
    </div>
  );
}
