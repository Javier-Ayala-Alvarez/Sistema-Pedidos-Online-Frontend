import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBranchOfficeComponent } from './view-branch-office.component';

describe('ViewBranchOfficeComponent', () => {
  let component: ViewBranchOfficeComponent;
  let fixture: ComponentFixture<ViewBranchOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBranchOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBranchOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
