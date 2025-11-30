import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmigrationToTheUsComponent } from './emigration-to-the-us.component';

describe('EmigrationToTheUsComponent', () => {
  let component: EmigrationToTheUsComponent;
  let fixture: ComponentFixture<EmigrationToTheUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmigrationToTheUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmigrationToTheUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
