import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoleArgumentAndEntwurfTheoryComponent } from './hole-argument-and-entwurf-theory.component';

describe('HoleArgumentAndEntwurfTheoryComponent', () => {
  let component: HoleArgumentAndEntwurfTheoryComponent;
  let fixture: ComponentFixture<HoleArgumentAndEntwurfTheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoleArgumentAndEntwurfTheoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoleArgumentAndEntwurfTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
