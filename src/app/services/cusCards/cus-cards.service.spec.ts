import { TestBed } from '@angular/core/testing';

import { CusCardsService } from './cus-cards.service';

describe('CusCardsService', () => {
  let service: CusCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CusCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
