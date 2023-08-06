import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusDatosGeneralesComponent } from './cus-datos-generales.component';

describe('CusDatosGeneralesComponent', () => {
  let component: CusDatosGeneralesComponent;
  let fixture: ComponentFixture<CusDatosGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusDatosGeneralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusDatosGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
