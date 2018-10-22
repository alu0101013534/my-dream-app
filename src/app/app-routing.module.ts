import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './Components/heroes/heroes.component';
import { PetsComponent }      from './Components/pets/pets.component';
import { DashboardComponent }   from './Components/dashboard/dashboard.component';
import { HeroDetailComponent }  from './Components/hero-detail/hero-detail.component';
import { PetDetailComponent }  from './Components/pet-detail/pet-detail.component';
import { AssignComponent }  from './Components/assign/assign.component';
const routes: Routes = [
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'petdetail/:id', component: PetDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'assign', component: AssignComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule {}

