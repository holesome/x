webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Taskbar/Taskbar.tsx":
/*!***********************************************!*\
  !*** ./components/System/Taskbar/Taskbar.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_Taskbar_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/Taskbar/Taskbar.module.scss */ \"./styles/System/Taskbar/Taskbar.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_System_Taskbar_Clock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/System/Taskbar/Clock */ \"./components/System/Taskbar/Clock.tsx\");\n/* harmony import */ var _components_System_Taskbar_StartMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/System/Taskbar/StartMenu */ \"./components/System/Taskbar/StartMenu.tsx\");\n/* harmony import */ var _components_System_Taskbar_TaskbarEntries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/System/Taskbar/TaskbarEntries */ \"./components/System/Taskbar/TaskbarEntries.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/Taskbar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n // Q: Add zindex to footer and dont need in other places?\n\nvar Taskbar = function Taskbar() {\n  _s();\n\n  var footerRef = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n    className: _styles_System_Taskbar_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.footer,\n    ref: footerRef,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_System_Taskbar_StartMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      footerRef: footerRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_System_Taskbar_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.taskbar,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_System_Taskbar_TaskbarEntries__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_System_Taskbar_Clock__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Taskbar, \"3ghGe5QUFrbOLWSK/dLOMSnG2o4=\");\n\n_c = Taskbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Taskbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Taskbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9UYXNrYmFyLnRzeD8xN2Q0Il0sIm5hbWVzIjpbIlRhc2tiYXIiLCJmb290ZXJSZWYiLCJ1c2VSZWYiLCJzdHlsZXMiLCJmb290ZXIiLCJ0YXNrYmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7Q0FHQTs7QUFFQSxJQUFNQSxPQUFpQixHQUFHLFNBQXBCQSxPQUFvQixHQUFNO0FBQUE7O0FBQzlCLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBYyxJQUFkLENBQXhCO0FBRUEsc0JBQ0U7QUFBUSxhQUFTLEVBQUVDLGlGQUFNLENBQUNDLE1BQTFCO0FBQWtDLE9BQUcsRUFBRUgsU0FBdkM7QUFBQSw0QkFDRSxxRUFBQyw0RUFBRDtBQUFXLGVBQVMsRUFBRUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVFLGlGQUFNLENBQUNFLE9BQXZCO0FBQUEsOEJBQ0UscUVBQUMsaUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FaRDs7R0FBTUwsTzs7S0FBQUEsTztBQWNTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL1Rhc2tiYXIvVGFza2Jhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1Rhc2tiYXIubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgQ2xvY2sgZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL0Nsb2NrJztcbmltcG9ydCBTdGFydE1lbnUgZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudSc7XG5pbXBvcnQgVGFza2JhckVudHJpZXMgZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL1Rhc2tiYXJFbnRyaWVzJztcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuLy8gUTogQWRkIHppbmRleCB0byBmb290ZXIgYW5kIGRvbnQgbmVlZCBpbiBvdGhlciBwbGFjZXM/XG5cbmNvbnN0IFRhc2tiYXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXJSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9IHJlZj17Zm9vdGVyUmVmfT5cbiAgICAgIDxTdGFydE1lbnUgZm9vdGVyUmVmPXtmb290ZXJSZWZ9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhc2tiYXJ9PlxuICAgICAgICA8VGFza2JhckVudHJpZXMgLz5cbiAgICAgICAgPENsb2NrIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tiYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/Taskbar/Taskbar.tsx\n");

/***/ })

})