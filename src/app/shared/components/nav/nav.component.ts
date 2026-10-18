import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { NavService } from '../../../core/services/nav.service';
import { ScrollService } from '../../../core/services/scroll.service';

const LINKS = [
  { label: 'Problem', anchor: 'problem' },
  { label: 'How It Works', anchor: 'how' },
  { label: 'Plans', anchor: 'plans' },
  { label: 'Landowners', anchor: 'landowners' },
  { label: 'About', anchor: 'about' },
  { label: 'FAQ', anchor: 'faq' },
  { label: 'Contact', anchor: 'contact' },
];

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  protected readonly links = LINKS;

  constructor(
    protected readonly nav: NavService,
    protected readonly scroll: ScrollService,
  ) {}

  protected get opened() {
    return this.nav.opened;
  }

  protected toggleMenu(): void {
    this.nav.toggle();
  }

  protected closeMenu(): void {
    this.nav.close();
  }

  protected goTo(anchor: string): void {
    this.scroll.scrollTo(anchor);
    this.closeMenu();
  }
}
