import { Component, OnInit } from '@angular/core';
import { GetPokemonService } from '../get-pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private getPokemonService : GetPokemonService) { }

  ngOnInit() {
    this.getPokemonService.allPokemon();
  }

}
