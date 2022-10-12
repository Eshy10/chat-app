"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "aws-sdk/clients/s3":
/*!*************************************!*\
  !*** external "aws-sdk/clients/s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("aws-sdk/clients/s3");

/***/ }),

/***/ "(api)/./src/pages/api/upload.ts":
/*!*********************************!*\
  !*** ./src/pages/api/upload.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk/clients/s3 */ \"aws-sdk/clients/s3\");\n/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_0__);\n\nconst s3 = new (aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_0___default())({\n    region: \"us-east-1\",\n    accessKeyId: \"AKIA3T24E7ECUVUGMPSX\",\n    secretAccessKey: \"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\",\n    signatureVersion: \"v4\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    try {\n        const { name , type  } = req.body;\n        const fileParams = {\n            Bucket: \"chatt-app\",\n            Key: name,\n            Expires: 600,\n            ContentType: type\n        };\n        const url = await s3.getSignedUrlPromise(\"putObject\", fileParams);\n        res.status(200).json({\n            url\n        });\n    } catch (err) {\n        console.log(err);\n        res.status(400).json({\n            message: err\n        });\n    }\n});\nconst config = {\n    api: {\n        bodyParser: {\n            sizeLimit: \"8mb\"\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VwbG9hZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ29DO0FBRXBDLE1BQU1DLEVBQUUsR0FBRyxJQUFJRCwyREFBRSxDQUFDO0lBQ2hCRSxNQUFNLEVBQUUsV0FBVztJQUNuQkMsV0FBVyxFQUFFQyxzQkFBa0M7SUFDL0NHLGVBQWUsRUFBRUgsMENBQWtDO0lBQ25ESyxnQkFBZ0IsRUFBRSxJQUFJO0NBQ3ZCLENBQUM7QUFFRixpRUFBZSxPQUFPQyxHQUFtQixFQUFFQyxHQUFvQixHQUFLO0lBQ2xFLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixPQUFPRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNLEVBQUVDLElBQUksR0FBRUMsSUFBSSxHQUFFLEdBQUdQLEdBQUcsQ0FBQ1EsSUFBSTtRQUUvQixNQUFNQyxVQUFVLEdBQUc7WUFDakJDLE1BQU0sRUFBRWhCLFdBQW1DO1lBQzNDa0IsR0FBRyxFQUFFTixJQUFJO1lBQ1RPLE9BQU8sRUFBRSxHQUFHO1lBQ1pDLFdBQVcsRUFBRVAsSUFBSTtTQUNsQjtRQUVELE1BQU1RLEdBQUcsR0FBRyxNQUFNeEIsRUFBRSxDQUFDeUIsbUJBQW1CLENBQUMsV0FBVyxFQUFFUCxVQUFVLENBQUM7UUFFakVSLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRVcsR0FBRztTQUFFLENBQUMsQ0FBQztJQUNoQyxFQUFFLE9BQU9FLEdBQUcsRUFBRTtRQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDLENBQUM7UUFDakJoQixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRVksR0FBRztTQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0FBQ0gsQ0FBQyxFQUFDO0FBRUssTUFBTUcsTUFBTSxHQUFHO0lBQ3BCQyxHQUFHLEVBQUU7UUFDSEMsVUFBVSxFQUFFO1lBQ1ZDLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGV4YW1wbGVzL3RycGMtbmV4dC1wcmlzbWEtc3RhcnRlci8uL3NyYy9wYWdlcy9hcGkvdXBsb2FkLnRzPzk4MWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IFMzIGZyb20gJ2F3cy1zZGsvY2xpZW50cy9zMyc7XG5cbmNvbnN0IHMzID0gbmV3IFMzKHtcbiAgcmVnaW9uOiAndXMtZWFzdC0xJyxcbiAgYWNjZXNzS2V5SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FDQ0VTU19LRVksXG4gIHNlY3JldEFjY2Vzc0tleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VDUkVUX0tFWSxcbiAgc2lnbmF0dXJlVmVyc2lvbjogJ3Y0Jyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IG5hbWUsIHR5cGUgfSA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3QgZmlsZVBhcmFtcyA9IHtcbiAgICAgIEJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQlVDS0VUX05BTUUsXG4gICAgICBLZXk6IG5hbWUsXG4gICAgICBFeHBpcmVzOiA2MDAsXG4gICAgICBDb250ZW50VHlwZTogdHlwZSxcbiAgICB9O1xuXG4gICAgY29uc3QgdXJsID0gYXdhaXQgczMuZ2V0U2lnbmVkVXJsUHJvbWlzZSgncHV0T2JqZWN0JywgZmlsZVBhcmFtcyk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHVybCB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IGVyciB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgYm9keVBhcnNlcjoge1xuICAgICAgc2l6ZUxpbWl0OiAnOG1iJywgLy8gU2V0IGRlc2lyZWQgdmFsdWUgaGVyZVxuICAgIH0sXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIlMzIiwiczMiLCJyZWdpb24iLCJhY2Nlc3NLZXlJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BQ0NFU1NfS0VZIiwic2VjcmV0QWNjZXNzS2V5IiwiTkVYVF9QVUJMSUNfU0VDUkVUX0tFWSIsInNpZ25hdHVyZVZlcnNpb24iLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsIm5hbWUiLCJ0eXBlIiwiYm9keSIsImZpbGVQYXJhbXMiLCJCdWNrZXQiLCJORVhUX1BVQkxJQ19CVUNLRVRfTkFNRSIsIktleSIsIkV4cGlyZXMiLCJDb250ZW50VHlwZSIsInVybCIsImdldFNpZ25lZFVybFByb21pc2UiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInNpemVMaW1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/upload.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/upload.ts"));
module.exports = __webpack_exports__;

})();