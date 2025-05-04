import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GeneratorPageComponent } from './pages/generator-page/generator-page.component';
import { PlacementPageComponent } from './pages/placement-page/placement-page.component';
import { ExamplePageComponent } from './pages/example-page/example-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'generator',
    component: GeneratorPageComponent,
  },
  {
    path: 'placement',
    component: PlacementPageComponent,
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
