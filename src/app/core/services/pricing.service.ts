import { Injectable, signal } from '@angular/core';

export type Zone = 'premium' | 'high' | 'mid' | 'standard';
export type Duration = 'daily' | 'weekly' | 'monthly' | 'quarterly';

export interface ZoneOption {
  value: Zone;
  label: string;
}

export interface DurationOption {
  value: Duration;
  label: string;
}

export interface Quote {
  zone: Zone;
  duration: Duration;
  plan: string;
  price: string;
  details: string;
}

const ZONES: Record<Zone, ZoneOption> = {
  premium: { value: 'premium', label: '🔴 Premium (Koramangala, Indiranagar, MG Road)' },
  high: { value: 'high', label: '🟠 High (Whitefield, Marathahalli, HSR, Bellandur)' },
  mid: { value: 'mid', label: '🟡 Mid (Jayanagar, Bannerghatta Road)' },
  standard: { value: 'standard', label: '🟢 Standard (Yeshwantpur, Peenya, Hebbal)' },
};

const DURATIONS: Record<Duration, DurationOption> = {
  daily: { value: 'daily', label: '🚗 Daily (One-time visit)' },
  weekly: { value: 'weekly', label: '📅 Weekly (Regular trips)' },
  monthly: { value: 'monthly', label: '📆 Monthly (Work commute)' },
  quarterly: { value: 'quarterly', label: '📊 Quarterly (Long-term)' },
};

const PRICING: Record<Duration, Record<Zone, string>> = {
  daily: { premium: '₹299-349', high: '₹299', mid: '₹299', standard: '₹299' },
  weekly: { premium: '₹1,999', high: '₹1,799', mid: '₹1,599', standard: '₹1,599' },
  monthly: { premium: '₹5,499', high: '₹4,499', mid: '₹3,999', standard: '₹3,499' },
  quarterly: { premium: '₹14,999', high: '₹11,999', mid: '₹10,999', standard: '₹9,499' },
};

const PLAN_NAMES: Record<Duration, string> = {
  daily: 'Day Pass',
  weekly: 'Weekly Plan',
  monthly: 'Monthly Plan',
  quarterly: 'Quarterly Plan',
};

const PERIOD_TEXT: Record<Duration, string> = {
  daily: '/day',
  weekly: '/week',
  monthly: '/month',
  quarterly: '/quarter',
};

@Injectable({
  providedIn: 'root',
})
export class PricingService {
  readonly zones = signal<ZoneOption[]>(Object.values(ZONES));
  readonly durations = signal<DurationOption[]>(Object.values(DURATIONS));
  readonly defaultZone = signal<Zone>('mid');
  readonly defaultDuration = signal<Duration>('monthly');

  calculate(zone: Zone = 'mid', duration: Duration = 'monthly'): Quote {
    const price = PRICING[duration][zone];
    return {
      zone,
      duration,
      plan: PLAN_NAMES[duration],
      price,
      details: `Starting from ${price}${PERIOD_TEXT[duration]}`,
    };
  }
}
