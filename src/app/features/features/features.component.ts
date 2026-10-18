import { Component } from '@angular/core';

const FEATURES = [
  {
    icon: '🔐',
    title: 'RFID Smart Entry & Exit',
    desc: 'No queues, no keys handed over. Your RFID tag is your access pass. Tap and drive in or out in seconds — fully automated and contactless.',
  },
  {
    icon: '📹',
    title: '24/7 CCTV Surveillance',
    desc: 'Every corner of every Vertipark tower is covered by HD cameras monitored round the clock, with footage archived for 30 days.',
  },
  {
    icon: '👮',
    title: 'On-Site Security Guard',
    desc: 'A trained security professional is stationed at every Vertipark location during operational hours — a human layer alongside technology.',
  },
  {
    icon: '🚗',
    title: 'Car Pickup & Drop Service',
    desc: 'Request your car at the gate through the Vertipark app. Available for monthly and quarterly subscribers.',
  },
  {
    icon: '📱',
    title: 'Vertipark Mobile App',
    desc: 'Manage subscriptions, request pickups, check slot availability, get entry notifications — all from your smartphone.',
  },
  {
    icon: '🌀',
    title: 'Rotary Vertical Mechanism',
    desc: 'Our rotary carousel brings your car to ground level on demand. Zero ramps, zero slopes, zero manual effort — fully automated.',
  },
];

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  protected readonly items = FEATURES;
}
