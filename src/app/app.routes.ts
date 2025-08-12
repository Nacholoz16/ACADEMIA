import { Routes } from '@angular/router';

export const routes: Routes = [

        {
        path: '',
        loadComponent: () => import('./components/home/home').then(m => m.Home)
    },
    {
        path: 'curso/:id', // ':nombre' es un parámetro de ruta dinámico
        loadComponent: () => import('./components/informacion-curso/informacion-curso').then(m => m.InformacionCurso)
    }
];
