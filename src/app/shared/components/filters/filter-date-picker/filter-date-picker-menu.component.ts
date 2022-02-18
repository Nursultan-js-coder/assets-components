import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {UIDatePicker} from "@app/shared/components/form/form-date-picker/ui-date-picker";
import {DateAdapter} from "@angular/material/core";


@Component({
  selector: 'app-filter-date-picker-menu',
  template:`<div class="assets-form">
    <mat-form-field appearance="fill">
      <ng-container *ngIf="range ;else single">
        <mat-date-range-input [rangePicker]="rangeDatePicker">
          <input matStartDate placeholder="Start date" [formControl]="controlStart">
          <input matEndDate placeholder="End date" [formControl]="controlEnd">
        </mat-date-range-input>
      </ng-container>
      <ng-template #single>
        <input matInput [matDatepicker]="datePicker" [formControl]="control" (dateChange)="handleChange($event)">
      </ng-template>
      <mat-datepicker-toggle  matPrefix [for]="picker"></mat-datepicker-toggle>
      <mat-date-range-picker  #rangeDatePicker (change)="onChange($event)" #picker></mat-date-range-picker>
      <mat-datepicker #datePicker (change)="onChange($event)" #picker></mat-datepicker>
    </mat-form-field>
  </div>`
})
export class FilterDatePickerMenuComponent extends UIDatePicker implements OnInit {
  @Input() control = new FormControl('');
  @Input() controlStart = new FormControl('');
  @Input() controlEnd = new FormControl('');

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe((value)=>{
    })
  }

  // handleChange(date: MatDatepickerInputEvent<unknown, unknown | null>) {
  //   console.log("date selected:", date.value);
  // }

}
