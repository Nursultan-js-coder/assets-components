import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatSpinner} from "@angular/material/progress-spinner";
import {hasRequiredField} from "@app/shared/common/form.utils";

export type FormLabelEnum = 'top' | 'left';

export type Validation = {
  key: string,
  label: string
}

@Component({
  selector: 'assets-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormInputComponent implements OnInit {
  @Input() labelPosition: FormLabelEnum = 'top';
  @Input() label: string;
  @Input() control: FormControl;
  @Input() placeholder?: string;
  @Input() suffix? = false;
  @Input() iconName?: string;
  @Input() prefix? = false;
  @Input() type: string = "text";
  @Input() validationKeys: Validation[];
  @ViewChild('input') input: ElementRef<HTMLInputElement>;
  hasRequiredField = hasRequiredField;
  customErrorMessage?: string;
  @Input() hint?: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
