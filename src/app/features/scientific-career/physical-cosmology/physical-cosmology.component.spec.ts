import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalCosmologyComponent } from './physical-cosmology.component';

describe('PhysicalCosmologyComponent', () => {
  let component: PhysicalCosmologyComponent;
  let fixture: ComponentFixture<PhysicalCosmologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysicalCosmologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicalCosmologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
