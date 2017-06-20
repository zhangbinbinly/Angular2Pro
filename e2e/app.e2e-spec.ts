import { Angular2ProPage } from './app.po';

describe('angular2-pro App', () => {
  let page: Angular2ProPage;

  beforeEach(() => {
    page = new Angular2ProPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
