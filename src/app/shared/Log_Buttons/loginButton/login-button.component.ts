// src/app/components/login-button/login-button.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styles: []
})
export class LoginButtonComponent implements OnInit {
  constructor(public auth: AuthService) {}

  loggedIn = false;

  ngOnInit(): void {}

  loginWithRedirect(): void {
    this.loggedIn = !this.loggedIn;
    this.auth.loginWithPopup();
  }
}
