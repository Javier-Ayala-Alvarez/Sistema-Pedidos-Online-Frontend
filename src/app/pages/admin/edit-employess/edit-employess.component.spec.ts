import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployessComponent } from './edit-employess.component';

describe('EditEmployessComponent', () => {
  let component: EditEmployessComponent;
  let fixture: ComponentFixture<EditEmployessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
