import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterSelectComponent} from './filter-select.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "@app/modules/material.module";


@NgModule({
  declarations: [
    FilterSelectComponent
  ],
  exports: [
    FilterSelectComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class FilterSelectModule {
}
