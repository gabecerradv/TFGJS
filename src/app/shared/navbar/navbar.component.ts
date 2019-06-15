import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css', '../../../assets/css/uncover.css', '../../../assets/css/style.css', '../../../assets/css/fontawesome-all.min.css', '../../../assets/css/set1.css', '../../../assets/css/lightbox.css']
})
export class NavbarComponent implements OnInit {
  profile: any;
  nombre: string;
  id: any;
  id2: any;
  logado: boolean;
  valido: boolean;
  google: boolean;

  constructor(public auth: AuthService, private router: Router) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    this.google = false;
    this.manejarComprobacion();
  }

  buscarUsuario() {
    if (this.auth.estaAutenticado()) {
      const resp = this.auth.getUserLoggedIn();
      this.nombre = resp.name;
      if (this.nombre !== undefined) {
        this.logado = true;
        clearInterval(this.id);
      }
    }

    // console.log(this.nombre);
    // console.log(this.logado);

  }
  manejarComprobacion() {
    if (this.valido || this.logado) {
      clearInterval(this.id);
    }
    this.id = setInterval(() => {
      this.comprobarUser();
      this.buscarUsuario();
      }, 100);

  }

  login() {
    this.auth.login();
  }

  logout() {
    this.logado = false;
    this.valido = false;
    this.auth.logout();
    this.auth.deleteUser();
    this.manejarComprobacion();
    location.reload();
    this.router.navigateByUrl('/home');
  }

  comprobarUser() {
    if (this.auth.isAuthenticated()) {
      if (this.auth.userProfile) {
        this.profile = this.auth.userProfile;
      } else {
        this.auth.getProfile((err, profile) => {
          this.profile = profile;
        });
      }
      if (this.profile !== undefined) {
        this.valido = true;
        clearInterval(this.id);
      }
    }
  }

}
