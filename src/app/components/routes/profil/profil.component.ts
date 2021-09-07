import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '@auth0/auth0-angular';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';
import { GenericMessageSnackBarComponent } from 'src/app/shared/SnackBars/GenericMessageSnackBarComponent';
import { AuthProfile } from 'src/app/models/auth-profile';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(public userService: UserService, public auth0: AuthService, public snackbar: MatSnackBar) { }

  user = new User();
  ngOnInit(): void {

    this.auth0.user$.subscribe(
      (authProfile: any) => {
        this.userService.onAuth(authProfile);
      }
    )

    this.user = this.userService.user;

    if ( this.user?.nom && this.user?.prenom && this.user?.age ) {

    } else {
      console.log('%c SEEMS LIKE YOUR PROFILE ISNT FINISHED YET ', 'color:red');
    }

    this.auth0.isAuthenticated$.subscribe(
      (result) => {
        if (result) {
          this.snackbar.openFromComponent( GenericMessageSnackBarComponent).instance.openSnackBar(
            'Tell us about you, help us find you a good Mate !'
          );
        } else {
          this.snackbar.openFromComponent( GenericMessageSnackBarComponent).instance.openSnackBar(
            'You need to Login to get access to your Profil.'
          );
        }

      }
    );
    let authed = this.auth0.user$.subscribe(
      obs => {
        console.log({
          obs,
        });
        
      }
    )
    console.log({
      Tuser: this.user,
      UserServiceUser: this.userService.user,
      authed,
    })
  }

}
