import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getAssetUrl } from '../utils/assetHelper';
import type { HistoricalDestination } from '../types/tourism';
import { getQuickTripEstimate } from '../utils/calculator';
import {
  Clock,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Calculator,
  Award,
  Heart,
  Sparkles,
} from 'lucide-react';

interface DestinationCardProps {
  destination: HistoricalDestination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const {
    language,
    formatCurrency,
    isForeigner,
    setSelectedDestination,
    openEstimatorForDestination,
    isFavorite,
    toggleFavorite,
  } = useApp();

  const [imgSrc, setImgSrc] = useState<string>(
    getAssetUrl(destination.images[0]?.url || '/images/destinations/yasawi.jpg')
  );

  React.useEffect(() => {
    setImgSrc(getAssetUrl(destination.images[0]?.url || '/images/destinations/yasawi.jpg'));
  }, [destination]);

  const ticketPrice = isForeigner
    ? destination.ticketPrices.foreignAdult
    : destination.ticketPrices.domesticAdult;

  const tripEstimate = getQuickTripEstimate(destination, isForeigner);
  const isFav = isFavorite(destination.id);

  const epochLabels: Record<string, { kk: string; en: string; ru: string }> = {
    iron_age: { kk: 'Сақ дәуірі', en: 'Saka Era', ru: 'Эпоха саков' },
    silk_road: { kk: 'Жібек Жолы', en: 'Silk Road', ru: 'Шелковый путь' },
    golden_horde: { kk: 'Алтын Орда', en: 'Golden Horde', ru: 'Золотая Орда' },
    enlightenment: { kk: 'Ағартушылық', en: 'Enlightenment', ru: 'Просвещение' },
  };

  const labels = {
    viewDetails: { kk: 'Толық паспорты', en: 'Full Passport', ru: 'Паспорт объекта' },
    estimateTrip: { kk: 'Шығынды есептеу', en: 'Plan Budget', ru: 'Расчет поездки' },
    hours: { kk: 'сағат', en: 'hours', ru: 'ч.' },
    entranceFee: { kk: 'Кіру билеті', en: 'Entry ticket', ru: 'Входной билет' },
    tripEstimateLabel: {
      kk: '2 күндік сапар:',
      en: 'Estimated 2-day trip:',
      ru: 'Сапар (2 дня):',
    },
    whatIsThere: { kk: 'Ол жерде не бар?', en: 'What is there?', ru: 'Что там есть?' },
    whyVisit: { kk: 'Туристке пайдасы:', en: 'Why visit benefit:', ru: 'Польза для туриста:' },
  };

  const topSights = (destination.whatToSee[language] || destination.whatToSee.en).slice(0, 2);

  return (
    <div className="rounded-3xl overflow-hidden flex flex-col h-full group border border-slate-200/90 hover:border-[#E69A34] transition-all duration-300 hover:shadow-xl bg-white text-slate-900 shadow-sm relative">
      {/* Image Banner */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={imgSrc}
          alt={destination.name[language]}
          loading="lazy"
          decoding="async"
          onError={() => {
            setImgSrc(getAssetUrl('/images/destinations/yasawi.jpg'));
          }}
          className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
        />

        {/* Subtle Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

        {/* Top Badges & Favorite Button */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10">
          <div className="flex items-center gap-1.5 flex-wrap">
            {destination.epoch && epochLabels[destination.epoch] && (
              <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-amber-300 border border-amber-400/30 shadow-xs">
                {epochLabels[destination.epoch][language]}
              </span>
            )}

            {destination.unescoWorldHeritage ? (
              <span className="px-2.5 py-0.5 rounded-full bg-blue-700/80 backdrop-blur-md text-[10px] font-bold text-white border border-blue-400/40 flex items-center gap-1 shadow-xs">
                <Award className="w-3 h-3" />
                UNESCO
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-emerald-400 border border-emerald-500/30 flex items-center gap-1 shadow-xs">
                <CheckCircle2 className="w-2.5 h-2.5" />
                VERIFIED
              </span>
            )}

            <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 text-[10px] font-extrabold shadow-sm flex items-center gap-1 border border-amber-300">
              <Sparkles className="w-2.5 h-2.5" />
              <span>3D</span>
            </span>
          </div>

          {/* Heart Bookmark Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(destination.id);
            }}
            className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md hover:bg-black/70 flex items-center justify-center transition-transform active:scale-90 border border-white/20 cursor-pointer shadow-xs"
            title={isFav ? 'Таңдаулылардан өшіру' : 'Таңдаулыларға қосу'}
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isFav ? 'fill-rose-500 text-rose-500' : 'text-white hover:text-rose-300'
              }`}
            />
          </button>
        </div>

        {/* Bottom Location Overlay */}
        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-xs text-white font-medium drop-shadow-md">
          <div className="flex items-center gap-1.5 truncate max-w-[70%]">
            <MapPin className="w-3.5 h-3.5 text-[#F5A623] shrink-0" />
            <span className="truncate">{destination.cityDistrict[language]}</span>
          </div>
          <div className="flex items-center gap-1 text-white/90 shrink-0">
            <Clock className="w-3 h-3 text-white/70" />
            <span>
              ~{destination.recommendedVisitDurationHours} {labels.hours[language]}
            </span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-[#E67E00] transition-colors leading-snug">
            {destination.name[language]}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {destination.shortDescription[language]}
          </p>

          {/* Quick 2 Key Highlights Pills */}
          <div className="flex items-center gap-1.5 flex-wrap mt-3">
            {topSights.map((sight, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 text-slate-700 text-[11px] font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E67E00]" />
                <span className="truncate max-w-[140px]">{sight}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & Multi-Currency Estimates Footer */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-slate-500 font-medium">{labels.entranceFee[language]}:</span>
            <span className="font-bold text-slate-900 text-sm font-mono">
              {formatCurrency(ticketPrice)}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs pb-3.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">{labels.tripEstimateLabel[language]}</span>
            <span className="font-bold text-[#E67E00] text-sm font-mono">
              {formatCurrency(tripEstimate.minKzt)} – {formatCurrency(tripEstimate.maxKzt)}
            </span>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-2 mt-3.5">
            <button
              type="button"
              onClick={() => setSelectedDestination(destination)}
              className="min-h-[44px] px-3 py-2.5 rounded-2xl border border-slate-200 hover:border-[#E67E00] text-slate-700 hover:text-[#E67E00] active:scale-95 text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1"
            >
              <span>{labels.viewDetails[language]}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => openEstimatorForDestination(destination)}
              className="min-h-[44px] px-3 py-2.5 rounded-2xl bg-[#E67E00] hover:bg-[#CC6F00] active:scale-95 text-white text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1 shadow-xs"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>{labels.estimateTrip[language]}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
