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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   runMiddleware: () => (/* binding */ runMiddleware)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n\n// ✅ Allow multiple origins\nconst allowedOrigins = [\n    'http://localhost:3000',\n    'https://ombreaffaire-repo-frontend.vercel.app'\n];\n// Dynamic origin function\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    origin: function(origin, callback) {\n        // allow requests with no origin (like mobile apps or curl)\n        if (!origin) return callback(null, true);\n        if (allowedOrigins.includes(origin)) {\n            return callback(null, true);\n        } else {\n            return callback(new Error('Not allowed by CORS'));\n        }\n    },\n    methods: [\n        'POST',\n        'GET',\n        'OPTIONS',\n        'PUT',\n        'DELETE'\n    ]\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cors);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9jb3JzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0I7QUFFeEIsMkJBQTJCO0FBQzNCLE1BQU1DLGlCQUFpQjtJQUNyQjtJQUNBO0NBQ0Q7QUFFRCwwQkFBMEI7QUFDMUIsTUFBTUMsT0FBT0YsMkNBQUlBLENBQUM7SUFDaEJHLFFBQVEsU0FBVUEsTUFBTSxFQUFFQyxRQUFRO1FBQ2hDLDJEQUEyRDtRQUMzRCxJQUFJLENBQUNELFFBQVEsT0FBT0MsU0FBUyxNQUFNO1FBQ25DLElBQUlILGVBQWVJLFFBQVEsQ0FBQ0YsU0FBUztZQUNuQyxPQUFPQyxTQUFTLE1BQU07UUFDeEIsT0FBTztZQUNMLE9BQU9BLFNBQVMsSUFBSUUsTUFBTTtRQUM1QjtJQUNGO0lBQ0FDLFNBQVM7UUFBQztRQUFRO1FBQU87UUFBVztRQUFPO0tBQVM7QUFDdEQ7QUFFTyxTQUFTQyxjQUFjQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsRUFBRTtJQUN4QyxPQUFPLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0M7UUFDM0JILEdBQUdGLEtBQUtDLEtBQUssQ0FBQ0s7WUFDWixJQUFJQSxrQkFBa0JULE9BQU87Z0JBQzNCLE9BQU9RLE9BQU9DO1lBQ2hCO1lBQ0EsT0FBT0YsUUFBUUU7UUFDakI7SUFDRjtBQUNGO0FBRUEsaUVBQWViLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGFsYWtcXERlc2t0b3BcXG9tYnJlLXByb2plY3RcXGJhY2tlbmRcXGxpYlxcY29ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29ycyBmcm9tICdjb3JzJztcblxuLy8g4pyFIEFsbG93IG11bHRpcGxlIG9yaWdpbnNcbmNvbnN0IGFsbG93ZWRPcmlnaW5zID0gW1xuICAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgJ2h0dHBzOi8vb21icmVhZmZhaXJlLXJlcG8tZnJvbnRlbmQudmVyY2VsLmFwcCcsXG5dO1xuXG4vLyBEeW5hbWljIG9yaWdpbiBmdW5jdGlvblxuY29uc3QgY29ycyA9IENvcnMoe1xuICBvcmlnaW46IGZ1bmN0aW9uIChvcmlnaW4sIGNhbGxiYWNrKSB7XG4gICAgLy8gYWxsb3cgcmVxdWVzdHMgd2l0aCBubyBvcmlnaW4gKGxpa2UgbW9iaWxlIGFwcHMgb3IgY3VybClcbiAgICBpZiAoIW9yaWdpbikgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHRydWUpO1xuICAgIGlmIChhbGxvd2VkT3JpZ2lucy5pbmNsdWRlcyhvcmlnaW4pKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgRXJyb3IoJ05vdCBhbGxvd2VkIGJ5IENPUlMnKSk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiBbJ1BPU1QnLCAnR0VUJywgJ09QVElPTlMnLCAnUFVUJywgJ0RFTEVURSddLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBmbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZuKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvcnM7XG4iXSwibmFtZXMiOlsiQ29ycyIsImFsbG93ZWRPcmlnaW5zIiwiY29ycyIsIm9yaWdpbiIsImNhbGxiYWNrIiwiaW5jbHVkZXMiLCJFcnJvciIsIm1ldGhvZHMiLCJydW5NaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiZm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./lib/cors.js\n");

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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../lib/cors */ \"(api-node)/./lib/cors.js\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([formidable__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_3__]);\n([formidable__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n // This gives you access to existsSync and mkdirSync\n // Still needed for readFile\n\n\n\n\n\n// Disable default body parser to allow formidable to handle multipart\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n// Initialize Supabase with SERVICE ROLE KEY\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__.createClient)(\"https://zjmmhgkmculcpgmjopbc.supabase.co\", process.env.SUPABASE_SERVICE_ROLE_KEY // Use env var only on server\n);\nasync function handler(req, res) {\n    await (0,_lib_cors__WEBPACK_IMPORTED_MODULE_5__.runMiddleware)(req, res, _lib_cors__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    if (req.method !== \"POST\") return res.status(405).json({\n        error: \"Method not allowed\"\n    });\n    // Get OS-specific temp directory (cross-platform safe)\n    const tempDir = path__WEBPACK_IMPORTED_MODULE_7___default().join(os__WEBPACK_IMPORTED_MODULE_6___default().tmpdir());\n    // Ensure temp directory exists\n    if (!fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(tempDir)) {\n        fs__WEBPACK_IMPORTED_MODULE_1___default().mkdirSync(tempDir, {\n            recursive: true\n        });\n    }\n    const form = new formidable__WEBPACK_IMPORTED_MODULE_0__.IncomingForm({\n        uploadDir: tempDir,\n        keepExtensions: true,\n        maxFileSize: 50 * 1024 * 1024\n    });\n    form.parse(req, async (err, fields, files)=>{\n        if (err) {\n            console.error(\"Form parse error:\", err);\n            return res.status(500).json({\n                error: \"Failed to parse form data\"\n            });\n        }\n        const file = Array.isArray(files.file) ? files.file[0] : files.file;\n        if (!file || !file.filepath) {\n            return res.status(400).json({\n                error: \"No file uploaded\"\n            });\n        }\n        try {\n            const fileData = await fs_promises__WEBPACK_IMPORTED_MODULE_2___default().readFile(file.filepath);\n            const fileName = `products/${(0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)()}_${file.originalFilename}`;\n            const { error: uploadError } = await supabase.storage.from(\"product-images\").upload(fileName, fileData, {\n                contentType: file.mimetype,\n                upsert: true\n            });\n            if (uploadError) {\n                console.error(\"Upload failed:\", uploadError);\n                return res.status(500).json({\n                    error: \"Failed to upload image\"\n                });\n            }\n            const { data: { publicUrl } } = supabase.storage.from(\"product-images\").getPublicUrl(fileName);\n            return res.status(200).json({\n                imageUrl: publicUrl\n            });\n        } catch (e) {\n            console.error(\"Upload error:\", e);\n            return res.status(500).json({\n                error: \"Image upload failed\"\n            });\n        }\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS9hZG1pbi9wcm9kdWN0cy91cGxvYWQtaW1hZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ3RCLENBQUMsb0RBQW9EO0FBQ3BDLENBQUMsNEJBQTRCO0FBQzlCO0FBQ2lCO0FBQ007QUFDdkM7QUFDSTtBQUV4QixzRUFBc0U7QUFDL0QsTUFBTVUsU0FBUztJQUNwQkMsS0FBSztRQUNIQyxZQUFZO0lBQ2Q7QUFDRixFQUFFO0FBRUYsNENBQTRDO0FBQzVDLE1BQU1DLFdBQVdSLG1FQUFZQSxDQUMzQlMsMENBQXdCLEVBQ3hCQSxRQUFRQyxHQUFHLENBQUNFLHlCQUF5QixDQUFDLDZCQUE2Qjs7QUFHdEQsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLE1BQU1iLHdEQUFhQSxDQUFDWSxLQUFLQyxLQUFLZCxpREFBSUE7SUFFbEMsSUFBSWEsSUFBSUUsTUFBTSxLQUFLLFFBQ2pCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFxQjtJQUU1RCx1REFBdUQ7SUFDdkQsTUFBTUMsVUFBVWhCLGdEQUFTLENBQUNELGdEQUFTO0lBRW5DLCtCQUErQjtJQUMvQixJQUFJLENBQUNQLG9EQUFhLENBQUN3QixVQUFVO1FBQzNCeEIsbURBQVksQ0FBQ3dCLFNBQVM7WUFBRUssV0FBVztRQUFLO0lBQzFDO0lBRUEsTUFBTUMsT0FBTyxJQUFJL0Isb0RBQVlBLENBQUM7UUFDNUJnQyxXQUFXUDtRQUNYUSxnQkFBZ0I7UUFFaEJDLGFBQWEsS0FBSyxPQUFPO0lBQzNCO0lBQ0FILEtBQUtJLEtBQUssQ0FBQ2hCLEtBQUssT0FBT2lCLEtBQUtDLFFBQVFDO1FBQ2xDLElBQUlGLEtBQUs7WUFDUEcsUUFBUWYsS0FBSyxDQUFDLHFCQUFxQlk7WUFDbkMsT0FBT2hCLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBNEI7UUFDbkU7UUFFQSxNQUFNZ0IsT0FBT0MsTUFBTUMsT0FBTyxDQUFDSixNQUFNRSxJQUFJLElBQUlGLE1BQU1FLElBQUksQ0FBQyxFQUFFLEdBQUdGLE1BQU1FLElBQUk7UUFDbkUsSUFBSSxDQUFDQSxRQUFRLENBQUNBLEtBQUtHLFFBQVEsRUFBRTtZQUMzQixPQUFPdkIsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFtQjtRQUMxRDtRQUVBLElBQUk7WUFDRixNQUFNb0IsV0FBVyxNQUFNMUMsMkRBQW1CLENBQUNzQyxLQUFLRyxRQUFRO1lBRXhELE1BQU1HLFdBQVcsQ0FBQyxTQUFTLEVBQUUxQyx3Q0FBTUEsR0FBRyxDQUFDLEVBQUVvQyxLQUFLTyxnQkFBZ0IsRUFBRTtZQUVoRSxNQUFNLEVBQUV2QixPQUFPd0IsV0FBVyxFQUFFLEdBQUcsTUFBTW5DLFNBQVNvQyxPQUFPLENBQ2xEQyxJQUFJLENBQUMsa0JBQ0xDLE1BQU0sQ0FBQ0wsVUFBVUYsVUFBVTtnQkFDMUJRLGFBQWFaLEtBQUthLFFBQVE7Z0JBQzFCQyxRQUFRO1lBQ1Y7WUFFRixJQUFJTixhQUFhO2dCQUNmVCxRQUFRZixLQUFLLENBQUMsa0JBQWtCd0I7Z0JBQ2hDLE9BQU81QixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxPQUFPO2dCQUF5QjtZQUNoRTtZQUVBLE1BQU0sRUFDSitCLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEVBQ3BCLEdBQUczQyxTQUFTb0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsa0JBQWtCTyxZQUFZLENBQUNYO1lBRXpELE9BQU8xQixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFbUMsVUFBVUY7WUFBVTtRQUNwRCxFQUFFLE9BQU9HLEdBQUc7WUFDVnBCLFFBQVFmLEtBQUssQ0FBQyxpQkFBaUJtQztZQUMvQixPQUFPdkMsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFzQjtRQUM3RDtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGFsYWtcXERlc2t0b3BcXG9tYnJlLXByb2plY3RcXGJhY2tlbmRcXHBhZ2VzXFxhcGlcXGFkbWluXFxwcm9kdWN0c1xcdXBsb2FkLWltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluY29taW5nRm9ybSB9IGZyb20gXCJmb3JtaWRhYmxlXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7IC8vIFRoaXMgZ2l2ZXMgeW91IGFjY2VzcyB0byBleGlzdHNTeW5jIGFuZCBta2RpclN5bmNcbmltcG9ydCBmc1Byb21pc2VzIGZyb20gXCJmcy9wcm9taXNlc1wiOyAvLyBTdGlsbCBuZWVkZWQgZm9yIHJlYWRGaWxlXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xuaW1wb3J0IGNvcnMsIHsgcnVuTWlkZGxld2FyZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9saWIvY29yc1wiO1xuaW1wb3J0IG9zIGZyb20gXCJvc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuLy8gRGlzYWJsZSBkZWZhdWx0IGJvZHkgcGFyc2VyIHRvIGFsbG93IGZvcm1pZGFibGUgdG8gaGFuZGxlIG11bHRpcGFydFxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgYm9keVBhcnNlcjogZmFsc2UsXG4gIH0sXG59O1xuXG4vLyBJbml0aWFsaXplIFN1cGFiYXNlIHdpdGggU0VSVklDRSBST0xFIEtFWVxuY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoXG4gIHByb2Nlc3MuZW52LlNVUEFCQVNFX1VSTCxcbiAgcHJvY2Vzcy5lbnYuU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSAvLyBVc2UgZW52IHZhciBvbmx5IG9uIHNlcnZlclxuKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBhd2FpdCBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBjb3JzKTtcblxuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XG5cbiAgLy8gR2V0IE9TLXNwZWNpZmljIHRlbXAgZGlyZWN0b3J5IChjcm9zcy1wbGF0Zm9ybSBzYWZlKVxuICBjb25zdCB0ZW1wRGlyID0gcGF0aC5qb2luKG9zLnRtcGRpcigpKTtcblxuICAvLyBFbnN1cmUgdGVtcCBkaXJlY3RvcnkgZXhpc3RzXG4gIGlmICghZnMuZXhpc3RzU3luYyh0ZW1wRGlyKSkge1xuICAgIGZzLm1rZGlyU3luYyh0ZW1wRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNvbnN0IGZvcm0gPSBuZXcgSW5jb21pbmdGb3JtKHtcbiAgICB1cGxvYWREaXI6IHRlbXBEaXIsXG4gICAga2VlcEV4dGVuc2lvbnM6IHRydWUsXG5cbiAgICBtYXhGaWxlU2l6ZTogNTAgKiAxMDI0ICogMTAyNCwgLy8gNTAgTUIgaW4gYnl0ZXMg4pyFXG4gIH0pO1xuICBmb3JtLnBhcnNlKHJlcSwgYXN5bmMgKGVyciwgZmllbGRzLCBmaWxlcykgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGb3JtIHBhcnNlIGVycm9yOlwiLCBlcnIpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIHBhcnNlIGZvcm0gZGF0YVwiIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGUgPSBBcnJheS5pc0FycmF5KGZpbGVzLmZpbGUpID8gZmlsZXMuZmlsZVswXSA6IGZpbGVzLmZpbGU7XG4gICAgaWYgKCFmaWxlIHx8ICFmaWxlLmZpbGVwYXRoKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogXCJObyBmaWxlIHVwbG9hZGVkXCIgfSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpbGVEYXRhID0gYXdhaXQgZnNQcm9taXNlcy5yZWFkRmlsZShmaWxlLmZpbGVwYXRoKTtcblxuICAgICAgY29uc3QgZmlsZU5hbWUgPSBgcHJvZHVjdHMvJHt1dWlkdjQoKX1fJHtmaWxlLm9yaWdpbmFsRmlsZW5hbWV9YDtcblxuICAgICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcbiAgICAgICAgLmZyb20oXCJwcm9kdWN0LWltYWdlc1wiKVxuICAgICAgICAudXBsb2FkKGZpbGVOYW1lLCBmaWxlRGF0YSwge1xuICAgICAgICAgIGNvbnRlbnRUeXBlOiBmaWxlLm1pbWV0eXBlLFxuICAgICAgICAgIHVwc2VydDogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgIGlmICh1cGxvYWRFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVXBsb2FkIGZhaWxlZDpcIiwgdXBsb2FkRXJyb3IpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJGYWlsZWQgdG8gdXBsb2FkIGltYWdlXCIgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YTogeyBwdWJsaWNVcmwgfSxcbiAgICAgIH0gPSBzdXBhYmFzZS5zdG9yYWdlLmZyb20oXCJwcm9kdWN0LWltYWdlc1wiKS5nZXRQdWJsaWNVcmwoZmlsZU5hbWUpO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBpbWFnZVVybDogcHVibGljVXJsIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZXJyb3I6XCIsIGUpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiSW1hZ2UgdXBsb2FkIGZhaWxlZFwiIH0pO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiSW5jb21pbmdGb3JtIiwiZnMiLCJmc1Byb21pc2VzIiwidjQiLCJ1dWlkdjQiLCJjcmVhdGVDbGllbnQiLCJjb3JzIiwicnVuTWlkZGxld2FyZSIsIm9zIiwicGF0aCIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJzdXBhYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJTVVBBQkFTRV9VUkwiLCJTVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInRlbXBEaXIiLCJqb2luIiwidG1wZGlyIiwiZXhpc3RzU3luYyIsIm1rZGlyU3luYyIsInJlY3Vyc2l2ZSIsImZvcm0iLCJ1cGxvYWREaXIiLCJrZWVwRXh0ZW5zaW9ucyIsIm1heEZpbGVTaXplIiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsImNvbnNvbGUiLCJmaWxlIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsZXBhdGgiLCJmaWxlRGF0YSIsInJlYWRGaWxlIiwiZmlsZU5hbWUiLCJvcmlnaW5hbEZpbGVuYW1lIiwidXBsb2FkRXJyb3IiLCJzdG9yYWdlIiwiZnJvbSIsInVwbG9hZCIsImNvbnRlbnRUeXBlIiwibWltZXR5cGUiLCJ1cHNlcnQiLCJkYXRhIiwicHVibGljVXJsIiwiZ2V0UHVibGljVXJsIiwiaW1hZ2VVcmwiLCJlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/admin/products/upload-image.js\n");

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