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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Tabs/Tabs.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Tab/Tab.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Select/Select.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/AccountCircle */ \"(app-pages-browser)/./node_modules/@mui/icons-material/AccountCircle.js\");\n/* harmony import */ var _mui_icons_material_PhotoOutlined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/PhotoOutlined */ \"(app-pages-browser)/./node_modules/@mui/icons-material/PhotoOutlined.js\");\n/* harmony import */ var _mui_icons_material_GifBoxOutlined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/GifBoxOutlined */ \"(app-pages-browser)/./node_modules/@mui/icons-material/GifBoxOutlined.js\");\n/* harmony import */ var _mui_icons_material_BallotOutlined__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/BallotOutlined */ \"(app-pages-browser)/./node_modules/@mui/icons-material/BallotOutlined.js\");\n/* harmony import */ var _mui_icons_material_SentimentSatisfiedOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/SentimentSatisfiedOutlined */ \"(app-pages-browser)/./node_modules/@mui/icons-material/SentimentSatisfiedOutlined.js\");\n/* harmony import */ var _mui_icons_material_CalendarMonthOutlined__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/CalendarMonthOutlined */ \"(app-pages-browser)/./node_modules/@mui/icons-material/CalendarMonthOutlined.js\");\n/* harmony import */ var _mui_icons_material_LocationOnOutlined__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/icons-material/LocationOnOutlined */ \"(app-pages-browser)/./node_modules/@mui/icons-material/LocationOnOutlined.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// icons\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    // type to be added\n    const [tweets, setTweets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [follow, setFollow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [audience, setAudience] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Everyone\");\n    const handleFollow = ()=>{\n        setFollow((follow)=>!follow);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: \"home-tabs\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        fontWeight: \"bold\",\n                        color: \"rgb(15, 20, 25)\",\n                        fontSize: 20,\n                        sx: {\n                            ml: 2,\n                            my: 2\n                        },\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        value: follow,\n                        variant: \"fullWidth\",\n                        onChange: handleFollow,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                value: false,\n                                label: \"For you\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                value: true,\n                                label: \"Following\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: \"home-textarea\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    container: true,\n                    sx: {\n                        mt: 2\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            item: true,\n                            xs: 1,\n                            sx: {\n                                display: \"flex\",\n                                justifyContent: \"center\",\n                                alignItems: \"flex-start\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                fontSize: \"large\",\n                                sx: {\n                                    color: \"gray\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            item: true,\n                            xs: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    size: \"small\",\n                                    sx: {\n                                        borderRadius: \"16px\"\n                                    },\n                                    value: audience,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        value: \"Everyone\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            color: \"primary\",\n                                            children: \"Every one\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    variant: \"standard\",\n                                    placeholder: \"What is happening?!\",\n                                    multiline: true,\n                                    minRows: 1,\n                                    maxRows: 4,\n                                    fullWidth: true,\n                                    InputProps: {\n                                        disableUnderline: true\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    sx: {\n                                        mt: 2,\n                                        mb: 2\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    id: \"textarea-buttons\",\n                                    sx: {\n                                        display: \"flex\",\n                                        justifyContent: \"space-between\",\n                                        alignItems: \"center\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            id: \"insert-list\",\n                                            sx: {\n                                                display: \"flex\",\n                                                justifyContent: \"center\",\n                                                alignItems: \"center\",\n                                                gap: \"13px\"\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_PhotoOutlined__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                                    color: \"primary\",\n                                                    sx: {\n                                                        fontSize: \"1.5em\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_GifBoxOutlined__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                                    color: \"primary\",\n                                                    sx: {\n                                                        fontSize: \"1.5em\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_BallotOutlined__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                                    color: \"primary\",\n                                                    sx: {\n                                                        fontSize: \"1.5em\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                                    lineNumber: 105,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_SentimentSatisfiedOutlined__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                                                    color: \"primary\",\n                                                    sx: {\n                                                        fontSize: \"1.5em\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_CalendarMonthOutlined__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n                                                    color: \"primary\",\n                                                    sx: {\n                                                        fontSize: \"1.5em\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                                    lineNumber: 113,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_LocationOnOutlined__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n                                                    color: \"primary\",\n                                                    sx: {\n                                                        fontSize: \"1.5em\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                                    lineNumber: 117,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            id: \"textarea-postbtn\",\n                                            sx: {\n                                                display: \"flex\",\n                                                justifyContent: \"center\",\n                                                alignItems: \"center\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n                                                size: \"small\",\n                                                sx: {\n                                                    borderRadius: \"100px\"\n                                                },\n                                                variant: \"contained\",\n                                                children: \"Post\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                                lineNumber: 130,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                            lineNumber: 122,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                sx: {\n                    mt: 1\n                }\n            }, void 0, false, {\n                fileName: \"/Users/hanfung/Documents/project/twitter_clone/client/app/page.tsx\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"PEJ3URyygmGViXV/66tfL3gH+Zg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTTtvREFDTkUsSUFBSTt3REFBRUQsVUFBVTtvREFBUTs7Ozs7OzhEQUUxQiw4REFBQ2QsdUZBQThCQTtvREFDN0JhLE9BQU07b0RBQ05FLElBQUk7d0RBQUVELFVBQVU7b0RBQVE7Ozs7Ozs4REFFMUIsOERBQUNiLGtGQUF5QkE7b0RBQ3hCWSxPQUFNO29EQUNORSxJQUFJO3dEQUFFRCxVQUFVO29EQUFROzs7Ozs7OERBRTFCLDhEQUFDWiwrRUFBc0JBO29EQUNyQlcsT0FBTTtvREFDTkUsSUFBSTt3REFBRUQsVUFBVTtvREFBUTs7Ozs7Ozs7Ozs7O3NEQUc1Qiw4REFBQzdCLHFEQUFHQTs0Q0FDRjBCLElBQUc7NENBQ0hJLElBQUk7Z0RBQ0ZXLFNBQVM7Z0RBQ1RDLGdCQUFnQjtnREFDaEJDLFlBQVk7NENBQ2Q7c0RBRUEsNEVBQUMxQyxzREFBTUE7Z0RBQ0wyQyxNQUFLO2dEQUNMZCxJQUFJO29EQUFFZSxjQUFjO2dEQUFRO2dEQUM1QlgsU0FBUTswREFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRWCw4REFBQ2hDLHFEQUFPQTtnQkFBQzRCLElBQUk7b0JBQUVRLElBQUk7Z0JBQUU7Ozs7Ozs7O0FBRzNCO0dBdkh3QnBCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgRGl2aWRlcixcbiAgR3JpZCxcbiAgTWVudUl0ZW0sXG4gIFNlbGVjdCxcbiAgVGFiLFxuICBUYWJzLFxuICBUZXh0RmllbGQsXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBpY29uc1xuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FjY291bnRDaXJjbGVcIjtcbmltcG9ydCBQaG90b091dGxpbmVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9QaG90b091dGxpbmVkXCI7XG5pbXBvcnQgR2lmQm94T3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0dpZkJveE91dGxpbmVkXCI7XG5pbXBvcnQgQmFsbG90T3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0JhbGxvdE91dGxpbmVkXCI7XG5pbXBvcnQgU2VudGltZW50U2F0aXNmaWVkT3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NlbnRpbWVudFNhdGlzZmllZE91dGxpbmVkXCI7XG5pbXBvcnQgQ2FsZW5kYXJNb250aE91dGxpbmVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9DYWxlbmRhck1vbnRoT3V0bGluZWRcIjtcbmltcG9ydCBMb2NhdGlvbk9uT3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xvY2F0aW9uT25PdXRsaW5lZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyB0eXBlIHRvIGJlIGFkZGVkXG4gIGNvbnN0IFt0d2VldHMsIHNldFR3ZWV0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmb2xsb3csIHNldEZvbGxvd10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFthdWRpZW5jZSwgc2V0QXVkaWVuY2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIkV2ZXJ5b25lXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUZvbGxvdyA9ICgpID0+IHtcbiAgICBzZXRGb2xsb3coKGZvbGxvdykgPT4gIWZvbGxvdyk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggaWQ9XCJob21lLXRhYnNcIj5cbiAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICBmb250V2VpZ2h0PXtcImJvbGRcIn1cbiAgICAgICAgICBjb2xvcj1cInJnYigxNSwgMjAsIDI1KVwiXG4gICAgICAgICAgZm9udFNpemU9ezIwfVxuICAgICAgICAgIHN4PXt7IG1sOiAyLCBteTogMiB9fVxuICAgICAgICA+XG4gICAgICAgICAgSG9tZVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUYWJzIHZhbHVlPXtmb2xsb3d9IHZhcmlhbnQ9XCJmdWxsV2lkdGhcIiBvbkNoYW5nZT17aGFuZGxlRm9sbG93fT5cbiAgICAgICAgICA8VGFiIHZhbHVlPXtmYWxzZX0gbGFiZWw9XCJGb3IgeW91XCIgLz5cbiAgICAgICAgICA8VGFiIHZhbHVlPXt0cnVlfSBsYWJlbD1cIkZvbGxvd2luZ1wiIC8+XG4gICAgICAgIDwvVGFicz5cbiAgICAgIDwvQm94PlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDxCb3ggaWQ9XCJob21lLXRleHRhcmVhXCI+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzeD17eyBtdDogMiB9fT5cbiAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgeHM9ezF9XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QWNjb3VudENpcmNsZUljb24gZm9udFNpemU9XCJsYXJnZVwiIHN4PXt7IGNvbG9yOiBcImdyYXlcIiB9fSAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxuICAgICAgICAgICAgPFNlbGVjdCBzaXplPVwic21hbGxcIiBzeD17eyBib3JkZXJSYWRpdXM6IFwiMTZweFwiIH19IHZhbHVlPXthdWRpZW5jZX0+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17XCJFdmVyeW9uZVwifT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInByaW1hcnlcIj5FdmVyeSBvbmU8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGlzIGhhcHBlbmluZz8hXCJcbiAgICAgICAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgICAgICAgIG1pblJvd3M9ezF9XG4gICAgICAgICAgICAgIG1heFJvd3M9ezR9XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgZGlzYWJsZVVuZGVybGluZTogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RGl2aWRlciBzeD17eyBtdDogMiwgbWI6IDIgfX0gLz5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgaWQ9XCJ0ZXh0YXJlYS1idXR0b25zXCJcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGlkPVwiaW5zZXJ0LWxpc3RcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIGdhcDogXCIxM3B4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQaG90b091dGxpbmVkSWNvbiBjb2xvcj1cInByaW1hcnlcIiBzeD17eyBmb250U2l6ZTogXCIxLjVlbVwiIH19IC8+XG4gICAgICAgICAgICAgICAgPEdpZkJveE91dGxpbmVkSWNvblxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiBcIjEuNWVtXCIgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCYWxsb3RPdXRsaW5lZEljb25cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBzeD17eyBmb250U2l6ZTogXCIxLjVlbVwiIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2VudGltZW50U2F0aXNmaWVkT3V0bGluZWRJY29uXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgc3g9e3sgZm9udFNpemU6IFwiMS41ZW1cIiB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPENhbGVuZGFyTW9udGhPdXRsaW5lZEljb25cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBzeD17eyBmb250U2l6ZTogXCIxLjVlbVwiIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TG9jYXRpb25Pbk91dGxpbmVkSWNvblxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiBcIjEuNWVtXCIgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGlkPVwidGV4dGFyZWEtcG9zdGJ0blwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgc3g9e3sgYm9yZGVyUmFkaXVzOiBcIjEwMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFBvc3RcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQm94PlxuICAgICAgPERpdmlkZXIgc3g9e3sgbXQ6IDEgfX0gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJEaXZpZGVyIiwiR3JpZCIsIk1lbnVJdGVtIiwiU2VsZWN0IiwiVGFiIiwiVGFicyIsIlRleHRGaWVsZCIsIlR5cG9ncmFwaHkiLCJ1c2VTdGF0ZSIsIkFjY291bnRDaXJjbGVJY29uIiwiUGhvdG9PdXRsaW5lZEljb24iLCJHaWZCb3hPdXRsaW5lZEljb24iLCJCYWxsb3RPdXRsaW5lZEljb24iLCJTZW50aW1lbnRTYXRpc2ZpZWRPdXRsaW5lZEljb24iLCJDYWxlbmRhck1vbnRoT3V0bGluZWRJY29uIiwiTG9jYXRpb25Pbk91dGxpbmVkSWNvbiIsIkhvbWUiLCJ0d2VldHMiLCJzZXRUd2VldHMiLCJmb2xsb3ciLCJzZXRGb2xsb3ciLCJhdWRpZW5jZSIsInNldEF1ZGllbmNlIiwiaGFuZGxlRm9sbG93IiwiaWQiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJmb250U2l6ZSIsInN4IiwibWwiLCJteSIsInZhbHVlIiwidmFyaWFudCIsIm9uQ2hhbmdlIiwibGFiZWwiLCJjb250YWluZXIiLCJtdCIsIml0ZW0iLCJ4cyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJzaXplIiwiYm9yZGVyUmFkaXVzIiwicGxhY2Vob2xkZXIiLCJtdWx0aWxpbmUiLCJtaW5Sb3dzIiwibWF4Um93cyIsImZ1bGxXaWR0aCIsIklucHV0UHJvcHMiLCJkaXNhYmxlVW5kZXJsaW5lIiwibWIiLCJnYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});