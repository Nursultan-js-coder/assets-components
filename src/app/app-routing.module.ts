import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeesComponent} from "./pages/employees/employees.component";
import {ComponentsComponent} from "./pages/components/components.component";
import {ProgressBarComponent} from "@app/shared/components/progress-bar/progress-bar.component";

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
