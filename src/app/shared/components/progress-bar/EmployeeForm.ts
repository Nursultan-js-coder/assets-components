import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

const educationFields = {
  university: [''],
  specialization: [''],
  degree: [''],
  dateOfGraduate: ['']
}
const positionFields = {
  positionId: [''],
  appointmentDate: [''],
  finishDate: [''],
  speciality: [''],
  specialityLevel: [''],
  certificationDate: [''],
}
const relativeFields = {
  relationDegree: [''],
  dob: [''],
  lastName: [''],
  firstName: [''],
  middleName: [''],
  address: [''],
  phoneNumber: ['']
}

export class EmployeeForm extends FormGroup {
  readonly main = this.get("main") as FormArray
  readonly personalInfo = this.main.controls[0] as FormGroup;
  readonly careerInfo = this.main.controls[1] as FormGroup;
  readonly additionalInfo = this.main.controls[2] as FormGroup;
  readonly firstName = this.personalInfo.get("firstName") as FormControl;
  readonly lastName = this.personalInfo.get("lastName") as FormControl;
  readonly middleName = this.personalInfo.get("middleName") as FormControl;
  readonly employeePhoneNumbers = this.personalInfo.get("employeePhoneNumbers") as FormArray;
  readonly genderId = this.personalInfo.get("genderId") as FormControl;
  readonly id = this.personalInfo.get("id") as FormControl;
  readonly emails = this.personalInfo.get('emails') as FormArray;
  readonly educations = this.personalInfo.get('educations') as FormArray;
  readonly dateOfBirth = this.personalInfo.get("dateOfBirth") as FormControl;
  readonly userLogin = this.personalInfo.get("userLogin") as FormControl;
  readonly positionsList = this.careerInfo.get("positionsList") as FormArray;
  readonly divisionsList = this.careerInfo.get("divisionsList") as FormArray;
  readonly acceptanceDate = this.careerInfo.get("acceptanceDate") as FormControl;
  readonly competencesList = this.careerInfo.get("competencesList") as FormArray;
  readonly isMol = this.personalInfo.get("isMol") as FormControl;
  readonly iNN = this.personalInfo.get("iNN") as FormControl;
  readonly address = this.personalInfo.get("address") as FormControl;
  readonly passportInfo = this.personalInfo.get("passportInfo") as FormControl;
  readonly passportNumber = this.passportInfo.get("passportNumber") as FormControl;
  readonly INN = this.passportInfo.get("INN") as FormControl;
  readonly citizenship = this.passportInfo.get("citizenship") as FormControl;
  readonly issuanceAuthority = this.passportInfo.get("issuanceAuthority") as FormControl;
  readonly issuanceDate = this.passportInfo.get("issuanceDate") as FormControl;
  readonly projectsList = this.careerInfo.get("projectsList") as FormControl;
  readonly devicesList = this.careerInfo.get("devicesList") as FormControl;
  readonly personnelNumber = this.careerInfo.get('personnelNumber') as FormControl;
  readonly corporateEmail = this.careerInfo.get('corporateEmail') as FormControl;
  readonly corporatePhoneNumber = this.careerInfo.get('corporatePhoneNumber') as FormControl;
  readonly relatives = this.additionalInfo.get('relatives') as FormArray;
  readonly interests = this.additionalInfo.get('interests') as FormGroup;

