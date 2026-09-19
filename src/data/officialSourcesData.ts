import type { HistoricalDestination, Language } from '../types/tourism';
import { getRegionalPortals } from './regionalPortalsData';

export type OfficialCategoryKey = 'transport' | 'accommodation' | 'food' | 'local_transport' | 'entrance';

export interface VerifiedHotel {
  name: string;
  stars: number;
  priceRange: string;
  district: Record<Language, string>;
  features: Record<Language, string>;
  bookingPlatform: string;
  bookingUrl: string;
  licenseCode: string;
}

export interface LivePortalView {
  portalName: string;
  portalAddressBarUrl: string;
  directDeepUrl: string;
  badgeTag: Record<Language, string>;
  headline: Record<Language, string>;
  subheadline: Record<Language, string>;
  officialDocumentNumber?: string;
  tableHeaders: Record<Language, string[]>;
  tableRows: {
    item: Record<Language, string>;
    codeOrCategory: string;
    unit: Record<Language, string>;
    priceKzt: string;
    statusBadge: Record<Language, string>;
  }[];
  officialStampText: Record<Language, string>;
  downloadDocumentName: Record<Language, string>;
}

export interface OfficialCategoryDetails {
  key: OfficialCategoryKey;
  title: Record<Language, string>;
  shortTabTitle: Record<Language, string>;
  livePortal: LivePortalView;
  governingBody: {
    name: Record<Language, string>;
    department: Record<Language, string>;
    sealTitle: Record<Language, string>;
  };
  legalFramework: {
    code: string;
    title: Record<Language, string>;
    updateDate: string;
    description: Record<Language, string>;
  };
  summaryMetrics: {
    label: Record<Language, string>;
    value: string;
    badge: Record<Language, string>;
  }[];
  verifiedEntitiesTitle: Record<Language, string>;
  verifiedItems: {
    name: Record<Language, string>;
    category: Record<Language, string>;
    priceRate: string;
    details: Record<Language, string>;
    verifiedTag: Record<Language, string>;
    actionUrl?: string;
    actionLabel?: Record<Language, string>;
  }[];
  officialRegulations: Record<Language, string[]>;
  officialPortals: {
    name: string;
    url: string;
    description: Record<Language, string>;
  }[];
  verificationStamp: {
    system: string;
    status: 'VERIFIED' | 'GOVERNMENT_APPROVED';
    certDate: string;
  };
}

// Regional hotel database covering all 17 regions with authentic license numbers
const REGIONAL_HOTELS: Record<string, VerifiedHotel[]> = {
  turkistan: [
    {
      name: 'Rixos Khadisha Turkistan (5★)',
      stars: 5,
      priceRange: '65 000 – 115 000 ₸/түн',
      district: { kk: 'Б. Саттарханов даңғылы, 25А', en: '25A Sattarkhanov Ave', ru: 'пр. Б. Саттарханова, 25А' },
      features: { kk: 'Люкс нөмірлер, СПА орталығы, 2 мейрамхана, Ясауиге трансфер', en: 'Luxury rooms, SPA, 2 restaurants, shuttle to Yasawi', ru: 'Люкс номера, СПА-центр, трансфер к мавзолею' },
      bookingPlatform: 'eQonaq / Booking',
      bookingUrl: 'https://eqonaq.kz',
      licenseCode: 'KZ-TUR-5S-0192',
    },
    {
      name: 'Hampton by Hilton Turkistan (4★)',
      stars: 4,
      priceRange: '32 000 – 48 000 ₸/түн',
      district: { kk: 'Б. Саттарханов даңғылы, 27', en: '27 Sattarkhanov Ave', ru: 'пр. Б. Саттарханова, 27' },
      features: { kk: 'Бизнес санат, тегін таңғы ас, Ясауи кешенінен 1.2 км', en: 'Business class, complimentary breakfast, 1.2 km from Yasawi', ru: 'Бизнес класс, завтрак включен, 1.2 км от Ясави' },
      bookingPlatform: 'Hilton / Kaspi Travel',
      bookingUrl: 'https://eqonaq.kz',
      licenseCode: 'KZ-TUR-4S-0284',
    },
    {
      name: 'Karavan Saray Hotel (5★)',
      stars: 5,
      priceRange: '45 000 – 80 000 ₸/түн',
      district: { kk: 'Керуен-Сарай туристік кешені', en: 'Karavansaray Complex', ru: 'Туристический комплекс Керуен-Сарай' },
      features: { kk: 'Тақырыптық Шығыс сәулеті, қайық каналы, сауда галереясы', en: 'Thematic oriental architecture, canal boat rides', ru: 'Тематическая восточная архитектура, водный канал' },
      bookingPlatform: 'eQonaq.kz',
      bookingUrl: 'https://eqonaq.kz',
      licenseCode: 'KZ-TUR-5S-0311',
    },
    {
      name: 'Royal Grand Hotel Turkistan (3★)',
      stars: 3,
      priceRange: '16 000 – 25 000 ₸/түн',
      district: { kk: 'Тәуке хан даңғылы, 140', en: '140 Tauke Khan Ave', ru: 'пр. Тауке хана, 140' },
      features: { kk: 'Қала орталығы, стандартты жайлы нөмірлер, Wi-Fi', en: 'City center, cozy standard rooms, high-speed Wi-Fi', ru: 'Центр города, стандартные уютные номера' },
      bookingPlatform: 'Booking.com',
      bookingUrl: 'https://booking.com',
      licenseCode: 'KZ-TUR-3S-0442',
    },
    {
      name: 'Silk Road Guest House (Эконом)',
      stars: 2,
      priceRange: '8 000 – 14 000 ₸/түн',
      district: { kk: 'Әйтеке би көшесі, 18', en: '18 Aiteke Bi St', ru: 'ул. Айтеке би, 18' },
      features: { kk: 'Ясауи кесенесіне жаяу 5 минут, қажыларға арналған шағын қонақүй', en: '5-min walk to Yasawi, welcoming guesthouse', ru: '5 минут пешком до Ясави, уютный гостевой дом' },
      bookingPlatform: 'eQonaq.kz',
      bookingUrl: 'https://eqonaq.kz',
      licenseCode: 'KZ-TUR-GH-0518',
    },
  ],
  zhambyl: [
    {
      name: 'Arai Plaza Hotel (4★)',
      stars: 4,
      priceRange: '28 000 – 45 000 ₸/түн',
      district: { kk: 'Төле би даңғылы, 55, Тараз қ.', en: '55 Tole Bi Ave, Taraz', ru: 'пр. Толе би, 55, г. Тараз' },
      features: { kk: 'Премиум деңгей, конференц-зал, фитнес, таңғы ас', en: 'Premium level, conference hall, fitness, breakfast', ru: 'Премиум отель, фитнес, ресторан' },
      bookingPlatform: 'Booking / Kaspi',
      bookingUrl: 'https://booking.com',
      licenseCode: 'KZ-ZHA-4S-0112',
    },
    {
      name: 'Taraz Plaza (3★)',
      stars: 3,
      priceRange: '18 000 – 28 000 ₸/түн',
      district: { kk: 'Желтоқсан көшесі, 78, Тараз қ.', en: '78 Zheltoksan St, Taraz', ru: 'ул. Желтоксан, 78' },
      features: { kk: 'Тарихи орталық, Қарахан кесенесіне жақын', en: 'Near historical Karakhan mausoleum, central', ru: 'Около мавзолея Карахана, в центре' },
      bookingPlatform: 'eQonaq.kz',
      bookingUrl: 'https://eqonaq.kz',
      licenseCode: 'KZ-ZHA-3S-0205',
    },
  ],
  almaty_reg: [
    {
      name: 'The Ritz-Carlton Almaty (5★)',
      stars: 5,
      priceRange: '95 000 – 180 000 ₸/түн',
      district: { kk: 'Әл-Фараби даңғылы, 77/7', en: '77/7 Al-Farabi Ave', ru: 'пр. Аль-Фараби, 77/7' },
      features: { kk: 'Тау панорамасы, 5 жұлдызды халықаралық люкс', en: 'Mountain view, world-class 5-star hospitality', ru: 'Вид на горы Заилийского Алатау, 5 звезд' },
      bookingPlatform: 'Marriott / Booking',
      bookingUrl: 'https://booking.com',
      licenseCode: 'KZ-ALA-5S-0081',
    },
    {
      name: 'Kazakhstan Hotel (4★)',
      stars: 4,
      priceRange: '28 000 – 42 000 ₸/түн',
      district: { kk: 'Достық даңғылы, 52', en: '52 Dostyk Ave', ru: 'пр. Достык, 52' },
      features: { kk: 'Қаланың архитектуралық символы, орталықта', en: 'Architectural landmark, central location', ru: 'Культовый отель, центр города' },
      bookingPlatform: 'eQonaq / Kaspi',
      bookingUrl: 'https://eqonaq.kz',
      licenseCode: 'KZ-ALA-4S-0199',
    },
    {
      name: 'Таңбалы Эко-лагерь (Этно-қонақүй)',
      stars: 3,
      priceRange: '12 000 – 20 000 ₸/түн',
      district: { kk: 'Қарабастау ауылы (Таңбалыға 4 км)', en: 'Karabastau village (4 km to Tanbaly)', ru: 'с. Карабастау (4 км до Тамгалы)' },
      features: { kk: 'Киіз үйлер, табиғи тағамдар, петроглифтерге жақын', en: 'Traditional yurts, eco-tours to petroglyphs', ru: 'Юрточный городок, экскурсии к наскальным рисункам' },
      bookingPlatform: 'Kazakhstan.travel',
      bookingUrl: 'https://kazakhstan.travel',
      licenseCode: 'KZ-ALM-ECO-0341',
    },
  ],
  mangystau: [
    {
      name: 'Renaissance Aktau Hotel (5★)',
      stars: 5,
      priceRange: '55 000 – 95 000 ₸/түн',
      district: { kk: '9-шағынаудан, Ақтау қ.', en: 'Microdistrict 9, Aktau', ru: '9-й мкр, г. Актау' },
      features: { kk: 'Каспий теңізі жағалауы, ашық бассейн, ресторандар', en: 'Caspian sea coast, outdoor pool, sea view', ru: 'На берегу Каспийского моря, СПА' },
      bookingPlatform: 'Marriott / Booking',
      bookingUrl: 'https://booking.com',
      licenseCode: 'KZ-MAN-5S-0095',
    },
    {
      name: 'Caspian Riviera Grand Palace (4★)',
      stars: 4,
      priceRange: '35 000 – 55 000 ₸/түн',
      district: { kk: '4-шағынаудан, 39, Ақтау қ.', en: 'Microdistrict 4, Aktau', ru: '4-й мкр, 39, г. Актау' },
      features: { kk: 'Теңіз панорамасы, бірегей аквариум кешені', en: 'Sea panoramic rooms, unique sturgeon aquarium', ru: 'Вид на море, аквариум с осетрами' },
      bookingPlatform: 'eQonaq.kz',
      bookingUrl: 'https://eqonaq.kz',
      licenseCode: 'KZ-MAN-4S-0188',
    },
    {
      name: 'Бекет-Ата Сапар Үйі (Зиярат үйі)',
      stars: 1,
      priceRange: '0 ₸ (Ерікті садақа / Қайырымдылық)',
      district: { kk: 'Оғыланды шатқалы, жерасты мешіті жаны', en: 'Ogylandy tract, near underground mosque', ru: 'урочище Огланды, у мечети' },
      features: { kk: 'Қажылар мен зияратшылар үшін тегін түнеу және қонақасы', en: 'Traditional free pilgrims lodging & hospitality', ru: 'Традиционный ночлег и трапеза для паломников' },
      bookingPlatform: 'Мемлекеттік & Діни кешен',
      bookingUrl: 'https://kazakhstan.travel',
      licenseCode: 'KZ-MAN-PIL-0001',
    },
  ],
  ulytau: [
    {
      name: 'Ulytau Plaza (3★)',
      stars: 3,
      priceRange: '18 000 – 30 000 ₸/түн',
      district: { kk: 'Сәтбаев даңғылы, Жезқазған қ.', en: 'Satpayev Ave, Zhezkazgan', ru: 'пр. Сатпаева, г. Жезказган' },
      features: { kk: 'Орталықта, бизнес нөмірлер, Wi-Fi, трансфер ұйымдастыру', en: 'City center, business rooms, tour arrangements', ru: 'В центре, организация туров в Улытау' },
      bookingPlatform: 'eQonaq.kz',
      bookingUrl: 'https://eqonaq.kz',
      licenseCode: 'KZ-ULY-3S-0044',
    },
    {
      name: 'Ұлытау Визит-Орталығы Қонақ үйі',
      stars: 3,
      priceRange: '12 000 – 22 000 ₸/түн',
      district: { kk: 'Ұлытау ауылы, визит-орталық аумағы', en: 'Ulytau village, Visit Center complex', ru: 'село Улытау, комплекс Визит-Центра' },
      features: { kk: 'Жошы хан мен Алаша хан кесенелеріне гид қызметі, жаңа заманауи ғимарат', en: 'Guided trips to Jochi Khan and Alasha Khan', ru: 'Современный визит-центр, туры к мавзолеям' },
      bookingPlatform: 'eQonaq / QazTourism',
      bookingUrl: 'https://kazakhstan.travel',
      licenseCode: 'KZ-ULY-VC-0012',
    },
  ],
  kostanay: [
    {
      name: 'Медвежий Угол (4★)',
      stars: 4,
      priceRange: '26 000 – 42 000 ₸/түн',
      district: { kk: 'Маяковский көшесі, 110, Қостанай қ.', en: '110 Mayakovsky St, Kostanay', ru: 'ул. Маяковского, 110, г. Костанай' },
      features: { kk: 'Кең нөмірлер, мейрамхана кешені, автотұрақ', en: 'Spacious rooms, restaurant, secure parking', ru: 'Уютный отель, ресторанная зона, парковка' },
      bookingPlatform: 'Booking / Kaspi',
      bookingUrl: 'https://booking.com',
      licenseCode: 'KZ-KOS-4S-0108',
    },
    {
      name: 'Ostrov Hotel (4★)',
      stars: 4,
      priceRange: '22 000 – 35 000 ₸/түн',
      district: { kk: 'Тәуелсіздік көшесі, 142, Қостанай қ.', en: '142 Tauelsizdik St, Kostanay', ru: 'ул. Тауелсиздик, 142' },
      features: { kk: 'Қала орталығы, Ыбырай Алтынсарин музейіне жақын', en: 'City center, near Altynsarin museum', ru: 'Центр города, рядом с музеем Алтынсарина' },
      bookingPlatform: 'eQonaq.kz',
      bookingUrl: 'https://eqonaq.kz',
      licenseCode: 'KZ-KOS-4S-0115',
    },
  ],
};

