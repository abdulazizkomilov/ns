import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden">
                <img 
                  src="/images/logo1.jpeg" 
                  alt="Narpay Spaghetti Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold">Narpay Spaghetti</h3>
                <p className="text-xs sm:text-sm text-gray-400">Since 2002</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('aboutText')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">{t('contactInfo')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">(+998 90) 606 60 66</p>
                  <p className="text-sm">(+998 94) 283 88 15</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm">info@narpay-spagetti.uz</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm">{t('addressText')}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Social Media</h4>
            <div className="space-y-3">
              <a 
                href="https://t.me/Sobir6066066" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm">Telegram</span>
              </a>
              
              <a 
                href="https://www.instagram.com/invites/contact/?i=i5vhx1u4020i&utm_content=lj9nhkh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm">Instagram</span>
              </a>
              
              <a 
                href="https://www.facebook.com/profile.php?id=100071424787679" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Facebook className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm">Facebook</span>
              </a>
              
              <a 
                href="https://www.youtube.com/@samerenergy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Youtube className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm">YouTube</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">{t('bankingDetails')}</h4>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">"Narpay Spaghetti" LLC</p>
                <div className="space-y-1 text-xs text-gray-400">
                  <p>{t('tin')}: 304811031</p>
                  <p>{t('account')}: 20208000600758451001</p>
                  <p>{t('bank')}: Mikrokreditbank</p>
                  <p>{t('mfo')}: 00298</p>
                  <p>{t('fshr')}: 391780</p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">"Al Hidoyad Biznes" LLC</p>
                <div className="space-y-1 text-xs text-gray-400">
                  <p>{t('tin')}: 307274113</p>
                  <p>{t('account')}: 20208000705202517001</p>
                  <p>{t('bank')}: Mikrokreditbank</p>
                  <p>{t('mfo')}: 00298</p>
                  <p>{t('fshr')}: 535188</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2002-2025 Narpay Spaghetti LLC. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
