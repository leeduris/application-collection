import { A02AuthFirebasePage } from './app.po';

describe('a02-auth-firebase App', function() {
  let page: A02AuthFirebasePage;

  beforeEach(() => {
    page = new A02AuthFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
