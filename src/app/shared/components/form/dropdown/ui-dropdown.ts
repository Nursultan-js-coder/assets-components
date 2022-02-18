import {Component, Input, OnInit} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";
import {MatSelectChange} from "@angular/material/select";
import {hasRequiredField} from "@app/shared/common/form.utils";

@Component({
  selector: "form-ui-dropdown",
  templateUrl: "./ui-dropdown.component.html",
})

export class UIDropdownComponent implements  OnInit{
  @Input() label:string;
  @Input() control: FormControl;
  @Input() options: any|string[];
  @Input() hasTranslations?:boolean;
  @Input() translationPrefix?: string;
  @Input() multiple:boolean = false;
  hasRequiredField = hasRequiredField;
   constructor() {
  }
  ngOnInit() {
  }



}
