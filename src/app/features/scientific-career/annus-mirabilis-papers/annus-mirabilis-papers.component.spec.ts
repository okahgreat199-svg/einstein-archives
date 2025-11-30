import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnusMirabilisPapersComponent } from './annus-mirabilis-papers.component';

describe('AnnusMirabilisPapersComponent', () => {
  let component: AnnusMirabilisPapersComponent;
  let fixture: ComponentFixture<AnnusMirabilisPapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnusMirabilisPapersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnusMirabilisPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
