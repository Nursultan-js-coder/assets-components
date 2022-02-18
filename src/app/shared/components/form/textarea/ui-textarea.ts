import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {AbstractControl, FormControl, Validators} from "@angular/forms";
import {hasRequiredField} from "@app/shared/common/form.utils";
import {MatSpinner} from "@angular/material/progress-spinner";
import {Observable, of} from "rxjs";
// import {MyErrorStateMatcher} from "@app/modules/employees/components/new-user-dialog/new-user-dialog.component";
import {map, switchMap, tap} from "rxjs/operators";

@Component({
  selector: "ui-textarea",
  templateUrl: "./ui-textarea.component.html",

})
export class UITextareaComponent implements  OnInit{
  @Input() label:string;
  @Input() hasLoader?:boolean = false;
  @Input() control: FormControl;
  @Input() iconClickHandler?: any;
  @Input() placeholder?: string;
  @Input() type?:string="text";
  @ViewChild('input') input:ElementRef<HTMLInputElement>;
  @ViewChild('spinner') spinner:MatSpinner;
  available:Observable<boolean>;
  isLoading:Observable<boolean> = of(false);
  hasRequiredField=hasRequiredField;
  customErrorMessage?:string;
  ngOnInit() {
    this.control.valueChanges.subscribe(((value)=>{
      if(this.control.hasError('usernameExists')){
        this.control.markAsTouched();
      }
      return value;
    }))
  }
}
