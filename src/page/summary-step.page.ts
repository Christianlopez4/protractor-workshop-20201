import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private elementFinder: ElementFinder;

  constructor() {
    this.elementFinder = $('.cart_navigation span');
  }

  public async summary(): Promise<void> {
    await this.elementFinder.click();
  }
}
