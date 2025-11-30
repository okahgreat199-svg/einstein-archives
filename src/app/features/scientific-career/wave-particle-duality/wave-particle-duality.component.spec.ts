import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveParticleDualityComponent } from './wave-particle-duality.component';

describe('WaveParticleDualityComponent', () => {
  let component: WaveParticleDualityComponent;
  let fixture: ComponentFixture<WaveParticleDualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaveParticleDualityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaveParticleDualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
