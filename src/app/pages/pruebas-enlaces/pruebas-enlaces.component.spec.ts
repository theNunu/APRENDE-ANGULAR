import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasEnlacesComponent } from './pruebas-enlaces.component';

describe('PruebasEnlacesComponent', () => {
  let component: PruebasEnlacesComponent;
  let fixture: ComponentFixture<PruebasEnlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebasEnlacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebasEnlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
