import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Classes/hero';
import { Pet } from '../../Classes/pet';
import { HeroService } from '../../Services/hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];

    selectedHero: Hero;
    selectedPet: Pet;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.selectedPet = hero.pet;
    }
    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }
    getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
      }

      newAssign(): void {
         this.heroService.assignHeroesPets();
      }
      deleteAll(): void {
        this.heroService.deleteAll();
     }

      
}