import { Ng2TicketsPage } from './app.po';

describe('ng2-tickets App', function() {
  let page: Ng2TicketsPage;

  beforeEach(() => {
    page = new Ng2TicketsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
