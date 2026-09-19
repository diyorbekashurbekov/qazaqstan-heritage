import type { Language } from '../types/tourism';

export interface InscriptionItem {
  location: Record<Language, string>;
  scriptType: Record<Language, string>;
  originalText: string;
  transliteration: string;
  meaning: Record<Language, string>;
  significance: Record<Language, string>;
}

export interface MonumentEpigraphy {
  modalSubHeader: Record<Language, string>;
  tabTitle: Record<Language, string>;
  eraName: Record<Language, string>;
  inscriptions: InscriptionItem[];
}

export const MONUMENT_EPIGRAPHY: Record<string, MonumentEpigraphy> = {
  yasawi: {
    modalSubHeader: {
      kk: '3D Уақыт машинасы және «Ясауи жазуларын сөйлету» тұжырымдамасы',
      en: '3D Time Machine & "Voicing Yasawi Inscriptions" Concept',
      ru: '3D Машина времени и концепт «Озвучивание надписей Ясави»',
    },
    tabTitle: {
      kk: '«Ясауи жазуларын сөйлету»',
      en: 'Voicing Yasawi Inscriptions',
      ru: '«Озвучивание надписей Ясави»',
    },
    eraName: {
      kk: 'XIV – XVI ғғ. Қожа Ахмет Ясауи және Қазақ Хандығы',
      en: '14th–16th Century: Yasawi & Kazakh Khanate',
      ru: 'XIV–XVI вв. Эпоха Ясави и Казахское Ханство',
    },
    inscriptions: [
      {
        location: {
          kk: 'Бас қасбет (Пештақ) фризі',
          en: 'Main Portal (Peshtak) Frieze',
          ru: 'Фриз главного портала (Пештак)',
        },
        scriptType: {
          kk: 'Көркем Сүлс (Сулюс) қолтаңбасы',
          en: 'Ornamental Thuluth Calligraphy',
          ru: 'Орнаментальный почерк Сулюс',
        },
        originalText: 'الملك لله الواحد القهار',
        transliteration: '«Әл-мүлкү лилләһил-Уахидил-Қаһһар»',
        meaning: {
          kk: '«Билік — Жалғыз әрі Бәріне Үстем Аллаға ғана тән» (Құран, Ғафир сүресі, 16-аят). Әмір Темірдің өз билігінің де шектеулі екенін, мәңгілік билік тек Жаратушыға тән екенін ескерту үшін жаздырған философиялық ұлағаты.',
          en: '"Sovereignty belongs to Allah alone, the One, the Subduer" (Quran 40:16). Timur placed this to signify that earthly power is fleeting, and supreme majesty belongs only to the Creator.',
          ru: '"Власть принадлежит Аллаху Единому, Всепобеждающему" (Коран 40:16). Напоминание правителям о бренности земной власти перед величием Творца.',
        },
        significance: {
          kk: 'Бұл жазу Ясауи кешенінің биіктігі 38.7 метрлік пештағының қасбетінде көгілдір майоликалық плиткалармен өрнектелген.',
          en: 'Rendered in turquoise-glazed ceramic tiles spanning the monumental 38.7-meter high gateway.',
          ru: 'Выложен лазурно-бирюзовыми изразцами на высоте 38.7 метров главного портала.',
        },
      },
      {
        location: {
          kk: 'Қазандық бөлмесіндегі Тайқазан ернеуі',
          en: 'Taikazan Rim Inscription (Central Hall)',
          ru: 'Надпись на ободе Тайказана (Казандык)',
        },
        scriptType: {
          kk: 'Қолаға қашалған рельефті Насх жазуы (1399 ж.)',
          en: 'Relief Bronze Naskh Inscription (1399 CE)',
          ru: 'Бронзовый рельефный почерк Насх (1399 г.)',
        },
        originalText: 'مبارك باد هذا الحوض برسم مشهد الشيخ احمد يسوي',
        transliteration: '«Мүбарак бад һәзә-л-хауз би-расми мәшһәд аш-Шейх Ахмад Йасауи...»',
        meaning: {
          kk: '«Шейх Ахмед Ясауидің қасиетті кешені үшін осы су құятын хауызға береке берілсін! Әмір Темірдің әмірімен ұста Әбдел Әзиз ибн Шарафуддин Тебризи құйды. 799 жыл (1399 ж.)»',
          en: '"May this basin be blessed for the holy shrine of Sheikh Ahmed Yasawi! Cast by master Abdul Aziz ibn Sharafuddin of Tabriz by order of Amir Timur, 1399 CE."',
          ru: '"Да будет благословен этот сосуд для святыни шейха Ахмеда Ясави! Отлит мастером Абдул Азизом ибн Шарафуддином из Тебриза по велению эмира Тимура, 1399 г."',
        },
        significance: {
          kk: 'Салмағы 2 тонна, сыйымдылығы 3000 литрлік Тайқазан 7 асыл металдың қорытпасынан құйылған бірегей шедевр.',
          en: 'Cast from a secret alloy of 7 metals, holding 3,000 liters of water blessed for pilgrims.',
          ru: 'Отлит из уникального сплава 7 металлов, вмещает 3000 литров священной воды для паломников.',
        },
      },
      {
        location: {
          kk: 'Солтүстік-батыс қабырғасы',
          en: 'North-Western Outer Wall',
          ru: 'Северо-западная наружная стена',
        },
        scriptType: {
          kk: 'Геометриялық Куфи (Баннаи тәсілі)',
          en: 'Geometric Square Kufic (Bannai Technique)',
          ru: 'Геометрический куфический стиль (Баннаи)',
        },
        originalText: 'الله • محمد • علي • سبحان الله',
        transliteration: '«Аллаһ • Мұхаммед • Әли • Субханаллаһ»',
        meaning: {
          kk: 'Қасиетті есімдер күйдірілген кірпіш пен көгілдір шынылы плиткалардың қиюласуы арқылы лабиринт тәрізді шексіз геометриялық ою түрінде жасырылған.',
          en: 'Sacred divine names woven in labyrinthine geometric harmony using interlocking turquoise glazed and matte terracotta bricks.',
          ru: 'Священные имена, зашифрованные в бесконечный геометрический лабиринт из бирюзовых глазурованных и терракотовых кирпичей.',
        },
        significance: {
          kk: 'Қабырғаға қашықтан қарағанда күрделі кілем оюы болып көрінсе, жақындағанда әрбір сызық куфи әріптері екені танылады.',
          en: 'From afar, it looks like an intricate ornamental carpet; up close, every contour reveals profound calligraphy.',
          ru: 'Издалека выглядит как традиционный ковровый орнамент, вблизи открывается сакральная каллиграфия.',
        },
      },
    ],
  },
  'aisha-bibi': {
    modalSubHeader: {
      kk: '3D Уақыт машинасы және «Айша бибі: 64 терракота сырын сөйлету» тұжырымдамасы',
      en: '3D Time Machine & "Voicing Aisha Bibi 64 Terracotta Secrets" Concept',
      ru: '3D Машина времени и концепт «Озвучивание 64 терракот Айша-биби»',
    },
    tabTitle: {
      kk: '«Айша бибі жазулары мен өрнектерін сөйлету»',
      en: 'Voicing Aisha Bibi Patterns',
      ru: '«Тайны надписей и орнаментов Айша-биби»',
    },
    eraName: {
      kk: 'XI – XII ғғ. Қарахан мемлекеті және Жібек жолы сәулеті',
      en: '11th–12th Century: Karakhanid Era & Silk Road Architecture',
      ru: 'XI–XII вв. Государство Караханидов и зодчество Шелкового пути',
    },
    inscriptions: [
      {
        location: {
          kk: 'Батыс бұрыштағы 18-бағана белдеуі',
          en: '18th Column Belt (Western Corner)',
          ru: 'Пояс 18-й колонны западного угла',
        },
        scriptType: {
          kk: 'Көне куфи және түркілік ою жазуы (XI–XII ғ.)',
          en: 'Ancient Kufic & Turkic Epigraphic Band',
          ru: 'Древнекуфическая вязь и тюркский эпиграфический пояс',
        },
        originalText: 'Осенние тучи... Мир прекрасен...',
        transliteration: '«Күз... бұлттар... дүние сұлу...»',
        meaning: {
          kk: '«Күз келді, бұлттар үйірілді... дүние неткен тамаша!» — өмірдің өткіншілігі мен таза пәк махаббаттың мәңгілік екенін білдіретін дала пәлсапасы.',
          en: '"Autumn arrived, clouds gather... how beautiful is this transient world!" — Steppe poetic wisdom on eternal love surpassing worldly mortality.',
          ru: '"Осень... сгущаются тучи... прекрасен сей бренный мир!" — степная философская элегия о вечной любви.',
        },
        significance: {
          kk: 'Қазақстан аумағындағы ең көне жазба ескерткіштердің бірі, терракота тақтасына күйдіріп жазылған.',
          en: 'One of the earliest architectural poetical inscriptions in Central Asia, fired onto terracotta tile.',
          ru: 'Один из древнейших поэтических памятников зодчества Центральной Азии на терракоте.',
        },
      },
      {
        location: {
          kk: 'Қасбеттегі 64 түрлі терракоталық блоктар',
          en: 'Facade 64 Unique Terracotta Panels',
          ru: 'Фасадные терракотовые блоки 64 видов',
        },
        scriptType: {
          kk: 'Қарахан дәуірінің геометриялық және зооморфтық өрнектері',
          en: 'Karakhanid Geometric & Zoomorphic Reliefs',
          ru: 'Караханидские геометрические и растительные рельефы',
        },
        originalText: 'Тәңірлік қос мүйіз • Жұлдыз • Тіршілік гүлі',
        transliteration: '«Қошқар мүйіз • Сегіз қырлы жұлдыз • Шексіз өмір»',
        meaning: {
          kk: 'Әрбір терракоталық плиткада исламдық геометрия мен байырғы далалық көшпенділер дүниетанымының (қошқар мүйіз, өмір бұтағы) синтезі көрініс тапқан.',
          en: 'Synthesis of Islamic Sacred Geometry and ancient nomadic steppe cosmology (ram horns, tree of life).',
          ru: 'Синтез исламской сакральной геометрии и кочевой космологии (рога барана, древо жизни).',
        },
        significance: {
          kk: 'Әлемде осы кесенеден басқа дәл осындай 64 түрлі оюлы терракота қаптамасы бар архитектуралық ескерткіш кездеспейді.',
          en: 'Unmatched globally: no other medieval monument features 64 distinct hand-carved terracotta tiles.',
          ru: 'Не имеет мировых аналогов по богатству 64 резных терракотовых орнаментов.',
        },
      },
    ],
  },
  otyrar: {
    modalSubHeader: {
      kk: '3D Уақыт машинасы және «Көне Отырар: Әл-Фараби жазбаларын сөйлету» тұжырымдамасы',
      en: '3D Time Machine & "Voicing Ancient Otyrar & Al-Farabi" Concept',
      ru: '3D Машина времени и концепт «Озвучивание Отырара и Аль-Фараби»',
    },
    tabTitle: {
      kk: '«Отырар жазбалары мен Фараби даналығын сөйлету»',
      en: 'Voicing Otyrar & Al-Farabi Wisdom',
      ru: '«Голос Отырара и мудрость Аль-Фараби»',
    },
    eraName: {
      kk: 'IX – XIII ғғ. Ұлы Жібек жолы & Отырар өркениеті',
      en: '9th–13th Century: Silk Road & Otyrar Civilization',
      ru: 'IX–XIII вв. Шелковый путь и цивилизация Отырара',
    },
    inscriptions: [
      {
        location: {
          kk: 'Әл-Фарабидің Отырар трактатынан үзінді',
          en: 'Al-Farabi Otyrar Treatise Excerpt',
          ru: 'Трактат Аль-Фараби из Отырара',
        },
        scriptType: {
          kk: 'Ортағасырлық ғылыми араб-түркі қолжазбасы',
          en: 'Medieval Scientific Arabic-Turkic Script',
          ru: 'Средневековый научный арабо-тюркский манускрипт',
        },
        originalText: 'المدينة الفاضلة هي التي يتعاون أهلها على نيل السعادة',
        transliteration: '«Әл-Мәдинатул-фазила... бақытқа жету жолындағы ізгі ынтымақтастық»',
        meaning: {
          kk: '«Қайырымды қала тұрғындары — адамдардың бір-біріне ізгілік пен білім арқылы шынайы бақытқа жетуге көмектесетін қоғамы». Аристотельден кейінгі екінші ұстаз әл-Фарабидің Отырарда дүниеге келген ұлы ойы.',
          en: '"The Virtuous City is that wherein people cooperate to achieve true happiness through knowledge and virtue" — Al-Farabi (The Second Teacher after Aristotle).',
          ru: '"Добродетельный город — это общество, где люди помогают друг другу обрести истинное счастье через знание и добродетель".',
        },
        significance: {
          kk: 'Отырар кітапханасы Александриядан кейінгі ежелгі дүниенің ең үлкен білім қоймасы болған.',
          en: 'Otyrar Library was considered the greatest repository of scrolls and books after Alexandria.',
          ru: 'Отырарская библиотека считалась вторым по величине книгохранилищем древности после Александрийской.',
        },
      },
    ],
  },
  'korkyt-ata': {
    modalSubHeader: {
      kk: '3D Уақыт машинасы және «Қорқыт ата: Қобыз сарынын сөйлету» тұжырымдамасы',
      en: '3D Time Machine & "Voicing Korkyt Ata Kobyz Epics" Concept',
      ru: '3D Машина времени и концепт «Озвучивание наследия Коркыта»',
    },
    tabTitle: {
      kk: '«Қорқыт ата нақылдары мен қобыз сарынын сөйлету»',
      en: 'Voicing Korkyt Aphorisms & Kobyz Tunes',
      ru: '«Наследие Коркыт Ата и звуки кобыза»',
    },
    eraName: {
      kk: 'VIII – X ғғ. Оғыз қағандығы және Сырдария өркениеті',
      en: '8th–10th Century: Oghuz Yabgu State & Syr Darya Steppe',
      ru: 'VIII–X вв. Огузское государство и степи Сырдарьи',
    },
    inscriptions: [
      {
        location: {
          kk: '«Қорқыт ата кітабы» («Китаби дәдәм Коркут»)',
          en: '"Book of Dede Korkut" Epic Lore',
          ru: '«Книга деда Коркыта»',
        },
        scriptType: {
          kk: 'Көне оғыз-қыпшақ шежірелік жазуы',
          en: 'Ancient Oghuz-Kipchak Epic Script',
          ru: 'Древний огузо-кыпчакский эпический текст',
        },
        originalText: 'Өлімнен ешкім құтыла алмас, бірақ ізгі іс пен күй өлмейді',
        transliteration: '«Тәкаппарлықты Тәңірі сүймес, көңілі пасық адамда дәулет болмас...»',
        meaning: {
          kk: 'Қорқыт ата — түркі дүниесінің алғашқы философы, қобыз аспабын ойлап тапқан күй атасы. Ол өлімнен қашып дүниенің төрт бұрышын аралап, ақыры мәңгілік өмірді өнер мен адамгершіліктен тапты.',
          en: 'Korkyt Ata: Patron of bards and inventor of the sacred Kobyz stringed instrument who found eternal life through art.',
          ru: 'Коркыт Ата — духовный патриарх тюрков, создатель кобыза, искавший бессмертие и нашедший его в музыке.',
        },
        significance: {
          kk: 'ЮНЕСКО-ның Адамзаттың материалдық емес мәдени мұрасы тізіміне енгізілген.',
          en: 'Inscribed on the UNESCO Representative List of the Intangible Cultural Heritage of Humanity.',
          ru: 'Внесен в список нематериального культурного наследия ЮНЕСКО.',
        },
      },
    ],
  },
  'beket-ata': {
    modalSubHeader: {
      kk: '3D Уақыт машинасы және «Бекет ата: Жерасты ғибадатхана сырын сөйлету» тұжырымдамасы',
      en: '3D Time Machine & "Voicing Beket Ata Underground Sanctuary" Concept',
      ru: '3D Машина времени и концепт «Озвучивание тайн Бекет-Ата»',
    },
    tabTitle: {
      kk: '«Бекет ата тағылымы мен рухани аманатын сөйлету»',
      en: 'Voicing Beket Ata Teachings',
      ru: '«Духовное наследие Пира Бекет-Ата»',
    },
    eraName: {
      kk: 'XVIII – XIX ғғ. Маңғыстау ағартушылығы және Пір Бекет дәуірі',
      en: '18th–19th Century: Mangystau Enlightenment & Pir Beket',
      ru: 'XVIII–XIX вв. Просвещение Мангистау и эпоха Бекета',
    },
    inscriptions: [
      {
        location: {
          kk: 'Оғыланды бор үңгірінің кіреберісі',
          en: 'Oglandy Chalk Cave Sanctuary Entrance',
          ru: 'Вход в пещерную мечеть Огланды',
        },
        scriptType: {
          kk: 'Тасқа қашалған араб-қазақ эпиграфикасы',
          en: 'Chalk-Rock Inscribed Epigraphy',
          ru: 'Высеченная на меловых скалах эпиграфика',
        },
        originalText: 'Мединада — Мұхаммед, Түркістанда — Қожа Ахмет, Маңғыстауда — Пір Бекет',
        transliteration: '«Білім — шамшырақ, әділдік — қорған»',
        meaning: {
          kk: 'Бекет Мырзағұлұлы — ұлы ғұлама, әулие, сәулетші және батыр. Ол табиғи ақ бор тауларын қолмен қашап, балаларға арналған жерасты медреселері мен ғибадатханаларын салды.',
          en: 'Beket Ata: Sufi educator, architect, and healer who hand-carved four underground limestone mosques for education.',
          ru: 'Бекет-Ата — просветитель, целитель и зодчий, вырубивший в меловых скалах четыре подземных медресе.',
        },
        significance: {
          kk: 'Үңгірдің ішінде ауа қысымы мен акустика жыл бойы бірқалыпты сақталады, суы мен ауасы емдік қасиетке ие.',
          en: 'Engineered with natural microclimate regulation keeping constant acoustic warmth year-round.',
          ru: 'Уникальная акустика и постоянный целебный микроклимат подземных залов круглый год.',
        },
      },
    ],
  },
  tanbaly: {
    modalSubHeader: {
      kk: '3D Уақыт машинасы және «Таңбалы: Күнбасты құдайлар петроглифтерін сөйлету» тұжырымдамасы',
      en: '3D Time Machine & "Voicing Tanbaly Sun Deities Petroglyphs" Concept',
      ru: '3D Машина времени и концепт «Озвучивание петроглифов Танбалы»',
    },
    tabTitle: {
      kk: '«Таңбалы жартас жазулары мен петроглифтерін сөйлету»',
      en: 'Voicing Tanbaly Rock Inscriptions',
      ru: '«Голос петроглифов Танбалы»',
    },
    eraName: {
      kk: 'Б.з.д. II мыңжылдық – Орта ғасырлар: 5000 петроглиф',
      en: '2nd Millennium BCE – Middle Ages: 5,000 Petroglyphs',
      ru: 'II тыс. до н.э. – Средние века: 5000 петроглифов',
    },
    inscriptions: [
      {
        location: {
          kk: 'IV топтағы орталық қасиетті жартас',
          en: 'Central Sanctuary Cliff (Group IV)',
          ru: 'Центральное святилище скалы (Группа IV)',
        },
        scriptType: {
          kk: 'Қола дәуірінің пикетаж тәсілімен қашалған петроглифтері',
          en: 'Bronze Age Pecked Petroglyph Art',
          ru: 'Точечная выбивка эпохи бронзы (пикетаж)',
        },
        originalText: 'Күнбасты құдайлар • Сакралды бишілер • Арқарлар',
        transliteration: '«Күн мен Көк Тәңірге тағзым ету ғұрпы»',
        meaning: {
          kk: 'Басынан күн сәулелері шашыраған тәңірлік антропоморфты кейіпкерлер — Күнге табыну культінің ең көне салтанаты. Көшпенділердің Күн мен Көк аспанды әлемнің қозғаушы күші ретінде тануы.',
          en: 'Sun-headed deities radiating cosmic halos: the most sacred open-air temple of solar cosmology in Eurasia.',
          ru: 'Солнцеголовые божества с нимбами-лучами: древнейший храм под открытым небом культа Солнца.',
        },
        significance: {
          kk: 'ЮНЕСКО-ның Бүкіләлемдік мұра тізіміне 2004 жылы енгізілген бірегей ғарыштық тас шежіресі.',
          en: 'Inscribed on the UNESCO World Heritage list in 2004 as an exceptional archaeological sanctuary.',
          ru: 'Объект Всемирного наследия ЮНЕСКО с 2004 года.',
        },
      },
    ],
  },
  'jochi-khan': {
    modalSubHeader: {
      kk: '3D Уақыт машинасы және «Жошы хан: Алтын Орда шежіресін сөйлету» тұжырымдамасы',
      en: '3D Time Machine & "Voicing Jochi Khan & Golden Horde" Concept',
      ru: '3D Машина времени и концепт «Озвучивание летописи Джучи Хана»',
    },
    tabTitle: {
      kk: '«Жошы хан шежіресі мен дала жарлықтарын сөйлету»',
      en: 'Voicing Jochi Khan Decrees',
      ru: '«Летопись Джучи Хана и законы степи»',
    },
    eraName: {
      kk: 'XIII – XIV ғғ. Ұлы Ұлыс (Алтын Орда) мемлекеттілігі',
      en: '13th–14th Century: Golden Horde (Jochid Ulus) Statehood',
      ru: 'XIII–XIV вв. Золотая Орда (Улус Джучи)',
    },
    inscriptions: [
      {
        location: {
          kk: 'Кесене маңдайшасы мен тарихи сағана',
          en: 'Mausoleum Portal & Royal Crypt',
          ru: 'Портал мавзолея и ханская гробница',
        },
        scriptType: {
          kk: 'Алтын Орданың ұйғыр-найман көне мемлекеттік жазуы',
          en: 'Old Uyghur-Mongol Imperial Steppe Script',
          ru: 'Староуйгурское делопроизводство Золотой Орды',
        },
        originalText: 'Ұлы Ұлыс ханы Жошы ханның мәңгілік ордасы',
        transliteration: '«Қарақорымнан Еділге дейінгі даланың көк күмбезі»',
        meaning: {
          kk: 'Шыңғыс ханның үлкен ұлы, қазақ хандарының тікелей түп атасы Жошы ханның Ұлытаудағы кесенесі. «Ақсақ құлан» аңызы осы қасиетті далада туған.',
          en: 'Resting place of Jochi, eldest son of Genghis Khan and progenitor of the Kazakh Khan dynasties.',
          ru: 'Мавзолей Джучи Хана в Улытау — родоначальника династий казахских ханов.',
        },
        significance: {
          kk: 'Қазақ мемлекеттілігінің қайнар көзі, қос қабатты көгілдір конустық күмбезді дала сәулеті.',
          en: 'The foundation stone of Kazakh statehood, crowned with a turquoise conical dome.',
          ru: 'Колыбель казахской государственности с бирюзовым шатровым куполом.',
        },
      },
    ],
  },
};

