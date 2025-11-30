import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveOfMusicComponent } from './love-of-music.component';

describe('LoveOfMusicComponent', () => {
  let component: LoveOfMusicComponent;
  let fixture: ComponentFixture<LoveOfMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoveOfMusicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoveOfMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
