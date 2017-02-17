import { RoutingTutorialPage } from './app.po';

describe('routing-tutorial App', function() {
  let page: RoutingTutorialPage;

  beforeEach(() => {
    page = new RoutingTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
