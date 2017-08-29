import { CurrencyConverterFrontendPage } from './app.po';

describe('currency-converter-frontend App', function() {
  let page: CurrencyConverterFrontendPage;

  beforeEach(() => {
    page = new CurrencyConverterFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
