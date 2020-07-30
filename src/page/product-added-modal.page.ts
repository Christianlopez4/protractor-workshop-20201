import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private elementFinder: ElementFinder;

  constructor() {
    this.elementFinder = $('[style*="display: block;"] .button-container > a');
  }

  public async addProduct(): Promise<void> {
    await this.elementFinder.click();
  }
}
