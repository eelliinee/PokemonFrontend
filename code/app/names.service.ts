import { Injectable } from '@angular/core';

@Injectable()

export class NamesService {
  playerNameService : string = "Player";
  rivalNameService : string = "Gary";

  setPlayerNameService(playerName) {
    this.playerNameService = playerName;
  }

  constructor() { }


}
