import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstScientificPapersComponent } from './first-scientific-papers.component';

describe('FirstScientificPapersComponent', () => {
  let component: FirstScientificPapersComponent;
  let fixture: ComponentFixture<FirstScientificPapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstScientificPapersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstScientificPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
