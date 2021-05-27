import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(public userService: UserService, public auth0: AuthService) { }


  ngOnInit(): void {

    console.log('ProfilComponent init', this.userService);

  }

}
