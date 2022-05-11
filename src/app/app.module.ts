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
import {ProgressBarComponent} from './shared/components/progress-bar/progress-bar.component';
import {AddEmployeeComponent} from './pages/add-employee/add-employee.component';
import {ButtonGroupModule} from "@app/shared/components/buttons/button-group/button-group.module";
import {TabComponent} from './pages/tab/tab.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TestComponent } from './pages/test/test.component';
import { AlertComponent } from './shared/components/progress-bar/alert/alert.component';
import { CardRelativesComponent } from './shared/components/cards/card-relatives/card-relatives.component';
import { EmployeeProfileComponent } from './pages/employee-profile/employee-profile.component';
import { PartialEditEmployeeComponent } from './pages/partial-edit-employee/partial-edit-employee.component';
import { UsersComponent } from './pages/users/users.component';
import { EmployeesNewComponent } from './pages/employees-new/employees-new.component';
import { EmployeeCardComponent } from './pages/employees-new/employee-card/employee-card.component';
import { EmployeesListComponent } from './pages/employees-new/employees-list/employees-list.component';
import { EmployeeFormComponent } from './pages/employee-form/employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    EmployeesComponent,
    WrapperComponent,
    AvatarBarComponent,
    ProgressBarComponent,
    AddEmployeeComponent,
    TabComponent,
    TestComponent,
    AlertComponent,
    CardRelativesComponent,
    EmployeeProfileComponent,
    PartialEditEmployeeComponent,
    UsersComponent,
    EmployeesNewComponent,
    EmployeeCardComponent,
    EmployeesListComponent,
    EmployeeFormComponent
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
        ButtonGroupModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
