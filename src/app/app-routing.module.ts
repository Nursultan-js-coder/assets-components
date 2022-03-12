import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeesComponent} from "./pages/employees/employees.component";
import {ComponentsComponent} from "./pages/components/components.component";
import {ProgressBarComponent} from "@app/shared/components/progress-bar/progress-bar.component";
import {TabComponent} from "@app/pages/tab/tab.component";
import {EmployeeProfileComponent} from "@app/pages/employee-profile/employee-profile.component";
import {PartialEditEmployeeComponent} from "@app/pages/partial-edit-employee/partial-edit-employee.component";

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
    component: ProgressBarComponent,
  },
  {
    path: "add-employee/1",
    component: PartialEditEmployeeComponent,
  },
  {
    path: "tab",
    component: TabComponent,
  },
  {
    path: "components",
    component: ComponentsComponent,
  },
  {
    path: "profile",
    component: EmployeeProfileComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
