import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { LoginButtonComponent } from 'src/app/shared/authButtons/loginButton/login-button.component';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  profileJson: string = "null";

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    );
  }


}
