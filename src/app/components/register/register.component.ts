import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css', '../../../assets/css/bootstrap.min.css', '../../../assets/css/uncover.css', '../../../assets/css/style.css', '../../../assets/css/fontawesome-all.min.css', '../../../assets/css/set1.css', '../../../assets/css/lightbox.css']

})
export class RegisterComponent implements OnInit {
    alertDni: boolean;
    contIguales: boolean;

    constructor() {
    }

    ngOnInit() {
    }

    guardar(forma: NgForm) {
        if (!this.alertDni && this.contIguales) {
            console.log(forma);
            console.log(forma.value);
        }
    }

    validatePaswords(forma: NgForm) {
        let password1 = forma.value.Password1;
        let password2 = forma.value.Password2;
        if (password1 == password2) {
            this.contIguales = true;
        } else {
            this.contIguales = false;
        }
    }

    validateDni(valor) {
        let validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
        let str = valor.value.toString().toUpperCase();
        let letter = str.substr(-1);
        let charIndex = parseInt(str.substr(0, 8)) % 23;
        if (validChars.charAt(charIndex) === letter) {
            this.alertDni = false;
        } else {
            this.alertDni = true;
        }
    }

}
