import { $, ElementFinder, browser } from 'protractor';

export class ShippingStepPage {
  private acceptTerms: ElementFinder;
  private checkOut: ElementFinder;

  constructor() {
    this.acceptTerms = $('#cgv');
    this.checkOut = $('#form > p > button > span');
  }

  public async acceptanceTermsService(): Promise<void> {
    await this.acceptTerms.click();
    await browser.sleep(3000);
    await this.checkOut.click();
  }
}
