import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionCurso } from './informacion-curso';

describe('InformacionCurso', () => {
  let component: InformacionCurso;
  let fixture: ComponentFixture<InformacionCurso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionCurso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionCurso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
