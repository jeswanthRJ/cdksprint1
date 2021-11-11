import { TestBed } from '@angular/core/testing';

import { LoginDetailsServiceService } from './login-details-service.service';

describe('LoginDetailsServiceService', () => {
  let service: LoginDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
