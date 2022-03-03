import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentsComponent} from './pages/components/components.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./modules/material.module";
import {EmployeesComponent} from './pages/employees/employees.component';
import {FormModule} from "@app/shared/components/form/form.module";
import {FilterInputModule} from "@app/shared/components/filters/filter-input/filter-input.module";
import {WrapperComponent} from "@app/shared/components/content-wrapper/wrapper.component";
import {AvatarBarComponent} from "@app/shared/components/avatar-bar/avatar-bar.component";
import {TableModule} from "@app/shared/components/table/table.module";
import {FilterDatePickerModule} from "@app/shared/components/filters/filter-date-picker/filter-date-picker.module";
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import {SelectModule} from "@app/shared/components/filters/form-filter-select/select.module";
import {ButtonGroupModule} from "@app/shared/components/buttons/button-group/button-group.module";
import { TabComponent } from './pages/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    EmployeesComponent,
    WrapperComponent,
    AvatarBarComponent,
    ProgressBarComponent,
    AddEmployeeComponent,
    TabComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormModule,
        FilterInputModule,
        TableModule,
        FilterDatePickerModule,
        SelectModule,
        ButtonGroupModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
