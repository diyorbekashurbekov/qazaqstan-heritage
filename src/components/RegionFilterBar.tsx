import React from 'react';
import { useApp } from '../context/AppContext';
import { REGIONS } from '../data/regions';
import { DESTINATIONS } from '../data/destinations';
import { MapPin, Globe } from 'lucide-react';

export const RegionFilterBar: React.FC = () => {
  const { language, selectedRegion, setSelectedRegion, openRegionShowcase } = useApp();

  const getRegionCount = (regionId: string) => {
    return DESTINATIONS.filter((d) => d.regionId === regionId).length;
  };

  const labels = {
    allRegions: {
      kk: 'Барлық 17 облыс',
      en: 'All 17 Regions',
      ru: 'Все 17 областей',
    },
    filterByRegion: {
      kk: 'Өңір бойынша жылдам сүзу:',
      en: 'Quick Filter by Region:',
      ru: 'Быстрый фильтр по области:',
    },
  };

  return (
    <div className="w-full mb-8">
      <div className="flex items-center gap-2 mb-3 text-xs font-bold text-[#E67E00] uppercase tracking-wider">
        <MapPin className="w-3.5 h-3.5" />
        <span>{labels.filterByRegion[language]}</span>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* All Regions Button */}
        <button
          type="button"
          onClick={() => setSelectedRegion(null)}
          className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
            selectedRegion === null
              ? 'bg-[#E67E00] text-white border-[#E67E00] shadow-md shadow-[#E67E00]/20'
              : 'bg-white text-slate-700 border-slate-200 hover:border-[#E69A34] hover:text-slate-900 shadow-2xs'
          }`}
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{labels.allRegions[language]}</span>
          <span
            className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
              selectedRegion === null
                ? 'bg-white/20 text-white font-extrabold'
                : 'bg-slate-100 text-slate-500'
            }`}
          >
            {DESTINATIONS.length}
          </span>
        </button>

        {/* 17 Region Buttons */}
        {REGIONS.map((region) => {
          const isSelected = selectedRegion?.id === region.id;
          const count = getRegionCount(region.id);

          return (
            <button
              key={region.id}
              type="button"
              onClick={() => openRegionShowcase(region)}
              className={`shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-semibold transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-[#E67E00] text-white border-[#E67E00] shadow-md shadow-[#E67E00]/20'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-[#E69A34] hover:text-slate-900 shadow-2xs'
              }`}
            >
              <span>
                {region.name[language]
                  .replace(' облысы', '')
                  .replace(' Region', '')
                  .replace('ская область', '')
                  .replace(' область', '')}
              </span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                  isSelected
                    ? 'bg-white/25 text-white font-bold'
                    : 'bg-slate-100 text-[#E67E00] font-bold'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
