import { Component, Output,EventEmitter,OnInit } from '@angular/core';
import { Pet } from '../../Classes/pet';
import { PETS } from '../../Mocks/mock-pets';
import { HeroService } from '../../Services/hero.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
    pets = PETS;

    public selectedPet: Pet;
    message:string;
    @Output() messageEvent = new EventEmitter<string>();
    onSelect(pet: Pet): void {
        this.selectedPet = pet;
        this.sendMessage();
        
    }


    sendMessage() {
      this.messageEvent.emit(this.selectedPet.id.toString());
      
    }
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.currentMessage.subscribe(message => this.selectedPet =  this.heroService.getPet(message))
  }

}
