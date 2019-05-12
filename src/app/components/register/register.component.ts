import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../../../assets/css/bootstrap.min.css','../../../assets/css/uncover.css','../../../assets/css/style.css','../../../assets/css/fontawesome-all.min.css','../../../assets/css/set1.css','../../../assets/css/lightbox.css']

})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  guardar( forma: NgForm ) {
    let dni = forma.value.dni;
    if (this.validate(dni)){
      console.log(forma);
      console.log(forma.value);
    }
  }

  validate(value){

    let validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
    let str = value.toString().toUpperCase();
    let letter = str.substr(-1);
    let charIndex = parseInt(str.substr(0, 8)) % 23;
    return validChars.charAt(charIndex) === letter;


  }

}
