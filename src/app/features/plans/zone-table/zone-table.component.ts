import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PlansService } from '../../../core/services/plans.service';

@Component({
  selector: 'app-zone-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './zone-table.component.html',
  styleUrl: './zone-table.component.scss',
})
export class ZoneTableComponent {
  private readonly plansService = inject(PlansService);
  protected readonly rows = this.plansService.zoneTable();
  protected readonly displayedColumns: string[] = ['tier', 'areas', 'monthly', 'quarterly'];
}
