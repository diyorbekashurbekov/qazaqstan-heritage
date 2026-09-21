import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NationalGoldenFund } from './components/NationalGoldenFund';
import { AiPlannerBanner } from './components/AiPlannerBanner';
import { RegionsCarousel } from './components/RegionsCarousel';
import { KazakhstanMap } from './components/KazakhstanMap';
import { RegionFilterBar } from './components/RegionFilterBar';
import { TouristSurvivalGuide } from './components/TouristSurvivalGuide';
import { FeaturedHeritageBanner } from './components/FeaturedHeritageBanner';
import { DestinationCard } from './components/DestinationCard';
import { TripCostEstimator } from './components/TripCostEstimator';
import { EcosystemSection } from './components/EcosystemSection';
import { DestinationModal } from './components/DestinationModal';
import { ShugylaVirtualTour } from './components/ShugylaVirtualTour';
import { ResearchLogModal } from './components/ResearchLogModal';
import { RegionShowcaseModal } from './components/RegionShowcaseModal';
import { ShareModal } from './components/ShareModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import {
  RotateCcw,
  MapPin,
  Search,
  Building,
  Filter,
  Heart,
  } from 'lucide-react';

const MainContent: React.FC = () => {
  const {
    language,
    filteredDestinations,
    selectedRegion,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    favorites,
    showFavoritesOnly,
    setShowFavoritesOnly,
    resetAllFilters,
  } = useApp();

  const isFiltering =
    selectedRegion !== null ||
    selectedCategory !== 'all' ||
    showFavoritesOnly ||
    searchQuery.trim() !== '';

  const categories = [
    { id: 'all', label: { kk: 'Барлығы', en: 'All Sites', ru: 'Все объекты' } },
    { id: 'mausoleum', label: { kk: 'Тарихи кесенелер', en: 'Mausoleums', ru: 'Мавзолеи' } },
    { id: 'unesco', label: { kk: 'ЮНЕСКО мұрасы', en: 'UNESCO Heritage', ru: 'ЮНЕСКО' } },
    { id: 'archaeological_settlement', label: { kk: 'Көне қалашықтар мен қорғандар', en: 'Ancient Cities', ru: 'Городища и курганы' } },
    { id: 'underground_mosque', label: { kk: 'Жерасты мешіттері', en: 'Underground Mosques', ru: 'Подземные мечети' } },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFA] text-slate-900 selection:bg-[#E67E00] selection:text-white font-sans antialiased">
      <Navbar />

      <main className="pb-20 xl:pb-0">
        {/* 1. Cinematic Hero Section with Smart Travel Console */}
        <Hero />

        {/* 2. National Golden Fund: TOP 5 Gems Magazine Showcase */}
        <div id="golden-fund">
          <NationalGoldenFund />
        </div>

        {/* 4. AI Travel Planner Banner (Route generator) */}
        <AiPlannerBanner />

        {/* 5. 17 Regions Interactive Showcase Carousel */}
        <div id="regions-section">
          <RegionsCarousel />
        </div>

        {/* 6. Interactive SVG Map of 17 Regions */}
        <div id="kazakhstan-map">
          <KazakhstanMap />
        </div>

        {/* 7. Featured Atmospheric Heritage Banner */}
        <FeaturedHeritageBanner />

        {/* 8. Historical Destinations Catalog */}
        <section id="destinations-catalog" className="py-20 relative bg-[#FDFCFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Quick 17-Region Selection Bar */}
            <RegionFilterBar />

            {/* Filter Pills Bar: Categories + Favorites toggle */}
            <div className="flex items-center justify-between gap-4 overflow-x-auto pb-4 mb-8 border-b border-slate-200">
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider mr-2 shrink-0">
                  <Filter className="w-3.5 h-3.5 text-[#E67E00]" />
                  <span className="hidden sm:inline">
                    {language === 'kk' ? 'Санат:' : language === 'ru' ? 'Категория:' : 'Category:'}
                  </span>
                </div>
                {categories.map((cat) => {
                  const isCatActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`shrink-0 px-4 py-2 rounded-2xl text-xs font-semibold transition-all cursor-pointer border ${
                        isCatActive
                          ? 'bg-[#E67E00] text-white border-[#E67E00] shadow-md shadow-[#E67E00]/20'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-[#E69A34] hover:text-slate-900 shadow-2xs'
                      }`}
                    >
                      {cat.label[language]}
                    </button>
                  );
                })}
              </div>

              {/* Favorites Only Toggle Pill */}
              <div className="shrink-0 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
                    showFavoritesOnly
                      ? 'bg-rose-50 text-rose-700 border-rose-300 shadow-xs'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-rose-300'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${showFavoritesOnly ? 'fill-rose-500 text-rose-500' : 'text-slate-400'}`} />
                  <span>
                    {language === 'kk' ? 'Таңдаулылар' : language === 'ru' ? 'Избранное' : 'Saved'}
                  </span>
                  {favorites.length > 0 && (
                    <span className="ml-1 px-1.5 py-0.2 rounded-full bg-rose-100 text-rose-800 text-[10px]">
                      {favorites.length}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Catalog Header & Filters state */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7EC] border border-[#E69A34]/30 text-[#A95700] text-xs font-bold uppercase tracking-wider mb-2">
                  <Building className="w-3.5 h-3.5 text-[#E67E00]" />
                  <span>
                    {language === 'kk'
                      ? 'Тарихи жауһарлар паспорты'
                      : language === 'ru'
                      ? 'Исторические жемчужины'
                      : 'Historical Gems'}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                  {selectedRegion ? (
                    <>
                      {selectedRegion.name[language]}{' '}
                      <span className="text-[#E67E00] font-sans text-xl font-normal">
                        ({filteredDestinations.length}{' '}
                        {language === 'kk' ? 'нысан' : 'sites'})
                      </span>
                    </>
                  ) : showFavoritesOnly ? (
                    <>
                      {language === 'kk' ? 'Таңдаулы киелі орындар' : 'Saved Destinations'}{' '}
                      <span className="text-rose-600 font-sans text-xl font-normal">
                        ({filteredDestinations.length})
                      </span>
                    </>
                  ) : (
                    <>
                      {language === 'kk'
                        ? 'Қазақстанның тарихи кесенелері'
                        : language === 'ru'
                        ? 'Каталог мавзолеев Казахстана'
                        : 'Heritage Monuments of Kazakhstan'}{' '}
                      <span className="text-slate-400 font-sans text-xl font-normal">
                        ({filteredDestinations.length})
                      </span>
                    </>
                  )}
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  {language === 'kk'
                    ? 'Әр кесене бойынша тексерілген кіру билеті, жұмыс уақыты, «Ол жерде не бар?» және сапар шығындары теңгеде (₸).'
                    : language === 'ru'
                    ? 'Официальные цены, расписание работы, достопримечательности и расчет поездки в тенге (₸).'
                    : 'Officially verified admission fees, operating schedules, sights, and trip logistics in Tenge (₸).'}
                </p>
              </div>

              {/* Active Filter Indicators & Clear button */}
              {isFiltering && (
                <div className="flex items-center gap-2 flex-wrap">
                  {selectedRegion && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF7EC] text-[#A95700] text-xs font-semibold border border-[#E69A34]/40">
                      <MapPin className="w-3 h-3 text-[#E67E00]" />
                      {selectedRegion.name[language]}
                    </span>
                  )}
                  {selectedCategory !== 'all' && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 uppercase font-mono">
                      {selectedCategory}
                    </span>
                  )}
                  {showFavoritesOnly && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold border border-rose-200">
                      <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
                      {language === 'kk' ? 'Таңдаулылар' : 'Saved only'}
                    </span>
                  )}
                  {searchQuery.trim() && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200">
                      <Search className="w-3 h-3 text-amber-600" />
                      «{searchQuery}»
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={resetAllFilters}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>
                      {language === 'kk'
                        ? 'Сүзгіні тазалау'
                        : language === 'ru'
                        ? 'Сбросить'
                        : 'Reset'}
                    </span>
                  </button>
                </div>
              )}
            </div>

            {/* Destination Cards Grid */}
            {filteredDestinations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDestinations.map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 max-w-xl mx-auto p-8 shadow-sm">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-serif font-bold text-slate-800">
                  {language === 'kk'
                    ? 'Сұранысыңыз бойынша ескерткіш табылмады'
                    : language === 'ru'
                    ? 'По вашему запросу ничего не найдено'
                    : 'No monuments found matching criteria'}
                </h3>
                <p className="text-xs text-slate-500 mt-2">
                  {language === 'kk'
                    ? 'Сүзгіні тазартып немесе басқа өңірді таңдап көріңіз.'
                    : 'Try resetting filters or selecting a different historical region.'}
                </p>
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="mt-6 px-5 py-2.5 rounded-2xl bg-[#E67E00] text-white font-semibold text-xs hover:bg-[#CC6F00] transition-colors inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>
                    {language === 'kk'
                      ? 'Барлық ескерткіштерді көрсету'
                      : 'Show all destinations'}
                  </span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* 9. Essential Survival Guide for Foreign Tourists */}
        <div id="survival-guide">
          <TouristSurvivalGuide />
        </div>

        {/* 10. Interactive Trip Cost Estimator */}
        <section id="trip-estimator-section">
          <TripCostEstimator />
        </section>

        {/* 11. Kazakhstan.travel Official Ecosystem Section */}
        <section id="ecosystem-section">
          <EcosystemSection />
        </section>
      </main>

      {/* Global Overlays & Modals */}
      <RegionShowcaseModal />
      <DestinationModal />
      <ShugylaVirtualTour />
      <ResearchLogModal />
      <ShareModal />

      {/* Footer */}
      <Footer />

      {/* Modern Native Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

export default App;
