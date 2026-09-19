import React from 'react';
import {
  ShieldCheck,
  ExternalLink,
  Sparkles,
  ArrowUp,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { language, setIsResearchModalOpen, setIsShugylaModalOpen } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#F8FAFC] border-t border-slate-200 pt-16 pb-12 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 text-stone-950 font-serif font-bold text-xl">
                Q
              </div>
              <div>
                <span className="font-serif font-bold text-xl tracking-wider text-slate-900 uppercase">
                  Qazaq Heritage
                </span>
                <span className="block text-[10px] uppercase font-mono tracking-widest text-[#E67E00]">
                  Қазақстанның тарихи мұрасы
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              {language === 'kk'
                ? 'Қазақстанның сакралды, тарихи және археологиялық ескерткіштерін дүниежүзіне танытуға арналған бірыңғай цифрлық туристік платформа.'
                : language === 'ru'
                ? 'Единая цифровая туристическая платформа для знакомства мировых и внутренних туристов с историко-культурным наследием Казахстана.'
                : 'A premium national tourism platform empowering global travelers to discover, explore, and budget visits to Kazakhstan’s sacred historical landmarks.'}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsResearchModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs hover:bg-emerald-500/20 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>
                  {language === 'kk'
                    ? '100% Расталған деректер'
                    : language === 'ru'
                    ? '100% Верифицированные данные'
                    : '100% Verified Sources'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setIsShugylaModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFF7EC] border border-[#E69A34]/30 text-[#E67E00] text-xs hover:bg-amber-500/20 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {language === 'kk'
                    ? 'Шұғыла Жобасы'
                    : language === 'ru'
                    ? 'Проект Шұғылы'
                    : 'Shugyla Research'}
                </span>
              </button>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E67E00] mb-4 font-mono">
              {language === 'kk' ? 'Бөлімдер' : language === 'ru' ? 'Разделы' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <a
                  href="#interactive-map"
                  className="hover:text-[#E67E00] transition-colors"
                >
                  {language === 'kk'
                    ? 'Интерактивті карта'
                    : language === 'ru'
                    ? 'Интерактивная карта'
                    : 'Interactive Map'}
                </a>
              </li>
              <li>
                <a
                  href="#destinations-catalog"
                  className="hover:text-[#E67E00] transition-colors"
                >
                  {language === 'kk'
                    ? 'Ескерткіштер каталогы'
                    : language === 'ru'
                    ? 'Каталог памятников'
                    : 'Historical Monuments'}
                </a>
              </li>
              <li>
                <a
                  href="#trip-estimator-section"
                  className="hover:text-[#E67E00] transition-colors"
                >
                  {language === 'kk'
                    ? 'Сапар калькуляторы'
                    : language === 'ru'
                    ? 'Калькулятор поездки'
                    : 'Trip Cost Estimator'}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsShugylaModalOpen(true)}
                  className="hover:text-[#E67E00] transition-colors text-left"
                >
                  {language === 'kk'
                    ? '3D Уақыт машинасы'
                    : language === 'ru'
                    ? '3D Машина времени'
                    : '3D Time Machine'}
                </button>
              </li>
            </ul>
          </div>

          {/* Official State Portals */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E67E00] mb-4 font-mono">
              {language === 'kk' ? 'Мемлекеттік порталдар' : language === 'ru' ? 'Гос. порталы' : 'Official Portals'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <a
                  href="https://azretsultan.kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E67E00] transition-colors inline-flex items-center gap-1"
                >
                  <span>azretsultan.kz</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://otyrar-museum.kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E67E00] transition-colors inline-flex items-center gap-1"
                >
                  <span>otyrar-museum.kz</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://kazakhstan.travel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E67E00] transition-colors inline-flex items-center gap-1"
                >
                  <span>kazakhstan.travel</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://whc.unesco.org/en/statesparties/kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E67E00] transition-colors inline-flex items-center gap-1"
                >
                  <span>whc.unesco.org</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Scientific Attribution */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E67E00] mb-4 font-mono">
              {language === 'kk' ? 'Ғылыми жоба & Әзірлеу' : language === 'ru' ? 'Научный проект' : 'Scientific Project'}
            </h4>
            <div className="space-y-3 text-xs text-slate-600">
              <div>
                <span className="text-slate-700 font-medium block">
                  Шұғыланың ғылыми зерттеуі:
                </span>
                <span className="text-[11px] text-slate-600">
                  «Qazaqstan Time» & «Ясауи жазуларын сөйлету» концептісі
                </span>
              </div>
              <div className="border-t border-slate-200 pt-2">
                <span className="text-slate-700 font-medium block">
                  Senior Full-Stack & UX/UI:
                </span>
                <span className="text-[11px] text-slate-600 font-mono">
                  Diyarbek Ashurbekov
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div>
            © {new Date().getFullYear()} Qazaq Heritage Platform.
            {language === 'kk'
              ? ' Барлық құқықтар қорғалған. Коммерциялық емес мәдени-ағартушылық жоба.'
              : language === 'ru'
              ? ' Все права защищены. Некоммерческий культурно-образовательный проект.'
              : ' All rights reserved. Non-commercial educational and cultural initiative.'}
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#E67E00] transition-colors font-mono"
            >
              <span>Жоғарыға</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
