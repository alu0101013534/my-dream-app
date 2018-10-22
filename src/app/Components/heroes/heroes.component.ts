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
    show:boolean=true;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        
        if(hero.pet!=null){
            
        this.selectedPet = hero.pet;
        this.heroService.changeMessage(hero.pet);
        }
    }
    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }
    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
      }

      newAssign(): void {
         this.heroService.assignHeroesPets();
      }
      deleteAll(): void {
        this.heroService.deleteAll();
     }

     showToggle(){

        this.show=!this.show;
     }
     assign(): void {
         
        if(this.selectedPet!=null){

            
        if(this.selectedPet.hero!=null){
            this.heroService.deletePetPartner(this.selectedPet.hero);
        }
        this.heroService.assignPartner(this.selectedHero,this.selectedPet);
    }
     }
     message:string;

     receiveMessage($event) {
         
        this.message = $event
        this.selectedPet = this.heroService.getPet($event);
        
        this.selectedHero=this.heroService.getHeroFromPet( this.selectedPet);
        
      }
      
}
