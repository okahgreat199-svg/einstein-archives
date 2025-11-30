import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquationsOfMotionComponent } from './equations-of-motion.component';

describe('EquationsOfMotionComponent', () => {
  let component: EquationsOfMotionComponent;
  let fixture: ComponentFixture<EquationsOfMotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquationsOfMotionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquationsOfMotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
