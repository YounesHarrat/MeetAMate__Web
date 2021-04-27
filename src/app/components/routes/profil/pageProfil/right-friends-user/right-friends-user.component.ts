import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-friends-user',
  templateUrl: './right-friends-user.component.html',
  styleUrls: ['./right-friends-user.component.css']
})
export class RightFriendsUserComponent implements OnInit {

  inviter = true;

  invitationEnvoyer(friend:any) {
    console.log(friend.SentInvite)
    friend.SentInvite = !friend.SentInvite
  }

  @Input() user: any;

  constructor() { }

  ngOnInit(): void {
  }

}
