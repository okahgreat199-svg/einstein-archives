import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingToTermsWithFameComponent } from './coming-to-terms-with-fame.component';

describe('ComingToTermsWithFameComponent', () => {
  let component: ComingToTermsWithFameComponent;
  let fixture: ComponentFixture<ComingToTermsWithFameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComingToTermsWithFameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComingToTermsWithFameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
