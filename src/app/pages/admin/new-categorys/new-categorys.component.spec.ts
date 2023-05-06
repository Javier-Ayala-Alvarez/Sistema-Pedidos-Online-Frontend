import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCategorysComponent } from './new-categorys.component';

describe('NewCategorysComponent', () => {
  let component: NewCategorysComponent;
  let fixture: ComponentFixture<NewCategorysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCategorysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCategorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
