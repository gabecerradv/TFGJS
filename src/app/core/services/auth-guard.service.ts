import { Injectable } from '@angular/core';
import {Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, public router: Router ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if ( this.auth.isAuthenticated() || this.auth.estaAutenticado()) {
      console.log('Autenticado por el guard');
      return true;
    } else {
      console.error('Bloqueado por el guard');
      this.router.navigate(['/home']);
      // this.auth.login();
      return false;
    }
  }
}
