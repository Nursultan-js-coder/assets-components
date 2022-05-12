import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";
import {FormControl} from "@angular/forms";
import {hasRequiredField} from "@app/shared/common/form.utils";
import {FormLabelEnum} from "@app/pages/inputs/form-input/form-input.component";

@Component({
  selector: "assets-filter-dropdown",
  templateUrl: "./filter-dropdown.component.html",
  styleUrls: ["./filter-dropdown.component.scss"],
  encapsulation: ViewEncapsulation.None
})

export class AssetsFilterDropdownComponent implements OnInit {
  @Input() placeholder: string;
  @Input() label: string;
  @Input() control: FormControl;
  @Input() options: any | string[];
  @Input() multiple: boolean = false;
  hasRequiredField = hasRequiredField;
  @Input() labelPosition: FormLabelEnum = 'top';

  constructor() {
  }

  ngOnInit() {
  }


}
