import type { Language } from '../types/tourism';

export type StoryFocusId = 'overview' | 'dome' | 'facade' | 'ornaments' | 'entrance';

export interface CameraFocusPoint {
  position: [number, number, number];
  target: [number, number, number];
  title: Record<Language, string>;
  desc: Record<Language, string>;
}

export interface Monument3DHotspot {
  id: string;
  position: [number, number, number];
  title: Record<Language, string>;
  desc: Record<Language, string>;
}

export interface Monument3DConfig {
  id: string;
  modelUrl: string | null;
  status: 'ready' | 'in_development';
  developmentBadge?: Record<Language, string>;
  scale?: number;
  initialCameraPos: [number, number, number];
  initialTarget: [number, number, number];
  focusPoints: Record<StoryFocusId, CameraFocusPoint>;
  hotspots: Monument3DHotspot[];
}

export const MONUMENT_3D_REGISTRY: Record<string, Monument3DConfig> = {
  yasawi: {
    id: 'yasawi',
    modelUrl: '/models/yasawi.glb',
    status: 'ready',
    scale: 1.0,
    initialCameraPos: [32, 22, 38],
    initialTarget: [0, 10, 0],
    focusPoints: {
      overview: {
        position: [34, 24, 40],
        target: [0, 10, 0],
        title: {
          kk: '360° Толық панорамалық шолу',
          en: '360° Comprehensive Architectural Overview',
          ru: '360° Панорамный архитектурный обзор',
        },
        desc: {
          kk: 'Әмір Темір салдырған ортағасырлық 35 бөлмелі алып монументалды кешеннің тұтас көрінісі.',
          en: 'Timurid monumental complex with 35 interconnecting chambers around the central Taikazan hall.',
          ru: 'Монументальный тимуридский комплекс из 35 помещений вокруг центрального зала.',
        },
      },
      dome: {
        position: [0, 32, 18],
        target: [0, 22, -2],
        title: {
          kk: 'Қос қабатты көгілдір бас күмбез (38.7 м)',
          en: 'Double-Shelled Turquoise Ribbed Dome (38.7m)',
          ru: 'Двойной ребристый бирюзовый купол (38.7 м)',
        },
        desc: {
          kk: 'Диаметрі 18.2 метрлік қос қабатты күмбез күйдірілген кірпіштен қаланып, көгілдір майоликалық қышпен қапталған.',
          en: 'Spanning 18.2 meters in diameter, Central Asias largest surviving brick dome tiled in azure glazed ceramics.',
          ru: 'Купол диаметром 18.2 м, крупнейший кирпичный купол региона с бирюзовой глазурованной майоликой.',
        },
      },
      facade: {
        position: [0, 22, 34],
        target: [0, 16, 12],
        title: {
          kk: 'Монументалды бас пештақ (қасбет)',
          en: 'Monumental Entrance Portal (Peshtak)',
          ru: 'Главный монументальный портал (Пештак)',
        },
        desc: {
          kk: 'Әмір Темірдің бұйрығымен бой көтерген биік қасбет куфи жазулары мен көгілдір нақыштармен көмкерілген.',
          en: 'Towering portal frame adorned with Kufic inscriptions and intricate ceramic mosaics.',
          ru: 'Величественный портал, украшенный куфической вязью и лазурными мозаиками.',
        },
      },
      ornaments: {
        position: [-10, 18, 16],
        target: [-5, 14, 12],
        title: {
          kk: 'Сүлс және Баннаи каллиграфиялық өрнектері',
          en: 'Thuluth Calligraphy & Bannai Tilework',
          ru: 'Сулюсская каллиграфия и мозаика Баннаи',
        },
        desc: {
          kk: '«Билік — Жалғыз әрі Бәріне Үстем Аллаға ғана тән» деген тарихи фриз жазулары.',
          en: 'Sovereignty belongs to Allah alone inscribed along monumental geometric wall contours.',
          ru: 'Священные изречения, вплетенные в сложнейший геометрический орнамент изразцов.',
        },
      },
      entrance: {
        position: [0, 6, 20],
        target: [0, 4, 9],
        title: {
          kk: 'Қақпа, Көрхана және 2 тонналық Тайқазан',
          en: 'Portal Gateway & Sacred Bronze Cauldron',
          ru: 'Входная группа и священный Тайказан',
        },
        desc: {
          kk: '1399 жылы 7 асыл металдың қорытпасынан құйылған киелі Тайқазан мен оюлы ағаш есіктер.',
          en: 'Cast in 1399 CE from 7 precious metals, the 2-ton Tayqazan cauldron stands in the central hall.',
          ru: '2-тонный Тайказан 1399 года из сплава 7 благородных металлов и резные карагачевые двери.',
        },
      },
    },
    hotspots: [
      {
        id: 'dome',
        position: [0, 24, -2],
        title: {
          kk: 'Көгілдір қос күмбез',
          en: 'Double-Shelled Dome',
          ru: 'Двойной купол',
        },
        desc: {
          kk: '38.7 метр биіктіктегі күмбез мыңжылдық жер сілкіністеріне төтеп беретін инженерлік ғажайып.',
          en: 'Stands 38.7 meters high, engineered with seismic-resistant double-shell brick geometry.',
          ru: 'Инженерное чудо высотой 38.7 м с двойной кирпичной сейсмостойкой оболочкой.',
        },
      },
      {
        id: 'taikazan',
        position: [0, 3.5, -2],
        title: {
          kk: 'Киелі Тайқазан (1399 ж.)',
          en: 'Sacred Taikazan (1399 CE)',
          ru: 'Священный Тайказан (1399 г.)',
        },
        desc: {
          kk: 'Салмағы 2 тонна, сыйымдылығы 3000 литр. 7 металл қорытпасынан құйылған тарихи қазан.',
          en: '2 tons of bronze holding 3,000 liters of consecrated water for pilgrims.',
          ru: 'Вес 2 тонны, объем 3000 л, отлит мастером Абдул Азизом из Тебриза.',
        },
      },
      {
        id: 'portal',
        position: [0, 16, 12],
        title: {
          kk: 'Бас пештақ қасбеті',
          en: 'Peshtak Portal Gate',
          ru: 'Портал Пештак',
        },
        desc: {
          kk: 'Куфи жазулары мен көгілдір майоликалық геометриялық оюлар.',
          en: 'Geometric Kufic and Thuluth ornamental calligraphy.',
          ru: 'Куфические надписи и бирюзовые майоликовые панно.',
        },
      },
    ],
  },

  'aisha-bibi': {
    id: 'aisha-bibi',
    modelUrl: '/models/aisha-bibi.glb',
    status: 'ready',
    scale: 1.2,
    initialCameraPos: [20, 15, 24],
    initialTarget: [0, 7, 0],
    focusPoints: {
      overview: {
        position: [22, 16, 26],
        target: [0, 7, 0],
        title: {
          kk: '360° Айша бибі сәулеттік композициясы',
          en: '360° Aisha Bibi Architectural Composition',
          ru: '360° Архитектурная композиция Айша-биби',
        },
        desc: {
          kk: 'Қарахан дәуірінің (XI–XII ғ.) теңдессіз жауһары — 64 түрлі терракота тақталарымен көмкерілген кесене.',
          en: 'Karakhanid 11th-century masterpiece enveloped in 64 unique carved terracotta reliefs.',
          ru: 'Шедевр караханидского зодчества XI века, украшенный 64 видами терракотовой резьбы.',
        },
      },
      dome: {
        position: [0, 22, 14],
        target: [0, 14, 0],
        title: {
          kk: 'Шатырлы конустық күмбез',
          en: 'Conical Tent Dome',
          ru: 'Шатровый конический купол',
        },
        desc: {
          kk: 'Шаршы негізден 8 қырлы барабанға, одан әрі шатырлы күмбезге өтетін классикалық далалық пропорция.',
          en: 'Classic transition from square base to octagonal drum crowned with a conical tent roof.',
          ru: 'Переход от четверика к восьмерику и шатровому куполу.',
        },
      },
      facade: {
        position: [0, 10, 18],
        target: [0, 6, 4],
        title: {
          kk: 'Бас қасбет пен оюлы бағаналар',
          en: 'Main Facade & Tapered Corner Columns',
          ru: 'Главный фасад и фигурные колонны',
        },
        desc: {
          kk: 'Төменнен жоғары қарай жіңішкеретін 4 алып бұрыштық бағана және сүйір аркалы кіреберіс.',
          en: 'Four tapered corner columns and carved pointed arch entrance.',
          ru: 'Четыре сужающиеся кверху угловые колонны и стрельчатая входная ниша.',
        },
      },
      ornaments: {
        position: [-6, 8, 10],
        target: [-4, 6, 4],
        title: {
          kk: '64 түрлі терракоталық өрнек сыры',
          en: '64 Unique Carved Terracotta Motifs',
          ru: '64 вида уникальных терракотовых плиток',
        },
        desc: {
          kk: 'Қошқар мүйіз, сегіз қырлы жұлдыз, өмір бұтағы және көне куфи жазулары («Күз келді, дүние сұлу...»).',
          en: 'Ram horn solar spirals, 8-pointed stars, sacred tree of life and elegiac Kufic poem.',
          ru: 'Синтез рогов барана, древа жизни и древней поэтической элегии на терракоте.',
        },
      },
      entrance: {
        position: [0, 4, 12],
        target: [0, 3, 3],
        title: {
          kk: 'Кесене іші және мәңгілік махаббат сағанасы',
          en: 'Interior Crypt of Eternal Love',
          ru: 'Внутреннее пространство и саркофаг',
        },
        desc: {
          kk: 'Қарахан батыр мен Айша арудың пәк махаббатына арналған сағана және ішкі оюланған терезе.',
          en: 'Memorial sarcophagus and delicately carved interior terracotta squinch window.',
          ru: 'Усыпальница Айша-биби и резные арочные переходы интерьера.',
        },
      },
    },
    hotspots: [
      {
        id: 'column',
        position: [-5.6, 8, 5.6],
        title: {
          kk: 'Оюлы бұрыштық бағана',
          en: 'Carved Corner Column',
          ru: 'Резная угловая колонна',
        },
        desc: {
          kk: 'Әр бағана күйдірілген терракотаның ондаған түрлі бедерлі блоктарынан құралған.',
          en: 'Engineered from intricately interlocking molded terracotta blocks.',
          ru: 'Выложена из десятков видов рельефных терракотовых блоков.',
        },
      },
      {
        id: 'facade',
        position: [0, 6, 5.5],
        title: {
          kk: 'Сүйір кіреберіс аркасы',
          en: 'Pointed Archway Portal',
          ru: 'Стрельчатая арка портала',
        },
        desc: {
          kk: 'Қарахан дәуіріне тән сәулеттік композиция.',
          en: 'Signature Karakhanid medieval structural arch.',
          ru: 'Характерная стрельчатая арка караханидской эпохи.',
        },
      },
    ],
  },

  'korkyt-ata': {
    id: 'korkyt-ata',
    modelUrl: '/models/korkyt-ata.glb',
    status: 'ready',
    scale: 1.1,
    initialCameraPos: [26, 18, 30],
    initialTarget: [0, 9, 0],
    focusPoints: {
      overview: {
        position: [28, 20, 32],
        target: [0, 9, 0],
        title: {
          kk: '360° Қорқыт ата монументалды кешені',
          en: '360° Korkyt Ata Memorial Landscape',
          ru: '360° Мемориальный комплекс Коркыт Ата',
        },
        desc: {
          kk: 'Сырдария бойында бой көтерген, 4 қобыз бейнесіндегі 12.1 метрлік алып сәулет жауһары.',
          en: '12.1-meter high memorial evoking four soaring musical Kobyz instruments along the Syr Darya.',
          ru: '12-метровый архитектурный монумент в форме 4 устремленных в небо кобызов на Сырдарье.',
        },
      },
      dome: {
        position: [0, 26, 12],
        target: [0, 16, 0],
        title: {
          kk: 'Аспанға самғаған қобыз бастары',
          en: 'Soaring Kobyz Crowns',
          ru: 'Вершины стел в форме кобызов',
        },
        desc: {
          kk: 'Төрт бағытқа қараған стелалар дүниенің төрт бұрышына таралған рухани үнді білдіреді.',
          en: 'Facing the four cardinal directions, radiating spiritual harmony across the cosmos.',
          ru: 'Обращены к 4 сторонам света, символизируя гармонию вселенной.',
        },
      },
      facade: {
        position: [0, 12, 22],
        target: [0, 8, 0],
        title: {
          kk: 'Ақ әктасты мұнаралар қасбеті',
          en: 'White Limestone Tower Elevation',
          ru: 'Фасад монументальных стел',
        },
        desc: {
          kk: 'Маңғыстаудың ақ тасы мен арнайы акустикалық геометриямен қаланған бағандар.',
          en: 'Sculpted from luminous white limestone with parabolic acoustic curvature.',
          ru: 'Возведен из белого известняка с параболическими акустическими изгибами.',
        },
      },
      ornaments: {
        position: [6, 10, 8],
        target: [0, 7, 0],
        title: {
          kk: 'Орталық жел орган түтіктері',
          en: 'Acoustic Wind Organ Pipes',
          ru: 'Акустические органные трубы',
        },
        desc: {
          kk: 'Дала желі соққанда 40 қола түтік арқылы қобыз сарыны табиғи түрде күңіреніп үн қосады.',
          en: '40 bronze pipes resonate with traditional kobyz harmonies when the steppe wind blows.',
          ru: '40 бронзовых трубок издают звуки кобыза при малейшем степном ветре.',
        },
      },
      entrance: {
        position: [0, 4, 16],
        target: [0, 2, 4],
        title: {
          kk: 'Тағзым ету амфитеатры мен тілек тасы',
          en: 'Pilgrim Amphitheater & Sacred Stone',
          ru: 'Амфитеатр паломников и камень желаний',
        },
        desc: {
          kk: 'Мәңгілік өмірді өнерден тапқан түркі дүниесінің рухани дала орталығы.',
          en: 'Sanctuary dedicated to the father of Turkic music and eternal life through art.',
          ru: 'Святилище родоначальника тюркской музыки, обрекшего бессмертие в искусстве.',
        },
      },
    },
    hotspots: [
      {
        id: 'organ',
        position: [0, 8, 0],
        title: {
          kk: 'Жел қобызы (Акустикалық түтіктер)',
          en: 'Wind Kobyz Organ',
          ru: 'Поющий ветровой орган',
        },
        desc: {
          kk: 'Сәулетшілер жасаған арнайы акустикалық құрылғы.',
          en: 'Natural acoustic design playing continuous chord resonance.',
          ru: 'Акустическое устройство, резонирующее от ветра.',
        },
      },
    ],
  },

  'jochi-khan': {
    id: 'jochi-khan',
    modelUrl: '/models/jochi-khan.glb',
    status: 'ready',
    scale: 1.15,
    initialCameraPos: [22, 16, 26],
    initialTarget: [0, 7, 0],
    focusPoints: {
      overview: {
        position: [24, 18, 28],
        target: [0, 7, 0],
        title: {
          kk: '360° Жошы хан кесенесінің далалық көрінісі',
          en: '360° Jochi Khan Mausoleum Panorama',
          ru: '360° Мавзолей Джучи Хана в Улытау',
        },
        desc: {
          kk: 'Ұлытау төріндегі Алтын Орда (Ұлы Ұлыс) негізін қалаған Жошы ханның мәңгілік ордасы.',
          en: 'Golden Horde royal sanctuary erected in sacred Ulytau over the crypt of Jochi Khan.',
          ru: 'Мавзолей основателя Золотой Орды Джучи Хана в священном Улытау.',
        },
      },
      dome: {
        position: [0, 20, 12],
        target: [0, 13, -0.5],
        title: {
          kk: 'Көгілдір шатырлы конустық күмбез',
          en: 'Turquoise Conical Tent Dome',
          ru: 'Бирюзовый шатровый купол',
        },
        desc: {
          kk: 'Қос қабатты күмбез: ішкі жартысфералық және сыртқы көгілдір қышпен көмкерілген конустық шатыр.',
          en: 'Double dome structure: inner hemisphere beneath an exterior turquoise conical tent.',
          ru: 'Двойной купол: внутренний сферический под внешним бирюзовым шатром.',
        },
      },
      facade: {
        position: [0, 10, 16],
        target: [0, 6, 5],
        title: {
          kk: 'Порталды-пештақты бас қасбет',
          en: 'Monumental Arched Portal',
          ru: 'Портал Пештак мавзолея',
        },
        desc: {
          kk: 'Күйдірілген қызыл кірпіштен өрілген сүйір аркалы салтанатты қақпа.',
          en: 'Fired red-brick gateway with a deep pointed niche.',
          ru: 'Стрельчатый входной портал из жженого красного кирпича.',
        },
      },
      ornaments: {
        position: [-6, 8, 8],
        target: [-2, 6, 4],
        title: {
          kk: 'Алтын Орданың кірпіш қалау өнері',
          en: 'Golden Horde Brick Masonry',
          ru: 'Кирпичная кладка Золотой Орды',
        },
        desc: {
          kk: '«Ақсақ құлан» дастаны дүниеге келген дәуірдің таза далалық сәулет қолтаңбасы.',
          en: 'Authentic 13th-century steppe masonry dating to the legend of the Lame Onager.',
          ru: 'Масонская кладка XIII века эпохи сложения легенды «Аксак кулан».',
        },
      },
      entrance: {
        position: [0, 4, 12],
        target: [0, 3, 2],
        title: {
          kk: 'Хан сағанасы мен тарихи қабірхана',
          en: 'Khans Sarcophagus & Royal Crypt',
          ru: 'Ханский саркофаг и усыпальница',
        },
        desc: {
          kk: '1946 жылы Әлкей Марғұлан бастаған ғылыми экспедиция тапқан тарихи хан қабірі.',
          en: 'Royal burial chamber excavated by academician Alkei Margulan in 1946.',
          ru: 'Усыпальница, исследованная археологом Алькеем Маргуланом в 1946 году.',
        },
      },
    },
    hotspots: [
      {
        id: 'dome',
        position: [0, 13, -0.5],
        title: {
          kk: 'Көгілдір шатырлы күмбез',
          en: 'Turquoise Tent Dome',
          ru: 'Бирюзовый шатер',
        },
        desc: {
          kk: 'Дала төсіндегі көк аспанмен астасқан күмбез.',
          en: 'Striking conical silhouette visible across the steppe.',
          ru: 'Узнаваемый силуэт, возвышающийся над степью.',
        },
      },
    ],
  },

  otyrar: {
    id: 'otyrar',
    modelUrl: '/models/otyrar.glb',
    status: 'ready',
    scale: 1.0,
    initialCameraPos: [32, 20, 36],
    initialTarget: [0, 7, 0],
    focusPoints: {
      overview: {
        position: [34, 22, 38],
        target: [0, 7, 0],
        title: {
          kk: '360° Көне Отырар шаһарының бас қақпасы',
          en: '360° Ancient Otyrar Fortress & Gate',
          ru: '360° Цитадель и ворота древнего Отрара',
        },
        desc: {
          kk: 'Ұлы Жібек жолының ірі сауда және ғылыми мегаполисі, Әл-Фарабидің туған жері.',
          en: 'Grand Silk Road fortress and birthplace of philosopher Abu Nasr al-Farabi.',
          ru: 'Крепостные ворота мегаполиса Шелкового пути и родина Аль-Фараби.',
        },
      },
      dome: {
        position: [0, 24, 14],
        target: [0, 12, 0],
        title: {
          kk: 'Қос мұнаралы бастиондар',
          en: 'Twin Defensive Bastion Towers',
          ru: 'Бастионные башни крепости',
        },
        desc: {
          kk: 'Қаланы қорғауға арналған алып күйдірілген кірпішті қарауыл мұнаралары.',
          en: 'Imposing watchtower bastions that safeguarded international caravan routes.',
          ru: 'Мощные сторожевые башни, охранявшие караванный путь.',
        },
      },
      facade: {
        position: [0, 12, 20],
        target: [0, 7, 0],
        title: {
          kk: 'Цитадельдің салтанатты аркалы қақпасы',
          en: 'Ceremonial Citadel Gateway',
          ru: 'Парадный арочный портал цитадели',
        },
        desc: {
          kk: 'Керуендер мен елшілерді қарсы алған қаланың бас кіреберісі.',
          en: 'The grand portal welcoming Silk Road ambassadors and trade caravans.',
          ru: 'Главный вход, встречавший послов и караваны со всего мира.',
        },
      },
      ornaments: {
        position: [-10, 8, 12],
        target: [-4, 6, 4],
        title: {
          kk: 'Қыш су құбырлары мен кәріз жүйесі',
          en: 'Subterranean Ceramic Aqueducts',
          ru: 'Керамический водопровод и канализация',
        },
        desc: {
          kk: 'Орта ғасырларда қаланы таза ауыз сумен қамтыған озық инженерлік құбырлар.',
          en: 'Sophisticated ceramic pipeline engineering supplying fresh water to the city.',
          ru: 'Уникальная инженерная система керамического городского водопровода.',
        },
      },
      entrance: {
        position: [0, 4, 14],
        target: [0, 3, 0],
        title: {
          kk: 'Отырар кітапханасы мен монета сарайы',
          en: 'Otyrar Library & Royal Mint',
          ru: 'Отырарская библиотека и монетный двор',
        },
        desc: {
          kk: 'Александриядан кейінгі ең бай кітап қоры және алтын-күміс дирхамдар соққан орда.',
          en: 'Famed manuscript repository and active medieval mint of the Eurasian steppes.',
          ru: 'Второе по величине книгохранилище древности и монетный двор.',
        },
      },
    },
    hotspots: [
      {
        id: 'bastion',
        position: [-8.5, 12, 0],
        title: {
          kk: 'Қарауыл мұнарасы',
          en: 'Watchtower Bastion',
          ru: 'Сторожевая башня',
        },
        desc: {
          kk: 'Керуен жолын бақылайтын биік бекініс нүктесі.',
          en: 'Elevated fortification watchpoint over trade routes.',
          ru: 'Высотный фортификационный пункт наблюдения.',
        },
      },
    ],
  },

  'beket-ata': {
    id: 'beket-ata',
    modelUrl: '/models/beket-ata.glb',
    status: 'ready',
    scale: 1.05,
    initialCameraPos: [28, 18, 32],
    initialTarget: [0, 7, 0],
    focusPoints: {
      overview: {
        position: [30, 20, 34],
        target: [0, 7, 0],
        title: {
          kk: '360° Оғыланды ақ бор үңгірі',
          en: '360° Oglandy Chalk Sanctuary Panorama',
          ru: '360° Меловая скальная мечеть Огланды',
        },
        desc: {
          kk: 'Маңғыстаудың Үстірт шыңындағы ақ бор жартасын қолмен қашап салынған жерасты ғибадатханасы.',
          en: 'Underground rock sanctuary hand-carved into sheer chalk cliffs of the Ustyurt plateau.',
          ru: 'Подземная скальная мечеть, вручную высеченная в меловом каньоне Устюрта.',
        },
      },
      dome: {
        position: [0, 22, 14],
        target: [0, 12, 0],
        title: {
          kk: 'Табиғи бор күмбезі мен жарық ойығы',
          en: 'Natural Chalk Ceiling & Light Wells',
          ru: 'Меловой свод со световыми колодцами',
        },
        desc: {
          kk: 'Акустика мен табиғи ауа қысымын жыл бойы бірқалыпты сақтайтын жерасты күмбездері.',
          en: 'Natural microclimate balancing temperature and acoustics through subterranean light shafts.',
          ru: 'Подземные световые колодцы, поддерживающие лечебный микроклимат круглый год.',
        },
      },
      facade: {
        position: [0, 10, 20],
        target: [0, 6, 8],
        title: {
          kk: 'Қашалған кіреберіс аркасы',
          en: 'Chiseled Cliff Portal',
          ru: 'Высеченный скальный портал',
        },
        desc: {
          kk: 'Бекет ата мен шәкірттерінің өз қолдарымен қашаған киелі кіреберісі.',
          en: 'Sacred limestone entrance hand-carved by Pir Beket and his students.',
          ru: 'Священный портал, вырубленный просветителем Бекет-Ата.',
        },
      },
      ornaments: {
        position: [-6, 6, 12],
        target: [-2, 4, 8],
        title: {
          kk: 'Тастағы араб-қазақ эпиграфикасы',
          en: 'Chalk-Inscribed Sufi Epigraphy',
          ru: 'Наскальная суфийская эпиграфика',
        },
        desc: {
          kk: '«Білім — шамшырақ, әділдік — қорған» философиялық тағылымы.',
          en: 'Knowledge is a guiding lantern, justice is the fortress of humanity.',
          ru: '«Знание — светильник, справедливость — оплот».',
        },
      },
      entrance: {
        position: [0, 3, 16],
        target: [0, 2, 10],
        title: {
          kk: 'Тәуап ету баспалдақтары мен дәріс залы',
          en: 'Pilgrimage Ascent & Madrasa Hall',
          ru: 'Ступени паломников и медресе',
        },
        desc: {
          kk: 'Мыңдаған зиярат етушілер өтетін сакралды тау баспалдақтары мен жерасты дәрісханасы.',
          en: 'Pilgrimage trail descending down the canyon into the rock-carved classrooms.',
          ru: 'Тропа паломников, ведущая в подземные учебные кельи медресе.',
        },
      },
    },
    hotspots: [
      {
        id: 'entrance',
        position: [0, 6, 11],
        title: {
          kk: 'Жерасты кіреберісі',
          en: 'Cave Sanctuary Entrance',
          ru: 'Вход в пещерную мечеть',
        },
        desc: {
          kk: 'Бор қабырғаларында тұрақты температура сақталады.',
          en: 'Chalk walls naturally regulate climate year-round.',
          ru: 'Меловые стены сохраняют постоянную температуру.',
        },
      },
    ],
  },

  tanbaly: {
    id: 'tanbaly',
    modelUrl: '/models/tanbaly.glb',
    status: 'ready',
    scale: 1.1,
    initialCameraPos: [26, 16, 28],
    initialTarget: [0, 6, 0],
    focusPoints: {
      overview: {
        position: [28, 18, 30],
        target: [0, 6, 0],
        title: {
          kk: '360° Таңбалы ашық аспан астындағы ғибадатханасы',
          en: '360° Tanbaly Open-Air Solar Sanctuary',
          ru: '360° Святилище петроглифов Танбалы',
        },
        desc: {
          kk: 'ЮНЕСКО Бүкіләлемдік мұрасы: қола дәуірінен бастап қашалған 5000-нан астам петроглифтер кешені.',
          en: 'UNESCO World Heritage Site with over 5,000 petroglyphs spanning from the Bronze Age.',
          ru: 'Объект Всемирного наследия ЮНЕСКО: более 5000 наскальных рисунков эпохи бронзы.',
        },
      },
      dome: {
        position: [0, 18, 12],
        target: [0, 8, -4],
        title: {
          kk: 'Орталық IV топтағы сакралды жартас',
          en: 'Central Sanctuary Cliff (Group IV)',
          ru: 'Центральная скала святилища (Группа IV)',
        },
        desc: {
          kk: 'Тәңірлік күн культі мен діни рәсімдер өткен табиғи тас амфитеатрдың биік қыры.',
          en: 'Dramatic canyon cliff where solar worship rituals took place millennia ago.',
          ru: 'Природный скальный амфитеатр проведения древних солярных ритуалов.',
        },
      },
      facade: {
        position: [0, 9, 10],
        target: [0, 7.5, -1],
        title: {
          kk: 'Күнбасты құдайлар бедері',
          en: 'Sun-Headed Deity Petroglyph',
          ru: 'Солнцеголовое божество',
        },
        desc: {
          kk: 'Басынан күн шапағы шашыраған тәңірлік билеушілердің тасқа қашалған түпнұсқа бейнесі.',
          en: 'Radiant solar halos etched into dark rock patina with Bronze Age precision.',
          ru: 'Выбитый на скале образ божества с сияющим солнечным венцом-нимбом.',
        },
      },
      ornaments: {
        position: [-4, 8, 4],
        target: [-1, 7, -1],
        title: {
          kk: 'Пикетаж тәсілі және сакралды бишілер',
          en: 'Pecked Petroglyph Art & Dancers',
          ru: 'Точечная выбивка и ритуальные танцоры',
        },
        desc: {
          kk: 'Қола құралдармен тасты ұрып қашау тәсілі (пикетаж) арқылы салынған шедеврлер.',
          en: 'Point-pecked metallurgy engraving showing ritual dancers and wild argali sheep.',
          ru: 'Техника пикетажа (точечной выбивки) ритуальных хороводов и архаров.',
        },
      },
      entrance: {
        position: [0, 3, 14],
        target: [0, 2, 0],
        title: {
          kk: 'Таңбалы шатқалының саяхат соқпағы',
          en: 'Tanbaly Canyon Exploration Trail',
          ru: 'Экологическая тропа каньона Танбалы',
        },
        desc: {
          kk: 'Ғасырлар тереңіне бойлайтын киелі дала шежіресінің туристік бағыты.',
          en: 'Heritage trail wandering through natural steppe gorges and archaeological terraces.',
          ru: 'Экскурсионная тропа через каньон к древнейшим наскальным террасам.',
        },
      },
    },
    hotspots: [
      {
        id: 'sun_god',
        position: [0, 8.5, -1],
        title: {
          kk: 'Күнбасты Тәңір',
          en: 'Sun-Headed Deity',
          ru: 'Солнцеголовый Творец',
        },
        desc: {
          kk: 'ЮНЕСКО мойындаған қола дәуірінің басты петроглифі.',
          en: 'Iconic Bronze Age solar petroglyph recognized by UNESCO.',
          ru: 'Главный солярный петроглиф Евразии.',
        },
      },
    ],
  },
};

