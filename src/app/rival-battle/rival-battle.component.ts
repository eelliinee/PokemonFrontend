import { Component, OnInit } from '@angular/core';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-rival-battle',
  templateUrl: './rival-battle.component.html',
  styleUrls: ['./rival-battle.component.css']
})
export class RivalBattleComponent implements OnInit {

  constructor(private namesService : NamesService) { }

  playerName : string = this.namesService.playerNameService;
  rivalName : string = this.namesService.rivalNameService;

  ngOnInit() {
  }

}
