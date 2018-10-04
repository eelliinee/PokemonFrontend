import { Component, OnInit } from '@angular/core';
import { NamesService } from '../names.service';
import { GetPokemonService } from '../get-pokemon.service';


@Component({
  selector: 'app-rival-battle',
  templateUrl: './rival-battle.component.html',
  styleUrls: ['./rival-battle.component.css']
})
export class RivalBattleComponent implements OnInit {

  constructor(private namesService : NamesService, private getPokemonService : GetPokemonService) { }

  playerName : string = this.namesService.playerNameService;
  rivalName : string = this.namesService.rivalNameService;
  starterPokemon = this.getPokemonService.allPokedex;

  ngOnInit() {
  }

}
