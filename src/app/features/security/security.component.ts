import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

const SECURITY_CARDS = [
  {
    color: '#00e5a0',
    title: 'Zero Manual Handling',
    text: 'Fully automated rotary system means no human drivers park your car. Zero risk of dents, scratches, or damage. Your car never leaves the secure tower.',
    badge: '✓ 100% Damage Protection',
  },
  {
    color: '#5b8fff',
    title: 'Bank-Level Encryption',
    text: 'End-to-end encryption for all personal data. Your vehicle details, location, and payment info secured with TLS 1.3 protocol — same security as major banks.',
  },
  {
    color: '#ff6b35',
    title: '24/7 Live Monitoring',
    text: 'Every tower monitored by trained security personnel. HD CCTV footage recorded and archived for 90 days. Emergency response in under 5 minutes.',
  },
];

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss',
})
export class SecurityComponent {
  protected readonly cards = SECURITY_CARDS;
}
