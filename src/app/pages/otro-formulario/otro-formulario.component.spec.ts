import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroFormularioComponent } from './otro-formulario.component';

describe('OtroFormularioComponent', () => {
  let component: OtroFormularioComponent;
  let fixture: ComponentFixture<OtroFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtroFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtroFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
