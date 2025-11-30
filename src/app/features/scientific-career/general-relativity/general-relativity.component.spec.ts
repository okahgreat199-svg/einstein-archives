import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRelativityComponent } from './general-relativity.component';

describe('GeneralRelativityComponent', () => {
  let component: GeneralRelativityComponent;
  let fixture: ComponentFixture<GeneralRelativityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralRelativityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralRelativityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
