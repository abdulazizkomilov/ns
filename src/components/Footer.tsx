import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">NS</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Narpay Spaghetti</h3>
                <p className="text-sm text-gray-400">Since 2002</p>
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
