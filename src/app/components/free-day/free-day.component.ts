import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-free-day',
  templateUrl: './free-day.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css', '../../../assets/css/uncover.css', '../../../assets/css/style.css', '../../../assets/css/fontawesome-all.min.css', '../../../assets/css/set1.css', '../../../assets/css/lightbox.css']
})
export class FreeDayComponent implements OnInit {
  alertDni: boolean;
  erroneo: boolean;
  valido: boolean;

  constructor(public auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    if (!this.alertDni) {
      const nombre = forma.value.nombre;
      const email = forma.value.email;
      const tel = forma.value.tel;
      const dni = forma.value.dni;
      const fecha = forma.value.fecha;
      const hora = forma.value.hora;

      this.auth.userFreeDay(nombre, tel, dni, fecha)
        .subscribe(res => {
            console.log(res);
            setTimeout(() => {
              this.navigate();
            }, 3000);
            this.valido = true;
          },
          error => {
            this.erroneo = true;
              this.valido =false;
          });
    }
  }

  navigate() {
    this.router.navigateByUrl('/home');
  }

  validateDni(valor): void {
    let validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
    let str = valor.value.toString().toUpperCase();
    let letter = str.substr(-1);
    let charIndex = parseInt(str.substr(0, 8)) % 23;
    this.alertDni = validChars.charAt(charIndex) !== letter;
  }
}
