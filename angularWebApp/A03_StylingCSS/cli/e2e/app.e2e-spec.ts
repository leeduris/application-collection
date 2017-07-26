import { A03StylingCSSPage } from './app.po';

describe('a03-styling-css App', function() {
  let page: A03StylingCSSPage;

  beforeEach(() => {
    page = new A03StylingCSSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
