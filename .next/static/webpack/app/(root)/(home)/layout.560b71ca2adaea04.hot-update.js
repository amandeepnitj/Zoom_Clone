"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/(home)/layout",{

/***/ "(app-pages-browser)/./components/Sidebar.tsx":
/*!********************************!*\
  !*** ./components/Sidebar.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Sidebar = ()=>{\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    return(// <div>Sidebar</div>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-1 flex-col gap-6\",\n            children: _constants__WEBPACK_IMPORTED_MODULE_2__.sidebarLinks.map((link)=>{\n                const isActive = pathname === link.route || pathname.startsWith(\"\".concat(link.route, \"/\"));\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    href: link.route,\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(\"flex gap-4 items-center p-4 rounded-lg justify-start\", {\n                        \"bg-blue-1\": isActive\n                    }),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            src: link.imgUrl,\n                            alt: link.label,\n                            width: 24,\n                            height: 24\n                        }, void 0, false, {\n                            fileName: \"/Users/amandeepsingh/Desktop/Zoom_Clone/components/Sidebar.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 19\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg font-semibold max-lg:hidden\",\n                            children: link.label\n                        }, void 0, false, {\n                            fileName: \"/Users/amandeepsingh/Desktop/Zoom_Clone/components/Sidebar.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 19\n                        }, undefined)\n                    ]\n                }, link.label, true, {\n                    fileName: \"/Users/amandeepsingh/Desktop/Zoom_Clone/components/Sidebar.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/amandeepsingh/Desktop/Zoom_Clone/components/Sidebar.tsx\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/amandeepsingh/Desktop/Zoom_Clone/components/Sidebar.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined));\n};\n_s(Sidebar, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHeUI7QUFDaUI7QUFDRztBQUNoQjtBQUVJO0FBQ0Y7QUFFL0IsTUFBTU0sVUFBVTs7SUFDZCxNQUFNQyxXQUFXTCw0REFBV0E7SUFDNUIsT0FDRSxxQkFBcUI7a0JBQ3JCLDhEQUFDTTtRQUFRQyxXQUFVO2tCQUNmLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNWUixvREFBWUEsQ0FBQ1UsR0FBRyxDQUFDLENBQUNDO2dCQUNqQixNQUFNQyxXQUFXTixhQUFhSyxLQUFLRSxLQUFLLElBQUlQLFNBQVNRLFVBQVUsQ0FBQyxHQUFjLE9BQVhILEtBQUtFLEtBQUssRUFBQztnQkFFOUUscUJBQ0UsOERBQUNYLGlEQUFJQTtvQkFDTGEsTUFBTUosS0FBS0UsS0FBSztvQkFFaEJMLFdBQVdMLDhDQUFFQSxDQUFDLHdEQUNaO3dCQUNFLGFBQWNTO29CQUNoQjs7c0NBRUEsOERBQUNSLGtEQUFLQTs0QkFDTlksS0FBTUwsS0FBS00sTUFBTTs0QkFDakJDLEtBQU1QLEtBQUtRLEtBQUs7NEJBQ2hCQyxPQUFPOzRCQUNQQyxRQUFROzs7Ozs7c0NBQ1IsOERBQUNDOzRCQUFFZCxXQUFVO3NDQUNWRyxLQUFLUSxLQUFLOzs7Ozs7O21CQVpUUixLQUFLUSxLQUFLOzs7OztZQW1CcEI7Ozs7Ozs7Ozs7O0FBSVo7R0FuQ01kOztRQUNhSix3REFBV0E7OztLQUR4Qkk7QUFxQ04sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLnRzeD82YmE5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzaWRlYmFyTGlua3MgfSBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHsgY24gfSBmcm9tICdAL2xpYi91dGlscyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgcmV0dXJuIChcbiAgICAvLyA8ZGl2PlNpZGViYXI8L2Rpdj5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzdGlja3kgbGVmdC0wIHRvcC0wIGZsZXggaC1zY3JlZW4gdy1maXQgZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGJnLWRhcmstMSBwLTYgcHQtMjggdGV4dC13aGl0ZSBtYXgtc206aGlkZGVuIGxnOnctWzI2NHB4XVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LTEgZmxleC1jb2wgZ2FwLTYnPlxuICAgICAgICAgICAge3NpZGViYXJMaW5rcy5tYXAoKGxpbmspPT57XG4gICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gcGF0aG5hbWUgPT09IGxpbmsucm91dGUgfHwgcGF0aG5hbWUuc3RhcnRzV2l0aChgJHtsaW5rLnJvdXRlfS9gKTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17bGluay5yb3V0ZX1cbiAgICAgICAgICAgICAgICBrZXkgPXtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ2ZsZXggZ2FwLTQgaXRlbXMtY2VudGVyIHAtNCByb3VuZGVkLWxnIGp1c3RpZnktc3RhcnQnLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnYmctYmx1ZS0xJyA6IGlzQWN0aXZlLFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICl9PlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmMgPXtsaW5rLmltZ1VybH1cbiAgICAgICAgICAgICAgICAgIGFsdCA9e2xpbmsubGFiZWx9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjR9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI0fS8+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCBtYXgtbGc6aGlkZGVuJyA+XG4gICAgICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuXG5cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyIl0sIm5hbWVzIjpbIlJlYWN0Iiwic2lkZWJhckxpbmtzIiwidXNlUGF0aG5hbWUiLCJMaW5rIiwiY24iLCJJbWFnZSIsIlNpZGViYXIiLCJwYXRobmFtZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJtYXAiLCJsaW5rIiwiaXNBY3RpdmUiLCJyb3V0ZSIsInN0YXJ0c1dpdGgiLCJocmVmIiwic3JjIiwiaW1nVXJsIiwiYWx0IiwibGFiZWwiLCJ3aWR0aCIsImhlaWdodCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Sidebar.tsx\n"));

/***/ })

});