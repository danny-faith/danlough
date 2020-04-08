webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");


var _this = undefined,
    _jsxFileName = "/home/dblythe/Apps/danlough/app/components/Button.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background-color: ", ";\n    border: none;\n    border-radius: 4px;\n    box-shadow: 3px 3px 0px ", ";\n    color: ", ";\n    font-size: 24px;\n    font-weight: bold;\n    padding: 32px;\n\n    &:hover {\n        color: white;\n        cursor: pointer;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var StyledButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject(), function (props) {
  return props.dark ? Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.09, 'teal') : 'teal';
}, function (props) {
  return props.dark ? Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.15, 'teal') : 'teal';
}, function (props) {
  return props.theme.colors.primary;
});
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __jsx(StyledButton, {
    dark: props.dark,
    children: props.children,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 27
    }
  });
});

/***/ })

})
//# sourceMappingURL=index.js.9fd56d489648803e75ec.hot-update.js.map