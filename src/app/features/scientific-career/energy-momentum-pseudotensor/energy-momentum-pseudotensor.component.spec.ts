import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyMomentumPseudotensorComponent } from './energy-momentum-pseudotensor.component';

describe('EnergyMomentumPseudotensorComponent', () => {
  let component: EnergyMomentumPseudotensorComponent;
  let fixture: ComponentFixture<EnergyMomentumPseudotensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergyMomentumPseudotensorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyMomentumPseudotensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
