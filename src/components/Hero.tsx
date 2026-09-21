import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getAssetUrl } from '../utils/assetHelper';
import { Search, Sparkles, ArrowRight, MapPin, Ticket } from 'lucide-react';

export const Hero: React.FC = () => {
  const {
    language,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
  } = useApp();

  const [focused, setFocused] = useState(false);

  const content = {
    badge: {
      kk: 'Ұлттық цифрлық туризм платформасы',
      en: 'National Digital Heritage Platform',
      ru: 'Национальная платформа туризма',
    },
    titleLine1: {
      kk: 'Ұлы Даланың',
      en: '3,000-Year',
      ru: '3000-летнее',
    },
    titleLine2: {
      kk: '3000 жылдық киелі жауһарлары',
      en: 'Heritage of the Great Steppe',
      ru: 'наследие Великой Степи',
    },
    subtitle: {
      kk: '17 облыс · 24+ киелі жауһар · Ресми билеттер ₸',
      en: '17 regions · 24+ monuments · Official tickets in ₸',
      ru: '17 областей · 24+ объектов · Официальные билеты ₸',
    },
    searchPlaceholder: {
      kk: 'Ясауи, Айша бибі, Бекет Ата...',
      en: 'Yasawi, Aisha Bibi, Beket Ata...',
      ru: 'Ясауи, Айша-биби, Бекет-Ата...',
    },
    cta1: {
      kk: 'Кесенелерді көру',
      en: 'View Monuments',
      ru: 'Смотреть объекты',
    },
    cta2: {
      kk: 'Карта',
      en: 'Map',
      ru: 'Карта',
    },
  };

  const handleStartSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const catalog = document.getElementById('destinations-catalog');
    if (catalog) catalog.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const chips = [
    { label: { kk: 'Ясауи', en: 'Yasawi', ru: 'Ясауи' }, query: 'Ясауи' },
    { label: { kk: 'Айша бибі', en: 'Aisha Bibi', ru: 'Айша-биби' }, query: 'Айша' },
    { label: { kk: 'Отырар', en: 'Otrar', ru: 'Отрар' }, query: 'Отырар' },
    { label: { kk: 'Бекет Ата', en: 'Beket Ata', ru: 'Бекет-Ата' }, query: 'Бекет' },
    { label: { kk: 'Жошы хан', en: 'Jochi Khan', ru: 'Джучи хан' }, query: 'Жошы' },
  ];

  const stats = [
    {
      num: '17',
      label: { kk: 'Облыс', en: 'Regions', ru: 'Областей' },
    },
    {
      num: '24+',
      label: { kk: 'Жауһар', en: 'Monuments', ru: 'Объектов' },
    },
    {
      num: 'UNESCO',
      label: { kk: 'Мұра', en: 'Heritage', ru: 'ЮНЕСКО' },
    },
    {
      num: '100%',
      label: { kk: 'Верификация', en: 'Verified', ru: 'Проверено' },
    },
  ];

  return (
    <section className="relative flex flex-col justify-end min-h-[100svh] sm:min-h-[90vh] sm:justify-center items-center text-center overflow-hidden bg-slate-950 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={getAssetUrl('/images/hero-tuzkol-bg.jpg')}
          alt="Qazaqstan Heritage"
          className="w-full h-full object-cover object-center brightness-[0.6]"
          loading="eager"
          decoding="async"
        />
        {/* Gradient overlay — stronger at bottom for mobile card legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20 z-10" />
        {/* Ambient glow — only on sm+ to save mobile GPU */}
        <div
          aria-hidden="true"
          className="hidden sm:block pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/20 rounded-full blur-[150px] z-10"
        />
      </div>

      {/* ── MOBILE LAYOUT (< sm) ─────────────────────────────────── */}
      <div className="relative z-20 w-full sm:hidden flex flex-col px-4 pb-6 pt-24">
        {/* Badge */}
        <div className="inline-flex self-center items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-amber-400/30 text-amber-300 text-[10px] font-semibold mb-4 backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>{content.badge[language]}</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-[2rem] leading-[1.15] font-bold text-white mb-2">
          {content.titleLine1[language]}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#F5A623] to-amber-500">
            {content.titleLine2[language]}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xs text-slate-300 mb-5 leading-relaxed">
          {content.subtitle[language]}
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleStartSearch}
          className={`flex items-center gap-2 bg-white rounded-2xl px-3 py-2 shadow-xl transition-all ${
            focused ? 'ring-2 ring-amber-400' : ''
          }`}
        >
          <Search className="w-4 h-4 text-amber-500 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={content.searchPlaceholder[language]}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="flex-1 text-sm text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none py-1"
          />
          <button
            type="submit"
            className="shrink-0 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-md active:scale-95 transition-transform"
          >
            {language === 'kk' ? 'Іздеу' : language === 'ru' ? 'Поиск' : 'Search'}
          </button>
        </form>

        {/* Category Select */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="mt-2.5 w-full py-3 px-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-xs font-semibold text-white focus:outline-none cursor-pointer"
        >
          <option value="all" className="text-slate-900">
            {language === 'kk' ? '🏛️ Барлық санаттар' : language === 'ru' ? '🏛️ Все категории' : '🏛️ All Categories'}
          </option>
          <option value="mausoleum" className="text-slate-900">
            {language === 'kk' ? '🕌 Кесенелер' : language === 'ru' ? '🕌 Мавзолеи' : '🕌 Mausoleums'}
          </option>
          <option value="unesco" className="text-slate-900">
            {language === 'kk' ? '🌐 ЮНЕСКО Мұрасы' : language === 'ru' ? '🌐 ЮНЕСКО' : '🌐 UNESCO Heritage'}
          </option>
          <option value="archaeological_settlement" className="text-slate-900">
            {language === 'kk' ? '🏺 Көне Қалашықтар' : language === 'ru' ? '🏺 Древние городища' : '🏺 Ancient Citadels'}
          </option>
          <option value="underground_mosque" className="text-slate-900">
            {language === 'kk' ? '⛰️ Жерасты Мешіттері' : language === 'ru' ? '⛰️ Подземные мечети' : '⛰️ Underground Mosques'}
          </option>
        </select>

        {/* Popular Chips */}
        <div className="flex items-center gap-2 overflow-x-auto mt-3 pb-1 scrollbar-none">
          <span className="text-[10px] text-slate-400 font-bold shrink-0">
            {language === 'kk' ? 'Танымал:' : language === 'ru' ? 'Популярные:' : 'Popular:'}
          </span>
          {chips.map((chip, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setSearchQuery(chip.query);
                const catalog = document.getElementById('destinations-catalog');
                if (catalog) catalog.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-amber-400/30 active:bg-amber-400/50 text-white text-[11px] font-medium shrink-0 whitespace-nowrap transition-colors border border-white/10"
            >
              {chip.label[language]}
            </button>
          ))}
        </div>

        {/* Primary CTA Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <button
            onClick={() => {
              const catalog = document.getElementById('destinations-catalog');
              if (catalog) catalog.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center justify-center gap-2 min-h-[48px] bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl text-white text-sm font-bold shadow-lg shadow-amber-500/30 active:scale-95 transition-transform"
          >
            <Ticket className="w-4 h-4" />
            <span>{content.cta1[language]}</span>
          </button>
          <button
            onClick={() => {
              const map = document.getElementById('map');
              if (map) map.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center justify-center gap-2 min-h-[48px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white text-sm font-bold active:scale-95 transition-transform"
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>{content.cta2[language]}</span>
          </button>
        </div>

        {/* Stat Strip */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-black/40 backdrop-blur-md rounded-xl p-2.5 border border-white/10 text-center"
            >
              <div className="font-serif font-bold text-base text-amber-400 leading-none">
                {stat.num}
              </div>
              <div className="text-[9px] text-slate-300 mt-0.5 leading-tight">{stat.label[language]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP / TABLET LAYOUT (sm+) ──────────────────────────── */}
      <div className="relative z-20 hidden sm:flex flex-col items-center max-w-5xl mx-auto px-6 lg:px-8 py-16 md:py-24 text-center w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-amber-400/40 text-amber-300 text-sm font-semibold mb-6 backdrop-blur-md shadow-xs">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{content.badge[language]}</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.12]">
          {content.titleLine1[language]}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#F5A623] to-amber-500">
            {content.titleLine2[language]}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-slate-200 max-w-3xl leading-relaxed mb-8 font-normal font-sans">
          {language === 'kk'
            ? '17 облыстағы киелі жауһарлар, нақты кіру билеттері және сапар бюджеті (₸).'
            : language === 'ru'
            ? 'Сакральные объекты в 17 областях Казахстана с официальными билетами и бюджетом поездки (₸).'
            : 'Sacred monuments across all 17 regions with verified tickets and transparent budgets in Tenge (₸).'}
        </p>

        {/* Search Console Card */}
        <div className="w-full max-w-4xl bg-white/95 backdrop-blur-xl rounded-3xl p-5 shadow-2xl border border-white/20 text-slate-900 mb-8">
          <form onSubmit={handleStartSearch} className="flex flex-col md:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={content.searchPlaceholder[language]}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 focus:border-amber-500 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden transition-all"
              />
            </div>
            <div className="w-full md:w-52">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-3.5 px-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-800 focus:outline-hidden cursor-pointer"
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
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-[#E67E00] hover:from-amber-600 hover:to-[#CC6F00] text-white font-bold text-sm shadow-lg shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>{language === 'kk' ? 'Іздеу' : language === 'ru' ? 'Поиск' : 'Search'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-2.5 mt-2.5 border-t border-slate-100 text-xs text-slate-600 scrollbar-none">
            <span className="font-bold text-slate-400 shrink-0 text-xs">
              {language === 'kk' ? 'Танымал:' : language === 'ru' ? 'Популярные:' : 'Popular:'}
            </span>
            {chips.map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSearchQuery(chip.query);
                  const catalog = document.getElementById('destinations-catalog');
                  if (catalog) catalog.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-amber-100 hover:text-amber-900 active:bg-amber-200 transition-colors shrink-0 cursor-pointer font-medium text-xs whitespace-nowrap"
              >
                {chip.label[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="w-full max-w-4xl grid grid-cols-4 gap-3 text-left">
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
              <div className="font-serif font-bold text-3xl text-amber-400">{stat.num}</div>
              <div className="text-xs font-bold text-white mt-0.5 leading-snug">{stat.label[language]}</div>
              <div className="text-[11px] text-slate-400">{stat.sub[language]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
