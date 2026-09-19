import React from 'react';
import { useApp } from '../context/AppContext';
import type { HistoricalEpoch } from '../types/tourism';
import {
  Calendar,
  ArrowRight,
  Shield,
  Compass,
  Crown,
  BookOpen,
  } from 'lucide-react';

export const HistoricalTimeline: React.FC = () => {
  const { selectedEpoch, setSelectedEpoch, language } = useApp();

  const epochs: {
    id: HistoricalEpoch;
    period: { kk: string; en: string; ru: string };
    title: { kk: string; en: string; ru: string };
    highlight: { kk: string; en: string; ru: string };
    monuments: string[];
    color: string;
    badgeBg: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    {
      id: 'iron_age',
      period: {
        kk: 'Б.з.д. VII ғ. – Б.з. V ғ.',
        en: '7th c. BCE – 5th c. CE',
        ru: 'VII в. до н.э. – V в. н.э.'
      },
      title: {
        kk: 'Сақ & Ғұн дәуірі: Көшпенділер бастауы',
        en: 'Saka & Hun Era: Dawn of Steppes',
        ru: 'Эпоха саков и гуннов: Истоки степи'
      },
      highlight: {
        kk: 'Ботайда жылқы алғаш қолға үйретілді. Берел қорымында «Сақ патшалары» жерленген, ал Таңбалы тас жартас өнерінің шедеврі.',
        en: 'First domestication of the horse at Botai. Saka Golden Kings of Berel and world-renowned UNESCO Petroglyphs of Tanbaly.',
        ru: 'Первое одомашнивание лошади в Ботае. Захоронения сакских царей в Береле и петроглифы Танбалы (ЮНЕСКО).'
      },
      monuments: ['Ботай қонысы', 'Берел қорғандары', 'Таңбалы петроглифтері'],
      color: 'from-amber-600 to-orange-700',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
      icon: Shield,
    },
    {
      id: 'silk_road',
      period: {
        kk: 'VI – XII ғасырлар',
        en: '6th – 12th Century',
        ru: 'VI – XII века'
      },
      title: {
        kk: 'Ұлы Жібек Жолы және Өркениет гүлденуі',
        en: 'Great Silk Road & Urban Flowering',
        ru: 'Великий Шелковый путь и расцвет городов'
      },
      highlight: {
        kk: 'Отырар оазисі әлемдік кітапхана мен сауда орталығына айналды. Айша бибі терракота өрнектері сәулет өнерінің шыңына жетті.',
        en: 'Otrar became a colossal library & global trade nexus. Aisha Bibi achieved architectural perfection with 60 terracotta patterns.',
        ru: 'Отрар стал мировым книжным и торговым узлом. Айша-биби достигла триумфа терракотовой архитектуры.'
      },
      monuments: ['Отырар қалашығы', 'Айша бибі кесенесі', 'Арыстан Баб', 'Қорқыт Ата'],
      color: 'from-sky-600 to-blue-800',
      badgeBg: 'bg-sky-100 text-sky-900 border-sky-300',
      icon: Compass,
    },
    {
      id: 'golden_horde',
      period: {
        kk: 'XIII – XVIII ғасырлар',
        en: '13th – 18th Century',
        ru: 'XIII – XVIII века'
      },
      title: {
        kk: 'Алтын Орда & Қазақ Хандығының Ұлы Мұрасы',
        en: 'Golden Horde & Kazakh Khanate Empire',
        ru: 'Золотая Орда и Казахское Ханство'
      },
      highlight: {
        kk: 'Жошы хан кесенесі — Алтын Орда мемлекеттілігінің бесігі. Қожа Ахмет Ясауи түркі әлемінің рухани астанасына айналды.',
        en: 'Jochi Khan mausoleum preserves the cradle of Golden Horde sovereignty. Khoja Ahmed Yasawi shines as spiritual beacon.',
        ru: 'Мавзолей Джучи хана — колыбель государственности Золотой Орды. Ясави стал духовным маяком тюркского мира.'
      },
      monuments: ['Жошы хан', 'Ясауи кесенесі', 'Бекет Ата', 'Сарайшық хандар қорымы'],
      color: 'from-emerald-600 to-teal-800',
      badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      icon: Crown,
    },
    {
      id: 'enlightenment',
      period: {
        kk: 'XIX – XX ғасырлар',
        en: '19th – 20th Century',
        ru: 'XIX – XX века'
      },
      title: {
        kk: 'Ағартушылық, Руханият және Ұлттық Жаңғыру',
        en: 'Enlightenment & Spiritual Renaissance',
        ru: 'Просвещение и духовное возрождение'
      },
      highlight: {
        kk: 'Ұлы Абай мен Шәкәрімнің Жидебайдағы кешені, Ыбырай Алтынсариннің білім шырағы және шегесіз салынған Жаркент пагода мешіті.',
        en: 'Abai-Shakarim pantheon at Zhidebai, Ybyray Altynsarin education heritage, and Zharkent wooden mosque built without nails.',
        ru: 'Мемориал Абая-Шакарима в Жидебае, наследие просветителя Алтынсарина и деревянная мечеть Жаркента без единого гвоздя.'
      },
      monuments: ['Абай-Шәкәрім', 'Ыбырай Алтынсарин', 'Жаркент мешіті', 'Мәшһүр Жүсіп'],
      color: 'from-indigo-600 to-purple-800',
      badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-300',
      icon: BookOpen,
    },
  ];

  const handleSelectEpoch = (epochId: HistoricalEpoch) => {
    setSelectedEpoch(epochId === selectedEpoch ? 'all' : epochId);
    const catalog = document.getElementById('destinations-catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#FFF7EC] via-[#FDFCFA] to-[#FDFCFA] border-y border-amber-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/60 text-[#A95700] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Calendar className="w-3.5 h-3.5 text-[#E67E00]" />
            <span>
              {language === 'kk'
                ? 'Интерактивті Дала Хронологиясы'
                : language === 'ru'
                ? 'Интерактивная хронология степи'
                : 'Interactive Steppe Chronology'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            {language === 'kk'
              ? '3000 Жылдық Дала Шежіресі'
              : language === 'ru'
              ? '3000-летняя летопись Великой Степи'
              : '3,000-Year Chronicle of the Steppe'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed max-w-xl">
            {language === 'kk'
              ? 'Дәуірді таңдаңыз да, сол кезеңнің киелі нысандарын лезде көріңіз.'
              : language === 'ru'
              ? 'Выберите эпоху для мгновенного просмотра памятников Великой Степи.'
              : 'Select an era to instantly explore the sacred steppe monuments.'}
          </p>
        </div>

        {/* 4 Epoch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {epochs.map((ep) => {
            const isSelected = selectedEpoch === ep.id;
            const Icon = ep.icon;

            return (
              <div
                key={ep.id}
                onClick={() => handleSelectEpoch(ep.id)}
                className={`group relative rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-white ring-2 ring-[#E67E00] shadow-xl shadow-[#E67E00]/15 -translate-y-1'
                    : 'bg-white/80 hover:bg-white border-slate-200/80 hover:border-amber-300 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Period badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${ep.color} shadow-sm group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${ep.badgeBg}`}>
                      {ep.period[language]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-lg text-slate-900 mb-2 group-hover:text-[#E67E00] transition-colors leading-snug">
                    {ep.title[language]}
                  </h3>

                  {/* Highlight text */}
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {ep.highlight[language]}
                  </p>

                  {/* Monuments tags */}
                  <div className="space-y-1.5 mb-6">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {language === 'kk' ? 'Басты нысандары:' : language === 'ru' ? 'Главные объекты:' : 'Key monuments:'}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {ep.monuments.map((m, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                        >
                          • {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className={isSelected ? 'text-[#E67E00]' : 'text-slate-500 group-hover:text-slate-800'}>
                    {isSelected
                      ? language === 'kk' ? '✓ Таңдалған дәуір' : language === 'ru' ? '✓ Выбранная эпоха' : '✓ Selected Epoch'
                      : language === 'kk' ? 'Ескерткіштерді сүзу' : language === 'ru' ? 'Показать объекты' : 'Filter Monuments'}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#E67E00] translate-x-1' : 'text-slate-400 group-hover:translate-x-1'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Reset filter hint if an epoch is active */}
        {selectedEpoch !== 'all' && (
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => setSelectedEpoch('all')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
            >
              <span>
                {language === 'kk'
                  ? 'Барлық 3000 жылдық нысандарды қайтару (Сүзгіні тазалау)'
                  : language === 'ru'
                  ? 'Показать все памятники (Сбросить фильтр)'
                  : 'Show all 3,000-year monuments (Reset filter)'}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
