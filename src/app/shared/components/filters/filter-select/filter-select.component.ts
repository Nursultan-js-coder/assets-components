import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSelectChange} from "@angular/material/select";
import {FormControl} from "@angular/forms";
import {debounceTime, delay, distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
})
export class FilterSelectComponent implements OnInit {
  @Input() options: any;
  @Input() onChange?: any;
  @Input() control:FormControl;
  @Input() isSync?: any;
  @Output() changed = new EventEmitter();
  @Output() filterChanged = new EventEmitter();

  constructor() {
  }

  ngOnInit(){
    if (!this.isSync)
      this.control.valueChanges.pipe(distinctUntilChanged(), debounceTime(300), delay(1000)).subscribe((value) => {
      })
    else {
      this.control.valueChanges.subscribe((control) => {
        this.changed.emit(this.control.value);
      })
    }
  }

  changeHandler(selected: MatSelectChange) {
  this.filterChanged.emit(selected.value);
  }

}
