import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReporteVentasComponent } from './list-reporte-ventas.component';

describe('ListReporteVentasComponent', () => {
  let component: ListReporteVentasComponent;
  let fixture: ComponentFixture<ListReporteVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReporteVentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReporteVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
