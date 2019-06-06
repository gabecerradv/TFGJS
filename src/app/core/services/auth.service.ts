import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {
  private isUserLoggedIn;
  public usserLogged;

  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;
  public userProfile: any;

  auth0 = new auth0.WebAuth({
    clientID: 'rk0y4VnKmH1pRhBDUY5eEQosY4DJFuyt',
    domain: 'dev-gbecerra.eu.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile'
  });

  constructor(
    public router: Router,
    private http: HttpClient
  ) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user) {
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));

  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }


  userLogin(usuario: string, contrasena: string) {
    return this.http.post('https://reqres.in/api/login', {
      email: usuario,
      password: contrasena,
    });
  }

  userRegister() {
    return this.http.post('https://reqres.in/api/login', {

    });
  }

  userPurchase(tipoPlan: string, duracionContrato: number, fechaInicio: string, formaPago: number) {
    return this.http.post('https://reqres.in/api/login', {
      tipo: tipoPlan,
      duracion: duracionContrato,
      fecha: fechaInicio,
      pago: formaPago,
    });
  }

  userProgress() {
    return this.http.post('https://reqres.in/api/login', {

    });
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get idToken(): string {
    return this._idToken;
  }

  public login(): void {
    this.auth0.authorize();
  }
  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.localLogin(authResult);
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
      }
    });
  }

  private localLogin(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = (authResult.expiresIn * 1000) + Date.now();
    this._accessToken = authResult.accessToken;
    this._idToken = authResult.idToken;
    this._expiresAt = expiresAt;
  }

  public renewTokens(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
      } else if (err) {
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
        this.logout();
      }
    });
  }

  public logout(): void {
    // Remove tokens and expiry time
    this._accessToken = '';
    this._idToken = '';
    this._expiresAt = 0;

    this.auth0.logout({
      return_to: window.location.origin
    });
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    return new Date().getTime() < this._expiresAt;
  }

  public getProfile(cb): void {
    // if (!this._accessToken) {
    //   throw new Error('Access Token must exist to fetch profile');
    // }

    const self = this;
    this.auth0.client.userInfo(this._accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }

}
