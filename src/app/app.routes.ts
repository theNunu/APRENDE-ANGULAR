import { Routes } from '@angular/router';
import { PlantillaUnoComponent } from './pages/plantilla-uno/plantilla-uno.component';
import { PlantillaDosComponent } from './pages/plantilla-dos/plantilla-dos.component';
import { NavbarComponent } from './navbar/navbar.component';


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
    }
];
