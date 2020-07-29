import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { MaterialModule } from "../material/material.module";



@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,MaterialModule,ReactiveFormsModule
  ],
  exports:[InputComponent]
})
export class SharedModule { }
