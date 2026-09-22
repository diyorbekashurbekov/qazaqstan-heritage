import React, { useState, Suspense, lazy } from 'react';
import { useApp } from '../context/AppContext';
import { DESTINATIONS } from '../data/destinations';
import {
  X,
  MapPin,
  Clock,
  Calendar,
  Award,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Plane,
  Train,
  Car,
  Calculator,
  Sparkles,
  Layers,
  Navigation,
  Copy,
  Check,
  Utensils,
  Hotel,
  Sun,
} from 'lucide-react';
import { formatPrice, getNearbyDestinations } from '../utils/calculator';
import { getAssetUrl } from '../utils/assetHelper';
import { ErrorBoundary } from './ErrorBoundary';

const Monument3DViewer = lazy(() =>
  import('./Monument3DViewer').then((mod) => ({ default: mod.Monument3DViewer }))
);

export const DestinationModal: React.FC = () => {
  const {
    language,
    currency,
    isForeigner,
    selectedDestination,
    setSelectedDestination,
    openEstimatorForDestination,
  } = useApp();

  const labels = {
    tabs: {
      '3d': { kk: '3D Интерактивті Модель', en: '3D Interactive Model', ru: '3D Интерактивная модель' },
      overview: { kk: 'Шолу және тарихы', en: 'Overview & History', ru: 'Обзор и история' },
      tickets: { kk: 'Билеттер мен кесте', en: 'Tickets & Hours', ru: 'Билеты и график' },
      logistics: { kk: 'Маршрут және шығындар', en: 'Route & Trip Expenses', ru: 'Маршрут и расходы' },
      sources: { kk: 'Дереккөздер мен тексеру', en: 'Sources & Verification', ru: 'Источники и аудит' },
    },
    whyImportant: { kk: 'Неліктен маңызды?', en: 'Why is it historically important?', ru: 'Историческая важность' },
    whyVisit: { kk: 'Неге бару керек?', en: 'Why visit?', ru: 'Почему стоит посетить?' },
    whatToSee: { kk: 'Нені көруге болады?', en: 'What can you see there?', ru: 'Что можно увидеть?' },
    whatToDo: { kk: 'Нені жасауға болады?', en: 'Recommended activities:', ru: 'Что рекомендуется сделать?' },
    bestTime: { kk: 'Саяхаттауға ең қолайлы уақыт:', en: 'Best time to visit:', ru: 'Лучшее время для визита:' },
    recommendedDuration: { kk: 'Ұсынылатын уақыт:', en: 'Recommended duration:', ru: 'Рекомендуемое время:' },
    hours: { kk: 'сағат', en: 'hours', ru: 'часа' },
    openingHours: { kk: 'Жұмыс кестесі:', en: 'Opening hours:', ru: 'Режим работы:' },
    ticketPrices: { kk: 'Ресми бекітілген тарифтер', en: 'Official Ticket Tariffs', ru: 'Официальные тарифы' },
    planTripBtn: { kk: 'Осы нысанға сапар құнын есептеу', en: 'Plan Budget for this Trip', ru: 'Рассчитать поездку сюда' },
    buildRouteBtn: { kk: 'Маршрут құру', en: 'Build Route / Directions', ru: 'Построить маршрут' },
    googleMaps: { kk: 'Google Картада ашу', en: 'Open in Google Maps', ru: 'Открыть в Google Картах' },
    yandexMaps: { kk: 'Yandex Картада ашу', en: 'Open in Yandex Maps', ru: 'Открыть в Яндекс Картах' },
    copyCoords: { kk: 'Координатты көшіру', en: 'Copy Coordinates', ru: 'Скопировать координаты' },
    copied: { kk: 'Көшірілді!', en: 'Copied!', ru: 'Скопировано!' },
    shugylaConcept: { kk: 'Шұғыла Жобасы (3D & ЖИ)', en: 'Shugyla 3D & AI Interactive Concept', ru: 'Концепт Шұғыла (3D & ИИ)' },
    nearbyTitle: { kk: 'Жақын маңдағы басқа тарихи орындар:', en: 'Nearby historical destinations:', ru: 'Ближайшие исторические объекты:' },
    verifiedAt: { kk: 'Тексерілген уақыты:', en: 'Last verified:', ru: 'Дата верификации:' },
    sourceTypeOfficial: { kk: 'Ресми музей-қорық порталы', en: 'Official Museum-Reserve Portal', ru: 'Официальный портал музея' },
    sourceTypeUnesco: { kk: 'ЮНЕСКО Бүкіләлемдік мұра орталығы', en: 'UNESCO World Heritage Center', ru: 'Центр всемирного наследия ЮНЕСКО' },
    sourceTypeGov: { kk: 'Мемлекеттік туризм порталы', en: 'National Tourism Portal', ru: 'Государственный турорган' },
    expensesTitle: { kk: 'Болжамды туристік шығындар (1 тәулікке):', en: 'Estimated Travel Expenses (Per day):', ru: 'Ориентировочные расходы (на 1 сутки):' },
    hotelExpense: { kk: 'Қонақүй (орташа):', en: 'Hotel (mid-range):', ru: 'Отель (средний):' },
    foodExpense: { kk: 'Тамақтану (күндік):', en: 'Meals (daily):', ru: 'Питание (в день):' },
    transportExpense: { kk: 'Жол қатынасы (хабтан):', en: 'Transport from hub:', ru: 'Транспорт от хаба:' },
  };

  const [activeTab, setActiveTab] = useState<'3d' | 'overview' | 'logistics' | 'tickets' | 'sources'>('overview');
  const [copiedCoords, setCopiedCoords] = useState<boolean>(false);

  if (!selectedDestination) return null;

  const nearby = getNearbyDestinations(selectedDestination, DESTINATIONS, 3);

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${selectedDestination.coordinates.lat},${selectedDestination.coordinates.lng}`;
  const yandexMapsUrl = `https://yandex.com/maps/?rtext=~${selectedDestination.coordinates.lat},${selectedDestination.coordinates.lng}&rtt=auto`;

  const handleCopyCoords = () => {
    navigator.clipboard?.writeText(
      `${selectedDestination.coordinates.lat}, ${selectedDestination.coordinates.lng}`
    );
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto bg-slate-900/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-white text-slate-900 border-t sm:border border-slate-200 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden h-[92vh] sm:h-auto sm:max-h-[94vh] flex flex-col">
        {/* Header Hero Banner */}
        <div className="relative h-44 sm:h-72 w-full shrink-0 bg-slate-950 overflow-hidden">
          <img
            src={getAssetUrl(selectedDestination.images[0]?.url)}
            alt={selectedDestination.name[language]}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d13] via-[#090d13]/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={() => setSelectedDestination(null)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 flex items-center justify-center transition-all cursor-pointer shadow-lg"
            aria-label="Жабу"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges on Image */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10 max-w-[80%]">
            <span className="px-3 py-1 rounded-full bg-stone-900/90 text-amber-300 backdrop-blur-md text-xs font-semibold border border-amber-500/40">
              {selectedDestination.historicalPeriod[language]}
            </span>

            {selectedDestination.unescoWorldHeritage && (
              <span className="px-3 py-1 rounded-full bg-blue-950/90 backdrop-blur-md text-xs font-bold text-blue-300 border border-blue-500/40 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-400" />
                UNESCO WORLD HERITAGE
              </span>
            )}

            <span className="px-3 py-1 rounded-full bg-emerald-950/90 backdrop-blur-md text-xs font-semibold text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              VERIFIED DATA
            </span>
          </div>

          {/* Title, Location & Quick Route Buttons */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-amber-300 mb-1">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{selectedDestination.exactLocation[language]}</span>
              </div>

              <h1 className="font-serif-luxury text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
                {selectedDestination.name[language]}
              </h1>
            </div>

            {/* Direct Route Action Bar in Hero */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold shadow-lg flex items-center gap-1.5 transition-all hover:scale-102"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{labels.buildRouteBtn[language]}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyCoords}
                title={labels.copyCoords[language]}
                className="px-2.5 py-2 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-stone-700 text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
              >
                {copiedCoords ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 text-[11px]">{labels.copied[language]}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono">
                      {selectedDestination.coordinates.lat.toFixed(2)}°, {selectedDestination.coordinates.lng.toFixed(2)}°
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 sm:px-6 overflow-x-auto shrink-0 no-scrollbar">
          {(['3d', 'overview', 'tickets', 'logistics', 'sources'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3.5 px-4 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === tab
                  ? 'border-amber-500 text-amber-700 bg-amber-500/10'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab === '3d' && <Sparkles className="w-4 h-4 text-amber-500" />}
              {tab === 'logistics' && <Navigation className="w-3.5 h-3.5" />}
              <span>{labels.tabs[tab][language]}</span>
            </button>
          ))}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 text-sm leading-relaxed">
          {/* TAB 0: 3D INTERACTIVE MODEL (The Watch & Arts/Culture) */}
          {activeTab === '3d' && (
            <div className="space-y-4 animate-fadeIn">
              <ErrorBoundary
                fallback={
                  <div className="h-[360px] sm:h-[560px] flex flex-col items-center justify-center rounded-2xl bg-stone-900 text-stone-300 p-6 text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl border border-amber-500/20">
                      🏛️
                    </div>
                    <p className="text-xs text-stone-400 max-w-sm">
                      {language === 'kk'
                        ? '3D режимі бұл құрылғыда шектелген. «Шолу» бөліміндегі фотосуреттер мен ақпаратты тамашалай аласыз.'
                        : language === 'ru'
                        ? '3D режим ограничен в этом браузере. Вы можете посмотреть фотографии во вкладке «Обзор».'
                        : '3D view is limited on this device. Please view photos in the Overview tab.'}
                    </p>
                  </div>
                }
              >
                <Suspense
                  fallback={
                    <div className="h-[360px] sm:h-[560px] flex flex-col items-center justify-center rounded-2xl bg-stone-900 text-amber-400 gap-3">
                      <Sparkles className="w-8 h-8 animate-spin" />
                      <span className="text-sm font-semibold">
                        {language === 'kk' ? '3D модель жүктелуде...' : 'Loading 3D model...'}
                      </span>
                    </div>
                  }
                >
                  <Monument3DViewer
                    destination={selectedDestination}
                    language={language}
                    isModal={true}
                    className="h-[360px] sm:h-[560px]"
                  />
                </Suspense>
              </ErrorBoundary>

              {/* 3D Features Guidance Card */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs">
                  <div className="font-bold text-amber-900 flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>{language === 'kk' ? '360° Еркін Айналдыру' : '360° Free Rotation'}</span>
                  </div>
                  <p className="text-slate-600 text-[11px]">
                    {language === 'kk'
                      ? 'Тінтуірмен немесе сенсормен сүйреп, ғимаратты жан-жағынан толық тамашалаңыз.'
                      : 'Drag with mouse or touch to orbit around the monument in 3D.'}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                    <Sun className="w-3.5 h-3.5 text-amber-600" />
                    <span>{language === 'kk' ? 'Студиялық Жарық' : 'Studio Lighting'}</span>
                  </div>
                  <p className="text-slate-600 text-[11px]">
                    {language === 'kk'
                      ? 'Күндізгі күн, алтын шапақ (күн батуы) және түнгі ай жарығы режимдерін ауыстырыңыз.'
                      : 'Switch between daylight, sunset golden hour, and mystic moonlight.'}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                    <Navigation className="w-3.5 h-3.5 text-amber-600" />
                    <span>{language === 'kk' ? 'Камералық Storytelling' : 'Camera Storytelling'}</span>
                  </div>
                  <p className="text-slate-600 text-[11px]">
                    {language === 'kk'
                      ? 'Төменгі қадамдар арқылы күмбез, қасбет, өрнектер мен кіреберіске автоматты жақындаңыз.'
                      : 'Smoothly glide into dome, facade, ornaments and sacred portal.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 1: OVERVIEW & HISTORY */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              {/* 3D Model Launch CTA Banner */}
              <div
                onClick={() => setActiveTab('3d')}
                className="group p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-[#E67E00] text-white flex items-center justify-between cursor-pointer shadow-md hover:shadow-xl transition-all active:scale-98"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-xl shrink-0">
                    🏛️
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold flex items-center gap-1.5">
                      <span>{language === 'kk' ? '3D Интерактивті модельді ашу' : language === 'ru' ? 'Открыть 3D модель' : 'Open Interactive 3D Model'}</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                    </div>
                    <div className="text-[11px] text-white/90">
                      {language === 'kk' ? '360° бұру, күмбез бен архитектураны жақындату' : 'Explore in 360° full 3D'}
                    </div>
                  </div>
                </div>
                <span className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-white text-slate-900 text-xs font-bold shrink-0 group-hover:bg-amber-50 transition-colors">
                  {language === 'kk' ? '3D →' : '3D →'}
                </span>
              </div>
              {/* Short Description */}
              <p className="text-base text-slate-900 font-medium leading-relaxed bg-amber-500/10 p-4 rounded-2xl border border-amber-500/20">
                {selectedDestination.shortDescription[language]}
              </p>

              {/* Best Time & Duration Quick Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-amber-600 shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-500 uppercase font-semibold">
                      {labels.bestTime[language]}
                    </div>
                    <div className="text-xs font-bold text-slate-900">
                      {selectedDestination.bestTimeToVisit[language]}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-500 uppercase font-semibold">
                      {labels.recommendedDuration[language]}
                    </div>
                    <div className="text-xs font-bold text-slate-900">
                      {selectedDestination.recommendedVisitDurationHours} {labels.hours[language]}
                    </div>
                  </div>
                </div>
              </div>

              {/* History */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-serif-luxury mb-2">
                  {language === 'kk' ? 'Тарихы мен шежіресі' : 'History & Origins'}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {selectedDestination.history[language]}
                </p>
              </div>

              {/* Why Important & Why Visit */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-amber-800 text-sm mb-2 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-600" />
                    {labels.whyImportant[language]}
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {selectedDestination.whyImportant[language]}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-amber-800 text-sm mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    {labels.whyVisit[language]}
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {selectedDestination.whyVisit[language]}
                  </p>
                </div>
              </div>

              {/* What To See & What To Do */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-3">
                    {labels.whatToSee[language]}
                  </h4>
                  <ul className="space-y-2">
                    {selectedDestination.whatToSee[language].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-3">
                    {labels.whatToDo[language]}
                  </h4>
                  <ul className="space-y-2">
                    {selectedDestination.whatToDo[language].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 3D Model Quick Jump Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 border border-amber-500/40 text-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>{labels.tabs['3d'][language]}</span>
                  </span>
                  <h5 className="text-sm font-bold text-white">
                    {selectedDestination.name[language]}: 360° Интерактивті 3D Көрініс
                  </h5>
                  <p className="text-xs text-stone-300 mt-1">
                    {language === 'kk'
                      ? 'The Watch студиялық жарығы, Google Arts & Culture камералық storytelling қадамдары.'
                      : 'High-end 3D model with studio lighting, zoom, and camera storytelling.'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('3d')}
                  className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shrink-0 transition-all shadow-lg flex items-center gap-2 cursor-pointer hover:scale-102"
                >
                  <Layers className="w-4 h-4" />
                  <span>{language === 'kk' ? '3D Модельді Ашу' : 'Открыть 3D Модель'}</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: TICKETS & HOURS */}
          {activeTab === 'tickets' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Opening Hours Banner */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {labels.openingHours[language]}
                  </h4>
                  <p className="text-amber-800 text-sm font-semibold mt-1">
                    {selectedDestination.openingHours.schedule[language]}
                  </p>
                  {selectedDestination.openingHours.notes && (
                    <p className="text-xs text-slate-500 mt-1">
                      {selectedDestination.openingHours.notes[language]}
                    </p>
                  )}
                </div>
              </div>

              {/* Official Ticket Price Breakdown */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-slate-900 font-serif-luxury text-base">
                    {labels.ticketPrices[language]}
                  </h4>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {selectedDestination.ticketPrices.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] text-slate-500 block mb-1">
                      {language === 'kk' ? 'Ересектер (ҚР азаматтары)' : 'Domestic Adults'}
                    </span>
                    <span className="text-lg font-bold text-slate-900 font-mono">
                      {formatPrice(selectedDestination.ticketPrices.domesticAdult, currency)}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] text-slate-500 block mb-1">
                      {language === 'kk' ? 'Студенттер' : 'Students'}
                    </span>
                    <span className="text-lg font-bold text-slate-900 font-mono">
                      {formatPrice(selectedDestination.ticketPrices.domesticStudent, currency)}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] text-slate-500 block mb-1">
                      {language === 'kk' ? 'Мектеп оқушылары' : 'Schoolchildren'}
                    </span>
                    <span className="text-lg font-bold text-slate-900 font-mono">
                      {formatPrice(selectedDestination.ticketPrices.domesticChild, currency)}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200">
                    <span className="text-[11px] text-amber-800 font-medium block mb-1">
                      {language === 'kk' ? 'Шетелдік азаматтар' : 'Foreign Visitors'}
                    </span>
                    <span className="text-lg font-bold text-amber-900 font-mono">
                      {formatPrice(selectedDestination.ticketPrices.foreignAdult, currency)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ROUTE & TRIP EXPENSES (Kazakhstan Travel) */}
          {activeTab === 'logistics' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Build Route Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-50 to-amber-500/5 border border-amber-500/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <Navigation className="w-5 h-5 text-amber-600" />
                      <span>{labels.buildRouteBtn[language]}</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {language === 'kk'
                        ? 'Өз орныңыздан осы ескерткішке дейінгі ең қолайлы жол бағытын құрыңыз.'
                        : 'Navigate directly from your location using Google Maps or Yandex Maps.'}
                    </p>
                  </div>

                  {/* Route Buttons */}
                  <div className="flex items-center gap-2">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center gap-1.5 shadow-md transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{labels.googleMaps[language]}</span>
                    </a>
                    <a
                      href={yandexMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-red-500" />
                      <span>{labels.yandexMaps[language]}</span>
                    </a>
                  </div>
                </div>

                {/* Hub distance & nearest city */}
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span>
                      {language === 'kk' ? 'Ең жақын хаб қаласы:' : 'Nearest hub city:'}{' '}
                      <strong>{selectedDestination.transportation.nearestHubCity[language]}</strong>
                    </span>
                  </div>
                  <span>
                    {language === 'kk' ? 'Хабтан қашықтығы:' : 'Distance from hub:'}{' '}
                    <strong>{selectedDestination.transportation.distanceFromHubKm} км</strong>
                  </span>
                </div>
              </div>

              {/* Trip Expenses Breakdown (Kazakhstan Travel style) */}
              <div>
                <h4 className="font-bold text-slate-900 font-serif-luxury text-base mb-3">
                  {labels.expensesTitle[language]}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Transport */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 text-amber-800 font-bold text-xs mb-2">
                      <Car className="w-4 h-4 text-amber-600" />
                      <span>{labels.transportExpense[language]}</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 font-mono">
                      {formatPrice(selectedDestination.transportation.options[0]?.costRange.min || 2000, currency)} –{' '}
                      {formatPrice(selectedDestination.transportation.options[0]?.costRange.max || 8000, currency)}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      {selectedDestination.transportation.options[0]?.title[language] || 'Автобус / Такси'}
                    </div>
                  </div>

                  {/* Accommodation */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 text-amber-800 font-bold text-xs mb-2">
                      <Hotel className="w-4 h-4 text-amber-600" />
                      <span>{labels.hotelExpense[language]}</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 font-mono">
                      {formatPrice(selectedDestination.accommodationEstimates.midRangePerNight.min, currency)} –{' '}
                      {formatPrice(selectedDestination.accommodationEstimates.midRangePerNight.max, currency)}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      {language === 'kk' ? 'Қонақүй (1 түнемелікке)' : 'Standard hotel room'}
                    </div>
                  </div>

                  {/* Food */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 text-amber-800 font-bold text-xs mb-2">
                      <Utensils className="w-4 h-4 text-amber-600" />
                      <span>{labels.foodExpense[language]}</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 font-mono">
                      {formatPrice(selectedDestination.foodEstimates.midRangePerDay.min, currency)} –{' '}
                      {formatPrice(selectedDestination.foodEstimates.midRangePerDay.max, currency)}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      {language === 'kk' ? 'Күндік 3 мезгіл тамақ' : 'Three meals per day'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Transportation Options List */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm">
                  {language === 'kk' ? 'Жету жолдарының нұсқалары:' : 'Transport Options:'}
                </h4>
                {selectedDestination.transportation.options.map((opt, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                        {opt.mode === 'flight' && <Plane className="w-4 h-4" />}
                        {opt.mode === 'train' && <Train className="w-4 h-4" />}
                        {opt.mode === 'car' && <Car className="w-4 h-4" />}
                        {opt.mode === 'taxi' && <Car className="w-4 h-4" />}
                        {opt.mode === 'bus' && <Car className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          {opt.title[language]}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {opt.provider} • ≈ {opt.duration}
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-xs font-bold text-slate-900 font-mono">
                        {formatPrice(opt.costRange.min, currency)} – {formatPrice(opt.costRange.max, currency)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SOURCES & AUDIT */}
          {activeTab === 'sources' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="space-y-2">
                {selectedDestination.sources.map((src, idx) => (
                  <a
                    key={idx}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between gap-3 transition-colors group"
                  >
                    <div className="truncate">
                      <h5 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <span>{src.name}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-600" />
                      </h5>
                      <span className="text-[11px] text-slate-500 block mt-0.5 truncate max-w-md">
                        {src.url}
                      </span>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[10px] text-slate-500 block">
                        {labels.verifiedAt[language]}
                      </span>
                      <span className="text-xs font-semibold text-emerald-600">
                        {src.verifiedAt}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Nearby Destinations */}
          {nearby.length > 0 && (
            <div className="pt-6 border-t border-slate-200">
              <h4 className="font-bold text-slate-900 font-serif-luxury text-sm mb-3">
                {labels.nearbyTitle[language]}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {nearby.map(({ destination: nearDest, distanceKm, travelTimeMinutes }) => (
                  <div
                    key={nearDest.id}
                    onClick={() => setSelectedDestination(nearDest)}
                    className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-amber-400 cursor-pointer transition-all group"
                  >
                    <h5 className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-1">
                      {nearDest.name[language]}
                    </h5>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1.5">
                      <span>{distanceKm} km</span>
                      <span>≈ {Math.round(travelTimeMinutes / 60)}h {travelTimeMinutes % 60}m</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">
              {language === 'kk' ? 'Кіру билеті:' : 'Entrance fee:'}
            </span>
            <span className="text-base font-bold text-amber-700">
              {selectedDestination.ticketPrices.foreignAdult === 0
                ? '0 ₸ (Тегін)'
                : formatPrice(
                    isForeigner
                      ? selectedDestination.ticketPrices.foreignAdult
                      : selectedDestination.ticketPrices.domesticAdult,
                    currency
                  )}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Build Route CTA */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-900 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-xs"
            >
              <Navigation className="w-4 h-4 text-amber-600" />
              <span>{labels.buildRouteBtn[language]}</span>
            </a>

            {/* Plan Budget CTA */}
            <button
              onClick={() => {
                const dest = selectedDestination;
                setSelectedDestination(null);
                openEstimatorForDestination(dest);
              }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-stone-950" />
              <span>{labels.planTripBtn[language]}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
