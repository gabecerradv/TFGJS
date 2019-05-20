import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/services/auth-guard.service';

import {ServiceComponent} from './components/service/service.component';
import {HomeComponent} from './components/home/home.component';
import {AccountComponent} from './components/account/account.component';
import {ContactComponent} from './components/contact/contact.component';
import {SportsComponent} from './components/news/sports/sports.component';
import {LastNewsComponent} from './components/news/last-news/last-news.component';
import {LoginComponent} from './components/login/login.component';
import {MapComponent} from './components/map/map.component';
import {RegisterComponent} from "./components/register/register.component";
import {PurchaseComponent} from "./components/purchase/purchase.component";
import {FreeDayComponent} from "./components/free-day/free-day.component";
import {CopyrightComponent} from "./shared/copyright/copyright.component";
import {CookiesComponent} from "./shared/cookies/cookies.component";
import {EvolutionComponent} from "./components/evolution/evolution.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'sports',
    component: SportsComponent
  },
  {
    path: 'last',
    component: LastNewsComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'purchase',
    component: PurchaseComponent
  },
  {
    path: 'copyright',
    component: CopyrightComponent
  },
  {
    path: 'cookies',
    component: CookiesComponent
  },
  {
    path: 'progreso',
    component: EvolutionComponent
  },
  {
    path: 'free',
    component: FreeDayComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
