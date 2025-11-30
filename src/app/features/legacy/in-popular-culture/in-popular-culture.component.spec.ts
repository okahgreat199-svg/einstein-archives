import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InPopularCultureComponent } from './in-popular-culture.component';

describe('InPopularCultureComponent', () => {
  let component: InPopularCultureComponent;
  let fixture: ComponentFixture<InPopularCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InPopularCultureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InPopularCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
