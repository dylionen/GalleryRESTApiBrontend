import { TestBed } from '@angular/core/testing';

import { Loginservice } from './login.service';

describe('LoginserviceService', () => {
  let service: Loginservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Loginservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
