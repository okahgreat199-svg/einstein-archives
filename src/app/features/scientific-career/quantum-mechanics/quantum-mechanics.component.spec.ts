import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantumMechanicsComponent } from './quantum-mechanics.component';

describe('QuantumMechanicsComponent', () => {
  let component: QuantumMechanicsComponent;
  let fixture: ComponentFixture<QuantumMechanicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantumMechanicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantumMechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
