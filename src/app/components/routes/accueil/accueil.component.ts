import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  stockImg = [
    {src:"assets/games/apex.jpg"},
    {src:"assets/games/fortnite.jpg"},
    {src:"assets/games/rocket.jpg"},
    {src:"assets/games/osu.jpg"},
    {src:"assets/games/lol.jpg"},
    {src:"assets/games/Valorant.png"},
    {src:"assets/games/overwatch.jpg"},
    {src:"assets/games/minecraft.jpeg"},
    {src:"assets/games/warzone.jpg"},
    {src:"assets/games/csgo.jpg"},
    {src:"assets/games/phasmophobia.jpg"},
    {src:"assets/games/raft.jpg"},


  ];

  plateformes = [
    {src:"assets/plateformes/pc.png"},
    {src:"assets/plateformes/play.png"},
    {src:"assets/plateformes/Xbox.png"},
    {src:"assets/plateformes/switch.png"},
  ];

  cardImg = [
    {src:"assets/games/fortnite.jpg"},
    {src:"assets/games/apex.jpg"},
    {src:"assets/games/rocket.jpg"},
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
