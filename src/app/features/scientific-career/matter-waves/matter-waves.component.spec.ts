import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatterWavesComponent } from './matter-waves.component';

describe('MatterWavesComponent', () => {
  let component: MatterWavesComponent;
  let fixture: ComponentFixture<MatterWavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatterWavesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatterWavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
