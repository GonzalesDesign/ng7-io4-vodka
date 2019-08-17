import { TestBed } from '@angular/core/testing';

import { RussianCocktailsService } from './russian-cocktails.service';

describe('RussianCocktailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RussianCocktailsService = TestBed.get(RussianCocktailsService);
    expect(service).toBeTruthy();
  });
});
