"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Tabs/Tabs.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Tab/Tab.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    // type to be added\n    const [tweets, setTweets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [follow, setFollow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleChange = ()=>{\n        setFollow((follow)=>!follow);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: \"home-tabs\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        fontWeight: \"bold\",\n                        color: \"rgb(15, 20, 25)\",\n                        fontSize: 20,\n                        sx: {\n                            ml: 2,\n                            my: 2\n                        },\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        value: follow,\n                        variant: \"fullWidth\",\n                        onChange: handleChange,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                value: false,\n                                label: \"For you\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                value: true,\n                                label: \"Following\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                placeholder: \"What is happening?!\",\n                multiline: true,\n                rows: 1,\n                maxRows: 4,\n                fullWidth: true\n            }, void 0, false, {\n                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"5Cx+6Vp2gS5XFrAgpLNyISekMws=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFK0U7QUFDOUM7QUFFbEIsU0FBU087O0lBQ3RCLG1CQUFtQjtJQUNuQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUN2QyxNQUFNLENBQUNJLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQVU7SUFFOUMsTUFBTU0sZUFBZTtRQUNuQkQsVUFBVSxDQUFDRCxTQUFXLENBQUNBO0lBQ3pCO0lBQ0EscUJBQ0U7OzBCQUNFLDhEQUFDVixxREFBR0E7Z0JBQUNhLElBQUc7O2tDQUNOLDhEQUFDUixxREFBVUE7d0JBQ1RTLFlBQVk7d0JBQ1pDLE9BQU07d0JBQ05DLFVBQVU7d0JBQ1ZDLElBQUk7NEJBQUVDLElBQUk7NEJBQUdDLElBQUk7d0JBQUU7a0NBQ3BCOzs7Ozs7a0NBR0QsOERBQUNoQixxREFBSUE7d0JBQUNpQixPQUFPVjt3QkFBUVcsU0FBUTt3QkFBWUMsVUFBVVY7OzBDQUNqRCw4REFBQ1YscURBQUdBO2dDQUFDa0IsT0FBTztnQ0FBT0csT0FBTTs7Ozs7OzBDQUN6Qiw4REFBQ3JCLHFEQUFHQTtnQ0FBQ2tCLE9BQU87Z0NBQU1HLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHNUIsOERBQUN0QixxREFBT0E7Ozs7OzBCQUNSLDhEQUFDRyxxREFBU0E7Z0JBQ1JvQixhQUFZO2dCQUNaQyxTQUFTO2dCQUNUQyxNQUFNO2dCQUNOQyxTQUFTO2dCQUNUQyxTQUFTOzs7Ozs7OztBQUlqQjtHQWxDd0JyQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgQm94LCBEaXZpZGVyLCBUYWIsIFRhYnMsIFRleHRGaWVsZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyB0eXBlIHRvIGJlIGFkZGVkXG4gIGNvbnN0IFt0d2VldHMsIHNldFR3ZWV0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmb2xsb3csIHNldEZvbGxvd10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKCkgPT4ge1xuICAgIHNldEZvbGxvdygoZm9sbG93KSA9PiAhZm9sbG93KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveCBpZD1cImhvbWUtdGFic1wiPlxuICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgIGZvbnRXZWlnaHQ9e1wiYm9sZFwifVxuICAgICAgICAgIGNvbG9yPVwicmdiKDE1LCAyMCwgMjUpXCJcbiAgICAgICAgICBmb250U2l6ZT17MjB9XG4gICAgICAgICAgc3g9e3sgbWw6IDIsIG15OiAyIH19XG4gICAgICAgID5cbiAgICAgICAgICBIb21lXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFRhYnMgdmFsdWU9e2ZvbGxvd30gdmFyaWFudD1cImZ1bGxXaWR0aFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgIDxUYWIgdmFsdWU9e2ZhbHNlfSBsYWJlbD1cIkZvciB5b3VcIiAvPlxuICAgICAgICAgIDxUYWIgdmFsdWU9e3RydWV9IGxhYmVsPVwiRm9sbG93aW5nXCIgLz5cbiAgICAgICAgPC9UYWJzPlxuICAgICAgPC9Cb3g+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgaXMgaGFwcGVuaW5nPyFcIlxuICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgcm93cz17MX1cbiAgICAgICAgbWF4Um93cz17NH1cbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJveCIsIkRpdmlkZXIiLCJUYWIiLCJUYWJzIiwiVGV4dEZpZWxkIiwiVHlwb2dyYXBoeSIsInVzZVN0YXRlIiwiSG9tZSIsInR3ZWV0cyIsInNldFR3ZWV0cyIsImZvbGxvdyIsInNldEZvbGxvdyIsImhhbmRsZUNoYW5nZSIsImlkIiwiZm9udFdlaWdodCIsImNvbG9yIiwiZm9udFNpemUiLCJzeCIsIm1sIiwibXkiLCJ2YWx1ZSIsInZhcmlhbnQiLCJvbkNoYW5nZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJtdWx0aWxpbmUiLCJyb3dzIiwibWF4Um93cyIsImZ1bGxXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});