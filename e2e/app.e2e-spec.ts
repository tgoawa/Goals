import { SchenckGoalsPage } from './app.po';

describe('schenck-goals App', () => {
  let page: SchenckGoalsPage;

  beforeEach(() => {
    page = new SchenckGoalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
