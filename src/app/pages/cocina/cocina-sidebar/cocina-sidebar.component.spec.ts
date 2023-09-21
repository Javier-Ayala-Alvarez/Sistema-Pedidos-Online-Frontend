import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocinaSidebarComponent } from './cocina-sidebar.component';

describe('CocinaSidebarComponent', () => {
  let component: CocinaSidebarComponent;
  let fixture: ComponentFixture<CocinaSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocinaSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocinaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
