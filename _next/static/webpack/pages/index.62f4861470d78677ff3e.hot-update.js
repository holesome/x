webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Taskbar/ButtonBar.tsx":
/*!*************************************************!*\
  !*** ./components/System/Taskbar/ButtonBar.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/System/Taskbar/ButtonBar.module.scss */ \"./styles/System/Taskbar/ButtonBar.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/ButtonBar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar defaultView = 'All apps';\n\nvar ButtonBar = function ButtonBar(_ref) {\n  _s();\n\n  var startButtonRef = _ref.startButtonRef,\n      buttonsRef = _ref.buttonsRef,\n      setShowMenu = _ref.setShowMenu,\n      taskbarRef = _ref.taskbarRef;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_6__[\"SessionContext\"]),\n      foreground = _useContext.foreground;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_5__[\"ProcessContext\"]),\n      open = _useContext2.open;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useState\"])(defaultView),\n      view = _useState[0],\n      setView = _useState[1];\n\n  console.log('HI');\n  var buttons = [{\n    title: 'START',\n    alt: 'Expand',\n    icon: \"\\uE700\",\n    isBold: true\n  }, {\n    title: 'All apps',\n    icon: \"\\uE179\",\n    isView: true\n  }, {\n    title: 'Documents',\n    icon: \"\\uE160\",\n    onClick: function () {\n      var _onClick = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(clickEvent) {\n        var processId;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return open({\n                  icon: '/icons/programs/explorer.png',\n                  name: 'Documents',\n                  url: '/docs'\n                }, {}, clickEvent.target);\n\n              case 2:\n                processId = _context.sent;\n                foreground(processId);\n                setShowMenu(false);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function onClick(_x) {\n        return _onClick.apply(this, arguments);\n      }\n\n      return onClick;\n    }()\n  }, {\n    title: 'Power',\n    icon: \"\\uE7E8\"\n  }];\n  return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_4__[\"createPortal\"])( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ol\", {\n    className: _styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttons,\n    ref: buttonsRef,\n    tabIndex: -1,\n    onMouseLeave: function onMouseLeave() {\n      var _startButtonRef$curre;\n\n      return (_startButtonRef$curre = startButtonRef.current) === null || _startButtonRef$curre === void 0 ? void 0 : _startButtonRef$curre.focus();\n    },\n    children: buttons.map(function (_ref2) {\n      var alt = _ref2.alt,\n          icon = _ref2.icon,\n          isBold = _ref2.isBold,\n          isView = _ref2.isView,\n          title = _ref2.title,\n          onClick = _ref2.onClick;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"figure\", {\n          className: view === title ? _styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttonSelected : '',\n          onClick: isView ? function () {\n            return setView(view);\n          } : onClick,\n          tabIndex: -1,\n          title: alt || title,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n            \"data-icon\": icon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"figcaption\", {\n            children: isBold ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"strong\", {\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 35\n            }, _this) : title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, _this)\n      }, title, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 5\n  }, _this), taskbarRef.current);\n};\n\n_s(ButtonBar, \"8S20MLeZxX31meeAMV8uK1Z00ws=\");\n\n_c = ButtonBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ButtonBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"ButtonBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9CdXR0b25CYXIudHN4Pzc1ZjAiXSwibmFtZXMiOlsiZGVmYXVsdFZpZXciLCJCdXR0b25CYXIiLCJzdGFydEJ1dHRvblJlZiIsImJ1dHRvbnNSZWYiLCJzZXRTaG93TWVudSIsInRhc2tiYXJSZWYiLCJ1c2VDb250ZXh0IiwiU2Vzc2lvbkNvbnRleHQiLCJmb3JlZ3JvdW5kIiwiUHJvY2Vzc0NvbnRleHQiLCJvcGVuIiwidXNlU3RhdGUiLCJ2aWV3Iiwic2V0VmlldyIsImNvbnNvbGUiLCJsb2ciLCJidXR0b25zIiwidGl0bGUiLCJhbHQiLCJpY29uIiwiaXNCb2xkIiwiaXNWaWV3Iiwib25DbGljayIsImNsaWNrRXZlbnQiLCJuYW1lIiwidXJsIiwidGFyZ2V0IiwicHJvY2Vzc0lkIiwiY3JlYXRlUG9ydGFsIiwic3R5bGVzIiwiY3VycmVudCIsImZvY3VzIiwibWFwIiwiYnV0dG9uU2VsZWN0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLFVBQXBCOztBQUVBLElBQU1DLFNBS0osR0FBRyxTQUxDQSxTQUtELE9BQTZEO0FBQUE7O0FBQUEsTUFBMURDLGNBQTBELFFBQTFEQSxjQUEwRDtBQUFBLE1BQTFDQyxVQUEwQyxRQUExQ0EsVUFBMEM7QUFBQSxNQUE5QkMsV0FBOEIsUUFBOUJBLFdBQThCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFBQSxvQkFDekNDLHdEQUFVLENBQUNDLHVFQUFELENBRCtCO0FBQUEsTUFDeERDLFVBRHdELGVBQ3hEQSxVQUR3RDs7QUFBQSxxQkFFL0NGLHdEQUFVLENBQUNHLHVFQUFELENBRnFDO0FBQUEsTUFFeERDLElBRndELGdCQUV4REEsSUFGd0Q7O0FBQUEsa0JBR3hDQyxzREFBUSxDQUFDWCxXQUFELENBSGdDO0FBQUEsTUFHekRZLElBSHlEO0FBQUEsTUFHbkRDLE9BSG1EOztBQUlsRUMsU0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNFLE1BQU1DLE9BQU8sR0FBRyxDQUNkO0FBQ0VDLFNBQUssRUFBRSxPQURUO0FBRUVDLE9BQUcsRUFBRSxRQUZQO0FBR0VDLFFBQUksRUFBRSxRQUhSO0FBSUVDLFVBQU0sRUFBRTtBQUpWLEdBRGMsRUFPZDtBQUNFSCxTQUFLLEVBQUUsVUFEVDtBQUVFRSxRQUFJLEVBQUUsUUFGUjtBQUdFRSxVQUFNLEVBQUU7QUFIVixHQVBjLEVBWWQ7QUFDRUosU0FBSyxFQUFFLFdBRFQ7QUFFRUUsUUFBSSxFQUFFLFFBRlI7QUFHRUcsV0FBTztBQUFBLHNNQUFFLGlCQUNQQyxVQURPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBR2lCYixJQUFJLENBQzFCO0FBQ0VTLHNCQUFJLEVBQUUsOEJBRFI7QUFFRUssc0JBQUksRUFBRSxXQUZSO0FBR0VDLHFCQUFHLEVBQUU7QUFIUCxpQkFEMEIsRUFNMUIsRUFOMEIsRUFPMUJGLFVBQVUsQ0FBQ0csTUFQZSxDQUhyQjs7QUFBQTtBQUdEQyx5QkFIQztBQVlQbkIsMEJBQVUsQ0FBQ21CLFNBQUQsQ0FBVjtBQUNBdkIsMkJBQVcsQ0FBQyxLQUFELENBQVg7O0FBYk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUhULEdBWmMsRUErQmQ7QUFDRWEsU0FBSyxFQUFFLE9BRFQ7QUFFRUUsUUFBSSxFQUFFO0FBRlIsR0EvQmMsQ0FBaEI7QUFxQ0Esc0JBQU9TLDhEQUFZLGVBQ2pCO0FBQ0UsYUFBUyxFQUFFQyxtRkFBTSxDQUFDYixPQURwQjtBQUVFLE9BQUcsRUFBRWIsVUFGUDtBQUdFLFlBQVEsRUFBRSxDQUFDLENBSGI7QUFJRSxnQkFBWSxFQUFFO0FBQUE7O0FBQUEsc0NBQU1ELGNBQWMsQ0FBQzRCLE9BQXJCLDBEQUFNLHNCQUF3QkMsS0FBeEIsRUFBTjtBQUFBLEtBSmhCO0FBQUEsY0FNR2YsT0FBTyxDQUFDZ0IsR0FBUixDQUFZO0FBQUEsVUFBR2QsR0FBSCxTQUFHQSxHQUFIO0FBQUEsVUFBUUMsSUFBUixTQUFRQSxJQUFSO0FBQUEsVUFBY0MsTUFBZCxTQUFjQSxNQUFkO0FBQUEsVUFBc0JDLE1BQXRCLFNBQXNCQSxNQUF0QjtBQUFBLFVBQThCSixLQUE5QixTQUE4QkEsS0FBOUI7QUFBQSxVQUFxQ0ssT0FBckMsU0FBcUNBLE9BQXJDO0FBQUEsMEJBQ1g7QUFBQSwrQkFDRTtBQUNFLG1CQUFTLEVBQUVWLElBQUksS0FBS0ssS0FBVCxHQUFpQlksbUZBQU0sQ0FBQ0ksY0FBeEIsR0FBeUMsRUFEdEQ7QUFFRSxpQkFBTyxFQUFFWixNQUFNLEdBQUc7QUFBQSxtQkFBTVIsT0FBTyxDQUFDRCxJQUFELENBQWI7QUFBQSxXQUFILEdBQXlCVSxPQUYxQztBQUdFLGtCQUFRLEVBQUUsQ0FBQyxDQUhiO0FBSUUsZUFBSyxFQUFFSixHQUFHLElBQUlELEtBSmhCO0FBQUEsa0NBTUU7QUFBTSx5QkFBV0U7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQU9FO0FBQUEsc0JBQWFDLE1BQU0sZ0JBQUc7QUFBQSx3QkFBU0g7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFILEdBQThCQTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVNBLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURXO0FBQUEsS0FBWjtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEaUIsRUFxQmpCWixVQUFVLENBQUN5QixPQXJCTSxDQUFuQjtBQXVCRCxDQXRFRDs7R0FBTTdCLFM7O0tBQUFBLFM7QUF3RVNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9CdXR0b25CYXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9TeXN0ZW0vVGFza2Jhci9CdXR0b25CYXIubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgUHJvY2Vzc0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Byb2Nlc3NNYW5hZ2VyJztcbmltcG9ydCB7IFNlc3Npb25Db250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9TZXNzaW9uTWFuYWdlcic7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZGVmYXVsdFZpZXcgPSAnQWxsIGFwcHMnO1xuXG5jb25zdCBCdXR0b25CYXI6IFJlYWN0LkZDPHtcbiAgc3RhcnRCdXR0b25SZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MQnV0dG9uRWxlbWVudD47XG4gIGJ1dHRvbnNSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MT0xpc3RFbGVtZW50PjtcbiAgc2V0U2hvd01lbnU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcbiAgdGFza2JhclJlZjogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MRWxlbWVudCB8IG51bGw+O1xufT4gPSAoeyBzdGFydEJ1dHRvblJlZiwgYnV0dG9uc1JlZiwgc2V0U2hvd01lbnUsIHRhc2tiYXJSZWYgfSkgPT4ge1xuICBjb25zdCB7IGZvcmVncm91bmQgfSA9IHVzZUNvbnRleHQoU2Vzc2lvbkNvbnRleHQpO1xuICBjb25zdCB7IG9wZW4gfSA9IHVzZUNvbnRleHQoUHJvY2Vzc0NvbnRleHQpO1xuICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZShkZWZhdWx0Vmlldyk7XG5jb25zb2xlLmxvZygnSEknKVxuICBjb25zdCBidXR0b25zID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnU1RBUlQnLFxuICAgICAgYWx0OiAnRXhwYW5kJyxcbiAgICAgIGljb246ICdcXHVlNzAwJyxcbiAgICAgIGlzQm9sZDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdBbGwgYXBwcycsXG4gICAgICBpY29uOiAnXFx1ZTE3OScsXG4gICAgICBpc1ZpZXc6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRG9jdW1lbnRzJyxcbiAgICAgIGljb246ICdcXHVlMTYwJyxcbiAgICAgIG9uQ2xpY2s6IGFzeW5jIChcbiAgICAgICAgY2xpY2tFdmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD5cbiAgICAgICkgPT4ge1xuICAgICAgICBjb25zdCBwcm9jZXNzSWQgPSBhd2FpdCBvcGVuKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICcvaWNvbnMvcHJvZ3JhbXMvZXhwbG9yZXIucG5nJyxcbiAgICAgICAgICAgIG5hbWU6ICdEb2N1bWVudHMnLFxuICAgICAgICAgICAgdXJsOiAnL2RvY3MnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBjbGlja0V2ZW50LnRhcmdldFxuICAgICAgICApO1xuICAgICAgICBmb3JlZ3JvdW5kKHByb2Nlc3NJZCk7XG4gICAgICAgIHNldFNob3dNZW51KGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnUG93ZXInLFxuICAgICAgaWNvbjogJ1xcdWU3ZTgnXG4gICAgfVxuICBdO1xuXG4gIHJldHVybiBjcmVhdGVQb3J0YWwoXG4gICAgPG9sXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfVxuICAgICAgcmVmPXtidXR0b25zUmVmfVxuICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzdGFydEJ1dHRvblJlZi5jdXJyZW50Py5mb2N1cygpfVxuICAgID5cbiAgICAgIHtidXR0b25zLm1hcCgoeyBhbHQsIGljb24sIGlzQm9sZCwgaXNWaWV3LCB0aXRsZSwgb25DbGljayB9KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e3RpdGxlfT5cbiAgICAgICAgICA8ZmlndXJlXG4gICAgICAgICAgICBjbGFzc05hbWU9e3ZpZXcgPT09IHRpdGxlID8gc3R5bGVzLmJ1dHRvblNlbGVjdGVkIDogJyd9XG4gICAgICAgICAgICBvbkNsaWNrPXtpc1ZpZXcgPyAoKSA9PiBzZXRWaWV3KHZpZXcpIDogb25DbGlja31cbiAgICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICAgIHRpdGxlPXthbHQgfHwgdGl0bGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gZGF0YS1pY29uPXtpY29ufSAvPlxuICAgICAgICAgICAgPGZpZ2NhcHRpb24+e2lzQm9sZCA/IDxzdHJvbmc+e3RpdGxlfTwvc3Ryb25nPiA6IHRpdGxlfTwvZmlnY2FwdGlvbj5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvb2w+LFxuICAgIHRhc2tiYXJSZWYuY3VycmVudCBhcyBIVE1MRWxlbWVudFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uQmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/Taskbar/ButtonBar.tsx\n");

/***/ })

})