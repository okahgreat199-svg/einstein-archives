import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryOfCriticalOpalescenceComponent } from './theory-of-critical-opalescence.component';

describe('TheoryOfCriticalOpalescenceComponent', () => {
  let component: TheoryOfCriticalOpalescenceComponent;
  let fixture: ComponentFixture<TheoryOfCriticalOpalescenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryOfCriticalOpalescenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheoryOfCriticalOpalescenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
