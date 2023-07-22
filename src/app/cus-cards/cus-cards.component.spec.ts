import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusCardsComponent } from './cus-cards.component';

describe('CusCardsComponent', () => {
  let component: CusCardsComponent;
  let fixture: ComponentFixture<CusCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
