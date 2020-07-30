import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private elementFinder: ElementFinder;

  constructor() {
    this.elementFinder = $('#cart_navigation > button > span');
  }

  public async bankPayment(): Promise<void> {
    await this.elementFinder.click();
  }
}
