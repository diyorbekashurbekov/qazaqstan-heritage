import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ttsService, type TTSLanguage } from '../services/ttsService';
import {
  X,
  Sparkles,
  Clock,
  BookOpen,
  Volume2,
  Lightbulb,
  Award,
  Layers,
  MapPin,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Heritage3DViewer } from './Heritage3DViewer';
import { getMonumentEpigraphy } from '../data/monumentInscriptionsData';
import { DESTINATIONS } from '../data/destinations';

export const ShugylaVirtualTour: React.FC = () => {
  const { isShugylaModalOpen, setIsShugylaModalOpen, language, selectedDestination, shugylaActiveTab } = useApp();
  const [activeTab, setActiveTab] = useState<'timeline' | 'calligraphy' | 'reconstruction'>('timeline');

  // Synchronize initial tab when modal opens
  useEffect(() => {
    if (isShugylaModalOpen && shugylaActiveTab) {
      setActiveTab(shugylaActiveTab);
    }
  }, [isShugylaModalOpen, shugylaActiveTab]);

  // Synchronize active monument from selectedDestination
  const [activeMonumentId, setActiveMonumentId] = useState<string>(selectedDestination?.id || 'yasawi');

  useEffect(() => {
    if (selectedDestination?.id) {
      setActiveMonumentId(selectedDestination.id);
    }
  }, [selectedDestination]);

  const [activeEpochIndex, setActiveEpochIndex] = useState<number>(2);
  const [selectedInscription, setSelectedInscription] = useState<number>(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Reset inscription index & audio state when monument changes
  useEffect(() => {
    setSelectedInscription(0);
    setIsPlayingAudio(false);
  }, [activeMonumentId]);

  // Dynamic epigraphy tailored specifically to the active monument
  const epigraphy = useMemo(() => {
    return getMonumentEpigraphy(activeMonumentId, language);
  }, [activeMonumentId, language]);

  const currentDestination = useMemo(() => {
    return DESTINATIONS.find((d) => d.id === activeMonumentId) || DESTINATIONS[0];
  }, [activeMonumentId]);

  if (!isShugylaModalOpen) return null;

  const epochs = [
    {
      id: 'botai',
      era: {
        kk: 'Б.з.д. IV–III мыңжылдықтар',
        en: '4000 – 3000 BCE',
        ru: 'IV–III тыс. до н.э.',
      },
      title: {
        kk: 'Ботай мәдениеті: Жылқыны қолға үйрету',
        en: 'Botai Culture: First Horse Domestication',
        ru: 'Ботайская культура: Одомашнивание лошади',
      },
      desc: {
        kk: 'Адамзат тарихында алғаш рет жылқы ауыздықталған, қымыз өндірісі басталған және шеңберлі жертөлелер салынған Ұлы даланың алғашқы өркениет ошағы.',
        en: 'The cradle of equestrian civilization where humans first domesticated the wild horse, pioneered kumis making, and built circular pit-houses.',
        ru: 'Колыбель конной цивилизации, где человек впервые одомашнил дикую лошадь, изобрел кумыс и построил полуземлянки.',
      },
      technology: {
        kk: 'Сүйектен жасалған жүген, тас жебе ұштары, қыш ыдыстардағы қымыз қалдықтары',
        en: 'Bone bridles, stone arrowheads, organic kumis lipid residues in ceramic vessels',
        ru: 'Костяные удила, каменные наконечники, следы кумыса на керамике',
      },
      color: 'from-emerald-950/60 to-stone-900',
    },
    {
      id: 'saka',
      era: {
        kk: 'Б.з.д. VIII – III ғғ.',
        en: '8th – 3rd Century BCE',
        ru: 'VIII – III вв. до н.э.',
      },
      title: {
        kk: 'Сақ-скиф кезеңі: Аң стилі және Алтын адам',
        en: 'Saka-Scythian Era: Animal Style & The Golden Man',
        ru: 'Сако-скифский период: Звериный стиль и Золотой человек',
      },
      desc: {
        kk: 'Көшпелілердің зергерлік өнерінің шыңы — 4000-нан астам таза алтын бұйыммен көмкерілген сақ жауынгері және Таңбалы тастарындағы күн басты тәңірлік петроглифтер.',
        en: 'The pinnacle of nomadic metallurgy: over 4,000 pure gold ornaments adorning the Saka Prince, alongside solar deity petroglyphs at Tanbaly.',
        ru: 'Вершина металлургии кочевников: более 4000 золотых пластин воина и солярные петроглифы Танбалы.',
      },
      technology: {
        kk: 'Жоғары сынамалы алтын құю, балауыз тәсілімен бедерлеу, соғу өнері',
        en: 'Lost-wax casting, high-purity gold filigree, embossed dynamic zoomorphism',
        ru: 'Литье по выплавляемым моделям, чеканка по золоту, зооморфный орнамент',
      },
      color: 'from-amber-950/60 to-stone-900',
    },
    {
      id: 'golden_horde',
      era: {
        kk: 'XIII – XIV ғасырлар',
        en: '13th – 14th Century CE',
        ru: 'XIII – XIV вв.',
      },
      title: {
        kk: 'Алтын Орда және Отырар: Ұлы Жібек жолы',
        en: 'Golden Horde & Otyrar: Great Silk Road Hub',
        ru: 'Золотая Орда и Отырар: Узел Великого Шелкового Пути',
      },
      desc: {
        kk: 'Ұлы Жібек жолындағы сауда керуендерінің орталығы. Қыш құбырлы кәріз жүйесі, шығыс моншалары, Отырар кітапханасы және монета сарайы жұмыс істеген өркениетті шаһар.',
        en: 'A thriving Silk Road metropolis featuring ceramic sewer pipelines, public hammams, the famous Otyrar library, and active coin mints.',
        ru: 'Процветающий мегаполис Шелкового пути: керамический водопровод, восточные бани, монетный двор и легендарная библиотека.',
      },
      technology: {
        kk: 'Күйдірілген кірпіштен салынған қос қабатты күмбез, қыш су құбырлары',
        en: 'Fired-brick engineering, subterranean ceramic water supply, glazed ceramics',
        ru: 'Жженый кирпич, подпольный водопровод и канализация, глазурованная посуда',
      },
      color: 'from-yellow-950/60 to-stone-900',
    },
    {
      id: 'yasawi_khanate',
      era: {
        kk: 'XIV – XVI ғасырлар',
        en: '14th – 16th Century CE',
        ru: 'XIV – XVI вв.',
      },
      title: {
        kk: 'Қожа Ахмет Ясауи және Қазақ Хандығының ордасы',
        en: 'Yasawi Era & Capital of the Kazakh Khanate',
        ru: 'Эпоха Ясави и Столица Казахского Ханства',
      },
      desc: {
        kk: 'Әмір Темірдің бұйрығымен салынған сәулет жауһары. Түркі әлемінің рухани астанасы, қазақ хандары мен билерінің мәңгілік тыныштық тапқан қасиетті пантеоны.',
        en: 'Architectural masterpiece commissioned by Timur. Spiritual center of the Turkic world and sovereign pantheon where Kazakh Khans and judges were interred.',
        ru: 'Шедевр тимуридского зодчества, духовная столица тюркского мира и пантеон казахских ханов и батыров.',
      },
      technology: {
        kk: 'Көгілдір майолика және мозаика, көне куфи жазулары, 2 тонналық Тайқазан',
        en: 'Turquoise majolica mosaic, kufic calligraphy tiles, 2-ton bronze Taikazan',
        ru: 'Бирюзовая мозаика и майолика, куфические надписи, 2-тонный Тайказан',
      },
      color: 'from-blue-950/60 to-stone-900',
    },
  ];

  const inscriptions = epigraphy.inscriptions;
  const currentInscription = inscriptions[selectedInscription] || inscriptions[0];

  const playVoice = useCallback(() => {
    setIsPlayingAudio(true);
    const textToSpeak = currentInscription.transliteration.replace(/[«»]/g, '');
    ttsService.preload().then(() => {
      ttsService.speak(
        textToSpeak,
        language as TTSLanguage,
        () => setIsPlayingAudio(false),
        () => setIsPlayingAudio(false)
      );
    });
  }, [currentInscription, language]);

  const handlePlayVoice = () => {
    playVoice();
  };

  // Stop audio if tab changes or component unmounts
  useEffect(() => {
    return () => {
      ttsService.stop();
      setIsPlayingAudio(false);
    };
  }, [activeTab]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-5xl bg-stone-900 border border-[#E69A34]/30 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top Header Banner */}
        <div className="relative px-6 py-5 bg-gradient-to-r from-amber-950/80 via-stone-900 to-amber-950/80 border-b border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-[#E67E00] shadow-inner shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-serif font-bold text-stone-100">
                  {language === 'kk'
                    ? 'Qazaqstan Time: Ғылыми интерактивті модуль'
                    : language === 'ru'
                    ? 'Qazaqstan Time: Научно-интерактивный модуль'
                    : 'Qazaqstan Time: Scientific Interactive Module'}
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-medium border border-[#E69A34]/30">
                  Шұғыла зерттеуі
                </span>
              </div>
              <p className="text-xs text-stone-300 font-medium">
                {epigraphy.modalSubHeader[language]}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsShugylaModalOpen(false)}
            className="w-9 h-9 rounded-full bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors border border-stone-700 cursor-pointer"
            aria-label="Жабу"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-800 bg-stone-950/60 px-6 pt-3 gap-2 overflow-x-auto no-scrollbar">
          {[
            {
              id: 'timeline',
              icon: Clock,
              title: {
                kk: '3D Уақыт машинасы (Дәуірлер)',
                en: '3D Time Machine (Epochs)',
                ru: '3D Машина времени (Эпохи)',
              },
            },
            {
              id: 'calligraphy',
              icon: BookOpen,
              title: epigraphy.tabTitle,
            },
            {
              id: 'reconstruction',
              icon: Layers,
              title: {
                kk: '3D Реконструкция & Тірі фото',
                en: '3D Model & Live Stage',
                ru: '3D Модель и живая сцена',
              },
            },
          ].map((tab) => {
            const Icon = tab.icon;
            const isCurrent = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-all border-b-2 whitespace-nowrap cursor-pointer ${
                  isCurrent
                    ? 'border-amber-500 text-amber-400 bg-stone-900 shadow-sm'
                    : 'border-transparent text-stone-400 hover:text-stone-200 hover:bg-stone-900/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.title[language]}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: TIMELINE */}
          {activeTab === 'timeline' && (
            <div className="space-y-6 animate-fade-in">
              {/* Epoch Selection Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {epochs.map((epoch, idx) => (
                  <button
                    key={epoch.id}
                    type="button"
                    onClick={() => setActiveEpochIndex(idx)}
                    className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden cursor-pointer ${
                      activeEpochIndex === idx
                        ? 'bg-gradient-to-b from-amber-500/20 to-stone-950 border-amber-500 shadow-lg shadow-amber-500/10'
                        : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:border-stone-700 hover:text-stone-300'
                    }`}
                  >
                    <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400 mb-1">
                      {epoch.era[language]}
                    </div>
                    <div className="text-xs font-bold text-stone-200 line-clamp-2">
                      {epoch.title[language]}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Epoch Detailed Showcase */}
              <div
                className={`p-6 rounded-3xl border border-[#E69A34]/30 bg-gradient-to-br ${epochs[activeEpochIndex].color} relative overflow-hidden`}
              >
                <div className="max-w-2xl">
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-[#E69A34]/30 text-xs font-mono mb-3">
                    {epochs[activeEpochIndex].era[language]}
                  </span>
                  <h4 className="text-2xl font-serif font-bold text-stone-100 mb-3">
                    {epochs[activeEpochIndex].title[language]}
                  </h4>
                  <p className="text-stone-300 text-sm leading-relaxed mb-6">
                    {epochs[activeEpochIndex].desc[language]}
                  </p>

                  <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800">
                    <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                      <Lightbulb className="w-3.5 h-3.5" />
                      {language === 'kk'
                        ? 'Дәуірдің технологиялық жаңалығы:'
                        : language === 'ru'
                        ? 'Технологический прорыв эпохи:'
                        : 'Technological Breakthrough:'}
                    </div>
                    <p className="text-xs text-stone-300 font-mono">
                      {epochs[activeEpochIndex].technology[language]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Shugyla Research Concept Explanation */}
              <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs text-stone-400 flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-200 mb-1">
                    {language === 'kk'
                      ? 'Шұғыланың ғылыми тұжырымдамасы:'
                      : language === 'ru'
                      ? 'Концепция исследования Шұғылы:'
                      : 'Shugyla’s Research Thesis:'}
                  </div>
                  <p className="leading-relaxed">
                    {language === 'kk'
                      ? '«Уақыт машинасы» интерактивті қозғалтқышы туристерге тек қазіргі қирандыларды емес, осы нысандардың гүлденген дәуіріндегі 3D бейнесін көруге мүмкіндік береді. Бұл мәдени туризмдегі эмоционалдық байланысты 4 есе арттырады.'
                      : language === 'ru'
                      ? 'Интерактивная «Машина времени» позволяет путешественнику увидеть не просто руины, а 3D-реконструкцию эпохи расцвета, увеличивая глубину восприятия культурного наследия в 4 раза.'
                      : 'The interactive "Time Machine" concept allows travelers to experience ancient sites in their original glory rather than merely ruins, multiplying emotional resonance fourfold.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CALLIGRAPHY & EPIGRAPHY DECODER (Customized per Monument) */}
          {activeTab === 'calligraphy' && (
            <div className="space-y-6 animate-fade-in">
              {/* Dynamic Header & Monument Switcher */}
              <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="text-xs text-amber-400 font-semibold mb-1 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{epigraphy.eraName[language]}</span>
                  </div>
                  <p className="text-xs text-stone-300">
                    {epigraphy.tabTitle[language]} — {currentDestination.name[language]} бойынша сакралды тарихи жазбалар каталогы
                  </p>
                </div>

                {/* Monument Quick Selector */}
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] text-stone-400 font-mono flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {language === 'kk' ? 'Ескерткіш:' : 'Памятник:'}
                  </span>
                  <select
                    value={activeMonumentId}
                    onChange={(e) => setActiveMonumentId(e.target.value)}
                    className="bg-stone-900 border border-stone-700 text-stone-200 text-xs rounded-xl px-3 py-1.5 focus:outline-none focus:border-amber-500 font-medium cursor-pointer shadow-sm"
                  >
                    <option value="yasawi">Қожа Ахмет Ясауи кесенесі</option>
                    <option value="aisha-bibi">Айша бибі кесенесі</option>
                    <option value="otyrar">Көне Отырар қалашығы</option>
                    <option value="korkyt-ata">Қорқыт ата мемориалы</option>
                    <option value="beket-ata">Бекет ата жерасты мешіті</option>
                    <option value="tanbaly">Таңбалы жартас петроглифтері</option>
                    <option value="jochi-khan">Жошы хан кесенесі</option>
                    <option value="alasha-khan">Алаша хан кесенесі</option>
                    <option value="abai-shakarim">Абай мен Шәкәрім кесене кешені</option>
                    <option value="zharkent-mosque">Жаркент мешіт-сәулет кешені</option>
                    <option value="saraishyk">Сарайшық хандар пантеоны</option>
                    <option value="kozy-korpesh">Қозы Көрпеш – Баян сұлу кесенесі</option>
                    <option value="berel">Берел сақ қорғандары</option>
                    <option value="kabanbay-batyr">Қабанбай батыр кесенесі</option>
                    <option value="raiymbek-batyr">Райымбек батыр кесенесі</option>
                    <option value="botai">Ботай қонысы</option>
                    <option value="bukey-orda">Бөкей ордасы кешені</option>
                    <option value="khan-molasy">Хан моласы (Әбілқайыр хан)</option>
                    <option value="mashkhur-zhusip">Мәшһүр Жүсіп кесенесі</option>
                    <option value="bukhar-zhyrau">Бұқар жырау кесенесі</option>
                    <option value="ybyray-altynsarin">Ыбырай Алтынсарин мемориалы</option>
                    <option value="karasay-agyntay">Қарасай мен Ағынтай кесенесі</option>
                  </select>
                </div>
              </div>

              {/* Inscription Selector Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {inscriptions.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedInscription(idx)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedInscription === idx
                        ? 'bg-amber-500/15 border-amber-500 text-stone-100 shadow-lg shadow-amber-500/10'
                        : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:border-stone-700 hover:text-stone-300'
                    }`}
                  >
                    <div className="text-[10px] uppercase font-mono text-amber-400 mb-1">
                      {item.scriptType[language]}
                    </div>
                    <div className="text-xs font-bold truncate">
                      {item.location[language]}
                    </div>
                  </button>
                ))}
              </div>

              {/* Calligraphy Card Showcase */}
              <div className="p-6 rounded-3xl bg-gradient-to-b from-stone-950 to-stone-900 border border-[#E69A34]/30 space-y-5">
                {/* Original Text Display */}
                <div className="text-center py-6 px-4 rounded-2xl bg-stone-950 border border-stone-800/80 shadow-inner">
                  <div
                    className="text-2xl sm:text-4xl text-amber-300 font-serif tracking-widest leading-loose"
                    dir={/[\u0600-\u06FF]/.test(currentInscription.originalText) ? 'rtl' : 'ltr'}
                  >
                    {currentInscription.originalText}
                  </div>
                  <div className="mt-3 text-xs font-mono text-stone-300 tracking-wider">
                    {currentInscription.transliteration}
                  </div>
                </div>

                {/* Audio Reader Simulation / Voice Inscription */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handlePlayVoice}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                        isPlayingAudio
                          ? 'bg-amber-500 text-stone-950 animate-pulse shadow-lg shadow-amber-500/30'
                          : 'bg-stone-800 hover:bg-stone-700 text-amber-400'
                      }`}
                      title={language === 'kk' ? 'Жазуды сөйлету' : 'Озвучить надпись'}
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <div>
                      <div className="text-xs font-semibold text-stone-200">
                        {language === 'kk'
                          ? '«Жазуды сөйлету» (Аудио-оқылым)'
                          : language === 'ru'
                          ? '«Озвучить надпись» (Аудио-декодер)'
                          : 'Voice Inscription (Audio Reader)'}
                      </div>
                      <div className="text-[10px] text-stone-400">
                        {isPlayingAudio
                          ? language === 'kk'
                            ? 'Дыбысталуда... (Классикалық мақам)'
                            : 'Воспроизведение...'
                          : language === 'kk'
                          ? 'Түпнұсқа оқылымын тыңдау үшін басыңыз'
                          : 'Нажмите для прослушивания оригинала'}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase">
                    HD • 48 kHz
                  </span>
                </div>

                {/* Philosophical Meaning & Architectural Placement */}
                <div className="space-y-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                      {language === 'kk'
                        ? 'Философиялық мән-мағынасы:'
                        : language === 'ru'
                        ? 'Философский смысл и контекст:'
                        : 'Philosophical Significance:'}
                    </div>
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed bg-stone-950/60 p-4 rounded-xl border border-stone-800">
                      {currentInscription.meaning[language]}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">
                      {language === 'kk'
                        ? 'Сәулеттік орналасуы:'
                        : language === 'ru'
                        ? 'Архитектурное расположение:'
                        : 'Architectural Location:'}
                    </div>
                    <p className="text-xs text-stone-400">
                      {currentInscription.significance[language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: 3D RECONSTRUCTION & INTERACTIVE LIVE SPATIAL PAVILION */}
          {activeTab === 'reconstruction' && (
            <div className="space-y-6 animate-fade-in">
              {/* Working Interactive Three.js WebGL 3D Architectural Model & Crystal Clear Spatial Stage */}
              <Heritage3DViewer
                initialDestinationId={activeMonumentId}
                onDestinationChange={(newId) => setActiveMonumentId(newId)}
                language={language}
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800">
                  <div className="text-amber-400 font-bold text-sm">
                    {language === 'kk' ? 'Түпнұсқа сапа & Бұрмалаусыз 3D' : 'Crystal Clear & Unwarped 3D'}
                  </div>
                  <div className="text-xs text-stone-400 mt-1">
                    {language === 'kk'
                      ? 'Түпнұсқа жоғары ажыратымдылықтағы тірі фотолар, еркін бұру, еңкейту және үлкейту'
                      : 'Authentic high-definition live photos with free tilt, pan, and smooth zoom'}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800">
                  <div className="text-amber-400 font-bold text-sm">
                    {language === 'kk' ? 'Көпбөлмелі панорама' : 'Multi-Chamber Panorama'}
                  </div>
                  <div className="text-xs text-stone-400 mt-1">
                    {language === 'kk'
                      ? 'Көрхана, Қазандық залы, Күмбез сталактиті және қақпа бөлмелерін шарлау'
                      : 'Explore Crypt, Tayqazan Hall, Muqarnas Vault and Carved Portal'}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800">
                  <div className="text-amber-400 font-bold text-sm">
                    {language === 'kk' ? '17 облыс ескерткіштері' : '17 Regions Monuments'}
                  </div>
                  <div className="text-xs text-stone-400 mt-1">
                    {language === 'kk'
                      ? 'Қазақстанның барлық 24 ескерткішінің біртұтас 3D виртуалды жүйесі'
                      : 'Integrated 3D system for all 24 monuments across 17 regions'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
