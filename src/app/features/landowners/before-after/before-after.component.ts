import { Component } from '@angular/core';

const BA_PAIRS = [
  {
    label: 'BEFORE',
    img: 'assets/images/ba-before.jpg',
    imgAlt: 'Idle vacant urban land — unused, untapped, generating no income',
    icon: '😟',
    title: 'YOUR LAND TODAY',
    points: [
      'Overrun with garbage dumped by strangers',
      'Occupied illegally with no compensation',
      'Paying heavy property taxes with zero returns',
      'Attracting encroachments and legal complications',
      'Depreciating in cleanliness and perceived value',
      'Constant stress and maintenance headaches',
      'Liability risk from accidents on your property',
    ],
  },
  {
    label: 'AFTER',
    img: 'assets/images/ba-after.jpg',
    imgAlt: 'Modern vertical multi-level car park — secure, automated, revenue-generating',
    icon: '🤩',
    title: 'YOUR LAND WITH VERTIPARK',
    points: [
      'Generating steady monthly or quarterly lease income',
      'Professionally managed with zero involvement from you',
      'Clean, fenced, CCTV-monitored and secured 24/7',
      'Fully legal lease agreement with documented terms',
      'Property value maintained and enhanced',
      'Community goodwill from solving local parking shortage',
      'Easy exit — agreement terms protect both parties',
    ],
  },
];

@Component({
  selector: 'app-before-after',
  standalone: true,
  imports: [],
  templateUrl: './before-after.component.html',
  styleUrl: './before-after.component.scss',
})
export class BeforeAfterComponent {
  protected readonly pairs = BA_PAIRS;
}
