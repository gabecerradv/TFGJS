import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-free-day',
  templateUrl: './free-day.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css','../../../assets/css/uncover.css','../../../assets/css/style.css','../../../assets/css/fontawesome-all.min.css','../../../assets/css/set1.css','../../../assets/css/lightbox.css']
})
export class FreeDayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  guardar( forma: NgForm ){
    console.log(forma);
    console.log(forma.value);

  }
}
