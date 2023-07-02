import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusModalProductoComponent } from './cus-modal-producto.component';

describe('CusModalProductoComponent', () => {
  let component: CusModalProductoComponent;
  let fixture: ComponentFixture<CusModalProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusModalProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusModalProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
