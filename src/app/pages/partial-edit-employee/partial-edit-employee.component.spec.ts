import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialEditEmployeeComponent } from './partial-edit-employee.component';

describe('PartialEditEmployeeComponent', () => {
  let component: PartialEditEmployeeComponent;
  let fixture: ComponentFixture<PartialEditEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialEditEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialEditEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
