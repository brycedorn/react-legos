'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizes = exports.shapes = exports.colors = undefined;

var _lego = require('./lego');

var _lego2 = _interopRequireDefault(_lego);

var _colors = require('./colors');

var colors = _interopRequireWildcard(_colors);

var _shapes = require('./shapes');

var shapes = _interopRequireWildcard(_shapes);

var _sizes = require('./sizes');

var _sizes2 = _interopRequireDefault(_sizes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _lego2.default;
exports.colors = colors;
exports.shapes = shapes;
exports.sizes = _sizes2.default;