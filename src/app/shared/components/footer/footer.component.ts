import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ScrollService } from '../../../core/services/scroll.service';

const COMPANY_LINKS = [
  { label: 'About Us', anchor: 'about' },
  { label: 'How It Works', anchor: 'how' },
  { label: 'FAQ', anchor: 'faq' },
  { label: 'Contact Us', anchor: 'contact' },
];

const SERVICE_LINKS = [
  { label: 'Day Parking', anchor: 'plans' },
  { label: 'Weekly Plans', anchor: 'plans' },
  { label: 'Monthly Plans', anchor: 'plans' },
  { label: 'Quarterly Plans', anchor: 'plans' },
];

const LANDOWNER_LINKS = [
  { label: 'Why Partner?', anchor: 'landowners' },
  { label: 'How It Works', anchor: 'partnership-stages' },
  { label: 'Get a Quote', anchor: 'contact' },
  { label: 'Legal Info', anchor: 'legal' },
];

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly companyLinks = COMPANY_LINKS;
  protected readonly serviceLinks = SERVICE_LINKS;
  protected readonly landownerLinks = LANDOWNER_LINKS;

  protected readonly scrollTopVisible = signal<boolean>(false);

  constructor(protected readonly scroll: ScrollService) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrollTopVisible.set(window.scrollY > 400);
  }

  protected goTo(anchor: string): void {
    this.scroll.scrollTo(anchor);
  }
}
