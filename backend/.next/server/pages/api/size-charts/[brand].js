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
exports.id = "pages/api/size-charts/[brand]";
exports.ids = ["pages/api/size-charts/[brand]"];
exports.modules = {

/***/ "(api-node)/./lib/cors.js":
/*!*********************!*\
  !*** ./lib/cors.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   runMiddleware: () => (/* binding */ runMiddleware)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n\n// ✅ Allow multiple origins\nconst allowedOrigins = [\n    'http://localhost:3000',\n    'https://ombreaffaire-repo-frontend.vercel.app',\n    'https://ombreaffaire.in'\n];\n// Dynamic origin function\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    origin: function(origin, callback) {\n        // allow requests with no origin (like mobile apps or curl)\n        // console.log(\"CORS origin:\", origin); // 🔍 Debug here\n        if (!origin) return callback(null, true);\n        if (allowedOrigins.includes(origin)) {\n            return callback(null, true);\n        } else {\n            return callback(new Error('Not allowed by CORS'));\n        }\n    },\n    methods: [\n        'POST',\n        'GET',\n        'OPTIONS',\n        'PUT',\n        'DELETE',\n        'PATCH'\n    ],\n    credentials: true\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cors);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9jb3JzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0I7QUFFeEIsMkJBQTJCO0FBQzNCLE1BQU1DLGlCQUFpQjtJQUNyQjtJQUNBO0lBQ0E7Q0FDRDtBQUVELDBCQUEwQjtBQUMxQixNQUFNQyxPQUFPRiwyQ0FBSUEsQ0FBQztJQUNoQkcsUUFBUSxTQUFVQSxNQUFNLEVBQUVDLFFBQVE7UUFDaEMsMkRBQTJEO1FBQzNELHdEQUF3RDtRQUN4RCxJQUFJLENBQUNELFFBQVEsT0FBT0MsU0FBUyxNQUFNO1FBQ25DLElBQUlILGVBQWVJLFFBQVEsQ0FBQ0YsU0FBUztZQUNuQyxPQUFPQyxTQUFTLE1BQU07UUFDeEIsT0FBTztZQUNMLE9BQU9BLFNBQVMsSUFBSUUsTUFBTTtRQUM1QjtJQUNGO0lBRUFDLFNBQVM7UUFBQztRQUFRO1FBQU87UUFBVztRQUFPO1FBQVU7S0FBUTtJQUM3REMsYUFBYTtBQUNmO0FBRU8sU0FBU0MsY0FBY0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEVBQUU7SUFDeEMsT0FBTyxJQUFJQyxRQUFRLENBQUNDLFNBQVNDO1FBQzNCSCxHQUFHRixLQUFLQyxLQUFLLENBQUNLO1lBQ1osSUFBSUEsa0JBQWtCVixPQUFPO2dCQUMzQixPQUFPUyxPQUFPQztZQUNoQjtZQUNBLE9BQU9GLFFBQVFFO1FBQ2pCO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlZCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHBhbGFrXFxEZXNrdG9wXFxvbWJyZS1wcm9qZWN0XFxiYWNrZW5kXFxsaWJcXGNvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvcnMgZnJvbSAnY29ycyc7XG5cbi8vIOKchSBBbGxvdyBtdWx0aXBsZSBvcmlnaW5zXG5jb25zdCBhbGxvd2VkT3JpZ2lucyA9IFtcbiAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXG4gICdodHRwczovL29tYnJlYWZmYWlyZS1yZXBvLWZyb250ZW5kLnZlcmNlbC5hcHAnLFxuICAnaHR0cHM6Ly9vbWJyZWFmZmFpcmUuaW4nXG5dO1xuXG4vLyBEeW5hbWljIG9yaWdpbiBmdW5jdGlvblxuY29uc3QgY29ycyA9IENvcnMoe1xuICBvcmlnaW46IGZ1bmN0aW9uIChvcmlnaW4sIGNhbGxiYWNrKSB7XG4gICAgLy8gYWxsb3cgcmVxdWVzdHMgd2l0aCBubyBvcmlnaW4gKGxpa2UgbW9iaWxlIGFwcHMgb3IgY3VybClcbiAgICAvLyBjb25zb2xlLmxvZyhcIkNPUlMgb3JpZ2luOlwiLCBvcmlnaW4pOyAvLyDwn5SNIERlYnVnIGhlcmVcbiAgICBpZiAoIW9yaWdpbikgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHRydWUpO1xuICAgIGlmIChhbGxvd2VkT3JpZ2lucy5pbmNsdWRlcyhvcmlnaW4pKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgRXJyb3IoJ05vdCBhbGxvd2VkIGJ5IENPUlMnKSk7XG4gICAgfVxuICB9LFxuICBcbiAgbWV0aG9kczogWydQT1NUJywgJ0dFVCcsICdPUFRJT05TJywgJ1BVVCcsICdERUxFVEUnLCAnUEFUQ0gnXSxcbiAgY3JlZGVudGlhbHM6IHRydWUsIFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBmbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZuKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvcnM7XG4iXSwibmFtZXMiOlsiQ29ycyIsImFsbG93ZWRPcmlnaW5zIiwiY29ycyIsIm9yaWdpbiIsImNhbGxiYWNrIiwiaW5jbHVkZXMiLCJFcnJvciIsIm1ldGhvZHMiLCJjcmVkZW50aWFscyIsInJ1bk1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJmbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api-node)/./lib/cors.js\n");

