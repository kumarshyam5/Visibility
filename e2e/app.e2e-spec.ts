import { VisibilityPage } from './app.po';

describe('visibility App', () => {
  let page: VisibilityPage;

  beforeEach(() => {
    page = new VisibilityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
