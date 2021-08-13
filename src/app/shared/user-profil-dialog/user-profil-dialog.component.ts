import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-profil-dialog',
  templateUrl: './user-profil-dialog.component.html',
  styleUrls: ['./user-profil-dialog.component.css']
})
export class UserProfilDialogComponent implements OnInit {

  form!: any;

  constructor(
    public dialogRef: MatDialogRef<UserProfilDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
