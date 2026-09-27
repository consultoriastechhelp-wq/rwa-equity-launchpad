(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/HTTPError.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTTPError",
    ()=>HTTPError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [client] (ecmascript)");
;
class HTTPError extends Error {
    constructor(response, request, options){
        const code = response.status || response.status === 0 ? response.status : '';
        var _response_statusText;
        const title = (_response_statusText = response.statusText) !== null && _response_statusText !== void 0 ? _response_statusText : '';
        const status = "".concat(code, " ").concat(title).trim();
        const reason = status ? "status code ".concat(status) : 'an unknown error';
        super("Request failed with ".concat(reason, ": ").concat(request.method, " ").concat(request.url)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, "response", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, "request", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, "options", void 0);
        this.name = 'HTTPError';
        this.response = response;
        this.request = request;
        this.options = options;
    }
} //# sourceMappingURL=HTTPError.js.map
}),
"[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/NonError.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
Wrapper for non-Error values that were thrown.

In JavaScript, any value can be thrown (not just Error instances). This class wraps such values to ensure consistent error handling.
*/ __turbopack_context__.s([
    "NonError",
    ()=>NonError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [client] (ecmascript)");
;
class NonError extends Error {
    constructor(value){
        let message = 'Non-error value was thrown';
        // Intentionally minimal as this error is just an edge-case.
        try {
            if (typeof value === 'string') {
                message = value;
            } else if (value && typeof value === 'object' && 'message' in value && typeof value.message === 'string') {
                message = value.message;
            }
        } catch (e) {
        // Use default message if accessing properties throws
        }
        super(message), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, "name", 'NonError'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, "value", void 0);
        this.value = value;
    }
} //# sourceMappingURL=NonError.js.map
}),
"[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/ForceRetryError.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ForceRetryError",
    ()=>ForceRetryError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$NonError$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/NonError.js [client] (ecmascript)");
;
;
class ForceRetryError extends Error {
    constructor(options){
        // Runtime protection: wrap non-Error causes in NonError
        // TypeScript type is Error for guidance, but JS users can pass anything
        const cause = (options === null || options === void 0 ? void 0 : options.cause) ? options.cause instanceof Error ? options.cause : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$NonError$2e$js__$5b$client$5d$__$28$ecmascript$29$__["NonError"](options.cause) : undefined;
        super((options === null || options === void 0 ? void 0 : options.code) ? "Forced retry: ".concat(options.code) : 'Forced retry', cause ? {
            cause
        } : undefined), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, "name", 'ForceRetryError'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, "customDelay", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, "code", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, "customRequest", void 0);
        this.customDelay = options === null || options === void 0 ? void 0 : options.delay;
        this.code = options === null || options === void 0 ? void 0 : options.code;
        this.customRequest = options === null || options === void 0 ? void 0 : options.request;
    }
} //# sourceMappingURL=ForceRetryError.js.map
}),
"[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/core/constants.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RetryMarker",
    ()=>RetryMarker,
    "kyOptionKeys",
    ()=>kyOptionKeys,
    "maxSafeTimeout",
    ()=>maxSafeTimeout,
    "requestMethods",
    ()=>requestMethods,
    "requestOptionsRegistry",
    ()=>requestOptionsRegistry,
    "responseTypes",
    ()=>responseTypes,
    "retry",
    ()=>retry,
    "stop",
    ()=>stop,
    "supportsAbortController",
    ()=>supportsAbortController,
    "supportsAbortSignal",
    ()=>supportsAbortSignal,
    "supportsFormData",
    ()=>supportsFormData,
    "supportsRequestStreams",
    ()=>supportsRequestStreams,
    "supportsResponseStreams",
    ()=>supportsResponseStreams,
    "usualFormBoundarySize",
    ()=>usualFormBoundarySize,
    "vendorSpecificOptions",
    ()=>vendorSpecificOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [client] (ecmascript)");
;
const supportsRequestStreams = (()=>{
    let duplexAccessed = false;
    let hasContentType = false;
    const supportsReadableStream = typeof globalThis.ReadableStream === 'function';
    const supportsRequest = typeof globalThis.Request === 'function';
    if (supportsReadableStream && supportsRequest) {
        try {
            hasContentType = new globalThis.Request('https://empty.invalid', {
                body: new globalThis.ReadableStream(),
                method: 'POST',
                // @ts-expect-error - Types are outdated.
                get duplex () {
                    duplexAccessed = true;
                    return 'half';
                }
            }).headers.has('Content-Type');
        } catch (error) {
            // QQBrowser on iOS throws "unsupported BodyInit type" error (see issue #581)
            if (error instanceof Error && error.message === 'unsupported BodyInit type') {
                return false;
            }
            throw error;
        }
    }
    return duplexAccessed && !hasContentType;
})();
const supportsAbortController = typeof globalThis.AbortController === 'function';
const supportsAbortSignal = typeof globalThis.AbortSignal === 'function' && typeof globalThis.AbortSignal.any === 'function';
const supportsResponseStreams = typeof globalThis.ReadableStream === 'function';
const supportsFormData = typeof globalThis.FormData === 'function';
const requestMethods = [
    'get',
    'post',
    'put',
    'patch',
    'head',
    'delete'
];
const validate = ()=>undefined;
validate();
const responseTypes = {
    json: 'application/json',
    text: 'text/*',
    formData: 'multipart/form-data',
    arrayBuffer: '*/*',
    blob: '*/*',
    // Supported in modern Fetch implementations (for example, browsers and recent Node.js/undici).
    // We still feature-check at runtime before exposing the shortcut.
    bytes: '*/*'
};
const maxSafeTimeout = 2_147_483_647;
const usualFormBoundarySize = new TextEncoder().encode('------WebKitFormBoundaryaxpyiPgbbPti10Rw').length;
const stop = Symbol('stop');
class RetryMarker {
    constructor(options){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, "options", void 0);
        this.options = options;
    }
}
const retry = (options)=>new RetryMarker(options);
const kyOptionKeys = {
    json: true,
    parseJson: true,
    stringifyJson: true,
    searchParams: true,
    prefixUrl: true,
    retry: true,
    timeout: true,
    hooks: true,
    throwHttpErrors: true,
    onDownloadProgress: true,
    onUploadProgress: true,
    fetch: true,
    context: true
};
const vendorSpecificOptions = {
    next: true
};
const requestOptionsRegistry = {
    method: true,
    headers: true,
    body: true,
    mode: true,
    credentials: true,
    cache: true,
    redirect: true,
    referrer: true,
    referrerPolicy: true,
    integrity: true,
    keepalive: true,
    signal: true,
    window: true,
    duplex: true
}; //# sourceMappingURL=constants.js.map
}),
"[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/body.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBodySize",
    ()=>getBodySize,
    "streamRequest",
    ()=>streamRequest,
    "streamResponse",
    ()=>streamResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/core/constants.js [client] (ecmascript)");
