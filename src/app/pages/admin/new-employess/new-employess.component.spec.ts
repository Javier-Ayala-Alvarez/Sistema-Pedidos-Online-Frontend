import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmployessComponent } from './new-employess.component';

describe('NewEmployessComponent', () => {
  let component: NewEmployessComponent;
  let fixture: ComponentFixture<NewEmployessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEmployessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmployessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
