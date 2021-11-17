import { TestBed } from '@angular/core/testing';

import { PdApiCallService } from './pd-api-call.service';

describe('PdApiCallService', () => {
  let service: PdApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
