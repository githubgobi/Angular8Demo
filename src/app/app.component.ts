import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  isLoggedIn = false;
  currentUser: any;
  	constructor(
        private router: Router,
        private authenticationService: AuthenticationService,

    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        if(this.authenticationService.currentUserValue){
          this.isLoggedIn = this.authenticationService.currentUserValue;        
        }
        console.log(this.isLoggedIn);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
