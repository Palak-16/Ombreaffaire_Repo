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
exports.id = "pages/api/auth/send-otp";
exports.ids = ["pages/api/auth/send-otp"];
exports.modules = {

/***/ "(api-node)/./lib/cors.js":
/*!*********************!*\
  !*** ./lib/cors.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   runMiddleware: () => (/* binding */ runMiddleware)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n// backend/lib/cors.js\n\n// Initialize the CORS middleware\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    origin: 'http://localhost:3000',\n    methods: [\n        'POST',\n        'GET',\n        'OPTIONS'\n    ]\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cors);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9jb3JzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQkFBc0I7QUFDRTtBQUV4QixpQ0FBaUM7QUFDakMsTUFBTUMsT0FBT0QsMkNBQUlBLENBQUM7SUFDaEJFLFFBQVE7SUFDUkMsU0FBUztRQUFDO1FBQVE7UUFBTztLQUFVO0FBQ3JDO0FBRU8sU0FBU0MsY0FBY0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEVBQUU7SUFDeEMsT0FBTyxJQUFJQyxRQUFRLENBQUNDLFNBQVNDO1FBQzNCSCxHQUFHRixLQUFLQyxLQUFLLENBQUNLO1lBQ1osSUFBSUEsa0JBQWtCQyxPQUFPO2dCQUMzQixPQUFPRixPQUFPQztZQUNoQjtZQUNBLE9BQU9GLFFBQVFFO1FBQ2pCO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlVixJQUFJQSxFQUFDIiwic291cmNlcyI6WyIvaG9tZS9wYWxhay9EZXNrdG9wL1BhbGFrL29tYnJlLXByb2plY3QvYmFja2VuZC9saWIvY29ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBiYWNrZW5kL2xpYi9jb3JzLmpzXG5pbXBvcnQgQ29ycyBmcm9tICdjb3JzJztcblxuLy8gSW5pdGlhbGl6ZSB0aGUgQ09SUyBtaWRkbGV3YXJlXG5jb25zdCBjb3JzID0gQ29ycyh7XG4gIG9yaWdpbjogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsIC8vIGFsbG93IGZyb250ZW5kXG4gIG1ldGhvZHM6IFsnUE9TVCcsICdHRVQnLCAnT1BUSU9OUyddLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBmbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZuKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvcnM7XG4iXSwibmFtZXMiOlsiQ29ycyIsImNvcnMiLCJvcmlnaW4iLCJtZXRob2RzIiwicnVuTWlkZGxld2FyZSIsInJlcSIsInJlcyIsImZuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./lib/cors.js\n");

/***/ }),

/***/ "(api-node)/./lib/supabaseClient.js":
/*!*******************************!*\
  !*** ./lib/supabaseClient.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://zjmmhgkmculcpgmjopbc.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqbW1oZ2ttY3VsY3BnbWpvcGJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MzY5NjcsImV4cCI6MjA2MjIxMjk2N30.fWP7Y5L9FwJn1EJTkGnE56giZx-BbR7z3_PdwFJ1gtA\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9zdXBhYmFzZUNsaWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUQ7QUFFckQsTUFBTUMsV0FBV0QsbUVBQVlBLENBQzNCRSwwQ0FBd0IsRUFDeEJBLGtOQUF3QjtBQUcxQixpRUFBZUQsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsiL2hvbWUvcGFsYWsvRGVza3RvcC9QYWxhay9vbWJyZS1wcm9qZWN0L2JhY2tlbmQvbGliL3N1cGFiYXNlQ2xpZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5cbmNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KFxuICBwcm9jZXNzLmVudi5TVVBBQkFTRV9VUkwsXG4gIHByb2Nlc3MuZW52LlNVUEFCQVNFX0tFWVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc3VwYWJhc2U7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50Iiwic3VwYWJhc2UiLCJwcm9jZXNzIiwiZW52IiwiU1VQQUJBU0VfVVJMIiwiU1VQQUJBU0VfS0VZIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api-node)/./lib/supabaseClient.js\n");

/***/ }),

