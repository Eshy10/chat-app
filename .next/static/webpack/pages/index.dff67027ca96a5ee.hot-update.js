"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/PreviewContainer/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/PreviewContainer/index.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _preview_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview.module.css */ \"./src/components/PreviewContainer/preview.module.css\");\n/* harmony import */ var _preview_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_preview_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar PreviewContainer = function(param) {\n    var file = param.file, setFile = param.setFile;\n    var handleDelete = function() {\n        setFile(null);\n    };\n    return file && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_preview_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_preview_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview__imageEdit),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: URL.createObjectURL(file),\n                    alt: file.name,\n                    width: 50,\n                    height: 50,\n                    objectFit: \"contain\"\n                }, void 0, false, {\n                    fileName: \"/Users/adeshola/chat-app/src/components/PreviewContainer/index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/cancel.svg\",\n                    alt: \"user\",\n                    width: 20,\n                    height: 20,\n                    onClick: function() {\n                        return handleDelete();\n                    },\n                    className: (_preview_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview__imageIcon)\n                }, void 0, false, {\n                    fileName: \"/Users/adeshola/chat-app/src/components/PreviewContainer/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/adeshola/chat-app/src/components/PreviewContainer/index.tsx\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/adeshola/chat-app/src/components/PreviewContainer/index.tsx\",\n        lineNumber: 17,\n        columnNumber: 7\n    }, _this);\n};\n_c = PreviewContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PreviewContainer);\nvar _c;\n$RefreshReg$(_c, \"PreviewContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QcmV2aWV3Q29udGFpbmVyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDSztBQUNXO0FBTzFDLElBQU1HLGdCQUFnQixHQUFHLGdCQUE4QztRQUEzQ0MsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLE9BQU8sU0FBUEEsT0FBTztJQUN2QyxJQUFNQyxZQUFZLEdBQUcsV0FBTTtRQUN6QkQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFRCxPQUNFRCxJQUFJLGtCQUNGLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBRU4sb0VBQWlCO2tCQUMvQiw0RUFBQ0ssS0FBRztZQUFDQyxTQUFTLEVBQUVOLCtFQUE0Qjs7OEJBQzFDLDhEQUFDRCxtREFBSztvQkFDSlEsR0FBRyxFQUFFQyxHQUFHLENBQUNDLGVBQWUsQ0FBQ1AsSUFBSSxDQUFDO29CQUM5QlEsR0FBRyxFQUFFUixJQUFJLENBQUNTLElBQUk7b0JBQ2RDLEtBQUssRUFBRSxFQUFFO29CQUNUQyxNQUFNLEVBQUUsRUFBRTtvQkFDVkMsU0FBUyxFQUFFLFNBQVM7Ozs7O3lCQUNwQjs4QkFDRiw4REFBQ2YsbURBQUs7b0JBQ0pRLEdBQUcsRUFBRSxhQUFhO29CQUNsQkcsR0FBRyxFQUFDLE1BQU07b0JBQ1ZFLEtBQUssRUFBRSxFQUFFO29CQUNUQyxNQUFNLEVBQUUsRUFBRTtvQkFDVkUsT0FBTyxFQUFFOytCQUFNWCxZQUFZLEVBQUU7cUJBQUE7b0JBQzdCRSxTQUFTLEVBQUVOLCtFQUE0Qjs7Ozs7eUJBQ3ZDOzs7Ozs7aUJBQ0U7Ozs7O2FBQ0YsQ0FFUjtBQUNKLENBQUM7QUE1QktDLEtBQUFBLGdCQUFnQjtBQThCdEIsK0RBQWVBLGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1ByZXZpZXdDb250YWluZXIvaW5kZXgudHN4PzQ2NzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wcmV2aWV3Lm1vZHVsZS5jc3MnO1xuXG50eXBlIFByZXZpZXdDb250YWluZXJQcm9wcyA9IHtcbiAgZmlsZTogRmlsZSB8IG51bGw7XG4gIHNldEZpbGU6IChmaWxlOiBGaWxlIHwgbnVsbCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IFByZXZpZXdDb250YWluZXIgPSAoeyBmaWxlLCBzZXRGaWxlIH06IFByZXZpZXdDb250YWluZXJQcm9wcykgPT4ge1xuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoKSA9PiB7XG4gICAgc2V0RmlsZShudWxsKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIGZpbGUgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sncHJldmlldyddfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sncHJldmlld19faW1hZ2VFZGl0J119PlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpfVxuICAgICAgICAgICAgYWx0PXtmaWxlLm5hbWV9XG4gICAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgb2JqZWN0Rml0PXsnY29udGFpbid9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17Jy9jYW5jZWwuc3ZnJ31cbiAgICAgICAgICAgIGFsdD1cInVzZXJcIlxuICAgICAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZSgpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ3ByZXZpZXdfX2ltYWdlSWNvbiddfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJldmlld0NvbnRhaW5lcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwic3R5bGVzIiwiUHJldmlld0NvbnRhaW5lciIsImZpbGUiLCJzZXRGaWxlIiwiaGFuZGxlRGVsZXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYWx0IiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/PreviewContainer/index.tsx\n"));

/***/ })

});