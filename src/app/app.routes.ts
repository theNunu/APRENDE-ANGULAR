import { Routes } from '@angular/router';
import { PlantillaUnoComponent } from './pages/plantilla-uno/plantilla-uno.component';
import { PlantillaDosComponent } from './pages/plantilla-dos/plantilla-dos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DragonballComponent } from './pages/dragonball/dragonball.component';
import { PruebasEnlacesComponent } from './pages/pruebas-enlaces/pruebas-enlaces.component';
import { FormulariosComponent } from './pages/formularios/formularios.component';


export const routes: Routes = [
    {
        path: "",
        component: PlantillaUnoComponent
    },
    {
        path: "plantilla-dos",
        component: PlantillaDosComponent
    },
    {
        path: "navbar",
        component: NavbarComponent
    },
    {
        path: "dragonball",
        component: DragonballComponent
    },
    {
        path: "pruebas-enlaces",
        component: PruebasEnlacesComponent

    },
    {
        path: "formularios",
        component: FormulariosComponent
    },
    {
        path: "**",
        redirectTo: ""
    },

];
