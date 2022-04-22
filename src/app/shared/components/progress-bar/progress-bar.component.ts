import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {MatTabChangeEvent} from "@angular/material/tabs";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {EmployeeForm} from "@app/shared/components/progress-bar/EmployeeForm";

interface ITab {
  hint?: string,
  index: number
}

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, AfterViewInit {
  // @ViewChild('isEmployedCurrently') isEmployedCurrently: MatCheckbox;
  selectedIndex = 1;
  totalTabCount = 3;
  control = new FormControl();
  control1 = new FormControl();
  form: EmployeeForm;
  tabs: ITab[] = [];
  currentTab: ITab;
  relative: any = {
    address: "Кыргызстан, г. Бишкек, проспект Эркиндик, д 58," +
      "кв. 23/4",
    dob: "03/11/1968",
    phoneNumber: "+996(707)20-20-20",
    firstName: " Азамат",
    lastName: "Джумакадыров",
    middleName: "Алибекович",
    degree: "Отец"
  };
  @Input() edit: boolean = false;

  constructor() {
    this.control.addValidators(Validators.required)
    this.control1.addValidators(Validators.required)
    this.form = new EmployeeForm(null, new FormBuilder());
    this.tabs = [
      {index: 0},
      {index: 1},
      {index: 2, hint: "Вы можете пропустить этот шаг и добавить информацию позже!"},
    ]
    this.currentTab = this.tabs[this.selectedIndex ?? 0];
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
  }


  onSelectedTabChange(event: MatTabChangeEvent) {
    this.selectedIndex = event.index;
    this.currentTab = this.tabs[this.selectedIndex];
  }


  get processPercentage() {
    return Math.max(1, this.selectedIndex + 1) / this.totalTabCount * 100;
  }

  onSubmit() {
    console.log("On submit:", this.form.value);
  }

  get isFormValid(): boolean {
    return this.form.main.controls[this.selectedIndex].valid;
  }
}
