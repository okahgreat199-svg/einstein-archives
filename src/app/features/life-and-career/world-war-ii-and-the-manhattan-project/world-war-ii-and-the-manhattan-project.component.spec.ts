import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldWarIiAndTheManhattanProjectComponent } from './world-war-ii-and-the-manhattan-project.component';

describe('WorldWarIiAndTheManhattanProjectComponent', () => {
  let component: WorldWarIiAndTheManhattanProjectComponent;
  let fixture: ComponentFixture<WorldWarIiAndTheManhattanProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldWarIiAndTheManhattanProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldWarIiAndTheManhattanProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
