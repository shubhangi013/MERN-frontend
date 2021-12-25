webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_shubhangi13_Home_Orgs_MERN_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_shubhangi13_Home_Orgs_MERN_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_shubhangi13_Home_Orgs_MERN_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_shubhangi13_Home_Orgs_MERN_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _components_DropZoneComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/DropZoneComponent */ \"./src/components/DropZoneComponent.tsx\");\n/* harmony import */ var _components_RenderFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/RenderFile */ \"./src/components/RenderFile.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_DownloadFile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/DownloadFile */ \"./src/components/DownloadFile.tsx\");\n/* harmony import */ var _components_EmailForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/EmailForm */ \"./src/components/EmailForm.tsx\");\n\n\n\n\nvar _jsxFileName = \"/home/shubhangi13/Home/Orgs/MERN-frontend/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      file = _useState[0],\n      setFile = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      id = _useState2[0],\n      setId = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      downloadPageLink = _useState3[0],\n      setDownloadPageLink = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"Upload\"),\n      uploadState = _useState4[0],\n      setUploadState = _useState4[1];\n\n  var handleUpload = /*#__PURE__*/function () {\n    var _ref = Object(_home_shubhangi13_Home_Orgs_MERN_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_shubhangi13_Home_Orgs_MERN_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var formData, _yield$axios, data;\n\n      return _home_shubhangi13_Home_Orgs_MERN_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!(uploadState === \"Uploading\")) {\n                _context.next = 2;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 2:\n              setUploadState(\"Uploading\");\n              formData = new FormData();\n              formData.append(\"myFile\", file);\n              _context.prev = 5;\n              _context.next = 8;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default()({\n                method: \"post\",\n                data: formData,\n                url: \"api/files/upload\",\n                headers: {\n                  \"Content-Type\": \"multipart/form-data\"\n                }\n              });\n\n            case 8:\n              _yield$axios = _context.sent;\n              data = _yield$axios.data;\n              setDownloadPageLink(data.downloadPageLink);\n              setId(data.id);\n              setUploadState(\"Upload Failed\");\n              _context.next = 18;\n              break;\n\n            case 15:\n              _context.prev = 15;\n              _context.t0 = _context[\"catch\"](5);\n              console.log(_context.t0.response.data);\n\n            case 18:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[5, 15]]);\n    }));\n\n    return function handleUpload() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var resetComponent = function resetComponent() {\n    setFile(null);\n    setDownloadPageLink(null);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \" flex flex-col items-center justify-center\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      className: \"heading font-sans\",\n      children: \"DROP A FILE!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-96 flex flex-col items-center bg-gray-800 shadow-xl rounded-xl jutify-center\",\n      children: [!downloadPageLink && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_DropZoneComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        setFile: setFile\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this), file && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_RenderFile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        file: {\n          format: file.type.split(\"/\")[1],\n          name: file.name,\n          sizeInBytes: file.size\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 13\n      }, this), !downloadPageLink && file && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"p-2 my-5 bg-gray-900 rounded-md w-44 focus:outline-none\",\n        onClick: handleUpload,\n        children: uploadState\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this), downloadPageLink && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"p-2 text-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_DownloadFile__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          downloadPageLink: downloadPageLink\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_EmailForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          id: id\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"p-2 my-5 bg-gray-900 rounded-md w-44 focus:outline-none\",\n          onClick: resetComponent,\n          children: \"Upload New File\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"NMUnEl08qWEBbu9NmclzrNtsPB4=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsImZpbGUiLCJzZXRGaWxlIiwiaWQiLCJzZXRJZCIsImRvd25sb2FkUGFnZUxpbmsiLCJzZXREb3dubG9hZFBhZ2VMaW5rIiwidXBsb2FkU3RhdGUiLCJzZXRVcGxvYWRTdGF0ZSIsImhhbmRsZVVwbG9hZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJheGlvcyIsIm1ldGhvZCIsImRhdGEiLCJ1cmwiLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwicmVzZXRDb21wb25lbnQiLCJmb3JtYXQiLCJ0eXBlIiwic3BsaXQiLCJuYW1lIiwic2l6ZUluQnl0ZXMiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUVMQyxzREFBUSxDQUFDLElBQUQsQ0FGSDtBQUFBLE1BRXRCQyxJQUZzQjtBQUFBLE1BRWhCQyxPQUZnQjs7QUFBQSxtQkFJVEYsc0RBQVEsQ0FBQyxJQUFELENBSkM7QUFBQSxNQUl0QkcsRUFKc0I7QUFBQSxNQUlsQkMsS0FKa0I7O0FBQUEsbUJBTW1CSixzREFBUSxDQUFDLElBQUQsQ0FOM0I7QUFBQSxNQU10QkssZ0JBTnNCO0FBQUEsTUFNSkMsbUJBTkk7O0FBQUEsbUJBUVNOLHNEQUFRLENBQXNELFFBQXRELENBUmpCO0FBQUEsTUFRdEJPLFdBUnNCO0FBQUEsTUFRVEMsY0FSUzs7QUFVN0IsTUFBTUMsWUFBWTtBQUFBLDRTQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDaEJGLFdBQVcsS0FBRyxXQURFO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBRW5CQyw0QkFBYyxDQUFDLFdBQUQsQ0FBZDtBQUNNRSxzQkFIYSxHQUdGLElBQUlDLFFBQUosRUFIRTtBQUluQkQsc0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixRQUFoQixFQUF5QlgsSUFBekI7QUFKbUI7QUFBQTtBQUFBLHFCQU1FWSw0Q0FBSyxDQUFDO0FBQ3ZCQyxzQkFBTSxFQUFFLE1BRGU7QUFFdkJDLG9CQUFJLEVBQUdMLFFBRmdCO0FBR3ZCTSxtQkFBRyxFQUFFLGtCQUhrQjtBQUl2QkMsdUJBQU8sRUFBQztBQUNOLGtDQUFnQjtBQURWO0FBSmUsZUFBRCxDQU5QOztBQUFBO0FBQUE7QUFNVkYsa0JBTlUsZ0JBTVZBLElBTlU7QUFjakJULGlDQUFtQixDQUFDUyxJQUFJLENBQUNWLGdCQUFOLENBQW5CO0FBQ0FELG1CQUFLLENBQUNXLElBQUksQ0FBQ1osRUFBTixDQUFMO0FBQ0FLLDRCQUFjLENBQUMsZUFBRCxDQUFkO0FBaEJpQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWtCakJVLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFNQyxRQUFOLENBQWVMLElBQTNCOztBQWxCaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWk4sWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUF3QkEsTUFBTVksY0FBYyxHQUFDLFNBQWZBLGNBQWUsR0FBSTtBQUN2Qm5CLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDQUksdUJBQW1CLENBQUMsSUFBRCxDQUFuQjtBQUNELEdBSEQ7O0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsNENBQWY7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsZ0ZBQWY7QUFBQSxpQkFFQyxDQUFDRCxnQkFBRCxpQkFDQyxxRUFBQyxxRUFBRDtBQUFtQixlQUFPLEVBQUVIO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixFQU9JRCxJQUFJLGlCQUNGLHFFQUFDLDhEQUFEO0FBQVksWUFBSSxFQUFFO0FBQ3BCcUIsZ0JBQU0sRUFBRXJCLElBQUksQ0FBQ3NCLElBQUwsQ0FBVUMsS0FBVixDQUFnQixHQUFoQixFQUFxQixDQUFyQixDQURZO0FBRXBCQyxjQUFJLEVBQUV4QixJQUFJLENBQUN3QixJQUZTO0FBR3BCQyxxQkFBVyxFQUFFekIsSUFBSSxDQUFDMEI7QUFIRTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUk4sRUFtQkksQ0FBQ3RCLGdCQUFELElBQW9CSixJQUFwQixpQkFDRjtBQUFRLGlCQUFTLEVBQUMseURBQWxCO0FBQTRFLGVBQU8sRUFBRVEsWUFBckY7QUFBQSxrQkFDR0Y7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJGLEVBNEJJRixnQkFBZ0IsaUJBQ2Q7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsZ0NBQ0YscUVBQUMsZ0VBQUQ7QUFBYywwQkFBZ0IsRUFBRUE7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERSxlQUVGLHFFQUFDLDZEQUFEO0FBQVcsWUFBRSxFQUFFRjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkUsZUFHRjtBQUFRLG1CQUFTLEVBQUMseURBQWxCO0FBQTRFLGlCQUFPLEVBQUVrQixjQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3Qk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQ0Q7O0dBaEZ1QnRCLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyb3Bab25lQ29tcG9uZW50IGZyb20gXCJAY29tcG9uZW50cy9Ecm9wWm9uZUNvbXBvbmVudFwiO1xuaW1wb3J0IFJlbmRlckZpbGUgZnJvbSBcIkBjb21wb25lbnRzL1JlbmRlckZpbGVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IERvd25sb2FkRmlsZSBmcm9tIFwiQGNvbXBvbmVudHMvRG93bmxvYWRGaWxlXCI7XG5pbXBvcnQgRW1haWxGb3JtIGZyb20gXCJAY29tcG9uZW50cy9FbWFpbEZvcm1cIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3QgW2Rvd25sb2FkUGFnZUxpbmssIHNldERvd25sb2FkUGFnZUxpbmtdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBbdXBsb2FkU3RhdGUsIHNldFVwbG9hZFN0YXRlXSA9IHVzZVN0YXRlPFwiVXBsb2FkZWRcInwgXCJVcGxvYWRpbmdcInwgXCJVcGxvYWQgRmFpbGVkXCIgfCBcIlVwbG9hZFwiPihcIlVwbG9hZFwiKVxuXG4gIGNvbnN0IGhhbmRsZVVwbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICBpZih1cGxvYWRTdGF0ZT09PVwiVXBsb2FkaW5nXCIpIHJldHVybjtcbiAgICBzZXRVcGxvYWRTdGF0ZShcIlVwbG9hZGluZ1wiKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgZm9ybURhdGEuYXBwZW5kKFwibXlGaWxlXCIsZmlsZSlcbiAgICB0cnkge1xuICAgICAgY29uc3Qge2RhdGF9PWF3YWl0IGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgZGF0YSA6IGZvcm1EYXRhLFxuICAgICAgICB1cmw6IFwiYXBpL2ZpbGVzL3VwbG9hZFwiLFxuICAgICAgICBoZWFkZXJzOntcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNldERvd25sb2FkUGFnZUxpbmsoZGF0YS5kb3dubG9hZFBhZ2VMaW5rKVxuICAgICAgc2V0SWQoZGF0YS5pZCk7XG4gICAgICBzZXRVcGxvYWRTdGF0ZShcIlVwbG9hZCBGYWlsZWRcIilcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgIFxuICAgIH1cbiAgfVxuICBcbiAgY29uc3QgcmVzZXRDb21wb25lbnQ9KCk9PntcbiAgICBzZXRGaWxlKG51bGwpXG4gICAgc2V0RG93bmxvYWRQYWdlTGluayhudWxsKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nIGZvbnQtc2Fuc1wiPkRST1AgQSBGSUxFITwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOTYgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctZ3JheS04MDAgc2hhZG93LXhsIHJvdW5kZWQteGwganV0aWZ5LWNlbnRlclwiPlxuICAgICAgIHsgXG4gICAgICAgIWRvd25sb2FkUGFnZUxpbmsmJlxuICAgICAgICA8RHJvcFpvbmVDb21wb25lbnQgc2V0RmlsZT17c2V0RmlsZX0vPlxuICAgICAgIH1cbiAgICAgICAgey8qIHJlbmRlciBmaWxlICovfVxuICAgICAgICB7XG4gICAgICAgICAgZmlsZSYmIChcbiAgICAgICAgICAgIDxSZW5kZXJGaWxlIGZpbGU9e3tcbiAgICAgICAgICBmb3JtYXQ6IGZpbGUudHlwZS5zcGxpdChcIi9cIilbMV0sXG4gICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgIHNpemVJbkJ5dGVzOiBmaWxlLnNpemUsXG4gICAgICAgIH19Lz5cblxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICB7LyogdXBsb2FkIGJ1dHRvbiAqL31cblxuICAgICAgICB7XG4gICAgICAgICAgIWRvd25sb2FkUGFnZUxpbmsmJiBmaWxlJiYoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0yIG15LTUgYmctZ3JheS05MDAgcm91bmRlZC1tZCB3LTQ0IGZvY3VzOm91dGxpbmUtbm9uZVwiIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZH0+XG4gICAgICAgICAge3VwbG9hZFN0YXRlfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApXG4gICAgICAgIH1cblxuXG4gICAgICAgIHtcbiAgICAgICAgICBkb3dubG9hZFBhZ2VMaW5rJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8RG93bmxvYWRGaWxlIGRvd25sb2FkUGFnZUxpbms9e2Rvd25sb2FkUGFnZUxpbmt9Lz5cbiAgICAgICAgICA8RW1haWxGb3JtIGlkPXtpZH0vPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0yIG15LTUgYmctZ3JheS05MDAgcm91bmRlZC1tZCB3LTQ0IGZvY3VzOm91dGxpbmUtbm9uZVwiIG9uQ2xpY2s9e3Jlc2V0Q29tcG9uZW50fT5VcGxvYWQgTmV3IEZpbGU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})