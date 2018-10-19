import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { HeroDetailComponent } from './Components/hero-detail/hero-detail.component';
import { PetsComponent } from './Components/pets/pets.component';
import { SuperpowerComponent } from './Components/superpower/superpower.component';
import { PetDetailComponent } from './Components/pet-detail/pet-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        PetsComponent,
        SuperpowerComponent,
        PetDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
