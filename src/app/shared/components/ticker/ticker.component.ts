import { Component } from '@angular/core';

const TICKER_ITEMS = [
  '🅿 SECURE VERTICAL PARKING',
  '⚡ RFID ENTRY & EXIT',
  '📱 APP-CONTROLLED',
  '📍 LAUNCHING IN BANGALORE',
  '🔒 24/7 SECURITY & CCTV',
  '🚀 BE FIRST IN BENGALURU',
];

@Component({
  selector: 'app-ticker',
  standalone: true,
  imports: [],
  templateUrl: './ticker.component.html',
  styleUrl: './ticker.component.scss',
})
export class TickerComponent {
  protected readonly items = TICKER_ITEMS;
}
