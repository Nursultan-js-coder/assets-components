import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {FormControl} from "@angular/forms";
import {ReplaySubject, Subject} from "rxjs";
import {take, takeUntil} from "rxjs/operators";
import {MatSelect} from "@angular/material/select";
import {FormLabelEnum} from "@app/pages/inputs/form-input/form-input.component";

@Component({
  selector: "form-select-search",
  templateUrl: "./form-select-search.component.html",
  styleUrls: ['form-select-search.component.scss']
})

export class FormSelectSearchComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'app-material3';
  @Input() label: string;
  @Input() placeholder: string;
  @Input() control: FormControl = new FormControl();

  @Input() options: any;
  @Input() multiple: boolean;

  public filterCtrl: FormControl = new FormControl();
  public filteredOptions: ReplaySubject<any> = new ReplaySubject(1);

  @Input() chips: boolean;

  @ViewChild('singleSelect', {static: true}) singleSelect: MatSelect;

  protected _onDestroy = new Subject();
  @Input() labelPosition: FormLabelEnum = 'top';

  constructor() {
  }

  /**
   * Write code on Method
   *
   * method logical code
   */
  ngOnInit() {
    this.filteredOptions.next(this.options.slice());

    this.filterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanks();
      });
  }

  /**
   * Write code on Method
   *
   * method logical code
   */
  ngAfterViewInit() {
    this.setInitialValue();
  }

  /**
   * Write code on Method
   *
   * method logical code
   */
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Write code on Method
   *
   * method logical code
   */
  protected setInitialValue() {
    this.filteredOptions
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.singleSelect.compareWith = (a: any, b: any) => a && b && a.value === b.value;
      });
  }

  /**
   * Write code on Method
   *
   * method logical code
   */
  protected filterBanks() {
    if (!this.options) {
      return;
    }

    let search = this.filterCtrl.value;
    if (!search) {
      this.filteredOptions.next(this.options.slice());
      return;
    } else {
      search = search.toLowerCase();
    }

    this.filteredOptions.next(
      this.options.filter((bank: any) => bank.label.toLowerCase().indexOf(search) > -1)
    );
  }


  openAddSkillDialog() {
    console.log("selected options:", this.control.value)
  }
}
