import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInvestigationsComponent } from './other-investigations.component';

describe('OtherInvestigationsComponent', () => {
  let component: OtherInvestigationsComponent;
  let fixture: ComponentFixture<OtherInvestigationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherInvestigationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherInvestigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
