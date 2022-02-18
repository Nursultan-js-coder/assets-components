import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from "@app/shared/components/table/table.component";
import {MaterialModule} from "@app/modules/material.module";
import {TableWrapperComponent} from './table-wrapper/table-wrapper.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import {FormModule} from "@app/shared/components/form/form.module";


@NgModule({
  declarations: [TableComponent, TableWrapperComponent, EmployeeTableComponent],
    exports: [
        TableComponent,
        TableWrapperComponent,
        EmployeeTableComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
    FormModule,
  ]
})
export class TableModule {
}
