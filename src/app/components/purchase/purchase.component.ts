import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css', '../../../assets/css/uncover.css', '../../../assets/css/style.css', '../../../assets/css/fontawesome-all.min.css', '../../../assets/css/set1.css', '../../../assets/css/lightbox.css']
})
export class PurchaseComponent implements OnInit {
  profile: any;
  facebook: boolean;
  google: boolean;
  fuente: string;
  erroneo: boolean;

  constructor(public auth: AuthService, private router: Router) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    this.erroneo = false;
    this.obtenerPerfil();
    this.facebook = false;
    this.google = false;
    if (this.profile) {
      this.comprobarFuente();
    }
  }

  obtenerPerfil() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

  comprobarFuente() {
    const cadenaf = this.profile.sub.substr(0, 8);
    const cadenag = this.profile.sub.substr(0, 6);
    if (cadenaf == 'facebook') {
      this.facebook = true;
      this.fuente = 'Facebook';
          }
    if (cadenag == 'google') {
      this.google = true;
      this.fuente = 'Google';
          }
  }

  guardar( forma: NgForm ) {
    console.log(forma.value);
    console.log(forma.value.email);
    console.log(forma.value.Password);
    this.auth.userPurchase(forma.value.plan, forma.value.duracion, forma.value.inicio, forma.value.forma_pago)
      .subscribe(res => {
          console.log(res);

        },
        error => {
          this.erroneo = true;
        },
        () => this.navigate()
      );
  }

  navigate() {
    this.router.navigateByUrl('/home');
  }
}
