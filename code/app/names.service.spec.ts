/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NamesService } from './names.service';

describe('NamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NamesService]
    });
  });

  it('should ...', inject([NamesService], (service: NamesService) => {
    expect(service).toBeTruthy();
  }));
});
