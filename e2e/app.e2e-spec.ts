import { PokemonFrontendPage } from './app.po';

describe('pokemon-frontend App', function() {
  let page: PokemonFrontendPage;

  beforeEach(() => {
    page = new PokemonFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
