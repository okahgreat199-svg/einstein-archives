import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligiousAndPhilosophicalViewsComponent } from './religious-and-philosophical-views.component';

describe('ReligiousAndPhilosophicalViewsComponent', () => {
  let component: ReligiousAndPhilosophicalViewsComponent;
  let fixture: ComponentFixture<ReligiousAndPhilosophicalViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReligiousAndPhilosophicalViewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReligiousAndPhilosophicalViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
