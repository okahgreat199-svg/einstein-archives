import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuttingRelativityToTheTestComponent } from './putting-relativity-to-the-test.component';

describe('PuttingRelativityToTheTestComponent', () => {
  let component: PuttingRelativityToTheTestComponent;
  let fixture: ComponentFixture<PuttingRelativityToTheTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuttingRelativityToTheTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuttingRelativityToTheTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
