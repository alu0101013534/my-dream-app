import { Component, OnInit } from '@angular/core';
import { Pet } from '../../Classes/pet';
import { PETS } from '../../Mocks/mock-pets';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
    pets = PETS;

    selectedPet: Pet;
    onSelect(pet: Pet): void {
        this.selectedPet = pet;
    }
  constructor() { }

  ngOnInit() {
  }

}
