import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocinaWelcomeComponent } from './cocina-welcome.component';

describe('CocinaWelcomeComponent', () => {
  let component: CocinaWelcomeComponent;
  let fixture: ComponentFixture<CocinaWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocinaWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocinaWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
