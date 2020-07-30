import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private elementFinder: ElementFinder;

  constructor() {
    this.elementFinder = $('#center_column > form > p > button > span');
  }

  public async addressStep(): Promise<void> {
    await this.elementFinder.click();
  }
}
