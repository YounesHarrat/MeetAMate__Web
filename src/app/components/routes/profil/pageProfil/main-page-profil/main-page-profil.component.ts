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
    friendsList: [
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
    ],
    socialNetwork: [
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
        "Id" : 1,
        "Name": "Battle.Net",
        "Pseudo": "SeeRak#2479"
      },
      {
        "Id" : 1,
        "Name": "Origin",
        "Pseudo": "SeeRaki"
      },
      {
        "Id" : 1,
        "Name": "Epic Games",
        "Pseudo": "SeeRak"
      },   
    ]

  }

  constructor() { }

  ngOnInit(): void {
  }

}
