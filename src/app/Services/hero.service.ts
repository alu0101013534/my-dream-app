import { Injectable } from '@angular/core';
import { Hero } from '../Classes/hero';
import { Pet } from '../Classes/pet';
import { SuperPower } from '../Classes/superpower';
import { HEROES } from '../Mocks/mock-heroes';
import { PETS } from '../Mocks/mock-pets';
import { SUPERPOWERS } from '../Mocks/mock-superpowers';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }
  getPets(): Pet[] {
    return PETS;
  }
  getSuperpowers(): SuperPower[] {
    return SUPERPOWERS;
  }
  assignHeroesPets(){
    var i,j; //i: iterator, j Counter and second iterator
    var times=20; // number of times it shuffles array positions
    var posH=[];  // array with the heroes positions
    var posP=[];  // array with the pets positions
    var randomN; // a random generated number

    //fill 
    for(i=0;i<HEROES.length;i++){
      posH[i]=i;
      posP[i]=i;
    }
    console.log(posH);
    var aux;
    j=0;
    do{
      for(i=0;i<HEROES.length;i++){
        randomN=Math.floor(Math.random() * HEROES.length);     // returns a random integer from 0 to 9
        aux= posH[randomN];
        posH[randomN]= posH[i];
        posH[i]=aux;

        randomN=Math.floor(Math.random() * PETS.length);     // returns a random integer from 0 to 9
        aux= posP[randomN];
        posP[randomN]= posP[i];
        posP[i]=aux;
      }
    j++;
  }
  while(j<times);
    console.log("Random Positions Heroes:",posH);
    
    
    console.log("Random Positions Pets:",posH);
  
    for(i=0;i<HEROES.length;i++){
      HEROES[posH[i]].pet=PETS[posP[i]];
      PETS[posP[i]].hero=HEROES[posH[i]];
    
    }
    
    j=0;
    for(i=0;i<SUPERPOWERS.length;i++){
      if(i>=HEROES.length)
      { 
      PETS[j].superpower=SUPERPOWERS[i];
      j++;
      }
      else {
      HEROES[i].superpower=SUPERPOWERS[i];
      }
    }

  }
  constructor() { 
    this.assignHeroesPets();
  }

  deleteAll(){
    var i;
    for(i=0;i<HEROES.length;i++){
      HEROES[i].pet=null;
      PETS[i].hero=null;
    
    }
    

  }
}
