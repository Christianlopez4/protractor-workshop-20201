import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private elementFinder: ElementFinder;

  constructor() {
    this.elementFinder = $('#SubmitLogin > span');
  }

  public async signIn(): Promise<void> {
    await $('#email').sendKeys('aperdomobo@gmail.com');
    await $('#passwd').sendKeys('WorkshopProtractor');
    await this.elementFinder.click();
  }
}
