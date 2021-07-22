import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Game } from 'src/app/models/game';
import { GameInfo } from 'src/app/models/game-info';
import { UserService } from 'src/app/services/user/user.service';



@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {

  ListeDeJeux = [
    {id:"1", title:"Apex Legend", pictureUrl:"https://labo.fnac.com/wp-content/uploads/2019/02/apex-legends.png", communityBackgroundUrl:"",
      info: new GameInfo(1, 'Apex Legend', 10)},
    {id:"2", title:"Rocket League", pictureUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202009/1717/O4a5fDUWo54zIJzOyKgV73U2.png", communityBackgroundUrl:"",
      info: new GameInfo(2, 'Rocket League', 100)},
    {id:"3", title:"Fortnite", pictureUrl:"https://store-images.s-microsoft.com/image/apps.39723.70702278257994163.958bb3bc-e151-4401-a360-075b4cb46da9.85b8ec28-bfa4-4a95-9e7a-156869284a19", communityBackgroundUrl:"",
      info: new GameInfo(3, 'Fortnite', 20)},
      {id:"4", title:"Apex Legend", pictureUrl:"https://labo.fnac.com/wp-content/uploads/2019/02/apex-legends.png", communityBackgroundUrl:"",
      info: new GameInfo(4, 'Apex Legend', 10)},
    {id:"5", title:"Rocket League", pictureUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202009/1717/O4a5fDUWo54zIJzOyKgV73U2.png", communityBackgroundUrl:"",
      info: new GameInfo(5, 'Rocket League', 100)},
    {id:"6", title:"Fortnite", pictureUrl:"https://store-images.s-microsoft.com/image/apps.39723.70702278257994163.958bb3bc-e151-4401-a360-075b4cb46da9.85b8ec28-bfa4-4a95-9e7a-156869284a19", communityBackgroundUrl:"",
      info: new GameInfo(6, 'Fortnite', 20)},
      {id:"7", title:"Apex Legend", pictureUrl:"https://labo.fnac.com/wp-content/uploads/2019/02/apex-legends.png", communityBackgroundUrl:"",
      info: new GameInfo(7, 'Apex Legend', 10)},
    {id:"8", title:"Rocket League", pictureUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202009/1717/O4a5fDUWo54zIJzOyKgV73U2.png", communityBackgroundUrl:"",
      info: new GameInfo(8, 'Rocket League', 100)},
    {id:"9", title:"Fortnite", pictureUrl:"https://store-images.s-microsoft.com/image/apps.39723.70702278257994163.958bb3bc-e151-4401-a360-075b4cb46da9.85b8ec28-bfa4-4a95-9e7a-156869284a19", communityBackgroundUrl:"",
      info: new GameInfo(9, 'Fortnite', 20)},
    ]

  totalSize= this.ListeDeJeux.length;
  pageSize = 2;



  pageEvent: any = null;


  constructor(public userService: UserService) { }

  ngOnInit(): void {

  }

    // highValue is the number of games displayed per page
  lowValue: number = 0;
  highValue: number = 2;

  public switchPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    // console.log('return this::', event);
    return event;
  }

  public selectFavorite(jeux: Game): void {
    console.log('selectFavorite');

    this.userService.setFavorite(jeux);
  }

  public addToGameUser(jeux: Game): void {
    this.userService.addToGameUser(jeux);
  }

  public setHighValue(): void {
    // @ts-ignore
    const value = document.getElementById('highValue').value;
    this.pageSize = value;
    this.highValue = value;
  }

}

