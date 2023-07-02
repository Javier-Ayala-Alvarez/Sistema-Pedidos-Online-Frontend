import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusPlatoComponent } from './cus-plato.component';

describe('CusPlatoComponent', () => {
  let component: CusPlatoComponent;
  let fixture: ComponentFixture<CusPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusPlatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
