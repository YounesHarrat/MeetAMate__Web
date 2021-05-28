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

  constructor() { }

  ngOnInit(): void {
    console.log(this.jeu)
  }

}
