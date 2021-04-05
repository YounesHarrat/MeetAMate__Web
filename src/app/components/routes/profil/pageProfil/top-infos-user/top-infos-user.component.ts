import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-infos-user',
  templateUrl: './top-infos-user.component.html',
  styleUrls: ['./top-infos-user.component.css']
})
export class TopInfosUserComponent implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit(): void {
  }

}
