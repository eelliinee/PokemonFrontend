import { Injectable } from '@angular/core';

@Injectable()

export class NamesService {
  playerNameService : string;
  rivalNameService : string;

  setPlayerNameService(playerName) {
    this.playerNameService = playerName;
  }

  constructor() { }


}
