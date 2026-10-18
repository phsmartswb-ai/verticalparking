import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PlanCard } from '../../../core/services/plans.service';

@Component({
  selector: 'app-plan-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './plan-card.component.html',
  styleUrl: './plan-card.component.scss',
})
export class PlanCardComponent {
  readonly plan = input.required<PlanCard>();
}
