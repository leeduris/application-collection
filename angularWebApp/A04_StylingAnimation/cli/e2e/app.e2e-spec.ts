import { A04StylingAnimationPage } from './app.po';

describe('a04-styling-animation App', function() {
  let page: A04StylingAnimationPage;

  beforeEach(() => {
    page = new A04StylingAnimationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
