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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/lib/device.ts":
/*!***************************!*\
  !*** ./src/lib/device.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isHoverableDevice: () => (/* binding */ isHoverableDevice),\n/* harmony export */   useBreakpoint: () => (/* binding */ useBreakpoint),\n/* harmony export */   useBreakpointMatches: () => (/* binding */ useBreakpointMatches),\n/* harmony export */   useWindowWidthListener: () => (/* binding */ useWindowWidthListener)\n/* harmony export */ });\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jotai */ \"jotai\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);\njotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction isHoverableDevice() {\n    if (true) return false;\n    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;\n}\n// Breakpoints\nconst BREAKPOINTS = {\n    xl: 1280,\n    lg: 1024,\n    md: 768,\n    sm: 640,\n    xs: 0\n};\n// Sort breakpoints from largest to smallest\nconst SORTED_BREAKPOINTS = Object.entries(BREAKPOINTS).sort((a, b)=>b[1] - a[1]);\n// Start with a default value of 0 for both server and client to avoid hydration mismatch\nconst windowWidthAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(0);\n/**\n * The current breakpoint\n */ const breakpointAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>{\n    const width = get(windowWidthAtom);\n    for (const [name, breakpoint] of SORTED_BREAKPOINTS){\n        if (width >= breakpoint) {\n            return name;\n        }\n    }\n    return 'xs';\n});\nconst useBreakpoint = ()=>(0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtomValue)(breakpointAtom);\nconst useBreakpointMatches = ()=>{\n    const windowWidth = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtomValue)(windowWidthAtom);\n    return {\n        xs: windowWidth >= BREAKPOINTS.xs,\n        sm: windowWidth >= BREAKPOINTS.sm,\n        md: windowWidth >= BREAKPOINTS.md,\n        lg: windowWidth >= BREAKPOINTS.lg,\n        xl: windowWidth >= BREAKPOINTS.xl\n    };\n};\nfunction useWindowWidthListener() {\n    const setWindowWidth = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useSetAtom)(windowWidthAtom);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"useWindowWidthListener.useEffect\": ()=>{\n            if (true) return;\n            // Update initial width - only after the component is mounted on the client\n            setWindowWidth(window.innerWidth);\n            const handleResize = {\n                \"useWindowWidthListener.useEffect.handleResize\": ()=>{\n                    setWindowWidth(window.innerWidth);\n                }\n            }[\"useWindowWidthListener.useEffect.handleResize\"];\n            window.addEventListener('resize', handleResize);\n            return ({\n                \"useWindowWidthListener.useEffect\": ()=>{\n                    window.removeEventListener('resize', handleResize);\n                }\n            })[\"useWindowWidthListener.useEffect\"];\n        }\n    }[\"useWindowWidthListener.useEffect\"], [\n        setWindowWidth\n    ]);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9saWIvZGV2aWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDckI7QUFFM0IsU0FBU0k7SUFDZCxJQUFJLElBQTZCLEVBQUUsT0FBTztJQUMxQyxPQUFPQyxPQUFPQyxVQUFVLENBQUMsc0NBQXNDQyxPQUFPO0FBQ3hFO0FBRUEsY0FBYztBQUNkLE1BQU1DLGNBQWM7SUFBRUMsSUFBSTtJQUFNQyxJQUFJO0lBQU1DLElBQUk7SUFBS0MsSUFBSTtJQUFLQyxJQUFJO0FBQUU7QUFHbEUsNENBQTRDO0FBQzVDLE1BQU1DLHFCQUFxQkMsT0FBT0MsT0FBTyxDQUFDUixhQUFhUyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUEsQ0FBQyxDQUFDLEVBQUUsR0FBR0QsQ0FBQyxDQUFDLEVBQUU7QUFLakYseUZBQXlGO0FBQ3pGLE1BQU1FLGtCQUFrQnBCLDJDQUFJQSxDQUFDO0FBRTdCOztDQUVDLEdBQ0QsTUFBTXFCLGlCQUFpQnJCLDJDQUFJQSxDQUFhLENBQUNzQjtJQUN2QyxNQUFNQyxRQUFRRCxJQUFJRjtJQUVsQixLQUFLLE1BQU0sQ0FBQ0ksTUFBTUMsV0FBVyxJQUFJWCxtQkFBb0I7UUFDbkQsSUFBSVMsU0FBU0UsWUFBWTtZQUN2QixPQUFPRDtRQUNUO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFTyxNQUFNRSxnQkFBZ0IsSUFBTXpCLG1EQUFZQSxDQUFDb0IsZ0JBQWdCO0FBRXpELE1BQU1NLHVCQUF1QjtJQUNsQyxNQUFNQyxjQUFjM0IsbURBQVlBLENBQUNtQjtJQUVqQyxPQUFPO1FBQ0xQLElBQUllLGVBQWVwQixZQUFZSyxFQUFFO1FBQ2pDRCxJQUFJZ0IsZUFBZXBCLFlBQVlJLEVBQUU7UUFDakNELElBQUlpQixlQUFlcEIsWUFBWUcsRUFBRTtRQUNqQ0QsSUFBSWtCLGVBQWVwQixZQUFZRSxFQUFFO1FBQ2pDRCxJQUFJbUIsZUFBZXBCLFlBQVlDLEVBQUU7SUFDbkM7QUFDRixFQUFFO0FBRUssU0FBU29CO0lBQ2QsTUFBTUMsaUJBQWlCNUIsaURBQVVBLENBQUNrQjtJQUVsQ2pCLGdEQUFTQTs0Q0FBQztZQUNSLElBQUksSUFBNkIsRUFBRTtZQUVuQywyRUFBMkU7WUFDM0UyQixlQUFlekIsT0FBTzBCLFVBQVU7WUFFaEMsTUFBTUM7aUVBQWU7b0JBQ25CRixlQUFlekIsT0FBTzBCLFVBQVU7Z0JBQ2xDOztZQUVBMUIsT0FBTzRCLGdCQUFnQixDQUFDLFVBQVVEO1lBQ2xDO29EQUFPO29CQUNMM0IsT0FBTzZCLG1CQUFtQixDQUFDLFVBQVVGO2dCQUN2Qzs7UUFDRjsyQ0FBRztRQUFDRjtLQUFlO0FBQ3JCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXE1hcmlhMVxcRG93bmxvYWRzXFxtZXRlb3JhLWludmVudC1tYWluXFxtZXRlb3JhLWludmVudC1tYWluXFxzY2FmZm9sZHNcXGZ1bi1sYXVuY2hcXHNyY1xcbGliXFxkZXZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSwgdXNlQXRvbVZhbHVlLCB1c2VTZXRBdG9tIH0gZnJvbSAnam90YWknO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNIb3ZlcmFibGVEZXZpY2UoKTogYm9vbGVhbiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEoJyhob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSknKS5tYXRjaGVzO1xufVxuXG4vLyBCcmVha3BvaW50c1xuY29uc3QgQlJFQUtQT0lOVFMgPSB7IHhsOiAxMjgwLCBsZzogMTAyNCwgbWQ6IDc2OCwgc206IDY0MCwgeHM6IDAgfSBhcyBjb25zdDtcbnR5cGUgQnJlYWtwb2ludCA9IGtleW9mIHR5cGVvZiBCUkVBS1BPSU5UUztcblxuLy8gU29ydCBicmVha3BvaW50cyBmcm9tIGxhcmdlc3QgdG8gc21hbGxlc3RcbmNvbnN0IFNPUlRFRF9CUkVBS1BPSU5UUyA9IE9iamVjdC5lbnRyaWVzKEJSRUFLUE9JTlRTKS5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSkgYXMgW1xuICBCcmVha3BvaW50LFxuICBudW1iZXIsXG5dW107XG5cbi8vIFN0YXJ0IHdpdGggYSBkZWZhdWx0IHZhbHVlIG9mIDAgZm9yIGJvdGggc2VydmVyIGFuZCBjbGllbnQgdG8gYXZvaWQgaHlkcmF0aW9uIG1pc21hdGNoXG5jb25zdCB3aW5kb3dXaWR0aEF0b20gPSBhdG9tKDApO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50IGJyZWFrcG9pbnRcbiAqL1xuY29uc3QgYnJlYWtwb2ludEF0b20gPSBhdG9tPEJyZWFrcG9pbnQ+KChnZXQpID0+IHtcbiAgY29uc3Qgd2lkdGggPSBnZXQod2luZG93V2lkdGhBdG9tKTtcblxuICBmb3IgKGNvbnN0IFtuYW1lLCBicmVha3BvaW50XSBvZiBTT1JURURfQlJFQUtQT0lOVFMpIHtcbiAgICBpZiAod2lkdGggPj0gYnJlYWtwb2ludCkge1xuICAgICAgcmV0dXJuIG5hbWUgYXMgQnJlYWtwb2ludDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJ3hzJztcbn0pO1xuXG5leHBvcnQgY29uc3QgdXNlQnJlYWtwb2ludCA9ICgpID0+IHVzZUF0b21WYWx1ZShicmVha3BvaW50QXRvbSk7XG5cbmV4cG9ydCBjb25zdCB1c2VCcmVha3BvaW50TWF0Y2hlcyA9ICgpID0+IHtcbiAgY29uc3Qgd2luZG93V2lkdGggPSB1c2VBdG9tVmFsdWUod2luZG93V2lkdGhBdG9tKTtcblxuICByZXR1cm4ge1xuICAgIHhzOiB3aW5kb3dXaWR0aCA+PSBCUkVBS1BPSU5UUy54cyxcbiAgICBzbTogd2luZG93V2lkdGggPj0gQlJFQUtQT0lOVFMuc20sXG4gICAgbWQ6IHdpbmRvd1dpZHRoID49IEJSRUFLUE9JTlRTLm1kLFxuICAgIGxnOiB3aW5kb3dXaWR0aCA+PSBCUkVBS1BPSU5UUy5sZyxcbiAgICB4bDogd2luZG93V2lkdGggPj0gQlJFQUtQT0lOVFMueGwsXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlV2luZG93V2lkdGhMaXN0ZW5lcigpOiB2b2lkIHtcbiAgY29uc3Qgc2V0V2luZG93V2lkdGggPSB1c2VTZXRBdG9tKHdpbmRvd1dpZHRoQXRvbSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgIC8vIFVwZGF0ZSBpbml0aWFsIHdpZHRoIC0gb25seSBhZnRlciB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQgb24gdGhlIGNsaWVudFxuICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcblxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgIH07XG4gIH0sIFtzZXRXaW5kb3dXaWR0aF0pO1xufVxuIl0sIm5hbWVzIjpbImF0b20iLCJ1c2VBdG9tVmFsdWUiLCJ1c2VTZXRBdG9tIiwidXNlRWZmZWN0IiwiaXNIb3ZlcmFibGVEZXZpY2UiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsIkJSRUFLUE9JTlRTIiwieGwiLCJsZyIsIm1kIiwic20iLCJ4cyIsIlNPUlRFRF9CUkVBS1BPSU5UUyIsIk9iamVjdCIsImVudHJpZXMiLCJzb3J0IiwiYSIsImIiLCJ3aW5kb3dXaWR0aEF0b20iLCJicmVha3BvaW50QXRvbSIsImdldCIsIndpZHRoIiwibmFtZSIsImJyZWFrcG9pbnQiLCJ1c2VCcmVha3BvaW50IiwidXNlQnJlYWtwb2ludE1hdGNoZXMiLCJ3aW5kb3dXaWR0aCIsInVzZVdpbmRvd1dpZHRoTGlzdGVuZXIiLCJzZXRXaW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/lib/device.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"(pages-dir-node)/./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _jup_ag_wallet_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jup-ag/wallet-adapter */ \"@jup-ag/wallet-adapter\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sonner */ \"sonner\");\n/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ \"@solana/wallet-adapter-wallets\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _lib_device__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/lib/device */ \"(pages-dir-node)/./src/lib/device.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_jup_ag_wallet_adapter__WEBPACK_IMPORTED_MODULE_2__, next_themes__WEBPACK_IMPORTED_MODULE_3__, sonner__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__, _lib_device__WEBPACK_IMPORTED_MODULE_8__]);\n([_jup_ag_wallet_adapter__WEBPACK_IMPORTED_MODULE_2__, next_themes__WEBPACK_IMPORTED_MODULE_3__, sonner__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__, _lib_device__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nfunction AppProviders({ Component, pageProps }) {\n    const { resolvedTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme)();\n    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)({\n        \"AppProviders.useMemo[wallets]\": ()=>{\n            return [\n                new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.PhantomWalletAdapter(),\n                new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.SolflareWalletAdapter()\n            ].filter({\n                \"AppProviders.useMemo[wallets]\": (item)=>item && item.name && item.icon\n            }[\"AppProviders.useMemo[wallets]\"]);\n        }\n    }[\"AppProviders.useMemo[wallets]\"], []);\n    const queryClient = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)({\n        \"AppProviders.useMemo[queryClient]\": ()=>new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.QueryClient()\n    }[\"AppProviders.useMemo[queryClient]\"], []);\n    (0,_lib_device__WEBPACK_IMPORTED_MODULE_8__.useWindowWidthListener)();\n    const walletTheme = resolvedTheme === 'light' ? 'light' : 'dark';\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.QueryClientProvider, {\n        client: queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_jup_ag_wallet_adapter__WEBPACK_IMPORTED_MODULE_2__.UnifiedWalletProvider, {\n            wallets: wallets,\n            config: {\n                env: 'mainnet-beta',\n                autoConnect: true,\n                metadata: {\n                    name: 'UnifiedWallet',\n                    description: 'UnifiedWallet',\n                    url: 'https://jup.ag',\n                    iconUrls: [\n                        'https://jup.ag/favicon.ico'\n                    ]\n                },\n                // notificationCallback: WalletNotification,\n                theme: walletTheme,\n                lang: 'en'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(sonner__WEBPACK_IMPORTED_MODULE_4__.Toaster, {\n                    theme: walletTheme,\n                    richColors: true,\n                    closeButton: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Maria1\\\\Downloads\\\\meteora-invent-main\\\\meteora-invent-main\\\\scaffolds\\\\fun-launch\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Maria1\\\\Downloads\\\\meteora-invent-main\\\\meteora-invent-main\\\\scaffolds\\\\fun-launch\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Maria1\\\\Downloads\\\\meteora-invent-main\\\\meteora-invent-main\\\\scaffolds\\\\fun-launch\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Maria1\\\\Downloads\\\\meteora-invent-main\\\\meteora-invent-main\\\\scaffolds\\\\fun-launch\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\nfunction App(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n        attribute: \"class\",\n        defaultTheme: \"dark\",\n        disableTransitionOnChange: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppProviders, {\n            ...props\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Maria1\\\\Downloads\\\\meteora-invent-main\\\\meteora-invent-main\\\\scaffolds\\\\fun-launch\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Maria1\\\\Downloads\\\\meteora-invent-main\\\\meteora-invent-main\\\\scaffolds\\\\fun-launch\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUMwQztBQUVsQjtBQUNyQjtBQUM0RDtBQUM3RDtBQUN5QztBQUNuQjtBQUV0RCxTQUFTVSxhQUFhLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQ3RELE1BQU0sRUFBRUMsYUFBYSxFQUFFLEdBQUdYLHFEQUFRQTtJQUVsQyxNQUFNWSxVQUFxQlIsOENBQU9BO3lDQUFDO1lBQ2pDLE9BQU87Z0JBQUMsSUFBSUYsZ0ZBQW9CQTtnQkFBSSxJQUFJQyxpRkFBcUJBO2FBQUcsQ0FBQ1UsTUFBTTtpREFDckUsQ0FBQ0MsT0FBU0EsUUFBUUEsS0FBS0MsSUFBSSxJQUFJRCxLQUFLRSxJQUFJOztRQUU1Qzt3Q0FBRyxFQUFFO0lBRUwsTUFBTUMsY0FBY2IsOENBQU9BOzZDQUFDLElBQU0sSUFBSUMsOERBQVdBOzRDQUFJLEVBQUU7SUFFdkRFLG1FQUFzQkE7SUFFdEIsTUFBTVcsY0FBY1Asa0JBQWtCLFVBQVUsVUFBVTtJQUUxRCxxQkFDRSw4REFBQ0wsc0VBQW1CQTtRQUFDYSxRQUFRRjtrQkFDM0IsNEVBQUNuQix5RUFBcUJBO1lBQ3BCYyxTQUFTQTtZQUNUUSxRQUFRO2dCQUNOQyxLQUFLO2dCQUNMQyxhQUFhO2dCQUNiQyxVQUFVO29CQUNSUixNQUFNO29CQUNOUyxhQUFhO29CQUNiQyxLQUFLO29CQUNMQyxVQUFVO3dCQUFDO3FCQUE2QjtnQkFDMUM7Z0JBQ0EsNENBQTRDO2dCQUM1Q0MsT0FBT1Q7Z0JBQ1BVLE1BQU07WUFDUjs7OEJBRUEsOERBQUMzQiwyQ0FBT0E7b0JBQUMwQixPQUFPVDtvQkFBYVcsVUFBVTtvQkFBQ0MsV0FBVzs7Ozs7OzhCQUNuRCw4REFBQ3JCO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDO0FBRWUsU0FBU3FCLElBQUlDLEtBQWU7SUFDekMscUJBQ0UsOERBQUNqQyxzREFBYUE7UUFBQ2tDLFdBQVU7UUFBUUMsY0FBYTtRQUFPQyx5QkFBeUI7a0JBQzVFLDRFQUFDM0I7WUFBYyxHQUFHd0IsS0FBSzs7Ozs7Ozs7Ozs7QUFHN0IiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyaWExXFxEb3dubG9hZHNcXG1ldGVvcmEtaW52ZW50LW1haW5cXG1ldGVvcmEtaW52ZW50LW1haW5cXHNjYWZmb2xkc1xcZnVuLWxhdW5jaFxcc3JjXFxwYWdlc1xcX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyBBZGFwdGVyLCBVbmlmaWVkV2FsbGV0UHJvdmlkZXIgfSBmcm9tICdAanVwLWFnL3dhbGxldC1hZGFwdGVyJztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJztcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tICdzb25uZXInO1xuaW1wb3J0IHsgUGhhbnRvbVdhbGxldEFkYXB0ZXIsIFNvbGZsYXJlV2FsbGV0QWRhcHRlciB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItd2FsbGV0cyc7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgdXNlV2luZG93V2lkdGhMaXN0ZW5lciB9IGZyb20gJ0AvbGliL2RldmljZSc7XG5cbmZ1bmN0aW9uIEFwcFByb3ZpZGVycyh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IHsgcmVzb2x2ZWRUaGVtZSB9ID0gdXNlVGhlbWUoKTtcblxuICBjb25zdCB3YWxsZXRzOiBBZGFwdGVyW10gPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gW25ldyBQaGFudG9tV2FsbGV0QWRhcHRlcigpLCBuZXcgU29sZmxhcmVXYWxsZXRBZGFwdGVyKCldLmZpbHRlcihcbiAgICAgIChpdGVtKSA9PiBpdGVtICYmIGl0ZW0ubmFtZSAmJiBpdGVtLmljb25cbiAgICApIGFzIEFkYXB0ZXJbXTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlTWVtbygoKSA9PiBuZXcgUXVlcnlDbGllbnQoKSwgW10pO1xuXG4gIHVzZVdpbmRvd1dpZHRoTGlzdGVuZXIoKTtcblxuICBjb25zdCB3YWxsZXRUaGVtZSA9IHJlc29sdmVkVGhlbWUgPT09ICdsaWdodCcgPyAnbGlnaHQnIDogJ2RhcmsnO1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICA8VW5pZmllZFdhbGxldFByb3ZpZGVyXG4gICAgICAgIHdhbGxldHM9e3dhbGxldHN9XG4gICAgICAgIGNvbmZpZz17e1xuICAgICAgICAgIGVudjogJ21haW5uZXQtYmV0YScsXG4gICAgICAgICAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgIG5hbWU6ICdVbmlmaWVkV2FsbGV0JyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVW5pZmllZFdhbGxldCcsXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2p1cC5hZycsXG4gICAgICAgICAgICBpY29uVXJsczogWydodHRwczovL2p1cC5hZy9mYXZpY29uLmljbyddLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gbm90aWZpY2F0aW9uQ2FsbGJhY2s6IFdhbGxldE5vdGlmaWNhdGlvbixcbiAgICAgICAgICB0aGVtZTogd2FsbGV0VGhlbWUsXG4gICAgICAgICAgbGFuZzogJ2VuJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFRvYXN0ZXIgdGhlbWU9e3dhbGxldFRoZW1lfSByaWNoQ29sb3JzIGNsb3NlQnV0dG9uIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVW5pZmllZFdhbGxldFByb3ZpZGVyPlxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHByb3BzOiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIGF0dHJpYnV0ZT1cImNsYXNzXCIgZGVmYXVsdFRoZW1lPVwiZGFya1wiIGRpc2FibGVUcmFuc2l0aW9uT25DaGFuZ2U+XG4gICAgICA8QXBwUHJvdmlkZXJzIHsuLi5wcm9wc30gLz5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiVW5pZmllZFdhbGxldFByb3ZpZGVyIiwiVGhlbWVQcm92aWRlciIsInVzZVRoZW1lIiwiVG9hc3RlciIsIlBoYW50b21XYWxsZXRBZGFwdGVyIiwiU29sZmxhcmVXYWxsZXRBZGFwdGVyIiwidXNlTWVtbyIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsInVzZVdpbmRvd1dpZHRoTGlzdGVuZXIiLCJBcHBQcm92aWRlcnMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyZXNvbHZlZFRoZW1lIiwid2FsbGV0cyIsImZpbHRlciIsIml0ZW0iLCJuYW1lIiwiaWNvbiIsInF1ZXJ5Q2xpZW50Iiwid2FsbGV0VGhlbWUiLCJjbGllbnQiLCJjb25maWciLCJlbnYiLCJhdXRvQ29ubmVjdCIsIm1ldGFkYXRhIiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJpY29uVXJscyIsInRoZW1lIiwibGFuZyIsInJpY2hDb2xvcnMiLCJjbG9zZUJ1dHRvbiIsIkFwcCIsInByb3BzIiwiYXR0cmlidXRlIiwiZGVmYXVsdFRoZW1lIiwiZGlzYWJsZVRyYW5zaXRpb25PbkNoYW5nZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@jup-ag/wallet-adapter":
/*!*****************************************!*\
  !*** external "@jup-ag/wallet-adapter" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@jup-ag/wallet-adapter");;

/***/ }),

/***/ "@solana/wallet-adapter-wallets":
/*!*************************************************!*\
  !*** external "@solana/wallet-adapter-wallets" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-wallets");;

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "jotai":
/*!************************!*\
  !*** external "jotai" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("jotai");;

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("next-themes");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "sonner":
/*!*************************!*\
  !*** external "sonner" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = import("sonner");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();