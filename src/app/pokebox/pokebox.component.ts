import { Component, OnInit } from '@angular/core';
import { GetPokemonService } from '../get-pokemon.service';

@Component({
  selector: 'app-pokebox',
  templateUrl: './pokebox.component.html',
  styleUrls: ['./pokebox.component.css']
})
export class PokeboxComponent implements OnInit {

  constructor(private getPokemonService : GetPokemonService) { }

  ngOnInit() {
    this.getPokemonService.allPokemon();
  }

}
