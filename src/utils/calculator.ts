import type { HistoricalDestination, Currency, Language, VerificationStatus } from '../types/tourism';

// Exchange rates (approximate market rates as of September 2026)
export const EXCHANGE_RATES: Record<Currency, number> = {
  KZT: 1,
  USD: 0.00208, // ~480 KZT per 1 USD
  EUR: 0.00192, // ~520 KZT per 1 EUR
  CNY: 0.0149,  // ~67 KZT per 1 CNY
};

/**
 * Calculates Great-circle distance between two points on the globe using Haversine formula
 */
export function calculateHaversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

/**
 * Find genuinely nearby historical destinations sorted by geographical distance
 */
export function getNearbyDestinations(
  current: HistoricalDestination,
  all: HistoricalDestination[],
  limit: number = 3
) {
  return all
    .filter((d) => d.id !== current.id)
    .map((d) => {
      const distanceKm = calculateHaversineDistance(
        current.coordinates.lat,
        current.coordinates.lng,
        d.coordinates.lat,
        d.coordinates.lng
      );
      // Approximation: ~70 km/h average rural driving speed
      const travelTimeMinutes = Math.round((distanceKm / 70) * 60);
      return {
        destination: d,
        distanceKm,
        travelTimeMinutes,
      };
    })
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, limit);
}

/**
 * Format currency with international symbols
 */
export function formatPrice(
  amountKzt: number,
  targetCurrency: Currency = 'KZT'
): string {
  if (amountKzt === 0) return '0 ₸';
  if (targetCurrency === 'KZT') {
    return `${new Intl.NumberFormat('kk-KZ').format(Math.round(amountKzt))} ₸`;
  }
  if (targetCurrency === 'USD') {
    const usd = amountKzt * EXCHANGE_RATES.USD;
    return `$${new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0,
    }).format(Math.round(usd))}`;
  }
  if (targetCurrency === 'EUR') {
    const eur = amountKzt * EXCHANGE_RATES.EUR;
    return `€${new Intl.NumberFormat('de-DE', {
      maximumFractionDigits: 0,
    }).format(Math.round(eur))}`;
  }
  if (targetCurrency === 'CNY') {
    const cny = amountKzt * EXCHANGE_RATES.CNY;
    return `¥${new Intl.NumberFormat('zh-CN', {
      maximumFractionDigits: 0,
    }).format(Math.round(cny))}`;
  }
  return `${amountKzt} ₸`;
}

export interface TripCalculationParams {
  destination: HistoricalDestination;
  departureCity: 'almaty' | 'astana' | 'shymkent' | 'aktau' | 'nearby_hub';
  travelers: number;
  days: number;
  comfortLevel: 'budget' | 'standard' | 'comfort';
  transportMode: 'train' | 'flight' | 'taxi' | 'car';
  isForeigner: boolean;
  language: Language;
}

export interface CostBreakdownItem {
  key: string;
  title: Record<Language, string>;
  amountKzt: number;
  status: VerificationStatus;
  explanation: Record<Language, string>;
  source: string;
  sourceUrl?: string;
}

export interface TripCostResult {
  totalKzt: number;
  perPersonKzt: number;
  items: CostBreakdownItem[];
  parameters: {
    travelers: number;
    days: number;
    comfortLevel: string;
    transportMode: string;
  };
}

