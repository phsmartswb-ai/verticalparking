import { Routes } from '@angular/router';
import { Home } from './features/home/home.component';

const SECTION_PATHS = [
  '',
  'problem',
  'how',
  'plans',
  'app',
  'landowners',
  'about',
  'faq',
  'contact',
  'legal',
] as const;

export const routes: Routes = [
  ...SECTION_PATHS.map((path) => ({ path, component: Home })),
  { path: '**', redirectTo: '' },
];