/***/ }),

/***/ "(api-node)/./lib/supabaseClient.js":
/*!*******************************!*\
  !*** ./lib/supabaseClient.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://zjmmhgkmculcpgmjopbc.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqbW1oZ2ttY3VsY3BnbWpvcGJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MzY5NjcsImV4cCI6MjA2MjIxMjk2N30.fWP7Y5L9FwJn1EJTkGnE56giZx-BbR7z3_PdwFJ1gtA\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9zdXBhYmFzZUNsaWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUQ7QUFFckQsTUFBTUMsV0FBV0QsbUVBQVlBLENBQzNCRSwwQ0FBd0IsRUFDeEJBLGtOQUF3QjtBQUcxQixpRUFBZUQsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxwYWxha1xcRGVza3RvcFxcb21icmUtcHJvamVjdFxcYmFja2VuZFxcbGliXFxzdXBhYmFzZUNsaWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xuXG5jb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChcbiAgcHJvY2Vzcy5lbnYuU1VQQUJBU0VfVVJMLFxuICBwcm9jZXNzLmVudi5TVVBBQkFTRV9LRVlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHN1cGFiYXNlO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlIiwicHJvY2VzcyIsImVudiIsIlNVUEFCQVNFX1VSTCIsIlNVUEFCQVNFX0tFWSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./lib/supabaseClient.js\n");

/***/ }),

