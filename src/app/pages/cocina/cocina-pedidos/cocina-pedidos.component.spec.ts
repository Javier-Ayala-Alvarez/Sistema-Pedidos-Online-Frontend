import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocinaPedidosComponent } from './cocina-pedidos.component';

describe('CocinaPedidosComponent', () => {
  let component: CocinaPedidosComponent;
  let fixture: ComponentFixture<CocinaPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocinaPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocinaPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
