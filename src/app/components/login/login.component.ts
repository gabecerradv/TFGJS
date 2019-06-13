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
valido: boolean;

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
    this.valido = true;
    this.auth.setUserLoggedIn(perfil);
    setTimeout(() => {
      this.navigate();
    }, 3000);
  }

  guardar( forma: NgForm ) {
    console.log(forma);
    this.auth.userLogin(forma.value.email, forma.value.Password)
      .subscribe(res => {
          console.log(res);
          this.auth.setUserLoggedIn(res);
          setTimeout(() => {
            this.navigate();
          }, 3000);
          this.valido = true;

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
