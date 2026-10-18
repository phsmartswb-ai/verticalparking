import { Component } from '@angular/core';

const VALUES = [
  {
    icon: '🌆',
    title: 'Urban-First',
    desc: 'Built specifically for the density and chaos of Indian metros.',
  },
  {
    icon: '🤖',
    title: 'Tech-Driven',
    desc: 'RFID, app, automation — technology at every touchpoint.',
  },
  {
    icon: '🌱',
    title: 'Land-Smart',
    desc: 'We activate idle land rather than consuming new green spaces.',
  },
  {
    icon: '🤝',
    title: 'Community',
    desc: 'We benefit car owners, landowners, and neighbourhoods equally.',
  },
];

const STATS = [
  { num: 'Bengaluru', label: '📍 Launch City — Phase 1', numSize: '2rem' },
  { num: '12-16', label: 'Cars Per Tower Unit' },
  { num: '10x', label: 'Land Utilization vs. Flat Parking' },
  { num: '₹0', label: 'Upfront Cost for Landowners' },
];

const ABOUT_PARAS = [
  `Vertipark was founded in 2024 by a team of engineers and urban planners who were tired of watching India's fastest-growing cities choke on their own success. Every day, millions of car owners in Bengaluru park on roadsides — watching their vehicles deteriorate under the open sky, paying uncontrolled rents with no trust or security.`,
  `At the same time, thousands of land parcels sit vacant across Bengaluru — unused, taxed, misused, and profitable for no one. Vertipark exists to bridge this gap. We lease idle land, deploy our vertical rotary parking systems, and operate them as tech-enabled, subscription-based parking facilities.`,
  `We are <strong style="color: #e8ff00">starting with Bengaluru</strong> — India's most parking-stressed city — and building our first towers here before expanding to other metros. <strong style="color: #f5f3ee">Be among the first to experience truly secure, smart parking.</strong>`,
];

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  protected readonly values = VALUES;
  protected readonly stats = STATS;
  protected readonly paras = ABOUT_PARAS;
}
