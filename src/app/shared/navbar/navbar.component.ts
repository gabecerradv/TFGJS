import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css','../../../assets/css/uncover.css','../../../assets/css/style.css','../../../assets/css/fontawesome-all.min.css','../../../assets/css/set1.css','../../../assets/css/lightbox.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}
