module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[externals]/@jup-ag/wallet-adapter [external] (@jup-ag/wallet-adapter, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@jup-ag/wallet-adapter");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/next-themes [external] (next-themes, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("next-themes");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/sonner [external] (sonner, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("sonner");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@solana/wallet-adapter-wallets [external] (@solana/wallet-adapter-wallets, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@solana/wallet-adapter-wallets");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/react [external] (react, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react", () => require("react"));

module.exports = mod;
}),
"[externals]/@tanstack/react-query [external] (@tanstack/react-query, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@tanstack/react-query");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/jotai [external] (jotai, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("jotai");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/scaffolds/fun-launch/src/lib/device.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "isHoverableDevice",
    ()=>isHoverableDevice,
    "useBreakpoint",
    ()=>useBreakpoint,
    "useBreakpointMatches",
    ()=>useBreakpointMatches,
    "useWindowWidthListener",
    ()=>useWindowWidthListener
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/jotai [external] (jotai, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function isHoverableDevice() {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
// Breakpoints
const BREAKPOINTS = {
    xl: 1280,
    lg: 1024,
    md: 768,
    sm: 640,
    xs: 0
};
// Sort breakpoints from largest to smallest
const SORTED_BREAKPOINTS = Object.entries(BREAKPOINTS).sort((a, b)=>b[1] - a[1]);
// Start with a default value of 0 for both server and client to avoid hydration mismatch
const windowWidthAtom = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__["atom"])(0);
/**
 * The current breakpoint
 */ const breakpointAtom = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__["atom"])((get)=>{
    const width = get(windowWidthAtom);
    for (const [name, breakpoint] of SORTED_BREAKPOINTS){
        if (width >= breakpoint) {
            return name;
        }
    }
    return 'xs';
});
const useBreakpoint = ()=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__["useAtomValue"])(breakpointAtom);
const useBreakpointMatches = ()=>{
    const windowWidth = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__["useAtomValue"])(windowWidthAtom);
    return {
        xs: windowWidth >= BREAKPOINTS.xs,
        sm: windowWidth >= BREAKPOINTS.sm,
        md: windowWidth >= BREAKPOINTS.md,
        lg: windowWidth >= BREAKPOINTS.lg,
        xl: windowWidth >= BREAKPOINTS.xl
    };
};
function useWindowWidthListener() {
    const setWindowWidth = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__["useSetAtom"])(windowWidthAtom);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const handleResize = undefined;
    }, [
        setWindowWidth
    ]);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/pages/_app.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$jup$2d$ag$2f$wallet$2d$adapter__$5b$external$5d$__$2840$jup$2d$ag$2f$wallet$2d$adapter$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@jup-ag/wallet-adapter [external] (@jup-ag/wallet-adapter, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/next-themes [external] (next-themes, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/sonner [external] (sonner, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$solana$2f$wallet$2d$adapter$2d$wallets__$5b$external$5d$__$2840$solana$2f$wallet$2d$adapter$2d$wallets$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@solana/wallet-adapter-wallets [external] (@solana/wallet-adapter-wallets, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tanstack/react-query [external] (@tanstack/react-query, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/device.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$jup$2d$ag$2f$wallet$2d$adapter__$5b$external$5d$__$2840$jup$2d$ag$2f$wallet$2d$adapter$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$solana$2f$wallet$2d$adapter$2d$wallets__$5b$external$5d$__$2840$solana$2f$wallet$2d$adapter$2d$wallets$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$jup$2d$ag$2f$wallet$2d$adapter__$5b$external$5d$__$2840$jup$2d$ag$2f$wallet$2d$adapter$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$solana$2f$wallet$2d$adapter$2d$wallets__$5b$external$5d$__$2840$solana$2f$wallet$2d$adapter$2d$wallets$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
function AppProviders({ Component, pageProps }) {
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$29$__["useTheme"])();
    const wallets = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        return [
            new __TURBOPACK__imported__module__$5b$externals$5d2f40$solana$2f$wallet$2d$adapter$2d$wallets__$5b$external$5d$__$2840$solana$2f$wallet$2d$adapter$2d$wallets$2c$__esm_import$29$__["PhantomWalletAdapter"](),
            new __TURBOPACK__imported__module__$5b$externals$5d2f40$solana$2f$wallet$2d$adapter$2d$wallets__$5b$external$5d$__$2840$solana$2f$wallet$2d$adapter$2d$wallets$2c$__esm_import$29$__["SolflareWalletAdapter"]()
        ].filter((item)=>item && item.name && item.icon);
    }, []);
    const queryClient = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__["QueryClient"](), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useWindowWidthListener"])();
    const walletTheme = resolvedTheme === 'light' ? 'light' : 'dark';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__["QueryClientProvider"], {
        client: queryClient,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$jup$2d$ag$2f$wallet$2d$adapter__$5b$external$5d$__$2840$jup$2d$ag$2f$wallet$2d$adapter$2c$__esm_import$29$__["UnifiedWalletProvider"], {
            wallets: wallets,
            config: {
                env: 'mainnet-beta',
                autoConnect: true,
                metadata: {
                    name: 'UnifiedWallet',
                    description: 'UnifiedWallet',
                    url: 'https://jup.ag',
                    iconUrls: [
                        'https://jup.ag/favicon.ico'
                    ]
                },
                // notificationCallback: WalletNotification,
                theme: walletTheme,
                lang: 'en'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["Toaster"], {
                    theme: walletTheme,
                    richColors: true,
                    closeButton: true
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/pages/_app.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
                    ...pageProps
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/pages/_app.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/scaffolds/fun-launch/src/pages/_app.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/pages/_app.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function App(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$29$__["ThemeProvider"], {
        attribute: "class",
        defaultTheme: "dark",
        disableTransitionOnChange: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AppProviders, {
            ...props
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/pages/_app.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/pages/_app.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__771889c5._.js.map