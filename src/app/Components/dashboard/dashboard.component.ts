import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Classes/hero';
import { HeroService } from '../../Services/hero.service';
import { Pet } from '../../Classes/pet';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  pets: Pet[] = [];
  constructor(private heroService: HeroService) { }
 
  ngOnInit() {
    this.getHeroes();
    this.getPets();
  }
 
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(3,7));
  }

  getPets(): void {
    this.heroService.getPets()
      .subscribe(pets => this.pets = pets.slice(0,4));
  }
}