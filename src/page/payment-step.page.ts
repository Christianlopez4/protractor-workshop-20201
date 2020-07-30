import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private elementFinder: ElementFinder;

  constructor() {
    this.elementFinder = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async paymentShippingStep(): Promise<void> {
    await this.elementFinder.click();
  }
}
