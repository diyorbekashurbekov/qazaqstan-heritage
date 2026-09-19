import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, MapPin, ArrowRight, Compass } from 'lucide-react';

export const FeaturedHeritageBanner: React.FC = () => {
  const { language } = useApp();

  const content = {
    badge: {
      kk: 'Сакралды Қазақстан · Ұлы Дала Мұрасы',
      en: 'Sacred Kazakhstan · Steppe Heritage',
      ru: 'Сакральный Казахстан · Наследие Великой Степи',
    },
    title: {
      kk: 'Ғасырлар сырын сақтаған киелі орындарға саяхат',
      en: 'Journey Through Timeless Sanctuaries & Sacred Wonders',
      ru: 'Откройте Казахстан через его сакральные тайны',
    },
    subtitle: {
      kk: 'Түркістанның көгілдір күмбездерінен Маңғыстаудың ақ борлы жартастарына дейін, Ұлытаудың хандар қорымынан Алтайдың сақ патшаларына дейінгі мыңжылдық шежірені өз көзіңізбен көріңіз.',
      en: 'From the turquoise domes of Turkistan to the chalk canyons of Mangystau, from the royal tombs of Ulytau to the Saka kings of Altai — experience millennia of living history.',
      ru: 'От бирюзовых куполов Туркестана до белоснежных каньонов Мангистау, от пантеона ханов Улытау до сакских курганов Алтая — прикоснитесь к тысячелетней истории.',
    },
    ctaMap: {
      kk: 'Картадан нысандарды қарау',
      en: 'Explore on Map',
      ru: 'Открыть на карте',
    },
    ctaCatalog: {
      kk: 'Кесенелер паспорты',
      en: 'View All Monuments',
      ru: 'Все памятники',
    },
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 my-12">
      {/* Full-bleed scenic photographic background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2200&q=85"
          alt="Kazakhstan Sacred Heritage Landscape"
          className="h-full w-full object-cover object-center scale-105"
        />
        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E67E00] text-white text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 shadow-md">
            <Sparkles className="w-4 h-4" />
            {content.badge[language]}
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white mb-6 leading-[1.15]">
            {content.title[language]}
          </h2>

          <p className="text-base sm:text-xl text-white/90 leading-relaxed mb-8">
            {content.subtitle[language]}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#kazakhstan-map-section"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#E67E00] hover:bg-[#CC6F00] text-white font-semibold text-sm sm:text-base transition shadow-lg shadow-[#E67E00]/30 active:scale-95 cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              <span>{content.ctaMap[language]}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#destinations-catalog"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-semibold text-sm sm:text-base transition active:scale-95 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#F5A623]" />
              <span>{content.ctaCatalog[language]}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
