import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBranchOfficeComponent } from './list-branch-office.component';

describe('ListBranchOfficeComponent', () => {
  let component: ListBranchOfficeComponent;
  let fixture: ComponentFixture<ListBranchOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBranchOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBranchOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
