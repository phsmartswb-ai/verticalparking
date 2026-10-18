import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HiwStepComponent } from './hiw-step/hiw-step.component';

const STEPS = [
  {
    tag: 'Stage 01 — Land Activation',
    title: 'WE FIND THE<br>FORGOTTEN LAND.',
    desc: 'Bengaluru has thousands of idle plots — taxed by owners, dumped on by strangers, profitable for no one. Our team scouts these exact locations in high-demand neighbourhoods and approaches landowners with a simple lease deal: we pay them monthly, they do absolutely nothing.',
    icon: '🏙️',
    num: '1',
    chips: ['📋 Legal Lease Agreement', '💰 Monthly Payout to Owner', '🔍 High-Demand Zones Only', '📐 Min. 150 sqm Plot'],
  },
  {
    tag: 'Stage 02 — Tower Installation',
    title: 'THE TOWER<br>RISES IN 60 DAYS.',
    desc: 'Our vertical rotary carousel system is assembled, tested, and commissioned entirely by Vertipark — no involvement needed from the landowner. The result: a fully enclosed, weatherproof, electro-mechanical tower that stacks 12-16 cars on the footprint of just 3 regular parking spots.',
    icon: '🌀',
    num: '2',
    chips: ['🏗️ 45–60 Day Setup', '🌀 Rotary Carousel', '☔ Weatherproof Enclosure', '📷 CCTV + Fencing Installed', '⚡ 12-16 Cars Per Tower'],
  },
  {
    tag: 'Stage 03 — Smart Access',
    title: 'TAP IN.<br>DRIVE OUT. DONE.',
    desc: 'Every subscriber gets a personalised RFID tag linked to their vehicle. One tap at the gate and the system recognises you, validates your subscription, and opens up. Through the Vertipark app, you can request your car to be ready at the gate — without stepping inside — from wherever you are.',
    icon: '📱',
    num: '3',
    chips: ['🔐 RFID Smart Tag', '📲 Mobile App Control', '🚗 Pickup on Demand', '🔔 Real-time Alerts', '💳 UPI / Card / Wallet'],
  },
  {
    tag: 'Stage 04 — Peace of Mind',
    title: 'YOUR CAR SLEEPS<br>BETTER THAN YOU.',
    desc: 'Inside a Vertipark tower, your car is lifted off the ground, sealed from the elements, watched by HD cameras, and guarded by a trained professional. Sun, rain, dust, rats, scratches, theft — permanently solved. Subscribe once, and never worry about your car again.',
    icon: '✅',
    num: '4',
    chips: ['🔒 24/7 Guard + CCTV', '🌦️ Full Weather Shield', '🐀 Rodent-Proof Enclosure', '🛡️ Vehicle Insurance Cover', '⏱️ 2–4 Min Car Retrieval'],
  },
];

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [MatProgressBarModule, HiwStepComponent],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss',
})
export class HowItWorksComponent {
  protected readonly steps = STEPS;
}
