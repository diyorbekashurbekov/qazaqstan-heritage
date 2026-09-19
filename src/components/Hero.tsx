import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Search,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const {
    language,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
  } = useApp();


  const content = {
    badge: {
      kk: 'Qazaqstan Heritage · Ұлттық цифрлық туризм платформасы',
      en: 'Qazaqstan Heritage · National Digital Heritage Platform',
      ru: 'Qazaqstan Heritage · Национальная платформа сакрального туризма',
    },
    titleLine1: {
      kk: 'Ұлы Даланың 3000 жылдық',
      en: '3,000-Year Heritage of',
      ru: '3000-летнее наследие',
    },
    titleLine2: {
      kk: 'киелі жауһарлары',
      en: 'the Great Steppe',
      ru: 'Великой Степи',
    },
    subtitle: {
      kk: '17 облыстағы киелі жауһарлар, нақты кіру билеттері және сапар бюджеті (₸).',
      en: 'Sacred monuments across all 17 regions with verified tickets and transparent budgets in Tenge (₸).',
      ru: 'Сакральные объекты в 17 областях Казахстана с официальными билетами и бюджетом поездки (₸).',
    },
    searchPlaceholder: {
      kk: 'Қай кесенеге барғыңыз келеді? (мысалы: Ясауи, Айша бибі, Отырар, Бекет Ата...)',
      en: 'Which monument would you like to visit? (e.g. Yasawi, Aisha Bibi, Otrar...)',
      ru: 'Куда хотите отправиться? (например: Ясауи, Айша-биби, Отрар, Бекет-ата...)',
    },
  };

  const handleStartSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const catalog = document.getElementById('destinations-catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-slate-950 text-white">
      {/* Scenic Photographic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-tuzkol-bg.jpg"
          alt="Tuzkol Lake & Khan Tengri Peak - Qazaqstan Heritage"
          className="w-full h-full object-cover object-center scale-100 filter brightness-85 contrast-105"
        />
        {/* Subtle Vignette Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-black/30 z-10" />

        {/* Ambient Steppe Warm Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[550px] bg-amber-500/20 rounded-full blur-[150px] z-10"
        />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center pt-8 sm:pt-14">
        {/* Official Presidential Level Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-xs">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{content.badge[language]}</span>
        </div>

        {/* Hero Title with Golden Sunrise Gradient */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-5 leading-[1.12]">
          {content.titleLine1[language]}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#F5A623] to-amber-500">
            {content.titleLine2[language]}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-3xl leading-relaxed mb-8 font-normal font-sans">
          {content.subtitle[language]}
        </p>

        {/* World-Class Smart Travel Console Card */}
        <div className="w-full max-w-4xl bg-white/95 backdrop-blur-xl rounded-3xl p-4 sm:p-5 shadow-2xl border border-white/20 text-slate-900 mb-8">
          <form onSubmit={handleStartSearch} className="flex flex-col md:flex-row items-center gap-3">
            {/* Search Input Field */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={content.searchPlaceholder[language]}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 focus:border-amber-500 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden transition-all"
              />
            </div>

            {/* Category Dropdown */}
            <div className="w-full md:w-52">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-3.5 px-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl text-xs sm:text-sm font-semibold text-slate-800 focus:outline-hidden cursor-pointer"
              >
                <option value="all">
                  {language === 'kk' ? '🏛️ Барлық санаттар' : language === 'ru' ? '🏛️ Все категории' : '🏛️ All Categories'}
                </option>
                <option value="mausoleum">
                  {language === 'kk' ? '🕌 Кесенелер' : language === 'ru' ? '🕌 Мавзолеи' : '🕌 Mausoleums'}
                </option>
                <option value="unesco">
                  {language === 'kk' ? '🌐 ЮНЕСКО Мұрасы' : language === 'ru' ? '🌐 ЮНЕСКО' : '🌐 UNESCO Heritage'}
                </option>
                <option value="archaeological_settlement">
                  {language === 'kk' ? '🏺 Көне Қалашықтар' : language === 'ru' ? '🏺 Древние городища' : '🏺 Ancient Citadels'}
                </option>
                <option value="underground_mosque">
                  {language === 'kk' ? '⛰️ Жерасты Мешіттері' : language === 'ru' ? '⛰️ Подземные мечети' : '⛰️ Underground Mosques'}
                </option>
              </select>
            </div>

            {/* Submit Action CTA */}
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-[#E67E00] hover:from-amber-600 hover:to-[#CC6F00] text-white font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>{language === 'kk' ? 'Іздеу' : language === 'ru' ? 'Поиск' : 'Search'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Filter Recommendation Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pt-3 mt-3 border-t border-slate-100 text-xs text-slate-600 scrollbar-none">
            <span className="font-bold text-slate-400 shrink-0">
              {language === 'kk' ? 'Танымал:' : language === 'ru' ? 'Популярные:' : 'Popular:'}
            </span>
            {[
              { label: language === 'kk' ? 'Ясауи (Түркістан)' : language === 'ru' ? 'Ясави (Туркестан)' : 'Yasawi (Turkistan)', query: 'Ясауи' },
              { label: language === 'kk' ? 'Айша бибі (Тараз)' : language === 'ru' ? 'Айша-биби (Тараз)' : 'Aisha Bibi (Taraz)', query: 'Айша' },
              { label: language === 'kk' ? 'Отырар қалашығы' : language === 'ru' ? 'Городище Отрар' : 'Otrar Citadel', query: 'Отырар' },
              { label: language === 'kk' ? 'Бекет Ата (Маңғыстау)' : language === 'ru' ? 'Бекет-Ата (Мангистау)' : 'Beket Ata (Mangystau)', query: 'Бекет' },
              { label: language === 'kk' ? 'Жошы хан (Ұлытау)' : language === 'ru' ? 'Джучи хан (Улытау)' : 'Jochi Khan (Ulytau)', query: 'Жошы' },
            ].map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSearchQuery(chip.query);
                  const catalog = document.getElementById('destinations-catalog');
                  if (catalog) catalog.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-amber-100 hover:text-amber-900 transition-colors shrink-0 cursor-pointer font-medium"
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* Official Statistics Bar */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
          {[
            {
              num: '17',
              label: { kk: 'Қамтылған облыс (100%)', en: 'Regions Covered (100%)', ru: 'Областей охвачено (100%)' },
              sub: { kk: 'Барлық өңірлер', en: 'All 17 regions', ru: 'Все регионы' },
            },
            {
              num: '24+',
              label: { kk: 'Тарихи жауһарлар', en: 'Historical Monuments', ru: 'Исторических объектов' },
              sub: { kk: 'Кесенелер мен қалалар', en: 'Mausoleums & citadels', ru: 'Мавзолеи и городища' },
            },
            {
              num: 'UNESCO',
              label: { kk: 'Әлемдік мұра нысандары', en: 'World Heritage Sites', ru: 'Объекты ЮНЕСКО' },
              sub: { kk: 'Халықаралық дәреже', en: 'Global recognition', ru: 'Мировой статус' },
            },
            {
              num: '100%',
              label: { kk: 'Верификацияланған баға', en: 'Verified State Prices', ru: 'Проверенные цены' },
              sub: { kk: 'Ұлттық теңгемен (₸)', en: 'In National Tenge (₸)', ru: 'В национальной валюте (₸)' },
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:border-amber-400/40 transition-colors"
            >
              <div className="font-serif font-bold text-2xl sm:text-3xl text-amber-400">
                {stat.num}
              </div>
              <div className="text-xs font-bold text-white mt-0.5">{stat.label[language]}</div>
              <div className="text-[11px] text-slate-400">{stat.sub[language]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
