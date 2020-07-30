import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private elementFinder: ElementFinder;

  constructor() {
    this.elementFinder = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async bankPayment(): Promise<void> {
    await this.elementFinder.click();
  }
}
