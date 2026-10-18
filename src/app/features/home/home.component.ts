import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ParkingShowcaseComponent } from '../parking-showcase/parking-showcase.component';
import { ProblemComponent } from '../problem/problem.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
import { PlansComponent } from '../plans/plans.component';
import { SecurityComponent } from '../security/security.component';
import { ComparisonComponent } from '../comparison/comparison.component';
import { ComparisonTableComponent } from '../comparison-table/comparison-table.component';
import { PricingCalculatorComponent } from '../pricing-calculator/pricing-calculator.component';
import { FeaturesComponent } from '../features/features.component';
import { AppPreviewComponent } from '../app-preview/app-preview.component';
import { LandownerHeroComponent } from '../landowners/landowner-hero/landowner-hero.component';
import { BeforeAfterComponent } from '../landowners/before-after/before-after.component';
import { BenefitsComponent } from '../landowners/benefits/benefits.component';
import { PartnershipStagesComponent } from '../landowners/partnership-stages/partnership-stages.component';
import { PartnerCtaComponent } from '../landowners/partner-cta/partner-cta.component';
import { AboutComponent } from '../about/about.component';
import { FaqComponent } from '../faq/faq.component';
import { ContactComponent } from '../contact/contact.component';
import { LegalComponent } from '../legal/legal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ParkingShowcaseComponent,
    ProblemComponent,
    HowItWorksComponent,
    PlansComponent,
    SecurityComponent,
    ComparisonComponent,
    ComparisonTableComponent,
    PricingCalculatorComponent,
    FeaturesComponent,
    AppPreviewComponent,
    LandownerHeroComponent,
    BeforeAfterComponent,
    BenefitsComponent,
    PartnershipStagesComponent,
    PartnerCtaComponent,
    AboutComponent,
    FaqComponent,
    ContactComponent,
    LegalComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class Home {}
