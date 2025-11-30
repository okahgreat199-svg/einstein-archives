import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificCareerComponent } from './scientific-career.component';

describe('ScientificCareerComponent', () => {
  let component: ScientificCareerComponent;
  let fixture: ComponentFixture<ScientificCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScientificCareerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScientificCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
