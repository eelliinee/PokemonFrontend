import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  playerName : string = 'Ash';
  rivalName : string = 'Gary';

 constructor(private _router: Router, private namesService : NamesService) { }

     ngOnInit() {
     }

  

  startGame() {
    // alert("startGame()");
    // this.saveNames(); 
    // alert(this.playerName + " and " + this.rivalName);
    this.namesService.playerNameService = this.playerName;
    this.namesService.rivalNameService = this.rivalName;
    // alert("in service: " + this.namesService.playerNameService + " and " + this.namesService.rivalNameService);
    
    this._router.navigate(['choose']);

  }

  // saveNames() {
  //   //var playerName = (<HTMLInputElement>document.getElementById("playerName")).value;
  //   alert(this.playerName);
  //   //var rivalName = (<HTMLInputElement>document.getElementById("rivalName")).value;
  //   alert(this.rivalName);
  // }

}
