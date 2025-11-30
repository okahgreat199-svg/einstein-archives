import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WormholesComponent } from './wormholes.component';

describe('WormholesComponent', () => {
  let component: WormholesComponent;
  let fixture: ComponentFixture<WormholesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WormholesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WormholesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
