import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouringTheUsComponent } from './touring-the-us.component';

describe('TouringTheUsComponent', () => {
  let component: TouringTheUsComponent;
  let fixture: ComponentFixture<TouringTheUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TouringTheUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouringTheUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
