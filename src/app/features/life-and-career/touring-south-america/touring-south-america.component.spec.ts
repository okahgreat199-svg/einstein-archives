import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouringSouthAmericaComponent } from './touring-south-america.component';

describe('TouringSouthAmericaComponent', () => {
  let component: TouringSouthAmericaComponent;
  let fixture: ComponentFixture<TouringSouthAmericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TouringSouthAmericaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouringSouthAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
