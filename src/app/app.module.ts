import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PeopleComponent } from './components/people/people.component';
import { FilmsComponent } from './components/films/films.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { SpeciesComponent } from './components/species/species.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PeopleComponent,
    FilmsComponent,
    StarshipsComponent,
    VehiclesComponent,
    SpeciesComponent,
    PlanetsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
