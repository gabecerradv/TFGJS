import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css','../../../assets/css/uncover.css','../../../assets/css/style.css','../../../assets/css/fontawesome-all.min.css','../../../assets/css/set1.css','../../../assets/css/lightbox.css']
})
export class EvolutionComponent implements OnInit {
  profile: any;
  perfil: any;
  id: number;
  facebook: boolean;
  google: boolean;
  fuente: string;
  datos: any[];
  erroneo: boolean;
  valido: boolean;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.obtenerPerfil();
      this.buscarUsuario();
      this.facebook = false;
      this.google = false;
      this.datos = [];
      if (this.profile) {
          this.comprobarFuente();
      }
      this.obtenerProgreso();
  }

  buscarUsuario() {
    if (this.auth.estaAutenticado()) {
      this.perfil = this.auth.getUserLoggedIn();
      this.id = this.perfil.id;
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
      this.fuente = 'Facebook';
    }
    if (cadenag == 'google') {
      this.google = true;
      this.fuente = 'Google';
    }
  }

  guardar( forma: NgForm ) {
    this.auth.userProgress(this.id, forma.value.peso, forma.value.fecha)
      .subscribe(res => {
          this.valido = true;
          this.obtenerProgreso();
        },
        error => {
          this.erroneo = true;
            this.valido =false;
        });
  }

  obtenerProgreso() {
    this.auth.loadUserProgress(this.id)
      .subscribe(res => {
          console.log(res['data']);
          this.datos = [res['data']];
        },
        error => {
          this.erroneo = true;
        });

  }

  navigate() {
    this.router.navigateByUrl('/home');
  }

}
