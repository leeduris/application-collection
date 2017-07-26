import { A06ChartD3Page } from './app.po';

describe('a06-chart-d3 App', function() {
  let page: A06ChartD3Page;

  beforeEach(() => {
    page = new A06ChartD3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
