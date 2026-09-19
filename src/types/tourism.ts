export type VerificationStatus = 'VERIFIED' | 'ESTIMATED' | 'UNAVAILABLE';

export type Language = 'kk' | 'en' | 'ru';
export type Currency = 'KZT' | 'USD' | 'EUR' | 'CNY';
export type HistoricalEpoch = 'all' | 'iron_age' | 'silk_road' | 'golden_horde' | 'enlightenment';

export interface Source {
  name: string;
  url: string;
  type: 'official_reserve' | 'unesco' | 'government' | 'transport_official' | 'booking_estimate';
  verifiedAt: string; // e.g. '2026-09-19'
}

export interface TicketPrice {
  domesticAdult: number;
  domesticStudent: number;
  domesticChild: number;
  foreignAdult: number;
  excursionFeeKz?: number;
  excursionFeeEn?: number;
  currency: 'KZT';
  status: VerificationStatus;
  notes: Record<Language, string>;
  source: string;
  sourceUrl: string;
  verifiedAt: string;
}

export interface TransportOption {
  mode: 'train' | 'flight' | 'taxi' | 'bus' | 'car';
  title: Record<Language, string>;
  duration: string;
  costRange: {
    min: number;
    max: number;
    currency: 'KZT';
  };
  provider: string;
  status: VerificationStatus;
  tips: Record<Language, string>;
}

export interface NearbyDestination {
  id: string;
  name: Record<Language, string>;
  distanceKm: number;
  travelTimeMinutes: number;
}

export interface HistoricalDestination {
  id: string;
  slug: string;
  name: Record<Language, string>;
  regionId: string;
  cityDistrict: Record<Language, string>;
  exactLocation: Record<Language, string>;
  coordinates: {
    lat: number;
    lng: number;
  };
  category: 'mausoleum' | 'archaeological_settlement' | 'underground_mosque' | 'petroglyphs' | 'fortress_memorial';
  epoch?: HistoricalEpoch;
  unescoWorldHeritage: boolean;
  unescoCriteria?: string;
  historicalPeriod: Record<Language, string>;
  shortDescription: Record<Language, string>;
  history: Record<Language, string>;
  whyImportant: Record<Language, string>;
  whyVisit: Record<Language, string>;
  whatToSee: Record<Language, string[]>;
  whatToDo: Record<Language, string[]>;
  bestTimeToVisit: Record<Language, string>;
  recommendedVisitDurationHours: number;
  openingHours: {
    schedule: Record<Language, string>;
    status: VerificationStatus;
    notes?: Record<Language, string>;
  };
  ticketPrices: TicketPrice;
  images: {
    url: string;
    caption: Record<Language, string>;
    credit?: string;
  }[];
  transportation: {
    nearestHubCity: Record<Language, string>;
    distanceFromHubKm: number;
    options: TransportOption[];
  };
  accommodationEstimates: {
    budgetPerNight: { min: number; max: number };
    midRangePerNight: { min: number; max: number };
    luxuryPerNight: { min: number; max: number };
    status: VerificationStatus;
    source: string;
    verifiedAt: string;
  };
  foodEstimates: {
    budgetPerDay: { min: number; max: number };
    midRangePerDay: { min: number; max: number };
    status: VerificationStatus;
    source: string;
    verifiedAt: string;
  };
  accessibility: {
    wheelchair: boolean;
    walkingDifficulty: 'easy' | 'moderate' | 'challenging';
    notes: Record<Language, string>;
  };
  sources: Source[];
  lastVerifiedDate: string;
}

export interface Region {
  id: string;
  name: Record<Language, string>;
  center: Record<Language, string>;
  centerCoords: { lat: number; lng: number };
  description: Record<Language, string>;
  historicalSummary: Record<Language, string>;
  svgPath: string; // SVG path representation on stylized Kazakhstan map
  svgLabelPos: { x: number; y: number };
  highlightSitesCount: number;
  coverImage?: string;
  tag?: Record<Language, string>;
  startingBudget?: number;
}