export function calculateTripCost(params: TripCalculationParams): TripCostResult {
  const {
    destination,
    departureCity,
    travelers,
    days,
    comfortLevel,
    transportMode,
    isForeigner,
  } = params;

  // 1. Entrance Tickets (VERIFIED)
  const ticketRate = isForeigner
    ? destination.ticketPrices.foreignAdult
    : destination.ticketPrices.domesticAdult;
  const entranceTotal = ticketRate * travelers;

  // 2. Intercity Transport (ESTIMATED from real route averages)
  let transportPerPersonRoundTrip = 0;
  let transportProvider = 'Қазақстан темір жолы (railways.kz)';
  let transportUrl = 'https://bilet.railways.kz';

  if (transportMode === 'flight') {
    transportProvider = 'FlyArystan / SCAT / Air Astana';
    transportUrl = 'https://kazakhstan.travel';
    // Flight round-trip estimates
    if (departureCity === 'almaty' || departureCity === 'astana') {
      transportPerPersonRoundTrip = comfortLevel === 'comfort' ? 65000 : 42000;
    } else {
      transportPerPersonRoundTrip = 30000;
    }
  } else if (transportMode === 'train') {
    // Train round-trip estimates (Platzkart vs Kupe vs Talgo)
    if (comfortLevel === 'budget') {
      transportPerPersonRoundTrip = 14000; // standard train round-trip
    } else if (comfortLevel === 'standard') {
      transportPerPersonRoundTrip = 22000; // kupe round-trip
    } else {
      transportPerPersonRoundTrip = 38000; // Talgo fast train round-trip
    }
  } else {
    // Car or Intercity Taxi transfer
    transportProvider = 'Regional Intercity Taxi / Yandex Go';
    transportUrl = 'https://kazakhstan.travel';
    transportPerPersonRoundTrip = 18000;
  }

  const transportTotal = transportPerPersonRoundTrip * travelers;

  // 3. Accommodation (ESTIMATED based on nights: days - 1, min 1 night for multi-day trips)
  const nights = Math.max(1, days - 1);
  const roomsCount = Math.ceil(travelers / 2);
  let nightlyRate = 0;

  if (comfortLevel === 'budget') {
    nightlyRate = destination.accommodationEstimates.budgetPerNight.min;
  } else if (comfortLevel === 'standard') {
    nightlyRate =
      (destination.accommodationEstimates.midRangePerNight.min +
        destination.accommodationEstimates.midRangePerNight.max) /
      2;
  } else {
    nightlyRate = destination.accommodationEstimates.luxuryPerNight.min;
  }

  const accommodationTotal = Math.round(nightlyRate * nights * roomsCount);

  // 4. Daily Food (ESTIMATED)
  let dailyFoodRate = 0;
  if (comfortLevel === 'budget') {
    dailyFoodRate = destination.foodEstimates.budgetPerDay.min;
  } else if (comfortLevel === 'standard') {
    dailyFoodRate =
      (destination.foodEstimates.midRangePerDay.min +
        destination.foodEstimates.midRangePerDay.max) /
      2;
  } else {
    dailyFoodRate = destination.foodEstimates.midRangePerDay.max * 1.3;
  }

  const foodTotal = Math.round(dailyFoodRate * days * travelers);

  // 5. Local Transfers & Destination Taxi (ESTIMATED)
  const localTransportDaily = comfortLevel === 'budget' ? 2500 : comfortLevel === 'standard' ? 5000 : 9000;
  const localTransportTotal = Math.round(localTransportDaily * days);

  // Items Breakdown
  const items: CostBreakdownItem[] = [
    {
      key: 'transport',
      title: {
        kk: 'Қалааралық көлік (бару-қайту)',
        en: 'Intercity Transport (Round trip)',
        ru: 'Междугородний транспорт (туда-обратно)',
      },
      amountKzt: transportTotal,
      status: 'ESTIMATED',
      explanation: {
        kk: `${travelers} адамға ${transportMode.toUpperCase()} бағыты бойынша екі жаққа бару-қайту билеттерінің нарықтық бағасы.`,
        en: `Estimated round-trip fares for ${travelers} passenger(s) via ${transportMode}.`,
        ru: `Ориентировочная стоимость билетов туда-обратно для ${travelers} чел. (${transportMode}).`,
      },
      source: transportProvider,
      sourceUrl: transportUrl,
    },
    {
      key: 'accommodation',
      title: {
        kk: 'Қонақүй / Тұру орны',
        en: 'Accommodation / Lodging',
        ru: 'Проживание / Отель',
      },
      amountKzt: accommodationTotal,
      status: destination.accommodationEstimates.status,
      explanation: {
        kk: `${nights} түнге ${roomsCount} бөлме (${comfortLevel} санаты: орташа тәулігіне ${formatPrice(nightlyRate, 'KZT')}).`,
        en: `${nights} night(s) for ${roomsCount} room(s) (${comfortLevel} category: avg ${formatPrice(nightlyRate, 'KZT')}/night).`,
        ru: `${nights} ноч. на ${roomsCount} номер(а) (категория ${comfortLevel}: в среднем ${formatPrice(nightlyRate, 'KZT')}/ночь).`,
      },
      source: destination.accommodationEstimates.source,
    },
    {
      key: 'food',
      title: {
        kk: 'Тамақтану шығыны',
        en: 'Food & Dining Budget',
        ru: 'Питание и рестораны',
      },
      amountKzt: foodTotal,
      status: destination.foodEstimates.status,
      explanation: {
        kk: `${travelers} адамға ${days} күнге тамақтану (күніне жан басына ~${formatPrice(dailyFoodRate, 'KZT')}).`,
        en: `Meals for ${travelers} traveler(s) over ${days} day(s) (~${formatPrice(dailyFoodRate, 'KZT')}/person/day).`,
        ru: `Питание на ${travelers} чел. на ${days} дн. (около ${formatPrice(dailyFoodRate, 'KZT')} в день на чел.).`,
      },
      source: destination.foodEstimates.source,
    },
    {
      key: 'local_transport',
      title: {
        kk: 'Жергілікті көлік пен такси',
        en: 'Local Transport & Taxis',
        ru: 'Местный транспорт и такси',
      },
      amountKzt: localTransportTotal,
      status: 'ESTIMATED',
      explanation: {
        kk: 'Қала ішіндегі және нысанға дейінгі Яндекс Go / такси шығыны.',
        en: 'Local city rides and regional destination transfers.',
        ru: 'Поездки на такси Яндекс Go по городу и трансфер к объекту.',
      },
      source: 'Yandex Go & Regional Local Fares',
    },
    {
      key: 'entrance',
      title: {
        kk: 'Кіру билеттері мен экскурсия',
        en: 'Entrance Tickets & Excursion',
        ru: 'Входные билеты и экскурсия',
      },
      amountKzt: entranceTotal,
      status: destination.ticketPrices.status,
      explanation: {
        kk: `${travelers} адамға ресми бекітілген тариф (${isForeigner ? 'Шетел азаматы' : 'ҚР азаматы'}: ${formatPrice(ticketRate, 'KZT')} адам басына).`,
        en: `Official admission for ${travelers} visitor(s) (${isForeigner ? 'International visitor' : 'Kazakhstan citizen'}: ${formatPrice(ticketRate, 'KZT')}/person).`,
        ru: `Официальные билеты на ${travelers} чел. (${isForeigner ? 'Иностранец' : 'Гражданин РК'}: ${formatPrice(ticketRate, 'KZT')}/чел.).`,
      },
      source: destination.ticketPrices.source,
      sourceUrl: destination.ticketPrices.sourceUrl,
    },
  ];

  const totalKzt = items.reduce((acc, item) => acc + item.amountKzt, 0);

  return {
    totalKzt,
    perPersonKzt: Math.round(totalKzt / travelers),
    items,
    parameters: {
      travelers,
      days,
      comfortLevel,
      transportMode,
    },
  };
}

/**
 * Quick trip budget estimate for cards (Baseline 2-day independent trip for 1 traveler)
 */
export function getQuickTripEstimate(
  destination: HistoricalDestination,
  isForeigner: boolean = true
): { minKzt: number; maxKzt: number } {
  const ticket = isForeigner
    ? destination.ticketPrices.foreignAdult
    : destination.ticketPrices.domesticAdult;

  const transportMin = destination.transportation.options[0]?.costRange.min || 10000;
  const transportMax = destination.transportation.options[0]?.costRange.max || 28000;
  const stayMin = destination.accommodationEstimates.budgetPerNight.min || 8000;
  const stayMax = destination.accommodationEstimates.midRangePerNight.max || 25000;
  const foodMin = (destination.foodEstimates.budgetPerDay.min || 3500) * 2;
  const foodMax = (destination.foodEstimates.midRangePerDay.max || 8000) * 2;

  const minKzt = Math.round(ticket + transportMin + stayMin + foodMin);
  const maxKzt = Math.round(ticket + transportMax + stayMax + foodMax);
  return { minKzt, maxKzt };
}

