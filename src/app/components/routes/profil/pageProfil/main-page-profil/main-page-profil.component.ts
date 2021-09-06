import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-main-page-profil',
  templateUrl: './main-page-profil.component.html',
  styleUrls: ['./main-page-profil.component.css']
})
export class MainPageProfilComponent implements OnInit {

  // user = {
  //   pseudo: "NachossOG",
  //   nom: "Harrat",
  //   prenom: "Younes",
  //   age: "24",
  //   favorite: "Rocket League",
  //   gameUser: [
  //     {
  //       "Id" : 1,
  //       "Name" : "Rocket League",
  //       "Hours" : 15,
  //     },
  //     {
  //       "Id" : 2,
  //       "Name" : "Osu",
  //       "Hours" : 4,
  //     },
  //     {
  //       "Id" : 3,
  //       "Name" : "Minecraft",
  //       "Hours" : 64,
  //     },
  //     {
  //       "Id" : 4,
  //       "Name" : "League of Legends",
  //       "Hours" : 547,
  //     },
  //     {
  //       "Id" : 5,
  //       "Name" : "Paladin",
  //       "Hours" : 47,
  //     },
  //   ],
  //   friendsList: [
  //     {
  //       "Id" : 1,
  //       "SentInvite" : false,
  //       "MeetName" : "Friend A",
  //       "Online" : true,
  //       "MainGame" : "CS:GO"
  //     },
  //     {
  //       "Id" : 2,
  //       "SentInvite" : false,
  //       "MeetName" : "Friend B",
  //       "Online" : false,
  //       "MainGame" : "Battlefield"
  //     },
  //     {
  //       "Id" : 3,
  //       "SentInvite" : false,
  //       "MeetName" : "Friend C",
  //       "Online" : true,
  //       "MainGame" : "Valorant"
  //     },
  //     {
  //       "Id" : 4,
  //       "SentInvite" : false,
  //       "MeetName" : "Friend D",
  //       "Online" : false,
  //       "MainGame" : "Rocket League"
  //     }
  //   ],
  //   socialNetwork: [
  //     {
  //       "Id" : 1,
  //       "Name": "Discord",
  //       "Pseudo": "SeeRak#4887"
  //     },
  //     {
  //       "Id" : 2,
  //       "Name": "Steam",
  //       "Pseudo": "SeeRak",
  //       "Url" : "https://steamcommunity.com/profiles/76561198207724565/",
  //     },
  //     {
  //       "Id" : 1,
  //       "Name": "Battle.Net",
  //       "Pseudo": "SeeRak#2479"
  //     },
  //     {
  //       "Id" : 1,
  //       "Name": "Origin",
  //       "Pseudo": "SeeRaki"
  //     },
  //     {
  //       "Id" : 1,
  //       "Name": "Epic Games",
  //       "Pseudo": "SeeRak"
  //     },
  //   ]

  // }

  user!: User;
  constructor(public userService: UserService, public auth0: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    console.log('Main page profil INIT => user', this.user);

  }

  gotoEditProfile() {
    this.router.navigate(['/profil/edit']);
  }

}
