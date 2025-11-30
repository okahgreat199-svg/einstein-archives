import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriagesRelationshipsAndChildrenComponent } from './marriages-relationships-and-children.component';

describe('MarriagesRelationshipsAndChildrenComponent', () => {
  let component: MarriagesRelationshipsAndChildrenComponent;
  let fixture: ComponentFixture<MarriagesRelationshipsAndChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarriagesRelationshipsAndChildrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarriagesRelationshipsAndChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
