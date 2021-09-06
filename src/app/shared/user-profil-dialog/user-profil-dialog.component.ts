import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-profil-dialog',
  templateUrl: './user-profil-dialog.component.html',
  styleUrls: ['./user-profil-dialog.component.css']
})
export class UserProfilDialogComponent implements OnInit {

  form!: any;

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<UserProfilDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      pseudo: new FormControl(),
      nom: new FormControl(),
      prenom: new FormControl(),
      age: new FormControl(),
   });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveUser() {
    console.log('checking form on save =>', this.form);
    this.userService.setPseudo(this.form.value.pseudo);
    this.userService.setPseudo(this.form.value.pseudo);

    this.userService.updateUser();
    this.dialogRef.close();
  }
}
