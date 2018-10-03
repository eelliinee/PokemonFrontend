import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css'],
})
export class ChooseComponent implements OnInit {

  constructor(private _router: Router, private namesService : NamesService) { }

  playerName : string = this.namesService.playerNameService;

  ngOnInit() {
  }

  checkNames() {
    alert(this.namesService.playerNameService + " and " + this.namesService.rivalNameService);
  }

  chooseCharmander() {
    alert("chose charmander");
    this.displayChosenPokemon("charmander");
  }

  chooseSquirtle() {
    alert("chose squirtle");
    this.displayChosenPokemon("squirtle");
  }

  chooseBulbasaur() {
    alert("chose bulbasaur");
    this.displayChosenPokemon("bulbasaur");
  }

  displayChosenPokemon(pokemon) {
    alert("display chosen pokemon "+pokemon);
    document.getElementById("chosenPokemonText").innerHTML = pokemon;
  }

  commitchoice() {
// add chosen Pokemon to database with owned Pokemon

// and continue to next screen
  this._router.navigate(['rival-battle']);
  }

}
