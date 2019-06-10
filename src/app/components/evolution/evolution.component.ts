import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css','../../../assets/css/uncover.css','../../../assets/css/style.css','../../../assets/css/fontawesome-all.min.css','../../../assets/css/set1.css','../../../assets/css/lightbox.css']
})
export class EvolutionComponent implements OnInit {
  profile: any;
  facebook: boolean;
  google: boolean;
  fuente: string;
  datos: any[];
  erroneo: boolean;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.obtenerPerfil();
    this.facebook = false;
    this.google = false;
    if (this.profile) {
      this.comprobarFuente();
    }
    // this.datos = [
    //   {
    //     dia: '19/07/19',
    //     peso: 115
    //   },
    //   {
    //     dia: '29/07/19',
    //     peso: 110
    //   }
    // ];
  console.log(this.datos.length);
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
    console.log(forma);
    console.log(forma.value);
    this.auth.userProgress(forma.value.peso, forma.value.fecha)
      .subscribe(res => {
          console.log(res);


        },
        error => {
          this.erroneo = true;
        });
  }
  navigate() {
    this.router.navigateByUrl('/home');
  }

}
