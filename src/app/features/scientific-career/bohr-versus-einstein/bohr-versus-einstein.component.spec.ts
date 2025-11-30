import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BohrVersusEinsteinComponent } from './bohr-versus-einstein.component';

describe('BohrVersusEinsteinComponent', () => {
  let component: BohrVersusEinsteinComponent;
  let fixture: ComponentFixture<BohrVersusEinsteinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BohrVersusEinsteinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BohrVersusEinsteinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
