"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/navbar.tsx":
/*!**************************************!*\
  !*** ./components/layout/navbar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/icons */ \"./components/icons/index.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Navbar(param) {\n    let { setSidebarOpen  } = param;\n    _s();\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"absolute right-0 w-full flex items-center justify-between md:justify-end px-4 h-16\",\n        \"aria-label\": \"Navbar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"inline-flex md:hidden items-center justify-center rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-0\",\n                onClick: ()=>setSidebarOpen(true),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"sr-only\",\n                        children: \"Open sidebar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\BrainForceWeb\\\\BrainForceServerAndWeb\\\\components\\\\layout\\\\navbar.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.MenuIcon, {\n                        className: \"h-6 w-6\",\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\BrainForceWeb\\\\BrainForceServerAndWeb\\\\components\\\\layout\\\\navbar.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\BrainForceWeb\\\\BrainForceServerAndWeb\\\\components\\\\layout\\\\navbar.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            status !== \"loading\" && ((session === null || session === void 0 ? void 0 : session.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: \"/\".concat(session.username),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    src: session.user.image || \"https://avatar.tobi.sh/\".concat(session.user.name),\n                    alt: session.user.name || \"User\",\n                    width: 300,\n                    height: 300,\n                    placeholder: \"blur\",\n                    blurDataURL: \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PYsGHDfwAHNAMQumvbogAAAABJRU5ErkJggg==\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\BrainForceWeb\\\\BrainForceServerAndWeb\\\\components\\\\layout\\\\navbar.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\BrainForceWeb\\\\BrainForceServerAndWeb\\\\components\\\\layout\\\\navbar.tsx\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                disabled: loading,\n                onClick: ()=>{\n                    setLoading(true);\n                    (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github\", {\n                        callbackUrl: \"/profile\"\n                    });\n                },\n                className: \"\".concat(loading ? \"bg-gray-200 border-gray-300\" : \"bg-black hover:bg-white border-black\", \" w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all\"),\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons__WEBPACK_IMPORTED_MODULE_3__.LoadingDots, {\n                    color: \"gray\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\BrainForceWeb\\\\BrainForceServerAndWeb\\\\components\\\\layout\\\\navbar.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 24\n                }, this) : \"Log in with GitHub\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\BrainForceWeb\\\\BrainForceServerAndWeb\\\\components\\\\layout\\\\navbar.tsx\",\n                lineNumber: 48,\n                columnNumber: 11\n            }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\BrainForceWeb\\\\BrainForceServerAndWeb\\\\components\\\\layout\\\\navbar.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"bpA2dMu76N8SpPwr16oFSybjKVk=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9uYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBOEQ7QUFDN0I7QUFDZ0I7QUFDbEI7QUFDcUI7QUFDdkI7QUFFZCxTQUFTTyxPQUFPLEtBSTlCLEVBQUU7UUFKNEIsRUFDN0JDLGVBQWMsRUFHZixHQUo4Qjs7SUFLN0IsTUFBTSxFQUFFQyxNQUFNQyxRQUFPLEVBQUVDLE9BQU0sRUFBRSxHQUFHWCwyREFBVUE7SUFDNUMsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFFNUMscUJBQ0UsOERBQUNZO1FBQ0NDLFdBQVU7UUFDVkMsY0FBVzs7MEJBRVgsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMSCxXQUFVO2dCQUNWSSxTQUFTLElBQU1YLGVBQWUsSUFBSTs7a0NBRWxDLDhEQUFDWTt3QkFBS0wsV0FBVTtrQ0FBVTs7Ozs7O2tDQUMxQiw4REFBQ1YsOERBQVFBO3dCQUFDVSxXQUFVO3dCQUFVTSxlQUFZOzs7Ozs7Ozs7Ozs7WUFFM0NWLFdBQVcsYUFDVEQsQ0FBQUEsQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTWSxJQUFJLGtCQUNaLDhEQUFDaEIsa0RBQUlBO2dCQUFDaUIsTUFBTSxJQUFxQixPQUFqQmIsUUFBUWMsUUFBUTswQkFHNUIsNEVBQUNwQixtREFBS0E7b0JBQ0pxQixLQUNFZixRQUFRWSxJQUFJLENBQUNJLEtBQUssSUFDbEIsMEJBQTRDLE9BQWxCaEIsUUFBUVksSUFBSSxDQUFDSyxJQUFJO29CQUU3Q0MsS0FBS2xCLFFBQVFZLElBQUksQ0FBQ0ssSUFBSSxJQUFJO29CQUMxQkUsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsYUFBWTtvQkFDWkMsYUFBWTs7Ozs7Ozs7OztxQ0FLbEIsOERBQUNmO2dCQUNDZ0IsVUFBVXJCO2dCQUNWTyxTQUFTLElBQU07b0JBQ2JOLFdBQVcsSUFBSTtvQkFDZlosdURBQU1BLENBQUMsVUFBVTt3QkFBRWlDLGFBQWM7b0JBQVU7Z0JBQzdDO2dCQUNBbkIsV0FBVyxHQUlWLE9BSENILFVBQ0ksZ0NBQ0Esc0NBQXNDLEVBQzNDOzBCQUVBQSx3QkFBVSw4REFBQ1QsMERBQVdBO29CQUFDZ0MsT0FBTTs7Ozs7MkJBQVksb0JBQW9COzs7OztvQkFFakU7Ozs7Ozs7QUFHVCxDQUFDO0dBekR1QjVCOztRQUtZUCx1REFBVUE7OztLQUx0Qk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyLnRzeD81MzE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25Jbiwgc2lnbk91dCB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExvYWRpbmdEb3RzIH0gZnJvbSAnQC9jb21wb25lbnRzL2ljb25zJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IE1lbnVJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcih7XG4gIHNldFNpZGViYXJPcGVuXG59OiB7XG4gIHNldFNpZGViYXJPcGVuOiAob3BlbjogYm9vbGVhbikgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdlxuICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1kOmp1c3RpZnktZW5kIHB4LTQgaC0xNlwiXG4gICAgICBhcmlhLWxhYmVsPVwiTmF2YmFyXCJcbiAgICA+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBtZDpoaWRkZW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgdGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTBcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaWRlYmFyT3Blbih0cnVlKX1cbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gc2lkZWJhcjwvc3Bhbj5cbiAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT1cImgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICB7c3RhdHVzICE9PSAnbG9hZGluZycgJiZcbiAgICAgICAgKHNlc3Npb24/LnVzZXIgPyAoXG4gICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Nlc3Npb24udXNlcm5hbWV9YH0+XG4gICAgICAgICAgICB7LyogIHRvZG8gcmVtb3ZlIGNvbW1lbnQgd2hlbiBnZXQgZXJyb3JcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlblwiPiovfVxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmltYWdlIHx8XG4gICAgICAgICAgICAgICAgICBgaHR0cHM6Ly9hdmF0YXIudG9iaS5zaC8ke3Nlc3Npb24udXNlci5uYW1lfWBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWx0PXtzZXNzaW9uLnVzZXIubmFtZSB8fCAnVXNlcid9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImJsdXJcIlxuICAgICAgICAgICAgICAgIGJsdXJEYXRhVVJMPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFCQ0FZQUFBQWZGY1NKQUFBQURVbEVRVlFZVjJQWXNHSERmd0FITkFNUXVtdmJvZ0FBQUFCSlJVNUVya0pnZ2c9PVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7Lyo8L2E+Ki99XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICBzaWduSW4oJ2dpdGh1YicsIHsgY2FsbGJhY2tVcmw6IGAvcHJvZmlsZWAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgbG9hZGluZ1xuICAgICAgICAgICAgICAgID8gJ2JnLWdyYXktMjAwIGJvcmRlci1ncmF5LTMwMCdcbiAgICAgICAgICAgICAgICA6ICdiZy1ibGFjayBob3ZlcjpiZy13aGl0ZSBib3JkZXItYmxhY2snXG4gICAgICAgICAgICB9IHctMzYgaC04IHB5LTEgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWJsYWNrIGJvcmRlciByb3VuZGVkLW1kIHRleHQtc20gdHJhbnNpdGlvbi1hbGxgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRpbmdEb3RzIGNvbG9yPVwiZ3JheVwiIC8+IDogJ0xvZyBpbiB3aXRoIEdpdEh1Yid9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpfVxuICAgIDwvbmF2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVNlc3Npb24iLCJzaWduSW4iLCJ1c2VTdGF0ZSIsIkxvYWRpbmdEb3RzIiwiSW1hZ2UiLCJNZW51SWNvbiIsIkxpbmsiLCJOYXZiYXIiLCJzZXRTaWRlYmFyT3BlbiIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJuYXYiLCJjbGFzc05hbWUiLCJhcmlhLWxhYmVsIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJzcGFuIiwiYXJpYS1oaWRkZW4iLCJ1c2VyIiwiaHJlZiIsInVzZXJuYW1lIiwic3JjIiwiaW1hZ2UiLCJuYW1lIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwbGFjZWhvbGRlciIsImJsdXJEYXRhVVJMIiwiZGlzYWJsZWQiLCJjYWxsYmFja1VybCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/navbar.tsx\n"));

/***/ })

});