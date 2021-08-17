import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GameInfo } from 'src/app/models/game-info';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';
import { GameService } from 'src/app/services/game/game.service';
@Component({
  selector: 'app-communaute',
  templateUrl: './communaute.component.html',
  styleUrls: ['./communaute.component.css']
})
export class CommunauteComponent implements OnInit {
  // JeuResult:any;
  // JeuId:any;
  // JeuImg:any;
  // JeuName:any;
  ImgProfilUser:any;
  display:boolean;
  selectJeu:Game = new Game();
  communauteJeu:Array<string> = new Array();
  user:User = new User();
  ListeDeJeux:Array<Game> = new Array();
  arrayTitle: Array<string> = new Array();
  arrayId: Array<string> = new Array();
  // ListeDeJeu=[
  //   {id:"1", title:"1", communityBackgroundUrl:"1", pictureUrl:"1", info:new GameInfo()}
  // ]

  // ListeDeJeux = [
  //   {id:"1", title:"Apex Legend", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg", communityBackgroundUrl:"https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/8df707a948fac1b4a0f97aa554886ec8.png", info: new GameInfo()},
  //   {id:"2", title:"Rocket League", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/88c/88c5b4d7c80276c03ff62aebb1a99ad4.jpg", communityBackgroundUrl:"https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/e6da32eef072f987685b6eddca072d4f.jpg", info: new GameInfo()},
  //   {id:"3", title:"Fortnite", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/0ce98f53e3aa229aa2f31b16e5dcbb4b.png", info: new GameInfo()},
  //   {id:"4", title:"Counter-Strike: Global Offensive", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/736/73619bd336c894d6941d926bfd563946.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/b305c4982512d2529ad05ee542a18133.png", info: new GameInfo()},
  //   {id:"5", title:"Grand Theft Auto V", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/5c645cc19a53ac1dfb155840d886050c.png", info: new GameInfo()},
  //   {id:"6", title:"Red Dead Redemption 2", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/511/5118aff5091cb3efec399c808f8c598f.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/d756d3d2b9dac72449a6a6926534558a.png", info: new GameInfo()},
  //   {id:"7", title:"Destiny 2", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/e9412ee564384b987d086df32d4ce6b7.jpg", info: new GameInfo()},
  //   {id:"8", title:"Dota 2", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero_thumb/0fcbc61acd0479dc77e3cccc0f5ffca7.jpg", info: new GameInfo()},
  //   {id:"9", title:"Warframe", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/f87/f87457e8347484033cb34cde6101d08d.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/5352696a9ca3397beb79f116f3a33991.png", info: new GameInfo()},
  //   {id:"10", title:"Terraria", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/91c/91c4f377c1e09755b60a0102c5252843.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/32e8e6c03f3fa46eb672dc5680bff7da.png", info: new GameInfo()},
  //   {id:"11", title:"League of Legends", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/78b/78bc81e247fc7e77af700cbd632a9297.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/d69116f8b0140cdeb1f99a4d5096ffe4.png", info: new GameInfo()},
  //   {id:"12", title:"Overwatch", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/4ea/4ea507ceebeabb43edbc09468f5aaac6.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/44968aece94f667e4095002d140b5896.png", info: new GameInfo()},
  //   {id:"13", title:"Valorant", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/b11/b11127b9ee3c3701bd15b9af3286d20e.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/de66dbc30377a1f7908db45298324aa3.png", info: new GameInfo()},
  //   {id:"14", title:"Minecraft", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/01882513d5fa7c329e940dda99b12147.jpg", info: new GameInfo()},
  //   {id:"15", title:"Call of Duty: Warzone", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/7e3/7e327a055bedb9b6d1be86593bef473d.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/e82c4b19b8151ddc25d4d93baf7b908f.jpg", info: new GameInfo()},
  // ]
  ListeCommunaute = [
    {idJeu:"1", listePseudo:["Jean", "Michel", "Mama", "Ishish"]},
    {idJeu:"2", listePseudo:["Papapoule", "Docker", "Powershell", "K8s"]},
    {idJeu:"3", listePseudo:["Chrome", "Steeaaam", "Explorer", "Opera"]}
  ]
  constructor(public userService: UserService,public gameService: GameService, public auth0: AuthService) {
    this.display = false;
  }

