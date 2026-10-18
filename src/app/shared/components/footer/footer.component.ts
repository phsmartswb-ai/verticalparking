import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
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
