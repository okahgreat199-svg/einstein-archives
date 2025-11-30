import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalViewsComponent } from './personal-views.component';

describe('PersonalViewsComponent', () => {
  let component: PersonalViewsComponent;
  let fixture: ComponentFixture<PersonalViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalViewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
