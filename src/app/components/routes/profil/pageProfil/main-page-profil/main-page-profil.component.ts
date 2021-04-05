import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page-profil',
  templateUrl: './main-page-profil.component.html',
  styleUrls: ['./main-page-profil.component.css']
})
export class MainPageProfilComponent implements OnInit {

  user = {
    pseudo: "NachossOG",
    nom: "Harrat",
    prenom: "Younes",
    age: "24",
    favorite: "Rocket League",
    chosenGames: ['Rocket League', 'Osu', 'Minecraft', 'League of Legends', 'Paladin'],
    friendsList: ['Friend A', 'Friend B', 'Friend C', 'Friend D']

  }

  constructor() { }

  ngOnInit(): void {
  }

}
