import { Component, OnInit } from '@angular/core';
import { SuperPower } from '../../Classes/superpower';
import { SUPERPOWERS } from '../../Mocks/mock-superpowers';
@Component({
  selector: 'app-superpower',
  templateUrl: './superpower.component.html',
  styleUrls: ['./superpower.component.css']
})
export class SuperpowerComponent implements OnInit {
    superpowers = SUPERPOWERS;

    selectedSuperPower: SuperPower;
    onSelect(superPower: SuperPower): void {
        this.selectedSuperPower = superPower;
    }
  constructor() { }

  ngOnInit() {
  }

}
