import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerGeneral } from './spinner-general';

describe('SpinnerGeneral', () => {
  let component: SpinnerGeneral;
  let fixture: ComponentFixture<SpinnerGeneral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerGeneral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerGeneral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
