"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWindow = exports.isGlobal = void 0;

/**
 * Simple helper to check, if window object exists
 *
 * @return {boolean}
 */
var isWindow = function isWindow() {
  if (!window) {
    return false;
  }

  if (window === undefined || window === null) {
    return false;
  }

  return true;
};
/**
 * Simple helper to check if global object exists
 *
 * @return {boolean}
 */


exports.isWindow = isWindow;

var isGlobal = function isGlobal() {
  if (!global) {
    return false;
  }

  if (global === undefined || global === null) {
    return false;
  }

  return true;
};

exports.isGlobal = isGlobal;