module.exports = [
"[externals]/zod [external] (zod, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("zod");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/class-variance-authority [external] (class-variance-authority, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("class-variance-authority");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/clsx [external] (clsx, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("clsx");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/tailwind-merge [external] (tailwind-merge, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("tailwind-merge");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "assertNever",
    ()=>assertNever,
    "cn",
    ()=>cn,
    "delay",
    ()=>delay,
    "getBaseUrl",
    ()=>getBaseUrl,
    "serializeParams",
    ()=>serializeParams,
    "serializeValue",
    ()=>serializeValue,
    "shortenAddress",
    ()=>shortenAddress
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/tailwind-merge [external] (tailwind-merge, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["clsx"])(inputs));
}
function assertNever(_arg, message = 'Unknown error occured.') {
    throw new Error(message);
}
const getBaseUrl = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return `http://localhost:3000`;
    } else //TURBOPACK unreachable
    ;
};
function serializeValue(value) {
    // String
    if (typeof value === 'string') {
        return value;
    }
    // Boolean
    if (typeof value === 'boolean') {
        return value ? 'true' : 'false';
    }
    // Number
    if (typeof value === 'number') {
        return value.toString();
    }
    // BigInt
    if (typeof value === 'bigint') {
        return value.toString();
    }
    // Date
    if (value instanceof Date) {
        return value.toISOString();
    }
    // Array, join with comma delimiter
    if (Array.isArray(value)) {
        return value.map((v)=>serializeValue(v)).join(',');
    }
    throw new Error(`Cannot serialize value: ${value}`);
}
function serializeParams(params) {
    return Object.fromEntries(Object.entries(params).filter(([, v])=>v !== undefined) // Remove undefined values
    .map(([k, v])=>[
            k,
            serializeValue(v)
        ]));
}
function shortenAddress(address) {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
}
const delay = async (time)=>await new Promise((resolve)=>setTimeout(resolve, time));
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/ui/button.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$class$2d$variance$2d$authority__$5b$external$5d$__$28$class$2d$variance$2d$authority$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/class-variance-authority [external] (class-variance-authority, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$class$2d$variance$2d$authority__$5b$external$5d$__$28$class$2d$variance$2d$authority$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$class$2d$variance$2d$authority__$5b$external$5d$__$28$class$2d$variance$2d$authority$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$class$2d$variance$2d$authority__$5b$external$5d$__$28$class$2d$variance$2d$authority$2c$__esm_import$29$__["cva"])([
    'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:pointer-events-none disabled:opacity-50'
], {
    variants: {
        variant: {
            default: 'bg-primary text-primary-950 hover:bg-primary-300',
            secondary: 'border border-neutral-800 bg-neutral-900 text-neutral-100 hover:bg-neutral-850',
            outline: 'border border-neutral-750 bg-transparent text-neutral-200 hover:bg-neutral-900',
            ghost: 'text-neutral-300 hover:bg-neutral-900 hover:text-neutral-100'
        },
        size: {
            sm: 'h-8 px-3 text-xs',
            default: 'h-9 px-4 text-xs md:h-10 md:px-6 md:text-sm',
            lg: 'h-11 px-8 text-sm md:text-base',
            icon: 'h-9 w-9'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](({ className, variant, size, children, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size
        }), className),
        ref: ref,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/ui/button.tsx",
        lineNumber: 41,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = 'Button';
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/CreatePoolButton.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "CreatePoolButton",
    ()=>CreatePoolButton
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$_2d26f648643635d619b6f3c55713f17e$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.25_@babel+core@7._2d26f648643635d619b6f3c55713f17e/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/ui/button.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const CreatePoolButton = ({ className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$_2d26f648643635d619b6f3c55713f17e$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: "/create-pool",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: 'outline'
        }), className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                className: "iconify ph--rocket-bold h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/CreatePoolButton.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                className: "hidden sm:inline",
                children: "Create RWA Pool"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/CreatePoolButton.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                className: "sm:hidden",
                children: "Create"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/CreatePoolButton.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/components/CreatePoolButton.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/ThemeToggle.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/next-themes [external] (next-themes, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const ThemeToggle = ({ className })=>{
    const { resolvedTheme, setTheme } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$29$__["useTheme"])();
    // Only render the icon after mount to avoid a hydration mismatch,
    // since the resolved theme is unknown during SSR.
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>setMounted(true), []);
    const isDark = resolvedTheme === 'dark';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
        type: "button",
        "aria-label": isDark ? 'Switch to light mode' : 'Switch to dark mode',
        onClick: ()=>setTheme(isDark ? 'light' : 'dark'),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-neutral-800 text-neutral-300 transition-colors', 'hover:bg-neutral-850 hover:text-neutral-100', 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60', className),
        children: mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('iconify h-[1.125rem] w-[1.125rem]', {
                'ph--moon-bold': isDark,
                'ph--sun-bold': !isDark
            })
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/ThemeToggle.tsx",
            lineNumber: 31,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
            className: "h-[1.125rem] w-[1.125rem]"
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/ThemeToggle.tsx",
            lineNumber: 38,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/ThemeToggle.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ThemeToggle;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/Header.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Header",
    ()=>Header,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$jup$2d$ag$2f$wallet$2d$adapter__$5b$external$5d$__$2840$jup$2d$ag$2f$wallet$2d$adapter$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@jup-ag/wallet-adapter [external] (@jup-ag/wallet-adapter, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$_2d26f648643635d619b6f3c55713f17e$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.25_@babel+core@7._2d26f648643635d619b6f3c55713f17e/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/ui/button.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$CreatePoolButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/CreatePoolButton.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/ThemeToggle.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$jup$2d$ag$2f$wallet$2d$adapter__$5b$external$5d$__$2840$jup$2d$ag$2f$wallet$2d$adapter$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$CreatePoolButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$jup$2d$ag$2f$wallet$2d$adapter__$5b$external$5d$__$2840$jup$2d$ag$2f$wallet$2d$adapter$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$CreatePoolButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const Header = ()=>{
    const { setShowModal } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$jup$2d$ag$2f$wallet$2d$adapter__$5b$external$5d$__$2840$jup$2d$ag$2f$wallet$2d$adapter$2c$__esm_import$29$__["useUnifiedWalletContext"])();
    const { disconnect, publicKey } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$jup$2d$ag$2f$wallet$2d$adapter__$5b$external$5d$__$2840$jup$2d$ag$2f$wallet$2d$adapter$2c$__esm_import$29$__["useWallet"])();
    const address = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>publicKey?.toBase58(), [
        publicKey
    ]);
    const handleConnectWallet = ()=>{
        setShowModal(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
        className: "w-full border-b border-neutral-850 bg-background/80 backdrop-blur-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex h-14 w-full items-center justify-between gap-2 px-3 md:h-16 md:px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$_2d26f648643635d619b6f3c55713f17e$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex min-w-0 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "iconify h-5 w-5 ph--rocket-launch-bold"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/components/Header.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/components/Header.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "truncate whitespace-nowrap text-base font-bold tracking-tight md:text-xl",
                            children: "RWA & Equity Launchpad"
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/components/Header.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/scaffolds/fun-launch/src/components/Header.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1.5 md:gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$CreatePoolButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["CreatePoolButton"], {}, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/components/Header.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        address ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "secondary",
                            onClick: ()=>disconnect(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "iconify h-4 w-4 ph--wallet-bold"
                                }, void 0, false, {
                                    fileName: "[project]/scaffolds/fun-launch/src/components/Header.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["shortenAddress"])(address)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/scaffolds/fun-launch/src/components/Header.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>{
                                handleConnectWallet();
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "hidden md:block",
                                    children: "Connect Wallet"
                                }, void 0, false, {
                                    fileName: "[project]/scaffolds/fun-launch/src/components/Header.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "block md:hidden",
                                    children: "Connect"
                                }, void 0, false, {
                                    fileName: "[project]/scaffolds/fun-launch/src/components/Header.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/scaffolds/fun-launch/src/components/Header.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/components/Header.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/scaffolds/fun-launch/src/components/Header.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/scaffolds/fun-launch/src/components/Header.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/Header.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/@tanstack/react-form [external] (@tanstack/react-form, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@tanstack/react-form");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@solana/web3.js [external] (@solana/web3.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@solana/web3.js", () => require("@solana/web3.js"));

module.exports = mod;
}),
"[project]/scaffolds/fun-launch/src/pages/create-pool.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>CreatePool
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$_2d26f648643635d619b6f3c55713f17e$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.25_@babel+core@7._2d26f648643635d619b6f3c55713f17e/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$_2d26f648643635d619b6f3c55713f17e$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.25_@babel+core@7._2d26f648643635d619b6f3c55713f17e/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/zod [external] (zod, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Header.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$form__$5b$external$5d$__$2840$tanstack$2f$react$2d$form$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tanstack/react-form [external] (@tanstack/react-form, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/ui/button.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$solana$2f$web3$2e$js__$5b$external$5d$__$2840$solana$2f$web3$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@solana/web3.js [external] (@solana/web3.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$jup$2d$ag$2f$wallet$2d$adapter__$5b$external$5d$__$2840$jup$2d$ag$2f$wallet$2d$adapter$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@jup-ag/wallet-adapter [external] (@jup-ag/wallet-adapter, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/sonner [external] (sonner, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$form__$5b$external$5d$__$2840$tanstack$2f$react$2d$form$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$jup$2d$ag$2f$wallet$2d$adapter__$5b$external$5d$__$2840$jup$2d$ag$2f$wallet$2d$adapter$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$form__$5b$external$5d$__$2840$tanstack$2f$react$2d$form$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$jup$2d$ag$2f$wallet$2d$adapter__$5b$external$5d$__$2840$jup$2d$ag$2f$wallet$2d$adapter$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
// Define the schema for form validation
const poolSchema = __TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__["z"].object({
    tokenName: __TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__["z"].string().min(3, 'Token name must be at least 3 characters'),
    tokenSymbol: __TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__["z"].string().min(1, 'Token symbol is required'),
    tokenLogo: __TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__["z"].instanceof(File, {
        message: 'Token logo is required'
    }).optional(),
    website: __TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__["z"].string().url({
        message: 'Please enter a valid URL'
    }).optional().or(__TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__["z"].literal('')),
    twitter: __TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__["z"].string().url({
        message: 'Please enter a valid URL'
    }).optional().or(__TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__["z"].literal(''))
});
const inputClassName = 'w-full rounded-lg border border-neutral-750 bg-background p-3 text-sm text-foreground placeholder:text-neutral-500 transition-colors focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40';
function CreatePool() {
    const { publicKey, signTransaction } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$jup$2d$ag$2f$wallet$2d$adapter__$5b$external$5d$__$2840$jup$2d$ag$2f$wallet$2d$adapter$2c$__esm_import$29$__["useWallet"])();
    const address = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>publicKey?.toBase58(), [
        publicKey
    ]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [poolCreated, setPoolCreated] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const form = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$form__$5b$external$5d$__$2840$tanstack$2f$react$2d$form$2c$__esm_import$29$__["useForm"])({
        defaultValues: {
            tokenName: '',
            tokenSymbol: '',
            tokenLogo: undefined,
            website: '',
            twitter: ''
        },
        onSubmit: async ({ value })=>{
            try {
                setIsLoading(true);
                const { tokenLogo } = value;
                if (!tokenLogo) {
                    __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].error('Token logo is required');
                    return;
                }
                if (!signTransaction) {
                    __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].error('Wallet not connected');
                    return;
                }
                const reader = new FileReader();
                // Convert file to base64
                const base64File = await new Promise((resolve)=>{
                    reader.onload = (e)=>resolve(e.target?.result);
                    reader.readAsDataURL(tokenLogo);
                });
                const keyPair = __TURBOPACK__imported__module__$5b$externals$5d2f40$solana$2f$web3$2e$js__$5b$external$5d$__$2840$solana$2f$web3$2e$js$2c$__cjs$29$__["Keypair"].generate();
                // Step 1: Upload to R2 and get transaction
                const uploadResponse = await fetch('/api/upload', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        tokenLogo: base64File,
                        mint: keyPair.publicKey.toBase58(),
                        tokenName: value.tokenName,
                        tokenSymbol: value.tokenSymbol,
                        userWallet: address
                    })
                });
                if (!uploadResponse.ok) {
                    const error = await uploadResponse.json();
                    throw new Error(error.error);
                }
                const { poolTx } = await uploadResponse.json();
                const transaction = __TURBOPACK__imported__module__$5b$externals$5d2f40$solana$2f$web3$2e$js__$5b$external$5d$__$2840$solana$2f$web3$2e$js$2c$__cjs$29$__["Transaction"].from(Buffer.from(poolTx, 'base64'));
                // Step 2: Sign with keypair first
                transaction.sign(keyPair);
                // Step 3: Then sign with user's wallet
                const signedTransaction = await signTransaction(transaction);
                // Step 4: Send signed transaction
                const sendResponse = await fetch('/api/send-transaction', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        signedTransaction: signedTransaction.serialize().toString('base64')
                    })
                });
                if (!sendResponse.ok) {
                    const error = await sendResponse.json();
                    throw new Error(error.error);
                }
                const { success } = await sendResponse.json();
                if (success) {
                    __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success('Pool created successfully');
                    setPoolCreated(true);
                }
            } catch (error) {
                console.error('Error creating pool:', error);
                __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].error(error instanceof Error ? error.message : 'Failed to Tokenize Real World Asset / Equity');
            } finally{
                setIsLoading(false);
            }
        },
        validators: {
            onSubmit: ({ value })=>{
                const result = poolSchema.safeParse(value);
                if (!result.success) {
                    return result.error.formErrors.fieldErrors;
                }
                return undefined;
            }
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$_2d26f648643635d619b6f3c55713f17e$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Tokenize Real World Asset / Equity - Virtual Curve"
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Create a new token pool on Virtual Curve with customizable price curves."
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-background text-foreground",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                        className: "mx-auto w-full max-w-3xl px-4 py-8 md:py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl md:text-4xl font-bold mb-2 tracking-tight",
                                            children: "Tokenize Real World Asset / Equity"
                                        }, void 0, false, {
                                            fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-neutral-400",
                                            children: "Launch compliance-ready RWA & Equity tokens with Meteora Dynamic Pools"
                                        }, void 0, false, {
                                            fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            poolCreated && !isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PoolCreationSuccess, {}, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                onSubmit: (e)=>{
                                    e.preventDefault();
                                    form.handleSubmit();
                                },
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-neutral-850 bg-neutral-925 p-5 sm:p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                className: "text-xl md:text-2xl font-bold mb-4",
                                                children: "Token Details"
                                            }, void 0, false, {
                                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "tokenName",
                                                                        className: "block text-sm font-medium text-neutral-300 mb-1.5",
                                                                        children: "Token Name*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                        lineNumber: 180,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(form.Field, {
                                                                        name: "tokenName",
                                                                        children: (field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                                id: "tokenName",
                                                                                name: field.name,
                                                                                type: "text",
                                                                                className: inputClassName,
                                                                                placeholder: "e.g. Real Estate Fund Token",
                                                                                value: field.state.value,
                                                                                onChange: (e)=>field.handleChange(e.target.value),
                                                                                required: true,
                                                                                minLength: 3
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                                lineNumber: 188,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                        lineNumber: 186,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "tokenSymbol",
                                                                        className: "block text-sm font-medium text-neutral-300 mb-1.5",
                                                                        children: "Token Symbol*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                        lineNumber: 204,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(form.Field, {
                                                                        name: "tokenSymbol",
                                                                        children: (field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                                id: "tokenSymbol",
                                                                                name: field.name,
                                                                                type: "text",
                                                                                className: inputClassName,
                                                                                placeholder: "e.g. RWA-USDC",
                                                                                value: field.state.value,
                                                                                onChange: (e)=>field.handleChange(e.target.value),
                                                                                required: true,
                                                                                maxLength: 10
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                                lineNumber: 212,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                        lineNumber: 210,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                htmlFor: "tokenLogo",
                                                                className: "block text-sm font-medium text-neutral-300 mb-1.5",
                                                                children: "Token Logo*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(form.Field, {
                                                                name: "tokenLogo",
                                                                children: (field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        className: "rounded-lg border-2 border-dashed border-neutral-750 p-6 sm:p-8 text-center transition-colors hover:border-neutral-600",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                className: "iconify w-6 h-6 mx-auto mb-2 text-neutral-500 ph--upload-bold"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                                lineNumber: 238,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                                className: "text-neutral-500 text-xs mb-3",
                                                                                children: field.state.value?.name ?? 'PNG, JPG or SVG (max. 2MB)'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                                lineNumber: 239,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                                type: "file",
                                                                                id: "tokenLogo",
                                                                                className: "hidden",
                                                                                onChange: (e)=>{
                                                                                    const file = e.target.files?.[0];
                                                                                    if (file) {
                                                                                        field.handleChange(file);
                                                                                    }
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                                lineNumber: 242,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "tokenLogo",
                                                                                className: "inline-flex cursor-pointer items-center rounded-full border border-neutral-750 px-4 py-2 text-sm font-medium text-neutral-200 transition-colors hover:bg-neutral-900",
                                                                                children: "Browse Files"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                                lineNumber: 253,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                        lineNumber: 237,
                                                                        columnNumber: 25
                                                                    }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                lineNumber: 235,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-neutral-850 bg-neutral-925 p-5 sm:p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                className: "text-xl md:text-2xl font-bold mb-6",
                                                children: "Social Links (Optional)"
                                            }, void 0, false, {
                                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                htmlFor: "website",
                                                                className: "block text-sm font-medium text-neutral-300 mb-1.5",
                                                                children: "Website"
                                                            }, void 0, false, {
                                                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                lineNumber: 272,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(form.Field, {
                                                                name: "website",
                                                                children: (field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                        id: "website",
                                                                        name: field.name,
                                                                        type: "url",
                                                                        className: inputClassName,
                                                                        placeholder: "https://yourwebsite.com",
                                                                        value: field.state.value,
                                                                        onChange: (e)=>field.handleChange(e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                        lineNumber: 280,
                                                                        columnNumber: 25
                                                                    }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                htmlFor: "twitter",
                                                                className: "block text-sm font-medium text-neutral-300 mb-1.5",
                                                                children: "Twitter"
                                                            }, void 0, false, {
                                                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(form.Field, {
                                                                name: "twitter",
                                                                children: (field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                        id: "twitter",
                                                                        name: field.name,
                                                                        type: "url",
                                                                        className: inputClassName,
                                                                        placeholder: "https://twitter.com/yourusername",
                                                                        value: field.state.value,
                                                                        onChange: (e)=>field.handleChange(e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                        lineNumber: 302,
                                                                        columnNumber: 25
                                                                    }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                                lineNumber: 300,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                lineNumber: 270,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this),
                                    form.state.errors && form.state.errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg border border-rose/40 bg-rose/10 p-4 space-y-2",
                                        children: form.state.errors.map((error, index)=>Object.entries(error || {}).map(([, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "iconify mt-0.5 h-4 w-4 shrink-0 text-rose ph--warning-circle-bold"
                                                        }, void 0, false, {
                                                            fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-rose",
                                                            children: Array.isArray(value) ? value.map((v)=>v.message || v).join(', ') : typeof value === 'string' ? value : String(value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 23
                                                }, this)))
                                    }, void 0, false, {
                                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                        lineNumber: 318,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SubmitButton, {
                                            isSubmitting: isLoading
                                        }, void 0, false, {
                                            fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const SubmitButton = ({ isSubmitting })=>{
    const { publicKey } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$jup$2d$ag$2f$wallet$2d$adapter__$5b$external$5d$__$2840$jup$2d$ag$2f$wallet$2d$adapter$2c$__esm_import$29$__["useWallet"])();
    const { setShowModal } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$jup$2d$ag$2f$wallet$2d$adapter__$5b$external$5d$__$2840$jup$2d$ag$2f$wallet$2d$adapter$2c$__esm_import$29$__["useUnifiedWalletContext"])();
    if (!publicKey) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            onClick: ()=>setShowModal(true),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                children: "Connect Wallet"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                lineNumber: 354,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
            lineNumber: 353,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
        className: "flex items-center gap-2",
        type: "submit",
        disabled: isSubmitting,
        children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    className: "iconify ph--spinner w-5 h-5 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                    lineNumber: 363,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    children: "Creating Pool..."
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                    lineNumber: 364,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    className: "iconify ph--rocket-bold w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                    lineNumber: 368,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    children: "Launch Pool"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                    lineNumber: 369,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
        lineNumber: 360,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const PoolCreationSuccess = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-neutral-850 bg-neutral-925 p-6 sm:p-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "bg-emerald/15 p-4 rounded-full inline-flex mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "iconify ph--check-bold w-12 h-12 text-emerald"
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                        lineNumber: 381,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                    lineNumber: 380,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    className: "text-2xl md:text-3xl font-bold mb-4",
                    children: "Pool Created Successfully!"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-neutral-400 mb-8 max-w-lg mx-auto",
                    children: "Your token pool has been created and is now live on the Virtual Curve platform. Users can now buy and trade your tokens."
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                    lineNumber: 384,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$_2d26f648643635d619b6f3c55713f17e$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "rounded-full border border-neutral-750 px-6 py-3 font-medium text-neutral-200 transition-colors hover:bg-neutral-900",
                            children: "Explore Pools"
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                            lineNumber: 389,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                window.location.reload();
                            },
                            className: "cursor-pointer rounded-full bg-primary px-6 py-3 font-semibold text-primary-950 transition-colors hover:bg-primary-300",
                            children: "Create Another Pool"
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                            lineNumber: 395,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
                    lineNumber: 388,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/scaffolds/fun-launch/src/pages/create-pool.tsx",
            lineNumber: 379,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0d5e15e1._.js.map