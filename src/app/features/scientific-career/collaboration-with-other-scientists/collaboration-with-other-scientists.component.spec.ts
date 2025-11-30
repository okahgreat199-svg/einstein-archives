import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationWithOtherScientistsComponent } from './collaboration-with-other-scientists.component';

describe('CollaborationWithOtherScientistsComponent', () => {
  let component: CollaborationWithOtherScientistsComponent;
  let fixture: ComponentFixture<CollaborationWithOtherScientistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaborationWithOtherScientistsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborationWithOtherScientistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
