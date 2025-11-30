import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GravitationalWavesComponent } from './gravitational-waves.component';

describe('GravitationalWavesComponent', () => {
  let component: GravitationalWavesComponent;
  let fixture: ComponentFixture<GravitationalWavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GravitationalWavesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GravitationalWavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
