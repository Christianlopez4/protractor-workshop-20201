import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private elementFinder: ElementFinder;

  constructor() {
    this.elementFinder = $('#form > p > button > span');
  }

  public async payment(): Promise<void> {
    await this.elementFinder.click();
  }
}
