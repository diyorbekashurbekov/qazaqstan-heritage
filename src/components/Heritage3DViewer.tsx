import React, { useState, useMemo, useEffect, useRef, Suspense, lazy } from 'react';
import {
  MapPin,
  ChevronDown,
  Check,
  Search,
  Sparkles,
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { REGIONS } from '../data/regions';
import type { Language } from '../types/tourism';

const Monument3DViewer = lazy(() =>
  import('./Monument3DViewer').then((mod) => ({ default: mod.Monument3DViewer }))
);

interface Heritage3DViewerProps {
  initialDestinationId?: string;
  language: Language;
  onDestinationChange?: (destinationId: string) => void;
}

export const Heritage3DViewer: React.FC<Heritage3DViewerProps> = ({
  initialDestinationId = 'yasawi',
  language,
  onDestinationChange,
}) => {
  const [currentDestId, setCurrentDestId] = useState<string>(initialDestinationId);
  const [selectorOpen, setSelectorOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync when initialDestinationId changes
  useEffect(() => {
    if (initialDestinationId && initialDestinationId !== currentDestId) {
      setCurrentDestId(initialDestinationId);
    }
  }, [initialDestinationId]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSelectorOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentDestination = useMemo(() => {
    return DESTINATIONS.find((d) => d.id === currentDestId) || DESTINATIONS[0];
  }, [currentDestId]);

  const currentRegion = useMemo(() => {
    return (
      REGIONS.find((r) => r.id === currentDestination.regionId) || {
        name: { kk: 'Қазақстан', en: 'Kazakhstan', ru: 'Казахстан' },
      }
    );
  }, [currentDestination]);

  const filteredDestinations = useMemo(() => {
    if (!searchTerm.trim()) return DESTINATIONS;
    const q = searchTerm.toLowerCase();
    return DESTINATIONS.filter(
      (d) =>
        d.name[language].toLowerCase().includes(q) ||
        d.id.toLowerCase().includes(q)
    );
  }, [searchTerm, language]);

  const handleSelectMonument = (destId: string) => {
    setCurrentDestId(destId);
    setSelectorOpen(false);
    setSearchTerm('');
    if (onDestinationChange) {
      onDestinationChange(destId);
    }
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-amber-500/30 bg-stone-950 shadow-2xl">
      {/* 1. EMBEDDED GOOGLE ARTS & CULTURE LIVING 3D ENGINE */}
      <Suspense
        fallback={
          <div className="h-[560px] sm:h-[660px] flex flex-col items-center justify-center bg-stone-950 text-amber-400 gap-3">
            <Sparkles className="w-8 h-8 animate-spin" />
            <span className="text-sm font-semibold">
              {language === 'kk' ? '3D модель жүктелуде...' : 'Loading 3D model...'}
            </span>
          </div>
        }
      >
        <Monument3DViewer
          key={currentDestId}
          destination={currentDestination}
          language={language}
          className="h-[560px] sm:h-[660px]"
        />
      </Suspense>

      {/* 2. TOP FLOATING MONUMENT SELECTOR DROPDOWN */}
      <div ref={dropdownRef} className="absolute top-3 right-16 sm:right-28 pointer-events-auto z-40">
        <button
          type="button"
          onClick={() => setSelectorOpen(!selectorOpen)}
          className="px-3.5 py-1.5 rounded-2xl bg-stone-900/90 hover:bg-stone-850 backdrop-blur-md border border-stone-700/80 text-stone-100 shadow-xl flex items-center gap-2.5 transition-all cursor-pointer"
        >
          <div className="w-6 h-6 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-[11px] border border-amber-500/40 shrink-0">
            3D
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-[9px] text-amber-400 font-semibold uppercase tracking-wider flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5" />
              <span>{currentRegion.name[language]}</span>
            </div>
            <div className="text-xs font-bold truncate max-w-[140px]">
              {currentDestination.name[language]}
            </div>
          </div>
          <ChevronDown
            className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${
              selectorOpen ? 'rotate-180 text-amber-400' : ''
            }`}
          />
        </button>

        {/* Searchable Dropdown Popup */}
        {selectorOpen && (
          <div className="absolute top-full right-0 mt-2 w-72 sm:w-80 max-h-80 bg-stone-950/95 backdrop-blur-2xl border border-amber-500/40 rounded-2xl shadow-2xl p-2.5 z-50 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
            {/* Search input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={
                  language === 'kk'
                    ? '24 кесене немесе музей іздеу...'
                    : language === 'ru'
                    ? 'Поиск среди 24 объектов...'
                    : 'Search 24 monuments...'
                }
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                autoFocus
              />
            </div>

            {/* List of 24 monuments */}
            <div className="overflow-y-auto space-y-1 max-h-60 pr-1 no-scrollbar">
              {filteredDestinations.map((d) => {
                const isSelected = d.id === currentDestId;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => handleSelectMonument(d.id)}
                    className={`w-full text-left p-2 rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500 text-stone-950 font-bold shadow-md'
                        : 'text-stone-300 hover:bg-stone-900 hover:text-white'
                    }`}
                  >
                    <span className="truncate">{d.name[language]}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
