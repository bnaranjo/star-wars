import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule  } from "@angular/router";

import { LoginComponent } from './components/login/login.component';
import { FilmsComponent } from './components/films/films.component';
import { PeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
    {path: '', component: FilmsComponent},
    {path: 'films', component: FilmsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'people', component: PeopleComponent},
    {path: 'planets', component: PlanetsComponent},
    {path: 'species', component: SpeciesComponent},
    {path: 'starships', component: StarshipsComponent},
    {path: 'vehicles', component: VehiclesComponent},
    {path: 'error', component: ErrorComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);