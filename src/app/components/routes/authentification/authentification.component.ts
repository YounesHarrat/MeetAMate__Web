import { Component, OnInit } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { AuthProfile } from 'src/app/models/auth-profile';
import { UserService } from 'src/app/services/user/user.service';
import { LoginButtonComponent } from 'src/app/shared/authButtons/loginButton/login-button.component';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  profileJson: string = "null";

  constructor(public auth: AuthService, public userService: UserService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {
        console.log('Authentification', profile);
        if (profile ) {

          this.profileJson = JSON.stringify(profile, null, 2);
          let authProfile = new AuthProfile();
          authProfile.nickname = profile?.nickname ? profile.nickname : "";
          authProfile.name = profile?.name ? profile.name : "";
          authProfile.picture = profile?.picture ? profile.picture : "";
          authProfile.updated_at = profile?.updated_at !== undefined ? Date.parse(profile.updated_at) : 0;
          authProfile.email = profile?.email ? profile.email : "";
          authProfile.email_verified = profile?.email_verified !== undefined ? profile.email_verified : false;
          authProfile.sub = profile?.sub ? profile.sub : "";

          this.userService.onAuth(authProfile);

        }
      }
    );
  }


}
