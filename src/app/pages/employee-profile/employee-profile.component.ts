import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
