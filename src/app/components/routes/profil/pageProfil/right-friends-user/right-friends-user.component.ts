import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-friends-user',
  templateUrl: './right-friends-user.component.html',
  styleUrls: ['./right-friends-user.component.css']
})
export class RightFriendsUserComponent implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit(): void {
  }

}
