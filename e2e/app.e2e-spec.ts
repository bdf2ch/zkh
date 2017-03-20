import { ZkhPage } from './app.po';

describe('zkh App', function() {
  let page: ZkhPage;

  beforeEach(() => {
    page = new ZkhPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
