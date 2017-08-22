import { AngularCosmosPage } from './app.po';

describe('angular-cosmos App', () => {
  let page: AngularCosmosPage;

  beforeEach(() => {
    page = new AngularCosmosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
