import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiceComponent} from "./components/service/service.component";
import {HomeComponent} from "./components/home/home.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
    },
  {
    path: 'service',
    component: ServiceComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
