import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalMechanicsComponent } from './statistical-mechanics.component';

describe('StatisticalMechanicsComponent', () => {
  let component: StatisticalMechanicsComponent;
  let fixture: ComponentFixture<StatisticalMechanicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticalMechanicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticalMechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
