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

/***/ "./src/hooks/useFileUpload.ts":
/*!************************************!*\
  !*** ./src/hooks/useFileUpload.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useFileUpload\": function() { return /* binding */ useFileUpload; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nvar useFileUpload = function() {\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), file = ref[0], setFile = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), uploadingStatus = ref1[0], setUploadingStatus = ref1[1];\n    var uploadFile = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var data, url, newData;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setUploadingStatus(true);\n                        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.info(\"Uploading image file....\", {\n                            position: react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.POSITION.BOTTOM_LEFT\n                        });\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/upload\", {\n                                name: file === null || file === void 0 ? void 0 : file.name,\n                                type: file === null || file === void 0 ? void 0 : file.type\n                            })\n                        ];\n                    case 1:\n                        data = _state.sent().data;\n                        url = data.url;\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].put(url, file, {\n                                headers: {\n                                    \"Content-type\": file === null || file === void 0 ? void 0 : file.type,\n                                    \"Access-Control-Allow-Origin\": \"*\"\n                                }\n                            })\n                        ];\n                    case 2:\n                        newData = _state.sent();\n                        if (newData && file) {\n                            setUploadingStatus(false);\n                            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(\"Uploaded Succesfuly...\", {\n                                position: react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.POSITION.BOTTOM_LEFT\n                            });\n                            return [\n                                2,\n                                newData ? \"https://chatt-app.s3.amazonaws.com/\" + (file === null || file === void 0 ? void 0 : file.name) : null\n                            ];\n                        }\n                        setFile(null);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function uploadFile() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleUploadFileChange = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(e) {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                if (e.target.files) {\n                    setFile(e.target.files[0]);\n                }\n                return [\n                    2\n                ];\n            });\n        });\n        return function handleUploadFileChange(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        handleUploadFileChange: handleUploadFileChange,\n        uploadingStatus: uploadingStatus,\n        uploadFile: uploadFile,\n        file: file,\n        setFile: setFile\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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XSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgdXNlRmlsZVVwbG9hZCA9ICgpID0+IHtcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGU8RmlsZSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdXBsb2FkaW5nU3RhdHVzLCBzZXRVcGxvYWRpbmdTdGF0dXNdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0VXBsb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHRvYXN0LmluZm8oJ1VwbG9hZGluZyBpbWFnZSBmaWxlLi4uLicsIHtcbiAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5CT1RUT01fTEVGVCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS91cGxvYWQnLCB7XG4gICAgICBuYW1lOiBmaWxlPy5uYW1lLFxuICAgICAgdHlwZTogZmlsZT8udHlwZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHVybCA9IGRhdGEudXJsO1xuICAgIGNvbnN0IG5ld0RhdGEgPSBhd2FpdCBheGlvcy5wdXQodXJsLCBmaWxlLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiBmaWxlPy50eXBlLFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmIChuZXdEYXRhICYmIGZpbGUpIHtcbiAgICAgIHNldFVwbG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICB0b2FzdC5zdWNjZXNzKCdVcGxvYWRlZCBTdWNjZXNmdWx5Li4uJywge1xuICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uQk9UVE9NX0xFRlQsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXdEYXRhID8gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQlVDS0VUX1VSTCArIGZpbGU/Lm5hbWUgOiBudWxsO1xuICAgIH1cbiAgICBzZXRGaWxlKG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVwbG9hZEZpbGVDaGFuZ2UgPSBhc3luYyAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMpIHtcbiAgICAgIHNldEZpbGUoZS50YXJnZXQuZmlsZXNbMF0gYXMgRmlsZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaGFuZGxlVXBsb2FkRmlsZUNoYW5nZSxcbiAgICB1cGxvYWRpbmdTdGF0dXMsXG4gICAgdXBsb2FkRmlsZSxcbiAgICBmaWxlLFxuICAgIHNldEZpbGUsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbInRvYXN0IiwiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUZpbGVVcGxvYWQiLCJmaWxlIiwic2V0RmlsZSIsInVwbG9hZGluZ1N0YXR1cyIsInNldFVwbG9hZGluZ1N0YXR1cyIsInVwbG9hZEZpbGUiLCJkYXRhIiwidXJsIiwibmV3RGF0YSIsImluZm8iLCJwb3NpdGlvbiIsIlBPU0lUSU9OIiwiQk9UVE9NX0xFRlQiLCJwb3N0IiwibmFtZSIsInR5cGUiLCJwdXQiLCJoZWFkZXJzIiwic3VjY2VzcyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CVUNLRVRfVVJMIiwiaGFuZGxlVXBsb2FkRmlsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useFileUpload.ts\n"));

/***/ })

});