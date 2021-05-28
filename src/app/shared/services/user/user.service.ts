import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Game } from '../../models/game';
import { GameInfo } from '../../models/game-info';
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
    {id:"1", title:"Apex Legend", pictureUrl:"https://labo.fnac.com/wp-content/uploads/2019/02/apex-legends.png",
      info: new GameInfo(1, 'Apex Legend', 10)},
    {id:"2", title:"Rocket League", pictureUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202009/1717/O4a5fDUWo54zIJzOyKgV73U2.png",
      info: new GameInfo(2, 'Rocket League', 100)},
    {id:"3", title:"Fortnite", pictureUrl:"https://store-images.s-microsoft.com/image/apps.39723.70702278257994163.958bb3bc-e151-4401-a360-075b4cb46da9.85b8ec28-bfa4-4a95-9e7a-156869284a19",
      info: new GameInfo(3, 'Fortnite', 20)},
      {id:"4", title:"Apex Legend", pictureUrl:"https://labo.fnac.com/wp-content/uploads/2019/02/apex-legends.png",
      info: new GameInfo(4, 'Apex Legend', 10)},
    {id:"5", title:"Rocket League", pictureUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202009/1717/O4a5fDUWo54zIJzOyKgV73U2.png",
      info: new GameInfo(5, 'Rocket League', 100)},
    {id:"6", title:"Fortnite", pictureUrl:"https://store-images.s-microsoft.com/image/apps.39723.70702278257994163.958bb3bc-e151-4401-a360-075b4cb46da9.85b8ec28-bfa4-4a95-9e7a-156869284a19",
      info: new GameInfo(6, 'Fortnite', 20)},
      {id:"7", title:"Apex Legend", pictureUrl:"https://labo.fnac.com/wp-content/uploads/2019/02/apex-legends.png",
      info: new GameInfo(7, 'Apex Legend', 10)},
    {id:"8", title:"Rocket League", pictureUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202009/1717/O4a5fDUWo54zIJzOyKgV73U2.png",
      info: new GameInfo(8, 'Rocket League', 100)},
    {id:"9", title:"Fortnite", pictureUrl:"https://store-images.s-microsoft.com/image/apps.39723.70702278257994163.958bb3bc-e151-4401-a360-075b4cb46da9.85b8ec28-bfa4-4a95-9e7a-156869284a19",
      info: new GameInfo(9, 'Fortnite', 20)},
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
        // this.user.gameUser = this.seerakGameUserMock;
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

  setPseudo(pseudo:string) {
    this.user.pseudo = pseudo;
  }

  setAge(age:string) {
    this.user.age = age;
  }

  addToGameUser(jeux: Game) {

    const found  = this.user.gameUser.find(o => o.id === jeux.id );
    console.log('addToGameUser', jeux, found, this.user.gameUser );
    if ( !found ) {
      this.user.gameUser.push(jeux)
    }
  }

}
