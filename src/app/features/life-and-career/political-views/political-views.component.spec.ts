import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalViewsComponent } from './political-views.component';

describe('PoliticalViewsComponent', () => {
  let component: PoliticalViewsComponent;
  let fixture: ComponentFixture<PoliticalViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticalViewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticalViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
