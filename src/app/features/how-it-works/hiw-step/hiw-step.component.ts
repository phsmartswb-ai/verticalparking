import { Component, input } from '@angular/core';

export interface HiwStep {
  tag: string;
  title: string;
  desc: string;
  icon: string;
  num: string;
  chips: string[];
}

@Component({
  selector: 'app-hiw-step',
  standalone: true,
  imports: [],
  templateUrl: './hiw-step.component.html',
  styleUrl: './hiw-step.component.scss',
})
export class HiwStepComponent {
  readonly step = input.required<HiwStep>();
}
