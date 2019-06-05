import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css','../../../assets/css/uncover.css','../../../assets/css/style.css','../../../assets/css/fontawesome-all.min.css','../../../assets/css/set1.css','../../../assets/css/lightbox.css']
})
export class EvolutionComponent implements OnInit {
  profile: any;
  facebook: boolean;
  google: boolean;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.obtenerPerfil();
    this.facebook = false;
    this.google = false;
    this.comprobarFuente();
  }

  obtenerPerfil() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      console.log(this.profile);
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile);
      });
    }
  }

  comprobarFuente() {
    const cadenaf = this.profile.sub.substr(0,8);
    const cadenag = this.profile.sub.substr(0,6);
    if (cadenaf == 'facebook') {
      this.facebook = true;
      console.log('the has logado con fb');
    }
    if (cadenag == 'google') {
      this.google = true;
      console.log('the has logado con google');
    }
  }

}
