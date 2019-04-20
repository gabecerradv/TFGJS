import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css','../../../assets/css/uncover.css','../../../assets/css/style.css','../../../assets/css/fontawesome-all.min.css','../../../assets/css/set1.css','../../../assets/css/lightbox.css']

})
export class HomeComponent implements OnInit {
  valido: boolean;
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {

  }

  login() {
    this.auth.login();
  }

  logout() {
    this.valido = false;
    this.auth.logout();
  }
}
