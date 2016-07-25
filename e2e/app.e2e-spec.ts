import { Test4Page } from './app.po';

describe('test4 App', function() {
  let page: Test4Page;

  beforeEach(() => {
    page = new Test4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
