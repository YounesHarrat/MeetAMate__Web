import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthService } from '@auth0/auth0-angular';
import { AuthProfile } from 'src/app/models/auth-profile';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';
import { UserProfilDialogComponent } from 'src/app/shared/Dialogs/user-profil-dialog/user-profil-dialog.component';

@Component({
  selector: 'app-top-infos-user',
  templateUrl: './top-infos-user.component.html',
  styleUrls: ['./top-infos-user.component.css']
})
export class TopInfosUserComponent implements OnInit, OnChanges {

  name = 'Angular 4';
  url = '';
  socialNetwork =  [
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


  @Input() user!: User;
  userInfoArray!: any[];
  userInfoKeys!: any[];

  constructor(public userService: UserService, public auth0: AuthService, private dialog: MatDialog) {
    this.userInfoArray = [];
    this.userInfoKeys = [];
   }

  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log('Changes ! :: ', {
      change: changes,
    });

  }

  ngOnInit(): void {
    this.url = this.user.avatar;
    Object.keys(this.user).forEach( (v:any) => {
      const value = this.user.get(v);
      if (value && !(value instanceof Array) && !(value instanceof AuthProfile) && value !== '?' && v !== 'avatar' && v !== 'authProfile') {
        this.userInfoKeys.push(v);
        this.userInfoArray.push(this.user.get(v));
      }
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
    });
  }

  // change avatar image
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader(); // lecture du fichier
      reader.readAsDataURL(event.target.files[0]); // convertis l'image en url
      reader.onload = (event) => { // appeler une fois que la convertion est OK
      if(reader.result != null) {
        this.url = reader.result.toString();
        this.userService.user.avatar = this.url;
        this.user.avatar = this.url;
      }
      this.userService.updateUser();
      }
    }
  }
}
