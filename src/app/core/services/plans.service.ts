import { Injectable, signal } from '@angular/core';

export interface PlanFeature {
  text: string;
  hidden?: boolean;
}

export interface PlanCard {
  id: string;
  duration: string;
  price: string;
  priceSub: string;
  priceLarge?: boolean;
  badge?: string;
  featured?: boolean;
  features: PlanFeature[];
  buttonLabel: string;
  buttonVariant: 'outline' | 'dark';
}

export interface ZoneTableRow {
  tier: string;
  tierColor: string;
  areas: string;
  monthly: string;
  quarterly: string;
}

const PLANS: PlanCard[] = [
  {
    id: 'day-pass',
    duration: 'Day Pass',
    price: '₹299',
    priceSub: 'per day',
    features: [
      { text: 'RFID gate access' },
      { text: 'CCTV monitoring' },
      { text: 'Security guard' },
      { text: 'App tracking' },
      { text: 'Limited to 2 slots/tower', hidden: true },
    ],
    buttonLabel: 'Get Started',
    buttonVariant: 'outline',
  },
  {
    id: 'weekly',
    duration: 'Weekly',
    price: '₹1599+',
    priceSub: 'per week',
    priceLarge: true,
    features: [
      { text: 'All Day Pass features' },
      { text: 'Priority slot access' },
      { text: '1 free pickup/drop' },
    ],
    buttonLabel: 'Get Started',
    buttonVariant: 'outline',
  },
  {
    id: 'monthly',
    duration: 'Monthly',
    price: '₹3,499+',
    priceSub: 'per month · based on location',
    priceLarge: true,
    badge: 'Most Popular',
    featured: true,
    features: [
      { text: 'All Weekly features' },
      { text: '3 free pickup/drops' },
      { text: 'Premium slot reserved' },
      { text: 'App + RFID access' },
    ],
    buttonLabel: 'Subscribe Now',
    buttonVariant: 'dark',
  },
  {
    id: 'quarterly',
    duration: 'Quarterly',
    price: '₹9,999',
    priceSub: 'per quarter · save 13%',
    features: [
      { text: 'All Monthly features' },
      { text: '10 free pickup/drops' },
      { text: 'Dedicated slot 24/7' },
      { text: 'Priority support' },
    ],
    buttonLabel: 'Get Started',
    buttonVariant: 'outline',
  },
  {
    id: 'corporate',
    duration: 'Corporate / Fleet',
    price: '₹4,499+',
    priceSub: 'per slot / month',
    priceLarge: true,
    badge: 'For Businesses',
    featured: true,
    features: [
      { text: 'Bulk slot bookings (4–10 slots)' },
      { text: 'Guaranteed reserved slots' },
      { text: 'Dedicated account manager' },
      { text: 'Priority support 24/7' },
      { text: 'Custom invoicing & contracts' },
      { text: 'Free monthly vehicle swaps' },
    ],
    buttonLabel: 'Request Quote',
    buttonVariant: 'dark',
  },
];

const ZONE_TABLE: ZoneTableRow[] = [
  {
    tier: 'Premium',
    tierColor: '#ff6b35',
    areas: 'Koramangala, Indiranagar, MG Road, UB City',
    monthly: '₹5,499',
    quarterly: '₹14,999',
  },
  {
    tier: 'High',
    tierColor: '#5b8fff',
    areas: 'Whitefield, Marathahalli, HSR Layout, Bellandur',
    monthly: '₹4,499',
    quarterly: '₹11,999',
  },
  {
    tier: 'Mid',
    tierColor: '#e8ff00',
    areas: 'Jayanagar, Bannerghatta Road, JP Nagar',
    monthly: '₹3,999',
    quarterly: '₹10,999',
  },
  {
    tier: 'Standard',
    tierColor: '#a8a8ba',
    areas: 'Yeshwantpur, Peenya, Hebbal, Vijayanagar',
    monthly: '₹3,499',
    quarterly: '₹9,499',
  },
];

@Injectable({
  providedIn: 'root',
})
export class PlansService {
  readonly plans = signal<PlanCard[]>(PLANS);
  readonly zoneTable = signal<ZoneTableRow[]>(ZONE_TABLE);
}
