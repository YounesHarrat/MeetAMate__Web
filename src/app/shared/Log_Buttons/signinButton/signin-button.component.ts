// src/app/components/login-button/login-button.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-signin-button',
  templateUrl: './signin-button.component.html',
  styles: [],
})
export class SigninButtonComponent implements OnInit {
  constructor(public auth: AuthService) {}

  loggedIn = false;

  ngOnInit(): void {}

  loginWithRedirect(): void {
    this.loggedIn = !this.loggedIn;
    this.auth.loginWithPopup({
      screen_hint: "signup"
    });
  }
}
