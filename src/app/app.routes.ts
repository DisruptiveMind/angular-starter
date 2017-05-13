import { Routes } from '@angular/router';
import { APP_PAGES } from '@pages';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: APP_PAGES.HomePage },
  { path: 'home',  component: APP_PAGES.HomePage },
  { path: 'login', component: APP_PAGES.LoginPage },
  { path: 'about', component: APP_PAGES.AboutPage },
  // { path: 'detail', loadChildren: './+detail#DetailModule'},
  // { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: APP_PAGES.NoContentPage },
];
