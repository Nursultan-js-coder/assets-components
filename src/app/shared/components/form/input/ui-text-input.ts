import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {FormControl} from "@angular/forms";
import {hasRequiredField} from "@app/shared/common/form.utils";
import {MatSpinner} from "@angular/material/progress-spinner";
import {Observable, of} from "rxjs";

type Validation = {
    key: string,
    label: string
}

@Component({
    selector: "form-ui-text-input",
    templateUrl: "./ui-text-input.component.html",

})
export class UITextInputComponent implements OnInit {
    @Input() label: string;
    @Input() control: FormControl;
    @Input() placeholder?: string;
    @Input() suffix? = false;
    @Input() iconName?: string;
    @Input() prefix? = false;
    @Input() type: string = "text";
    @Input() validationKeys: Validation[];
    @ViewChild('input') input: ElementRef<HTMLInputElement>;
    @ViewChild('spinner') spinner: MatSpinner;
    hasRequiredField = hasRequiredField;
    customErrorMessage?: string;
    @Input() hint?: any;

    constructor() {
    }

    ngOnInit() {
    }
}
