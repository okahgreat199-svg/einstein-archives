import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StimulatedEmissionComponent } from './stimulated-emission.component';

describe('StimulatedEmissionComponent', () => {
  let component: StimulatedEmissionComponent;
  let fixture: ComponentFixture<StimulatedEmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StimulatedEmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StimulatedEmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
