import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPedidosComponent } from './delivery-pedidos.component';

describe('DeliveryPedidosComponent', () => {
  let component: DeliveryPedidosComponent;
  let fixture: ComponentFixture<DeliveryPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
