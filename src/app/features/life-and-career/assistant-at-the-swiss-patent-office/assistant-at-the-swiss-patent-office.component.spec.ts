import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantAtTheSwissPatentOfficeComponent } from './assistant-at-the-swiss-patent-office.component';

describe('AssistantAtTheSwissPatentOfficeComponent', () => {
  let component: AssistantAtTheSwissPatentOfficeComponent;
  let fixture: ComponentFixture<AssistantAtTheSwissPatentOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistantAtTheSwissPatentOfficeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistantAtTheSwissPatentOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
