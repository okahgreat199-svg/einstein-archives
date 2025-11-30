import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinsteinDeHassExperimentComponent } from './einstein-de-hass-experiment.component';

describe('EinsteinDeHassExperimentComponent', () => {
  let component: EinsteinDeHassExperimentComponent;
  let fixture: ComponentFixture<EinsteinDeHassExperimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EinsteinDeHassExperimentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EinsteinDeHassExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
