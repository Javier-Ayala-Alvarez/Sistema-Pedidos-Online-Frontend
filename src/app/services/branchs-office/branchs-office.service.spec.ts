import { TestBed } from '@angular/core/testing';

import { BranchsOfficeService } from './branchs-office.service';

describe('BranchsOfficeService', () => {
  let service: BranchsOfficeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchsOfficeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
