import { PaydownPage } from './app.po';

describe('paydown App', () => {
  let page: PaydownPage;

  beforeEach(() => {
    page = new PaydownPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
