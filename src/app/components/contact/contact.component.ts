import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css','../../../assets/css/uncover.css','../../../assets/css/style.css','../../../assets/css/fontawesome-all.min.css','../../../assets/css/set1.css','../../../assets/css/lightbox.css']
})
export class ContactComponent implements OnInit {
valido: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  guardar( forma: NgForm ) {
    setTimeout(() => {
      this.navigate();
      }, 3800);
    setTimeout(() => {
      this.valido = true;
    }, 2000);
  }

  navigate() {
    this.router.navigateByUrl('/home');
  }
}
