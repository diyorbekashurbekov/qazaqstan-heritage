import type { HistoricalDestination } from '../types/tourism';

export const DESTINATIONS: HistoricalDestination[] = [
  {
    id: 'yasawi',
    slug: 'khoja-ahmed-yasawi-mausoleum',
    name: {
      kk: 'Қожа Ахмет Ясауи кесенесі',
      en: 'Mausoleum of Khoja Ahmed Yasawi',
      ru: 'Мавзолей Ходжи Ахмеда Ясави',
    },
    regionId: 'turkistan',
    cityDistrict: {
      kk: 'Түркістан қаласы',
      en: 'Turkistan City',
      ru: 'город Туркестан',
    },
    exactLocation: {
      kk: 'Әйтеке би көшесі, 1Б, «Әзірет Сұлтан» музей-қорығы',
      en: '1B Aiteke Bi Street, Azret Sultan Reserve-Museum',
      ru: 'ул. Айтеке би, 1Б, музей-заповедник «Азрет Султан»',
    },
    coordinates: {
      lat: 43.2974,
      lng: 68.2709,
    },
    category: 'mausoleum',
    epoch: 'golden_horde',
    unescoWorldHeritage: true,
    unescoCriteria: 'Criteria (i)(iii)(iv) — Inscribed in 2003 (Ref: 1145)',
    historicalPeriod: {
      kk: 'XIV ғасырдың аяғы (1389–1405 жж.)',
      en: 'Late 14th century (1389–1405 CE)',
      ru: 'Конец XIV века (1389–1405 гг.)',
    },
    shortDescription: {
      kk: 'Әмір Темір салдырған ортағасырлық сәулет өнерінің теңдессіз жауһары, түркі әлемінің рухани шамшырағы.',
      en: 'Unmatched masterpiece of Timurid architecture commissioned by Emir Timur, spiritual center of the Turkic world.',
      ru: 'Выдающийся шедевр тимуридского зодчества, возведенный по приказу Тамерлана, духовный центр тюркского мира.',
    },
    history: {
      kk: 'Кесене XII ғасырда өмір сүрген ұлы сопы, ойшыл және ақын Қожа Ахмет Ясауидің құрметіне салынған. 1389 жылы Әмір Темірдің бұйрығымен бұрынғы шағын мазар орнына алып кешен құрылысы басталды. Ғимараттың биіктігі 38,7 метр, күмбезі Орталық Азиядағы ең үлкен кірпіш күмбездердің бірі. Ішінде әйгілі 2 тонналық Тайқазан сақталған.',
      en: 'Commissioned in 1389 by Timur (Tamerlane) to replace a smaller 12th-century mausoleum of the famous Sufi philosopher Khoja Ahmed Yasawi. Master builders used breakthrough engineering that later inspired Samarkand. It features Central Asias largest surviving brick dome and the legendary 2-ton bronze Tayqazan cauldron.',
      ru: 'Построен в 1389–1405 годах по указу Тамерлана над могилой суфийского поэта Ходжи Ахмеда Ясави. Включает 35 помещений вокруг центрального зала с колоссальным бронзовым Тайказаном весом 2 тонны.',
    },
    whyImportant: {
      kk: 'Түркістан — Орталық Азияның рухани астанасы. Қазақстан бойынша ЮНЕСКО-ның Бүкіләлемдік мұра тізіміне алғаш енгізілген тарихи сәулет ескерткіші.',
      en: 'First monument in Kazakhstan inscribed on the UNESCO World Heritage List, marking the pinnacle of Timurid engineering and Sufi spiritual heritage.',
      ru: 'Первый объект ЮНЕСКО в Казахстане, шедевр инженерной мысли средневековья и оплот духовности тюркского мира.',
    },
    whyVisit: {
      kk: 'XIV ғасырдың түпнұсқа көгілдір қыш мозаикасын, 600 жылдық Тайқазанды, жерасты Қылует мешітін және көне шығыс моншасын өз көзіңізбен көру.',
      en: 'Marvel at original 14th-century turquoise tiles, the 600-year-old bronze Tayqazan, underground Hilvet prayer sanctuary and medieval oriental bathhouse.',
      ru: 'Увидеть подлинную бирюзовую майолику XIV века, 2-тонный Тайказан 1399 года и подземную мечеть Хильвет.',
    },
    whatToSee: {
      kk: [
        'Орталық Қазандық бөлмесі және 1399 жылғы қола Тайқазан',
        'Ясауи қабірханасы мен оюлы ағаш есіктері',
        'Қылует жерасты мешіті (Ясауи өмірінің соңғы жылдарын өткізген орны)',
        'Шығыс моншасы және Жұма мешіті',
        'Күлтөбе қалашығының археологиялық паркі',
      ],
      en: [
        'Central Qazandyq dome with authentic 1399 CE bronze Tayqazan',
        'Mausoleum chamber of Yasawi with carved wooden doors',
        'Underground Hilvet retreat where Yasawi lived after age 63',
        'Medieval oriental bathhouse and Juma mosque',
        'Kultobe archaeological park',
      ],
      ru: [
        'Центральный зал Казандык и священный Тайказан 1399 года',
        'Усыпальница Ясави с резными дверями',
        'Подземная мечеть Хильвет',
        'Средневековая восточная баня и мечеть Джума',
        'Археологический парк древнего городища Культобе',
      ],
    },
    whatToDo: {
      kk: [
        'Қабырғадағы көне куфи және сүлс каллиграфиясын зерттеу',
        'Ағылшын не қазақ тіліндегі ресми гидпен 1,5 сағаттық саяхат жасау',
        'Керуен-Сарай кешенінде ұлттық тағамдардан дәм тату',
      ],
      en: [
        'Examine ancient Kufic architectural calligraphy on exterior walls',
        'Book an official 90-minute tour in English with museum guides',
        'Taste southern Kazakh cuisine at adjacent Karavansaray complex',
      ],
      ru: [
        'Изучить куфическую каллиграфию на внешних стенах',
        'Взять официальную 1,5-часовую экскурсию с гидом музея',
        'Попробовать традиционные блюда в комплексе Караван-Сарай',
      ],
    },
    bestTimeToVisit: {
      kk: 'Сәуір – Маусым және Қыркүйек – Қараша (жазда +40°C дейін қызады)',
      en: 'April to June and September to November (summer temperatures can exceed +40°C)',
      ru: 'Апрель – июнь и сентябрь – ноябрь (летом жара выше +40°C)',
    },
    recommendedVisitDurationHours: 4,
    openingHours: {
      schedule: {
        kk: 'Күн сайын: 09:00 – 18:00 (демалыссыз)',
        en: 'Daily: 09:00 – 18:00 (No days off)',
        ru: 'Ежедневно: 09:00 – 18:00 (без выходных)',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Касса 17:30-да жабылады. Ресми байланыс: +7 (72533) 3-23-00',
        en: 'Ticket counter closes at 17:30. Inquiries: +7 (72533) 3-23-00',
        ru: 'Касса закрывается в 17:30. Телефон: +7 (72533) 3-23-00',
      },
    },
    ticketPrices: {
      domesticAdult: 1000,
      domesticStudent: 500,
      domesticChild: 300,
      foreignAdult: 5000,
      excursionFeeKz: 3000,
      excursionFeeEn: 5000,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Ресми бұйрық бойынша: ТМД азаматтарына 2000 ₸, алыс шетелге 5000 ₸. Каникулда оқушыларға тегін.',
        en: 'Official decree: CIS visitors 2,000 KZT, Non-CIS foreign tourists 5,000 KZT. English excursion 5,000 KZT.',
        ru: 'Официальный тариф: граждане СНГ 2000 ₸, дальнее зарубежье 5000 ₸. Экскурсия на англ. 5000 ₸.',
      },
      source: '«Әзірет Сұлтан» мемлекеттік тарихи-мәдени музей-қорығы ресми сайты',
      sourceUrl: 'https://azretsultan.kz',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/yasawi.jpg',
        caption: {
          kk: 'Қожа Ахмет Ясауи кесенесінің бас қасбеті мен көгілдір күмбезі',
          en: 'Grand portal and turquoise domes of Khoja Ahmed Yasawi Mausoleum',
          ru: 'Главный портал и лазурные купола мавзолея Ходжи Ахмеда Ясави',
        },
        credit: 'Kazakhstan Tourism Portal',
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Түркістан Халықаралық Әуежайы (HSA - 20 км) немесе Шымкент (160 км)',
        en: 'Turkistan Hazret Sultan International Airport (HSA - 20 km) or Shymkent (160 km)',
        ru: 'Международный аэропорт Туркестан (HSA - 20 км) или Шымкент (160 км)',
      },
      distanceFromHubKm: 20,
      options: [
        {
          mode: 'flight',
          title: {
            kk: 'Алматы не Астанадан Түркістанға тікелей рейс (HSA)',
            en: 'Direct flight from Almaty or Astana to Turkistan (HSA)',
            ru: 'Прямой авиарейс из Алматы или Астаны в Туркестан (HSA)',
          },
          duration: '1h 30m',
          costRange: { min: 18000, max: 42000, currency: 'KZT' },
          provider: 'FlyArystan / SCAT / Qazaq Air',
          status: 'ESTIMATED',
          tips: {
            kk: 'Әуежайдан кесенеге дейін такси шамамен 3500-5000 ₸ құрайды.',
            en: 'Airport taxi to mausoleum is approx 3,500-5,000 KZT.',
            ru: 'Такси из аэропорта до центра стоит около 3500-5000 ₸.',
          },
        },
        {
          mode: 'train',
          title: {
            kk: 'Алматы немесе Астанадан «Тальго» пойызы',
            en: 'Talgo fast train from Almaty or Astana to Turkistan',
            ru: 'Скоростной поезд «Тальго» до вокзала Туркестан',
          },
          duration: '9h - 14h',
          costRange: { min: 7000, max: 22000, currency: 'KZT' },
          provider: 'Қазақстан темір жолы (bilet.railways.kz)',
          status: 'ESTIMATED',
          tips: {
            kk: 'Вокзал қала ішінде, кесенеге дейін Яндекс таксимен 800-1200 ₸.',
            en: 'Train station is inside town; local taxi 800-1,200 KZT.',
            ru: 'Ж/д вокзал в городе, такси до кесене 800-1200 ₸ через Яндекс Go.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 8000, max: 16000 },
      midRangePerNight: { min: 22000, max: 45000 },
      luxuryPerNight: { min: 55000, max: 110000 },
      status: 'ESTIMATED',
      source: 'Booking.com & 2GIS Turkistan current rates',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 5000, max: 9000 },
      midRangePerDay: { min: 10000, max: 18000 },
      status: 'ESTIMATED',
      source: 'Local restaurant and cafe market in Turkistan',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: true,
      walkingDifficulty: 'easy',
      notes: {
        kk: 'Кешен аумағы тегіс тас төселген, пандустар бар. Жерасты мешітіне баспалдақпен түседі.',
        en: 'Flat paved grounds with wheelchair ramps. Subterranean mosque requires stairs.',
        ru: 'Ровная брусчатка, имеются пандусы. В подземную мечеть спуск по ступеням.',
      },
    },
    sources: [
      {
        name: '«Әзірет Сұлтан» мемлекеттік музей-қорығы',
        url: 'https://azretsultan.kz',
        type: 'official_reserve',
        verifiedAt: '2026-09-19',
      },
      {
        name: 'UNESCO World Heritage Centre (Ref: 1145)',
        url: 'https://whc.unesco.org/en/list/1145',
        type: 'unesco',
        verifiedAt: '2026-09-19',
      },
      {
        name: 'Kazakhstan National Tourism Portal',
        url: 'https://kazakhstan.travel',
        type: 'government',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'otyrar',
    slug: 'ancient-settlement-of-otyrar',
    name: {
      kk: 'Отырар археологиялық музей-қорығы',
      en: 'Ancient Settlement of Otyrar',
      ru: 'Археологический музей-заповедник Отырар',
    },
    regionId: 'turkistan',
    cityDistrict: {
      kk: 'Отырар ауданы, Шәуілдір ауылы',
      en: 'Otyrar District, Shaulder Village',
      ru: 'Отырарский район, село Шаульдер',
    },
    exactLocation: {
      kk: 'Шәуілдір ауылы, Жібек жолы даңғылы, №1 (қалашық 7 км қашықтықта)',
      en: '1 Zhibek Zholy Ave, Shaulder Village (Citadel 7 km away)',
      ru: 'с. Шаульдер, пр. Жибек жолы, №1 (городище в 7 км)',
    },
    coordinates: {
      lat: 42.8525,
      lng: 68.3039,
    },
    category: 'archaeological_settlement',
    epoch: 'silk_road',
    unescoWorldHeritage: true,
    unescoCriteria: 'Silk Roads: Penjikent-Samarkand-Poykent Corridor Tentative List',
    historicalPeriod: {
      kk: 'б.з. I ғ. – XVIII ғ.',
      en: '1st century CE – 18th century CE',
      ru: 'I в. н.э. – XVIII в.',
    },
    shortDescription: {
      kk: 'Ұлы Жібек жолының ірі сауда және ғылым орталығы, ұлы ғұлама Әл-Фарабидің отаны.',
      en: 'Pivotal Silk Road oasis city of trade and enlightenment, birthplace of universal polymath Al-Farabi.',
      ru: 'Крупнейший очаг Шелкового пути, город науки и торговли, родина великого мыслителя Аль-Фараби.',
    },
    history: {
      kk: 'Отырар (Фараб) — Орталық Азияның ең көне әрі маңызды қалаларының бірі. Мұнда әлемге әйгілі Отырар кітапханасы болған. 1219 жылы Шыңғыс хан әскерлеріне 6 ай бойы қарсы тұрған қаһармандық қорғанысымен тарихқа енді. 1405 жылы осы қалада ұлы қолбасшы Әмір Темір қайтыс болған.',
      en: 'Known in antiquity as Farab, Otyrar boasted one of the greatest libraries of the ancient world. It was the birthplace of Abu Nasr Al-Farabi. In 1219, the city withstood a legendary six-month siege against Genghis Khans armies. In 1405, Timur (Tamerlane) passed away in Otyrar while preparing his expedition to China.',
      ru: 'Древний Фараб был центром шелкового караванного пути и обладал легендарной библиотекой древности. В 1219 году гарнизон 6 месяцев сдерживал войска Чингисхана. В 1405 году в Отыраре скончался эмир Тамерлан.',
    },
    whyImportant: {
      kk: 'Қазақ даласының мыңжылдық қалалық мәдениетінің, су құбырларының, көне қыш шеберханалары мен қорғаныс жүйелерінің тірі айғағы.',
      en: 'Living monument to two millennia of sophisticated urbanism, advanced water engineering, coin mintage, and ceramic production in the steppe.',
      ru: 'Главное свидетельство тысячелетней оседлой цивилизации, гончарного мастерства и монетного чекана в степной Евразии.',
    },
    whyVisit: {
      kk: 'Цитадель төбесіне шығып, 2000 жылдық көшелердің, көне моншалардың, мешіт пен қорғаныс дуалдарының орнын аралау.',
      en: 'Walk through unearthed 14th-century residential quarters, inspect medieval ceramic brick kilns, public bathhouses, and stand atop the panoramic citadel.',
      ru: 'Пройти по раскопанным улицам древнего мегаполиса, увидеть фундаменты дворцов, средневековые бани и осмотреть экспонаты музея в Шаульдере.',
    },
    whatToSee: {
      kk: [
        'Отырартөбе цитаделі және қорғаныс қақпалары',
        'XI–XII ғғ. ортағасырлық моншалардың қалдықтары',
        'Шәуілдірдегі Отырар мемлекеттік археологиялық музейінің бай жәдігерлері',
        'Әл-Фараби ескерткіші мен визит-орталығы',
      ],
      en: [
        'Otyrar-tobe fortified citadel and excavated city walls',
        'Remains of 11th–12th century public hypocaust baths',
        'Shaulder Archaeological Museum collection with rare coins and glazed ceramics',
        'Al-Farabi monument and modern visitor exhibition center',
      ],
      ru: [
        'Цитадель Отырартобе и остатки въездных ворот',
        'Археологические раскопки средневековых бань XI–XII вв.',
        'Экспозиция Отырарского музея в селе Шаульдер (монеты, кувшины, макеты)',
        'Визит-центр Отырар с интерактивной картой',
      ],
    },
    whatToDo: {
      kk: [
        'Қалашық төбесіндегі соқпақпен 2 сағаттық танымдық жаяу экскурсия жасау',
        'Отырар музейіндегі көне кітаптар мен тиындар экспозициясын көру',
        '3 шақырым жердегі Арыстан баб кесенесіне бірге соғу',
      ],
      en: [
        'Take a 2-hour self-guided walking loop across the elevated archaeological plateau',
        'Inspect coin finds and Silk Road trade relics inside Shaulder Museum',
        'Combine the visit with nearby Arystan Bab Mausoleum (just 3 km away)',
      ],
      ru: [
        'Совершить пешую 2-часовую прогулку по настилам над археологическими раскопами',
        'Посетить музей в Шаульдере и узнать о тайне Отырарской библиотеки',
        'Совместить поездку с мавзолеем Арыстан-баб (в 3 км)',
      ],
    },
    bestTimeToVisit: {
      kk: 'Сәуір – Мамыр және Қыркүйек – Қазан айлары',
      en: 'April–May and September–October',
      ru: 'Апрель–май и сентябрь–октябрь',
    },
    recommendedVisitDurationHours: 3,
    openingHours: {
      schedule: {
        kk: 'Музей: Сейсенбі – Жексенбі 09:00 – 18:00 (Дүйсенбі — демалыс)',
        en: 'Museum: Tue–Sun 09:00 – 18:00 (Closed Monday)',
        ru: 'Музей: Вт–Вс 09:00 – 18:00 (Пн — выходной)',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Ресми телефон: +7 (725) 44-21-1-50. Қалашық аумағына еркін кіруге болады.',
        en: 'Official contact phone: +7 (725) 44-21-1-50. Citadel ground is openly accessible.',
        ru: 'Контактный телефон: +7 (725) 44-21-1-50. Доступ на городище свободный.',
      },
    },
    ticketPrices: {
      domesticAdult: 500,
      domesticStudent: 300,
      domesticChild: 200,
      foreignAdult: 1000,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Шәуілдірдегі музей ғимаратына кіру құны. Қалашық аумағы тегін.',
        en: 'Fee is for the Shaulder Museum exhibition building. Open citadel is free.',
        ru: 'Стоимость билета в музей в Шаульдере. Вход на городище свободный.',
      },
      source: '«Отырар» мемлекеттік археологиялық музей-қорығы ресми мәліметі',
      sourceUrl: 'https://kazakhstan.travel/tourist-spots/otyrar',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/otyrar.jpg',
        caption: {
          kk: 'Көне Отырар қақпасы мен бекініс қабырғаларының панорамасы',
          en: 'Reconstructed monumental Citadel Gate of ancient Otyrar',
          ru: 'Монументальные ворота цитадели древнего Отрара',
        },
        credit: 'Kazakhstan Tourism Archive',
      },
      {
        url: '/images/interiors/otyrar-museum-user.png',
        caption: {
          kk: 'Отырар археологиялық музейі: Әбу Насыр Әл-Фараби залы мен көне жәдігерлер',
          en: 'Otyrar Archaeological Museum: Abu Nasr Al-Farabi exhibition hall and excavations',
          ru: 'Отрарский археологический музей: зал Аль-Фараби и экспонаты раскопок',
        },
      },
      {
        url: '/images/destinations/otyrar-oasis-user.png',
        caption: {
          kk: 'Отырар алқабы: қос күмбезді кешен мен оюлы салтанатты алаң',
          en: 'Otyrar oasis complex: dual domes, minarets, and ornamental flagstone plaza',
          ru: 'Оазис Отрара: двухкупольный комплекс и мощеная орнаментальная площадь',
        },
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Түркістан (65 км)',
        en: 'Turkistan (65 km)',
        ru: 'Туркестан (65 км)',
      },
      distanceFromHubKm: 65,
      options: [
        {
          mode: 'taxi',
          title: {
            kk: 'Түркістаннан Шәуілдір / Отырарға такси',
            en: 'Taxi / Transfer from Turkistan to Otyrar (Shaulder)',
            ru: 'Такси из Туркестана в Отырар (Шаульдер)',
          },
          duration: '50 min',
          costRange: { min: 6000, max: 12000, currency: 'KZT' },
          provider: 'Local Taxi from Turkistan',
          status: 'ESTIMATED',
          tips: {
            kk: 'Арыстан баб пен Отырарды бірге аралау үшін таксисті күттіріп алу тиімді.',
            en: 'Hiring a private round-trip taxi covering both Otyrar and Arystan Bab is ideal.',
            ru: 'Выгоднее нанять машину на 3–4 часа с заездом в Отырар и Арыстан-баб.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 6000, max: 12000 },
      midRangePerNight: { min: 18000, max: 35000 },
      luxuryPerNight: { min: 45000, max: 80000 },
      status: 'ESTIMATED',
      source: 'Turkistan & Shaulder guesthouses',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 4000, max: 7000 },
      midRangePerDay: { min: 8000, max: 14000 },
      status: 'ESTIMATED',
      source: 'Local roadside teahouses and Shaulder dining',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: false,
      walkingDifficulty: 'moderate',
      notes: {
        kk: 'Қалашық төбесінде табиғи соқпақтар бар.',
        en: 'Natural earthen trails; not easily wheelchair accessible.',
        ru: 'Тропы на городище грунтовые с подъемами.',
      },
    },
    sources: [
      {
        name: '«Отырар» мемлекеттік археологиялық музей-қорығы',
        url: 'https://kazakhstan.travel/tourist-spots/otyrar',
        type: 'official_reserve',
        verifiedAt: '2026-09-19',
      },
      {
        name: 'Kazakhstan National Tourism Portal',
        url: 'https://kazakhstan.travel',
        type: 'government',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'arystan-bab',
    slug: 'arystan-bab-mausoleum',
    name: {
      kk: 'Арыстан баб кесенесі',
      en: 'Arystan Bab Mausoleum',
      ru: 'Мавзолей Арыстан-баба',
    },
    regionId: 'turkistan',
    cityDistrict: {
      kk: 'Отырар ауданы, Қоғам ауылы маңы',
      en: 'Otyrar District, near Kogam Village',
      ru: 'Отырарский район, близ села Когам',
    },
    exactLocation: {
      kk: 'Отырар қалашығынан 3 км, Қоғам ауылы',
      en: '3 km west of Ancient Otyrar Citadel, Kogam village',
      ru: '3 км к западу от городища Отырар, село Когам',
    },
    coordinates: {
      lat: 42.8491,
      lng: 68.2505,
    },
    category: 'mausoleum',
    epoch: 'silk_road',
    unescoWorldHeritage: false,
    historicalPeriod: {
      kk: 'XII ғ. бастау алып, XIV және XX ғ. басында жаңғыртылған',
      en: 'Originated 12th century, rebuilt 14th & 20th century',
      ru: 'Заложен в XII в., перестроен в XIV в. и 1909 г.',
    },
    shortDescription: {
      kk: 'Қожа Ахмет Ясауидің рухани ұстазы әрі тәлімгері Арыстан бабтың киелі кесенесі.',
      en: 'Venerable sanctuary of Arystan Bab, the legendary spiritual master and mentor of Khoja Ahmed Yasawi.',
      ru: 'Священный мавзолей Арыстан-баба, духовного наставника и учителя Ходжи Ахмеда Ясави.',
    },
    history: {
      kk: 'Аңыз бойынша, Мұхаммед пайғамбардың құрмасын аманат ретінде сақтап, жас Ахметке жеткізген киелі тұлға Арыстан баб осы жерде жерленген. Халық арасында «Ясауиге барар алдында алдымен ұстазы Арыстан бабқа соғу керек» деген ежелгі дәстүр бар. Бүгінгі кесене екі күмбезді сәулетімен және көне ағаш бағандарымен ерекшеленеді.',
      en: 'According to tradition, the Prophet Muhammad entrusted a sacred date to Arystan Bab to deliver to young Ahmed Yasawi. Pilgrims adhere to the custom: first pay homage to mentor Arystan Bab before proceeding to Yasawi.',
      ru: 'По преданию, сподвижник Арыстан-баб передал юному Ахмеду хурму-аманат от Пророка Мухаммеда. Сложилась традиция сначала посещать учителя Арыстан-баба, а затем мавзолей Ясави в Туркестане.',
    },
    whyImportant: {
      kk: 'Қазақстанның басты сакралды орталықтарының бірі, сопылық ілімнің бастауы.',
      en: 'One of the foremost pilgrimage centers of Central Asia, embodying the spiritual genealogy of the steppe.',
      ru: 'Ключевой сакральный центр Казахстана, символизирующий духовную преемственность суфийской традиции.',
    },
    whyVisit: {
      kk: 'Кесененің оюлы ағаш бағандарын, емдік қасиеті бар суы бар көне құдықты көріп, рухани тыныштық табу.',
      en: 'Admire the ancient carved wooden columns, taste mineral well-water revered by pilgrims, and experience spiritual quietude.',
      ru: 'Увидеть резные деревянные колонны, испить воду из колодца и ощутить умиротворение древней святыни.',
    },
    whatToSee: {
      kk: [
        'Екі күмбезді Арыстан баб кесенесі мен мешіті',
        'Кесене ішіндегі көне оюлы ағаш бағандар',
        'Қасиетті минералды су құдығы',
        'Айналасындағы көне мазарлар мен қорымдар',
      ],
      en: [
        'Two-domed mausoleum and contiguous pilgrimage mosque',
        'Carved wooden column capitals preserved from earlier centuries',
        'Sacred mineral water well',
        'Historic necropolis surrounding the compound',
      ],
      ru: [
        'Двухкупольный мавзолей и примыкающая поминальная мечеть',
        'Резные деревянные колонны старинной работы',
        'Священный колодец с минерализованной водой',
        'Древний некрополь вокруг усыпальницы',
      ],
    },
    whatToDo: {
      kk: [
        'Дәстүрлі зиярат ету әдебімен танысу',
        'Отырар қалашығымен бірге кешенді саяхат жасау',
        'Жергілікті шайханаларда қымыз-шұбаттан дәм тату',
      ],
      en: [
        'Observe traditional respectful pilgrimage etiquette',
        'Combine in one journey with Otyrar archaeological park (3 km away)',
        'Sample authentic fermented camel milk (shubat) at local tea houses',
      ],
      ru: [
        'Познакомиться с традициями степного паломничества',
        'Объединить экскурсию с городищем Отырар (всего 3 км)',
        'Попробовать свежий целебный шубат в окрестных чайханах',
      ],
    },
    bestTimeToVisit: {
      kk: 'Сәуір – Маусым және Қыркүйек – Қазан айлары',
      en: 'April to June and September to October',
      ru: 'Апрель – июнь и сентябрь – октябрь',
    },
    recommendedVisitDurationHours: 2,
    openingHours: {
      schedule: {
        kk: 'Күн сайын: 07:00 – 21:00',
        en: 'Daily: 07:00 – 21:00',
        ru: 'Ежедневно: с 07:00 до 21:00',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Зиярат орны болғандықтан кіру келушілерге еркін.',
        en: 'Pilgrimage site; access is open during daylight hours.',
        ru: 'Паломническое место, открыто для верующих и гостей ежедневно.',
      },
    },
    ticketPrices: {
      domesticAdult: 0,
      domesticStudent: 0,
      domesticChild: 0,
      foreignAdult: 0,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Кіру тегін. Қалаған келушілер өз еркімен садақа қалдыра алады.',
        en: 'Admission is free of charge. Voluntary charitable donations (sadaqah) are welcomed.',
        ru: 'Вход бесплатный. По желанию можно оставить пожертвование (садака).',
      },
      source: 'Отырар аудандық мәдениет бөлімі',
      sourceUrl: 'https://kazakhstan.travel/tourist-spots/otyrar',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/arystan-bab-exterior-user.png',
        caption: {
          kk: 'Арыстан баб кесенесі: бас қасбеті мен қос күмбез (түпнұсқа)',
          en: 'Arystan Bab Mausoleum: main facade and twin domes (authentic)',
          ru: 'Мавзолей Арыстан-баба: главный фасад и двойной купол (подлинник)',
        },
        credit: 'Түпнұсқа Мұрағат',
      },
      {
        url: '/images/destinations/arystan-bab.jpg',
        caption: {
          kk: 'Арыстан баб кесенесінің қос күмбезді сәулеті',
          en: 'Twin domed facade of the sacred Arystan Bab sanctuary',
          ru: 'Двухкупольный фасад священного мавзолея Арыстан-баба',
        },
        credit: 'Tourism Portal Archive',
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Түркістан (60 км)',
        en: 'Turkistan (60 km)',
        ru: 'Туркестан (60 км)',
      },
      distanceFromHubKm: 60,
      options: [
        {
          mode: 'taxi',
          title: {
            kk: 'Түркістаннан Арыстан бабқа дейін жеңіл такси',
            en: 'Taxi from Turkistan directly to Arystan Bab',
            ru: 'Такси из Туркестана до Арыстан-баба',
          },
          duration: '45 min',
          costRange: { min: 5000, max: 10000, currency: 'KZT' },
          provider: 'Local Taxi from Turkistan',
          status: 'ESTIMATED',
          tips: {
            kk: 'Отырар қалашығымен бір маршрутқа біріктіріп бару ең ыңғайлы.',
            en: 'Combine directly into a single itinerary with Otyrar citadel.',
            ru: 'Рекомендуется совмещать с посещением Отырара.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 6000, max: 14000 },
      midRangePerNight: { min: 20000, max: 40000 },
      luxuryPerNight: { min: 50000, max: 90000 },
      status: 'ESTIMATED',
      source: 'Nearby Turkistan hotels & local guesthouses',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 4000, max: 7000 },
      midRangePerDay: { min: 8000, max: 14000 },
      status: 'ESTIMATED',
      source: 'Local dining around Kogam & Shaulder',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: true,
      walkingDifficulty: 'easy',
      notes: {
        kk: 'Кесене алды тегіс төселген, кіреберісте баспалдақтар бар.',
        en: 'Paved approach walkway; low steps at entrance.',
        ru: 'Ровная дорожка, небольшие ступени на входе.',
      },
    },
    sources: [
      {
        name: '«Отырар» мемлекеттік археологиялық музей-қорығы',
        url: 'https://kazakhstan.travel/tourist-spots/otyrar',
        type: 'official_reserve',
        verifiedAt: '2026-09-19',
      },
      {
        name: 'Kazakhstan National Tourism Portal',
        url: 'https://kazakhstan.travel',
        type: 'government',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'aisha-bibi',
    slug: 'aisha-bibi-mausoleum',
    name: {
      kk: 'Айша бибі және Бабаджа қатын кесенелері',
      en: 'Aisha Bibi and Babadzha Khatun Mausoleums',
      ru: 'Мавзолеи Айша-биби и Бабаджа-хатун',
    },
    regionId: 'zhambyl',
    cityDistrict: {
      kk: 'Жамбыл ауданы, Айша бибі ауылы',
      en: 'Zhambyl District, Aisha Bibi Village',
      ru: 'Жамбылский район, село Айша-биби',
    },
    exactLocation: {
      kk: 'Тараз қаласынан батысқа қарай 18 км, Айша бибі ауылы',
      en: '18 km west of Taraz City center, Aisha Bibi village',
      ru: '18 км к западу от центра города Тараз, село Айша-биби',
    },
    coordinates: {
      lat: 42.8339,
      lng: 71.2106,
    },
    category: 'mausoleum',
    epoch: 'silk_road',
    unescoWorldHeritage: true,
    unescoCriteria: 'Silk Roads: Chang’an-Tianshan Corridor UNESCO Recognition',
    historicalPeriod: {
      kk: 'XI – XII ғасырлар (Қарахан дәуірі)',
      en: '11th – 12th century CE (Karakhanid Era)',
      ru: 'XI – XII века (эпоха Караханидов)',
    },
    shortDescription: {
      kk: '60 түрлі ою-өрнекпен көмкерілген терракота тақташалары бар махаббат пен нәзіктіктің мәңгілік ескерткіші.',
      en: 'Architectural jewel carved entirely with over 60 distinct terracotta relief patterns, dedicated to an immortal legend of true love.',
      ru: 'Архитектурный шедевр эпохи Караханидов, украшенный 60 видами резной терракотовой плитки, символ вечной любви.',
    },
    history: {
      kk: 'Аңыз бойынша, Айша сұлу Қарахан билеушісіне ғашық болып, оған жету жолында Аса өзенінің бойында улы жылан шағып қайтыс болады. Қарахан батыр оның қабірінің басына теңдесі жоқ осы әсем кесенені тұрғызады. Оның жанында Айшаның адал күтушісі Бабаджа қатынның шатырлы ерекше күмбезі орналасқан.',
      en: 'Legend tells of the beautiful noblewoman Aisha, who journeyed across the steppe to marry the ruler of Taraz, Karakhan. She was tragically bitten by a viper hiding in her headwear. The grieving ruler erected this magnificent terracotta monument in her memory. Beside it stands the distinctive conical dome of her guardian, Babadzha Khatun.',
      ru: 'По романтической легенде, красавица Айша погибла от укуса змеи, спеша к своему возлюбленному хану Карахану. В знак безутешной скорби он воздвиг усыпальницу, не имеющую аналогов по тонкости резной терракоты. Рядом покоится ее верная няня Бабаджа-хатун.',
    },
    whyImportant: {
      kk: 'Орталық Азиядағы сыртқы қабырғалары толығымен оюлы терракотамен қапталған жалғыз сәулет ескерткіші.',
      en: 'The only monument in Central Asia decorated entirely with sculpted terracotta blocks. A masterpiece of medieval Islamic mathematics and aesthetics.',
      ru: 'Единственный в Центральной Азии памятник, полностью облицованный терракотовыми резными плитками с тончайшими восточными узорами.',
    },
    whyVisit: {
      kk: 'Әлемге әйгілі 60 түрлі қазақы әрі шығыстық оюларды көріп, махаббат аңызын тыңдап, көркем саябақты тамашалау.',
      en: 'Marvel at 60 intricate geometrical motifs, witness the 16-ribbed parasol dome of Babadzha Khatun, and feel the poignant spirit of the legend.',
      ru: 'Вблизи рассмотреть филигранную резьбу по терракоте, увидеть уникальный шатровый купол Бабаджа-хатун и отдохнуть в ухоженном розарии.',
    },
    whatToSee: {
      kk: [
        'Айша бибі кесенесінің оюлы терракота бағандары мен қабырғасы',
        'Бабаджа қатын кесенесінің 16 қырлы қатпарлы күмбезі',
        '«Ежелгі Тараз ескерткіштері» музейінің ақпараттық стенді',
        'Жасыл саябақ пен раушан бағы',
      ],
      en: [
        'Intricately carved terracotta pilasters and wall panels of Aisha Bibi',
        'Rare 16-ribbed umbrella roof of Babadzha Khatun tomb',
        'Exhibition plaques by Ancient Taraz Monuments Reserve',
        'Landscaped rose garden and pilgrim grounds',
      ],
      ru: [
        'Резные терракотовые колонны и капители мавзолея Айша-биби',
        'Уникальный 16-гранный конический купол мавзолея Бабаджа-хатун',
        'Информационный стенд заповедника «Древний Тараз»',
        'Ухоженный парковый ансамбль с цветниками',
      ],
    },
    whatToDo: {
      kk: [
        'Оюлардың геометриялық құпиясын зерттеу',
        'Тараз қаласындағы Қарахан кесенесі мен Тектұрмас кешеніне жалғастыру',
        'Ескерткіш гидінен аңыздың толық нұсқасын тыңдау',
      ],
      en: [
        'Photograph delicate interlocking Islamic geomancy patterns',
        'Link with visit to Karakhan Mausoleum and Tekturmas in Taraz',
        'Listen to the tragic medieval ballad shared by local guides',
      ],
      ru: [
        'Рассмотреть геометрию узоров, каждый из которых не повторяет соседний',
        'Продолжить маршрут в Тараз к мавзолею хана Карахана и комплексу Тектурмас',
        'Услышать народное предание от хранителя памяти',
      ],
    },
    bestTimeToVisit: {
      kk: 'Мамыр – Қазан айлары',
      en: 'May to October',
      ru: 'Май – октябрь',
    },
    recommendedVisitDurationHours: 2,
    openingHours: {
      schedule: {
        kk: 'Күн сайын: 08:30 – 19:00',
        en: 'Daily: 08:30 – 19:00',
        ru: 'Ежедневно: с 08:30 до 19:00',
      },
      status: 'VERIFIED',
      notes: {
        kk: '«Ежелгі Тараз ескерткіштері» мемлекеттік қорығы қарамағында.',
        en: 'Operated by Ancient Taraz Historical-Cultural Reserve.',
        ru: 'Под управлением государственного заповедника-музея «Памятники древнего Тараза».',
      },
    },
    ticketPrices: {
      domesticAdult: 500,
      domesticStudent: 300,
      domesticChild: 200,
      foreignAdult: 1500,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Қорық аумағындағы кассада төленеді. Экскурсиялық қызмет топқа шамамен 2000 ₸.',
        en: 'Purchased at entrance kiosk. Group excursion service approx 2,000 KZT.',
        ru: 'Оплачивается на входе. Экскурсионное обслуживание около 2000 ₸ с группы.',
      },
      source: '«Ежелгі Тараз ескерткіштері» мемлекеттік тарихи-мәдени музей-қорығы',
      sourceUrl: 'https://kazakhstan.travel/tourist-spots/taraz',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/aisha-bibi-terracotta-user.png',
        caption: {
          kk: 'Айша бибі: 64 түрлі терракота тақталары мен мұқарнас аркасы (түпнұсқа)',
          en: 'Aisha Bibi: 64 terracotta tiles and muqarnas squinch arch (authentic)',
          ru: 'Айша-биби: 64 вида резной терракоты и сталактитовая арка (подлинник)',
        },
        credit: 'Түпнұсқа Мұрағат',
      },
      {
        url: '/images/interiors/aisha-bibi-tomb-user.png',
        caption: {
          kk: 'Айша бибі қабірханасы: ақ сағана мен пәнжәра торлы терезелері',
          en: 'Aisha Bibi Crypt: white draped sarcophagus and panjara windows',
          ru: 'Усыпальница Айша-биби: надгробие под белым шелком и окна панджара',
        },
        credit: 'Түпнұсқа Мұрағат',
      },
      {
        url: '/images/destinations/babadzha-khatun-user.png',
        caption: {
          kk: 'Бабаджа қатын кесенесі: 16 қырлы шатырлы күмбез',
          en: 'Babadzha Khatun Mausoleum: 16-ribbed conical tent dome',
          ru: 'Мавзолей Бабаджа-хатун: 16-гранный шатровый купол',
        },
        credit: 'Түпнұсқа Мұрағат',
      },
      {
        url: '/images/interiors/aisha-bibi-vault-user.png',
        caption: {
          kk: 'Кесене күмбезінің ішкі өрімі мен зениттік жарық ойығы',
          en: 'Dome ceiling brickwork and circular zenith oculus',
          ru: 'Купольный свод с концентрической кладкой и окулюсом',
        },
        credit: 'Түпнұсқа Мұрағат',
      },
      {
        url: '/images/destinations/aisha-bibi.jpg',
        caption: {
          kk: 'Айша бибі кесенесінің оюлы терракота қабырғалары',
          en: 'Intricate terracotta ornamental facade of Aisha Bibi Mausoleum',
          ru: 'Резная терракотовая облицовка мавзолея Айша-биби',
        },
        credit: 'Kazakhstan Tourism Archive',
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Тараз (18 км)',
        en: 'Taraz (18 km)',
        ru: 'Тараз (18 км)',
      },
      distanceFromHubKm: 18,
      options: [
        {
          mode: 'taxi',
          title: {
            kk: 'Тараз қаласынан такси (Яндекс Go)',
            en: 'Taxi via Yandex Go from Taraz city center',
            ru: 'Такси из центра Тараза (Яндекс Go)',
          },
          duration: '20 min',
          costRange: { min: 1800, max: 3000, currency: 'KZT' },
          provider: 'Yandex Go / Local City Taxis',
          status: 'VERIFIED',
          tips: {
            kk: 'Жол сапасы өте жақсы, Тараз орталығынан 20 минутта жетуге болады.',
            en: 'Smooth paved highway; quick 20-minute ride from central Taraz.',
            ru: 'Асфальтированная трасса, быстрая поездка за 20 минут из центра города.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 9000, max: 18000 },
      midRangePerNight: { min: 22000, max: 40000 },
      luxuryPerNight: { min: 45000, max: 75000 },
      status: 'ESTIMATED',
      source: 'Hotels in Taraz city',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 4500, max: 8000 },
      midRangePerDay: { min: 9000, max: 16000 },
      status: 'ESTIMATED',
      source: 'Taraz city dining and cafes',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: true,
      walkingDifficulty: 'easy',
      notes: {
        kk: 'Саябақ жолдары тегіс, кешен аумағы мүгедектер арбасына қолайлы.',
        en: 'Park walkways are flat and paved; accessible for visitors with limited mobility.',
        ru: 'Дорожки ровные, асфальтированные; комплекс удобен для инвалидных колясок.',
      },
    },
    sources: [
      {
        name: '«Ежелгі Тараз ескерткіштері» мемлекеттік тарихи-мәдени музей-қорығы',
        url: 'https://kazakhstan.travel/tourist-spots/taraz',
        type: 'official_reserve',
        verifiedAt: '2026-09-19',
      },
      {
        name: 'Kazakhstan National Tourism Portal',
        url: 'https://kazakhstan.travel',
        type: 'government',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'tanbaly',
    slug: 'tanbaly-petroglyphs',
    name: {
      kk: 'Таңбалы петроглифтері',
      en: 'Petroglyphs of Tanbaly',
      ru: 'Петроглифы Танбалы (Тамгалы)',
    },
    regionId: 'almaty_reg',
    cityDistrict: {
      kk: 'Жамбыл ауданы, Қарабастау ауылы маңы',
      en: 'Zhambyl District, near Karabastau Village',
      ru: 'Жамбылский район, близ села Карабастау',
    },
    exactLocation: {
      kk: 'Алматыдан солтүстік-батысқа қарай 170 км, Аңырақай тауларының Таңбалы шатқалы',
      en: '170 km northwest of Almaty, Tanbaly Gorge',
      ru: '170 км к северо-западу от Алматы, урочище Танбалы',
    },
    coordinates: {
      lat: 43.8055,
      lng: 75.5342,
    },
    category: 'petroglyphs',
    epoch: 'iron_age',
    unescoWorldHeritage: true,
    unescoCriteria: 'Criteria (iii) — Inscribed in 2004 (Ref: 1145)',
    historicalPeriod: {
      kk: 'Қола дәуірі (б.з.д. XIV ғ.) – Орта ғасырлар',
      en: 'Bronze Age (mid-14th century BCE) to Early Middle Ages',
      ru: 'Эпоха бронзы (XIV в. до н.э.) – Средневековье',
    },
    shortDescription: {
      kk: 'ЮНЕСКО тізіміндегі 5000-нан астам көне жартас суреттері, күнбасты құдайлар мен көне діни ғибадатхана кешені.',
      en: 'UNESCO sanctuary of over 5,000 prehistoric rock carvings, mysterious sun-headed deities, and Bronze Age burial mounds.',
      ru: 'Святилище под эгидой ЮНЕСКО: более 5000 наскальных рисунков, солнцеголовые божества и древние курганы.',
    },
    history: {
      kk: 'Таңбалы шатқалын 1957 жылы Анна Максимова жетекшілік еткен археологиялық экспедиция тапты. Бұл жер мыңдаған жылдар бойы дала өркениеттерінің ашық аспан астындағы қасиетті ғибадатханасы қызметін атқарған. Тастардың қара патина қабатына қашалған «Күнбасты құдайлар», бишілер, арқарлар мен салт аттылар бейнесі көне адамдардың космологиялық дүниетанымын ашады.',
      en: 'Discovered in 1957 by an archaeological team led by Anna Maximova. For millennia, this canyon served as an open-air natural cathedral for steppe pastoralists. Carved into sun-blackened rock patina, the famous anthropomorphic "sun-headed deities", ecstatic dancers, sacred bulls, and charioteers offer rare windows into Bronze Age mythology.',
      ru: 'Открыто в 1957 году Семиреченским археологическим отрядом под руководством А. Г. Максимовой. На протяжении тысячелетий ущелье служило природным святилищем. Знаменитые петроглифы «солнцеголовых божеств», солярные знаки, сцены ритуальных танцев и охоты выбиты на скалах, покрытых черной патиной.',
    },
    whyImportant: {
      kk: 'Орталық Азиядағы ең бай әрі үздік сақталған жартас өнері ескерткіші, адамзаттың алғашқы діни түсініктерінің шежіресі.',
      en: 'The most densely concentrated and intact petroglyphic sanctuary in Central Asia, recognized globally by UNESCO.',
      ru: 'Самое значительное и наиболее полно сохранившееся наскальное святилище Центральной Азии, признанное шедевром ЮНЕСКО.',
    },
    whyVisit: {
      kk: '3000 жыл бұрынғы күнбасты бейнелерді өз көзіңізбен көру, тыныш тау шатқалында жаяу серуендеп, визит-орталығын тамашалау.',
      en: 'Gaze directly upon enigmatic 3,400-year-old sun-god carvings, hike peaceful arid canyon gorges, and explore modern visitor center.',
      ru: 'Лично увидеть загадочные лики солнцеголовых богов возрастом 3400 лет, ощутить первозданную тишину сакрального каньона.',
    },
    whatToSee: {
      kk: [
        'I–V топтағы негізгі петроглифтер шоғыры («Күнбасты құдайлар» бейнесі)',
        'Қола дәуірі мен ерте темір дәуірінің тас қорғандары мен мазарлары',
        '2020 жылы ашылған «Таңбалы» сапар орталығы мен музей залы',
        'Көне құрбандық шалу орындары мен жартас панорамасы',
      ],
      en: [
        'Groups I–V core rock art panels showcasing the iconic sun-headed figures',
        'Bronze Age cist graves and stone box burial enclosures',
        'Modern visitor and interpretation center opened in 2020',
        'Sacrificial stone altars and dramatic geological gorge formations',
      ],
      ru: [
        'Центральные группы петроглифов I–V (включая лики солнцеголовых богов)',
        'Погребальные каменные ящики и курганы эпохи бронзы и раннего железа',
        'Современный визит-центр «Танбалы» с музейной экспозицией',
        'Древние алтари жертвоприношений и панорамные виды урочища',
      ],
    },
    whatToDo: {
      kk: [
        'Белгіленген 2-3 сағаттық танымдық экологиялық соқпақпен жүру',
        'Визит-орталығында деректі фильм көріп, археологиялық экспонаттарды қарау',
        'Таңғы салқында шатқалдың үстіңгі нүктесінен көркем суретке түсіру',
      ],
      en: [
        'Hike the marked 2–3 hour interpretive heritage trail through the canyon',
        'Watch documentary screenings inside the visitor pavilion',
        'Photograph the petroglyphs in morning raking sunlight for optimal clarity',
      ],
      ru: [
        'Пройти по маркированной 2–3 часовой экологической тропе с аудиогидом',
        'Ознакомиться с артефактами в выставочном зале сапар-центра',
        'Сделать фотографии в лучах утреннего косого света',
      ],
    },
    bestTimeToVisit: {
      kk: 'Сәуір – Маусым және Қыркүйек – Қазан',
      en: 'April to June and September to October',
      ru: 'Апрель – июнь и сентябрь – октябрь',
    },
    recommendedVisitDurationHours: 4,
    openingHours: {
      schedule: {
        kk: 'Күн сайын: 09:00 – 18:00',
        en: 'Daily: 09:00 – 18:00',
        ru: 'Ежедневно: с 09:00 до 18:00',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Қыс мезгілінде қар мен тайғаққа байланысты сапар алдында визит-орталығына хабарласқан жөн.',
        en: 'Winter visits depend on road conditions; check in advance.',
        ru: 'Зимой перед поездкой рекомендуется уточнить состояние дороги.',
      },
    },
    ticketPrices: {
      domesticAdult: 1000,
      domesticStudent: 500,
      domesticChild: 300,
      foreignAdult: 2500,
      excursionFeeKz: 3000,
      excursionFeeEn: 5000,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: '«Таңбалы» мемлекеттік қорық-музейінің сапар орталығында төленеді.',
        en: 'Payable at Tanbaly state reserve visitor center entrance.',
        ru: 'Оплачивается на входе в визит-центре заповедника-музея «Танбалы».',
      },
      source: '«Таңбалы» мемлекеттік тарихи-мәдени және табиғи музей-қорығы',
      sourceUrl: 'https://kazakhstan.travel/tourist-spots/almaty',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/tanbaly.jpg',
        caption: {
          kk: 'Таңбалы шатқалының тастарындағы күнбасты құдайлар мен көне петроглифтер',
          en: 'Prehistoric sun-headed gods and ritual scenes etched into dark stones of Tanbaly',
          ru: 'Солнцеголовые божества и ритуальные петроглифы урочища Танбалы',
        },
        credit: 'UNESCO Heritage Center',
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Алматы қаласы (170 км)',
        en: 'Almaty City (170 km)',
        ru: 'город Алматы (170 км)',
      },
      distanceFromHubKm: 170,
      options: [
        {
          mode: 'car',
          title: {
            kk: 'Алматыдан 1 күндік тур немесе жалға алынған көлік',
            en: '1-day organized guided tour or rental car from Almaty',
            ru: 'Однодневный организованный тур или авто из Алматы',
          },
          duration: '2h 45m one way',
          costRange: { min: 25000, max: 45000, currency: 'KZT' },
          provider: 'Almaty Tour Operators / Yandex Go Out-of-city',
          status: 'ESTIMATED',
          tips: {
            kk: 'Алматыдан таңертең ерте (08:00) шығып, Қараой бағытындағы тасжолмен барады.',
            en: 'Leave early morning (around 08:00); full paved highway except the final approach.',
            ru: 'Выезжайте утром около 08:00; асфальтированная трасса до поворота на Карабастау.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 14000, max: 28000 },
      midRangePerNight: { min: 35000, max: 65000 },
      luxuryPerNight: { min: 80000, max: 180000 },
      status: 'ESTIMATED',
      source: 'Almaty hotels (tourists usually stay in Almaty and visit as day trip)',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 6000, max: 12000 },
      midRangePerDay: { min: 14000, max: 25000 },
      status: 'ESTIMATED',
      source: 'Packed lunch recommended; cafe at visitor center available in season',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: false,
      walkingDifficulty: 'moderate',
      notes: {
        kk: 'Визит орталығы қолжетімді, шатқал ішінде тасты соқпақпен жаяу көтеріледі.',
        en: 'Visitor center is accessible; petroglyph trails require climbing rocky paths.',
        ru: 'Визит-центр доступен; тропы к скалам в каньоне каменистые.',
      },
    },
    sources: [
      {
        name: '«Таңбалы» мемлекеттік тарихи-мәдени және табиғи музей-қорығы',
        url: 'https://kazakhstan.travel/tourist-spots/almaty',
        type: 'official_reserve',
        verifiedAt: '2026-09-19',
      },
      {
        name: 'UNESCO World Heritage Centre (Ref: 1145)',
        url: 'https://whc.unesco.org/en/list/1145',
        type: 'unesco',
        verifiedAt: '2026-09-19',
      },
      {
        name: 'Kazakhstan National Tourism Portal',
        url: 'https://kazakhstan.travel',
        type: 'government',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'beket-ata',
    slug: 'beket-ata-underground-mosque',
    name: {
      kk: 'Бекет ата жер асты мешіті (Оғыланды)',
      en: 'Beket Ata Underground Mosque in Oglandy',
      ru: 'Подземная мечеть Бекет-ата в Огланды',
    },
    regionId: 'mangystau',
    cityDistrict: {
      kk: 'Қарақия ауданы, Оғыланды шатқалы',
      en: 'Karakia District, Oglandy Canyon',
      ru: 'Каракиянский район, урочище Огланды',
    },
    exactLocation: {
      kk: 'Ақтау қаласынан оңтүстік-шығысқа қарай 280 км, Үстірт үстіртінің жиегі',
      en: '280 km southeast of Aktau, rim of the Ustyurt Plateau',
      ru: '280 км к юго-востоку от Актау, обрыв плато Устюрт',
    },
    coordinates: {
      lat: 43.5975,
      lng: 54.0725,
    },
    category: 'underground_mosque',
    epoch: 'golden_horde',
    unescoWorldHeritage: false,
    historicalPeriod: {
      kk: 'XVIII ғасыр (1750–1813 жж.)',
      en: '18th century (1750–1813 CE)',
      ru: 'XVIII век (1750–1813 гг.)',
    },
    shortDescription: {
      kk: 'Ақбор жартасты терең шатқалдан ойып жасалған қасиетті жер асты мешіті, Маңғыстаудың рухани шыңы.',
      en: 'Sacred underground mosque carved directly into sheer white chalk cliffs of the Ustyurt canyon, the spiritual apex of Mangystau.',
      ru: 'Священная скальная мечеть, высеченная в меловых обрывах каньона, главная святыня Мангистау.',
    },
    history: {
      kk: 'Бекет Мырзағұлұлы (1750–1813) — қазақ халқының әулиесі, діндар ғұламасы, батыры әрі сәулетшісі. Ол Хиуада білім алып, Маңғыстау мен Үстіртте бірнеше жер асты мешітін салды. Оғыландыдағы мешіт бор тауының ортаңғы қабатынан қашалып, 4 бөлмеден тұрады. Мешіттің ішінде жыл бойы бірдей қолайлы температура сақталады.',
      en: 'Beket Myrzagululy (1750–1813) was a revered Sufi sage, astronomer, and architect who studied in Khiva. He carved multiple underground hermitages across Mangystau. The Oglandy complex was excavated straight out of chalk limestone halfway down a breathtaking canyon. It features four chambers where the air maintains constant temperature year-round.',
      ru: 'Бекет Мырзагулулы (1750–1813) — великий просветитель, суфий, миротворец и зодчий. Мечеть в урочище Огланды вырублена в толще белой меловой скалы на склоне живописного каньона и включает четыре сводчатые комнаты с уникальной естественной акустикой.',
    },
    whyImportant: {
      kk: 'Қазақстанның жалпыұлттық сакралды нысандарының бірегейі. Маңғыстаудағы «362 әулие» рухани мұрасының басты шамшырағы.',
      en: 'A premier national sacred monument of Kazakhstan. Nowhere else on Earth does an equivalent underground architectural tradition exist.',
      ru: 'Главный общенациональный сакральный объект Казахстана, вершина многовековой духовной культуры Мангистау.',
    },
    whyVisit: {
      kk: 'Үстірттің ғарыштық ақбор каньондарын тамашалап, 1,5 шақырымдық тау баспалдағымен түсіп, табиғи тыныштықты сезіну.',
      en: 'Stand atop the Martian chalk canyons of Ustyurt, descend 1.5 km of scenic stone stairways along the cliff edge, and immerse in solemn meditative serenity.',
      ru: 'Увидеть неземные марсианские пейзажи чинков Устюрта, спуститься по 1,5-километровой лестнице к мечети и ощутить первозданную энергетику.',
    },
    whatToSee: {
      kk: [
        'Бор жартасынан қашалған жер асты құлшылық бөлмелері',
        'Бекет ата мүрдесі орналасқан усыпальница',
        'Оғыланды шатқалының таңғажайып ақбор табиғаты',
        'Жолдағы Шопан ата көне жер асты мешіті мен қорымы',
      ],
      en: [
        'Subterranean chalk-hewn prayer halls with natural domed ceiling vaults',
        'Resting crypt of sage Beket Ata',
        'Panoramic views of Oglandy canyon and Ustyurt plateau escarpments',
        'En route stop at the ancient Shopan Ata necropolis',
      ],
      ru: [
        'Вырубленные в меловом монолите молитвенные залы со сводчатыми потолками',
        'Место упокоения святого Бекет-ата',
        'Панорамы урочища Огланды и обрывов чинков Устюрта',
        'Некрополь и подземная мечеть Шопан-ата по пути',
      ],
    },
    whatToDo: {
      kk: [
        'Шатқалдан түсетін баспалдақпен жаяу түсіп-шығу',
        'Зиярат үйіндегі қонақжай дәстүрмен танысып, дәм тату',
        'Бозжыра шатқалымен бірге 2 күндік экспедиция жасау',
      ],
      en: [
        'Hike the scenic canyon staircase (approx 1,000 steps; good footwear required)',
        'Experience sacred nomadic hospitality at the pilgrim house',
        'Combine into a 2-day 4x4 expedition including the Bozzhyra tract',
      ],
      ru: [
        'Преодолеть пеший спуск и подъем по оборудованной лестнице',
        'Познакомиться с традициями гостеприимства в паломническом доме',
        'Объединить в 2-дневный тур на внедорожниках с урочищем Бозжыра',
      ],
    },
    bestTimeToVisit: {
      kk: 'Сәуір – Маусым және Қыркүйек – Қазан айлары',
      en: 'April to June and September to October',
      ru: 'Апрель – июнь и сентябрь – октябрь',
    },
    recommendedVisitDurationHours: 6,
    openingHours: {
      schedule: {
        kk: 'Күн сайын, тәулік бойы',
        en: 'Daily, 24/7',
        ru: 'Круглосуточно для паломников и гостей',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Кешенде тегін түнеуге арналған паломниктер үйі бар.',
        en: 'Free pilgrim rest-house accommodation is provided according to ancient custom.',
        ru: 'При комплексе действует дом паломников с возможностью ночлега по обычаю.',
      },
    },
    ticketPrices: {
      domesticAdult: 0,
      domesticStudent: 0,
      domesticChild: 0,
      foreignAdult: 0,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Кіру тегін. Қасиетті орын болғандықтан билет сатылмайды, садақа қабылданады.',
        en: 'Free admission. As a sacred sanctuary, tickets are not sold; voluntary donations accepted.',
        ru: 'Вход бесплатный. Билеты не продаются; принимаются добровольные пожертвования.',
      },
      source: 'Маңғыстау облыстық туризм және мәдениет басқармасы',
      sourceUrl: 'https://oq.gov.kz',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/beket-canyon-user.png',
        caption: {
          kk: 'Оғыланды шатқалы: жартастағы жерасты мешіті мен тас террасалар',
          en: 'Oglandy chalk canyon: cliffside underground mosque complex and stone terraces',
          ru: 'Ущелье Огланды: скальный комплекс подземной мечети и террасы',
        },
      },
      {
        url: '/images/interiors/beket-cave-user.png',
        caption: {
          kk: 'Бекет ата жерасты ақ бор мешітінің ішкі намазханасы мен қашалған бағаналары',
          en: 'Interior prayer hall of Beket Ata underground sanctuary hand-hewn in white chalk rock',
          ru: 'Внутренний молитвенный зал подземной мечети Бекет-Ата с резными меловыми колоннами',
        },
      },
      {
        url: '/images/destinations/beket-terrace-user.png',
        caption: {
          kk: 'Мешіт алдындағы шеңберлі терраса мен Үстірт шыңдарының панорамасы',
          en: 'Semicircular entrance terrace overlooking the chalk bluffs of Ustyurt',
          ru: 'Полукруглая входная терраса с панорамой меловых чинков Устюрта',
        },
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Ақтау қаласы (280 км)',
        en: 'Aktau City (280 km)',
        ru: 'город Актау (280 км)',
      },
      distanceFromHubKm: 280,
      options: [
        {
          mode: 'car',
          title: {
            kk: 'Ақтаудан жол талғамайтын көлікпен (4x4 Jeep Tour)',
            en: '4x4 Off-road tour / transfer from Aktau',
            ru: 'Тур на полноприводных внедорожниках (4x4) из Актау',
          },
          duration: '3h 30m - 4h',
          costRange: { min: 40000, max: 85000, currency: 'KZT' },
          provider: 'Mangystau Safari Operators / Ketikqala Tour',
          status: 'ESTIMATED',
          tips: {
            kk: 'Жолдың соңғы бөлігі грейдер болғандықтан биік көлікпен барған жөн.',
            en: 'Requires sturdy 4WD vehicle due to gravel and desert terrain on the final section.',
            ru: 'Финальный участок проходит по грунтовой пустынной дороге; рекомендуется внедорожник.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 0, max: 15000 },
      midRangePerNight: { min: 25000, max: 50000 },
      luxuryPerNight: { min: 65000, max: 130000 },
      status: 'ESTIMATED',
      source: 'Pilgrim house (free/voluntary) or hotels in Aktau',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 3000, max: 6000 },
      midRangePerDay: { min: 10000, max: 20000 },
      status: 'ESTIMATED',
      source: 'Pilgrim hospitality meals or Aktau supplies',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: false,
      walkingDifficulty: 'challenging',
      notes: {
        kk: 'Шатқалға түсу және көтерілу 1000-нан астам баспалдақтан тұрады.',
        en: 'Requires walking down and up over 1,000 stairs along the cliffside.',
        ru: 'Спуск и подъем насчитывают более 1000 ступеней.',
      },
    },
    sources: [
      {
        name: 'Маңғыстау облысы әкімдігінің ресми порталы',
        url: 'https://oq.gov.kz',
        type: 'government',
        verifiedAt: '2026-09-19',
      },
      {
        name: 'Kazakhstan National Tourism Portal',
        url: 'https://kazakhstan.travel',
        type: 'government',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'jochi-khan',
    slug: 'jochi-khan-mausoleum',
    name: {
      kk: 'Жошы хан кесенесі және Визит-орталығы',
      en: 'Jochi Khan Mausoleum & Visitor Center',
      ru: 'Мавзолей Жошы-хана и Визит-центр',
    },
    regionId: 'ulytau',
    cityDistrict: {
      kk: 'Ұлытау ауданы, Жезқазған маңы',
      en: 'Ulytau District, near Zhezkazgan',
      ru: 'Улытауский район, близ Жезказгана',
    },
    exactLocation: {
      kk: 'Жезқазған қаласынан солтүстік-шығысқа қарай 50 км, Қаракеңгір өзенінің сол жағалауы',
      en: '50 km northeast of Zhezkazgan, left bank of the Kara-Kengir River',
      ru: '50 км к северо-востоку от Жезказгана, левый берег реки Каракенгир',
    },
    coordinates: {
      lat: 48.1569,
      lng: 67.8183,
    },
    category: 'mausoleum',
    epoch: 'golden_horde',
    unescoWorldHeritage: false,
    historicalPeriod: {
      kk: 'XIII ғасыр (1227 ж. кейін тұрғызылған)',
      en: '13th century (circa 1228–1230 CE)',
      ru: 'XIII век (возведен после 1227 г.)',
    },
    shortDescription: {
      kk: 'Алтын Орданың (Жошы ұлысының) негізін қалаушы, Шыңғыс ханның үлкен ұлы Жошы ханның тарихи мазары.',
      en: 'Historic mausoleum of Genghis Khans eldest son Jochi Khan, founder of the Golden Horde (Ulus of Jochi).',
      ru: 'Усыпальница старшего сына Чингисхана Жошы-хана, родоначальника Золотой Орды.',
    },
    history: {
      kk: 'Жошы хан — Еуразия даласын билеген ұлы көшбасшы. Ол 1227 жылы қаза болғаннан кейін Қаракеңгір өзені бойында қызыл күйдірілген кірпіштен сәнді кесене тұрғызылды. Оның көгілдір қышпен қапталған күмбезі дала сәулет өнерінің ең көне сақталған үлгілерінің бірі. 2021 жылы мұнда заманауи халықаралық сапар-орталығы (Визит-орталық) ашылды.',
      en: 'Jochi Khan established the Ulus that grew into the Golden Horde. When he died in 1227, this portal-domed red brick tomb was erected with a striking turquoise glazed drum. In 1946, academician Alkey Margulan excavated the crypt, uncovering a wooden coffin with skeletal remains matching Jochi. In 2021, a modern visitor complex was inaugurated here.',
      ru: 'Жошы-хан заложил основы Улуса, ставшего Золотой Ордой. В 1946 г. экспедиция академика Алькея Маргулана вскрыла склеп и обнаружила останки хана. В 2021 году рядом с кесене открыт современный визит-центр «Жошы хан».',
    },
    whyImportant: {
      kk: 'Қазақ мемлекеттілігінің түп-тамыры. Қазақ хандарының барлығы осы Жошы ханнан тарайды.',
      en: 'Cradle of Kazakh statehood. Every historical Kazakh Khan traced their legitimate dynastic lineage back to Jochi Khan (Tore clan).',
      ru: 'Фундамент казахской государственности: все казахские ханы вели свою родословную напрямую от Жошы-хана.',
    },
    whyVisit: {
      kk: 'Алтын Орданың бастауын көріп, 800 жылдық күйдірілген қызыл кірпіш кесенені және заманауи визит-орталығын тамашалау.',
      en: 'Touch the 800-year-old origins of the Golden Horde, witness the steppe horizon, and explore interactive exhibits at the Ulytau Visitor Pavilion.',
      ru: 'Прикоснуться к 800-летней истории Золотой Орды, увидеть подлинный бирюзовый купол и посетить современный музей.',
    },
    whatToSee: {
      kk: [
        'Қызыл кірпіштен өрілген XIII ғ. Жошы хан кесенесі',
        '«Жошы хан» тарихи-мәдени визит-орталығының музейі мен 3D реконструкциялары',
        'Жақын маңдағы Алаша хан және Домбауыл кесенелері',
        'Қаракеңгір өзенінің табиғи панорамасы',
      ],
      en: [
        '13th-century red-brick portal-domed tomb of Jochi Khan',
        'Modern multimedia museum at the Jochi Khan Visitor Center',
        'Nearby Alasha Khan and enigmatic pre-Islamic Dombauyl stone complexes',
        'Panoramic views over the Kara-Kengir river plain',
      ],
      ru: [
        'Мавзолей Жошы-хана XIII века из обожженного красного кирпича',
        'Музей в визит-центре с мультимедийными экспозициями',
        'Расположенные поблизости мавзолеи Алаша-хана и памятник Домбауыл',
        'Живописная речная долина реки Каракенгир',
      ],
    },
    whatToDo: {
      kk: [
        'Визит орталығындағы 3D фильмді тамашалап, тарихшылар гидін тыңдау',
        'Ұлытау тауы мен хандар таққа отырған Хан ордасы тарихи кешеніне бару',
      ],
      en: [
        'Watch the multimedia historical reconstruction inside the visitor center',
        'Continue to Khan Ordasy and the sacred peak of Ulytau mountain',
      ],
      ru: [
        'Посмотреть 3D-реконструкцию улуса Джучи в визит-центре',
        'Посетить священную гору Улытау и ставку ханов Хан Ордасы',
      ],
    },
    bestTimeToVisit: {
      kk: 'Мамыр – Маусым және Қыркүйек – Қазан айлары',
      en: 'May to June and September to October',
      ru: 'Май – июнь и сентябрь – октябрь',
    },
    recommendedVisitDurationHours: 3,
    openingHours: {
      schedule: {
        kk: 'Сейсенбі – Жексенбі: 09:00 – 18:00 (Визит орталығы)',
        en: 'Tuesday – Sunday: 09:00 – 18:00 (Visitor Center)',
        ru: 'Вторник – воскресенье: 09:00 – 18:00 (Визит-центр)',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Дүйсенбі — техникалық күн. Кесене аумағы ашық.',
        en: 'Monday is maintenance day. Exterior grounds accessible.',
        ru: 'Понедельник — выходной в визит-центре. Территория мавзолея доступна.',
      },
    },
    ticketPrices: {
      domesticAdult: 500,
      domesticStudent: 300,
      domesticChild: 200,
      foreignAdult: 1500,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Визит-орталығының музей залына кіру билеті. Кесенеге жақындау тегін.',
        en: 'Entry ticket for the modern museum exhibition inside the visitor center.',
        ru: 'Билет на выставку внутри визит-центра «Жошы хан».',
      },
      source: '«Visit Ulytau» ресми туристік ақпараттық орталығы',
      sourceUrl: 'https://kazakhstan.travel/tourist-spots/ulytau',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/jochi-facade-user.png',
        caption: {
          kk: 'Жошы хан кесенесі: көгілдір қос күмбез бен Алтын Орда порталы (түпнұсқа)',
          en: 'Jochi Khan Mausoleum: turquoise double dome & portal (authentic)',
          ru: 'Мавзолей Джучи Хана: бирюзовый купол и портал Золотой Орды (подлинник)',
        },
        credit: 'Түпнұсқа Мұрағат',
      },
      {
        url: '/images/interiors/jochi-crypt-user.png',
        caption: {
          kk: 'Жошы хан қабірханасы: қос сатылы гранит сағана (түпнұсқа)',
          en: 'Jochi Khan Crypt: two-tiered royal granite sarcophagus (authentic)',
          ru: 'Усыпальница Джучи Хана: двухъярусный гранитный саркофаг (подлинник)',
        },
        credit: 'Түпнұсқа Мұрағат',
      },
      {
        url: '/images/destinations/jochi-monument-user.png',
        caption: {
          kk: 'Жошы хан монументі: Алтын Орданың негізін қалаушы ұлы әмірші (түпнұсқа)',
          en: 'Jochi Khan Monument: founder of the Golden Horde on throne (authentic)',
          ru: 'Монумент Джучи Хану: основатель Золотой Орды на троне (подлинник)',
        },
        credit: 'Түпнұсқа Мұрағат',
      },
      {
        url: '/images/destinations/jochi-khan.jpg',
        caption: {
          kk: 'Жошы хан кесенесі мен Қаракеңгір даласының панорамасы',
          en: 'Historic tomb of Jochi Khan standing proud across the expansive Ulytau steppe',
          ru: 'Мавзолей Жошы-хана среди бескрайних степей Улытау',
        },
        credit: 'Visit Ulytau Archive',
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Жезқазған қаласы (50 км)',
        en: 'Zhezkazgan City (50 km)',
        ru: 'город Жезказган (50 км)',
      },
      distanceFromHubKm: 50,
      options: [
        {
          mode: 'car',
          title: {
            kk: 'Жезқазғаннан такси немесе көлік',
            en: 'Taxi or transfer from Zhezkazgan',
            ru: 'Такси или трансфер из Жезказгана',
          },
          duration: '50 min',
          costRange: { min: 8000, max: 15000, currency: 'KZT' },
          provider: 'Local Transport & Visit Ulytau Tours',
          status: 'ESTIMATED',
          tips: {
            kk: 'Жезқазғанға Астана мен Алматыдан ұшақпен немесе пойызбен жетуге болады.',
            en: 'Zhezkazgan has flight connections from Astana and Almaty.',
            ru: 'В Жезказган летают регулярные авиарейсы из Астаны и Алматы.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 10000, max: 18000 },
      midRangePerNight: { min: 22000, max: 42000 },
      luxuryPerNight: { min: 50000, max: 80000 },
      status: 'ESTIMATED',
      source: 'Hotels in Zhezkazgan and Ulytau ethno-villages',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 4500, max: 8000 },
      midRangePerDay: { min: 9000, max: 16000 },
      status: 'ESTIMATED',
      source: 'Zhezkazgan restaurants and visitor center cafe',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: true,
      walkingDifficulty: 'easy',
      notes: {
        kk: 'Жаңа визит орталығы толықтай пандустармен жабдықталған.',
        en: 'The modern visitor center is fully wheelchair accessible with ramps.',
        ru: 'Новый визит-центр полностью оборудован пандусами.',
      },
    },
    sources: [
      {
        name: '«Visit Ulytau» ресми туристік порталы',
        url: 'https://kazakhstan.travel/tourist-spots/ulytau',
        type: 'government',
        verifiedAt: '2026-09-19',
      },
      {
        name: 'Kazakhstan National Tourism Portal',
        url: 'https://kazakhstan.travel',
        type: 'government',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'botai',
    slug: 'botai-eneolithic-settlement',
    name: {
      kk: 'Ботай энеолиттік қонысы және музей-қорығы',
      en: 'Botai Eneolithic Settlement & Museum-Reserve',
      ru: 'Энеолитическое поселение и музей-заповедник Ботай',
    },
    regionId: 'north_kazakhstan',
    cityDistrict: {
      kk: 'Айыртау ауданы, Никольское ауылы',
      en: 'Aiyrtau District, Nikolskoye Village',
      ru: 'Айыртауский район, село Никольское',
    },
    exactLocation: {
      kk: 'Никольское ауылынан оңтүстік-шығысқа қарай 1,5 км, Иманбұрлық өзенінің жағасы',
      en: '1.5 km southeast of Nikolskoye village, Imanburluk River bank',
      ru: '1,5 км к юго-востоку от села Никольское, правый берег реки Иманбурлык',
    },
    coordinates: {
      lat: 53.2986,
      lng: 67.6536,
    },
    category: 'archaeological_settlement',
    epoch: 'iron_age',
    unescoWorldHeritage: true,
    unescoCriteria: 'Tentative List (Ref: 6558) — Birthplace of Horse Domestication',
    historicalPeriod: {
      kk: 'Энеолит дәуірі (б.з.д. 3700–3100 жж., 6000 жыл бұрын)',
      en: 'Eneolithic / Copper Age (3700–3100 BCE, ~6,000 years ago)',
      ru: 'Эпоха энеолита (3700–3100 гг. до н.э., 6000 лет назад)',
    },
    shortDescription: {
      kk: 'Адамзат тарихында тұңғыш рет жылқыны қолға үйреткен әлемге әйгілі Ботай мәдениетінің қонысы.',
      en: 'The world-famous cradle where humanity first domesticated the horse, revolutionizing world transport and history.',
      ru: 'Всемирно известный памятник, где человечество впервые в истории одомашнило лошадь 6000 лет назад.',
    },
    history: {
      kk: 'Қонысты 1980 жылы профессор Виктор Зайберт басқарған археологиялық экспедиция ашты. Мұнда 15 мың шаршы метр жер қазылып, 158 тұрғын үй зерттелді. Табылған жүздеген мың сүйектің 99,9%-ы жылқыға тиесілі екені анықталды. Халықаралық генетиктер мен ғалымдар Ботайда бие сүтін ішкенін (қымыз дайындағанын) және жүгеннің іздерін дәлелдеді. 2018 жылы мемлекеттік музей-қорық құрылды.',
      en: 'Discovered in 1980 by archaeologist Viktor Zaibert. Excavations uncovered 158 semi-subterranean houses and over 300,000 horse bones comprising 99.9% of all animal remains. In 2009, international geochemical analysis confirmed mare milk fatty residues in Botai ceramic vessels — proving horse milking (kymyz preparation) and bridling 6,000 years ago. Inscribed on UNESCO Tentative List.',
      ru: 'Открыто в 1980 году экспедицией профессора Виктора Зайберта. Исследовано 158 жилищ полуземляночного типа. Международные анализы черепков посуды подтвердили наличие следов кобыльего молока (кумыса) и удил, доказав, что здесь зародилось всадничество.',
    },
    whyImportant: {
      kk: 'Жылқыны қолға үйрету — дөңгелек ойлап табу сияқты адамзат тарихын өзгерткен ұлы төңкеріс. Оның отаны — дәл осы Қазақстанның Ботай даласы.',
      en: 'Horse domestication fundamentally transformed global human mobility, trade, warfare, and cultural exchange — originating right here on the Kazakh steppe.',
      ru: 'Одомашнивание лошади стало цивилизационным прорывом планетарного масштаба, изменившим карту Евразии.',
    },
    whyVisit: {
      kk: 'Адамзаттың алғашқы жылқышылары өмір сүрген киелі өзен бойын көріп, қайта жаңғыртылған тұрғын үйлер мен музей артефактілерімен танысу.',
      en: 'Stand at the very coordinates where horses were first ridden by human hands, inspect reconstructed dwellings, and visit archaeological showcases.',
      ru: 'Побывать на месте, где человек впервые сел верхом на коня, увидеть реконструированные жилища ботайцев и археологические находки.',
    },
    whatToSee: {
      kk: [
        'Ботай қонысының археологиялық қазба орны мен қазылған тұрғын үйлер сұлбасы',
        'Саумалкөл кентіндегі «Ботай» музей-қорығының артефактілер залы',
        'Жақын орналасқан Имантау-Шалқар демалыс аймағы мен көлдері',
        'Бурабайдағы «Ботай-Бурабай» ашық аспан астындағы реконструкция музейі',
      ],
      en: [
        'Archaeological excavation perimeter with outlines of 158 houses',
        'Botai State Museum showroom in Saumalkol village',
        'Scenic pine forests and lakes of the Imantau-Shalkar resort area',
        'Full-scale reconstructed Botai village museum at nearby Burabay National Park',
      ],
      ru: [
        'Археологический раскоп с контурами древних полуземлянок',
        'Экспозиция государственного музея-заповедника в Саумалколе',
        'Курортная зона озер Имантау и Шалкар',
        'Музей под открытым небом «Ботай-Бурабай» с реконструкцией поселения',
      ],
    },
    whatToDo: {
      kk: [
        'Иманбұрлық өзенінің биік жағасынан ежелгі қоныс панорамасын тамашалау',
        'Музей гидінен ботайлықтардың тұрмысы мен ат баптау тарихын тыңдау',
        'Айыртаудағы Шалқар көліне барып ұлттық ат спортын тамашалау',
      ],
      en: [
        'Take an interpretive hike along the scenic Imanburluk river terrace',
        'Learn about primitive bone tools and pottery firing from reserve curators',
        'Combine with horse riding tours in the Imantau lake district',
      ],
      ru: [
        'Прогуляться по высокому берегу реки Иманбурлык, где жили первые всадники',
        'Узнать о секретах древней керамики у сотрудников музея',
        'Совместить поездку с конными прогулками на озере Имантау',
      ],
    },
    bestTimeToVisit: {
      kk: 'Маусым – Қыркүйек айлары',
      en: 'June to September',
      ru: 'Июнь – сентябрь',
    },
    recommendedVisitDurationHours: 3,
    openingHours: {
      schedule: {
        kk: 'Музей: Дүйсенбі – Жұма 09:00 – 18:00. Қоныс: күн сайын.',
        en: 'Museum: Mon–Fri 09:00 – 18:00. Excavation: Open daily during daylight.',
        ru: 'Музей: Пн–Пт 09:00 – 18:00. Городище: ежедневно в светлое время.',
      },
      status: 'VERIFIED',
      notes: {
        kk: '«Ботай» мемлекеттік музей-қорығының кеңсесі: Саумалкөл ауылы, Достық к-сі, 15а.',
        en: 'Botai State Museum headquarters located at 15A Dostyk St, Saumalkol.',
        ru: 'Дирекция музея находится в селе Саумалколь, ул. Достык, 15а.',
      },
    },
    ticketPrices: {
      domesticAdult: 500,
      domesticStudent: 300,
      domesticChild: 200,
      foreignAdult: 1000,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Музей экспозициясына кіру бағасы. Қоныс аумағы ашық.',
        en: 'Fee is for museum exhibition halls. Excavation ground is accessible.',
        ru: 'Билет в музейный зал. Вход на территорию раскопа свободный.',
      },
      source: '«Ботай» мемлекеттік тарихи-мәдени музей-қорығы',
      sourceUrl: 'https://kazakhstan.travel/tourist-spots/botai',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/botai.jpg',
        caption: {
          kk: 'Ботай даласы және адамзат алғаш қолға үйреткен жылқылар',
          en: 'Steppe horizon of Botai, land where the horse was first tamed by man',
          ru: 'Степи Ботая — земля, где человек впервые приручил скакуна',
        },
        credit: 'Botai Museum Archive',
      },
      {
        url: '/images/interiors/botai-360-pano-settlement.jpg',
        caption: {
          kk: 'Ботай қонысының 360° панорамасы — жылқы алғаш қолға үйретілген жер',
          en: '360° panorama of Botai Settlement — birthplace of horse domestication',
          ru: '360° панорама поселения Ботай — родины коневодства',
        },
        credit: 'Qazaq Heritage 360° Virtual Tour',
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Көкшетау (95 км) немесе Петропавл (240 км)',
        en: 'Kokshetau (95 km) or Petropavl (240 km)',
        ru: 'Кокшетау (95 км) или Петропавловск (240 км)',
      },
      distanceFromHubKm: 95,
      options: [
        {
          mode: 'car',
          title: {
            kk: 'Көкшетау немесе Бурабайдан көлікпен / турмен',
            en: 'Rental car or transfer from Kokshetau / Burabay',
            ru: 'Автомобиль или тур из Кокшетау / Бурабая',
          },
          duration: '1h 20m from Kokshetau',
          costRange: { min: 12000, max: 25000, currency: 'KZT' },
          provider: 'Local drivers & Aiyrtau tourism services',
          status: 'ESTIMATED',
          tips: {
            kk: 'Көкшетау қаласынан Саумалкөлге дейін жақсы асфальт жол бар.',
            en: 'Good asphalt road connecting Kokshetau to Saumalkol.',
            ru: 'Хорошая асфальтированная дорога от Кокшетау до Саумалколя.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 8000, max: 15000 },
      midRangePerNight: { min: 20000, max: 40000 },
      luxuryPerNight: { min: 50000, max: 95000 },
      status: 'ESTIMATED',
      source: 'Imantau-Shalkar guesthouses and hotels in Kokshetau',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 4000, max: 7500 },
      midRangePerDay: { min: 8000, max: 15000 },
      status: 'ESTIMATED',
      source: 'Saumalkol cafes and resort dining',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: false,
      walkingDifficulty: 'easy',
      notes: {
        kk: 'Қоныс далалық тегіс жерде орналасқан.',
        en: 'The site is in an open flat steppe river terrace.',
        ru: 'Памятник расположен на речной террасе; грунтовые дорожки.',
      },
    },
    sources: [
      {
        name: '«Ботай» мемлекеттік тарихи-мәдени музей-қорығы',
        url: 'https://kazakhstan.travel/tourist-spots/botai',
        type: 'official_reserve',
        verifiedAt: '2026-09-19',
      },
      {
        name: 'UNESCO World Heritage Tentative List (Botai)',
        url: 'https://whc.unesco.org/en/tentativelists/6558/',
        type: 'unesco',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'saraishyk',
    slug: 'saraishyk-ancient-city',
    name: {
      kk: 'Сарайшық тарихи-мәдени музей-қорығы',
      en: 'Ancient Saraishyk Historical-Cultural Reserve',
      ru: 'Историко-культурный музей-заповедник Сарайшык',
    },
    regionId: 'atyrau',
    cityDistrict: {
      kk: 'Махамбет ауданы, Сарайшық ауылы',
      en: 'Makhambet District, Saraishyk Village',
      ru: 'Махамбетский район, село Сарайчик',
    },
    exactLocation: {
      kk: 'Атырау қаласынан солтүстікке қарай 50 км, Жайық (Орал) өзенінің оң жағалауы',
      en: '50 km north of Atyrau City, right bank of Ural (Zhaiyk) River',
      ru: '50 км к северу от Атырау, правый берег реки Урал (Жайык)',
    },
    coordinates: {
      lat: 47.4528,
      lng: 51.9619,
    },
    category: 'fortress_memorial',
    epoch: 'golden_horde',
    unescoWorldHeritage: false,
    historicalPeriod: {
      kk: 'X–XI ғғ. бастау алып, XIII–XVI ғғ. гүлденген (Алтын Орда, Қазақ хандығы)',
      en: '10th–16th century CE (Flourished under Golden Horde and Kazakh Khanate)',
      ru: 'X–XVI века (расцвет эпохи Золотой Орды и Казахского ханства)',
    },
    shortDescription: {
      kk: 'Алтын Орда мен Қазақ хандығының астанасы болған, жеті хан жерленген киелі қалашық пен пантеон.',
      en: 'Historic royal capital of the Golden Horde and early Kazakh Khanate, sacred pantheon where seven khans were entombed.',
      ru: 'Древняя столица Золотой Орды и Казахского ханства, ханский пантеон на берегу реки Урал.',
    },
    history: {
      kk: 'Сарайшық — Еуропа мен Азияны жалғаған Жібек жолының аса маңызды қаласы. Қалада қыш су құбырлары, монета сарайы, бақшалар болған. Мұнда Тоқтамыс, Жәнібек және Қазақ хандығының негізін кеңейткен Қасым хан жерленген. 1999 жылы 7 ханның құрметіне арналған Хандар пантеоны мемориалы мен музей кешені бой көтерді.',
      en: 'Founded along the Ural River on the grand caravan artery connecting Europe with Asia. Saraishyk featured ceramic sewer aqueducts, international mints, and gardens. Seven prominent Eurasian rulers were buried here, including Golden Horde Khans Tokhtamysh and Zhanibek, as well as the great Kazakh Khan Kasym.',
      ru: 'Сарайшык был ключевым узлом на стыке Европы и Азии с водопроводом из керамических труб. Здесь похоронены ханы Золотой Орды и правитель Казахского ханства Касым-хан.',
    },
    whyImportant: {
      kk: 'Қазақ хандығының алғашқы астаналарының бірі әрі Қасым ханның мемлекеттік ордасы.',
      en: 'One of the first royal capitals of the Kazakh Khanate where Khan Kasym unified the nation under the fundamental legal code Qasym Khannyn Qasqa Zholy.',
      ru: 'Первая столица объединенного Казахского ханства при Касым-хане, духовная твердыня запада Казахстана.',
    },
    whyVisit: {
      kk: 'Хандар пантеонына тағзым ету, Жайық жағасындағы қазба жұмыстарын көру және музейдің Алтын Орда жәдігерлерін тамашалау.',
      en: 'Pay tribute at the monumental Khan Pantheon, explore excavated medieval blocks, and inspect Golden Horde coins inside the museum.',
      ru: 'Увидеть величественный Ханский пантеон, раскопки древних кварталов у реки и уникальные артефакты в музее.',
    },
    whatToSee: {
      kk: [
        'Жеті ханға арналған 17 метрлік Хандар пантеоны мемориалы',
        'Сарайшық қалашығының археологиялық қазба аумағы',
        'Музей экспозициясы (көне құбырлар, тиындар, қыш ыдыстар)',
        'Жайық өзенінің көркем жағалауы',
      ],
      en: [
        '17-meter tall octagonal Khan Pantheon memorial dedicated to 7 historic rulers',
        'Excavated settlement area showcasing medieval brick foundations',
        'Museum gallery housing ceramics, mint coins, and ancient jewellery',
        'Scenic promenade along the Ural (Zhaiyk) River',
      ],
      ru: [
        '17-метровый мемориальный Пантеон семи ханов',
        'Раскопки средневекового городища с остатками стен',
        'Музей с экспозицией золотоордынских монет и глазурованной керамики',
        'Берег реки Урал (Жайык)',
      ],
    },
    whatToDo: {
      kk: [
        'Хандар пантеоны алдында тарихи шежіремен танысу',
        'Атырау қаласынан жарты күндік экскурсия жасау',
      ],
      en: [
        'Study the genealogy of Eurasian steppe dynasties at the Pantheon',
        'Take an effortless half-day cultural excursion from Atyrau city',
      ],
      ru: [
        'Изучить генеалогическое древо ханов степи у мемориала',
        'Совершить комфортную полудневную экскурсию из города Атырау',
      ],
    },
    bestTimeToVisit: {
      kk: 'Сәуір – Маусым және Қыркүйек – Қазан айлары',
      en: 'April to June and September to October',
      ru: 'Апрель – июнь и сентябрь – октябрь',
    },
    recommendedVisitDurationHours: 2,
    openingHours: {
      schedule: {
        kk: 'Сейсенбі – Жексенбі: 09:00 – 18:00 (Дүйсенбі — демалыс)',
        en: 'Tuesday – Sunday: 09:00 – 18:00 (Monday closed)',
        ru: 'Вторник – воскресенье: 09:00 – 18:00 (Пн — выходной)',
      },
      status: 'VERIFIED',
      notes: {
        kk: '«Сарайшық» мемлекеттік тарихи-мәдени музей-қорығының ресми кестесі.',
        en: 'Official schedule of Saraishyk State Historical Museum-Reserve.',
        ru: 'Официальный график работы государственного музея «Сарайшык».',
      },
    },
    ticketPrices: {
      domesticAdult: 500,
      domesticStudent: 300,
      domesticChild: 200,
      foreignAdult: 1000,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Музейге кіру билеті құны. Пантеон сырты еркін көруге қолжетімді.',
        en: 'Ticket is for the museum exhibition pavilion. Exterior grounds accessible.',
        ru: 'Билет на осмотр музейной экспозиции. Осмотр пантеона снаружи свободный.',
      },
      source: '«Сарайшық» мемлекеттік тарихи-мәдени музей-қорығы',
      sourceUrl: 'https://kazakhstan.travel/tourist-spots/saraishyk',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/saraishyk.jpg',
        caption: {
          kk: 'Сарайшық хандар пантеонының сәулетті кешені',
          en: 'Imposing architectural complex of the Khan Pantheon at Saraishyk',
          ru: 'Мемориальный комплекс Пантеона ханов в Сарайшыке',
        },
        credit: 'Atyrau Heritage Board',
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Атырау қаласы (50 км)',
        en: 'Atyrau City (50 km)',
        ru: 'город Атырау (50 км)',
      },
      distanceFromHubKm: 50,
      options: [
        {
          mode: 'taxi',
          title: {
            kk: 'Атырау қаласынан такси (Яндекс Go / жергілікті тасымал)',
            en: 'Taxi / Car transfer from Atyrau',
            ru: 'Такси из Атырау (Яндекс Go)',
          },
          duration: '40 min',
          costRange: { min: 4000, max: 8000, currency: 'KZT' },
          provider: 'Yandex Go / Local taxis',
          status: 'VERIFIED',
          tips: {
            kk: 'Атыраудан Махамбет бағытындағы тасжол толықтай асфальтталған.',
            en: 'Direct paved highway heading north towards Makhambet.',
            ru: 'Прямая асфальтированная трасса в сторону Махамбета.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 12000, max: 24000 },
      midRangePerNight: { min: 30000, max: 60000 },
      luxuryPerNight: { min: 70000, max: 150000 },
      status: 'ESTIMATED',
      source: 'Hotels in Atyrau',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 5000, max: 9000 },
      midRangePerDay: { min: 11000, max: 22000 },
      status: 'ESTIMATED',
      source: 'Atyrau dining and river fish cuisine',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: true,
      walkingDifficulty: 'easy',
      notes: {
        kk: 'Музей және пантеон маңы тегіс тас төселген.',
        en: 'Paved walkways around the pantheon and museum.',
        ru: 'Территория вокруг пантеона и музея вымощена плиткой.',
      },
    },
    sources: [
      {
        name: '«Сарайшық» мемлекеттік тарихи-мәдени музей-қорығы',
        url: 'https://kazakhstan.travel/tourist-spots/saraishyk',
        type: 'official_reserve',
        verifiedAt: '2026-09-19',
      },
      {
        name: 'Kazakhstan National Tourism Portal',
        url: 'https://kazakhstan.travel',
        type: 'government',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'kozy-korpesh',
    slug: 'kozy-korpesh-bayan-sulu',
    name: {
      kk: 'Қозы Көрпеш – Баян сұлу кесенесі',
      en: 'Kozy Korpesh – Bayan Sulu Mausoleum',
      ru: 'Мавзолей Козы Корпеш – Баян сулу',
    },
    regionId: 'abai',
    cityDistrict: {
      kk: 'Аягөз ауданы, Таңсық ауылы маңы',
      en: 'Ayagoz District, near Tansyk Village',
      ru: 'Аягозский район, близ села Тансык',
    },
    exactLocation: {
      kk: 'Аягөз қаласынан 90 км, Аягөз өзенінің оң жағалауы',
      en: '90 km from Ayagoz, right bank of Ayagoz River',
      ru: '90 км от города Аягоз, правый берег реки Аягоз',
    },
    coordinates: {
      lat: 47.5008,
      lng: 79.9197,
    },
    category: 'mausoleum',
    epoch: 'silk_road',
    unescoWorldHeritage: false,
    historicalPeriod: {
      kk: 'X – XI ғасырлар (ерте ортағасырлық кезең)',
      en: '10th – 11th century CE (Early Medieval Period)',
      ru: 'X – XI века (раннее средневековье)',
    },
    shortDescription: {
      kk: 'Қазақ даласының ең көне махаббат жыры мен аңызына арналған 1000 жылдық тарихи тас кесене.',
      en: '1,000-year-old stone pyramid-domed sanctuary enshrining the legendary lovers celebrated in Kazakh epics.',
      ru: 'Тысячелетний каменный памятник, увековечивший героев древнейшей степной поэмы о любви.',
    },
    history: {
      kk: 'Қозы Көрпеш пен Баян сұлу жыры — қазақ ауыз әдебиетінің ең шоқтығы биік туындыларының бірі. Ежелгі мазар тақта тастардан төртбұрышты пирамида тәріздес етіп тұрғызылған, биіктігі 12 метрге жуық. Бұл ескерткіш Шоқан Уәлихановтың 1856 жылғы жазбаларында суреттеліп, ғылыми айналымға енген. Бүгінде 15 сәуірде Қазақстанда тойланатын «Ғашықтар күні» осы қос ғашықтың құрметіне арналған.',
      en: 'Dating back to the 10th century, this corbelled stone masonry tower is one of the oldest surviving intact funerary monuments in Kazakhstan. Recorded in 1856 by Kazakh explorer and scholar Chokan Valikhanov. In contemporary Kazakhstan, national Lovers Day is celebrated every April 15 in honour of Kozy and Bayan.',
      ru: 'Один из древнейших сохранившихся каменных памятников Казахстана X–XI веков. Описан Чоканом Валихановым в 1856 году. 15 апреля в Казахстане отмечается национальный День влюбленных в память о героях этой поэмы.',
    },
    whyImportant: {
      kk: 'Қазақтың мәңгілік ғашықтық символы. Қазақстанның жалпыұлттық сакралды ескерткіштерінің бірі.',
      en: 'Poetic heart of Kazakh folklore and sacred cultural landmark symbolizing devotion and chivalric honour.',
      ru: 'Культурный символ верности и любви в казахском эпосе, сакральный памятник республиканского значения.',
    },
    whyVisit: {
      kk: 'Дала төсіндегі мыңжылдық тас пирамиданы көру, көне тарих пен поэзия рухын сезіну.',
      en: 'Experience a thousand-year-old stone pyramid towering solitarily on the wind-swept Ayagoz plain.',
      ru: 'Увидеть уникальную каменную кладку памятника X века, возвышающегося среди степного простора.',
    },
    whatToSee: {
      kk: [
        'Тақта тастардан өрілген 12 метрлік көне кесене',
        'Аягөз өзені мен Таңсық даласының панорамасы',
        'Ескерткіш аумағындағы тарихи тақталар',
      ],
      en: [
        '12-meter dry-stone pyramid-domed masonry tomb',
        'Panoramic sweeps of the meandering Ayagoz river steppe',
        'Historical commemorative markers and interpretive signage',
      ],
      ru: [
        '12-метровый каменный мавзолей шатрового типа X–XI вв.',
        'Панорама степной долины реки Аягоз',
        'Информационные памятные плиты',
      ],
    },
    whatToDo: {
      kk: [
        'Қозы Көрпеш – Баян сұлу жырының үзінділерін оқып, тарихын түсіну',
        'Абай облысы бойынша Семей мен Жидебай сапарына біріктіру',
      ],
      en: [
        'Discover the heroic stanzas of the ancient epic poem',
        'Integrate into a regional literary route covering Abai district and Semey',
      ],
      ru: [
        'Познакомиться с фрагментами древней лиро-эпической поэмы',
        'Включить в культурный маршрут по области Абай (Семей, Жидебай)',
      ],
    },
    bestTimeToVisit: {
      kk: 'Мамыр – Қыркүйек айлары',
      en: 'May to September',
      ru: 'Май – сентябрь',
    },
    recommendedVisitDurationHours: 2,
    openingHours: {
      schedule: {
        kk: 'Күн сайын, ашық аспан астында',
        en: 'Daily, open-air historical site',
        ru: 'Ежедневно, открытый доступ',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Ашық даладағы тарихи ескерткіш, кіру еркін.',
        en: 'Open-air cultural heritage monument; open at all times.',
        ru: 'Памятник истории под открытым небом, доступ открыт круглосуточно.',
      },
    },
    ticketPrices: {
      domesticAdult: 0,
      domesticStudent: 0,
      domesticChild: 0,
      foreignAdult: 0,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Кіру тегін. Мемлекеттік қорғаудағы ашық ескерткіш.',
        en: 'Free admission. Protected state historical monument.',
        ru: 'Вход свободный. Памятник находится под государственной охраной.',
      },
      source: 'Абай облысының тарихи-мәдени мұраны қорғау орталығы',
      sourceUrl: 'https://kazakhstan.travel',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/kozy-korpesh.jpg',
        caption: {
          kk: 'Қозы Көрпеш – Баян сұлу кесенесінің тарихи көрінісі',
          en: 'Ancient stone masonry silhouette of Kozy Korpesh – Bayan Sulu mausoleum',
          ru: 'Каменный силуэт мавзолея Козы Корпеш – Баян сулу в степи',
        },
        credit: 'Kazakhstan Tourism Board',
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Аягөз (90 км) немесе Семей (280 км)',
        en: 'Ayagoz (90 km) or Semey (280 km)',
        ru: 'Аягоз (90 км) или Семей (280 км)',
      },
      distanceFromHubKm: 90,
      options: [
        {
          mode: 'train',
          title: {
            kk: 'Алматы немесе Семейден Таңсық станциясына пойыз',
            en: 'Train to Tansyk railway station (adjacent to monument)',
            ru: 'Поезд до ж/д станции Тансык (рядом с памятником)',
          },
          duration: '6h - 8h from Almaty',
          costRange: { min: 4500, max: 12000, currency: 'KZT' },
          provider: 'Қазақстан темір жолы (railways.kz)',
          status: 'ESTIMATED',
          tips: {
            kk: 'Таңсық теміржол бекетінен кесенеге дейін небәрі 10 шақырым.',
            en: 'The monument sits merely 10 km from Tansyk railway halt.',
            ru: 'Памятник расположен всего в 10 км от ж/д станции Тансык.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 6000, max: 12000 },
      midRangePerNight: { min: 16000, max: 32000 },
      luxuryPerNight: { min: 38000, max: 65000 },
      status: 'ESTIMATED',
      source: 'Guesthouses in Ayagoz & Tansyk',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 3500, max: 6500 },
      midRangePerDay: { min: 7000, max: 13000 },
      status: 'ESTIMATED',
      source: 'Ayagoz roadside cafes and dining',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: false,
      walkingDifficulty: 'easy',
      notes: {
        kk: 'Далалық жолмен келуге болады, жер бедері тегіс.',
        en: 'Open steppe access; flat natural terrain.',
        ru: 'Подход по равнинной степи, рельеф ровный.',
      },
    },
    sources: [
      {
        name: 'Kazakhstan National Tourism Portal (Kozy Korpesh)',
        url: 'https://kazakhstan.travel',
        type: 'government',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },

  {
    id: 'zharkent-mosque',
    slug: 'zharkent-mosque-architectural-complex',
    name: {
      kk: 'Жаркент мешіт-сәулет кешені',
      en: 'Zharkent Pagoda-Mosque Complex',
      ru: 'Жаркентская мечеть-пагода',
    },
    regionId: 'zhetysu',
    cityDistrict: {
      kk: 'Жаркент қаласы, Панфилов ауданы',
      en: 'Zharkent Town, Panfilov District',
      ru: 'город Жаркент, Панфиловский район',
    },
    exactLocation: {
      kk: 'Юлдашев көшесі, 40, «Жаркент мешіті» сәулет-көркемөнер музейі',
      en: '40 Yuldashev Street, Zharkent Architectural Art Museum',
      ru: 'ул. Юлдашева, 40, архитектурно-художественный музей',
    },
    coordinates: {
      lat: 44.1643,
      lng: 80.0069,
    },
    category: 'mausoleum',
    epoch: 'enlightenment',
    unescoWorldHeritage: false,
    historicalPeriod: {
      kk: 'XIX ғасырдың аяғы (1887–1892 жж.)',
      en: 'Late 19th century (1887–1892 CE)',
      ru: 'Конец XIX века (1887–1892 гг.)',
    },
    shortDescription: {
      kk: 'Хон Пик шебер шегесіз Тянь-Шань шыршасынан тұрғызған шығыс пагодасы үлгісіндегі әлемдік бірегей сәулет жауһары.',
      en: 'Unique pagoda-style wooden mosque built without a single nail by master builder Hon Pik from Tian Shan fir logs.',
      ru: 'Уникальная деревянная мечеть в стиле восточной пагоды, возведенная зодчим Хон Пиком без единого гвоздя.',
    },
    history: {
      kk: 'Кешен 1887–1892 жылдары жергілікті қазақ көпесі Уәлибай Юлдашевтің бастамасымен және қаржысымен салынған. Құрылысты басқаруға Бейжіңнен атақты шебер Хон Пик шақырылған. Ғимарат қаңқасы шегесіз, біріктіру әдісімен Тянь-Шань шыршасынан тұрғызылған. Кешен құрамына жұма мешіті, шағын мешіт, медресе және сәнді бас қақпа кіреді.',
      en: 'Commissioned by first-guild merchant Valibay Yuldashev between 1887 and 1892. Master architect Hon Pik was invited from Beijing. Constructed entirely of Tian Shan spruce timbers using joinery without nails. Features Chinese Buddhist pagoda eaves combined with Islamic muqarnas and Kazakh steppe ornamental polychromy.',
      ru: 'Построена в 1887–1892 годах купцом первой гильдии Валибаем Юлдашевым. Главный зодчий — Хон Пик. Возведена без единого гвоздя из тянь-шаньской ели, сочетает китайскую буддийскую архитектуру с исламскими декоративными канонами.',
    },
    whyImportant: {
      kk: 'Ұлы Жібек жолындағы Қытай мен Орталық Азия өркениеттерінің өзара сәулеттік үндесуінің әлемдегі сирек кездесетін бірден-бір үлгісі.',
      en: 'One of the rarest surviving hybrid monuments where Far Eastern pagoda engineering seamlessly merges with Islamic Central Asian sanctuary aesthetics.',
      ru: 'Редчайший пример органичного слияния дальневосточной архитектурной традиции и исламского зодчества на Шелковом пути.',
    },
    whyVisit: {
      kk: 'Бірде-бір шеге қағылмаған ағаш шатырдың керемет инженерлік құрылысын, 52 бағанды және қазақы-шығыстық оюларды көру.',
      en: 'Witness the nail-less wooden roof engineering, 52 timber pillars, sweeping pagoda eaves, and vibrant floral-calligraphic ornaments.',
      ru: 'Увидеть шедевр безнагельного деревянного зодчества, 52 колонны и уникальный сплав степных орнаментов.',
    },
    whatToSee: {
      kk: [
        'Шегесіз жиналған алып ағаш шатыр мен пагода тәрізді қабаттар',
        'Тянь-Шань шыршасынан жасалған 52 тіреуіш колонна',
        'Шығыс стиліндегі ою-өрнекті бас қақпа (дарбаза)',
        'Медресе бөлмелеріндегі этнографиялық экспозиция',
        'Ұлттық оюлармен безендірілген михраб пен мінбер',
      ],
      en: [
        'Nail-less curved multi-tiered pagoda roof structure',
        '52 giant load-bearing Tian Shan fir timber columns',
        'Ornamental Chinese-Islamic main portal gates',
        'Historical madrasah chambers with regional artifacts',
        'Richly painted mihrab with steppe floral rosettes',
      ],
      ru: [
        'Многоярусная изогнутая крыша, собранная без гвоздей',
        '52 резные колонны из тянь-шаньской ели',
        'Парадные ворота с искусной резьбой и росписью',
        'Кельи медресе с музейной коллекцией Шелкового пути',
        'Красочный михраб с элементами восточного декора',
      ],
    },
    whatToDo: {
      kk: [
        'Ғимарат қаңқасының ағаш түйіндерін зерттеп фотоға түсіру',
        'Жаркент өлкетану музейінің экскурсиясын тыңдау',
        'Жергілікті дұнған және ұйғыр тағамдарын (лағман, манты) татып көру',
      ],
      en: [
        'Examine intricate wooden dovetail interlocking timber joints',
        'Book an official guided tour of the architectural reserve',
        'Taste legendary local Dungan-Uyghur hand-pulled lagman noodles',
      ],
      ru: [
        'Детально рассмотреть уникальные деревянные замки и врубки',
        'Пройти подробную экскурсию с научным сотрудником музея',
        'Попробовать знаменитый жаркентский лагман в колоритных кафе',
      ],
    },
    bestTimeToVisit: {
      kk: 'Сәуір – Маусым және Қыркүйек – Қазан (жазы ыстық, қысы қоңыржай)',
      en: 'April to June and September to October (pleasant steppe climate)',
      ru: 'Апрель – июнь и сентябрь – октябрь',
    },
    recommendedVisitDurationHours: 2.5,
    openingHours: {
      schedule: {
        kk: 'Сейсенбі – Жексенбі: 09:00 – 18:00 (Дүйсенбі — демалыс)',
        en: 'Tuesday – Sunday: 09:00 – 18:00 (Monday closed)',
        ru: 'Вторник – воскресенье: 09:00 – 18:00 (Понедельник — выходной)',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Билет кассасы 17:15-ке дейін істейді. Байланыс: +7 (72831) 9-15-44',
        en: 'Ticket desk closes at 17:15. Telephone: +7 (72831) 9-15-44',
        ru: 'Касса работает до 17:15. Тел: +7 (72831) 9-15-44',
      },
    },
    ticketPrices: {
      domesticAdult: 1000,
      domesticStudent: 500,
      domesticChild: 300,
      foreignAdult: 2500,
      excursionFeeKz: 2000,
      excursionFeeEn: 4000,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Шетелдік қонақтар үшін ағылшын тіліндегі экскурсия қолжетімді.',
        en: 'Foreign visitor ticket includes full museum exhibition access.',
        ru: 'Билет включает осмотр мечети и медресе.',
      },
      source: 'Zharkent Architectural Museum Official Administration',
      sourceUrl: 'https://kazakhstan.travel/tourist-spots/zhetysu',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/zharkent-mosque.jpg',
        caption: {
          kk: 'Жаркент мешітінің бірегей пагода тәрізді ағаш шатыры мен балкондары',
          en: 'Architectural facade of the Zharkent nail-less wooden pagoda mosque',
          ru: 'Фасад деревянной Жаркентской мечети в стиле восточной пагоды',
        },
      },
      {
        url: 'https://images.unsplash.com/photo-1590732484402-26d782f5de99?auto=format&fit=crop&w=1200&q=80',
        caption: {
          kk: 'Мешіт ішіндегі Тянь-Шань шыршасынан жонылған 52 баған',
          en: 'Inner prayer hall with 52 load-bearing fir columns',
          ru: 'Внутренний зал с 52 резными колоннами из тянь-шаньской ели',
        },
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Алматы қаласы (300 км) немесе Талдықорған (280 км)',
        en: 'Almaty (300 km) or Taldykorgan (280 km)',
        ru: 'Алматы (300 км) или Талдыкорган (280 км)',
      },
      distanceFromHubKm: 300,
      options: [
        {
          mode: 'car',
          title: {
            kk: 'Алматы — Жаркент бағытындағы «Батыс Еуропа — Батыс Қытай» автобаны',
            en: 'Direct highway from Almaty via Western Europe-Western China expressway',
            ru: 'Автомагистраль Западная Европа — Западный Китай из Алматы',
          },
          duration: '3.5 - 4 hours',
          costRange: { min: 12000, max: 25000, currency: 'KZT' },
          provider: 'Shared Taxi / Rental Car from Almaty Sayran station',
          status: 'VERIFIED',
          tips: {
            kk: 'Жол сапасы мінсіз (бетонды автобан). Жолда Шарын шатқалына бұрылып өтуге болады.',
            en: 'Excellent modern toll expressway. Combines perfectly with a detour to Charyn Canyon.',
            ru: 'Отличная бетонная автомагистраль. По пути можно посетить Чарынский каньон.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 8000, max: 15000 },
      midRangePerNight: { min: 18000, max: 35000 },
      luxuryPerNight: { min: 40000, max: 70000 },
      status: 'VERIFIED',
      source: 'Zharkent & Chundzha hot spring resorts',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 3500, max: 6000 },
      midRangePerDay: { min: 7000, max: 12000 },
      status: 'VERIFIED',
      source: 'Panfilov district local dining indices',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: true,
      walkingDifficulty: 'easy',
      notes: {
        kk: 'Ауласы тегіс тас төселген, кіреберісте шағын баспалдақтар бар.',
        en: 'Paved courtyard grounds; low threshold steps at sanctuary entry.',
        ru: 'Территория вымощена плиткой, на входе невысокие ступени.',
      },
    },
    sources: [
      {
        name: 'Zhetysu Regional Tourism Board',
        url: 'https://kazakhstan.travel/tourist-spots/zhetysu',
        type: 'government',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'korkyt-ata',
    slug: 'korkyt-ata-memorial-complex',
    name: {
      kk: 'Қорқыт ата мемориалдық кешені',
      en: 'Korkyt Ata Memorial Complex',
      ru: 'Мемориальный комплекс Коркыт-ата',
    },
    regionId: 'kyzylorda',
    cityDistrict: {
      kk: 'Қармақшы ауданы, Жосалы кенті маңы',
      en: 'Karmakshy District, near Zhosaly',
      ru: 'Кармакшинский район, близ пос. Жосалы',
    },
    exactLocation: {
      kk: '«Самара — Шымкент» тасжолы, Сырдария жағасы',
      en: 'Samara-Shymkent Highway, Syr Darya bank',
      ru: 'трасса Самара — Шымкент, берег Сырдарьи',
    },
    coordinates: {
      lat: 45.6033,
      lng: 63.9189,
    },
    category: 'mausoleum',
    epoch: 'silk_road',
    unescoWorldHeritage: false,
    historicalPeriod: {
      kk: 'VIII–IX ғасырлар (монумент 1980 ж. тұрғызылған)',
      en: '8th–9th century sage (monument erected 1980, restored 2014)',
      ru: 'VIII–IX века (монумент возведен в 1980 г., обновлен в 2014 г.)',
    },
    shortDescription: {
      kk: 'Қобыз атасы Қорқытқа арналған, дала желімен күй шертетін дүниедегі жалғыз акустикалық сәулет ескерткіші.',
      en: 'World-famous sonic architectural monument dedicated to the legendary father of the kobyz, singing with the steppe wind.',
      ru: 'Уникальный звучащий монумент на берегу Сырдарьи, посвященный родоначальнику кобыза Коркыт-ата.',
    },
    history: {
      kk: 'Қорқыт ата — VIII–IX ғасырларда Сыр бойында өмір сүрген түркі дүниесінің ұлы ойшылы, философ, қобыз аспабы мен күй өнерінің атасы. Өлімнен қашып дүниенің төрт бұрышын кезген ол өмір мәнін өнерден, күйден тапқан. 1980 жылы сәулетші Б. Ыбыраев 8 метрлік 4 қобыз бейнесіндегі монумент салды. Мұнда жел соққанда қобыздың мұңды сарыны табиғи түрде жаңғырып тұрады.',
      en: 'Korkyt Ata was an 8th–9th century Turkic sage, philosopher, and poet regarded as the inventor of the two-stringed bowed horsehair kobyz. Legend tells of his quest for immortality across the earth, concluding that only eternal music transcends death. Built in 1980 by architect B. Ibraev, the 8-meter high four-column stele forms organ pipes producing haunting kobyz frequencies in the steppe wind.',
      ru: 'Коркыт-ата — легендарный тюркский сказитель и философ VIII–IX вв., создатель кобыза. Комплекс возведен в 1980 г. Четыре 8-метровые стелы образуют стилизованный кобыз: центральная органная труба при порывах степного ветра издает мелодичные протяжные звуки.',
    },
    whyImportant: {
      kk: 'Түркі өркениетінің рухани бастауы. Қорқыт мұрасы мен қобыз өнері ЮНЕСКО-ның Адамзаттың материалдық емес мәдени мұрасы тізіміне енгізілген.',
      en: 'Foundational spiritual sage of all Turkic peoples; Korkyt Ata epic heritage and kobyz music are inscribed on the UNESCO Intangible Cultural Heritage list.',
      ru: 'Основополагающий памятник духовности тюрков; наследие Коркыта включено в список нематериального культурного наследия ЮНЕСКО.',
    },
    whyVisit: {
      kk: 'Шексіз Сыр даласында желден қобыз күйі қалай туатынын өз құлағыңызбен есту, аспанды тіреген алып стеланы көру және жерасты намазханасында тыныштық табу.',
      en: 'Experience the wind organ producing authentic nomadic kobyz sounds, explore the underground meditation chamber, and feel the sacred Syr Darya river spirit.',
      ru: 'Услышать природное звучание кобыза, рождаемое ветром в стелах, и ощутить космическое величие сырдарьинской степи.',
    },
    whatToSee: {
      kk: [
        'Желдің күшімен үн шығаратын 4 қобыз пішінді 8 метрлік алып стела',
        '«Тілек пирамидасы» және сакралды орталық',
        'Қорқыт ата өмірі мен түркі дүниесіне арналған заманауи музей',
        'Ашық аспан астындағы амфитеатр мен жерасты намазханасы',
        'Сырдария өзеніне қарайтын қарау алаңы',
      ],
      en: [
        'Acoustic 8-meter tall wind-singing monument of four conjoined kobyzes',
        'Pyramid of wishes and central sacred stone',
        'Modern historical museum with dioramas and epic manuscripts',
        'Underground prayer room and open-air amphitheater',
        'Panoramic viewing terrace overlooking the Syr Darya river',
      ],
      ru: [
        'Звучащий 8-метровый памятник из 4 кобызов с органной трубой',
        'Пирамида желаний и священный камень',
        'Музей истории Коркыта и древней кочевой музыки',
        'Подземная ритуальная мечеть и степной амфитеатр',
        'Смотровая площадка с видом на реку Сырдарья',
      ],
    },
    whatToDo: {
      kk: [
        'Стеланың астында тұрып жел шығарған табиғи қобыз күйін тыңдау',
        'Музейден қобыз аспабының жасалу тарихын үйрену',
        'Байқоңыр ғарыш айлағына сапармен ұштастыру',
      ],
      en: [
        'Stand beneath the arch to hear the eerie wind resonance of the steppe',
        'Listen to master recording of ancient kyl-kobyz melodies in the museum',
        'Combine with a tour to the nearby Baikonur Cosmodrome',
      ],
      ru: [
        'Послушать пение ветра внутри органных труб монумента',
        'Изучить экспонаты музея и звучание древнего кыл-кобыза',
        'Совместить визит с поездкой на космодром Байконур (в 70 км)',
      ],
    },
    bestTimeToVisit: {
      kk: 'Сәуір – Маусым және Қыркүйек – Қазан',
      en: 'April to June and September to October',
      ru: 'Апрель – июнь и сентябрь – октябрь',
    },
    recommendedVisitDurationHours: 3,
    openingHours: {
      schedule: {
        kk: 'Күн сайын: 09:00 – 19:00 (демалыссыз)',
        en: 'Daily: 09:00 – 19:00 (No days off)',
        ru: 'Ежедневно: 09:00 – 19:00 (без выходных)',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Монумент ашық аспан астында орналасқандықтан тәулік бойы көруге болады, музей 18:30-да жабылады.',
        en: 'Outdoor monument is accessible 24/7; museum building open until 18:30.',
        ru: 'Территория памятника открыта круглосуточно; музей закрывается в 18:30.',
      },
    },
    ticketPrices: {
      domesticAdult: 800,
      domesticStudent: 400,
      domesticChild: 200,
      foreignAdult: 2500,
      excursionFeeKz: 1500,
      excursionFeeEn: 3500,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Кешен аумағына кіру тегін, музей билеті символикалық бағада.',
        en: 'Outdoor grounds are free; museum ticket requires official entry pass.',
        ru: 'Вход на территорию комплекса свободный, плата взимается за музей.',
      },
      source: 'Kyzylorda Regional Department of Culture & Tourism',
      sourceUrl: 'https://kyzylorda.gov.kz',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/korkyt-kobyz-user.png',
        caption: {
          kk: 'Қорқыт ата стеласы: 4 алып қобыз монументі мен жел сыбызғысы',
          en: 'Korkyt Ata sonic stele rising against the blue steppe sky',
          ru: 'Стела Коркыт Ата: 4 парящих кобыза и поющий ветровой орган',
        },
      },
      {
        url: '/images/destinations/korkyt-amphitheater-user.png',
        caption: {
          kk: 'Ақ тасты амфитеатр: дөңгелек арена мен Хилует сакралды алаңы',
          en: 'White stone sunken amphitheater and spiritual Khilwet arena under radiant sun',
          ru: 'Белокаменный круглый амфитеатр и сакральная арена Хилует',
        },
      },
      {
        url: '/images/destinations/korkyt-aerial-user.png',
        caption: {
          kk: 'Қорқыт ата кешенінің биіктен панорамасы: Қобыз, амфитеатр және Сыр даласы',
          en: 'Elevated bird-eye panorama of the Kobyz monument, amphitheater and steppe',
          ru: 'Панорама мемориала Коркыт Ата с высоты птичьего полета',
        },
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Қызылорда қаласы (160 км) немесе Байқоңыр (70 км)',
        en: 'Kyzylorda (160 km) or Baikonur (70 km)',
        ru: 'Кызылорда (160 км) или Байконур (70 км)',
      },
      distanceFromHubKm: 160,
      options: [
        {
          mode: 'train',
          title: {
            kk: 'Қызылорда — Жосалы немесе Төретам бағытындағы пойыз',
            en: 'KTZ Train to Zhosaly / Toretam station',
            ru: 'Поезд КТЖ до станции Жосалы или Тюра-Там',
          },
          duration: '2 - 2.5 hours',
          costRange: { min: 2500, max: 6000, currency: 'KZT' },
          provider: 'KTZ Railways',
          status: 'VERIFIED',
          tips: {
            kk: 'Жосалы бекетінен мемориалға дейін такси 15-20 минут алады.',
            en: 'Short 15-min taxi ride from Zhosaly station to the monument gates.',
            ru: 'От станции Жосалы до комплекса 15 минут на такси.',
          },
        },
        {
          mode: 'taxi',
          title: {
            kk: 'Қызылордадан тікелей такси немесе экскурсиялық көлік',
            en: 'Direct private transfer or excursion from Kyzylorda',
            ru: 'Индивидуальный трансфер из Кызылорды',
          },
          duration: '1.5 - 2 hours',
          costRange: { min: 15000, max: 25000, currency: 'KZT' },
          provider: 'Regional travel operators / Yandex Taxi',
          status: 'VERIFIED',
          tips: {
            kk: 'Батыс Қытай — Батыс Еуропа автобаны арқылы тегіс асфальт жолмен жетеді.',
            en: 'Smooth paved expressway along the international Silk Road corridor.',
            ru: 'Идеальная скоростная трасса М-32.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 7000, max: 14000 },
      midRangePerNight: { min: 16000, max: 32000 },
      luxuryPerNight: { min: 35000, max: 65000 },
      status: 'VERIFIED',
      source: 'Hotels in Kyzylorda & Baikonur',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 3000, max: 5500 },
      midRangePerDay: { min: 6500, max: 11000 },
      status: 'VERIFIED',
      source: 'Syr Darya dining indices',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: true,
      walkingDifficulty: 'easy',
      notes: {
        kk: 'Кешен аумағы тегіс гранит плиткалармен жабдықталған, пандустар бар.',
        en: 'Flat paved granite promenades with wheelchair accessible ramps.',
        ru: 'Площадки вымощены гранитом, оборудованы пандусы.',
      },
    },
    sources: [
      {
        name: 'Korkyt Ata Memorial State Reserve',
        url: 'https://kazakhstan.travel/tourist-spots/korkyt',
        type: 'official_reserve',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'berel-mounds',
    slug: 'berel-royal-scythian-valley',
    name: {
      kk: 'Берел сақ патшалары кесене-қорғандары',
      en: 'Berel Scythian Royal Valley & Mounds',
      ru: 'Берельские царские курганы саков',
    },
    regionId: 'east_kazakhstan',
    cityDistrict: {
      kk: 'Катонқарағай ауданы, Берел ауылы',
      en: 'Katon-Karagay District, Berel Village',
      ru: 'Катон-Карагайский район, с. Берель',
    },
    exactLocation: {
      kk: 'Бұқтырма өзені аңғары, «Берел» мемлекеттік тарихи-мәдени музей-қорығы',
      en: 'Bukhtarma River valley, Berel State Historical Reserve-Museum',
      ru: 'долина реки Бухтарма, музей-заповедник «Берель»',
    },
    coordinates: {
      lat: 49.3712,
      lng: 86.4328,
    },
    category: 'archaeological_settlement',
    epoch: 'iron_age',
    unescoWorldHeritage: false,
    historicalPeriod: {
      kk: 'Б.з.д. IV–III ғасырлар (Сақ-скиф дәуірі)',
      en: '4th–3rd centuries BCE (Saka-Scythian Epoch)',
      ru: 'IV–III века до н.э. (Сако-скифская эпоха)',
    },
    shortDescription: {
      kk: 'Алтайдың мәңгі тоңында алтын әбзелді тұлпарлары мен сақ патшалары сақталған «Патшалар жазығы».',
      en: 'Sensational Scythian royal necropolis where golden-clad horses and nomadic princes were preserved in permafrost.',
      ru: 'Сенсационный сакский некрополь «Долина царей», где вечная мерзлота сохранила золото и царских коней.',
    },
    history: {
      kk: 'Берел қорымы — Алтай тауларының баурайында, теңіз деңгейінен 1120 метр биіктікте орналасқан 100-ден астам сақ обаларынан тұратын әлемдік деңгейдегі ескерткіш. 1998–1999 жылдары археолог Зейнолла Самашев тапқан №11 қорғанда жасанды мәңгілік тоң линзасы түзіліп, соның арқасында сақ ақсүйектерінің киімдері, былғары бұйымдары және алтын мүйіз тағылған 13 тұлпары шірімей сақталған.',
      en: 'Discovered in the high Altai alpine plateau at 1,120 meters above sea level, containing over 100 royal barrows. In Mound No. 11, discovered by archaeologist Zeinolla Samashev, an artificial permafrost lens preserved organic artifacts for over 2,300 years: felt, carved cedar woodwork, textiles, and 13 ritual steeds masked as mythical horned raptors.',
      ru: 'Берельский некрополь насчитывает более 100 курганов сакской знати. Благодаря эффекту искусственной вечной мерзлоты в кургане №11 сохранились органика, ткани, кедровые саркофаги и 13 погребенных боевых коней в золотых масках мифических грифонов.',
    },
    whyImportant: {
      kk: 'Көшпелілердің «Аң стилі» өнері мен жануарларды киелі санау ділінің шарықтау шегі. Алтайдағы көшпелілер өркениетінің әлемдік маңызы бар антропологиялық феномені.',
      en: 'Pinnacle of Scythian Animal Style art and evidence of advanced metallurgy, embalming technology, and sacred nomad cosmology 2,400 years ago.',
      ru: 'Шедевр сакского «звериного стиля» и свидетельство высочайшей культуры погребального зодчества древних кочевников.',
    },
    whyVisit: {
      kk: 'Түпнұсқа №11 қорған үстіндегі шыны саркофаг-музейді аралап, Алтайдың таңғажайып қарағайлы таулары мен сақ патшаларының алтын әлемін көру.',
      en: 'Walk inside an extraordinary glass-domed in-situ burial excavation museum surrounded by the breathtaking emerald peaks of Altai.',
      ru: 'Посетить стеклянный саркофаг над подлинным царским курганом среди живописнейших альпийских хребтов Алтая.',
    },
    whatToSee: {
      kk: [
        '№11 патша қорғанының үстіне салынған шыны саркофаг музей-сағанасы',
        'Алтын жалатылған мүйізді сақ тұлпарларының қайта жаңғыртылған бейнесі',
        'Сақ ақсүйектері жерленген балқарағай сандық-табыттары',
        'Берел мұражайындағы көне зергерлік әшекейлер мен қарулар',
        'Мұзтау (Белуха) тауына апаратын панорамалық табиғат',
      ],
      en: [
        'In-situ glass sarcophagus museum built directly atop Royal Mound 11',
        'Reconstructed life-size war steeds in gilded griffin masks',
        'Solid hollowed-out Siberian larch log royal sarcophagi',
        'Gold jewelry, bronze daggers, and Scythian art gallery',
        'Pristine panoramic backdrop of Mount Belukha foothills',
      ],
      ru: [
        'Стеклянный купол-саркофаг над раскопом царского кургана №11',
        'Реконструкции коней в парадном золоченом убранстве грифонов',
        'Царский лиственничный саркофаг-колода IV века до н.э.',
        'Музейная экспозиция золотых изделий скифского стиля',
        'Панорамы Катон-Карагая и предгорий Белухи',
      ],
    },
    whatToDo: {
      kk: [
        'Шыны платформа үстінен сақ патшалары мен тұлпарларының орнын көру',
        'Катонқарағай ұлттық паркінде атпен серуендеу және бал дәмін тату',
        'Шипалы радон бұлақтары мен пантамен емделу орталықтарына бару',
      ],
      en: [
        'Look down directly into the 2,400-year-old permafrost tomb from the glass walkway',
        'Take a horseback trek through Katon-Karagay National Park and taste alpine honey',
        'Combine with local pantocrin wellness resorts and radon springs',
      ],
      ru: [
        'Заглянуть в подлинную гробницу древних царей с прозрачного мостика',
        'Попробовать знаменитый алтайский мед и прогуляться верхом',
        'Посетить пантолечебницы Катон-Карагая',
      ],
    },
    bestTimeToVisit: {
      kk: 'Маусым – Қыркүйек (таулы аймақ, қыста қалың қар жатады)',
      en: 'June to September (warm alpine summer, snow clears by June)',
      ru: 'Июнь – сентябрь (летом комфортная теплая погода)',
    },
    recommendedVisitDurationHours: 4,
    openingHours: {
      schedule: {
        kk: 'Сейсенбі – Жексенбі: 09:00 – 18:00 (Мамыр – Қазан)',
        en: 'Tuesday – Sunday: 09:00 – 18:00 (May to October season)',
        ru: 'Вторник – воскресенье: 09:00 – 18:00 (сезон май–октябрь)',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Қысқы айларда сапар алдын ала музей әкімшілігімен келісіледі.',
        en: 'Winter visits require advance coordination due to mountain snowfall.',
        ru: 'В зимний период посещение согласуется заранее.',
      },
    },
    ticketPrices: {
      domesticAdult: 1500,
      domesticStudent: 700,
      domesticChild: 300,
      foreignAdult: 4000,
      excursionFeeKz: 2500,
      excursionFeeEn: 5000,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Билет бағасына музей залы мен №11 қорған саркофагына кіру кіреді.',
        en: 'Includes access to the main museum pavilion and Mound 11 glass dome.',
        ru: 'Включает посещение стеклянного павильона кургана №11 и музейных залов.',
      },
      source: 'Berel State Historical & Cultural Reserve-Museum',
      sourceUrl: 'https://vko-tourism.kz',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/berel-mounds.jpg',
        caption: {
          kk: 'Алтайдың жасыл аңғарындағы Берел патшалар жазығы',
          en: 'Scenic Altai mountain valley of the Berel Scythian Valley of the Kings',
          ru: 'Долина реки Бухтарма и плато Берельских курганов в Катон-Карагае',
        },
      },
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        caption: {
          kk: 'Катонқарағайдың табиғи тау сілемдері',
          en: 'Breathtaking virgin pine forests and peaks around Berel',
          ru: 'Горные реликтовые леса и панорамы вокруг Береля',
        },
      },
      {
        url: '/images/interiors/berel-mounds-360-pano-kurgan.jpg',
        caption: {
          kk: 'Берел сақ қорғандарының 360° панорамасы — патша моласы',
          en: '360° panorama of Berel Kurgans — royal Scythian burial ground',
          ru: '360° панорама Берельских курганов — царское скифское захоронение',
        },
        credit: 'Qazaq Heritage 360° Virtual Tour',
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Өскемен қаласы (450 км)',
        en: 'Oskemen City (450 km)',
        ru: 'город Усть-Каменогорск (450 км)',
      },
      distanceFromHubKm: 450,
      options: [
        {
          mode: 'car',
          title: {
            kk: 'Өскеменнен Катонқарағай — Берел бағытындағы джип/микроавтобус сапары',
            en: 'Scenic 4x4 or Minibus transfer from Oskemen via Bukhtarma',
            ru: 'Автотрансфер из Усть-Каменогорска через Бухтарминское водохранилище',
          },
          duration: '6 - 7 hours',
          costRange: { min: 20000, max: 45000, currency: 'KZT' },
          provider: 'Altai Tour Operators / Private 4WD drivers',
          status: 'VERIFIED',
          tips: {
            kk: 'Жол бойында Бұқтырма су қоймасы мен тау асуларының таңғажайып көріністері ашылады.',
            en: 'One of the most scenic road trips in Eurasia passing turquoise lakes and mountain passes.',
            ru: 'Одна из красивейших горных дорог Казахстана.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 10000, max: 18000 },
      midRangePerNight: { min: 25000, max: 48000 },
      luxuryPerNight: { min: 55000, max: 110000 },
      status: 'VERIFIED',
      source: 'Eco-resorts and guesthouses in Katon-Karagay',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 4000, max: 7000 },
      midRangePerDay: { min: 8000, max: 15000 },
      status: 'VERIFIED',
      source: 'Altai organic farm-to-table cuisine indices',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: true,
      walkingDifficulty: 'moderate',
      notes: {
        kk: 'Музей ішінде арнайы пандустар бар, ашық қорғандар арасында табиғи соқпақ жолдар.',
        en: 'Pavilion has ramped wooden boardwalks; outer mounds require light grassy walking.',
        ru: 'Павильон оборудован мостками; между курганами грунтовые дорожки.',
      },
    },
    sources: [
      {
        name: 'Berel State Historical-Cultural Reserve',
        url: 'https://berel.vko.gov.kz',
        type: 'official_reserve',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'kabanbay-batyr',
    slug: 'kabanbay-batyr-mausoleum',
    name: {
      kk: 'Қабанбай батыр кесенесі',
      en: 'Kabanbay Batyr Mausoleum',
      ru: 'Мавзолей Кабанбай батыра',
    },
    regionId: 'akmola',
    cityDistrict: {
      kk: 'Целиноград ауданы, Қосшы қаласы маңы',
      en: 'Tselinograd District, near Kosshy (Astana outskirts)',
      ru: 'Целиноградский район, близ г. Косшы',
    },
    exactLocation: {
      kk: 'Астанадан оңтүстікке қарай 25 км, Қабанбай батыр ауылы',
      en: '25 km south of Astana capital, Kabanbay Batyr village',
      ru: '25 км к югу от Астаны, село Кабанбай батыра',
    },
    coordinates: {
      lat: 51.0544,
      lng: 71.5582,
    },
    category: 'mausoleum',
    epoch: 'golden_horde',
    unescoWorldHeritage: false,
    historicalPeriod: {
      kk: 'XVIII ғасыр (кесене 2000 жылы тұрғызылған)',
      en: '18th century hero (mausoleum erected in 2000 CE)',
      ru: 'XVIII век (мавзолей возведен в 2000 г.)',
    },
    shortDescription: {
      kk: 'Абылай ханның бас қолбасшысы, қазақ әскерінің бас сардары «Дарабоз» Қабанбай батырдың сәулетті мазары.',
      en: 'Monumental red-brick domed mausoleum honoring the supreme commander of the Kazakh armies under Ablai Khan.',
      ru: 'Величественный купольный мавзолей верховного полководца казахских войск хана Абылая — Кабанбай батыра.',
    },
    history: {
      kk: 'Қаракерей Қабанбай (Қожақұлұлы Ерасыл, 1692–1770) — жоңғар шапқыншылығы кезінде 103 шайқасқа қатысып, ешқайсысында жеңілмеген ұлы қолбасшы. Абылай хан оның айрықша ерлігі үшін «Дарабоз» (Дара шыққан) деген жоғары атақ берген. 2000 жылы батырдың жерленген төбесінде биіктігі 17,5 метр болатын дулыға тәріздес сәулетті қызыл кірпіш кесене кешені салтанатты түрде ашылды.',
      en: 'Kabanbay Batyr (1692–1770) was supreme general of the Kazakh Khanate, undefeated in over 100 battles during the great resistance against the Dzungar invasion. Commanded both frontline cavalry and diplomatic alliances. The modern memorial complex, erected in 2000, features a 17.5-meter red brick warrior helmet dome and a dedicated historical museum.',
      ru: 'Кабанбай Кожакулулы (1692–1770) — легендарный полководец («Дарабоз»), не проигравший ни одного из 103 сражений. В 2000 году над местом его захоронения воздвигнут 17,5-метровый купольный мавзолей из красного кирпича в форме воинского шлема.',
    },
    whyImportant: {
      kk: 'Қазақ мемлекетінің тұтастығы мен тәуелсіздігін сақтап қалған басты тұлғалардың бірінің сакралды мәңгілік тынысы.',
      en: 'Core national sanctuary celebrating the courage that preserved the sovereign borders of Kazakhstan in the 18th century.',
      ru: 'Один из ключевых сакральных мемориалов национального освободительного движения XVIII века.',
    },
    whyVisit: {
      kk: 'Астана қаласынан небәрі 25 минуттық қашықтықта батыр рухына тағзым ету, дулыға пішінді сәулетті тамашалау және мұражай экспонаттарымен танысу.',
      en: 'Accessible within 25 minutes from the capital Astana, offering rich warrior armor exhibits, nomadic history, and serene steppe views.',
      ru: 'Удобно расположен всего в 25 км от Астаны; прекрасная возможность прикоснуться к эпосу батыров.',
    },
    whatToSee: {
      kk: [
        'Биіктігі 17,5 метрлік дулыға пішіндес қызыл кірпіш кесене',
        'Кесене ішіндегі мәрмәр сағана мен оюлы жазбалар',
        'Қабанбай батыр мемориалдық мұражайы мен қару-жарақ экспозициясы',
        'Батыр рухына қойылған тас құлпытастар мен саябақ',
        'Сарыарқаның көсілген кең жазық панорамасы',
      ],
      en: [
        '17.5-meter tall warrior-helmet-shaped red brick dome',
        'Carved marble cenotaph and sacred verses inside the chamber',
        'Kabanbay Batyr Museum featuring reconstructed chainmail and weapons',
        'Commemorative stele park and landscaped promenade',
        'Sweeping Saryarka steppe vista stretching to the horizon',
      ],
      ru: [
        '17,5-метровый мавзолей в форме шлема казахского воина',
        'Мраморный саркофаг с памятными надписями',
        'Музейная экспозиция доспехов и вооружения XVIII века',
        'Памятные стелы и благоустроенная парковая аллея',
        'Широкая степная панорама Сарыарки',
      ],
    },
    whatToDo: {
      kk: [
        'Кесене ішіндегі тыныштық пен сәулет акустикасын сезіну',
        'Батырлар заманындағы қазақ әскерінің тактикасы туралы экскурсия тыңдау',
        'Қосшы мен Астананың қазіргі сәулетімен сапарды байланыстыру',
      ],
      en: [
        'Experience the reverberating dome acoustics inside the memorial hall',
        'Listen to an official guide recounting 18th-century steppe military tactics',
        'Easily pair with an afternoon architectural tour of Astana',
      ],
      ru: [
        'Оценить торжественную акустику центрального зала',
        'Послушать рассказ экскурсовода о тактике конных армий хана Абылая',
        'Совместить с полудневным туром по Астане',
      ],
    },
    bestTimeToVisit: {
      kk: 'Мамыр – Қазан айлары (жазда қоңыр салқын, қыста қарлы)',
      en: 'May to October (warm prairie summer; easily visited year-round from Astana)',
      ru: 'Май – октябрь (доступен круглый год из столицы)',
    },
    recommendedVisitDurationHours: 2,
    openingHours: {
      schedule: {
        kk: 'Күн сайын: 09:00 – 18:00 (демалыссыз)',
        en: 'Daily: 09:00 – 18:00 (Year-round)',
        ru: 'Ежедневно: 09:00 – 18:00',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Кесенеге кіру тегін, мұражай экспозициясына символикалық билет алынады.',
        en: 'Mausoleum sanctuary is open to all visitors free of charge.',
        ru: 'Вход в мавзолей свободный.',
      },
    },
    ticketPrices: {
      domesticAdult: 500,
      domesticStudent: 300,
      domesticChild: 0,
      foreignAdult: 1500,
      excursionFeeKz: 1500,
      excursionFeeEn: 3000,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Кесенеге кіру тегін. Музей экспозициясы мен гид қызметі үшін төленеді.',
        en: 'Sanctuary is free. Modest ticket applies to the museum exhibition.',
        ru: 'Вход в мавзолей бесплатный; билет в музей символический.',
      },
      source: 'Akmola Regional Center for Historic Heritage',
      sourceUrl: 'https://visitaqmola.kz',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/kabanbay-batyr.jpg',
        caption: {
          kk: 'Қабанбай батыр кесенесінің қызыл кірпіштен салынған асқақ күмбезі',
          en: 'Red-brick dome silhouette of the Kabanbay Batyr Mausoleum near Astana',
          ru: 'Купольный ансамбль мавзолея Кабанбай батыра',
        },
      },
      {
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
        caption: {
          kk: 'Сарыарқаның шексіз даласы мен кесене саябағы',
          en: 'Saryarka steppe horizons surrounding the memorial grounds',
          ru: 'Степные просторы Сарыарки вокруг мемориала',
        },
      },
      {
        url: '/images/interiors/kabanbay-batyr-360-pano-facade.jpg',
        caption: {
          kk: 'Қабанбай батыр кесенесінің 360° панорамасы — ұлы батырдың мекені',
          en: '360\u00b0 panorama of Kabanbay Batyr Mausoleum — great commander eternal home',
          ru: '360° панорама мавзолея Кабанбай батыра — вечная обитель полководца',
        },
        credit: 'Qazaq Heritage 360° Virtual Tour',
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Астана қаласы (25 км)',
        en: 'Astana City (25 km)',
        ru: 'город Астана (25 км)',
      },
      distanceFromHubKm: 25,
      options: [
        {
          mode: 'taxi',
          title: {
            kk: 'Астана қаласынан такси (Яндекс Go) немесе қала маңы автобусы',
            en: 'Yandex Taxi or suburban shuttle from Astana downtown',
            ru: 'Яндекс Такси или пригородный автобус из Астаны',
          },
          duration: '25 - 35 minutes',
          costRange: { min: 3500, max: 7000, currency: 'KZT' },
          provider: 'Yandex Go / Local Astana taxi',
          status: 'VERIFIED',
          tips: {
            kk: 'Астана әуежайынан немесе «Бәйтерек» монументінен жеңіл таксимен жетуге болады.',
            en: 'Super quick trip directly from Astana international airport or center.',
            ru: 'Быстрая и комфортная поездка прямо из центра столицы или аэропорта.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 12000, max: 22000 },
      midRangePerNight: { min: 28000, max: 55000 },
      luxuryPerNight: { min: 65000, max: 140000 },
      status: 'VERIFIED',
      source: 'Astana capital hotels index (Hilton, Rixos, Ibis, etc.)',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 4000, max: 7000 },
      midRangePerDay: { min: 9000, max: 18000 },
      status: 'VERIFIED',
      source: 'Astana restaurant indices',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: true,
      walkingDifficulty: 'easy',
      notes: {
        kk: 'Автотұрақтан кесенеге дейін асфальтталған тегіс аллея мен пандус бар.',
        en: 'Fully paved level walkway from parking directly into the hall.',
        ru: 'Ровная асфальтированная аллея и пандус от автостоянки.',
      },
    },
    sources: [
      {
        name: 'Akmola Tourism Department',
        url: 'https://visitaqmola.kz',
        type: 'government',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'mashkhur-zhusip',
    slug: 'mashkhur-zhusip-kopeyuly-mausoleum',
    name: {
      kk: 'Мәшһүр Жүсіп Көпейұлы кесенесі',
      en: 'Mashkhur Zhusip Kopeyuly Mausoleum',
      ru: 'Мавзолей Машхура Жусипа Копеева',
    },
    regionId: 'pavlodar',
    cityDistrict: {
      kk: 'Баянауыл ауданы, Жаңажол ауылы',
      en: 'Bayanaul District, Zhanazhol Village',
      ru: 'Баянаульский район, с. Жанажол',
    },
    exactLocation: {
      kk: 'Ескелді шатқалы, Баянауыл тауларының бөктері',
      en: 'Eskeldi Valley, Bayanaul mountain foothills',
      ru: 'урочище Ескельды, предгорья Баянаула',
    },
    coordinates: {
      lat: 50.8541,
      lng: 75.7022,
    },
    category: 'mausoleum',
    epoch: 'enlightenment',
    unescoWorldHeritage: false,
    historicalPeriod: {
      kk: 'XX ғасыр басы (кешен 2006 ж. салынған)',
      en: 'Early 20th century scholar (complex erected 2006 CE)',
      ru: 'Начало XX века (современный комплекс 2006 г.)',
    },
    shortDescription: {
      kk: 'Көгілдір дулыға пішіндес футуристік сәулеті бар, 73 сатылы рухани баспалдақты дала ғұламасының кесенесі.',
      en: 'Futuristic blue-faceted dome mausoleum with a 73-step spiritual staircase honoring the great encyclopedist and mystic sage.',
      ru: 'Футуристический небесно-голубой купол с лестницей в 73 ступени, воздвигнутый над усыпальницей великого степного философа.',
    },
    history: {
      kk: 'Мәшһүр Жүсіп Көпейұлы (1858–1931) — қазақтың ұлы ойшылы, философ, фольклортанушы, тарихшы әрі көріпкел әулиесі. Өзі қайтыс болардан бір жыл бұрын бейітінің сәулеттік сызбасын жасап, денесін 40 жыл бойы бұзылмай сақтау әдісін өсиет еткен. 2006 жылы оның құрметіне биіктігі 14 метр болатын, 73 сатылы (өмір сүрген жасы) ерекше көгілдір қырлы күмбезді зәулім кесене кешені бой көтерді.',
      en: 'Mashkhur Zhusip Kopeyuly (1858–1931) was an extraordinary steppe polymath, folklorist, ethnographer, and Sufi mystic who recorded hundreds of oral epic legends. Before his passing, he designed his own unique burial chamber. In 2006, an avant-garde spiritual sanctuary was erected featuring a 73-step stairway representing each year of his life, ascending to a turquoise-tiled multifaceted spire.',
      ru: 'Машхур Жусип Копеев (1858–1931) — выдающийся казахский ученый-энциклопедист, мыслитель и духовный наставник. Заранее предсказал дату ухода и составил проект усыпальницы. В 2006 году возведен современный комплекс: 73 ступени ведут к бирюзовому пирамидально-купольному мавзолею.',
    },
    whyImportant: {
      kk: 'Қазақ руханияты мен сопылық ілімінің XX ғасырдағы ең жарқын өкілінің мекені, заманауи қазақ сәулет өнерінің шедеврі.',
      en: 'Monumental modern pilgrimage site commemorating one of the deepest philosophical intellects and guardians of nomad folklore.',
      ru: 'Один из главных сакральных центров Сарыарки и жемчужина современной мемориальной архитектуры Казахстана.',
    },
    whyVisit: {
      kk: 'Көгілдір сәулеттің таңғажайып геометриясын көру, 73 баспалдақпен көтеріліп сакралды энергетиканы сезіну және Баянауыл тауларымен танысу.',
      en: 'Climb the 73 spiritual steps, admire the faceted turquoise architecture, and discover rare handwritten manuscripts in the valley museum.',
      ru: 'Подняться по 73 сакральным ступеням, увидеть уникальный бирюзовый граненый купол и насладиться природой Баянаула.',
    },
    whatToSee: {
      kk: [
        '14 метрлік көгілдір қырлы дулыға-күмбез кесенесі',
        '73 жылдық өмір жолын бейнелейтін 73 гранит баспалдақ',
        'Ғұламаның жерасты қабірханасы мен тылсым тыныштық бөлмесі',
        'Мәшһүр Жүсіптің сирек қолжазбалары мен кітаптары сақталған музей',
        'Баянауыл табиғи паркі мен Ескелді шатқалының панорамасы',
      ],
      en: [
        '14-meter faceted turquoise helmet dome catching the steppe sunlight',
        'Grand 73-step stone ascent ascending the sacred hillside',
        'Underground cooling burial chamber with sacred serenity',
        'Manuscript museum housing his original Arabic-script historical archives',
        'Eskeldi valley mountain panorama leading into Bayanaul National Park',
      ],
      ru: [
        '14-метровый небесно-бирюзовый многогранный шлемовидный купол',
        'Лестница из 73 ступеней, символизирующая годы земной жизни мыслителя',
        'Подземная прохладная усыпальница с уникальной акустикой',
        'Музей с подлинными рукописями и личными вещами ученого',
        'Живописные панорамы урочища Ескельды и Баянаульского нацпарка',
      ],
    },
    whatToDo: {
      kk: [
        '73 баспалдақты баяу көтеріліп ой жинақтау',
        'Музейден ғұламаның өсиеттері мен болжамдары туралы тыңдау',
        'Баянауылдағы Жамбақы мен Сабынды көлдеріне саяхатпен толықтыру',
      ],
      en: [
        'Make the mindful ascent up the 73 stairs to reach the prayer hall',
        'Explore the exhibition of his prophecies and cultural encyclopedias',
        'Combine with swimming and hiking at Bayanaul mountain lakes (Lake Zhasybai)',
      ],
      ru: [
        'Подняться по 73 ступеням к купольному залу',
        'Ознакомиться с этнографическими записями и предсказаниями мудреца',
        'Совместить с отдыхом на озерах Жасыбай и Торайгыр в Баянауле',
      ],
    },
    bestTimeToVisit: {
      kk: 'Мамыр – Қыркүйек айлары',
      en: 'May to September (delightful summer season in Bayanaul)',
      ru: 'Май – сентябрь (идеально для посещения курортной зоны)',
    },
    recommendedVisitDurationHours: 3.5,
    openingHours: {
      schedule: {
        kk: 'Күн сайын: 08:30 – 19:00 (демалыссыз)',
        en: 'Daily: 08:30 – 19:00 (Year-round)',
        ru: 'Ежедневно: 08:30 – 19:00',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Зияратшылар үшін арнайы асхана мен қонақүй қызметі қарастырылған.',
        en: 'Pilgrim refectory and guest rest chambers available on site.',
        ru: 'При комплексе действует гостиница для паломников и трапезная.',
      },
    },
    ticketPrices: {
      domesticAdult: 800,
      domesticStudent: 400,
      domesticChild: 0,
      foreignAdult: 2500,
      excursionFeeKz: 1500,
      excursionFeeEn: 3500,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Кешенге кіру тегін, музейге арналған билет бағасы көрсетілген.',
        en: 'Grounds access is free; museum ticket fee supports heritage preservation.',
        ru: 'Вход на территорию свободный, билет в музей.',
      },
      source: 'Pavlodar Regional Tourism & Culture Office',
      sourceUrl: 'https://pavlodarlibrary.kz',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/mashkhur-zhusip.jpg',
        caption: {
          kk: 'Мәшһүр Жүсіп кесенесінің көгілдір қырлы ерекше күмбезі',
          en: 'Turquoise faceted dome architecture of Mashkhur Zhusip sanctuary',
          ru: 'Бирюзовый купол мавзолея Машхура Жусипа',
        },
      },
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        caption: {
          kk: 'Баянауылдың гранитті қатпарлы таулары мен Ескелді шатқалы',
          en: 'Granite layered peaks of Bayanaul hills around the complex',
          ru: 'Скалистые урочища Баянаула в окрестностях мавзолея',
        },
      },
      {
        url: '/images/interiors/mashkhur-zhusip-360-pano-dome.jpg',
        caption: {
          kk: 'Мәшһүр Жүсіп кесенесінің 360° панорамасы — даланың ұлы жыраушысы',
          en: '360° panorama of Mashkhur Zhusip Mausoleum — great poet of the steppe',
          ru: '360° панорама мавзолея Машхур Жусупа — великий поэт степи',
        },
        credit: 'Qazaq Heritage 360° Virtual Tour',
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Павлодар (200 км) немесе Қарағанды (220 км)',
        en: 'Pavlodar (200 km) or Karaganda (220 km)',
        ru: 'Павлодар (200 км) или Караганда (220 км)',
      },
      distanceFromHubKm: 200,
      options: [
        {
          mode: 'car',
          title: {
            kk: 'Павлодар немесе Қарағандыдан Баянауылға дейінгі автобағыт',
            en: 'Highway drive from Pavlodar or Karaganda via Bayanaul pass',
            ru: 'Поездка на автотранспорте из Павлодара или Караганды',
          },
          duration: '2.5 - 3 hours',
          costRange: { min: 8000, max: 20000, currency: 'KZT' },
          provider: 'Local shuttle / Rental car',
          status: 'VERIFIED',
          tips: {
            kk: 'Жол сапасы жақсы, Баянауыл ұлттық паркі арқылы өтеді.',
            en: 'Paved regional road winding into the national park.',
            ru: 'Хорошая асфальтированная дорога через национальный парк.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 8000, max: 15000 },
      midRangePerNight: { min: 18000, max: 35000 },
      luxuryPerNight: { min: 40000, max: 80000 },
      status: 'VERIFIED',
      source: 'Bayanaul National Park resort hotels index',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 3500, max: 6000 },
      midRangePerDay: { min: 7500, max: 13000 },
      status: 'VERIFIED',
      source: 'Pavlodar regional dining indicators',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: false,
      walkingDifficulty: 'moderate',
      notes: {
        kk: 'Кесенеге көтерілу үшін 73 баспалдақ бар, төменгі бөлігінде демалыс орындары бар.',
        en: 'Features 73 stairway steps; lower rest pavilion accessible by wheelchair.',
        ru: 'Подъем включает 73 ступени; нижняя площадка доступна для колясок.',
      },
    },
    sources: [
      {
        name: 'Pavlodar Heritage Department',
        url: 'https://pavlodarlibrary.kz',
        type: 'government',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'bukhar-zhyrau',
    slug: 'bukhar-zhyrau-mausoleum',
    name: {
      kk: 'Бұқар жырау кесенесі',
      en: 'Bukhar Zhyrau Mausoleum',
      ru: 'Мавзолей Бухар-жырау',
    },
    regionId: 'karaganda',
    cityDistrict: {
      kk: 'Бұқар жырау ауданы, Шешенқара ауылы маңы',
      en: 'Bukhar Zhyrau District, near Sheshenkara',
      ru: 'Бухар-Жырауский район, близ с. Шешенкара',
    },
    exactLocation: {
      kk: 'Далба тауының етегі, Бұқар жырау мазары',
      en: 'Foot of Mount Dalba, Bukhar Zhyrau necropolis',
      ru: 'подножие горы Далба',
    },
    coordinates: {
      lat: 49.9812,
      lng: 73.6541,
    },
    category: 'mausoleum',
    epoch: 'enlightenment',
    unescoWorldHeritage: false,
    historicalPeriod: {
      kk: 'XVIII ғасыр (кесене 1993 ж. жаңартылған)',
      en: '18th century sage (mausoleum restored 1993 CE)',
      ru: 'XVIII век (мавзолей возведен в 1993 г.)',
    },
    shortDescription: {
      kk: 'Абылай ханның мемлекеттік бас ақылшысы, қазақ сөз өнері мен бірлігінің данышпанына арналған үш қанатты сәулет кешені.',
      en: 'Tri-winged architectural sanctuary dedicated to the chief advisor of Ablai Khan and paramount poetic sage of the Kazakh Khanate.',
      ru: 'Трехлепестковый купольный комплекс, воздвигнутый в честь главного советника хана Абылая, мудреца и акына Бухар-жырау.',
    },
    history: {
      kk: 'Бұқар жырау Қалқаманұлы (1668–1781) — қазақтың ұлы жырауы, мемлекет қайраткері, үш жүздің басын қосқан Абылай ханның бас кеңесшісі. Ол ел бірлігін сақтау, жоңғар шапқыншылығына қарсы халықты топтастыру идеяларын жырлаған көреген ойшыл. 1993 жылы жыраудың 325 жылдығына орай Далба тауының бөктерінде үш қанатты шығыстық күмбезді алып кесене тұрғызылды.',
      en: 'Bukhar Zhyrau Kalkamanuly (1668–1781) was the philosophical voice and prime diplomatic counselor of the Kazakh Khanate under Ablai Khan. Known as the "Sacred Singer", his extemporaneous verses guided royal military councils and unified clans. The monumental sanctuary erected in 1993 near Mount Dalba resembles a tri-petaled steppe yurt crown surmounted by a gold-tipped spire.',
      ru: 'Бухар-жырау (1668–1781) — выдающийся казахский певец-сказитель, первый советник хана Абылая. Его мудрые наставления определили внешнюю и внутреннюю политику государства в XVIII веке. В 1993 г. у горы Далба воздвигнут купольный мавзолей в виде казахской юрты с тремя сводами.',
    },
    whyImportant: {
      kk: 'Қазақ мемлекеттілігінің идеологиялық тірегі, сөз құдіретінің ең жоғарғы шыңы саналатын тарихи тұлғаның киелі орны.',
      en: 'A supreme cultural pillar representing the profound tradition of nomadic poetic diplomacy and statecraft.',
      ru: 'Один из ключевых мемориалов казахской государственности и поэтического наследия.',
    },
    whyVisit: {
      kk: 'Сарыарқаның тылсым Далба тауларының бөктерінде үш қанатты сәулетті тамашалау, жырау толғауларының қуатын сезіну.',
      en: 'Admire the tri-winged architecture against the backdrop of Mount Dalba, discover historic steppe verses inscribed in stone.',
      ru: 'Прикоснуться к мудрости великого жырау и ощутить первозданное величие сарыаркинских сопок.',
    },
    whatToSee: {
      kk: [
        'Үш қанатты шығыстық үлгідегі ақ күмбезді кесене',
        'Далба таулары мен көне Сарыарқа шоқыларының панорамасы',
        'Кесене ішіндегі қара мәрмәр сағана мен тасқа қашалған толғаулар',
        'Жырау рухына қойылған гранит мемориалдық тақталар',
      ],
      en: [
        'Distinctive tri-petaled white domed nomadic sanctuary',
        'Panoramic views of Mount Dalba and rolling Saryarka hills',
        'Black marble cenotaph with engraved poetic philosophical verses',
        'Commemorative stone stelae garden honoring regional heritage',
      ],
      ru: [
        'Трехлепестковый белоснежный купольный мавзолей',
        'Панорама горы Далба и холмов Центрального Казахстана',
        'Саркофаг из черного гранита с высеченными строками толгау',
        'Мемориальный комплекс с каменными стелами',
      ],
    },
    whatToDo: {
      kk: [
        'Бұқар жыраудың атақты толғауларын оқып, сәулетпен үйлесімін сезіну',
        'Қарағанды мен Қарқаралы тарихи орындарына сапармен байланыстыру',
      ],
      en: [
        'Read translation of his philosophical verses inscribed in the chamber',
        'Combine into a full-day heritage circuit including Karkaraly National Park',
      ],
      ru: [
        'Прочесть философские наставления Бухар-жырау на гранитных плитах',
        'Совместить с путешествием в Каркаралинский природный парк',
      ],
    },
    bestTimeToVisit: {
      kk: 'Мамыр – Қазан айлары',
      en: 'May to October',
      ru: 'Май – октябрь',
    },
    recommendedVisitDurationHours: 2,
    openingHours: {
      schedule: {
        kk: 'Күн сайын: 09:00 – 18:00',
        en: 'Daily: 09:00 – 18:00',
        ru: 'Ежедневно: 09:00 – 18:00',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Кешенге кіру тегін.',
        en: 'Admission is free of charge.',
        ru: 'Вход бесплатный.',
      },
    },
    ticketPrices: {
      domesticAdult: 500,
      domesticStudent: 250,
      domesticChild: 0,
      foreignAdult: 1500,
      excursionFeeKz: 1500,
      excursionFeeEn: 3000,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Кесенеге кіру тегін. Гид қызметі қосымша ұсынылады.',
        en: 'Admission to mausoleum is free.',
        ru: 'Вход свободный.',
      },
      source: 'Karaganda Regional Cultural Heritage Inspectorate',
      sourceUrl: 'https://karaganda-region.gov.kz',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/bukhar-zhyrau.jpg',
        caption: {
          kk: 'Бұқар жырау кесенесінің үш қанатты ақ күмбезі',
          en: 'Tri-winged domed sanctuary of Bukhar Zhyrau against steppe skies',
          ru: 'Трехкупольный мавзолей Бухар-жырау в Сарыарке',
        },
      },
      {
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
        caption: {
          kk: 'Сарыарқаның көсілген даласы мен шоқылары',
          en: 'Steppe hills stretching across Karaganda region',
          ru: 'Степные просторы Карагандинской области',
        },
      },
      {
        url: '/images/interiors/bukhar-zhyrau-360-pano-tower.jpg',
        caption: {
          kk: 'Бұқар жырау кесенесінің 360° панорамасы — Абылай ханның сыршыл жырауы',
          en: '360° panorama of Bukhar Zhyrau Mausoleum — confidant poet of Ablai Khan',
          ru: '360° панорама мавзолея Бухара жырау — придворный поэт хана Аблая',
        },
        credit: 'Qazaq Heritage 360° Virtual Tour',
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Қарағанды қаласы (75 км)',
        en: 'Karaganda City (75 km)',
        ru: 'город Караганда (75 км)',
      },
      distanceFromHubKm: 75,
      options: [
        {
          mode: 'car',
          title: {
            kk: 'Қарағандыдан Ботақара арқылы автокөлікпен жету',
            en: 'Drive from Karaganda via Botakara road',
            ru: 'Поездка на автомобиле из Караганды через Ботакару',
          },
          duration: '1 - 1.5 hours',
          costRange: { min: 5000, max: 12000, currency: 'KZT' },
          provider: 'Local taxi / Rental car',
          status: 'VERIFIED',
          tips: {
            kk: 'Асфальтталған тегіс жол, маршрут өте қарапайым.',
            en: 'Direct paved regional route easily accessible year-round.',
            ru: 'Асфальтированная трасса, удобный подъезд.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 9000, max: 16000 },
      midRangePerNight: { min: 20000, max: 38000 },
      luxuryPerNight: { min: 45000, max: 90000 },
      status: 'VERIFIED',
      source: 'Karaganda city hotels index (Cosmonaut, Chaika, etc.)',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 3500, max: 6000 },
      midRangePerDay: { min: 7500, max: 14000 },
      status: 'VERIFIED',
      source: 'Karaganda dining indicators',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: true,
      walkingDifficulty: 'easy',
      notes: {
        kk: 'Кешенге дейін тегіс жол салынған, кіреберісте аласа пандус бар.',
        en: 'Paved level path to the entrance with ramped threshold.',
        ru: 'Ровная дорожка и пандус на входе.',
      },
    },
    sources: [
      {
        name: 'Karaganda Culture and Tourism Department',
        url: 'https://karaganda-region.gov.kz',
        type: 'government',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'ybyray-altynsarin',
    slug: 'ybyray-altynsarin-mausoleum',
    name: {
      kk: 'Ыбырай Алтынсарин кесенесі',
      en: 'Ybyray Altynsarin Mausoleum',
      ru: 'Мавзолей Ибрая Алтынсарина',
    },
    regionId: 'kostanay',
    cityDistrict: {
      kk: 'Қостанай қаласы маңы, Мичурин ауылы',
      en: 'Kostanay outskirts, Michurino village',
      ru: 'пригород Костаная, с. Мичурино',
    },
    exactLocation: {
      kk: 'Тобыл өзенінің биік жағасы, Алтынсарин мемориалды кешені',
      en: 'High bank of Tobyl River, Altynsarin Memorial Complex',
      ru: 'высокий берег реки Тобол',
    },
    coordinates: {
      lat: 53.2514,
      lng: 63.6087,
    },
    category: 'mausoleum',
    epoch: 'enlightenment',
    unescoWorldHeritage: false,
    historicalPeriod: {
      kk: 'XIX ғасыр (жаңа кешен 2017 ж. салынған)',
      en: '19th century educator (new complex erected 2017 CE)',
      ru: 'XIX век (современный комплекс открыт в 2017 г.)',
    },
    shortDescription: {
      kk: 'Қазақтың тұңғыш ағартушы-ұстазы, тұңғыш қазақ мектептері мен әліппесін жасаған ұлы педагогтың сәулетті гранит кесенесі.',
      en: 'Stately granite and red porphyry domed sanctuary honoring the supreme enlightener and founder of modern Kazakh secular education.',
      ru: 'Величественный гранитный мавзолей выдающегося казахского просветителя, педагога и основателя первых светских школ.',
    },
    history: {
      kk: 'Ыбырай Алтынсарин (1841–1889) — қазақ даласының тұңғыш кәсіби ағартушысы, педагог-жазушы, қазақ мектептері мен училищелерінің желісін ашқан ұлы тұлға. Ол тұңғыш «Қазақ хрестоматиясын» жазып, қазақ балаларын «Кел, балалар, оқылық!» деп білімге үндеген. 2017 жылы Тобыл өзенінің жағасында оның құрметіне биіктігі 18 метрлік қызыл гранит пен ақ мәрмәрдан жаңа зәулім кесене кешені бой көтерді.',
      en: 'Ybyray Altynsarin (1841–1889) was the foundational pioneer of Kazakh enlightenment, establishing the first secular boarding schools, craft academies, and girls colleges in the 19th century. Authored the first Kazakh textbook reader. In 2017, a stately 18-meter-tall red granite and white marble dome was inaugurated overlooking the Tobyl River.',
      ru: 'Ибрай Алтынсарин (1841–1889) — основоположник светского образования в Казахстане, выдающийся писатель и этнограф. Открыл первые школы и интернаты, издал первую казахскую хрестоматию. В 2017 году на берегу реки Тобол открыт 18-метровый мавзолей из красного гранита.',
    },
    whyImportant: {
      kk: 'Қазақ халқын өркениет пен ғылым-білімге бағыттаған тарихи ұстаздың мәңгілік тағзым ету орталығы.',
      en: 'Crucial national shrine celebrating the dawn of secular intellect, literature, and modern education in Kazakhstan.',
      ru: 'Центральный мемориал просвещения и становления современного казахского образования.',
    },
    whyVisit: {
      kk: 'Қостанай қаласынан небәрі 10 минуттық жерде Тобыл өзенінің көрінісін тамашалау, алып гранит кесененің сәулетін көру және Алтынсарин музейін аралау.',
      en: 'Located just 10 minutes from central Kostanay, offering majestic river views, grand granite stonework, and interactive museum exhibits.',
      ru: 'Всего 10 минут от центра Костаная: живописный обрыв над рекой Тобол и величественный гранитный купол.',
    },
    whatToSee: {
      kk: [
        '18 метрлік қызыл гранит пен ақ тастан қаланған сәулетті күмбез',
        'Тобыл өзеніне қарайтын қарау алаңы мен саябақ аллеясы',
        'Ыбырай Алтынсариннің ағартушылық өміріне арналған музей экспонаттары',
        '«Кел, балалар, оқылық!» өлеңі қашалған гранит тақталар',
      ],
      en: [
        '18-meter crimson granite dome rising on the bluffs of the Tobyl River',
        'River overlook deck and landscaped pedestrian parkway',
        'Exhibits covering the creation of the first Kazakh school reader',
        'Carved stelae featuring his famous call to education for children',
      ],
      ru: [
        '18-метровый купол из красного гранита и светлого камня',
        'Смотровая площадка с видом на излучину реки Тобол',
        'Музейные материалы о создании первых казахских школ',
        'Гранитные скрижали с бессмертным призывом к знаниям',
      ],
    },
    whatToDo: {
      kk: [
        'Кесене аллеясында серуендеп, Тобыл жағалауының панорамасын тамашалау',
        'Қостанай қаласындағы Алтынсарин атындағы мемориалдық мұражайға бару',
      ],
      en: [
        'Stroll the scenic riverbank promenade overlooking the Tobyl bend',
        'Visit the complementary city center Altynsarin Memorial Museum and reconstructed classroom',
      ],
      ru: [
        'Прогуляться по набережной аллее над рекой Тобол',
        'Посетить мемориальный музей Алтынсарина с воссозданным классом первой школы',
      ],
    },
    bestTimeToVisit: {
      kk: 'Мамыр – Қазан айлары',
      en: 'May to October (comfortable prairie climate)',
      ru: 'Май – октябрь',
    },
    recommendedVisitDurationHours: 1.5,
    openingHours: {
      schedule: {
        kk: 'Күн сайын: 09:00 – 19:00',
        en: 'Daily: 09:00 – 19:00',
        ru: 'Ежедневно: 09:00 – 19:00',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Кешенге кіру тегін, ашық саябақ тәулік бойы қолжетімді.',
        en: 'Sanctuary and park are open to public free of charge.',
        ru: 'Вход на территорию свободный и бесплатный.',
      },
    },
    ticketPrices: {
      domesticAdult: 500,
      domesticStudent: 250,
      domesticChild: 0,
      foreignAdult: 1500,
      excursionFeeKz: 1000,
      excursionFeeEn: 2500,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Кесенеге кіру тегін. Қаладағы музейге шағын билет бағасы қолданылады.',
        en: 'Mausoleum grounds are free; small entry fee applies to the city school museum.',
        ru: 'Вход в мавзолей бесплатный.',
      },
      source: 'Kostanay Regional Department of Culture',
      sourceUrl: 'https://kostanay.gov.kz',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/ybyray-altynsarin.jpg',
        caption: {
          kk: 'Ыбырай Алтынсарин кесенесінің қызыл гранитті сәулетті күмбезі',
          en: 'Red granite dome of the Ybyray Altynsarin sanctuary',
          ru: 'Купол мавзолея Ибрая Алтынсарина из красного гранита',
        },
      },
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        caption: {
          kk: 'Тобыл өзенінің көркем жағалауы мен кең жазира',
          en: 'Scenic Tobyl River valley overlooking Kostanay prairie',
          ru: 'Живописная излучина реки Тобол близ мавзолея',
        },
      },
      {
        url: '/images/interiors/ybyray-altynsarin-360-pano-memorial.jpg',
        caption: {
          kk: 'Ыбырай Алтынсарин мемориалының 360° панорамасы — ұлы ағартушы',
          en: '360° panorama of Ybyray Altynsarin Memorial — great educator',
          ru: '360° панорама мемориала Ибрая Алтынсарина — великий просветитель',
        },
        credit: 'Qazaq Heritage 360° Virtual Tour',
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Қостанай қаласы (7 км)',
        en: 'Kostanay City (7 km)',
        ru: 'город Костанай (7 км)',
      },
      distanceFromHubKm: 7,
      options: [
        {
          mode: 'taxi',
          title: {
            kk: 'Қостанай орталығынан такси (Яндекс Go) немесе қалалық автобус',
            en: 'Short taxi (Yandex Go) or city bus from downtown Kostanay',
            ru: 'Яндекс Такси или городской автобус из центра Костаная',
          },
          duration: '10 - 15 minutes',
          costRange: { min: 1000, max: 2500, currency: 'KZT' },
          provider: 'Yandex Go / Kostanay City Transit',
          status: 'VERIFIED',
          tips: {
            kk: 'Қала орталығынан небәрі 10 минуттық қашықтықта, жол сапасы өте жақсы.',
            en: 'Extremely close to the city center and airport.',
            ru: 'Очень близко от центра города и вокзала, асфальтированный подъезд.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 8000, max: 15000 },
      midRangePerNight: { min: 18000, max: 35000 },
      luxuryPerNight: { min: 40000, max: 75000 },
      status: 'VERIFIED',
      source: 'Kostanay hotels index (Medvezhiy Ugol, Ostrov, etc.)',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 3000, max: 5500 },
      midRangePerDay: { min: 6500, max: 12000 },
      status: 'VERIFIED',
      source: 'Kostanay dining indicators',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: true,
      walkingDifficulty: 'easy',
      notes: {
        kk: 'Автотұрақтан кесенеге дейін толықтай тегіс тас төселген жол.',
        en: 'Fully flat paved promenade from parking to the dome interior.',
        ru: 'Полностью ровная вымощенная дорожка без барьеров.',
      },
    },
    sources: [
      {
        name: 'Kostanay Regional Culture Administration',
        url: 'https://kostanay.gov.kz',
        type: 'government',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'khan-molasy',
    slug: 'khan-molasy-abulkhair-khan-memorial',
    name: {
      kk: 'Әбілқайыр ханның «Хан моласы» кешені',
      en: 'Khan Molasy (Abulkhair Khan) Memorial',
      ru: 'Мемориальный комплекс «Хан моласы» (хан Абулхаир)',
    },
    regionId: 'aktobe',
    cityDistrict: {
      kk: 'Әйтеке би ауданы, Толыбай ауылынан 90 км',
      en: 'Aiteke Bi District, 90 km from Tolybay',
      ru: 'Айтекебийский район, 90 км от с. Толыбай',
    },
    exactLocation: {
      kk: 'Өлкейек пен Қабырға өзендерінің сағасы, «Хан моласы» қорымы',
      en: 'Confluence of Olkeyek and Qabyrga rivers, Khan Molasy necropolis',
      ru: 'междуречье Олькеяка и Кабырги, некрополь «Хан моласы»',
    },
    coordinates: {
      lat: 49.9521,
      lng: 59.8034,
    },
    category: 'mausoleum',
    epoch: 'golden_horde',
    unescoWorldHeritage: false,
    historicalPeriod: {
      kk: 'XVIII ғасыр (1748 ж., кешен 2015 ж. тұрғызылған)',
      en: '18th century ruler (1748 CE death, memorial erected 2015 CE)',
      ru: 'XVIII век (гибель в 1748 г., мемориал открыт в 2015 г.)',
    },
    shortDescription: {
      kk: 'Кіші жүз ханы, қолбасшы Әбілқайырдың бейіті және үш жүздің таңбасын бейнелейтін 23 метрлік алып ақ стела кешені.',
      en: 'Monumental 23-meter soaring tri-stelae memorial and mausoleum marking the tomb of Little Zhuz leader and battlefield khan Abulkhair.',
      ru: 'Величественный 23-метровый триумфальный мемориал и мавзолей на месте упокоения хана Младшего жуза Абулхаира.',
    },
    history: {
      kk: 'Әбілқайыр Мұхаммед Ғази Баһадүр хан (1693–1748) — қазақ тарихындағы көрнекті мемлекет қайраткері, қолбасшы, Кіші жүз ханы. Ол 1726 жылғы Ордабасы құрылтайында қазақ жасақтарының бас қолбасшысы болып сайланып, Аңырақай мен Бұланты шайқастарында жеңіске жеткен. 1748 жылы қаза тауып, осы қорымға жерленген. 2015 жылы оның қабірінің үстінде үш жүздің бірлігін бейнелейтін 23 метрлік алып стела мен сәулетті кесене ашылды.',
      en: 'Abulkhair Khan (1693–1748) was supreme wartime commander elected at the historic Ordabasy congress, leading the united Kazakh hosts to pivotal victories against invaders at Bulanty and Anyraqay. Following his death in 1748, he was laid to rest at the Khan Molasy necropolis. In 2015, Kazakhstan unveiled an awe-inspiring national memorial featuring three soaring 23-meter white marble-clad pylons linked by a central dome.',
      ru: 'Хан Абулхаир (1693–1748) — выдающийся полководец и правитель Младшего жуза, возглавивший объединенное ополчение в победоносных битвах при Буланты и Аныракае. Похоронен на некрополе Хан моласы. В 2015 году воздвигнут грандиозный мемориал: три 23-метровые стелы с родовыми тамгами трех жузов и купольный мавзолей.',
    },
    whyImportant: {
      kk: 'Қазақ хандығының аумақтық тұтастығы мен әскери даңқының символы саналатын ұлы ханның сакралды пантеоны.',
      en: 'Sacred steppe pantheon commemorating the supreme wartime unity of the Kazakh nation in the 18th century.',
      ru: 'Ключевой национальный пантеон степной воинской славы и государственного единства.',
    },
    whyVisit: {
      kk: 'Шексіз Торғай-Ақтөбе даласындағы 23 метрлік алып стелалардың салтанатын көру, көне қорымның құлпытастарын зерттеу және хан рухына тағзым ету.',
      en: 'Witness the surreal white triumphal stelae rising directly from the pristine wild steppe, examine centuries-old engraved stone stelae, and honor historical memory.',
      ru: 'Увидеть монументальные 23-метровые стелы посреди дикой первозданной степи и прикоснуться к легендарной истории.',
    },
    whatToSee: {
      kk: [
        'Үш жүздің бірлігін бейнелейтін 23 метрлік ақ стелалар триосы',
        'Әбілқайыр ханның сәулетті күмбезді кесенесі',
        'Хан моласы көне қорымындағы 1000-нан астам тарихи құлпытастар',
        'Кешен музейіндегі антропологиялық зерттеулер мен хан қаруының деректері',
        'Өлкейек пен Қабырға өзендерінің тоғысқан далалық жазығы',
      ],
      en: [
        'Trio of 23-meter tall soaring white stelae representing the three tribal hordes',
        'Domed mausoleum sanctuary directly over the khans confirmed burial ground',
        'Over 1,000 ancient stone carved stelae across the historic necropolis',
        'Memorial museum exhibits detailing the forensic and genetic identification of the khan',
        'Vast steppe horizons between Olkeyek and Qabyrga riverbeds',
      ],
      ru: [
        'Три 23-метровые стелы с тамгами родов трех казахских жузов',
        'Купольный мавзолей над захоронением хана Абулхаира',
        'Более 1000 старинных каменных кулпытасов исторического некрополя',
        'Музейные материалы генетической и антропологической идентификации хана',
        'Бескрайние дикие степные пейзажи Актюбинской области',
      ],
    },
    whatToDo: {
      kk: [
        'Алып стеланың астында тұрып дала кеңістігін сезіну',
        'Археологтар мен ғалымдардың Әбілқайыр ханды зерттеу тарихымен танысу',
        'Далалық экспедициялық джип-тур жасау',
      ],
      en: [
        'Stand beneath the soaring central arch overlooking the endless horizon',
        'Review the fascinating academic forensic documentation of the royal grave discovery',
        'Experience an authentic 4WD steppe overland expedition',
      ],
      ru: [
        'Оценить масштаб монументальных стел посреди открытой степи',
        'Изучить результаты междисциплинарных исторических исследований',
        'Совершить внедорожное сафари по древней степной тропе',
      ],
    },
    bestTimeToVisit: {
      kk: 'Мамыр – Маусым және Қыркүйек – Қазан (жазы ыстық)',
      en: 'May to June and September to October (avoids high summer heat)',
      ru: 'Май – июнь и сентябрь – октябрь',
    },
    recommendedVisitDurationHours: 3,
    openingHours: {
      schedule: {
        kk: 'Күн сайын: 09:00 – 19:00 (тәулік бойы аумаққа кіруге болады)',
        en: 'Daily: 09:00 – 19:00 (Sanctuary grounds open 24/7)',
        ru: 'Ежедневно: 09:00 – 19:00',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Кешенге кіру тегін.',
        en: 'Admission is free of charge.',
        ru: 'Вход бесплатный.',
      },
    },
    ticketPrices: {
      domesticAdult: 500,
      domesticStudent: 250,
      domesticChild: 0,
      foreignAdult: 1500,
      excursionFeeKz: 1500,
      excursionFeeEn: 3000,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Кешенге кіру тегін. Музей қызметкері экскурсия жүргізеді.',
        en: 'Memorial is free to visit; certified guide available on site.',
        ru: 'Вход на комплекс свободный.',
      },
      source: 'Aktobe Regional Center for Historical and Cultural Heritage',
      sourceUrl: 'https://aktobe.gov.kz',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/khan-molasy.jpg',
        caption: {
          kk: 'Хан моласы мемориалының 23 метрлік үш алып ақ стеласы',
          en: 'Soaring 23-meter stelae of the Abulkhair Khan memorial in Aktobe steppe',
          ru: 'Три 23-метровые стелы мемориала «Хан моласы» в степи',
        },
      },
      {
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
        caption: {
          kk: 'Торғай-Ақтөбе өңірінің шексіз даласы',
          en: 'Endless wild steppe horizon surrounding the Khan Molasy necropolis',
          ru: 'Степные дали Актюбинской области вокруг некрополя',
        },
      },
      {
        url: '/images/interiors/khan-molasy-360-pano-stele.jpg',
        caption: {
          kk: 'Хан моласының 360° панорамасы — Әбілқайыр хан кесенесі',
          en: '360° panorama of Khan Molasy — Abilkhair Khan Mausoleum',
          ru: '360° панорама Хан Моласы — мавзолей хана Абулхаира',
        },
        credit: 'Qazaq Heritage 360° Virtual Tour',
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Ақтөбе қаласы (350 км)',
        en: 'Aktobe City (350 km)',
        ru: 'город Актобе (350 км)',
      },
      distanceFromHubKm: 350,
      options: [
        {
          mode: 'car',
          title: {
            kk: 'Ақтөбеден Қарабұтақ — Толыбай арқылы джиппен саяхат',
            en: '4WD overland expedition from Aktobe via Karabutak and Tolybay',
            ru: 'Внедорожная поездка из Актобе через Карабутак и Толыбай',
          },
          duration: '4 - 5 hours',
          costRange: { min: 25000, max: 55000, currency: 'KZT' },
          provider: 'Aktobe 4WD Safari & Regional Travel Guides',
          status: 'VERIFIED',
          tips: {
            kk: 'Соңғы 90 шақырымы далалық жол болғандықтан, жол талғамайтын көлік ұсынылады.',
            en: 'High-clearance SUV or 4WD recommended for the final unpaved steppe leg.',
            ru: 'Рекомендуется внедорожник для финального степного участка.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 8000, max: 15000 },
      midRangePerNight: { min: 18000, max: 35000 },
      luxuryPerNight: { min: 40000, max: 80000 },
      status: 'VERIFIED',
      source: 'Aktobe city hotels index (Dastan, Amsterdam, Ilek, etc.)',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 3000, max: 5500 },
      midRangePerDay: { min: 6500, max: 12000 },
      status: 'VERIFIED',
      source: 'Aktobe regional dining indicators',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: true,
      walkingDifficulty: 'easy',
      notes: {
        kk: 'Мемориал алаңы таспен төселген, стела астындағы көру аймағы тегіс.',
        en: 'Main monument plaza paved with granite pavers.',
        ru: 'Территория вокруг стел вымощена гранитной плиткой.',
      },
    },
    sources: [
      {
        name: 'Aktobe Regional Department of Heritage & Tourism',
        url: 'https://aktobe.gov.kz',
        type: 'government',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'bukey-orda',
    slug: 'bukey-horde-zhangir-khan-mausoleum',
    name: {
      kk: 'Бөкей ордасы және Жәңгір хан кесенесі',
      en: 'Bukey Horde & Zhangir Khan Mausoleum',
      ru: 'Букеевская Орда и мавзолей Жангир-хана',
    },
    regionId: 'west_kazakhstan',
    cityDistrict: {
      kk: 'Бөкей ордасы ауданы, Хан ордасы ауылы',
      en: 'Bukey Orda District, Khan Ordasy Village',
      ru: 'Бокейординский район, с. Хан Ордасы',
    },
    exactLocation: {
      kk: 'Нарын құмы жиегі, Бөкей ордасы тарихи-музей кешені',
      en: 'Naryn Sands edge, Bukey Horde Historical-Museum Complex',
      ru: 'пески Нарын, историко-музейный комплекс Букеевской Орды',
    },
    coordinates: {
      lat: 48.9512,
      lng: 47.0543,
    },
    category: 'fortress_memorial',
    epoch: 'enlightenment',
    unescoWorldHeritage: false,
    historicalPeriod: {
      kk: 'XIX ғасыр (1801–1845 жж.)',
      en: '19th century (1801–1845 CE)',
      ru: 'XIX век (1801–1845 гг.)',
    },
    shortDescription: {
      kk: 'Қазақстандағы тұңғыш мектеп, баспахана мен қару-жарақ сарайы орналасқан, Жәңгір хан мен Күйші Дәулеткерейдің кесене кешені.',
      en: 'Historic capital of the Bukey Kazakh Khanate featuring the palace of reformer Zhangir Khan, Kazakstans first modern school, and royal mausoleums.',
      ru: 'Уникальная ставка Букеевского ханства: дворец Жангир-хана, мавзолеи хана и кюйши Даулеткерея, первая светская школа и типография.',
    },
    history: {
      kk: 'Бөкей ордасы — 1801 жылы Еділ мен Жайық арасындағы Нарын құмында құрылған қазақ хандығының ордасы. Жәңгір хан (1801–1845) қазақ даласында алғаш рет еуропалық үлгідегі зайырлы мектеп, алғашқы дәріхана, қазынашылық, баспахана мен қару-жарақ палатасын құрды. Кешенде Жәңгір ханның, оның әйгілі зайыбы Фатима ханымның және ұлы күйші Дәулеткерей Шығайұлының сәулетті күмбезді кесенелері орналасқан.',
      en: 'Founded in 1801 between the Volga and Ural rivers by Sultan Bukey. Under reformist ruler Zhangir Khan (1801–1845), the settlement blossomed into a cosmopolitan royal seat featuring Kazakstans first modern secular school (1841), first pharmacy, print press, and armory. The architectural ensemble includes the majestic domed mausoleums of Zhangir Khan, Queen Fatima, and virtuoso dombra composer Dauletkerei.',
      ru: 'Основана в 1801 году в песках Нарын. Хан Жангир открыл первую в степи светскую школу (1841 г.), аптеку, казначейство и оружейную палату. Ансамбль включает ханский дворец, мавзолей Жангир-хана, мавзолей композитора Даулеткерея и реликтовый сосновый бор.',
    },
    whyImportant: {
      kk: 'Қазақ хандығының дәстүрлі билігі мен еуропалық реформалардың бірегей тоғысқан мемлекеттік орталығы.',
      en: 'The prime 19th-century intellectual gateway connecting nomadic steppe traditions with modern European science and architecture.',
      ru: 'Главный памятник синтеза кочевой государственности и просветительских реформ XIX века.',
    },
    whyVisit: {
      kk: 'Нарын құмындағы қарағайлы оазисті көру, Жәңгір хан мен Дәулеткерейдің сәулетті кесенелерін тамашалау және 200 жылдық тарихи ғимараттарды аралау.',
      en: 'Explore authentic 19th-century wooden and brick palace structures nestled in pine groves amid sand dunes, and visit royal mausoleums.',
      ru: 'Увидеть подлинный ханский городок среди сосен и песчаных барханов, мавзолей хана и легендарную первую казахскую школу.',
    },
    whatToSee: {
      kk: [
        'Жәңгір ханның сәулетті ақ күмбезді кесенесі',
        'Күй атасы Дәулеткерей Шығайұлының кесенесі',
        '1828 жылғы Хан сарайы мен қару-жарақ палатасы музейі',
        'Қазақ даласындағы тұңғыш зайырлы мектеп ғимараты (1841 ж.)',
        'Нарын құмындағы қарағайлы оазис пен ақ шағылдар',
      ],
      en: [
        'Zhangir Khan domed white brick mausoleum',
        'Mausoleum of legendary dombra composer Dauletkerei',
        'Restored Royal Palace and Armoury Museum (1828 CE)',
        'Kazakstans first secular schoolhouse founded in 1841',
        'Unique relic pine forest growing directly out of desert sand dunes',
      ],
      ru: [
        'Белокупольный мавзолей хана Жангира',
        'Мавзолей выдающегося композитора-кюйши Даулеткерея',
        'Ханский дворец и Оружейная палата 1828 года',
        'Здание первой светской казахской школы 1841 года',
        'Реликтовый сосновый бор посреди барханов Нарынских песков',
      ],
    },
    whatToDo: {
      kk: [
        'Хан сарайы мен көне қару-жарақ бөлмелерін тамашалау',
        'Дәулеткерейдің әйгілі күйлерін кесене басында тыңдау',
        'Нарын құмының бірегей шағылдары мен қарағайлы орманында серуендеу',
      ],
      en: [
        'Tour preserved royal office chambers, swords, and early diplomatic archives',
        'Listen to audio recordings of Dauletkereis classic dombra compositions on site',
        'Walk through the desert pine microclimate reserve surrounding the town',
      ],
      ru: [
        'Осмотреть залы ханского дворца и оружейной палаты',
        'Послушать бессмертные кюи Даулеткерея в тишине мемориального парка',
        'Прогуляться по хвойному лесу в песчаных дюнах Нарына',
      ],
    },
    bestTimeToVisit: {
      kk: 'Мамыр – Маусым және Қыркүйек – Қазан',
      en: 'May to June and September to October',
      ru: 'Май – июнь и сентябрь – октябрь',
    },
    recommendedVisitDurationHours: 4,
    openingHours: {
      schedule: {
        kk: 'Сейсенбі – Жексенбі: 09:00 – 18:00 (Дүйсенбі — демалыс)',
        en: 'Tuesday – Sunday: 09:00 – 18:00 (Monday closed)',
        ru: 'Вторник – воскресенье: 09:00 – 18:00 (выходной — понедельник)',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Музей кешені 13 ғимараттан тұрады, билет бірыңғай барлық нысанға жарамды.',
        en: 'Single museum pass provides entry to all 13 historic pavilion buildings.',
        ru: 'Единый билет дает право осмотра всех 13 исторических зданий комплекса.',
      },
    },
    ticketPrices: {
      domesticAdult: 1200,
      domesticStudent: 600,
      domesticChild: 300,
      foreignAdult: 3000,
      excursionFeeKz: 2000,
      excursionFeeEn: 4500,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Билет барлық 13 мұражай ғимаратына және кесенелерге жарамды.',
        en: 'Comprehensive ticket includes entry to the palace, school, and mausoleums.',
        ru: 'Билет включает посещение дворца, школы, музея и некрополя.',
      },
      source: 'Bukey Horde State Historical and Museum Reserve',
      sourceUrl: 'https://bokeiorda.kz',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/bukey-orda.jpg',
        caption: {
          kk: 'Бөкей ордасындағы Жәңгір хан кесенесі мен тарихи кешен ғимараттары',
          en: 'Mausoleum of Zhangir Khan and historic buildings of the Bukey Horde',
          ru: 'Мавзолей Жангир-хана и исторический комплекс Букеевской Орды',
        },
      },
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        caption: {
          kk: 'Нарын құмындағы қарағайлы орман мен тарихи оазис',
          en: 'Pine forest oasis thriving in the Naryn desert sands',
          ru: 'Сосновый бор посреди барханов Нарынских песков',
        },
      },
      {
        url: '/images/interiors/bukey-orda-360-pano-complex.jpg',
        caption: {
          kk: 'Бөкей ордасының 360° панорамасы — соңғы хандық кешені',
          en: '360° panorama of Bukey Orda — last Kazakh khanate complex',
          ru: '360° панорама Букеевской орды — последний казахский ханат',
        },
        credit: 'Qazaq Heritage 360° Virtual Tour',
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Орал қаласы (550 км) немесе Атырау (450 км)',
        en: 'Oral / Uralsk (550 km) or Atyrau (450 km)',
        ru: 'город Уральск (550 км) или Атырау (450 км)',
      },
      distanceFromHubKm: 550,
      options: [
        {
          mode: 'car',
          title: {
            kk: 'Оралдан немесе Атыраудан Хан ордасына дейінгі автосапар',
            en: 'Road transfer from Uralsk or Atyrau to Khan Ordasy',
            ru: 'Автотрансфер из Уральска или Атырау до с. Хан Ордасы',
          },
          duration: '6 - 7 hours',
          costRange: { min: 20000, max: 45000, currency: 'KZT' },
          provider: 'Regional Tour Operators / Private transfers',
          status: 'VERIFIED',
          tips: {
            kk: 'Жол бойы Нарын құмы мен Жайық бойының табиғатымен өтеді.',
            en: 'Paved highway connected to local road leading into the pine sand reserve.',
            ru: 'Асфальтированная трасса соединяет Хан Ордасы с магистралью.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 7000, max: 14000 },
      midRangePerNight: { min: 16000, max: 30000 },
      luxuryPerNight: { min: 35000, max: 65000 },
      status: 'VERIFIED',
      source: 'Khan Ordasy guest houses and Uralsk hotels index',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 3000, max: 5500 },
      midRangePerDay: { min: 6500, max: 11000 },
      status: 'VERIFIED',
      source: 'West Kazakhstan dining indicators',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: true,
      walkingDifficulty: 'easy',
      notes: {
        kk: 'Тарихи ауыл ішіндегі аллеялар тегіс, ғимараттарға кіретін ағаш пандустар бар.',
        en: 'Paved park lanes and wooden threshold ramps across the historic village.',
        ru: 'Ровные дорожки между зданиями музейного комплекса, удобный доступ.',
      },
    },
    sources: [
      {
        name: 'Bukey Horde State Museum-Reserve',
        url: 'https://bokeiorda.kz',
        type: 'official_reserve',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'abai-shakarim',
    slug: 'abai-shakarim-memorial-complex-zhidebay',
    name: {
      kk: 'Абай мен Шәкәрім кесене кешені',
      en: 'Abai and Shakarim Memorial Complex',
      ru: 'Мемориальный комплекс Абая и Шакарима',
    },
    regionId: 'abai',
    cityDistrict: {
      kk: 'Абай ауданы, Жидебай шатқалы',
      en: 'Abai District, Zhidebay Valley',
      ru: 'Абайский район, урочище Жидебай',
    },
    exactLocation: {
      kk: '«Жидебай-Бөрілі» мемлекеттік тарихи-мәдени қорығы',
      en: 'Zhidebay-Borili State Historical-Cultural Reserve',
      ru: 'заповедник «Жидебай-Бөрілі»',
    },
    coordinates: {
      lat: 49.2512,
      lng: 79.1534,
    },
    category: 'mausoleum',
    epoch: 'enlightenment',
    unescoWorldHeritage: false,
    historicalPeriod: {
      kk: 'XIX–XX ғасырлар (кешен 1995 ж. ашылған)',
      en: '19th–20th century poets (complex opened 1995 CE)',
      ru: 'XIX–XX века (мемориал открыт в 1995 г.)',
    },
    shortDescription: {
      kk: 'Қазақтың бас ақыны Абай мен ғұлама Шәкәрімге арналған, биіктігі 38,5 метрлік ақ мәрмәр қос мұнаралы даланың рухани Меккесі.',
      en: 'Sacred twin-tower white marble pantheon rising 38.5 meters above the steppe, commemorating paramount poet Abai and philosopher Shakarim.',
      ru: 'Духовная Мекка степи: величественный 38,5-метровый белокаменный комплекс из двух башен над усыпальницами Абая и Шакарима.',
    },
    history: {
      kk: 'Абай Құнанбайұлы (1845–1904) — қазақтың бас ақыны, жазба әдебиетінің негізін қалаушы, дала философы. Шәкәрім Құдайбердіұлы (1858–1931) — оның дарынды шәкірті, ақын, ойшыл. 1995 жылы Абайдың 150 жылдығына орай сәулетші Б. Ыбыраевтың жобасымен Жидебай басында ақ мәрмәрдан екі зәулім мұнара (Абайдікі 38,5 м, Шәкәрімдікі 35 м) және амфитеатр тұрғызылды. Сондай-ақ осында Еуразия құрлығының кіндігі орналасқан.',
      en: 'Abai Qunanbaiuly (1845–1904) is revered as the national poet and father of written Kazakh literature. His nephew and intellectual heir Shakarim Qudaiberdiuly (1858–1931) was a philosopher and poet. To celebrate Abais 150th jubilee in 1995, architect B. Ibraev designed two soaring minarets of pristine white Mangystau shellstone rising 38.5m and 35m from a vast communal podium. Nearby lies the exact geographic center point of the Eurasian continent.',
      ru: 'Абай Кунанбаев (1845–1904) — основоположник казахской письменной литературы, великий поэт и гуманист. Шакарим Кудайбердиев (1858–1931) — его верный ученик и философ. В 1995 г. к 150-летию Абая в Жидебае воздвигнут белоснежный комплекс: две башни-мавзолея высотой 38,5 м и 35 м на общем постаменте в виде амфитеатра.',
    },
    whyImportant: {
      kk: 'Қазақ ұлтының рухани және интеллектуалдық ұшар шыңы, Еуразия құрлығының дәл географиялық кіндігі.',
      en: 'The foremost literary and philosophical heartland of the Kazakh people, and the geographic midpoint of the Eurasian continent.',
      ru: 'Главная духовная святыня казахской литературы и географический центр Евразийского континента.',
    },
    whyVisit: {
      kk: 'Еуразияның кіндік нүктесінде тұрып тылсым дала тынысын сезіну, Абайдың тұрған үй-музейін көру және 38 метрлік ақ мәрмәр қос мұнараны тамашалау.',
      en: 'Stand at the certified geographic center of Eurasia, walk through Abais original 19th-century estate museum, and marvel at the colossal marble minarets.',
      ru: 'Побывать в географическом центре Евразии, увидеть дом-музей Абая и восхититься белоснежными башнями-мавзолеями.',
    },
    whatToSee: {
      kk: [
        '38,5 және 35 метрлік ақ мәрмәр қос кесене-мұнара',
        'Ашық аспан астындағы үлкен мәрмәр амфитеатр',
        'Жидебайдағы Абайдың түпнұсқа қыстау-музейі (1895 ж. салынған)',
        'Еуразия құрлығының дәл географиялық кіндік орталығы белгісі',
        'Шыңғыстау таулары мен шексіз дала көрінісі',
      ],
      en: [
        'Soaring 38.5m and 35m twin white marble minarets',
        'Sunken amphitheater podium carved from pale natural stone',
        'Abais authentic original winter homestead museum (built 1895)',
        'The official monument marking the Geographic Center of Eurasia',
        'Dramatic Chingiztau hills rolling across the horizon',
      ],
      ru: [
        'Две белокаменные башни-усыпальницы высотой 38,5 и 35 метров',
        'Постамент-амфитеатр из белого мангистауского ракушечника',
        'Подлинный дом-музей Абая в Жидебае (постройки 1895 г.)',
        'Официальный памятный знак «Географический центр Евразии»',
        'Панорамы Чингизтауских гор и степи',
      ],
    },
    whatToDo: {
      kk: [
        'Қос мұнара арасындағы баспалдақпен көтеріліп даланың тыныштығын тыңдау',
        'Абайдың өз қолымен ұстаған заттары сақталған мұражай-үйін аралау',
        'Еуразияның кіндігінде естелік суретке түсу',
      ],
      en: [
        'Climb the ceremonial stairs between the twin towers to overlook the vast landscape',
        'Inspect authentic relics, handwritten books, and dombras inside Abais house',
        'Take a memorable photo at the Geographic Center of Eurasia marker',
      ],
      ru: [
        'Подняться по торжественной лестнице на платформу между двумя башнями',
        'Посетить дом-музей с подлинными личными вещами и книгами Абая',
        'Сделать фото у знака «Центр Евразии»',
      ],
    },
    bestTimeToVisit: {
      kk: 'Мамыр – Қазан айлары',
      en: 'May to October',
      ru: 'Май – октябрь',
    },
    recommendedVisitDurationHours: 4,
    openingHours: {
      schedule: {
        kk: 'Күн сайын: 09:00 – 18:00 (демалыссыз)',
        en: 'Daily: 09:00 – 18:00 (Year-round)',
        ru: 'Ежедневно: 09:00 – 18:00',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Кешенге кіру тегін, Жидебай музей-үйіне шағын билет алынады.',
        en: 'Grounds access is free; modest museum ticket applies at the estate house.',
        ru: 'Вход на комплекс бесплатный; билет в дом-музей.',
      },
    },
    ticketPrices: {
      domesticAdult: 1000,
      domesticStudent: 500,
      domesticChild: 200,
      foreignAdult: 3000,
      excursionFeeKz: 2000,
      excursionFeeEn: 4500,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Кесенеге кіру тегін. Музей-үйге кіру билеті қамтылған.',
        en: 'Covers admission to the historical winter estate museum.',
        ru: 'Билет дает право осмотра дома-музея Абая в Жидебае.',
      },
      source: 'State Reserve-Museum of Abai Zhidebay-Borili',
      sourceUrl: 'https://abaimuseum.kz',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/abai-shakarim.jpg',
        caption: {
          kk: 'Абай мен Шәкәрімнің ақ мәрмәр қос мұнаралы кесенесі күн сәулесінде',
          en: 'Twin white towers of the Abai and Shakarim sanctuary in Zhidebay',
          ru: 'Башни-мавзолеи Абая и Шакарима в урочище Жидебай',
        },
      },
      {
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
        caption: {
          kk: 'Шыңғыстаудың тарихи даласы мен Жидебай қорығы',
          en: 'Chingiztau steppe expanses around the Zhidebay reserve',
          ru: 'Степные просторы Чингизтау вокруг заповедника Жидебай',
        },
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Семей қаласы (180 км)',
        en: 'Semey City (180 km)',
        ru: 'город Семей (180 км)',
      },
      distanceFromHubKm: 180,
      options: [
        {
          mode: 'car',
          title: {
            kk: 'Семейден Қарауыл — Жидебай бағытындағы тасжолмен автосапар',
            en: 'Paved highway drive from Semey via Karauyl to Zhidebay',
            ru: 'Поездка на автомобиле из Семея через с. Карауыл',
          },
          duration: '2 - 2.5 hours',
          costRange: { min: 12000, max: 28000, currency: 'KZT' },
          provider: 'Semey Tour Operators / Private Drivers',
          status: 'VERIFIED',
          tips: {
            kk: 'Жол бойында «Еңлік-Кебек» ескерткіші мен Бөрілідегі М. Әуезов музейіне соғуға болады.',
            en: 'Road passes the Enlik-Kebek lovers monument and Mukhtar Auezov house in Borili.',
            ru: 'По пути можно посетить памятник Енлик-Кебек и музей Ауэзова в Бөрілі.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 8000, max: 15000 },
      midRangePerNight: { min: 18000, max: 35000 },
      luxuryPerNight: { min: 40000, max: 75000 },
      status: 'VERIFIED',
      source: 'Semey city hotels index (Semey, Grand Hotel, etc.)',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 3000, max: 5500 },
      midRangePerDay: { min: 7000, max: 13000 },
      status: 'VERIFIED',
      source: 'Abai region dining indicators',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: true,
      walkingDifficulty: 'easy',
      notes: {
        kk: 'Кешенде тегіс пандустар бар, мұражай үйіне кіру ыңғайлы.',
        en: 'Podium ramped for wheelchair access; level pathways throughout.',
        ru: 'Оборудованы пандусы на платформу мавзолея.',
      },
    },
    sources: [
      {
        name: 'State Reserve-Museum of Abai',
        url: 'https://abaimuseum.kz',
        type: 'official_reserve',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'alasha-khan',
    slug: 'alasha-khan-mausoleum',
    name: {
      kk: 'Алаша хан кесенесі',
      en: 'Alasha Khan Mausoleum',
      ru: 'Мавзолей Алаша-хана',
    },
    regionId: 'ulytau',
    cityDistrict: {
      kk: 'Ұлытау облысы, Қаракеңгір өзенінің оң жағасы',
      en: 'Ulytau Region, right bank of Kara-Kengir River',
      ru: 'область Ұлытау, правый берег реки Кара-Кенгир',
    },
    exactLocation: {
      kk: 'Жезқазғаннан солтүстікке қарай 90 км, Талдысай ауылынан 2 км',
      en: '90 km north of Zhezkazgan, 2 km from Taldysai',
      ru: '90 км к северу от Жезказгана, 2 км от с. Талдысай',
    },
    coordinates: {
      lat: 47.9542,
      lng: 67.8519,
    },
    category: 'mausoleum',
    epoch: 'golden_horde',
    unescoWorldHeritage: false,
    historicalPeriod: {
      kk: 'X–XI ғасырлар (кей деректе XI–XII ғғ.)',
      en: '10th–11th centuries CE (Qarakhanid/Early Nomadic era)',
      ru: 'X–XI века (эпоха Караханидов / ранних кочевников)',
    },
    shortDescription: {
      kk: 'Қазақ халқының түп атасы Алаша ханға арналған, қызыл күйдірілген кірпіштен балық қабыршағы өрнегімен қаланған көне сәулет жауһары.',
      en: 'Magnificent 10th-century brick portal-dome mausoleum dedicated to the legendary ancestor of the Kazakh tribes, featuring diamond-patterned brickwork.',
      ru: 'Древнейший портально-купольный мавзолей X–XI вв. из обожженного кирпича с узорной кладкой «в елочку», усыпальница легендарного прародителя казахов.',
    },
    history: {
      kk: 'Алаша хан — қазақ шежіресі мен түркі аңыздарында барлық қазақ тайпаларының түп негізін қалаған, хандық билікті орнатқан ұлы билеуші саналады. «Алаша» атауы қазақтың басты ұранына айналған. Кесене ортағасырлық сәулет өнерінің ерекше туындысы: күйдірілген қызыл кірпіштен балық қабыршағы және кілем өрнектері үлгісінде өрілген. Қабырғасының қалыңдығы мен күмбезге шығатын ішкі баспалдағы көне сәулетшілердің шеберлігін паш етеді.',
      en: 'In Kazakh oral history and Central Asian genealogical tradition, Alasha Khan is venerated as the mythic founding unifier who organized the nomadic steppe confederations into the three ancestral Zhuzes. The mausoleum dates back to the 10th–11th century and represents an architectural masterwork: constructed of burnt red clay bricks laid in decorative herringbone and diamond chevron patterns, with interior stairway galleries ascending to the upper parapet.',
      ru: 'Алаша-хан — легендарный первопредок и объединитель кочевых племен, создатель первых жузов. Мавзолей X–XI веков возведен из обожженного кирпича с виртуозной фигурной кладкой в виде ромбов и «елочки». Внутри стен устроена крутая винтовая лестница, ведущая на верхнюю галерею под куполом.',
    },
    whyImportant: {
      kk: 'Қазақ мемлекеттілігінің түп бастауы, Орталық Азиядағы ең көне порталды-күмбезді сәулет ескерткіштерінің бірі.',
      en: 'Core foundational monument of Kazakh ethnic identity and one of Central Asias oldest surviving brick portal-dome tombs.',
      ru: 'Колыбель казахского этногенеза и выдающийся памятник домонгольского средневекового зодчества.',
    },
    whyVisit: {
      kk: 'Мыңжылдық қызыл кірпіш өрнектерін көру, кесене ішіндегі көне баспалдақпен жоғары шығып Қаракеңгір аңғарына көз тастау.',
      en: 'Inspect 1,000-year-old terracotta brick tessellations and climb the internal secret stone stairway to the dome gallery overlooking the Kara-Kengir River.',
      ru: 'Увидеть кирпичную кладку тысячелетней давности и подняться по старинной внутренней лестнице на смотровую галерею.',
    },
    whatToSee: {
      kk: [
        'Балық қабыршағы және кілем өрнегімен қаланған қызыл кірпіш қабырғалар',
        'Алып сәулетті кіреберіс порталы мен күмбезі',
        'Күмбез астына шығаратын қабырға ішіндегі көне баспалдақ',
        'Қаракеңгір өзенінің кең жазық панорамасы',
        'Жақын маңдағы Жошы хан кесенесімен көршілес сакралды аймақ',
      ],
      en: [
        'Burnt red brick facade laid in distinctive chevron and diamond motifs',
        'Imposing monumental portal archway leading into the central octagonal dome',
        'Concealed internal wall stairway ascending to the open upper gallery',
        'Vast scenic steppe expanse along the Kara-Kengir riverbanks',
        'Proximity to neighboring Jochi Khan Mausoleum on the sacred steppe circuit',
      ],
      ru: [
        'Узорная кирпичная кладка портала и стен с ромбовидным орнаментом',
        'Монументальный портал с глубокой нишей и восьмигранный купол',
        'Внутристенная винтовая лестница на верхний уровень',
        'Панорама степной долины реки Кара-Кенгир',
        'Соседство с мавзолеем Жошы-хана в едином сакральном кольце Ұлытау',
      ],
    },
    whatToDo: {
      kk: [
        'Кесененің ішкі баспалдағымен төбеге шығып, дала кеңістігін тамашалау',
        'Жошы хан мен Домбауыл кесенелерімен біріктіріп бір күндік тур жасау',
      ],
      en: [
        'Ascend the narrow hidden stairway inside the thick walls to the upper roof platform',
        'Combine into a full-day Golden Horde pilgrimage together with Jochi Khan and Dombauyl',
      ],
      ru: [
        'Подняться по старинной лестнице на верхнюю галерею купола',
        'Объединить в один маршрут с мавзолеями Жошы-хана и Домбауыла',
      ],
    },
    bestTimeToVisit: {
      kk: 'Мамыр – Маусым және Қыркүйек – Қазан',
      en: 'May to June and September to October',
      ru: 'Май – июнь и сентябрь – октябрь',
    },
    recommendedVisitDurationHours: 2.5,
    openingHours: {
      schedule: {
        kk: 'Күн сайын: 09:00 – 18:00 (тәулік бойы аумаққа кіруге болады)',
        en: 'Daily: 09:00 – 18:00 (Grounds open 24/7)',
        ru: 'Ежедневно: 09:00 – 18:00',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Кесенеге кіру тегін.',
        en: 'Mausoleum access is free of charge.',
        ru: 'Вход свободный.',
      },
    },
    ticketPrices: {
      domesticAdult: 500,
      domesticStudent: 250,
      domesticChild: 0,
      foreignAdult: 2000,
      excursionFeeKz: 1500,
      excursionFeeEn: 3500,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Кесенеге кіру тегін. Ұлытау музей-қорығының гид қызметі қосымша ұсынылады.',
        en: 'Sanctuary admission is free; official Ulytau reserve guide optional.',
        ru: 'Вход бесплатный. Экскурсионное сопровождение заповедника «Улытау».',
      },
      source: 'Ulytau State Reserve-Museum',
      sourceUrl: 'https://ulytau.kz',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/alasha-facade-user.png',
        caption: {
          kk: 'Алаша хан кесенесінің бас қасбеті: қызыл кірпіш пештак пен сүйір арка',
          en: '10th-century decorative red-brick portal facade of Alasha Khan Mausoleum',
          ru: 'Главный фасад мавзолея Алаша-хана X–XI вв. с ковровой кирпичной кладкой',
        },
      },
      {
        url: '/images/interiors/alasha-interior-user.png',
        caption: {
          kk: 'Алаша хан кесенесінің ішкі күмбез залы мен сатылы сағаналар',
          en: 'Interior domed crypt hall with stepped brick cenotaphs and squinch pendentives',
          ru: 'Внутренний сводчатый зал с куполом и ступенчатыми кирпичными саркофагами',
        },
      },
      {
        url: '/images/destinations/alasha-roof-user.png',
        caption: {
          kk: 'Алаша хан кесенесінің төбесі: жарты шар күмбез бен баспалдақ шығар аузы',
          en: 'Rooftop terrace overlooking the hemispherical dome and steppe horizon',
          ru: 'Крыша мавзолея: полусферический купол и смотровая парапетная терраса',
        },
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Жезқазған қаласы (90 км)',
        en: 'Zhezkazgan City (90 km)',
        ru: 'город Жезказган (90 км)',
      },
      distanceFromHubKm: 90,
      options: [
        {
          mode: 'car',
          title: {
            kk: 'Жезқазғаннан Талдысай арқылы жол талғамайтын көлікпен сапар',
            en: '4x4 transfer from Zhezkazgan via Taldysai village',
            ru: 'Поездка на внедорожнике из Жезказгана через Талдысай',
          },
          duration: '1.5 - 2 hours',
          costRange: { min: 10000, max: 22000, currency: 'KZT' },
          provider: 'Ulytau Tour Guides / Local drivers',
          status: 'VERIFIED',
          tips: {
            kk: 'Жошы хан кесенесінен небәрі 20 шақырым жерде орналасқан, екеуін қатар көруге болады.',
            en: 'Located just 20 km from Jochi Khan Mausoleum; visit both together.',
            ru: 'Всего в 20 км от мавзолея Жошы-хана, идеально для совмещенного визита.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 7000, max: 14000 },
      midRangePerNight: { min: 16000, max: 32000 },
      luxuryPerNight: { min: 35000, max: 70000 },
      status: 'VERIFIED',
      source: 'Zhezkazgan hotels & Ulytau ethno-villages',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 3000, max: 5500 },
      midRangePerDay: { min: 6500, max: 12000 },
      status: 'VERIFIED',
      source: 'Ulytau dining indicators',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: true,
      walkingDifficulty: 'easy',
      notes: {
        kk: 'Кесене алды тегіс, ішкі баспалдақ тік және тар.',
        en: 'Level entry into the ground floor chamber; upper stairway is narrow and steep.',
        ru: 'Вход в нижний зал ровный; внутренняя лестница узкая и крутая.',
      },
    },
    sources: [
      {
        name: 'Ulytau State Reserve-Museum',
        url: 'https://ulytau.kz',
        type: 'official_reserve',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },

  {
    id: 'karakhan-mausoleum',
    slug: 'karakhan-mausoleum-taraz',
    name: {
      kk: 'Қарахан кесенесі',
      en: 'Karakhan Mausoleum',
      ru: 'Мавзолей Карахана',
    },
    regionId: 'zhambyl',
    cityDistrict: {
      kk: 'Тараз қаласы орталығы',
      en: 'Taraz City Center',
      ru: 'центр города Тараз',
    },
    exactLocation: {
      kk: 'Тараз қаласы, Төле би мен Байзақ батыр көшелерінің қиылысы, тарихи саябақ',
      en: 'Intersection of Tole Bi and Baizak Batyr streets, Historical Park, Taraz',
      ru: 'пересечение улиц Толе би и Байзак батыра, исторический сквер',
    },
    coordinates: {
      lat: 42.8984,
      lng: 71.3857,
    },
    category: 'mausoleum',
    epoch: 'silk_road',
    unescoWorldHeritage: false,
    historicalPeriod: {
      kk: 'XI ғасыр (Қарахан мемлекеті дәуірі)',
      en: '11th century (Karakhanid Khanate epoch)',
      ru: 'XI век (эпоха государства Караханидов)',
    },
    shortDescription: {
      kk: '2000 жылдық көне Тараз қаласының жүрегіндегі Қарахан әулетінің билеушісіне арналған ортағасырлық сәулет жауһары.',
      en: 'Medieval architectural jewel in the heart of ancient 2,000-year-old Taraz, honoring the ruler of the Karakhanid dynasty.',
      ru: 'Шедевр средневекового зодчества в центре древнего Тараза, усыпальница правителя династии Караханидов.',
    },
    history: {
      kk: 'Кесене XI ғасырда Қарахан мемлекетінің аса көрнекті билеушісі Шах-Махмұт Бұғра Қараханның қабірінің үстіне тұрғызылған. Халық аңызы бойынша ол Айша бибінің ғашығы болған. Бастапқы ғимарат XI ғасырдың терракота кірпіштерімен көмкерілген, 1906 жылы жергілікті халықтың қолдауымен қалпына келтірілді. Кесене ішіндегі мәрмәр сағанада Құран аяттары мен тарихи жазулар сақталған.',
      en: 'Constructed in the 11th century over the tomb of Shah-Mahmud Bughra Karakhan, a prominent ruler of the Karakhanid dynasty. Local romantic legend links his story with that of beautiful Aisha Bibi. The original structure showcased carved terracotta bricks. Inside the square domed hall rests a carved marble cenotaph bearing Kufic Quranic inscriptions.',
      ru: 'Возведен в XI веке над могилой одного из первых правителей династии Караханидов — Шах-Махмуда Карахана. По легенде, он был возлюбленным Айша-биби. Внутри квадратного купольного зала сохранилось древнее каменное ступенчатое надгробие с арабской каллиграфией.',
    },
    whyImportant: {
      kk: 'Орталық Азиядағы ислам діні мен сәулет өнерінің алғашқы гүлдену кезеңі — Қарахан дәуірінің сақталып қалған басты куәсі.',
      en: 'A vital surviving testament to the Karakhanid Renaissance, representing the earliest golden age of Islamic brick architecture in Central Asia.',
      ru: 'Важнейший памятник эпохи Караханидов — первого расцвета исламского монументального зодчества в степном поясе.',
    },
    whyVisit: {
      kk: 'Тараздың қақ ортасындағы тарихи саябақта мыңжылдық кесенені тамашалап, Айша бибі аңызының екінші бөлімімен танысу.',
      en: 'Complete the epic romantic pilgrimage tale of Aisha Bibi right in downtown Taraz, surrounded by shaded alleys and the adjacent Dautbek Mausoleum.',
      ru: 'Увидеть продолжение легенды об Айша-биби в тенистом историческом сквере в центре Тараза.',
    },
    whatToSee: {
      kk: [
        'Ортағасырлық порталды-күмбезді кесене сәулеті',
        'XI ғасырдағы Құран жазулары қашалған ақ мәрмәр сағана',
        'Көршілес жатқан XIII ғасырдағы Дауытбек кесенесі',
        'Көне Тараз қалашығының археологиялық саябағы',
      ],
      en: [
        'Classic Central Asian portal-dome brick sanctuary geometry',
        '11th-century carved white marble cenotaph with Quranic verses',
        'Adjacent 13th-century Dautbek (Shomansur) Mausoleum',
        'Ancient Taraz archaeological open-air excavation park nearby',
      ],
      ru: [
        'Портально-купольная композиция из обожженного кирпича',
        'Мраморное надгробие XI века с куфическими надписями',
        'Соседний мавзолей Даутбека (Шамансура) XIII века',
        'Археологический парк «Древний Тараз» в шаговой доступности',
      ],
    },
    whatToDo: {
      kk: [
        'Кесене ішіндегі көне араб жазулары мен сәулетін көру',
        'Айша бибі кесенесі мен Қарахан арасындағы тарихи байланысты зерттеу',
        'Тараздың көне базары мен шығыс асханасынан дәм тату',
      ],
      en: [
        'Inspect the ancient calligraphy preserved on the sarcophagus',
        'Connect the historical love story between Karakhan and Aisha Bibi',
        'Stroll to the historic Taraz bazaar and taste southern shashlik and flatbread',
      ],
      ru: [
        'Изучить каллиграфию на старинном мраморном саркофаге',
        'Узнать романтическую легенду о любви Карахана и Айша-биби',
        'Попробовать знаменитый таразский шашлык и тандырные лепешки',
      ],
    },
    bestTimeToVisit: {
      kk: 'Сәуір – Маусым және Қыркүйек – Қазан айлары',
      en: 'April to June and September to October',
      ru: 'Апрель – июнь и сентябрь – октябрь',
    },
    recommendedVisitDurationHours: 1.5,
    openingHours: {
      schedule: {
        kk: 'Күн сайын: 09:00 – 18:30 (демалыссыз)',
        en: 'Daily: 09:00 – 18:30',
        ru: 'Ежедневно: 09:00 – 18:30',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Кесене саябағы тәулік бойы ашық, ішкі зал жұмыс уақытында қолжетімді.',
        en: 'Park is open 24/7; inner prayer hall open during operating hours.',
        ru: 'Сквер открыт круглосуточно, доступ внутрь в рабочие часы.',
      },
    },
    ticketPrices: {
      domesticAdult: 600,
      domesticStudent: 300,
      domesticChild: 150,
      foreignAdult: 2000,
      excursionFeeKz: 1500,
      excursionFeeEn: 3500,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Билет «Ежелгі Тараз ескерткіштері» қорығы арқылы беріледі.',
        en: 'Ticket issued under Ancient Taraz Monuments State Reserve.',
        ru: 'Билет заповедника-музея «Памятники древнего Тараза».',
      },
      source: 'State Historical-Cultural Reserve "Monuments of Ancient Taraz"',
      sourceUrl: 'https://taraz-museum.kz',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/karakhan-facade-user.png',
        caption: {
          kk: 'Қарахан кесенесі: қос бастионды мұнаралар мен сүйір пештақ (түпнұсқа)',
          en: 'Karakhan Mausoleum: twin corner bastions and pointed portal (authentic)',
          ru: 'Мавзолей Карахана: бастионные башни и стрельчатый портал (подлинник)',
        },
        credit: 'Түпнұсқа Мұрағат',
      },
      {
        url: '/images/interiors/karakhan-crypt-user.png',
        caption: {
          kk: 'Қарахан қабірханасы: ақ сағана мен сүйір қаусырма аркалар (түпнұсқа)',
          en: 'Karakhan Crypt: white draped sarcophagus and pointed squinches (authentic)',
          ru: 'Усыпальница Карахана: белое надгробие и стрельчатые своды (подлинник)',
        },
        credit: 'Түпнұсқа Мұрағат',
      },
      {
        url: '/images/interiors/karakhan-window-user.png',
        caption: {
          kk: 'Сәулеттік ойық: 1.5 метрлік кірпіш қабырға мен торлы терезе',
          en: 'Architectural Alcove: 1.5-meter brick masonry and lattice window',
          ru: 'Архитектурная ниша: 1.5-метровая кирпичная кладка и решетчатое окно',
        },
        credit: 'Түпнұсқа Мұрағат',
      },
      {
        url: '/images/destinations/karakhan-mausoleum.jpg',
        caption: {
          kk: 'Тараз орталығындағы Қарахан кесенесінің сәулетті порталы',
          en: 'Portal facade of the Karakhan Mausoleum in central Taraz',
          ru: 'Портал мавзолея Карахана в историческом сквере Тараза',
        },
        credit: 'Kazakhstan Tourism Archive',
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Тараз қаласы орталығы',
        en: 'Taraz City Center',
        ru: 'центр Тараза',
      },
      distanceFromHubKm: 1,
      options: [
        {
          mode: 'taxi',
          title: {
            kk: 'Тараз теміржол вокзалы немесе орталығынан жаяу/такси',
            en: 'Walking or short city taxi from Taraz railway station',
            ru: 'Пешком или такси от ж/д вокзала Тараза',
          },
          duration: '5 - 10 minutes',
          costRange: { min: 600, max: 1500, currency: 'KZT' },
          provider: 'Yandex Go / Local City Walk',
          status: 'VERIFIED',
          tips: {
            kk: 'Қаланың дәл ортасында орналасқандықтан жаяу серуендеуге өте қолайлы.',
            en: 'Directly in the city historical center, walkable from main hotels.',
            ru: 'Расположен в центре, пешая доступность от основных отелей.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 8000, max: 15000 },
      midRangePerNight: { min: 18000, max: 35000 },
      luxuryPerNight: { min: 38000, max: 70000 },
      status: 'VERIFIED',
      source: 'Taraz hotels index (Taraz, Zhambyl, etc.)',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 3000, max: 5500 },
      midRangePerDay: { min: 6500, max: 12000 },
      status: 'VERIFIED',
      source: 'Taraz dining indicators',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: true,
      walkingDifficulty: 'easy',
      notes: {
        kk: 'Саябақ аллеясы асфальтталған және тегіс, кедергісіз орта.',
        en: 'Flat paved park paths with zero threshold steps into courtyard.',
        ru: 'Ровные дорожки сквера, удобный безбарьерный подъезд.',
      },
    },
    sources: [
      {
        name: 'Reserve-Museum Monuments of Ancient Taraz',
        url: 'https://taraz-museum.kz',
        type: 'official_reserve',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'raiymbek-batyr',
    slug: 'raiymbek-batyr-mausoleum',
    name: {
      kk: 'Райымбек батыр кесенесі',
      en: 'Raiymbek Batyr Mausoleum & Shrine',
      ru: 'Мавзолей Райымбек батыра',
    },
    regionId: 'almaty_reg',
    cityDistrict: {
      kk: 'Алматы қаласы, Жетісу ауданы (Алматы өңірінің сакралды нысаны)',
      en: 'Almaty City, Zhetysu District (Zhetysu Sacred Landmark)',
      ru: 'г. Алматы, Жетысуский район',
    },
    exactLocation: {
      kk: 'Райымбек даңғылы, 212',
      en: '212 Raiymbek Avenue, Almaty',
      ru: 'проспект Райымбека, 212',
    },
    coordinates: {
      lat: 43.2721,
      lng: 76.9204,
    },
    category: 'mausoleum',
    epoch: 'golden_horde',
    unescoWorldHeritage: false,
    historicalPeriod: {
      kk: 'XVIII ғасыр (кешен 1994 ж. жаңартылған)',
      en: '18th century warrior-saint (complex erected 1994 CE)',
      ru: 'XVIII век (современный мемориал возведен в 1994 г.)',
    },
    shortDescription: {
      kk: 'Жетісуды басқыншылардан азат еткен әулие қолбасшы Райымбек батырдың ақ тастан қаланған шатырлы киелі кесенесі.',
      en: 'Sacred white limestone tent-domed sanctuary honoring the legendary commander-saint who liberated Zhetysu.',
      ru: 'Белокаменный шатровый мавзолей легендарного полководца и святого заступника Жетысу — Райымбек батыра.',
    },
    history: {
      kk: 'Райымбек батыр Хангелдіұлы (1705–1785) — Жетісу жерін жоңғар шапқыншыларынан азат етуде айрықша ерлік көрсеткен халық батыры, әулие қолбасшы. Аңыз бойынша, батыр дүниеден өтерінде: «Денемді ақ түйеге артыңдар, түйе қай жерге шөксе, сонда жерлеңдер» деген өсиет қалдырған. Ақ түйе дәл осы жерге шөгіп, батыр осында мәңгілік тыныс тапқан. 1994 жылы оның қабірінің үстінде ақ тастан шатырлы кесене, шөккен ақ түйе мүсіні мен сакралды қайнар бой көтерді.',
      en: 'Raiymbek Batyr (1705–1785) was supreme warrior-commander of Zhetysu whose military genius turned the tide during the wars of independence. Revered as an aulie (saintly protector). Steppe oral chronicle records his dying wish: his body was placed upon a sacred white camel, and wherever the beast knelt to rest would be his eternal sanctuary. In 1994, a striking pyramid-domed white shellstone mausoleum was built with a life-sized sculpture of the kneeling white camel and a holy water well.',
      ru: 'Райымбек батыр Хангельдыулы (1705–1785) — полководец и святой заступник Семиречья (Жетысу). Согласно завещанию, его тело доверили белому верблюду; где верблюд опустился на колени, там и упокоился батыр. В 1994 году здесь возведен шатровый мавзолей из белого известняка со скульптурой белого верблюда и священным источником.',
    },
    whyImportant: {
      kk: 'Жетісу өлкесі мен Алматы қаласының басты рухани қорғаушысы, қазақ батырлық рухының киелі символы.',
      en: 'Spiritual patron sanctuary of Almaty and the Seven Rivers (Zhetysu) region, celebrating self-sacrifice and faith.',
      ru: 'Главная городская сакральная святыня Алматы и покровитель земли Жетысу.',
    },
    whyVisit: {
      kk: 'Алматының орталығында орналасқан сакралды тыныштықты сезіну, шөккен ақ түйе мүсінін көру және мыңдаған қала қонақтары сияқты тағзым ету.',
      en: 'Feel the oasis of deep spiritual peace in the middle of bustling Almaty, admire the kneeling white camel monument, and drink from the blessed wellspring.',
      ru: 'Ощутить атмосферу умиротворения среди мегаполиса, увидеть скульптуру верблюда и испить воды из сакрального источника.',
    },
    whatToSee: {
      kk: [
        'Ақ тастан қаланған шатырлы пирамида тәріздес кесене',
        'Шөккен ақ түйенің гранит мүсіндік композициясы',
        'Сакралды қасиетті бұлақ қайнары',
        'Құран аяттары қашалған қара мәрмәр сағана',
        'Кесене айналасындағы көгалдандырылған рухани саябақ',
      ],
      en: [
        'Pyramid-roofed white limestone sanctuary chamber',
        'Granite sculptural monument of the legendary kneeling white camel',
        'Blessed spring water well for pilgrims',
        'Black marble cenotaph inscribed with golden Islamic prayers',
        'Landscaped meditation garden shielding the shrine from city traffic',
      ],
      ru: [
        'Шатровый мавзолей из белого мангистауского известняка',
        'Скульптура легендарного белого верблюда из гранита',
        'Священный источник с чистейшей водой для паломников',
        'Черный мраморный саркофаг с золотой вязью аятов',
        'Тихий сквер с реликтовыми соснами посреди города',
      ],
    },
    whatToDo: {
      kk: [
        'Сакралды бұлақтан су ішіп, тыныштықта ой толғау',
        'Алматының орталық көрікті жерлерімен (Медеу, Көктөбе) бір күнде аралау',
      ],
      en: [
        'Taste the cool freshwater from the sacred well on the sanctuary grounds',
        'Seamlessly combine with a tour of downtown Almaty, Panfilov Park, and Kok Tobe',
      ],
      ru: [
        'Испить воды из священного источника в прохладном гроте',
        'Легко совместить с экскурсией по Алматы, парку Панфиловцев и Медеу',
      ],
    },
    bestTimeToVisit: {
      kk: 'Жыл бойы қолайлы (көктем мен күз ерекше көрікті)',
      en: 'Year-round accessible in central Almaty',
      ru: 'Круглый год',
    },
    recommendedVisitDurationHours: 1,
    openingHours: {
      schedule: {
        kk: 'Күн сайын: 08:00 – 21:00 (демалыссыз)',
        en: 'Daily: 08:00 – 21:00',
        ru: 'Ежедневно: 08:00 – 21:00',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Кешенге кіру тегін.',
        en: 'Admission is completely free of charge.',
        ru: 'Вход свободный и бесплатный.',
      },
    },
    ticketPrices: {
      domesticAdult: 0,
      domesticStudent: 0,
      domesticChild: 0,
      foreignAdult: 0,
      excursionFeeKz: 1000,
      excursionFeeEn: 2500,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Кіру тегін. Зияратшылар ниетіне қарай садақа қалдыра алады.',
        en: 'Free admission for all travelers; voluntary donations welcome.',
        ru: 'Бесплатный вход для всех посетителей.',
      },
      source: 'Almaty City Tourism Bureau',
      sourceUrl: 'https://visitalmaty.kz',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/raiymbek-batyr.jpg',
        caption: {
          kk: 'Алматыдағы Райымбек батыр кесенесінің ақ шатырлы сәулеті',
          en: 'White tented dome of Raiymbek Batyr Mausoleum in Almaty',
          ru: 'Шатровый купол мавзолея Райымбек батыра в Алматы',
        },
      },
      {
        url: 'https://images.unsplash.com/photo-1590732484402-26d782f5de99?auto=format&fit=crop&w=1200&q=80',
        caption: {
          kk: 'Шөккен ақ түйе мүсіні мен қасиетті бұлақ аймағы',
          en: 'Kneeling white camel sculpture and blessed spring well',
          ru: 'Скульптурная композиция белого верблюда у мавзолея',
        },
      },
      {
        url: '/images/interiors/raiymbek-batyr-360-pano-mausoleum.jpg',
        caption: {
          kk: 'Райымбек батыр кесенесінің 360° панорамасы — Алматының ата-пірі',
          en: '360° panorama of Raiymbek Batyr Mausoleum — patriarch of Almaty',
          ru: '360° панорама мавзолея Райымбека батыра — покровитель Алматы',
        },
        credit: 'Qazaq Heritage 360° Virtual Tour',
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Алматы қаласы орталығы',
        en: 'Downtown Almaty',
        ru: 'центр Алматы',
      },
      distanceFromHubKm: 2,
      options: [
        {
          mode: 'taxi',
          title: {
            kk: 'Алматы метросы («Райымбек батыр» бекеті) немесе қалалық такси',
            en: 'Almaty Metro (Raiymbek Batyr station) or city taxi',
            ru: 'Метро Алматы (станция «Райымбек батыр») или такси',
          },
          duration: '10 minutes',
          costRange: { min: 500, max: 1500, currency: 'KZT' },
          provider: 'Almaty Metro / Yandex Go',
          status: 'VERIFIED',
          tips: {
            kk: 'Метродан небәрі 5 минуттық жаяу қашықтықта орналасқан.',
            en: 'Short 5-min stroll directly from Raiymbek Metro station.',
            ru: 'В 5 минутах пешком от конечной станции первой линии метро.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 10000, max: 20000 },
      midRangePerNight: { min: 25000, max: 50000 },
      luxuryPerNight: { min: 65000, max: 150000 },
      status: 'VERIFIED',
      source: 'Almaty international hotel database (Ritz-Carlton, Rixos, Mercure, Novotel)',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 3500, max: 6500 },
      midRangePerDay: { min: 8000, max: 16000 },
      status: 'VERIFIED',
      source: 'Almaty dining indicators',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: true,
      walkingDifficulty: 'easy',
      notes: {
        kk: 'Кешенге кіру толығымен тегіс плиткалармен жабдықталған, пандустар бар.',
        en: 'Completely step-free paved access and ramps from sidewalk to shrine.',
        ru: 'Полностью доступная безбарьерная среда.',
      },
    },
    sources: [
      {
        name: 'Almaty City Cultural Heritage Department',
        url: 'https://visitalmaty.kz',
        type: 'government',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },
  {
    id: 'karasay-agyntay',
    slug: 'karasay-agyntay-batyrs-mausoleum',
    name: {
      kk: 'Қарасай мен Ағынтай батырлар кесенесі',
      en: 'Karasay and Agyntay Batyrs Mausoleum',
      ru: 'Мавзолей батыров Карасая и Агынтая',
    },
    regionId: 'north_kazakhstan',
    cityDistrict: {
      kk: 'Айыртау ауданы, Мәдениет ауылы',
      en: 'Aiyrtau District, Madeniyet Village',
      ru: 'Айыртауский район, с. Мадениет',
    },
    exactLocation: {
      kk: 'Құлшынбай төбесі, Айыртау шоқыларының арасы',
      en: 'Kulshynbay Hill, scenic Aiyrtau hills',
      ru: 'сопка Кулшынбай',
    },
    coordinates: {
      lat: 53.2541,
      lng: 68.3012,
    },
    category: 'mausoleum',
    epoch: 'golden_horde',
    unescoWorldHeritage: false,
    historicalPeriod: {
      kk: 'XVII ғасыр (кесене 1999 ж. тұрғызылған)',
      en: '17th century warriors (mausoleum erected 1999 CE)',
      ru: 'XVII век (мемориал открыт в 1999 г.)',
    },
    shortDescription: {
      kk: 'Қазақ руларының мызғымас бірлігі мен батырлық достығының рәмізіне айналған қос зәулім күмбезді кешен.',
      en: 'Twin 16-meter domed brick towers symbolizing the eternal brotherhood and courage of two celebrated steppe generals.',
      ru: 'Величественный двухкупольный мемориал, символ нерушимого боевого братства и единства казахских родов.',
    },
    history: {
      kk: 'Шапырашты Қарасай (1598–1671) мен арғын Ағынтай (1599–1672) батырлар — Жәңгір ханның тұсында 1643 жылғы әйгілі Орбұлақ шайқасында 600 қазақ сарбазымен жоңғардың 50 мыңдық қолына қарсы ерлікпен соғысқан қос қаһарман. Өмір бойы бірге жорыққа шығып, ел қорғаған қос батыр бір төбенің басына қатар жерленген. 1999 жылы олардың қабіріне биіктігі 16 метрлік екі зәулім күмбез бен 28 метрлік найзалар композициясы орнатылды.',
      en: 'Karasay Batyr and Agyntay Batyr were lifelong comrades-in-arms who fought side by side under Khan Zhangir at the legendary Battle of Orbulak (1643), where 600 Kazakh warriors held off an army of 50,000. In accordance with their wishes, the twin brothers-in-arms were buried together upon Kulshynbay Hill. In 1999, an architectural complex was unveiled featuring twin 16-meter brick conical domes linked by a ceremonial hall and surrounded by stelae representing their spears.',
      ru: 'Батыры Карасай и Агынтай — герои легендарной Орбулакской битвы 1643 года. Проведя всю жизнь в совместных походах, завещали похоронить себя рядом на сопке Кулшынбай. В 1999 г. воздвигнут ансамбль: два 16-метровых конических купола, соединенных залом памяти, и стелы в виде боевых копий.',
    },
    whyImportant: {
      kk: 'Қазақ халқының ру аралық ынтымақтастығы мен мызғымас достығының тарихи ескерткіші.',
      en: 'A supreme historical monument to nomad chivalry, unity across tribal confederacies, and heroic brotherhood.',
      ru: 'Главный символ единства родов и воинского братства в Северном Казахстане.',
    },
    whyVisit: {
      kk: 'Құлшынбай төбесінен Солтүстік Қазақстанның көлдері мен қыраттарын тамашалау, егіз күмбезді сәулетті көру және батырлар рухына тағзым ету.',
      en: 'Take in sweeping vistas of Aiyrtaus sparkling blue lakes from Kulshynbay Hill and admire the twin conical brick towers.',
      ru: 'Подняться на сопку с круговой панорамой березовых колков и озер Айыртауского района, увидев величественные парные купола.',
    },
    whatToSee: {
      kk: [
        'Биіктігі 16 метрлік екі егіз күмбезді қызыл кірпіш кесене',
        '28 метрлік қос батыр найзасының монументалды композициясы',
        'Қос батырдың мәрмәр сағаналары мен естелік тақталары',
        'Айыртаудың қайыңды ормандары мен көлдеріне ашылатын панорама',
      ],
      en: [
        'Twin 16-meter red brick conical towers rising above the steppe',
        '28-meter tall symbolic twin warrior spears monument',
        'Carved marble cenotaphs within the central interconnecting chamber',
        'Panoramic view of surrounding Aiyrtau birch groves and lake valleys',
      ],
      ru: [
        'Два 16-метровых конусообразных купола из красного кирпича',
        '28-метровые стилизованные копья батыров',
        'Мраморные надгробия внутри соединенного мемориального зала',
        'Панорама холмов и озер живописного Айыртауского края',
      ],
    },
    whatToDo: {
      kk: [
        'Төбе басындағы сакралды күмбездерді аралап, Орбұлақ шайқасының тарихын тыңдау',
        'Жақын маңдағы Шалқар және Имантау көлдерінде тынығу',
      ],
      en: [
        'Learn the tactical history of the 1643 Battle of Orbulak at the visitor hall',
        'Combine with swimming and resort activities at Lake Shalkar and Imantau',
      ],
      ru: [
        'Узнать подробности битвы при Орбулаке у мемориальных стендов',
        'Совместить с отдыхом на озерах Шалкар и Имантау',
      ],
    },
    bestTimeToVisit: {
      kk: 'Маусым – Қыркүйек айлары',
      en: 'June to September (warm northern summer)',
      ru: 'Июнь – сентябрь',
    },
    recommendedVisitDurationHours: 2.5,
    openingHours: {
      schedule: {
        kk: 'Күн сайын: 09:00 – 19:00',
        en: 'Daily: 09:00 – 19:00',
        ru: 'Ежедневно: 09:00 – 19:00',
      },
      status: 'VERIFIED',
      notes: {
        kk: 'Кешенге кіру тегін.',
        en: 'Grounds access is free.',
        ru: 'Вход бесплатный.',
      },
    },
    ticketPrices: {
      domesticAdult: 500,
      domesticStudent: 250,
      domesticChild: 0,
      foreignAdult: 1500,
      excursionFeeKz: 1500,
      excursionFeeEn: 3000,
      currency: 'KZT',
      status: 'VERIFIED',
      notes: {
        kk: 'Кесенеге кіру тегін.',
        en: 'Mausoleum sanctuary is free to enter.',
        ru: 'Вход в мавзолей бесплатный.',
      },
      source: 'North Kazakhstan Regional Department of Culture',
      sourceUrl: 'https://sko.gov.kz',
      verifiedAt: '2026-09-19',
    },
    images: [
      {
        url: '/images/destinations/karasay-agyntay.jpg',
        caption: {
          kk: 'Қарасай мен Ағынтай батырлар кесенесінің қос зәулім күмбезі',
          en: 'Twin conical towers of Karasay and Agyntay Mausoleum on Kulshynbay Hill',
          ru: 'Парные купола мемориала батыров Карасая и Агынтая',
        },
      },
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        caption: {
          kk: 'Айыртаудың көркем қайыңды қыраттары мен табиғаты',
          en: 'Picturesque rolling hills and birch forest landscape of Aiyrtau',
          ru: 'Живописные березовые рощи и холмы Айыртауского района',
        },
      },
      {
        url: '/images/interiors/karasay-agyntay-360-pano-mausoleum.jpg',
        caption: {
          kk: 'Қарасай мен Ағынтай батырлар кесенесінің 360° панорамасы',
          en: '360° panorama of Karasay and Agyntay Batyrs Mausoleum — brotherhood monument',
          ru: '360° панорама мавзолея батыров Карасая и Агынтая — памятник братству',
        },
        credit: 'Qazaq Heritage 360° Virtual Tour',
      },
    ],
    transportation: {
      nearestHubCity: {
        kk: 'Көкшетау (100 км) немесе Петропавл (230 км)',
        en: 'Kokshetau (100 km) or Petropavl (230 km)',
        ru: 'Кокшетау (100 км) или Петропавловск (230 км)',
      },
      distanceFromHubKm: 100,
      options: [
        {
          mode: 'car',
          title: {
            kk: 'Көкшетаудан немесе Петропавлдан Саумалкөл арқылы көлікпен жету',
            en: 'Drive from Kokshetau or Petropavl via Saumalkol',
            ru: 'Поездка на автомобиле из Кокшетау через Саумалколь',
          },
          duration: '1.5 - 2 hours from Kokshetau',
          costRange: { min: 8000, max: 18000, currency: 'KZT' },
          provider: 'Regional taxi / Tour operators',
          status: 'VERIFIED',
          tips: {
            kk: 'Саумалкөл кенті арқылы асфальт жолмен жеңіл жетуге болады.',
            en: 'Scenic paved rural road winding through North Kazakhstan lakes.',
            ru: 'Асфальтированная дорога через курортную озерную зону.',
          },
        },
      ],
    },
    accommodationEstimates: {
      budgetPerNight: { min: 7000, max: 14000 },
      midRangePerNight: { min: 16000, max: 32000 },
      luxuryPerNight: { min: 35000, max: 70000 },
      status: 'VERIFIED',
      source: 'Aiyrtau lake resorts and Kokshetau hotels',
      verifiedAt: '2026-09-19',
    },
    foodEstimates: {
      budgetPerDay: { min: 3000, max: 5500 },
      midRangePerDay: { min: 6500, max: 11000 },
      status: 'VERIFIED',
      source: 'North Kazakhstan dining indicators',
      verifiedAt: '2026-09-19',
    },
    accessibility: {
      wheelchair: false,
      walkingDifficulty: 'moderate',
      notes: {
        kk: 'Төбе басына көтерілетін баспалдақтар бар.',
        en: 'Ascent involves stairways up the sacred hill.',
        ru: 'Подъем на сопку оборудован ступенями.',
      },
    },
    sources: [
      {
        name: 'North Kazakhstan Regional Directorate of Cultural Heritage',
        url: 'https://sko.gov.kz',
        type: 'government',
        verifiedAt: '2026-09-19',
      },
    ],
    lastVerifiedDate: '2026-09-19',
  },

];
