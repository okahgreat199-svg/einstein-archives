import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoseEinsteinStatisticsComponent } from './bose-einstein-statistics.component';

describe('BoseEinsteinStatisticsComponent', () => {
  let component: BoseEinsteinStatisticsComponent;
  let fixture: ComponentFixture<BoseEinsteinStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoseEinsteinStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoseEinsteinStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
