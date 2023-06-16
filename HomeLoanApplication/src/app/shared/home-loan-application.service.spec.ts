import { TestBed } from '@angular/core/testing';

import { HomeLoanApplicationService } from './home-loan-application.service';

describe('HomeLoanApplicationService', () => {
  let service: HomeLoanApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeLoanApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
