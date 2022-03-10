import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeesComponent} from "./pages/employees/employees.component";
import {ComponentsComponent} from "./pages/components/components.component";
import {ProgressBarComponent} from "@app/shared/components/progress-bar/progress-bar.component";
import {TabComponent} from "@app/pages/tab/tab.component";

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
    path: "tab",
    component: TabComponent,
  },
  {
    path: "components",
    component: ComponentsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