export function getMonumentEpigraphy(destinationId: string, _language?: Language) {
  if (MONUMENT_EPIGRAPHY[destinationId]) {
    return MONUMENT_EPIGRAPHY[destinationId];
  }

  // Generic customized template for any other destination
  return {
    modalSubHeader: {
      kk: `3D Уақыт машинасы және ұлттық мұра тұжырымдамасы`,
      en: `3D Time Machine & National Heritage Concept`,
      ru: `3D Машина времени и концепт национального наследия`,
    },
    tabTitle: {
      kk: `«Тарихи жазулар мен шежірені сөйлету»`,
      en: `Voicing Inscriptions & Lore`,
      ru: `«Озвучивание исторических надписей»`,
    },
    eraName: {
      kk: `Ұлы Даланың тарихи кезеңі`,
      en: `Great Steppe Historical Epoch`,
      ru: `Историческая эпоха Великой Степи`,
    },
    inscriptions: [
      {
        location: {
          kk: 'Тарихи стела мен қабырға жазуы',
          en: 'Historical Stele & Wall Epigraphy',
          ru: 'Историческая стела и надписи',
        },
        scriptType: {
          kk: 'Түркілік тарихи жазбалар',
          en: 'Turkic Historical Records',
          ru: 'Тюркские исторические хроники',
        },
        originalText: 'Елдік пен бірліктің, ерлік пен тағылымның мәңгілік белгісі',
        transliteration: '«Өткенді қастерлеу — болашаққа шамшырақ»',
        meaning: {
          kk: 'Бұл тарихи кешен ата-бабаларымыздың ерлігі мен рухани болмысын келер ұрпаққа жеткізетін киелі ескерткіш болып табылады.',
          en: 'This historical monument embodies the bravery, wisdom and spiritual heritage passed down through generations.',
          ru: 'Этот исторический комплекс олицетворяет мужество, мудрость и духовное наследие предков.',
        },
        significance: {
          kk: 'Қазақстанның мемлекеттік маңызы бар тарихи-мәдени мұрасы ретінде заңмен қорғалады.',
          en: 'Protected as a cultural heritage site of national significance.',
          ru: 'Охраняется как объект историко-культурного наследия государственного значения.',
        },
      },
    ],
  };
}
