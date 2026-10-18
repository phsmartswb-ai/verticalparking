import { Component, computed, inject, signal } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { PricingService, Quote, Zone, Duration } from '../../core/services/pricing.service';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-pricing-calculator',
  standalone: true,
  imports: [MatSelectModule],
  templateUrl: './pricing-calculator.component.html',
  styleUrl: './pricing-calculator.component.scss',
})
export class PricingCalculatorComponent {
  protected readonly pricing = inject(PricingService);
  protected readonly scroll = inject(ScrollService);

  protected readonly selectedZone = signal<Zone>('mid');
  protected readonly selectedDuration = signal<Duration>('monthly');

  protected readonly quote = computed<Quote>(() =>
    this.pricing.calculate(this.selectedZone(), this.selectedDuration()),
  );

  protected recalc(): void {
    // computed quote automatically updates
  }
}
