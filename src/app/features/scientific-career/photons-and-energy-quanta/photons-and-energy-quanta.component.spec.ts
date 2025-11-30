import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotonsAndEnergyQuantaComponent } from './photons-and-energy-quanta.component';

describe('PhotonsAndEnergyQuantaComponent', () => {
  let component: PhotonsAndEnergyQuantaComponent;
  let fixture: ComponentFixture<PhotonsAndEnergyQuantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotonsAndEnergyQuantaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotonsAndEnergyQuantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
