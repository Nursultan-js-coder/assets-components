import { TestBed } from '@angular/core/testing';

import { EmployeesFilterService } from './employees-filter.service';

describe('EmployeesFilterService', () => {
  let service: EmployeesFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
