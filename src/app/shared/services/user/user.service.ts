import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Game } from '../../models/game';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  user: User = new User();
  profile: any;

  seerakNetworkMock = [
    {
      "Id" : 1,
      "Name": "Discord",
      "Pseudo": "SeeRak#4887"
    },
    {
      "Id" : 2,
      "Name": "Steam",
      "Pseudo": "SeeRak",
      "Url" : "https://steamcommunity.com/profiles/76561198207724565/",
    },
    {
      "Id" : 3,
      "Name": "Battle.Net",
      "Pseudo": "SeeRak#2479"
    },
    {
      "Id" : 4,
      "Name": "Origin",
      "Pseudo": "SeeRaki"
    },
    {
      "Id" : 5,
      "Name": "Epic Games",
      "Pseudo": "SeeRak"
    },
  ]

  seerakFriendsListMock = [
        {
          "Id" : 1,
          "SentInvite" : false,
          "MeetName" : "Friend A",
          "Online" : true,
          "MainGame" : "CS:GO"
        },
        {
          "Id" : 2,
          "SentInvite" : false,
          "MeetName" : "Friend B",
          "Online" : false,
          "MainGame" : "Battlefield"
        },
        {
          "Id" : 3,
          "SentInvite" : false,
          "MeetName" : "Friend C",
          "Online" : true,
          "MainGame" : "Valorant"
        },
        {
          "Id" : 4,
          "SentInvite" : false,
          "MeetName" : "Friend D",
          "Online" : false,
          "MainGame" : "Rocket League"
        }
      ]

  seerakGameUserMock = [
        {
          "Id" : 1,
          "Nom" : "Rocket League",
          "Heures" : 15,
        },
        {
          "Id" : 2,
          "Nom" : "Osu",
          "Heures" : 4,
        },
        {
          "Id" : 3,
          "Nom" : "Minecraft",
          "Heures" : 64,
        },
        {
          "Id" : 4,
          "Nom" : "League of Legends",
          "Heures" : 547,
        },
        {
          "Id" : 5,
          "Nom" : "Paladin",
          "Heures" : 47,
        },
      ]

  constructor(public auth: AuthService) { }

  ngOnInit() {



  }

  init() {
    // set auth0 info into our user
    this.auth.user$.subscribe(
      (profile) => {
        // @ts-ignore: Object is possibly 'null'
        this.user.nom = profile.family_name;
        // @ts-ignore: Object is possibly 'null'
        this.user.prenom = profile.given_name;
        this.user.age = "?";
        this.user.pseudo = "?";
        this.user.favorite = "?";
        // @ts-ignore: Object is possibly 'null'
        this.user.avatarIMG = profile.picture;
        this.user.socialNetwork = this.seerakNetworkMock;
        this.user.friendsList = this.seerakFriendsListMock;
        this.user.gameUser = this.seerakGameUserMock;
        console.log('UserService init', {
          profile,
          user: this.user,
        });
      }
    );
  }

  setFavorite(jeux: Game) {
    this.user.favorite = jeux.title;
  }
}
