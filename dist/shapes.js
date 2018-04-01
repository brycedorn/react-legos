"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var one = [[1]];

var oneByTwo = [[1], [1]];

var oneByFour = [[1], [1], [1], [1]];

var twoByTwo = [[1, 1], [1, 1]];

var twoByFour = [[1, 1], [1, 1], [1, 1], [1, 1]];

var b = [[1, 1, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1], [1, 1, 0, 0, 1, 1], [1, 1, 0, 0, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]].reverse();

var r = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 0, 0, 0]].reverse();

var y = [[1, 1, 0, 0, 1, 1], [1, 1, 0, 0, 1, 1], [1, 1, 0, 0, 1, 1], [1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]].reverse();

var c = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]].reverse();

var e = [[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1], [1, 1, 0, 0, 0], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]].reverse();

var bricks = {
  one: one,
  oneByTwo: oneByTwo,
  oneByFour: oneByFour,
  twoByTwo: twoByTwo,
  twoByFour: twoByFour
};

var letters = {
  b: b,
  r: r,
  y: y,
  c: c,
  e: e
};

exports.bricks = bricks;
exports.letters = letters;