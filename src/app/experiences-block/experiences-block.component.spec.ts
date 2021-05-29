import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesBlockComponent } from './experiences-block.component';

describe('ExperiencesBlockComponent', () => {
  let component: ExperiencesBlockComponent;
  let fixture: ComponentFixture<ExperiencesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