/***/ "(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsize-charts%2F%5Bbrand%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Csize-charts%5C%5Bbrand%5D.js&middlewareConfigBase64=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsize-charts%2F%5Bbrand%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Csize-charts%5C%5Bbrand%5D.js&middlewareConfigBase64=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api-node)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_size_charts_brand_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\size-charts\\[brand].js */ \"(api-node)/./pages/api/size-charts/[brand].js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_size_charts_brand_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_size_charts_brand_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/size-charts/[brand]\",\n        pathname: \"/api/size-charts/[brand]\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_size_charts_brand_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVNfQVBJJnBhZ2U9JTJGYXBpJTJGc2l6ZS1jaGFydHMlMkYlNUJicmFuZCU1RCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDc2l6ZS1jaGFydHMlNUMlNUJicmFuZCU1RC5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDRTtBQUMxRDtBQUNrRTtBQUNsRTtBQUNBLGlFQUFlLHdFQUFLLENBQUMsNERBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLDREQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLHlHQUFtQjtBQUNsRDtBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXHNpemUtY2hhcnRzXFxcXFticmFuZF0uanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgJ2RlZmF1bHQnKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsICdjb25maWcnKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NpemUtY2hhcnRzL1ticmFuZF1cIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zaXplLWNoYXJ0cy9bYnJhbmRdXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogJycsXG4gICAgICAgIGZpbGVuYW1lOiAnJ1xuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsize-charts%2F%5Bbrand%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Csize-charts%5C%5Bbrand%5D.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api-node)/./pages/api/size-charts/[brand].js":
/*!******************************************!*\
  !*** ./pages/api/size-charts/[brand].js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/supabaseClient */ \"(api-node)/./lib/supabaseClient.js\");\n/* harmony import */ var _lib_cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/cors */ \"(api-node)/./lib/cors.js\");\n\n\nasync function handler(req, res) {\n    await (0,_lib_cors__WEBPACK_IMPORTED_MODULE_1__.runMiddleware)(req, res, _lib_cors__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    const { brand } = req.query;\n    if (!brand) return res.status(400).json({\n        error: \"brand is required\"\n    });\n    // pull the JSONB chart_data for that brand\n    const { data, error } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].from(\"size_charts\").select(\"chart_data\").eq(\"brand\", brand).single();\n    if (error) return res.status(500).json({\n        error: error.message\n    });\n    res.status(200).json(data.chart_data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS9zaXplLWNoYXJ0cy9bYnJhbmRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtRDtBQUNLO0FBRXpDLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxNQUFNSCx3REFBYUEsQ0FBQ0UsS0FBS0MsS0FBS0osaURBQUlBO0lBRWxDLE1BQU0sRUFBRUssS0FBSyxFQUFFLEdBQUdGLElBQUlHLEtBQUs7SUFDM0IsSUFBSSxDQUFDRCxPQUFPLE9BQU9ELElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFvQjtJQUVyRSwyQ0FBMkM7SUFDM0MsTUFBTSxFQUFFQyxJQUFJLEVBQUVELEtBQUssRUFBRSxHQUFHLE1BQU1WLGdFQUN2QixDQUFDLGVBQ0xhLE1BQU0sQ0FBQyxjQUNQQyxFQUFFLENBQUMsU0FBU1IsT0FDWlMsTUFBTTtJQUVULElBQUlMLE9BQU8sT0FBT0wsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFQyxPQUFPQSxNQUFNTSxPQUFPO0lBQUM7SUFDOURYLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNFLEtBQUtNLFVBQVU7QUFDdEMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGFsYWtcXERlc2t0b3BcXG9tYnJlLXByb2plY3RcXGJhY2tlbmRcXHBhZ2VzXFxhcGlcXHNpemUtY2hhcnRzXFxbYnJhbmRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdXBhYmFzZSBmcm9tIFwiLi4vLi4vLi4vbGliL3N1cGFiYXNlQ2xpZW50XCI7XHJcbmltcG9ydCBjb3JzLCB7IHJ1bk1pZGRsZXdhcmUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2NvcnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBhd2FpdCBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBjb3JzKTtcclxuXHJcbiAgY29uc3QgeyBicmFuZCB9ID0gcmVxLnF1ZXJ5O1xyXG4gIGlmICghYnJhbmQpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcImJyYW5kIGlzIHJlcXVpcmVkXCIgfSk7XHJcblxyXG4gIC8vIHB1bGwgdGhlIEpTT05CIGNoYXJ0X2RhdGEgZm9yIHRoYXQgYnJhbmRcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzaXplX2NoYXJ0c1wiKVxyXG4gICAgLnNlbGVjdChcImNoYXJ0X2RhdGFcIilcclxuICAgIC5lcShcImJyYW5kXCIsIGJyYW5kKVxyXG4gICAgLnNpbmdsZSgpO1xyXG5cclxuICBpZiAoZXJyb3IpIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEuY2hhcnRfZGF0YSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInN1cGFiYXNlIiwiY29ycyIsInJ1bk1pZGRsZXdhcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYnJhbmQiLCJxdWVyeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImRhdGEiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJzaW5nbGUiLCJtZXNzYWdlIiwiY2hhcnRfZGF0YSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/size-charts/[brand].js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsize-charts%2F%5Bbrand%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Csize-charts%5C%5Bbrand%5D.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();