  ngOnInit(): void {
    this.user = this.userService.user;
    if (this.user?.pseudo === "") {
      this.userService.init();
      console.log(this.userService.user);
    }
    this.gameService.getAllGame().subscribe( (res: Game[]) => {
      console.log(res);
      this.ListeDeJeux = res
      console.log(this.ListeDeJeux)
    })
    // this.ListeDeJeux.sort(function compare(a, b) {
    //   if (a.title < b.title)
    //      return -1;
    //   if (a.title > b.title )
    //      return 1;
    //   return 0;
    // });
    // this.http.get<any>('http://127.0.0.1:8000/api/games').subscribe(data => {
    // this.JeuResult = data.result;
    // this.JeuName = data.results.map((r: { name: any; }) => r.name);
    // this.JeuId = data.results.map((r: { id: any; }) => r.id);
    // this.JeuImg = data.results.map((r: { background_image: any; }) => r.background_image);
    // this.JeuName = data.results.map((r: { name: any; }) => r.name);

    // this.JeuId.forEach((element: any, key : number) => {
    //   console.log(this.JeuImg[key])
    //   var Jeu = {id:element,
    //             title:this.JeuName[key],
    //             communityBackgroundUrl:this.JeuImg[key],
    //             pictureUrl:this.JeuImg[key],
    //             info: new GameInfo() }
    //    this.ListeDeJeu.push(Jeu);
    // });
    // this.ListeDeJeu.shift()
    // });
  }

  onKey(event: any) { // without type info

    var search = event.target.value;
    var index = 1;
    this.ListeDeJeux.forEach(element => {
    if(element.nom.toLowerCase().indexOf(search.toLowerCase()) !== -1){
      if(index == 1 ){
        this.ListeDeJeux = []
      }
      this.ListeDeJeux.push(element)
      index++;
      }
    });
    if(search == ""){
      // this.ListeDeJeux = [
      //   {id:"1", title:"Apex Legend", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg", communityBackgroundUrl:"https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/8df707a948fac1b4a0f97aa554886ec8.png", info: new GameInfo()},
      //   {id:"2", title:"Rocket League", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/88c/88c5b4d7c80276c03ff62aebb1a99ad4.jpg", communityBackgroundUrl:"https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/e6da32eef072f987685b6eddca072d4f.jpg", info: new GameInfo()},
      //   {id:"3", title:"Fortnite", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/0ce98f53e3aa229aa2f31b16e5dcbb4b.png", info: new GameInfo()},
      //   {id:"4", title:"Counter-Strike: Global Offensive", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/736/73619bd336c894d6941d926bfd563946.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/b305c4982512d2529ad05ee542a18133.png", info: new GameInfo()},
      //   {id:"5", title:"Grand Theft Auto V", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/5c645cc19a53ac1dfb155840d886050c.png", info: new GameInfo()},
      //   {id:"6", title:"Red Dead Redemption 2", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/511/5118aff5091cb3efec399c808f8c598f.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/d756d3d2b9dac72449a6a6926534558a.png", info: new GameInfo()},
      //   {id:"7", title:"Destiny 2", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/e9412ee564384b987d086df32d4ce6b7.jpg", info: new GameInfo()},
      //   {id:"8", title:"Dota 2", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero_thumb/0fcbc61acd0479dc77e3cccc0f5ffca7.jpg", info: new GameInfo()},
      //   {id:"9", title:"Warframe", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/f87/f87457e8347484033cb34cde6101d08d.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/5352696a9ca3397beb79f116f3a33991.png", info: new GameInfo()},
      //   {id:"10", title:"Terraria", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/91c/91c4f377c1e09755b60a0102c5252843.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/32e8e6c03f3fa46eb672dc5680bff7da.png", info: new GameInfo()},
      //   {id:"11", title:"League of Legends", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/78b/78bc81e247fc7e77af700cbd632a9297.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/d69116f8b0140cdeb1f99a4d5096ffe4.png", info: new GameInfo()},
      //   {id:"12", title:"Overwatch", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/4ea/4ea507ceebeabb43edbc09468f5aaac6.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/44968aece94f667e4095002d140b5896.png", info: new GameInfo()},
      //   {id:"13", title:"Valorant", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/b11/b11127b9ee3c3701bd15b9af3286d20e.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/de66dbc30377a1f7908db45298324aa3.png", info: new GameInfo()},
      //   {id:"14", title:"Minecraft", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/01882513d5fa7c329e940dda99b12147.jpg", info: new GameInfo()},
      //   {id:"15", title:"Call of Duty: Warzone", pictureUrl:"https://media.rawg.io/media/crop/600/400/games/7e3/7e327a055bedb9b6d1be86593bef473d.jpg", communityBackgroundUrl: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/e82c4b19b8151ddc25d4d93baf7b908f.jpg", info: new GameInfo()},
      // ]
    }
  }

  onPress(jeu : any) {
    this.display = true;
    this.selectJeu = jeu;
    var index = Number(jeu.id)
    this.communauteJeu = this.ListeCommunaute[index - 1 ].listePseudo
  }
}
