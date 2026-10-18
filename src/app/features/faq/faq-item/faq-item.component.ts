import { Component, computed, input, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { FaqItem } from '../../../core/services/faq.service';

@Component({
  selector: 'app-faq-item',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './faq-item.component.html',
  styleUrl: './faq-item.component.scss',
})
export class FaqItemComponent {
  readonly item = input.required<FaqItem>();
  protected readonly expanded = signal<boolean>(false);
  protected readonly isExpanded = computed(() => this.expanded());
}
