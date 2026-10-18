import { Injectable } from '@angular/core';

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  interest: string;
  city: string;
  location: string;
  message: string;
}

export type ContactFormValue = ContactFormData;

const WHATSAPP_NUMBER = '919154246438';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  buildWhatsAppMessage(data: ContactFormData): string {
    return [
      '*New Contact Form Submission*',
      '',
      `*Name:* ${data.name}`,
      `*Phone:* ${data.phone}`,
      `*Email:* ${data.email}`,
      `*Interested In:* ${data.interest}`,
      `*City:* ${data.city}`,
      `*Location:* ${data.location || 'Not specified'}`,
      `*Message:* ${data.message || 'No additional message'}`,
      `*Submitted:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
    ].join('\n');
  }

  buildWhatsAppLink(message: string): string {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  openWhatsApp(data: ContactFormData): void {
    const link = this.buildWhatsAppLink(this.buildWhatsAppMessage(data));
    window.open(link, '_blank');
  }
}
