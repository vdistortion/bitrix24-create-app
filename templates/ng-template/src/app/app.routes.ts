import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlacementPageComponent } from './pages/placement-page/placement-page.component';
import { ExamplePageComponent } from './pages/example-page/example-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'placement',
    component: PlacementPageComponent
  },
  {
    path: 'example',
    component: ExamplePageComponent
  }
];
