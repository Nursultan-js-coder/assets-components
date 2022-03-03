import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['employees-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {

  constructor() {
  }

  levelControl = new FormControl();
  displayedColumns = ["select", "name", "level", "positions", "dateOfBirth", "projects", "isActive", "actions"];
  dataSource = new MatTableDataSource([
    {
      lastName: "Абышев",
      firstName: "Оман",
      competencesList: [
        {
          competenceId: 1,
          levelsList: [
            {
              levelId: 10
            }
          ]
        },
        {
          competenceId: 2,
          levelsList: [
            {
              levelId: 14
            }
          ]
        },
        {
          competenceId: 3,
          levelsList: [
            {
              levelId: 14
            }
          ]
        }
      ],
      positionsList: [
        {
          positionId: 1
        }
      ],
      projectsList: [
        {
          projectId: 3
        },
        {
          projectId: 12
        },
        {
          projectId: 15
        },
        {
          projectId: 14
        },
        {
          projectId: 11
        }
      ],
      userLogin: "Admin",
      isActive: true,
      dateOfBirth: "2021-12-27T11:34:39.541Z"
    },
    {
      lastName: "Абдрахманова",
      firstName: "Айгуль",
      competencesList: [
        {
          competenceId: 1,
          levelsList: [
            {
              levelId: 14
            }
          ]
        }
      ],
      positionsList: [
        {
          positionId: 3
        }
      ],
      projectsList: [
        {
          projectId: 3
        },
        {
          projectId: 15
        }
      ],
      userLogin: "aigul@timely.net",
      isActive: true,
      dateOfBirth: "2021-12-27T11:34:39.541Z"
    },
    {
      lastName: "Кыдырова",
      firstName: "Айсулуу",
      competencesList: [
        {
          competenceId: 2,
          levelsList: [
            {
              levelId: 10
            }
          ]
        },
        {
          competenceId: 3,
          levelsList: [
            {
              levelId: 9
            }
          ]
        }
      ],
      positionsList: [
        {
          positionId: 7
        }
      ],
      projectsList: [
        {
          projectId: 11
        },
        {
          projectId: 14
        }
      ],
      userLogin: null,
      isActive: true,
      dateOfBirth: "1970-01-01T00:00:00.000Z"
    },
    {
      lastName: "Гуринов",
      firstName: "Андрей",
      competencesList: [
        {
          competenceId: 1,
          levelsList: [
            {
              levelId: 10
            }
          ]
        },
        {
          competenceId: 2,
          levelsList: []
        }
      ],
      positionsList: [
        {
          positionId: 7
        }
      ],
      projectsList: [
        {
          projectId: 3
        }
      ],
      userLogin: null,
      isActive: true,
      dateOfBirth: "2021-12-29T18:00:00.000Z"
    },
    {
      lastName: "Аматов",
      firstName: "Бексултан",
      competencesList: [
        {
          competenceId: 2,
          levelsList: [
            {
              levelId: 9
            }
          ]
        },
        {
          competenceId: 3,
          levelsList: [
            {
              levelId: 10
            }
          ]
        }
      ],
      positionsList: [
        {
          positionId: 3
        }
      ],
      projectsList: [
        {
          projectId: 3
        },
        {
          projectId: 12
        }
      ],
      userLogin: null,
      isActive: true,
      dateOfBirth: "1981-08-31T17:00:00.000Z"
    },
    {
      lastName: "Лукманов",
      firstName: "Нурсултан",
      competencesList: [
        {
          competenceId: 1,
          levelsList: [
            {
              levelId: 10
            }
          ]
        },
        {
          competenceId: 2,
          levelsList: [
            {
              levelId: 10
            }
          ]
        }
      ],
      positionsList: [
        {
          positionId: 8
        }
      ],
      projectsList: [
        {
          projectId: 15
        },
        {
          projectId: 11
        },
        {
          projectId: 14
        }
      ],
      userLogin: "nurs@mail.ru",
      isActive: true,
      dateOfBirth: "1970-01-01T00:00:00.000Z"
    },
    {
      lastName: "Пешов",
      firstName: "Игорь",
      competencesList: [
        {
          competenceId: 1,
          levelsList: [
            {
              levelId: 14
            }
          ]
        },
        {
          competenceId: 2,
          levelsList: [
            {
              levelId: 9
            }
          ]
        }
      ],
      positionsList: [
        {
          positionId: 8
        }
      ],
      projectsList: [
        {
          projectId: 12
        },
        {
          projectId: 3
        },
        {
          projectId: 14
        }
      ],
      userLogin: null,
      isActive: true,
      dateOfBirth: "1988-12-31T18:00:00.000Z"
    },
    {
      lastName: "Собчак",
      firstName: "Ксения",
      competencesList: [
        {
          competenceId: 2,
          levelsList: [
            {
              levelId: 10
            }
          ]
        }
      ],
      positionsList: [
        {
          positionId: 1
        }
      ],
      projectsList: [],
      userLogin: null,
      isActive: true,
      dateOfBirth: "2000-04-07T18:00:00.000Z"
    },
    {
      lastName: "Бекешова",
      firstName: "Алтынай",
      competencesList: [
        {
          competenceId: 1,
          levelsList: [
            {
              levelId: 10
            }
          ]
        },
        {
          competenceId: 3,
          levelsList: [
            {
              levelId: 14
            }
          ]
        }
      ],
      positionsList: [
        {
          positionId: 8
        }
      ],
      projectsList: [],
      userLogin: null,
      isActive: true,
      dateOfBirth: "2021-05-11T18:00:00.000Z"
    },
    {
      lastName: "Алай",
      firstName: "Арстан ",
      competencesList: [
        {
          competenceId: 2,
          levelsList: [
            {
              levelId: 10
            }
          ]
        }
      ],
      positionsList: [
        {
          positionId: 8
        }
      ],
      projectsList: [],
      userLogin: null,
      isActive: true,
      dateOfBirth: "2020-12-01T18:00:00.000Z"
    },
    {
      lastName: "Иванова",
      firstName: "Юлия",
      competencesList: [
        {
          competenceId: 2,
          levelsList: [
            {
              levelId: 9
            }
          ]
        }
      ],
      positionsList: [
        {
          positionId: 7
        }
      ],
      projectsList: [
        {
          projectId: 12
        }
      ],
      userLogin: null,
      isActive: true,
      dateOfBirth: "1982-09-01T17:00:00.000Z"
    },
    {
      lastName: "Павлов",
      firstName: "Хуан",
      competencesList: [
        {
          competenceId: 2,
          levelsList: [
            {
              levelId: 10
            }
          ]
        },
        {
          competenceId: 3,
          levelsList: [
            {
              levelId: 10
            }
          ]
        }
      ],
      positionsList: [
        {
          positionId: 12
        },
        {
          positionId: 8
        }
      ],
      projectsList: [],
      userLogin: null,
      isActive: true,
      dateOfBirth: "2012-10-09T18:00:00.000Z"
    },
    {
      lastName: "HR",
      firstName: "HR",
      competencesList: [
        {
          competenceId: 1,
          levelsList: [
            {
              levelId: 14
            }
          ]
        }
      ],
      positionsList: [],
      projectsList: [],
      userLogin: "HR",
      isActive: true,
      dateOfBirth: "2022-01-21T11:23:12.130Z"
    }
  ])

  ngOnInit(): void {
  }

}
