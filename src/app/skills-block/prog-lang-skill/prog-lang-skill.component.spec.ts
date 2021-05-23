import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgLangSkillComponent } from './prog-lang-skill.component';

describe('ProgLangSkillComponent', () => {
  let component: ProgLangSkillComponent;
  let fixture: ComponentFixture<ProgLangSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgLangSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgLangSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
