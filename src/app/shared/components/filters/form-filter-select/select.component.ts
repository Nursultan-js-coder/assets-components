import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSelectChange} from "@angular/material/select";
import {FormControl} from "@angular/forms";
import {debounceTime, delay, distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-form-select',
  templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit {
  @Input() options: any;
  @Input() onChange?: any;
  model = new FormControl();
  @Input() isSync?: any;
  @Output() changed = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    if (!this.isSync)
      this.model.valueChanges.pipe(distinctUntilChanged(), debounceTime(300), delay(1000)).subscribe((value) => {
      })
    else {
      this.model.valueChanges.subscribe((value) => {
        this.changed.emit(this.model.value);
      })
    }
  }

  changeHandler(selected: MatSelectChange) {

  }

}
