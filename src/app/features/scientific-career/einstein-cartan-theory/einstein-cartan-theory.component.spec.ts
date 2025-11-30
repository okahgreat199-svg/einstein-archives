import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinsteinCartanTheoryComponent } from './einstein-cartan-theory.component';

describe('EinsteinCartanTheoryComponent', () => {
  let component: EinsteinCartanTheoryComponent;
  let fixture: ComponentFixture<EinsteinCartanTheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EinsteinCartanTheoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EinsteinCartanTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
