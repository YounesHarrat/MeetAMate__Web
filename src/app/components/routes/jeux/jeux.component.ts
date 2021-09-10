import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Game } from 'src/app/models/game';
import { GameInfo } from 'src/app/models/game-info';
import { UserService } from 'src/app/services/user/user.service';
import { GenericMessageSnackBarComponent } from 'src/app/shared/SnackBars/GenericMessageSnackBarComponent';



@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {

  ListeDeJeux = [
    {id:"1", nom:"Apex Legend", picture:"https://labo.fnac.com/wp-content/uploads/2019/02/apex-legends.png", backgroundPicture:"",
      plateforme:"PC"},
    {id:"2", nom:"Rocket League", picture:"https://image.api.playstation.com/vulcan/ap/rnd/202009/1717/O4a5fDUWo54zIJzOyKgV73U2.png", backgroundPicture:"",
    plateforme:"PC"},
    {id:"3", nom:"Fortnite", picture:"https://store-images.s-microsoft.com/image/apps.39723.70702278257994163.958bb3bc-e151-4401-a360-075b4cb46da9.85b8ec28-bfa4-4a95-9e7a-156869284a19", backgroundPicture:"",
    plateforme:"PC"},
      {id:"4", nom:"Apex Legend", picture:"https://labo.fnac.com/wp-content/uploads/2019/02/apex-legends.png", backgroundPicture:"",
      plateforme:"PC"},
    {id:"5", nom:"Rocket League", picture:"https://image.api.playstation.com/vulcan/ap/rnd/202009/1717/O4a5fDUWo54zIJzOyKgV73U2.png", backgroundPicture:"",
    plateforme:"PC"},
    {id:"6", nom:"Fortnite", picture:"https://store-images.s-microsoft.com/image/apps.39723.70702278257994163.958bb3bc-e151-4401-a360-075b4cb46da9.85b8ec28-bfa4-4a95-9e7a-156869284a19", backgroundPicture:"",
    plateforme:"PC"},
      {id:"7", nom:"Apex Legend", picture:"https://labo.fnac.com/wp-content/uploads/2019/02/apex-legends.png", backgroundPicture:"",
      plateforme:"PC"},
    {id:"8", nom:"Rocket League", picture:"https://image.api.playstation.com/vulcan/ap/rnd/202009/1717/O4a5fDUWo54zIJzOyKgV73U2.png", backgroundPicture:"",
    plateforme:"PC"},
    {id:"9", nom:"Fortnite", picture:"https://store-images.s-microsoft.com/image/apps.39723.70702278257994163.958bb3bc-e151-4401-a360-075b4cb46da9.85b8ec28-bfa4-4a95-9e7a-156869284a19", backgroundPicture:"",
    plateforme:"PC"},
    ]

  totalSize= this.ListeDeJeux.length;
  pageSize = 2;



  pageEvent: any = null;


  constructor(public userService: UserService, public snackbar: MatSnackBar) { }

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
    try{
      this.userService.setFavorite(jeux.nom);
    }
    catch(e){
      this.snackbar.openFromComponent( GenericMessageSnackBarComponent).instance.openSnackBar(
        'Une erreur est survenue'
      );
    }
  }

  public addToGameUser(jeux: Game): void {
    try{
      this.userService.addToGameUser(jeux);
    }
    catch(e){
      this.snackbar.openFromComponent( GenericMessageSnackBarComponent).instance.openSnackBar(
        'Une erreur est survenue'
      );
    }    
  }

  public setHighValue(): void {
    // @ts-ignore
    const value = document.getElementById('highValue').value;
    this.pageSize = value;
    this.highValue = value;
  }

}

