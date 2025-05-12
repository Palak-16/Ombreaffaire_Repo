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
exports.id = "pages/api/auth/verify-otp";
exports.ids = ["pages/api/auth/verify-otp"];
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

/***/ "(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fverify-otp&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2Fverify-otp.js&middlewareConfigBase64=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fverify-otp&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2Fverify-otp.js&middlewareConfigBase64=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api-node)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_auth_verify_otp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/auth/verify-otp.js */ \"(api-node)/./pages/api/auth/verify-otp.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_verify_otp_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_verify_otp_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/verify-otp\",\n        pathname: \"/api/auth/verify-otp\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_auth_verify_otp_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVNfQVBJJnBhZ2U9JTJGYXBpJTJGYXV0aCUyRnZlcmlmeS1vdHAmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyUyRmFwaSUyRmF1dGglMkZ2ZXJpZnktb3RwLmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNFO0FBQzFEO0FBQzJEO0FBQzNEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQywwREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsMERBQVE7QUFDcEM7QUFDTyx3QkFBd0IseUdBQW1CO0FBQ2xEO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlcy9hcGkvYXV0aC92ZXJpZnktb3RwLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL3ZlcmlmeS1vdHBcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL3ZlcmlmeS1vdHBcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiAnJyxcbiAgICAgICAgZmlsZW5hbWU6ICcnXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fverify-otp&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2Fverify-otp.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api-node)/./pages/api/auth/verify-otp.js":
/*!**************************************!*\
  !*** ./pages/api/auth/verify-otp.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/supabaseClient */ \"(api-node)/./lib/supabaseClient.js\");\n/* harmony import */ var _lib_cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/cors */ \"(api-node)/./lib/cors.js\");\n\n\nasync function handler(req, res) {\n    await (0,_lib_cors__WEBPACK_IMPORTED_MODULE_1__.runMiddleware)(req, res, _lib_cors__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    if (req.method !== 'POST') {\n        return res.status(405).json({\n            error: 'Method not allowed'\n        });\n    }\n    const { email, otp } = req.body;\n    if (!email || !otp) {\n        return res.status(400).json({\n            error: 'Email and OTP are required'\n        });\n    }\n    // Get OTP entry from DB\n    const { data, error } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].from('email_otps').select('*').eq('email', email).single();\n    if (error || !data) {\n        return res.status(400).json({\n            error: 'No OTP found for this email'\n        });\n    }\n    if (data.otp !== otp) {\n        return res.status(401).json({\n            error: 'Invalid OTP'\n        });\n    }\n    // Mark email as verified\n    await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].from('email_otps').update({\n        verified: true\n    }).eq('email', email);\n    return res.status(200).json({\n        message: 'OTP verified successfully'\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS9hdXRoL3ZlcmlmeS1vdHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1EO0FBQ0s7QUFFekMsZUFBZUcsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLE1BQU1ILHdEQUFhQSxDQUFDRSxLQUFLQyxLQUFLSixpREFBSUE7SUFFbEMsSUFBSUcsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXFCO0lBQzVEO0lBRUEsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLEdBQUcsRUFBRSxHQUFHUCxJQUFJUSxJQUFJO0lBRS9CLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxLQUFLO1FBQ2xCLE9BQU9OLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUE2QjtJQUNwRTtJQUVBLHdCQUF3QjtJQUN4QixNQUFNLEVBQUVJLElBQUksRUFBRUosS0FBSyxFQUFFLEdBQUcsTUFBTVQsZ0VBQ3ZCLENBQUMsY0FDTGUsTUFBTSxDQUFDLEtBQ1BDLEVBQUUsQ0FBQyxTQUFTTixPQUNaTyxNQUFNO0lBRVQsSUFBSVIsU0FBUyxDQUFDSSxNQUFNO1FBQ2xCLE9BQU9SLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUE4QjtJQUNyRTtJQUVBLElBQUlJLEtBQUtGLEdBQUcsS0FBS0EsS0FBSztRQUNwQixPQUFPTixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBYztJQUNyRDtJQUVBLHlCQUF5QjtJQUN6QixNQUFNVCxnRUFDQyxDQUFDLGNBQ0xrQixNQUFNLENBQUM7UUFBRUMsVUFBVTtJQUFLLEdBQ3hCSCxFQUFFLENBQUMsU0FBU047SUFFZixPQUFPTCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVZLFNBQVM7SUFBNEI7QUFDckUiLCJzb3VyY2VzIjpbIi9ob21lL3BhbGFrL0Rlc2t0b3AvUGFsYWsvb21icmUtcHJvamVjdC9iYWNrZW5kL3BhZ2VzL2FwaS9hdXRoL3ZlcmlmeS1vdHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN1cGFiYXNlIGZyb20gJy4uLy4uLy4uL2xpYi9zdXBhYmFzZUNsaWVudCc7XG5pbXBvcnQgY29ycywgeyBydW5NaWRkbGV3YXJlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2NvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGF3YWl0IHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGNvcnMpO1xuXG4gIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSk7XG4gIH1cblxuICBjb25zdCB7IGVtYWlsLCBvdHAgfSA9IHJlcS5ib2R5O1xuXG4gIGlmICghZW1haWwgfHwgIW90cCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnRW1haWwgYW5kIE9UUCBhcmUgcmVxdWlyZWQnIH0pO1xuICB9XG5cbiAgLy8gR2V0IE9UUCBlbnRyeSBmcm9tIERCXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ2VtYWlsX290cHMnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5lcSgnZW1haWwnLCBlbWFpbClcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yIHx8ICFkYXRhKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdObyBPVFAgZm91bmQgZm9yIHRoaXMgZW1haWwnIH0pO1xuICB9XG5cbiAgaWYgKGRhdGEub3RwICE9PSBvdHApIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogJ0ludmFsaWQgT1RQJyB9KTtcbiAgfVxuXG4gIC8vIE1hcmsgZW1haWwgYXMgdmVyaWZpZWRcbiAgYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgnZW1haWxfb3RwcycpXG4gICAgLnVwZGF0ZSh7IHZlcmlmaWVkOiB0cnVlIH0pXG4gICAgLmVxKCdlbWFpbCcsIGVtYWlsKTtcblxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnT1RQIHZlcmlmaWVkIHN1Y2Nlc3NmdWxseScgfSk7XG59XG4iXSwibmFtZXMiOlsic3VwYWJhc2UiLCJjb3JzIiwicnVuTWlkZGxld2FyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJlbWFpbCIsIm90cCIsImJvZHkiLCJkYXRhIiwiZnJvbSIsInNlbGVjdCIsImVxIiwic2luZ2xlIiwidXBkYXRlIiwidmVyaWZpZWQiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/auth/verify-otp.js\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fverify-otp&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2Fverify-otp.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();