;
const getBodySize = (body)=>{
    if (!body) {
        return 0;
    }
    if (body instanceof FormData) {
        // This is an approximation, as FormData size calculation is not straightforward
        let size = 0;
        for (const [key, value] of body){
            size += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["usualFormBoundarySize"];
            size += new TextEncoder().encode('Content-Disposition: form-data; name="'.concat(key, '"')).length;
            size += typeof value === 'string' ? new TextEncoder().encode(value).length : value.size;
        }
        return size;
    }
    if (body instanceof Blob) {
        return body.size;
    }
    if (body instanceof ArrayBuffer) {
        return body.byteLength;
    }
    if (typeof body === 'string') {
        return new TextEncoder().encode(body).length;
    }
    if (body instanceof URLSearchParams) {
        return new TextEncoder().encode(body.toString()).length;
    }
    if ('byteLength' in body) {
        return body.byteLength;
    }
    if (typeof body === 'object' && body !== null) {
        try {
            const jsonString = JSON.stringify(body);
            return new TextEncoder().encode(jsonString).length;
        } catch (e) {
            return 0;
        }
    }
    return 0; // Default case, unable to determine size
};
const withProgress = (stream, totalBytes, onProgress)=>{
    let previousChunk;
    let transferredBytes = 0;
    return stream.pipeThrough(new TransformStream({
        transform (currentChunk, controller) {
            controller.enqueue(currentChunk);
            if (previousChunk) {
                transferredBytes += previousChunk.byteLength;
                let percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
                // Avoid reporting 100% progress before the stream is actually finished (in case totalBytes is inaccurate)
                if (percent >= 1) {
                    // Epsilon is used here to get as close as possible to 100% without reaching it.
                    // If we were to use 0.99 here, percent could potentially go backwards.
                    percent = 1 - Number.EPSILON;
                }
                onProgress === null || onProgress === void 0 ? void 0 : onProgress({
                    percent,
                    totalBytes: Math.max(totalBytes, transferredBytes),
                    transferredBytes
                }, previousChunk);
            }
            previousChunk = currentChunk;
        },
        flush () {
            if (previousChunk) {
                transferredBytes += previousChunk.byteLength;
                onProgress === null || onProgress === void 0 ? void 0 : onProgress({
                    percent: 1,
                    totalBytes: Math.max(totalBytes, transferredBytes),
                    transferredBytes
                }, previousChunk);
            }
        }
    }));
};
const streamResponse = (response, onDownloadProgress)=>{
    if (!response.body) {
        return response;
    }
    if (response.status === 204) {
        return new Response(null, {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
        });
    }
    const totalBytes = Math.max(0, Number(response.headers.get('content-length')) || 0);
    return new Response(withProgress(response.body, totalBytes, onDownloadProgress), {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers
    });
};
const streamRequest = (request, onUploadProgress, originalBody)=>{
    if (!request.body) {
        return request;
    }
    // Use original body for size calculation since request.body is already a stream
    const totalBytes = getBodySize(originalBody !== null && originalBody !== void 0 ? originalBody : request.body);
    return new Request(request, {
        // @ts-expect-error - Types are outdated.
        duplex: 'half',
        body: withProgress(request.body, totalBytes, onUploadProgress)
    });
}; //# sourceMappingURL=body.js.map
}),
"[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/is.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// eslint-disable-next-line @typescript-eslint/ban-types
__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
const isObject = (value)=>value !== null && typeof value === 'object'; //# sourceMappingURL=is.js.map
}),
"[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/merge.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deepMerge",
    ()=>deepMerge,
    "mergeHeaders",
    ()=>mergeHeaders,
    "mergeHooks",
    ()=>mergeHooks,
    "validateAndMerge",
    ()=>validateAndMerge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/core/constants.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/is.js [client] (ecmascript)");
