import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocinaDashboardComponent } from './cocina-dashboard.component';

describe('CocinaDashboardComponent', () => {
  let component: CocinaDashboardComponent;
  let fixture: ComponentFixture<CocinaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocinaDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocinaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
