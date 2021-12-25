webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_shubhangi13_Home_Orgs_MERN_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_shubhangi13_Home_Orgs_MERN_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_shubhangi13_Home_Orgs_MERN_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_shubhangi13_Home_Orgs_MERN_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _components_DropZoneComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/DropZoneComponent */ \"./src/components/DropZoneComponent.tsx\");\n/* harmony import */ var _components_RenderFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/RenderFile */ \"./src/components/RenderFile.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_DownloadFile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/DownloadFile */ \"./src/components/DownloadFile.tsx\");\n/* harmony import */ var _components_EmailForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/EmailForm */ \"./src/components/EmailForm.tsx\");\n\n\n\n\nvar _jsxFileName = \"/home/shubhangi13/Home/Orgs/MERN-frontend/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      file = _useState[0],\n      setFile = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      id = _useState2[0],\n      setId = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      downloadPageLink = _useState3[0],\n      setDownloadPageLink = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"Upload\"),\n      uploadState = _useState4[0],\n      setUploadState = _useState4[1];\n\n  var handleUpload = /*#__PURE__*/function () {\n    var _ref = Object(_home_shubhangi13_Home_Orgs_MERN_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_shubhangi13_Home_Orgs_MERN_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var formData, _yield$axios, data;\n\n      return _home_shubhangi13_Home_Orgs_MERN_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!(uploadState === \"Uploading\")) {\n                _context.next = 2;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 2:\n              setUploadState(\"Uploading\");\n              formData = new FormData();\n              formData.append(\"myFile\", file);\n              _context.prev = 5;\n              _context.next = 8;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default()({\n                method: \"post\",\n                data: formData,\n                url: \"api/files/upload\",\n                headers: {\n                  \"Content-Type\": \"multipart/form-data\"\n                }\n              });\n\n            case 8:\n              _yield$axios = _context.sent;\n              data = _yield$axios.data;\n              setDownloadPageLink(data.downloadPageLink);\n              setId(data.id);\n              setUploadState(\"Upload Failed\");\n              _context.next = 18;\n              break;\n\n            case 15:\n              _context.prev = 15;\n              _context.t0 = _context[\"catch\"](5);\n              console.log(_context.t0.response.data);\n\n            case 18:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[5, 15]]);\n    }));\n\n    return function handleUpload() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var resetComponent = function resetComponent() {\n    setFile(null);\n    setDownloadPageLink(null);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \" flex flex-col items-center justify-center\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      className: \"heading\",\n      children: \"DROP A FILE!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-96 flex flex-col items-center bg-gray-800 shadow-xl rounded-xl jutify-center\",\n      children: [!downloadPageLink && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_DropZoneComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        setFile: setFile\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this), file && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_RenderFile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        file: {\n          format: file.type.split(\"/\")[1],\n          name: file.name,\n          sizeInBytes: file.size\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 13\n      }, this), !downloadPageLink && file && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"p-2 my-5 bg-gray-900 rounded-md w-44 focus:outline-none\",\n        onClick: handleUpload,\n        children: uploadState\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this), downloadPageLink && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"p-2 text-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_DownloadFile__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          downloadPageLink: downloadPageLink\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_EmailForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          id: id\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"p-2 my-5 bg-gray-900 rounded-md w-44 focus:outline-none\",\n          onClick: resetComponent,\n          children: \"Upload New File\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"NMUnEl08qWEBbu9NmclzrNtsPB4=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsImZpbGUiLCJzZXRGaWxlIiwiaWQiLCJzZXRJZCIsImRvd25sb2FkUGFnZUxpbmsiLCJzZXREb3dubG9hZFBhZ2VMaW5rIiwidXBsb2FkU3RhdGUiLCJzZXRVcGxvYWRTdGF0ZSIsImhhbmRsZVVwbG9hZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJheGlvcyIsIm1ldGhvZCIsImRhdGEiLCJ1cmwiLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwicmVzZXRDb21wb25lbnQiLCJmb3JtYXQiLCJ0eXBlIiwic3BsaXQiLCJuYW1lIiwic2l6ZUluQnl0ZXMiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUVMQyxzREFBUSxDQUFDLElBQUQsQ0FGSDtBQUFBLE1BRXRCQyxJQUZzQjtBQUFBLE1BRWhCQyxPQUZnQjs7QUFBQSxtQkFJVEYsc0RBQVEsQ0FBQyxJQUFELENBSkM7QUFBQSxNQUl0QkcsRUFKc0I7QUFBQSxNQUlsQkMsS0FKa0I7O0FBQUEsbUJBTW1CSixzREFBUSxDQUFDLElBQUQsQ0FOM0I7QUFBQSxNQU10QkssZ0JBTnNCO0FBQUEsTUFNSkMsbUJBTkk7O0FBQUEsbUJBUVNOLHNEQUFRLENBQXNELFFBQXRELENBUmpCO0FBQUEsTUFRdEJPLFdBUnNCO0FBQUEsTUFRVEMsY0FSUzs7QUFVN0IsTUFBTUMsWUFBWTtBQUFBLDRTQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDaEJGLFdBQVcsS0FBRyxXQURFO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBRW5CQyw0QkFBYyxDQUFDLFdBQUQsQ0FBZDtBQUNNRSxzQkFIYSxHQUdGLElBQUlDLFFBQUosRUFIRTtBQUluQkQsc0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixRQUFoQixFQUF5QlgsSUFBekI7QUFKbUI7QUFBQTtBQUFBLHFCQU1FWSw0Q0FBSyxDQUFDO0FBQ3ZCQyxzQkFBTSxFQUFFLE1BRGU7QUFFdkJDLG9CQUFJLEVBQUdMLFFBRmdCO0FBR3ZCTSxtQkFBRyxFQUFFLGtCQUhrQjtBQUl2QkMsdUJBQU8sRUFBQztBQUNOLGtDQUFnQjtBQURWO0FBSmUsZUFBRCxDQU5QOztBQUFBO0FBQUE7QUFNVkYsa0JBTlUsZ0JBTVZBLElBTlU7QUFjakJULGlDQUFtQixDQUFDUyxJQUFJLENBQUNWLGdCQUFOLENBQW5CO0FBQ0FELG1CQUFLLENBQUNXLElBQUksQ0FBQ1osRUFBTixDQUFMO0FBQ0FLLDRCQUFjLENBQUMsZUFBRCxDQUFkO0FBaEJpQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWtCakJVLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFNQyxRQUFOLENBQWVMLElBQTNCOztBQWxCaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWk4sWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUF3QkEsTUFBTVksY0FBYyxHQUFDLFNBQWZBLGNBQWUsR0FBSTtBQUN2Qm5CLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDQUksdUJBQW1CLENBQUMsSUFBRCxDQUFuQjtBQUNELEdBSEQ7O0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsNENBQWY7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxnRkFBZjtBQUFBLGlCQUVDLENBQUNELGdCQUFELGlCQUNDLHFFQUFDLHFFQUFEO0FBQW1CLGVBQU8sRUFBRUg7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLEVBT0lELElBQUksaUJBQ0YscUVBQUMsOERBQUQ7QUFBWSxZQUFJLEVBQUU7QUFDcEJxQixnQkFBTSxFQUFFckIsSUFBSSxDQUFDc0IsSUFBTCxDQUFVQyxLQUFWLENBQWdCLEdBQWhCLEVBQXFCLENBQXJCLENBRFk7QUFFcEJDLGNBQUksRUFBRXhCLElBQUksQ0FBQ3dCLElBRlM7QUFHcEJDLHFCQUFXLEVBQUV6QixJQUFJLENBQUMwQjtBQUhFO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSTixFQW1CSSxDQUFDdEIsZ0JBQUQsSUFBb0JKLElBQXBCLGlCQUNGO0FBQVEsaUJBQVMsRUFBQyx5REFBbEI7QUFBNEUsZUFBTyxFQUFFUSxZQUFyRjtBQUFBLGtCQUNHRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkYsRUE0QklGLGdCQUFnQixpQkFDZDtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSxnQ0FDRixxRUFBQyxnRUFBRDtBQUFjLDBCQUFnQixFQUFFQTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURFLGVBRUYscUVBQUMsNkRBQUQ7QUFBVyxZQUFFLEVBQUVGO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRSxlQUdGO0FBQVEsbUJBQVMsRUFBQyx5REFBbEI7QUFBNEUsaUJBQU8sRUFBRWtCLGNBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdCTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBDRDs7R0FoRnVCdEIsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHJvcFpvbmVDb21wb25lbnQgZnJvbSBcIkBjb21wb25lbnRzL0Ryb3Bab25lQ29tcG9uZW50XCI7XG5pbXBvcnQgUmVuZGVyRmlsZSBmcm9tIFwiQGNvbXBvbmVudHMvUmVuZGVyRmlsZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgRG93bmxvYWRGaWxlIGZyb20gXCJAY29tcG9uZW50cy9Eb3dubG9hZEZpbGVcIjtcbmltcG9ydCBFbWFpbEZvcm0gZnJvbSBcIkBjb21wb25lbnRzL0VtYWlsRm9ybVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBbZG93bmxvYWRQYWdlTGluaywgc2V0RG93bmxvYWRQYWdlTGlua10gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IFt1cGxvYWRTdGF0ZSwgc2V0VXBsb2FkU3RhdGVdID0gdXNlU3RhdGU8XCJVcGxvYWRlZFwifCBcIlVwbG9hZGluZ1wifCBcIlVwbG9hZCBGYWlsZWRcIiB8IFwiVXBsb2FkXCI+KFwiVXBsb2FkXCIpXG5cbiAgY29uc3QgaGFuZGxlVXBsb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmKHVwbG9hZFN0YXRlPT09XCJVcGxvYWRpbmdcIikgcmV0dXJuO1xuICAgIHNldFVwbG9hZFN0YXRlKFwiVXBsb2FkaW5nXCIpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJteUZpbGVcIixmaWxlKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7ZGF0YX09YXdhaXQgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICBkYXRhIDogZm9ybURhdGEsXG4gICAgICAgIHVybDogXCJhcGkvZmlsZXMvdXBsb2FkXCIsXG4gICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2V0RG93bmxvYWRQYWdlTGluayhkYXRhLmRvd25sb2FkUGFnZUxpbmspXG4gICAgICBzZXRJZChkYXRhLmlkKTtcbiAgICAgIHNldFVwbG9hZFN0YXRlKFwiVXBsb2FkIEZhaWxlZFwiKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcblxuICAgICAgXG4gICAgfVxuICB9XG4gIFxuICBjb25zdCByZXNldENvbXBvbmVudD0oKT0+e1xuICAgIHNldEZpbGUobnVsbClcbiAgICBzZXREb3dubG9hZFBhZ2VMaW5rKG51bGwpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmdcIj5EUk9QIEEgRklMRSE8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTk2IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLWdyYXktODAwIHNoYWRvdy14bCByb3VuZGVkLXhsIGp1dGlmeS1jZW50ZXJcIj5cbiAgICAgICB7IFxuICAgICAgICFkb3dubG9hZFBhZ2VMaW5rJiZcbiAgICAgICAgPERyb3Bab25lQ29tcG9uZW50IHNldEZpbGU9e3NldEZpbGV9Lz5cbiAgICAgICB9XG4gICAgICAgIHsvKiByZW5kZXIgZmlsZSAqL31cbiAgICAgICAge1xuICAgICAgICAgIGZpbGUmJiAoXG4gICAgICAgICAgICA8UmVuZGVyRmlsZSBmaWxlPXt7XG4gICAgICAgICAgZm9ybWF0OiBmaWxlLnR5cGUuc3BsaXQoXCIvXCIpWzFdLFxuICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBzaXplSW5CeXRlczogZmlsZS5zaXplLFxuICAgICAgICB9fS8+XG5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgey8qIHVwbG9hZCBidXR0b24gKi99XG5cbiAgICAgICAge1xuICAgICAgICAgICFkb3dubG9hZFBhZ2VMaW5rJiYgZmlsZSYmKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMiBteS01IGJnLWdyYXktOTAwIHJvdW5kZWQtbWQgdy00NCBmb2N1czpvdXRsaW5lLW5vbmVcIiBvbkNsaWNrPXtoYW5kbGVVcGxvYWR9PlxuICAgICAgICAgIHt1cGxvYWRTdGF0ZX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKVxuICAgICAgICB9XG5cblxuICAgICAgICB7XG4gICAgICAgICAgZG93bmxvYWRQYWdlTGluayYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPERvd25sb2FkRmlsZSBkb3dubG9hZFBhZ2VMaW5rPXtkb3dubG9hZFBhZ2VMaW5rfS8+XG4gICAgICAgICAgPEVtYWlsRm9ybSBpZD17aWR9Lz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMiBteS01IGJnLWdyYXktOTAwIHJvdW5kZWQtbWQgdy00NCBmb2N1czpvdXRsaW5lLW5vbmVcIiBvbkNsaWNrPXtyZXNldENvbXBvbmVudH0+VXBsb2FkIE5ldyBGaWxlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})