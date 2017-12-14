import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatToolbarModule,
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatSnackBarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatSnackBarModule,
    FormsModule,
    MatInputModule
  ],
  declarations: []
})
export class MaterialModule { }
