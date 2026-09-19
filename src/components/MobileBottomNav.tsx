import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Home,
  Map,
  Compass,
  Calculator,
  Search,
} from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { language } = useApp();

  const scrollTo = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    {
      id: 'top',
      icon: Home,
      label: { kk: 'Басты', en: 'Home', ru: 'Главная' },
    },
    {
      id: 'regions-showcase',
      icon: Compass,
      label: { kk: '17 Өңір', en: 'Regions', ru: '17 Областей' },
    },
    {
      id: 'kazakhstan-map-section',
      icon: Map,
      label: { kk: 'Карта', en: 'Map', ru: 'Карта' },
    },
    {
      id: 'destinations-catalog',
      icon: Search,
      label: { kk: 'Кесенелер', en: 'Catalog', ru: 'Каталог' },
    },
    {
      id: 'trip-estimator-section',
      icon: Calculator,
      label: { kk: 'Шығын', en: 'Budget', ru: 'Цены' },
    },
  ];

  return (
    <nav
      aria-label="Мобильді навигация"
      className="xl:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-2 py-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-slate-600 hover:text-[#E67E00] active:text-[#E67E00] active:scale-95 transition-all cursor-pointer group min-w-[56px]"
            >
              <Icon className="w-5 h-5 mb-0.5 group-hover:text-[#E67E00] transition-colors" />
              <span className="text-[10px] font-bold tracking-tight text-slate-700 group-hover:text-[#E67E00] whitespace-nowrap">
                {item.label[language]}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
