import { TestBed } from '@angular/core/testing';

import { CocinaGuard } from './cocina.guard';

describe('CocinaGuard', () => {
  let guard: CocinaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CocinaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
