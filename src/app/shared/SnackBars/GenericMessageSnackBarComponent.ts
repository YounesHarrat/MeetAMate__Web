import { Component, Input } from "@angular/core";

import { MatSnackBar } from "@angular/material/snack-bar";



@Component ({
  selector: 'generic-snackbar',
  template: '',
})
export class GenericMessageSnackBarComponent {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string ) {
    this._snackBar.open(message, '', {
      duration: 3000,
    });
  }

}

