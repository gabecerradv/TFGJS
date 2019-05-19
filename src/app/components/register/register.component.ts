import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

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

    guardar(forma: NgForm): void {
        if (!this.alertDni && this.contIguales) {
            console.log(forma);
            console.log(forma.value);
        }
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
