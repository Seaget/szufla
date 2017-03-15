import { SzuflaPage } from './app.po';

describe('szufla App', function() {
  let page: SzuflaPage;

  beforeEach(() => {
    page = new SzuflaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
