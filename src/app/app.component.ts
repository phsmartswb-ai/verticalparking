import { Component, HostListener, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/components/nav/nav.component';
import { TickerComponent } from './shared/components/ticker/ticker.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, TickerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  protected readonly title = 'Vertipark';
  protected readonly backToTopVisible = signal(false);
  protected readonly cookieConsentVisible = signal(false);

  ngOnInit(): void {
    try {
      if (typeof window !== 'undefined' && localStorage.getItem('vertipark-cookies-accepted') !== 'true') {
        setTimeout(() => {
          this.cookieConsentVisible.set(true);
        }, 800);
      }
    } catch {
      // ignore storage errors
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (typeof window !== 'undefined') {
      this.backToTopVisible.set(window.scrollY > 400);
    }
  }

  scrollToTop(event: Event): void {
    event.preventDefault();
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  acceptCookies(): void {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('vertipark-cookies-accepted', 'true');
      }
    } catch {
      // ignore storage errors
    }
    this.cookieConsentVisible.set(false);
  }

  switchTabByName(panelId: 'privacy' | 'terms'): void {
    const tabs = document.querySelectorAll('.legal-tab');
    document.querySelectorAll('.legal-panel').forEach((p) => p.classList.remove('active'));
    tabs.forEach((t) => t.classList.remove('active'));
    document.getElementById(panelId)?.classList.add('active');
    tabs.forEach((t) => {
      if (
        (panelId === 'privacy' && t.textContent?.includes('Privacy')) ||
        (panelId === 'terms' && t.textContent?.includes('Terms'))
      ) {
        t.classList.add('active');
      }
    });
    setTimeout(() => document.getElementById('legal')?.scrollIntoView({ behavior: 'smooth' }), 50);
  }
}
