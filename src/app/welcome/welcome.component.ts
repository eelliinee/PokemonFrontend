import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  startGame() {
    alert("startGame()");
    this.saveNames(); 
    alert("link");
    this._router.navigate(['blah']);

  }

  saveNames() {
    var playerName = (<HTMLInputElement>document.getElementById("playerName")).value;
    alert(playerName);
    var rivalName = (<HTMLInputElement>document.getElementById("rivalName")).value;
    alert(rivalName);
  }

}
