import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusIniciarSesionComponent } from './cus-iniciar-sesion.component';

describe('CusIniciarSesionComponent', () => {
  let component: CusIniciarSesionComponent;
  let fixture: ComponentFixture<CusIniciarSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusIniciarSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusIniciarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
