import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroPointEnergyComponent } from './zero-point-energy.component';

describe('ZeroPointEnergyComponent', () => {
  let component: ZeroPointEnergyComponent;
  let fixture: ComponentFixture<ZeroPointEnergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeroPointEnergyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZeroPointEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
