import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefugeeStatusComponent } from './refugee-status.component';

describe('RefugeeStatusComponent', () => {
  let component: RefugeeStatusComponent;
  let fixture: ComponentFixture<RefugeeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefugeeStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefugeeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
