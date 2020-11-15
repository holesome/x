webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Taskbar/StartMenu.tsx":
/*!*************************************************!*\
  !*** ./components/System/Taskbar/StartMenu.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/Taskbar/StartMenu.module.scss */ \"./styles/System/Taskbar/StartMenu.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_System_Taskbar_ButtonBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/System/Taskbar/ButtonBar */ \"./components/System/Taskbar/ButtonBar.tsx\");\n/* harmony import */ var _components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/System/FileManager/FileManager */ \"./components/System/FileManager/FileManager.tsx\");\n/* harmony import */ var _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/System/FileManager/MenuView */ \"./components/System/FileManager/MenuView.tsx\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/StartMenu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar StartMenu = function StartMenu(_ref) {\n  _s();\n\n  var footerRef = _ref.footerRef;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useState\"])(false),\n      showMenu = _useState[0],\n      setShowMenu = _useState[1];\n\n  var startButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useRef\"])(null);\n  var buttonsRef = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useRef\"])(null);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useState\"])(false),\n      mounted = _useState2[0],\n      setMounted = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useEffect\"])(function () {\n    console.log(footerRef);\n    setMounted(true);\n  }, [footerRef]);\n  return mounted ? /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_5__[\"createPortal\"])( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    children: [showMenu && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_System_Taskbar_ButtonBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        startButtonRef: startButtonRef,\n        buttonsRef: buttonsRef,\n        setShowMenu: setShowMenu,\n        footerRef: footerRef\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        path: \"/start\",\n        render: _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        onChange: function onChange(cwd) {\n          return !cwd && setShowMenu(false);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      ref: startButtonRef,\n      className: \"\".concat(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.start, \" \").concat(showMenu && _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuOpen),\n      type: \"button\",\n      title: \"Start\",\n      onClick: function onClick() {\n        return setShowMenu(!showMenu);\n      },\n      onBlur: function onBlur(_ref2) {\n        var _buttonsRef$current;\n\n        var relatedTarget = _ref2.relatedTarget;\n\n        if (!relatedTarget) {\n          var _startButtonRef$curre;\n\n          startButtonRef === null || startButtonRef === void 0 ? void 0 : (_startButtonRef$curre = startButtonRef.current) === null || _startButtonRef$curre === void 0 ? void 0 : _startButtonRef$curre.focus();\n        } else if (!((_buttonsRef$current = buttonsRef.current) === null || _buttonsRef$current === void 0 ? void 0 : _buttonsRef$current.contains(relatedTarget))) {\n          setShowMenu(false);\n        }\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faWindows\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, _this), footerRef.current) : null;\n};\n\n_s(StartMenu, \"FheKokWGWHOZIn57x6Go4fSEsDQ=\");\n\n_c = StartMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"StartMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9TdGFydE1lbnUudHN4PzQ0MDAiXSwibmFtZXMiOlsiU3RhcnRNZW51IiwiZm9vdGVyUmVmIiwidXNlU3RhdGUiLCJzaG93TWVudSIsInNldFNob3dNZW51Iiwic3RhcnRCdXR0b25SZWYiLCJ1c2VSZWYiLCJidXR0b25zUmVmIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlUG9ydGFsIiwic3R5bGVzIiwibWVudSIsIk1lbnVWaWV3IiwiY3dkIiwic3RhcnQiLCJtZW51T3BlbiIsInJlbGF0ZWRUYXJnZXQiLCJjdXJyZW50IiwiZm9jdXMiLCJjb250YWlucyIsImZhV2luZG93cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBRUosR0FBRyxTQUZDQSxTQUVELE9BRUM7QUFBQTs7QUFBQSxNQURKQyxTQUNJLFFBREpBLFNBQ0k7O0FBQUEsa0JBQzRCQyxzREFBUSxDQUFDLEtBQUQsQ0FEcEM7QUFBQSxNQUNHQyxRQURIO0FBQUEsTUFDYUMsV0FEYjs7QUFFSixNQUFNQyxjQUFjLEdBQUdDLG9EQUFNLENBQW9CLElBQXBCLENBQTdCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHRCxvREFBTSxDQUFtQixJQUFuQixDQUF6Qjs7QUFISSxtQkFJMEJKLHNEQUFRLENBQUMsS0FBRCxDQUpsQztBQUFBLE1BSUdNLE9BSkg7QUFBQSxNQUlZQyxVQUpaOztBQU1KQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVlYLFNBQVo7QUFFQVEsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNELEdBSlEsRUFJTixDQUFDUixTQUFELENBSk0sQ0FBVDtBQU1BLFNBQU9PLE9BQU8sZ0JBQUdLLDhEQUFZLGVBQzNCO0FBQUEsZUFDR1YsUUFBUSxpQkFDUDtBQUFLLGVBQVMsRUFBRVcsbUZBQU0sQ0FBQ0MsSUFBdkI7QUFBQSw4QkFDRSxxRUFBQyw0RUFBRDtBQUNFLHNCQUFjLEVBQUVWLGNBRGxCO0FBRUUsa0JBQVUsRUFBRUUsVUFGZDtBQUdFLG1CQUFXLEVBQUVILFdBSGY7QUFJRSxpQkFBUyxFQUFFSDtBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FLHFFQUFDLGtGQUFEO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxjQUFNLEVBQUVlLCtFQUZWO0FBR0UsZ0JBQVEsRUFBRSxrQkFBQ0MsR0FBRDtBQUFBLGlCQUFTLENBQUNBLEdBQUQsSUFBUWIsV0FBVyxDQUFDLEtBQUQsQ0FBNUI7QUFBQTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQWdCRTtBQUNFLFNBQUcsRUFBRUMsY0FEUDtBQUVFLGVBQVMsWUFBS1MsbUZBQU0sQ0FBQ0ksS0FBWixjQUFxQmYsUUFBUSxJQUFJVyxtRkFBTSxDQUFDSyxRQUF4QyxDQUZYO0FBR0UsVUFBSSxFQUFDLFFBSFA7QUFJRSxXQUFLLEVBQUMsT0FKUjtBQUtFLGFBQU8sRUFBRTtBQUFBLGVBQU1mLFdBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQWpCO0FBQUEsT0FMWDtBQU1FLFlBQU0sRUFBRSx1QkFBdUI7QUFBQTs7QUFBQSxZQUFwQmlCLGFBQW9CLFNBQXBCQSxhQUFvQjs7QUFDN0IsWUFBSSxDQUFDQSxhQUFMLEVBQW9CO0FBQUE7O0FBQ2xCZix3QkFBYyxTQUFkLElBQUFBLGNBQWMsV0FBZCxxQ0FBQUEsY0FBYyxDQUFFZ0IsT0FBaEIsZ0ZBQXlCQyxLQUF6QjtBQUNELFNBRkQsTUFFTyxJQUFJLHlCQUFDZixVQUFVLENBQUNjLE9BQVosd0RBQUMsb0JBQW9CRSxRQUFwQixDQUE2QkgsYUFBN0IsQ0FBRCxDQUFKLEVBQTBEO0FBQy9EaEIscUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDRDtBQUNGLE9BWkg7QUFBQSw2QkFjRSxxRUFBQyw4RUFBRDtBQUFpQixZQUFJLEVBQUVvQiw0RUFBU0E7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRDJCLEVBa0MzQnZCLFNBQVMsQ0FBQ29CLE9BbENpQixDQUFmLEdBbUNWLElBbkNKO0FBb0NELENBcEREOztHQUFNckIsUzs7S0FBQUEsUztBQXNEU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudS5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCBCdXR0b25CYXIgZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL0J1dHRvbkJhcic7XG5pbXBvcnQgRmlsZU1hbmFnZXIgZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9GaWxlTWFuYWdlci9GaWxlTWFuYWdlcic7XG5pbXBvcnQgTWVudVZpZXcgZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9GaWxlTWFuYWdlci9NZW51Vmlldyc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgZmFXaW5kb3dzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTdGFydE1lbnU6IFJlYWN0LkZDPHtcbiAgZm9vdGVyUmVmOiBhbnlcbn0+ID0gKHtcbiAgZm9vdGVyUmVmXG59KSA9PiB7XG4gIGNvbnN0IFtzaG93TWVudSwgc2V0U2hvd01lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzdGFydEJ1dHRvblJlZiA9IHVzZVJlZjxIVE1MQnV0dG9uRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGJ1dHRvbnNSZWYgPSB1c2VSZWY8SFRNTE9MaXN0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGZvb3RlclJlZik7XG5cbiAgICBzZXRNb3VudGVkKHRydWUpO1xuICB9LCBbZm9vdGVyUmVmXSk7XG5cbiAgcmV0dXJuIG1vdW50ZWQgPyBjcmVhdGVQb3J0YWwoXG4gICAgPG5hdj5cbiAgICAgIHtzaG93TWVudSAmJiAoXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XG4gICAgICAgICAgPEJ1dHRvbkJhclxuICAgICAgICAgICAgc3RhcnRCdXR0b25SZWY9e3N0YXJ0QnV0dG9uUmVmfVxuICAgICAgICAgICAgYnV0dG9uc1JlZj17YnV0dG9uc1JlZn1cbiAgICAgICAgICAgIHNldFNob3dNZW51PXtzZXRTaG93TWVudX1cbiAgICAgICAgICAgIGZvb3RlclJlZj17Zm9vdGVyUmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZpbGVNYW5hZ2VyXG4gICAgICAgICAgICBwYXRoPVwiL3N0YXJ0XCJcbiAgICAgICAgICAgIHJlbmRlcj17TWVudVZpZXd9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGN3ZCkgPT4gIWN3ZCAmJiBzZXRTaG93TWVudShmYWxzZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9uYXY+XG4gICAgICApfVxuICAgICAgPGJ1dHRvblxuICAgICAgICByZWY9e3N0YXJ0QnV0dG9uUmVmfVxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zdGFydH0gJHtzaG93TWVudSAmJiBzdHlsZXMubWVudU9wZW59YH1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIHRpdGxlPVwiU3RhcnRcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TWVudSghc2hvd01lbnUpfVxuICAgICAgICBvbkJsdXI9eyh7IHJlbGF0ZWRUYXJnZXQgfSkgPT4ge1xuICAgICAgICAgIGlmICghcmVsYXRlZFRhcmdldCkge1xuICAgICAgICAgICAgc3RhcnRCdXR0b25SZWY/LmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgICAgICAgfSBlbHNlIGlmICghYnV0dG9uc1JlZi5jdXJyZW50Py5jb250YWlucyhyZWxhdGVkVGFyZ2V0IGFzIE5vZGUpKSB7XG4gICAgICAgICAgICBzZXRTaG93TWVudShmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhV2luZG93c30gLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbmF2PixcbiAgICBmb290ZXJSZWYuY3VycmVudCBhcyBIVE1MRWxlbWVudFxuICApIDogbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0TWVudTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/Taskbar/StartMenu.tsx\n");

/***/ })

})