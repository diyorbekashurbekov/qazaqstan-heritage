import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { REGIONS } from '../data/regions';
import {
  Sparkles,
  Calendar,
  Compass,
  ArrowRight,
  Clock,
  Wallet,
  CheckCircle2,
  X,
  Car,
  Utensils,
  Hotel,
} from 'lucide-react';
import { formatPrice } from '../utils/calculator';

interface ItineraryOption {
  id: string;
  regionId: string;
  title: Record<string, string>;
  duration: Record<string, string>;
  budgetKzt: number;
  chipLabel: Record<string, string>;
  days: {
    dayNumber: number;
    title: Record<string, string>;
    activities: Record<string, string>[];
    highlightSite: string;
  }[];
  breakdown: {
    transport: number;
    tickets: number;
    hotel: number;
    food: number;
  };
  tips: Record<string, string>;
}

const ITINERARIES: ItineraryOption[] = [
  {
    id: 'turkistan-2days',
    regionId: 'turkistan',
    title: {
      kk: 'Түркістан: 2 күндік қасиетті рухани сапар',
      en: 'Turkistan: 2-Day Sacred Pilgrimage & Silk Road Odyssey',
      ru: 'Туркестан: 2-дневное духовное путешествие по Шелковому пути',
    },
    duration: { kk: '2 күн / 1 түн', en: '2 Days / 1 Night', ru: '2 дня / 1 ночь' },
    budgetKzt: 48000,
    chipLabel: {
      kk: 'Түркістан: 2 күн (Ясауи, Арыстан Баб, Отырар)',
      en: 'Turkistan: 2 Days (Yasawi, Arystan Bab, Otyrar)',
      ru: 'Туркестан: 2 дня (Ясауи, Арыстан-баб, Отрар)',
    },
    days: [
      {
        dayNumber: 1,
        title: {
          kk: '1-күн: Отырар өркениеті және Арыстан Баб кесенесі',
          en: 'Day 1: Otyrar Oasis and Arystan Bab Mausoleum',
          ru: 'День 1: Городище Отрар и мавзолей Арыстан-баб',
        },
        activities: [
          {
            kk: 'Шымкент/Түркістан әуежайынан трансфер, Отырар археологиялық музейіне бару',
            en: 'Airport transfer, visit Otyrar State Archaeological Museum & fortress walls',
            ru: 'Трансфер, посещение археологического музея Отрара и раскопок',
          },
          {
            kk: 'Арыстан Баб кесенесінде құран бағыштау және тарихи құдықтан су тату',
            en: 'Visit Arystan Bab Mausoleum, spiritual prayers, and tasting holy well water',
            ru: 'Посещение мавзолея Арыстан-баб, осмотр древнего колодца',
          },
          {
            kk: 'Керуен Сарай кешеніне келу, дәстүрлі кешкі ас (Шымкент кәуабы немесе палау)',
            en: 'Evening check-in at Karavansaray, traditional dinner (Silk Road plov)',
            ru: 'Заселение возле Керуен-Сарай, ужин с южными блюдами',
          },
        ],
        highlightSite: 'Арыстан Баб кесенесі',
      },
      {
        dayNumber: 2,
        title: {
          kk: '2-күн: Қожа Ахмет Ясауи ЮНЕСКО жауһары және Сауран қамалы',
          en: 'Day 2: Khoja Ahmed Yasawi UNESCO Jewel & Sauran Fortress',
          ru: 'День 2: Жемчужина ЮНЕСКО мавзолей Ясауи и крепость Сауран',
        },
        activities: [
          {
            kk: 'Таңертеңгілік Ясауи кесенесі, Тайқазан залы, жерасты Қылует мешіті',
            en: 'Morning exploration of Yasawi Mausoleum, Tayqazan bronze cauldron, and Kylwet underground cell',
            ru: 'Утренний осмотр мавзолея Ясауи, зала Тайказана и кельи Кылует',
          },
          {
            kk: 'Сауран көне қалашығының сақталған қорғандары мен кәріз су жүйесін көру',
            en: 'Explore medieval fortress of Sauran with ancient underground aqueducts (karez)',
            ru: 'Поездка к крепостным стенам Саурана и древней системе подземного водопровода кяриз',
          },
        ],
        highlightSite: 'Қожа Ахмет Ясауи кесенесі',
      },
    ],
    breakdown: {
      transport: 14000,
      tickets: 5000,
      hotel: 16000,
      food: 13000,
    },
    tips: {
      kk: 'Кесене ішінде иық пен тізені жабатын қарапайым киім кию ұсынылады. Ыңғайлы кроссовка киіңіз.',
      en: 'Modest dress covering shoulders and knees required inside mausoleums. Wear comfortable walking shoes.',
      ru: 'Рекомендуется скромная одежда, прикрывающая плечи и колени. Удобная обувь обязательна.',
    },
  },
  {
    id: 'mangystau-3days',
    regionId: 'mangystau',
    title: {
      kk: 'Маңғыстау: 3 күндік 362 Әулие және Бозжыра экспедициясы',
      en: 'Mangystau: 3-Day 362 Saints & Bozjyra Chalk Expedition',
      ru: 'Мангистау: 3-дневная экспедиция к святыням и плато Бозжыра',
    },
    duration: { kk: '3 күн / 2 түн', en: '3 Days / 2 Nights', ru: '3 дня / 2 ночи' },
    budgetKzt: 95000,
    chipLabel: {
      kk: 'Маңғыстау: 3 күн джиппен (Бекет Ата, Шақпақ Ата, Бозжыра)',
      en: 'Mangystau: 3 Days 4x4 (Beket Ata, Shakpak Ata, Bozjyra)',
      ru: 'Мангистау: 3 дня на джипах (Бекет-ата, Шакпак-ата, Бозжыра)',
    },
    days: [
      {
        dayNumber: 1,
        title: {
          kk: '1-күн: Шақпақ Ата жартас мешіті және Торыш шарлары',
          en: 'Day 1: Shakpak Ata Rock-Cut Mosque & Valley of Balls (Torysh)',
          ru: 'День 1: Скальная мечеть Шакпак-ата и долина шаров Торыш',
        },
        activities: [
          {
            kk: 'Ақтаудан 4х4 джиппен шығу, борлы жартасқа қашалған Шақпақ Ата мешітіне бару',
            en: 'Depart Aktau in 4x4 SUV, explore 10th-century Shakpak Ata rock sanctuary',
            ru: 'Выезд из Актау на внедорожнике, осмотр высеченной в белой скале мечети Шакпак-ата',
          },
          {
            kk: 'Торыш шар тәріздес домалақ тастар алқабында фотосессия',
            en: 'Visit mystical giant spherical concretions in Torysh valley',
            ru: 'Фотосессия в загадочной Долине шаров Торыш',
          },
        ],
        highlightSite: 'Шақпақ Ата жерасты мешіті',
      },
      {
        dayNumber: 2,
        title: {
          kk: '2-күн: Шопан Ата және қасиетті Оғыланды Бекет Ата',
          en: 'Day 2: Shopan Ata & Ogylandy Beket Ata Pilgrimage',
          ru: 'День 2: Святыня Шопан-ата и подземная обитель Бекет-ата',
        },
        activities: [
          {
            kk: 'Құмтаста қашалған Шопан Ата кешеніне зиярат ету',
            en: 'Pay respects at Shopan Ata ancient necropolis and rock rooms',
            ru: 'Посещение древнего некрополя и подземных покоев Шопан-ата',
          },
          {
            kk: 'Оғыланды шатқалына түсу, Бекет Ата жерасты мешітінде түнеу немесе кешкі бата алу',
            en: 'Descend scenic staircase to Beket Ata sanctuary, experience steppe tranquility',
            ru: 'Спуск в урочище Огланды к подземной мечети Бекет-ата, вечернее чаепитие',
          },
        ],
        highlightSite: 'Бекет Ата жерасты мешіті',
      },
      {
        dayNumber: 3,
        title: {
          kk: '3-күн: Бозжыра ай тақтасы және Тұзбайыр тұзды көлі',
          en: 'Day 3: Bozjyra Lunar Pinnacles & Tuzbair Salt Flat',
          ru: 'День 3: Марсианские клыки Бозжыры и солончак Тузбаир',
        },
        activities: [
          {
            kk: 'Бозжыра азулары панорамасына шығу, Марс секілді аппақ құздарды тамашалау',
            en: 'Viewpoint over Bozjyra chalk fangs, iconic limestone canyon panorama',
            ru: 'Панорамный вид на клыки Бозжыры, белоснежные каньоны плато Устюрт',
          },
          {
            kk: 'Ақтауға оралу, Каспий теңізінің жағасында демалу',
            en: 'Return to Aktau, evening sunset promenade along the Caspian Sea',
            ru: 'Возвращение в Актау, закат на набережной Каспийского моря',
          },
        ],
        highlightSite: 'Бозжыра шатқалы',
      },
    ],
    breakdown: {
      transport: 42000,
      tickets: 6000,
      hotel: 25000,
      food: 22000,
    },
    tips: {
      kk: 'Шөлді және тасты жерлер үшін міндетті түрде 4x4 джип қажет. Өзіңізбен бірге 5 литр ауыз су, күн көзілдірігін алыңыз.',
      en: '4x4 vehicle mandatory for desert terrain. Bring at least 5L drinking water, sun hat, and powerbank.',
      ru: 'Обязателен внедорожник 4х4 с опытным водителем. Возьмите запас воды и защиту от солнца.',
    },
  },
  {
    id: 'ulytau-2days',
    regionId: 'ulytau',
    title: {
      kk: 'Ұлытау: 2 күндік Алтын Орда мен Қазақ хандарының шежіресі',
      en: 'Ulytau: 2-Day Golden Horde Khans & Nomad Royal Sanctuary',
      ru: 'Улытау: 2-дневный исторический тур по следам ханов Золотой Орды',
    },
    duration: { kk: '2 күн / 1 түн', en: '2 Days / 1 Night', ru: '2 дня / 1 ночь' },
    budgetKzt: 55000,
    chipLabel: {
      kk: 'Ұлытау: 2 күн Алтын Орда (Жошы хан, Алаша хан)',
      en: 'Ulytau: 2 Days Golden Horde (Jochi Khan, Alasha Khan)',
      ru: 'Улытау: 2 дня Золотая Орда (Джучи-хан, Алаша-хан)',
    },
    days: [
      {
        dayNumber: 1,
        title: {
          kk: '1-күн: Шыңғыс ханның ұлы Жошы хан мен Домбауыл кесенелері',
          en: 'Day 1: Jochi Khan Mausoleum & Ancient Dombawyl Cenotaph',
          ru: 'День 1: Мавзолей Джучи-хана и древний кенотаф Домбауыл',
        },
        activities: [
          {
            kk: 'Жезқазғаннан Қаракеңгір өзенінің бойына жету, жаңа Сапар орталығымен танысу',
            en: 'Travel along Kara-Kengir River to modern Ulytau Visitor Center',
            ru: 'Поездка вдоль реки Каракенгир к новому визит-центру Улытау',
          },
          {
            kk: 'Қызыл кірпішті Жошы хан кесенесі мен тастан қаланған құпия Домбауыл кесенесін аралау',
            en: 'Inspect turquoise-domed Jochi Khan tomb and ancient stone dome Dombawyl',
            ru: 'Осмотр мавзолея хана Джучи с бирюзовым куполом и каменного памятника Домбауыл',
          },
        ],
        highlightSite: 'Жошы хан кесенесі',
      },
      {
        dayNumber: 2,
        title: {
          kk: '2-күн: Алаша хан кесенесі және Хан ордасы тарихи төбесі',
          en: 'Day 2: Alasha Khan Mausoleum & Royal Khan Coronation Hill',
          ru: 'День 2: Мавзолей Алаша-хана и холм коронации ханов Хан Ордасы',
        },
        activities: [
          {
            kk: 'Қазақ руларының таңбалары бейнеленген оюлы Алаша хан кесенесіне көтерілу',
            en: 'Climb internal staircase of Alasha Khan tomb with geometric nomad brickwork',
            ru: 'Подъем по винтовой лестнице мавзолея Алаша-хана с узорчатой терракотовой кладкой',
          },
          {
            kk: 'Үш жүздің басын қосқан қасиетті Ұлытау тауының баурайында серуендеу',
            en: 'Panoramic view from the sacred coronation grounds of all three Kazakh Juzes',
            ru: 'Панорама сакральной горы Улытау — места единения трех казахских жузов',
          },
        ],
        highlightSite: 'Алаша хан кесенесі',
      },
    ],
    breakdown: {
      transport: 18000,
      tickets: 4000,
      hotel: 18000,
      food: 15000,
    },
    tips: {
      kk: 'Ұлытауда жаңа Визит-орталық бар, онда интерактивті музей және тамақтану мүмкіндігі жасалған.',
      en: 'The new Ulytau Visitor Center provides modern museum exhibits, guides, and hospitality.',
      ru: 'Новый визит-центр «Улытау» предлагает интерактивный музей, кафе и сувениры.',
    },
  },
  {
    id: 'zhambyl-1day',
    regionId: 'zhambyl',
    title: {
      kk: 'Тараз: 1 күндік Қарахан дәуірінің сәулет жауһарлары',
      en: 'Taraz: 1-Day Karakhan Architectural Marvels & Love Legend',
      ru: 'Тараз: 1-дневный тур по шедеврам зодчества Караханидов',
    },
    duration: { kk: '1 күн', en: '1 Day', ru: '1 день' },
    budgetKzt: 28000,
    chipLabel: {
      kk: 'Тараз: 1 күн (Айша Бибі, Қарахан, Ақыртас)',
      en: 'Taraz: 1 Day (Aisha Bibi, Karakhan, Akyrtas)',
      ru: 'Тараз: 1 день (Айша-биби, Карахан, Акыртас)',
    },
    days: [
      {
        dayNumber: 1,
        title: {
          kk: 'Тараз қаласы және Айша бибі кесенесі',
          en: 'Ancient Taraz & UNESCO Aisha Bibi Complex',
          ru: 'Древний Тараз и комплекс Айша-биби (ЮНЕСКО)',
        },
        activities: [
          {
            kk: '60 түрлі терракоталық өрнегі бар XI ғасырлық Айша бибі және Бабаджа қатын кесенелері',
            en: 'Marvel at 60 unique carved terracotta tiles of 11th-century Aisha Bibi and Babadzha Khatun',
            ru: 'Осмотр 60 видов резной терракотовой плитки мавзолеев Айша-биби и Бабаджа-хатун',
          },
          {
            kk: 'Тараз орталығындағы Қарахан кесенесі мен Дәуітбек кесенесіне бару',
            en: 'Visit Karakhan ruler tomb and historic Dauytbek mausoleum in central Taraz park',
            ru: 'Посещение мавзолея основателя династии Карахана в центре Тараза',
          },
        ],
        highlightSite: 'Айша бибі кесенесі',
      },
    ],
    breakdown: {
      transport: 8000,
      tickets: 3000,
      hotel: 0,
      food: 17000,
    },
    tips: {
      kk: 'Таразға Алматы немесе Шымкенттен жүрдек «Тұлпар-Тальго» пойызымен оңай жетуге болады.',
      en: 'Conveniently accessible via high-speed Talgo trains from Almaty or Shymkent.',
      ru: 'Удобно добираться на скоростном поезде «Тальго» из Алматы или Шымкента.',
    },
  },
];

