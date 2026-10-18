import { Component, signal, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent {
  readonly navOpen = signal(false);

  toggleNav(): void {
    this.navOpen.update((v) => !v);
  }

  closeNav(): void {
    this.navOpen.set(false);
  }

  bookSpot(): void {
    this.closeNav();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
