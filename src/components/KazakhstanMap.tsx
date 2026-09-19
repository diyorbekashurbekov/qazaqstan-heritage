import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { REGIONS } from '../data/regions';
import { DESTINATIONS } from '../data/destinations';
import type { Region, HistoricalDestination } from '../types/tourism';
import { MapPin, Sparkles, X, ChevronRight, Compass } from 'lucide-react';
import { formatPrice } from '../utils/calculator';

export const KazakhstanMap: React.FC = () => {
  const {
    language,
    currency,
    selectedRegion,
    setSelectedRegion,
    openRegionShowcase,
    setSelectedDestination,
    filteredDestinations,
  } = useApp();

  const [hoveredRegion, setHoveredRegion] = useState<Region | null>(null);
  const [hoveredMonument, setHoveredMonument] = useState<HistoricalDestination | null>(null);

  // Map coordinate conversion: SVG viewBox is 0 0 1000 620
  // Kazakhstan latitude: approx 40.5° to 55.5° N
  // Kazakhstan longitude: approx 46.5° to 87.5° E
  const coordsToSvg = (lat: number, lng: number) => {
    const minLat = 40.0;
    const maxLat = 55.8;
    const minLng = 46.0;
    const maxLng = 87.5;

    const x = ((lng - minLng) / (maxLng - minLng)) * 880 + 60;
    const y = ((maxLat - lat) / (maxLat - minLat)) * 480 + 60;
    return { x: Math.round(x), y: Math.round(y) };
  };

  const getRegionDestinationCount = (regionId: string) => {
    return DESTINATIONS.filter((d) => d.regionId === regionId).length;
  };

  const labels = {
    title: {
      kk: 'Қазақстанның интерактивті тарихи картасы',
      en: 'Interactive Historical Map of Kazakhstan',
      ru: 'Интерактивная историческая карта Казахстана',
    },
    subtitle: {
      kk: '17 облыс бойынша саяхаттап, әр өңірдегі сакралды ескерткіштер мен көне қалаларды таңдаңыз.',
      en: 'Navigate across all 17 regions. Hover or tap to discover historical sanctuaries and ancient settlements.',
      ru: 'Путешествуйте по 17 областям Казахстана, открывая сакральные комплексы и древние городища.',
    },
    reset: { kk: 'Барлық Қазақстанды көрсету', en: 'Show All Kazakhstan', ru: 'Показать весь Казахстан' },
    destinationsFound: { kk: 'тарихи ескерткіш табылды', en: 'historical sites found', ru: 'памятников найдено' },
    viewDetails: { kk: 'Толық паспортын қарау', en: 'View Details', ru: 'Подробнее' },
    monumentsInRegion: { kk: 'Осы облыстағы ескерткіштер:', en: 'Sites in this region:', ru: 'Объекты в этой области:' },
  };

  return (
    <section id="kazakhstan-map-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#E67E00] text-xs sm:text-sm font-bold tracking-wider uppercase mb-2">
            <Compass className="w-4 h-4" />
            <span>{language === 'kk' ? 'Басты навигация' : 'Central Navigation'}</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {labels.title[language]}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
            {labels.subtitle[language]}
          </p>
        </div>

        {selectedRegion && (
          <button
            onClick={() => setSelectedRegion(null)}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-[#A95700] text-xs font-semibold border border-amber-500/30 transition-all shadow-md"
          >
            <X className="w-4 h-4" />
            <span>{labels.reset[language]}</span>
          </button>
        )}
      </div>

      {/* Interactive Map Canvas Container */}
      <div className="relative glass-card rounded-2xl p-4 sm:p-6 lg:p-8 overflow-hidden border border-slate-200 shadow-lg shadow-2xl bg-white">
        {/* Subtle grid and ornamental watermarks */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4af3715_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        {/* Mobile-Friendly Region Quick Switcher Strip (Visible on mobile screens) */}
        <div className="sm:hidden mb-4 pb-2 border-b border-slate-100">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
            <span className="flex items-center gap-1.5 text-[#E67E00]">
              <Compass className="w-3.5 h-3.5" />
              {language === 'kk' ? 'Өңірді картадан таңдаңыз:' : 'Select region on map:'}
            </span>
            {selectedRegion && (
              <button
                type="button"
                onClick={() => setSelectedRegion(null)}
                className="text-[11px] text-slate-500 hover:text-slate-800 underline"
              >
                {language === 'kk' ? 'Тазалау' : 'Clear'}
              </button>
            )}
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none -mx-2 px-2">
            {REGIONS.map((reg) => {
              const isSelected = selectedRegion?.id === reg.id;
              const count = getRegionDestinationCount(reg.id);
              return (
                <button
                  key={reg.id}
                  type="button"
                  onClick={() => openRegionShowcase(reg)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#E67E00] text-white border-[#E67E00] shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  <span>{reg.name[language].split(' ')[0]}</span>
                  {count > 0 && <span className="ml-1 text-[10px] opacity-75">({count})</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Floating Active/Hovered Region Status Panel (Desktop only) */}
        <div className="hidden sm:block absolute top-6 left-6 z-20 pointer-events-none max-w-xs transition-all duration-200">
          {hoveredRegion || selectedRegion ? (
            <div className="bg-white/95 p-3.5 rounded-xl border border-[#E69A34]/40 shadow-xl backdrop-blur-md transition-all duration-150">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#E67E00] block mb-1">
                {(hoveredRegion || selectedRegion)?.center[language]}
              </span>
              <h3 className="text-base font-bold text-slate-900">
                {(hoveredRegion || selectedRegion)?.name[language]}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-snug line-clamp-2">
                {(hoveredRegion || selectedRegion)?.description[language]}
              </p>
              <div className="mt-2.5 pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-[#A95700] font-semibold">
                  {getRegionDestinationCount((hoveredRegion || selectedRegion)?.id || '')}{' '}
                  {labels.destinationsFound[language]}
                </span>
                <span className="text-slate-500 text-[10px] flex items-center">
                  {language === 'kk' ? 'Таңдау үшін басыңыз' : 'Click to filter'} →
                </span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 bg-white/95 px-3.5 py-2 rounded-lg border border-slate-200 text-xs text-slate-500 shadow-sm backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-[#E67E00]" />
              <span>{language === 'kk' ? 'Облысты көру үшін үстіне апарыңыз' : 'Hover over any region to explore'}</span>
            </div>
          )}
        </div>

        {/* SVG Interactive Map */}
        <div className="w-full aspect-[1000/620] relative">
          <svg
            viewBox="0 0 1000 620"
            className="w-full h-full select-none"
            style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.07))' }}
          >
            {/* Caspian and Aral sea stylization accents */}
            <path
              d="M 20 380 Q 60 440 40 560 L 10 560 Z"
              fill="#E0F2FE"
              stroke="#BAE6FD"
              strokeWidth="1.5"
              opacity="0.8"
              className="pointer-events-none"
            />
            <text x="35" y="470" fill="#0369A1" fontSize="12" fontStyle="italic" className="select-none pointer-events-none">
              Caspian Sea
            </text>

            <path
              d="M 270 430 Q 300 450 290 490 Q 260 480 270 430 Z"
              fill="#E0F2FE"
              stroke="#BAE6FD"
              strokeWidth="1"
              opacity="0.8"
              className="pointer-events-none"
            />
            <text x="270" y="465" fill="#0369A1" fontSize="10" fontStyle="italic" className="select-none pointer-events-none">
              Aral
            </text>

            <path
              d="M 680 430 Q 750 420 730 450 Q 660 450 680 430 Z"
              fill="#E0F2FE"
              stroke="#BAE6FD"
              strokeWidth="1"
              opacity="0.8"
              className="pointer-events-none"
            />
            <text x="690" y="440" fill="#0369A1" fontSize="10" fontStyle="italic" className="select-none pointer-events-none">
              Balkhash
            </text>

            {/* LAYER 1: 17 Regional Polygons */}
            <g id="map-regions-layer">
              {REGIONS.map((region) => {
                const isSelected = selectedRegion?.id === region.id;
                const isHovered = hoveredRegion?.id === region.id;
                const destCount = getRegionDestinationCount(region.id);

                let fillColor = '#F8FAFC';
                if (destCount > 0) fillColor = '#FEF3C7';
                if (isHovered) fillColor = '#FDE68A';
                if (isSelected) fillColor = '#F59E0B';

                let strokeColor = isSelected
                  ? '#B45309'
                  : isHovered
                  ? '#D97706'
                  : destCount > 0
                  ? '#FBBF24'
                  : '#CBD5E1';

                return (
                  <path
                    key={region.id}
                    d={region.svgPath}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={isSelected ? 3 : isHovered ? 2.2 : 1.2}
                    className="cursor-pointer transition-colors duration-150"
                    onMouseEnter={() => setHoveredRegion(region)}
                    onMouseLeave={() => setHoveredRegion((prev) => (prev?.id === region.id ? null : prev))}
                    onClick={() => openRegionShowcase(region)}
                  />
                );
              })}
            </g>

            {/* LAYER 2: Region Labels & Centered Badge Pills (Always rendered on top of polygons, never clipped) */}
            <g id="map-labels-layer" className="pointer-events-none select-none">
              {REGIONS.map((region) => {
                const isSelected = selectedRegion?.id === region.id;
                const isHovered = hoveredRegion?.id === region.id;
                const destCount = getRegionDestinationCount(region.id);
                const shortName = region.name[language].split(' ')[0];

                return (
                  <g key={`label-${region.id}`}>
                    {/* Region Centroid Label */}
                    <text
                      x={region.svgLabelPos.x}
                      y={region.svgLabelPos.y - 2}
                      textAnchor="middle"
                      fill={isSelected ? '#78350F' : isHovered ? '#B45309' : '#0F172A'}
                      fontSize={isSelected ? '12.5' : '11.5'}
                      fontWeight="700"
                      className="transition-colors select-none"
                    >
                      {shortName}
                    </text>

                    {/* Centered Count Badge Pill directly below label (No overlap!) */}
                    {destCount > 0 && (
                      <g transform={`translate(${region.svgLabelPos.x}, ${region.svgLabelPos.y + 11})`}>
                        <rect
                          x="-14"
                          y="-7"
                          width="28"
                          height="14"
                          rx="7"
                          fill={isSelected ? '#B45309' : isHovered ? '#D97706' : '#EA580C'}
                          className="transition-colors"
                        />
                        <text
                          x="0"
                          y="3.5"
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize="9"
                          fontWeight="bold"
                        >
                          {destCount}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </g>

            {/* LAYER 3: Monument Pins across Kazakhstan */}
            <g id="map-pins-layer">
              {DESTINATIONS.map((dest) => {
                const svgCoord = coordsToSvg(dest.coordinates.lat, dest.coordinates.lng);
                const isFiltered = filteredDestinations.some((d) => d.id === dest.id);
                const isRegionMatch = !selectedRegion || selectedRegion.id === dest.regionId;
                const isHovered = hoveredMonument?.id === dest.id;

                if (!isRegionMatch || !isFiltered) return null;

                return (
                  <g
                    key={dest.id}
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDestination(dest);
                    }}
                    onMouseEnter={() => {
                      setHoveredMonument(dest);
                      const parent = REGIONS.find((r) => r.id === dest.regionId);
                      if (parent) setHoveredRegion(parent);
                    }}
                    onMouseLeave={() => {
                      setHoveredMonument((prev) => (prev?.id === dest.id ? null : prev));
                    }}
                  >
                    {/* Generous static transparent hit circle (r=22) that NEVER moves or shifts */}
                    <circle
                      cx={svgCoord.x}
                      cy={svgCoord.y}
                      r="22"
                      fill="transparent"
                      className="cursor-pointer"
                    />

                    {/* Glowing halo */}
                    <circle
                      cx={svgCoord.x}
                      cy={svgCoord.y}
                      r={dest.unescoWorldHeritage ? 11 : 8}
                      fill={dest.unescoWorldHeritage ? '#00e5ff' : '#d4af37'}
                      opacity={isHovered ? 0.6 : 0.25}
                      className="pointer-events-none"
                      style={{ pointerEvents: 'none' }}
                    />

                    {/* Visible Pin Core (Controlled via SVG attributes, NO transform scale jumping!) */}
                    <circle
                      cx={svgCoord.x}
                      cy={svgCoord.y}
                      r={isHovered ? (dest.unescoWorldHeritage ? 9 : 7.5) : (dest.unescoWorldHeritage ? 7.5 : 5.5)}
                      fill={dest.unescoWorldHeritage ? '#0891b2' : '#d97706'}
                      stroke="#ffffff"
                      strokeWidth={isHovered ? 2.5 : 1.5}
                      className="pointer-events-none transition-all duration-150"
                      style={{ pointerEvents: 'none' }}
                    />

                    {/* Star icon inside for UNESCO */}
                    {dest.unescoWorldHeritage && (
                      <circle
                        cx={svgCoord.x}
                        cy={svgCoord.y}
                        r={isHovered ? 2.5 : 2}
                        fill="#ffffff"
                        className="pointer-events-none"
                        style={{ pointerEvents: 'none' }}
                      />
                    )}
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Hovered Monument Interactive Floating Card */}
          {hoveredMonument && (() => {
            const coord = coordsToSvg(hoveredMonument.coordinates.lat, hoveredMonument.coordinates.lng);
            const pinX = (coord.x / 1000) * 100;
            const pinY = (coord.y / 620) * 100;
            const showAbove = pinY >= 26;

            return (
              <div
                key={hoveredMonument.id}
                className="hidden sm:block absolute z-30 pointer-events-none bg-white/95 border border-amber-500/50 rounded-xl p-3 shadow-2xl backdrop-blur-md w-64 select-none transition-all duration-100"
                style={{
                  left: `${Math.min(78, Math.max(22, pinX))}%`,
                  top: `${pinY}%`,
                  transform: showAbove ? 'translate(-50%, calc(-100% - 16px))' : 'translate(-50%, 16px)',
                }}
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E67E00]">
                    {hoveredMonument.cityDistrict[language]}
                  </span>
                  {hoveredMonument.unescoWorldHeritage && (
                    <span className="text-[9px] bg-cyan-950 text-cyan-300 border border-cyan-500/40 px-1.5 py-0.5 rounded font-semibold">
                      UNESCO
                    </span>
                  )}
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-tight">
                  {hoveredMonument.name[language]}
                </h4>
                <p className="text-[11px] text-slate-600 line-clamp-2 mt-1">
                  {hoveredMonument.shortDescription[language]}
                </p>
                <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-600">
                    {formatPrice(
                      hoveredMonument.ticketPrices.foreignAdult,
                      currency
                    )}
                  </span>
                  <span className="text-[10px] font-semibold text-[#A95700] flex items-center">
                    {labels.viewDetails[language]} <ChevronRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Selected Region Destinations Quick Preview Strip */}
        {selectedRegion && (
          <div className="mt-6 pt-5 border-t border-slate-200 animate-fadeIn">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-[#A95700] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#E67E00]" />
                {labels.monumentsInRegion[language]} {selectedRegion.name[language]}
              </h4>
              <span className="text-xs text-slate-500">
                {getRegionDestinationCount(selectedRegion.id)} {labels.destinationsFound[language]}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {DESTINATIONS.filter((d) => d.regionId === selectedRegion.id).map((dest) => (
                <div
                  key={dest.id}
                  onClick={() => setSelectedDestination(dest)}
                  className="p-3 rounded-xl bg-white/70 hover:bg-slate-800 border border-slate-200 hover:border-amber-500/50 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 group-hover:text-[#E67E00] transition-colors">
                      {dest.name[language]}
                    </h5>
                    <span className="text-[10px] text-slate-500 block mt-0.5">
                      {dest.historicalPeriod[language]}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#E67E00] bg-amber-500/10 px-2 py-1 rounded">
                    {formatPrice(dest.ticketPrices.foreignAdult, currency)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
