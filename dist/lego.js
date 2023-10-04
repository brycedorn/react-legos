"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireWildcard(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_sizes=_interopRequireDefault(require("./sizes")),_elements=require("./elements"),_utils=require("./utils");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d["default"]=a,c&&c.set(a,d),d}var Lego=function(a){// Render each 1-1 unit one by one
var b=a.color,c=a.shape,d=a.size,e=a.style,f=a.opacity,g=a.optimize,h=(0,_react.useState)((0,_utils.getWidth)(d,c),"");return/*#__PURE__*/_react["default"].createElement(_react.Fragment,null,/*#__PURE__*/_react["default"].createElement(_elements.Brick,{size:d,color:b,style:e,opacity:1-f},/*#__PURE__*/_react["default"].createElement("div",{style:{width:h}}),function(a,c){return a.map(function(d,e){return d.map(function(h,i){if(h){var j=_sizes["default"][c],k={zIndex:-e,left:"".concat((i+e)*j.x,"px"),top:"".concat(((i-e)*j.y).toFixed(2),"px")},l="\"".concat(i,":").concat(e,"\""),m=!d[i+1],n=!a[e-1]||!a[e-1][i];return/*#__PURE__*/_react["default"].createElement("div",{className:"unit",style:k,key:l},/*#__PURE__*/_react["default"].createElement("div",null,(!g||m)&&/*#__PURE__*/_react["default"].createElement("div",{className:"side side--1"}),(!g||n)&&/*#__PURE__*/_react["default"].createElement("div",{className:"side side--2"})),/*#__PURE__*/_react["default"].createElement("div",{className:"side--3-wrap"},/*#__PURE__*/_react["default"].createElement("div",{className:"side side--3"})),/*#__PURE__*/_react["default"].createElement(_elements.Stud,{className:"stud",opacity:1-f,color:b},/*#__PURE__*/_react["default"].createElement(_elements.StudInner,{className:"stud--inner"})))}})})}(c,d)))};Lego.defaultProps={size:Object.keys(_sizes["default"])[1],color:"#eee",opacity:1,style:{},optimize:!0},Lego.propTypes={size:_propTypes["default"].oneOf(Object.keys(_sizes["default"])),color:_propTypes["default"].string,shape:_propTypes["default"].array.isRequired,style:_propTypes["default"].object,opacity:_propTypes["default"].number,optimize:_propTypes["default"].bool};var _default=Lego;exports["default"]=_default;