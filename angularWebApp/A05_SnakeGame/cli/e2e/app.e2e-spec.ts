import { A05SnakeGamePage } from './app.po';

describe('a05-snake-game App', function() {
  let page: A05SnakeGamePage;

  beforeEach(() => {
    page = new A05SnakeGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