;
;
const validateAndMerge = function() {
    for(var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++){
        sources[_key] = arguments[_key];
    }
    for (const source of sources){
        if ((!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isObject"])(source) || Array.isArray(source)) && source !== undefined) {
            throw new TypeError('The `options` argument must be an object');
        }
    }
    return deepMerge({}, ...sources);
};
const mergeHeaders = function() {
    let source1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, source2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const result = new globalThis.Headers(source1);
    const isHeadersInstance = source2 instanceof globalThis.Headers;
    const source = new globalThis.Headers(source2);
    for (const [key, value] of source.entries()){
        if (isHeadersInstance && value === 'undefined' || value === undefined) {
            result.delete(key);
        } else {
            result.set(key, value);
        }
    }
    return result;
};
function newHookValue(original, incoming, property) {
    var _original_property, _incoming_property;
    return Object.hasOwn(incoming, property) && incoming[property] === undefined ? [] : deepMerge((_original_property = original[property]) !== null && _original_property !== void 0 ? _original_property : [], (_incoming_property = incoming[property]) !== null && _incoming_property !== void 0 ? _incoming_property : []);
}
const mergeHooks = function() {
    let original = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, incoming = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return {
        beforeRequest: newHookValue(original, incoming, 'beforeRequest'),
        beforeRetry: newHookValue(original, incoming, 'beforeRetry'),
        afterResponse: newHookValue(original, incoming, 'afterResponse'),
        beforeError: newHookValue(original, incoming, 'beforeError')
    };
};
const appendSearchParameters = (target, source)=>{
    const result = new URLSearchParams();
    for (const input of [
        target,
        source
    ]){
        if (input === undefined) {
            continue;
        }
        if (input instanceof URLSearchParams) {
            for (const [key, value] of input.entries()){
                result.append(key, value);
            }
        } else if (Array.isArray(input)) {
            for (const pair of input){
                if (!Array.isArray(pair) || pair.length !== 2) {
                    throw new TypeError('Array search parameters must be provided in [[key, value], ...] format');
                }
                result.append(String(pair[0]), String(pair[1]));
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isObject"])(input)) {
            for (const [key, value] of Object.entries(input)){
                if (value !== undefined) {
                    result.append(key, String(value));
                }
            }
        } else {
            // String
            const parameters = new URLSearchParams(input);
            for (const [key, value] of parameters.entries()){
                result.append(key, value);
            }
        }
    }
    return result;
};
const deepMerge = function() {
    for(var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++){
        sources[_key] = arguments[_key];
    }
    let returnValue = {};
    let headers = {};
    let hooks = {};
    let searchParameters;
    const signals = [];
    for (const source of sources){
        if (Array.isArray(source)) {
            if (!Array.isArray(returnValue)) {
                returnValue = [];
            }
            returnValue = [
                ...returnValue,
                ...source
            ];
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isObject"])(source)) {
            for (let [key, value] of Object.entries(source)){
                // Special handling for AbortSignal instances
                if (key === 'signal' && value instanceof globalThis.AbortSignal) {
                    signals.push(value);
                    continue;
                }
                // Special handling for context - shallow merge only
                if (key === 'context') {
                    if (value !== undefined && value !== null && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isObject"])(value) || Array.isArray(value))) {
                        throw new TypeError('The `context` option must be an object');
                    }
                    // Shallow merge: always create a new object to prevent mutation bugs
                    returnValue = {
                        ...returnValue,
                        context: value === undefined || value === null ? {} : {
                            ...returnValue.context,
                            ...value
                        }
                    };
                    continue;
                }
                // Special handling for searchParams
                if (key === 'searchParams') {
                    if (value === undefined || value === null) {
                        // Explicit undefined or null removes searchParams
                        searchParameters = undefined;
                    } else {
                        // First source: keep as-is to preserve type (string/object/URLSearchParams)
                        // Subsequent sources: merge and convert to URLSearchParams
                        searchParameters = searchParameters === undefined ? value : appendSearchParameters(searchParameters, value);
                    }
                    continue;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isObject"])(value) && key in returnValue) {
                    value = deepMerge(returnValue[key], value);
                }
                returnValue = {
                    ...returnValue,
                    [key]: value
                };
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isObject"])(source.hooks)) {
                hooks = mergeHooks(hooks, source.hooks);
                returnValue.hooks = hooks;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isObject"])(source.headers)) {
                headers = mergeHeaders(headers, source.headers);
                returnValue.headers = headers;
            }
        }
    }
    if (searchParameters !== undefined) {
        returnValue.searchParams = searchParameters;
    }
    if (signals.length > 0) {
        if (signals.length === 1) {
            returnValue.signal = signals[0];
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supportsAbortSignal"]) {
            returnValue.signal = AbortSignal.any(signals);
        } else {
            // When AbortSignal.any is not available, use the last signal
            // This maintains the previous behavior before signal merging was added
            // This can be remove when the `supportsAbortSignal` check is removed.`
            returnValue.signal = signals.at(-1);
        }
    }
    return returnValue;
}; //# sourceMappingURL=merge.js.map
}),
"[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/normalize.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeRequestMethod",
    ()=>normalizeRequestMethod,
    "normalizeRetryOptions",
    ()=>normalizeRetryOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/core/constants.js [client] (ecmascript)");
;
const normalizeRequestMethod = (input)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["requestMethods"].includes(input) ? input.toUpperCase() : input;
const retryMethods = [
    'get',
    'put',
    'head',
    'delete',
    'options',
    'trace'
];
const retryStatusCodes = [
    408,
    413,
    429,
    500,
    502,
    503,
    504
];
const retryAfterStatusCodes = [
    413,
    429,
    503
];
const defaultRetryOptions = {
    limit: 2,
    methods: retryMethods,
    statusCodes: retryStatusCodes,
    afterStatusCodes: retryAfterStatusCodes,
    maxRetryAfter: Number.POSITIVE_INFINITY,
    backoffLimit: Number.POSITIVE_INFINITY,
    delay: (attemptCount)=>0.3 * 2 ** (attemptCount - 1) * 1000,
    jitter: undefined,
    retryOnTimeout: false
};
const normalizeRetryOptions = function() {
    let retry = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _retry;
    if (typeof retry === 'number') {
        return {
            ...defaultRetryOptions,
            limit: retry
        };
    }
    if (retry.methods && !Array.isArray(retry.methods)) {
        throw new Error('retry.methods must be an array');
    }
    (_retry = retry).methods && (_retry.methods = retry.methods.map((method)=>method.toLowerCase()));
    if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
        throw new Error('retry.statusCodes must be an array');
    }
    const normalizedRetry = Object.fromEntries(Object.entries(retry).filter((param)=>{
        let [, value] = param;
        return value !== undefined;
    }));
    return {
        ...defaultRetryOptions,
        ...normalizedRetry
    };
}; //# sourceMappingURL=normalize.js.map
}),
"[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/TimeoutError.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimeoutError",
    ()=>TimeoutError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [client] (ecmascript)");
