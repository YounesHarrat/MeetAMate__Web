import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  putUserUrl = "https://localhost:8000/api/users/"
  user: User = new User();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.putUserUrl = this.putUserUrl + this.user.id;
  }

}
