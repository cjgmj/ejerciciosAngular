import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './app/components/home/home.component';
import { BuscarComponent } from './app/components/buscar/buscar.component';
import { PeliculaComponent } from './app/components/pelicula/pelicula.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'buscar', component: BuscarComponent},
    { path: 'pelicula', component: PeliculaComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
