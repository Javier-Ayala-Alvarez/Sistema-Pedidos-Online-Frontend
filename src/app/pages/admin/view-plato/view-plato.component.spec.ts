import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlatoComponent } from './view-plato.component';

describe('ViewPlatoComponent', () => {
  let component: ViewPlatoComponent;
  let fixture: ComponentFixture<ViewPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPlatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
