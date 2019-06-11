import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css', '../../../assets/css/uncover.css', '../../../assets/css/style.css', '../../../assets/css/fontawesome-all.min.css', '../../../assets/css/set1.css', '../../../assets/css/lightbox.css']
})
export class LoginComponent implements OnInit {
erroneo: boolean;

  constructor(public auth: AuthService, private router: Router) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    this.erroneo = false;

  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
  guardarPerfil() {
    const perfil = {
      nombre: 'gafito',
      fecha_nacimiento: '29/12/1985',
      email: 'gabecerrafit@gmail.com'
    };
    this.auth.setUserLoggedIn(perfil);
  }

  guardar( forma: NgForm ) {
    console.log(forma);
    console.log(forma.value.email);
    console.log(forma.value.Password);
    this.auth.userLogin(forma.value.email, forma.value.Password)
      .subscribe(res => {
          console.log(res);
          this.auth.setUserLoggedIn(res);

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
