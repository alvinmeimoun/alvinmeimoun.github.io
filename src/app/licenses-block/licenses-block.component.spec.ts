import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensesBlockComponent } from './licenses-block.component';

describe('LicensesBlockComponent', () => {
  let component: LicensesBlockComponent;
  let fixture: ComponentFixture<LicensesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicensesBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
