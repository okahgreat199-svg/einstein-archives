import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermodynamicFluctuationsAndStatisticalPhysicsComponent } from './thermodynamic-fluctuations-and-statistical-physics.component';

describe('ThermodynamicFluctuationsAndStatisticalPhysicsComponent', () => {
  let component: ThermodynamicFluctuationsAndStatisticalPhysicsComponent;
  let fixture: ComponentFixture<ThermodynamicFluctuationsAndStatisticalPhysicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThermodynamicFluctuationsAndStatisticalPhysicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThermodynamicFluctuationsAndStatisticalPhysicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
