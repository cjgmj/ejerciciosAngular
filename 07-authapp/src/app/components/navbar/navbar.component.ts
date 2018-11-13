import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor( private auth: AuthService ) {
    auth.handleAuthentication();
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

  isAuthenticated() {
    this.auth.isAuthenticated();
  }

}