// Generic generator for monuments currently in laser scanning preparation
export function getMonument3DConfig(id: string): Monument3DConfig {
  if (MONUMENT_3D_REGISTRY[id]) {
    return MONUMENT_3D_REGISTRY[id];
  }

  return {
    id,
    modelUrl: null,
    status: 'in_development',
    developmentBadge: {
      kk: '3D модель дайындалуда (3D лазерлік сканерлеу кезеңінде)',
      en: '3D Model in Preparation (High-Precision Laser Scanning Phase)',
      ru: '3D модель готовится (Этап высокоточного лазерного сканирования)',
    },
    initialCameraPos: [24, 16, 28],
    initialTarget: [0, 6, 0],
    focusPoints: {
      overview: {
        position: [26, 18, 30],
        target: [0, 6, 0],
        title: {
          kk: '360° Сәулеттік құрылым шолуы',
          en: '360° Architectural Structure Overview',
          ru: '360° Архитектурный каркас',
        },
        desc: {
          kk: 'Ескерткіштің сәулеттік габариттері мен лазерлік сканерлеу геодезиясы.',
          en: 'Architectural envelope and laser scanning geodetic survey coordinates.',
          ru: 'Архитектурные габариты и геодезические координаты лазерного сканирования.',
        },
      },
      dome: {
        position: [0, 18, 14],
        target: [0, 10, 0],
        title: {
          kk: 'Күмбез және төбе сәулеті',
          en: 'Dome & Upper Architecture',
          ru: 'Купол и верхняя конструкция',
        },
        desc: {
          kk: 'Ғимараттың биіктік белдеуі мен күмбездік құрылымы.',
          en: 'Roof elevation and dome load-bearing contours.',
          ru: 'Высотный пояс и купольные несущие конструкции.',
        },
      },
      facade: {
        position: [0, 10, 18],
        target: [0, 5, 0],
        title: {
          kk: 'Бас қасбет сұлбасы',
          en: 'Main Facade Silhouette',
          ru: 'Силуэт главного фасада',
        },
        desc: {
          kk: 'Ескерткіштің кіреберіс қасбеті мен қабырға параметрлері.',
          en: 'Facade boundary measurements and portal elevation.',
          ru: 'Параметры фасада и входной группы.',
        },
      },
      ornaments: {
        position: [-6, 7, 10],
        target: [-2, 5, 2],
        title: {
          kk: 'Өрнектер мен қаптама деректері',
          en: 'Ornament & Surface Material Data',
          ru: 'Данные орнаментов и материалов',
        },
        desc: {
          kk: 'Тарихи жазбалар, тас қашаулар және беттік құрылымы.',
          en: 'Historical masonry, surface textures and epigraphy archives.',
          ru: 'Историческая кладка, текстуры и архивные записи.',
        },
      },
      entrance: {
        position: [0, 4, 14],
        target: [0, 2, 2],
        title: {
          kk: 'Кіреберіс және туристік қолжетімділік',
          en: 'Entrance & Visitor Accessibility',
          ru: 'Входная группа и доступность',
        },
        desc: {
          kk: 'Келушілерге арналған кіру бағыты мен сапар логистикасы.',
          en: 'Visitor entry corridor and pilgrimage logistics.',
          ru: 'Маршрут входа для посетителей и логистика визита.',
        },
      },
    },
    hotspots: [
      {
        id: 'survey_station',
        position: [0, 6, 0],
        title: {
          kk: '3D Лазерлік сканерлеу станциясы',
          en: '3D Laser Scanning Station',
          ru: 'Станция 3D лазерного сканирования',
        },
        desc: {
          kk: 'ҚР Мәдениет және ақпарат министрлігінің тарихи мұраны цифрландыру бағдарламасы бойынша 3D бұлтты нүктелері жинақталуда.',
          en: 'Point cloud photogrammetry and LiDAR data collection currently in progress under National Heritage Digitalization program.',
          ru: 'Сбор облака точек фотограмметрии и LiDAR в рамках программы цифровизации наследия.',
        },
      },
    ],
  };
}
