import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldQuantumTheoryComponent } from './old-quantum-theory.component';

describe('OldQuantumTheoryComponent', () => {
  let component: OldQuantumTheoryComponent;
  let fixture: ComponentFixture<OldQuantumTheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldQuantumTheoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldQuantumTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
