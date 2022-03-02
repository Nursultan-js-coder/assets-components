import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


export class EmployeeForm extends FormGroup {
  readonly main = this.get("main") as FormArray
  readonly personalInfo = this.main.controls[0] as FormGroup;
  readonly careerInfo = this.main.controls[1] as FormGroup;
  readonly firstName = this.personalInfo.get("firstName") as FormControl;
  readonly lastName = this.personalInfo.get("lastName") as FormControl;
  readonly middleName = this.personalInfo.get("middleName") as FormControl;
  readonly employeePhoneNumbers = this.personalInfo.get("employeePhoneNumbers") as FormArray;
  readonly genderId = this.personalInfo.get("genderId") as FormControl;
  readonly id = this.personalInfo.get("id") as FormControl;
  readonly emails = this.personalInfo.get('emails') as FormArray;
  readonly dateOfBirth = this.personalInfo.get("dateOfBirth") as FormControl;
  readonly userLogin = this.personalInfo.get("userLogin") as FormControl;
  readonly positionsList = this.careerInfo.get("positionsList") as FormArray;
  readonly divisionsList = this.careerInfo.get("divisionsList") as FormArray;
  readonly acceptanceDate = this.careerInfo.get("acceptanceDate") as FormControl;
  readonly competencesList = this.careerInfo.get("competencesList") as FormArray;
  readonly isMol = this.personalInfo.get("isMol") as FormControl;
  readonly iNN = this.personalInfo.get("iNN") as FormControl;
  readonly address = this.personalInfo.get("address") as FormControl;
  readonly passportNumber = this.personalInfo.get("passportNumber") as FormControl;
  readonly projectsList = this.careerInfo.get("projectsList") as FormControl;
  readonly devicesList = this.careerInfo.get("devicesList") as FormControl;