export const AiPlannerBanner: React.FC = () => {
  const { language, currency, setSelectedRegion } = useApp();
  const [activePlan, setActivePlan] = useState<ItineraryOption | null>(null);

  const content = {
    badge: {
      kk: 'AI-Саяхат жоспарлағыш · Beta',
      en: 'AI Travel Planner · Beta',
      ru: 'AI-планировщик путешествий · Beta',
    },
    title: {
      kk: 'Қайда барғыңыз келеді? AI дайын маршрут ұсынады',
      en: 'Where to next? AI generates day-by-day heritage itineraries',
      ru: 'Не знаете, куда поехать? ИИ подберет маршрут и расчет',
    },
    subtitle: {
      kk: 'Танымал бағытты немесе қызықтыратын облысты таңдаңыз. Жүйе күнделікті кестені, билеттер мен жатын орын бағасын дәл есептеп береді.',
      en: 'Pick a route chip below. The system estimates daily schedules, entrance tickets, logistics, and transparent costs.',
      ru: 'Выберите готовый маршрут. Система рассчитает отели, транспорт, билеты и день-за-днём план поездки.',
    },
    readyBadge: {
      kk: 'Интерактивті дайын маршруттар',
      en: 'Ready Routes',
      ru: 'Готовые маршруты',
    },
    budgetLabel: {
      kk: 'Жалпы болжамды шығын:',
      en: 'Total Estimated Cost:',
      ru: 'Ориентировочный бюджет:',
    },
    exploreRegion: {
      kk: 'Осы өңір нысандарын сүзу',
      en: 'Filter Region Monuments',
      ru: 'Показать объекты региона',
    },
    close: {
      kk: 'Жабу',
      en: 'Close',
      ru: 'Закрыть',
    },
    tipsTitle: {
      kk: 'Туристке маңызды кеңес:',
      en: 'Practical traveler advice:',
      ru: 'Совет для туриста:',
    },
  };

  const handleOpenPlan = (itinerary: ItineraryOption) => {
    setActivePlan(itinerary);
  };

  const handleApplyRegion = (regionId: string) => {
    const reg = REGIONS.find((r) => r.id === regionId);
    if (reg) {
      setSelectedRegion(reg);
    }
    const catalogEl = document.getElementById('destinations-catalog');
    setActivePlan(null);
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-[#FDFCFA] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Light Theme Kazakhstan.travel Card */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#FFF7EC] via-white to-[#FDFCFA] px-6 py-8 md:px-12 md:py-10 text-slate-900 shadow-lg border-2 border-[#E69A34]/30">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-12 top-1/2 -translate-y-1/2 h-56 w-56 rounded-full bg-[#E67E00]/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-[#F5A623]/15 blur-3xl"
          />

          <div className="relative z-10 flex flex-col items-start gap-6">
            <div className="flex flex-wrap items-center justify-between w-full gap-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E69A34]/40 text-xs font-bold tracking-widest text-[#E67E00] uppercase shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#E67E00]" />
                {content.badge[language]}
              </span>

              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200">
                <Compass className="w-3.5 h-3.5 text-[#E67E00]" />
                {content.readyBadge[language]}
              </span>
            </div>

            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight text-slate-900 leading-tight">
                {content.title[language]}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                {content.subtitle[language]}
              </p>
            </div>

            {/* Quick Interactive Route Chips in Light Theme */}
            <div className="w-full">
              <p className="text-xs uppercase tracking-wider text-[#A95700] font-bold mb-3">
                Дайын сапар маршруттары (шертсеңіз, есебі ашылады):
              </p>
              <div className="flex flex-wrap gap-2.5">
                {ITINERARIES.map((item) => {
                  const formattedBudget = formatPrice(item.budgetKzt, currency);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleOpenPlan(item)}
                      className="group inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white hover:bg-[#FFF1DD] hover:border-[#E67E00] px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-800 transition-all cursor-pointer active:scale-98 shadow-2xs"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#E67E00]" />
                      <span>{item.chipLabel[language]}</span>
                      <span className="text-[#E67E00] font-bold">
                        ({formattedBudget})
                      </span>
                      <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#E67E00] group-hover:translate-x-0.5 transition" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modal for Selected Route */}
      {activePlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setActivePlan(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white text-slate-900 shadow-2xl border border-slate-200 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActivePlan(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#E67E00] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>{content.badge[language]}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-600">
                <Clock className="w-3.5 h-3.5" />
                {activePlan.duration[language]}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
              {activePlan.title[language]}
            </h3>

            {/* Estimated Cost Summary Card */}
            <div className="mt-6 rounded-2xl bg-[#FFF7EC] border border-[#E69A34]/30 p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E69A34]/20">
                <div>
                  <span className="text-xs uppercase font-semibold text-slate-500">
                    {content.budgetLabel[language]}
                  </span>
                  <div className="text-2xl sm:text-3xl font-bold text-[#E67E00]">
                    ~{formatPrice(activePlan.budgetKzt, currency)}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Транспорт, отель, тамақтану және билеттер қамтылған</span>
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-[#E69A34]/20">
                  <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                    <Car className="w-3.5 h-3.5 text-[#E67E00]" />
                    <span>Көлік / Жол</span>
                  </div>
                  <div className="font-bold text-slate-900">
                    {formatPrice(activePlan.breakdown.transport, currency)}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-[#E69A34]/20">
                  <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                    <Hotel className="w-3.5 h-3.5 text-[#E67E00]" />
                    <span>Қонақ үй</span>
                  </div>
                  <div className="font-bold text-slate-900">
                    {formatPrice(activePlan.breakdown.hotel, currency)}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-[#E69A34]/20">
                  <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                    <Utensils className="w-3.5 h-3.5 text-[#E67E00]" />
                    <span>Тамақтану</span>
                  </div>
                  <div className="font-bold text-slate-900">
                    {formatPrice(activePlan.breakdown.food, currency)}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-[#E69A34]/20">
                  <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                    <Wallet className="w-3.5 h-3.5 text-[#E67E00]" />
                    <span>Билеттер</span>
                  </div>
                  <div className="font-bold text-slate-900">
                    {formatPrice(activePlan.breakdown.tickets, currency)}
                  </div>
                </div>
              </div>
            </div>

            {/* Day by Day Plan */}
            <div className="mt-8 space-y-6">
              <h4 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#E67E00]" />
                <span>Күнделікті сапар жоспары:</span>
              </h4>

              {activePlan.days.map((d) => (
                <div key={d.dayNumber} className="relative pl-6 pb-6 border-l-2 border-[#E67E00]/30 last:pb-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#E67E00] ring-4 ring-[#FFF7EC]" />
                  <div className="font-bold text-base text-slate-900 mb-2">
                    {d.title[language]}
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {d.activities.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E67E00] mt-2 shrink-0" />
                        <span>{act[language]}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 text-xs font-semibold text-[#E67E00]">
                    Басты нысан: {d.highlightSite}
                  </div>
                </div>
              ))}
            </div>

            {/* Practical Advice */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              <span className="font-bold text-slate-900 block mb-1">{content.tipsTitle[language]}</span>
              <p>{activePlan.tips[language]}</p>
            </div>

            {/* Footer Action */}
            <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setActivePlan(null)}
                className="px-5 py-2.5 rounded-2xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-semibold transition cursor-pointer"
              >
                {content.close[language]}
              </button>

              <button
                type="button"
                onClick={() => handleApplyRegion(activePlan.regionId)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-[#E67E00] hover:bg-[#CC6F00] text-white text-sm font-semibold transition shadow-sm cursor-pointer"
              >
                <span>{content.exploreRegion[language]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
