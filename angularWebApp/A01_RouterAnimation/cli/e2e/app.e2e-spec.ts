import { A01RouterAnimationPage } from './app.po';

describe('a01-router-animation App', function() {
  let page: A01RouterAnimationPage;

  beforeEach(() => {
    page = new A01RouterAnimationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
