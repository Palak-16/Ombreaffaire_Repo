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
exports.id = "pages/api/admin/categories";
exports.ids = ["pages/api/admin/categories"];
exports.modules = {

/***/ "(api-node)/./lib/cors.js":
/*!*********************!*\
  !*** ./lib/cors.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   runMiddleware: () => (/* binding */ runMiddleware)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n\n// ✅ Allow multiple origins\nconst allowedOrigins = [\n    'http://localhost:3000',\n    'https://ombreaffaire-repo-frontend.vercel.app'\n];\n// Dynamic origin function\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    origin: function(origin, callback) {\n        // allow requests with no origin (like mobile apps or curl)\n        if (!origin) return callback(null, true);\n        if (allowedOrigins.includes(origin)) {\n            return callback(null, true);\n        } else {\n            return callback(new Error('Not allowed by CORS'));\n        }\n    },\n    methods: [\n        'POST',\n        'GET',\n        'OPTIONS',\n        'PUT',\n        'DELETE'\n    ]\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cors);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9jb3JzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0I7QUFFeEIsMkJBQTJCO0FBQzNCLE1BQU1DLGlCQUFpQjtJQUNyQjtJQUNBO0NBQ0Q7QUFFRCwwQkFBMEI7QUFDMUIsTUFBTUMsT0FBT0YsMkNBQUlBLENBQUM7SUFDaEJHLFFBQVEsU0FBVUEsTUFBTSxFQUFFQyxRQUFRO1FBQ2hDLDJEQUEyRDtRQUMzRCxJQUFJLENBQUNELFFBQVEsT0FBT0MsU0FBUyxNQUFNO1FBQ25DLElBQUlILGVBQWVJLFFBQVEsQ0FBQ0YsU0FBUztZQUNuQyxPQUFPQyxTQUFTLE1BQU07UUFDeEIsT0FBTztZQUNMLE9BQU9BLFNBQVMsSUFBSUUsTUFBTTtRQUM1QjtJQUNGO0lBQ0FDLFNBQVM7UUFBQztRQUFRO1FBQU87UUFBVztRQUFPO0tBQVM7QUFDdEQ7QUFFTyxTQUFTQyxjQUFjQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsRUFBRTtJQUN4QyxPQUFPLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0M7UUFDM0JILEdBQUdGLEtBQUtDLEtBQUssQ0FBQ0s7WUFDWixJQUFJQSxrQkFBa0JULE9BQU87Z0JBQzNCLE9BQU9RLE9BQU9DO1lBQ2hCO1lBQ0EsT0FBT0YsUUFBUUU7UUFDakI7SUFDRjtBQUNGO0FBRUEsaUVBQWViLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGFsYWtcXERlc2t0b3BcXG9tYnJlLXByb2plY3RcXGJhY2tlbmRcXGxpYlxcY29ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29ycyBmcm9tICdjb3JzJztcblxuLy8g4pyFIEFsbG93IG11bHRpcGxlIG9yaWdpbnNcbmNvbnN0IGFsbG93ZWRPcmlnaW5zID0gW1xuICAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgJ2h0dHBzOi8vb21icmVhZmZhaXJlLXJlcG8tZnJvbnRlbmQudmVyY2VsLmFwcCcsXG5dO1xuXG4vLyBEeW5hbWljIG9yaWdpbiBmdW5jdGlvblxuY29uc3QgY29ycyA9IENvcnMoe1xuICBvcmlnaW46IGZ1bmN0aW9uIChvcmlnaW4sIGNhbGxiYWNrKSB7XG4gICAgLy8gYWxsb3cgcmVxdWVzdHMgd2l0aCBubyBvcmlnaW4gKGxpa2UgbW9iaWxlIGFwcHMgb3IgY3VybClcbiAgICBpZiAoIW9yaWdpbikgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHRydWUpO1xuICAgIGlmIChhbGxvd2VkT3JpZ2lucy5pbmNsdWRlcyhvcmlnaW4pKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgRXJyb3IoJ05vdCBhbGxvd2VkIGJ5IENPUlMnKSk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiBbJ1BPU1QnLCAnR0VUJywgJ09QVElPTlMnLCAnUFVUJywgJ0RFTEVURSddLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBmbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZuKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvcnM7XG4iXSwibmFtZXMiOlsiQ29ycyIsImFsbG93ZWRPcmlnaW5zIiwiY29ycyIsIm9yaWdpbiIsImNhbGxiYWNrIiwiaW5jbHVkZXMiLCJFcnJvciIsIm1ldGhvZHMiLCJydW5NaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiZm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./lib/cors.js\n");

/***/ }),

