import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsCitizenshipComponent } from './us-citizenship.component';

describe('UsCitizenshipComponent', () => {
  let component: UsCitizenshipComponent;
  let fixture: ComponentFixture<UsCitizenshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsCitizenshipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsCitizenshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
