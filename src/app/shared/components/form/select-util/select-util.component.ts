import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSelect} from "@angular/material/select";
import {FormControl} from "@angular/forms";
import {SelectionModel} from "@angular/cdk/collections";
// @ts-ignore
import {isArray} from "lodash-es";

@Component({
  selector: 'app-select-util',
  templateUrl: './select-util.component.html',
})
export class SelectUtilComponent implements OnInit {
  @Input() multiple: boolean;
  @Input() options: any;
  @Input() control: FormControl;
  @ViewChild('select') select: MatSelect;
  selectionModel: SelectionModel<any>;

  // @ViewChildren('select') selection

  constructor() {
    this.selectionModel = new SelectionModel(this.multiple);
  }

  ngOnInit(): void {
  }

  get selected() {
    if (isArray(this.control.value)) {
      return this.control.value.map((val: any) => {
        return this.options.find((option: any) => (option.id ?? option.value) == val).name
      })
    }
    return this.options.find((option: any) => (option.id ?? option.value) == this.control.value).name
  }


}
