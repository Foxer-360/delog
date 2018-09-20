import { IDelogGlobal, IDelogWindow } from '@source/types';
import { isGlobal, isWindow } from '@source/utils';

/**
 * Delog class
 */
class Delog {

  // Allow only one instance
  private static instance: any = null;

  // Flag if
  private flagWindow: boolean = false;
  private flagGlobal: boolean = false;

  constructor() {
    if (Delog.instance !== null) {
      return Delog.instance;
    }

    const fn = this.log.bind(this);
    Object.setPrototypeOf(fn, Delog.prototype);
    Delog.instance = fn;

    return fn;
  }

  /**
   * Enable/disable access to delog globaly using window or global
   *
   * @param {boolean} flag true if you want to access globaly
   * @return {void}
   */
  public global(flag: boolean): void {
    // Resolve global (for node)
    if (isGlobal()) {
      if (flag && !this.flagGlobal) {
        (global as IDelogGlobal).delog = Delog.instance;
        this.flagGlobal = true;
      }
      if (!flag && this.flagGlobal) {
        delete (global as IDelogGlobal).delog;
        this.flagGlobal = false;
      }
    }

    // Resolve window (for react, e.g.)
    if (isWindow()) {
      if (flag && !this.flagWindow) {
        (window as IDelogWindow).delog = Delog.instance;
        this.flagWindow = true;
      }

      if (!flag && this.flagWindow) {
        delete (window as IDelogWindow).delog;
        this.flagWindow = false;
      }
    }
  }

  /**
   * Log into console
   *
   * @param {any[]} ...args
   * @return {void}
   */
  public log(...args: any[]): void {
    // tslint:disable-next-line:no-console
    console.log(...args);
  }

}

/**
 * Define interface of instance of this Delog class.
 */
interface IDelogDefinition extends Delog {
  (...args: any[]): void;
}

export {
  Delog,
  IDelogDefinition,
};
