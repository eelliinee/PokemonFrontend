import { Component, OnInit } from '@angular/core';
import { GetPokemonService } from '../get-pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  constructor(private getPokemonService : GetPokemonService) { }

  ngOnInit() {
    this.getPokemonService.pokedex();
  }

  pokedex() {
    this.getPokemonService.pokedex();
  }

}
