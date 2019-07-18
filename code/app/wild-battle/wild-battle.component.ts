import { Component, OnInit } from '@angular/core';
import { GetPokemonService } from '../get-pokemon.service';

@Component({
  selector: 'app-wild-battle',
  templateUrl: './wild-battle.component.html',
  styleUrls: ['./wild-battle.component.css']
})
export class WildBattleComponent implements OnInit {

  constructor(private getPokemonService : GetPokemonService) { }

  ngOnInit() {
  }

  voegPokemonToe() {
    this.getPokemonService.voegPokemonToe();
    alert("All right! The POKéMON was caught!")
  }

}
