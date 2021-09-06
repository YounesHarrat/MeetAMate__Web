import { Location } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Game } from 'src/app/models/game';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-page-communaute',
  templateUrl: './page-communaute.component.html',
  styleUrls: ['./page-communaute.component.css']
})
export class PageCommunauteComponent implements OnInit {
  @Input()
  jeu:Game = new Game();
  user:User = new User();
  btnEventClick = false;
  btnQuestionClick = false;
  panelOpenState = false;

  ListeEvent = [
    {id:"1", idJeu:"1", title:"A1", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    {id:"2", idJeu:"1", title:"A2", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    {id:"3", idJeu:"1", title:"A3", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    {id:"4", idJeu:"1", title:"A4", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    {id:"5", idJeu:"1", title:"A5", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    {id:"6", idJeu:"2", title:"RL1", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    {id:"7", idJeu:"2", title:"RL2", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    {id:"8", idJeu:"2", title:"RL3", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    {id:"9", idJeu:"2", title:"RL4", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    {id:"10", idJeu:"2", title:"RL5", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    {id:"11", idJeu:"3", title:"F1", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    {id:"12", idJeu:"3", title:"F2", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    {id:"13", idJeu:"3", title:"F3", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    {id:"14", idJeu:"3", title:"F4", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    {id:"15", idJeu:"3", title:"F5", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    {id:"16", idJeu:"4", title:"Tournoi", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    {id:"17", idJeu:"4", title:"Solo", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    {id:"18", idJeu:"4", title:"Duo", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    {id:"19", idJeu:"4", title:"Tournoi", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    {id:"20", idJeu:"4", title:"Solo", date:"28/04/2021", heure:"11h00", contenu:"baelbalebale"},
    ]
  ListeQuestion = [
    {id:"1", idJeu:"2", date:"28/04/2021", heure:"11h00", contenu:"Quel est le Dominus : Snake Skin ?"},
    {id:"2", idJeu:"2", date:"28/04/2021", heure:"11h00", contenu:"Comment s'appelle la nouvelle mise à jour sortie le 4 octobre 2016 ?"},
    {id:"3", idJeu:"2", date:"28/04/2021", heure:"11h00", contenu:"Qui est le joueur emblématique de Rocket League ?"},
    {id:"4", idJeu:"2", date:"28/04/2021", heure:"11h00", contenu:"Quel est le véhicule qu'on a en tout premier ?"},
    {id:"5", idJeu:"2", date:"28/04/2021", heure:"11h00", contenu:"Quel était l'ancêtre de Rocket League ?"},
    {id:"6", idJeu:"1", date:"28/04/2021", heure:"11h00", contenu:"C'est l'arme la plus détestée par la communauté, elle utilise des balles de pompe. C'est..."},
    {id:"7", idJeu:"1", date:"28/04/2021", heure:"11h00", contenu:"De quel univers est issu Apex Legends ?"},
    {id:"8", idJeu:"1", date:"28/04/2021", heure:"11h00", contenu:"Il tire balle par balle à environ 45 dégâts... Il utilise des balles lourdes, c'est..."},
    {id:"9", idJeu:"1", date:"28/04/2021", heure:"11h00", contenu:"Il est considéré comme le meilleur fusil d'assaut. Il tire vite, fait mal et a peu de recul. C'est :"},
    {id:"10", idJeu:"1", date:"28/04/2021", heure:"11h00", contenu:"A combien de joueurs se joue Apex ?"},
    {id:"11", idJeu:"3", date:"28/04/2021", heure:"11h00", contenu:"Quel est l'éditeur de Fortnite ?"},
    {id:"12", idJeu:"3", date:"28/04/2021", heure:"11h00", contenu:"Quand a commencé le projet ?"},
    {id:"13", idJeu:"3", date:"28/04/2021", heure:"11h00", contenu:"Quand Fortnite sortira-t-il officiellement ?"},
    {id:"14", idJeu:"3", date:"28/04/2021", heure:"11h00", contenu:"Quel est le but du jeu ?"},
    {id:"15", idJeu:"3", date:"28/04/2021", heure:"11h00", contenu:"Combien y a-t-il de joueurs qui jouent dans une partie ?"},
  ]

  ListeReponse = [
    {id:"1", idQuestion:"1", idJeu:"2", contenu:"La voiture volante"},
    {id:"2", idQuestion:"1", idJeu:"2", contenu:"La voiture au sol"},
    {id:"3", idQuestion:"3", idJeu:"2", contenu:"Qui est le joueur emblématique de Rocket League ?"},
    {id:"4", idQuestion:"4", idJeu:"2", contenu:"Quel est le véhicule qu'on a en tout premier ?"},
    {id:"5", idQuestion:"5", idJeu:"2", contenu:"Quel était l'ancêtre de Rocket League ?"},
    {id:"6", idQuestion:"6", idJeu:"1", contenu:"C'est l'arme la plus détestée par la communauté, elle utilise des balles de pompe. C'est..."},
    {id:"7", idQuestion:"7", idJeu:"1", contenu:"De quel univers est issu Apex Legends ?"},
    {id:"8", idQuestion:"8", idJeu:"1", contenu:"Il tire balle par balle à environ 45 dégâts... Il utilise des balles lourdes, c'est..."},
    {id:"9", idQuestion:"9", idJeu:"1", contenu:"Il est considéré comme le meilleur fusil d'assaut. Il tire vite, fait mal et a peu de recul. C'est :"},
    {id:"10", idQuestion:"10", idJeu:"1", contenu:"A combien de joueurs se joue Apex ?"},
    {id:"11", idQuestion:"11", idJeu:"3", contenu:"Quel est l'éditeur de Fortnite ?"},
    {id:"12", idQuestion:"12", idJeu:"3", contenu:"Quand a commencé le projet ?"},
    {id:"13", idQuestion:"13", idJeu:"3", contenu:"Quand Fortnite sortira-t-il officiellement ?"},
    {id:"14", idQuestion:"14", idJeu:"3", contenu:"Quel est le but du jeu ?"},
    {id:"15", idQuestion:"15", idJeu:"3", contenu:"Combien y a-t-il de joueurs qui jouent dans une partie ?"},
  ]



  constructor( public userService: UserService, public location: Location, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.user = this.userService.user;
    if (this.user?.pseudo === "") {
      this.userService.init();
      console.log(this.userService.user);
    }
    console.log(this.jeu)
    // rename url by adding game title in it
    this.location.replaceState('/communaute/'+this.jeu.nom.toString() );
    this.onLoadEvents();
    this.onLoadQuestions();
    this.onLoadReponses();
  }

  onLoadEvents() {
    var IdJeu = this.jeu.id;
    this.ListeEvent =  this.ListeEvent.filter(function(ListeEvent) {
      return ListeEvent.idJeu == IdJeu;
  });
  }

  onLoadQuestions() {
    var IdJeu = this.jeu.id;
    this.ListeQuestion =  this.ListeQuestion.filter(function(ListeQuestion) {
      return ListeQuestion.idJeu == IdJeu;
  });
  }

  onLoadReponses() {
    var IdJeu = this.jeu.id;
    this.ListeReponse =  this.ListeReponse.filter(function(ListeReponse) {
    // console.log(ListeReponse.idJeu == IdJeu)
    return ListeReponse.idJeu == IdJeu
  });
  }

  addReponse(contenu: string, idQuestion: string) {
    var newReponse = {id:"4", idQuestion:idQuestion, idJeu:this.jeu.id, contenu:contenu};
    this.ListeReponse.push(newReponse)

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '400px';
    dialogConfig.width = '600px';
    dialogConfig.position = { top: '40vh', bottom: '50vh', left: '40vw', right: '40vw'};

    const dialogRef = this.dialog.open(PageCommunauteComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  addQuestion(contenu: string) {
    var newQuestion = {id:"4", idJeu:this.jeu.id, date:"28/04/2021", heure:"11h00", contenu:contenu};
    this.ListeQuestion.push(newQuestion)
    
  }
  addEvent(titres: string, dates: string, heures: string, descs: string){
    var newEvent = {id:"10", idJeu:this.jeu.id, title:titres, date:dates.toString(), heure:heures.toString(), contenu:descs};
    this.ListeEvent.push(newEvent)
  }

  clickEvents(){
    this.btnEventClick = true
    this.btnQuestionClick = false;
  }
  clickQuestions(){
    this.btnQuestionClick = true;
    this.btnEventClick = false
  }

  joinCommunity(id:any){
    console.log(id)
    console.log(this.user.id)
  }
  leaveCommunity(id:any){
    console.log(id)
    console.log(this.user.id)
  }
}
