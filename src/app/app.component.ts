import { Component, Optional } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatSnackBar,
  PageEvent,
} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // MatPaginator Inputs
  length = 10;
  pageSize = 10;
  pageSizeOptions: number[] = [1, 2, 3, 4];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }
}
