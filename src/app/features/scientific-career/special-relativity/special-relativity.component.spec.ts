import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialRelativityComponent } from './special-relativity.component';

describe('SpecialRelativityComponent', () => {
  let component: SpecialRelativityComponent;
  let fixture: ComponentFixture<SpecialRelativityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialRelativityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialRelativityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
