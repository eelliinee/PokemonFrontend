import { Injectable } from '@angular/core';

@Injectable()
export class GetPokemonService {
  baseUrl : string = "http://localhost:9090/";
  pokemonUrl : string = "pokemon/";
  pokedexUrl : string = "pokedex/";
  starterPokemonIndex;
  allPokedex;

  constructor() { }

  gastly() {}

  voegPokemonToe(){
    var xmlhttp = new XMLHttpRequest();
    var level = (<HTMLInputElement>document.getElementById("pokemonLevel")).value;
    var nummer = (<HTMLInputElement>document.getElementById("pokemonNummer")).value;

    xmlhttp.onreadystatechange  = () =>{
        console.log(xmlhttp.readyState);
        console.log(xmlhttp.responseText);
        if(xmlhttp.readyState == 4){
            this.allPokedex = JSON.parse(xmlhttp.responseText);
            console.log(this.allPokedex);
            this.insertSpecies(this.allPokedex, level);
        }
    }
    
    
    xmlhttp.open("GET",this.baseUrl+this.pokedexUrl+nummer,true);
    xmlhttp.send();
  }

  voegEerstePokemonToe(nummer){
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange  = () =>{
        console.log(xmlhttp.readyState);
        console.log(xmlhttp.responseText);
        if(xmlhttp.readyState == 4){
            this.allPokedex = JSON.parse(xmlhttp.responseText);
            console.log(this.allPokedex);
            this.insertSpecies(this.allPokedex, 5);
        }
    }
    // var nummer = (<HTMLInputElement>document.getElementById("pokemonNummer")).value;
    
    xmlhttp.open("GET",this.baseUrl+this.pokedexUrl+nummer,true);
    xmlhttp.send();
  }

  insertSpecies(theSpecies, level){
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
    pokemon.level = level;
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

  pokedex(){
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange  = () =>{
        console.log(xmlhttp.readyState);
        console.log(xmlhttp.responseText);
        if(xmlhttp.readyState == 4){
            var allPokedex = JSON.parse(xmlhttp.responseText);
            console.log(allPokedex);
            this.showAllSpecies(allPokedex);
        }
    }
    xmlhttp.open("GET",this.baseUrl+this.pokedexUrl,true);
    xmlhttp.send();
  }

  allPokemon(){
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange  = () =>{
        console.log(xmlhttp.readyState);
        console.log(xmlhttp.responseText);
        if(xmlhttp.readyState == 4){
            var allPokemon = JSON.parse(xmlhttp.responseText);
            console.log(allPokemon);
            this.showAllSpecies(allPokemon);
        }
    }
    xmlhttp.open("GET",this.baseUrl+this.pokemonUrl,true);
    xmlhttp.send();
  }

  showAllSpecies(theSpecies){      
    var x : number;          
 //   var deDiv = document.getElementById("hints");
    var pokeTable = document.getElementById("pokeTable");
  //  deDiv.innerHTML = "";
    pokeTable.innerHTML = "<tr><th>POKéMON</th><th>Type</th><th>Level</th></tr>";
    for(x = 0 ; x < theSpecies.length ; x++){
        
        var kleur = 'lightblue';
        
        // var printToevoeging = "#" + theSpecies[x].id+ " " + theSpecies[x].species+" <br>";

        // deDiv.innerHTML = deDiv.innerHTML+printToevoeging;

        var addPrint = "<tr><td>" + theSpecies[x].species + "</td><td>" + theSpecies[x].type + "</td><td>" + theSpecies[x].level + "</td></tr>";
        pokeTable.innerHTML = pokeTable.innerHTML+addPrint;


    }

  }






  // pokedexLezen(){
  //   var xmlhttp = new XMLHttpRequest();
   
  //   xmlhttp.onreadystatechange = () =>{
  //       console.log(xmlhttp.readyState);
  //       console.log(xmlhttp.responseText);
  //       if(xmlhttp.readyState == 4){
  //           var allPokedex = JSON.parse(xmlhttp.responseText);
  //           console.log(allPokedex);
  //           this.insertSpecies(allPokedex);
  //       }
  //   }
  //   var nummer = (<HTMLInputElement>document.getElementById("pokemonNummer")).value;
    
  //   xmlhttp.open("GET",this.baseUrl+this.pokedexUrl+nummer,true);
  //   xmlhttp.send();
  // }

}
