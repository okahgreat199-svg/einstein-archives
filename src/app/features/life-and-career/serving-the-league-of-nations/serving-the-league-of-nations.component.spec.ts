import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServingTheLeagueOfNationsComponent } from './serving-the-league-of-nations.component';

describe('ServingTheLeagueOfNationsComponent', () => {
  let component: ServingTheLeagueOfNationsComponent;
  let fixture: ComponentFixture<ServingTheLeagueOfNationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServingTheLeagueOfNationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServingTheLeagueOfNationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