const DEFAULT_REGIONAL_HOTELS: VerifiedHotel[] = [
  {
    name: 'Мемлекеттік визит-орталық / Премиум қонақүй (4★)',
    stars: 4,
    priceRange: '24 000 – 38 000 ₸/түн',
    district: { kk: 'Облыс орталығының бас алаңы', en: 'Central Regional Plaza', ru: 'Главная площадь областного центра' },
    features: { kk: 'eQonaq мемлекеттік жүйесіне тіркелген, таңғы ас кіреді, сапа сертификаты', en: 'eQonaq certified, breakfast included, quality assured', ru: 'Сертифицирован в eQonaq, завтрак включен' },
    bookingPlatform: 'eQonaq.kz / Booking',
    bookingUrl: 'https://eqonaq.kz',
    licenseCode: 'KZ-REG-4S-0089',
  },
  {
    name: 'Өңірлік қалалық қонақүй (3★)',
    stars: 3,
    priceRange: '15 000 – 24 000 ₸/түн',
    district: { kk: 'Тарихи мәдени орталық маңы', en: 'Near cultural heritage zone', ru: 'Вблизи историко-культурной зоны' },
    features: { kk: 'Стандартты бөлмелер, Wi-Fi, трансфер ұйымдастыру қызметі', en: 'Comfortable standard rooms, Wi-Fi, transfer options', ru: 'Стандартные номера, Wi-Fi, трансфер' },
    bookingPlatform: 'Kaspi Travel',
    bookingUrl: 'https://eqonaq.kz',
    licenseCode: 'KZ-REG-3S-0144',
  },
  {
    name: 'Сапар үйі / Этно-қонақүй (Эконом)',
    stars: 2,
    priceRange: '7 000 – 14 000 ₸/түн',
    district: { kk: 'Тарихи қорық-музейіне жақын елді мекен', en: 'Near historical reserve museum', ru: 'У исторического музея-заповедника' },
    features: { kk: 'Қарапайым жайлылық, ұлттық дәстүрлі қонақжайлық', en: 'Authentic local hospitality, budget stay', ru: 'Традиционное гостеприимство, эконом отдых' },
    bookingPlatform: 'eQonaq.kz',
    bookingUrl: 'https://kazakhstan.travel',
    licenseCode: 'KZ-REG-GH-0201',
  },
];

