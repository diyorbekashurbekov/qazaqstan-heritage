import React from 'react';
import { useApp } from '../context/AppContext';
import { REGIONS } from '../data/regions';
import { DESTINATIONS } from '../data/destinations';
import type { Region, HistoricalDestination } from '../types/tourism';
import {
  X,
  MapPin,
  Sparkles,
  Compass,
  Eye,
  Calculator,
  ShieldCheck,
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';

export const RegionShowcaseModal: React.FC = () => {
  const {
    showcaseRegion,
    setShowcaseRegion,
    language,
    formatCurrency,
    setSelectedDestination,
    openEstimatorForDestination,
    open3DViewer,
  } = useApp();

  if (!showcaseRegion) return null;

  // Monuments belonging to this specific region
  const regionDestinations: HistoricalDestination[] = DESTINATIONS.filter(
    (d) => d.regionId === showcaseRegion.id
  );

  const handleSelectRegionTab = (region: Region) => {
    setShowcaseRegion(region);
  };

  const handleOpenVirtualTour = (dest: HistoricalDestination, e: React.MouseEvent) => {
    e.stopPropagation();
    open3DViewer(dest);
  };

  const handleOpenEstimator = (dest: HistoricalDestination, e: React.MouseEvent) => {
    e.stopPropagation();
    openEstimatorForDestination(dest);
    setShowcaseRegion(null);
  };

  const handleViewFullPassport = (dest: HistoricalDestination) => {
    setSelectedDestination(dest);
  };

  const content = {
    overview: {
      kk: 'Өңірдің визит-картасы',
      en: 'Region Snapshot',
      ru: 'Визитная карточка региона',
    },
    sitesTitle: {
      kk: 'Өңірдің киелі тарихи ескерткіштері',
      en: 'Sacred Heritage Monuments',
      ru: 'Сакральные памятники региона',
    },
    sitesSubtitle: {
      kk: 'Таңдалған облыстағы ресми верификацияланған басты нысандар',
      en: 'Officially verified key historical monuments in this province',
      ru: 'Официально верифицированные ключевые объекты в этой области',
    },
    twoDayTrip: {
      kk: '2 күндік сапар құны',
      en: '2-Day Trip Budget',
      ru: 'Бюджет (2 дня)',
    },
    from: {
      kk: 'бастап',
      en: 'from',
      ru: 'от',
    },
    bestSeason: {
      kk: 'Қолайлы маусым',
      en: 'Best Season',
      ru: 'Лучший сезон',
    },
    seasonVal: {
      kk: 'Сәуір – Қазан',
      en: 'April – October',
      ru: 'Апрель – Октябрь',
    },
    sitesCount: {
      kk: 'Тарихи ескерткіштер',
      en: 'Heritage Sites',
      ru: 'Памятники',
    },
    virtual360: {
      kk: '360° Тур',
      en: '360° Tour',
      ru: '360° Тур',
    },
    calcBudget: {
      kk: 'Шығынды есептеу',
      en: 'Calculate Cost',
      ru: 'Рассчитать бюджет',
    },
    viewPassport: {
      kk: 'Толық ақпарат',
      en: 'Full Details',
      ru: 'Подробнее',
    },
    close: {
      kk: 'Жабу',
      en: 'Close',
      ru: 'Закрыть',
    },
    ticket: {
      kk: 'Кіру билеті:',
      en: 'Admission:',
      ru: 'Входной билет:',
    },
    duration: {
      kk: 'Сапар уақыты:',
      en: 'Duration:',
      ru: 'Длительность:',
    },
    hours: {
      kk: 'сағат',
      en: 'hours',
      ru: 'ч.',
    },
    all17Regions: {
      kk: 'Қазақстанның 17 өңірін шарлау (Japan Travel стилінде):',
      en: 'Explore all 17 Regions of Kazakhstan:',
      ru: 'Исследовать все 17 регионов Казахстана:',
    },
  };

  const defaultBackupImage =
    'https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&w=1600&q=85';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      <div
        className="relative bg-[#FDFCFA] rounded-3xl max-w-6xl w-full max-h-[94vh] overflow-y-auto shadow-2xl border border-amber-200/60 text-slate-900"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Floating Close Button */}
        <button
          onClick={() => setShowcaseRegion(null)}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all shadow-lg cursor-pointer"
          aria-label={content.close[language]}
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. Japan Travel Style 17-Region Quick Navigation Pill Bar */}
        <div className="bg-white/95 sticky top-0 z-20 px-4 sm:px-6 py-3 border-b border-slate-200 backdrop-blur-md">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#E67E00]" />
            <span>{content.all17Regions[language]}</span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {REGIONS.map((reg) => {
              const isActive = reg.id === showcaseRegion.id;
              return (
                <button
                  key={reg.id}
                  type="button"
                  onClick={() => handleSelectRegionTab(reg)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer border ${
                    isActive
                      ? 'bg-[#E67E00] text-white border-[#E67E00] shadow-sm scale-102 font-black'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-amber-50 hover:text-amber-900'
                  }`}
                >
                  {reg.name[language]}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Panoramic Hero Banner */}
        <div className="relative h-72 sm:h-96 w-full bg-slate-950 overflow-hidden">
          <img
            src={getAssetUrl(showcaseRegion.coverImage) || defaultBackupImage}
            alt={showcaseRegion.name[language]}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center scale-102 filter brightness-85"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = defaultBackupImage;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />

          {/* Hero Content Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white max-w-4xl">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              {showcaseRegion.tag && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/90 text-slate-950 text-xs font-black uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-3 h-3 text-slate-950" />
                  <span>{showcaseRegion.tag[language]}</span>
                </span>
              )}
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                <MapPin className="w-3 h-3 text-amber-300" />
                <span>{showcaseRegion.center[language]}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-white leading-tight">
              {showcaseRegion.name[language]}
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-2xl leading-relaxed">
              {showcaseRegion.description[language]}
            </p>
          </div>
        </div>

        {/* 3. Vital Travel Metrics Bar (4 Key Info Pillars) */}
        <div className="p-4 sm:p-6 bg-white border-b border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
              <div className="text-[11px] font-bold text-amber-900 uppercase tracking-wide">
                {content.twoDayTrip[language]}
              </div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-[#E67E00] mt-0.5">
                {showcaseRegion.startingBudget
                  ? `${showcaseRegion.startingBudget.toLocaleString('ru-RU')} ₸`
                  : '35 000 ₸'}{' '}
                <span className="text-xs font-normal text-slate-500">{content.from[language]}</span>
              </div>
              <div className="text-[10px] text-slate-500">Көлік + Қонақүй + Билеттер</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200/80">
              <div className="text-[11px] font-bold text-sky-900 uppercase tracking-wide">
                {content.sitesCount[language]}
              </div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-sky-900 mt-0.5">
                {regionDestinations.length > 0
                  ? regionDestinations.length
                  : showcaseRegion.highlightSitesCount}{' '}
                <span className="text-xs font-normal text-slate-500">нысан</span>
              </div>
              <div className="text-[10px] text-slate-500">100% Верификацияланған</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
              <div className="text-[11px] font-bold text-emerald-900 uppercase tracking-wide">
                {content.bestSeason[language]}
              </div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-emerald-900 mt-0.5">
                {content.seasonVal[language]}
              </div>
              <div className="text-[10px] text-slate-500">Жайлы климат & экскурсия</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200">
              <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                Логистика & Байланыс
              </div>
              <div className="text-lg font-serif font-bold text-slate-900 mt-0.5">
                {showcaseRegion.center[language]}
              </div>
              <div className="text-[10px] text-slate-500">Пойыз / Ұшақ / 1414 Police</div>
            </div>
          </div>
        </div>

        {/* 4. Curated Historical Sites in this Region */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                {content.sitesTitle[language]}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {content.sitesSubtitle[language]}
              </p>
            </div>
            <span className="text-xs font-bold text-[#E67E00] px-3 py-1 bg-amber-50 rounded-full border border-amber-200 shrink-0">
              {regionDestinations.length} ескерткіш табылды
            </span>
          </div>

          {regionDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regionDestinations.map((dest) => (
                <div
                  key={dest.id}
                  onClick={() => handleViewFullPassport(dest)}
                  className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={getAssetUrl(dest.images[0]?.url) || defaultBackupImage}
                      alt={dest.name[language]}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-[10px] font-bold border border-amber-400/30 uppercase">
                        {dest.historicalPeriod[language]}
                      </span>
                      {dest.unescoWorldHeritage && (
                        <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold shadow-xs">
                          ЮНЕСКО
                        </span>
                      )}
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors leading-tight line-clamp-1">
                        {dest.name[language]}
                      </h3>
                      <div className="text-[11px] text-slate-300 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="truncate">{dest.cityDistrict[language]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                    {/* Compact Punchy Info */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {dest.shortDescription[language]}
                    </p>

                    {/* Verified Pricing & Duration Pills */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">
                          {content.ticket[language]}
                        </span>
                        <span className="font-bold font-mono text-slate-900">
                          {formatCurrency(dest.ticketPrices.foreignAdult)}
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block font-medium">
                          {content.duration[language]}
                        </span>
                        <span className="font-semibold text-slate-700">
                          {dest.recommendedVisitDurationHours} {content.hours[language]}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button
                        type="button"
                        onClick={(e) => handleOpenVirtualTour(dest, e)}
                        className="py-2 px-2.5 rounded-xl bg-slate-100 hover:bg-amber-100 text-slate-800 hover:text-amber-900 text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                        title={content.virtual360[language]}
                      >
                        <Eye className="w-3.5 h-3.5 text-[#E67E00]" />
                        <span>{content.virtual360[language]}</span>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleOpenEstimator(dest, e)}
                        className="py-2 px-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer"
                        title={content.calcBudget[language]}
                      >
                        <Calculator className="w-3.5 h-3.5" />
                        <span>{content.calcBudget[language]}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-amber-50/50 rounded-3xl border border-amber-200">
              <Compass className="w-10 h-10 text-[#E67E00] mx-auto mb-3 animate-spin" />
              <h3 className="text-lg font-bold text-slate-900">
                {showcaseRegion.name[language]} тарихи деректері
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto mt-1">
                {showcaseRegion.historicalSummary[language]}
              </p>
            </div>
          )}
        </div>

        {/* 5. Footer Bar */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Деректер ресми министрлік стандарттарымен расталған.</span>
          </div>

          <button
            type="button"
            onClick={() => setShowcaseRegion(null)}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            {content.close[language]}
          </button>
        </div>
      </div>
    </div>
  );
};
