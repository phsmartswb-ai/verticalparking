import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Home {
  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  calculatePrice(): void {
    const zoneEl = document.getElementById('calc-zone') as HTMLSelectElement | null;
    const durationEl = document.getElementById('calc-duration') as HTMLSelectElement | null;
    const planEl = document.getElementById('calc-plan');
    const detailsEl = document.getElementById('calc-details');
    if (!zoneEl || !durationEl || !planEl || !detailsEl) return;

    const zone = zoneEl.value as 'premium' | 'high' | 'mid' | 'standard';
    const duration = durationEl.value as 'daily' | 'weekly' | 'monthly' | 'quarterly';

    const pricing: Record<string, Record<string, string>> = {
      daily: { premium: '₹299-349', high: '₹299', mid: '₹299', standard: '₹299' },
      weekly: { premium: '₹1,999', high: '₹1,799', mid: '₹1,599', standard: '₹1,599' },
      monthly: { premium: '₹5,499', high: '₹4,499', mid: '₹3,999', standard: '₹3,499' },
      quarterly: { premium: '₹14,999', high: '₹11,999', mid: '₹10,999', standard: '₹9,499' },
    };

    const planNames: Record<string, string> = {
      daily: 'Day Pass',
      weekly: 'Weekly Plan',
      monthly: 'Monthly Plan',
      quarterly: 'Quarterly Plan',
    };

    const price = pricing[duration]?.[zone] || '';
    const planName = planNames[duration] || '';
    const periodText: Record<string, string> = {
      daily: '/day',
      weekly: '/week',
      monthly: '/month',
      quarterly: '/quarter',
    };

    planEl.textContent = planName;
    detailsEl.textContent = `Starting from ${price}${periodText[duration] || ''}`;
  }

  toggleFaq(event: Event): void {
    const btn = event.currentTarget as HTMLElement;
    const answer = btn.nextElementSibling as HTMLElement | null;
    if (!answer) return;
    const isOpen = answer.classList.contains('open');
    document.querySelectorAll('.faq-answer').forEach((a) => a.classList.remove('open'));
    document.querySelectorAll('.faq-question').forEach((b) => b.classList.remove('active'));
    if (!isOpen) {
      answer.classList.add('open');
      btn.classList.add('active');
    }
  }

  switchTab(event: Event, panelId: string): void {
    const btn = event.currentTarget as HTMLElement;
    document.querySelectorAll('.legal-tab').forEach((t) => t.classList.remove('active'));
    document.querySelectorAll('.legal-panel').forEach((p) => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(panelId)?.classList.add('active');
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const nameEl = document.getElementById('contact-name') as HTMLInputElement | null;
    const phoneEl = document.getElementById('contact-phone') as HTMLInputElement | null;
    const emailEl = document.getElementById('contact-email') as HTMLInputElement | null;
    const interestEl = document.getElementById('contact-interest') as HTMLSelectElement | null;
    const cityEl = document.getElementById('contact-city') as HTMLSelectElement | null;
    const locationEl = document.getElementById('contact-location') as HTMLSelectElement | null;
    const messageEl = document.getElementById('contact-message') as HTMLTextAreaElement | null;

    const formData = {
      name: nameEl?.value || '',
      phone: phoneEl?.value || '',
      email: emailEl?.value || '',
      interest: interestEl?.value || '',
      city: cityEl?.value || '',
      location: locationEl?.value || '',
      message: messageEl?.value || '',
    };

    const whatsappMessage =
      `*New Contact Form Submission*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Interested In:* ${formData.interest}\n` +
      `*City:* ${formData.city}\n` +
      `*Location:* ${formData.location || 'Not specified'}\n` +
      `*Message:* ${formData.message || 'No additional message'}\n` +
      `*Submitted:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = '919154246438';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    const submitBtn = form.querySelector('[type="submit"]') as HTMLButtonElement | null;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Opening WhatsApp...';
    }

    form.style.display = 'none';
    const successEl = document.getElementById('form-success');
    if (successEl) successEl.style.display = 'block';

    setTimeout(() => {
      window.open(whatsappLink, '_blank');
      setTimeout(() => {
        form.reset();
        form.style.display = 'block';
        if (successEl) successEl.style.display = 'none';
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message →';
        }
      }, 2000);
    }, 500);
  }
}
