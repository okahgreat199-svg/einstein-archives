import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildhoodYouthAndEducationComponent } from './childhood-youth-and-education.component';

describe('ChildhoodYouthAndEducationComponent', () => {
  let component: ChildhoodYouthAndEducationComponent;
  let fixture: ComponentFixture<ChildhoodYouthAndEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildhoodYouthAndEducationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildhoodYouthAndEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
