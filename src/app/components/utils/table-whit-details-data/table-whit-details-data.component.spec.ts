import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWhitDetailsDataComponent } from './table-whit-details-data.component';

describe('TableWhitDetailsDataComponent', () => {
  let component: TableWhitDetailsDataComponent;
  let fixture: ComponentFixture<TableWhitDetailsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWhitDetailsDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWhitDetailsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
