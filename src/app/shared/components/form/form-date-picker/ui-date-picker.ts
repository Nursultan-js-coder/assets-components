import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";
import {MatDatepickerInputEvent, MatDatepickerToggle} from "@angular/material/datepicker";
import {hasRequiredField} from "@app/shared/common/form.utils";

@Component({
  selector: "form-ui-date-picker",
  templateUrl: "./ui-date-picker.component.html",
})

export class UIDatePicker implements OnInit {
  @Input() label: string;
  @Input() control: FormControl = new FormControl('', Validators.required);
  @Output() filterDateValueChanged = new EventEmitter();
  @Input() options: string[] = [];
  @Input() placeholder?: string
  @Input() range = false;
  today = new Date();
  @ViewChild('datepickerToggler') datepickerToggler: MatDatepickerToggle<any>;
  option = new FormControl();
  hasRequiredField = hasRequiredField;

  @Input()
  set disabled(value: boolean) {
    if (value)
      this.control.disable();
    else this.control.enable();
  };


  constructor() {
    // constructor(public dateAdapter: DateAdapter<Date>,public i18Service:I18nService) {
    //   this.dateAdapter.setLocale(i18Service.currentLanguage);
  }

  handleChange(date: MatDatepickerInputEvent<unknown, unknown | null>) {
    // @ts-ignore
    this.control.patchValue(new Date(date.value).toISOString());
  }

  ngOnInit() {
    if (this.control.value)
      this.control.patchValue(new Date(this.control.value).toISOString());
  }

  onChange(date: Event) {
  }
}
