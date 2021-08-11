import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GameInfo } from 'src/app/models/game-info';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-communaute',
  templateUrl: './communaute.component.html',
  styleUrls: ['./communaute.component.css']
})
export class CommunauteComponent implements OnInit {
  display:boolean;
  selectJeu:Game = new Game();
  communauteJeu:Array<string> = new Array();
  user:User = new User();

  ListeDeJeux = [
    {id:"1", title:"Apex Legend", pictureUrl:"https://labo.fnac.com/wp-content/uploads/2019/02/apex-legends.png", communityBackgroundUrl:"https://www.orks.fr/wp-content/uploads/2019/03/apexlegendscat.jpg", info: new GameInfo()},
    {id:"2", title:"Rocket League", pictureUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202009/1717/O4a5fDUWo54zIJzOyKgV73U2.png", communityBackgroundUrl:"https://jeu.video/forum/uploads/monthly_2016_07/57952090c5f31_Bannire-Rocket-League.png.8b62cc359e40cc186978fa06d50ce116.png", info: new GameInfo()},
    {id:"3", title:"Fortnite", pictureUrl:"https://store-images.s-microsoft.com/image/apps.39723.70702278257994163.958bb3bc-e151-4401-a360-075b4cb46da9.85b8ec28-bfa4-4a95-9e7a-156869284a19", communityBackgroundUrl: "https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fthe-search-for-survivors%2FFortniteMinigun_Blog-1903x480-dd1a16951d27cd2d44cfc5811aa6d90315f1b2a3.jpg", info: new GameInfo()},
  ]
  ListeCommunaute = [
    {idJeu:"1", listePseudo:["Jean", "Michel", "Mama", "Ishish"]},
    {idJeu:"2", listePseudo:["Papapoule", "Docker", "Powershell", "K8s"]},
    {idJeu:"3", listePseudo:["Chrome", "Steeaaam", "Explorer", "Opera"]}
  ]
  constructor(public userService: UserService, public auth0: AuthService) {
    this.display = false;
  }

  ngOnInit(): void {
    this.user = this.userService.user;
    if (this.user.pseudo === "") {
      this.userService.init();
    }
  }

  onPress(jeu : Game) {
    this.display = true;
    this.selectJeu = jeu;
    var index = Number(jeu.id)
    this.communauteJeu = this.ListeCommunaute[index - 1 ].listePseudo
    console.log(this.communauteJeu);
  }
}