import { Injectable, signal } from '@angular/core';

export interface LegalTab {
  id: 'privacy' | 'terms';
  label: string;
}

export interface LegalBlock {
  heading: string;
  paragraphs?: string[];
  listItems?: string[];
}

export interface LegalPanel {
  id: 'privacy' | 'terms';
  blocks: LegalBlock[];
}

const TABS: LegalTab[] = [
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'terms', label: 'Terms & Conditions' },
];

const PANELS: LegalPanel[] = [
  {
    id: 'privacy',
    blocks: [
      {
        heading: '1. Information We Collect',
        paragraphs: [
          'Vertipark Technologies Pvt. Ltd. ("Vertipark") collects information you provide when registering for our services, including your full name, email address, phone number, vehicle registration number, and payment details. We also collect technical data from the Vertipark app including device identifiers, location data (with your permission), and usage logs.',
        ],
      },
      {
        heading: '2. How We Use Your Information',
        listItems: [
          'To create and manage your parking subscription account',
          'To process payments and send billing receipts',
          'To operate RFID-based entry and exit systems at our facilities',
          'To send service notifications, renewal reminders, and pickup alerts via app or SMS',
          'To improve our services through anonymized usage analytics',
          'To comply with applicable Indian laws and regulations',
        ],
      },
      {
        heading: '3. CCTV and Surveillance Data',
        paragraphs: [
          'All Vertipark facilities are equipped with closed-circuit television cameras. Footage is retained for 30 days and is accessible only to authorized Vertipark operations personnel and law enforcement agencies upon valid legal request. CCTV footage is not sold or shared with third parties under any other circumstances.',
        ],
      },
      {
        heading: '4. Data Sharing & Third Parties',
        paragraphs: [
          'We do not sell, rent, or trade your personal data to any third party for marketing purposes.',
        ],
      },
      {
        heading: '5. Data Security',
        paragraphs: [
          'We implement industry-standard security measures including SSL/TLS encryption, secure server infrastructure, and access controls to protect your personal data. No method of transmission over the internet is 100% secure. We encourage users to keep their app credentials confidential.',
        ],
      },
      {
        heading: '6. Your Rights',
        listItems: [
          'Right to access the personal data we hold about you',
          'Right to request correction of inaccurate data',
          'Right to request deletion of your account and associated data',
          'Right to withdraw consent for non-essential data use at any time',
        ],
        paragraphs: [
          'To exercise any of these rights, contact us at phsmart.swb@gmail.com. We respond within 30 days.',
        ],
      },
      {
        heading: '7. Cookies & App Analytics',
        paragraphs: [
          'The Vertipark website uses cookies for session management and analytics. The mobile app uses anonymized crash reporting to improve performance. You may disable cookies in your browser settings; however, some features may not function correctly.',
        ],
      },
      {
        heading: '8. Changes to This Policy',
        paragraphs: [
          'Vertipark reserves the right to update this Privacy Policy from time to time. Changes will be notified via the app and posted on this page. Continued use of our services after changes constitutes acceptance of the updated policy.',
        ],
      },
    ],
  },
  {
    id: 'terms',
    blocks: [
      {
        heading: '1. Acceptance of Terms',
        paragraphs: [
          'By registering for and using Vertipark\'s parking services, mobile application, or website, you agree to be bound by these Terms and Conditions. If you do not agree, do not use our services. These terms govern all subscriptions, day passes, RFID access, vehicle pickup/drop services, and any interactions with Vertipark facilities.',
        ],
      },
      {
        heading: '2. Subscription Plans & Payments',
        listItems: [
          'All subscription plans are pre-paid and non-refundable once the billing cycle has commenced',
          'Prices are subject to change with 30 days\' notice to existing subscribers',
          'Failed payments will result in suspension of RFID access until payment is cleared',
          'Payment disputes must be raised within 7 days of the billing date',
        ],
      },
      {
        heading: '3. Pickup & Drop Service Terms',
        listItems: [
          'Pickup/drop requests must be made at least 15 minutes in advance via the app',
          'Vertipark staff will handle your vehicle with due care; we are not liable for pre-existing damage',
          'All vehicle movements are recorded on CCTV',
          'Pickup/drop credits are non-transferable and cannot be carried over between billing cycles',
        ],
      },
      {
        heading: '4. Vehicle Liability',
        paragraphs: [
          'Vertipark provides vehicle protection coverage for monthly and quarterly subscribers covering mechanical damage occurring within our facility during normal operations. This coverage does not extend to damage from vehicle fire, flooding from force majeure events, or damage due to incorrect vehicle specifications provided at registration.',
        ],
      },
      {
        heading: '5. User Obligations',
        listItems: [
          'You must register only vehicles you own or are authorized to park',
          'Vehicle dimensions must not exceed tower specifications communicated at registration',
          'RFID tags must not be shared or transferred to unauthorized parties',
          'Lost or stolen RFID tags must be reported immediately via the app or helpline',
          'Misuse of facilities may result in immediate termination of membership without refund',
        ],
      },
      {
        heading: '6. Facility Access & Operating Hours',
        paragraphs: [
          'Vertipark towers provide RFID-based self-service access 24/7. Staffed services including pickup/drop are available during published operational hours which may vary by location. Vertipark reserves the right to temporarily close a facility for maintenance with advance notice where possible.',
        ],
      },
      {
        heading: '7. Landowner Partner Agreement',
        paragraphs: [
          'Landowners who enter into lease agreements with Vertipark do so under separately executed legal lease deeds which supersede these general terms. All land lease agreements are subject to applicable Indian property laws. Vertipark does not acquire ownership rights over leased land under any circumstances.',
        ],
      },
      {
        heading: '8. Intellectual Property',
        paragraphs: [
          'All content on the Vertipark website and app, including text, design, logos, and software, is the intellectual property of Vertipark Technologies Private Limited. Reproduction, redistribution, or commercial use of any content without written permission is strictly prohibited.',
        ],
      },
      {
        heading: '9. Governing Law & Disputes',
        paragraphs: [
          'These terms are governed by the laws of India. Unresolved disputes shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka.',
        ],
      },
      {
        heading: '10. Contact for Legal Matters',
        paragraphs: [
          'For any questions regarding these Terms and Conditions or Privacy Policy, contact us at phsmart.swb@gmail.com or write to: Vertipark Technologies Private Limited, Koramangala, Bengaluru, Karnataka 560034.',
        ],
      },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class LegalService {
  readonly tabs = signal<Tab[]>(TABS);
  readonly panels = signal<LegalPanel[]>(PANELS);
  readonly activeId = signal<'privacy' | 'terms'>('privacy');

  activate(id: 'privacy' | 'terms'): void {
    this.activeId.set(id);
  }
}

type Tab = LegalTab;
