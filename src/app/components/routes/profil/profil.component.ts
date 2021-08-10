import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(public userService: UserService, public auth0: AuthService) { }

  user = new User();
  ngOnInit(): void {
    this.user = this.userService.user;
    if ( this.user.pseudo ) {

    } else {
      console.log('%c SEEMS LIKE YOUR PROFILE ISNT FINISHED YET ', 'color:red');
    }
  }

}
