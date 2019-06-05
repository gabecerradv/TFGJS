import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css','../../../assets/css/uncover.css','../../../assets/css/style.css','../../../assets/css/fontawesome-all.min.css','../../../assets/css/set1.css','../../../assets/css/lightbox.css']
})
export class PersonalComponent implements OnInit {
ganar: boolean;
perder: boolean;

  constructor() { }

  ngOnInit() {
    this.ganar = false;
    this.perder = false;
  }

  mostrarGanar() {
    this.ganar = true;
  }

  mostrarPerder() {
    this.perder = true;
  }

}
