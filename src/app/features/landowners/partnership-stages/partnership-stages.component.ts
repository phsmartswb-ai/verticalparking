import { Component } from '@angular/core';

const STAGES = [
  {
    icon: '📞',
    num: '1',
    title: 'Initial Inquiry',
    desc: 'Submit your land details through our form or call us. Our team reaches out within 24 hours.',
    timeframe: 'Day 1',
  },
  {
    icon: '🔍',
    num: '2',
    title: 'Site Evaluation',
    desc: 'Our team visits your plot to assess size, location, accessibility and local parking demand.',
    timeframe: 'Day 3–5',
  },
  {
    icon: '📄',
    num: '3',
    title: 'Offer & Agreement',
    desc: 'Formal lease offer with rental amount and terms. Legal agreement drafted and stamped upon acceptance.',
    timeframe: 'Day 7–14',
  },
  {
    icon: '🏗️',
    num: '4',
    title: 'Installation & Setup',
    desc: 'Vertipark handles all construction, CCTV installation, fencing, security setup, and commissioning. You don\'t lift a finger.',
    timeframe: 'Day 30–60',
  },
  {
    icon: '💰',
    num: '5',
    title: 'Payments Begin',
    desc: 'Your facility goes live, customers start parking, and your lease payment arrives in your account — every month, automatically.',
    timeframe: 'Month 2+',
  },
];

@Component({
  selector: 'app-partnership-stages',
  standalone: true,
  imports: [],
  templateUrl: './partnership-stages.component.html',
  styleUrl: './partnership-stages.component.scss',
})
export class PartnershipStagesComponent {
  protected readonly stages = STAGES;
}
