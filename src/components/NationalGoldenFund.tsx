import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DESTINATIONS } from '../data/destinations';
import {
  Crown,
  MapPin,
  Clock,
  Compass,
  Eye,
  CheckCircle,
  Ticket
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';

export const NationalGoldenFund: React.FC = () => {
  const { language, formatCurrency, setSelectedDestination, openEstimatorForDestination } = useApp();
  const [activeTabId, setActiveTabId] = useState<string>('yasawi');

  // Top 5 National Treasures
  const topIds = ['yasawi', 'aisha-bibi', 'beket-ata', 'otyrar', 'jochi-khan'];
  const topSites = DESTINATIONS.filter((d) => topIds.includes(d.id));

  const activeSite = topSites.find((s) => s.id === activeTabId) || topSites[0];

  if (!activeSite) return null;

  return (
    <section className="py-20 relative bg-[#FDFCFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Crown className="w-3.5 h-3.5 text-[#E67E00]" />
              <span>
                {language === 'kk'
                  ? 'Ұлттық Алтын Қор · Мемлекеттік Мақтаныш'
                  : language === 'ru'
                  ? 'Золотой Фонд Наследия · Гордость Казахстана'
                  : 'National Golden Fund · Pride of Kazakhstan'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
              {language === 'kk'
                ? 'Қазақстанның Бас 5 Жауһары'
                : language === 'ru'
                ? 'Топ-5 Главных Жемчужин Казахстана'
                : 'Top 5 National Masterpieces of Kazakhstan'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              {language === 'kk'
                ? 'Әрбір шетелдік қонақ пен әлем саяхатшысы міндетті түрде көруге тиіс ЮНЕСКО және жалпыұлттық маңызы бар киелі сәулет жауһарлары.'
                : language === 'ru'
                ? 'Памятники ЮНЕСКО и святыни общенационального значения, обязательные для посещения каждым иностранным гостем.'
                : 'Iconic UNESCO World Heritage monuments and sacred sanctuaries essential for every international traveler.'}
            </p>
          </div>

          {/* Quick tab switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {topSites.map((site) => {
              const isActive = site.id === activeTabId;
              return (
                <button
                  key={site.id}
                  type="button"
                  onClick={() => setActiveTabId(site.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 cursor-pointer border ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-amber-400'
                  }`}
                >
                  {site.name[language]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Feature Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Image with overlay badges */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[500px] bg-slate-950 overflow-hidden group">
            <img
              src={getAssetUrl(activeSite.images[0]?.url || '/images/destinations/yasawi.jpg')}
              alt={activeSite.name[language]}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

            {/* Top Badges */}
            <div className="absolute top-4 left-4 flex items-center gap-2 flex-wrap">
              {activeSite.unescoWorldHeritage && (
                <span className="px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold shadow-xs">
                  {language === 'kk' ? '★ ЮНЕСКО Әлемдік Мұрасы' : language === 'ru' ? '★ Всемирное наследие ЮНЕСКО' : '★ UNESCO World Heritage'}
                </span>
              )}
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-xs font-bold border border-amber-400/30">
                {activeSite.historicalPeriod[language]}
              </span>
            </div>

            {/* Bottom Caption on Image */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeSite.cityDistrict[language]}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-tight">
                {activeSite.name[language]}
              </h3>
            </div>
          </div>

          {/* Right Column: Editorial story & details */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div className="space-y-6">
              {/* Short story */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {language === 'kk'
                    ? 'Тарихи мәні мен архитектурасы:'
                    : language === 'ru'
                    ? 'Историческое и архитектурное значение:'
                    : 'Historical & architectural significance:'}
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-serif">
                  «{activeSite.shortDescription[language]}»
                </p>
              </div>

              {/* What to see bullets */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  {language === 'kk'
                    ? 'Басты көруге болатын 3 ерекшелігі:'
                    : language === 'ru'
                    ? '3 Главные достопримечательности:'
                    : 'Top 3 Architectural Highlights:'}
                </div>
                <ul className="space-y-2">
                  {activeSite.whatToSee[language]?.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Pricing & Logistics */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[11px] text-slate-500 font-semibold flex items-center gap-1">
                    <Ticket className="w-3 h-3 text-[#E67E00]" />
                    <span>{language === 'kk' ? 'Кіру билеті:' : language === 'ru' ? 'Входной билет:' : 'Admission:'}</span>
                  </div>
                  <div className="text-lg font-bold text-slate-900 mt-0.5 font-mono">
                    {formatCurrency(activeSite.ticketPrices.foreignAdult)}
                  </div>
                  <div className="text-[10px] text-emerald-700 font-bold">
                    {language === 'kk' ? '100% Верификацияланған' : language === 'ru' ? '100% Проверено' : '100% Verified'}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-500 font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#E67E00]" />
                    <span>{language === 'kk' ? 'Ұсынылатын уақыт:' : language === 'ru' ? 'Рекомендуемое время:' : 'Visit Duration:'}</span>
                  </div>
                  <div className="text-lg font-bold text-slate-900 mt-0.5 font-mono">
                    {activeSite.recommendedVisitDurationHours} {language === 'kk' ? 'сағат' : language === 'ru' ? 'ч.' : 'hours'}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    {language === 'kk' ? 'Толық экскурсия' : language === 'ru' ? 'Полная экскурсия' : 'Guided tour'}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => setSelectedDestination(activeSite)}
                className="w-full sm:flex-1 py-3 px-5 rounded-2xl bg-[#E67E00] hover:bg-[#CC6F00] text-white text-xs font-bold transition-all shadow-md shadow-[#E67E00]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>
                  {language === 'kk' ? 'Толық Паспортты Ашу' : language === 'ru' ? 'Паспорт Объекта' : 'Full Passport'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => openEstimatorForDestination(activeSite)}
                className="w-full sm:w-auto py-3 px-5 rounded-2xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#E67E00]" />
                <span>
                  {language === 'kk' ? 'Сапарды есептеу' : language === 'ru' ? 'Рассчитать поездку' : 'Plan Budget'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
