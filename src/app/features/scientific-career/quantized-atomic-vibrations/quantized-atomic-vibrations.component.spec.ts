import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantizedAtomicVibrationsComponent } from './quantized-atomic-vibrations.component';

describe('QuantizedAtomicVibrationsComponent', () => {
  let component: QuantizedAtomicVibrationsComponent;
  let fixture: ComponentFixture<QuantizedAtomicVibrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantizedAtomicVibrationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantizedAtomicVibrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
