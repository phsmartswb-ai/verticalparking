import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

const PROBLEM_ITEMS = [
  {
    icon: '☀️',
    title: 'Extreme Sun Damage',
    text: 'UV radiation fades paint, cracks dashboards, and degrades tyres over time when parked outdoors.',
  },
  {
    icon: '🌧️',
    title: 'Rain & Waterlogging',
    text: 'Monsoons cause water to seep into engines, rust underbodies, and damage electrical systems.',
  },
  {
    icon: '🐀',
    title: 'Rat & Pest Biting',
    text: 'Wiring harnesses chewed by rodents cause costly repairs and electrical failures.',
  },
  {
    icon: '🔓',
    title: 'Theft & Vandalism',
    text: 'Unguarded street parking makes vehicles easy targets for theft, scratches, and break-ins.',
  },
  {
    icon: '👦',
    title: 'Dents & Scratches',
    text: 'Children playing, bikes leaning and careless passersby leave their mark on your vehicle daily.',
  },
  {
    icon: '💸',
    title: 'Uncontrolled Rents & Zero Trust',
    text: 'Car owners pay unpredictable, inflated rents to unorganized lots with no receipts, no accountability, and zero assurance that their vehicle is actually safe.',
  },
];

const BIG_STAT = {
  num: '72%',
  desc: 'of car owners in Indian metros report vehicle damage from outdoor parking within a year',
  detail:
    'Bengaluru alone has over 80 lakh registered vehicles — yet organised, secure parking barely covers 5% of demand. <strong>Vertipark is launching first in Bengaluru to fix this.</strong>',
  tags: [
    { label: '📍 Bengaluru — Launching Soon', color: '#e8ff00' },
  ],
};

@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './problem.component.html',
  styleUrl: './problem.component.scss',
})
export class ProblemComponent {
  protected readonly items = PROBLEM_ITEMS;
  protected readonly stat = BIG_STAT;
}
