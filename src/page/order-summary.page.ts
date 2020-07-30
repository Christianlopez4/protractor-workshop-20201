import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private elementFinder: ElementFinder;

  constructor() {
    this.elementFinder = $('#cart_navigation > button > span');
  }

  public async orderSummary(): Promise<void> {
    await this.elementFinder.click();
  }
}
