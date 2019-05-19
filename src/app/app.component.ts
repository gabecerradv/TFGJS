import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/bootstrap.min.css','../assets/css/uncover.css','../assets/css/style.css','../assets/css/fontawesome-all.min.css','../assets/css/set1.css','../assets/css/lightbox.css']

})
  export class AppComponent implements OnInit {
    title = 'ponteFit';
    cookieValue: string;
    visible: boolean;

  constructor( private  cookieService: CookieService) {}

  ngOnInit(): void {
    this.cookieValue = this.cookieService.get('Cookie_PonteFit');
    if (!this.cookieValue) {
      this.visible = true;
    }
  }

  onGRDP() {
    this.visible = !this.visible;
    this.cookieService.set( 'Cookie_PonteFit', 'GDPR' );
  }

}
