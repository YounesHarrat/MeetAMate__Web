import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-list-game-user',
  templateUrl: './left-list-game-user.component.html',
  styleUrls: ['./left-list-game-user.component.css']
})
export class LeftListGameUserComponent implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit(): void {
  }

}
