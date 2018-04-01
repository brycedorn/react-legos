'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _colors = require('./colors');

var colors = _interopRequireWildcard(_colors);

var _sizes = require('./sizes');

var _sizes2 = _interopRequireDefault(_sizes);

require('./lego.scss');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Released under the MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * https://mit-license.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var someColors = ['Bright-green', 'Fire-Yellow', 'Bright-red', 'Bright-blue', 'Light-grey-metallic', 'Bright-bluish-green', 'Bright-bluish-violet'];

var brickColors = Object.keys(colors);

var defaultProps = {
  size: 'medium'
};

var propTypes = {
  size: _react2.default.PropTypes.string
};

var Lego = function (_React$Component) {
  _inherits(Lego, _React$Component);

  function Lego() {
    _classCallCheck(this, Lego);

    return _possibleConstructorReturn(this, (Lego.__proto__ || Object.getPrototypeOf(Lego)).apply(this, arguments));
  }

  _createClass(Lego, [{
    key: 'generateBrickStyles',
    value: function generateBrickStyles(x, y, size) {
      var _sizeOffsets$size = _sizes2.default[size],
          xOffset = _sizeOffsets$size.xOffset,
          yOffset = _sizeOffsets$size.yOffset;


      return {
        zIndex: -y,
        left: (x + y) * xOffset + 'px',
        top: ((x - y) * yOffset).toFixed(2) + 'px'
      };
    }

    // Find rightmost edge to determine the first column
    // that doesn't have any rendered bricks
    //  - todo: refactor

  }, {
    key: 'getWidth',
    value: function getWidth(shape) {
      var width = shape.length + shape[0].length;

      var i = shape.length - 1;
      var j = shape[0].length - 1;

      // Start at corner
      if (!shape[0][j]) {
        width -= 1;
      } else {
        return width;
      }

      if (!shape[0][j - 1] && !shape[1][j]) {
        width -= 1;
      } else {
        return width;
      }

      if (!shape[0][j - 2] && !shape[1][j - 1] && !shape[2][j]) {
        width -= 1;
      } else {
        return width;
      }

      if (!shape[0][j - 3] && !shape[1][j - 2] && !shape[2][j - 1] && !shape[3][j]) {
        width -= 1;
      } else {
        return width;
      }

      if (!shape[0][j - 4] && !shape[1][j - 3] && !shape[2][j - 2] && !shape[3][j - 1] && !shape[4][j]) {
        width -= 1;
      } else {
        return width;
      }

      return width;
    }
  }, {
    key: 'renderBricksFromShape',
    value: function renderBricksFromShape(shape, size, brickColor) {
      var _this2 = this;

      return shape.map(function (row, y) {
        return row.map(function (hasUnit, x) {
          if (hasUnit) {
            var props = {
              style: _this2.generateBrickStyles(x, y, size),
              key: '' + x + y,
              className: brickColor + ' unit'
            };

            return _this2.renderBrick(props);
          }
        });
      });
    }
  }, {
    key: 'renderBrick',
    value: function renderBrick(props) {
      return _react2.default.createElement(
        'div',
        props,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('div', { className: 'side side--1' }),
          _react2.default.createElement('div', { className: 'side side--2' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'side--3-wrap' },
          _react2.default.createElement('div', { className: 'side side--3' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'stud' },
          _react2.default.createElement('div', { className: 'stud--inner' })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          placement = _props.placement,
          shape = _props.shape,
          size = _props.size,
          style = _props.style;


      var brickColor = color;
      if (!brickColor) {
        var index = Math.floor(Math.random() * brickColors.length);
        brickColor = colors[brickColors[index]][0];
      }

      var width = this.getWidth(shape);
      var dimensions = {
        width: width * _sizes2.default[size].xOffset + 'px'
      };

      var brickStyle = Object.assign({}, placement, style);

      return _react2.default.createElement(
        'div',
        { className: 'brick brick--' + size + ' ' + brickColor, style: brickStyle },
        _react2.default.createElement('div', { className: 'scaffold', style: dimensions }),
        this.renderBricksFromShape(shape, size, brickColor)
      );
    }
  }]);

  return Lego;
}(_react2.default.Component);

exports.default = Lego;


Lego.defaultProps = defaultProps;
Lego.propTypes = propTypes;