"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _delog = require("./delog");

// tslint:disable-next-line:no-any
var delog = new _delog.Delog(); // This is used for modern JS and TS

var _default = delog; // This is used for webpack, to enable globally add directly delog instance

exports.default = _default;
module.exports = delog;