;
class TimeoutError extends Error {
    constructor(request){
        super("Request timed out: ".concat(request.method, " ").concat(request.url)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, "request", void 0);
        this.name = 'TimeoutError';
        this.request = request;
    }
} //# sourceMappingURL=TimeoutError.js.map
}),
"[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/timeout.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>timeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/TimeoutError.js [client] (ecmascript)");
;
async function timeout(request, init, abortController, options) {
    return new Promise((resolve, reject)=>{
        const timeoutId = setTimeout(()=>{
            if (abortController) {
                abortController.abort();
            }
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$client$5d$__$28$ecmascript$29$__["TimeoutError"](request));
        }, options.timeout);
        void options.fetch(request, init).then(resolve).catch(reject).then(()=>{
            clearTimeout(timeoutId);
        });
    });
} //# sourceMappingURL=timeout.js.map
}),
"[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/delay.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// https://github.com/sindresorhus/delay/tree/ab98ae8dfcb38e1593286c94d934e70d14a4e111
__turbopack_context__.s([
    "default",
    ()=>delay
]);
async function delay(ms, param) {
    let { signal } = param;
    return new Promise((resolve, reject)=>{
        if (signal) {
            signal.throwIfAborted();
            signal.addEventListener('abort', abortHandler, {
                once: true
            });
        }
        function abortHandler() {
            clearTimeout(timeoutId);
            reject(signal.reason);
        }
        const timeoutId = setTimeout(()=>{
            signal === null || signal === void 0 ? void 0 : signal.removeEventListener('abort', abortHandler);
            resolve();
        }, ms);
    });
} //# sourceMappingURL=delay.js.map
}),
"[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/options.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findUnknownOptions",
    ()=>findUnknownOptions,
    "hasSearchParameters",
    ()=>hasSearchParameters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/core/constants.js [client] (ecmascript)");
;
const findUnknownOptions = (request, options)=>{
    const unknownOptions = {};
    for(const key in options){
        // Skip inherited properties
        if (!Object.hasOwn(options, key)) {
            continue;
        }
        // An option is passed to fetch() if:
        // 1. It's not a standard RequestInit option (not in requestOptionsRegistry)
        // 2. It's not a ky-specific option (not in kyOptionKeys)
        // 3. Either:
        //    a. It's not on the Request object, OR
        //    b. It's a vendor-specific option that should always be passed (in vendorSpecificOptions)
        if (!(key in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["requestOptionsRegistry"]) && !(key in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["kyOptionKeys"]) && (!(key in request) || key in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["vendorSpecificOptions"])) {
            unknownOptions[key] = options[key];
        }
    }
    return unknownOptions;
};
const hasSearchParameters = (search)=>{
    if (search === undefined) {
        return false;
    }
    // The `typeof array` still gives "object", so we need different checking for array.
    if (Array.isArray(search)) {
        return search.length > 0;
    }
    if (search instanceof URLSearchParams) {
        return search.size > 0;
    }
    // Record
    if (typeof search === 'object') {
        return Object.keys(search).length > 0;
    }
    if (typeof search === 'string') {
        return search.trim().length > 0;
    }
    return Boolean(search);
}; //# sourceMappingURL=options.js.map
}),
"[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/type-guards.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isForceRetryError",
    ()=>isForceRetryError,
    "isHTTPError",
    ()=>isHTTPError,
    "isKyError",
    ()=>isKyError,
    "isTimeoutError",
    ()=>isTimeoutError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$HTTPError$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/HTTPError.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/TimeoutError.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$ForceRetryError$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/ForceRetryError.js [client] (ecmascript)");
