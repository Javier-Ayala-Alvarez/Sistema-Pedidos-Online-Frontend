import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBranchOfficeComponent } from './edit-branch-office.component';

describe('EditBranchOfficeComponent', () => {
  let component: EditBranchOfficeComponent;
  let fixture: ComponentFixture<EditBranchOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBranchOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBranchOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
