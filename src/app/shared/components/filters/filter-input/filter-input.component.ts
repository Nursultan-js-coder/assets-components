import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
})
export class FilterInputComponent implements OnInit {
  @Input() control: FormControl;
  @Input('placeholder') placeholder: string;
  @Output() onFilterChange = new EventEmitter();
  isLoading = false;

  constructor() {
  }

  ngOnInit(): void {
    // this.control.valueChanges.pipe(distinctUntilChanged(), debounceTime(1000))
    // .subscribe((value) => {
    //   this.onFilterChange.emit(value);
    // });
  }

  emit(term: string): any {
    return this.onFilterChange.emit(term);
  }

}
