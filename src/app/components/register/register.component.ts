import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../../assets/css/bootstrap.min.css', '../../../assets/css/uncover.css', '../../../assets/css/style.css', '../../../assets/css/fontawesome-all.min.css', '../../../assets/css/set1.css', '../../../assets/css/lightbox.css']
})

export class RegisterComponent implements OnInit {
  alertDni: boolean;
  contIguales: boolean;
  erroneo: boolean;
  valido: boolean;

  constructor(public auth: AuthService, private router: Router) {
  }

  ngOnInit() {
      this.erroneo = false;
  }

  guardar(forma: NgForm): void {
    if (!this.alertDni && this.contIguales) {
      const p1 = forma.value.Password1;
      const apellido = forma.value.apellido;
      const apellido2 = forma.value.apellido2;
      const dni = forma.value.dni;
      const email = forma.value.email;
      const nick = forma.value.nick;
      const nombre = forma.value.nombre;
      const direccion = forma.value.direccion;

      this.auth.userRegister(nombre, apellido, apellido2, email, nick, dni, p1, direccion)
        .subscribe(res => {
            console.log(res);
            this.valido = true;
          },
          error => {
            this.erroneo = true;
              this.valido =false;
          });
    }
  }

  navigate() {
    this.router.navigateByUrl('/login');
  }

  validatePaswords(forma: NgForm): void {
    let password1 = forma.value.Password1;
    let password2 = forma.value.Password2;
    this.contIguales = password1 == password2;
  }

  validateDni(valor): void {
    let validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
    let str = valor.value.toString().toUpperCase();
    let letter = str.substr(-1);
    let charIndex = parseInt(str.substr(0, 8)) % 23;
    this.alertDni = validChars.charAt(charIndex) !== letter;
  }

}
