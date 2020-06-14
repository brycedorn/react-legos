"use strict";var _sizes=_interopRequireDefault(require("./sizes"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.getWidth=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}// Find rightmost edge to determine the first column
// that doesn't have any rendered bricks
//  - todo: refactor
var getWidth=function(a,b){var c=b.length+b[0].length,d=b[0].length-1;// let i = shape.length - 1;
// Start at corner
try{b[0][d]?b[0][d-1]||b[1][d]?b[0][d-2]||b[1][d-1]||b[2][d]?b[0][d-3]||b[1][d-2]||b[2][d-1]||b[3][d]?!b[0][d-4]&&!b[1][d-3]&&!b[2][d-2]&&!b[3][d-1]&&!b[4][d]&&(c-=1):c-=1:c-=1:c-=1:c-=1}catch(b){return"".concat(c*_sizes["default"][a].x,"px")}return"".concat(c*_sizes["default"][a].x,"px")};exports.getWidth=getWidth;