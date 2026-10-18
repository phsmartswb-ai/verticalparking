import { Component, computed, inject, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { LegalService } from '../../core/services/legal.service';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss',
})
export class LegalComponent {
  protected readonly legal = inject(LegalService);
  private readonly scroll = inject(ScrollService);
  protected readonly tabIndex = signal(0);

  protected readonly activePanel = computed(() => this.legal.panels()[this.tabIndex()]);

  protected onTabChange(index: number): void {
    this.tabIndex.set(index);
    this.legal.activate(index === 0 ? 'privacy' : 'terms');
    setTimeout(() => this.scroll.scrollTo('legal'), 50);
  }

  protected renderBlock(block: { paragraphs?: string[]; listItems?: string[] }): void {
    // placeholder for template-side structural rendering
  }
}
