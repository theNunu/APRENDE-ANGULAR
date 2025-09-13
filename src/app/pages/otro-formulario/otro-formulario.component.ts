import { Component, signal } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  lastName: string;
  age: number;
}
@Component({
  selector: 'app-otro-formulario',
  imports: [],
  templateUrl: './otro-formulario.component.html',
  styleUrl: './otro-formulario.component.css'
})
export class OtroFormularioComponent {
  
  nameBB = signal("Abuelita")
  lastNameBB = signal("Salamanca")

  employees = signal<Employee[]>([ 
    {id: 1, name: 'Alexis', lastName: 'Cepeda', age:21},
    {id: 2, name: 'Jesse', lastName: 'Pinkman', age:24},
    {id: 3, name: 'Gustavo', lastName: 'Fring', age:45},
    {id: 4, name: 'Walter', lastName: 'White', age:52},

  ]);

  isAdmin = false;

  mostrarDatos(){
    console.log("boton presionado !!")
    console.log(`nombre: ${this.nameBB()}`)
    console.log(`apellido: ${this.lastNameBB()}`)

  }

}
