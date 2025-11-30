import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinsteinsObjectionsToQuantumMechanicsComponent } from './einsteins-objections-to-quantum-mechanics.component';

describe('EinsteinsObjectionsToQuantumMechanicsComponent', () => {
  let component: EinsteinsObjectionsToQuantumMechanicsComponent;
  let fixture: ComponentFixture<EinsteinsObjectionsToQuantumMechanicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EinsteinsObjectionsToQuantumMechanicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EinsteinsObjectionsToQuantumMechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
