import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicCareerInEuropeComponent } from './academic-career-in-europe.component';

describe('AcademicCareerInEuropeComponent', () => {
  let component: AcademicCareerInEuropeComponent;
  let fixture: ComponentFixture<AcademicCareerInEuropeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicCareerInEuropeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicCareerInEuropeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