  constructor(readonly model: any | null, readonly fb: FormBuilder = new FormBuilder()) {
    super(fb.group({
      main: fb.array([
        fb.group({
          id: [model?.id ?? 0],
          firstName: [model?.firstName,
            {
              validators: [Validators.required, Validators.pattern("[a-z,A-Z,а-я,А-Я]*")],
              updateOn: 'blur'
            }],
          lastName: [model?.lastName, {
            validators: [Validators.required, Validators.pattern("[a-z,A-Z,а-я,А-Я]*")],
            updateOn: "blur",
          }],
          middleName: [model?.middleName, Validators.pattern("[a-z,A-Z,а-я,А-Я]*")],
          emails: fb.array(model?.emails?.length ? [...model?.emails?.map((email:any) => fb.group({
              name: [email.name ?? '', Validators.email]
            })), fb.group({name: ['', Validators.email]})] : [fb.group({
              name: ['', Validators.email]
            })]
          ),
          employeePhoneNumbers: fb.array(model?.employeePhoneNumbers?.length ? [...model?.employeePhoneNumbers?.map((p_number:any) => fb.group({
                name: [p_number.name ?? '']
              })), fb.group({name: ['']})]
              :
              [fb.group({
                name: ['']
              })]
          ),
          genderId: [model?.genderId, Validators.required],
          userLogin: [model?.userLogin, {
            validators: [Validators.required],
          }],
          dateOfBirth: [model?.dateOfBirth, Validators.required],
          isMol: [model?.isMol, Validators.required],
          address: [model?.address],
          passportNumber: [model?.passportNumber, Validators.pattern("[a-z,A-Z]{2}[0-9]{7}")],
          iNN: [model?.iNN, Validators.pattern("[0-9]{14}")]
        }),
        fb.group({
          positionsList: fb.array(model?.positionsList?.length ? [...model?.positionsList.map((pos: any) => fb.group({
                positionId: [pos.positionId ?? ''],
                appointmentDate: [pos.appointmentDate ?? '']
              })), fb.group({
                positionId: [''],
                appointmentDate: ['']
              })]
              :
              [fb.group({
                positionId: [''],
                appointmentDate: ['']
              })],
          ),
          projectsList: fb.array(model?.projectsList?.length ? [...model?.projectsList.map((project: any) => fb.group({
                projectId: [project?.projectId ?? ''],
                startedDate: [project?.startedDate ?? ''],
                finishedDate: [project?.finishedDate ?? '']
              })), fb.group({
                projectId: [''],
                startedDate: [''],
                finishedDate: ['']
              })]
              :
              [fb.group({
                projectId: [''],
                startedDate: [''],
                finishedDate: ['']
              })],
          ),
          devicesList: fb.array(model?.devicesList?.length ? [...model?.devicesList.map((equipment: any) => fb.group({
                deviceId: [equipment.deviceId ?? ''],
                issuanceDate: [equipment?.issuanceDate ?? ''],
              })), fb.group({
                deviceId: [''],
                issuanceDate: ['']
              })]
              :
              [fb.group({
                deviceId: [''],
                issuanceDate: ['']
              })],
          ),
          divisionsList: fb.array(model?.divisionsList?.length ?
            [...model?.divisionsList
              ?.map((div: any) => fb.group({
                divisionId: [div?.divisionId ?? null],
                transferDate: [div?.transferDate ?? '']
              }))
              , fb.group({
              divisionId: [''],
              transferDate: ['']
            })
            ]
            :
            [fb.group({
              divisionId: [''],
              transferDate: ['']
            })]
          ),
          acceptanceDate: [model?.acceptanceDate], //TODO make it required again
          competencesList: fb.array(model?.competencesList?.length ? [...model?.competencesList?.map((com: any) => fb.group({
                competenceId: [com?.competenceId ?? '', Validators.required],
                levelsList: fb.array(com.levelsList.map((level: any) =>
                  fb.group({
                    levelId: [level?.levelId ?? 0],
                    certificationDate: [level?.certificationDate ?? ''],
                  }, Validators.required)
                )),
              })),
                fb.group({
                  competenceId: [''],
                  levelsList: fb.array([
                    fb.group({
                      levelId: [''],
                      certificationDate: [""],
                    })
                  ]),
                })
              ] :
              [
                fb.group({
                  competenceId: [''],
                  levelsList: fb.array([
                    fb.group({
                      levelId: [''],
                      certificationDate: [""],
                    })
                  ]),
                })
              ]
          ),
        }),
      ])
    }, {updateOn: 'blur'}).controls)
  }


  addPhoneNumber() {
    if (this.isControlValid(this.employeePhoneNumbers)) {
      if (this.employeePhoneNumbers.controls.every((ctrl) => ctrl.value)) {
        this.employeePhoneNumbers.push(this.fb.group({
          name: [''],
        }));
      }
    }
  }

  addEmail() {
    if (this.isControlValid(this.emails)) {
      if (this.emails.controls.every((ctrl) => ctrl.valid && ctrl.value)) {
        this.emails.push(this.fb.group({name: ['', Validators.email]}));
      }

    }
  }

  addPosition() {
    if (this.isControlValid(this.positionsList)) {
      this.positionsList.push(this.fb.group({
        positionId: [''],
        appointmentDate: [''],
      }));
    }
  }

  addDivision() {
    if (this.isControlValid(this.divisionsList)) {
      this.divisionsList.push(this.fb.group({
        divisionId: this.fb.control(''),
        transferDate: this.fb.control('')
      }))
    }
  }

  addCompetence() {
    if (this.isControlValid(this.competencesList)) {
      this.competencesList.push(
        this.fb.group({
          competenceId: ['', Validators.required],
          levelsList: this.fb.array([
            this.fb.group({
              levelId: ['', Validators.required],
              certificationDate: ["", Validators.required],
            }, Validators.required)
          ]),
        }, Validators.required))
    }
  }

  remove(index: number, control: FormArray) {
    control.removeAt(index);
  }

  isControlValid(control: FormArray) {
    const lastControl = control.controls[control.controls.length - 1];
    // control.controls.forEach((ctrl)=>ctrl.markAsTouched());
    return !!lastControl.value;
  }

}
