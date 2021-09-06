import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthService } from '@auth0/auth0-angular';
import { AuthProfile } from 'src/app/models/auth-profile';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';
import { UserProfilDialogComponent } from 'src/app/shared/user-profil-dialog/user-profil-dialog.component';

@Component({
  selector: 'app-top-infos-user',
  templateUrl: './top-infos-user.component.html',
  styleUrls: ['./top-infos-user.component.css']
})
export class TopInfosUserComponent implements OnInit {

  name = 'Angular 4';
  url = '';

onSelectFile(event:any) {
   if (event.target.files && event.target.files[0]) {
     console.log(event)
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // convertis l'image en url

      reader.onload = (event) => { // appeler une fois que la convertion est OK
      if(reader.result != null)
        {
          this.url = reader.result.toString()
          this.userService.user.avatar = this.url;
        }

      }
    }
  }

  @Input() user!: User;
  userInfoArray!: any[];
  userInfoKeys!: any[];

  constructor(public userService: UserService, public auth0: AuthService, private dialog: MatDialog) {
    this.userInfoArray = [];
    this.userInfoKeys = [];
   }

  ngOnInit(): void {
    this.url = this.user.avatar;
    Object.keys(this.user).forEach( (v:any) => {
      const value = this.user.get(v);
      if (value && !(value instanceof Array) && !(value instanceof AuthProfile) && v !== 'avatar' && value !== '?') {
        console.log('UserBAckLog => ', v, this.user.get(v));
        this.userInfoKeys.push(v);
        this.userInfoArray.push(this.user.get(v));
      }
    });
    console.log('TopInfoUserINIT::', {
      user: this.user,
      userInfoArray: this.userInfoArray
    });

  }

  setPseudo(): void {
    //set user pseudo by what's in input
    // @ts-ignore: Object is possibly 'null'
    let pseudoInput = document.getElementById("inputPseudo").value;
    this.userService.setPseudo(pseudoInput);
  }

  setAge(): void {
    // @ts-ignore
    const age = document.getElementById('age').value;
    console.log('setAge', age);
    this.userService.setAge(age);
  }


  openProfilDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '400px';
    dialogConfig.width = '600px';
    dialogConfig.position = { top: '20vh', bottom: '20vh', left: '30vw', right: '30vw'};

    const dialogRef = this.dialog.open(UserProfilDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
