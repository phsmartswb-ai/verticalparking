import { Component } from '@angular/core';

const BENEFITS = [
  {
    num: '01 / INCOME',
    icon: '💰',
    title: 'Steady Guaranteed Income',
    desc: 'Receive fixed monthly or quarterly lease payments directly to your bank account — on time, every time. No chasing tenants, no late payments.',
  },
  {
    num: '02 / EFFORT',
    icon: '🛋️',
    title: 'Zero Effort, Zero Headache',
    desc: 'Vertipark handles all construction, operations, staffing, security, maintenance, and customer management. You simply receive your payment.',
  },
  {
    num: '03 / LEGAL',
    icon: '📋',
    title: 'Documented Legal Agreement',
    desc: 'Every partnership is backed by a stamped lease agreement outlining payment terms, tenure, exit clauses, and property rights — protecting you completely.',
  },
  {
    num: '04 / PROPERTY',
    icon: '🏗️',
    title: 'Land Protected & Improved',
    desc: 'Your land is fenced, cleaned, lit, and monitored with CCTV. No more dumping, encroachment, or misuse. We restore and protect your property professionally.',
  },
  {
    num: '05 / COMMUNITY',
    icon: '🏙️',
    title: 'Community Impact',
    desc: 'Your land directly solves the city\'s parking crisis. You become a recognized contributor to urban infrastructure improvement in your neighbourhood.',
  },
  {
    num: '06 / FLEXIBILITY',
    icon: '🔄',
    title: 'Flexible Tenure Options',
    desc: 'Choose 1-year, 3-year, or 5-year lease terms with clear renewal and exit provisions. Your land remains yours — Vertipark is your tenant, not your owner.',
  },
];

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss',
})
export class BenefitsComponent {
  protected readonly items = BENEFITS;
}
