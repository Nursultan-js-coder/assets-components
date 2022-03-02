import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeesComponent} from "./pages/employees/employees.component";
import {ComponentsComponent} from "./pages/components/components.component";
import {AddEmployeeComponent} from "@app/pages/add-employee/add-employee.component";

const routes: Routes = [
  {
    path: "",
    component: ComponentsComponent,
    pathMatch: "full"
  },
  {
    path: "employees",
    component: EmployeesComponent,
  },
  {
    path: "add-employee",
    component: AddEmployeeComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
