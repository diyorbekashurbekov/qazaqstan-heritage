import React, { useState, useEffect } from 'react';
import {
  Calculator,
  Compass,
  Users,
  Calendar,
  Plane,
  Train,
  Car,
  ShieldCheck,
  Copy,
  Check,
  Info,
  MapPin,
  ChevronRight,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DESTINATIONS } from '../data/destinations';
import {
  calculateTripCost,
  formatPrice,
  type TripCalculationParams,
} from '../utils/calculator';
import type { HistoricalDestination } from '../types/tourism';
import { OfficialSourceModal } from './OfficialSourceModal';
import type { OfficialCategoryKey } from '../data/officialSourcesData';

export const TripCostEstimator: React.FC = () => {
  const {
    language,
    currency,
    isForeigner,
    setIsForeigner,
    estimatorTargetDestination,
    setEstimatorTargetDestination,
  } = useApp();

  const [selectedDestinationId, setSelectedDestinationId] = useState<string>(
    estimatorTargetDestination?.id || DESTINATIONS[0].id
  );
  const [departureCity, setDepartureCity] = useState<
    'almaty' | 'astana' | 'shymkent' | 'aktau' | 'nearby_hub'
  >('almaty');
  const [travelers, setTravelers] = useState<number>(2);
  const [days, setDays] = useState<number>(3);
  const [comfortLevel, setComfortLevel] = useState<
    'budget' | 'standard' | 'comfort'
  >('standard');
  const [transportMode, setTransportMode] = useState<
    'flight' | 'train' | 'taxi' | 'car'
  >('train');
  const [copied, setCopied] = useState<boolean>(false);
  const [selectedOfficialCategory, setSelectedOfficialCategory] = useState<OfficialCategoryKey | null>(null);

  // Synchronize when target destination changes from card click
  useEffect(() => {
    if (estimatorTargetDestination) {
      setSelectedDestinationId(estimatorTargetDestination.id);
    }
  }, [estimatorTargetDestination]);

  const activeDestination: HistoricalDestination =
    DESTINATIONS.find((d) => d.id === selectedDestinationId) || DESTINATIONS[0];

  const calculationParams: TripCalculationParams = {
    destination: activeDestination,
    departureCity,
    travelers,
    days,
    comfortLevel,
    transportMode,
    isForeigner,
    language,
  };

  const costResult = calculateTripCost(calculationParams);

  const cityLabels: Record<string, Record<typeof language, string>> = {
    almaty: { kk: 'Алматы', en: 'Almaty', ru: 'Алматы' },
    astana: { kk: 'Астана', en: 'Astana', ru: 'Астана' },
    shymkent: { kk: 'Шымкент', en: 'Shymkent', ru: 'Шымкент' },
    aktau: { kk: 'Ақтау', en: 'Aktau', ru: 'Актау' },
    nearby_hub: { kk: 'Жақын облыс орталығы', en: 'Nearest Regional Hub', ru: 'Ближайший обл. центр' },
  };

  const comfortLabels: Record<string, Record<typeof language, { title: string; desc: string }>> = {
    budget: {
      kk: { title: 'Эконом (Бюджеттік)', desc: 'Хостел / 2★ қонақүй, қарапайым дәмханалар' },
      en: { title: 'Budget Explorer', desc: 'Hostel / 2★ guesthouse, local canteen meals' },
      ru: { title: 'Бюджетный', desc: 'Хостел / 2★ гостевой дом, простые столовые' },
    },
    standard: {
      kk: { title: 'Стандарт (Ұсынылатын)', desc: '3-4★ қонақүй, сапалы ұлттық мейрамханалар' },
      en: { title: 'Standard Comfort', desc: '3-4★ hotel, comfortable national cuisine cafes' },
      ru: { title: 'Стандартный', desc: '3-4★ отель, хорошие рестораны нац. кухни' },
    },
    comfort: {
      kk: { title: 'Премиум (Жайлы)', desc: '4-5★ люкс қонақүй, VIP трансфер, мейрамханалар' },
      en: { title: 'Premium Luxury', desc: '4-5★ luxury hotels, VIP private transfers, fine dining' },
      ru: { title: 'Премиум', desc: '4-5★ отели, персональный трансфер, рестораны' },
    },
  };

  const handleCopyItinerary = () => {
    const text = `
=== QAZAQ HERITAGE: САПАР КАЛЬКУЛЯТОРЫ ===
Орын: ${activeDestination.name[language]} (${activeDestination.cityDistrict[language]})
Бағыт: ${cityLabels[departureCity][language]} → ${activeDestination.name[language]}
Саяхатшылар: ${travelers} адам | Ұзақтығы: ${days} күн
Көлік түрі: ${transportMode.toUpperCase()} | Деңгейі: ${comfortLevel.toUpperCase()}
Шетелдік тариф: ${isForeigner ? 'Иә' : 'Жоқ'}

ШЫҒЫНДАР ТАРАТЫЛЫМЫ:
${costResult.items
  .map(
    (item) =>
      `• ${item.title[language]}: ${formatPrice(item.amountKzt, currency)} [${item.status}]`
  )
  .join('\n')}

ЖАЛПЫ СОМАСЫ: ${formatPrice(costResult.totalKzt, currency)}
(1 адамға шаққанда: ~${formatPrice(costResult.perPersonKzt, currency)})

* Билеттер ресми мемлекеттік бұйрықтар мен мұражай тарифтерінен алынды.
https://qazaq-heritage.kz
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="trip-estimator-section" className="py-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF7EC]/50 via-white to-[#FDFCFA] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF7EC] border border-[#E69A34]/35 text-[#E67E00] text-xs font-semibold tracking-wider uppercase mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>
              {language === 'kk'
                ? 'Мөлдір сапар шығындары'
                : language === 'ru'
                ? 'Прозрачный расчет бюджета'
                : 'Transparent Budget Calculator'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            {language === 'kk' ? (
              <>
                Сапарыңызды алдын ала{' '}
                <span className="bg-gradient-to-r from-[#E67E00] to-amber-600 bg-clip-text text-transparent font-black">
                  дәл есептеңіз
                </span>
              </>
            ) : language === 'ru' ? (
              <>
                Рассчитайте поездку{' '}
                <span className="bg-gradient-to-r from-[#E67E00] to-amber-600 bg-clip-text text-transparent font-black">
                  с точностью до тенге
                </span>
              </>
            ) : (
              <>
                Plan & Calculate Your Visit with{' '}
                <span className="bg-gradient-to-r from-[#E67E00] to-amber-600 bg-clip-text text-transparent font-black">
                  Total Transparency
                </span>
              </>
            )}
          </h2>

          <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
            {language === 'kk'
              ? 'Жасырын шығындарсыз: ресми бекітілген музей билеттері, шынайы теміржол мен ұшақ билеттері, жатын орын және тамақтану құны бір жерде.'
              : language === 'ru'
              ? 'Без скрытых наценок: официальные цены на музейные билеты, реальные тарифы на поезда, перелеты, отели и питание.'
              : 'Zero hidden surprises: officially verified museum entrance fees, realistic flight/train connections, verified accommodation and meals.'}
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-white backdrop-blur-md border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="space-y-6">
              {/* 1. Destination Select */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#E67E00] mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#E67E00]" />
                    {language === 'kk'
                      ? 'Тарихи ескерткішті таңдаңыз'
                      : language === 'ru'
                      ? 'Выберите исторический памятник'
                      : 'Choose Historical Destination'}
                  </span>
                  <span className="text-[11px] text-slate-600 font-normal">
                    {DESTINATIONS.length}{' '}
                    {language === 'kk' ? 'ескерткіш бар' : 'destinations'}
                  </span>
                </label>
                <select
                  value={selectedDestinationId}
                  onChange={(e) => {
                    const found = DESTINATIONS.find((d) => d.id === e.target.value);
                    if (found) {
                      setSelectedDestinationId(found.id);
                      setEstimatorTargetDestination(found);
                    }
                  }}
                  aria-label={
                    language === 'kk'
                      ? 'Тарихи ескерткішті таңдаңыз'
                      : language === 'ru'
                      ? 'Выберите исторический памятник'
                      : 'Choose Historical Destination'
                  }
                  className="w-full bg-slate-50/90 border border-slate-300 hover:border-amber-500/60 focus:border-amber-500 rounded-xl px-4 py-3.5 text-slate-900 font-medium text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors cursor-pointer"
                >
                  {DESTINATIONS.map((dest) => (
                    <option key={dest.id} value={dest.id} className="bg-white text-slate-900">
                      {dest.name[language]} — {dest.cityDistrict[language]}
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Departure City & Tourist Origin Toggle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#E67E00]" />
                    {language === 'kk'
                      ? 'Шығу нүктесі (Қала)'
                      : language === 'ru'
                      ? 'Город отправления'
                      : 'Departure Hub'}
                  </label>
                  <select
                    value={departureCity}
                    onChange={(e) =>
                      setDepartureCity(
                        e.target.value as 'almaty' | 'astana' | 'shymkent' | 'aktau' | 'nearby_hub'
                      )
                    }
                    aria-label={
                      language === 'kk'
                        ? 'Шығу нүктесі (Қала)'
                        : language === 'ru'
                        ? 'Город отправления'
                        : 'Departure Hub'
                    }
                    className="w-full bg-slate-50/90 border border-slate-300 hover:border-amber-500/60 focus:border-amber-500 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors cursor-pointer"
                  >
                    <option value="almaty">Алматы (ALA International)</option>
                    <option value="astana">Астана (NQZ International)</option>
                    <option value="shymkent">Шымкент (CIT International)</option>
                    <option value="aktau">Ақтау (SCO International)</option>
                    <option value="nearby_hub">
                      {language === 'kk'
                        ? 'Жақын облыс орталығы'
                        : language === 'ru'
                        ? 'Ближайший обл. центр'
                        : 'Regional Hub'}
                    </option>
                  </select>
                </div>

                {/* Foreigner Pricing Toggle */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#E67E00]" />
                    {language === 'kk'
                      ? 'Азаматтық мәртебесі'
                      : language === 'ru'
                      ? 'Гражданство'
                      : 'Visitor Status'}
                  </label>
                  <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setIsForeigner(false)}
                      className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${
                        !isForeigner
                          ? 'bg-[#FFE8CC] border border-amber-500/50 text-[#A95700] font-semibold'
                          : 'text-slate-600 hover:text-slate-800'
                      }`}
                    >
                      {language === 'kk'
                        ? 'ҚР азаматы'
                        : language === 'ru'
                        ? 'Резидент РК'
                        : 'KZ Resident'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsForeigner(true)}
                      className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${
                        isForeigner
                          ? 'bg-[#FFE8CC] border border-amber-500/50 text-[#A95700] font-semibold'
                          : 'text-slate-600 hover:text-slate-800'
                      }`}
                    >
                      {language === 'kk'
                        ? 'Шетелдік турист'
                        : language === 'ru'
                        ? 'Иностранец'
                        : 'Foreign Visitor'}
                    </button>
                  </div>
                </div>
              </div>

              {/* 3. Travelers & Days Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {/* Travelers */}
                <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#E67E00]" />
                      {language === 'kk'
                        ? 'Саяхатшылар саны'
                        : language === 'ru'
                        ? 'Количество человек'
                        : 'Number of Travelers'}
                    </span>
                    <span className="text-sm font-bold text-[#E67E00]">
                      {travelers}{' '}
                      {language === 'kk' ? 'адам' : language === 'ru' ? 'чел.' : 'people'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={travelers}
                    onChange={(e) => setTravelers(parseInt(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-600 mt-1 font-mono">
                    <span>1</span>
                    <span>5</span>
                    <span>10</span>
                  </div>
                </div>

                {/* Days */}
                <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#E67E00]" />
                      {language === 'kk'
                        ? 'Сапар ұзақтығы'
                        : language === 'ru'
                        ? 'Длительность поездки'
                        : 'Trip Duration'}
                    </span>
                    <span className="text-sm font-bold text-[#E67E00]">
                      {days}{' '}
                      {language === 'kk' ? 'күн' : language === 'ru' ? 'дней' : 'days'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={days}
                    onChange={(e) => setDays(parseInt(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-600 mt-1 font-mono">
                    <span>1</span>
                    <span>5</span>
                    <span>10</span>
                  </div>
                </div>
              </div>

              {/* 4. Transport Mode */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                  {language === 'kk'
                    ? 'Қатынас көлігі түрі'
                    : language === 'ru'
                    ? 'Вид межгородового транспорта'
                    : 'Transport Mode'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    {
                      id: 'flight',
                      icon: Plane,
                      label: { kk: 'Ұшақ (Авиа)', en: 'Flight', ru: 'Самолет' },
                    },
                    {
                      id: 'train',
                      icon: Train,
                      label: { kk: 'Пойыз (ТЖ)', en: 'Train (KTZ)', ru: 'Поезд (КТЖ)' },
                    },
                    {
                      id: 'taxi',
                      icon: Car,
                      label: { kk: 'Такси / Авто', en: 'Shared Taxi', ru: 'Такси / Бусик' },
                    },
                    {
                      id: 'car',
                      icon: Compass,
                      label: { kk: 'Жеке көлік', en: 'Rental Car', ru: 'Аренда авто' },
                    },
                  ].map((mode) => {
                    const Icon = mode.icon;
                    const isSelected = transportMode === mode.id;
                    return (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() =>
                          setTransportMode(
                            mode.id as 'flight' | 'train' | 'taxi' | 'car'
                          )
                        }
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all text-xs ${
                          isSelected
                            ? 'bg-[#E67E00]/15 border-amber-500 text-[#A95700] font-semibold shadow-md shadow-amber-500/10'
                            : 'bg-slate-50/60 border-slate-200 text-slate-600 hover:text-slate-800 hover:border-slate-300'
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 mb-1.5 ${
                            isSelected ? 'text-[#E67E00]' : 'text-slate-600'
                          }`}
                        />
                        <span>{mode.label[language]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 5. Comfort Level */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                  {language === 'kk'
                    ? 'Жайлылық және сервис деңгейі'
                    : language === 'ru'
                    ? 'Уровень комфорта'
                    : 'Comfort & Service Tier'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(['budget', 'standard', 'comfort'] as const).map((level) => {
                    const isSelected = comfortLevel === level;
                    const info = comfortLabels[level][language];
                    return (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setComfortLevel(level)}
                        className={`text-left p-3.5 rounded-2xl border transition-all ${
                          isSelected
                            ? 'bg-gradient-to-b from-amber-500/20 to-amber-950/30 border-amber-500 text-slate-900 shadow-lg shadow-amber-500/10'
                            : 'bg-slate-50/50 border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-800'
                        }`}
                      >
                        <div className="font-semibold text-xs text-[#E67E00] mb-1">
                          {info.title}
                        </div>
                        <div className="text-[11px] leading-snug text-slate-600">
                          {info.desc}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Result Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border-2 border-[#E69A34]/35 rounded-3xl p-6 sm:p-7 shadow-xl relative overflow-hidden">
              {/* Gold glow top accent */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#E67E00]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#E67E00] font-mono font-bold">
                    {language === 'kk'
                      ? 'Болжамды шығын'
                      : language === 'ru'
                      ? 'Расчетный бюджет'
                      : 'Estimated Total Budget'}
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-black text-slate-900 mt-1">
                    {formatPrice(costResult.totalKzt, currency)}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                    {language === 'kk'
                      ? '1 адамға шаққанда'
                      : language === 'ru'
                      ? 'На 1 человека'
                      : 'Per person'}
                  </div>
                  <div className="text-sm font-bold text-slate-800 mt-1">
                    ~{formatPrice(costResult.perPersonKzt, currency)}
                  </div>
                </div>
              </div>

              {/* Itemized Cost Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  {language === 'kk'
                    ? 'Шығынның ашық таратылымы:'
                    : language === 'ru'
                    ? 'Детализация расходов:'
                    : 'Itemized Breakdown:'}
                </div>

                {costResult.items.map((item) => (
                  <div
                    key={item.key}
                    className="p-3.5 rounded-xl bg-slate-50/90 border border-slate-200 hover:border-[#E69A34]/60 transition-all shadow-2xs"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-800">
                          {item.title[language]}
                        </span>
                        <span
                          className={`text-[9px] uppercase tracking-wider font-mono px-1.5 py-0.5 rounded font-bold ${
                            item.status === 'VERIFIED'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                              : 'bg-amber-50 text-amber-800 border border-amber-300'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-900">
                        {formatPrice(item.amountKzt, currency)}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-600 leading-snug">
                      {item.explanation[language]}
                    </p>

                    <div className="mt-2.5 flex items-center justify-between gap-2 text-[11px] text-slate-500 border-t border-slate-200/80 pt-2">
                      <span className="truncate max-w-[170px] sm:max-w-[210px] text-slate-500 text-[10px]">
                        {item.source}
                      </span>

                      <button
                        type="button"
                        onClick={() => setSelectedOfficialCategory(item.key as OfficialCategoryKey)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-[#A95700] hover:text-[#7C3D00] border border-amber-300/80 font-bold text-[11px] transition-all hover:scale-102 active:scale-98 cursor-pointer shadow-2xs"
                        title={
                          language === 'kk'
                            ? 'Ресми мемлекеттік деректерді қарау'
                            : language === 'ru'
                            ? 'Посмотреть официальные данные'
                            : 'View verified official source'
                        }
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                        <span>
                          {language === 'kk'
                            ? 'Ресми дерек'
                            : language === 'ru'
                            ? 'Ресми дерек'
                            : 'Official Data'}
                        </span>
                        <ChevronRight className="w-3 h-3 text-amber-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons: Copy & Share */}
              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={handleCopyItinerary}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-600/20 active:scale-98 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>
                        {language === 'kk'
                          ? 'Көшірілді!'
                          : language === 'ru'
                          ? 'Скопировано!'
                          : 'Copied to Clipboard!'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-white" />
                      <span>
                        {language === 'kk'
                          ? 'Есептеуді көшіріп алу'
                          : language === 'ru'
                          ? 'Скопировать смету'
                          : 'Copy Estimate'}
                      </span>
                    </>
                  )}
                </button>
              </div>

              {/* Trust Disclaimer */}
              <div className="mt-4 p-3 rounded-xl bg-[#E67E00]/5 border border-amber-500/20 text-[11px] text-slate-600 flex items-start gap-2 leading-relaxed">
                <Info className="w-4 h-4 text-[#E67E00] flex-shrink-0 mt-0.5" />
                <span>
                  {language === 'kk'
                    ? 'Билет бағалары ҚР Мәдениет министрлігінің ресми бұйрықтарынан расталған. Көлік және қонақүй құны маусымдық орташа нарық тарифтерінен есептелді.'
                    : language === 'ru'
                    ? 'Цены на входные билеты подтверждены официальными приказами Минкультуры РК. Стоимость транспорта и проживания рассчитана по средним сезонным тарифам.'
                    : 'Ticket prices are verified against official Ministerial Decrees. Transport and accommodation costs are realistic seasonal estimates.'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Official Verification Modal */}
      {selectedOfficialCategory && (
        <OfficialSourceModal
          isOpen={!!selectedOfficialCategory}
          onClose={() => setSelectedOfficialCategory(null)}
          destination={activeDestination}
          initialCategory={selectedOfficialCategory}
          departureCity={departureCity}
          travelers={travelers}
          days={days}
        />
      )}
    </section>
  );
};
