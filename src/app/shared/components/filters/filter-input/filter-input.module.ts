import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterInputComponent} from './filter-input.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "@app/modules/material.module";


@NgModule({
  declarations: [
    FilterInputComponent
  ],
  exports: [
    FilterInputComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule
    ]
})
export class FilterInputModule {
}