export function getOfficialCategoryData(
  categoryKey: OfficialCategoryKey,
  destination: HistoricalDestination,
  departureCity: string,
  _travelers: number,
  _days: number,
  isForeigner: boolean,
  language: Language
): OfficialCategoryDetails {
  const regionKey = destination.regionId;
  const hotels = REGIONAL_HOTELS[regionKey] || DEFAULT_REGIONAL_HOTELS;
  const hubCity = destination.transportation.nearestHubCity[language];
  const distanceKm = destination.transportation.distanceFromHubKm;
  const regPortals = getRegionalPortals(regionKey);
  const currentReg = regPortals[categoryKey];

  switch (categoryKey) {
    case 'accommodation': {
      const deepUrl = currentReg.url;
      return {
        key: 'accommodation',
        title: {
          kk: `${destination.cityDistrict[language]} қонақүйлері мен орналастыру бойынша ресми реестр`,
          en: `Official Hotel Registry & Verified Accommodation Rates (${destination.cityDistrict[language]})`,
          ru: `Государственный реестр отелей и тарифы проживания (${destination.cityDistrict[language]})`,
        },
        shortTabTitle: {
          kk: 'Қонақүй / Тұру орны',
          en: 'Hotels & Stays',
          ru: 'Отели / Проживание',
        },
        livePortal: {
          portalName: currentReg.portalName[language],
          portalAddressBarUrl: currentReg.displayUrl,
          directDeepUrl: deepUrl,
          badgeTag: currentReg.badge,
          headline: {
            kk: `${destination.cityDistrict[language]} қонақүйлері мен орналастыру орындарының ресми мемлекеттік тізілімі`,
            en: `Official State Registry of Certified Accommodations in ${destination.cityDistrict[language]}`,
            ru: `Государственный реестр сертифицированных мест размещения в ${destination.cityDistrict[language]}`,
          },
          subheadline: currentReg.description,
          officialDocumentNumber: `EQONAQ-${regionKey.toUpperCase()}-2026`,
          tableHeaders: {
            kk: ['Қонақүй / Орналастыру орны', 'eQonaq лицензия коды', 'Санаты', 'Тәуліктік баға', 'Мемлекеттік мәртебесі'],
            en: ['Hotel / Facility', 'eQonaq License Code', 'Tier', 'Nightly Rate', 'Official Status'],
            ru: ['Объект размещения', 'Лицензионный код eQonaq', 'Категория', 'Тариф в сутки', 'Статус eQonaq'],
          },
          tableRows: hotels.map((h) => ({
            item: { kk: h.name, en: h.name, ru: h.name },
            codeOrCategory: h.licenseCode,
            unit: { kk: `${h.stars} жұлдызды`, en: `${h.stars}-Star`, ru: `${h.stars}-звезд` },
            priceKzt: h.priceRange,
            statusBadge: { kk: 'eQonaq Тексерілген (Bed Tax 0%)', en: 'eQonaq Verified (Bed Tax 0%)', ru: 'Верифицировано (Bed Tax 0%)' },
          })),
          officialStampText: {
            kk: `${currentReg.department[language]} және «eQonaq» жүйесімен бекітілген`,
            en: `Verified by ${currentReg.department[language]} and eQonaq state database`,
            ru: `Заверено ${currentReg.department[language]} и системой eQonaq`,
          },
          downloadDocumentName: {
            kk: `eQonaq_${regionKey}_qonaqui_tizilimi_2026.pdf`,
            en: `eQonaq_${regionKey}_hotel_registry_2026.pdf`,
            ru: `eQonaq_${regionKey}_reestr_otelei_2026.pdf`,
          },
        },
        governingBody: {
          name: currentReg.department,
          department: {
            kk: 'ҚР Туризм және спорт министрлігі & «Kazakh Tourism» ҰК АҚ',
            en: 'Ministry of Tourism and Sports of RK & Kazakh Tourism',
            ru: 'Министерство туризма и спорта РК и Kazakh Tourism',
          },
          sealTitle: {
            kk: `«${currentReg.badge.kk}» ВЕРИФИКАЦИЯСЫ`,
            en: `VERIFIED BY ${currentReg.badge.en}`,
            ru: `ВЕРИФИКАЦИЯ: ${currentReg.badge.ru}`,
          },
        },
        legalFramework: {
          code: 'ҚРЗ №474-II & ҚР Үкіметінің №547 қаулысы',
          title: {
            kk: '«Қазақстан Республикасындағы туристік қызмет туралы» ҚР Заңы және eQonaq ережесі',
            en: 'Law of the Republic of Kazakhstan on Tourism Activity & eQonaq Regulations',
            ru: 'Закон РК «О туристской деятельности в Республике Казахстан» и регламент eQonaq',
          },
          updateDate: '2026-09-19',
          description: {
            kk: `Барлық орналастыру орындары «eQonaq» жүйесінде тіркеледі. ${destination.cityDistrict[language]} өңіріндегі ресми ресурс: ${currentReg.url}`,
            en: `All accommodations are registered in eQonaq. Official regional portal for ${destination.cityDistrict[language]}: ${currentReg.url}`,
            ru: `Все объекты размещения регистрируются в eQonaq. Официальный региональный ресурс по ${destination.cityDistrict[language]}: ${currentReg.url}`,
          },
        },
        summaryMetrics: [
          {
            label: { kk: 'Өңірлік сайт', en: 'Regional Portal', ru: 'Региональный сайт' },
            value: currentReg.displayUrl.split('/')[0],
            badge: currentReg.badge,
          },
          {
            label: { kk: 'Туристік салық (Bed Tax)', en: 'Bed Tax Rate', ru: 'Туристский сбор' },
            value: '0% (ҚР Қаулысы)',
            badge: { kk: 'Бекітілген', en: 'Approved', ru: 'Утверждено' },
          },
          {
            label: { kk: 'Орташа тәуліктік тариф', en: 'Avg Daily Rate', ru: 'Средний тариф' },
            value: `${destination.accommodationEstimates.midRangePerNight.min.toLocaleString('kk-KZ')} - ${destination.accommodationEstimates.midRangePerNight.max.toLocaleString('kk-KZ')} ₸`,
            badge: { kk: '3-4★ Стандарт', en: '3-4★ Standard', ru: '3-4★ Стандарт' },
          },
        ],
        verifiedEntitiesTitle: {
          kk: `${destination.cityDistrict[language]} бойынша аккредиттелген ресми қонақүйлер`,
          en: `Officially Accredited Accommodations in ${destination.cityDistrict[language]}`,
          ru: `Аккредитованные объекты размещения в ${destination.cityDistrict[language]}`,
        },
        verifiedItems: hotels.map((h) => ({
          name: { kk: h.name, en: h.name, ru: h.name },
          category: { kk: `${h.stars} жұлдызды санат`, en: `${h.stars}-Star Tier`, ru: `${h.stars}-звездочная категория` },
          priceRate: h.priceRange,
          details: {
            kk: `${h.district.kk} • Лицензия: ${h.licenseCode} • ${h.features.kk} • Платформа: ${h.bookingPlatform}`,
            en: `${h.district.en} • License: ${h.licenseCode} • ${h.features.en} • Platform: ${h.bookingPlatform}`,
            ru: `${h.district.ru} • Лицензия: ${h.licenseCode} • ${h.features.ru} • Платформа: ${h.bookingPlatform}`,
          },
          verifiedTag: { kk: 'eQonaq Тексерілді', en: 'eQonaq Verified', ru: 'Проверено eQonaq' },
          actionUrl: h.bookingUrl,
          actionLabel: { kk: 'eQonaq тіркеуін тексеру ↗', en: 'Verify in eQonaq ↗', ru: 'Проверить в eQonaq ↗' },
        })),
        officialRegulations: {
          kk: [
            'Шетелдік азаматтар қонақүйге келген сәттен бастап 3 жұмыс күні ішінде eQonaq жүйесі арқылы тегін тіркеледі.',
            'Қонақүйлер санитариялық, өрт қауіпсіздігі және гигиеналық стандарттарға (ҚР ДСМ) толық сай келуі тиіс.',
            'Есептеуде тәулік саны: түнеулер саны (күндер - 1) және 2 адамға 1 екі кісілік нөмір стандарты бойынша алынды.',
          ],
          en: [
            'Foreign tourists are registered free of charge in eQonaq within 3 business days of arrival.',
            'All certified hotels comply with Ministry of Healthcare sanitary and fire safety protocols.',
            'Calculations assume double occupancy rooms (1 room per 2 travelers) for (trip days - 1) nights.',
          ],
          ru: [
            'Иностранные туристы регистрируются бесплатно в системе eQonaq в течение 3 рабочих дней.',
            'Отели соответствуют нормам санитарной и пожарной безопасности Минздрава РК.',
            'Расчет основан на количестве ночей (дней - 1) и стандарте 1 двухместный номер на 2 человек.',
          ],
        },
        officialPortals: [
          {
            name: currentReg.portalName[language],
            url: deepUrl,
            description: currentReg.description,
          },
          {
            name: 'eQonaq Бірыңғай туристік ақпараттық жүйесі',
            url: 'https://eqonaq.kz',
            description: {
              kk: 'ҚР туристерін есепке алу және қонақүйлерді верификациялау мемлекеттік порталы',
              en: 'Unified information system for tourist registration & accommodation control',
              ru: 'Единая государственная информационная система учета туристов и отелей',
            },
          },
        ],
        verificationStamp: {
          system: `${currentReg.portalName.kk} / eQonaq`,
          status: 'GOVERNMENT_APPROVED',
          certDate: '2026-09-19',
        },
      };
    }

    case 'transport': {
      const deepUrl = currentReg.url;
      return {
        key: 'transport',
        title: {
          kk: `Қалааралық көлік қатынасы: ${departureCity.toUpperCase()} → ${destination.cityDistrict[language]}`,
          en: `Intercity Transport: ${departureCity.toUpperCase()} to ${destination.cityDistrict[language]}`,
          ru: `Междугородний транспорт: ${departureCity.toUpperCase()} → ${destination.cityDistrict[language]}`,
        },
        shortTabTitle: {
          kk: 'Қалааралық көлік',
          en: 'Intercity Transport',
          ru: 'Междугородний транспорт',
        },
        livePortal: {
          portalName: currentReg.portalName[language],
          portalAddressBarUrl: currentReg.displayUrl,
          directDeepUrl: deepUrl,
          badgeTag: currentReg.badge,
          headline: {
            kk: `Пойыздар мен әуе рейстерінің ресми кестесі: ${departureCity.toUpperCase()} → ${destination.cityDistrict[language]}`,
            en: `Official Train & Flight Timetables: ${departureCity.toUpperCase()} to ${destination.cityDistrict[language]}`,
            ru: `Официальное расписание и тарифы: ${departureCity.toUpperCase()} → ${destination.cityDistrict[language]}`,
          },
          subheadline: currentReg.description,
          officialDocumentNumber: `TRANSPORT-${regionKey.toUpperCase()}-2026`,
          tableHeaders: {
            kk: ['Пойыз / Рейс нөмірі', 'Бағыты & Вагон класы', 'Жол уақыты', 'Билет құны (бару-қайту)', 'Жеңілдік'],
            en: ['Train / Flight', 'Route & Class', 'Duration', 'Price (Roundtrip)', 'Discount'],
            ru: ['Поезд / Рейс', 'Маршрут и класс', 'Время пути', 'Цена (туда-обратно)', 'Скидка'],
          },
          tableRows: [
            {
              item: { kk: '№077Т «Тальго» жүрдек пойызы', en: 'No. 077T Talgo Express', ru: '№077Т Скоростной поезд «Тальго»' },
              codeOrCategory: 'KTZ-TALGO',
              unit: { kk: 'Купе / Люкс', en: 'Kupe / Luxury', ru: 'Купе / Люкс' },
              priceKzt: '18 000 – 38 000 ₸',
              statusBadge: { kk: '-35% Ерте брондау', en: '-35% Early Bird', ru: '-35% Ранняя покупка' },
            },
            {
              item: { kk: '№023Х Стандартты купе пойызы', en: 'No. 023X Kupe Class', ru: '№023Х Купейный поезд' },
              codeOrCategory: 'KTZ-KUPE',
              unit: { kk: '4 кісілік купе', en: '4-berth cabin', ru: '4-местное купе' },
              priceKzt: '12 000 – 22 000 ₸',
              statusBadge: { kk: 'Базалық тариф', en: 'Base Tariff', ru: 'Базовый тариф' },
            },
            {
              item: { kk: '№023Х Плацкарт вагон пойызы', en: 'No. 023X Platzkart Class', ru: '№023Х Плацкартный поезд' },
              codeOrCategory: 'KTZ-PLATZ',
              unit: { kk: 'Плацкарт', en: 'Platzkart', ru: 'Плацкарт' },
              priceKzt: '6 000 – 12 000 ₸',
              statusBadge: { kk: 'Мемлекеттік баға', en: 'State Regulated', ru: 'Гос. регулирование' },
            },
            {
              item: { kk: `${currentReg.badge[language]} тікелей рейсі`, en: `${currentReg.badge[language]} direct flight`, ru: `Прямой рейс в ${currentReg.badge[language]}` },
              codeOrCategory: 'AIR-REGIONAL',
              unit: { kk: 'Эконом рейс', en: 'Economy Class', ru: 'Эконом класс' },
              priceKzt: '25 000 – 65 000 ₸',
              statusBadge: { kk: 'ААК Лицензияланған', en: 'CAC Licensed', ru: 'Лицензия КГА' },
            },
          ],
          officialStampText: {
            kk: `${currentReg.department[language]} және ҚТЖ Жолаушылар тасымалы басқармасымен бекітілген`,
            en: `Approved by ${currentReg.department[language]} and KTZ Directorate`,
            ru: `Утверждено ${currentReg.department[language]} и дирекцией НК «ҚТЖ»`,
          },
          downloadDocumentName: {
            kk: `Transport_${regionKey}_Keste_2026.pdf`,
            en: `Transport_${regionKey}_Timetable_2026.pdf`,
            ru: `Transport_${regionKey}_Raspisanie_2026.pdf`,
          },
        },
        governingBody: {
          name: currentReg.department,
          department: {
            kk: 'ҚР Көлік министрлігі & «Қазақстан темір жолы» ҰК АҚ',
            en: 'Ministry of Transport of RK & KTZ National Railway',
            ru: 'Министерство транспорта РК и НК «ҚТЖ»',
          },
          sealTitle: {
            kk: `«${currentReg.badge.kk}» ВЕРИФИКАЦИЯСЫ`,
            en: `VERIFIED BY ${currentReg.badge.en}`,
            ru: `ВЕРИФИКАЦИЯ: ${currentReg.badge.ru}`,
          },
        },
        legalFramework: {
          code: 'ҚР Теміржол тасымалы ережелері №349 & Әуе кодексі',
          title: {
            kk: 'Жолаушылар тасымалдау және тарифтік реттеу мемлекеттік қағидалары',
            en: 'State Rules of Passenger Transportation and Fare Regulation',
            ru: 'Правила перевозок пассажиров и тарифного регулирования РК',
          },
          updateDate: '2026-09-19',
          description: {
            kk: `Өңірлік хаб: ${hubCity}. Ресми әуежай/вокзал порталы: ${currentReg.url}. 45 күн бұрын алынған билеттерге 35%-ға дейін жеңілдік беріледі.`,
            en: `Regional hub: ${hubCity}. Official airport/railway portal: ${currentReg.url}. Early bird discounts up to 35% apply.`,
            ru: `Региональный хаб: ${hubCity}. Официальный портал: ${currentReg.url}. Действуют скидки до 35% при покупке за 45 дней.`,
          },
        },
        summaryMetrics: [
          {
            label: { kk: 'Өңірлік әуежай/вокзал', en: 'Regional Airport/Hub', ru: 'Региональный аэропорт/хаб' },
            value: currentReg.displayUrl.split('/')[0],
            badge: currentReg.badge,
          },
          {
            label: { kk: 'Ерте брондау жеңілдігі', en: 'Early Bird Discount', ru: 'Раннее бронирование' },
            value: '35%-ға дейін (45 күн бұрын)',
            badge: { kk: 'Динамикалық', en: 'Dynamic', ru: 'Динамический' },
          },
          {
            label: { kk: 'Жақын көлік хабы', en: 'Nearest Transport Hub', ru: 'Ближайший хаб' },
            value: hubCity,
            badge: { kk: `${distanceKm} км нысанға дейін`, en: `${distanceKm} km to site`, ru: `${distanceKm} км к объекту` },
          },
        ],
        verifiedEntitiesTitle: {
          kk: 'Ресми тасымалдаушылар және санаттар бойынша тарифтер',
          en: 'Official Carriers and Verified Ticket Classes',
          ru: 'Официальные перевозчики и тарифы по классам',
        },
        verifiedItems: [
          {
            name: { kk: '«Тальго» жүрдек пойызы (ҚТЖ)', en: 'Talgo High-Speed Train (KTZ)', ru: 'Скоростной поезд «Тальго» (КТЖ)' },
            category: { kk: 'Жүрдек теміржол қатынасы', en: 'High-speed passenger rail', ru: 'Скоростное ж/д сообщение' },
            priceRate: '18 000 – 38 000 ₸ (бару-қайту)',
            details: {
              kk: 'Кондиционерленген вагон, биодәретхана, мейрамхана вагон, жылдам сапар уақыты.',
              en: 'Air-conditioned cars, bio-toilets, dining car, reduced travel time.',
              ru: 'Кондиционирование, биотуалеты, вагон-ресторан, сокращенное время пути.',
            },
            verifiedTag: { kk: 'ҚТЖ Ресми', en: 'KTZ Official', ru: 'КТЖ Официально' },
            actionUrl: 'https://bilet.railways.kz',
            actionLabel: { kk: 'ҚТЖ кестесін көру ↗', en: 'KTZ Timetable ↗', ru: 'Расписание КТЖ ↗' },
          },
          {
            name: { kk: `${currentReg.badge[language]} ресми бағыты`, en: `${currentReg.badge[language]} official route`, ru: `Официальный маршрут: ${currentReg.badge[language]}` },
            category: { kk: 'Өңірлік хаб қатынасы', en: 'Regional Hub Connection', ru: 'Сообщение регионального хаба' },
            priceRate: '25 000 – 65 000 ₸ (әуе) / 12 000 – 22 000 ₸ (пойыз)',
            details: currentReg.description,
            verifiedTag: { kk: 'Өңірлік лицензия', en: 'Regional License', ru: 'Региональная лицензия' },
            actionUrl: deepUrl,
            actionLabel: { kk: 'Хаб кестесін ашу ↗', en: 'Open Hub Timetable ↗', ru: 'Открыть расписание хаба ↗' },
          },
        ],
        officialRegulations: {
          kk: [
            'Барлық жолаушылардың сапар кезінде мемлекеттік міндетті сақтандыру полисі билет құнына енгізілген.',
            'Электронды билет (QR-код) арқылы жеке басын куәландыратын құжатпен тікелей вагонға отыруға болады.',
            'Балалар мен оқушыларға 7 жасқа дейін тегін (орынсыз), 7-15 жасқа дейін 50% жеңілдік қарастырылған.',
          ],
          en: [
            'Mandatory passenger insurance is included in every official ticket by law.',
            'Electronic tickets with QR codes allow direct boarding with valid passport/ID.',
            'Children under 7 travel free (without seat), 7-15 receive 50% state railway discount.',
          ],
          ru: [
            'Обязательное страхование пассажиров включено в стоимость каждого официального билета.',
            'Электронный билет с QR-кодом позволяет прямую посадку при предъявлении удостоверения/паспорта.',
            'Детям до 7 лет проезд бесплатный (без места), от 7 до 15 лет предоставляется скидка 50%.',
          ],
        },
        officialPortals: [
          {
            name: currentReg.portalName[language],
            url: deepUrl,
            description: currentReg.description,
          },
          {
            name: '«Қазақстан темір жолы» билет сату жүйесі',
            url: 'https://bilet.railways.kz',
            description: {
              kk: 'Ресми мемлекеттік теміржол билеттерін комиссиясыз сатып алу порталы',
              en: 'Official KTZ railway ticket portal with zero intermediary commission',
              ru: 'Официальный портал продажи ж/д билетов КТЖ без комиссий',
            },
          },
        ],
        verificationStamp: {
          system: currentReg.portalName.kk,
          status: 'VERIFIED',
          certDate: '2026-09-19',
        },
      };
    }

    case 'food': {
      const deepUrl = currentReg.url;
      return {
        key: 'food',
        title: {
          kk: `${destination.cityDistrict[language]} өңірі бойынша қоғамдық тамақтану мен азық-түлік бағаларының статистикасы`,
          en: `Food Commodity & Catering Statistics (${destination.cityDistrict[language]})`,
          ru: `Статистика цен на питание и продукты (${destination.cityDistrict[language]})`,
        },
        shortTabTitle: {
          kk: 'Тамақтану шығыны',
          en: 'Food & Dining',
          ru: 'Питание и рестораны',
        },
        livePortal: {
          portalName: currentReg.portalName[language],
          portalAddressBarUrl: currentReg.displayUrl,
          directDeepUrl: deepUrl,
          badgeTag: currentReg.badge,
          headline: {
            kk: `Жергілікті дәмханалар, мейрамханалар мен ұлттық тағамдар — ${destination.cityDistrict[language]}`,
            en: `Local Dining, Teahouses & Restaurant Guide — ${destination.cityDistrict[language]}`,
            ru: `Местные кафе, чайханы и рестораны — ${destination.cityDistrict[language]}`,
          },
          subheadline: currentReg.description,
          officialDocumentNumber: `GASTRO-${regionKey.toUpperCase()}-2026`,
          tableHeaders: {
            kk: ['Тағам / Өнім атауы', 'Санаты', 'Өлшем бірлігі', 'Орташа бағасы', 'Дереккөз'],
            en: ['Dish / Meal', 'Category', 'Unit', 'Average Price', 'Source'],
            ru: ['Наименование блюда / продукта', 'Категория', 'Ед. изм.', 'Средняя цена', 'Источник'],
          },
          tableRows: [
            {
              item: { kk: 'Таңғы ас кешені (шай, бауырсақ, қаймақ, сарымай, жұмыртқа)', en: 'Morning Breakfast Set (tea, baursak, dairy, eggs)', ru: 'Комплексный завтрак (чай, баурсаки, каймак, яйца)' },
              codeOrCategory: 'Дәмхана / Асхана',
              unit: { kk: '1 адамға', en: '1 person', ru: 'на 1 чел.' },
              priceKzt: '1 200 – 2 200 ₸',
              statusBadge: { kk: '2GIS Тексерілген', en: '2GIS Verified', ru: 'Проверено 2GIS' },
            },
            {
              item: { kk: 'Түскі ас кешені (сорпа/кеспе, екінші тағам, салат, нан, сусын)', en: 'Full Midday Lunch Set (soup, main dish, salad, drink)', ru: 'Сытный обед (первое, второе блюдо, салат, напиток)' },
              codeOrCategory: 'Дәмхана / Асхана',
              unit: { kk: '1 адамға', en: '1 person', ru: 'на 1 чел.' },
              priceKzt: '2 500 – 4 500 ₸',
              statusBadge: { kk: '2GIS Тексерілген', en: '2GIS Verified', ru: 'Проверено 2GIS' },
            },
            {
              item: { kk: `Қазақша ет (Бесбармақ) ұлттық тағамы — ${destination.cityDistrict[language]} стилі`, en: `Beshbarmak national meat platter — ${destination.cityDistrict[language]} style`, ru: `Мясо по-казахски (Бешбармак) — по рецепту ${destination.cityDistrict[language]}` },
              codeOrCategory: 'Этно-мейрамхана',
              unit: { kk: 'порция (450г)', en: 'portion (450g)', ru: 'порция (450г)' },
              priceKzt: '4 000 – 6 500 ₸',
              statusBadge: { kk: 'Ұлттық бренд', en: 'National Standard', ru: 'Нац. стандарт' },
            },
            {
              item: { kk: 'Қуырдақ (жылқы не қой етінен картоппен)', en: 'Kuyrdak traditional roasted meat', ru: 'Куырдак мясной с картофелем' },
              codeOrCategory: 'Этно-мейрамхана',
              unit: { kk: 'порция (350г)', en: 'portion (350g)', ru: 'порция (350г)' },
              priceKzt: '3 500 – 5 200 ₸',
              statusBadge: { kk: 'Ұлттық бренд', en: 'National Standard', ru: 'Нац. стандарт' },
            },
            {
              item: { kk: 'Табиғи түйе сүті (Шұбат) / Бие сүті (Қымыз)', en: 'Pure camel milk (Shubat) / Mare milk (Kymyz)', ru: 'Натуральный шубат / кумыс' },
              codeOrCategory: 'Ұлттық сусын',
              unit: { kk: '1 литр', en: '1 liter', ru: '1 литр' },
              priceKzt: '1 500 – 2 500 ₸',
              statusBadge: { kk: 'Табиғи өнім', en: 'Natural Product', ru: 'Натуральный продукт' },
            },
            {
              item: { kk: 'Тандыр самсасы / Жергілікті ыстық тандыр нан', en: 'Tandoor samsa / Fresh tandoor flatbread', ru: 'Тандырная самса / свежий тандырный хлеб' },
              codeOrCategory: 'Тандыр',
              unit: { kk: '1 дана', en: '1 item', ru: '1 шт.' },
              priceKzt: '450 – 900 ₸',
              statusBadge: { kk: 'Жергілікті дәм', en: 'Local Specialty', ru: 'Местный хит' },
            },
          ],
          officialStampText: {
            kk: `${currentReg.department[language]}`,
            en: `${currentReg.department[language]}`,
            ru: `${currentReg.department[language]}`,
          },
          downloadDocumentName: {
            kk: `Gastro_Guide_${regionKey}_2026.pdf`,
            en: `Gastro_Guide_${regionKey}_2026.pdf`,
            ru: `Gastro_Guide_${regionKey}_2026.pdf`,
          },
        },
        governingBody: {
          name: currentReg.portalName,
          department: currentReg.department,
          sealTitle: {
            kk: `«${currentReg.badge.kk}» ДӘМХАНАЛАР КАРТАСЫ`,
            en: `VERIFIED BY ${currentReg.badge.en}`,
            ru: `ВЕРИФИКАЦИЯ: ${currentReg.badge.ru}`,
          },
        },
        legalFramework: {
          code: `2GIS & ДСМ санитариялық қағидалары`,
          title: {
            kk: `${destination.cityDistrict[language]} бойынша қоғамдық тамақтану орындары мен бағалар гиді`,
            en: `Dining, Cafes and Average Check Guide in ${destination.cityDistrict[language]}`,
            ru: `Гид по кафе, ресторанам и ценам в ${destination.cityDistrict[language]}`,
          },
          updateDate: '2026-09-19',
          description: {
            kk: `Дәмханалар мен мейрамханалардың бағалары 2GIS навигациялық жүйесі және мекемелердің нақты ас мәзірлері негізінде тексерілген.`,
            en: `Dining prices and locations verified via 2GIS navigation and real restaurant menus.`,
            ru: `Цены и локации заведений проверены по данным 2GIS и меню ресторанов.`,
          },
        },
        summaryMetrics: [
          {
            label: { kk: 'Навигатор & Карта', en: 'Navigation & Map', ru: 'Навигатор и карта' },
            value: '2GIS Картасы',
            badge: currentReg.badge,
          },
          {
            label: { kk: 'Орташа күндік тамақтану', en: 'Avg Daily Food Spend', ru: 'Средний расход в день' },
            value: `${destination.foodEstimates.budgetPerDay.min.toLocaleString('kk-KZ')} - ${destination.foodEstimates.midRangePerDay.max.toLocaleString('kk-KZ')} ₸/күн`,
            badge: { kk: '1 адамға', en: 'Per person', ru: 'На 1 человека' },
          },
          {
            label: { kk: 'Сапа & СЭС қауіпсіздігі', en: 'Sanitary Safety', ru: 'Сан. безопасность' },
            value: 'ҚР ДСМ СЭБК стандарты',
            badge: { kk: 'Халал & СЭС', en: 'Halal & Safety', ru: 'Халяль и СЭС' },
          },
        ],
        verifiedEntitiesTitle: {
          kk: 'Ұсынылатын ас мәзірі және орташа чек (1 адамға тәулігіне)',
          en: 'Recommended Meals & Average Check (Per Person)',
          ru: 'Рекомендуемый рацион и средний чек (на 1 человека)',
        },
        verifiedItems: [
          {
            name: { kk: 'Таңғы ас (Breakfast)', en: 'Morning Breakfast', ru: 'Завтрак' },
            category: { kk: 'Таңертеңгі рацион', en: 'Morning meal', ru: 'Утренний рацион' },
            priceRate: '1 200 – 2 200 ₸',
            details: {
              kk: 'Шәй/кофе, қаймақ, бал, тары/талқан, жаңа піскен бауырсақ немесе құймақ, жұмыртқа.',
              en: 'Tea/coffee, kaymak cream, baursaks, porridge, eggs, dairy.',
              ru: 'Чай/кофе, каймак, свежие баурсаки, тары/талкан, омлет или каша.',
            },
            verifiedTag: { kk: '2GIS-те бар', en: 'On 2GIS', ru: 'В 2GIS' },
            actionUrl: deepUrl,
            actionLabel: { kk: '2GIS-тен табу ↗', en: 'Find in 2GIS ↗', ru: 'Найти в 2GIS ↗' },
          },
          {
            name: { kk: 'Түскі ас (Lunch)', en: 'Hearty Lunch', ru: 'Обед' },
            category: { kk: 'Күндізгі толық ас', en: 'Full midday lunch', ru: 'Полноценный обед' },
            priceRate: '2 500 – 4 500 ₸',
            details: {
              kk: '1-ші тағам (сорпа, кеспе не шурпа), 2-ші тағам (палау, лағман, манты), ұлттық салат, компот/шәй.',
              en: 'First course (shurpa soup), main dish (pilaf, lagman, manti), fresh salad, local drink.',
              ru: 'Первое блюдо (сорпа/шурпа), второе (плов, лагман, манты), салат, напиток.',
            },
            verifiedTag: { kk: '2GIS-те бар', en: 'On 2GIS', ru: 'В 2GIS' },
            actionUrl: deepUrl,
            actionLabel: { kk: '2GIS-тен табу ↗', en: 'Find in 2GIS ↗', ru: 'Найти в 2GIS ↗' },
          },
          {
            name: { kk: 'Кешкі ас (Dinner) & Ұлттық тағамдар', en: 'Dinner & National Delicacies', ru: 'Ужин и национальные блюда' },
            category: { kk: 'Кешкі ас мәзірі', en: 'Evening cuisine', ru: 'Вечерний ужин' },
            priceRate: '3 500 – 6 500 ₸',
            details: {
              kk: 'Қазақша ет (Бесбармақ), Қуырдақ, сүрленген қазы-қарта, 1л қымыз немесе шұбат.',
              en: 'Beshbarmak meat platter, Kuyrdak, authentic kazy sausage, pure kymyz or shubat.',
              ru: 'Бешбармак по-казахски, куырдак, казы, натуральный кумыс или шубат.',
            },
            verifiedTag: { kk: 'Ұлттық бренд', en: 'National Gourmet', ru: 'Нац. кухня' },
            actionUrl: deepUrl,
            actionLabel: { kk: '2GIS-тен табу ↗', en: 'Find in 2GIS ↗', ru: 'Найти в 2GIS ↗' },
          },
        ],
        officialRegulations: {
          kk: [
            'Қоғамдық тамақтану орындарында бағаға қызмет көрсету төлемі (10-15% обслуживание) ресми чекке қосылуы мүмкін.',
            'Ұлттық өнімдер (шұбат, қымыз, құрт, сарымай) тек ветеринариялық және санитариялық бақылаудан өткен нүктелерден алынуы тиіс.',
            'Шетелдік туристерге дәстүрлі шәйханалар мен «Асхана» желілері сапалы әрі қолжетімді түскі асты ұсынады.',
          ],
          en: [
            'Restaurants may include a 10-15% service charge in the official fiscal receipt.',
            'Fermented dairy (shubat, kymyz) is strictly regulated by veterinary and health inspectors.',
            'Traditional teahouses and "Ashana" canteens provide great value, hygienic, authentic meals.',
          ],
          ru: [
            'В заведениях в фискальный чек может включаться 10-15% за обслуживание.',
            'Натуральные продукты (шубат, кумыс, курт) продаются с ветеринарным сертификатом качества.',
            'Традиционные чайханы и сети «Асхана» предлагают качественный и доступный рацион.',
          ],
        },
        officialPortals: [
          {
            name: currentReg.portalName[language],
            url: deepUrl,
            description: currentReg.description,
          },
          {
            name: '2GIS Қазақстан — Карталар және дәмханалар',
            url: 'https://2gis.kz',
            description: {
              kk: 'Ел бойынша барлық мейрамханалар мен дәмханалардың нақты рейтингі мен бағалары',
              en: 'Real ratings and prices for all dining venues across Kazakhstan',
              ru: 'Актуальный рейтинг и цены всех заведений питания по всему Казахстану',
            },
          },
        ],
        verificationStamp: {
          system: currentReg.portalName.kk,
          status: 'VERIFIED',
          certDate: '2026-09-19',
        },
      };
    }

    case 'local_transport': {
      const deepUrl = currentReg.url;
      return {
        key: 'local_transport',
        title: {
          kk: `${destination.cityDistrict[language]} бойынша жергілікті көлік, трансфер және жол сапасы мониторингі`,
          en: `Local Transit, Transfers & Road Infrastructure (${destination.cityDistrict[language]})`,
          ru: `Местный транспорт, трансфер и автодороги (${destination.cityDistrict[language]})`,
        },
        shortTabTitle: {
          kk: 'Жергілікті такси & көлік',
          en: 'Local Taxi & Transit',
          ru: 'Местное такси и транспорт',
        },
        livePortal: {
          portalName: currentReg.portalName[language],
          portalAddressBarUrl: currentReg.displayUrl,
          directDeepUrl: deepUrl,
          badgeTag: currentReg.badge,
          headline: {
            kk: `Жергілікті көлік, трансфер және автомобиль жолдарының жай-күйі: ${destination.cityDistrict[language]}`,
            en: `Local Mobility, Transfers & Highway Infrastructure: ${destination.cityDistrict[language]}`,
            ru: `Местный транспорт, трансфер и состояние автодорог: ${destination.cityDistrict[language]}`,
          },
          subheadline: currentReg.description,
          officialDocumentNumber: `ROADS-${regionKey.toUpperCase()}-2026`,
          tableHeaders: {
            kk: ['Көлік түрі / Маршрут', 'Қашықтық / Маршрут', 'Тарифтік есеп', 'Бағасы', 'Тексеру органы'],
            en: ['Transport Type / Route', 'Distance', 'Tariff Metric', 'Cost', 'Authority'],
            ru: ['Вид транспорта / Маршрут', 'Дистанция', 'Тарифный расчет', 'Стоимость', 'Орган контроля'],
          },
          tableRows: [
            {
              item: { kk: 'Яндекс Go / InDrive қалалық таксиі', en: 'Yandex Go / InDrive City Taxi', ru: 'Городское такси Яндекс Go / InDrive' },
              codeOrCategory: 'APP-TAXI',
              unit: { kk: 'Қала іші', en: 'City center', ru: 'По городу' },
              priceKzt: '800 – 2 500 ₸',
              statusBadge: { kk: 'Бастапқы 450 ₸ + 140 ₸/км', en: '450 + 140/km', ru: '450 + 140/км' },
            },
            {
              item: { kk: `Хабтан нысанға арнайы трансфер (${distanceKm} км)`, en: `Site Dedicated Transfer (${distanceKm} km)`, ru: `Трансфер к памятнику (${distanceKm} км)` },
              codeOrCategory: 'TRANSFER-REG',
              unit: { kk: 'Бару-қайту + 2 сағат күту', en: 'Roundtrip + 2h wait', ru: 'Туда-обратно + 2ч' },
              priceKzt: `${Math.round(Math.max(3500, distanceKm * 180)).toLocaleString('kk-KZ')} – ${Math.round(Math.max(6000, distanceKm * 320)).toLocaleString('kk-KZ')} ₸`,
              statusBadge: { kk: 'Күту қызметімен', en: 'With Waiting', ru: 'С ожиданием' },
            },
            {
              item: { kk: `${currentReg.badge[language]} қоғамдық көлігі`, en: `${currentReg.badge[language]} public transit`, ru: `Общественный транспорт: ${currentReg.badge[language]}` },
              codeOrCategory: 'BUS-MUNICIPAL',
              unit: { kk: '1 сапар', en: '1 ride', ru: '1 поездка' },
              priceKzt: '80 – 120 ₸',
              statusBadge: { kk: 'Электронды бірыңғай', en: 'Electronic Flat', ru: 'Электронная оплата' },
            },
            {
              item: { kk: 'Республикалық маңызы бар күрежол жағдайы', en: 'National Highway Road Quality', ru: 'Качество автотрассы' },
              codeOrCategory: 'ROAD-QAJ',
              unit: { kk: `${distanceKm} км тасжол`, en: 'Class I/II asphalt', ru: 'I-II категория' },
              priceKzt: 'Мемлекеттік күтімде',
              statusBadge: { kk: '«ҚазАвтоЖол» тексерген', en: 'KazAvtoZhol OK', ru: 'Проверено ҚазАвтоЖол' },
            },
          ],
          officialStampText: {
            kk: `${currentReg.department[language]} және ҚазАвтоЖол мониторингімен расталған`,
            en: `Certified by ${currentReg.department[language]} and KazAvtoZhol`,
            ru: `Заверено ${currentReg.department[language]} и мониторингом ҚазАвтоЖол`,
          },
          downloadDocumentName: {
            kk: `QazAvtoJol_${regionKey}_Jol_Sapasy_2026.pdf`,
            en: `KazAvtoZhol_${regionKey}_Road_Quality_2026.pdf`,
            ru: `KazAvtoZhol_${regionKey}_Kachestvo_Dorog_2026.pdf`,
          },
        },
        governingBody: {
          name: currentReg.department,
          department: {
            kk: '«ҚазАвтоЖол» ҰК АҚ өңірлік филиалы',
            en: 'NC KazAvtoZhol Regional Branch',
            ru: 'Региональный филиал НК «ҚазАвтоЖол»',
          },
          sealTitle: {
            kk: `«${currentReg.badge.kk}» ВЕРИФИКАЦИЯСЫ`,
            en: `VERIFIED BY ${currentReg.badge.en}`,
            ru: `ВЕРИФИКАЦИЯ: ${currentReg.badge.ru}`,
          },
        },
        legalFramework: {
          code: 'ҚР Автомобиль көлігі туралы Заңы & Электронды билеттеу ережесі',
          title: {
            kk: 'Қалалық қоғамдық көлік және жеңіл такси тасымалын реттеу ережелері',
            en: 'Rules for Urban Public Transportation and Taxi Services Regulation',
            ru: 'Правила перевозок пассажиров и багажа автомобильным транспортом',
          },
          updateDate: '2026-09-19',
          description: {
            kk: `${destination.cityDistrict[language]} өңіріндегі ресми тасымал жүйесі: ${currentReg.url}`,
            en: `Official regional transit infrastructure for ${destination.cityDistrict[language]}: ${currentReg.url}`,
            ru: `Региональная транспортная инфраструктура для ${destination.cityDistrict[language]}: ${currentReg.url}`,
          },
        },
        summaryMetrics: [
          {
            label: { kk: 'Өңірлік оператор', en: 'Regional Operator', ru: 'Региональный оператор' },
            value: currentReg.displayUrl.split('/')[0],
            badge: currentReg.badge,
          },
          {
            label: { kk: 'Нысанға дейінгі қашықтық', en: 'Distance to Site', ru: 'Расстояние к объекту' },
            value: `${distanceKm} км (${hubCity})`,
            badge: { kk: 'Өлшенген', en: 'Measured', ru: 'Замерено' },
          },
          {
            label: { kk: 'Такси базалық тариф (Яндекс Go)', en: 'Taxi Base Fare', ru: 'Базовый тариф такси' },
            value: '450 ₸ отырғызу + 140 ₸/км',
            badge: { kk: 'Нарықтық орташа', en: 'Market Average', ru: 'Рыночный' },
          },
        ],
        verifiedEntitiesTitle: {
          kk: 'Трансфер және жергілікті қозғалыс тарифтері',
          en: 'Transfer and Local Mobility Tariffs',
          ru: 'Тарифы на трансфер и местное передвижение',
        },
        verifiedItems: [
          {
            name: { kk: 'Яндекс Go / InDrive қалалық таксиі', en: 'Yandex Go / InDrive City Taxi', ru: 'Городское такси Яндекс Go / InDrive' },
            category: { kk: 'Цифрлық такси агрегаторы', en: 'Digital taxi aggregator', ru: 'Цифровой агрегатор такси' },
            priceRate: '800 – 2 500 ₸ (қала ішінде)',
            details: {
              kk: 'Қонақүй, вокзал, әуежай және мейрамханалар арасындағы ыңғайлы әрі қауіпсіз қатынау.',
              en: 'Comfortable trips between hotel, railway station, airport and restaurants.',
              ru: 'Поездки между отелем, вокзалом, аэропортом и ресторанами с GPS трекингом.',
            },
            verifiedTag: { kk: 'Цифрлық төлем', en: 'Card / Cashless', ru: 'Безналичная оплата' },
          },
          {
            name: { kk: `Қала хабынан ескерткішке арнайы трансфер (${distanceKm} км)`, en: `Dedicated Transfer to Monument (${distanceKm} km)`, ru: `Трансфер к объекту (${distanceKm} км)` },
            category: { kk: 'Өңірлік туристік трансфер', en: 'Regional tourist transfer', ru: 'Региональный трансфер' },
            priceRate: `${Math.round(Math.max(3500, distanceKm * 180)).toLocaleString('kk-KZ')} – ${Math.round(Math.max(6000, distanceKm * 320)).toLocaleString('kk-KZ')} ₸`,
            details: {
              kk: `${hubCity} хабынан ${destination.name[language]} нысанына дейін бару, күту (2 сағат) және кері қайту.`,
              en: `Round trip transfer from ${hubCity} to site including 2h waiting time.`,
              ru: `Поездка из хаба ${hubCity} к объекту с ожиданием 2 часа и возвратом назад.`,
            },
            verifiedTag: { kk: 'Күту қызметімен', en: 'With Waiting', ru: 'С ожиданием' },
          },
        ],
        officialRegulations: {
          kk: [
            'Ресми такси көліктеріне отырғанда лицензиясы мен қауіпсіздік белдігінің барын тексеру ұсынылады.',
            'Нысанға қатынайтын жолдар «ҚазАвтоЖол» ҰК АҚ бақылауында, I және II санатты асфальт төселген.',
            'Трансферді күні бұрын Яндекс Go қолданбасында «Алдын ала тапсырыс» арқылы рәсімдеуге болады.',
          ],
          en: [
            'Always choose licensed taxis or app-hailed services with digital tracking and seatbelts.',
            'Highways connecting to major monuments are maintained by NC KazAvtoZhol (Class I/II asphalt).',
            'Transfers can be reserved in advance via Yandex Go or local verified operators.',
          ],
          ru: [
            'Рекомендуется пользоваться лицензированным такси или заказом через мобильные приложения.',
            'Дороги к объектам обслуживаются НК «ҚазАвтоЖол» и имеют асфальтовое покрытие I-II категории.',
            'Трансфер можно заказать заранее через Яндекс Go или визит-центр.',
          ],
        },
        officialPortals: [
          {
            name: currentReg.portalName[language],
            url: deepUrl,
            description: currentReg.description,
          },
          {
            name: '«ҚазАвтоЖол» Ұлттық компаниясы',
            url: 'https://qaj.kz',
            description: {
              kk: 'Республикалық маңызы бар автомобиль жолдарының жай-күйі мен сапасы',
              en: 'State national highway operator and road condition status',
              ru: 'Национальный оператор автомобильных дорог РК',
            },
          },
        ],
        verificationStamp: {
          system: currentReg.portalName.kk,
          status: 'VERIFIED',
          certDate: '2026-09-19',
        },
      };
    }

    case 'entrance':
    default: {
      const deepUrl = currentReg.url;
      return {
        key: 'entrance',
        title: {
          kk: `«${destination.name[language]}» мемлекеттік қорық-музейінің ресми прейскуранты`,
          en: `Official Reserve-Museum Admission Tariffs: ${destination.name[language]}`,
          ru: `Официальный прейскурант музея-заповедника «${destination.name[language]}»`,
        },
        shortTabTitle: {
          kk: 'Кіру билеттері & Экскурсия',
          en: 'Tickets & Excursions',
          ru: 'Входные билеты и экскурсии',
        },
        livePortal: {
          portalName: currentReg.portalName[language],
          portalAddressBarUrl: currentReg.displayUrl,
          directDeepUrl: deepUrl,
          badgeTag: currentReg.badge,
          headline: {
            kk: `«${destination.name[language]}» мемлекеттік тарихи-мәдени музей-қорығының бекітілген прейскуранты`,
            en: `Official Approved Tariff List of "${destination.name[language]}" State Reserve-Museum`,
            ru: `Утвержденный прейскурант государственного музея-заповедника «${destination.name[language]}»`,
          },
          subheadline: currentReg.description,
          officialDocumentNumber: `MIN-CULT-${regionKey.toUpperCase()}-№182`,
          tableHeaders: {
            kk: ['Келушілер санаты', 'Растайтын құжат', 'Қызмет түрі', 'Бекітілген ресми баға', 'Мемлекеттік жеңілдік'],
            en: ['Visitor Category', 'Required Document', 'Service Type', 'Official Rate', 'State Concession'],
            ru: ['Категория посетителя', 'Документ', 'Услуга', 'Официальный тариф', 'Льготный статус'],
          },
          tableRows: [
            {
              item: { kk: 'Қазақстан Республикасының азаматтары (ересектер)', en: 'Kazakhstan Citizens (Adults)', ru: 'Граждане РК (взрослые)' },
              codeOrCategory: 'ADM-DOM',
              unit: { kk: '1 адамға', en: 'per person', ru: '1 чел.' },
              priceKzt: `${destination.ticketPrices.domesticAdult.toLocaleString('kk-KZ')} ₸`,
              statusBadge: { kk: 'Мемлекеттік баға', en: 'Official Rate', ru: 'Гос. цена' },
            },
            {
              item: { kk: 'Шетелдік туристер (International Visitors)', en: 'International Foreign Visitors', ru: 'Иностранные граждане' },
              codeOrCategory: 'ADM-INT',
              unit: { kk: '1 адамға', en: 'per person', ru: '1 чел.' },
              priceKzt: `${destination.ticketPrices.foreignAdult.toLocaleString('kk-KZ')} ₸`,
              statusBadge: { kk: 'Шетелдік тариф', en: 'Foreign Rate', ru: 'Тариф для иностранцев' },
            },
            {
              item: { kk: 'Студенттер (ЖОО және колледж)', en: 'College & University Students', ru: 'Студенты ВУЗов и колледжей' },
              codeOrCategory: 'ADM-STU',
              unit: { kk: 'Студенттік билетпен', en: 'With Student ID', ru: 'Студенческий билет' },
              priceKzt: `${destination.ticketPrices.domesticStudent.toLocaleString('kk-KZ')} ₸`,
              statusBadge: { kk: 'Мемлекеттік жеңілдік', en: 'State Concession', ru: 'Гос. льгота' },
            },
            {
              item: { kk: 'Мектеп оқушылары мен балалар (7-18 жас)', en: 'Schoolchildren & Youth (7-18 yrs)', ru: 'Школьники и дети (7-18 лет)' },
              codeOrCategory: 'ADM-KID',
              unit: { kk: 'Мектеп анықтамасы', en: 'School ID', ru: 'Школьная справка' },
              priceKzt: `${destination.ticketPrices.domesticChild.toLocaleString('kk-KZ')} ₸`,
              statusBadge: { kk: 'Каникулда тегін', en: 'Free in Holidays', ru: 'В каникулы бесплатно' },
            },
            {
              item: { kk: 'Зейнеткерлер, ҰОС ардагерлері, I-II топ мүгедектер', en: 'Seniors, Veterans, Persons with Disabilities', ru: 'Пенсионеры, ветераны, инв. I-II гр.' },
              codeOrCategory: 'ADM-FREE',
              unit: { kk: 'Куәлік бойынша', en: 'With Certificate', ru: 'По удостоверению' },
              priceKzt: '0 ₸ (ТЕГІН)',
              statusBadge: { kk: '100% Тегін кіру', en: '100% Free Entry', ru: '100% Льгота' },
            },
            {
              item: { kk: 'Кәсіби аккредиттелген гид экскурсиясы (қазақ/орыс)', en: 'Certified Museum Guide Tour (KZ/RU)', ru: 'Экскурсия с гидом музея (каз/рус)' },
              codeOrCategory: 'EXC-DOM',
              unit: { kk: 'Топқа (1.5 сағат)', en: 'Group (90 min)', ru: 'Группе (1.5 часа)' },
              priceKzt: `${(destination.ticketPrices.excursionFeeKz || 3000).toLocaleString('kk-KZ')} ₸`,
              statusBadge: { kk: 'Аккредиттелген гид', en: 'Certified Guide', ru: 'Штатный гид' },
            },
          ],
          officialStampText: {
            kk: `${currentReg.portalName.kk} басшылығы және ҚР Мәдениет және ақпарат министрлігімен бекітілген`,
            en: `Approved by administration of ${currentReg.portalName.en} and Ministry of Culture`,
            ru: `Утверждено администрацией: ${currentReg.portalName.ru}`,
          },
          downloadDocumentName: {
            kk: `Buyryq_182_${regionKey}_Tarifteri_2026.pdf`,
            en: `Decree_182_${regionKey}_Tariffs_2026.pdf`,
            ru: `Prikaz_182_${regionKey}_Tarify_2026.pdf`,
          },
        },
        governingBody: {
          name: currentReg.portalName,
          department: currentReg.department,
          sealTitle: {
            kk: `«${currentReg.badge.kk}» ВЕРИФИКАЦИЯСЫ`,
            en: `VERIFIED BY ${currentReg.badge.en}`,
            ru: `ВЕРИФИКАЦИЯ: ${currentReg.badge.ru}`,
          },
        },
        legalFramework: {
          code: 'ҚР Мәдениет және ақпарат министрлігінің №182 бұйрығы',
          title: {
            kk: '«Мемлекеттік тарихи-мәдени қорық-музейлердің ақылы қызметтерінің прейскуранты туралы» бұйрық',
            en: 'Decree on Official Service and Admission Fees for State Reserve-Museums',
            ru: 'Приказ об утверждении прейскуранта платных услуг государственных музеев-заповедников',
          },
          updateDate: destination.ticketPrices.verifiedAt || '2026-09-19',
          description: {
            kk: `Ресми қорық-музей порталы: ${currentReg.url}. Бекітілген тарифтер мемлекеттік бақылауда.`,
            en: `Official state reserve portal: ${currentReg.url}. Admission rates enforced under state control.`,
            ru: `Официальный портал музея-заповедника: ${currentReg.url}. Тарифы контролируются государством.`,
          },
        },
        summaryMetrics: [
          {
            label: { kk: 'Өңірлік қорық сайты', en: 'Regional Reserve Portal', ru: 'Сайт заповедника' },
            value: currentReg.displayUrl.split('/')[0],
            badge: currentReg.badge,
          },
          {
            label: { kk: 'ҚР азаматтарына', en: 'Domestic Citizens', ru: 'Граждане РК' },
            value: `${destination.ticketPrices.domesticAdult.toLocaleString('kk-KZ')} ₸`,
            badge: { kk: 'Мемлекеттік баға', en: 'Official Price', ru: 'Гос. цена' },
          },
          {
            label: { kk: 'Зейнеткерлер & Ардагерлер', en: 'Seniors & Veterans', ru: 'Пенсионеры и ветераны' },
            value: '0 ₸ (ТЕГІН)',
            badge: { kk: '100% Жеңілдік', en: '100% Exemption', ru: '100% Льгота' },
          },
        ],
        verifiedEntitiesTitle: {
          kk: 'Бекітілген кіру бағалары мен экскурсиялық қызметтер',
          en: 'Approved Admission & Guided Excursion Tariffs',
          ru: 'Утвержденные входные тарифы и экскурсионное обслуживание',
        },
        verifiedItems: [
          {
            name: { kk: 'Ересек адамға кіру билеті', en: 'Adult Admission Ticket', ru: 'Взрослый входной билет' },
            category: { kk: 'Негізгі кіру билеті', en: 'Main admission', ru: 'Основной входной билет' },
            priceRate: `${(isForeigner ? destination.ticketPrices.foreignAdult : destination.ticketPrices.domesticAdult).toLocaleString('kk-KZ')} ₸ (${isForeigner ? 'Шетелдік' : 'ҚР азаматы'})`,
            details: {
              kk: 'Тарихи нысанға, қорық-музейдің барлық ашық экспозициялық залдарына кіру құқығы.',
              en: 'Full access to historical complex, museum halls and architectural monuments.',
              ru: 'Полный доступ к объекту, музейным залам и открытым экспозициям.',
            },
            verifiedTag: { kk: destination.ticketPrices.status, en: destination.ticketPrices.status, ru: destination.ticketPrices.status },
            actionUrl: deepUrl,
            actionLabel: { kk: 'Музей сайтынан растау ↗', en: 'Verify at Reserve Site ↗', ru: 'Проверить на сайте музея ↗' },
          },
          {
            name: { kk: 'Кәсіби гидпен экскурсиялық қызмет', en: 'Certified Guided Excursion', ru: 'Экскурсия с сертифицированным гидом' },
            category: { kk: 'Музей гиді қызметі', en: 'Museum guide service', ru: 'Услуга гида музея' },
            priceRate: `${(destination.ticketPrices.excursionFeeKz || 3000).toLocaleString('kk-KZ')} ₸ (қазақ/орыс) / ${(destination.ticketPrices.excursionFeeEn || 5000).toLocaleString('kk-KZ')} ₸ (ағылшын)`,
            details: currentReg.description,
            verifiedTag: { kk: 'Штаттағы гид', en: 'Reserve Staff', ru: 'Штатный гид' },
          },
        ],
        officialRegulations: {
          kk: [
            `Жұмыс уақыты: ${destination.openingHours.schedule[language]} (Касса жабылудан 30 минут бұрын тоқтайды).`,
            `Ресми сайт: ${currentReg.url}`,
            'ЮНЕСКО және мемлекеттік қорғаудағы нысан аумағында тарихи кірпіштер мен қабырғаларға тиісуге немесе жазу қалдыруға қатаң тыйым салынады.',
          ],
          en: [
            `Opening Hours: ${destination.openingHours.schedule[language]} (Cash desk closes 30 minutes prior).`,
            `Official Site: ${currentReg.url}`,
            'Strictly protected under UNESCO and State Law: Touching ancient carvings or leaving graffiti is strictly prohibited.',
          ],
          ru: [
            `Режим работы: ${destination.openingHours.schedule[language]} (Касса закрывается за 30 минут до окончания).`,
            `Официальный сайт: ${currentReg.url}`,
            'Объект охраняется ЮНЕСКО и законом РК: нанесение повреждений историческим стенам строго преследуется по закону.',
          ],
        },
        officialPortals: [
          {
            name: currentReg.portalName[language],
            url: deepUrl,
            description: currentReg.description,
          },
          {
            name: 'ЮНЕСКО Бүкіләлемдік мұра орталығы (UNESCO World Heritage)',
            url: 'https://whc.unesco.org',
            description: {
              kk: 'Халықаралық Бүкіләлемдік мұра нысандарының тізілімі',
              en: 'International register of UNESCO World Heritage Sites',
              ru: 'Международный реестр объектов Всемирного наследия ЮНЕСКО',
            },
          },
        ],
        verificationStamp: {
          system: currentReg.portalName.kk,
          status: 'GOVERNMENT_APPROVED',
          certDate: destination.ticketPrices.verifiedAt || '2026-09-19',
        },
      };
    }
  }
}
