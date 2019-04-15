import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css','../../../assets/css/uncover.css','../../../assets/css/style.css','../../../assets/css/fontawesome-all.min.css','../../../assets/css/set1.css','../../../assets/css/lightbox.css']
})
export class NavbarComponent implements OnInit {
  profile: any;
  id: any;
  valido: boolean
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    this.comprobarUser();
    this.id = setInterval(() => {
      this.comprobarUser();
    }, 500);
    if (this.valido) {
      clearInterval(this.id);
    }
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
  comprobarUser() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
    if (this.profile != undefined) {
      this.valido = true;
    }
  }
}
