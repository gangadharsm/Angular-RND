import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule
} from '@angular/material';

const MaterialComponets = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule
];

@NgModule({
  imports: [MaterialComponets],
  exports: [MaterialComponets]
})
export class MaterialModule { }
