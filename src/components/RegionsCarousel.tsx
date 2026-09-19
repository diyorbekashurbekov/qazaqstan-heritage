import React, { useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { REGIONS } from '../data/regions';
import type { Region } from '../types/tourism';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
  LayoutGrid,
  Columns3,
  ArrowRight,
} from 'lucide-react';


export const RegionsCarousel: React.FC = () => {
  const { language, selectedRegion, openRegionShowcase } = useApp();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  const content = {
    badge: {
      kk: 'Қазақстанның 17 өңірі',
      en: '17 Regions of Kazakhstan',
      ru: '17 Регионов Казахстана',
    },
    title: {
      kk: 'Қазақстан өңірлерін зерттеп, олардың сұлулығы мен тарихын ашыңыз',
      en: 'Explore the regions of Kazakhstan and discover their beauty & heritage',
      ru: 'Исследуйте регионы Казахстана и откройте для себя их красоту и историю',
    },
    subtitle: {
      kk: 'Барлық 17 облыстағы тарихи кесенелер, қасиетті рухани орындар және нақты саяхат шығындары.',
      en: 'Historical mausoleums, sacred sanctuaries, and realistic travel budgets across all 17 provinces.',
      ru: 'Исторические мавзолеи, святые места и прозрачный расчет поездок во всех 17 областях.',
    },
    viewSlider: {
      kk: 'Карусель',
      en: 'Carousel',
      ru: 'Карусель',
    },
    viewGrid: {
      kk: 'Тор көрініс (17)',
      en: 'Grid View (17)',
      ru: 'Сетка (17)',
    },
    fromPrice: {
      kk: 'бастап',
      en: 'from',
      ru: 'от',
    },
    sites: {
      kk: 'тарихи нысан',
      en: 'heritage sites',
      ru: 'объектов',
    },
    exploreButton: {
      kk: 'Нысандарды көру',
      en: 'View Monuments',
      ru: 'Смотреть объекты',
    },
    twoDayTrip: {
      kk: '2 күндік сапар',
      en: '2-day trip',
      ru: 'Сапар (2 дня)',
    },
    selected: {
      kk: 'Таңдалды',
      en: 'Selected',
      ru: 'Выбрано',
    },
  };

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleSelectRegion = (region: Region) => {
    openRegionShowcase(region);
  };

  const defaultBackupImage =
    'https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&w=1200&q=80';

  return (
    <section id="regions-showcase" className="py-16 md:py-24 bg-[#FFF7EC] relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-[#E67E00]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#F5A623]/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.18em] text-[#E67E00] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              {content.badge[language]}
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
              {content.title[language]}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              {content.subtitle[language]}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <div className="inline-flex items-center p-1 rounded-2xl bg-white border border-[#E69A34]/30 shadow-xs">
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  viewMode === 'carousel'
                    ? 'bg-[#E67E00] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Columns3 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{content.viewSlider[language]}</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#E67E00] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{content.viewGrid[language]}</span>
              </button>
            </div>

            {viewMode === 'carousel' && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scroll('left')}
                  className="w-10 h-10 rounded-full border border-[#E69A34]/40 bg-white text-[#E67E00] hover:bg-[#FFF1DD] flex items-center justify-center transition shadow-xs cursor-pointer active:scale-95"
                  aria-label="Previous region"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll('right')}
                  className="w-10 h-10 rounded-full border border-[#E69A34]/40 bg-white text-[#E67E00] hover:bg-[#FFF1DD] flex items-center justify-center transition shadow-xs cursor-pointer active:scale-95"
                  aria-label="Next region"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {viewMode === 'carousel' ? (
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none' }}
          >
            {REGIONS.map((region) => {
              const isSelected = selectedRegion?.id === region.id;
              const formattedStartingPrice = region.startingBudget
                ? `${region.startingBudget.toLocaleString('ru-RU')} ₸`
                : '35 000 ₸';

              return (
                <div
                  key={region.id}
                  onClick={() => handleSelectRegion(region)}
                  className={`group relative shrink-0 w-72 sm:w-80 md:w-88 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 snap-start border ${
                    isSelected
                      ? 'border-[#E67E00] ring-4 ring-[#E67E00]/25 shadow-xl scale-[1.02]'
                      : 'border-slate-200/80 hover:border-[#E69A34] shadow-md hover:shadow-xl'
                  } bg-slate-900`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-800">
                    <img
                      src={region.coverImage || defaultBackupImage}
                      alt={region.name[language]}
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = defaultBackupImage;
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

                    <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between gap-2">
                      {region.tag && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/55 backdrop-blur-md text-[#F5A623] text-[11px] font-bold tracking-wide uppercase border border-white/10">
                          {region.tag[language]}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md text-white/90 text-[11px] font-medium border border-white/10">
                        {region.highlightSitesCount} {content.sites[language]}
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <div className="flex items-center gap-1.5 text-xs text-white/80 font-medium mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#F5A623]" />
                        <span>{region.center[language]}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-[#F5A623] transition-colors leading-tight">
                        {region.name[language]}
                      </h3>

                      <p className="mt-1.5 text-xs text-white/80 line-clamp-2 leading-relaxed">
                        {region.description[language]}
                      </p>

                      <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-white/60 block">
                            {content.twoDayTrip[language]}
                          </span>
                          <span className="text-sm font-bold text-[#F5A623]">
                            {content.fromPrice[language]} {formattedStartingPrice}
                          </span>
                        </div>

                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                            isSelected
                              ? 'bg-[#E67E00] text-white'
                              : 'bg-white/20 text-white group-hover:bg-white group-hover:text-slate-950'
                          }`}
                        >
                          {isSelected ? content.selected[language] : content.exploreButton[language]}
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {REGIONS.map((region) => {
              const isSelected = selectedRegion?.id === region.id;
              const formattedStartingPrice = region.startingBudget
                ? `${region.startingBudget.toLocaleString('ru-RU')} ₸`
                : '35 000 ₸';

              return (
                <div
                  key={region.id}
                  onClick={() => handleSelectRegion(region)}
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'border-[#E67E00] ring-4 ring-[#E67E00]/25 shadow-xl scale-[1.02]'
                      : 'border-slate-200/80 hover:border-[#E69A34] shadow-md hover:shadow-xl'
                  } bg-slate-900`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-800">
                    <img
                      src={region.coverImage || defaultBackupImage}
                      alt={region.name[language]}
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = defaultBackupImage;
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

                    <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between gap-2">
                      {region.tag && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/55 backdrop-blur-md text-[#F5A623] text-[11px] font-bold tracking-wide uppercase border border-white/10">
                          {region.tag[language]}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md text-white/90 text-[11px] font-medium border border-white/10">
                        {region.highlightSitesCount} {content.sites[language]}
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <div className="flex items-center gap-1.5 text-xs text-white/80 font-medium mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#F5A623]" />
                        <span>{region.center[language]}</span>
                      </div>

                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#F5A623] transition-colors leading-tight">
                        {region.name[language]}
                      </h3>

                      <p className="mt-1.5 text-xs text-white/80 line-clamp-2 leading-relaxed">
                        {region.description[language]}
                      </p>

                      <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-white/60 block">
                            {content.twoDayTrip[language]}
                          </span>
                          <span className="text-sm font-bold text-[#F5A623]">
                            {content.fromPrice[language]} {formattedStartingPrice}
                          </span>
                        </div>

                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                            isSelected
                              ? 'bg-[#E67E00] text-white'
                              : 'bg-white/20 text-white group-hover:bg-white group-hover:text-slate-950'
                          }`}
                        >
                          {isSelected ? content.selected[language] : content.exploreButton[language]}
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
