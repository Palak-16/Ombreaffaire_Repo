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
exports.id = "pages/api/admin/products/upload-image";
exports.ids = ["pages/api/admin/products/upload-image"];
exports.modules = {

/***/ "(api-node)/./lib/cors.js":
/*!*********************!*\
  !*** ./lib/cors.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   runMiddleware: () => (/* binding */ runMiddleware)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n\n// ✅ Allow multiple origins\nconst allowedOrigins = [\n    'http://localhost:3000',\n    'https://ombreaffaire-repo-frontend.vercel.app'\n];\n// Dynamic origin function\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    origin: function(origin, callback) {\n        // allow requests with no origin (like mobile apps or curl)\n        if (!origin) return callback(null, true);\n        if (allowedOrigins.includes(origin)) {\n            return callback(null, true);\n        } else {\n            return callback(new Error('Not allowed by CORS'));\n        }\n    },\n    methods: [\n        'POST',\n        'GET',\n        'OPTIONS'\n    ]\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cors);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9jb3JzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0I7QUFFeEIsMkJBQTJCO0FBQzNCLE1BQU1DLGlCQUFpQjtJQUNyQjtJQUNBO0NBQ0Q7QUFFRCwwQkFBMEI7QUFDMUIsTUFBTUMsT0FBT0YsMkNBQUlBLENBQUM7SUFDaEJHLFFBQVEsU0FBVUEsTUFBTSxFQUFFQyxRQUFRO1FBQ2hDLDJEQUEyRDtRQUMzRCxJQUFJLENBQUNELFFBQVEsT0FBT0MsU0FBUyxNQUFNO1FBQ25DLElBQUlILGVBQWVJLFFBQVEsQ0FBQ0YsU0FBUztZQUNuQyxPQUFPQyxTQUFTLE1BQU07UUFDeEIsT0FBTztZQUNMLE9BQU9BLFNBQVMsSUFBSUUsTUFBTTtRQUM1QjtJQUNGO0lBQ0FDLFNBQVM7UUFBQztRQUFRO1FBQU87S0FBVTtBQUNyQztBQUVPLFNBQVNDLGNBQWNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxFQUFFO0lBQ3hDLE9BQU8sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQztRQUMzQkgsR0FBR0YsS0FBS0MsS0FBSyxDQUFDSztZQUNaLElBQUlBLGtCQUFrQlQsT0FBTztnQkFDM0IsT0FBT1EsT0FBT0M7WUFDaEI7WUFDQSxPQUFPRixRQUFRRTtRQUNqQjtJQUNGO0FBQ0Y7QUFFQSxpRUFBZWIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxwYWxha1xcRGVza3RvcFxcb21icmUtcHJvamVjdFxcYmFja2VuZFxcbGliXFxjb3JzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3JzIGZyb20gJ2NvcnMnO1xuXG4vLyDinIUgQWxsb3cgbXVsdGlwbGUgb3JpZ2luc1xuY29uc3QgYWxsb3dlZE9yaWdpbnMgPSBbXG4gICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuICAnaHR0cHM6Ly9vbWJyZWFmZmFpcmUtcmVwby1mcm9udGVuZC52ZXJjZWwuYXBwJyxcbl07XG5cbi8vIER5bmFtaWMgb3JpZ2luIGZ1bmN0aW9uXG5jb25zdCBjb3JzID0gQ29ycyh7XG4gIG9yaWdpbjogZnVuY3Rpb24gKG9yaWdpbiwgY2FsbGJhY2spIHtcbiAgICAvLyBhbGxvdyByZXF1ZXN0cyB3aXRoIG5vIG9yaWdpbiAobGlrZSBtb2JpbGUgYXBwcyBvciBjdXJsKVxuICAgIGlmICghb3JpZ2luKSByZXR1cm4gY2FsbGJhY2sobnVsbCwgdHJ1ZSk7XG4gICAgaWYgKGFsbG93ZWRPcmlnaW5zLmluY2x1ZGVzKG9yaWdpbikpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBFcnJvcignTm90IGFsbG93ZWQgYnkgQ09SUycpKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IFsnUE9TVCcsICdHRVQnLCAnT1BUSU9OUyddLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBmbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZuKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvcnM7XG4iXSwibmFtZXMiOlsiQ29ycyIsImFsbG93ZWRPcmlnaW5zIiwiY29ycyIsIm9yaWdpbiIsImNhbGxiYWNrIiwiaW5jbHVkZXMiLCJFcnJvciIsIm1ldGhvZHMiLCJydW5NaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiZm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./lib/cors.js\n");

