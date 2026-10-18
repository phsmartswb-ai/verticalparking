import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PlansService } from '../../core/services/plans.service';
import { PlanCardComponent } from './plan-card/plan-card.component';
import { ZoneTableComponent } from './zone-table/zone-table.component';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [MatButtonModule, PlanCardComponent, ZoneTableComponent],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
})
export class PlansComponent {
  private readonly plansService = inject(PlansService);
  protected readonly plans = this.plansService.plans();
}
