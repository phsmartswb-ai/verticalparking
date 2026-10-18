import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

const COMPARISONS = [
  {
    color: '#e8ff00',
    title: 'Fully Automated',
    text: 'No manual parking. No valet fees. No human contact with your vehicle. Rotary system does it all in 90 seconds.',
  },
  {
    color: '#5b8fff',
    title: 'Transparent Pricing',
    text: 'No hidden fees. No surprise charges. Know exactly what you pay every month. Zone-based pricing is honest and competitive.',
  },
  {
    color: '#00e5a0',
    title: 'Technology-First',
    text: 'Real-time app notifications. RFID entry/exit. Slot availability live. Pickup/drop at tap of a button. Parking reimagined.',
  },
];

@Component({
  selector: 'app-comparison',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './comparison.component.html',
  styleUrl: './comparison.component.scss',
})
export class ComparisonComponent {
  protected readonly cards = COMPARISONS;
}
