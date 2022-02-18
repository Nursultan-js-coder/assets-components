import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {UIDatePicker} from "@app/shared/components/form/form-date-picker/ui-date-picker";
import {DateAdapter} from "@angular/material/core";


@Component({
  selector: 'app-filter-date-picker',
  template: `
    <div class="assets-form assets-filter assets-filter-datepicker">
      <ng-container *ngIf="range;else single">
        <mat-form-field appearance="fill">
          <mat-date-range-input [rangePicker]="rangeDatePicker">
            <input matStartDate placeholder="Start date" [formControl]="controlStart">
            <input matEndDate placeholder="End date" [formControl]="controlEnd">
          </mat-date-range-input>
          <mat-datepicker-toggle matPrefix [for]="rangeDatePicker"></mat-datepicker-toggle>
          <mat-date-range-picker #rangeDatePicker (change)="onChange($event)"></mat-date-range-picker>
        </mat-form-field>
      </ng-container>
      <ng-template #single>
        <mat-form-field appearance="fill">
          <input matInput [matDatepicker]="picker" [formControl]="control" (dateChange)="handleChange($event)">
          <mat-datepicker-toggle disableRipple matPrefix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
      </ng-template>
    </div>`,
})
export class FilterDatePickerComponent extends UIDatePicker implements OnInit {
  @Input() control = new FormControl('');
  @Input() controlStart = new FormControl('');
  @Input() controlEnd = new FormControl('');

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe((value) => {
    })
  }

  // handleChange(date: MatDatepickerInputEvent<unknown, unknown | null>) {
  //   console.log("date selected:", date.value);
  // }

}
