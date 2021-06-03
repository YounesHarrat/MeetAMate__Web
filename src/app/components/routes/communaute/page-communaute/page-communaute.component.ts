import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/models/game';

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
    {id:"1", idJeu:"1", title:"Tournoi", type:"4v4", date:"28/04/2021", heure:"11h00"},
    {id:"2", idJeu:"1", title:"Solo", type:"1v1", date:"28/04/2021", heure:"11h00"},
    {id:"3", idJeu:"1", title:"Duo", type:"2v2", date:"28/04/2021", heure:"11h00"},
    {id:"4", idJeu:"1", title:"Tournoi", type:"4v4", date:"28/04/2021", heure:"11h00"},
    {id:"5", idJeu:"1", title:"Solo", type:"1v1", date:"28/04/2021", heure:"11h00"},    
    ]
  ListeQuestion = [
    {id:"1", idJeu:"1", date:"28/04/2021", heure:"11h00", contenu:"Quel est le Dominus : Snake Skin ?"},
    {id:"2", idJeu:"1", date:"28/04/2021", heure:"11h00", contenu:"Comment s'appelle la nouvelle mise à jour sortie le 4 octobre 2016 ?"},
    {id:"3", idJeu:"1", date:"28/04/2021", heure:"11h00", contenu:"Qui est le joueur emblématique de Rocket League ?"},
    {id:"4", idJeu:"1", date:"28/04/2021", heure:"11h00", contenu:"Quel est le véhicule qu'on a en tout premier ?"},
    {id:"5", idJeu:"1", date:"28/04/2021", heure:"11h00", contenu:"Quel était l'ancêtre de Rocket League ?"},  
  ]
  
  constructor() {}

  ngOnInit(): void {

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