/***/ "(api-node)/./lib/supabaseClient.js":
/*!*******************************!*\
  !*** ./lib/supabaseClient.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://zjmmhgkmculcpgmjopbc.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqbW1oZ2ttY3VsY3BnbWpvcGJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MzY5NjcsImV4cCI6MjA2MjIxMjk2N30.fWP7Y5L9FwJn1EJTkGnE56giZx-BbR7z3_PdwFJ1gtA\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9zdXBhYmFzZUNsaWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUQ7QUFFckQsTUFBTUMsV0FBV0QsbUVBQVlBLENBQzNCRSwwQ0FBd0IsRUFDeEJBLGtOQUF3QjtBQUcxQixpRUFBZUQsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxwYWxha1xcRGVza3RvcFxcb21icmUtcHJvamVjdFxcYmFja2VuZFxcbGliXFxzdXBhYmFzZUNsaWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xuXG5jb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChcbiAgcHJvY2Vzcy5lbnYuU1VQQUJBU0VfVVJMLFxuICBwcm9jZXNzLmVudi5TVVBBQkFTRV9LRVlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHN1cGFiYXNlO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlIiwicHJvY2VzcyIsImVudiIsIlNVUEFCQVNFX1VSTCIsIlNVUEFCQVNFX0tFWSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./lib/supabaseClient.js\n");

/***/ }),

/***/ "(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fadmin%2Fcategories&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cadmin%5Ccategories%5Cindex.js&middlewareConfigBase64=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fadmin%2Fcategories&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cadmin%5Ccategories%5Cindex.js&middlewareConfigBase64=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api-node)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_admin_categories_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\admin\\categories\\index.js */ \"(api-node)/./pages/api/admin/categories/index.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_admin_categories_index_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_admin_categories_index_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/admin/categories\",\n        pathname: \"/api/admin/categories\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_admin_categories_index_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVNfQVBJJnBhZ2U9JTJGYXBpJTJGYWRtaW4lMkZjYXRlZ29yaWVzJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlNUNhcGklNUNhZG1pbiU1Q2NhdGVnb3JpZXMlNUNpbmRleC5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDRTtBQUMxRDtBQUNzRTtBQUN0RTtBQUNBLGlFQUFlLHdFQUFLLENBQUMsaUVBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLGlFQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLHlHQUFtQjtBQUNsRDtBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXGFkbWluXFxcXGNhdGVnb3JpZXNcXFxcaW5kZXguanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgJ2RlZmF1bHQnKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsICdjb25maWcnKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FkbWluL2NhdGVnb3JpZXNcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hZG1pbi9jYXRlZ29yaWVzXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogJycsXG4gICAgICAgIGZpbGVuYW1lOiAnJ1xuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fadmin%2Fcategories&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cadmin%5Ccategories%5Cindex.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api-node)/./pages/api/admin/categories/index.js":
/*!*********************************************!*\
  !*** ./pages/api/admin/categories/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/supabaseClient */ \"(api-node)/./lib/supabaseClient.js\");\n/* harmony import */ var _lib_cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/cors */ \"(api-node)/./lib/cors.js\");\n\n\nasync function handler(req, res) {\n    await (0,_lib_cors__WEBPACK_IMPORTED_MODULE_1__.runMiddleware)(req, res, _lib_cors__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    if (req.method === 'GET') {\n        const { data, error } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].from('categories').select('*');\n        if (error) return res.status(500).json({\n            error: error.message\n        });\n        return res.status(200).json({\n            categories: data\n        });\n    }\n    return res.status(405).end(); // Method Not Allowed\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS9hZG1pbi9jYXRlZ29yaWVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRDtBQUNLO0FBRTVDLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUMxQyxNQUFNSCx3REFBYUEsQ0FBQ0UsS0FBS0MsS0FBS0osaURBQUlBO0lBRXBDLElBQUlHLElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNUixnRUFBYSxDQUFDLGNBQWNVLE1BQU0sQ0FBQztRQUNqRSxJQUFJRixPQUFPLE9BQU9ILElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUosT0FBT0EsTUFBTUssT0FBTztRQUFDO1FBQzlELE9BQU9SLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUUsWUFBWVA7UUFBSztJQUNqRDtJQUVBLE9BQU9GLElBQUlNLE1BQU0sQ0FBQyxLQUFLSSxHQUFHLElBQUkscUJBQXFCO0FBQ3JEIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHBhbGFrXFxEZXNrdG9wXFxvbWJyZS1wcm9qZWN0XFxiYWNrZW5kXFxwYWdlc1xcYXBpXFxhZG1pblxcY2F0ZWdvcmllc1xcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN1cGFiYXNlIGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdXBhYmFzZUNsaWVudCc7XHJcbmltcG9ydCBjb3JzLCB7IHJ1bk1pZGRsZXdhcmUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL2NvcnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGF3YWl0IHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGNvcnMpO1xyXG4gICAgXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdjYXRlZ29yaWVzJykuc2VsZWN0KCcqJyk7XHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgY2F0ZWdvcmllczogZGF0YSB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7IC8vIE1ldGhvZCBOb3QgQWxsb3dlZFxyXG59XHJcbiJdLCJuYW1lcyI6WyJzdXBhYmFzZSIsImNvcnMiLCJydW5NaWRkbGV3YXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJlcnJvciIsImZyb20iLCJzZWxlY3QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImNhdGVnb3JpZXMiLCJlbmQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/admin/categories/index.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fadmin%2Fcategories&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cadmin%5Ccategories%5Cindex.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();