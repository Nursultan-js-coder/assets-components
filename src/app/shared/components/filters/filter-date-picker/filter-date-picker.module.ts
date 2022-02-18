import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterDatePickerComponent} from './filter-date-picker.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "@app/modules/material.module";
import {FilterDatePickerMenuComponent} from "@app/shared/components/filters/filter-date-picker/filter-date-picker-menu.component";


@NgModule({
  declarations: [
    FilterDatePickerComponent,
    FilterDatePickerMenuComponent
  ],
  exports: [
    FilterDatePickerComponent,
    FilterDatePickerMenuComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class FilterDatePickerModule {
}
