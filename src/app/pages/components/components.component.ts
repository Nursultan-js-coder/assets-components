import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls:['components.component.scss']
})
export class ComponentsComponent implements OnInit {
  control1 = new FormControl();
  control2 = new FormControl();
  control3 = new FormControl();
  control4 = new FormControl();
  selectedTabIndex=3;
  constructor() {
    this.control1.addValidators(Validators.required);
    this.control2.addValidators(Validators.required);
    this.control3.addValidators(Validators.required);
    this.control4.addValidators(Validators.required);
    this.control4.disable();
  }

  ngOnInit(): void {
  }
}
