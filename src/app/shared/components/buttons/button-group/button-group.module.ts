import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGroupComponent } from './button-group.component';
import {MaterialModule} from "@app/modules/material.module";



@NgModule({
  declarations: [
    ButtonGroupComponent
  ],
  exports: [
    ButtonGroupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ButtonGroupModule { }
