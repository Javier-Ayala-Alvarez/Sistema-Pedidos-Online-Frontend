import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryWelcomeComponent } from './delivery-welcome.component';

describe('DeliveryWelcomeComponent', () => {
  let component: DeliveryWelcomeComponent;
  let fixture: ComponentFixture<DeliveryWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
