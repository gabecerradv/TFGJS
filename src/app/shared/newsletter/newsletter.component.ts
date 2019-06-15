import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css','../../../assets/css/uncover.css','../../../assets/css/style.css','../../../assets/css/fontawesome-all.min.css','../../../assets/css/set1.css','../../../assets/css/lightbox.css']
})

export class NewsletterComponent implements OnInit {
erroneo: boolean;
valido: boolean;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  guardar( forma: NgForm ) {
    console.log(forma);
    console.log(forma.value.email);
    console.log(forma.value.Password);
    this.auth.userNewsletter(forma.value.email)
      .subscribe(res => {
          console.log(res);
          setTimeout(() => {
            this.navigate();
          }, 2000);
          this.valido = true;

        },
        error => {
          this.erroneo = true;
          this.valido =false;
        },
        // () => this.navigate()
       );
  }

  navigate() {
    this.router.navigateByUrl('/home');
  }
}
