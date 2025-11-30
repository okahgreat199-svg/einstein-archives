import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonScientificComponent } from './non-scientific.component';

describe('NonScientificComponent', () => {
  let component: NonScientificComponent;
  let fixture: ComponentFixture<NonScientificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonScientificComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonScientificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
