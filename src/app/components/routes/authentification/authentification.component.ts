import { Component, OnInit } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  loggedIn = false;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    console.log('loggedIn', this.loggedIn);

  }

  loginWithRedirect(): void {
    this.loggedIn = !this.loggedIn;
    this.auth.loginWithRedirect();

  }

}
