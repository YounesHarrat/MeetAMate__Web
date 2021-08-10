import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog/dialog';
import { MatDialogRef } from '@angular/material/dialog/dialog-ref';
import { AuthService } from '@auth0/auth0-angular';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(public userService: UserService, public auth0: AuthService) { }

  user = new User();
  ngOnInit(): void {
    this.user = this.userService.user;
    if ( this.user.pseudo ) {

    } else {
      console.log('%c SEEMS LIKE YOUR PROFILE ISNT FINISHED YET ', 'color:red');
    }
  }

  openProfileModal() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
