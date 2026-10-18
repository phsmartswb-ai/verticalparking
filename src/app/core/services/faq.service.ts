import { Injectable, signal } from '@angular/core';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: 'rfid-entry',
    question: 'How does the RFID entry system work?',
    answer: `When you subscribe to any Vertipark plan, you receive a dedicated RFID tag linked to your vehicle and account. Simply hold the tag near the reader at the entrance gate — the system validates your subscription and opens the gate automatically. No app needed for basic entry, though the app provides additional features like pickup requests and notifications.`,
  },
  {
    id: 'pickup-drop',
    question: 'What is the car pickup and drop service?',
    answer: `Monthly and quarterly subscribers can request through the Vertipark app for a staff member to retrieve your car from the rotary carousel and bring it to the ground exit gate — or accept your car at the entrance and park it for you. Monthly plans include 5 uses and quarterly plans include 15 uses per cycle.`,
  },
  {
    id: 'supported-vehicles',
    question: 'What vehicles are supported?',
    answer: `Vertipark towers support standard passenger cars up to the dimensions of a full-size SUV (approximately 4.8m length × 2.0m width × 1.85m height). Hatchbacks, sedans, compact SUVs, and mid-size SUVs are fully supported. Oversized vehicles like trucks, vans, and large commercial vehicles are not supported.`,
  },
  {
    id: 'weather-safety',
    question: 'Is my car safe from weather inside the tower?',
    answer: `Yes, completely. All Vertipark towers are fully enclosed structures with weatherproof cladding. Your vehicle is protected from rain, direct sunlight, dust storms, hail, and extreme heat. The enclosed environment also prevents rodent access — a major cause of wiring damage in outdoor parking.`,
  },
  {
    id: 'cancel-subscription',
    question: 'How do I cancel my subscription?',
    answer: `You can cancel anytime from the Vertipark app under "Manage Subscription." Monthly plans require 7 days' notice before the next billing cycle. Quarterly plans require 15 days' notice. No cancellation fee is charged. Your RFID access remains active until the end of your paid period.`,
  },
  {
    id: 'urgent-retrieval',
    question: 'What if I need my car at odd hours or urgently?',
    answer: `Vertipark towers operate 24/7. You can retrieve your car at any time using your RFID tag. The rotary system is fully automated and does not require staff to operate. For pickup service requests, 10–15 minutes response time is guaranteed during staffed hours.`,
  },
  {
    id: 'retrieval-time',
    question: 'How long does it take to retrieve my car?',
    answer: `The rotary carousel brings your car to ground level in 2–4 minutes depending on its position in the rotation cycle — significantly quicker than searching for a car in a multi-level car park.`,
  },
  {
    id: 'landowner-partner',
    question: 'I own land — how do I become a partner?',
    answer: `Fill out the "Partner With Us" form on our website or call our partnership team. We'll visit your plot within 3–5 days. If your land meets our criteria (minimum 150 sqm, accessible road frontage), we'll present a formal lease offer within 2 weeks. The full process from inquiry to first payment takes 45–60 days.`,
  },
  {
    id: 'damage-insurance',
    question: 'Is there damage insurance for my vehicle?',
    answer: `Monthly and quarterly subscribers receive vehicle protection coverage while parked at Vertipark facilities. This covers any damage occurring within our premises due to mechanical or operational causes. Coverage is bundled into your subscription at no additional cost.`,
  },
  {
    id: 'available-cities',
    question: 'Which cities is Vertipark available in?',
    answer: `Vertipark is launching first in Bengaluru — India's most parking-stressed metro. Our Phase 1 towers will go live in key Bengaluru neighbourhoods including Koramangala, Indiranagar, Whitefield, and HSR Layout. Chennai, Hyderabad, Delhi, and Mumbai are planned for future phases. Register your interest now to be notified when we launch near you.`,
  },
  {
    id: 'pause-subscription',
    question: 'Can I pause my subscription temporarily?',
    answer: `Yes. Monthly and quarterly subscribers can pause for up to 15 days per billing cycle through the app — for example, if traveling. Paused days are credited to your next billing cycle. This feature is available once per subscription period.`,
  },
];

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  readonly faqs = signal<FaqItem[]>(FAQS);
  readonly openId = signal<string | null>(null);

  toggle(id: string): void {
    this.openId.set(this.openId() === id ? null : id);
  }
}
