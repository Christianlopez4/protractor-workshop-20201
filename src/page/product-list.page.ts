import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private elementFinder: ElementFinder;

  constructor() {
    this.elementFinder = $(
      '#center_column a.button.ajax_add_to_cart_button.btn.btn-default'
    );
  }

  public async listProduct(): Promise<void> {
    await this.elementFinder.click();
  }
}
