import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-free-day',
  templateUrl: './free-day.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css','../../../assets/css/uncover.css','../../../assets/css/style.css','../../../assets/css/fontawesome-all.min.css','../../../assets/css/set1.css','../../../assets/css/lightbox.css']
})
export class FreeDayComponent implements OnInit {
  alertDni: boolean;
  erroneo: boolean;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  guardar( forma: NgForm ) {
    if (!this.alertDni) {
      console.log(forma);
      console.log(forma.value);
      const nombre =forma.value.nombre;
      const email =forma.value.email;
      const tel =forma.value.tel;
      const dni =forma.value.dni;
      const fecha =forma.value.fecha;
      const hora =forma.value.hora;
      this.auth.userFreeDay(nombre, email, tel, dni, fecha, hora)
        .subscribe(res => {
            console.log(res);


          },
          error => {
            this.erroneo = true;
          });
    }
  }

  validateDni(valor): void {
    let validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
    let str = valor.value.toString().toUpperCase();
    let letter = str.substr(-1);
    let charIndex = parseInt(str.substr(0, 8)) % 23;
    this.alertDni = validChars.charAt(charIndex) !== letter;
  }
}
