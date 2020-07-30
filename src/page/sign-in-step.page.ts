import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private elementFinder: ElementFinder;

  constructor() {
    this.elementFinder = $('#SubmitLogin > span');
  }

  public async signIn(email: string, password: string): Promise<void> {
    await $('#email').sendKeys(email);
    await $('#passwd').sendKeys(password);
    await this.elementFinder.click();
  }
}
