import React, { useState, useEffect } from 'react';
import {
  X,
  ShieldCheck,
  Building,
  Train,
  Car,
  Utensils,
  Ticket,
  ExternalLink,
  CheckCircle2,
  FileText,
  MapPin,
  Lock,
  RotateCw,
  Globe,
  Search,
  Download,
  Check,
  Compass,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import type { HistoricalDestination } from '../types/tourism';
import { REGIONS } from '../data/regions';
import {
  getOfficialCategoryData,
  type OfficialCategoryKey,
} from '../data/officialSourcesData';
import {
  getRegionalPortals,
} from '../data/regionalPortalsData';

interface OfficialSourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: HistoricalDestination;
  initialCategory: OfficialCategoryKey;
  departureCity: string;
  travelers: number;
  days: number;
}

export const OfficialSourceModal: React.FC<OfficialSourceModalProps> = ({
  isOpen,
  onClose,
  destination,
  initialCategory,
  departureCity,
  travelers,
  days,
}) => {
  const { language, isForeigner } = useApp();
  const [activeCategory, setActiveCategory] = useState<OfficialCategoryKey>(initialCategory);
  const [viewMode, setViewMode] = useState<'live_web' | 'dossier'>('live_web');
  const [selectedRegionId, setSelectedRegionId] = useState<string>(destination.regionId);
  const [tableSearch, setTableSearch] = useState<string>('');
  const [downloading, setDownloading] = useState<boolean>(false);

  // Sync category and region when props change
  useEffect(() => {
    setActiveCategory(initialCategory);
    setSelectedRegionId(destination.regionId);
    setTableSearch('');
  }, [initialCategory, destination.regionId]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Active target destination clone with current selected region (for testing all 17 regions live)
  const currentTargetDestination: HistoricalDestination = {
    ...destination,
    regionId: selectedRegionId,
  };

  const currentData = getOfficialCategoryData(
    activeCategory,
    currentTargetDestination,
    departureCity,
    travelers,
    days,
    isForeigner,
    language
  );

  const activeRegionObj = REGIONS.find((r) => r.id === selectedRegionId) || REGIONS[0];
  const activeRegionPortals = getRegionalPortals(selectedRegionId);
  const activeCategoryPortal = activeRegionPortals[activeCategory];

  const categories: { key: OfficialCategoryKey; label: string; icon: React.ReactNode }[] = [
    {
      key: 'food',
      label: language === 'kk' ? 'Тамақтану' : language === 'ru' ? 'Питание' : 'Food & Dining',
      icon: <Utensils className="w-4 h-4" />,
    },
    {
      key: 'accommodation',
      label: language === 'kk' ? 'Қонақүй' : language === 'ru' ? 'Отели' : 'Hotels & Stay',
      icon: <Building className="w-4 h-4" />,
    },
    {
      key: 'transport',
      label: language === 'kk' ? 'Көлік & Теміржол' : language === 'ru' ? 'Транспорт' : 'Transport & Rail',
      icon: <Train className="w-4 h-4" />,
    },
    {
      key: 'local_transport',
      label: language === 'kk' ? 'Такси & Жолдар' : language === 'ru' ? 'Такси и дороги' : 'Taxi & Roads',
      icon: <Car className="w-4 h-4" />,
    },
    {
      key: 'entrance',
      label: language === 'kk' ? 'Билеттер & Музей' : language === 'ru' ? 'Билеты и музеи' : 'Tickets & Heritage',
      icon: <Ticket className="w-4 h-4" />,
    },
  ];

  const filteredTableRows = currentData.livePortal.tableRows.filter((row) => {
    if (!tableSearch.trim()) return true;
    const query = tableSearch.toLowerCase();
    return (
      row.item[language].toLowerCase().includes(query) ||
      row.codeOrCategory.toLowerCase().includes(query) ||
      row.priceKzt.toLowerCase().includes(query)
    );
  });


  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert(
        language === 'kk'
          ? `«${currentData.livePortal.downloadDocumentName[language]}» ресми верификацияланған мемлекеттік құжаты сәтті жүктелді.`
          : language === 'ru'
          ? `Официальный документ «${currentData.livePortal.downloadDocumentName[language]}» успешно загружен.`
          : `Official verified state document "${currentData.livePortal.downloadDocumentName[language]}" downloaded.`
      );
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      {/* Modal Dialog Container */}
      <div
        className="relative w-full max-w-5xl max-h-[94vh] flex flex-col bg-[#FDFCF9] rounded-2xl sm:rounded-3xl shadow-2xl border border-amber-200/90 overflow-hidden text-slate-800"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header with Portal Branding & Destination Info */}
        <div className="p-3 sm:p-5 border-b border-amber-200/60 bg-gradient-to-r from-[#FFFBF2] via-[#FFF8E7] to-[#FFF3D6] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/25 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span>{activeCategoryPortal.badge[language]}</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {currentData.legalFramework.updateDate}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-serif font-bold text-slate-900 mt-0.5 flex items-center gap-2">
                <span>{currentData.title[language]}</span>
              </h3>
              <div className="flex items-center gap-2 text-xs text-amber-900/80 mt-0.5">
                <MapPin className="w-3 h-3 text-amber-600 shrink-0" />
                <span className="font-semibold">{activeRegionObj.name[language]}</span>
                <span>•</span>
                <span className="text-amber-950 font-medium">{activeCategoryPortal.portalName[language]}</span>
              </div>
            </div>
          </div>

          {/* View Mode Switcher and Close Button */}
          <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
            <div className="bg-white/90 p-1 rounded-xl border border-slate-200 flex gap-1 shadow-2xs">
              <button
                type="button"
                onClick={() => setViewMode('live_web')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'live_web'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{language === 'kk' ? 'Ресми сайт беті' : language === 'ru' ? 'Вид сайта онлайн' : 'Live Portal'}</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('dossier')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'dossier'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{language === 'kk' ? 'Сараптама' : language === 'ru' ? 'Досье' : 'Dossier'}</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 flex items-center justify-center border border-slate-200 shadow-xs transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5 Topic Category Tabs */}
        <div className="px-3 sm:px-6 py-2 bg-white border-b border-slate-200 overflow-x-auto no-scrollbar flex gap-2 shrink-0">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.key);
                  setTableSearch('');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white border-amber-600 shadow-sm shadow-amber-500/20'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-amber-300'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* 17 Regions Quick Switcher Pill Bar */}
        <div className="px-3 sm:px-6 py-2 bg-slate-50 border-b border-slate-200 flex items-center gap-3 overflow-x-auto no-scrollbar shrink-0">
          <div className="flex items-center gap-1.5 shrink-0 text-[11px] font-bold text-slate-600">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span className="hidden sm:inline">
              {language === 'kk' ? 'Өңірді таңдау:' : language === 'ru' ? 'Выбрать регион:' : 'Select Region:'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {REGIONS.map((r) => {
              const isSelected = r.id === selectedRegionId;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setSelectedRegionId(r.id)}
                  title={r.name[language]}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all flex items-center gap-1 cursor-pointer border ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span>{r.name[language].replace(' облысы', '').replace(' область', '')}</span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Main Area */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-4">
          {viewMode === 'live_web' ? (
            /* ============================================================ */
            /* 1. LIVE WEB INSPECTOR (Direct view of that specific topic page) */
            /* ============================================================ */
            <div className="rounded-2xl border border-slate-300/80 bg-white shadow-lg overflow-hidden flex flex-col">
              {/* Browser Window Chrome Top Bar */}
              <div className="px-3 sm:px-4 py-2 bg-slate-100/90 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>

                {/* Official Verified Portal Identity Banner */}
                <div className="flex-1 max-w-xl mx-auto w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300/80 text-xs text-slate-800 flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-2 truncate">
                    <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-slate-800 truncate">
                      {activeCategoryPortal.portalName[language]}
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold shrink-0 ml-2">
                    {language === 'kk' ? 'Мемлекеттік ресми жүйе' : language === 'ru' ? 'Государственная система' : 'Official State System'}
                  </span>
                </div>

                {/* Direct Open in Original Website Button */}
                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <a
                    href={activeCategoryPortal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white text-xs font-bold transition-all flex items-center gap-1.5 hover:scale-102 active:scale-98 shadow-xs"
                  >
                    <span>
                      {activeCategory === 'food'
                        ? (language === 'kk' ? '2GIS-тен мейрамханаларды ашу' : language === 'ru' ? 'Заведения в 2GIS' : 'View on 2GIS')
                        : activeCategory === 'accommodation'
                        ? (language === 'kk' ? 'Қонақүйлерді көру' : language === 'ru' ? 'Смотреть отели' : 'View Hotels')
                        : activeCategory === 'transport'
                        ? (language === 'kk' ? 'Билет порталын ашу' : language === 'ru' ? 'Портал билетов' : 'Open Ticket Portal')
                        : activeCategory === 'local_transport'
                        ? (language === 'kk' ? 'Маршруттарды көру (2GIS)' : language === 'ru' ? 'Маршруты (2GIS)' : 'Routes on 2GIS')
                        : (language === 'kk' ? 'Ресми сайтты ашу' : language === 'ru' ? 'Открыть сайт' : 'Open Website')}
                    </span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Simulated Government Official Portal Web Page Body */}
              <div className="p-4 sm:p-6 space-y-5 bg-[#FAF9F5]/40">
                {/* Official Web Page Header */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-amber-700">
                      <ShieldCheck className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        {activeCategoryPortal.portalName[language]}
                      </div>
                      <h4 className="text-base sm:text-lg font-serif font-bold text-slate-900 mt-0.5">
                        {currentData.livePortal.headline[language]}
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {activeCategoryPortal.description[language]}
                      </p>
                    </div>
                  </div>

                  <div className="flex md:flex-col items-center md:items-end justify-between gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 font-bold">
                      {currentData.livePortal.officialDocumentNumber || 'REG-KZ-2026'}
                    </span>
                    <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{activeCategoryPortal.badge[language]}</span>
                    </span>
                  </div>
                </div>

                {/* Table Filter Toolbar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={tableSearch}
                      onChange={(e) => setTableSearch(e.target.value)}
                      placeholder={
                        language === 'kk'
                          ? `${activeRegionObj.name[language]} бойынша іздеу...`
                          : `Поиск по данным (${activeRegionObj.name[language]})...`
                      }
                      className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 shadow-2xs"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleDownload}
                      disabled={downloading}
                      className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer"
                    >
                      {downloading ? (
                        <>
                          <RotateCw className="w-3 h-3 animate-spin text-amber-600" />
                          <span>{language === 'kk' ? 'Жүктелуде...' : 'Загрузка...'}</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3 h-3 text-slate-600" />
                          <span>PDF / Бюллетень</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Authentic Government Interactive Data Table */}
                <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-100/90 border-b border-slate-200 text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                          {currentData.livePortal.tableHeaders[language].map((header, idx) => (
                            <th key={idx} className="p-3">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs">
                        {filteredTableRows.length > 0 ? (
                          filteredTableRows.map((row, idx) => (
                            <tr
                              key={idx}
                              className="hover:bg-amber-50/40 transition-colors"
                            >
                              <td className="p-3 font-semibold text-slate-900">
                                {row.item[language]}
                              </td>
                              <td className="p-3 font-mono text-[11px] text-slate-600">
                                {row.codeOrCategory}
                              </td>
                              <td className="p-3 text-slate-600">
                                {row.unit[language]}
                              </td>
                              <td className="p-3 font-mono font-bold text-amber-800">
                                {row.priceKzt}
                              </td>
                              <td className="p-3">
                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                                  {row.statusBadge[language]}
                                </span>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td
                              colSpan={currentData.livePortal.tableHeaders[language].length}
                              className="p-6 text-center text-slate-500 text-xs"
                            >
                              {language === 'kk' ? 'Сұранысыңыз бойынша дерек табылмады' : 'Ничего не найдено'}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Table Footer with Digital Seal & Verification Text */}
                  <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-medium text-[11px]">
                        {currentData.livePortal.officialStampText[language]}
                      </span>
                    </div>

                    <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{language === 'kk' ? 'Мемлекеттік ресми верификацияланған дерекқор' : 'Официально верифицированные государственные данные'}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ============================================================ */
            /* 2. ANALYTICAL DOSSIER (Original structured breakdown)       */
            /* ============================================================ */
            <div className="space-y-4">
              {/* Government Body & Legal Framework Header */}
              <div className="p-4 rounded-2xl bg-white border border-amber-200/90 shadow-2xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        {language === 'kk'
                          ? 'Өңірлік мемлекеттік уәкілетті орган'
                          : language === 'ru'
                          ? 'Региональный уполномоченный гос. орган'
                          : 'Regional Governing Authority'}
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        {currentData.governingBody.name[language]}
                      </div>
                      <div className="text-xs text-slate-600">
                        {currentData.governingBody.department[language]}
                      </div>
                    </div>
                  </div>

                  <div className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200/70 text-right">
                    <div className="text-[10px] uppercase tracking-wider font-bold text-amber-800">
                      {currentData.governingBody.sealTitle[language]}
                    </div>
                    <div className="text-xs font-bold text-amber-950 mt-0.5">
                      {currentData.legalFramework.code}
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-xs text-slate-600 leading-relaxed bg-[#FFFDF9] p-3 rounded-xl border border-amber-100/60">
                  <div className="font-semibold text-slate-800 mb-1">
                    {currentData.legalFramework.title[language]}
                  </div>
                  <p>{currentData.legalFramework.description[language]}</p>
                </div>
              </div>

              {/* Summary Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentData.summaryMetrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-medium text-slate-500">
                        {metric.label[language]}
                      </span>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900">
                        {metric.badge[language]}
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 mt-2 font-serif">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Items List */}
              <div className="space-y-2.5">
                {currentData.verifiedItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-300 transition-all shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold text-slate-900">
                          {item.name[language]}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          {item.category[language]}
                        </span>
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                          {item.verifiedTag[language]}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        {item.details[language]}
                      </p>
                    </div>

                    <div className="sm:text-right shrink-0 flex sm:flex-col items-center sm:items-end justify-between gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                      <div className="text-xs sm:text-sm font-bold font-mono text-amber-700">
                        {item.priceRate}
                      </div>
                      {item.actionUrl && item.actionLabel && (
                        <a
                          href={item.actionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-semibold text-amber-700 hover:text-amber-900 inline-flex items-center gap-1 hover:underline"
                        >
                          <span>{item.actionLabel[language]}</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Regulations Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FFFBF2] to-[#FFF7E8] border border-amber-200/70">
                <h5 className="text-xs font-bold text-amber-900 uppercase tracking-wide flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>
                    {language === 'kk'
                      ? 'Ресми талаптар және саяхатшы қағидалары:'
                      : language === 'ru'
                      ? 'Официальные требования и регламент:'
                      : 'Official Guidelines & Regulations:'}
                  </span>
                </h5>
                <ul className="space-y-1.5">
                  {currentData.officialRegulations[language].map((reg, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                      <span>{reg}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              {language === 'kk'
                ? `«${activeRegionObj.name[language]}» ресми мемлекеттік порталымен интеграцияланған.`
                : `Интегрировано с официальным порталом: ${activeRegionObj.name[language]}.`}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={activeCategoryPortal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold text-xs flex items-center gap-1.5 shadow-2xs transition-all"
            >
              <span>
                {activeCategory === 'food'
                  ? (language === 'kk' ? '2GIS-тен қарау' : language === 'ru' ? 'Смотреть в 2GIS' : 'Open in 2GIS')
                  : activeCategory === 'accommodation'
                  ? (language === 'kk' ? 'Қонақүйлерді ашу' : language === 'ru' ? 'Смотреть отели' : 'Open Hotels')
                  : (language === 'kk' ? 'Ресми сайтты ашу' : language === 'ru' ? 'Открыть сайт' : 'Open Website')}
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-semibold text-xs transition-all shadow-sm cursor-pointer"
            >
              {language === 'kk' ? 'Түсінікті, жабу' : language === 'ru' ? 'Понятно, закрыть' : 'Got it, Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
