import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { NamesService } from '../names.service';
import { GetPokemonService } from '../get-pokemon.service';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css'],
})
export class ChooseComponent implements OnInit {

  
  constructor(private _router: Router, private namesService : NamesService, private getPokemonService : GetPokemonService) { }

  playerName : string = this.namesService.playerNameService;

  test : string = this.getPokemonService.baseUrl;

  pokemonNummer : number;


  ngOnInit() {
  }

  chosenPokemon : string;

  chooseCharmander() {
    //alert("chose charmander");
    this.chosenPokemon = "Charmander";
    this.pokemonNummer = 4;
    this.displayChosenPokemon(this.chosenPokemon, "Fire");
  }

  chooseSquirtle() {
    //alert("chose squirtle");
    this.chosenPokemon = "Squirtle";
    this.pokemonNummer = 7;
    this.displayChosenPokemon(this.chosenPokemon, "Water");
  }

  chooseBulbasaur() {
    //alert("chose bulbasaur");
    this.chosenPokemon = "Bulbasaur";
    this.pokemonNummer = 1;
    this.displayChosenPokemon(this.chosenPokemon, "Grass");
  }

  displayChosenPokemon(pokemon, type) {
  //  alert("display chosen pokemon "+pokemon+type);
    document.getElementById("chosenPokemonText").innerHTML = "So! You want the "+ type + " POKéMON, "+ pokemon + "?";
    document.getElementById("commitbutton").style.display="initial";
  }

  commitchoice() {
// add chosen Pokemon to database with owned Pokemon
    this.getPokemonService.voegEerstePokemonToe(this.pokemonNummer);

// and continue to next screen
  this._router.navigate(['rival-battle']);
  }

  voegPokemonToe() {
    // alert(this.test);
    this.getPokemonService.voegPokemonToe();
  }


}
