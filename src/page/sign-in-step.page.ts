import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private elementFinder: ElementFinder;

  constructor() {
    this.elementFinder = $('#SubmitLogin > span');
  }

  public async signIn(): Promise<void> {
    await this.elementFinder.click();
  }
}
