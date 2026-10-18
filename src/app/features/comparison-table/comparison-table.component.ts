import { Component } from '@angular/core';

const HEADERS = ['Feature', 'Vertipark', 'Covered Lots', 'Street Parking'];

const ROWS = [
  {
    feature: 'Security',
    vertipark: '✓ 24/7 + CCTV',
    covered: 'Basic guard',
    street: '✗ None',
    streetColor: '#ff4545',
  },
  {
    feature: 'Automated Entry',
    vertipark: '✓ RFID (90s)',
    covered: 'Manual booth',
    street: '✗ Walk from car',
    streetColor: '#ff4545',
  },
  {
    feature: 'Damage Risk',
    vertipark: '✓ Zero (Automated)',
    covered: 'Valet handling',
    street: '✗ Very High',
    streetColor: '#ff4545',
  },
  {
    feature: 'Weather Protection',
    vertipark: '✓ Full Cover',
    covered: '✓ Covered',
    street: '✗ Exposed',
    streetColor: '#ff4545',
  },
  {
    feature: 'App Control',
    vertipark: '✓ Full Control',
    covered: 'No app',
    street: 'No app',
  },
  {
    feature: 'Typical Monthly Cost',
    vertipark: '₹3,499–5,499',
    covered: '₹3,500–5,000',
    street: '₹2,000+',
  },
  {
    feature: 'Hidden Fees',
    vertipark: '✓ None',
    covered: 'Possible',
    street: 'Fines risk',
    streetColor: '#ff4545',
  },
];

@Component({
  selector: 'app-comparison-table',
  standalone: true,
  imports: [],
  templateUrl: './comparison-table.component.html',
  styleUrl: './comparison-table.component.scss',
})
export class ComparisonTableComponent {
  protected readonly headers = HEADERS;
  protected readonly rows = ROWS;
}
