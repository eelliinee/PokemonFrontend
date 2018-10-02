import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokecenter',
  templateUrl: './pokecenter.component.html',
  styleUrls: ['./pokecenter.component.css']
})
export class PokecenterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  healPokemon() {
    alert("Heal Pokemon");
  }

}
