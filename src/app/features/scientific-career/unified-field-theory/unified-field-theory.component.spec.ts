import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifiedFieldTheoryComponent } from './unified-field-theory.component';

describe('UnifiedFieldTheoryComponent', () => {
  let component: UnifiedFieldTheoryComponent;
  let fixture: ComponentFixture<UnifiedFieldTheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnifiedFieldTheoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnifiedFieldTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
