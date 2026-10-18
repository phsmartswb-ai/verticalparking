import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatError } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { ContactService, ContactFormValue } from '../../core/services/contact.service';

const INTERESTS = [
  'Parking for my car (Day Pass)',
  'Parking for my car (Monthly Plan)',
  'Parking for my car (Quarterly Plan)',
  'Leasing my land to Vertipark',
  'Corporate / Fleet Parking',
  'General Inquiry',
];

const LOCATIONS = [
  'Bengaluru',
  'Koramangala',
  'Whitefield',
  'Indiranagar',
  'HSR Layout',
  'MG Road',
  'Connaught Place',
  'Jayanagar',
  'Bellandur',
  'Marathahalli',
  'Sarjapur Road',
  'RT Nagar',
  'Vijayanagar',
  'Bannerghatta Road',
  'Richmond Town',
  'UB City',
  'Frazer Town',
  'Hebbal',
  'Yeshwantpur',
  'Malleshwaram',
  'Peenya',
  'Other Location',
];

const CITIES = ['Bengaluru', 'Chennai', 'Hyderabad', 'Delhi', 'Mumbai', 'Pune', 'Other'];

const CONTACT_ITEMS = [
  { icon: '📍', label: 'Headquarters', value: 'Bengaluru, Karnataka' },
  { icon: '📞', label: 'Phone', value: '+91 91542 46438' },
  { icon: '✉️', label: 'Email', value: 'phsmart.swb@gmail.com' },
  { icon: '🕐', label: 'Business Hours', value: 'Monday – Saturday, 9:00 AM – 7:00 PM IST' },
  { icon: '🌐', label: 'Social Media', value: 'WhatsApp · Instagram · LinkedIn · X' },
];

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatError,
    NgIf,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected readonly interests = INTERESTS;
  protected readonly locations = LOCATIONS;
  protected readonly cities = CITIES;
  protected readonly contactItems = CONTACT_ITEMS;

  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly contact: ContactService,
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: [''],
      interest: ['', Validators.required],
      city: ['Bengaluru', Validators.required],
      location: ['', Validators.required],
      message: [''],
    });
  }

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.contact.openWhatsApp(this.form.value as unknown as ContactFormValue);
  }
}
