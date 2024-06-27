/* eslint-disable */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() { return this._amount; }

  set amount(val) {
    if (typeof val !== 'number') {
      throw new TypeError("Amount must be a number");
    }
    this._amount = val;
  }

  get currency() { return this._currency; }

  set currency(val) {
    if (!(val instanceof Currency)) {
      throw new TypeError("currency must be of type Currency");
    }
    this._currency = val;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError("Parameters must be of type number");
    }
    return amount * conversionRate;
  }
}
