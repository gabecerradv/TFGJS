import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiceComponent} from "./components/service/service.component";
import {HomeComponent} from "./components/home/home.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {ContactComponent} from "./components/contact/contact.component";
import {SportsComponent} from "./components/news/sports/sports.component";
import {LastNewsComponent} from "./components/news/last-news/last-news.component";
import {LoginComponent} from './components/login/login.component';


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
    path: 'gallery',
    component: GalleryComponent
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
    path: 'login',
    component: LoginComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
