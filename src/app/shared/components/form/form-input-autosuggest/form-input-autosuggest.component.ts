import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {UITextInputComponent} from "@app/shared/components/form/input/ui-text-input";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-input-autosuggestion',
  templateUrl: "form-input-autosuggest.component.html",
  // styleUrls: ['form-input-autosuggest.component.scss']

})
export class FormInputAutosuggestComponent extends UITextInputComponent implements AfterViewInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  fruitControl = new FormControl();
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @Input() textarea = false;
  @Input() chips = false;


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  constructor() {
    super();
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  ngOnInit(): void {
    this.filteredFruits = this.fruitControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  ngAfterViewInit() {
    console.log("fruit input:", this.fruitInput);

  }

}
