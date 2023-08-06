import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusRegistrarseComponent } from './cus-registrarse.component';

describe('CusRegistrarseComponent', () => {
  let component: CusRegistrarseComponent;
  let fixture: ComponentFixture<CusRegistrarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusRegistrarseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusRegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
