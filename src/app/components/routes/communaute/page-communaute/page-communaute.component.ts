import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/models/game';
import { User } from 'src/app/shared/models/user';
import { JeuxComponent } from '../../jeux/jeux.component';

@Component({
  selector: 'app-page-communaute',
  templateUrl: './page-communaute.component.html',
  styleUrls: ['./page-communaute.component.css']
})
export class PageCommunauteComponent implements OnInit {
  @Input()
  jeu:Game = new Game();
  @Input()
  commu:Array<string> = new Array();

  btnEventClick = false;
  btnQuestionClick = false;
  panelOpenState = false;
  
  ListeEvent = [
    {id:"1", idJeu:"1", title:"A1", type:"4v4", date:"28/04/2021", heure:"11h00"},
    {id:"2", idJeu:"1", title:"A2", type:"1v1", date:"28/04/2021", heure:"11h00"},
    {id:"3", idJeu:"1", title:"A3", type:"2v2", date:"28/04/2021", heure:"11h00"},
    {id:"4", idJeu:"1", title:"A4", type:"4v4", date:"28/04/2021", heure:"11h00"},
    {id:"5", idJeu:"1", title:"A5", type:"1v1", date:"28/04/2021", heure:"11h00"},  
    {id:"6", idJeu:"2", title:"RL1", type:"4v4", date:"28/04/2021", heure:"11h00"},
    {id:"7", idJeu:"2", title:"RL2", type:"1v1", date:"28/04/2021", heure:"11h00"},
    {id:"8", idJeu:"2", title:"RL3", type:"2v2", date:"28/04/2021", heure:"11h00"},
    {id:"9", idJeu:"2", title:"RL4", type:"4v4", date:"28/04/2021", heure:"11h00"},
    {id:"10", idJeu:"2", title:"RL5", type:"1v1", date:"28/04/2021", heure:"11h00"}, 
    {id:"11", idJeu:"3", title:"F1", type:"4v4", date:"28/04/2021", heure:"11h00"},
    {id:"12", idJeu:"3", title:"F2", type:"1v1", date:"28/04/2021", heure:"11h00"},
    {id:"13", idJeu:"3", title:"F3", type:"2v2", date:"28/04/2021", heure:"11h00"},
    {id:"14", idJeu:"3", title:"F4", type:"4v4", date:"28/04/2021", heure:"11h00"},
    {id:"15", idJeu:"3", title:"F5", type:"1v1", date:"28/04/2021", heure:"11h00"},
    {id:"16", idJeu:"4", title:"Tournoi", type:"4v4", date:"28/04/2021", heure:"11h00"},
    {id:"17", idJeu:"4", title:"Solo", type:"1v1", date:"28/04/2021", heure:"11h00"},
    {id:"18", idJeu:"4", title:"Duo", type:"2v2", date:"28/04/2021", heure:"11h00"},
    {id:"19", idJeu:"4", title:"Tournoi", type:"4v4", date:"28/04/2021", heure:"11h00"},
    {id:"20", idJeu:"4", title:"Solo", type:"1v1", date:"28/04/2021", heure:"11h00"}, 
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
  
  constructor() {
  }

  ngOnInit() {
    this.onLoadEvents();
    this.onLoadQuestions();

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

  clickEvents(){
    this.btnEventClick = true
    this.btnQuestionClick = false;
  }
  clickQuestions(){
    this.btnQuestionClick = true;
    this.btnEventClick = false
  }
}
