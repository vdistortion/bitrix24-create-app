import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { ExamplePageComponent } from './pages/example-page/example-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'settings',
    component: SettingsPageComponent,
  },
  {
    path: 'example',
    component: ExamplePageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
