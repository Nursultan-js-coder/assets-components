import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AlertComponent} from "@app/shared/components/progress-bar/alert/alert.component";

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['components.component.scss']
})
export class ComponentsComponent implements OnInit {
  control1 = new FormControl();
  control2 = new FormControl();
  control3 = new FormControl();
  control4 = new FormControl();
  datepickerControl = new FormControl();
  selectedTabIndex = 3;
  control = new FormControl();
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
  data = [
    {
      name: "Nursultan",
      age: "22"
    },
    {
      name: "Baktiyar",
      age: "30"
    },
    {
      name: "Beksultan",
      age: "26"
    },

  ];
  keyValuePair = [
    {
      key: 'name',
      value: "Name"
    },
    {
      key: 'age',
      value: "Age"
    },

  ]


  constructor(private _snackBar: MatSnackBar) {
    this.control1.addValidators(Validators.required);
    this.control2.addValidators(Validators.required);
    this.control3.addValidators(Validators.required);
    this.control4.addValidators(Validators.required);
    this.control4.disable();
  }

  ngOnInit(): void {
  }

  openSnackBar(status: string) {
    const message = status;
    this._snackBar.openFromComponent(AlertComponent, {
      horizontalPosition: "right",
      verticalPosition: "top",
      data: {
        status,
        message,
      }
    });
  }
}
