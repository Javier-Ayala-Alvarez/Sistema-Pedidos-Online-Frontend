import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePedidosCocinaComponent } from './detalle-pedidos-cocina.component';

describe('DetallePedidosCocinaComponent', () => {
  let component: DetallePedidosCocinaComponent;
  let fixture: ComponentFixture<DetallePedidosCocinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePedidosCocinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePedidosCocinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
