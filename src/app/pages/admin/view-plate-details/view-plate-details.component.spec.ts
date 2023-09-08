import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlateDetailsComponent } from './view-plate-details.component';

describe('ViewPlateDetailsComponent', () => {
  let component: ViewPlateDetailsComponent;
  let fixture: ComponentFixture<ViewPlateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPlateDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPlateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
