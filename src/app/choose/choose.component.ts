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
  baseUrl : string = "http://localhost:9090/";
  pokemonUrl : string = "pokemon/";
  pokedexUrl : string = "pokedex/";
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
    alert("display chosen pokemon "+pokemon+type);
    document.getElementById("chosenPokemonText").innerHTML = "So! You want the "+ type + " POKéMON, "+ pokemon + "?";
  }

  commitchoice() {
// add chosen Pokemon to database with owned Pokemon
    alert(this.chosenPokemon);



// and continue to next screen
  //this._router.navigate(['rival-battle']);
  }

  gastly() {}

  voegPokemonToe(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange  = function(){
        console.log(this.readyState);
        console.log(this.responseText);
        if(this.readyState == 4){
            var allPokedex = JSON.parse(this.responseText);
            console.log(allPokedex);
            //ChooseComponent.insertSpecies(allPokedex);
        }
    }
    var nummer = (<HTMLInputElement>document.getElementById("pokemonNummer")).value;
    
    xmlhttp.open("GET",this.baseUrl+this.pokedexUrl+nummer,true);
    xmlhttp.send();
  }

   insertSpecies(theSpecies){
    var pokemon = {
      species: "species",
      type: "type",
      baseHP: 0,
      baseAttack: 0,
      baseDefense: 0,
      baseSpeed: 0,
      level: 0,
    };
    pokemon.species = theSpecies.species;
    pokemon.type = theSpecies.type;
    pokemon.baseHP = theSpecies.baseHP;
    pokemon.baseAttack = theSpecies.baseAttack;
    pokemon.baseDefense = theSpecies.baseDefense;
    pokemon.baseSpeed = theSpecies.baseSpeed;
    pokemon.level = 5;
    var pokemonString = JSON.stringify(pokemon);
    this.postData(pokemonString, this.pokemonUrl,this.gastly);               
  }

  postData(postObj, url, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4){
            callback(this.responseText);
        }
    }
    xhr.open("POST", this.baseUrl+url, true);       
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(postObj);
}



}
