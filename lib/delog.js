"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Delog = void 0;

var _utils = require("./utils");

/**
 * Delog class
 */
var Delog =
/** @class */
function () {
  function Delog() {
    // Flag if
    this.flagWindow = false;
    this.flagGlobal = false;

    if (Delog.instance !== null) {
      return Delog.instance;
    }

    var fn = this.log.bind(this);
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


  Delog.prototype.global = function (flag) {
    // Resolve global (for node)
    if ((0, _utils.isGlobal)()) {
      if (flag && !this.flagGlobal) {
        global.delog = Delog.instance;
        this.flagGlobal = true;
      }

      if (!flag && this.flagGlobal) {
        delete global.delog;
        this.flagGlobal = false;
      }
    } // Resolve window (for react, e.g.)


    if ((0, _utils.isWindow)()) {
      if (flag && !this.flagWindow) {
        window.delog = Delog.instance;
        this.flagWindow = true;
      }

      if (!flag && this.flagWindow) {
        delete window.delog;
        this.flagWindow = false;
      }
    }
  };
  /**
   * Log into console
   *
   * @param {any[]} ...args
   * @return {void}
   */


  Delog.prototype.log = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    } // tslint:disable-next-line:no-console


    console.log.apply(console, args);
  }; // Allow only one instance


  Delog.instance = null;
  return Delog;
}();

exports.Delog = Delog;