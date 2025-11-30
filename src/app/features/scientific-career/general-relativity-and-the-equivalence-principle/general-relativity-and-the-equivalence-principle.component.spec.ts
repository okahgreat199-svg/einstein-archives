import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRelativityAndTheEquivalencePrincipleComponent } from './general-relativity-and-the-equivalence-principle.component';

describe('GeneralRelativityAndTheEquivalencePrincipleComponent', () => {
  let component: GeneralRelativityAndTheEquivalencePrincipleComponent;
  let fixture: ComponentFixture<GeneralRelativityAndTheEquivalencePrincipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralRelativityAndTheEquivalencePrincipleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralRelativityAndTheEquivalencePrincipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
