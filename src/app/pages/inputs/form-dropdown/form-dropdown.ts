import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";
import {FormControl} from "@angular/forms";
import {hasRequiredField} from "@app/shared/common/form.utils";
import {FormLabelEnum} from "@app/pages/inputs/form-input/form-input.component";

@Component({
  selector: "assets-form-dropdown",
  templateUrl: "./form-dropdown.component.html",
  styleUrls: ["./form-dropdown.component.scss"],
  encapsulation: ViewEncapsulation.None
})

export class AssetsFormDropdownComponent implements OnInit {
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
