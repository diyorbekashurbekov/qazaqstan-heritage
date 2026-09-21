import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import type { Language, Currency, HistoricalDestination, Region, HistoricalEpoch } from '../types/tourism';
import { DESTINATIONS } from '../data/destinations';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  formatCurrency: (amountKzt: number) => string;
  isForeigner: boolean;
  setIsForeigner: (isForeign: boolean) => void;
  selectedRegion: Region | null;
  setSelectedRegion: (region: Region | null) => void;
  selectedDestination: HistoricalDestination | null;
  setSelectedDestination: (dest: HistoricalDestination | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedEpoch: HistoricalEpoch;
  setSelectedEpoch: (epoch: HistoricalEpoch) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  showFavoritesOnly: boolean;
  setShowFavoritesOnly: (show: boolean) => void;
  isResearchModalOpen: boolean;
  setIsResearchModalOpen: (open: boolean) => void;
  isShugylaModalOpen: boolean;
  setIsShugylaModalOpen: (open: boolean) => void;
  shugylaActiveTab: 'timeline' | 'calligraphy' | 'reconstruction';
  setShugylaActiveTab: (tab: 'timeline' | 'calligraphy' | 'reconstruction') => void;
  open3DViewer: (dest?: HistoricalDestination) => void;
  showcaseRegion: Region | null;
  setShowcaseRegion: (region: Region | null) => void;
  openRegionShowcase: (region: Region) => void;
  isAudioPlaying: boolean;
  setIsAudioPlaying: (playing: boolean) => void;
  filteredDestinations: HistoricalDestination[];
  openEstimatorForDestination: (dest: HistoricalDestination) => void;
  estimatorTargetDestination: HistoricalDestination | null;
  setEstimatorTargetDestination: (dest: HistoricalDestination | null) => void;
  resetAllFilters: () => void;
  isShareModalOpen: boolean;
  setIsShareModalOpen: (open: boolean) => void;
  shareTarget: { title?: string; text?: string; url?: string } | null;
  openShareModal: (target?: { title?: string; text?: string; url?: string }) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Exchange rates against 1 unit of foreign currency in KZT
const RATES: Record<Currency, { rate: number; symbol: string; pos: 'prefix' | 'suffix' }> = {
  KZT: { rate: 1, symbol: '₸', pos: 'suffix' },
  USD: { rate: 480, symbol: '$', pos: 'prefix' },
  EUR: { rate: 520, symbol: '€', pos: 'prefix' },
  CNY: { rate: 67, symbol: '¥', pos: 'prefix' },
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('kk');
  const [currency, setCurrency] = useState<Currency>('KZT');
  const [isForeigner, setIsForeigner] = useState<boolean>(true);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<HistoricalDestination | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedEpoch, setSelectedEpoch] = useState<HistoricalEpoch>('all');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);
  const [isResearchModalOpen, setIsResearchModalOpen] = useState<boolean>(false);
  const [isShugylaModalOpen, setIsShugylaModalOpen] = useState<boolean>(false);
  const [shugylaActiveTab, setShugylaActiveTab] = useState<'timeline' | 'calligraphy' | 'reconstruction'>('timeline');
  const [showcaseRegion, setShowcaseRegion] = useState<Region | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [estimatorTargetDestination, setEstimatorTargetDestination] = useState<HistoricalDestination | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [shareTarget, setShareTarget] = useState<{ title?: string; text?: string; url?: string } | null>(null);

  const openShareModal = (target?: { title?: string; text?: string; url?: string }) => {
    setShareTarget(target || null);
    setIsShareModalOpen(true);
  };

  const open3DViewer = (dest?: HistoricalDestination) => {
    if (dest) {
      setSelectedDestination(dest);
    }
    setShugylaActiveTab('reconstruction');
    setIsShugylaModalOpen(true);
  };

  const openRegionShowcase = (region: Region) => {
    setShowcaseRegion(region);
    setSelectedRegion(region);
  };

  // Favorites stored in localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('qazaq_heritage_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('qazaq_heritage_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isFavorite = (id: string) => favorites.includes(id);

  // Multi-currency formatting function
  const formatCurrency = (amountKzt: number): string => {
    const config = RATES[currency];
    const converted = amountKzt / config.rate;
    if (currency === 'KZT') {
      return `${Math.round(converted).toLocaleString('ru-RU')} ${config.symbol}`;
    }
    // Foreign currency
    const formatted = converted < 10 ? converted.toFixed(1) : Math.round(converted).toLocaleString('en-US');
    return config.pos === 'prefix' ? `${config.symbol}${formatted}` : `${formatted} ${config.symbol}`;
  };

  const openEstimatorForDestination = (dest: HistoricalDestination) => {
    setEstimatorTargetDestination(dest);
    const element = document.getElementById('trip-estimator-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resetAllFilters = () => {
    setSelectedRegion(null);
    setSelectedCategory('all');
    setSelectedEpoch('all');
    setSearchQuery('');
    setShowFavoritesOnly(false);
  };

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((item) => {
      // Filter by favorites
      if (showFavoritesOnly && !favorites.includes(item.id)) {
        return false;
      }
      // Filter by historical epoch
      if (selectedEpoch !== 'all' && item.epoch !== selectedEpoch) {
        return false;
      }
      // Filter by region if active
      if (selectedRegion && item.regionId !== selectedRegion.id) {
        return false;
      }
      // Filter by category
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'unesco' && !item.unescoWorldHeritage) {
          return false;
        }
        if (selectedCategory !== 'unesco' && item.category !== selectedCategory) {
          return false;
        }
      }
      // Filter by search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName =
          item.name.kk.toLowerCase().includes(q) ||
          item.name.en.toLowerCase().includes(q) ||
          item.name.ru.toLowerCase().includes(q);
        const matchRegion =
          item.cityDistrict.kk.toLowerCase().includes(q) ||
          item.cityDistrict.en.toLowerCase().includes(q) ||
          item.cityDistrict.ru.toLowerCase().includes(q);
        const matchDesc =
          item.shortDescription.kk.toLowerCase().includes(q) ||
          item.shortDescription.en.toLowerCase().includes(q) ||
          item.shortDescription.ru.toLowerCase().includes(q);
        const matchPeriod =
          item.historicalPeriod.kk.toLowerCase().includes(q) ||
          item.historicalPeriod.en.toLowerCase().includes(q) ||
          item.historicalPeriod.ru.toLowerCase().includes(q);

        return matchName || matchRegion || matchDesc || matchPeriod;
      }
      return true;
    });
  }, [selectedRegion, selectedCategory, selectedEpoch, searchQuery, showFavoritesOnly, favorites]);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        formatCurrency,
        isForeigner,
        setIsForeigner,
        selectedRegion,
        setSelectedRegion,
        selectedDestination,
        setSelectedDestination,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedEpoch,
        setSelectedEpoch,
        favorites,
        toggleFavorite,
        isFavorite,
        showFavoritesOnly,
        setShowFavoritesOnly,
        isResearchModalOpen,
        setIsResearchModalOpen,
        isShugylaModalOpen,
        setIsShugylaModalOpen,
        shugylaActiveTab,
        setShugylaActiveTab,
        open3DViewer,
        showcaseRegion,
        setShowcaseRegion,
        openRegionShowcase,
        isAudioPlaying,
        setIsAudioPlaying,
        filteredDestinations,
        openEstimatorForDestination,
        estimatorTargetDestination,
        setEstimatorTargetDestination,
        resetAllFilters,
        isShareModalOpen,
        setIsShareModalOpen,
        shareTarget,
        openShareModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
