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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Tabs/Tabs.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Tab/Tab.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/AccountCircle */ \"(app-pages-browser)/./node_modules/@mui/icons-material/AccountCircle.js\");\n/* harmony import */ var _mui_icons_material_PhotoOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/PhotoOutlined */ \"(app-pages-browser)/./node_modules/@mui/icons-material/PhotoOutlined.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// icons\n\n\nfunction Home() {\n    _s();\n    // type to be added\n    const [tweets, setTweets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [follow, setFollow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleChange = ()=>{\n        setFollow((follow)=>!follow);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: \"home-tabs\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        fontWeight: \"bold\",\n                        color: \"rgb(15, 20, 25)\",\n                        fontSize: 20,\n                        sx: {\n                            ml: 2,\n                            my: 2\n                        },\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        value: follow,\n                        variant: \"fullWidth\",\n                        onChange: handleChange,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                value: false,\n                                label: \"For you\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                value: true,\n                                label: \"Following\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: \"home-textarea\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    container: true,\n                    sx: {\n                        mt: 2\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            item: true,\n                            xs: 1,\n                            sx: {\n                                display: \"flex\",\n                                justifyContent: \"center\",\n                                alignItems: \"flex-start\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                fontSize: \"large\",\n                                sx: {\n                                    color: \"gray\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            item: true,\n                            xs: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    variant: \"standard\",\n                                    placeholder: \"What is happening?!\",\n                                    multiline: true,\n                                    minRows: 1,\n                                    maxRows: 4,\n                                    fullWidth: true,\n                                    InputProps: {\n                                        disableUnderline: true\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    sx: {\n                                        mt: 2,\n                                        mb: 2\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    id: \"textarea-buttons\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            id: \"insert-list\",\n                                            sx: {\n                                                float: \"left\",\n                                                display: \"flex\",\n                                                justifyContent: \"center\",\n                                                alignItems: \"center\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_PhotoOutlined__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                sx: {\n                                                    fontSize: \"1em\"\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            id: \"textarea-postbtn\",\n                                            sx: {\n                                                float: \"right\"\n                                            },\n                                            children: \"right\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"5Cx+6Vp2gS5XFrAgpLNyISekMws=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVdUI7QUFDVTtBQUVqQyxRQUFRO0FBQzBEO0FBQ0E7QUFFbkQsU0FBU1U7O0lBQ3RCLG1CQUFtQjtJQUNuQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUN2QyxNQUFNLENBQUNNLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQVU7SUFFOUMsTUFBTVEsZUFBZTtRQUNuQkQsVUFBVSxDQUFDRCxTQUFXLENBQUNBO0lBQ3pCO0lBQ0EscUJBQ0U7OzBCQUNFLDhEQUFDYixxREFBR0E7Z0JBQUNnQixJQUFHOztrQ0FDTiw4REFBQ1YscURBQVVBO3dCQUNUVyxZQUFZO3dCQUNaQyxPQUFNO3dCQUNOQyxVQUFVO3dCQUNWQyxJQUFJOzRCQUFFQyxJQUFJOzRCQUFHQyxJQUFJO3dCQUFFO2tDQUNwQjs7Ozs7O2tDQUdELDhEQUFDbEIscURBQUlBO3dCQUFDbUIsT0FBT1Y7d0JBQVFXLFNBQVE7d0JBQVlDLFVBQVVWOzswQ0FDakQsOERBQUNaLHFEQUFHQTtnQ0FBQ29CLE9BQU87Z0NBQU9HLE9BQU07Ozs7OzswQ0FDekIsOERBQUN2QixxREFBR0E7Z0NBQUNvQixPQUFPO2dDQUFNRyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzVCLDhEQUFDekIscURBQU9BOzs7OzswQkFDUiw4REFBQ0QscURBQUdBO2dCQUFDZ0IsSUFBRzswQkFDTiw0RUFBQ2QscURBQUlBO29CQUFDeUIsU0FBUztvQkFBQ1AsSUFBSTt3QkFBRVEsSUFBSTtvQkFBRTs7c0NBQzFCLDhEQUFDMUIscURBQUlBOzRCQUNIMkIsSUFBSTs0QkFDSkMsSUFBSTs0QkFDSlYsSUFBSTtnQ0FDRlcsU0FBUztnQ0FDVEMsZ0JBQWdCO2dDQUNoQkMsWUFBWTs0QkFDZDtzQ0FFQSw0RUFBQ3pCLHlFQUFpQkE7Z0NBQUNXLFVBQVM7Z0NBQVFDLElBQUk7b0NBQUVGLE9BQU87Z0NBQU87Ozs7Ozs7Ozs7O3NDQUUxRCw4REFBQ2hCLHFEQUFJQTs0QkFBQzJCLElBQUk7NEJBQUNDLEVBQUU7OzhDQUNYLDhEQUFDekIscURBQVNBO29DQUNSbUIsU0FBUTtvQ0FDUlUsYUFBWTtvQ0FDWkMsU0FBUztvQ0FDVEMsU0FBUztvQ0FDVEMsU0FBUztvQ0FDVEMsU0FBUztvQ0FDVEMsWUFBWTt3Q0FDVkMsa0JBQWtCO29DQUNwQjs7Ozs7OzhDQUVGLDhEQUFDdkMscURBQU9BO29DQUFDbUIsSUFBSTt3Q0FBRVEsSUFBSTt3Q0FBR2EsSUFBSTtvQ0FBRTs7Ozs7OzhDQUM1Qiw4REFBQ3pDLHFEQUFHQTtvQ0FBQ2dCLElBQUc7O3NEQUNOLDhEQUFDaEIscURBQUdBOzRDQUNGZ0IsSUFBRzs0Q0FDSEksSUFBSTtnREFDRnNCLE9BQU87Z0RBQ1BYLFNBQVM7Z0RBQ1RDLGdCQUFnQjtnREFDaEJDLFlBQVk7NENBQ2Q7c0RBRUEsNEVBQUN4QiwwRUFBaUJBO2dEQUFDVyxJQUFJO29EQUFFRCxVQUFVO2dEQUFNOzs7Ozs7Ozs7OztzREFFM0MsOERBQUNuQixxREFBR0E7NENBQUNnQixJQUFHOzRDQUFtQkksSUFBSTtnREFBRXNCLE9BQU87NENBQVE7c0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTakU7R0F4RXdCaEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7XG4gIEJveCxcbiAgRGl2aWRlcixcbiAgR3JpZCxcbiAgVGFiLFxuICBUYWJzLFxuICBUZXh0RmllbGQsXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBpY29uc1xuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FjY291bnRDaXJjbGVcIjtcbmltcG9ydCBQaG90b091dGxpbmVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9QaG90b091dGxpbmVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIHR5cGUgdG8gYmUgYWRkZWRcbiAgY29uc3QgW3R3ZWV0cywgc2V0VHdlZXRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZvbGxvdywgc2V0Rm9sbG93XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgc2V0Rm9sbG93KChmb2xsb3cpID0+ICFmb2xsb3cpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94IGlkPVwiaG9tZS10YWJzXCI+XG4gICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgZm9udFdlaWdodD17XCJib2xkXCJ9XG4gICAgICAgICAgY29sb3I9XCJyZ2IoMTUsIDIwLCAyNSlcIlxuICAgICAgICAgIGZvbnRTaXplPXsyMH1cbiAgICAgICAgICBzeD17eyBtbDogMiwgbXk6IDIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEhvbWVcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VGFicyB2YWx1ZT17Zm9sbG93fSB2YXJpYW50PVwiZnVsbFdpZHRoXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgPFRhYiB2YWx1ZT17ZmFsc2V9IGxhYmVsPVwiRm9yIHlvdVwiIC8+XG4gICAgICAgICAgPFRhYiB2YWx1ZT17dHJ1ZX0gbGFiZWw9XCJGb2xsb3dpbmdcIiAvPlxuICAgICAgICA8L1RhYnM+XG4gICAgICA8L0JveD5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgICA8Qm94IGlkPVwiaG9tZS10ZXh0YXJlYVwiPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3sgbXQ6IDIgfX0+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgIHhzPXsxfVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFjY291bnRDaXJjbGVJY29uIGZvbnRTaXplPVwibGFyZ2VcIiBzeD17eyBjb2xvcjogXCJncmF5XCIgfX0gLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGlzIGhhcHBlbmluZz8hXCJcbiAgICAgICAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgICAgICAgIG1pblJvd3M9ezF9XG4gICAgICAgICAgICAgIG1heFJvd3M9ezR9XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgZGlzYWJsZVVuZGVybGluZTogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RGl2aWRlciBzeD17eyBtdDogMiwgbWI6IDIgfX0gLz5cbiAgICAgICAgICAgIDxCb3ggaWQ9XCJ0ZXh0YXJlYS1idXR0b25zXCI+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBpZD1cImluc2VydC1saXN0XCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQaG90b091dGxpbmVkSWNvbiBzeD17eyBmb250U2l6ZTogXCIxZW1cIiB9fSAvPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPEJveCBpZD1cInRleHRhcmVhLXBvc3RidG5cIiBzeD17eyBmbG9hdDogXCJyaWdodFwiIH19PlxuICAgICAgICAgICAgICAgIHJpZ2h0XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCb3giLCJEaXZpZGVyIiwiR3JpZCIsIlRhYiIsIlRhYnMiLCJUZXh0RmllbGQiLCJUeXBvZ3JhcGh5IiwidXNlU3RhdGUiLCJBY2NvdW50Q2lyY2xlSWNvbiIsIlBob3RvT3V0bGluZWRJY29uIiwiSG9tZSIsInR3ZWV0cyIsInNldFR3ZWV0cyIsImZvbGxvdyIsInNldEZvbGxvdyIsImhhbmRsZUNoYW5nZSIsImlkIiwiZm9udFdlaWdodCIsImNvbG9yIiwiZm9udFNpemUiLCJzeCIsIm1sIiwibXkiLCJ2YWx1ZSIsInZhcmlhbnQiLCJvbkNoYW5nZSIsImxhYmVsIiwiY29udGFpbmVyIiwibXQiLCJpdGVtIiwieHMiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGxhY2Vob2xkZXIiLCJtdWx0aWxpbmUiLCJtaW5Sb3dzIiwibWF4Um93cyIsImZ1bGxXaWR0aCIsIklucHV0UHJvcHMiLCJkaXNhYmxlVW5kZXJsaW5lIiwibWIiLCJmbG9hdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});