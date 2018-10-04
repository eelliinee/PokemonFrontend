/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetPokemonService } from './get-pokemon.service';

describe('GetPokemonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPokemonService]
    });
  });

  it('should ...', inject([GetPokemonService], (service: GetPokemonService) => {
    expect(service).toBeTruthy();
  }));
});
