import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinsteinAsAnInventorComponent } from './einstein-as-an-inventor.component';

describe('EinsteinAsAnInventorComponent', () => {
  let component: EinsteinAsAnInventorComponent;
  let fixture: ComponentFixture<EinsteinAsAnInventorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EinsteinAsAnInventorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EinsteinAsAnInventorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
