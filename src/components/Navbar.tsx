import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Menu,
  X,
  Heart,
  Share2,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    language,
    setLanguage,
    favorites,
    showFavoritesOnly,
    setShowFavoritesOnly,
    openShareModal,
  } = useApp();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#golden-fund', label: { kk: 'Ұлттық жауһарлар', en: 'Top 5 Gems', ru: 'Главные жемчужины' } },
    { href: '#regions-section', label: { kk: '17 Өңір', en: '17 Regions', ru: '17 Регионов' } },
    { href: '#kazakhstan-map', label: { kk: 'Карта', en: 'Map', ru: 'Карта' } },
    { href: '#destinations-catalog', label: { kk: 'Кесенелер (24)', en: 'Monuments (24)', ru: 'Памятники (24)' } },
    { href: '#trip-estimator-section', label: { kk: 'Шығындар', en: 'Costs', ru: 'Цены' } },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-3">
          {/* Logo & National Brand */}
          <a href="#" className="inline-flex items-center gap-2 sm:gap-2.5 shrink-0 group">
            {/* Sun-Horizon Emblem */}
            <svg
              width="44"
              height="40"
              viewBox="0 0 78 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 sm:h-9 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105"
            >
              <path
                d="M47.7392 22.6027H35.9914C35.9914 16.274 30.5553 11.1281 23.8696 11.1281C17.1839 11.1281 11.7478 16.274 11.7478 22.6027H0C0 10.1336 10.7051 0 23.8776 0C37.05 0 47.7551 10.1336 47.7551 22.6027H47.7392Z"
                fill="url(#kt_nav_sun_grad)"
              />
              <defs>
                <linearGradient
                  id="kt_nav_sun_grad"
                  x1="23.8776"
                  y1="0.226027"
                  x2="23.8776"
                  y2="22.7534"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFEE25" />
                  <stop offset="1" stopColor="#E2312D" />
                </linearGradient>
              </defs>
            </svg>

            {/* Official Wordmark */}
            <div className="flex flex-col min-w-0">
              <span className="text-base sm:text-xl lg:text-2xl font-black tracking-tight text-slate-900 leading-none font-sans whitespace-nowrap">
                QAZAQSTAN<span className="text-[#E67E00]">.TRAVEL</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.16em] text-slate-500 uppercase font-semibold mt-0.5 hidden xs:block truncate">
                {language === 'kk'
                  ? 'Ұлттық киелі мұралар порталы'
                  : language === 'ru'
                  ? 'Портал сакрального наследия'
                  : 'National Sacred Heritage'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 text-xs font-bold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#E67E00] transition-colors whitespace-nowrap"
              >
                {link.label[language]}
              </a>
            ))}
          </nav>

          {/* Right Controls: Favorites + Audio + Language */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Favorites Bookmark Pill */}
            {favorites.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setShowFavoritesOnly(!showFavoritesOnly);
                  const el = document.getElementById('destinations-catalog');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`p-1.5 sm:p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer border ${
                  showFavoritesOnly
                    ? 'bg-rose-50 text-rose-700 border-rose-300 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-rose-300'
                }`}
                title="Таңдаулы кесенелер"
              >
                <Heart className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-rose-500 text-rose-500" />
                <span className="hidden sm:inline font-mono">{favorites.length}</span>
              </button>
            )}

            {/* 3 Languages Segmented Switcher (ҚАЗ | ENG | РУС) - Perfectly fits mobile and desktop */}
            <div className="flex items-center bg-slate-100 p-0.5 sm:p-1 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-2xs shrink-0">
              {(['kk', 'en', 'ru'] as const).map((lang) => {
                const isActive = language === lang;
                const label = lang === 'kk' ? 'ҚАЗ' : lang === 'en' ? 'ENG' : 'РУС';
                return (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#E67E00] shadow-xs font-black ring-1 ring-amber-400/30'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Share / WhatsApp Button */}
            <button
              type="button"
              onClick={() => openShareModal()}
              className="p-1.5 sm:p-2 rounded-xl text-slate-700 hover:text-[#25D366] bg-slate-50 hover:bg-[#25D366]/10 border border-slate-200 hover:border-[#25D366]/40 transition-all cursor-pointer flex items-center gap-1.5"
              title={language === 'kk' ? 'Бөлісу / WhatsApp' : language === 'ru' ? 'Поделиться' : 'Share'}
              aria-label="Сілтемені бөлісу"
            >
              <Share2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              <span className="hidden md:inline text-xs font-bold text-slate-700">
                {language === 'kk' ? 'Бөлісу' : language === 'ru' ? 'Поделиться' : 'Share'}
              </span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Мәзірді ашу"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
          {/* Mobile 3-Language Switcher */}
          <div className="flex items-center justify-center bg-slate-100 p-1 rounded-2xl border border-slate-200 gap-1">
            {(['kk', 'en', 'ru'] as const).map((lang) => {
              const isActive = language === lang;
              const label = lang === 'kk' ? '🇰🇿 Қазақша' : lang === 'en' ? '🇬🇧 English' : '🇷🇺 Русский';
              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`flex-1 min-h-[40px] py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#E67E00] shadow-sm font-black ring-1 ring-amber-400/30'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <nav className="flex flex-col divide-y divide-slate-100 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 px-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-amber-50/60 hover:text-[#E67E00] active:bg-amber-100/80 transition-colors flex items-center justify-between"
              >
                <span>{link.label[language]}</span>
                <span className="text-slate-300">→</span>
              </a>
            ))}
          </nav>

          {/* Mobile WhatsApp Share Button */}
          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(false);
              openShareModal();
            }}
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] text-white font-bold text-xs shadow-md shadow-[#25D366]/20 transition-all cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>
              {language === 'kk'
                ? 'Сайт сілтемесін WhatsApp-пен бөлісу'
                : language === 'ru'
                ? 'Поделиться сайтом в WhatsApp'
                : 'Share site on WhatsApp'}
            </span>
          </button>
        </div>
      )}
    </header>
  );
};
