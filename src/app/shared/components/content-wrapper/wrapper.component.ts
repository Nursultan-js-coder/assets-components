import {Component, ViewChild} from '@angular/core';
import {toggleAnimation2} from "@app/shared/common/animations";
import {MatDrawer} from "@angular/material/sidenav";
import {Router} from "@angular/router";

export const adminSettingsRoute: any = [
  {
    icon: "account_circle",
    path: "users",
    name: "Users",
    disabled: false,
    moduleName: "User",
    actionName: 'AllUsers',
  },
  {
    icon: "admin_panel_settings",
    path: "roles",
    name: "Roles",
    disabled: false,
    moduleName: "User",
    actionName: 'AllUsers',
  },
]

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  animations: [
    toggleAnimation2
  ]
})

export class WrapperComponent {

  routes: any = [
    // {
    //   icon: "dashboard",
    //   path: "dashboard",
    //   name: "Main",
    //   disabled: false,
    //   moduleName: "User",
    //   actionName: 'GetUserById',
    // },
    {
      icon: "people",
      path: "employees",
      name: "Employees",
      disabled: false,
      moduleName: "Employee",
      actionName: 'GetAllEmployees',
    },
    {
      icon: "construction",
      path: "components",
      name: "Components",
      disabled: false,
      moduleName: "Device",
      actionName: 'GetAllDevices',
    },
    {
      icon: "insert_chart",
      path: "tab",
      name: "Tabs",
      disabled: false,
      moduleName: "Project",
      actionName: 'GetAllProjects',
    },
    {
      icon: "info",
      path: "profile",
      name: "Employee Profile",
      disabled: false,
      moduleName: "Project",
      actionName: 'GetAllProjects',
    },
    // {
    //   icon: "admin_panel_settings",
    //   path: `admin`,
    //   name: "admin",
    //   disabled: false,
    //   moduleName: "User",
    //   actionName: 'UpdateEmployeePermissions',
    //   children: adminSettingsRoute
    // },
  ]
  panelOpenState = true;
  hasBackdrop: boolean;
  theme = "dark-theme"
  @ViewChild(MatDrawer) matDrawer: MatDrawer; //TODO delete drawer toggler after you are finished with roles

  constructor(public router: Router) {
  }

  get animationState() {
    return this.panelOpenState ? 'in' : 'out';
  }
}