/***/ "(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fsend-otp&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2Fsend-otp.js&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fsend-otp&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2Fsend-otp.js&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api-node)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_auth_send_otp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/auth/send-otp.js */ \"(api-node)/./pages/api/auth/send-otp.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_send_otp_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_send_otp_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/send-otp\",\n        pathname: \"/api/auth/send-otp\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_auth_send_otp_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVNfQVBJJnBhZ2U9JTJGYXBpJTJGYXV0aCUyRnNlbmQtb3RwJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlMkZhcGklMkZhdXRoJTJGc2VuZC1vdHAuanMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ0U7QUFDMUQ7QUFDeUQ7QUFDekQ7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLHdEQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsd0VBQUssQ0FBQyx3REFBUTtBQUNwQztBQUNPLHdCQUF3Qix5R0FBbUI7QUFDbEQ7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzL2FwaS9hdXRoL3NlbmQtb3RwLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL3NlbmQtb3RwXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9zZW5kLW90cFwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6ICcnLFxuICAgICAgICBmaWxlbmFtZTogJydcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fsend-otp&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2Fsend-otp.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api-node)/./pages/api/auth/send-otp.js":
/*!************************************!*\
  !*** ./pages/api/auth/send-otp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/supabaseClient */ \"(api-node)/./lib/supabaseClient.js\");\n/* harmony import */ var _lib_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/cors */ \"(api-node)/./lib/cors.js\");\n\n\n // ✅ Add this\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n    service: 'gmail',\n    auth: {\n        user: process.env.GMAIL_USER,\n        pass: process.env.GMAIL_PASS\n    }\n});\nasync function handler(req, res) {\n    await (0,_lib_cors__WEBPACK_IMPORTED_MODULE_2__.runMiddleware)(req, res, _lib_cors__WEBPACK_IMPORTED_MODULE_2__[\"default\"]); // ✅ Add this as the first line inside handler\n    if (req.method !== 'POST') return res.status(405).json({\n        error: 'Method not allowed'\n    });\n    const { email } = req.body;\n    if (!email) return res.status(400).json({\n        error: 'Email is required'\n    });\n    const otp = Math.floor(100000 + Math.random() * 900000).toString();\n    await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_1__[\"default\"].from('email_otps').upsert({\n        email,\n        otp,\n        verified: false,\n        created_at: new Date().toISOString()\n    });\n    const mailOptions = {\n        from: process.env.GMAIL_USER,\n        to: email,\n        subject: 'Your OTP Code',\n        html: `<p>Your OTP is <strong>${otp}</strong>. It expires in 10 minutes.</p>`\n    };\n    try {\n        await transporter.sendMail(mailOptions);\n        return res.status(200).json({\n            message: 'OTP sent successfully'\n        });\n    } catch (err) {\n        console.error('Email send error:', err);\n        return res.status(500).json({\n            error: 'Failed to send OTP email'\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS9hdXRoL3NlbmQtb3RwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9DO0FBQ2U7QUFDSyxDQUFDLGFBQWE7QUFHdEUsTUFBTUksY0FBY0osaUVBQTBCLENBQUM7SUFDN0NNLFNBQVM7SUFDVEMsTUFBTTtRQUNKQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDNUJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csVUFBVTtJQUM5QjtBQUNGO0FBRWUsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBRTVDLE1BQU1iLHdEQUFhQSxDQUFDWSxLQUFLQyxLQUFLZCxpREFBSUEsR0FBRyw4Q0FBOEM7SUFFbkYsSUFBSWEsSUFBSUUsTUFBTSxLQUFLLFFBQVEsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFQyxPQUFPO0lBQXFCO0lBRXJGLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdOLElBQUlPLElBQUk7SUFDMUIsSUFBSSxDQUFDRCxPQUFPLE9BQU9MLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFvQjtJQUVyRSxNQUFNRyxNQUFNQyxLQUFLQyxLQUFLLENBQUMsU0FBU0QsS0FBS0UsTUFBTSxLQUFLLFFBQVFDLFFBQVE7SUFFaEUsTUFBTTFCLGdFQUNDLENBQUMsY0FDTDRCLE1BQU0sQ0FBQztRQUFFUjtRQUFPRTtRQUFLTyxVQUFVO1FBQU9DLFlBQVksSUFBSUMsT0FBT0MsV0FBVztJQUFHO0lBRTlFLE1BQU1DLGNBQWM7UUFDbEJOLE1BQU1uQixRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDNUJ3QixJQUFJZDtRQUNKZSxTQUFTO1FBQ1RDLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRWQsSUFBSSx3Q0FBd0MsQ0FBQztJQUMvRTtJQUVBLElBQUk7UUFDRixNQUFNbkIsWUFBWWtDLFFBQVEsQ0FBQ0o7UUFDM0IsT0FBT2xCLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRW9CLFNBQVM7UUFBd0I7SUFDakUsRUFBRSxPQUFPQyxLQUFLO1FBQ1pDLFFBQVFyQixLQUFLLENBQUMscUJBQXFCb0I7UUFDbkMsT0FBT3hCLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUEyQjtJQUNsRTtBQUNGIiwic291cmNlcyI6WyIvaG9tZS9wYWxhay9EZXNrdG9wL1BhbGFrL29tYnJlLXByb2plY3QvYmFja2VuZC9wYWdlcy9hcGkvYXV0aC9zZW5kLW90cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcbmltcG9ydCBzdXBhYmFzZSBmcm9tICcuLi8uLi8uLi9saWIvc3VwYWJhc2VDbGllbnQnO1xuaW1wb3J0IGNvcnMsIHsgcnVuTWlkZGxld2FyZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9jb3JzJzsgLy8g4pyFIEFkZCB0aGlzXG5cblxuY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gIHNlcnZpY2U6ICdnbWFpbCcsXG4gIGF1dGg6IHtcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5HTUFJTF9VU0VSLFxuICAgIHBhc3M6IHByb2Nlc3MuZW52LkdNQUlMX1BBU1MsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuXG4gIGF3YWl0IHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGNvcnMpOyAvLyDinIUgQWRkIHRoaXMgYXMgdGhlIGZpcnN0IGxpbmUgaW5zaWRlIGhhbmRsZXJcblxuICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSk7XG5cbiAgY29uc3QgeyBlbWFpbCB9ID0gcmVxLmJvZHk7XG4gIGlmICghZW1haWwpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnRW1haWwgaXMgcmVxdWlyZWQnIH0pO1xuXG4gIGNvbnN0IG90cCA9IE1hdGguZmxvb3IoMTAwMDAwICsgTWF0aC5yYW5kb20oKSAqIDkwMDAwMCkudG9TdHJpbmcoKTtcblxuICBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKCdlbWFpbF9vdHBzJylcbiAgICAudXBzZXJ0KHsgZW1haWwsIG90cCwgdmVyaWZpZWQ6IGZhbHNlLCBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgfSk7XG5cbiAgY29uc3QgbWFpbE9wdGlvbnMgPSB7XG4gICAgZnJvbTogcHJvY2Vzcy5lbnYuR01BSUxfVVNFUixcbiAgICB0bzogZW1haWwsXG4gICAgc3ViamVjdDogJ1lvdXIgT1RQIENvZGUnLFxuICAgIGh0bWw6IGA8cD5Zb3VyIE9UUCBpcyA8c3Ryb25nPiR7b3RwfTwvc3Ryb25nPi4gSXQgZXhwaXJlcyBpbiAxMCBtaW51dGVzLjwvcD5gLFxuICB9O1xuXG4gIHRyeSB7XG4gICAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMpO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdPVFAgc2VudCBzdWNjZXNzZnVsbHknIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFbWFpbCBzZW5kIGVycm9yOicsIGVycik7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gc2VuZCBPVFAgZW1haWwnIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsibm9kZW1haWxlciIsInN1cGFiYXNlIiwiY29ycyIsInJ1bk1pZGRsZXdhcmUiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInNlcnZpY2UiLCJhdXRoIiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJHTUFJTF9VU0VSIiwicGFzcyIsIkdNQUlMX1BBU1MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiZW1haWwiLCJib2R5Iiwib3RwIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJmcm9tIiwidXBzZXJ0IiwidmVyaWZpZWQiLCJjcmVhdGVkX2F0IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwibWFpbE9wdGlvbnMiLCJ0byIsInN1YmplY3QiLCJodG1sIiwic2VuZE1haWwiLCJtZXNzYWdlIiwiZXJyIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/auth/send-otp.js\n");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fsend-otp&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2Fsend-otp.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();