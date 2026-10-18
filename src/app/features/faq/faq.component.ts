import { Component, inject } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { FaqService } from '../../core/services/faq.service';
import { FaqItemComponent } from './faq-item/faq-item.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [MatExpansionModule, FaqItemComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  protected readonly faq = inject(FaqService);
}
