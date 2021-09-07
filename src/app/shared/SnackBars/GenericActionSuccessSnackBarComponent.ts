import { Component, Input } from "@angular/core";

import { MatSnackBar } from "@angular/material/snack-bar";



@Component ({
  selector: 'generic-snackbar',
  template: '',
})
export class GenericActionSuccessSnackBarComponent {


  message: string = "Successful Connection"


  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


  openSuccessSnackBar() {
    this._snackBar.open(this.message, "",  {
      duration: 3000,
    });
  }




}

