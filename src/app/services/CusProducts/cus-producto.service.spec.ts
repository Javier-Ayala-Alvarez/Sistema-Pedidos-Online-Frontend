import { TestBed } from '@angular/core/testing';

import { CusProductoService } from './cus-producto.service';

describe('CusProductoService', () => {
  let service: CusProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CusProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
