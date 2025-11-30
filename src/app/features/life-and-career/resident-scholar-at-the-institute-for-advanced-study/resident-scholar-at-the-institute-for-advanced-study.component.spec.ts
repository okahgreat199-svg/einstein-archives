import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentScholarAtTheInstituteForAdvancedStudyComponent } from './resident-scholar-at-the-institute-for-advanced-study.component';

describe('ResidentScholarAtTheInstituteForAdvancedStudyComponent', () => {
  let component: ResidentScholarAtTheInstituteForAdvancedStudyComponent;
  let fixture: ComponentFixture<ResidentScholarAtTheInstituteForAdvancedStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidentScholarAtTheInstituteForAdvancedStudyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentScholarAtTheInstituteForAdvancedStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
