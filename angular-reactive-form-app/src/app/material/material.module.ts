import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

const MaterialComponets = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatCardModule
];

@NgModule({
  imports: [MaterialComponets],
  exports: [MaterialComponets]
})
export class MaterialModule { }
