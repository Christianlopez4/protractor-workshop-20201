import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private elementFinder: ElementFinder;

  constructor() {
    this.elementFinder = $('#cgv');
  }

  public async shipping(): Promise<void> {
    await this.elementFinder.click();
  }
}
