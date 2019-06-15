import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css', '../../../assets/css/uncover.css', '../../../assets/css/style.css', '../../../assets/css/fontawesome-all.min.css', '../../../assets/css/set1.css', '../../../assets/css/lightbox.css']
})
export class AccountComponent implements OnInit {
  profile: any;
  perfil: any;
  facebook: boolean;
  google: boolean;

  constructor(public auth: AuthService) { }

  ngOnInit() {
      this.obtenerPerfil();
      this.facebook = false;
      this.google = false;
      if (this.profile) {
        this.comprobarFuente();
      }
      this.buscarUsuario();
  }

  buscarUsuario() {
    if (this.auth.estaAutenticado()) {
      this.perfil = this.auth.getUserLoggedIn();
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
    const cadenaf = this.profile.sub.substr(0,8);
    const cadenag = this.profile.sub.substr(0,6);
    if (cadenaf == 'facebook') {
      this.facebook = true;
    }
    if (cadenag == 'google') {
      this.google = true;
    }
  }
}
