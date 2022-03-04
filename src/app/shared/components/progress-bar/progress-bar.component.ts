import {Component, OnInit} from '@angular/core';
import {MatTabChangeEvent} from "@angular/material/tabs";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {EmployeeForm} from "@app/shared/components/progress-bar/EmployeeForm";

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
    selectedIndex = 0;
    totalTabCount = 3;
    control = new FormControl();
    control1 = new FormControl();
    form: EmployeeForm;

    constructor() {
        this.control.addValidators(Validators.required)
        this.control1.addValidators(Validators.required)
        this.form = new EmployeeForm(null, new FormBuilder());
    }

    ngOnInit(): void {
    }


    onSelectedTabChange(event: MatTabChangeEvent) {
        this.selectedIndex = event.index;
    }

    nextTab(event: MouseEvent) {
        // this.selectedIndex = Math.floor((this.selectedIndex + 1) % this.totalTabCount);
    }

    prevTab() {

    }

    get processPercentage() {
        return Math.max(1, this.selectedIndex + 1) / this.totalTabCount * 100;
    }

    onSubmit() {
        console.log("On submit:", this.form.value);
    }
}
