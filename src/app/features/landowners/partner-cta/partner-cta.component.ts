import { Component } from '@angular/core';
import { ScrollService } from '../../../core/services/scroll.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-partner-cta',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './partner-cta.component.html',
  styleUrl: './partner-cta.component.scss',
})
export class PartnerCtaComponent {
  constructor(protected readonly scroll: ScrollService) {}
}
