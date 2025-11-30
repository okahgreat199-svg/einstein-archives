import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipWithZionismComponent } from './relationship-with-zionism.component';

describe('RelationshipWithZionismComponent', () => {
  let component: RelationshipWithZionismComponent;
  let fixture: ComponentFixture<RelationshipWithZionismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelationshipWithZionismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelationshipWithZionismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
