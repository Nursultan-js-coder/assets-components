import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {UITextInputComponent} from "@app/shared/components/form/input/ui-text-input";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-input-autosuggestion',
  template: `
    <div [class]="(textarea ? 'assets-textarea' : '' )+' assets-form'">
      <mat-form-field appearance="fill">
        <mat-label>{{label}}
          <ng-template [ngIf]="hasRequiredField(control)">
            <span [ngStyle]="{'color':'rgba(169, 57, 57, 1)','font-weight':'thin'}">*</span>
          </ng-template>
        </mat-label>
        <ng-container *ngIf="chips;else noChip">
          <mat-chip-list #chipList aria-label="Fruit selection">
            <mat-chip
              *ngFor="let fruit of fruits"
              (removed)="remove(fruit)">
              {{fruit}}
              <button matChipRemove>
                <mat-icon>cancel</mat-icon>
              </button>
            </mat-chip>
            <input [type]="type" matInput [formControl]="control"
                   placeholder="New fruit..."
                   #fruitInput
                   [matAutocomplete]="auto"
                   [matChipInputFor]="chipList"
                   [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
                   (matChipInputTokenEnd)="add($event)">
          </mat-chip-list>
        </ng-container>
        <ng-template #noChip><input [type]="type" matInput [formControl]="control" [matAutocomplete]="auto"/>
        </ng-template>
        <mat-autocomplete #auto="matAutocomplete" (optionSelected)="selected($event)">
          <mat-option *ngFor="let fruit of filteredFruits | async" [value]="fruit">
            {{fruit}}
          </mat-option>
        </mat-autocomplete>

        <!--    hint-->
        <mat-hint *ngIf="hint">{{hint}}</mat-hint>

        <mat-icon *ngIf="suffix" matSuffix>{{iconName}}</mat-icon>

        <mat-icon *ngIf="prefix" matPrefix>{{iconName}}</mat-icon>

        <mat-error *ngIf="control.hasError('required')">
          this field is required
        </mat-error>

        <mat-error *ngIf="control.hasError('pattern')">
          this field is required
        </mat-error>

        <mat-error *ngIf="control.hasError('email') && !control.hasError('required')">
          this field is required
        </mat-error>


        <mat-error *ngFor="let validation of validationKeys">
          <p *ngIf="control.hasError(validation.key)">
            {{validation.label}}
          </p>
        </mat-error>

      </mat-form-field>
    </div>

  `,
  styles: [`input {
    //overflow-x: scroll !important;
  }`]

})
export class FormInputAutosuggestComponent extends UITextInputComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

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
  }

}
