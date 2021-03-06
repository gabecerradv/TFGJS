import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ServiceComponent } from './components/service/service.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsletterComponent } from './shared/newsletter/newsletter.component';
import { SportsComponent } from './components/news/sports/sports.component';
import { LastNewsComponent } from './components/news/last-news/last-news.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './core/services/auth.service';
import { MapComponent } from './components/map/map.component';
import { AccountComponent } from './components/account/account.component';
import {AuthGuardService} from './core/services/auth-guard.service';
import { RegisterComponent } from './components/register/register.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { FreeDayComponent } from './components/free-day/free-day.component';
import { FormsModule } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { CopyrightComponent } from './shared/copyright/copyright.component';
import { CookiesComponent } from './shared/cookies/cookies.component';
import { EvolutionComponent } from './components/evolution/evolution.component';
import { PersonalComponent } from './components/personal/personal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServiceComponent,
    HomeComponent,
    FooterComponent,
    GalleryComponent,
    ContactComponent,
    NewsletterComponent,
    SportsComponent,
    LastNewsComponent,
    LoginComponent,
    MapComponent,
    AccountComponent,
    RegisterComponent,
    PurchaseComponent,
    FreeDayComponent,
    CopyrightComponent,
    CookiesComponent,
    EvolutionComponent,
    PersonalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuardService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