  constructor(readonly model: any | null, readonly fb: FormBuilder = new FormBuilder()) {
    super(fb.group({
      main: fb.array([
        fb.group({
          passportInfo: fb.group({
            INN: [model?.passportInfo.INN ?? ''],
            passportNumber: [model?.passportInfo.passportNumber ?? ''],
            citizenship: [model?.passportInfo.citizenship ?? ''],
            issuanceAuthority: [model?.passportInfo.issueAuthority ?? ''],
            issuanceDate: [model?.passportInfo.issuanceDate ?? ''],
          }),
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
          emails: fb.array(model?.emails?.length ? [...model?.emails?.map((email: any) => fb.group({
              name: [email.name ?? '', Validators.email]
            })), fb.group({name: ['', Validators.email]})] : [fb.group({
              name: ['', Validators.email]
            })]
          ),
          employeePhoneNumbers: fb.array(model?.employeePhoneNumbers?.length ? [...model?.employeePhoneNumbers?.map((p_number: any) => fb.group({
                name: [p_number.name ?? '']
              })), fb.group({name: ['']})]
              :
              [fb.group({
                name: ['']
              })]
          ),
          genderId: [model?.genderId, Validators.required],
          userLogin: [model?.userLogin],
          dateOfBirth: [model?.dateOfBirth, Validators.required],
          isMol: [model?.isMol],
          address: [model?.address],
          passportNumber: [model?.passportNumber, Validators.pattern("[a-z,A-Z]{2}[0-9]{7}")],
          iNN: [model?.iNN, Validators.pattern("[0-9]{14}")],
          educations: fb.array(model?.educations?.length ?
            [...model?.educations.map((edu: any) => fb.group({
              university: [edu.university ?? ''],
              specialization: [edu.specialization ?? ''],
              degree: [edu.degree ?? ""],
              dateOfGraduate: [edu.dateOfGraduate ?? ""]
            })),
              fb.group(educationFields)
            ]
            :
            [fb.group(educationFields)],
          ),
        }),
        fb.group({
          personnelNumber: [model?.personnelNumber ?? ''],
          corporateEmail: [model?.corporateEmail ?? ''],
          corporatePhoneNumber: [model?.corporatePhoneNumber ?? ''],
          skills: fb.array(model?.skills?.length ? [...model?.skills?.map((skill: any) => fb.group({
                name: [skill.name ?? ''],
                isSoft: [skill.isSoft ?? ''],
              })), fb.group({name: ['']})]
              :
              [fb.group({
                name: [''],
                isSoft: [''],
              })]
          ),
          positionsList: fb.array(model?.positionsList?.length ? [...model?.positionsList.map((pos: any) => fb.group({
                positionId: [pos.positionId ?? ''],
                appointmentDate: [pos.appointmentDate ?? ''],
                finishDate: [pos.finishDate ?? ''],
                speciality: [pos.speciality ?? ''],
                specialityLevel: [pos.specialityLevel ?? ''],
                certificationDate: [pos.certificationDate ?? ''],

              })), fb.group(positionFields
              )]
              :
              [fb.group(positionFields)],
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
        fb.group({
          relatives: fb.array(model?.additionalInfo?.relatives?.length ? [...model?.additionalInfo?.relatives?.map((relative: any) => fb.group({
                relationDegree: [relative?.relative ?? ''],
                dob: [relative?.dob ?? ''],
                lastName: [relative?.lastName ?? ''],
                firstName: [relative?.firstName ?? ''],
                middleName: [relative?.middleName ?? ''],
                address: [relative?.address ?? ''],
                phoneNumber: [relative?.phoneNumber ?? ''],

              })), fb.group(relativeFields)]
              :
              [fb.group(relativeFields)]
          ),
          interests: fb.group({
            generalInfo: [model?.additionalInfo?.generalInfo ?? ''],
            hashtags: [model?.additionalInfo?.hashtags ?? []],
          })

        })
      ])
    }, {updateOn: 'blur'}).controls)
  }

  addControl(controlName: string) {
    // @ts-ignore
    const formArray = this[controlName] as FormArray;
    const lastControl = this.getLastControl(formArray);
    if (lastControl.valid) {
      switch (controlName) {
        case "emails": {
          if (lastControl.value.name && lastControl.valid) {
            if (formArray.controls.every((ctrl) => ctrl.valid && ctrl.value)) {
              formArray.push(this.fb.group({name: ['', [Validators.email, Validators.required]]}));
            }
          }
          break;
        }
        case "employeePhoneNumbers": {
          if (lastControl.value.name && lastControl.valid) {
            if (formArray.controls.every((ctrl) => ctrl.valid && ctrl.value)) {
              formArray.push(this.fb.group({name: ['', [Validators.required]]}));
            }
          }
          break;
        }
        case "educations": {
          const controls = this.getControls(lastControl as FormGroup);
          debugger;
          lastControl.disable();
          if (controls.every(control => control?.value)) {
            formArray.push(this.fb.group({
              university: ['', Validators.required],
              specialization: ['', Validators.required],
              degree: ['', Validators.required],
              dateOfGraduate: ['', Validators.required]
            }));
          }
          break;
        }

        case "positionsList": {
          const controls = this.getControls(lastControl as FormGroup);
          if (controls.every(control => control?.value)) {
            formArray.push(this.fb.group({
              positionId: ['', Validators.required],
              appointmentDate: ['', Validators.required],
              finishDate: ['', Validators.required],
              speciality: ['', Validators.required],
              specialityLevel: ['', Validators.required],
              certificationDate: ['', Validators.required],
            }));
          }
          break;
        }
        case "relatives": {
          const controls = this.getControls(lastControl as FormGroup);
          // if (controls.every(control => control?.value)) {
          formArray.push(this.fb.group(relativeFields))
          // }
          break;
        }

        default:
          break;
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

  getLastControl(formArray: FormArray) {
    return formArray.controls[formArray.controls.length - 1];
  }

  /** gets controls from FormGroup / returns array of FormControl*/
  getControls(formGroup: FormGroup) {
    return Object.keys(formGroup.controls).map(key => formGroup.get(key)) ?? []
  }


}
