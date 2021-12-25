webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/DropZoneComponent.tsx":
/*!**********************************************!*\
  !*** ./src/components/DropZoneComponent.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_shubhangi13_Home_Orgs_MERN_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropzone */ \"./node_modules/react-dropzone/dist/es/index.js\");\n\n\n\n\nvar _jsxFileName = \"/home/shubhangi13/Home/Orgs/MERN-frontend/src/components/DropZoneComponent.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_shubhangi13_Home_Orgs_MERN_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar DropZoneComponent = function DropZoneComponent(_ref) {\n  _s();\n\n  var setFile = _ref.setFile;\n  var onDrop = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (acceptedFiles) {\n    console.log(acceptedFiles);\n    setFile(acceptedFiles[0]);\n  }, []);\n\n  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_3__[\"useDropzone\"])({\n    onDrop: onDrop,\n    multiple: false\n  }),\n      getRootProps = _useDropzone.getRootProps,\n      getInputProps = _useDropzone.getInputProps,\n      isDragAccept = _useDropzone.isDragAccept,\n      isDragReject = _useDropzone.isDragReject;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", _objectSpread(_objectSpread({}, getRootProps()), {}, {\n    className: \"box p-6 w-full\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", _objectSpread({}, getInputProps()), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-col items-center justify-center border-2 dark:border-white border-purple-900  rounded-xl\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/images/folder.png\",\n        alt: \"folder\",\n        className: \"image\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 11\n      }, _this), isDragReject ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Sorry unaccepted file format\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"dark:text-gray-300 text-gray-800\",\n          children: \"DRAG AND DROP HERE!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 7\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"mt-2 text-base dark:text-gray-300 text-gray-800\",\n          children: \"Drop you files!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, _this)]\n  }), void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 7\n  }, _this);\n};\n\n_s(DropZoneComponent, \"mw6yCfqEmQzXktBA8WBhWxHKrIM=\", false, function () {\n  return [react_dropzone__WEBPACK_IMPORTED_MODULE_3__[\"useDropzone\"]];\n});\n\n_c = DropZoneComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropZoneComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"DropZoneComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRHJvcFpvbmVDb21wb25lbnQudHN4PzUwYmQiXSwibmFtZXMiOlsiRHJvcFpvbmVDb21wb25lbnQiLCJzZXRGaWxlIiwib25Ecm9wIiwidXNlQ2FsbGJhY2siLCJhY2NlcHRlZEZpbGVzIiwiY29uc29sZSIsImxvZyIsInVzZURyb3B6b25lIiwibXVsdGlwbGUiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWNjZXB0IiwiaXNEcmFnUmVqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxpQkFBOEQsR0FBRSxTQUFoRUEsaUJBQWdFLE9BQWU7QUFBQTs7QUFBQSxNQUFiQyxPQUFhLFFBQWJBLE9BQWE7QUFFbkYsTUFBTUMsTUFBTSxHQUFFQyx5REFBVyxDQUN2QixVQUFDQyxhQUFELEVBQW1CO0FBQ2pCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsYUFBWjtBQUNBSCxXQUFPLENBQUNHLGFBQWEsQ0FBQyxDQUFELENBQWQsQ0FBUDtBQUNELEdBSnNCLEVBS3ZCLEVBTHVCLENBQXpCOztBQUZtRixxQkFTbEJHLGtFQUFXLENBQUM7QUFBQ0wsVUFBTSxFQUFOQSxNQUFEO0FBQzdFTSxZQUFRLEVBQUM7QUFEb0UsR0FBRCxDQVRPO0FBQUEsTUFTNUVDLFlBVDRFLGdCQVM1RUEsWUFUNEU7QUFBQSxNQVM5REMsYUFUOEQsZ0JBUzlEQSxhQVQ4RDtBQUFBLE1BUy9DQyxZQVQrQyxnQkFTL0NBLFlBVCtDO0FBQUEsTUFTakNDLFlBVGlDLGdCQVNqQ0EsWUFUaUM7O0FBYW5GLHNCQUNJLDRHQUFTSCxZQUFZLEVBQXJCO0FBQXlCLGFBQVMsRUFBQyxnQkFBbkM7QUFBQSw0QkFDRSxnR0FBV0MsYUFBYSxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxvR0FBZjtBQUFBLDhCQUNFO0FBQUssV0FBRyxFQUFDLG9CQUFUO0FBQThCLFdBQUcsRUFBQyxRQUFsQztBQUEyQyxpQkFBUyxFQUFDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUdORSxZQUFZLGdCQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUYsZ0JBRVo7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUMsa0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFTTtBQUFHLG1CQUFTLEVBQUMsaURBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRk47QUFBQSxzQkFMTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtCRCxDQS9CRDs7R0FBTVosaUI7VUFTNkRPLDBEOzs7S0FUN0RQLGlCO0FBaUNTQSxnRkFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0Ryb3Bab25lQ29tcG9uZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCBGdW5jdGlvbkNvbXBvbmVudCwgRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tIFwicmVhY3QtZHJvcHpvbmVcIiBcbmNvbnN0IERyb3Bab25lQ29tcG9uZW50IDogRnVuY3Rpb25Db21wb25lbnQ8e3NldEZpbGU6RGlzcGF0Y2g8YW55Pn0+PSAoe3NldEZpbGV9KSA9PiB7IFxuXG4gIGNvbnN0IG9uRHJvcD0gdXNlQ2FsbGJhY2soIFxuICAgIChhY2NlcHRlZEZpbGVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhhY2NlcHRlZEZpbGVzKTtcbiAgICAgIHNldEZpbGUoYWNjZXB0ZWRGaWxlc1swXSlcbiAgICB9LFxuICAgIFtdLFxuICApXG4gIGNvbnN0IHtnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjY2VwdCwgaXNEcmFnUmVqZWN0fT0gdXNlRHJvcHpvbmUoe29uRHJvcCxcbiAgbXVsdGlwbGU6ZmFsc2UsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgICA8ZGl2IHsuLi5nZXRSb290UHJvcHMoKX0gY2xhc3NOYW1lPVwiYm94IHAtNiB3LWZ1bGxcIj5cbiAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXItMiBkYXJrOmJvcmRlci13aGl0ZSBib3JkZXItcHVycGxlLTkwMCAgcm91bmRlZC14bFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9mb2xkZXIucG5nXCIgYWx0PVwiZm9sZGVyXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIiAvPlxue1xuICBpc0RyYWdSZWplY3Q/IDxwPlNvcnJ5IHVuYWNjZXB0ZWQgZmlsZSBmb3JtYXQ8L3A+XG4gIDpcbiAgPD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImRhcms6dGV4dC1ncmF5LTMwMCB0ZXh0LWdyYXktODAwXCI+RFJBRyBBTkQgRFJPUCBIRVJFITwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LWJhc2UgZGFyazp0ZXh0LWdyYXktMzAwIHRleHQtZ3JheS04MDBcIj5Ecm9wIHlvdSBmaWxlcyE8L3A+XG4gIDwvPlxuXG59XG4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bab25lQ29tcG9uZW50XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/DropZoneComponent.tsx\n");

/***/ })

})