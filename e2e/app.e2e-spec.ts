import { TttAngularPage } from './app.po';

describe('ttt-angular App', () => {
  let page: TttAngularPage;

  beforeEach(() => {
    page = new TttAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