/***/ }),

/***/ "(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fadmin%2Fproducts%2Fupload-image&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cadmin%5Cproducts%5Cupload-image.js&middlewareConfigBase64=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fadmin%2Fproducts%2Fupload-image&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cadmin%5Cproducts%5Cupload-image.js&middlewareConfigBase64=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api-node)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_admin_products_upload_image_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\admin\\products\\upload-image.js */ \"(api-node)/./pages/api/admin/products/upload-image.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_admin_products_upload_image_js__WEBPACK_IMPORTED_MODULE_3__]);\n_pages_api_admin_products_upload_image_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_admin_products_upload_image_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_admin_products_upload_image_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/admin/products/upload-image\",\n        pathname: \"/api/admin/products/upload-image\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_admin_products_upload_image_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVNfQVBJJnBhZ2U9JTJGYXBpJTJGYWRtaW4lMkZwcm9kdWN0cyUyRnVwbG9hZC1pbWFnZSZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDYWRtaW4lNUNwcm9kdWN0cyU1Q3VwbG9hZC1pbWFnZS5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDRTtBQUMxRDtBQUMyRTtBQUMzRTtBQUNBLGlFQUFlLHdFQUFLLENBQUMsc0VBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLHNFQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLHlHQUFtQjtBQUNsRDtBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxxQyIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXGFkbWluXFxcXHByb2R1Y3RzXFxcXHVwbG9hZC1pbWFnZS5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCAnZGVmYXVsdCcpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgJ2NvbmZpZycpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYWRtaW4vcHJvZHVjdHMvdXBsb2FkLWltYWdlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRtaW4vcHJvZHVjdHMvdXBsb2FkLWltYWdlXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogJycsXG4gICAgICAgIGZpbGVuYW1lOiAnJ1xuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fadmin%2Fproducts%2Fupload-image&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cadmin%5Cproducts%5Cupload-image.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api-node)/./pages/api/admin/products/upload-image.js":
/*!**************************************************!*\
  !*** ./pages/api/admin/products/upload-image.js ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../lib/cors */ \"(api-node)/./lib/cors.js\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([formidable__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_3__]);\n([formidable__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n // This gives you access to existsSync and mkdirSync\n // Still needed for readFile\n\n\n\n\n\n// Disable default body parser to allow formidable to handle multipart\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n// Initialize Supabase with SERVICE ROLE KEY\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__.createClient)(\"https://zjmmhgkmculcpgmjopbc.supabase.co\", process.env.SUPABASE_SERVICE_ROLE_KEY // Use env var only on server\n);\nasync function handler(req, res) {\n    await (0,_lib_cors__WEBPACK_IMPORTED_MODULE_5__.runMiddleware)(req, res, _lib_cors__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    if (req.method !== \"POST\") return res.status(405).json({\n        error: \"Method not allowed\"\n    });\n    // Get OS-specific temp directory (cross-platform safe)\n    const tempDir = path__WEBPACK_IMPORTED_MODULE_7___default().join(os__WEBPACK_IMPORTED_MODULE_6___default().tmpdir());\n    // Ensure temp directory exists\n    if (!fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(tempDir)) {\n        fs__WEBPACK_IMPORTED_MODULE_1___default().mkdirSync(tempDir, {\n            recursive: true\n        });\n    }\n    const form = new formidable__WEBPACK_IMPORTED_MODULE_0__.IncomingForm({\n        uploadDir: tempDir,\n        keepExtensions: true\n    });\n    form.parse(req, async (err, fields, files)=>{\n        if (err) {\n            console.error(\"Form parse error:\", err);\n            return res.status(500).json({\n                error: \"Failed to parse form data\"\n            });\n        }\n        const file = Array.isArray(files.file) ? files.file[0] : files.file;\n        if (!file || !file.filepath) {\n            return res.status(400).json({\n                error: \"No file uploaded\"\n            });\n        }\n        try {\n            const fileData = await fs_promises__WEBPACK_IMPORTED_MODULE_2___default().readFile(file.filepath);\n            const fileName = `products/${(0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)()}_${file.originalFilename}`;\n            const { error: uploadError } = await supabase.storage.from(\"product-images\").upload(fileName, fileData, {\n                contentType: file.mimetype,\n                upsert: true\n            });\n            if (uploadError) {\n                console.error(\"Upload failed:\", uploadError);\n                return res.status(500).json({\n                    error: \"Failed to upload image\"\n                });\n            }\n            const { data: { publicUrl } } = supabase.storage.from(\"product-images\").getPublicUrl(fileName);\n            return res.status(200).json({\n                imageUrl: publicUrl\n            });\n        } catch (e) {\n            console.error(\"Upload error:\", e);\n            return res.status(500).json({\n                error: \"Image upload failed\"\n            });\n        }\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS9hZG1pbi9wcm9kdWN0cy91cGxvYWQtaW1hZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ3RCLENBQUMsb0RBQW9EO0FBQ3BDLENBQUMsNEJBQTRCO0FBQzlCO0FBQ2lCO0FBQ007QUFDdkM7QUFDSTtBQUV4QixzRUFBc0U7QUFDL0QsTUFBTVUsU0FBUztJQUNwQkMsS0FBSztRQUNIQyxZQUFZO0lBQ2Q7QUFDRixFQUFFO0FBRUYsNENBQTRDO0FBQzVDLE1BQU1DLFdBQVdSLG1FQUFZQSxDQUMzQlMsMENBQXdCLEVBQ3hCQSxRQUFRQyxHQUFHLENBQUNFLHlCQUF5QixDQUFDLDZCQUE2Qjs7QUFHdEQsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLE1BQU1iLHdEQUFhQSxDQUFDWSxLQUFLQyxLQUFLZCxpREFBSUE7SUFFbEMsSUFBSWEsSUFBSUUsTUFBTSxLQUFLLFFBQ2pCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFxQjtJQUU1RCx1REFBdUQ7SUFDdkQsTUFBTUMsVUFBVWhCLGdEQUFTLENBQUNELGdEQUFTO0lBRW5DLCtCQUErQjtJQUMvQixJQUFJLENBQUNQLG9EQUFhLENBQUN3QixVQUFVO1FBQzNCeEIsbURBQVksQ0FBQ3dCLFNBQVM7WUFBRUssV0FBVztRQUFLO0lBQzFDO0lBRUEsTUFBTUMsT0FBTyxJQUFJL0Isb0RBQVlBLENBQUM7UUFDNUJnQyxXQUFXUDtRQUNYUSxnQkFBZ0I7SUFDbEI7SUFDQUYsS0FBS0csS0FBSyxDQUFDZixLQUFLLE9BQU9nQixLQUFLQyxRQUFRQztRQUNsQyxJQUFJRixLQUFLO1lBQ1BHLFFBQVFkLEtBQUssQ0FBQyxxQkFBcUJXO1lBQ25DLE9BQU9mLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBNEI7UUFDbkU7UUFFQSxNQUFNZSxPQUFPQyxNQUFNQyxPQUFPLENBQUNKLE1BQU1FLElBQUksSUFBSUYsTUFBTUUsSUFBSSxDQUFDLEVBQUUsR0FBR0YsTUFBTUUsSUFBSTtRQUNuRSxJQUFJLENBQUNBLFFBQVEsQ0FBQ0EsS0FBS0csUUFBUSxFQUFFO1lBQzNCLE9BQU90QixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQW1CO1FBQzFEO1FBRUEsSUFBSTtZQUNILE1BQU1tQixXQUFXLE1BQU16QywyREFBbUIsQ0FBQ3FDLEtBQUtHLFFBQVE7WUFFdkQsTUFBTUcsV0FBVyxDQUFDLFNBQVMsRUFBRXpDLHdDQUFNQSxHQUFHLENBQUMsRUFBRW1DLEtBQUtPLGdCQUFnQixFQUFFO1lBRWhFLE1BQU0sRUFBRXRCLE9BQU91QixXQUFXLEVBQUUsR0FBRyxNQUFNbEMsU0FBU21DLE9BQU8sQ0FDbERDLElBQUksQ0FBQyxrQkFDTEMsTUFBTSxDQUFDTCxVQUFVRixVQUFVO2dCQUMxQlEsYUFBYVosS0FBS2EsUUFBUTtnQkFDMUJDLFFBQVE7WUFDVjtZQUVGLElBQUlOLGFBQWE7Z0JBQ2ZULFFBQVFkLEtBQUssQ0FBQyxrQkFBa0J1QjtnQkFDaEMsT0FBTzNCLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLE9BQU87Z0JBQXlCO1lBQ2hFO1lBRUEsTUFBTSxFQUNKOEIsTUFBTSxFQUFFQyxTQUFTLEVBQUUsRUFDcEIsR0FBRzFDLFNBQVNtQyxPQUFPLENBQUNDLElBQUksQ0FBQyxrQkFBa0JPLFlBQVksQ0FBQ1g7WUFFekQsT0FBT3pCLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVrQyxVQUFVRjtZQUFVO1FBQ3BELEVBQUUsT0FBT0csR0FBRztZQUNWcEIsUUFBUWQsS0FBSyxDQUFDLGlCQUFpQmtDO1lBQy9CLE9BQU90QyxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXNCO1FBQzdEO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxwYWxha1xcRGVza3RvcFxcb21icmUtcHJvamVjdFxcYmFja2VuZFxccGFnZXNcXGFwaVxcYWRtaW5cXHByb2R1Y3RzXFx1cGxvYWQtaW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5jb21pbmdGb3JtIH0gZnJvbSBcImZvcm1pZGFibGVcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjsgLy8gVGhpcyBnaXZlcyB5b3UgYWNjZXNzIHRvIGV4aXN0c1N5bmMgYW5kIG1rZGlyU3luY1xuaW1wb3J0IGZzUHJvbWlzZXMgZnJvbSBcImZzL3Byb21pc2VzXCI7IC8vIFN0aWxsIG5lZWRlZCBmb3IgcmVhZEZpbGVcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XG5pbXBvcnQgY29ycywgeyBydW5NaWRkbGV3YXJlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9jb3JzXCI7XG5pbXBvcnQgb3MgZnJvbSBcIm9zXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG4vLyBEaXNhYmxlIGRlZmF1bHQgYm9keSBwYXJzZXIgdG8gYWxsb3cgZm9ybWlkYWJsZSB0byBoYW5kbGUgbXVsdGlwYXJ0XG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHtcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcbiAgfSxcbn07XG5cbi8vIEluaXRpYWxpemUgU3VwYWJhc2Ugd2l0aCBTRVJWSUNFIFJPTEUgS0VZXG5jb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChcbiAgcHJvY2Vzcy5lbnYuU1VQQUJBU0VfVVJMLFxuICBwcm9jZXNzLmVudi5TVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZIC8vIFVzZSBlbnYgdmFyIG9ubHkgb24gc2VydmVyXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGF3YWl0IHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGNvcnMpO1xuXG4gIGlmIChyZXEubWV0aG9kICE9PSBcIlBPU1RcIilcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KTtcblxuICAvLyBHZXQgT1Mtc3BlY2lmaWMgdGVtcCBkaXJlY3RvcnkgKGNyb3NzLXBsYXRmb3JtIHNhZmUpXG4gIGNvbnN0IHRlbXBEaXIgPSBwYXRoLmpvaW4ob3MudG1wZGlyKCkpO1xuXG4gIC8vIEVuc3VyZSB0ZW1wIGRpcmVjdG9yeSBleGlzdHNcbiAgaWYgKCFmcy5leGlzdHNTeW5jKHRlbXBEaXIpKSB7XG4gICAgZnMubWtkaXJTeW5jKHRlbXBEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICB9XG5cbiAgY29uc3QgZm9ybSA9IG5ldyBJbmNvbWluZ0Zvcm0oe1xuICAgIHVwbG9hZERpcjogdGVtcERpcixcbiAgICBrZWVwRXh0ZW5zaW9uczogdHJ1ZSxcbiAgfSk7XG4gIGZvcm0ucGFyc2UocmVxLCBhc3luYyAoZXJyLCBmaWVsZHMsIGZpbGVzKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZvcm0gcGFyc2UgZXJyb3I6XCIsIGVycik7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJGYWlsZWQgdG8gcGFyc2UgZm9ybSBkYXRhXCIgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZSA9IEFycmF5LmlzQXJyYXkoZmlsZXMuZmlsZSkgPyBmaWxlcy5maWxlWzBdIDogZmlsZXMuZmlsZTtcbiAgICBpZiAoIWZpbGUgfHwgIWZpbGUuZmlsZXBhdGgpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcIk5vIGZpbGUgdXBsb2FkZWRcIiB9KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICBjb25zdCBmaWxlRGF0YSA9IGF3YWl0IGZzUHJvbWlzZXMucmVhZEZpbGUoZmlsZS5maWxlcGF0aCk7XG5cbiAgICAgIGNvbnN0IGZpbGVOYW1lID0gYHByb2R1Y3RzLyR7dXVpZHY0KCl9XyR7ZmlsZS5vcmlnaW5hbEZpbGVuYW1lfWA7XG5cbiAgICAgIGNvbnN0IHsgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXG4gICAgICAgIC5mcm9tKFwicHJvZHVjdC1pbWFnZXNcIilcbiAgICAgICAgLnVwbG9hZChmaWxlTmFtZSwgZmlsZURhdGEsIHtcbiAgICAgICAgICBjb250ZW50VHlwZTogZmlsZS5taW1ldHlwZSxcbiAgICAgICAgICB1cHNlcnQ6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlVwbG9hZCBmYWlsZWQ6XCIsIHVwbG9hZEVycm9yKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwbG9hZCBpbWFnZVwiIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIGRhdGE6IHsgcHVibGljVXJsIH0sXG4gICAgICB9ID0gc3VwYWJhc2Uuc3RvcmFnZS5mcm9tKFwicHJvZHVjdC1pbWFnZXNcIikuZ2V0UHVibGljVXJsKGZpbGVOYW1lKTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgaW1hZ2VVcmw6IHB1YmxpY1VybCB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVXBsb2FkIGVycm9yOlwiLCBlKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkltYWdlIHVwbG9hZCBmYWlsZWRcIiB9KTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIkluY29taW5nRm9ybSIsImZzIiwiZnNQcm9taXNlcyIsInY0IiwidXVpZHY0IiwiY3JlYXRlQ2xpZW50IiwiY29ycyIsInJ1bk1pZGRsZXdhcmUiLCJvcyIsInBhdGgiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwic3VwYWJhc2UiLCJwcm9jZXNzIiwiZW52IiwiU1VQQUJBU0VfVVJMIiwiU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJ0ZW1wRGlyIiwiam9pbiIsInRtcGRpciIsImV4aXN0c1N5bmMiLCJta2RpclN5bmMiLCJyZWN1cnNpdmUiLCJmb3JtIiwidXBsb2FkRGlyIiwia2VlcEV4dGVuc2lvbnMiLCJwYXJzZSIsImVyciIsImZpZWxkcyIsImZpbGVzIiwiY29uc29sZSIsImZpbGUiLCJBcnJheSIsImlzQXJyYXkiLCJmaWxlcGF0aCIsImZpbGVEYXRhIiwicmVhZEZpbGUiLCJmaWxlTmFtZSIsIm9yaWdpbmFsRmlsZW5hbWUiLCJ1cGxvYWRFcnJvciIsInN0b3JhZ2UiLCJmcm9tIiwidXBsb2FkIiwiY29udGVudFR5cGUiLCJtaW1ldHlwZSIsInVwc2VydCIsImRhdGEiLCJwdWJsaWNVcmwiLCJnZXRQdWJsaWNVcmwiLCJpbWFnZVVybCIsImUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/admin/products/upload-image.js\n");

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

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("formidable");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fadmin%2Fproducts%2Fupload-image&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cadmin%5Cproducts%5Cupload-image.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();