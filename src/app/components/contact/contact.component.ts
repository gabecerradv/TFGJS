import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css', '../../../assets/css/uncover.css', '../../../assets/css/style.css', '../../../assets/css/fontawesome-all.min.css', '../../../assets/css/set1.css', '../../../assets/css/lightbox.css']
})
export class ContactComponent implements OnInit {
  valido: boolean;
  erroneo: boolean;

  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    const name = forma.value.nombre;
    const apellido = forma.value.apellido;
    const apellido2 = forma.value.apellido2;
    const descripcion = forma.value.descripcion;
    const email = forma.value.email;
    let fijo = forma.value.fijo;
    const opcion = forma.value.opcion_elegida;
    const tel = forma.value.tel;
    this.auth.userContact(name, apellido, apellido2, email, tel, fijo = null, descripcion, opcion)
      .subscribe(res => {
          console.log(res);
          this.valido = true;
        },
        error => {
          this.erroneo = true;
          this.valido = false;
        });
  }

}
