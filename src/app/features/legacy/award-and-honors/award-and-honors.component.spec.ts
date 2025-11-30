import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardAndHonorsComponent } from './award-and-honors.component';

describe('AwardAndHonorsComponent', () => {
  let component: AwardAndHonorsComponent;
  let fixture: ComponentFixture<AwardAndHonorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardAndHonorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwardAndHonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
