import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormLabelEnum} from "@app/pages/inputs/form-input/form-input.component";


@Component({
  selector: 'assets-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilterInputComponent implements OnInit {
  @Input() labelPosition: FormLabelEnum = 'top';

  constructor() {
  }

  ngOnInit(): void {
  }

}
