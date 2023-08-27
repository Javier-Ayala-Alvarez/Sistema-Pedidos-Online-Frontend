import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlatoComponent } from './list-plato.component';

describe('ListPlatoComponent', () => {
  let component: ListPlatoComponent;
  let fixture: ComponentFixture<ListPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
