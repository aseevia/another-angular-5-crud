import { AppPage } from './app.po';

describe('customers App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Angular 5 CRUD');
  });
});
