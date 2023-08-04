import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlatoComponent } from './new-plato.component';

describe('NewPlatoComponent', () => {
  let component: NewPlatoComponent;
  let fixture: ComponentFixture<NewPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPlatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
