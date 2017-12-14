import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SnackbarService {

  constructor(public snackBar: MatSnackBar) { }

  // TODO should use openFromComponent; got issues 'No component factory found for...'. Known issue from github
  openSnackBar(error) {
    this.snackBar.open(`Something went wrong. ${error}. Try again later`, 'Undo', {
      duration: 3000
    });
  }
}