;
;
;
function isKyError(error) {
    return isHTTPError(error) || isTimeoutError(error) || isForceRetryError(error);
}
function isHTTPError(error) {
    return error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$HTTPError$2e$js__$5b$client$5d$__$28$ecmascript$29$__["HTTPError"] || (error === null || error === void 0 ? void 0 : error.name) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$HTTPError$2e$js__$5b$client$5d$__$28$ecmascript$29$__["HTTPError"].name;
}
function isTimeoutError(error) {
    return error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$client$5d$__$28$ecmascript$29$__["TimeoutError"] || (error === null || error === void 0 ? void 0 : error.name) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$client$5d$__$28$ecmascript$29$__["TimeoutError"].name;
}
function isForceRetryError(error) {
    return error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$ForceRetryError$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ForceRetryError"] || (error === null || error === void 0 ? void 0 : error.name) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$ForceRetryError$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ForceRetryError"].name;
} //# sourceMappingURL=type-guards.js.map
}),
"[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/core/Ky.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Ky",
    ()=>Ky
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_update.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_get.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_init.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_static_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_static_private_method_get.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$HTTPError$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/HTTPError.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$NonError$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/NonError.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$ForceRetryError$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/ForceRetryError.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$body$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/body.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/merge.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$normalize$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/normalize.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$timeout$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/timeout.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$delay$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/delay.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$options$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/options.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$type$2d$guards$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/type-guards.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/core/constants.js [client] (ecmascript)");
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
;
var _abortController = /*#__PURE__*/ new WeakMap(), _retryCount = /*#__PURE__*/ new WeakMap(), // eslint-disable-next-line @typescript-eslint/prefer-readonly -- False positive: #input is reassigned on line 202
_input = /*#__PURE__*/ new WeakMap(), _options = /*#__PURE__*/ new WeakMap(), _originalRequest = /*#__PURE__*/ new WeakMap(), _userProvidedAbortSignal = /*#__PURE__*/ new WeakMap(), _cachedNormalizedOptions = /*#__PURE__*/ new WeakMap(), _calculateDelay = /*#__PURE__*/ new WeakSet(), _calculateRetryDelay = /*#__PURE__*/ new WeakSet(), _decorateResponse = /*#__PURE__*/ new WeakSet(), _cancelBody = /*#__PURE__*/ new WeakSet(), _cancelResponseBody = /*#__PURE__*/ new WeakSet(), _retry = /*#__PURE__*/ new WeakSet(), _fetch = /*#__PURE__*/ new WeakSet(), _getNormalizedOptions = /*#__PURE__*/ new WeakSet(), _assignRequest = /*#__PURE__*/ new WeakSet(), _wrapRequestWithUploadProgress = /*#__PURE__*/ new WeakSet();
class Ky {
    static create(input, options) {
        const ky = new Ky(input, options);
        const function_ = async ()=>{
            if (typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _options).timeout === 'number' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _options).timeout > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["maxSafeTimeout"]) {
                throw new RangeError("The `timeout` option cannot be greater than ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["maxSafeTimeout"]));
            }
            // Delay the fetch so that body method shortcuts can set the Accept header
            await Promise.resolve();
            // Before using ky.request, _fetch clones it and saves the clone for future retries to use.
            // If retry is not needed, close the cloned request's ReadableStream for memory safety.
            let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _fetch, fetch).call(ky);
            for (const hook of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _options).hooks.afterResponse){
                // Clone the response before passing to hook so we can cancel it if needed
                const clonedResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _decorateResponse, decorateResponse).call(ky, response.clone());
                let modifiedResponse;
                try {
                    // eslint-disable-next-line no-await-in-loop
                    modifiedResponse = await hook(ky.request, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _getNormalizedOptions, getNormalizedOptions).call(ky), clonedResponse, {
                        retryCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _retryCount)
                    });
                } catch (error) {
                    // Cancel both responses to prevent memory leaks when hook throws
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _cancelResponseBody, cancelResponseBody).call(ky, clonedResponse);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _cancelResponseBody, cancelResponseBody).call(ky, response);
                    throw error;
                }
                if (modifiedResponse instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["RetryMarker"]) {
                    // Cancel both the cloned response passed to the hook and the current response to prevent resource leaks (especially important in Deno/Bun).
                    // Do not await cancellation since hooks can clone the response, leaving extra tee branches that keep cancel promises pending per the Streams spec.
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _cancelResponseBody, cancelResponseBody).call(ky, clonedResponse);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _cancelResponseBody, cancelResponseBody).call(ky, response);
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$ForceRetryError$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ForceRetryError"](modifiedResponse.options);
                }
                // Determine which response to use going forward
                const nextResponse = modifiedResponse instanceof globalThis.Response ? modifiedResponse : response;
                // Cancel any response bodies we won't use to prevent memory leaks.
                // Uses fire-and-forget since hooks may have cloned the response, creating tee branches that block cancellation.
                if (clonedResponse !== nextResponse) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _cancelResponseBody, cancelResponseBody).call(ky, clonedResponse);
                }
                if (response !== nextResponse) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _cancelResponseBody, cancelResponseBody).call(ky, response);
                }
                response = nextResponse;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _decorateResponse, decorateResponse).call(ky, response);
            if (!response.ok && (typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _options).throwHttpErrors === 'function' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _options).throwHttpErrors(response.status) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _options).throwHttpErrors)) {
                let error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$HTTPError$2e$js__$5b$client$5d$__$28$ecmascript$29$__["HTTPError"](response, ky.request, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _getNormalizedOptions, getNormalizedOptions).call(ky));
                for (const hook of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _options).hooks.beforeError){
                    // eslint-disable-next-line no-await-in-loop
                    error = await hook(error, {
                        retryCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _retryCount)
                    });
                }
                throw error;
            }
            // If `onDownloadProgress` is passed, it uses the stream API internally
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _options).onDownloadProgress) {
                if (typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _options).onDownloadProgress !== 'function') {
                    throw new TypeError('The `onDownloadProgress` option must be a function');
                }
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supportsResponseStreams"]) {
                    throw new Error('Streams are not supported in your environment. `ReadableStream` is missing.');
                }
                const progressResponse = response.clone();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _cancelResponseBody, cancelResponseBody).call(ky, response);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$body$2e$js__$5b$client$5d$__$28$ecmascript$29$__["streamResponse"])(progressResponse, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _options).onDownloadProgress);
            }
            return response;
        };
        // Always wrap in #retry to catch forced retries from afterResponse hooks
        // Method retriability is checked in #calculateRetryDelay for non-forced retries
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _retry, retry).call(ky, function_).finally(()=>{
            const originalRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _originalRequest);
            var _originalRequest_body;
            // Ignore cancellation errors from already-locked or already-consumed streams.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _cancelBody, cancelBody).call(ky, (_originalRequest_body = originalRequest === null || originalRequest === void 0 ? void 0 : originalRequest.body) !== null && _originalRequest_body !== void 0 ? _originalRequest_body : undefined);
            var _ky_request_body;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(ky, _cancelBody, cancelBody).call(ky, (_ky_request_body = ky.request.body) !== null && _ky_request_body !== void 0 ? _ky_request_body : undefined);
        });
        for (const [type, mimeType] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["responseTypes"])){
            var _globalThis_Response_prototype, _globalThis_Response;
            // Only expose `.bytes()` when the environment implements it.
            if (type === 'bytes' && typeof ((_globalThis_Response = globalThis.Response) === null || _globalThis_Response === void 0 ? void 0 : (_globalThis_Response_prototype = _globalThis_Response.prototype) === null || _globalThis_Response_prototype === void 0 ? void 0 : _globalThis_Response_prototype.bytes) !== 'function') {
                continue;
            }
            result[type] = async ()=>{
                // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
                ky.request.headers.set('accept', ky.request.headers.get('accept') || mimeType);
                const response = await result;
                if (type === 'json') {
                    if (response.status === 204) {
                        return '';
                    }
                    const text = await response.text();
                    if (text === '') {
                        return '';
                    }
                    if (options.parseJson) {
                        return options.parseJson(text);
                    }
                    return JSON.parse(text);
                }
                return response[type]();
            };
        }
        return result;
    }
    // eslint-disable-next-line complexity
    constructor(input, options = {}){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _calculateDelay);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _calculateRetryDelay);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _decorateResponse);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _cancelBody);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _cancelResponseBody);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _retry);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _fetch);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _getNormalizedOptions);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _assignRequest);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _wrapRequestWithUploadProgress);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, "request", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _abortController, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _retryCount, {
            writable: true,
            value: 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _input, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _originalRequest, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _userProvidedAbortSignal, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _cachedNormalizedOptions, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _input, input);
        var _options_method, _ref, _options_throwHttpErrors, _options_timeout, _options_fetch, _options_context;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options, {
            ...options,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$client$5d$__$28$ecmascript$29$__["mergeHeaders"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _input).headers, options.headers),
            hooks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$client$5d$__$28$ecmascript$29$__["mergeHooks"])({
                beforeRequest: [],
                beforeRetry: [],
                beforeError: [],
                afterResponse: []
            }, options.hooks),
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$normalize$2e$js__$5b$client$5d$__$28$ecmascript$29$__["normalizeRequestMethod"])((_ref = (_options_method = options.method) !== null && _options_method !== void 0 ? _options_method : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _input).method) !== null && _ref !== void 0 ? _ref : 'GET'),
            // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
            prefixUrl: String(options.prefixUrl || ''),
            retry: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$normalize$2e$js__$5b$client$5d$__$28$ecmascript$29$__["normalizeRetryOptions"])(options.retry),
            throwHttpErrors: (_options_throwHttpErrors = options.throwHttpErrors) !== null && _options_throwHttpErrors !== void 0 ? _options_throwHttpErrors : true,
            timeout: (_options_timeout = options.timeout) !== null && _options_timeout !== void 0 ? _options_timeout : 10_000,
            fetch: (_options_fetch = options.fetch) !== null && _options_fetch !== void 0 ? _options_fetch : globalThis.fetch.bind(globalThis),
            context: (_options_context = options.context) !== null && _options_context !== void 0 ? _options_context : {}
        });
        if (typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _input) !== 'string' && !((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _input) instanceof URL || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _input) instanceof globalThis.Request)) {
            throw new TypeError('`input` must be a string, URL, or Request');
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).prefixUrl && typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _input) === 'string') {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _input).startsWith('/')) {
                throw new Error('`input` must not begin with a slash when using `prefixUrl`');
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).prefixUrl.endsWith('/')) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).prefixUrl += '/';
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _input, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).prefixUrl + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _input));
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supportsAbortController"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supportsAbortSignal"]) {
            var _class_private_field_get_signal;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _userProvidedAbortSignal, (_class_private_field_get_signal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).signal) !== null && _class_private_field_get_signal !== void 0 ? _class_private_field_get_signal : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _input).signal);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _abortController, new globalThis.AbortController());
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).signal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _userProvidedAbortSignal) ? AbortSignal.any([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _userProvidedAbortSignal),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _abortController).signal
            ]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _abortController).signal;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supportsRequestStreams"]) {
            // @ts-expect-error - Types are outdated.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).duplex = 'half';
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).json !== undefined) {
            var _class_private_field_get_stringifyJson, _class_private_field_get;
            var _class_private_field_get_stringifyJson1;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).body = (_class_private_field_get_stringifyJson1 = (_class_private_field_get_stringifyJson = (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options)).stringifyJson) === null || _class_private_field_get_stringifyJson === void 0 ? void 0 : _class_private_field_get_stringifyJson.call(_class_private_field_get, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).json)) !== null && _class_private_field_get_stringifyJson1 !== void 0 ? _class_private_field_get_stringifyJson1 : JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).json);
            var _class_private_field_get_headers_get;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).headers.set('content-type', (_class_private_field_get_headers_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).headers.get('content-type')) !== null && _class_private_field_get_headers_get !== void 0 ? _class_private_field_get_headers_get : 'application/json');
        }
        // To provide correct form boundary, Content-Type header should be deleted when creating Request from another Request with FormData/URLSearchParams body
        // Only delete if user didn't explicitly provide a custom content-type
        const userProvidedContentType = options.headers && new globalThis.Headers(options.headers).has('content-type');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _input) instanceof globalThis.Request && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supportsFormData"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).body instanceof globalThis.FormData || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).body instanceof URLSearchParams) && !userProvidedContentType) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).headers.delete('content-type');
        }
        this.request = new globalThis.Request((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _input), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options));
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$options$2e$js__$5b$client$5d$__$28$ecmascript$29$__["hasSearchParameters"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).searchParams)) {
            // eslint-disable-next-line unicorn/prevent-abbreviations
            const textSearchParams = typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).searchParams === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).searchParams.replace(/^\?/, '') : new URLSearchParams((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_static_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(Ky, Ky, normalizeSearchParams).call(Ky, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).searchParams)).toString();
            // eslint-disable-next-line unicorn/prevent-abbreviations
            const searchParams = '?' + textSearchParams;
            const url = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, searchParams);
            // Recreate request with the updated URL. We already have all options in this.#options, including duplex.
            this.request = new globalThis.Request(url, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options));
        }
        // If `onUploadProgress` is passed, it uses the stream API internally
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).onUploadProgress) {
            if (typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).onUploadProgress !== 'function') {
                throw new TypeError('The `onUploadProgress` option must be a function');
            }
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supportsRequestStreams"]) {
                throw new Error('Request streams are not supported in your environment. The `duplex` option for `Request` is not available.');
            }
            var _class_private_field_get_body;
            this.request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _wrapRequestWithUploadProgress, wrapRequestWithUploadProgress).call(this, this.request, (_class_private_field_get_body = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).body) !== null && _class_private_field_get_body !== void 0 ? _class_private_field_get_body : undefined);
        }
    }
} //# sourceMappingURL=Ky.js.map
// eslint-disable-next-line unicorn/prevent-abbreviations
function normalizeSearchParams(searchParams) {
    // Filter out undefined values from plain objects
    if (searchParams && typeof searchParams === 'object' && !Array.isArray(searchParams) && !(searchParams instanceof URLSearchParams)) {
        return Object.fromEntries(Object.entries(searchParams).filter((param)=>{
            let [, value] = param;
            return value !== undefined;
        }));
    }
    return searchParams;
}
function calculateDelay() {
    const retryDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).retry.delay((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _retryCount));
    let jitteredDelay = retryDelay;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).retry.jitter === true) {
        jitteredDelay = Math.random() * retryDelay;
    } else if (typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).retry.jitter === 'function') {
        jitteredDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).retry.jitter(retryDelay);
        if (!Number.isFinite(jitteredDelay) || jitteredDelay < 0) {
            jitteredDelay = retryDelay;
        }
    }
    var _class_private_field_get_retry_backoffLimit;
    // Handle undefined backoffLimit by treating it as no limit (Infinity)
    const backoffLimit = (_class_private_field_get_retry_backoffLimit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).retry.backoffLimit) !== null && _class_private_field_get_retry_backoffLimit !== void 0 ? _class_private_field_get_retry_backoffLimit : Number.POSITIVE_INFINITY;
    return Math.min(backoffLimit, jitteredDelay);
}
async function calculateRetryDelay(error) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _retryCount).value++;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _retryCount) > (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).retry.limit) {
        throw error;
    }
    // Wrap non-Error throws to ensure consistent error handling
    const errorObject = error instanceof Error ? error : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$NonError$2e$js__$5b$client$5d$__$28$ecmascript$29$__["NonError"](error);
    // Handle forced retry from afterResponse hook - skip method check and shouldRetry
    if (errorObject instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$ForceRetryError$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ForceRetryError"]) {
        var _errorObject_customDelay;
        return (_errorObject_customDelay = errorObject.customDelay) !== null && _errorObject_customDelay !== void 0 ? _errorObject_customDelay : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _calculateDelay, calculateDelay).call(this);
    }
    // Check if method is retriable for non-forced retries
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).retry.methods.includes(this.request.method.toLowerCase())) {
        throw error;
    }
    // User-provided shouldRetry function takes precedence over all other checks
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).retry.shouldRetry !== undefined) {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).retry.shouldRetry({
            error: errorObject,
            retryCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _retryCount)
        });
        // Strict boolean checking - only exact true/false are handled specially
        if (result === false) {
            throw error;
        }
        if (result === true) {
            // Force retry - skip all other validation and return delay
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _calculateDelay, calculateDelay).call(this);
        }
    // If undefined or any other value, fall through to default behavior
    }
    // Default timeout behavior
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$type$2d$guards$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isTimeoutError"])(error) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).retry.retryOnTimeout) {
        throw error;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$type$2d$guards$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isHTTPError"])(error)) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).retry.statusCodes.includes(error.response.status)) {
            throw error;
        }
        var _error_response_headers_get, _ref, _ref1 // Symfony-based services
        , _ref2 // GitHub
        ;
        const retryAfter = (_ref2 = (_ref1 = (_ref = (_error_response_headers_get = error.response.headers.get('Retry-After')) !== null && _error_response_headers_get !== void 0 ? _error_response_headers_get : error.response.headers.get('RateLimit-Reset')) !== null && _ref !== void 0 ? _ref : error.response.headers.get('X-RateLimit-Retry-After')) !== null && _ref1 !== void 0 ? _ref1 : error.response.headers.get('X-RateLimit-Reset')) !== null && _ref2 !== void 0 ? _ref2 : error.response.headers.get('X-Rate-Limit-Reset'); // Twitter
        if (retryAfter && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).retry.afterStatusCodes.includes(error.response.status)) {
            let after = Number(retryAfter) * 1000;
            if (Number.isNaN(after)) {
                after = Date.parse(retryAfter) - Date.now();
            } else if (after >= Date.parse('2024-01-01')) {
                // A large number is treated as a timestamp (fixed threshold protects against clock skew)
                after -= Date.now();
            }
            var _class_private_field_get_retry_maxRetryAfter;
            const max = (_class_private_field_get_retry_maxRetryAfter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).retry.maxRetryAfter) !== null && _class_private_field_get_retry_maxRetryAfter !== void 0 ? _class_private_field_get_retry_maxRetryAfter : after;
            // Don't apply jitter when server provides explicit retry timing
            return after < max ? after : max;
        }
        if (error.response.status === 413) {
            throw error;
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _calculateDelay, calculateDelay).call(this);
}
function decorateResponse(response) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).parseJson) {
        response.json = async ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).parseJson(await response.text());
    }
    return response;
}
function cancelBody(body) {
    if (!body) {
        return;
    }
    // Ignore cancellation failures from already-locked or already-consumed streams.
    void body.cancel().catch(()=>undefined);
}
function cancelResponseBody(response) {
    var _response_body;
    // Ignore cancellation failures from already-locked or already-consumed streams.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _cancelBody, cancelBody).call(this, (_response_body = response.body) !== null && _response_body !== void 0 ? _response_body : undefined);
}
async function retry(function_) {
    try {
        return await function_();
    } catch (error) {
        const ms = Math.min(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _calculateRetryDelay, calculateRetryDelay).call(this, error), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["maxSafeTimeout"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _retryCount) < 1) {
            throw error;
        }
        // Only use user-provided signal for delay, not our internal abortController
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$delay$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(ms, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _userProvidedAbortSignal) ? {
            signal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _userProvidedAbortSignal)
        } : {});
        // Apply custom request from forced retry before beforeRetry hooks
        // Ensure the custom request has the correct managed signal for timeouts and user aborts
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$ForceRetryError$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ForceRetryError"] && error.customRequest) {
            const managedRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).signal ? new globalThis.Request(error.customRequest, {
                signal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).signal
            }) : new globalThis.Request(error.customRequest);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _assignRequest, assignRequest).call(this, managedRequest);
        }
        for (const hook of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).hooks.beforeRetry){
            // eslint-disable-next-line no-await-in-loop
            const hookResult = await hook({
                request: this.request,
                options: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _getNormalizedOptions, getNormalizedOptions).call(this),
                error: error,
                retryCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _retryCount)
            });
            if (hookResult instanceof globalThis.Request) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _assignRequest, assignRequest).call(this, hookResult);
                break;
            }
            // If a Response is returned, use it and skip the retry
            if (hookResult instanceof globalThis.Response) {
                return hookResult;
            }
            // If `stop` is returned from the hook, the retry process is stopped
            if (hookResult === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["stop"]) {
                return;
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _retry, retry).call(this, function_);
    }
}
async function fetch() {
    var _class_private_field_get;
    // Reset abortController if it was aborted (happens on timeout retry)
    if ((_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _abortController)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.signal.aborted) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _abortController, new globalThis.AbortController());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).signal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _userProvidedAbortSignal) ? AbortSignal.any([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _userProvidedAbortSignal),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _abortController).signal
        ]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _abortController).signal;
        // Recreate request with new signal
        this.request = new globalThis.Request(this.request, {
            signal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).signal
        });
    }
    for (const hook of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).hooks.beforeRequest){
        // eslint-disable-next-line no-await-in-loop
        const result = await hook(this.request, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _getNormalizedOptions, getNormalizedOptions).call(this), {
            retryCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _retryCount)
        });
        if (result instanceof Response) {
            return result;
        }
        if (result instanceof globalThis.Request) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _assignRequest, assignRequest).call(this, result);
            break;
        }
    }
    const nonRequestOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$options$2e$js__$5b$client$5d$__$28$ecmascript$29$__["findUnknownOptions"])(this.request, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options));
    // Cloning is done here to prepare in advance for retries
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _originalRequest, this.request);
    this.request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _originalRequest).clone();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).timeout === false) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _originalRequest), nonRequestOptions);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$timeout$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _originalRequest), nonRequestOptions, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _abortController), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options));
}
function getNormalizedOptions() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _cachedNormalizedOptions)) {
        const { hooks, ...normalizedOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _cachedNormalizedOptions, Object.freeze(normalizedOptions));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _cachedNormalizedOptions);
}
function assignRequest(request) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _cachedNormalizedOptions, undefined);
    this.request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _wrapRequestWithUploadProgress, wrapRequestWithUploadProgress).call(this, request);
}
function wrapRequestWithUploadProgress(request, originalBody) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).onUploadProgress || !request.body) {
        return request;
    }
    var _ref;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$body$2e$js__$5b$client$5d$__$28$ecmascript$29$__["streamRequest"])(request, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).onUploadProgress, (_ref = originalBody !== null && originalBody !== void 0 ? originalBody : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, _options).body) !== null && _ref !== void 0 ? _ref : undefined);
}
}),
"[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/index.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/*! MIT License © Sindre Sorhus */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$Ky$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/core/Ky.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/core/constants.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/merge.js [client] (ecmascript)");
;
;
;
const createInstance = (defaults)=>{
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    const ky = (input, options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$Ky$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Ky"].create(input, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$client$5d$__$28$ecmascript$29$__["validateAndMerge"])(defaults, options));
    for (const method of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["requestMethods"]){
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        ky[method] = (input, options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$Ky$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Ky"].create(input, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$client$5d$__$28$ecmascript$29$__["validateAndMerge"])(defaults, options, {
                method
            }));
    }
    ky.create = (newDefaults)=>createInstance((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$client$5d$__$28$ecmascript$29$__["validateAndMerge"])(newDefaults));
    ky.extend = (newDefaults)=>{
        if (typeof newDefaults === 'function') {
            newDefaults = newDefaults(defaults !== null && defaults !== void 0 ? defaults : {});
        }
        return createInstance((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$client$5d$__$28$ecmascript$29$__["validateAndMerge"])(defaults, newDefaults));
    };
    ky.stop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["stop"];
    ky.retry = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ky$40$1$2e$14$2e$3$2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["retry"];
    return ky;
};
const ky = createInstance();
const __TURBOPACK__default__export__ = ky;
;
;
;
;
 // Intentionally not exporting this for now as it's just an implementation detail and we don't want to commit to a certain API yet at least.
 // export {NonError} from './errors/NonError.js';
 //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=87e64_ky_distribution_6ac75d94._.js.map