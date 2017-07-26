import { browser, element, by } from 'protractor';

export class A04StylingAnimationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
