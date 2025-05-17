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
exports.id = "pages/api/auth/validate-reset-token";
exports.ids = ["pages/api/auth/validate-reset-token"];
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

/***/ "(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fvalidate-reset-token&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2Fvalidate-reset-token.js&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fvalidate-reset-token&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2Fvalidate-reset-token.js&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api-node)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_auth_validate_reset_token_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/auth/validate-reset-token.js */ \"(api-node)/./pages/api/auth/validate-reset-token.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_validate_reset_token_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_validate_reset_token_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/validate-reset-token\",\n        pathname: \"/api/auth/validate-reset-token\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_auth_validate_reset_token_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVNfQVBJJnBhZ2U9JTJGYXBpJTJGYXV0aCUyRnZhbGlkYXRlLXJlc2V0LXRva2VuJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlMkZhcGklMkZhdXRoJTJGdmFsaWRhdGUtcmVzZXQtdG9rZW4uanMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ0U7QUFDMUQ7QUFDcUU7QUFDckU7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLG9FQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsd0VBQUssQ0FBQyxvRUFBUTtBQUNwQztBQUNPLHdCQUF3Qix5R0FBbUI7QUFDbEQ7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzL2FwaS9hdXRoL3ZhbGlkYXRlLXJlc2V0LXRva2VuLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL3ZhbGlkYXRlLXJlc2V0LXRva2VuXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC92YWxpZGF0ZS1yZXNldC10b2tlblwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6ICcnLFxuICAgICAgICBmaWxlbmFtZTogJydcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fvalidate-reset-token&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2Fvalidate-reset-token.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api-node)/./pages/api/auth/validate-reset-token.js":
/*!************************************************!*\
  !*** ./pages/api/auth/validate-reset-token.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/supabaseClient */ \"(api-node)/./lib/supabaseClient.js\");\n/* harmony import */ var _lib_cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/cors */ \"(api-node)/./lib/cors.js\");\n\n\nasync function handler(req, res) {\n    await (0,_lib_cors__WEBPACK_IMPORTED_MODULE_1__.runMiddleware)(req, res, _lib_cors__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    if (req.method !== 'POST') {\n        return res.status(405).json({\n            error: 'Method not allowed'\n        });\n    }\n    const { token } = req.body;\n    if (!token) {\n        return res.status(400).json({\n            error: 'Token is required'\n        });\n    }\n    const { data, error } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].from('password_resets').select('*').eq('token', token).single();\n    if (!data || error) {\n        return res.status(400).json({\n            error: 'Invalid token'\n        });\n    }\n    const now = new Date();\n    const expiresAt = new Date(data.expires_at + 'Z'); // Force UTC parsing\n    if (expiresAt < now) {\n        return res.status(410).json({\n            error: 'Token has expired'\n        });\n    }\n    return res.status(200).json({\n        valid: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS9hdXRoL3ZhbGlkYXRlLXJlc2V0LXRva2VuLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtRDtBQUNLO0FBRXpDLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxNQUFNSCx3REFBYUEsQ0FBQ0UsS0FBS0MsS0FBS0osaURBQUlBO0lBRWxDLElBQUlHLElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFxQjtJQUM1RDtJQUVBLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdOLElBQUlPLElBQUk7SUFFMUIsSUFBSSxDQUFDRCxPQUFPO1FBQ1YsT0FBT0wsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQW9CO0lBQzNEO0lBRUEsTUFBTSxFQUFFRyxJQUFJLEVBQUVILEtBQUssRUFBRSxHQUFHLE1BQU1ULGdFQUN2QixDQUFDLG1CQUNMYyxNQUFNLENBQUMsS0FDUEMsRUFBRSxDQUFDLFNBQVNMLE9BQ1pNLE1BQU07SUFFVCxJQUFJLENBQUNKLFFBQVFILE9BQU87UUFDbEIsT0FBT0osSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWdCO0lBQ3ZEO0lBRUEsTUFBTVEsTUFBTSxJQUFJQztJQUNoQixNQUFNQyxZQUFZLElBQUlELEtBQUtOLEtBQUtRLFVBQVUsR0FBRSxNQUFNLG9CQUFvQjtJQUV0RSxJQUFJRCxZQUFZRixLQUFLO1FBQ25CLE9BQU9aLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFvQjtJQUMzRDtJQUVBLE9BQU9KLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRWEsT0FBTztJQUFLO0FBQzVDIiwic291cmNlcyI6WyIvaG9tZS9wYWxhay9EZXNrdG9wL1BhbGFrL29tYnJlLXByb2plY3QvYmFja2VuZC9wYWdlcy9hcGkvYXV0aC92YWxpZGF0ZS1yZXNldC10b2tlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3VwYWJhc2UgZnJvbSAnLi4vLi4vLi4vbGliL3N1cGFiYXNlQ2xpZW50JztcbmltcG9ydCBjb3JzLCB7IHJ1bk1pZGRsZXdhcmUgfSBmcm9tICcuLi8uLi8uLi9saWIvY29ycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgYXdhaXQgcnVuTWlkZGxld2FyZShyZXEsIHJlcywgY29ycyk7XG5cbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KTtcbiAgfVxuXG4gIGNvbnN0IHsgdG9rZW4gfSA9IHJlcS5ib2R5O1xuXG4gIGlmICghdG9rZW4pIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ1Rva2VuIGlzIHJlcXVpcmVkJyB9KTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3Bhc3N3b3JkX3Jlc2V0cycpXG4gICAgLnNlbGVjdCgnKicpXG4gICAgLmVxKCd0b2tlbicsIHRva2VuKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoIWRhdGEgfHwgZXJyb3IpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ0ludmFsaWQgdG9rZW4nIH0pO1xuICB9XG5cbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZXhwaXJlc0F0ID0gbmV3IERhdGUoZGF0YS5leHBpcmVzX2F0KyAnWicpOyAvLyBGb3JjZSBVVEMgcGFyc2luZ1xuXG4gIGlmIChleHBpcmVzQXQgPCBub3cpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MTApLmpzb24oeyBlcnJvcjogJ1Rva2VuIGhhcyBleHBpcmVkJyB9KTtcbiAgfVxuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHZhbGlkOiB0cnVlIH0pO1xufVxuIl0sIm5hbWVzIjpbInN1cGFiYXNlIiwiY29ycyIsInJ1bk1pZGRsZXdhcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwidG9rZW4iLCJib2R5IiwiZGF0YSIsImZyb20iLCJzZWxlY3QiLCJlcSIsInNpbmdsZSIsIm5vdyIsIkRhdGUiLCJleHBpcmVzQXQiLCJleHBpcmVzX2F0IiwidmFsaWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/auth/validate-reset-token.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fvalidate-reset-token&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2Fvalidate-reset-token.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();