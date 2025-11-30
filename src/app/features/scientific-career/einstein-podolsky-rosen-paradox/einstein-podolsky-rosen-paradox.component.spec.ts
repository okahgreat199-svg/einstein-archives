import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinsteinPodolskyRosenParadoxComponent } from './einstein-podolsky-rosen-paradox.component';

describe('EinsteinPodolskyRosenParadoxComponent', () => {
  let component: EinsteinPodolskyRosenParadoxComponent;
  let fixture: ComponentFixture<EinsteinPodolskyRosenParadoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EinsteinPodolskyRosenParadoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EinsteinPodolskyRosenParadoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
