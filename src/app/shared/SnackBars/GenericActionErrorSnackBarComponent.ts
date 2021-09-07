import { Component, Input } from "@angular/core";

import { MatSnackBar } from "@angular/material/snack-bar";



@Component ({
  selector: 'generic-snackbar',
  template: '',
})
export class GenericActionErrorSnackBarComponent {


  message: string = "an Error Occured";


  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


  openErrorSnackBar() {
    // this._snackBar
    this._snackBar.open(this.message, "",  {
      duration: 3000,
    });
  }




}

