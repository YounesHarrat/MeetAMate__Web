import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GameInfo } from 'src/app/models/game-info';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';
import { GameService } from 'src/app/services/game/game.service';
import { GenericMessageSnackBarComponent } from 'src/app/shared/SnackBars/GenericMessageSnackBarComponent';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GenericActionErrorSnackBarComponent } from 'src/app/shared/SnackBars/GenericActionErrorSnackBarComponent';
@Component({
  selector: 'app-communaute',
  templateUrl: './communaute.component.html',
  styleUrls: ['./communaute.component.css']
})
export class CommunauteComponent implements OnInit {
  ImgProfilUser:any;
  display:boolean;
  selectJeu:Game = new Game();
  communauteJeu:Array<string> = new Array();
  user!:User ;
  ListeDeJeux:Array<Game> = new Array();
  ListeDeJeuxBis:Array<Game> = new Array();
  arrayTitle: Array<string> = new Array();
  arrayId: Array<string> = new Array();

  constructor(public userService: UserService,public gameService: GameService, public auth0: AuthService, public snackbar: MatSnackBar) {
    this.display = false;
  }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.auth0.isAuthenticated$.subscribe(
      (result) => {
        if (result) {
          this.snackbar.openFromComponent( GenericMessageSnackBarComponent).instance.openSnackBar(
            'Here you can join a Community of gamers like you, you can choose from a multitude of games !'
          );
        } else {
          this.snackbar.openFromComponent( GenericMessageSnackBarComponent).instance.openSnackBar(
            'You need to Login to get access to the Community.'
          );
        }

      }
    );

    try{
      this.gameService.getAllGame().subscribe( (res: Game[]) => {
        this.ListeDeJeux = res
        this.ListeDeJeuxBis = res
      });
    }
    catch(e){
      this.snackbar.openFromComponent( GenericMessageSnackBarComponent).instance.openSnackBar(
        'Une erreur est survenue lors de la récupération des jeux'
      );
    }
      
  }

  onKey(event: any) { // without type info

    var search = event.target.value;
    var index = 1;
    this.ListeDeJeuxBis.forEach(element => {
    if(element.nom.toLowerCase().indexOf(search.toLowerCase()) !== -1){
      if(index == 1 ){
        this.ListeDeJeux = []
      }
      this.ListeDeJeux.push(element)
      index++;
      }
    });
    if(search == ""){
    }
  }

  onPress(jeu : any) {
    this.display = true;
    this.selectJeu = jeu;
    var index = Number(jeu.id)
  }


  public selectFavorite(jeux: Game): void {
    try{
      this.userService.setFavorite(jeux.nom);
      this.snackbar.openFromComponent( GenericMessageSnackBarComponent).instance.openSnackBar(
        jeux.nom + ' a bien été enregistré comme jeu favoris'
      );
    }
    catch(e){
      this.snackbar.openFromComponent( GenericMessageSnackBarComponent).instance.openSnackBar(
        'Une erreur est survenue'
      );
    }
    
  }
}
