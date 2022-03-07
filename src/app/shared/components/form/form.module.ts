import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "@app/modules/material.module";
import {UITextInputComponent} from "./input/ui-text-input";
import {UIDropdownComponent} from "./dropdown/ui-dropdown";
import {UIDatePicker} from "@app/shared/components/form/form-date-picker/ui-date-picker";
// import {TranslateModule} from "@ngx-translate/core";
import {FormInputComponent} from './form-input/form-input.component';
import {MenuComponent} from './menu/menu.component';
import {SelectUtilComponent} from './select-util/select-util.component';
import {PipesModule} from "@app/shared/pipes/pipes.module";
import {OverlayModule} from "@angular/cdk/overlay";
import {UITextareaComponent} from "@app/shared/components/form/textarea/ui-textarea";
import {FormInputAutosuggestComponent} from "@app/shared/components/form/form-input-autosuggest/form-input-autosuggest.component";
import {FormSelectSearchComponent} from "@app/shared/components/form/form-select-search/form-select-search.component";
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";
import {FilterInputModule} from "@app/shared/components/filters/filter-input/filter-input.module";


@NgModule({
  declarations: [
    UITextInputComponent,
    UIDropdownComponent,
    UIDatePicker,
    FormInputComponent,
    MenuComponent,
    SelectUtilComponent,
    UITextareaComponent,
    FormInputAutosuggestComponent,
    FormSelectSearchComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        PipesModule,
        OverlayModule,
        MaterialModule,
        NgxMatSelectSearchModule,
        FilterInputModule,
    ],
  exports: [
    UITextInputComponent,
    UIDropdownComponent,
    UIDatePicker,
    FormInputComponent,
    MenuComponent,
    SelectUtilComponent,
    UITextareaComponent,
    FormInputAutosuggestComponent,
    FormSelectSearchComponent

  ]
})
export class FormModule {
}
