import { TestBed } from '@angular/core/testing';

import { CusCategoryService } from './cus-category.service';

describe('CusCategoryService', () => {
  let service: CusCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CusCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
