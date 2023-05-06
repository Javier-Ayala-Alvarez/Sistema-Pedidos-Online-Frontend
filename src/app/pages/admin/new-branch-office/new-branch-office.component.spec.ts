import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBranchOfficeComponent } from './new-branch-office.component';

describe('NewBranchOfficeComponent', () => {
  let component: NewBranchOfficeComponent;
  let fixture: ComponentFixture<NewBranchOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBranchOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBranchOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
