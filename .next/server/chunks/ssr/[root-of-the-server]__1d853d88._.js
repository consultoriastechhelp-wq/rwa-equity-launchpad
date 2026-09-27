module.exports = [
"[externals]/ky [external] (ky, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("ky");

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
"[project]/scaffolds/fun-launch/src/components/Explore/client.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ApeClient",
    ()=>ApeClient
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$ky__$5b$external$5d$__$28$ky$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/ky [external] (ky, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$ky__$5b$external$5d$__$28$ky$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$ky__$5b$external$5d$__$28$ky$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const BASE_URL = 'https://datapi.jup.ag';
class ApeClient {
    static async getGemsTokenList(req, options) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$ky__$5b$external$5d$__$28$ky$2c$__esm_import$29$__["default"].post(`${BASE_URL}/v1/pools/gems`, {
            json: req,
            ...options
        }).json();
    }
    static async getToken(req, options) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$ky__$5b$external$5d$__$28$ky$2c$__esm_import$29$__["default"].get(`${BASE_URL}/v1/pools`, {
            searchParams: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["serializeParams"])({
                assetIds: [
                    req.id
                ]
            }),
            ...options
        }).json();
    }
    static async getTokenHolders(assetId, options) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$ky__$5b$external$5d$__$28$ky$2c$__esm_import$29$__["default"].get(`${BASE_URL}/v1/holders/${assetId}`, options).json();
    }
    static async getChart(assetId, params, options) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$ky__$5b$external$5d$__$28$ky$2c$__esm_import$29$__["default"].get(`${BASE_URL}/v2/charts/${assetId}`, {
            searchParams: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["serializeParams"])(params),
            ...options
        }).json();
    }
    static async getTokenTxs(assetId, req, options) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$ky__$5b$external$5d$__$28$ky$2c$__esm_import$29$__["default"].get(`${BASE_URL}/v1/txs/${assetId}`, {
            searchParams: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["serializeParams"])(req),
            ...options
        }).json();
    }
    static async getTokenDescription(assetId, options) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$ky__$5b$external$5d$__$28$ky$2c$__esm_import$29$__["default"].get(`${BASE_URL}/v1/assets/${assetId}/description`, options).json();
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/superstruct [external] (superstruct, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("superstruct", () => require("superstruct"));

module.exports = mod;
}),
"[project]/scaffolds/fun-launch/src/components/Explore/types.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChartInterval",
    ()=>ChartInterval,
    "ExploreTab",
    ()=>ExploreTab,
    "Launchpad",
    ()=>Launchpad,
    "NetVolumeChartInterval",
    ()=>NetVolumeChartInterval,
    "TokenListBaseSortBy",
    ()=>TokenListBaseSortBy,
    "TokenListFiltersSchema",
    ()=>TokenListFiltersSchema,
    "TokenListSortBy",
    ()=>TokenListSortBy,
    "TokenListSortByField",
    ()=>TokenListSortByField,
    "TokenListTab",
    ()=>TokenListTab,
    "TokenListTimeframe",
    ()=>TokenListTimeframe,
    "TokenListTimeframeSortBy",
    ()=>TokenListTimeframeSortBy,
    "TokenListTimeframeSortByPrefix",
    ()=>TokenListTimeframeSortByPrefix,
    "isTokenListBaseSortBy",
    ()=>isTokenListBaseSortBy,
    "isTokenListTimeframeSortBy",
    ()=>isTokenListTimeframeSortBy,
    "isTokenListTimeframeSortByPrefix",
    ()=>isTokenListTimeframeSortByPrefix,
    "normalizeSortByField",
    ()=>normalizeSortByField,
    "resolveTokenListFilter",
    ()=>resolveTokenListFilter,
    "resolveTokenListFilters",
    ()=>resolveTokenListFilters
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$superstruct__$5b$external$5d$__$28$superstruct$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/superstruct [external] (superstruct, cjs)");
;
const ExploreTab = {
    NEW: 'recent',
    GRADUATING: 'aboutToGraduate',
    GRADUATED: 'graduated'
};
const TokenListTab = {
    ...ExploreTab
};
const TokenListTimeframe = {
    MIN_5: '5m',
    HOUR_1: '1h',
    HOUR_6: '6h',
    HOUR_24: '24h'
};
const TokenListTimeframeRegex = new RegExp(`(?:${Object.values(TokenListTimeframe).join('|')})$`);
const TokenListBaseSortBy = [
    'usdPrice',
    'liquidity',
    'mcap',
    'fdv',
    'listedTime',
    'holderCount',
    'organicScore',
    'ctLikes',
    'smartCtLikes',
    'bondingCurve',
    'graduatedAt'
];
function isTokenListBaseSortBy(sortBy) {
    return TokenListBaseSortBy.includes(sortBy);
}
const TokenListTimeframeSortByPrefix = [
    'priceChange',
    'txs',
    'netTxs',
    'traders',
    'numNetBuyers',
    'volume',
    'netVolume',
    'holderChange',
    'numOrganicBuyers',
    'organicVolume',
    'netOrganicVolume'
];
function isTokenListTimeframeSortByPrefix(sortBy) {
    return TokenListTimeframeSortByPrefix.includes(sortBy);
}
const TokenListTimeframeSortBy = TokenListTimeframeSortByPrefix.flatMap((prefix)=>Object.values(TokenListTimeframe).map((timeframe)=>`${prefix}${timeframe}`));
function isTokenListTimeframeSortBy(sortBy) {
    return TokenListTimeframeSortBy.includes(sortBy);
}
function normalizeSortByField(sortBy) {
    return isTokenListTimeframeSortBy(sortBy) ? stripTokenListTimeframeSortBy(sortBy) : sortBy;
}
function stripTokenListTimeframeSortBy(sortBy) {
    return sortBy.replace(TokenListTimeframeRegex, '');
}
const TokenListSortByField = [
    ...TokenListBaseSortBy,
    ...TokenListTimeframeSortByPrefix
];
const TokenListSortBy = [
    ...TokenListBaseSortBy,
    ...TokenListTimeframeSortBy
];
const Launchpad = {
    PUMPFUN: 'pump.fun',
    VIRTUALS: 'virtuals',
    DAOSFUN: 'daos.fun',
    TIMEFUN: 'time.fun',
    GOFUNDMEME: 'GoFundMeme',
    DEALR: 'dealr.fun',
    DIALECT: 'Dialect',
    DBC: 'met-dbc',
    LETSBONKFUN: 'letsbonk.fun',
    RAYDIUM: 'Raydium',
    COOKMEME: 'cook.meme',
    BELIEVE: 'Believe',
    BOOP: 'boop',
    XCOMBINATOR: 'xcombinator',
    MENTATFUN: 'mentat.fun'
};
const TokenListFiltersSchema = __TURBOPACK__imported__module__$5b$externals$5d2f$superstruct__$5b$external$5d$__$28$superstruct$2c$__cjs$29$__["object"]({
    partnerConfigs: __TURBOPACK__imported__module__$5b$externals$5d2f$superstruct__$5b$external$5d$__$28$superstruct$2c$__cjs$29$__["optional"](__TURBOPACK__imported__module__$5b$externals$5d2f$superstruct__$5b$external$5d$__$28$superstruct$2c$__cjs$29$__["array"](__TURBOPACK__imported__module__$5b$externals$5d2f$superstruct__$5b$external$5d$__$28$superstruct$2c$__cjs$29$__["string"]()))
});
function resolveTokenListFilter(filter, timeframe) {
    return filter;
}
function resolveTokenListFilters(filters) {
    if (!filters) {
        return;
    }
    // We can't use ResolvedTokenListFilters as the assignment is not type safe
    const resolved = {};
    for(const filter in filters){
        resolved[filter] = filters[filter];
    }
    return resolved;
}
const ChartInterval = {
    ONE_SECOND: '1_SECOND',
    FIFTEEN_SECOND: '15_SECOND',
    THIRTY_SECOND: '30_SECOND',
    ONE_MINUTE: '1_MINUTE',
    THREE_MINUTE: '3_MINUTE',
    FIVE_MINUTE: '5_MINUTE',
    FIFTEEN_MINUTE: '15_MINUTE',
    THIRTY_MINUTE: '30_MINUTE',
    ONE_HOUR: '1_HOUR',
    TWO_HOUR: '2_HOUR',
    FOUR_HOUR: '4_HOUR',
    EIGHT_HOUR: '8_HOUR',
    TWELVE_HOUR: '12_HOUR',
    ONE_DAY: '1_DAY',
    ONE_WEEK: '1_WEEK',
    ONE_MONTH: '1_MONTH'
};
const NetVolumeChartInterval = {
    FIVE_MINUTE: '5_MINUTE',
    ONE_HOUR: '1_HOUR',
    SIX_HOUR: '6_HOUR',
    ONE_DAY: '1_DAY'
};
}),
"[project]/scaffolds/fun-launch/src/components/Explore/queries.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ApeQueries",
    ()=>ApeQueries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/client.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/types.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const ApeQueries = {
    gemsTokenList: (args)=>{
        const req = {
            recent: args.recent ? {
                timeframe: args.recent.timeframe,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["resolveTokenListFilters"])(args.recent.filters)
            } : undefined,
            graduated: args.graduated ? {
                timeframe: args.graduated.timeframe,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["resolveTokenListFilters"])(args.graduated.filters)
            } : undefined,
            aboutToGraduate: args.aboutToGraduate ? {
                timeframe: args.aboutToGraduate.timeframe,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["resolveTokenListFilters"])(args.aboutToGraduate.filters)
            } : undefined
        };
        return {
            queryKey: [
                'explore',
                'gems',
                args
            ],
            queryFn: async ()=>{
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ApeClient"].getGemsTokenList(req);
                return Object.assign(res, {
                    args
                });
            }
        };
    },
    tokenInfo: (args)=>{
        return {
            queryKey: [
                'explore',
                'token',
                args.id,
                'info'
            ],
            queryFn: async ()=>{
                const info = await __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ApeClient"].getToken({
                    id: args.id
                });
                if (!info?.pools[0]) {
                    throw new Error('No token info found');
                }
                const pool = info?.pools[0];
                // Add frontend fields
                return {
                    ...pool,
                    bondingCurveId: null
                };
            }
        };
    },
    tokenHolders: (args)=>{
        return {
            queryKey: [
                'explore',
                'token',
                args.id,
                'holders'
            ],
            queryFn: async ()=>{
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ApeClient"].getTokenHolders(args.id);
                return Object.assign(res, {
                    args
                });
            }
        };
    },
    tokenDescription: (args)=>{
        return {
            queryKey: [
                'explore',
                'token',
                args.id,
                'description'
            ],
            queryFn: async ()=>{
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ApeClient"].getTokenDescription(args.id);
                return res;
            }
        };
    },
    tokenTxs: (args)=>{
        return {
            queryKey: [
                'explore',
                'token',
                args.id,
                'txs'
            ],
            queryFn: async ({ signal, pageParam })=>{
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ApeClient"].getTokenTxs(args.id, pageParam ? {
                    ...pageParam
                } : {}, {
                    signal
                });
                return Object.assign(res, {
                    args
                });
            },
            // This gets passed as `pageParam`
            getNextPageParam: (lastPage)=>{
                // TODO: update to use BE api response when its returned
                if (lastPage?.txs.length === 0) {
                    return;
                }
                const lastTs = lastPage?.txs[lastPage?.txs.length - 1]?.timestamp;
                return {
                    offset: lastPage?.next,
                    offsetTs: lastTs
                };
            }
        };
    }
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/lib/jotai.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "atomMsgWithListeners",
    ()=>atomMsgWithListeners
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/jotai [external] (jotai, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function isTypeDiscriminable(val) {
    return val !== null && typeof val === 'object' && 'type' in val && typeof val.type === 'string';
}
function atomMsgWithListeners(initialValue) {
    const baseAtom = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__["atom"])(initialValue);
    const listenersAtom = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__["atom"])([]);
    const anAtom = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__["atom"])((get)=>get(baseAtom), (get, set, arg)=>{
        const prevVal = get(baseAtom);
        set(baseAtom, arg);
        const newVal = get(baseAtom);
        // Validate
        if (!isTypeDiscriminable(newVal)) {
            console.warn('atomWithMsgListeners: received a non-type-discriminable object', newVal);
            return;
        }
        // Emit to listeners
        get(listenersAtom).forEach((listener)=>{
            if (!listener.filterTypes.includes(newVal.type)) {
                return;
            }
            listener.callback(get, set, newVal, prevVal);
        });
    });
    function useListener(filterTypes, callback) {
        const setListeners = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__["useSetAtom"])(listenersAtom);
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
            const listenerEntry = {
                callback: callback,
                filterTypes
            };
            setListeners((prev)=>[
                    ...prev,
                    listenerEntry
                ]);
            return ()=>{
                setListeners((prev)=>{
                    const next = prev.filter((entry)=>entry.callback !== callback);
                    return next.length === prev.length ? prev : next;
                });
            };
        }, [
            setListeners,
            callback,
            filterTypes
        ]);
    }
    return [
        anAtom,
        useListener
    ];
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/contexts/DataStreamProvider.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "DataStreamProvider",
    ()=>DataStreamProvider,
    "useDataStream",
    ()=>useDataStream,
    "useDataStreamListener",
    ()=>useDataStreamListener
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$queries$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/queries.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$jotai$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/jotai.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tanstack/react-query [external] (@tanstack/react-query, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/jotai [external] (jotai, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$queries$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$jotai$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$queries$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$jotai$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const WS_URL = 'wss://trench-stream.jup.ag/ws';
const RECONNECT_DELAY_MILLIS = 2_500;
const [dataStreamMsgAtom, useDataStreamListener] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$jotai$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["atomMsgWithListeners"])(null);
;
const DataStreamContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"])(null);
const DataStreamProvider = ({ children })=>{
    const queryClient = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__["useQueryClient"])();
    const partnerConfigs = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>process.env.NEXT_PUBLIC_POOL_CONFIG_KEY?.split(',') || [], []);
    const setDataStreamMsg = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__["useSetAtom"])(dataStreamMsgAtom);
    const ws = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const shouldReconnect = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(true);
    const subRecentTokenList = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    const subPools = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(new Set());
    const subTxnsAssets = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(new Set());
    const subscribeRecentTokenList = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        subRecentTokenList.current = true;
        if (ws?.current?.readyState === WebSocket.OPEN) {
            ws.current.send(createRequest({
                type: 'subscribe:recent',
                filters: {
                    partnerConfigs
                }
            }));
        }
    }, [
        partnerConfigs
    ]);
    const unsubscribeRecentTokenList = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        subRecentTokenList.current = false;
        if (ws?.current?.readyState === WebSocket.OPEN) {
            ws.current.send(createRequest({
                type: 'unsubscribe:recent'
            }));
        }
    }, []);
    const subscribePools = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((pools)=>{
        for (const pool of pools){
            subPools.current.add(pool);
        }
        if (ws?.current?.readyState === WebSocket.OPEN) {
            ws.current.send(createRequest({
                type: 'subscribe:pool',
                pools: pools
            }));
        }
    }, []);
    const unsubscribePools = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((pools)=>{
        for (const pool of pools){
            subPools.current.delete(pool);
        }
        if (ws?.current?.readyState === WebSocket.OPEN) {
            ws.current.send(createRequest({
                type: 'unsubscribe:pool',
                pools: pools
            }));
        }
    }, []);
    const subscribeTxns = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((assets)=>{
        for (const asset of assets){
            subTxnsAssets.current.add(asset);
        }
        if (ws?.current?.readyState === WebSocket.OPEN) {
            ws.current.send(createRequest({
                type: 'subscribe:txns',
                assets: assets
            }));
        }
    }, []);
    const unsubscribeTxns = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((assets)=>{
        for (const asset of assets){
            subTxnsAssets.current.delete(asset);
        }
        if (ws?.current?.readyState === WebSocket.OPEN) {
            ws.current.send(createRequest({
                type: 'unsubscribe:txns',
                assets: assets
            }));
        }
    }, []);
    // const subscribePrices = useCallback((assets: string[]) => {
    //   for (const asset of assets) {
    //     subPricesAssets.current.add(asset);
    //     // TODO: refactor stream context to support decoupling this logic
    //     // Garbage collect unsubscribed asset prices
    //     assetPricesFamily.remove(asset);
    //   }
    //   if (ws?.current?.readyState === WebSocket.OPEN) {
    //     ws.current.send(createRequest({ type: 'subscribe:prices', assets: assets }));
    //   }
    // }, []);
    // const unsubscribePrices = useCallback((assets: string[]) => {
    //   for (const asset of assets) {
    //     subPricesAssets.current.delete(asset);
    //   }
    //   if (ws?.current?.readyState === WebSocket.OPEN) {
    //     ws.current.send(createRequest({ type: 'unsubscribe:prices', assets: assets }));
    //   }
    // }, []);
    const init = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        const initws = new WebSocket(WS_URL);
        ws.current = initws;
        // Resubscribe to existing
        initws.onopen = ()=>{
            if (subRecentTokenList.current) {
                subscribeRecentTokenList();
            }
            if (subPools.current) {
                subscribePools(Array.from(subPools.current));
            }
            if (subTxnsAssets.current) {
                subscribeTxns(Array.from(subTxnsAssets.current));
            }
        // if (subPricesAssets.current) {
        //   subscribePrices(Array.from(subPricesAssets.current));
        // }
        };
        initws.onmessage = (event)=>{
            const msg = JSON.parse(event.data);
            setDataStreamMsg(msg);
            // We assume all actions are related to the subscribed token-tx-table
            if (msg.type === 'actions') {
                const tokenId = msg.data?.[0]?.asset;
                if (!tokenId) {
                    return;
                }
                // Update token tx
                queryClient.setQueriesData({
                    type: 'active',
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$queries$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ApeQueries"].tokenTxs({
                        id: tokenId
                    }).queryKey
                }, (prev)=>{
                    if (!prev?.pages || prev.pages.length === 0) {
                        return;
                    }
                    const firstPage = prev.pages[0];
                    if (!firstPage) {
                        return;
                    }
                    const next = firstPage.next;
                    // Update first page data
                    const firstPageTxs = firstPage ? [
                        ...firstPage.txs
                    ] : [];
                    firstPageTxs.unshift(...msg.data);
                    // Overwrite previous first page
                    const newPages = prev.pages.slice(1);
                    newPages.unshift({
                        txs: firstPageTxs,
                        next,
                        args: {
                            ...firstPage.args
                        }
                    });
                    return {
                        pages: newPages,
                        pageParams: prev.pageParams
                    };
                });
            }
        };
        initws.onerror = (err)=>{
            console.error('WebSocket error:', err);
            initws.close();
        };
        initws.onclose = async ()=>{
            if (!shouldReconnect.current) return;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["delay"])(RECONNECT_DELAY_MILLIS);
            init();
        };
        return ()=>{
            initws?.close();
        };
    }, [
        queryClient,
        setDataStreamMsg,
        subscribePools,
        subscribeRecentTokenList,
        subscribeTxns
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const cleanup = init();
        return ()=>{
            shouldReconnect.current = false;
            cleanup();
        };
    }, [
        init
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DataStreamContext.Provider, {
        value: {
            subscribePools,
            unsubscribePools,
            subscribeRecentTokenList,
            unsubscribeRecentTokenList,
            subscribeTxns,
            unsubscribeTxns
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/contexts/DataStreamProvider.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useDataStream = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(DataStreamContext);
    if (!context) {
        throw new Error('useDataStream must be used within DataStreamProvider');
    }
    return context;
};
function createRequest(req) {
    return JSON.stringify({
        ...req
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/Explore/pool-utils.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "AUDIT_MAX_SCORE",
    ()=>AUDIT_MAX_SCORE,
    "AUDIT_TOP_HOLDERS_THRESHOLD",
    ()=>AUDIT_TOP_HOLDERS_THRESHOLD,
    "categorySortBy",
    ()=>categorySortBy,
    "categorySortDir",
    ()=>categorySortDir,
    "createPoolSorter",
    ()=>createPoolSorter,
    "formatAssetAsTokenInfo",
    ()=>formatAssetAsTokenInfo,
    "formatPoolAsTokenInfo",
    ()=>formatPoolAsTokenInfo,
    "getAuditScore",
    ()=>getAuditScore,
    "getAuditScoreColorCn",
    ()=>getAuditScoreColorCn,
    "getOrganicScoreColorCn",
    ()=>getOrganicScoreColorCn,
    "getSorterFieldValue",
    ()=>getSorterFieldValue,
    "isAuditTopHoldersPass",
    ()=>isAuditTopHoldersPass,
    "patchStreamPool",
    ()=>patchStreamPool,
    "sortPools",
    ()=>sortPools,
    "watchlistSortBy",
    ()=>watchlistSortBy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/types.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function getSorterFieldValue(field, timeframe, pool) {
    const stats = pool.baseAsset[`stats${timeframe}`];
    switch(field){
        case 'listedTime':
            return new Date(pool.createdAt).getTime();
        case 'priceChange':
            return stats?.priceChange;
        case 'liquidity':
            return pool.baseAsset.liquidity;
        case 'volume':
            if (stats?.buyVolume === undefined && stats?.sellVolume === undefined) {
                return;
            }
            return (stats.buyVolume ?? 0) + (stats.sellVolume ?? 0);
        case 'txs':
            if (stats?.numBuys === undefined && stats?.numSells === undefined) {
                return;
            }
            return (stats.numBuys ?? 0) + (stats.numSells ?? 0);
        case 'netTxs':
            if (stats?.numBuys === undefined && stats?.numSells === undefined) {
                return;
            }
            return (stats.numBuys ?? 0) - (stats.numSells ?? 0);
        case 'traders':
            return stats?.numTraders;
        case 'numNetBuyers':
            if (stats?.numNetBuyers === undefined || stats?.numTraders === undefined) {
                return;
            }
            const numNetSellers = stats.numTraders - stats.numNetBuyers;
            return stats.numNetBuyers - numNetSellers;
        case 'usdPrice':
            return pool.baseAsset.usdPrice;
        case 'mcap':
            return pool.baseAsset.mcap;
        case 'fdv':
            return pool.baseAsset.fdv;
        case 'holderCount':
            return pool.baseAsset.holderCount;
        case 'organicScore':
            return pool.baseAsset.organicScore;
        case 'organicScore':
            return pool.baseAsset.organicScore;
        case 'numOrganicBuyers':
            return stats?.numOrganicBuyers;
        case 'ctLikes':
            return pool.baseAsset.ctLikes;
        case 'smartCtLikes':
            return pool.baseAsset.smartCtLikes;
        case 'holderChange':
            return stats?.holderChange;
        case 'netVolume':
            if (stats?.buyVolume === undefined && stats?.sellVolume === undefined) {
                return;
            }
            return (stats?.buyVolume ?? 0) - (stats?.sellVolume ?? 0);
        case 'organicVolume':
            if (stats?.buyOrganicVolume === undefined && stats?.sellOrganicVolume === undefined) {
                return;
            }
            return (stats?.buyOrganicVolume ?? 0) + (stats?.sellOrganicVolume ?? 0);
        case 'netOrganicVolume':
            if (stats?.buyOrganicVolume === undefined && stats?.sellOrganicVolume === undefined) {
                return;
            }
            return (stats?.buyOrganicVolume ?? 0) - (stats?.sellOrganicVolume ?? 0);
        case 'bondingCurve':
            return pool.bondingCurve;
        case 'graduatedAt':
            // bonded only launchpads don't have graduated pool/at
            if (pool.baseAsset.launchpad !== 'pump.fun' && pool.baseAsset.launchpad === 'virtuals') {
                return new Date(pool.createdAt).getTime();
            }
            return new Date(pool.createdAt).getTime();
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["assertNever"])(field, `unknown field '${field}'`);
    }
}
function createPoolSorter(sorter, timeframe) {
    const sortBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["normalizeSortByField"])(sorter.sortBy);
    const asc = sorter.sortDir === 'asc';
    return (a, b)=>{
        const aVal = getSorterFieldValue(sortBy, timeframe, a);
        const bVal = getSorterFieldValue(sortBy, timeframe, b);
        if (aVal === bVal) {
            return 0;
        }
        if (aVal === undefined) {
            return asc ? -1 : 1;
        }
        if (bVal === undefined) {
            return asc ? 1 : -1;
        }
        if (aVal > bVal) {
            return asc ? 1 : -1;
        }
        return asc ? -1 : 1;
    };
}
function watchlistSortBy(timeframe) {
    return `volume${timeframe}`;
}
function categorySortBy(category, timeframe) {
    switch(category){
        case __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TokenListTab"].NEW:
            return 'listedTime';
        case __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TokenListTab"].GRADUATING:
            return `bondingCurve`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TokenListTab"].GRADUATED:
            return 'graduatedAt';
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["assertNever"])(category);
    }
}
function categorySortDir(category) {
    switch(category){
        default:
            return 'desc';
    }
}
function sortPools(pools, options) {
    const sortDir = categorySortDir(options.tab);
    let sortBy;
    const defaultSortBy = categorySortBy(options.tab, options.timeframe);
    if (defaultSortBy) {
        sortBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["normalizeSortByField"])(defaultSortBy);
    }
    if (sortBy) {
        const sorter = createPoolSorter({
            sortBy,
            sortDir
        }, options.timeframe);
        pools.sort(sorter);
    }
}
const AUDIT_TOP_HOLDERS_THRESHOLD = 15;
const AUDIT_MAX_SCORE = 3;
function isAuditTopHoldersPass(audit) {
    return audit?.topHoldersPercentage !== undefined && audit.topHoldersPercentage < AUDIT_TOP_HOLDERS_THRESHOLD;
}
function getAuditScore(audit) {
    if (!audit) return;
    return (audit.mintAuthorityDisabled ? 1 : 0) + (audit.freezeAuthorityDisabled ? 1 : 0) + (isAuditTopHoldersPass(audit) ? 1 : 0);
}
function getAuditScoreColorCn(score) {
    if (score === undefined) {
        return 'text-neutral-500';
    }
    if (score >= AUDIT_MAX_SCORE) {
        return 'text-emerald';
    }
    if (score >= 2) {
        return 'text-amber';
    }
    return 'text-neutral-400';
}
function getOrganicScoreColorCn(label) {
    if (label === 'high') {
        return 'text-emerald';
    }
    return 'text-neutral-400';
}
function formatAssetAsTokenInfo(asset) {
    const volume = asset.stats24h?.buyVolume === undefined && asset.stats24h?.sellVolume === undefined ? undefined : (asset.stats24h?.buyVolume ?? 0) + (asset.stats24h?.sellVolume ?? 0);
    // satifies TokenInfo
    return {
        id: asset.id,
        chainId: 101,
        address: asset.id,
        name: asset.name,
        decimals: asset.decimals,
        symbol: asset.symbol,
        logoURI: asset.icon,
        tags: asset.isVerified ? [
            'verified'
        ] : [],
        daily_volume: volume,
        website: asset.website,
        twitter: asset.twitter,
        telegram: asset.telegram,
        organicScore: asset.organicScore ?? 0,
        organicScoreLabel: asset.organicScoreLabel,
        ctLikes: asset.ctLikes ?? 0,
        launchpad: asset.launchpad,
        mcap: asset.mcap,
        liquidity: asset.liquidity
    };
}
function formatPoolAsTokenInfo(pool) {
    const tokenInfo = formatAssetAsTokenInfo(pool.baseAsset);
    return Object.assign(tokenInfo, {
        created_at: pool.createdAt
    });
}
function patchStreamPool(streamedPool, existingPool) {
    // preserve existing streamed state
    streamedPool.streamed = existingPool.streamed;
    // pool updates do not have holder count
    streamedPool.baseAsset.holderCount ??= existingPool.baseAsset.holderCount;
    streamedPool.baseAsset.organicScore ??= existingPool.baseAsset.organicScore;
    // dont update created at if token graduated, but this streamed pool is not the graduated pool
    streamedPool.createdAt = streamedPool.baseAsset.graduatedPool && streamedPool.id !== streamedPool.baseAsset.graduatedPool ? existingPool.createdAt : streamedPool.createdAt;
    return Object.assign({}, streamedPool, 'bondingCurveId' in existingPool ? {
        bondingCurveId: existingPool.bondingCurveId
    } : {});
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/class-variance-authority [external] (class-variance-authority, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("class-variance-authority");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/scaffolds/fun-launch/src/components/ui/Skeleton.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$class$2d$variance$2d$authority__$5b$external$5d$__$28$class$2d$variance$2d$authority$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/class-variance-authority [external] (class-variance-authority, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$class$2d$variance$2d$authority__$5b$external$5d$__$28$class$2d$variance$2d$authority$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$class$2d$variance$2d$authority__$5b$external$5d$__$28$class$2d$variance$2d$authority$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const skeletonVariants = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$class$2d$variance$2d$authority__$5b$external$5d$__$28$class$2d$variance$2d$authority$2c$__esm_import$29$__["cva"])('h-12 w-full rounded-lg bg-[var(--tw-gradient-from)]', {
    variants: {
        variant: {
            shimmer: 'animate-shine-reverse !bg-[linear-gradient(90deg,var(--tw-gradient-to),var(--tw-gradient-from)_40%,var(--tw-gradient-from)_60%,var(--tw-gradient-to))] bg-200-auto',
            pulse: 'animate-pulse'
        },
        color: {
            default: 'from-neutral-800 to-neutral-750',
            muted: ' from-neutral-900 to-neutral-850'
        }
    },
    defaultVariants: {
        variant: 'shimmer',
        color: 'default'
    }
});
const Skeleton = ({ variant, color, className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])(skeletonVariants({
            variant,
            color
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/ui/Skeleton.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/scaffolds/fun-launch/src/components/TokenIcon/Context.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrenchesTokenIconContext",
    ()=>TrenchesTokenIconContext,
    "useTrenchesTokenIconContext",
    ()=>useTrenchesTokenIconContext
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
const TrenchesTokenIconContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"])(null);
const useTrenchesTokenIconContext = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(TrenchesTokenIconContext);
    if (!context) {
        throw new Error('useTrenchesTokenIconContext must be used within a TrenchesTokenIconRoot');
    }
    return context;
};
}),
"[project]/scaffolds/fun-launch/src/icons/PumpfunIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PumpfunIcon",
    ()=>PumpfunIcon
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const PumpfunIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "1em",
        height: "1em",
        fill: "#60CD88",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M12.5173 3.58207C14.801 1.39354 18.5034 1.39354 20.7873 3.58207C23.0709 5.77061 23.0709 9.31889 20.7873 11.5074L16.6523 15.4701L8.38235 7.54474L12.5173 3.58207Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/PumpfunIcon.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M11.4827 20.4177C9.199 22.6064 5.49645 22.6064 3.21277 20.4177C0.929078 18.2292 0.929078 14.681 3.21277 12.4924L7.34774 8.52979L15.6176 16.4552L11.4827 20.4177Z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/PumpfunIcon.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/PumpfunIcon.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/scaffolds/fun-launch/src/icons/DaosfunIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DaosfunIcon",
    ()=>DaosfunIcon
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const DaosfunIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 12 12",
        width: "1em",
        height: "1em",
        fill: "white",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.077 3.40901L5.764 6.12501L11.042 8.65701C10.542 9.59952 9.79396 10.3875 8.87876 10.936C7.96357 11.4844 6.91594 11.7725 5.849 11.769C2.62 11.77 0 9.18601 0 6.00001C0 2.81401 2.619 0.232007 5.85 0.232007C6.92948 0.228694 7.98889 0.523725 8.91127 1.08453C9.83366 1.64534 10.5831 2.45011 11.077 3.41001V3.40901Z"
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/icons/DaosfunIcon.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/DaosfunIcon.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/scaffolds/fun-launch/src/icons/BelieveIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BelieveIcon",
    ()=>BelieveIcon
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const BelieveIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 350 350",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                width: "100%",
                height: "100%",
                fill: "#00d545"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/BelieveIcon.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "m 142.41832,29.120597 c 5.6844,-2.95257 12.6104,0.38047 13.8524,6.66609 l 16.6,84.018913 c 1.288,6.5148 -6.17,11.157 -11.445,7.1243 l -4.558,-3.4853 c -6.873,-5.2555 -14.0281,-10.1005 -21.4268,-14.5164 l -41.334405,90.4354 c -3.4893,7.634 -5.2953,15.93 -5.2953,24.324 0,32.308 26.182205,58.499 58.479605,58.499 h 66.4199 c 24.541,0 44.435,-19.901 44.435,-44.45 0,-24.549 -19.894,-44.45 -44.435,-44.45 h -36.029 c -11.275,0 -20.416,-9.144 -20.416,-20.423 0,-11.279 9.141,-20.423 20.416,-20.423 h 5.986 c 0.006,0 0.013,0 0.019,0 h 33.627 c 15.255,0 27.622,-12.371 27.622,-27.6309 0,-15.2602 -12.367,-27.631103 -27.622,-27.631103 h -3.603 c -11.276,0 -20.416,-9.1437 -20.416,-20.423 0,-11.2793 9.14,-20.4229 20.416,-20.4229 h 3.603 c 37.806,0 68.454,30.6582 68.454,68.477003 0,18.0329 -6.968,34.4379 -18.358,46.6669 19.261,15.639 31.569,39.512 31.569,66.26 0,47.108 -38.176,85.296 -85.268,85.296 h -66.4199 c -54.848605,0 -99.312105,-44.478 -99.312105,-99.345 0,-14.255 3.06697,-28.344 8.9926,-41.308 l 41.6495,-91.125103 c -7.4871,-2.792 -15.1317,-5.1899 -22.9033,-7.1789 l -7.9096,-2.0243 c -6.4096,-1.6404 -7.4063,-10.3305 -1.5346,-13.3803 z",
                fill: "#ffffff"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/BelieveIcon.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/BelieveIcon.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoopIcon",
    ()=>BoopIcon
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const BoopIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 440 440",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                "clip-path": "url(#clip0_390_417927)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                    filter: "url(#filter0_d_390_417927)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                            filter: "url(#filter1_i_390_417927)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                d: "M94.5312 133.031C94.5312 120.713 130.786 43.6561 158.125 43.6561C185.464 43.6561 221.719 120.713 221.719 133.031C221.719 133.031 197.284 146.781 158.125 146.781C118.966 146.781 94.5312 133.031 94.5312 133.031Z",
                                fill: "url(#paint0_linear_390_417927)"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                            filter: "url(#filter2_i_390_417927)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                d: "M221.719 133.031C221.719 120.713 257.974 43.6561 285.312 43.6561C312.651 43.6561 348.906 120.713 348.906 133.031C348.906 133.031 324.471 146.781 285.312 146.781C246.154 146.781 221.719 133.031 221.719 133.031Z",
                                fill: "url(#paint1_linear_390_417927)"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                            filter: "url(#filter3_i_390_417927)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                d: "M41.25 250.623L41.2845 250.271C41.2845 154.021 103.794 84.8019 220.859 84.9061C337.925 84.8019 400.469 154.021 400.434 250.271L400.469 250.623C400.469 346.873 294.707 377.196 220.859 377.093C147.011 377.196 41.25 346.873 41.25 250.623Z",
                                fill: "url(#paint2_linear_390_417927)"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                            filter: "url(#filter4_ii_390_417927)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                d: "M221.719 141.625C120.42 141.625 70.4688 186.89 70.4688 253.966C70.4688 318.953 151.63 348.734 221.719 348.734C291.807 348.734 372.969 318.953 372.969 253.966C372.969 186.89 323.017 141.625 221.719 141.625Z",
                                fill: "url(#paint3_linear_390_417927)"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                            filter: "url(#filter5_d_390_417927)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                d: "M197.116 255.062C197.116 259.632 200.821 263.337 205.39 263.337C209.96 263.337 213.665 259.632 213.665 255.062H228.053L228.064 255.488C228.286 259.86 231.901 263.337 236.328 263.337C240.898 263.337 244.602 259.632 244.602 255.062H258.991C258.991 267.579 248.844 277.726 236.328 277.726C230.347 277.726 224.909 275.408 220.859 271.623C216.809 275.408 211.371 277.726 205.39 277.726C192.874 277.725 182.727 267.579 182.727 255.062H197.116Z",
                                fill: "url(#paint4_linear_390_417927)"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                            filter: "url(#filter6_d_390_417927)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                d: "M151.072 190.29C171.182 190.29 187.485 206.593 187.485 226.703C187.485 246.813 171.182 263.116 151.072 263.116C130.961 263.116 114.658 246.813 114.658 226.703C114.658 221.4 115.792 216.362 117.83 211.818L102.973 203.818L109.795 191.15L126.286 200.03C132.786 193.987 141.497 190.29 151.072 190.29ZM151.072 204.679C138.908 204.679 129.047 214.539 129.047 226.703C129.047 238.867 138.908 248.727 151.072 248.727C163.235 248.727 173.096 238.867 173.096 226.703C173.096 214.539 163.235 204.679 151.072 204.679Z",
                                fill: "url(#paint5_linear_390_417927)"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                            filter: "url(#filter7_d_390_417927)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                d: "M290.017 190.29C299.592 190.29 308.302 193.988 314.802 200.03L331.294 191.15L338.116 203.818L323.258 211.818C325.296 216.362 326.43 221.4 326.43 226.703C326.43 246.813 310.127 263.116 290.017 263.116C269.907 263.116 253.604 246.813 253.604 226.703C253.604 206.593 269.907 190.29 290.017 190.29ZM290.017 204.679C277.853 204.679 267.992 214.539 267.992 226.703C267.992 238.867 277.853 248.727 290.017 248.727C302.181 248.727 312.041 238.867 312.041 226.703C312.041 214.539 302.181 204.679 290.017 204.679Z",
                                fill: "url(#paint6_linear_390_417927)"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("filter", {
                        id: "filter0_d_390_417927",
                        x: "0",
                        y: "0.687378",
                        width: "445.245",
                        height: "453.113",
                        filterUnits: "userSpaceOnUse",
                        "color-interpolation-filters": "sRGB",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feFlood", {
                                "flood-opacity": "0",
                                result: "BackgroundImageFix"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feOffset", {
                                dx: "2.62266",
                                dy: "10.4907"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "1.31133"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feComposite", {
                                in2: "hardAlpha",
                                operator: "out"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_390_417927"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_390_417927",
                                result: "shape"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("filter", {
                        id: "filter1_i_390_417927",
                        x: "94.5312",
                        y: "43.6561",
                        width: "127.188",
                        height: "110.319",
                        filterUnits: "userSpaceOnUse",
                        "color-interpolation-filters": "sRGB",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feFlood", {
                                "flood-opacity": "0",
                                result: "BackgroundImageFix"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "BackgroundImageFix",
                                result: "shape"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feOffset", {
                                dy: "7.19429"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "3.59714"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feComposite", {
                                in2: "hardAlpha",
                                operator: "arithmetic",
                                k2: "-1",
                                k3: "1"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in2: "shape",
                                result: "effect1_innerShadow_390_417927"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("filter", {
                        id: "filter2_i_390_417927",
                        x: "221.719",
                        y: "43.6561",
                        width: "127.188",
                        height: "110.319",
                        filterUnits: "userSpaceOnUse",
                        "color-interpolation-filters": "sRGB",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feFlood", {
                                "flood-opacity": "0",
                                result: "BackgroundImageFix"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "BackgroundImageFix",
                                result: "shape"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feOffset", {
                                dy: "7.19429"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "3.59714"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feComposite", {
                                in2: "hardAlpha",
                                operator: "arithmetic",
                                k2: "-1",
                                k3: "1"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in2: "shape",
                                result: "effect1_innerShadow_390_417927"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("filter", {
                        id: "filter3_i_390_417927",
                        x: "41.25",
                        y: "84.906",
                        width: "359.219",
                        height: "299.382",
                        filterUnits: "userSpaceOnUse",
                        "color-interpolation-filters": "sRGB",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feFlood", {
                                "flood-opacity": "0",
                                result: "BackgroundImageFix"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "BackgroundImageFix",
                                result: "shape"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feOffset", {
                                dy: "7.19429"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "3.59714"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feComposite", {
                                in2: "hardAlpha",
                                operator: "arithmetic",
                                k2: "-1",
                                k3: "1"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in2: "shape",
                                result: "effect1_innerShadow_390_417927"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("filter", {
                        id: "filter4_ii_390_417927",
                        x: "70.4688",
                        y: "134.431",
                        width: "302.5",
                        height: "221.498",
                        filterUnits: "userSpaceOnUse",
                        "color-interpolation-filters": "sRGB",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feFlood", {
                                "flood-opacity": "0",
                                result: "BackgroundImageFix"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "BackgroundImageFix",
                                result: "shape"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feOffset", {
                                dy: "7.19429"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "3.59714"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feComposite", {
                                in2: "hardAlpha",
                                operator: "arithmetic",
                                k2: "-1",
                                k3: "1"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in2: "shape",
                                result: "effect1_innerShadow_390_417927"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feOffset", {
                                dy: "-7.19429"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "3.59714"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feComposite", {
                                in2: "hardAlpha",
                                operator: "arithmetic",
                                k2: "-1",
                                k3: "1"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in2: "effect1_innerShadow_390_417927",
                                result: "effect2_innerShadow_390_417927"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("filter", {
                        id: "filter5_d_390_417927",
                        x: "175.533",
                        y: "247.868",
                        width: "90.6522",
                        height: "37.0517",
                        filterUnits: "userSpaceOnUse",
                        "color-interpolation-filters": "sRGB",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feFlood", {
                                "flood-opacity": "0",
                                result: "BackgroundImageFix"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feOffset", {}, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "3.59714"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feComposite", {
                                in2: "hardAlpha",
                                operator: "out"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0.78046 0 0 0 0 0.39506 0 0 0 0 0.999609 0 0 0 1 0"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_390_417927"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_390_417927",
                                result: "shape"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("filter", {
                        id: "filter6_d_390_417927",
                        x: "95.7786",
                        y: "183.096",
                        width: "98.9003",
                        height: "87.2147",
                        filterUnits: "userSpaceOnUse",
                        "color-interpolation-filters": "sRGB",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feFlood", {
                                "flood-opacity": "0",
                                result: "BackgroundImageFix"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feOffset", {}, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "3.59714"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feComposite", {
                                in2: "hardAlpha",
                                operator: "out"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0.78046 0 0 0 0 0.39506 0 0 0 0 0.999609 0 0 0 1 0"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_390_417927"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_390_417927",
                                result: "shape"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("filter", {
                        id: "filter7_d_390_417927",
                        x: "246.409",
                        y: "183.096",
                        width: "98.9013",
                        height: "87.2147",
                        filterUnits: "userSpaceOnUse",
                        "color-interpolation-filters": "sRGB",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feFlood", {
                                "flood-opacity": "0",
                                result: "BackgroundImageFix"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feOffset", {}, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "3.59714"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feComposite", {
                                in2: "hardAlpha",
                                operator: "out"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0.78046 0 0 0 0 0.39506 0 0 0 0 0.999609 0 0 0 1 0"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_390_417927"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_390_417927",
                                result: "shape"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                        id: "paint0_linear_390_417927",
                        x1: "156.122",
                        y1: "43.6561",
                        x2: "156.122",
                        y2: "146.781",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                "stop-color": "#37CAF9"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                "stop-color": "#0190C8"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                        id: "paint1_linear_390_417927",
                        x1: "283.31",
                        y1: "43.6561",
                        x2: "283.31",
                        y2: "146.781",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                "stop-color": "#37CAF9"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                "stop-color": "#0190C8"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                        id: "paint2_linear_390_417927",
                        x1: "215.202",
                        y1: "84.906",
                        x2: "215.202",
                        y2: "377.094",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                "stop-color": "#37CAF9"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                "stop-color": "#0190C8"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 320,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                        id: "paint3_linear_390_417927",
                        x1: "220.891",
                        y1: "136.469",
                        x2: "220.891",
                        y2: "319.529",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                "stop-color": "#4D5358"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                "stop-color": "#21252B"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                        id: "paint4_linear_390_417927",
                        x1: "220.859",
                        y1: "255.062",
                        x2: "220.859",
                        y2: "277.726",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                "stop-color": "#9B8AFB"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 341,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                "stop-color": "#99F4E0"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 342,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                        id: "paint5_linear_390_417927",
                        x1: "145.229",
                        y1: "190.29",
                        x2: "145.229",
                        y2: "263.116",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                "stop-color": "#9B8AFB"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                "stop-color": "#99F4E0"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                        id: "paint6_linear_390_417927",
                        x1: "295.86",
                        y1: "190.29",
                        x2: "295.86",
                        y2: "263.116",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                "stop-color": "#9B8AFB"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                "stop-color": "#99F4E0"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                        lineNumber: 355,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("clipPath", {
                        id: "clip0_390_417927",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                            width: "440",
                            height: "440",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                            lineNumber: 367,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                        lineNumber: 366,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/scaffolds/fun-launch/src/icons/CookmemeIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CookmemeIcon",
    ()=>CookmemeIcon
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const CookmemeIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 196 196",
        width: "1em",
        height: "1em",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                width: "196",
                height: "196",
                fill: "#AD55FF",
                rx: "36"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/CookmemeIcon.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#000",
                d: "M21 79.125h9.688v24.219H21zm145.312 0H176v24.219h-9.688zM30.688 69.438h9.687v9.687h-9.687zm125.937 0h9.687v9.687h-9.687zM40.375 59.75h29.063v9.688H40.375zm87.187 0h29.063v9.688h-29.063zM59.75 40.375h9.688V59.75H59.75zm67.812 0h9.688V59.75h-9.688zm-77.5 82.344h9.688V176h-9.687zm87.188 0h9.688V176h-9.688zm0 43.593V176h-77.5v-9.688zm0-19.374v9.687h-77.5v-9.687z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/CookmemeIcon.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#E1E3FA",
                d: "M137.25 137.25v9.688h-77.5v-9.688z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/CookmemeIcon.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#fff",
                d: "M137.25 69.438v67.812h-77.5V69.438zm-9.688-29.063v29.063H69.438V40.375zm-9.687-9.687v9.687h-38.75v-9.687zM59.75 69.438v43.593H40.375V69.437zm77.5 43.593V69.437h19.375v43.594zM40.375 79.125v24.219h-9.687V79.125zm116.25 24.219V79.125h9.687v24.219z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/CookmemeIcon.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#E1E3FA",
                d: "M137.25 156.625v9.687h-77.5v-9.687z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/CookmemeIcon.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#000",
                d: "M69.438 69.438h9.687v9.687h-9.687zm0 48.437h9.687v9.687h-9.687zm48.437 0h9.687v9.687h-9.687zm-48.437 9.687h9.687v9.688h-9.687zm48.437 0h9.687v9.688h-9.687zm0-58.124h9.687v9.687h-9.687zm-87.187 33.906h9.687v9.687h-9.687zm125.937 0h9.687v9.687h-9.687zm-116.25 9.687H59.75v9.688H40.375zm96.875 0h19.375v9.688H137.25zM69.438 30.688h9.687v9.687h-9.687zm48.437 0h9.687v9.687h-9.687zM79.125 21h38.75v9.688h-38.75z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/CookmemeIcon.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/CookmemeIcon.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/scaffolds/fun-launch/src/icons/DBCIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DBCIcon",
    ()=>DBCIcon
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const DBCIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 300 300",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                width: "300",
                height: "300",
                rx: "150",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/DBCIcon.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                width: "300",
                height: "300",
                rx: "150",
                fill: "url(#paint0_linear_150_3142)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/DBCIcon.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip0_150_3142)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("mask", {
                        id: "mask0_150_3142",
                        style: {
                            maskType: 'alpha'
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "20",
                        y: "70",
                        width: "213",
                        height: "214",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                            d: "M168.252 70.6501C203.732 70.6501 232.495 99.4123 232.495 134.892C232.495 158.339 219.933 178.851 201.173 190.068L107.741 283.501L20.519 196.279L110.922 105.875C121.522 84.9743 143.214 70.6502 168.252 70.6501Z",
                            fill: "#795E5E"
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/icons/DBCIcon.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/DBCIcon.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                        mask: "url(#mask0_150_3142)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                            d: "M235.169 140.391C236.543 139.036 237.928 137.682 239.32 136.334C239.288 145.955 236.97 155.28 232.315 163.469C224.42 170.919 216.337 178.182 208.007 185.164C200.922 191.114 193.654 196.859 186.176 202.35C183.119 204.571 180.017 206.758 176.792 208.824C178.866 205.613 181.058 202.529 183.293 199.479C185.813 196.082 188.378 192.73 190.994 189.417C204.65 172.123 219.623 155.937 235.169 140.391ZM198.539 144.458C210.172 133.002 221.945 121.651 234.016 110.621C235.931 115.137 237.329 119.782 238.204 124.433C228.607 134.71 218.78 144.78 208.879 154.755C197.282 166.202 185.532 177.53 173.49 188.545C156.344 204.242 138.599 219.288 119.827 233.141C132.423 216.209 146.01 200.117 160.18 184.551C172.615 170.855 185.498 157.561 198.539 144.458ZM169.572 140.882C186.686 123.993 204.031 107.301 221.922 91.2091C224.438 94.109 226.687 97.1474 228.659 100.293C212.85 117.671 196.476 134.531 179.913 151.18C170.215 160.76 160.446 170.27 150.548 179.651C127.396 201.575 103.518 222.741 78.1517 242.223C97.3046 217.498 118.072 194.191 139.593 171.588C149.455 161.226 159.477 151.012 169.572 140.882ZM153.283 124.658C169.962 108.202 186.859 91.9294 204.263 76.219C207.445 78.1609 210.524 80.3725 213.465 82.8626C197.317 100.668 180.571 117.924 163.624 134.956C153.457 145.003 143.213 154.973 132.819 164.783C110.117 186.22 86.707 206.919 61.862 225.998C81.4579 200.691 102.758 176.879 124.812 153.783C134.193 143.965 143.702 134.276 153.283 124.658ZM149.693 95.7928C159.585 86.0452 169.584 76.3823 179.779 66.9251C184.506 67.7398 189.227 69.0884 193.826 70.9571C182.811 82.9048 171.475 94.5671 160.033 106.09C146.944 119.009 133.663 131.772 119.986 144.106C104.292 158.28 88.0586 171.871 70.9812 184.476C84.9862 165.651 100.219 147.868 116.095 130.681C127.043 118.813 138.312 107.23 149.693 95.7928ZM139.231 74.2206C147.679 68.8847 157.502 66.1564 167.671 65.9666C166.475 67.1832 165.285 68.3936 164.088 69.5981C148.652 84.906 132.581 99.6616 115.43 113.138C111.921 115.898 108.361 118.608 104.754 121.26C101.697 123.48 98.5952 125.668 95.3708 127.733C97.4448 124.523 99.6416 121.434 101.872 118.389C107.865 110.284 114.166 102.438 120.698 94.8012C126.697 87.7709 132.897 80.9282 139.231 74.2206Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/icons/DBCIcon.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/DBCIcon.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/DBCIcon.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                        id: "paint0_linear_150_3142",
                        x1: "350.5",
                        y1: "-17",
                        x2: "32.5",
                        y2: "254.5",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                stopColor: "#F7C10B"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/DBCIcon.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                offset: "0.471447",
                                stopColor: "#F84C00"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/DBCIcon.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#5F33FF"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/DBCIcon.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/DBCIcon.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("clipPath", {
                        id: "clip0_150_3142",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                            width: "205.697",
                            height: "205.697",
                            fill: "white",
                            transform: "translate(56 47)"
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/icons/DBCIcon.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/DBCIcon.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/DBCIcon.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/DBCIcon.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DealrIcon",
    ()=>DealrIcon
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const DealrIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 250 259",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M165.418 7.11017L29.4819 13.5222C25.7557 13.698 22.2874 15.476 19.9694 18.3987L18.4165 20.3567C16.7155 22.5015 15.7398 25.1312 15.6302 27.8664L9.22009 187.798C9.07946 191.306 10.3733 194.721 12.8037 197.256L29.9884 215.177C31.8162 217.083 33.0158 219.503 33.4258 222.112L35.5025 235.328C36.1506 239.452 38.7523 243.009 42.4867 244.876L44.0062 245.636C45.7999 246.533 47.7778 247 49.7832 247H188.83H228.681C232.074 247 235.289 245.477 237.438 242.85C239.192 240.706 240.099 237.992 239.986 235.223L232.114 42.6813C232.041 40.8962 231.598 39.1456 230.814 37.5402L227.279 30.3022C225.736 27.1427 222.972 24.7488 219.625 23.6728L169.98 7.71551C168.508 7.24235 166.962 7.03731 165.418 7.11017Z",
                    fill: "#E4FFE0"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M188.83 247H228.681C232.074 247 235.289 245.477 237.438 242.85V242.85C239.192 240.706 240.099 237.992 239.986 235.223L232.114 42.6813C232.041 40.8962 231.598 39.1456 230.814 37.5402L227.279 30.3022C225.736 27.1427 222.972 24.7488 219.625 23.6728L169.98 7.71551C168.508 7.24235 166.962 7.03731 165.418 7.11017L29.4819 13.5222C25.7557 13.698 22.2874 15.476 19.9694 18.3987L18.4165 20.3567C16.7155 22.5015 15.7398 25.1312 15.6302 27.8664L9.22009 187.798C9.07946 191.306 10.3733 194.721 12.8037 197.256L29.9884 215.177C31.8162 217.083 33.0158 219.503 33.4258 222.112L35.5025 235.328C36.1506 239.452 38.7523 243.009 42.4867 244.877L44.0062 245.636C45.7999 246.533 47.7778 247 49.7832 247H188.83ZM188.83 247L186.494 243.765C185.13 241.878 184.303 239.657 184.098 237.337L182.371 217.765M182.371 217.765L160.275 196.688M182.371 217.765H44.0142M160.275 196.688L164.979 25.6567C165.015 24.3316 165.256 23.02 165.691 21.768L167.754 15.8385M160.275 196.688L61.0113 198.388",
                    stroke: "#05672C",
                    strokeWidth: "4.07932",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M188.83 247H228.681C232.074 247 235.289 245.477 237.438 242.85V242.85C239.192 240.706 240.099 237.992 239.986 235.223L232.114 42.6813C232.041 40.8962 231.598 39.1456 230.814 37.5402L227.279 30.3022C225.736 27.1427 222.972 24.7488 219.625 23.6728L169.98 7.71551C168.508 7.24235 166.962 7.03731 165.418 7.11017L29.4819 13.5222C25.7557 13.698 22.2874 15.476 19.9694 18.3987L18.4165 20.3567C16.7155 22.5015 15.7398 25.1312 15.6302 27.8664L9.22009 187.798C9.07946 191.306 10.3733 194.721 12.8037 197.256L29.9884 215.177C31.8162 217.083 33.0158 219.503 33.4258 222.112L35.5025 235.328C36.1506 239.452 38.7523 243.009 42.4867 244.877L44.0062 245.636C45.7999 246.533 47.7778 247 49.7832 247H188.83ZM188.83 247L186.494 243.765C185.13 241.878 184.303 239.657 184.098 237.337L182.371 217.765M182.371 217.765L160.275 196.688M182.371 217.765H44.0142M160.275 196.688L164.979 25.6567C165.015 24.3316 165.256 23.02 165.691 21.768L167.754 15.8385M160.275 196.688L61.0113 198.388",
                    stroke: "url(#pattern0_225_36468)",
                    strokeOpacity: "0.2",
                    strokeWidth: "4.07932",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M128.902 174.634H88.7883C86.0687 174.634 85.049 174.974 84.709 175.654C83.6886 177.694 86.0682 178.461 88.7883 178.373C99.3266 178.033 121.219 177.421 124.482 177.693C128.562 178.033 128.562 176.674 131.621 180.073C134.069 182.793 136.04 182.793 136.72 182.453H149.638C153.718 182.453 152.698 179.393 152.698 174.294C152.698 170.215 149.525 169.648 147.938 169.875C146.125 169.988 141.344 170.147 136.72 169.875C130.941 169.535 131.961 172.254 131.621 173.274C131.349 174.09 129.695 174.521 128.902 174.634Z",
                    fill: "#0D6D0C"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M128.902 174.634H88.7883C86.0687 174.634 85.049 174.974 84.709 175.654C83.6886 177.694 86.0682 178.461 88.7883 178.373C99.3266 178.033 121.219 177.421 124.482 177.693C128.562 178.033 128.562 176.674 131.621 180.073C134.069 182.793 136.04 182.793 136.72 182.453H149.638C153.718 182.453 152.698 179.393 152.698 174.294C152.698 170.215 149.525 169.648 147.938 169.875C146.125 169.988 141.344 170.147 136.72 169.875C130.941 169.535 131.961 172.254 131.621 173.274C131.349 174.09 129.695 174.521 128.902 174.634Z",
                    fill: "url(#pattern1_225_36468)",
                    fillOpacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "195.861",
                    y: "231.023",
                    width: "2.71955",
                    height: "9.32778",
                    rx: "1.35977",
                    transform: "rotate(16.2548 195.861 231.023)",
                    fill: "#05672C"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "195.861",
                    y: "231.023",
                    width: "2.71955",
                    height: "9.32778",
                    rx: "1.35977",
                    transform: "rotate(16.2548 195.861 231.023)",
                    fill: "url(#pattern2_225_36468)",
                    fillOpacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "200.757",
                    y: "231.023",
                    width: "2.71955",
                    height: "9.32778",
                    rx: "1.35977",
                    transform: "rotate(16.2548 200.757 231.023)",
                    fill: "#05672C"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "200.757",
                    y: "231.023",
                    width: "2.71955",
                    height: "9.32778",
                    rx: "1.35977",
                    transform: "rotate(16.2548 200.757 231.023)",
                    fill: "url(#pattern3_225_36468)",
                    fillOpacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "206.196",
                    y: "230.344",
                    width: "2.71955",
                    height: "9.32778",
                    rx: "1.35977",
                    transform: "rotate(16.2548 206.196 230.344)",
                    fill: "#05672C"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "206.196",
                    y: "230.344",
                    width: "2.71955",
                    height: "9.32778",
                    rx: "1.35977",
                    transform: "rotate(16.2548 206.196 230.344)",
                    fill: "url(#pattern4_225_36468)",
                    fillOpacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "210.956",
                    y: "231.023",
                    width: "2.71955",
                    height: "9.32778",
                    rx: "1.35977",
                    transform: "rotate(16.2548 210.956 231.023)",
                    fill: "#05672C"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "210.956",
                    y: "231.023",
                    width: "2.71955",
                    height: "9.32778",
                    rx: "1.35977",
                    transform: "rotate(16.2548 210.956 231.023)",
                    fill: "url(#pattern5_225_36468)",
                    fillOpacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "215.715",
                    y: "231.703",
                    width: "2.71955",
                    height: "9.32778",
                    rx: "1.35977",
                    transform: "rotate(16.2548 215.715 231.703)",
                    fill: "#05672C"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "215.715",
                    y: "231.703",
                    width: "2.71955",
                    height: "9.32778",
                    rx: "1.35977",
                    transform: "rotate(16.2548 215.715 231.703)",
                    fill: "url(#pattern6_225_36468)",
                    fillOpacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "220.475",
                    y: "231.703",
                    width: "2.71955",
                    height: "9.32778",
                    rx: "1.35977",
                    transform: "rotate(16.2548 220.475 231.703)",
                    fill: "#05672C"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "220.475",
                    y: "231.703",
                    width: "2.71955",
                    height: "9.32778",
                    rx: "1.35977",
                    transform: "rotate(16.2548 220.475 231.703)",
                    fill: "url(#pattern7_225_36468)",
                    fillOpacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "225.233",
                    y: "231.023",
                    width: "2.71955",
                    height: "9.32778",
                    rx: "1.35977",
                    transform: "rotate(16.2548 225.233 231.023)",
                    fill: "#05672C"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "225.233",
                    y: "231.023",
                    width: "2.71955",
                    height: "9.32778",
                    rx: "1.35977",
                    transform: "rotate(16.2548 225.233 231.023)",
                    fill: "url(#pattern8_225_36468)",
                    fillOpacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "229.992",
                    y: "232.383",
                    width: "2.71955",
                    height: "9.32778",
                    rx: "1.35977",
                    transform: "rotate(16.2548 229.992 232.383)",
                    fill: "#05672C"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "229.992",
                    y: "232.383",
                    width: "2.71955",
                    height: "9.32778",
                    rx: "1.35977",
                    transform: "rotate(16.2548 229.992 232.383)",
                    fill: "url(#pattern9_225_36468)",
                    fillOpacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "222.669",
                    y: "57.1738",
                    width: "2.03966",
                    height: "6.79887",
                    rx: "1.01983",
                    transform: "rotate(-1.92965 222.669 57.1738)",
                    fill: "#007024"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "222.669",
                    y: "57.1738",
                    width: "2.03966",
                    height: "6.79887",
                    rx: "1.01983",
                    transform: "rotate(-1.92965 222.669 57.1738)",
                    fill: "url(#pattern10_225_36468)",
                    fillOpacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "226.562",
                    y: "51.6006",
                    width: "2.03966",
                    height: "6.79887",
                    rx: "1.01983",
                    transform: "rotate(-1.92965 226.562 51.6006)",
                    fill: "#007024"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "226.562",
                    y: "51.6006",
                    width: "2.03966",
                    height: "6.79887",
                    rx: "1.01983",
                    transform: "rotate(-1.92965 226.562 51.6006)",
                    fill: "url(#pattern11_225_36468)",
                    fillOpacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "226.883",
                    y: "61.1143",
                    width: "2.03966",
                    height: "6.79887",
                    rx: "1.01983",
                    transform: "rotate(-1.92965 226.883 61.1143)",
                    fill: "#007024"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "226.883",
                    y: "61.1143",
                    width: "2.03966",
                    height: "6.79887",
                    rx: "1.01983",
                    transform: "rotate(-1.92965 226.883 61.1143)",
                    fill: "url(#pattern12_225_36468)",
                    fillOpacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M121.182 13.459C118.734 15.0907 114.723 12.7791 113.023 11.4193L144.638 10.0596C139.199 10.3995 140.899 9.71963 137.159 14.4788C133.42 19.238 129.341 16.8584 127.641 14.4788C125.941 12.0992 124.242 11.4193 121.182 13.459Z",
                    fill: "#05672C"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 252,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M121.182 13.459C118.734 15.0907 114.723 12.7791 113.023 11.4193L144.638 10.0596C139.199 10.3995 140.899 9.71963 137.159 14.4788C133.42 19.238 129.341 16.8584 127.641 14.4788C125.941 12.0992 124.242 11.4193 121.182 13.459Z",
                    fill: "url(#pattern13_225_36468)",
                    fillOpacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 256,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M102.484 156.915C102.212 152.563 100.784 151.476 100.104 151.476H106.563C102.824 151.476 105.204 179.691 105.204 183.77C106.223 184.11 107.583 188.189 104.184 188.189C101.41 188.189 102.257 185.017 103.164 183.77C103.051 176.631 102.756 161.266 102.484 156.915Z",
                    fill: "#0D6D0C"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 261,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M102.484 156.915C102.212 152.563 100.784 151.476 100.104 151.476H106.563C102.824 151.476 105.204 179.691 105.204 183.77C106.223 184.11 107.583 188.189 104.184 188.189C101.41 188.189 102.257 185.017 103.164 183.77C103.051 176.631 102.756 161.266 102.484 156.915Z",
                    fill: "url(#pattern14_225_36468)",
                    fillOpacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 265,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M112.004 153.515C111.724 151.662 109.984 151.476 109.284 151.476H115.933C113.363 152.155 113.363 158.274 113.703 163.374C114.753 163.518 115.403 167.453 113.024 167.453C110.169 167.453 111.664 163.374 112.344 163.374C112.227 160.333 112.284 155.369 112.004 153.515Z",
                    fill: "#0D6D0C"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 270,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M112.004 153.515C111.724 151.662 109.984 151.476 109.284 151.476H115.933C113.363 152.155 113.363 158.274 113.703 163.374C114.753 163.518 115.403 167.453 113.024 167.453C110.169 167.453 111.664 163.374 112.344 163.374C112.227 160.333 112.284 155.369 112.004 153.515Z",
                    fill: "url(#pattern15_225_36468)",
                    fillOpacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 274,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                            d: "M27.5946 50.8182C27.8446 43.7339 33.4951 38.0301 40.5767 37.7136L135.367 33.4772C143.169 33.1285 149.661 39.4086 149.571 47.2181L148.528 137.681C148.444 144.999 142.582 150.938 135.266 151.118L38.3908 153.5C30.5634 153.692 24.1911 147.251 24.4672 139.427L27.5946 50.8182Z",
                            fill: "#007024"
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                            lineNumber: 280,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                            d: "M27.5946 50.8182C27.8446 43.7339 33.4951 38.0301 40.5767 37.7136L135.367 33.4772C143.169 33.1285 149.661 39.4086 149.571 47.2181L148.528 137.681C148.444 144.999 142.582 150.938 135.266 151.118L38.3908 153.5C30.5634 153.692 24.1911 147.251 24.4672 139.427L27.5946 50.8182Z",
                            fill: "url(#pattern16_225_36468)",
                            fillOpacity: "0.2"
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 279,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M28.6138 50.8542C28.8451 44.3012 34.0717 39.0252 40.6223 38.7324L135.413 34.496C142.63 34.1734 148.635 39.9826 148.551 47.2063L147.509 137.669C147.431 144.438 142.009 149.932 135.241 150.098L38.3657 152.48C31.1254 152.658 25.231 146.701 25.4864 139.463L28.6138 50.8542Z",
                    stroke: "#007024",
                    strokeWidth: "2.03966"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 290,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M28.6138 50.8542C28.8451 44.3012 34.0717 39.0252 40.6223 38.7324L135.413 34.496C142.63 34.1734 148.635 39.9826 148.551 47.2063L147.509 137.669C147.431 144.438 142.009 149.932 135.241 150.098L38.3657 152.48C31.1254 152.658 25.231 146.701 25.4864 139.463L28.6138 50.8542Z",
                    stroke: "url(#pattern17_225_36468)",
                    strokeOpacity: "0.2",
                    strokeWidth: "2.03966"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 295,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M45.0352 112.043L55.8419 128.391C56.0257 128.669 56.3837 128.772 56.6877 128.636L70.5437 122.412C70.7653 122.312 71.0231 122.339 71.2201 122.481L82.783 130.822C83.0001 130.979 83.2888 130.994 83.5206 130.86L97.9465 122.534C98.2307 122.37 98.5916 122.433 98.8042 122.683L105.464 130.512C105.723 130.817 106.188 130.833 106.468 130.547L124.582 112.043",
                    stroke: "#DCFD34",
                    strokeWidth: "6.79887",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 301,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "49.1143",
                    y: "197.029",
                    width: "7.47875",
                    height: "2.71955",
                    rx: "1.35977",
                    fill: "#05672C"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 307,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "49.1143",
                    y: "197.029",
                    width: "7.47875",
                    height: "2.71955",
                    rx: "1.35977",
                    fill: "url(#pattern18_225_36468)",
                    fillOpacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 315,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "36.876",
                    y: "197.029",
                    width: "10.1983",
                    height: "2.71955",
                    rx: "1.35977",
                    fill: "#05672C"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 324,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "36.876",
                    y: "197.029",
                    width: "10.1983",
                    height: "2.71955",
                    rx: "1.35977",
                    fill: "url(#pattern19_225_36468)",
                    fillOpacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 325,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                    clipPath: "url(#clip0_225_36468)",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                        d: "M149.416 65.8009C148.498 65.8788 147.586 65.9911 146.667 66.0346C141.993 66.2656 137.318 66.4867 132.643 66.7029C131.427 66.7604 130.207 66.8181 128.989 66.851C128.569 66.861 128.484 67.0774 128.519 67.5795C128.607 68.8446 128.62 70.1182 128.7 71.3887C128.732 71.9008 128.618 72.0889 128.205 72.1035C127.151 72.1386 126.098 72.2081 125.044 72.2629C124.902 72.2696 124.755 72.2766 124.541 72.2867C124.585 73.2131 124.626 74.0853 124.668 74.9576C124.699 75.613 124.71 76.2693 124.769 76.9234C124.809 77.3659 124.665 77.5012 124.336 77.5118C123.333 77.5543 122.328 77.6167 121.326 77.669C120.871 77.6905 120.654 77.9724 120.675 78.5147C120.726 79.7618 120.769 81.0142 120.836 82.2606C120.86 82.7632 120.725 82.9326 120.308 82.9375C119.142 82.9532 117.978 83.0329 116.714 83.0927C116.775 84.3838 116.825 85.6853 116.898 86.9856C116.987 88.5125 117.118 88.2692 115.981 88.323C109.496 88.6396 103.011 88.9365 96.5254 89.2433C96.3946 89.2495 96.2678 89.2554 96.0816 89.2643C96.0588 89.0332 96.0339 88.8418 96.0245 88.6447C95.9635 87.3536 95.8826 86.0634 95.8495 84.7759C95.8369 84.258 95.7362 84.0602 95.2816 84.1015C94.1031 84.2017 92.9172 84.2281 91.6693 84.2872C91.6457 84.0413 91.6147 83.8057 91.6038 83.5741C91.5427 82.283 91.4658 80.9927 91.4208 79.7058C91.4047 79.2818 91.2859 79.1195 90.9449 79.1307C89.8748 79.1714 88.8028 79.1728 87.7337 79.2332C87.3177 79.2529 87.1988 79.0906 87.1825 78.5777C87.1438 77.088 87.0536 75.6008 86.98 74.0436C86.2589 74.0777 85.637 74.1071 85.0189 74.1363C84.4247 74.1644 83.8339 74.1825 83.2409 74.2352C82.9009 74.2661 82.7708 74.1192 82.7545 73.6903C82.7035 72.3592 82.6128 71.03 82.5657 69.6987C82.5471 69.2206 82.4131 69.0738 82.0253 69.102C80.9414 69.1878 79.8557 69.2343 78.7693 69.2659C78.4165 69.2776 78.3328 69.4396 78.3568 69.8633C78.4365 71.2127 78.4687 72.5644 78.5405 73.9143C78.5603 74.3332 78.4265 74.4432 78.1175 74.4578C77.0316 74.4993 75.9475 74.5802 74.8571 74.612C74.4765 74.6251 74.3567 74.7789 74.3919 75.2711C74.4835 76.5361 74.5001 77.8095 74.5959 79.0792C74.6458 79.714 74.4635 79.8905 73.9795 79.8986C72.9595 79.9073 71.9393 79.9951 70.916 80.0188C70.555 80.026 70.438 80.155 70.4686 80.6326C70.5583 81.9421 70.5807 83.2548 70.6625 84.5647C70.6965 85.1162 70.5711 85.3197 70.099 85.3272C68.9322 85.3379 67.7689 85.4226 66.5487 85.4803C66.6195 86.9784 66.6603 88.4285 66.7685 89.8754C66.8144 90.5103 66.6557 90.6808 66.1684 90.7038C59.7142 90.9943 53.2651 91.3092 46.8113 91.6095C45.8684 91.6541 45.8675 91.6344 45.8125 90.4715C45.7507 89.1656 45.689 87.8597 45.6218 86.4405C44.3898 86.4988 43.2073 86.5152 42.0335 86.63C41.5395 86.678 41.4493 86.4502 41.4325 85.9275C41.3922 84.6552 41.3006 83.3902 41.2563 82.1181C41.2414 81.6348 41.0785 81.4647 40.71 81.4821C39.6879 81.5305 38.6689 81.5589 37.6463 81.5974C37.4839 81.6051 37.3214 81.6128 37.0996 81.6232C37.0751 81.3577 37.053 81.1414 37.0429 80.9295C36.9739 79.6388 36.8931 78.3487 36.856 77.0614C36.8404 76.5633 36.6915 76.437 36.3151 76.4548C35.2142 76.5168 34.1936 76.6317 33.0925 76.6887C32.7716 76.7039 32.6828 76.5895 32.6632 76.1756C32.8833 73.0563 33.0924 69.8898 33.0924 66.7613C33.073 66.3523 33.184 66.1791 33.4764 66.1504C33.8835 66.1114 34.2951 66.0821 34.7071 66.0626C71.7604 64.31 107.87 62.6592 144.924 60.9066C146.14 60.8491 147.362 60.8406 148.577 60.7437C149.059 60.706 149.38 60.8586 149.397 61.3912C149.45 62.8457 149.328 64.3678 149.401 65.8213L149.416 65.8009ZM66.1184 75.1241C65.99 75.0957 65.8639 75.0325 65.7371 75.0385C64.818 75.0819 63.8957 75.1404 62.977 75.1937C62.6205 75.2106 62.2679 75.2273 61.8836 75.2454C61.9006 75.6052 61.913 75.8663 61.9256 76.1324C61.9855 77.3989 62.0496 78.6701 62.1095 79.9365C62.1232 80.2273 62.1447 80.5127 61.7837 80.5199C60.7802 80.5427 59.7777 80.5852 58.7756 80.6375C58.4864 80.6512 58.2037 80.7189 57.9276 80.7566C58.0008 82.304 58.0821 83.7719 58.1318 85.2413C58.149 85.6899 58.2723 85.8619 58.6405 85.8395C59.6896 85.7751 60.7428 85.7105 61.7984 85.7001C62.2747 85.6973 62.4246 85.5075 62.3805 84.9119C62.2878 83.7063 62.2426 82.4984 62.1896 81.2959C62.1531 80.5222 62.2213 80.4548 62.8235 80.4263C63.8258 80.3789 64.8269 80.3068 65.8309 80.2939C66.2277 80.2899 66.3389 80.1217 66.3123 79.6439C66.2289 78.1316 66.1732 76.618 66.1056 75.105C67.3369 75.0319 68.5634 74.9394 69.7964 74.9008C70.1651 74.8883 70.2406 74.7217 70.2175 74.3178C70.1408 72.9485 70.076 71.5785 70.0194 70.2132C70.0026 69.8584 69.8998 69.7002 69.5913 69.7247C69.1481 69.7556 68.7013 69.7125 68.2611 69.7234C67.4604 69.7514 66.6646 69.7989 65.8722 69.8364L66.1228 75.1338L66.1184 75.1241ZM112.038 72.8731L112.287 78.1262L108.087 78.3248C108.164 79.9411 108.23 81.5135 108.328 83.0843C108.334 83.2125 108.594 83.4224 108.733 83.4208C109.837 83.413 110.937 83.3462 112.041 83.3335C112.437 83.3295 112.551 83.1315 112.521 82.6687C112.442 81.4032 112.397 80.1311 112.306 78.8661C112.268 78.3197 112.403 78.0762 112.859 78.0645C113.914 78.0393 114.963 77.965 116.018 77.9447C116.359 77.9385 116.488 77.7941 116.467 77.3703C116.407 76.1829 116.367 74.9946 116.311 73.8119C116.258 72.6884 116.258 72.6834 115.354 72.7212C114.273 72.7724 113.191 72.8235 112.034 72.8783L112.038 72.8731ZM115.984 67.4859C116.06 69.0973 116.127 70.6844 116.226 72.275C116.233 72.4179 116.483 72.6629 116.614 72.6616C117.859 72.6324 119.103 72.5637 120.39 72.5028C120.312 70.8421 120.245 69.255 120.146 67.6693C120.14 67.5412 119.899 67.3254 119.776 67.3263C118.547 67.3597 117.315 67.4279 115.984 67.4908L115.984 67.4859Z",
                        fill: "#DCFD34"
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                        lineNumber: 335,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 334,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M25.4787 166.334C22.8456 164.42 22.5151 167.703 24.8097 169.402C24.8485 169.43 24.8846 169.462 24.9168 169.498C26.0569 170.77 27.9808 173.543 26.9082 174.884C25.5484 176.584 22.4889 178.283 23.8487 179.643C24.9365 180.731 28.1546 178.737 29.6277 177.603C29.9677 177.264 30.9875 176.992 32.3473 178.623C33.6876 180.232 34.3673 181.642 36.0142 182.333C36.0619 182.353 36.1165 182.367 36.1677 182.375C40.4555 182.988 36.4161 178.611 34.7269 176.584C33.4107 175.004 34.1116 173.722 34.6717 173.23C34.7077 173.199 34.7481 173.174 34.7882 173.148C35.1284 172.926 36.3618 171.889 39.1461 169.105C42.0556 166.195 39.6273 166.266 37.9282 166.689C37.8344 166.712 37.748 166.757 37.6729 166.818C36.3714 167.875 33.5914 170.013 32.0073 170.805C30.3945 171.611 27.0989 168.277 25.6003 166.449C25.5651 166.406 25.5237 166.367 25.4787 166.334Z",
                    fill: "#006A22"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 340,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M25.4787 166.334C22.8456 164.42 22.5151 167.703 24.8097 169.402C24.8485 169.43 24.8846 169.462 24.9168 169.498C26.0569 170.77 27.9808 173.543 26.9082 174.884C25.5484 176.584 22.4889 178.283 23.8487 179.643C24.9365 180.731 28.1546 178.737 29.6277 177.603C29.9677 177.264 30.9875 176.992 32.3473 178.623C33.6876 180.232 34.3673 181.642 36.0142 182.333C36.0619 182.353 36.1165 182.367 36.1677 182.375C40.4555 182.988 36.4161 178.611 34.7269 176.584C33.4107 175.004 34.1116 173.722 34.6717 173.23C34.7077 173.199 34.7481 173.174 34.7882 173.148C35.1284 172.926 36.3618 171.889 39.1461 169.105C42.0556 166.195 39.6273 166.266 37.9282 166.689C37.8344 166.712 37.748 166.757 37.6729 166.818C36.3714 167.875 33.5914 170.013 32.0073 170.805C30.3945 171.611 27.0989 168.277 25.6003 166.449C25.5651 166.406 25.5237 166.367 25.4787 166.334Z",
                    fill: "url(#pattern20_225_36468)",
                    fillOpacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
                    lineNumber: 344,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/scaffolds/fun-launch/src/icons/DialectIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialectIcon",
    ()=>DialectIcon
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const DialectIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 300 300",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                width: "300",
                height: "300",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/DialectIcon.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip0_101_19)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M70.7844 183.588C66.4532 168.245 67.0249 139.913 67.0249 139.913C67.0249 139.913 82.8765 165.478 110.214 173.476C130.354 179.368 158.074 179.819 175.519 171.932C196.648 165.001 209.759 143.45 203.575 128.043C194.485 105.397 168.029 96.4276 140.449 98.5732C119.312 100.218 101.886 110.347 91.4692 120.316C81.1657 130.177 78.5611 138.106 78.5611 138.106C78.5611 138.106 70.5236 129.537 69.5431 120.316C67.2947 99.1694 86.3069 82.7044 113.395 77.0099C150.1 69.2938 193.21 84.2829 216.74 113.591C233.019 133.867 237.538 161.351 224.087 185.015C203.943 220.454 159.094 227.463 130.05 224.087C101.006 220.711 75.691 200.97 70.7844 183.588Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DialectIcon.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/DialectIcon.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("clipPath", {
                    id: "clip0_101_19",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                        width: "165",
                        height: "150",
                        fill: "white",
                        transform: "translate(67 75)"
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/DialectIcon.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/DialectIcon.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/DialectIcon.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/DialectIcon.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/scaffolds/fun-launch/src/icons/GoFundMemeIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoFundMemeIcon",
    ()=>GoFundMemeIcon
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const GoFundMemeIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 12 12",
        width: "1em",
        height: "1em",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M3.87693 9.1875H0.168532V8.65227H-0.366699V3.34773H0.168532V2.8125H3.35126V3.34773H3.87693V9.1875ZM3.35126 8.65227V5.46954H1.75511V6.53046H2.29034V7.59136H1.22944V4.40864H2.29034V4.94387H3.35126V3.87341H2.81603V3.34773H0.6942V3.87341H0.168532V8.12659H0.6942V8.65227H1.75511V8.12659H2.29034V8.65227H3.35126Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/GoFundMemeIcon.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M7.06024 7.06569H5.4641V9.1875H3.34229V2.8125H7.06024V7.06569ZM6.52501 6.53046V5.46954H4.93843V4.40864H6.52501V3.34773H3.87752V8.65227H4.93843V6.53046H6.52501Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/GoFundMemeIcon.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M12.3647 9.1875H10.2428V7.06569H9.70761V7.59136H9.18195V7.06569H8.64671V9.1875H6.5249V2.8125H8.64671V3.34773H9.18195V3.87341H9.70761V3.34773H10.2428V2.8125H12.3647V9.1875ZM11.8389 8.65227V3.34773H10.7685V3.87341H10.2428V4.40864H9.70761V4.94387H9.18195V4.40864H8.64671V3.87341H8.12103V3.34773H7.06013V8.65227H8.12103V5.46954H8.64671V6.00477H9.18195V6.53046H9.70761V6.00477H10.2428V5.46954H10.7685V8.65227H11.8389Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/GoFundMemeIcon.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/GoFundMemeIcon.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LetsbonkfunIcon",
    ()=>LetsbonkfunIcon
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const LetsbonkfunIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "1em",
        height: "1em",
        viewBox: "0 0 2000 2000",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#FE5E1F",
                opacity: "1.000000",
                stroke: "none",
                d: " M349.000000,2001.000000  C233.008530,2001.000000 117.017067,2001.000000 1.019197,2001.000000  C1.012798,1334.390869 1.012798,667.781799 1.012798,1.086350  C667.560059,1.086350 1334.120117,1.086350 2001.000000,1.086350  C2001.000000,367.699310 2001.000000,734.398743 2000.649414,1101.581787  C1986.971802,1092.645264 1973.829712,1082.949829 1960.285278,1073.853516  C1905.808838,1037.266846 1851.777100,999.976807 1796.520020,964.603882  C1713.197021,911.264526 1628.971069,859.336060 1545.179932,806.726685  C1538.169556,802.325134 1530.705933,798.153381 1524.916260,792.401917  C1512.876953,780.442749 1502.000977,767.321289 1490.242432,755.065613  C1486.937744,751.621460 1486.589722,748.983276 1488.172363,744.707275  C1518.313232,663.272827 1545.503906,580.911194 1564.516113,496.070679  C1572.830444,458.968048 1579.588379,421.591980 1579.077393,383.322327  C1578.875977,368.248383 1577.306274,353.382324 1571.339355,339.316864  C1565.477783,325.499725 1555.555542,316.307800 1540.586548,313.480194  C1535.065552,312.437347 1529.321411,311.961487 1523.707153,312.135834  C1500.613159,312.852844 1478.758179,319.460388 1457.218994,327.114838  C1415.204346,342.045746 1375.195923,361.479492 1335.812256,382.202240  C1250.952515,426.853485 1169.272461,476.863708 1089.166382,529.480286  C1082.490845,533.865051 1076.465332,533.485229 1070.050659,530.017883  C1042.502808,515.127502 1015.159668,499.848114 987.420044,485.325378  C948.619446,465.011688 909.699158,444.910645 870.511047,425.358215  C842.656677,411.460571 814.455811,398.183289 784.738586,388.565735  C776.015991,385.742859 767.165955,383.010010 757.829163,385.557404  C749.642456,387.791046 741.323730,389.705048 733.370850,392.603851  C696.209961,406.148956 665.429932,429.006897 639.485413,458.503296  C616.346252,484.810181 598.577637,514.320129 588.144409,547.973877  C583.236023,563.806580 580.860291,580.022888 581.228455,596.544250  C580.590027,596.661987 580.215759,596.858948 579.959473,596.757629  C578.257874,596.084961 576.556885,595.400940 574.900635,594.624878  C507.749969,563.163330 439.790131,533.636108 369.546906,509.676605  C330.408569,496.326782 290.836151,484.523285 249.510010,479.945892  C233.550537,478.178162 217.599518,477.873810 201.763062,481.219727  C175.506271,486.767181 160.942841,504.311646 161.311493,531.085999  C161.429581,539.662415 162.706451,548.400024 164.765610,556.739807  C171.300064,583.204834 183.833740,607.149780 197.512939,630.471436  C224.564804,676.592285 256.707825,719.128540 290.325623,760.564880  C340.433228,822.326111 393.785126,881.203186 449.306061,938.126709  C451.572357,940.450256 453.448517,942.171509 451.734650,946.178833  C433.745087,988.241089 419.600647,1031.589478 409.256195,1076.154419  C392.163239,1149.792480 385.738770,1224.083252 395.988861,1299.353638  C409.963562,1401.975464 453.341034,1490.306885 525.185120,1564.737793  C527.766296,1567.411865 528.083923,1569.588623 527.233765,1573.034912  C516.664734,1615.877563 506.210266,1658.748901 495.888062,1701.651855  C492.880676,1714.151611 490.385010,1726.774414 487.654785,1739.340820  C484.814697,1732.393188 482.769592,1725.415527 481.282593,1718.321045  C468.939087,1659.430786 451.408447,1602.219971 426.177002,1547.495972  C397.498718,1485.296143 363.625916,1426.402466 316.023346,1376.415405  C297.758240,1357.235352 277.670532,1340.254883 252.965042,1329.759277  C223.877487,1317.402100 196.050705,1318.564941 171.965637,1340.692383  C163.043488,1348.889282 155.126846,1358.956299 149.247498,1369.554932  C124.300598,1414.526123 114.631966,1463.301025 116.333191,1514.417969  C117.836197,1559.578857 127.658401,1603.205444 141.969391,1645.893066  C161.650116,1704.598145 188.927017,1759.784058 220.114258,1813.110596  C257.531067,1877.088867 300.109344,1937.525635 345.938385,1995.717529  C347.184906,1997.300415 347.989349,1999.231323 349.000000,2001.000000 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#EC8C01",
                opacity: "1.000000",
                stroke: "none",
                d: " M1265.000000,2001.000000  C1141.644653,2001.000000 1018.289307,2001.000000 894.391479,2000.614258  C873.783752,1929.315308 851.655396,1859.047485 828.466125,1788.781738  C822.174072,1790.907593 816.588135,1792.794800 810.827087,1794.741211  C811.254700,1796.431763 811.480591,1797.553345 811.821289,1798.638794  C829.222168,1854.083984 846.703247,1909.504028 863.986267,1964.985840  C867.690247,1976.876465 870.680786,1988.989502 874.000000,2001.000000  C738.311340,2001.000000 602.622620,2001.000000 466.517395,2000.591309  C467.361786,1988.257568 468.565674,1976.326294 469.893066,1964.408813  C477.919983,1892.343018 490.207672,1820.967896 504.793762,1749.970703  C517.465637,1688.291016 531.901733,1627.027466 548.574341,1566.301880  C549.344482,1563.496948 548.966309,1561.738037 546.872192,1559.741821  C542.294312,1555.378174 537.923889,1550.790039 533.580688,1546.187988  C503.189209,1513.985229 477.792297,1478.255493 458.078644,1438.574951  C423.015289,1367.998291 408.891327,1292.954224 410.332092,1214.560669  C411.097076,1172.935913 416.237183,1131.846558 425.181702,1091.251099  C440.025024,1023.883301 463.006531,959.384583 495.382935,898.424500  C500.460632,888.863953 499.996368,878.806152 503.075623,869.214661  C502.712921,869.019836 502.350250,868.825012 501.987579,868.630188  C496.007172,872.470764 490.026764,876.311279 484.031921,879.778076  C482.311768,876.879456 480.735291,874.254150 478.871246,871.851990  C475.736420,867.812012 472.418854,863.913818 468.866150,859.884216  C468.346680,859.863098 468.139282,859.913635 467.941589,860.013733  C467.951294,860.063232 468.051788,860.054260 468.059784,859.706665  C467.695221,859.219666 467.322662,859.080261 466.954407,858.992188  C466.958679,859.043396 467.061554,859.042908 467.136292,858.669800  C466.796661,858.176697 466.382233,858.056702 465.969543,857.982483  C465.971222,858.028259 466.062775,858.030334 466.203918,857.633667  C465.891022,857.136658 465.436951,857.036377 464.976715,856.971558  C464.970551,857.007019 465.039825,857.026672 465.349121,856.759766  C457.071503,846.315002 448.541809,836.088196 439.885529,825.969604  C422.779877,805.974060 406.287659,785.396606 388.289795,766.235718  C364.122833,740.506958 338.515076,716.138306 313.989655,690.737915  C281.780182,657.379333 251.766235,622.150696 226.418030,583.190918  C213.772827,563.755371 202.314865,543.664917 195.766891,521.129700  C200.997910,518.614502 205.674866,515.459412 210.825607,514.101746  C230.892334,508.812317 251.204895,510.798004 271.074615,514.778198  C288.303467,518.229431 305.376770,523.033020 322.018433,528.706665  C348.311218,537.670715 374.265167,547.654480 400.212646,557.597717  C422.896576,566.290405 445.558411,575.089111 467.901276,584.612305  C505.707764,600.726501 543.247009,617.467224 580.920410,633.894470  C585.919922,636.074463 591.047180,637.961243 596.418823,640.117859  C600.013123,643.528870 602.950256,647.294800 606.666809,649.983459  C615.009644,656.018921 623.692566,661.591492 632.327820,667.213135  C638.377625,671.151611 644.577332,674.859863 651.992004,679.467590  C649.268494,681.623413 647.047974,682.927002 645.413879,684.754883  C639.159851,691.750916 633.094421,698.915527 626.980652,705.980103  C627.002747,705.942993 627.081482,705.978333 626.762634,705.909668  C626.052429,706.020081 625.661072,706.199280 625.071045,706.221802  C614.097656,719.925903 604.198730,734.342102 595.650085,750.737122  C597.272034,750.361755 597.802551,750.380371 598.151917,750.137817  C616.560181,737.363525 635.040771,724.690552 653.306519,711.715149  C661.119019,706.165405 668.480347,699.980591 676.394592,694.067139  C685.583435,699.196167 694.455017,704.291443 703.226807,709.552856  C704.333252,710.216431 704.915771,711.753418 705.324097,712.802734  C683.334839,713.986511 665.946777,725.733887 647.655212,735.431702  C651.837036,735.662415 655.872986,735.253662 659.918884,735.006714  C672.529724,734.236755 685.294983,734.505798 697.726135,732.591309  C723.360046,728.643494 748.968445,726.193787 774.838806,729.028076  C795.634460,731.306335 815.674316,736.460327 832.536499,749.445435  C850.736938,763.461182 868.283630,778.325867 885.881836,793.094299  C872.705017,799.444214 859.448181,804.939026 846.886292,811.721069  C823.148682,824.536621 801.734192,840.580688 785.440491,862.363708  C778.928650,871.069275 774.140991,881.074768 768.756470,890.594788  C768.302185,891.398010 769.277771,893.009949 769.414551,894.547485  C757.403137,907.196899 750.229431,921.581238 749.620605,939.037598  C746.551697,943.323486 743.507690,947.385376 741.166504,951.818420  C732.982056,967.315796 723.360352,981.830078 711.607422,994.815857  C692.284302,1016.166382 669.226990,1033.041016 645.645508,1049.292480  C636.906006,1055.315308 628.137939,1061.454224 620.229492,1068.491699  C604.507996,1082.481689 592.433044,1099.286255 584.534241,1118.927979  C576.179688,1139.703125 571.493896,1161.116333 573.084229,1183.892944  C569.173950,1187.474365 565.152710,1190.525635 561.828186,1194.206299  C511.860260,1249.528076 520.938538,1336.375488 581.007324,1380.535156  C603.359314,1396.967041 628.778809,1406.281372 655.254639,1414.195557  C655.938049,1414.379761 656.362244,1414.363647 657.114929,1414.231445  C658.332825,1414.329590 659.222168,1414.543701 659.898621,1415.020752  C657.119446,1416.253174 656.963562,1417.847046 658.544189,1419.836670  C659.680359,1421.266846 660.906982,1422.625732 662.028687,1424.066650  C678.028564,1444.620483 696.312256,1463.025879 716.981140,1478.733032  C733.618652,1491.376465 750.783875,1503.634399 768.946289,1513.880981  C789.734558,1525.608643 811.542786,1535.724854 833.527100,1545.087036  C861.580444,1557.033691 891.087097,1564.845947 920.942688,1570.819824  C942.052673,1575.043823 963.398804,1578.359375 984.781555,1580.872070  C1006.000977,1583.365723 1027.375977,1585.267822 1048.722290,1585.781128  C1082.949097,1586.604736 1117.213013,1586.485718 1151.369751,1583.069824  C1164.894287,1581.717285 1178.532837,1581.418945 1192.022339,1579.819702  C1216.700806,1576.893555 1241.414429,1574.000244 1265.916748,1569.914795  C1297.650391,1564.623413 1329.347290,1558.892090 1360.775024,1552.042847  C1396.851685,1544.180298 1432.031738,1533.015381 1466.521240,1519.725586  C1501.719482,1506.162720 1535.266113,1489.506104 1566.031250,1467.532959  C1567.262329,1466.653931 1568.018311,1465.109863 1569.455566,1463.773193  C1579.310059,1463.670654 1588.704468,1463.670654 1598.444092,1463.670654  C1583.191772,1489.413818 1567.584229,1515.756592 1551.976562,1542.099365  C1565.250977,1533.524292 1577.601929,1523.274780 1587.961914,1511.163208  C1598.321289,1499.052246 1607.143555,1485.626465 1616.433472,1473.055908  C1616.609253,1473.699951 1617.112061,1475.253662 1617.455322,1476.841797  C1633.732666,1552.169067 1650.582275,1627.378906 1666.096069,1702.863403  C1681.448486,1777.562256 1694.457520,1852.701904 1701.556885,1928.717896  C1703.800903,1952.746216 1705.489380,1976.847778 1703.000000,2001.000000  C1619.311279,2001.000000 1535.622681,2001.000000 1451.475952,2000.549683  C1450.926270,1998.938110 1450.897827,1997.767700 1450.734009,1996.616699  C1444.596069,1953.466797 1438.481812,1910.313354 1432.271606,1867.173828  C1430.713257,1856.348633 1428.840454,1845.568481 1427.026978,1834.235352  C1420.624146,1835.274048 1414.683838,1836.237793 1408.781494,1837.195435  C1411.595337,1856.993164 1414.295532,1875.991211 1416.666870,1894.909058  C1415.616211,1893.512573 1414.894531,1892.196045 1414.172729,1890.879639  C1414.649048,1891.406006 1415.125366,1891.932495 1415.601685,1892.458984  C1409.213623,1897.995972 1402.805786,1903.510376 1396.441895,1909.074951  C1386.065430,1918.148193 1374.748047,1925.362183 1360.933838,1928.096313  C1345.100098,1931.229980 1330.343628,1926.689697 1315.735474,1921.785156  C1297.563965,1915.684082 1280.922974,1906.343018 1264.568726,1896.463745  C1262.767212,1895.375366 1260.265625,1895.446045 1258.006470,1894.582397  C1254.093140,1878.530518 1250.262085,1862.875488 1246.275513,1846.585327  C1239.986572,1848.171265 1234.131714,1849.647705 1228.195801,1851.144531  C1228.341431,1852.404053 1228.344482,1853.062500 1228.499756,1853.682739  C1236.182861,1884.371826 1243.925537,1915.046143 1251.555664,1945.748291  C1256.127075,1964.143188 1260.524414,1982.581299 1265.000000,2001.000000 M516.250610,782.655518  C522.838318,780.398926 529.944824,779.070374 535.924805,775.726868  C563.454346,760.334900 584.464905,738.153870 600.489685,711.180176  C602.661865,707.523804 604.049438,703.254700 605.074829,699.090698  C608.482300,685.252930 604.649658,673.630127 593.111511,665.119202  C588.594543,661.787292 583.498657,659.123718 578.403809,656.709900  C524.839478,631.333252 471.447876,605.573914 417.530731,580.967163  C387.280823,567.161743 356.295105,554.911011 325.316040,542.790039  C313.473938,538.156738 300.882507,534.974182 288.347626,532.702820  C274.982422,530.281067 266.531097,540.276978 269.857635,553.500366  C271.100250,558.439880 272.917572,563.542786 275.730896,567.724915  C286.778656,584.147888 297.681183,600.736084 309.813049,616.349548  C345.068787,661.722900 385.119202,702.619019 428.207214,740.575989  C442.471710,753.141724 456.894196,765.487549 474.016907,774.155884  C487.039551,780.748718 500.591553,784.775085 516.250610,782.655518 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#AD6D2D",
                opacity: "1.000000",
                stroke: "none",
                d: " M2001.000000,1150.000000  C2001.000000,1196.020874 2001.000000,1242.041870 2000.636963,1288.478760  C1972.089600,1275.309570 1943.703003,1262.125244 1915.776855,1248.028809  C1886.660645,1233.331543 1857.911255,1217.898804 1829.152100,1202.506348  C1812.876587,1193.795044 1796.851562,1184.609741 1780.808105,1175.472290  C1760.574219,1163.948120 1740.433716,1152.259888 1720.258423,1140.632812  C1702.110107,1130.173828 1683.924194,1119.778442 1665.836670,1109.215088  C1646.164185,1097.726196 1626.646851,1085.971680 1606.952881,1074.520386  C1576.471802,1056.796875 1545.835083,1039.341064 1515.382935,1021.568115  C1488.236816,1005.724548 1461.271606,989.570862 1434.188721,973.618530  C1412.990479,961.132446 1391.733032,948.746887 1370.504028,936.313232  C1352.708496,925.890503 1334.929810,915.438782 1317.117432,905.045105  C1304.188965,897.501343 1291.164185,890.121643 1278.279053,882.505127  C1263.684692,873.878296 1249.251465,864.978638 1234.652466,856.359863  C1212.320312,843.175598 1189.888794,830.159485 1167.532104,817.016663  C1150.192627,806.823242 1132.941650,796.479187 1115.578369,786.327026  C1103.516968,779.274902 1091.255615,772.563721 1079.216431,765.474731  C1048.837036,747.586365 1018.562439,729.519958 988.190125,711.619446  C955.236267,692.197388 922.188538,672.934509 889.239929,653.503479  C863.026062,638.044189 836.953125,622.345459 810.720886,606.917725  C778.753967,588.117249 746.658508,569.535583 714.670471,550.770996  C691.289185,537.055298 667.969482,523.234070 644.684937,509.354919  C641.804932,507.638245 640.146667,508.331909 638.642944,510.957153  C636.080139,515.431152 633.265076,519.770020 630.881287,524.335571  C621.778564,541.768616 615.891907,560.285095 614.231140,579.866455  C613.324341,590.557556 613.737366,601.387634 614.015015,612.143127  C614.215637,619.911255 615.173767,627.659790 615.455322,635.335266  C606.857727,628.552490 602.401367,619.547180 600.001099,609.480713  C596.324219,594.059753 597.430237,578.586487 601.436646,563.491394  C617.805115,501.818481 654.866089,455.699097 708.743835,422.557922  C715.051270,418.678040 722.088501,415.984528 729.059692,413.022186  C738.221008,413.690338 747.238159,413.260529 755.973206,414.629761  C775.863770,417.747650 794.443298,425.192047 812.348083,434.184998  C829.907410,443.004425 847.312561,452.137756 864.665283,461.359344  C879.362671,469.169830 893.945374,477.201263 908.478943,485.313843  C943.788818,505.023560 979.052002,524.816833 1014.312256,544.615295  C1046.671387,562.784912 1079.064941,580.894775 1111.328613,599.232849  C1147.494507,619.788696 1183.536987,640.561890 1219.622803,661.258423  C1251.666870,679.636780 1283.741943,697.961731 1315.720093,716.454224  C1345.394409,733.614563 1374.968140,750.948730 1404.568848,768.236328  C1436.753784,787.033203 1468.990234,805.743774 1501.070557,824.717896  C1528.853638,841.150269 1556.499023,857.817200 1584.114746,874.530212  C1612.301758,891.589233 1640.570801,908.524841 1668.452148,926.073547  C1699.850464,945.835754 1730.907593,966.142517 1762.013184,986.366211  C1782.214722,999.500549 1802.378174,1012.702942 1822.308228,1026.243530  C1853.676147,1047.555176 1884.925293,1069.045166 1916.048706,1090.712524  C1938.422241,1106.288452 1960.473999,1122.326050 1982.746948,1138.047729  C1988.684937,1142.239258 1994.907959,1146.026855 2001.000000,1150.000000 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#FE5E1F",
                opacity: "1.000000",
                stroke: "none",
                d: " M2001.000000,1399.000000  C2001.000000,1599.569214 2001.000000,1800.138306 2001.000000,2001.000000  C1908.309448,2001.000000 1815.618652,2001.000000 1722.453125,2000.568848  C1721.798706,1980.504395 1722.586914,1960.805298 1721.256592,1941.250244  C1717.363403,1884.016479 1708.236816,1827.431396 1698.210571,1771.006470  C1680.549316,1671.613159 1659.346191,1572.954102 1636.254517,1474.692749  C1634.627686,1467.770020 1633.074585,1460.829956 1631.469360,1453.820435  C1632.750854,1453.187500 1633.608032,1452.698120 1634.513550,1452.326294  C1661.773560,1441.125854 1682.829346,1422.531982 1698.724609,1397.974609  C1717.779541,1368.535645 1726.960083,1335.657227 1731.565430,1301.294189  C1732.858521,1291.645020 1733.572998,1281.918457 1734.592041,1271.840576  C1735.881470,1272.382935 1736.797363,1272.685669 1737.636230,1273.132935  C1787.752808,1299.850586 1837.853149,1326.598755 1887.979248,1353.298218  C1903.411499,1361.518066 1918.347534,1371.046631 1934.521484,1377.404907  C1956.165894,1385.913330 1978.794189,1391.919434 2001.000000,1399.000000 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#965F2D",
                opacity: "1.000000",
                stroke: "none",
                d: " M615.794006,635.417053  C615.173767,627.659790 614.215637,619.911255 614.015015,612.143127  C613.737366,601.387634 613.324341,590.557556 614.231140,579.866455  C615.891907,560.285095 621.778564,541.768616 630.881287,524.335571  C633.265076,519.770020 636.080139,515.431152 638.642944,510.957153  C640.146667,508.331909 641.804932,507.638245 644.684937,509.354919  C667.969482,523.234070 691.289185,537.055298 714.670471,550.770996  C746.658508,569.535583 778.753967,588.117249 810.720886,606.917725  C836.953125,622.345459 863.026062,638.044189 889.239929,653.503479  C922.188538,672.934509 955.236267,692.197388 988.190125,711.619446  C1018.562439,729.519958 1048.837036,747.586365 1079.216431,765.474731  C1091.255615,772.563721 1103.516968,779.274902 1115.578369,786.327026  C1132.941650,796.479187 1150.192627,806.823242 1167.532104,817.016663  C1189.888794,830.159485 1212.320312,843.175598 1234.652466,856.359863  C1249.251465,864.978638 1263.684692,873.878296 1278.279053,882.505127  C1291.164185,890.121643 1304.188965,897.501343 1317.117432,905.045105  C1334.929810,915.438782 1352.708496,925.890503 1370.504028,936.313232  C1391.733032,948.746887 1412.990479,961.132446 1434.188721,973.618530  C1461.271606,989.570862 1488.236816,1005.724548 1515.382935,1021.568115  C1545.835083,1039.341064 1576.471802,1056.796875 1606.952881,1074.520386  C1626.646851,1085.971680 1646.164185,1097.726196 1665.836670,1109.215088  C1683.924194,1119.778442 1702.110107,1130.173828 1720.258423,1140.632812  C1740.433716,1152.259888 1760.574219,1163.948120 1780.808105,1175.472290  C1796.851562,1184.609741 1812.876587,1193.795044 1829.152100,1202.506348  C1857.911255,1217.898804 1886.660645,1233.331543 1915.776855,1248.028809  C1943.703003,1262.125244 1972.089600,1275.309570 2000.636963,1288.947266  C2001.000000,1319.354248 2001.000000,1349.708496 2000.616577,1380.564819  C1993.396851,1378.942017 1986.490234,1377.018311 1979.738525,1374.652100  C1963.742554,1369.046631 1946.987549,1364.858398 1932.021606,1357.200684  C1883.533325,1332.390503 1835.715698,1306.269897 1787.633057,1280.666870  C1747.931519,1259.526611 1708.175903,1238.487671 1668.524048,1217.254761  C1608.897461,1185.326050 1549.340454,1153.267212 1489.754272,1121.262817  C1443.228516,1096.273193 1396.664795,1071.353760 1350.187866,1046.273682  C1295.500488,1016.762878 1240.773438,987.321716 1186.326538,957.372314  C1173.029663,950.058167 1158.406738,944.937683 1147.070923,934.043396  C1141.987671,929.158264 1135.525269,925.716980 1129.732666,921.559326  C1117.978638,913.122681 1105.493652,905.508850 1094.684204,895.994446  C1075.192139,878.837463 1056.843506,860.388550 1037.760986,842.756470  C1024.144043,830.174438 1009.571533,818.806335 992.583862,810.948547  C974.013550,802.358704 954.030457,799.361023 934.025024,797.187195  C924.820740,796.187012 917.184875,793.385132 910.109924,787.613403  C889.459351,770.767029 868.648560,754.115601 847.802429,737.510986  C835.711243,727.880005 822.385071,720.553955 807.061157,716.787476  C806.680969,716.443115 806.416504,716.349426 805.807251,716.189575  C805.032471,716.005859 804.568848,715.983521 803.876770,715.794312  C803.118286,715.468445 802.588196,715.309509 801.681885,715.014648  C796.518372,713.964661 791.731079,713.050598 786.744751,711.959473  C786.040161,711.784424 785.534668,711.786438 784.631042,711.617432  C782.798279,711.355164 781.363586,711.264038 779.732483,710.999207  C779.037170,710.842590 778.538330,710.859741 777.625977,710.684631  C774.780640,710.388977 772.348816,710.285522 769.618713,709.986816  C767.892456,709.746826 766.464478,709.701965 764.593140,709.493286  C754.714966,709.406433 745.280090,709.483337 735.659668,709.262634  C734.968567,708.538391 734.513733,708.024536 733.950439,707.697632  C712.837097,695.444763 691.522339,683.525085 670.649719,670.875610  C652.494385,659.872864 634.837280,648.047974 616.856323,636.282166  C616.477112,635.658752 616.201538,635.339539 615.966919,635.144165  C616.007874,635.267944 615.794006,635.417053 615.794006,635.417053 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#050301",
                opacity: "1.000000",
                stroke: "none",
                d: " M616.959961,636.586426  C634.837280,648.047974 652.494385,659.872864 670.649719,670.875610  C691.522339,683.525085 712.837097,695.444763 733.950439,707.697632  C734.513733,708.024536 734.968567,708.538391 735.514038,709.581177  C725.616394,711.093506 715.678711,711.989624 705.741028,712.885742  C704.915771,711.753418 704.333252,710.216431 703.226807,709.552856  C694.455017,704.291443 685.583435,699.196167 676.068481,693.937927  C663.680969,683.608093 661.468201,683.427795 648.830627,691.702209  C646.757202,693.059814 644.727112,694.483704 642.651123,695.837219  C637.428101,699.242554 632.190369,702.625305 626.958557,706.017090  C633.094421,698.915527 639.159851,691.750916 645.413879,684.754883  C647.047974,682.927002 649.268494,681.623413 651.992004,679.467590  C644.577332,674.859863 638.377625,671.151611 632.327820,667.213135  C623.692566,661.591492 615.009644,656.018921 606.666809,649.983459  C602.950256,647.294800 600.013123,643.528870 596.290405,639.795654  C594.176941,636.663452 591.830933,634.190735 590.937683,631.273315  C588.197449,622.323914 581.640076,618.228943 573.578979,614.484680  C498.673309,579.692261 423.161194,546.417236 344.379608,521.183533  C309.142059,509.896973 273.538727,500.046387 236.363617,497.628876  C223.525375,496.794037 210.706589,497.089539 198.425980,501.689758  C191.247681,504.378693 191.210678,504.488403 192.781464,511.748993  C193.479980,514.977722 194.536484,518.129028 195.430496,521.315491  C202.314865,543.664917 213.772827,563.755371 226.418030,583.190918  C251.766235,622.150696 281.780182,657.379333 313.989655,690.737915  C338.515076,716.138306 364.122833,740.506958 388.289795,766.235718  C406.287659,785.396606 422.779877,805.974060 439.885529,825.969604  C448.541809,836.088196 457.071503,846.315002 465.002594,856.762207  C451.847839,846.268311 439.322174,835.535950 426.856628,824.734131  C410.361511,810.440552 393.382660,796.651123 377.579254,781.627258  C357.661163,762.691895 338.263672,743.156799 319.469360,723.104614  C294.874908,696.864014 270.298035,670.530518 247.165451,643.016296  C220.731522,611.575562 197.506943,577.783508 181.904114,539.360596  C181.727692,538.926147 181.150314,538.654480 180.760117,538.306824  C181.589279,546.149353 183.054977,553.662598 185.414474,560.883789  C195.969803,593.188110 213.361252,622.008606 231.852783,650.185547  C261.247406,694.976440 293.967987,737.324463 329.053955,777.725891  C365.418488,819.599670 402.897186,860.510010 440.157166,901.598145  C446.916901,909.052551 454.969971,915.334106 462.016449,921.782410  C468.971649,908.638977 476.509003,894.395386 484.046356,880.151794  C490.026764,876.311279 496.007172,872.470764 501.987579,868.630188  C502.350250,868.825012 502.712921,869.019836 503.075623,869.214661  C499.996368,878.806152 500.460632,888.863953 495.382935,898.424500  C463.006531,959.384583 440.025024,1023.883301 425.181702,1091.251099  C416.237183,1131.846558 411.097076,1172.935913 410.332092,1214.560669  C408.891327,1292.954224 423.015289,1367.998291 458.078644,1438.574951  C477.792297,1478.255493 503.189209,1513.985229 533.580688,1546.187988  C537.923889,1550.790039 542.294312,1555.378174 546.872192,1559.741821  C548.966309,1561.738037 549.344482,1563.496948 548.574341,1566.301880  C531.901733,1627.027466 517.465637,1688.291016 504.793762,1749.970703  C490.207672,1820.967896 477.919983,1892.343018 469.893066,1964.408813  C468.565674,1976.326294 467.361786,1988.257568 466.050415,2000.591309  C459.978851,2001.000000 453.957703,2001.000000 447.602783,2000.578613  C447.774811,1994.855957 448.257965,1989.552612 448.789978,1984.254150  C454.761749,1924.780518 463.219452,1865.640869 474.755890,1807.014160  C478.137512,1789.829102 477.355591,1774.113892 472.509277,1757.322388  C463.431488,1725.869629 456.607605,1693.772583 448.399628,1662.059204  C445.327271,1650.188477 441.009308,1638.640137 437.239258,1626.564941  C436.835724,1625.586060 436.452240,1624.987305 436.154297,1624.448975  C436.239868,1624.509521 436.365997,1624.342041 436.357178,1623.957520  C435.993011,1622.956543 435.637695,1622.340210 435.353912,1621.814697  C435.425476,1621.905518 435.596039,1621.749268 435.577576,1621.357666  C419.537323,1574.927856 399.439087,1530.744995 375.014740,1488.557739  C352.663879,1449.951660 327.617432,1413.319702 295.408752,1382.087402  C279.773499,1366.926147 262.860809,1353.484985 242.298157,1345.473022  C219.289597,1336.508057 198.356201,1339.496460 180.808060,1357.597290  C165.151901,1373.746338 156.156998,1393.722168 149.726883,1414.945435  C149.831009,1414.953125 149.825867,1414.744263 149.547485,1414.924438  C149.154877,1415.745239 149.040680,1416.385742 148.671326,1417.298340  C137.927475,1449.214844 133.579651,1481.707397 134.886169,1514.994629  C136.673035,1560.520508 147.183624,1604.259644 162.080460,1647.067993  C182.530273,1705.833862 210.559601,1760.994263 242.403976,1814.283936  C280.662354,1878.307129 324.093109,1938.715942 370.691010,1996.892090  C371.660034,1998.101807 372.239075,1999.623657 373.000000,2001.000000  C365.312408,2001.000000 357.624847,2001.000000 349.468628,2001.000000  C347.989349,1999.231323 347.184906,1997.300415 345.938385,1995.717529  C300.109344,1937.525635 257.531067,1877.088867 220.114258,1813.110596  C188.927017,1759.784058 161.650116,1704.598145 141.969391,1645.893066  C127.658401,1603.205444 117.836197,1559.578857 116.333191,1514.417969  C114.631966,1463.301025 124.300598,1414.526123 149.247498,1369.554932  C155.126846,1358.956299 163.043488,1348.889282 171.965637,1340.692383  C196.050705,1318.564941 223.877487,1317.402100 252.965042,1329.759277  C277.670532,1340.254883 297.758240,1357.235352 316.023346,1376.415405  C363.625916,1426.402466 397.498718,1485.296143 426.177002,1547.495972  C451.408447,1602.219971 468.939087,1659.430786 481.282593,1718.321045  C482.769592,1725.415527 484.814697,1732.393188 487.654785,1739.340820  C490.385010,1726.774414 492.880676,1714.151611 495.888062,1701.651855  C506.210266,1658.748901 516.664734,1615.877563 527.233765,1573.034912  C528.083923,1569.588623 527.766296,1567.411865 525.185120,1564.737793  C453.341034,1490.306885 409.963562,1401.975464 395.988861,1299.353638  C385.738770,1224.083252 392.163239,1149.792480 409.256195,1076.154419  C419.600647,1031.589478 433.745087,988.241089 451.734650,946.178833  C453.448517,942.171509 451.572357,940.450256 449.306061,938.126709  C393.785126,881.203186 340.433228,822.326111 290.325623,760.564880  C256.707825,719.128540 224.564804,676.592285 197.512939,630.471436  C183.833740,607.149780 171.300064,583.204834 164.765610,556.739807  C162.706451,548.400024 161.429581,539.662415 161.311493,531.085999  C160.942841,504.311646 175.506271,486.767181 201.763062,481.219727  C217.599518,477.873810 233.550537,478.178162 249.510010,479.945892  C290.836151,484.523285 330.408569,496.326782 369.546906,509.676605  C439.790131,533.636108 507.749969,563.163330 574.900635,594.624878  C576.556885,595.400940 578.257874,596.084961 579.959473,596.757629  C580.215759,596.858948 580.590027,596.661987 581.228455,596.544250  C580.860291,580.022888 583.236023,563.806580 588.144409,547.973877  C598.577637,514.320129 616.346252,484.810181 639.485413,458.503296  C665.429932,429.006897 696.209961,406.148956 733.370850,392.603851  C741.323730,389.705048 749.642456,387.791046 757.829163,385.557404  C767.165955,383.010010 776.015991,385.742859 784.738586,388.565735  C814.455811,398.183289 842.656677,411.460571 870.511047,425.358215  C909.699158,444.910645 948.619446,465.011688 987.420044,485.325378  C1015.159668,499.848114 1042.502808,515.127502 1070.050659,530.017883  C1076.465332,533.485229 1082.490845,533.865051 1089.166382,529.480286  C1169.272461,476.863708 1250.952515,426.853485 1335.812256,382.202240  C1375.195923,361.479492 1415.204346,342.045746 1457.218994,327.114838  C1478.758179,319.460388 1500.613159,312.852844 1523.707153,312.135834  C1529.321411,311.961487 1535.065552,312.437347 1540.586548,313.480194  C1555.555542,316.307800 1565.477783,325.499725 1571.339355,339.316864  C1577.306274,353.382324 1578.875977,368.248383 1579.077393,383.322327  C1579.588379,421.591980 1572.830444,458.968048 1564.516113,496.070679  C1545.503906,580.911194 1518.313232,663.272827 1488.172363,744.707275  C1486.589722,748.983276 1486.937744,751.621460 1490.242432,755.065613  C1502.000977,767.321289 1512.876953,780.442749 1524.916260,792.401917  C1530.705933,798.153381 1538.169556,802.325134 1545.179932,806.726685  C1628.971069,859.336060 1713.197021,911.264526 1796.520020,964.603882  C1851.777100,999.976807 1905.808838,1037.266846 1960.285278,1073.853516  C1973.829712,1082.949829 1986.971802,1092.645264 2000.649414,1102.032715  C2001.000000,1108.354370 2001.000000,1114.708862 2000.707031,1121.801025  C1992.536743,1116.966431 1984.643555,1111.416260 1976.784180,1105.818359  C1902.140381,1052.652344 1825.727783,1002.107788 1748.341675,953.066528  C1677.437744,908.133118 1606.183716,863.735352 1534.555054,819.966980  C1466.905396,778.630005 1398.850098,737.937317 1330.453003,697.848572  C1260.909058,657.087708 1191.012451,616.908264 1120.758423,577.383911  C1029.745605,526.180847 938.354492,475.611725 843.753784,431.212708  C821.942139,420.975830 799.248596,412.604126 776.863586,403.616364  C773.230713,402.157776 768.719788,400.546021 765.248474,401.446930  C752.946350,404.639709 740.918945,408.890930 728.787415,412.741089  C722.088501,415.984528 715.051270,418.678040 708.743835,422.557922  C654.866089,455.699097 617.805115,501.818481 601.436646,563.491394  C597.430237,578.586487 596.324219,594.059753 600.001099,609.480713  C602.401367,619.547180 606.857727,628.552490 615.455322,635.335266  C615.794006,635.417053 616.007874,635.267944 615.944946,635.496338  C616.241333,636.011963 616.600647,636.299194 616.959961,636.586426 M1465.968140,758.255615  C1466.110718,758.263977 1466.253296,758.272339 1466.395874,758.280701  C1466.272827,758.173828 1466.149780,758.066956 1465.783569,757.337524  C1458.282837,750.542786 1450.782104,743.748047 1442.801392,736.518433  C1441.762573,739.480957 1441.123169,741.304260 1440.378906,743.426758  C1447.174072,747.566284 1453.753052,751.656189 1460.427246,755.584290  C1462.172852,756.611572 1464.214478,757.136047 1465.968140,758.255615 M1356.796265,693.890076  C1379.046265,707.043396 1401.296265,720.196655 1423.567139,733.362244  C1429.428101,721.810669 1428.944580,708.054443 1422.316040,697.199951  C1418.029541,690.335876 1411.896606,685.682129 1404.530640,682.612427  C1382.911255,673.602600 1361.414917,676.444641 1338.835938,683.383423  C1345.246216,687.045776 1350.783813,690.209656 1356.796265,693.890076 M1416.759766,666.705017  C1417.791260,667.678772 1418.696533,668.852112 1419.873535,669.596069  C1435.734253,679.621338 1444.788696,693.739807 1446.058350,712.642822  C1446.140991,713.873230 1446.429321,715.496277 1447.252197,716.207336  C1455.023926,722.922363 1462.932495,729.478943 1471.317505,736.513977  C1472.302490,733.954224 1473.179443,731.851562 1473.927612,729.703979  C1483.132568,703.282898 1492.706177,676.982544 1501.433960,650.404541  C1524.416260,580.419189 1545.483032,509.910217 1556.489258,436.831757  C1559.569458,416.378998 1561.463867,395.802032 1559.997437,375.111206  C1559.427246,367.064575 1557.650879,359.103394 1556.423828,351.103302  C1555.817261,351.172272 1555.210693,351.241211 1554.604126,351.310181  C1553.876587,357.844696 1553.402954,364.419281 1552.378906,370.906982  C1547.283691,403.187531 1537.074707,434.010956 1524.798462,464.140900  C1502.381348,519.160461 1476.039185,572.198059 1443.859741,622.253540  C1434.587280,636.676941 1425.964844,651.518311 1416.972168,665.354492  C1418.683105,660.929016 1420.328247,656.476807 1422.115112,652.082275  C1441.809204,603.652649 1461.015381,555.045898 1484.690674,508.305969  C1502.617554,472.914459 1517.285645,436.069611 1527.489746,397.611694  C1532.238159,379.715485 1536.128418,361.651367 1535.863037,342.135101  C1535.780396,340.310181 1535.550781,338.477661 1535.644287,336.661804  C1535.878540,332.105988 1533.663452,330.412048 1529.311890,330.709930  C1524.502808,331.039093 1519.506592,330.448608 1514.896362,331.542328  C1497.928101,335.567993 1480.716919,339.048370 1464.267212,344.688629  C1418.323853,360.441620 1375.103271,382.391998 1332.364502,405.218658  C1256.687256,445.637482 1183.573364,490.377136 1111.603394,537.019104  C1110.695923,537.607300 1109.935791,538.422913 1108.657715,539.516907  C1114.052246,541.402039 1118.876709,543.087952 1124.153687,545.252014  C1128.713013,547.796204 1133.272461,550.340393 1137.022583,552.771240  C1128.448975,552.305908 1119.875244,551.840576 1111.301636,551.375244  C1111.237305,551.916870 1111.172974,552.458496 1111.108765,553.000183  C1119.304565,557.381348 1127.500488,561.762573 1136.097900,566.722961  C1173.278442,587.894165 1210.459106,609.065552 1247.639648,630.236633  C1262.097168,638.468872 1276.555054,646.700684 1291.403320,655.489014  C1299.655518,660.359924 1307.857178,665.320740 1316.211182,670.010254  C1317.551147,670.762512 1319.741821,670.808777 1321.245239,670.304565  C1325.296997,668.945740 1329.189819,667.113220 1333.925049,665.360413  C1334.403320,665.219177 1334.883057,665.082703 1335.359619,664.935974  C1361.479492,656.895386 1387.510620,654.814575 1413.396606,665.952637  C1414.460693,666.410461 1415.879639,666.043091 1416.759766,666.705017 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 360,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#EC8C01",
                opacity: "1.000000",
                stroke: "none",
                d: " M373.468658,2001.000000  C372.239075,1999.623657 371.660034,1998.101807 370.691010,1996.892090  C324.093109,1938.715942 280.662354,1878.307129 242.403976,1814.283936  C210.559601,1760.994263 182.530273,1705.833862 162.080460,1647.067993  C147.183624,1604.259644 136.673035,1560.520508 134.886169,1514.994629  C133.579651,1481.707397 137.927475,1449.214844 148.902130,1417.077271  C149.534027,1415.970947 149.679947,1415.357544 149.825867,1414.744263  C149.825867,1414.744263 149.831009,1414.953125 150.046310,1414.781616  C151.535797,1412.674194 152.889481,1410.785522 154.071838,1408.795044  C164.823105,1390.694336 177.751587,1374.497070 196.132111,1363.654907  C208.791367,1356.187622 222.180527,1350.491211 237.218399,1356.975708  C241.315384,1358.742188 245.310806,1360.923218 248.993103,1363.440186  C262.496002,1372.669922 274.713867,1383.425171 285.353668,1395.853760  C299.069336,1411.875244 313.500793,1427.401611 325.923218,1444.385254  C345.061432,1470.550781 363.307465,1497.415771 380.910431,1524.644409  C399.615540,1553.577881 416.535797,1583.607056 431.057037,1614.922119  C432.193329,1617.372559 434.065765,1619.481567 435.596069,1621.749268  C435.596039,1621.749268 435.425476,1621.905518 435.328613,1622.187500  C435.609833,1623.093750 435.987915,1623.717896 436.365967,1624.342041  C436.365997,1624.342041 436.239868,1624.509521 436.194519,1624.818359  C436.519226,1625.733032 436.889252,1626.338989 437.259277,1626.944824  C441.009308,1638.640137 445.327271,1650.188477 448.399628,1662.059204  C456.607605,1693.772583 463.431488,1725.869629 472.509277,1757.322388  C477.355591,1774.113892 478.137512,1789.829102 474.755890,1807.014160  C463.219452,1865.640869 454.761749,1924.780518 448.789978,1984.254150  C448.257965,1989.552612 447.774811,1994.855957 447.134491,2000.578613  C422.645782,2001.000000 398.291534,2001.000000 373.468658,2001.000000 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 560,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#050302",
                opacity: "1.000000",
                stroke: "none",
                d: " M705.324097,712.802734  C715.678711,711.989624 725.616394,711.093506 735.699646,709.878784  C745.280090,709.483337 754.714966,709.406433 764.736938,709.753906  C766.854980,710.179565 768.385986,710.180847 769.916931,710.182129  C772.348816,710.285522 774.780640,710.388977 777.721924,710.861877  C778.797241,711.211853 779.363098,711.192383 779.928955,711.172913  C781.363586,711.264038 782.798279,711.355164 784.721924,711.807617  C785.788574,712.158142 786.366211,712.147339 786.943848,712.136536  C791.731079,713.050598 796.518372,713.964661 801.886292,715.211487  C803.013062,715.683289 803.559082,715.822266 804.105164,715.961243  C804.568848,715.983521 805.032471,716.005859 805.961060,716.331116  C806.663025,716.799194 806.924561,716.902100 807.210632,716.942688  C822.385071,720.553955 835.711243,727.880005 847.802429,737.510986  C868.648560,754.115601 889.459351,770.767029 910.109924,787.613403  C917.184875,793.385132 924.820740,796.187012 934.025024,797.187195  C954.030457,799.361023 974.013550,802.358704 992.583862,810.948547  C1009.571533,818.806335 1024.144043,830.174438 1037.760986,842.756470  C1056.843506,860.388550 1075.192139,878.837463 1094.684204,895.994446  C1105.493652,905.508850 1117.978638,913.122681 1129.732666,921.559326  C1135.525269,925.716980 1141.987671,929.158264 1147.070923,934.043396  C1158.406738,944.937683 1173.029663,950.058167 1186.326538,957.372314  C1240.773438,987.321716 1295.500488,1016.762878 1350.187866,1046.273682  C1396.664795,1071.353760 1443.228516,1096.273193 1489.754272,1121.262817  C1549.340454,1153.267212 1608.897461,1185.326050 1668.524048,1217.254761  C1708.175903,1238.487671 1747.931519,1259.526611 1787.633057,1280.666870  C1835.715698,1306.269897 1883.533325,1332.390503 1932.021606,1357.200684  C1946.987549,1364.858398 1963.742554,1369.046631 1979.738525,1374.652100  C1986.490234,1377.018311 1993.396851,1378.942017 2000.616577,1381.033447  C2001.000000,1386.687988 2001.000000,1392.376099 2001.000000,1398.531982  C1978.794189,1391.919434 1956.165894,1385.913330 1934.521484,1377.404907  C1918.347534,1371.046631 1903.411499,1361.518066 1887.979248,1353.298218  C1837.853149,1326.598755 1787.752808,1299.850586 1737.636230,1273.132935  C1736.797363,1272.685669 1735.881470,1272.382935 1734.592041,1271.840576  C1733.572998,1281.918457 1732.858521,1291.645020 1731.565430,1301.294189  C1726.960083,1335.657227 1717.779541,1368.535645 1698.724609,1397.974609  C1682.829346,1422.531982 1661.773560,1441.125854 1634.513550,1452.326294  C1633.608032,1452.698120 1632.750854,1453.187500 1631.469360,1453.820435  C1633.074585,1460.829956 1634.627686,1467.770020 1636.254517,1474.692749  C1659.346191,1572.954102 1680.549316,1671.613159 1698.210571,1771.006470  C1708.236816,1827.431396 1717.363403,1884.016479 1721.256592,1941.250244  C1722.586914,1960.805298 1721.798706,1980.504395 1721.989258,2000.568848  C1715.978882,2001.000000 1709.957642,2001.000000 1703.468262,2001.000000  C1705.489380,1976.847778 1703.800903,1952.746216 1701.556885,1928.717896  C1694.457520,1852.701904 1681.448486,1777.562256 1666.096069,1702.863403  C1650.582275,1627.378906 1633.732666,1552.169067 1617.455322,1476.841797  C1617.112061,1475.253662 1616.609253,1473.699951 1616.433472,1473.055908  C1607.143555,1485.626465 1598.321289,1499.052246 1587.961914,1511.163208  C1577.601929,1523.274780 1565.250977,1533.524292 1551.976562,1542.099365  C1567.584229,1515.756592 1583.191772,1489.413818 1598.444092,1463.670654  C1588.704468,1463.670654 1579.310059,1463.670654 1569.009399,1463.643799  C1555.029663,1462.302124 1541.742798,1462.054199 1528.918823,1459.490845  C1468.840454,1447.481689 1408.877808,1434.890747 1348.896118,1422.401489  C1286.093628,1409.324829 1223.200195,1397.120728 1158.676025,1396.621216  C1114.686035,1396.280640 1070.773071,1396.773804 1027.015259,1402.173096  C978.760498,1408.127319 930.497620,1414.088013 882.145447,1419.159912  C835.740479,1424.027466 789.113953,1426.368896 742.497192,1423.496460  C714.960388,1421.799683 687.568542,1417.749512 660.111511,1414.757812  C659.222168,1414.543701 658.332825,1414.329590 656.872070,1413.997559  C655.865540,1413.918213 655.430481,1413.956787 654.995361,1413.995239  C628.778809,1406.281372 603.359314,1396.967041 581.007324,1380.535156  C520.938538,1336.375488 511.860260,1249.528076 561.828186,1194.206299  C565.152710,1190.525635 569.173950,1187.474365 573.416626,1183.762207  C589.887024,1171.900757 608.051819,1165.984741 627.138367,1162.963257  C701.817383,1151.141235 777.022095,1145.381104 852.596375,1146.143433  C889.023376,1146.510742 924.682983,1142.485962 960.015808,1134.281128  C1016.905640,1121.070312 1071.835083,1101.514893 1126.963623,1082.608154  C1169.655884,1067.966553 1212.297852,1053.138306 1256.321167,1042.859985  C1268.562378,1040.001953 1280.982178,1037.908447 1294.053711,1035.318848  C1292.257202,1034.215332 1290.956909,1033.330811 1289.581299,1032.584961  C1275.671997,1025.043457 1261.551392,1017.867798 1247.869263,1009.935608  C1205.302734,985.257690 1160.072754,965.442261 1119.335205,937.300232  C1098.236694,922.725159 1078.542603,906.919922 1059.959961,889.420166  C1042.874634,873.330383 1025.615112,857.399170 1007.882690,842.032349  C997.511230,833.044556 985.430969,826.339050 972.026672,822.783936  C951.028442,817.214600 929.600159,813.871582 907.894897,813.278625  C895.885742,812.950562 886.029053,806.463135 874.753296,803.356140  C880.182678,801.283081 885.612061,799.210022 891.941101,796.793457  C889.344727,795.022705 887.730103,793.921509 886.115479,792.820251  C868.283630,778.325867 850.736938,763.461182 832.536499,749.445435  C815.674316,736.460327 795.634460,731.306335 774.838806,729.028076  C748.968445,726.193787 723.360046,728.643494 697.726135,732.591309  C685.294983,734.505798 672.529724,734.236755 659.918884,735.006714  C655.872986,735.253662 651.837036,735.662415 647.655212,735.431702  C665.946777,725.733887 683.334839,713.986511 705.324097,712.802734 M553.346436,1245.561890  C552.342590,1249.772461 551.096558,1253.942017 550.372559,1258.200073  C543.449951,1298.917236 554.806946,1333.411377 586.314331,1360.480835  C609.691589,1380.565430 637.717773,1391.157959 667.540100,1396.753784  C712.226074,1405.138672 757.429016,1406.770386 802.811340,1405.485474  C854.973816,1404.008667 906.845215,1399.095093 958.495728,1392.089111  C1024.093262,1383.191406 1089.708374,1375.919434 1156.114502,1377.859741  C1196.494629,1379.039307 1236.695312,1381.663330 1276.320435,1389.457275  C1348.693970,1403.692627 1420.905884,1418.748779 1493.198486,1433.397217  C1517.158813,1438.252441 1540.957520,1443.879639 1565.570312,1445.022949  C1624.529297,1447.761963 1669.896118,1420.446411 1694.179688,1366.763550  C1708.610229,1334.862183 1714.179321,1301.034790 1715.525391,1266.301758  C1715.671875,1262.519531 1714.531372,1260.690430 1711.310913,1258.988525  C1683.491333,1244.288818 1655.772583,1229.398438 1627.953369,1214.698120  C1626.671631,1214.020752 1624.399292,1214.023682 1623.134766,1214.712646  C1617.192993,1217.950073 1610.873413,1218.744263 1604.297852,1218.356567  C1589.234741,1217.468628 1575.959961,1211.381714 1563.297974,1203.817505  C1537.138428,1188.190063 1515.408569,1167.364258 1494.919067,1145.098877  C1493.041992,1143.059204 1490.823120,1141.135742 1488.402100,1139.824585  C1452.973022,1120.636230 1417.496338,1101.535522 1381.998169,1082.474854  C1371.040039,1076.590942 1359.983398,1070.890259 1348.292114,1064.902588  C1340.357788,1060.479004 1332.446777,1056.012085 1324.456787,1051.691650  C1323.546753,1051.199585 1322.163452,1051.336548 1321.048584,1051.505249  C1301.470825,1054.468872 1281.692383,1056.517578 1262.370850,1060.682251  C1219.191040,1069.989868 1177.623047,1084.893921 1135.907349,1099.161499  C1085.387695,1116.440063 1035.073853,1134.368408 983.308411,1147.705322  C949.874207,1156.319702 916.120667,1163.348755 881.457397,1164.246948  C857.994324,1164.854736 834.499023,1164.265015 811.038879,1164.936401  C751.077087,1166.651978 691.371460,1171.555664 632.091064,1180.947021  C613.324341,1183.920044 595.300598,1189.105347 580.598938,1202.043091  C567.399353,1213.658936 558.969238,1228.326904 553.346436,1245.561890 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 594,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#D78944",
                opacity: "1.000000",
                stroke: "none",
                d: " M729.059692,413.022217  C740.918945,408.890930 752.946350,404.639709 765.248474,401.446930  C768.719788,400.546021 773.230713,402.157776 776.863586,403.616364  C799.248596,412.604126 821.942139,420.975830 843.753784,431.212708  C938.354492,475.611725 1029.745605,526.180847 1120.758423,577.383911  C1191.012451,616.908264 1260.909058,657.087708 1330.453003,697.848572  C1398.850098,737.937317 1466.905396,778.630005 1534.555054,819.966980  C1606.183716,863.735352 1677.437744,908.133118 1748.341675,953.066528  C1825.727783,1002.107788 1902.140381,1052.652344 1976.784180,1105.818359  C1984.643555,1111.416260 1992.536743,1116.966431 2000.707031,1122.269531  C2001.000000,1131.020874 2001.000000,1140.041870 2001.000000,1149.531372  C1994.907959,1146.026855 1988.684937,1142.239258 1982.746948,1138.047729  C1960.473999,1122.326050 1938.422241,1106.288452 1916.048706,1090.712524  C1884.925293,1069.045166 1853.676147,1047.555176 1822.308228,1026.243530  C1802.378174,1012.702942 1782.214722,999.500549 1762.013184,986.366211  C1730.907593,966.142517 1699.850464,945.835754 1668.452148,926.073547  C1640.570801,908.524841 1612.301758,891.589233 1584.114746,874.530212  C1556.499023,857.817200 1528.853638,841.150269 1501.070557,824.717896  C1468.990234,805.743774 1436.753784,787.033203 1404.568848,768.236328  C1374.968140,750.948730 1345.394409,733.614563 1315.720093,716.454224  C1283.741943,697.961731 1251.666870,679.636780 1219.622803,661.258423  C1183.536987,640.561890 1147.494507,619.788696 1111.328613,599.232849  C1079.064941,580.894775 1046.671387,562.784912 1014.312256,544.615295  C979.052002,524.816833 943.788818,505.023560 908.478943,485.313843  C893.945374,477.201263 879.362671,469.169830 864.665283,461.359344  C847.312561,452.137756 829.907410,443.004425 812.348083,434.184998  C794.443298,425.192047 775.863770,417.747650 755.973206,414.629761  C747.238159,413.260529 738.221008,413.690338 729.059692,413.022217 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 716,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#DE7603",
                opacity: "1.000000",
                stroke: "none",
                d: " M1258.088623,1894.979248  C1260.265625,1895.446045 1262.767212,1895.375366 1264.568726,1896.463745  C1280.922974,1906.343018 1297.563965,1915.684082 1315.735474,1921.785156  C1330.343628,1926.689697 1345.100098,1931.229980 1360.933838,1928.096313  C1374.748047,1925.362183 1386.065430,1918.148193 1396.441895,1909.074951  C1402.805786,1903.510376 1409.213623,1897.995972 1415.601685,1892.458984  C1415.125366,1891.932495 1414.649048,1891.406006 1414.172729,1890.879639  C1414.894531,1892.196045 1415.616211,1893.512573 1416.724365,1895.308105  C1417.196289,1897.125610 1417.281982,1898.463989 1417.101318,1900.003052  C1417.202637,1901.129028 1417.569946,1902.054321 1418.053467,1903.321045  C1418.228149,1904.380493 1418.286621,1905.098755 1418.080811,1906.016113  C1418.184082,1907.136475 1418.551514,1908.057495 1419.021484,1909.326172  C1419.184326,1910.396240 1419.244385,1911.118652 1419.045410,1912.039795  C1419.155884,1913.150757 1419.525269,1914.062988 1419.992188,1915.351562  C1420.168701,1916.761475 1420.247681,1917.795044 1420.095947,1919.001953  C1420.235962,1919.779053 1420.606445,1920.382812 1421.028076,1921.401611  C1422.438843,1929.615356 1424.070312,1937.378296 1425.104492,1945.220093  C1427.553711,1963.793457 1429.719604,1982.404297 1432.000000,2001.000000  C1383.312378,2001.000000 1334.624878,2001.000000 1285.279541,2000.659424  C1284.382690,1999.524536 1284.110474,1998.738403 1283.908813,1997.934448  C1275.298218,1963.617065 1266.693848,1929.298096 1258.088623,1894.979248 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 751,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#060300",
                opacity: "1.000000",
                stroke: "none",
                d: " M874.468384,2001.000000  C870.680786,1988.989502 867.690247,1976.876465 863.986267,1964.985840  C846.703247,1909.504028 829.222168,1854.083984 811.821289,1798.638794  C811.480591,1797.553345 811.254700,1796.431763 810.827087,1794.741211  C816.588135,1792.794800 822.174072,1790.907593 828.466125,1788.781738  C851.655396,1859.047485 873.783752,1929.315308 893.924500,2000.614258  C887.645569,2001.000000 881.291199,2001.000000 874.468384,2001.000000 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 779,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#060400",
                opacity: "1.000000",
                stroke: "none",
                d: " M1418.344971,1905.816895  C1418.286621,1905.098755 1418.228149,1904.380493 1418.101562,1902.972412  C1417.811401,1901.455688 1417.589478,1900.629028 1417.367554,1899.802368  C1417.281982,1898.463989 1417.196289,1897.125610 1417.053223,1895.388184  C1414.295532,1875.991211 1411.595337,1856.993164 1408.781494,1837.195435  C1414.683838,1836.237793 1420.624146,1835.274048 1427.026978,1834.235352  C1428.840454,1845.568481 1430.713257,1856.348633 1432.271606,1867.173828  C1438.481812,1910.313354 1444.596069,1953.466797 1450.734009,1996.616699  C1450.897827,1997.767700 1450.926270,1998.938110 1451.009033,2000.549683  C1444.978882,2001.000000 1438.957642,2001.000000 1432.468262,2001.000000  C1429.719604,1982.404297 1427.553711,1963.793457 1425.104492,1945.220093  C1424.070312,1937.378296 1422.438843,1929.615356 1421.166504,1921.097168  C1420.944824,1919.861450 1420.635742,1919.344971 1420.326660,1918.828613  C1420.247681,1917.795044 1420.168701,1916.761475 1420.081299,1915.003052  C1419.816650,1913.465820 1419.560547,1912.653320 1419.304443,1911.840942  C1419.244385,1911.118652 1419.184326,1910.396240 1419.072754,1908.979858  C1418.796021,1907.462769 1418.570557,1906.639893 1418.344971,1905.816895 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 793,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#050300",
                opacity: "1.000000",
                stroke: "none",
                d: " M1258.006470,1894.582397  C1266.693848,1929.298096 1275.298218,1963.617065 1283.908813,1997.934448  C1284.110474,1998.738403 1284.382690,1999.524536 1284.811035,2000.659424  C1278.645630,2001.000000 1272.291138,2001.000000 1265.468384,2001.000000  C1260.524414,1982.581299 1256.127075,1964.143188 1251.555664,1945.748291  C1243.925537,1915.046143 1236.182861,1884.371826 1228.499756,1853.682739  C1228.344482,1853.062500 1228.341431,1852.404053 1228.195801,1851.144531  C1234.131714,1849.647705 1239.986572,1848.171265 1246.275513,1846.585327  C1250.262085,1862.875488 1254.093140,1878.530518 1258.006470,1894.582397 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 817,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#DE7603",
                opacity: "1.000000",
                stroke: "none",
                d: " M659.898621,1415.020752  C687.568542,1417.749512 714.960388,1421.799683 742.497192,1423.496460  C789.113953,1426.368896 835.740479,1424.027466 882.145447,1419.159912  C930.497620,1414.088013 978.760498,1408.127319 1027.015259,1402.173096  C1070.773071,1396.773804 1114.686035,1396.280640 1158.676025,1396.621216  C1223.200195,1397.120728 1286.093628,1409.324829 1348.896118,1422.401489  C1408.877808,1434.890747 1468.840454,1447.481689 1528.918823,1459.490845  C1541.742798,1462.054199 1555.029663,1462.302124 1568.549561,1463.746338  C1568.018311,1465.109863 1567.262329,1466.653931 1566.031250,1467.532959  C1535.266113,1489.506104 1501.719482,1506.162720 1466.521240,1519.725586  C1432.031738,1533.015381 1396.851685,1544.180298 1360.775024,1552.042847  C1329.347290,1558.892090 1297.650391,1564.623413 1265.916748,1569.914795  C1241.414429,1574.000244 1216.700806,1576.893555 1192.022339,1579.819702  C1178.532837,1581.418945 1164.894287,1581.717285 1151.369751,1583.069824  C1117.213013,1586.485718 1082.949097,1586.604736 1048.722290,1585.781128  C1027.375977,1585.267822 1006.000977,1583.365723 984.781555,1580.872070  C963.398804,1578.359375 942.052673,1575.043823 920.942688,1570.819824  C891.087097,1564.845947 861.580444,1557.033691 833.527100,1545.087036  C811.542786,1535.724854 789.734558,1525.608643 768.946289,1513.880981  C750.783875,1503.634399 733.618652,1491.376465 716.981140,1478.733032  C696.312256,1463.025879 678.028564,1444.620483 662.028687,1424.066650  C660.906982,1422.625732 659.680359,1421.266846 658.544189,1419.836670  C656.963562,1417.847046 657.119446,1416.253174 659.898621,1415.020752 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 833,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#DD7603",
                opacity: "1.000000",
                stroke: "none",
                d: " M885.881836,793.094299  C887.730103,793.921509 889.344727,795.022705 891.941101,796.793457  C885.612061,799.210022 880.182678,801.283081 874.753296,803.356140  C886.029053,806.463135 895.885742,812.950562 907.894897,813.278625  C929.600159,813.871582 951.028442,817.214600 972.026672,822.783936  C985.430969,826.339050 997.511230,833.044556 1007.882690,842.032349  C1025.615112,857.399170 1042.874634,873.330383 1059.959961,889.420166  C1078.542603,906.919922 1098.236694,922.725159 1119.335205,937.300232  C1160.072754,965.442261 1205.302734,985.257690 1247.869263,1009.935608  C1261.551392,1017.867798 1275.671997,1025.043457 1289.581299,1032.584961  C1290.956909,1033.330811 1292.257202,1034.215332 1294.053711,1035.318848  C1280.982178,1037.908447 1268.562378,1040.001953 1256.321167,1042.859985  C1212.297852,1053.138306 1169.655884,1067.966553 1126.963623,1082.608154  C1071.835083,1101.514893 1016.905640,1121.070312 960.015808,1134.281128  C924.682983,1142.485962 889.023376,1146.510742 852.596375,1146.143433  C777.022095,1145.381104 701.817383,1151.141235 627.138367,1162.963257  C608.051819,1165.984741 589.887024,1171.900757 573.629700,1183.524780  C571.493896,1161.116333 576.179688,1139.703125 584.534241,1118.927979  C592.433044,1099.286255 604.507996,1082.481689 620.229492,1068.491699  C628.137939,1061.454224 636.906006,1055.315308 645.645508,1049.292480  C669.226990,1033.041016 692.284302,1016.166382 711.607422,994.815857  C723.360352,981.830078 732.982056,967.315796 741.166504,951.818420  C743.507690,947.385376 746.551697,943.323486 749.749756,939.463745  C750.171570,942.706848 750.117126,945.577698 750.214722,948.794678  C750.709534,949.507202 751.052307,949.873657 751.588867,950.516479  C757.947449,971.694458 772.502258,985.036926 791.637451,993.635742  C823.619568,1008.007690 856.588867,1008.078979 889.784790,998.480652  C912.335938,991.960083 932.271729,980.859558 946.879883,961.918701  C967.594482,935.060303 963.229492,901.718018 936.305237,881.102539  C914.122131,864.117126 888.345764,858.472046 861.054871,859.148804  C826.521057,860.005249 795.352234,870.236145 769.589111,894.246216  C769.277771,893.009949 768.302185,891.398010 768.756470,890.594788  C774.140991,881.074768 778.928650,871.069275 785.440491,862.363708  C801.734192,840.580688 823.148682,824.536621 846.886292,811.721069  C859.448181,804.939026 872.705017,799.444214 885.881836,793.094299 M989.248901,1109.906616  C991.838928,1109.287354 994.464539,1108.787842 997.013367,1108.029907  C1017.767700,1101.858765 1035.663574,1091.490112 1046.972778,1072.290894  C1059.195435,1051.541016 1052.523926,1030.032471 1030.913452,1019.472717  C1027.790894,1017.946838 1024.449463,1016.781067 1021.103394,1015.816040  C1011.206848,1012.961853 1001.093750,1012.397400 990.918274,1013.792603  C967.118225,1017.056091 946.511047,1026.504883 931.032715,1045.470459  C928.630554,1048.413818 926.887207,1051.894897 924.313232,1055.957520  C928.704895,1055.957520 931.774902,1055.503906 934.659058,1056.043579  C942.944153,1057.593994 951.301575,1059.077759 959.312378,1061.598755  C962.058350,1062.462891 965.748535,1066.431519 965.608093,1068.778442  C965.442078,1071.553589 962.071045,1075.567261 959.256958,1076.481323  C951.278198,1079.072632 942.920776,1080.625977 934.619080,1082.039917  C930.641541,1082.717407 926.453064,1082.156616 921.941040,1082.156616  C922.400085,1083.745728 922.601868,1084.870117 923.039490,1085.893677  C927.679932,1096.748291 936.395630,1103.112793 947.012939,1107.168335  C960.483032,1112.313599 974.378784,1112.266235 989.248901,1109.906616 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 863,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#050402",
                opacity: "1.000000",
                stroke: "none",
                d: " M515.825684,782.725830  C500.591553,784.775085 487.039551,780.748718 474.016907,774.155884  C456.894196,765.487549 442.471710,753.141724 428.207214,740.575989  C385.119202,702.619019 345.068787,661.722900 309.813049,616.349548  C297.681183,600.736084 286.778656,584.147888 275.730896,567.724915  C272.917572,563.542786 271.100250,558.439880 269.857635,553.500366  C266.531097,540.276978 274.982422,530.281067 288.347626,532.702820  C300.882507,534.974182 313.473938,538.156738 325.316040,542.790039  C356.295105,554.911011 387.280823,567.161743 417.530731,580.967163  C471.447876,605.573914 524.839478,631.333252 578.403809,656.709900  C583.498657,659.123718 588.594543,661.787292 593.111511,665.119202  C604.649658,673.630127 608.482300,685.252930 605.074829,699.090698  C604.049438,703.254700 602.661865,707.523804 600.489685,711.180176  C584.464905,738.153870 563.454346,760.334900 535.924805,775.726868  C529.944824,779.070374 522.838318,780.398926 515.825684,782.725830 M473.947144,627.532227  C453.243530,617.957825 432.601471,608.247498 411.822784,598.838806  C374.815948,582.081909 338.025696,564.753174 298.693878,553.834106  C295.635986,552.985107 292.530914,552.306091 288.519104,551.319824  C289.654266,553.775879 290.152069,555.184387 290.909454,556.435791  C294.701996,562.702026 298.220337,569.170166 302.452271,575.128967  C344.556732,634.415344 394.386841,686.577148 449.384094,733.946472  C461.161987,744.090820 473.539673,753.364624 487.787872,759.838440  C501.551300,766.091858 515.346741,766.549072 528.499268,758.572571  C551.265869,744.765442 569.624695,726.275269 583.210510,703.438782  C591.327942,689.794250 588.769043,682.740601 574.595825,675.882141  C541.318665,659.779175 507.951416,643.862244 473.947144,627.532227 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 922,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#DD7503",
                opacity: "1.000000",
                stroke: "none",
                d: " M484.031921,879.778076  C476.509003,894.395386 468.971649,908.638977 462.016449,921.782410  C454.969971,915.334106 446.916901,909.052551 440.157166,901.598145  C402.897186,860.510010 365.418488,819.599670 329.053955,777.725891  C293.967987,737.324463 261.247406,694.976440 231.852783,650.185547  C213.361252,622.008606 195.969803,593.188110 185.414474,560.883789  C183.054977,553.662598 181.589279,546.149353 180.760117,538.306824  C181.150314,538.654480 181.727692,538.926147 181.904114,539.360596  C197.506943,577.783508 220.731522,611.575562 247.165451,643.016296  C270.298035,670.530518 294.874908,696.864014 319.469360,723.104614  C338.263672,743.156799 357.661163,762.691895 377.579254,781.627258  C393.382660,796.651123 410.361511,810.440552 426.856628,824.734131  C439.322174,835.535950 451.847839,846.268311 464.693298,857.029114  C465.039825,857.026672 464.970551,857.007019 464.968384,857.288452  C465.331726,857.723389 465.697266,857.876831 466.062805,858.030273  C466.062775,858.030334 465.971222,858.028259 465.993591,858.287903  C466.364502,858.712646 466.713013,858.877808 467.061523,859.042969  C467.061554,859.042908 466.958679,859.043396 467.023560,859.267578  C467.409546,859.679199 467.730652,859.866760 468.051758,860.054321  C468.051788,860.054260 467.951294,860.063232 468.073730,860.185181  C468.523529,860.190002 468.850861,860.072998 469.178192,859.955933  C472.418854,863.913818 475.736420,867.812012 478.871246,871.851990  C480.735291,874.254150 482.311768,876.879456 484.031921,879.778076 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 956,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#050402",
                opacity: "1.000000",
                stroke: "none",
                d: " M769.414490,894.547485  C795.352234,870.236145 826.521057,860.005249 861.054871,859.148804  C888.345764,858.472046 914.122131,864.117126 936.305237,881.102539  C963.229492,901.718018 967.594482,935.060303 946.879883,961.918701  C932.271729,980.859558 912.335938,991.960083 889.784790,998.480652  C856.588867,1008.078979 823.619568,1008.007690 791.637451,993.635742  C772.502258,985.036926 757.947449,971.694458 751.559265,950.107239  C750.911438,949.097229 750.487000,948.772827 750.062622,948.448486  C750.117126,945.577698 750.171570,942.706848 750.096924,939.409912  C750.229431,921.581238 757.403137,907.196899 769.414490,894.547485 M769.442810,944.010559  C772.393738,949.883179 774.616577,956.294067 778.466858,961.501770  C784.200012,969.256592 792.571777,974.139526 801.457642,977.686523  C835.333252,991.209167 868.760071,988.773254 901.627930,974.115112  C914.924072,968.185425 926.280518,959.584045 934.406616,947.314026  C939.040100,940.317688 942.364746,932.756104 940.975525,923.316467  C939.552979,918.599304 938.853271,913.493103 936.565125,909.241760  C930.909851,898.734314 921.612244,891.842102 910.881836,887.239929  C877.482544,872.915405 844.130737,874.851379 811.121155,888.674622  C797.403687,894.419067 785.471191,902.843201 776.768250,915.130798  C770.848938,923.488159 767.310730,932.670166 769.442810,944.010559 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 986,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#FAB802",
                opacity: "1.000000",
                stroke: "none",
                d: " M195.766891,521.129700  C194.536484,518.129028 193.479980,514.977722 192.781464,511.748993  C191.210678,504.488403 191.247681,504.378693 198.425980,501.689758  C210.706589,497.089539 223.525375,496.794037 236.363617,497.628876  C273.538727,500.046387 309.142059,509.896973 344.379608,521.183533  C423.161194,546.417236 498.673309,579.692261 573.578979,614.484680  C581.640076,618.228943 588.197449,622.323914 590.937683,631.273315  C591.830933,634.190735 594.176941,636.663452 595.986877,639.661743  C591.047180,637.961243 585.919922,636.074463 580.920410,633.894470  C543.247009,617.467224 505.707764,600.726501 467.901276,584.612305  C445.558411,575.089111 422.896576,566.290405 400.212646,557.597717  C374.265167,547.654480 348.311218,537.670715 322.018433,528.706665  C305.376770,523.033020 288.303467,518.229431 271.074615,514.778198  C251.204895,510.798004 230.892334,508.812317 210.825607,514.101746  C205.674866,515.459412 200.997910,518.614502 195.766891,521.129700 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1014,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#FCB902",
                opacity: "1.000000",
                stroke: "none",
                d: " M626.980652,705.980042  C632.190369,702.625305 637.428101,699.242554 642.651123,695.837219  C644.727112,694.483704 646.757202,693.059814 648.830627,691.702209  C661.468201,683.427795 663.680969,683.608093 675.720581,693.955200  C668.480347,699.980591 661.119019,706.165405 653.306519,711.715149  C635.040771,724.690552 616.560181,737.363525 598.151917,750.137817  C597.802551,750.380371 597.272034,750.361755 595.650085,750.737122  C604.198730,734.342102 614.097656,719.925903 625.097168,706.465332  C625.908447,706.569824 626.494995,706.274109 627.081482,705.978333  C627.081482,705.978333 627.002747,705.942993 626.980652,705.980042 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1036,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#050301",
                opacity: "1.000000",
                stroke: "none",
                d: " M626.762634,705.909668  C626.494995,706.274109 625.908447,706.569824 625.295837,706.622070  C625.661072,706.199280 626.052429,706.020081 626.762634,705.909668 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1053,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#050301",
                opacity: "1.000000",
                stroke: "none",
                d: " M468.866150,859.884216  C468.850861,860.072998 468.523529,860.190002 468.064026,860.135620  C468.139282,859.913635 468.346680,859.863098 468.866150,859.884216 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1063,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#050301",
                opacity: "1.000000",
                stroke: "none",
                d: " M468.059753,859.706665  C467.730652,859.866760 467.409546,859.679199 467.019287,859.216309  C467.322662,859.080261 467.695221,859.219666 468.059753,859.706665 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1073,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#DE7603",
                opacity: "1.000000",
                stroke: "none",
                d: " M655.254639,1414.195557  C655.430481,1413.956787 655.865540,1413.918213 656.543518,1414.113525  C656.362244,1414.363647 655.938049,1414.379761 655.254639,1414.195557 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1083,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#050301",
                opacity: "1.000000",
                stroke: "none",
                d: " M467.136292,858.669861  C466.713013,858.877808 466.364502,858.712646 465.991913,858.242126  C466.382233,858.056702 466.796661,858.176697 467.136292,858.669861 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1093,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#050301",
                opacity: "1.000000",
                stroke: "none",
                d: " M466.203949,857.633667  C465.697266,857.876831 465.331726,857.723389 464.974548,857.252991  C465.436951,857.036377 465.891022,857.136658 466.203949,857.633667 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1103,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#050301",
                opacity: "1.000000",
                stroke: "none",
                d: " M769.618713,709.986877  C768.385986,710.180847 766.854980,710.179565 765.180237,709.917725  C766.464478,709.701965 767.892456,709.746826 769.618713,709.986877 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1113,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#050301",
                opacity: "1.000000",
                stroke: "none",
                d: " M786.744751,711.959473  C786.366211,712.147339 785.788574,712.158142 785.120056,711.978760  C785.534668,711.786438 786.040161,711.784424 786.744751,711.959473 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1123,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#050301",
                opacity: "1.000000",
                stroke: "none",
                d: " M779.732483,710.999207  C779.363098,711.192383 778.797241,711.211853 778.135437,711.054077  C778.538330,710.859741 779.037170,710.842590 779.732483,710.999207 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1133,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#050301",
                opacity: "1.000000",
                stroke: "none",
                d: " M803.876770,715.794312  C803.559082,715.822266 803.013062,715.683289 802.262573,715.347412  C802.588196,715.309509 803.118286,715.468445 803.876770,715.794312 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1143,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#050301",
                opacity: "1.000000",
                stroke: "none",
                d: " M807.061157,716.787476  C806.924561,716.902100 806.663025,716.799194 806.272095,716.492554  C806.416504,716.349426 806.680969,716.443115 807.061157,716.787476 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1153,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#AD6D2D",
                opacity: "1.000000",
                stroke: "none",
                d: " M616.856323,636.282166  C616.600647,636.299194 616.241333,636.011963 615.904053,635.372559  C616.201538,635.339539 616.477112,635.658752 616.856323,636.282166 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1163,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#EB8C01",
                opacity: "1.000000",
                stroke: "none",
                d: " M1137.831787,552.884583  C1133.272461,550.340393 1128.713013,547.796204 1124.086182,544.646118  C1124.718384,543.350952 1125.310669,542.476379 1126.133545,541.999329  C1145.701172,530.655151 1165.249023,519.275757 1184.892822,508.064575  C1208.149048,494.791718 1231.436523,481.571442 1254.811768,468.509918  C1282.110107,453.256287 1309.459473,438.091675 1336.899780,423.095337  C1353.838135,413.838470 1370.917603,404.832428 1388.056396,395.950867  C1425.590820,376.500153 1462.912354,356.592804 1502.613647,341.701874  C1513.826660,337.496216 1524.817383,336.018616 1535.551025,342.950165  C1536.128418,361.651367 1532.238159,379.715485 1527.489746,397.611694  C1517.285645,436.069611 1502.617554,472.914459 1484.690674,508.305969  C1461.015381,555.045898 1441.809204,603.652649 1422.115112,652.082275  C1420.328247,656.476807 1418.683105,660.929016 1417.030762,665.734558  C1417.089478,666.114624 1417.133301,666.060181 1417.133301,666.060181  C1415.879639,666.043091 1414.460693,666.410461 1413.396606,665.952637  C1387.510620,654.814575 1361.479492,656.895386 1335.359619,664.935974  C1334.883057,665.082703 1334.403320,665.219177 1333.375000,665.069336  C1325.362793,661.852295 1318.090332,658.167053 1310.378540,656.240356  C1304.200073,654.696655 1297.487915,655.288513 1291.012695,654.932617  C1276.555054,646.700684 1262.097168,638.468872 1247.639648,630.236633  C1210.459106,609.065552 1173.278442,587.894165 1136.373291,566.381104  C1152.446167,567.463440 1168.243774,568.887634 1184.041382,570.311768  C1170.235840,560.372742 1154.465332,555.493958 1137.831787,552.884583 M1235.778931,606.721619  C1250.429077,611.681519 1264.857544,617.485413 1279.780640,621.406982  C1303.129517,627.542847 1326.321167,628.039062 1347.735840,614.088806  C1359.182739,606.632019 1368.833008,597.192078 1377.061523,586.430542  C1401.301636,554.728821 1422.926147,521.321045 1440.893677,485.647369  C1452.214233,463.170746 1463.175903,440.487152 1469.878662,416.100128  C1471.355835,410.725311 1471.918457,404.929230 1471.852783,399.339447  C1471.750000,390.572418 1465.262695,384.306732 1456.632690,385.181427  C1451.016479,385.750580 1445.071167,387.508423 1440.217163,390.347565  C1424.411743,399.592316 1408.211914,408.481537 1393.650024,419.476044  C1339.795654,460.137238 1286.506958,501.548676 1233.092041,542.789978  C1226.119995,548.172974 1219.081909,553.672485 1213.077271,560.060852  C1203.309204,570.452942 1203.564087,582.839905 1214.055908,592.345032  C1220.235840,597.943848 1228.040771,601.749023 1235.778931,606.721619 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1173,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#DD7503",
                opacity: "1.000000",
                stroke: "none",
                d: " M1417.066895,666.141357  C1425.964844,651.518311 1434.587280,636.676941 1443.859741,622.253540  C1476.039185,572.198059 1502.381348,519.160461 1524.798462,464.140900  C1537.074707,434.010956 1547.283691,403.187531 1552.378906,370.906982  C1553.402954,364.419281 1553.876587,357.844696 1554.604126,351.310181  C1555.210693,351.241211 1555.817261,351.172272 1556.423828,351.103302  C1557.650879,359.103394 1559.427246,367.064575 1559.997437,375.111206  C1561.463867,395.802032 1559.569458,416.378998 1556.489258,436.831757  C1545.483032,509.910217 1524.416260,580.419189 1501.433960,650.404541  C1492.706177,676.982544 1483.132568,703.282898 1473.927612,729.703979  C1473.179443,731.851562 1472.302490,733.954224 1471.317505,736.513977  C1462.932495,729.478943 1455.023926,722.922363 1447.252197,716.207336  C1446.429321,715.496277 1446.140991,713.873230 1446.058350,712.642822  C1444.788696,693.739807 1435.734253,679.621338 1419.873535,669.596069  C1418.696533,668.852112 1417.791260,667.678772 1416.946533,666.382568  C1417.133301,666.060181 1417.089478,666.114624 1417.066895,666.141357 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1217,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#FAB802",
                opacity: "1.000000",
                stroke: "none",
                d: " M1535.707031,342.542633  C1524.817383,336.018616 1513.826660,337.496216 1502.613647,341.701874  C1462.912354,356.592804 1425.590820,376.500153 1388.056396,395.950867  C1370.917603,404.832428 1353.838135,413.838470 1336.899780,423.095337  C1309.459473,438.091675 1282.110107,453.256287 1254.811768,468.509918  C1231.436523,481.571442 1208.149048,494.791718 1184.892822,508.064575  C1165.249023,519.275757 1145.701172,530.655151 1126.133545,541.999329  C1125.310669,542.476379 1124.718384,543.350952 1123.859863,544.407043  C1118.876709,543.087952 1114.052246,541.402039 1108.657715,539.516907  C1109.935791,538.422913 1110.695923,537.607300 1111.603394,537.019104  C1183.573364,490.377136 1256.687256,445.637482 1332.364502,405.218658  C1375.103271,382.391998 1418.323853,360.441620 1464.267212,344.688629  C1480.716919,339.048370 1497.928101,335.567993 1514.896362,331.542328  C1519.506592,330.448608 1524.502808,331.039093 1529.311890,330.709930  C1533.663452,330.412048 1535.878540,332.105988 1535.644287,336.661804  C1535.550781,338.477661 1535.780396,340.310181 1535.707031,342.542633 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1240,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#FAB802",
                opacity: "1.000000",
                stroke: "none",
                d: " M435.577576,1621.357666  C434.065765,1619.481567 432.193329,1617.372559 431.057037,1614.922119  C416.535797,1583.607056 399.615540,1553.577881 380.910431,1524.644409  C363.307465,1497.415771 345.061432,1470.550781 325.923218,1444.385254  C313.500793,1427.401611 299.069336,1411.875244 285.353668,1395.853760  C274.713867,1383.425171 262.496002,1372.669922 248.993103,1363.440186  C245.310806,1360.923218 241.315384,1358.742188 237.218399,1356.975708  C222.180527,1350.491211 208.791367,1356.187622 196.132111,1363.654907  C177.751587,1374.497070 164.823105,1390.694336 154.071838,1408.795044  C152.889481,1410.785522 151.535797,1412.674194 149.942184,1414.773926  C156.156998,1393.722168 165.151901,1373.746338 180.808060,1357.597290  C198.356201,1339.496460 219.289597,1336.508057 242.298157,1345.473022  C262.860809,1353.484985 279.773499,1366.926147 295.408752,1382.087402  C327.617432,1413.319702 352.663879,1449.951660 375.014740,1488.557739  C399.439087,1530.744995 419.537323,1574.927856 435.577576,1621.357666 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1263,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#D1D8DA",
                opacity: "1.000000",
                stroke: "none",
                d: " M1422.519653,697.890137  C1428.944580,708.054443 1429.428101,721.810669 1423.567139,733.362244  C1401.296265,720.196655 1379.046265,707.043396 1357.012451,693.526001  C1358.216431,693.022278 1359.218140,692.945923 1360.190063,692.733582  C1372.949341,689.946411 1385.850586,688.482483 1398.739258,691.100464  C1406.793457,692.736511 1414.601318,695.585510 1422.519653,697.890137 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1285,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#F4F4F4",
                opacity: "1.000000",
                stroke: "none",
                d: " M1422.417847,697.545044  C1414.601318,695.585510 1406.793457,692.736511 1398.739258,691.100464  C1385.850586,688.482483 1372.949341,689.946411 1360.190063,692.733582  C1359.218140,692.945923 1358.216431,693.022278 1356.775146,693.267700  C1350.783813,690.209656 1345.246216,687.045776 1338.835938,683.383423  C1361.414917,676.444641 1382.911255,673.602600 1404.530640,682.612427  C1411.896606,685.682129 1418.029541,690.335876 1422.417847,697.545044 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1298,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#FAB702",
                opacity: "1.000000",
                stroke: "none",
                d: " M1137.427246,552.827881  C1154.465332,555.493958 1170.235840,560.372742 1184.041382,570.311768  C1168.243774,568.887634 1152.446167,567.463440 1136.172485,566.091553  C1127.500488,561.762573 1119.304565,557.381348 1111.108765,553.000183  C1111.172974,552.458496 1111.237305,551.916870 1111.301636,551.375244  C1119.875244,551.840576 1128.448975,552.305908 1137.427246,552.827881 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1312,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#D97403",
                opacity: "1.000000",
                stroke: "none",
                d: " M1291.208008,655.210815  C1297.487915,655.288513 1304.200073,654.696655 1310.378540,656.240356  C1318.090332,658.167053 1325.362793,661.852295 1332.985352,665.123535  C1329.189819,667.113220 1325.296997,668.945740 1321.245239,670.304565  C1319.741821,670.808777 1317.551147,670.762512 1316.211182,670.010254  C1307.857178,665.320740 1299.655518,660.359924 1291.208008,655.210815 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1325,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#DA8201",
                opacity: "1.000000",
                stroke: "none",
                d: " M1466.120117,757.891357  C1464.214478,757.136047 1462.172852,756.611572 1460.427246,755.584290  C1453.753052,751.656189 1447.174072,747.566284 1440.378906,743.426758  C1441.123169,741.304260 1441.762573,739.480957 1442.801392,736.518433  C1450.782104,743.748047 1458.282837,750.542786 1465.929443,757.632935  C1466.075439,757.928406 1466.120117,757.891357 1466.120117,757.891357 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1338,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#FAB802",
                opacity: "1.000000",
                stroke: "none",
                d: " M149.547485,1414.924438  C149.679947,1415.357544 149.534027,1415.970947 149.157288,1416.805298  C149.040680,1416.385742 149.154877,1415.745239 149.547485,1414.924438 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1351,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#FAB802",
                opacity: "1.000000",
                stroke: "none",
                d: " M436.357147,1623.957520  C435.987915,1623.717896 435.609833,1623.093750 435.257050,1622.096680  C435.637695,1622.340210 435.993011,1622.956543 436.357147,1623.957520 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1361,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#FAB802",
                opacity: "1.000000",
                stroke: "none",
                d: " M437.239258,1626.564941  C436.889252,1626.338989 436.519226,1625.733032 436.108948,1624.757812  C436.452240,1624.987305 436.835724,1625.586060 437.239258,1626.564941 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1371,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#DA8201",
                opacity: "1.000000",
                stroke: "none",
                d: " M1466.051025,757.944214  C1466.149780,758.066956 1466.272827,758.173828 1466.395874,758.280701  C1466.253296,758.272339 1466.110718,758.263977 1466.044189,758.073486  C1466.120117,757.891357 1466.075439,757.928406 1466.051025,757.944214 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1381,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#D4DBDD",
                opacity: "1.000000",
                stroke: "none",
                d: " M1348.971924,1065.105469  C1359.983398,1070.890259 1371.040039,1076.590942 1381.998169,1082.474854  C1417.496338,1101.535522 1452.973022,1120.636230 1488.402100,1139.824585  C1490.823120,1141.135742 1493.041992,1143.059204 1494.919067,1145.098877  C1515.408569,1167.364258 1537.138428,1188.190063 1563.297974,1203.817505  C1575.959961,1211.381714 1589.234741,1217.468628 1604.297852,1218.356567  C1610.873413,1218.744263 1617.192993,1217.950073 1623.134766,1214.712646  C1624.399292,1214.023682 1626.671631,1214.020752 1627.953369,1214.698120  C1655.772583,1229.398438 1683.491333,1244.288818 1711.310913,1258.988525  C1714.531372,1260.690430 1715.671875,1262.519531 1715.525391,1266.301758  C1714.179321,1301.034790 1708.610229,1334.862183 1694.179688,1366.763550  C1669.896118,1420.446411 1624.529297,1447.761963 1565.570312,1445.022949  C1540.957520,1443.879639 1517.158813,1438.252441 1493.198486,1433.397217  C1420.905884,1418.748779 1348.693970,1403.692627 1276.320435,1389.457275  C1236.695312,1381.663330 1196.494629,1379.039307 1156.114502,1377.859741  C1089.708374,1375.919434 1024.093262,1383.191406 958.495728,1392.089111  C906.845215,1399.095093 854.973816,1404.008667 802.811340,1405.485474  C757.429016,1406.770386 712.226074,1405.138672 667.540100,1396.753784  C637.717773,1391.157959 609.691589,1380.565430 586.314331,1360.480835  C554.806946,1333.411377 543.449951,1298.917236 550.372559,1258.200073  C551.096558,1253.942017 552.342590,1249.772461 553.956421,1245.226807  C554.978394,1244.626587 555.536865,1244.457275 555.781311,1244.082886  C567.394165,1226.294800 583.717651,1214.492676 603.217651,1206.739258  C618.112000,1200.817139 633.418213,1196.528564 649.417114,1194.799561  C666.394043,1192.964966 683.333862,1190.786377 700.313171,1188.975830  C712.187378,1187.709717 724.097107,1186.770264 735.997070,1185.755371  C751.031311,1184.472778 766.053406,1182.551636 781.113037,1182.166138  C813.718018,1181.331543 846.344360,1181.350830 878.960205,1180.899048  C886.427673,1180.795776 893.897827,1180.334351 901.349976,1179.802124  C918.057617,1178.608887 934.772644,1177.462891 951.450073,1175.922974  C964.317993,1174.734863 977.271973,1173.714355 989.945496,1171.331177  C1026.216797,1164.510498 1060.670654,1151.543335 1095.168823,1138.864136  C1124.209106,1128.190796 1152.985229,1116.776611 1182.183594,1106.563354  C1207.602539,1097.672363 1233.322388,1089.576782 1259.143555,1081.919800  C1281.768799,1075.210449 1304.883545,1070.441406 1328.409058,1067.901001  C1335.283813,1067.158936 1342.118774,1066.047607 1348.971924,1065.105469 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1392,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#F7F7F7",
                opacity: "1.000000",
                stroke: "none",
                d: " M1348.632080,1065.004028  C1342.118774,1066.047607 1335.283813,1067.158936 1328.409058,1067.901001  C1304.883545,1070.441406 1281.768799,1075.210449 1259.143555,1081.919800  C1233.322388,1089.576782 1207.602539,1097.672363 1182.183594,1106.563354  C1152.985229,1116.776611 1124.209106,1128.190796 1095.168823,1138.864136  C1060.670654,1151.543335 1026.216797,1164.510498 989.945496,1171.331177  C977.271973,1173.714355 964.317993,1174.734863 951.450073,1175.922974  C934.772644,1177.462891 918.057617,1178.608887 901.349976,1179.802124  C893.897827,1180.334351 886.427673,1180.795776 878.960205,1180.899048  C846.344360,1181.350830 813.718018,1181.331543 781.113037,1182.166138  C766.053406,1182.551636 751.031311,1184.472778 735.997070,1185.755371  C724.097107,1186.770264 712.187378,1187.709717 700.313171,1188.975830  C683.333862,1190.786377 666.394043,1192.964966 649.417114,1194.799561  C633.418213,1196.528564 618.112000,1200.817139 603.217651,1206.739258  C583.717651,1214.492676 567.394165,1226.294800 555.781311,1244.082886  C555.536865,1244.457275 554.978394,1244.626587 554.222900,1244.959961  C558.969238,1228.326904 567.399353,1213.658936 580.598938,1202.043091  C595.300598,1189.105347 613.324341,1183.920044 632.091064,1180.947021  C691.371460,1171.555664 751.077087,1166.651978 811.038879,1164.936401  C834.499023,1164.265015 857.994324,1164.854736 881.457397,1164.246948  C916.120667,1163.348755 949.874207,1156.319702 983.308411,1147.705322  C1035.073853,1134.368408 1085.387695,1116.440063 1135.907349,1099.161499  C1177.623047,1084.893921 1219.191040,1069.989868 1262.370850,1060.682251  C1281.692383,1056.517578 1301.470825,1054.468872 1321.048584,1051.505249  C1322.163452,1051.336548 1323.546753,1051.199585 1324.456787,1051.691650  C1332.446777,1056.012085 1340.357788,1060.479004 1348.632080,1065.004028 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1435,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#EC8C01",
                opacity: "1.000000",
                stroke: "none",
                d: " M1417.101318,1900.003052  C1417.589478,1900.629028 1417.811401,1901.455688 1417.985352,1902.630981  C1417.569946,1902.054321 1417.202637,1901.129028 1417.101318,1900.003052 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1468,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#EC8C01",
                opacity: "1.000000",
                stroke: "none",
                d: " M1418.080811,1906.016113  C1418.570557,1906.639893 1418.796021,1907.462769 1418.970215,1908.632080  C1418.551514,1908.057495 1418.184082,1907.136475 1418.080811,1906.016113 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1478,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#EC8C01",
                opacity: "1.000000",
                stroke: "none",
                d: " M1419.045410,1912.039795  C1419.560547,1912.653320 1419.816650,1913.465820 1419.983643,1914.626709  C1419.525269,1914.062988 1419.155884,1913.150757 1419.045410,1912.039795 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1488,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#EC8C01",
                opacity: "1.000000",
                stroke: "none",
                d: " M1420.095947,1919.001953  C1420.635742,1919.344971 1420.944824,1919.861450 1421.115479,1920.682251  C1420.606445,1920.382812 1420.235962,1919.779053 1420.095947,1919.001953 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1498,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#020100",
                opacity: "1.000000",
                stroke: "none",
                d: " M988.821167,1109.963379  C974.378784,1112.266235 960.483032,1112.313599 947.012939,1107.168335  C936.395630,1103.112793 927.679932,1096.748291 923.039490,1085.893677  C922.601868,1084.870117 922.400085,1083.745728 921.941040,1082.156616  C926.453064,1082.156616 930.641541,1082.717407 934.619080,1082.039917  C942.920776,1080.625977 951.278198,1079.072632 959.256958,1076.481323  C962.071045,1075.567261 965.442078,1071.553589 965.608093,1068.778442  C965.748535,1066.431519 962.058350,1062.462891 959.312378,1061.598755  C951.301575,1059.077759 942.944153,1057.593994 934.659058,1056.043579  C931.774902,1055.503906 928.704895,1055.957520 924.313232,1055.957520  C926.887207,1051.894897 928.630554,1048.413818 931.032715,1045.470459  C946.511047,1026.504883 967.118225,1017.056091 990.918274,1013.792603  C1001.093750,1012.397400 1011.206848,1012.961853 1021.103394,1015.816040  C1024.449463,1016.781067 1027.790894,1017.946838 1030.913452,1019.472717  C1052.523926,1030.032471 1059.195435,1051.541016 1046.972778,1072.290894  C1035.663574,1091.490112 1017.767700,1101.858765 997.013367,1108.029907  C994.464539,1108.787842 991.838928,1109.287354 988.821167,1109.963379 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1508,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#EC8C01",
                opacity: "1.000000",
                stroke: "none",
                d: " M750.214722,948.794678  C750.487000,948.772827 750.911438,949.097229 751.365479,949.830811  C751.052307,949.873657 750.709534,949.507202 750.214722,948.794678 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1532,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#D3DADC",
                opacity: "1.000000",
                stroke: "none",
                d: " M474.283875,627.701111  C507.951416,643.862244 541.318665,659.779175 574.595825,675.882141  C588.769043,682.740601 591.327942,689.794250 583.210510,703.438782  C569.624695,726.275269 551.265869,744.765442 528.499268,758.572571  C515.346741,766.549072 501.551300,766.091858 487.787872,759.838440  C473.539673,753.364624 461.161987,744.090820 449.384094,733.946472  C394.386841,686.577148 344.556732,634.415344 302.452271,575.128967  C298.220337,569.170166 294.701996,562.702026 290.909454,556.435791  C290.152069,555.184387 289.654266,553.775879 288.519104,551.319824  C292.530914,552.306091 295.635986,552.985107 298.693878,553.834106  C338.025696,564.753174 374.815948,582.081909 411.822784,598.838806  C432.601471,608.247498 453.243530,617.957825 474.283875,627.701111 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1542,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#D4DBDD",
                opacity: "1.000000",
                stroke: "none",
                d: " M940.810974,923.964111  C942.364746,932.756104 939.040100,940.317688 934.406616,947.314026  C926.280518,959.584045 914.924072,968.185425 901.627930,974.115112  C868.760071,988.773254 835.333252,991.209167 801.457642,977.686523  C792.571777,974.139526 784.200012,969.256592 778.466858,961.501770  C774.616577,956.294067 772.393738,949.883179 769.802429,943.382263  C775.387207,937.043518 780.209717,930.889099 785.918640,925.712036  C799.118042,913.742493 814.159668,904.696045 831.473511,899.922424  C854.481262,893.578979 877.563904,894.506042 900.347595,900.724426  C915.702637,904.915283 931.479797,909.003235 940.810974,923.964111 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1561,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#F7F7F7",
                opacity: "1.000000",
                stroke: "none",
                d: " M940.893250,923.640259  C931.479797,909.003235 915.702637,904.915283 900.347595,900.724426  C877.563904,894.506042 854.481262,893.578979 831.473511,899.922424  C814.159668,904.696045 799.118042,913.742493 785.918640,925.712036  C780.209717,930.889099 775.387207,937.043518 769.885315,942.990479  C767.310730,932.670166 770.848938,923.488159 776.768250,915.130798  C785.471191,902.843201 797.403687,894.419067 811.121155,888.674622  C844.130737,874.851379 877.482544,872.915405 910.881836,887.239929  C921.612244,891.842102 930.909851,898.734314 936.565125,909.241760  C938.853271,913.493103 939.552979,918.599304 940.893250,923.640259 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1578,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#050402",
                opacity: "1.000000",
                stroke: "none",
                d: " M1235.446899,606.541260  C1228.040771,601.749023 1220.235840,597.943848 1214.055908,592.345032  C1203.564087,582.839905 1203.309204,570.452942 1213.077271,560.060852  C1219.081909,553.672485 1226.119995,548.172974 1233.092041,542.789978  C1286.506958,501.548676 1339.795654,460.137238 1393.650024,419.476044  C1408.211914,408.481537 1424.411743,399.592316 1440.217163,390.347565  C1445.071167,387.508423 1451.016479,385.750580 1456.632690,385.181427  C1465.262695,384.306732 1471.750000,390.572418 1471.852783,399.339447  C1471.918457,404.929230 1471.355835,410.725311 1469.878662,416.100128  C1463.175903,440.487152 1452.214233,463.170746 1440.893677,485.647369  C1422.926147,521.321045 1401.301636,554.728821 1377.061523,586.430542  C1368.833008,597.192078 1359.182739,606.632019 1347.735840,614.088806  C1326.321167,628.039062 1303.129517,627.542847 1279.780640,621.406982  C1264.857544,617.485413 1250.429077,611.681519 1235.446899,606.541260 M1375.892578,556.361633  C1387.716187,537.842407 1400.129517,519.668457 1411.222900,500.721802  C1427.223877,473.393646 1440.900635,444.875397 1450.820190,414.695068  C1451.805664,411.696777 1452.354614,408.555023 1453.106201,405.479828  C1452.669678,405.161621 1452.233154,404.843414 1451.796509,404.525208  C1436.632446,414.124084 1420.693726,422.700714 1406.440674,433.501709  C1349.767456,476.449158 1293.611328,520.079102 1237.299438,563.502502  C1233.748535,566.240662 1230.458618,569.325562 1227.125610,572.335754  C1224.447876,574.754089 1224.580566,577.435547 1227.383911,579.481689  C1231.532471,582.509644 1235.684448,585.719849 1240.283691,587.910400  C1258.106323,596.398926 1276.773438,602.398682 1296.276733,605.678894  C1316.372925,609.058716 1334.276367,604.304871 1348.404907,589.526733  C1358.137207,579.346863 1366.487183,567.845337 1375.892578,556.361633 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1595,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#D3DADC",
                opacity: "1.000000",
                stroke: "none",
                d: " M1375.673828,556.648071  C1366.487183,567.845337 1358.137207,579.346863 1348.404907,589.526733  C1334.276367,604.304871 1316.372925,609.058716 1296.276733,605.678894  C1276.773438,602.398682 1258.106323,596.398926 1240.283691,587.910400  C1235.684448,585.719849 1231.532471,582.509644 1227.383911,579.481689  C1224.580566,577.435547 1224.447876,574.754089 1227.125610,572.335754  C1230.458618,569.325562 1233.748535,566.240662 1237.299438,563.502502  C1293.611328,520.079102 1349.767456,476.449158 1406.440674,433.501709  C1420.693726,422.700714 1436.632446,414.124084 1451.796509,404.525208  C1452.233154,404.843414 1452.669678,405.161621 1453.106201,405.479828  C1452.354614,408.555023 1451.805664,411.696777 1450.820190,414.695068  C1440.900635,444.875397 1427.223877,473.393646 1411.222900,500.721802  C1400.129517,519.668457 1387.716187,537.842407 1375.673828,556.648071 z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
                lineNumber: 1629,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MentatfunIcon",
    ()=>MentatfunIcon
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const MentatfunIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 80 80",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                width: "80",
                height: "80",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M36.4 30.4H40V36.4H36.4V30.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M47.2 30.4H50.8V36.4H47.2V30.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M18.4 23.2H20.8V25.6H18.4V23.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M20.8 23.2H23.2V25.6H20.8V23.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M28 16H30.4V18.4H28V16Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M25.6 16H28V18.4H25.6V16Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M28 20.8H30.4V23.2H28V20.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M16 30.4H18.4V32.8H16V30.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M18.4 30.4H20.8V32.8H18.4V30.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M20.8 30.4H23.2V32.8H20.8V30.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M23.2 30.4H25.6V32.8H23.2V30.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M16 32.8H18.4V35.2H16V32.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M18.4 32.8H20.8V35.2H18.4V32.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M20.8 32.8H23.2V35.2H20.8V32.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M23.2 32.8H25.6V35.2H23.2V32.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M16 35.2H18.4V37.6H16V35.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M18.4 35.2H20.8V37.6H18.4V35.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M20.8 35.2H23.2V37.6H20.8V35.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M23.2 35.2H25.6V37.6H23.2V35.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M16 37.6H18.4V40H16V37.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M18.4 37.6H20.8V40H18.4V37.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M20.8 37.6H23.2V40H20.8V37.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M23.2 37.6H25.6V40H23.2V37.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M16 40H18.4V42.4H16V40Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M18.4 40H20.8V42.4H18.4V40Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M20.8 40H23.2V42.4H20.8V40Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M23.2 40H25.6V42.4H23.2V40Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M16 42.4H18.4V44.8H16V42.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M18.4 42.4H20.8V44.8H18.4V42.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M20.8 42.4H23.2V44.8H20.8V42.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M23.2 42.4H25.6V44.8H23.2V42.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M16 44.8H18.4V47.2H16V44.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M18.4 44.8H20.8V47.2H18.4V44.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M20.8 44.8H23.2V47.2H20.8V44.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M23.2 44.8H25.6V47.2H23.2V44.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M16 52H18.4V54.4H16V52Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M18.4 52H20.8V54.4H18.4V52Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M20.8 52H23.2V54.4H20.8V52Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M23.2 52H25.6V54.4H23.2V52Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M25.6 52H28V54.4H25.6V52Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M25.6 56.8H28V59.2H25.6V56.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M16 47.2H18.4V49.6H16V47.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M18.4 47.2H20.8V49.6H18.4V47.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M20.8 47.2H23.2V49.6H20.8V47.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M23.2 47.2H25.6V49.6H23.2V47.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M16 54.4H18.4V56.8H16V54.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M18.4 54.4H20.8V56.8H18.4V54.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M20.8 54.4H23.2V56.8H20.8V54.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M23.2 54.4H25.6V56.8H23.2V54.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M25.6 54.4H28V56.8H25.6V54.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M25.6 59.2H28V61.6H25.6V59.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M16 49.6H18.4V52H16V49.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M18.4 49.6H20.8V52H18.4V49.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M20.8 49.6H23.2V52H20.8V49.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M23.2 49.6H25.6V52H23.2V49.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M25.6 49.6H28V52H25.6V49.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M20.8 56.8H23.2V59.2H20.8V56.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M23.2 56.8H25.6V59.2H23.2V56.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M23.2 59.2H25.6V61.6H23.2V59.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M28 56.8H30.4V59.2H28V56.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M28 54.4H30.4V56.8H28V54.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M30.4 52H32.8V54.4H30.4V52Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M32.8 52H35.2V54.4H32.8V52Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M35.2 52H37.6V54.4H35.2V52Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M37.6 52H40V54.4H37.6V52Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M40 52H42.4V54.4H40V52Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M42.4 52H44.8V54.4H42.4V52Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M44.8 52H47.2V54.4H44.8V52Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M47.2 52H49.6V54.4H47.2V52Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M49.6 52H52V54.4H49.6V52Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M52 52H54.4V54.4H52V52Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M28 59.2H30.4V61.6H28V59.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M30.4 59.2H32.8V61.6H30.4V59.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M30.4 56.8H32.8V59.2H30.4V56.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M32.8 54.4H35.2V56.8H32.8V54.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M35.2 54.4H37.6V56.8H35.2V54.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M40 54.4H42.4V56.8H40V54.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M42.4 54.4H44.8V56.8H42.4V54.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M52 54.4H54.4V56.8H52V54.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M54.4 54.4H56.8V56.8H54.4V54.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M32.8 59.2H35.2V61.6H32.8V59.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M35.2 56.8H37.6V59.2H35.2V56.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M37.6 56.8H40V59.2H37.6V56.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M42.4 56.8H44.8V59.2H42.4V56.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M44.8 56.8H47.2V59.2H44.8V56.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M54.4 56.8H56.8V59.2H54.4V56.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M56.8 56.8H59.2V59.2H56.8V56.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M37.6 59.2H40V61.6H37.6V59.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M40 59.2H42.4V61.6H40V59.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M42.4 59.2H44.8V61.6H42.4V59.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M44.8 59.2H47.2V61.6H44.8V59.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M47.2 59.2H49.6V61.6H47.2V59.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M49.6 59.2H52V61.6H49.6V59.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M52 59.2H54.4V61.6H52V59.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M54.4 59.2H56.8V61.6H54.4V59.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M56.8 59.2H59.2V61.6H56.8V59.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M59.2 59.2H61.6V61.6H59.2V59.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M18.4 56.8H20.8V59.2H18.4V56.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M20.8 59.2H23.2V61.6H20.8V59.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M23.2 61.6H25.6V64H23.2V61.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M25.6 61.6H28V64H25.6V61.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M28 61.6H30.4V64H28V61.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M30.4 61.6H32.8V64H30.4V61.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M32.8 61.6H35.2V64H32.8V61.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M37.6 61.6H40V64H37.6V61.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M32.8 20.8H35.2V23.2H32.8V20.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M32.8 30.4H35.2V32.8H32.8V30.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M32.8 28H35.2V30.4H32.8V28Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M35.2 44.8H37.6V47.2H35.2V44.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M30.4 49.6H32.8V52H30.4V49.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M40 61.6H42.4V64H40V61.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M35.2 20.8H37.6V23.2H35.2V20.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M37.6 44.8H40V47.2H37.6V44.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M32.8 49.6H35.2V52H32.8V49.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M42.4 61.6H44.8V64H42.4V61.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M37.6 20.8H40V23.2H37.6V20.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M40 44.8H42.4V47.2H40V44.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M35.2 49.6H37.6V52H35.2V49.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M44.8 61.6H47.2V64H44.8V61.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M40 20.8H42.4V23.2H40V20.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M42.4 44.8H44.8V47.2H42.4V44.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M37.6 49.6H40V52H37.6V49.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M47.2 61.6H49.6V64H47.2V61.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M42.4 20.8H44.8V23.2H42.4V20.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M44.8 44.8H47.2V47.2H44.8V44.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M40 49.6H42.4V52H40V49.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M49.6 61.6H52V64H49.6V61.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M44.8 20.8H47.2V23.2H44.8V20.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M47.2 44.8H49.6V47.2H47.2V44.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M49.6 44.8H52V47.2H49.6V44.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M42.4 49.6H44.8V52H42.4V49.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M52 61.6H54.4V64H52V61.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M47.2 20.8H49.6V23.2H47.2V20.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M49.6 20.8H52V23.2H49.6V20.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M52 23.2H54.4V25.6H52V23.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M52 25.6H54.4V28H52V25.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M52 42.4H54.4V44.8H52V42.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M52 44.8H54.4V47.2H52V44.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M54.4 18.4H56.8V20.8H54.4V18.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M54.4 28H56.8V30.4H54.4V28Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M54.4 30.4H56.8V32.8H54.4V30.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M54.4 32.8H56.8V35.2H54.4V32.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M54.4 35.2H56.8V37.6H54.4V35.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M54.4 37.6H56.8V40H54.4V37.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M44.8 49.6H47.2V52H44.8V49.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M54.4 61.6H56.8V64H54.4V61.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M56.8 61.6H59.2V64H56.8V61.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M59.2 61.6H61.6V64H59.2V61.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M61.6 61.6H64V64H61.6V61.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M61.6 59.2H64V61.6H61.6V59.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M28 32.8H30.4V35.2H28V32.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M28 30.4H30.4V32.8H28V30.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M47.2 49.6H49.6V52H47.2V49.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M49.6 49.6H52V52H49.6V49.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M52 49.6H54.4V52H52V49.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M54.4 49.6H56.8V52H54.4V49.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M25.6 28H28V30.4H25.6V28Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M25.6 25.6H28V28H25.6V25.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M30.4 25.6H32.8V28H30.4V25.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M25.6 44.8H28V47.2H25.6V44.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M25.6 35.2H28V37.6H25.6V35.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M28 37.6H30.4V40H28V37.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M28 35.2H30.4V37.6H28V35.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M59.2 30.4H61.6V32.8H59.2V30.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M59.2 28H61.6V30.4H59.2V28Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M59.2 25.6H61.6V28H59.2V25.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M56.8 23.2H59.2V25.6H56.8V23.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M56.8 20.8H59.2V23.2H56.8V20.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M52 16H54.4V18.4H52V16Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M49.6 16H52V18.4H49.6V16Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M47.2 16H49.6V18.4H47.2V16Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M44.8 16H47.2V18.4H44.8V16Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M42.4 16H44.8V18.4H42.4V16Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M40 16H42.4V18.4H40V16Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M37.6 16H40V18.4H37.6V16Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M35.2 16H37.6V18.4H35.2V16Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M32.8 16H35.2V18.4H32.8V16Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M30.4 16H32.8V18.4H30.4V16Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M16 28H18.4V30.4H16V28Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M18.4 28H20.8V30.4H18.4V28Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M20.8 28H23.2V30.4H20.8V28Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M23.2 28H25.6V30.4H23.2V28Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M16 25.6H18.4V28H16V25.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M18.4 25.6H20.8V28H18.4V25.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M20.8 25.6H23.2V28H20.8V25.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M23.2 25.6H25.6V28H23.2V25.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M25.6 40H28V42.4H25.6V40Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M25.6 30.4H28V32.8H25.6V30.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M59.2 32.8H61.6V35.2H59.2V32.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M59.2 35.2H61.6V37.6H59.2V35.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M25.6 42.4H28V44.8H25.6V42.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M25.6 32.8H28V35.2H25.6V32.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M59.2 37.6H61.6V40H59.2V37.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M30.4 44.8H32.8V47.2H30.4V44.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M59.2 40H61.6V42.4H59.2V40Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M25.6 47.2H28V49.6H25.6V47.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M25.6 37.6H28V40H25.6V37.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M54.4 40H56.8V42.4H54.4V40Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M56.8 44.8H59.2V47.2H56.8V44.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M56.8 47.2H59.2V49.6H56.8V47.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M56.8 54.4H59.2V56.8H56.8V54.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M54.4 52H56.8V54.4H54.4V52Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M59.2 42.4H61.6V44.8H59.2V42.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M59.2 56.8H61.6V59.2H59.2V56.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M35.2 61.6H37.6V64H35.2V61.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M30.4 20.8H32.8V23.2H30.4V20.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M20.8 20.8H23.2V23.2H20.8V20.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M30.4 23.2H32.8V25.6H30.4V23.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M30.4 42.4H32.8V44.8H30.4V42.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M23.2 18.4H25.6V20.8H23.2V18.4Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M42.4 38.4399H44.8V39.9999H42.4V38.4399Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M32.8 32.8H35.2V35.2H32.8V32.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M32.8 35.2H35.2V37.6H32.8V35.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M32.8 37.6H35.2V40H32.8V37.6Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M32.8 40H35.2V42.4H32.8V40Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M23.2 23.2H25.6V25.6H23.2V23.2Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M32.8 44.8H35.2V47.2H32.8V44.8Z",
                fill: "#E3E4E8"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RaydiumIcon",
    ()=>RaydiumIcon
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const RaydiumIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 256 256",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M215.666 98.2043V181.518L125.867 235.011L36.0173 181.518V74.4815L125.867 20.9373L194.881 62.0774L205.299 55.8754L125.867 8.5332L25.6 68.2795V187.72L125.867 247.467L226.133 187.72V92.0022L215.666 98.2043Z",
                fill: "url(#paint0_linear_39266_8147)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M100.725 181.57H85.6999V129.576H135.783C140.522 129.522 145.049 127.545 148.385 124.072C151.722 120.6 153.6 115.912 153.613 111.022C153.64 108.604 153.187 106.205 152.283 103.974C151.379 101.743 150.042 99.727 148.354 98.0492C146.721 96.3173 144.766 94.9439 142.605 94.0113C140.445 93.0788 138.125 92.6063 135.783 92.6224H85.6999V76.8072H135.833C144.61 76.8615 153.013 80.4836 159.219 86.8884C165.426 93.2931 168.936 101.964 168.988 111.022C169.042 117.955 166.993 124.732 163.129 130.403C159.572 135.829 154.559 140.068 148.705 142.6C142.907 144.498 136.856 145.439 130.775 145.391H100.725V181.57Z",
                fill: "url(#paint1_linear_39266_8147)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M168.638 180.278H151.109L137.586 155.935C142.936 155.597 148.213 154.484 153.262 152.627L168.638 180.278Z",
                fill: "url(#paint2_linear_39266_8147)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M205.198 80.8902L215.566 86.8339L225.933 80.8902V68.3311L215.566 62.1291L205.198 68.3311V80.8902Z",
                fill: "url(#paint3_linear_39266_8147)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                        id: "paint0_linear_39266_8147",
                        x1: "225.956",
                        y1: "68.3452",
                        x2: "11.5331",
                        y2: "151.437",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                stopColor: "#FF2FC8"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                offset: "0.489658",
                                stopColor: "#FFB12B"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#D3D839"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                        id: "paint1_linear_39266_8147",
                        x1: "225.956",
                        y1: "68.3452",
                        x2: "11.5331",
                        y2: "151.437",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                stopColor: "#FF2FC8"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                offset: "0.489658",
                                stopColor: "#FFB12B"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#D3D839"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                        id: "paint2_linear_39266_8147",
                        x1: "225.956",
                        y1: "68.3452",
                        x2: "11.5331",
                        y2: "151.437",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                stopColor: "#FF2FC8"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                offset: "0.489658",
                                stopColor: "#FFB12B"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#D3D839"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                        id: "paint3_linear_39266_8147",
                        x1: "225.956",
                        y1: "68.3452",
                        x2: "11.5331",
                        y2: "151.437",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                stopColor: "#FF2FC8"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                offset: "0.489658",
                                stopColor: "#FFB12B"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#D3D839"
                            }, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/scaffolds/fun-launch/src/icons/TimefunIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimefunIcon",
    ()=>TimefunIcon
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const TimefunIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 12 12",
        width: "1em",
        height: "1em",
        fill: "#FF9FC6",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.586 6C11.586 6.73357 11.4415 7.45995 11.1608 8.13767C10.8801 8.8154 10.4686 9.43119 9.9499 9.9499C9.43119 10.4686 8.8154 10.8801 8.13767 11.1608C7.45995 11.4415 6.73357 11.586 6 11.586C5.26644 11.586 4.54006 11.4415 3.86233 11.1608C3.18461 10.8801 2.56881 10.4686 2.0501 9.9499C1.53139 9.43119 1.11993 8.8154 0.83921 8.13767C0.558488 7.45995 0.414001 6.73357 0.414001 6C0.414001 4.5185 1.00252 3.09768 2.0501 2.0501C3.09768 1.00252 4.5185 0.414001 6 0.414001C7.4815 0.414001 8.90232 1.00252 9.9499 2.0501C10.9975 3.09768 11.586 4.5185 11.586 6ZM6.546 6.304L8.316 8.074C8.586 8.344 8.396 8.806 8.013 8.806H3.988C3.90325 8.80586 3.82045 8.78063 3.75003 8.73348C3.67961 8.68633 3.62473 8.61938 3.59231 8.54108C3.5599 8.46277 3.55141 8.37663 3.5679 8.2935C3.5844 8.21037 3.62515 8.134 3.685 8.074L5.455 6.304C5.535 6.22345 5.57989 6.11453 5.57989 6.001C5.57989 5.88747 5.535 5.77855 5.455 5.698L3.685 3.928C3.62549 3.86796 3.58504 3.79167 3.56874 3.70871C3.55244 3.62575 3.56101 3.53983 3.59339 3.46173C3.62576 3.38363 3.68048 3.31684 3.75069 3.26974C3.8209 3.22264 3.90346 3.19733 3.988 3.197H8.013C8.395 3.197 8.586 3.659 8.316 3.929L6.546 5.698C6.466 5.77855 6.42111 5.88747 6.42111 6.001C6.42111 6.11453 6.466 6.22345 6.546 6.304Z"
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/icons/TimefunIcon.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/TimefunIcon.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/scaffolds/fun-launch/src/icons/VirtualsIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VirtualsIcon",
    ()=>VirtualsIcon
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const VirtualsIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 311 200",
        width: "1em",
        height: "1em",
        fill: "url(#paint0_linear_11429_17312)",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M211.485 107.363c24.565-8.572 47.715-23.197 65.409-39.077l.013.027a3.805 3.805 0 0 0 .434-5.082 3.833 3.833 0 0 0-5.027-.966c-17.749 10.611-37.337 19.012-57.417 24.14.6-7.637.473-15.321-.514-22.963-2.27-16.967-8.032-33.921-20.013-46.834C181.1 1.93 159.314-3.557 140.509 2.317c-22.592 6.717-41.423 27.07-42.148 51.357-.913 31.98 28.878 58.047 59.193 60.978 3.536.387 7.104.575 10.691.58-5.59 12.216-12.844 23.886-20.605 34.692-23.835-39.316-59.566-71.518-102.038-89.131a176.62 176.62 0 0 0-30.638-9.782c-3.573-.736-6.971-1.392-10.745-1.806a3.866 3.866 0 0 0-2.586.685 3.827 3.827 0 0 0-1.23 4.848 3.849 3.849 0 0 0 1.949 1.826 256.547 256.547 0 0 1 64.471 45.389 245.575 245.575 0 0 1 56.991 83.846c5.708 13.609 23.613 18.587 35.594 9.836a30.546 30.546 0 0 0 5.01-4.644 221.118 221.118 0 0 0 28.206-38.056c8.182-13.953 14.922-29.452 18.861-45.572Zm-53.156 62.331.004.008.309.629a13.415 13.415 0 0 0-.313-.637Zm18.288-78.451c1.875-8.013 2.807-16.16 2.508-24.362-.792-14.72-6.46-35.513-23.962-35.835-15.07-.174-28.931 14.064-24.62 29.185 6.382 22.068 25.44 30.116 46.074 31.012Z"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/VirtualsIcon.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                    id: "paint0_linear_11429_17312",
                    x1: "0",
                    y1: "0",
                    x2: "310",
                    y2: "200",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            stopColor: "#44BCC3"
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/icons/VirtualsIcon.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: "1",
                            stopColor: "#236D66"
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/icons/VirtualsIcon.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/VirtualsIcon.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/VirtualsIcon.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/VirtualsIcon.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XCombinatorIcon",
    ()=>XCombinatorIcon
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const XCombinatorIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M0 0 C337.92 0 675.84 0 1024 0 C1024 337.92 1024 675.84 1024 1024 C686.08 1024 348.16 1024 0 1024 C0 686.08 0 348.16 0 0 Z ",
                fill: "#070707",
                transform: "translate(0,0)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M0 0 C1.19012695 0.23106445 2.38025391 0.46212891 3.60644531 0.70019531 C47.10413242 9.35618061 85.09448014 26.2901429 119 55 C119.92554688 55.78117187 120.85109375 56.56234375 121.8046875 57.3671875 C138.22024427 71.68490954 151.27971416 88.8973421 161.82519531 107.88525391 C162.59557389 109.27199938 163.37333581 110.65467437 164.15917969 112.03271484 C175.24128614 131.48072519 182.26323929 152.4358263 188 174 C188.2592627 174.96897217 188.51852539 175.93794434 188.78564453 176.9362793 C190.63273291 184.0535485 191.9923023 191.17464234 193.125 198.4375 C193.29386719 199.46681641 193.46273437 200.49613281 193.63671875 201.55664062 C195.48377637 213.19892111 196.15571936 224.78357994 196.16796875 236.5625 C196.17129715 237.71508301 196.17462555 238.86766602 196.17805481 240.05517578 C196.18308056 242.47867438 196.1854645 244.90217979 196.18530273 247.32568359 C196.18747808 250.96333725 196.20565072 254.60068145 196.22460938 258.23828125 C196.2594068 272.27706997 195.75502864 286.06698233 194 300 C193.91076263 300.7113208 193.82152527 301.4226416 193.72958374 302.15551758 C193.14439873 306.69948089 192.46716977 311.22519433 191.75 315.75 C191.64461914 316.42089661 191.53923828 317.09179321 191.43066406 317.78302002 C189.47684287 330.1244881 186.87594852 342.25152488 183.69677734 354.33691406 C183.07136851 356.72722927 182.47781082 359.12258353 181.89453125 361.5234375 C169.21137584 412.11087652 142.75199054 463.29604021 109.47216797 503.22363281 C107.43035471 505.68735308 105.43859028 508.19066041 103.4375 510.6875 C95.57680192 520.25395535 86.97908312 529.1058927 78.25 537.875 C77.55326172 538.57641113 76.85652344 539.27782227 76.13867188 540.00048828 C46.71976595 569.32876725 8.42281304 592.00087654 -32 602 C-32.64904297 602.16371094 -33.29808594 602.32742188 -33.96679688 602.49609375 C-63.49555901 609.63491536 -92.23645945 602.70081713 -120.5456543 594.03540039 C-126.7352036 592.1562941 -132.54038654 590.45744044 -139 590 C-139.67538818 589.95166016 -140.35077637 589.90332031 -141.04663086 589.85351562 C-154.38794532 589.06668524 -166.21442532 591.39392387 -179 595 C-180.02528809 595.28891113 -181.05057617 595.57782227 -182.10693359 595.87548828 C-184.25934959 596.48407092 -186.41144756 597.09377943 -188.56323242 597.70458984 C-193.70236026 599.16033497 -198.84616929 600.5971551 -204 602 C-205.09441406 602.29898193 -205.09441406 602.29898193 -206.2109375 602.60400391 C-245.75194642 612.95572888 -287.86735123 597.62604148 -322.02978516 578.15917969 C-330.7706468 573.01647695 -338.98824976 567.10236259 -347.125 561.0625 C-347.72127197 560.62123779 -348.31754395 560.17997559 -348.93188477 559.7253418 C-360.53553501 550.97024107 -371.07036014 541.25746907 -381.30371094 530.95703125 C-383.25494721 528.99502548 -385.21672208 527.0440133 -387.1796875 525.09375 C-394.24448147 518.03731502 -400.86887052 510.89355674 -407 503 C-407.61133789 502.23204102 -408.22267578 501.46408203 -408.85253906 500.67285156 C-416.25676542 491.36759518 -423.51810225 481.97781639 -430 472 C-430.4021875 471.38350586 -430.804375 470.76701172 -431.21875 470.13183594 C-482.67075877 390.48318517 -504.34627331 290.76489035 -485.73828125 181.48046875 C-483.18895271 170.10348263 -479.81812016 159.01053442 -476 148 C-475.75314453 147.28569824 -475.50628906 146.57139648 -475.25195312 145.83544922 C-473.70327996 141.46437531 -471.91213968 137.22144551 -470 133 C-469.59297852 132.09459473 -469.18595703 131.18918945 -468.76660156 130.25634766 C-457.12334715 104.59928209 -442.56183884 81.41383531 -423 61 C-422.13632812 60.07316406 -421.27265625 59.14632812 -420.3828125 58.19140625 C-408.0437509 45.19977762 -393.41624167 35.01062302 -378 26 C-377.41637695 25.65130859 -376.83275391 25.30261719 -376.23144531 24.94335938 C-330.74706751 -2.01225489 -273.45562086 -6.31705295 -222.6875 4.4375 C-221.77532715 4.63045654 -220.8631543 4.82341309 -219.92333984 5.0222168 C-213.40257112 6.48941967 -207.23076261 8.59145103 -201 11 C-196.3922641 21.06673148 -193.63648762 31.27454396 -191 42 C-191.33 42.66 -191.66 43.32 -192 44 C-192.74999268 43.64603149 -192.74999268 43.64603149 -193.51513672 43.28491211 C-213.16099201 34.14003902 -234.01088609 26.07059307 -256 28 C-256.33 29.32 -256.66 30.64 -257 32 C-256.37246826 32.20044922 -255.74493652 32.40089844 -255.09838867 32.60742188 C-230.75914527 40.4286124 -207.83906787 50.33041066 -185.08203125 61.99609375 C-172.59581252 68.21593687 -158.00570299 71.40044988 -144.46826172 66.98095703 C-140.52593023 65.41416297 -137.09834782 63.25887684 -133.5625 60.9375 C-116.47339917 50.17517757 -98.86798859 42.18670478 -80 35 C-82.31 34.67 -84.62 34.34 -87 34 C-87.33 33.67 -87.66 33.34 -88 33 C-100.81444147 32.21006868 -113.26186289 34.76887368 -125 40 C-126.0828125 40.48210937 -127.165625 40.96421875 -128.28125 41.4609375 C-135.76561883 44.85592926 -143.06043515 48.53217275 -150.25219727 52.51049805 C-154.79521458 55 -154.79521458 55 -157 55 C-157.40960244 50.92902186 -157.81850468 46.85797401 -158.22680664 42.78686523 C-158.36529424 41.40696392 -158.50396078 40.02708054 -158.64282227 38.6472168 C-159.46911354 30.43501512 -160.27381918 22.22175219 -161 14 C-114.78401758 3.10323029 -114.78401758 3.10323029 -96 0 C-95.0527002 -0.16226074 -94.10540039 -0.32452148 -93.12939453 -0.49169922 C-63.39611282 -5.38413426 -29.58597448 -5.86292649 0 0 Z ",
                fill: "#D3402C",
                transform: "translate(659,256)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M0 0 C4.44282283 3.03253228 8.25942571 6.73526987 12.12890625 10.453125 C12.84820312 11.10925781 13.5675 11.76539062 14.30859375 12.44140625 C25.9556231 23.42715737 34.93631831 37.08164746 43.10791016 50.75341797 C43.98713572 52.21711198 44.88982077 53.66666783 45.796875 55.11328125 C54.68860083 69.39248707 61.33358172 85.10566754 68.12890625 100.453125 C68.60110596 101.50419434 69.07330566 102.55526367 69.55981445 103.63818359 C73.62884285 112.8683663 76.92476426 122.25043097 80.06640625 131.828125 C80.45517944 133.00417297 80.45517944 133.00417297 80.85180664 134.20397949 C84.99302524 146.73386932 88.95787204 159.30385856 92.45898438 172.02978516 C93.06508685 174.22226808 93.695681 176.40600539 94.33203125 178.58984375 C98.72275557 194.53079437 101.01681952 211.91162969 100.12890625 228.453125 C101.23105469 227.81246094 102.33320313 227.17179688 103.46875 226.51171875 C117.42164415 218.51338267 131.68095378 212.03455949 147.12890625 207.453125 C147.88042969 207.22753906 148.63195312 207.00195312 149.40625 206.76953125 C155.92688321 205.05978113 162.4288196 205.26672383 169.12890625 205.453125 C169.45890625 205.783125 169.78890625 206.113125 170.12890625 206.453125 C173.09890625 206.783125 176.06890625 207.113125 179.12890625 207.453125 C176.53837843 210.04365282 174.05690193 210.7669899 170.62890625 212.078125 C152.97798804 218.99331622 135.94253145 226.8482082 120.12890625 237.390625 C109.12821167 244.43040383 98.2388358 244.31965306 85.7734375 241.765625 C78.36177727 239.70324998 71.6819147 236.36674257 64.87890625 232.859375 C44.12747205 222.23147033 22.60106917 212.79035833 0.12890625 206.453125 C-0.20109375 205.133125 -0.53109375 203.813125 -0.87109375 202.453125 C2.21074066 199.37129059 6.47575918 200.15834555 10.6862793 200.11914062 C27.39020035 200.34951617 43.00239603 206.94210364 58.12890625 213.453125 C58.83063965 213.7531543 59.53237305 214.05318359 60.25537109 214.36230469 C61.88067031 215.05740633 63.50491951 215.75496248 65.12890625 216.453125 C64.36419263 213.30577252 63.59098848 210.160562 62.81640625 207.015625 C62.60306641 206.13712891 62.38972656 205.25863281 62.16992188 204.35351562 C60.91964879 199.29644091 59.50842123 194.35921747 57.78833008 189.44116211 C57.12890625 187.453125 57.12890625 187.453125 56.65405273 185.453125 C56.08449739 183.28399559 55.27436317 181.39751783 54.33203125 179.36328125 C52.43019545 175.16981897 50.69147272 170.92924846 48.98461914 166.65332031 C44.84373142 156.307044 40.37269267 146.2843196 35.12890625 136.453125 C34.75685059 135.74768555 34.38479492 135.04224609 34.00146484 134.31542969 C24.95616688 117.24868771 14.42998733 101.3452942 2.12890625 86.453125 C1.43450439 85.61225342 1.43450439 85.61225342 0.72607422 84.75439453 C-6.6520637 75.86240033 -14.13720028 67.06025519 -22.41870117 58.99291992 C-30.69870028 50.91027724 -38.62552787 42.81356211 -39.24609375 30.703125 C-39.01032946 20.87470136 -33.79446076 11.75877698 -27.2109375 4.6640625 C-19.46042157 -2.50384062 -9.55040797 -5.30785883 0 0 Z ",
                fill: "#522612",
                transform: "translate(401.87109375,82.546875)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M0 0 C2.64088506 1.89487233 5.21455289 3.84558657 7.765625 5.859375 C8.56742188 6.48199219 9.36921875 7.10460937 10.1953125 7.74609375 C12.74456999 9.75373583 15.25672706 11.80155678 17.765625 13.859375 C18.70535156 14.6121875 19.64507813 15.365 20.61328125 16.140625 C45.25274442 36.32567195 63.17314372 59.11984713 76.765625 87.859375 C77.27738281 88.90222656 77.78914062 89.94507813 78.31640625 91.01953125 C82.84608653 100.44980855 86.10464005 110.05974312 88.203125 120.30859375 C88.80431902 123.03484163 89.51399457 125.72584662 90.22729492 128.42456055 C93.78602129 142.04132898 95.28246664 155.8082258 95.765625 169.859375 C95.79962402 170.77025879 95.83362305 171.68114258 95.86865234 172.61962891 C96.29244056 185.73985406 95.73879996 198.58896802 94.078125 211.609375 C93.92964111 212.82125488 93.78115723 214.03313477 93.62817383 215.28173828 C92.18808484 225.55601619 89.66747307 236.15943176 83.765625 244.859375 C80.80897981 246.3376976 78.02332763 245.91970283 74.765625 245.859375 C73.17774829 243.03956157 72.5122905 240.99331481 72.47851562 237.76293945 C72.46501068 236.96212952 72.45150574 236.16131958 72.43759155 235.33624268 C72.43240509 234.47375916 72.42721863 233.61127563 72.421875 232.72265625 C72.3933969 230.85880526 72.36491363 228.99495435 72.33642578 227.13110352 C72.32516663 226.15746857 72.31390747 225.18383362 72.30230713 224.18069458 C72.09297881 207.01072179 71.69698173 189.93562804 69.765625 172.859375 C69.62302246 171.57208496 69.62302246 171.57208496 69.47753906 170.25878906 C64.67683344 128.68940042 52.61710174 87.22135627 27.04541016 53.54492188 C26.18420357 52.41066581 25.32980646 51.27121062 24.48193359 50.12695312 C-2.55618364 13.64227293 -40.4494491 -5.85091464 -83.34936523 -17.5715332 C-85.234375 -18.140625 -85.234375 -18.140625 -87.234375 -19.140625 C-86.904375 -20.130625 -86.574375 -21.120625 -86.234375 -22.140625 C-58.91992082 -32.07315379 -22.46305204 -14.86685087 0 0 Z ",
                fill: "#4B2210",
                transform: "translate(734.234375,305.140625)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M0 0 C1.60294922 0.01353516 1.60294922 0.01353516 3.23828125 0.02734375 C5.6875 0.0625 5.6875 0.0625 10.6875 4.0625 C10.6875 6.7025 10.6875 9.3425 10.6875 12.0625 C4.11133416 18.42590754 -3.2309852 22.83508224 -11.28515625 27.109375 C-22.43157413 33.11737329 -31.44712298 42.66803137 -40.51660156 51.35009766 C-42.00675212 52.77096715 -43.51307744 54.17485057 -45.0234375 55.57421875 C-50.63135469 60.89682086 -54.96988849 66.88823624 -59.18310547 73.33886719 C-60.30564187 75.05203342 -61.44970129 76.74910248 -62.59765625 78.4453125 C-67.5621771 85.87193005 -71.71584948 93.51830093 -75.5859375 101.56640625 C-77.3125 105.0625 -77.3125 105.0625 -78.8515625 107.53515625 C-80.77598038 110.86429627 -82.01643623 114.32607231 -83.3125 117.9375 C-84.69007227 121.73299859 -86.06409503 125.49653186 -87.6875 129.1953125 C-92.42870633 140.21319427 -95.54184336 151.31712316 -98.05273438 163.00512695 C-98.56614721 165.39195567 -99.09450473 167.77511892 -99.625 170.15820312 C-101.22806672 177.43960885 -102.65784143 184.62463216 -103.3125 192.0625 C-103.59577552 193.60980325 -103.90237899 195.15337093 -104.25 196.6875 C-105.17281541 201.02337533 -105.7295857 205.34816239 -106.25 209.75 C-107.75840093 221.50840093 -107.75840093 221.50840093 -112.3125 226.0625 C-113.9625 226.0625 -115.6125 226.0625 -117.3125 226.0625 C-123.13165308 219.66143162 -123.61422168 213.00791165 -123.54296875 204.75390625 C-123.54251053 203.86952377 -123.54205231 202.9851413 -123.5415802 202.07395935 C-123.53857025 200.20562394 -123.5307218 198.33729075 -123.51831055 196.46899414 C-123.50025613 193.66478161 -123.49779996 190.8609048 -123.49804688 188.05664062 C-123.44281269 159.21609754 -123.44281269 159.21609754 -120.2578125 146.80078125 C-119.50509456 143.82412396 -118.82316482 140.85639345 -118.1796875 137.85546875 C-115.0156332 123.17299116 -110.88853278 109.62334598 -104.3125 96.0625 C-104.0144043 95.44584473 -103.71630859 94.82918945 -103.40917969 94.19384766 C-99.39674535 85.92695278 -95.27916601 77.80649562 -90.3125 70.0625 C-89.70792969 69.10988281 -89.10335937 68.15726562 -88.48046875 67.17578125 C-77.12978277 49.69079949 -62.46584934 32.1153269 -45.3125 20.0625 C-44.52875 19.45019531 -43.745 18.83789062 -42.9375 18.20703125 C-35.27885493 12.31488914 -27.05576033 8.08231154 -18.3125 4.0625 C-17.38920898 3.63638428 -17.38920898 3.63638428 -16.44726562 3.20166016 C-10.7831858 0.67119422 -6.1707803 -0.06781077 0 0 Z ",
                fill: "#F6C7AD",
                transform: "translate(338.3125,302.9375)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M0 0 C2.31 0.33 4.62 0.66 7 1 C7.35191406 1.6290625 7.70382812 2.258125 8.06640625 2.90625 C14.38696319 13.86408241 20.52896152 20.87909109 32.5625 25.3125 C41.71577624 27.14315525 49.24816846 25.51947734 57.234375 20.6328125 C62.69750072 16.37665642 65.54050269 10.88442596 68.5546875 4.79296875 C70 2 70 2 72 0 C73.98 0 75.96 0 78 0 C82.06504065 4.06504065 82.06504065 4.06504065 82.25 8.3125 C82.2123596 17.18308689 79.18923849 24.80425935 73.05078125 31.21875 C65.09183767 38.13166099 55.5194517 42.37676498 45 43 C44.18917969 43.05285156 43.37835938 43.10570312 42.54296875 43.16015625 C29.35659284 43.60420698 17.63052608 40.13593102 6.75 32.8125 C-0.21559931 25.68859162 -4.05488702 17.49109936 -4.125 7.5 C-4 4 -4 4 0 0 Z ",
                fill: "#39190B",
                transform: "translate(463,524)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M0 0 C5.92574183 2.73495777 8.44623715 7.22096694 11 13 C14.00182409 21.62549453 13.05931612 33.93352861 9.140625 42.046875 C6.68356686 46.25416634 4.58168352 49.18975441 0 51 C-2.796875 51.1953125 -2.796875 51.1953125 -5.75 51.125 C-7.22726562 51.09792969 -7.22726562 51.09792969 -8.734375 51.0703125 C-12.38158586 50.9571232 -14.59445436 48.54671616 -17 46 C-22.88213038 36.36762248 -24.28222531 27.41092747 -22.57421875 16.20703125 C-20.83857363 9.33898768 -17.12524293 3.59584425 -11.05078125 -0.2265625 C-7.32004447 -1.63358323 -3.80552537 -0.88839791 0 0 Z ",
                fill: "#3B1B0C",
                transform: "translate(604,479)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M0 0 C0 0.66 0 1.32 0 2 C-1.23234375 1.855625 -2.4646875 1.71125 -3.734375 1.5625 C-21.04397394 -0.86548689 -21.04397394 -0.86548689 -38 2 C-38.33 2.66 -38.66 3.32 -39 4 C-38.01 4.495 -38.01 4.495 -37 5 C-38.25433838 4.98952637 -39.50867676 4.97905273 -40.80102539 4.96826172 C-45.52560488 4.93162622 -50.25017225 4.90894367 -54.97485352 4.89013672 C-57.00645063 4.88017712 -59.03803378 4.86660456 -61.06958008 4.84912109 C-80.27135425 4.36754468 -80.27135425 4.36754468 -99 8 C-101.57265818 8.07029121 -104.11641431 8.09370832 -106.6875 8.0625 C-107.38939453 8.05798828 -108.09128906 8.05347656 -108.81445312 8.04882812 C-113.98635488 8.01364512 -113.98635488 8.01364512 -115 7 C-128.04344849 6.19595181 -139.98116551 8.99215229 -152 14 C-152.66 13.67 -153.32 13.34 -154 13 C-144.42279785 7.50636343 -134.94850567 3.21234533 -124.4284668 -0.13842773 C-122.29832678 -0.81701509 -120.17536187 -1.51509982 -118.05273438 -2.21679688 C-76.9598916 -15.69133394 -40.69443045 -10.60233702 0 0 Z ",
                fill: "#AD291B",
                transform: "translate(686,282)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M0 0 C5.84556346 2.86547228 9.45783412 7.64679759 11.6171875 13.7421875 C13.44862191 24.54391291 12.90901262 35.54085095 6.796875 44.828125 C4.32433679 48.05181406 1.72902615 50.40184594 -2 52 C-6.20293133 52.53491853 -8.39808674 52.30685774 -12.1875 50.375 C-19.19309631 44.45916312 -21.53043 37.03256539 -22.359375 28.1484375 C-22.75407483 19.90185537 -22.17108946 12.77901529 -17 6 C-11.60523662 0.36212497 -7.88847645 -1.85784679 0 0 Z ",
                fill: "#3B1B0C",
                transform: "translate(409,479)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M0 0 C0 0.66 0 1.32 0 2 C-4.07294955 1.56361255 -7.75702405 1.06737989 -11.71875 -0.03125 C-16.18572708 -1.1771902 -20.41175433 -1.22837469 -25 -1.125 C-25.77472656 -1.11597656 -26.54945313 -1.10695313 -27.34765625 -1.09765625 C-29.23190843 -1.07439388 -31.11599832 -1.0385364 -33 -1 C-33.33 0.65 -33.66 2.3 -34 4 C-35.07314453 3.81824219 -35.07314453 3.81824219 -36.16796875 3.6328125 C-37.66263672 3.38144531 -37.66263672 3.38144531 -39.1875 3.125 C-40.15042969 2.96257812 -41.11335938 2.80015625 -42.10546875 2.6328125 C-43.39066406 2.42398437 -44.67585938 2.21515625 -46 2 C-47.30191284 1.75515869 -47.30191284 1.75515869 -48.63012695 1.50537109 C-58.67574584 -0.25780628 -68.64418883 -0.44142541 -78.8125 -0.625 C-80.58400142 -0.66328169 -82.35548626 -0.70233889 -84.12695312 -0.7421875 C-88.41783037 -0.83705004 -92.708794 -0.92147313 -97 -1 C-96.67 -1.66 -96.34 -2.32 -96 -3 C-92.85673222 -3.82264326 -89.70999379 -4.63119072 -86.5625 -5.4375 C-85.68400391 -5.66759766 -84.80550781 -5.89769531 -83.90039062 -6.13476562 C-57.7908471 -12.78258298 -24.9427202 -10.64916897 0 0 Z ",
                fill: "#AA271A",
                transform: "translate(436,285)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M0 0 C7.03482474 -0.23668569 13.1834265 0.2120463 20 2 C20 2.33 20 2.66 20 3 C11.42 3 2.84 3 -6 3 C-6 2.67 -6 2.34 -6 2 C-4.02 2 -2.04 2 0 2 C0 1.34 0 0.68 0 0 Z ",
                fill: "#B52C1D",
                transform: "translate(590,858)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M0 0 C6.625 0.75 6.625 0.75 10 3 C5.98195309 3.84098656 2.98196457 4.05404945 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z ",
                fill: "#B42C1E",
                transform: "translate(568,855)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M0 0 C2.64 0.33 5.28 0.66 8 1 C7.34 1.66 6.68 2.32 6 3 C2.37 3 -1.26 3 -5 3 C-5 2.67 -5 2.34 -5 2 C-3.35 2 -1.7 2 0 2 C0 1.34 0 0.68 0 0 Z ",
                fill: "#B22C1D",
                transform: "translate(416,858)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M0 0 C0.66 0 1.32 0 2 0 C2.92470553 4.71599818 3.22923777 7.67265609 1 12 C0.67 12 0.34 12 0 12 C0 8.04 0 4.08 0 0 Z ",
                fill: "#B52E1E",
                transform: "translate(829,463)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M0 0 C0.89203125 0.19464844 1.7840625 0.38929688 2.703125 0.58984375 C3.37859375 0.74582031 4.0540625 0.90179687 4.75 1.0625 C4.75 1.3925 4.75 1.7225 4.75 2.0625 C3.16705218 2.11687607 1.58355744 2.15546271 0 2.1875 C-0.88171875 2.21070313 -1.7634375 2.23390625 -2.671875 2.2578125 C-5.3635858 2.05389502 -6.94904974 1.42801721 -9.25 0.0625 C-5.84598052 -1.07482426 -3.47543336 -0.77739957 0 0 Z ",
                fill: "#B72D1D",
                transform: "translate(434.25,858.9375)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M0 0 C0.99 0.33 1.98 0.66 3 1 C1 4 1 4 -6 6 C-6 5.01 -6 4.02 -6 3 C-4.02 2.67 -2.04 2.34 0 2 C0 1.34 0 0.68 0 0 Z ",
                fill: "#B82D1E",
                transform: "translate(710,813)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M0 0 C0.25 7.5 0.25 7.5 -2 12 C-2.33 8.37 -2.66 4.74 -3 1 C-1 0 -1 0 0 0 Z ",
                fill: "#BB2C1F",
                transform: "translate(855,480)"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/info.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "LAUNCHPAD_INFOS",
    ()=>LAUNCHPAD_INFOS,
    "LaunchpadInfo",
    ()=>LaunchpadInfo,
    "getLaunchpadInfo",
    ()=>getLaunchpadInfo
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/types.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$PumpfunIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/PumpfunIcon.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$DaosfunIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/DaosfunIcon.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$BelieveIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/BelieveIcon.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$BoopIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/BoopIcon.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$CookmemeIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/CookmemeIcon.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$DBCIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/DBCIcon.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$DealrIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/DealrIcon.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$DialectIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/DialectIcon.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$GoFundMemeIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/GoFundMemeIcon.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$LetsbonkfunIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/LetsbonkfunIcon.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$MentatfunIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/MentatfunIcon.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$RaydiumIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/RaydiumIcon.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$TimefunIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/TimefunIcon.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$VirtualsIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/VirtualsIcon.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$XCombinatorIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/XCombinatorIcon.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
;
;
;
;
;
;
const LaunchpadInfo = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Launchpad"].PUMPFUN]: {
        label: 'Pump',
        href: (id)=>`https://pump.fun/coin/${id}`,
        icon: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$PumpfunIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["PumpfunIcon"], {
                "aria-label": "Pump",
                ...props
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/info.tsx",
                lineNumber: 41,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
        color: '#60CD88',
        borderColor: '#60CD88',
        bondingCurveSupported: true
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Launchpad"].VIRTUALS]: {
        label: 'Virtuals',
        href: (id)=>`https://app.virtuals.io/prototypes/${id}`,
        icon: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$VirtualsIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["VirtualsIcon"], {
                "aria-label": "Virtuals",
                ...props
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/info.tsx",
                lineNumber: 49,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
        color: '#236D66',
        borderColor: '#236D66',
        bondingCurveSupported: true
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Launchpad"].DAOSFUN]: {
        label: 'DaosFun',
        href: (id)=>`https://daos.fun/${id}`,
        icon: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$DaosfunIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["DaosfunIcon"], {
                "aria-label": "DaosFun",
                ...props
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/info.tsx",
                lineNumber: 57,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
        color: 'white',
        borderColor: 'white'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Launchpad"].TIMEFUN]: {
        label: 'TimeFun',
        href: (symbol)=>`https://time.fun/${symbol}`,
        icon: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$TimefunIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TimefunIcon"], {
                "aria-label": "TimeFun",
                ...props
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/info.tsx",
                lineNumber: 64,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
        color: '#FF9FC6',
        borderColor: '#FF9FC6'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Launchpad"].GOFUNDMEME]: {
        label: 'GofundMeme',
        href: (id)=>`https://gofundmeme.com/coin/${id}`,
        icon: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$GoFundMemeIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["GoFundMemeIcon"], {
                "aria-label": "GofundMeme",
                ...props
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/info.tsx",
                lineNumber: 71,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
        color: 'white',
        borderColor: 'white'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Launchpad"].DEALR]: {
        label: 'Dealr',
        href: ()=>`https://dealr.fun`,
        icon: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$DealrIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["DealrIcon"], {
                "aria-label": "Dealr",
                ...props
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/info.tsx",
                lineNumber: 78,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
        color: 'white',
        borderColor: 'white',
        bondingCurveSupported: true
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Launchpad"].DIALECT]: {
        label: 'Dialect',
        href: ()=>`https://dialect.to`,
        icon: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$DialectIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["DialectIcon"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-full', className),
                "aria-label": "Dialect",
                ...props
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/info.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        color: 'white',
        borderColor: 'white',
        bondingCurveSupported: true
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Launchpad"].DBC]: {
        label: 'Meteora DBC',
        icon: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$DBCIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["DBCIcon"], {
                "aria-label": "Meteora DBC",
                ...props
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/info.tsx",
                lineNumber: 95,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
        color: '#F84C00',
        borderColor: '#F84C00',
        bondingCurveSupported: true
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Launchpad"].LETSBONKFUN]: {
        label: 'LetsbonkFun',
        href: (id)=>`https://letsbonk.fun/token/${id}`,
        icon: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$LetsbonkfunIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["LetsbonkfunIcon"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-full', className),
                "aria-label": "LetsbonkFun",
                ...props
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/info.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        color: '#FF5E1E',
        borderColor: '#FF5E1E',
        bondingCurveSupported: true
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Launchpad"].RAYDIUM]: {
        label: 'Raydium',
        href: (id)=>`https://raydium.io/launchpad/token/${id}`,
        icon: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$RaydiumIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["RaydiumIcon"], {
                "aria-label": "Raydium",
                ...props
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/info.tsx",
                lineNumber: 117,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
        color: '#FFB12B',
        borderColor: '#FFB12B',
        bondingCurveSupported: true
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Launchpad"].COOKMEME]: {
        label: 'CookMeme',
        href: (id)=>`https://cook.meme/view/${id}`,
        icon: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$CookmemeIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["CookmemeIcon"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-full', className),
                "aria-label": "CookMeme",
                ...props
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/info.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        color: '#AD55FF',
        borderColor: '#AD55FF',
        bondingCurveSupported: true
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Launchpad"].BELIEVE]: {
        label: 'Believe',
        icon: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$BelieveIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["BelieveIcon"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-full', className),
                "aria-label": "Believe",
                ...props
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/info.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        color: '#00d545',
        borderColor: '#00d545',
        bondingCurveSupported: true
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Launchpad"].BOOP]: {
        label: 'Boop',
        href: (id)=>`https://boop.fun/tokens/${id}`,
        icon: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$BoopIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["BoopIcon"], {
                "aria-label": "Boop",
                ...props
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/info.tsx",
                lineNumber: 144,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
        color: '#0CAEE4',
        borderColor: '#0CAEE4',
        bondingCurveSupported: true
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Launchpad"].XCOMBINATOR]: {
        label: 'xCombinator',
        icon: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$XCombinatorIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["XCombinatorIcon"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-full', className),
                "aria-label": "xCombinator",
                ...props
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/info.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        color: 'white',
        borderColor: 'white',
        bondingCurveSupported: true
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Launchpad"].MENTATFUN]: {
        label: 'MentatFun',
        icon: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$MentatfunIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["MentatfunIcon"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-full', className),
                "aria-label": "MentatFun",
                ...props
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/info.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        color: 'white',
        borderColor: 'white',
        bondingCurveSupported: true
    }
};
const LAUNCHPAD_INFOS = Object.entries(LaunchpadInfo).map(([launchpad, info])=>({
        launchpad: launchpad,
        info
    }))// We display launchpads that DON'T supoprt bonding curve at the bottom
.sort((a, b)=>!a.info.bondingCurveSupported ? 1 : !b.info.bondingCurveSupported ? -1 : 0);
function getLaunchpadInfo(launchpad) {
    if (!launchpad) return null;
    return LaunchpadInfo[launchpad] ?? null;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/LaunchpadIndicator.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "LaunchpadIndicator",
    ()=>LaunchpadIndicator,
    "TrenchesTokenIconLaunchpad",
    ()=>TrenchesTokenIconLaunchpad
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenIcon$2f$Context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/TokenIcon/Context.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$LaunchpadIndicator$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/info.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$LaunchpadIndicator$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$LaunchpadIndicator$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const TrenchesTokenIconLaunchpad = (props)=>{
    const { token, width, height, hideLaunchpad } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenIcon$2f$Context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useTrenchesTokenIconContext"])();
    if (hideLaunchpad === true || !token?.launchpad) {
        return null;
    }
    const isLargeIcon = width >= 40 && height >= 40;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LaunchpadIndicator, {
        ...props,
        launchpad: token?.launchpad,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])(props.className, {
            '[&_svg]:h-2.5 [&_svg]:w-2.5': isLargeIcon
        })
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/LaunchpadIndicator.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const LaunchpadIndicator = ({ launchpad, className })=>{
    const config = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$LaunchpadIndicator$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["getLaunchpadInfo"])(launchpad), [
        launchpad
    ]);
    if (!config) return null;
    const Icon = config.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('absolute -bottom-px -right-1', // Fixed dark chip in both themes: the launchpad brand icons are drawn
        // with white fills and are illegible on a light background
        'flex shrink-0 items-center justify-center overflow-hidden rounded-full border bg-[#0b0e13] p-0.5', className),
        style: {
            borderColor: config.borderColor
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
            className: "h-2 w-2"
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/LaunchpadIndicator.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/LaunchpadIndicator.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/TokenIcon/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* eslint-disable @next/next/no-img-element */ __turbopack_context__.s([
    "TrenchesTokenIcon",
    ()=>TrenchesTokenIcon,
    "TrenchesTokenIconImage",
    ()=>TrenchesTokenIconImage,
    "TrenchesTokenIconRoot",
    ()=>TrenchesTokenIconRoot
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$_2d26f648643635d619b6f3c55713f17e$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.25_@babel+core@7._2d26f648643635d619b6f3c55713f17e/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenIcon$2f$Context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/TokenIcon/Context.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$LaunchpadIndicator$2f$LaunchpadIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/LaunchpadIndicator.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$LaunchpadIndicator$2f$LaunchpadIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$LaunchpadIndicator$2f$LaunchpadIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
/**
 * Hostnames with known issues using the CDN service
 */ const CDN_BLACKLIST_HOSTNAMES = [
    /i.imgur.com/,
    /gateway.irys.xyz/
];
const TrenchesTokenIconRoot = ({ token, width = 32, height = 32, hideLaunchpad, className, style, onError, children })=>{
    const [isValid, setIsValid] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [isCdnValid, setIsCdnValid] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const imageUrl = token && (token.icon ?? token?.logoURI);
    const transformedSrc = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!imageUrl) {
            return undefined;
        }
        try {
            // Use base to support relative site assets
            const src = new URL(imageUrl, (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getBaseUrl"])());
            const matched = CDN_BLACKLIST_HOSTNAMES.some((regex)=>src.hostname.match(regex));
            if (matched) {
                return imageUrl;
            }
            const url = new URL(`https://wsrv.nl`);
            url.searchParams.set('w', width.toString());
            url.searchParams.set('h', height.toString());
            url.searchParams.set('url', src.toString());
            // For pixel ratio, to make image sharper
            url.searchParams.set('dpr', '2');
            return url.toString();
        } catch  {
            // Parsing URL might error
            return undefined;
        }
    }, [
        imageUrl,
        width,
        height
    ]);
    const resolvedSrc = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!transformedSrc || !isCdnValid) {
            return imageUrl ?? undefined;
        }
        return transformedSrc;
    }, [
        imageUrl,
        transformedSrc,
        isCdnValid
    ]);
    const handleImageError = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((e)=>{
        onError?.(e);
        if (resolvedSrc && resolvedSrc !== imageUrl) {
            setIsCdnValid(false);
        } else {
            setIsValid(false);
        }
    }, [
        onError,
        resolvedSrc,
        imageUrl
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenIcon$2f$Context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TrenchesTokenIconContext"].Provider, {
        value: {
            token,
            width,
            height,
            onError,
            hideLaunchpad,
            isValid,
            isCdnValid,
            resolvedSrc,
            transformedSrc,
            handleImageError,
            setIsValid,
            setIsCdnValid
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('relative flex h-8 w-8 rounded-full bg-neutral-850', className),
            style: style,
            children: children
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/TokenIcon/index.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/TokenIcon/index.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const TrenchesTokenIconImage = ({ className, style, ...props })=>{
    const { token, width, height, isValid, resolvedSrc, transformedSrc, handleImageError, setIsValid, setIsCdnValid } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenIcon$2f$Context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useTrenchesTokenIconContext"])();
    const imgRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // ssr image might not trigger error callback
        // determine error if image is loaded with no natural size
        const img = imgRef.current;
        if (img && img.complete && img.naturalHeight === 0 && isValid) {
            if (img.src !== token?.logoURI) {
                setIsCdnValid(false);
            } else {
                setIsValid(false);
            }
        }
    // Effect should only run once on mount to check initial state,
    // subsequent errors are handled by onError.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (!resolvedSrc || !isValid) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(UnknownTokenImage, {
            width: width,
            height: height,
            style: style,
            className: className,
            url: token?.logoURI ?? '',
            transformedUrl: transformedSrc ?? ''
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/TokenIcon/index.tsx",
            lineNumber: 155,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('h-full w-full rounded-full', className),
        ref: imgRef,
        src: resolvedSrc,
        alt: token?.symbol,
        width: width,
        height: height,
        style: style,
        onError: handleImageError,
        draggable: false,
        ...props
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/TokenIcon/index.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const UnknownTokenImage = ({ url, transformedUrl, className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$_2d26f648643635d619b6f3c55713f17e$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('h-full w-full rounded-full', className),
        alt: "unknown",
        src: '/coins/unknown.svg',
        "data-url": url,
        "data-transformed-url": transformedUrl,
        ...props
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/TokenIcon/index.tsx",
        lineNumber: 191,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const TrenchesTokenIcon = ({ token, width, height, hideLaunchpad, className, style, onError, children, ...imgProps })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TrenchesTokenIconRoot, {
        token: token,
        width: width,
        height: height,
        hideLaunchpad: hideLaunchpad,
        className: className,
        style: style,
        onError: onError,
        children: [
            children ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TrenchesTokenIconImage, {
                ...imgProps
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/TokenIcon/index.tsx",
                lineNumber: 234,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$LaunchpadIndicator$2f$LaunchpadIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TrenchesTokenIconLaunchpad"], {}, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/TokenIcon/index.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/components/TokenIcon/index.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/TokenIcon/TokenIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "TrenchesPoolTokenIcon",
    ()=>TrenchesPoolTokenIcon
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/pool-utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenIcon$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/TokenIcon/index.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$LaunchpadIndicator$2f$LaunchpadIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/LaunchpadIndicator/LaunchpadIndicator.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenIcon$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$LaunchpadIndicator$2f$LaunchpadIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenIcon$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$LaunchpadIndicator$2f$LaunchpadIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const CIRCLE_CIRCUMFERENCE_FACTOR = 2 * Math.PI;
const STROKE_WIDTH = 2;
const TrenchesPoolTokenIcon = ({ pool, width = 32, height = 32, gap = 1, ...props })=>{
    const baseSize = Math.min(width, height);
    const outerPadding = gap + STROKE_WIDTH;
    const svgWidth = width + outerPadding * 2;
    const svgHeight = height + outerPadding * 2;
    const radius = baseSize / 2 + gap + STROKE_WIDTH / 2;
    const circumference = radius * CIRCLE_CIRCUMFERENCE_FACTOR;
    // Graduated pools have no bonding curve value
    const bondingCurve = pool.bondingCurve ?? (pool.baseAsset.graduatedPool ? 100 : 0);
    const progress = bondingCurve / 100;
    const clampedProgress = Math.max(0, Math.min(1, progress));
    const dashOffset = circumference * (1 - clampedProgress);
    const dashArray = circumference;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenIcon$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TrenchesTokenIconRoot"], {
        token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatPoolAsTokenInfo"])(pool),
        width: width,
        height: height,
        style: {
            width,
            height
        },
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenIcon$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TrenchesTokenIconImage"], {}, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/TokenIcon/TokenIcon.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                width: svgWidth,
                height: svgHeight,
                viewBox: `0 0 ${svgWidth} ${svgHeight}`,
                className: "pointer-events-none absolute -rotate-90 transform",
                style: {
                    top: `-${outerPadding}px`,
                    left: `-${outerPadding}px`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                        cx: svgWidth / 2,
                        cy: svgHeight / 2,
                        r: radius,
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: STROKE_WIDTH,
                        className: "text-primary/20"
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/components/TokenIcon/TokenIcon.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                        cx: svgWidth / 2,
                        cy: svgHeight / 2,
                        r: radius,
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: STROKE_WIDTH,
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset,
                        strokeLinecap: "round",
                        className: "text-primary transition-all"
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/components/TokenIcon/TokenIcon.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/scaffolds/fun-launch/src/components/TokenIcon/TokenIcon.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$LaunchpadIndicator$2f$LaunchpadIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TrenchesTokenIconLaunchpad"], {
                className: "-bottom-0.5 -right-0.5"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/TokenIcon/TokenIcon.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/components/TokenIcon/TokenIcon.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/radix-ui [external] (radix-ui, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("radix-ui");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/scaffolds/fun-launch/src/components/ui/HoverPopover/index.tsx [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "HoverPopoverContent",
    ()=>HoverPopoverContent,
    "HoverPopoverTrigger",
    ()=>HoverPopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/radix-ui [external] (radix-ui, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/ui/HoverPopover/context.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
/**
 * Wrapper for radix-ui popover trigger component.
 * Popover content is triggered via the following methods:
 * - Desktop: hover on popover trigger
 * - Mobile: click on popover trigger
 *
 * More details, @see https://www.radix-ui.com/primitives/docs/components/popover#trigger
 */ // eslint-disable-next-line react/display-name
const HoverPopoverTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"])(({ className, ...props })=>{
    const { handleMouseEnter, handleMouseLeave, open } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useHoverPopover"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$29$__["Popover"].Trigger, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('outline-none', className, {
            'z-50': open
        }),
        ...props,
        onMouseLeave: handleMouseLeave,
        onMouseEnter: handleMouseEnter
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/ui/HoverPopover/index.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
/**
 * Wrapper for radix-ui popover content component.
 * Popover content is closed via the following methods:
 * - Desktop: hover off popover content
 * - Mobile: another element is clicked/tapped on
 *
 * More details, @see https://www.radix-ui.com/primitives/docs/components/popover#trigger
 */ const HoverPopoverContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"])(({ className, retainOnContentHover, backdrop, backdropClickable, portal = true, children, ...props }, ref)=>{
    const { handleMouseEnter, handleMouseLeave, open } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useHoverPopover"])();
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            backdrop && open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('fixed inset-0 z-10 bg-black/10 backdrop-blur-sm', {
                    'animate-fade-in': open,
                    'animate-fade-out': !open,
                    'pointer-events-none': !backdropClickable
                })
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/ui/HoverPopover/index.tsx",
                lineNumber: 90,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$29$__["Popover"].Content, {
                ref: ref,
                ...props,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('z-50 w-full max-w-[360px] rounded-lg border border-neutral-800 bg-neutral-925 p-2 text-xs text-neutral-100 shadow-xl outline-none', className),
                onMouseEnter: retainOnContentHover ? handleMouseEnter : undefined,
                onMouseLeave: handleMouseLeave,
                children: children
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/ui/HoverPopover/index.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: portal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$29$__["Popover"].Portal, {
            children: content
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/ui/HoverPopover/index.tsx",
            lineNumber: 113,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0)) : content
    }, void 0, false);
});
// Add display name for better debugging
HoverPopoverContent.displayName = 'HoverPopoverContent';
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/ui/HoverPopover/context.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "HoverPopover",
    ()=>HoverPopover,
    "useHoverPopover",
    ()=>useHoverPopover
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/radix-ui [external] (radix-ui, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/device.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/ui/HoverPopover/index.tsx [ssr] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const HoverPopoverContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"])({
    open: false,
    handleOpen: ()=>{},
    handleMouseLeave: ()=>{},
    handleMouseEnter: ()=>{}
});
/**
 * Wrapper for radix-ui popover component with hover on desktop and click on mobile.
 * Usage depends on whether the `root` props is true or false.
 *
 * When `root` is true, use as follows:
 * ```ts
    <HoverPopover root delayDuration={150}>
      <HoverPopoverTrigger>
        hover on me
      </HoverPopoverTrigger>
      <HoverPopoverContent>
        content displayed on trigger hover
      </HoverPopoverContent>
    </HoverPopover>
 * ```
 *
 * When `root` is false | undefined, use as follows:
 * ```ts
    <HoverPopover
      content={<>content displayed on trigger hover</>}
    >
      hover on me
    </HoverPopover>
 * ```
 * For implementation details, see the following:
 * - `https://github.com/radix-ui/primitives/issues/2051`
 * - `https://github.com/radix-ui/primitives/blob/main/packages/react/tooltip/src/tooltip.tsx`
 */ // eslint-disable-next-line react/display-name
const HoverPopover = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["memo"])(({ delayDuration = 0, root, content, disableHover, open: propsOpen, setOpen: propsSetOpen, children, className, // Content props
sideOffset, side, alignOffset, align, collisionPadding, ...props })=>{
    const [_open, _setOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const openTimerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(0);
    const isOpenDelayed = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>delayDuration > 0, [
        delayDuration
    ]);
    const externalState = propsOpen !== undefined && propsSetOpen !== undefined;
    const open = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        return externalState ? propsOpen : _open;
    }, [
        externalState,
        propsOpen,
        _open
    ]);
    const setOpen = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        return externalState ? propsSetOpen : _setOpen;
    }, [
        externalState,
        _setOpen,
        propsSetOpen
    ]);
    const handleDelayedOpenChange = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((newOpen)=>{
        window.clearTimeout(openTimerRef.current);
        openTimerRef.current = window.setTimeout(()=>{
            setOpen(newOpen);
            openTimerRef.current = 0;
        }, delayDuration);
    }, [
        delayDuration,
        setOpen,
        openTimerRef
    ]);
    const handleOpenChange = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((newOpen)=>{
        // Clear the timer in case the pointer leaves the trigger before the tooltip is opened.
        window.clearTimeout(openTimerRef.current);
        openTimerRef.current = 0;
        setOpen(newOpen);
    }, [
        setOpen,
        openTimerRef
    ]);
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isHoverableDevice"])() || disableHover) {
            return;
        }
        if (isOpenDelayed) {
            handleDelayedOpenChange(true);
        } else {
            handleOpenChange(true);
        }
    }, [
        isOpenDelayed,
        disableHover,
        handleDelayedOpenChange,
        handleOpenChange
    ]);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isHoverableDevice"])() || disableHover) {
            return;
        }
        if (isOpenDelayed) {
            handleDelayedOpenChange(false);
        } else {
            handleOpenChange(false);
        }
    }, [
        isOpenDelayed,
        disableHover,
        handleDelayedOpenChange,
        handleOpenChange
    ]);
    const handleOpen = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((newOpen)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isHoverableDevice"])() || disableHover) {
            setOpen(newOpen);
        }
    }, [
        disableHover,
        setOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        return ()=>{
            if (openTimerRef.current) {
                window.clearTimeout(openTimerRef.current);
                openTimerRef.current = 0;
            }
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(HoverPopoverContext.Provider, {
        value: {
            open,
            handleOpen,
            handleMouseEnter,
            handleMouseLeave
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$29$__["Popover"].Root, {
            open: open,
            onOpenChange: handleOpen,
            children: root ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: children
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/ui/HoverPopover/context.tsx",
                lineNumber: 190,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HoverPopoverTrigger"], {
                        className: className,
                        ...props,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/components/ui/HoverPopover/context.tsx",
                        lineNumber: 193,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HoverPopoverContent"], {
                        sideOffset: sideOffset,
                        side: side,
                        alignOffset: alignOffset,
                        align: align,
                        collisionPadding: collisionPadding,
                        children: content
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/components/ui/HoverPopover/context.tsx",
                        lineNumber: 196,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/ui/HoverPopover/context.tsx",
            lineNumber: 188,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/ui/HoverPopover/context.tsx",
        lineNumber: 185,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
const useHoverPopover = ()=>{
    const ctx = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(HoverPopoverContext);
    if (!ctx) {
        throw new Error('useHoverPopover must be used within HoverPopover');
    }
    return ctx;
};
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/ui/Copyable.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Copyable",
    ()=>Copyable
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/ui/HoverPopover/context.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/ui/HoverPopover/index.tsx [ssr] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const Copyable = ({ copyText, name, className, children })=>{
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(undefined);
    const handleClick = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        navigator.clipboard.writeText(copyText);
        setCopied(true);
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(()=>setCopied(false), 2000);
    }, [
        copyText
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["HoverPopover"], {
        root: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HoverPopoverTrigger"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: className,
                    onClick: handleClick,
                    "data-copied": copied,
                    children: typeof children === 'function' ? children(copied) : children
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/components/ui/Copyable.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/ui/Copyable.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HoverPopoverContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-0.5",
                    children: (copied ? `Copied` : `Copy`) + ' ' + name
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/components/ui/Copyable.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/ui/Copyable.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/components/ui/Copyable.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/icons/CopyIconSVG.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const CopyIconSVG = ({ width = 16, height = 16, ...otherProps })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...otherProps,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip0_11927_145082)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M5.3335 5.3335V3.46683C5.3335 2.72009 5.3335 2.34672 5.47882 2.06151C5.60665 1.81063 5.81063 1.60665 6.06151 1.47882C6.34672 1.3335 6.72009 1.3335 7.46683 1.3335H12.5335C13.2802 1.3335 13.6536 1.3335 13.9388 1.47882C14.1897 1.60665 14.3937 1.81063 14.5215 2.06151C14.6668 2.34672 14.6668 2.72009 14.6668 3.46683V8.5335C14.6668 9.28023 14.6668 9.6536 14.5215 9.93882C14.3937 10.1897 14.1897 10.3937 13.9388 10.5215C13.6536 10.6668 13.2802 10.6668 12.5335 10.6668H10.6668M3.46683 14.6668H8.5335C9.28023 14.6668 9.6536 14.6668 9.93882 14.5215C10.1897 14.3937 10.3937 14.1897 10.5215 13.9388C10.6668 13.6536 10.6668 13.2802 10.6668 12.5335V7.46683C10.6668 6.72009 10.6668 6.34672 10.5215 6.06151C10.3937 5.81063 10.1897 5.60665 9.93882 5.47882C9.6536 5.3335 9.28023 5.3335 8.5335 5.3335H3.46683C2.72009 5.3335 2.34672 5.3335 2.06151 5.47882C1.81063 5.60665 1.60665 5.81063 1.47882 6.06151C1.3335 6.34672 1.3335 6.72009 1.3335 7.46683V12.5335C1.3335 13.2802 1.3335 13.6536 1.47882 13.9388C1.60665 14.1897 1.81063 14.3937 2.06151 14.5215C2.34672 14.6668 2.72009 14.6668 3.46683 14.6668Z",
                    stroke: "currentColor",
                    strokeWidth: "1.67",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/CopyIconSVG.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/CopyIconSVG.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("clipPath", {
                    id: "clip0_11927_145082",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                        width: "16",
                        height: "16",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/icons/CopyIconSVG.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/icons/CopyIconSVG.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/icons/CopyIconSVG.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/CopyIconSVG.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CopyIconSVG;
}),
"[project]/scaffolds/fun-launch/src/lib/environment/date.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useCurrentDate",
    ()=>useCurrentDate,
    "useCurrentDateTicker",
    ()=>useCurrentDateTicker
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/jotai [external] (jotai, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
/**
 * The current date, updated every second
 *
 * @example
 * import { useAtomValue } from 'jotai';
 * import { nowAtom } from 'utils/environment/date';
 * const now = useAtomValue(nowAtom);
 */ const currentDateAtom = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__["atom"])(new Date());
const useCurrentDate = ()=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__["useAtomValue"])(currentDateAtom);
function useCurrentDateTicker() {
    const setNow = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jotai__$5b$external$5d$__$28$jotai$2c$__esm_import$29$__["useSetAtom"])(currentDateAtom);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>setNow(new Date()), 1000);
        return ()=>{
            clearInterval(timer);
        };
    }, [
        setNow
    ]);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/lib/format/number.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DASH",
    ()=>DASH,
    "DIGIT_SUBSCRIPT",
    ()=>DIGIT_SUBSCRIPT,
    "DIGIT_SUBSCRIPT_RE",
    ()=>DIGIT_SUBSCRIPT_RE,
    "ReadableNumberFormat",
    ()=>ReadableNumberFormat,
    "SUBSCRIPT_DIGIT",
    ()=>SUBSCRIPT_DIGIT,
    "formatReadableNumber",
    ()=>formatReadableNumber,
    "formatReadablePercentChange",
    ()=>formatReadablePercentChange,
    "getReadablePriceFormat",
    ()=>getReadablePriceFormat,
    "parseSubscript",
    ()=>parseSubscript
]);
const DASH = '-';
const COMPACT_THRESHOLD = 1000;
const LONG_THRESHOLD = 10;
const SMALL_DECIMALS = 5;
function getReadablePriceFormat(price) {
    if (price === undefined || price === null) {
        return ReadableNumberFormat.SMALL;
    }
    if (price >= 100_000) {
        return ReadableNumberFormat.COMPACT;
    }
    if (price > LONG_THRESHOLD) {
        return ReadableNumberFormat.LONG;
    }
    return ReadableNumberFormat.SMALL;
}
// Lazily memoize formatters for each decimal precision
const intlNumberSmallFormatters = {};
function getNumberSmallFormatter(decimals) {
    if (intlNumberSmallFormatters[decimals]) {
        return intlNumberSmallFormatters[decimals];
    }
    const formatter = new Intl.NumberFormat(undefined, {
        minimumSignificantDigits: 3,
        maximumSignificantDigits: decimals,
        maximumFractionDigits: decimals
    });
    intlNumberSmallFormatters[decimals] = formatter;
    return formatter;
}
const intlNumberCompact = new Intl.NumberFormat(undefined, {
    notation: 'compact',
    compactDisplay: 'short',
    minimumSignificantDigits: 3,
    maximumSignificantDigits: 3
});
const intlNumberLong = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
const intlNumberSmall = getNumberSmallFormatter(SMALL_DECIMALS);
const intlIntegerCompact = new Intl.NumberFormat(undefined, {
    ...intlNumberCompact.resolvedOptions(),
    minimumSignificantDigits: 1,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});
const intlIntegerLong = new Intl.NumberFormat(undefined, {
    ...intlNumberLong.resolvedOptions(),
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});
const intlIntegerSmall = new Intl.NumberFormat(undefined, {
    ...intlNumberSmall.resolvedOptions(),
    minimumSignificantDigits: 1,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});
const intlPctChange = new Intl.NumberFormat(undefined, {
    style: 'percent',
    signDisplay: 'exceptZero',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
});
const intlPctChangeOneDec = new Intl.NumberFormat(undefined, {
    style: 'percent',
    signDisplay: 'exceptZero',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
});
const intlPctChangeZeroDec = new Intl.NumberFormat(undefined, {
    style: 'percent',
    signDisplay: 'exceptZero',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});
const intlPctChangeNoSign = new Intl.NumberFormat(undefined, {
    style: 'percent',
    signDisplay: 'never',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
});
const intlPctChangeNoSignOneDec = new Intl.NumberFormat(undefined, {
    style: 'percent',
    signDisplay: 'never',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
});
const intlPctChangeNoSignZeroDec = new Intl.NumberFormat(undefined, {
    style: 'percent',
    signDisplay: 'never',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});
const ReadableNumberFormat = {
    COMPACT: 'compact',
    LONG: 'long',
    SMALL: 'small'
};
function getReadableNumberFormatter(value, options) {
    if (!options.format && value > COMPACT_THRESHOLD || options.format === ReadableNumberFormat.COMPACT) {
        return options.integer ? intlIntegerCompact : intlNumberCompact;
    }
    if (!options.format && value > LONG_THRESHOLD || options.format === ReadableNumberFormat.LONG) {
        return options.integer ? intlIntegerLong : intlNumberLong;
    }
    if (options.integer) {
        return intlIntegerSmall;
    }
    const decimals = options.decimals ?? SMALL_DECIMALS;
    return getNumberSmallFormatter(decimals);
}
function formatReadableNumber(num, options = {}) {
    if (num === null || num === undefined || isNaN(num)) {
        return DASH;
    }
    const abs = Math.abs(num);
    let formatted = getReadableNumberFormatter(abs, options).format(num);
    if (abs < 0.001 && abs !== 0 && options.subscript !== false) {
        const zeroes = countInsignificantFractionalZeroes(abs);
        const prefix = formatted.slice(0, num < 0 ? 4 : 3);
        const suffix = formatted.slice((num < 0 ? 3 : 2) + zeroes);
        formatted = `${prefix}${zeroes > 0 ? formatSubscript(zeroes) : ''}${suffix}`;
    }
    // Apply prefix before negative sign
    if (options.prefix) {
        if (num < 0 && formatted[0] === '-') {
            formatted = options.prefix + formatted.slice(1);
            formatted = '-' + formatted;
        } else {
            formatted = options.prefix + formatted;
        }
    }
    if (options.suffix) {
        formatted = formatted + options.suffix;
    }
    return formatted;
}
function formatReadablePercentChange(num, options = {}) {
    if (num === null || num === undefined || isNaN(num)) {
        return DASH;
    }
    if (num < 10) {
        if (options.hideSign === 'all' || options.hideSign === 'positive' && num >= 0) {
            const formatter = options.decimals === 0 ? intlPctChangeNoSignZeroDec : options.decimals === 1 ? intlPctChangeNoSignOneDec : intlPctChangeNoSign;
            return formatter.format(num);
        }
        const formatter = options.decimals === 0 ? intlPctChangeZeroDec : options.decimals === 1 ? intlPctChangeOneDec : intlPctChange;
        return formatter.format(num);
    }
    return (!options.hideSign && num > 0 ? '+' : '') + Math.round(num).toString() + 'x';
}
const DIGIT_SUBSCRIPT = {
    '0': '₀',
    '1': '₁',
    '2': '₂',
    '3': '₃',
    '4': '₄',
    '5': '₅',
    '6': '₆',
    '7': '₇',
    '8': '₈',
    '9': '₉'
};
const SUBSCRIPT_DIGIT = {
    '₀': '0',
    '₁': '1',
    '₂': '2',
    '₃': '3',
    '₄': '4',
    '₅': '5',
    '₆': '6',
    '₇': '7',
    '₈': '8',
    '₉': '9'
};
const DIGIT_SUBSCRIPT_RE = new RegExp(`(${Object.values(DIGIT_SUBSCRIPT).join('|')})+`, 'g');
/**
 * Convert number to its subscript form
 *
 * e.g. 11 -> ₁₁
 */ function formatSubscript(num) {
    return num.toString().split('').map((digit)=>DIGIT_SUBSCRIPT[digit]).join('');
}
function parseSubscript(num) {
    const parsed = num.replace(DIGIT_SUBSCRIPT_RE, (match)=>{
        let digits = '';
        for(let i = 0; i < match.length; i++){
            const char = match[i];
            if (char && SUBSCRIPT_DIGIT[char]) {
                digits += SUBSCRIPT_DIGIT[char];
            }
        }
        return digits;
    });
    return Number(parsed);
}
/**
 * Returns the number of insignificant fractional zeroes (ie. the number
 * of zeroes after the decimal separator) in the given number.
 *
 * For example, 0.00015 has 3 insignificant fractional zeroes.
 */ function countInsignificantFractionalZeroes(value) {
    const num = Number(value);
    if (!isValidNumber(num) || num >= 1 || Number.isInteger(num)) {
        return 0;
    }
    const zeroes = num.toExponential(0).slice(3); // eg. "1e-123".slice(3) = 123
    return Number(zeroes) - 1;
}
function isValidNumber(num) {
    return num !== Infinity && !isNaN(num);
}
}),
"[project]/scaffolds/fun-launch/src/lib/format/date.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_IntlDate",
    ()=>_IntlDate,
    "formatAge",
    ()=>formatAge,
    "intlDate",
    ()=>intlDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$format$2f$number$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/format/number.ts [ssr] (ecmascript)");
;
function formatAge(date, now) {
    if (date === undefined || date === null) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$format$2f$number$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["DASH"];
    }
    const secondsDiff = Math.abs(Math.floor((date.getTime() - now.getTime()) / 1000));
    // Less than 60 secs, we show seconds only
    if (secondsDiff < 60) {
        return `${secondsDiff}s`;
    }
    // Less than 60 mins, we show minutes only
    const minutesDiff = Math.floor(secondsDiff / 60);
    if (minutesDiff < 60) {
        return `${minutesDiff}m`;
    }
    // Less than 24 hours, we show hours only
    const hoursDiff = Math.floor(minutesDiff / 60);
    if (hoursDiff < 24) {
        return `${hoursDiff}h`;
    }
    // More than 24 hours, we show days only
    const daysDiff = Math.floor(hoursDiff / 24);
    return `${daysDiff}d`;
}
class _IntlDate {
    locale;
    constructor(locale){
        this.locale = locale;
    }
    toDate(input) {
        const date = new Date(input);
        return isNaN(date.valueOf()) ? null : date;
    }
    toTimezone(input, options) {
        const date = new Date(input);
        const timeZonePart = new Intl.DateTimeFormat(this.locale, {
            timeZone: options?.timezone,
            timeZoneName: 'short'
        }).formatToParts(date).find((part)=>part.type == 'timeZoneName');
        return timeZonePart ? timeZonePart.value : '';
    }
    format(inputDate, options) {
        const date = this.toDate(inputDate);
        if (date === null) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$format$2f$number$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["DASH"];
        }
        const datePart = date.toLocaleDateString(this.locale, {
            timeZone: options?.timezone,
            day: 'numeric',
            month: 'short',
            year: options?.withoutYear ? undefined : 'numeric',
            timeZoneName: options?.withoutTime ? options?.withTimezone ? 'short' : undefined : undefined
        });
        const timePart = date.toLocaleTimeString(this.locale, {
            timeZone: options?.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: options?.withoutSeconds ? undefined : '2-digit',
            timeZoneName: options?.withTimezone ? 'short' : undefined,
            hour12: options?.hour12
        });
        return options?.withoutDate ? timePart : options?.withoutTime ? datePart : `${datePart} ${timePart}`;
    }
}
const intlDate = new _IntlDate();
}),
"[project]/scaffolds/fun-launch/src/components/TokenAge/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "TokenAge",
    ()=>TokenAge
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$environment$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/environment/date.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$format$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/format/date.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$environment$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$environment$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const RECENT_AGE_THRESHOLD = 1000 * 60 * 60 * 2; // 2h
const TokenAge = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["memo"])(({ date: dateStr, className, ...props })=>{
    // Use date from context to avoid multiple timers
    const now = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$environment$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useCurrentDate"])();
    const date = dateStr ? new Date(dateStr) : undefined;
    const isRecent = date && date.getTime() > now.getTime() - RECENT_AGE_THRESHOLD;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('min-w-[2ch] tabular-nums leading-none tracking-tight', {
            'text-neutral-500': date === undefined,
            'text-primary': isRecent
        }, className),
        ...props,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$format$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatAge"])(date, now)
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/TokenAge/index.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
TokenAge.displayName = 'TokenAge';
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/ui/ExternalLink/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExternalLink",
    ()=>ExternalLink
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const ExternalLink = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        ...props
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/ui/ExternalLink/index.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/scaffolds/fun-launch/src/icons/TelegramIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const TelegramIcon = ({ width = 12, height = 12, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 50 50",
        stroke: "none",
        fill: "currentColor",
        width: width,
        height: height,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            d: "M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445 c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758 c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125 c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077 C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/icons/TelegramIcon.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/TelegramIcon.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TelegramIcon;
}),
"[project]/scaffolds/fun-launch/src/icons/WebsiteIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebsiteIcon",
    ()=>WebsiteIcon
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const WebsiteIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 11 11",
        width: "1em",
        height: "1em",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            d: "M5.359.65a4.875 4.875 0 1 0 0 9.75 4.875 4.875 0 0 0 0-9.75Zm4.125 4.876c0 .529-.102 1.053-.3 1.544L7.089 5.78a.745.745 0 0 0-.293-.104l-1.07-.145a.755.755 0 0 0-.75.369h-.408l-.178-.369a.746.746 0 0 0-.516-.406l-.375-.081.366-.644h.784a.753.753 0 0 0 .362-.094l.574-.317a.778.778 0 0 0 .14-.1l1.262-1.141a.747.747 0 0 0 .153-.922l-.017-.03a4.13 4.13 0 0 1 2.36 3.729Zm-8.25 0c0-.613.136-1.219.4-1.772l.532 1.419a.75.75 0 0 0 .544.469l1.005.216.179.37a.754.754 0 0 0 .675.423h.069l-.339.76a.75.75 0 0 0 .134.815l.007.006.919.947-.091.469a4.13 4.13 0 0 1-4.034-4.122Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/icons/WebsiteIcon.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/WebsiteIcon.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/scaffolds/fun-launch/src/icons/SearchIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const SearchIcon = ({ width = 16, height = 16, className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        // TODO: refactor, this should really be in the consumer
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center fill-current text-foreground/15', className),
        width: width,
        height: height,
        viewBox: "0 0 18 18",
        fill: "inherit",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            d: "M7.30327 14.6058C8.75327 14.6074 10.1705 14.1746 11.3729 13.3637L15.5971 17.5871C16.1463 18.1371 17.0377 18.1371 17.5877 17.5871C18.1377 17.0371 18.1377 16.1457 17.5877 15.5964L13.3643 11.3722C14.5823 9.55661 14.9229 7.28943 14.2909 5.19563C13.6596 3.10183 12.1229 1.40183 10.1033 0.56283C8.08365 -0.276231 5.79385 -0.16607 3.86505 0.86283C1.93537 1.89251 0.569053 3.73243 0.140853 5.87683C-0.286487 8.02143 0.269759 10.2448 1.65725 11.9354C3.04397 13.6261 5.11665 14.6064 7.30325 14.6058H7.30327ZM7.30327 1.68943C8.79233 1.68865 10.2197 2.28005 11.2729 3.33319C12.3252 4.38631 12.9166 5.81359 12.9166 7.30279C12.9166 8.79199 12.3252 10.2192 11.2729 11.2724C10.2198 12.3247 8.79247 12.9162 7.30327 12.9162C5.81407 12.9162 4.38687 12.3247 3.33367 11.2724C2.28133 10.2193 1.68913 8.79199 1.68991 7.30279C1.69148 5.81451 2.28287 4.38719 3.33523 3.33479C4.38759 2.28239 5.81483 1.69103 7.30323 1.68947L7.30327 1.68943Z",
            fill: "inherit"
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/icons/SearchIcon.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/SearchIcon.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SearchIcon;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/TokenSocials/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "TokenSocials",
    ()=>TokenSocials
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/ui/HoverPopover/index.tsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/ui/HoverPopover/context.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ExternalLink$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/ui/ExternalLink/index.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$TelegramIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/TelegramIcon.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$WebsiteIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/WebsiteIcon.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$SearchIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/SearchIcon.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$SearchIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$SearchIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const TokenSocials = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["memo"])(({ token, className, ...props })=>{
    const handleClick = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((e)=>{
        e.stopPropagation();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-[5px] [--icon-color:theme(colors.neutral.400)]', className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["HoverPopover"], {
                content: `Search CA on X`,
                sideOffset: 4,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ExternalLink$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ExternalLink"], {
                    className: "group/icon",
                    onClick: handleClick,
                    href: `https://x.com/search?q=${token.id}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$SearchIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        // Must override the icon classes, if not we can declare on parent
                        className: "text-[--icon-color] opacity-60 group-hover/icon:opacity-100",
                        "aria-label": `Search CA on X`,
                        width: 12,
                        height: 12
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/components/TokenSocials/index.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/components/TokenSocials/index.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/TokenSocials/index.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            token.telegram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ExternalLink$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ExternalLink"], {
                className: "text-[--icon-color] opacity-60 hover:opacity-100",
                onClick: handleClick,
                href: token.telegram,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$TelegramIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    "aria-label": "Telegram"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/components/TokenSocials/index.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/TokenSocials/index.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            token.website && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ExternalLink$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ExternalLink"], {
                className: "text-[--icon-color] opacity-60 hover:opacity-100",
                onClick: handleClick,
                href: token.website,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$WebsiteIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["WebsiteIcon"], {
                    "aria-label": "Website"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/components/TokenSocials/index.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/TokenSocials/index.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/components/TokenSocials/index.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
TokenSocials.displayName = 'TokenSocials';
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/ui/ReadableNumber/index.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "flash": "index-module__anBlHG__flash",
  "flashBg": "index-module__anBlHG__flashBg",
});
}),
"[project]/scaffolds/fun-launch/src/components/ui/ReadableNumber/DigitSubscript.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DigitSubscript",
    ()=>DigitSubscript
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$format$2f$number$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/format/number.ts [ssr] (ecmascript)");
;
;
;
const DigitSubscript = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["memo"])(function DigitSubscript({ value }) {
    const parts = value.split(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$format$2f$number$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["DIGIT_SUBSCRIPT_RE"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
        translate: "no",
        children: parts.map((part, i)=>{
            const isSubscript = part.match(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$format$2f$number$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["DIGIT_SUBSCRIPT_RE"]) !== null;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].Fragment, {
                children: isSubscript ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("sub", {
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$format$2f$number$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["parseSubscript"])(part)
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/components/ui/ReadableNumber/DigitSubscript.tsx",
                    lineNumber: 23,
                    columnNumber: 28
                }, this) : part
            }, i, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/ui/ReadableNumber/DigitSubscript.tsx",
                lineNumber: 22,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/ui/ReadableNumber/DigitSubscript.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
});
}),
"[project]/scaffolds/fun-launch/src/icons/CaretUpIcon.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const CaretUpIcon = ({ width = 24, height = 24, ...otherProps })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        width: width,
        height: height,
        ...otherProps,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            d: "M8 6.125L12 10.125L4 10.125L8 6.125Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/icons/CaretUpIcon.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/icons/CaretUpIcon.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CaretUpIcon;
}),
"[project]/scaffolds/fun-launch/src/components/ui/ReadableNumber/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ReadableNumber",
    ()=>ReadableNumber,
    "getNumberColorCn",
    ()=>getNumberColorCn
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ReadableNumber$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/ui/ReadableNumber/index.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$format$2f$number$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/format/number.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ReadableNumber$2f$DigitSubscript$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/ui/ReadableNumber/DigitSubscript.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$CaretUpIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/CaretUpIcon.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const getNumberColorCn = (num)=>{
    if (num === undefined || num === null) {
        return 'text-neutral-600';
    }
    return {
        'text-neutral-500': num === 0,
        'text-emerald': num > 0,
        'text-rose': num < 0
    };
};
const BaseReadableNumber = ({ num, format, prefix, suffix, integer, color, subscript, className, ...props })=>{
    const resolvedFormat = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (format === 'price') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$format$2f$number$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getReadablePriceFormat"])(num);
        }
        return format;
    }, [
        format,
        num
    ]);
    const formatted = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$format$2f$number$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatReadableNumber"])(num, {
            integer,
            format: resolvedFormat,
            prefix,
            suffix,
            subscript
        }), [
        num,
        integer,
        resolvedFormat,
        prefix,
        suffix,
        subscript
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('relative inline-flex items-center rounded-sm', color ? getNumberColorCn(num) : num === undefined ? 'text-neutral-600' : '', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ReadableNumber$2f$DigitSubscript$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["DigitSubscript"], {
            value: formatted
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/ui/ReadableNumber/index.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/ui/ReadableNumber/index.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const AnimatedReadableNumber = ({ num, format, prefix, suffix, integer, color, subscript, className, showDirection, ...props })=>{
    const [isFlash, setIsFlash] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isSlowFlash, setIsSlowFlash] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const prevNum = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(num);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (prevNum.current === num) return;
        const prev = prevNum.current;
        prevNum.current = num;
        const netChange = (num ?? 0) - (prev ?? 0);
        if (netChange !== 0) {
            setDirection(netChange > 0 ? 'up' : 'down');
        }
        if (prev === undefined) {
            return;
        }
        // Flash only when there was a prev number
        setIsFlash(true);
        setIsSlowFlash(true);
        const t1 = setTimeout(()=>setIsFlash(false), 950);
        const t2 = setTimeout(()=>setIsSlowFlash(false), 4000);
        return ()=>{
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [
        num
    ]);
    const resolvedFormat = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (format === 'price') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$format$2f$number$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getReadablePriceFormat"])(num);
        }
        return format;
    }, [
        format,
        num
    ]);
    const formatted = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$format$2f$number$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatReadableNumber"])(num, {
            integer,
            format: resolvedFormat,
            prefix,
            suffix,
            subscript
        }), [
        num,
        integer,
        resolvedFormat,
        prefix,
        suffix,
        subscript
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('relative inline-flex items-center rounded-sm', color ? getNumberColorCn(num) : num === undefined ? 'text-neutral-600' : '', isFlash && __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ReadableNumber$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].flashBg, className),
        ...props,
        children: [
            num !== undefined && prevNum.current !== undefined && showDirection && direction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$CaretUpIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                width: 10,
                height: 10,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('absolute left-0 top-1/2 h-4 w-4 -translate-x-full -translate-y-1/2 transition-all duration-300', {
                    'opacity-100': isSlowFlash,
                    'opacity-0': !isSlowFlash || direction === null,
                    'text-emerald': direction === 'up',
                    'rotate-180 text-rose': direction === 'down'
                })
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/ui/ReadableNumber/index.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ReadableNumber$2f$DigitSubscript$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["DigitSubscript"], {
                value: formatted
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/ui/ReadableNumber/index.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/components/ui/ReadableNumber/index.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ReadableNumber = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["memo"])(({ animated, ...props })=>{
    if (!animated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(BaseReadableNumber, {
            ...props
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/ui/ReadableNumber/index.tsx",
            lineNumber: 171,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AnimatedReadableNumber, {
        ...props
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/ui/ReadableNumber/index.tsx",
        lineNumber: 173,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
});
ReadableNumber.displayName = 'ReadableNumber';
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Metric",
    ()=>Metric,
    "TokenCardHoldersMetric",
    ()=>TokenCardHoldersMetric,
    "TokenCardLiquidityMetric",
    ()=>TokenCardLiquidityMetric,
    "TokenCardMcapMetric",
    ()=>TokenCardMcapMetric,
    "TokenCardNetBuyersMetric",
    ()=>TokenCardNetBuyersMetric,
    "TokenCardNetVolumeMetric",
    ()=>TokenCardNetVolumeMetric,
    "TokenCardTopHoldersMetric",
    ()=>TokenCardTopHoldersMetric,
    "TokenCardVolumeMetric",
    ()=>TokenCardVolumeMetric
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/ui/HoverPopover/index.tsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/ui/HoverPopover/context.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/pool-utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ReadableNumber$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/ui/ReadableNumber/index.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$format$2f$number$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/format/number.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ReadableNumber$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ReadableNumber$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const Metric = ({ label, children, tooltip, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$HoverPopover$2f$context$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["HoverPopover"], {
        content: tooltip,
        asChild: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('z-[1] flex items-center gap-0.5 text-neutral-500', className),
            children: [
                label,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
            lineNumber: 19,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const TokenCardTopHoldersMetric = ({ audit })=>{
    const topHoldersPercentage = audit?.topHoldersPercentage;
    const isPass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isAuditTopHoldersPass"])(audit);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Metric, {
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "mr-px text-neutral-500",
            children: "T10"
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
            lineNumber: 35,
            columnNumber: 20
        }, void 0),
        tooltip: "Top 10 Holders",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('opacity-80', topHoldersPercentage === undefined ? 'text-neutral-600' : isPass ? 'text-emerald' : 'text-rose'),
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$format$2f$number$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatReadablePercentChange"])(topHoldersPercentage === undefined ? undefined : topHoldersPercentage / 100, {
                hideSign: 'positive',
                decimals: 0
            })
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const TokenCardNetVolumeMetric = ({ buyVolume, sellVolume })=>{
    const netVolume = buyVolume === undefined && sellVolume === undefined ? undefined : (buyVolume ?? 0) - (sellVolume ?? 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Metric, {
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex h-3.5 w-3.5 items-center justify-center rounded bg-neutral-800 text-center text-[8px] font-semibold leading-none text-neutral-500",
            children: "NV"
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
            lineNumber: 75,
            columnNumber: 9
        }, void 0),
        tooltip: "Net Volume",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ReadableNumber$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ReadableNumber"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('opacity-80', (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ReadableNumber$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["getNumberColorCn"])(netVolume)),
            format: "compact",
            num: netVolume ? Math.abs(netVolume) : undefined,
            prefix: "$"
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const TokenCardNetBuyersMetric = ({ numNetBuyers, numTraders })=>{
    const isNetBuyersDominant = numNetBuyers === undefined || numTraders === undefined || numTraders === 0 ? undefined : numNetBuyers / numTraders >= 0.5;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Metric, {
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex h-3.5 w-3.5 items-center justify-center rounded bg-neutral-800 text-center text-[8px] font-semibold leading-none text-neutral-500",
            children: "NB"
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
            lineNumber: 108,
            columnNumber: 9
        }, void 0),
        tooltip: "Net Buyers",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ReadableNumber$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ReadableNumber"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('opacity-80', (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ReadableNumber$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["getNumberColorCn"])(isNetBuyersDominant === undefined ? undefined : isNetBuyersDominant ? 1 : -1)),
            format: "compact",
            num: numNetBuyers,
            integer: true,
            color: true
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
            lineNumber: 114,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const TokenCardHoldersMetric = ({ holderCount })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Metric, {
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
            className: "iconify ic--round-people-alt",
            children: "H"
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
            lineNumber: 136,
            columnNumber: 20
        }, void 0),
        tooltip: "Holders",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ReadableNumber$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ReadableNumber"], {
            format: "compact",
            className: "text-neutral-400",
            num: holderCount,
            integer: true
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
            lineNumber: 137,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const TokenCardVolumeMetric = ({ buyVolume, sellVolume })=>{
    const volume = buyVolume === undefined && sellVolume === undefined ? undefined : (buyVolume ?? 0) + (sellVolume ?? 0);
    const isAboveThreshold = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>volume && volume >= 500_000, [
        volume
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Metric, {
        label: "V",
        tooltip: "Volume",
        className: "text-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ReadableNumber$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ReadableNumber"], {
            format: "compact",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('font-medium text-neutral-300', isAboveThreshold && 'text-yellow-200'),
            num: volume,
            prefix: "$"
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
            lineNumber: 160,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const TokenCardMcapMetric = ({ mcap })=>{
    const isAboveThreshold = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>mcap && mcap >= 250_000, [
        mcap
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Metric, {
        label: "MC",
        tooltip: "Market Cap",
        className: "text-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ReadableNumber$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ReadableNumber"], {
            format: "compact",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('font-medium text-neutral-300', isAboveThreshold && 'text-yellow-200'),
            num: mcap,
            prefix: "$"
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
            lineNumber: 180,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const TokenCardLiquidityMetric = ({ liquidity })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Metric, {
        label: "L",
        tooltip: "Liquidity",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$ReadableNumber$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ReadableNumber"], {
            format: "compact",
            className: "font-medium text-neutral-400",
            num: liquidity,
            prefix: "$"
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
            lineNumber: 200,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "TokenCard",
    ()=>TokenCard,
    "TokenCardSkeleton",
    ()=>TokenCardSkeleton
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/ui/Skeleton.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenIcon$2f$TokenIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/TokenIcon/TokenIcon.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$Copyable$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/ui/Copyable.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$CopyIconSVG$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/icons/CopyIconSVG.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenAge$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/TokenAge/index.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenSocials$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/TokenSocials/index.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenCard$2f$TokenCardMetric$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardMetric.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$_2d26f648643635d619b6f3c55713f17e$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.25_@babel+core@7._2d26f648643635d619b6f3c55713f17e/node_modules/next/link.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenIcon$2f$TokenIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$Copyable$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenAge$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenSocials$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenCard$2f$TokenCardMetric$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenIcon$2f$TokenIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$Copyable$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenAge$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenSocials$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenCard$2f$TokenCardMetric$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const TokenCard = ({ pool, timeframe, rowRef })=>{
    const stats = pool.baseAsset[`stats${timeframe}`];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        ref: (el)=>rowRef(el, pool.id),
        "data-pool-id": pool.id,
        className: "relative flex cursor-pointer items-center border-neutral-850 py-3 pl-1.5 pr-2 text-xs has-hover:hover:bg-neutral-900 [&:nth-child(n+2)]:border-t",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "shrink-0 pl-2 pr-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenIcon$2f$TokenIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TrenchesPoolTokenIcon"], {
                    width: 54,
                    height: 54,
                    pool: pool
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-col gap-1 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex w-full items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-0.5 xl:gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "whitespace-nowrap text-sm font-semibold",
                                        title: pool.baseAsset.symbol,
                                        children: pool.baseAsset.symbol
                                    }, void 0, false, {
                                        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "ml-1 flex items-center gap-1 overflow-hidden z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$Copyable$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Copyable"], {
                                            name: "Address",
                                            copyText: pool.baseAsset.id,
                                            className: "z-[1] flex min-w-0 items-center gap-0.5 text-[0.625rem] leading-none text-neutral-500 duration-500 hover:text-neutral-200 data-[copied=true]:text-primary",
                                            children: (copied)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "truncate text-xs",
                                                            title: pool.baseAsset.name,
                                                            children: pool.baseAsset.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "iconify h-3 w-3 shrink-0 text-primary ph--check-bold"
                                                        }, void 0, false, {
                                                            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$icons$2f$CopyIconSVG$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            className: "h-3 w-3 shrink-0",
                                                            width: 12,
                                                            height: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex w-full items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenAge$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TokenAge"], {
                                        className: "opacity-80",
                                        date: pool.createdAt
                                    }, void 0, false, {
                                        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenSocials$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TokenSocials"], {
                                        className: "z-[1]",
                                        token: pool.baseAsset
                                    }, void 0, false, {
                                        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenCard$2f$TokenCardMetric$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TokenCardVolumeMetric"], {
                                        buyVolume: stats?.buyVolume,
                                        sellVolume: stats?.sellVolume
                                    }, void 0, false, {
                                        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenCard$2f$TokenCardMetric$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TokenCardMcapMetric"], {
                                        mcap: pool.baseAsset.mcap
                                    }, void 0, false, {
                                        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$_2d26f648643635d619b6f3c55713f17e$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "absolute inset-0 cursor-pointer rounded-lg",
                href: `/token/${pool.baseAsset.id}`
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const TokenCardSkeleton = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('border-b border-neutral-925 py-3 pl-1.5 pr-2 text-xs', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "shrink-0 pl-2 pr-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-14 w-14 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                    lineNumber: 106,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex w-full flex-col gap-2 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex w-full items-center justify-between gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-5 w-16"
                                                }, void 0, false, {
                                                    fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                            lineNumber: 117,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                className: "h-3 w-24"
                                            }, void 0, false, {
                                                fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                            lineNumber: 121,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                    lineNumber: 115,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-6 w-6 rounded-full lg:w-12"
                                    }, void 0, false, {
                                        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                    lineNumber: 127,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                            lineNumber: 113,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex w-full items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-3 w-10"
                                    }, void 0, false, {
                                        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                    lineNumber: 135,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                            className: "h-5 w-10"
                                        }, void 0, false, {
                                            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                            lineNumber: 141,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                            className: "h-5 w-10"
                                        }, void 0, false, {
                                            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                            lineNumber: 142,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                                    lineNumber: 140,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                            lineNumber: 133,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
                    lineNumber: 111,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
            lineNumber: 104,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardList.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "TokenCardList",
    ()=>TokenCardList
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$DataStreamProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/contexts/DataStreamProvider.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenCard$2f$TokenCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCard.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$DataStreamProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenCard$2f$TokenCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$DataStreamProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenCard$2f$TokenCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const ROWS_OVERSCAN = 0;
const ROW_HEIGHT_ESTIMATE = 90; // px for cards
const SKELETON_COUNT = 5;
const TokenCardList = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["memo"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"])(({ timeframe, data, status, trackPools, emptyState, className, ...props }, ref)=>{
    const [visiblePoolIds, setVisiblePoolIds] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(()=>new Set());
    const poolElements = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(new Map());
    const observer = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const newObserver = new IntersectionObserver((entries)=>{
            setVisiblePoolIds((prev)=>{
                const next = new Set(prev);
                entries.forEach((entry)=>{
                    const poolId = entry.target.dataset.poolId;
                    if (!poolId) return;
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    entry.isIntersecting ? next.add(poolId) : next.delete(poolId);
                });
                return next;
            });
        }, {
            rootMargin: `${ROW_HEIGHT_ESTIMATE * ROWS_OVERSCAN}px`,
            threshold: 0.1
        });
        observer.current = newObserver;
        return ()=>newObserver.disconnect();
    }, []);
    const rowRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((element, poolId)=>{
        if (!element) {
            poolElements.current.delete(poolId);
            return;
        }
        poolElements.current.set(poolId, element);
        observer.current?.observe(element);
    }, []);
    const { subscribePools, unsubscribePools } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$DataStreamProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useDataStream"])();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!trackPools) return;
        const poolIds = Array.from(visiblePoolIds);
        if (!poolIds.length) return;
        subscribePools(poolIds);
        return ()=>unsubscribePools(poolIds);
    }, [
        trackPools,
        visiblePoolIds,
        subscribePools,
        unsubscribePools
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('relative flex flex-col overflow-y-auto', className),
        ...props,
        children: status === 'loading' ? new Array(SKELETON_COUNT).fill(0).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenCard$2f$TokenCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TokenCardSkeleton"], {
                style: {
                    opacity: Math.max(0, 1 - i / SKELETON_COUNT)
                }
            }, `skeleton-${i}`, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardList.tsx",
                lineNumber: 82,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))) : !data || data.length === 0 ? emptyState ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "col-span-full py-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-neutral-500",
                    children: "No tokens matching this criteria"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardList.tsx",
                    lineNumber: 92,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-neutral-600",
                    children: "Adjust filters!"
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardList.tsx",
                    lineNumber: 93,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardList.tsx",
            lineNumber: 91,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
            children: data.map((pool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenCard$2f$TokenCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TokenCard"], {
                    pool: pool,
                    timeframe: timeframe,
                    rowRef: rowRef
                }, pool.baseAsset.id, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardList.tsx",
                    lineNumber: 99,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false)
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardList.tsx",
        lineNumber: 75,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
}));
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/constants/index.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StorageKey",
    ()=>StorageKey
]);
const StorageKey = {
    INTEL_EXPLORER_FILTERS_CONFIG: 'intel_explorer_filters_config'
};
}),
"[project]/scaffolds/fun-launch/src/contexts/ExploreProvider.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EXPLORE_FIXED_TIMEFRAME",
    ()=>EXPLORE_FIXED_TIMEFRAME,
    "ExploreProvider",
    ()=>ExploreProvider,
    "useExplore",
    ()=>useExplore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/types.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$6$2e$1_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$react$2d$use$2f$esm$2f$useLocalStorage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocalStorage$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-use@17.6.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-use/esm/useLocalStorage.js [ssr] (ecmascript) <export default as useLocalStorage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$constants$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/constants/index.ts [ssr] (ecmascript)");
;
;
;
;
;
const EXPLORE_FIXED_TIMEFRAME = '24h';
const DEFAULT_TAB = __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].NEW;
const ExploreContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"])({
    mobileTab: DEFAULT_TAB,
    setMobileTab: ()=>{},
    filters: undefined,
    setFilters: ()=>{},
    request: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].NEW]: {
            timeframe: EXPLORE_FIXED_TIMEFRAME
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATING]: {
            timeframe: EXPLORE_FIXED_TIMEFRAME
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATED]: {
            timeframe: EXPLORE_FIXED_TIMEFRAME
        }
    },
    pausedTabs: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].NEW]: false,
        [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATING]: false,
        [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATED]: false
    },
    setTabPaused: ()=>{}
});
const ExploreProvider = ({ children })=>{
    const partnerConfigs = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>process.env.NEXT_PUBLIC_POOL_CONFIG_KEY?.split(',') || [], []);
    const [mobileTab, setMobileTab] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(DEFAULT_TAB);
    const [pausedTabs, setPausedTabs] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].NEW]: false,
        [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATING]: false,
        [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATED]: false
    });
    // Store all filters in an object to avoid tab -> filter state sync issues
    const [filtersConfig, setFiltersConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$6$2e$1_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$react$2d$use$2f$esm$2f$useLocalStorage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocalStorage$3e$__["useLocalStorage"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$constants$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["StorageKey"].INTEL_EXPLORER_FILTERS_CONFIG, {});
    const setFilters = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((tab, newFilters)=>{
        setFiltersConfig({
            ...filtersConfig,
            [tab]: newFilters
        });
    }, [
        setFiltersConfig,
        filtersConfig
    ]);
    const setTabPaused = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((tab, isPaused)=>{
        setPausedTabs((prev)=>({
                ...prev,
                [tab]: isPaused
            }));
    }, []);
    const request = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        return Object.fromEntries(Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"]).map((tab)=>[
                tab,
                {
                    timeframe: EXPLORE_FIXED_TIMEFRAME,
                    filters: {
                        ...filtersConfig?.[tab],
                        partnerConfigs
                    }
                }
            ]));
    }, [
        filtersConfig,
        partnerConfigs
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ExploreContext.Provider, {
        value: {
            mobileTab,
            setMobileTab,
            filters: filtersConfig,
            setFilters,
            request,
            pausedTabs,
            setTabPaused
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/contexts/ExploreProvider.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useExplore = ()=>{
    const ctx = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(ExploreContext);
    if (!ctx) {
        throw new Error('useExplore must be used within ExploreProvider');
    }
    return ctx;
};
;
}),
"[project]/scaffolds/fun-launch/src/hooks/useExploreGemsTokenList.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useExploreGemsTokenList",
    ()=>useExploreGemsTokenList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$queries$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/queries.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$ExploreProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/contexts/ExploreProvider.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tanstack/react-query [external] (@tanstack/react-query, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$queries$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$queries$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function useExploreGemsTokenList(select) {
    const { request } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$ExploreProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useExplore"])();
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__["useQuery"])({
        ...__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$queries$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ApeQueries"].gemsTokenList(request),
        select,
        refetchInterval: 30 * 1000
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/Explore/PausedIndicator.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "PausedIndicator",
    ()=>PausedIndicator
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const PausedIndicator = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center text-xs text-primary gap-1 md:border border-primary/60 md:rounded-xl p-0.5 md:px-2'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                className: "iconify ph--pause-circle-fill w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/Explore/PausedIndicator.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                className: "hidden md:block font-semibold",
                children: "Paused"
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/Explore/PausedIndicator.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/components/Explore/PausedIndicator.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/Explore/ExploreColumn.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ExploreColumn",
    ()=>ExploreColumn,
    "ExploreTabTitleMap",
    ()=>ExploreTabTitleMap
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tanstack/react-query [external] (@tanstack/react-query, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/pool-utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$queries$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/queries.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/types.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenCard$2f$TokenCardList$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/TokenCard/TokenCardList.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$hooks$2f$useExploreGemsTokenList$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/hooks/useExploreGemsTokenList.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$ExploreProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/contexts/ExploreProvider.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/device.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$PausedIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/PausedIndicator.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$queries$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenCard$2f$TokenCardList$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$hooks$2f$useExploreGemsTokenList$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$PausedIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$queries$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenCard$2f$TokenCardList$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$hooks$2f$useExploreGemsTokenList$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$PausedIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
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
const ExploreTabTitleMap = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].NEW]: `New`,
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATING]: `Soon`,
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATED]: `Bonded`
};
const ExploreColumn = ({ tab })=>{
    const { pausedTabs, setTabPaused, request } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$ExploreProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useExplore"])();
    const isPaused = pausedTabs[tab];
    const setIsPaused = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((paused)=>setTabPaused(tab, paused), [
        setTabPaused,
        tab
    ]);
    return(// Fill the viewport below the header + page gutters on desktop
    // (64px header + 12px top gutter + 32px bottom gutter + 2px borders)
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full lg:h-[calc(100vh-110px)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-3 max-lg:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "font-bold text-neutral-300",
                            children: ExploreTabTitleMap[tab]
                        }, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/components/Explore/ExploreColumn.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        isPaused && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$PausedIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["PausedIndicator"], {}, void 0, false, {
                            fileName: "[project]/scaffolds/fun-launch/src/components/Explore/ExploreColumn.tsx",
                            lineNumber: 41,
                            columnNumber: 24
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/scaffolds/fun-launch/src/components/Explore/ExploreColumn.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/Explore/ExploreColumn.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative flex-1 border-neutral-850 text-xs lg:border-t h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-x-0 top-0 z-[1] h-2 bg-gradient-to-b from-neutral-950 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/components/Explore/ExploreColumn.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TokenCardListContainer, {
                        tab: tab,
                        request: request,
                        isPaused: isPaused,
                        setIsPaused: setIsPaused
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/components/Explore/ExploreColumn.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/scaffolds/fun-launch/src/components/Explore/ExploreColumn.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/components/Explore/ExploreColumn.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
const timeframe = __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$ExploreProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["EXPLORE_FIXED_TIMEFRAME"];
const TokenCardListContainer = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["memo"])(({ tab, request, isPaused, setIsPaused })=>{
    const queryClient = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__["useQueryClient"])();
    const breakpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBreakpoint"])();
    const isMobile = breakpoint === 'md' || breakpoint === 'sm' || breakpoint === 'xs';
    const listRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const { data: currentData, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$hooks$2f$useExploreGemsTokenList$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useExploreGemsTokenList"])((data)=>data[tab]);
    const [snapshotData, setSnapshotData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])();
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isHoverableDevice"])() || status !== 'success') {
            return;
        }
        // When clicking elements (copyable) it triggers mouse enter again
        // We don't want to re-snapshot data if already paused
        if (!isPaused) {
            setSnapshotData(currentData?.pools);
        }
        setIsPaused(true);
    }, [
        currentData?.pools,
        isPaused,
        setIsPaused,
        status
    ]);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isHoverableDevice"])()) return;
        setIsPaused(false);
    }, [
        setIsPaused
    ]);
    // Mutate the args so stream sorts by timeframe
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        queryClient.setQueriesData({
            type: 'active',
            queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$queries$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ApeQueries"].gemsTokenList(request).queryKey
        }, (prev)=>{
            const prevPools = prev?.[tab]?.pools;
            if (!prevPools) return;
            const pools = [
                ...prevPools
            ];
            // Re-sort
            const sortDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["categorySortDir"])(tab);
            let sortBy;
            const defaultSortBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["categorySortBy"])(tab, timeframe);
            if (defaultSortBy) {
                sortBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["normalizeSortByField"])(defaultSortBy);
            }
            if (sortBy) {
                const sorter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["createPoolSorter"])({
                    sortBy,
                    sortDir
                }, timeframe);
                pools.sort(sorter);
            }
            return {
                ...prev,
                [tab]: {
                    ...prev[tab],
                    pools
                },
                args: {
                    ...prev?.args,
                    timeframe
                }
            };
        });
    }, [
        queryClient,
        tab,
        request
    ]);
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (!isMobile || !listRef.current) return;
        const top = listRef.current.getBoundingClientRect().top;
        if (top <= 0) {
            // Only snapshot on initial pause
            if (!isPaused) {
                setSnapshotData(currentData?.pools);
            }
            setIsPaused(true);
        } else {
            setIsPaused(false);
        }
    }, [
        currentData?.pools,
        isPaused,
        setIsPaused,
        isMobile
    ]);
    // Handle scroll pausing on mobile
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!isMobile) return;
        // Initial check
        handleScroll();
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
            setIsPaused(false);
        };
    }, [
        isMobile,
        setIsPaused,
        handleScroll
    ]);
    // Map snapshot data to current data for most recent updated data
    const displayData = isPaused ? snapshotData?.map((snapshotPool)=>{
        const current = currentData?.pools.find((p)=>p.baseAsset.id === snapshotPool.baseAsset.id);
        if (current) {
            return current;
        }
        return snapshotPool;
    }) : currentData?.pools;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$TokenCard$2f$TokenCardList$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TokenCardList"], {
        ref: listRef,
        data: displayData,
        status: status,
        timeframe: timeframe,
        trackPools: true,
        className: "lg:h-0 lg:min-h-full",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/Explore/ExploreColumn.tsx",
        lineNumber: 189,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
TokenCardListContainer.displayName = 'TokenCardListContainer';
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/Explore/MobileExploreTabs.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ExploreTabTitleMap",
    ()=>ExploreTabTitleMap,
    "MobileExploreTabs",
    ()=>MobileExploreTabs
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/radix-ui [external] (radix-ui, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$ExploreProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/contexts/ExploreProvider.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/types.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$PausedIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/PausedIndicator.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$PausedIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$PausedIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const ExploreTabTitleMap = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].NEW]: `New`,
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATING]: `Soon`,
    [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATED]: `Bonded`
};
const MobileExploreTabs = ()=>{
    const { mobileTab, setMobileTab, pausedTabs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$ExploreProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useExplore"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "sticky inset-x-0 top-0 z-20 border-b border-neutral-850 shadow-sm lg:hidden bg-background/95 backdrop-blur",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "px-2 py-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$29$__["ToggleGroup"].Root, {
                className: "flex h-9 w-full min-w-fit items-center gap-1 text-sm",
                type: "single",
                value: mobileTab,
                onValueChange: (value)=>{
                    if (value) {
                        setMobileTab(value);
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ToggleGroupItem, {
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].NEW,
                        children: [
                            ExploreTabTitleMap[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].NEW],
                            mobileTab === __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].NEW && pausedTabs[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].NEW] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$PausedIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["PausedIndicator"], {}, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/components/Explore/MobileExploreTabs.tsx",
                                lineNumber: 31,
                                columnNumber: 76
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/components/Explore/MobileExploreTabs.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ToggleGroupItem, {
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATING,
                        children: [
                            ExploreTabTitleMap[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATING],
                            mobileTab === __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATING && pausedTabs[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATING] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$PausedIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["PausedIndicator"], {}, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/components/Explore/MobileExploreTabs.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/components/Explore/MobileExploreTabs.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ToggleGroupItem, {
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATED,
                        children: [
                            ExploreTabTitleMap[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATED],
                            mobileTab === __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATED && pausedTabs[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATED] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$PausedIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["PausedIndicator"], {}, void 0, false, {
                                fileName: "[project]/scaffolds/fun-launch/src/components/Explore/MobileExploreTabs.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scaffolds/fun-launch/src/components/Explore/MobileExploreTabs.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/scaffolds/fun-launch/src/components/Explore/MobileExploreTabs.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/Explore/MobileExploreTabs.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/Explore/MobileExploreTabs.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ToggleGroupItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].forwardRef(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$29$__["ToggleGroup"].Item, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('flex h-full w-full items-center justify-center gap-1 whitespace-nowrap rounded-lg px-3 text-neutral-400 transition-all', 'data-[state=off]:hover:text-primary/80', 'data-[state=on]:bg-primary/10 data-[state=on]:text-primary', 'disabled:pointer-events-none disabled:opacity-50', 'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/Explore/MobileExploreTabs.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
ToggleGroupItem.displayName = __TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$29$__["ToggleGroup"].Item.displayName;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/Explore/ExploreGrid.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$DataStreamProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/contexts/DataStreamProvider.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/types.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$ExploreColumn$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/ExploreColumn.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$MobileExploreTabs$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/MobileExploreTabs.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$ExploreProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/contexts/ExploreProvider.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/device.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$DataStreamProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$ExploreColumn$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$MobileExploreTabs$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$DataStreamProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$ExploreColumn$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$MobileExploreTabs$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
const ExploreGrid = ({ className })=>{
    const { subscribeRecentTokenList, unsubscribeRecentTokenList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$DataStreamProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useDataStream"])();
    const { mobileTab } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$ExploreProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useExplore"])();
    const breakpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$device$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBreakpoint"])();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        subscribeRecentTokenList();
        return ()=>{
            unsubscribeRecentTokenList();
        };
    }, [
        subscribeRecentTokenList,
        unsubscribeRecentTokenList
    ]);
    const isMobile = breakpoint === 'md' || breakpoint === 'sm' || breakpoint === 'xs';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('grid grid-cols-1 border-neutral-850 max-lg:grid-rows-[auto_1fr] lg:grid-cols-3 lg:border xl:overflow-hidden lg:rounded-xl', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$MobileExploreTabs$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["MobileExploreTabs"], {}, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/Explore/ExploreGrid.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "contents divide-x divide-neutral-850",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$ExploreColumn$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreColumn"], {
                        tab: isMobile ? mobileTab : __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].NEW
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/components/Explore/ExploreGrid.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$ExploreColumn$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreColumn"], {
                        tab: __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATING
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/components/Explore/ExploreGrid.tsx",
                        lineNumber: 39,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$ExploreColumn$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreColumn"], {
                        tab: __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATED
                    }, void 0, false, {
                        fileName: "[project]/scaffolds/fun-launch/src/components/Explore/ExploreGrid.tsx",
                        lineNumber: 40,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/scaffolds/fun-launch/src/components/Explore/ExploreGrid.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/components/Explore/ExploreGrid.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ExploreGrid;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/Explore/ExploreMsgHandler.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ExploreMsgHandler",
    ()=>ExploreMsgHandler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tanstack/react-query [external] (@tanstack/react-query, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/pool-utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$DataStreamProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/contexts/DataStreamProvider.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/types.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$DataStreamProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$DataStreamProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const ExploreMsgHandler = ()=>{
    const queryClient = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__["useQueryClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$DataStreamProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useDataStreamListener"])([
        'updates'
    ], (get, set, msg)=>{
        queryClient.setQueriesData({
            type: 'active',
            queryKey: [
                'explore',
                'gems'
            ]
        }, (prev)=>{
            if (!prev) return;
            // Update, insert then re-sort
            let recentPools = prev.recent && [
                ...prev.recent.pools
            ];
            let aboutToGraduatePools = prev.aboutToGraduate && [
                ...prev.aboutToGraduate.pools
            ];
            const graduatedPools = prev.graduated && [
                ...prev.graduated.pools
            ];
            for (const update of msg.data){
                if (update.type === 'new') {
                    // Handle recent pools
                    // Update or add
                    if (recentPools) {
                        const newIdx = recentPools?.findIndex((p)=>p.baseAsset.id === update.pool.baseAsset.id);
                        if (newIdx !== -1) {
                            const existingPool = recentPools[newIdx];
                            if (existingPool) {
                                recentPools[newIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["patchStreamPool"])(update.pool, existingPool);
                            }
                        } else {
                            Object.assign(update.pool, {
                                streamed: true
                            });
                            recentPools.push(update.pool);
                        }
                    }
                    // Handle about to graduate pools
                    // Update or add if higher bonding curve
                    if (aboutToGraduatePools && !update.pool.baseAsset.graduatedPool) {
                        // Already sorted by bonding curve
                        const minBondingCurve = aboutToGraduatePools[aboutToGraduatePools.length - 1]?.bondingCurve ?? 0;
                        const aboutToGraduateIdx = aboutToGraduatePools.findIndex((p)=>p.baseAsset.id === update.pool.baseAsset.id);
                        if (aboutToGraduateIdx !== -1) {
                            const existingPool = aboutToGraduatePools[aboutToGraduateIdx];
                            if (existingPool) {
                                aboutToGraduatePools[aboutToGraduateIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["patchStreamPool"])(update.pool, existingPool);
                            }
                        } else if (update.pool.bondingCurve !== undefined && update.pool.bondingCurve > minBondingCurve) {
                            Object.assign(update.pool, {
                                streamed: true
                            });
                            aboutToGraduatePools.push(update.pool);
                        }
                    }
                    continue;
                }
                if (update.type === 'graduated') {
                    // Handle graduated pools
                    // Update or add
                    if (graduatedPools) {
                        const graduatedIdx = graduatedPools.findIndex((p)=>p.baseAsset.id === update.pool.baseAsset.id);
                        if (graduatedIdx !== -1) {
                            const existingPool = graduatedPools[graduatedIdx];
                            if (existingPool) {
                                graduatedPools[graduatedIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["patchStreamPool"])(update.pool, existingPool);
                            }
                        } else {
                            Object.assign(update.pool, {
                                streamed: true
                            });
                            graduatedPools.push(update.pool);
                        }
                    }
                    // Handle other columns
                    // Remove from other columns
                    if (recentPools) {
                        recentPools = recentPools.filter((p)=>p.baseAsset.id !== update.pool.baseAsset.id);
                    }
                    if (aboutToGraduatePools) {
                        aboutToGraduatePools = aboutToGraduatePools.filter((p)=>p.baseAsset.id !== update.pool.baseAsset.id);
                    }
                    continue;
                }
                if (update.type === 'update') {
                    // Skip unreliable pool updates, theres a bug where mcap is missing
                    if (update.pool.isUnreliable) {
                        continue;
                    }
                    // TODO: graduated update handling
                    // Handle recent pools
                    // Update existing
                    if (recentPools) {
                        const idx = recentPools.findIndex((p)=>p.baseAsset.id === update.pool.baseAsset.id);
                        if (idx !== -1) {
                            const existingPool = recentPools[idx];
                            if (existingPool) {
                                recentPools[idx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["patchStreamPool"])(update.pool, existingPool);
                            }
                        }
                    }
                    // Handle about to graduate pools
                    // Update or add if higher bonding curve
                    if (aboutToGraduatePools && !update.pool.baseAsset.graduatedPool) {
                        const idx = aboutToGraduatePools.findIndex((p)=>p.baseAsset.id === update.pool.baseAsset.id);
                        if (idx !== -1) {
                            const existingPool = aboutToGraduatePools[idx];
                            if (existingPool) {
                                aboutToGraduatePools[idx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["patchStreamPool"])(update.pool, existingPool);
                            }
                        } else {
                            // Already sorted by bonding curve
                            const minBondingCurve = aboutToGraduatePools[aboutToGraduatePools.length - 1]?.bondingCurve ?? 0;
                            if (update.pool.bondingCurve !== undefined && update.pool.bondingCurve > minBondingCurve) {
                                Object.assign(update.pool, {
                                    streamed: true
                                });
                                aboutToGraduatePools.push(update.pool);
                            }
                        }
                    }
                    // Handle graduated pools
                    // Update existing
                    if (graduatedPools) {
                        const idx = graduatedPools.findIndex((p)=>p.baseAsset.id === update.pool.baseAsset.id);
                        if (idx !== -1) {
                            const existingPool = graduatedPools[idx];
                            if (existingPool) {
                                graduatedPools[idx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["patchStreamPool"])(update.pool, existingPool);
                            }
                        }
                    }
                    continue;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["assertNever"])(update.type, 'Explore stream listener received unknown update type');
            }
            const recentArgs = prev.args[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].NEW];
            const aboutToGraduateArgs = prev.args[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATING];
            const graduatedArgs = prev.args[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATED];
            // Re-sort
            if (recentPools && recentArgs) {
                const sortDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["categorySortDir"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].NEW);
                let sortBy;
                if (!sortBy) {
                    const defaultSortBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["categorySortBy"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].NEW, recentArgs.timeframe);
                    if (defaultSortBy) {
                        sortBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["normalizeSortByField"])(defaultSortBy);
                    }
                }
                if (sortBy) {
                    const sorter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["createPoolSorter"])({
                        sortBy,
                        sortDir
                    }, recentArgs.timeframe);
                    recentPools.sort(sorter);
                }
            }
            if (aboutToGraduatePools && aboutToGraduateArgs) {
                const sortDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["categorySortDir"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATING);
                let sortBy;
                if (!sortBy) {
                    const defaultSortBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["categorySortBy"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATING, aboutToGraduateArgs.timeframe);
                    if (defaultSortBy) {
                        sortBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["normalizeSortByField"])(defaultSortBy);
                    }
                }
                if (sortBy) {
                    const sorter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["createPoolSorter"])({
                        sortBy,
                        sortDir
                    }, aboutToGraduateArgs.timeframe);
                    aboutToGraduatePools.sort(sorter);
                }
            }
            if (graduatedPools && graduatedArgs) {
                const sortDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["categorySortDir"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATED);
                let sortBy;
                if (!sortBy) {
                    const defaultSortBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["categorySortBy"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATED, graduatedArgs.timeframe);
                    if (defaultSortBy) {
                        sortBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["normalizeSortByField"])(defaultSortBy);
                    }
                }
                if (sortBy) {
                    const sorter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$pool$2d$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["createPoolSorter"])({
                        sortBy,
                        sortDir
                    }, graduatedArgs.timeframe);
                    graduatedPools.sort(sorter);
                }
            }
            // Truncate lists
            recentPools?.splice(30);
            aboutToGraduatePools?.splice(30);
            graduatedPools?.splice(30);
            const next = {
                [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].NEW]: recentPools ? {
                    pools: recentPools
                } : undefined,
                [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATING]: aboutToGraduatePools ? {
                    pools: aboutToGraduatePools
                } : undefined,
                [__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreTab"].GRADUATED]: graduatedPools ? {
                    pools: graduatedPools
                } : undefined,
                args: prev.args
            };
            return next;
        });
    });
    return null;
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/components/Explore/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$ExploreGrid$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/ExploreGrid.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$DataStreamProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/contexts/DataStreamProvider.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$ExploreMsgHandler$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/ExploreMsgHandler.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$ExploreProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/contexts/ExploreProvider.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$ExploreGrid$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$DataStreamProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$ExploreMsgHandler$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$ExploreGrid$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$DataStreamProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$ExploreMsgHandler$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const Explore = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ExploreContext, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$ExploreGrid$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "flex-1"
        }, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/components/Explore/index.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/components/Explore/index.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ExploreContext = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$ExploreMsgHandler$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreMsgHandler"], {}, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/Explore/index.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$ExploreProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ExploreProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$contexts$2f$DataStreamProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["DataStreamProvider"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/components/Explore/index.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/Explore/index.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/components/Explore/index.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Explore;
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
"[project]/scaffolds/fun-launch/src/components/ui/Page/Page.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Header.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/lib/utils.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const Page = ({ containerClassName, children, pageClassName })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('flex min-h-screen flex-col justify-between bg-background text-foreground', pageClassName),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/ui/Page/Page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-1 flex-col items-center px-2 pt-3 pb-8 md:px-4', containerClassName),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex w-full flex-1 flex-col",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/scaffolds/fun-launch/src/components/ui/Page/Page.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/scaffolds/fun-launch/src/components/ui/Page/Page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scaffolds/fun-launch/src/components/ui/Page/Page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Page;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/scaffolds/fun-launch/src/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Index
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/Explore/index.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$Page$2f$Page$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scaffolds/fun-launch/src/components/ui/Page/Page.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$Page$2f$Page$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$Page$2f$Page$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function Index() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$ui$2f$Page$2f$Page$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scaffolds$2f$fun$2d$launch$2f$src$2f$components$2f$Explore$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/scaffolds/fun-launch/src/pages/index.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/scaffolds/fun-launch/src/pages/index.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1d853d88._.js.map