(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/_5545c8._.js", {

"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/globals.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "edgeInstrumentationOnRequestError": (()=>edgeInstrumentationOnRequestError),
    "ensureInstrumentationRegistered": (()=>ensureInstrumentationRegistered),
    "getEdgeInstrumentationModule": (()=>getEdgeInstrumentationModule)
});
async function getEdgeInstrumentationModule() {
    const instrumentation = '_ENTRIES' in globalThis && _ENTRIES.middleware_instrumentation && await _ENTRIES.middleware_instrumentation;
    return instrumentation;
}
let instrumentationModulePromise = null;
async function registerInstrumentation() {
    // Ensure registerInstrumentation is not called in production build
    if (process.env.NEXT_PHASE === 'phase-production-build') return;
    if (!instrumentationModulePromise) {
        instrumentationModulePromise = getEdgeInstrumentationModule();
    }
    const instrumentation = await instrumentationModulePromise;
    if (instrumentation == null ? void 0 : instrumentation.register) {
        try {
            await instrumentation.register();
        } catch (err) {
            err.message = `An error occurred while loading instrumentation hook: ${err.message}`;
            throw err;
        }
    }
}
async function edgeInstrumentationOnRequestError(...args) {
    const instrumentation = await getEdgeInstrumentationModule();
    try {
        var _instrumentation_onRequestError;
        await (instrumentation == null ? void 0 : (_instrumentation_onRequestError = instrumentation.onRequestError) == null ? void 0 : _instrumentation_onRequestError.call(instrumentation, ...args));
    } catch (err) {
        // Log the soft error and continue, since the original error has already been thrown
        console.error('Error in instrumentation.onRequestError:', err);
    }
}
let registerInstrumentationPromise = null;
function ensureInstrumentationRegistered() {
    if (!registerInstrumentationPromise) {
        registerInstrumentationPromise = registerInstrumentation();
    }
    return registerInstrumentationPromise;
}
function getUnsupportedModuleErrorMessage(module) {
    // warning: if you change these messages, you must adjust how react-dev-overlay's middleware detects modules not found
    return `The edge runtime does not support Node.js '${module}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
}
function __import_unsupported(moduleName) {
    const proxy = new Proxy(function() {}, {
        get (_obj, prop) {
            if (prop === 'then') {
                return {};
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        construct () {
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        apply (_target, _this, args) {
            if (typeof args[0] === 'function') {
                return args[0](proxy);
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        }
    });
    return new Proxy({}, {
        get: ()=>proxy
    });
}
function enhanceGlobals() {
    // The condition is true when the "process" module is provided
    if (process !== global.process) {
        // prefer local process but global.process has correct "env"
        process.env = global.process.env;
        global.process = process;
    }
    // to allow building code that import but does not use node.js modules,
    // webpack will expect this function to exist in global scope
    Object.defineProperty(globalThis, '__import_unsupported', {
        value: __import_unsupported,
        enumerable: false,
        configurable: false
    });
    // Eagerly fire instrumentation hook to make the startup faster.
    void ensureInstrumentationRegistered();
}
enhanceGlobals(); //# sourceMappingURL=globals.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "PageSignatureError": (()=>PageSignatureError),
    "RemovedPageError": (()=>RemovedPageError),
    "RemovedUAError": (()=>RemovedUAError)
});
class PageSignatureError extends Error {
    constructor({ page }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
} //# sourceMappingURL=error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ACTION_SUFFIX": (()=>ACTION_SUFFIX),
    "APP_DIR_ALIAS": (()=>APP_DIR_ALIAS),
    "CACHE_ONE_YEAR": (()=>CACHE_ONE_YEAR),
    "DOT_NEXT_ALIAS": (()=>DOT_NEXT_ALIAS),
    "ESLINT_DEFAULT_DIRS": (()=>ESLINT_DEFAULT_DIRS),
    "GSP_NO_RETURNED_VALUE": (()=>GSP_NO_RETURNED_VALUE),
    "GSSP_COMPONENT_MEMBER_ERROR": (()=>GSSP_COMPONENT_MEMBER_ERROR),
    "GSSP_NO_RETURNED_VALUE": (()=>GSSP_NO_RETURNED_VALUE),
    "INFINITE_CACHE": (()=>INFINITE_CACHE),
    "INSTRUMENTATION_HOOK_FILENAME": (()=>INSTRUMENTATION_HOOK_FILENAME),
    "MATCHED_PATH_HEADER": (()=>MATCHED_PATH_HEADER),
    "MIDDLEWARE_FILENAME": (()=>MIDDLEWARE_FILENAME),
    "MIDDLEWARE_LOCATION_REGEXP": (()=>MIDDLEWARE_LOCATION_REGEXP),
    "NEXT_BODY_SUFFIX": (()=>NEXT_BODY_SUFFIX),
    "NEXT_CACHE_IMPLICIT_TAG_ID": (()=>NEXT_CACHE_IMPLICIT_TAG_ID),
    "NEXT_CACHE_REVALIDATED_TAGS_HEADER": (()=>NEXT_CACHE_REVALIDATED_TAGS_HEADER),
    "NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER": (()=>NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER),
    "NEXT_CACHE_SOFT_TAGS_HEADER": (()=>NEXT_CACHE_SOFT_TAGS_HEADER),
    "NEXT_CACHE_SOFT_TAG_MAX_LENGTH": (()=>NEXT_CACHE_SOFT_TAG_MAX_LENGTH),
    "NEXT_CACHE_TAGS_HEADER": (()=>NEXT_CACHE_TAGS_HEADER),
    "NEXT_CACHE_TAG_MAX_ITEMS": (()=>NEXT_CACHE_TAG_MAX_ITEMS),
    "NEXT_CACHE_TAG_MAX_LENGTH": (()=>NEXT_CACHE_TAG_MAX_LENGTH),
    "NEXT_DATA_SUFFIX": (()=>NEXT_DATA_SUFFIX),
    "NEXT_INTERCEPTION_MARKER_PREFIX": (()=>NEXT_INTERCEPTION_MARKER_PREFIX),
    "NEXT_META_SUFFIX": (()=>NEXT_META_SUFFIX),
    "NEXT_QUERY_PARAM_PREFIX": (()=>NEXT_QUERY_PARAM_PREFIX),
    "NEXT_RESUME_HEADER": (()=>NEXT_RESUME_HEADER),
    "NON_STANDARD_NODE_ENV": (()=>NON_STANDARD_NODE_ENV),
    "PAGES_DIR_ALIAS": (()=>PAGES_DIR_ALIAS),
    "PRERENDER_REVALIDATE_HEADER": (()=>PRERENDER_REVALIDATE_HEADER),
    "PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER": (()=>PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER),
    "PUBLIC_DIR_MIDDLEWARE_CONFLICT": (()=>PUBLIC_DIR_MIDDLEWARE_CONFLICT),
    "ROOT_DIR_ALIAS": (()=>ROOT_DIR_ALIAS),
    "RSC_ACTION_CLIENT_WRAPPER_ALIAS": (()=>RSC_ACTION_CLIENT_WRAPPER_ALIAS),
    "RSC_ACTION_ENCRYPTION_ALIAS": (()=>RSC_ACTION_ENCRYPTION_ALIAS),
    "RSC_ACTION_PROXY_ALIAS": (()=>RSC_ACTION_PROXY_ALIAS),
    "RSC_ACTION_VALIDATE_ALIAS": (()=>RSC_ACTION_VALIDATE_ALIAS),
    "RSC_CACHE_WRAPPER_ALIAS": (()=>RSC_CACHE_WRAPPER_ALIAS),
    "RSC_MOD_REF_PROXY_ALIAS": (()=>RSC_MOD_REF_PROXY_ALIAS),
    "RSC_PREFETCH_SUFFIX": (()=>RSC_PREFETCH_SUFFIX),
    "RSC_SEGMENTS_DIR_SUFFIX": (()=>RSC_SEGMENTS_DIR_SUFFIX),
    "RSC_SEGMENT_SUFFIX": (()=>RSC_SEGMENT_SUFFIX),
    "RSC_SUFFIX": (()=>RSC_SUFFIX),
    "SERVER_PROPS_EXPORT_ERROR": (()=>SERVER_PROPS_EXPORT_ERROR),
    "SERVER_PROPS_GET_INIT_PROPS_CONFLICT": (()=>SERVER_PROPS_GET_INIT_PROPS_CONFLICT),
    "SERVER_PROPS_SSG_CONFLICT": (()=>SERVER_PROPS_SSG_CONFLICT),
    "SERVER_RUNTIME": (()=>SERVER_RUNTIME),
    "SSG_FALLBACK_EXPORT_ERROR": (()=>SSG_FALLBACK_EXPORT_ERROR),
    "SSG_GET_INITIAL_PROPS_CONFLICT": (()=>SSG_GET_INITIAL_PROPS_CONFLICT),
    "STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR": (()=>STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR),
    "UNSTABLE_REVALIDATE_RENAME_ERROR": (()=>UNSTABLE_REVALIDATE_RENAME_ERROR),
    "WEBPACK_LAYERS": (()=>WEBPACK_LAYERS),
    "WEBPACK_RESOURCE_QUERIES": (()=>WEBPACK_RESOURCE_QUERIES)
});
const NEXT_QUERY_PARAM_PREFIX = 'nxtP';
const NEXT_INTERCEPTION_MARKER_PREFIX = 'nxtI';
const MATCHED_PATH_HEADER = 'x-matched-path';
const PRERENDER_REVALIDATE_HEADER = 'x-prerender-revalidate';
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = 'x-prerender-revalidate-if-generated';
const RSC_PREFETCH_SUFFIX = '.prefetch.rsc';
const RSC_SEGMENTS_DIR_SUFFIX = '.segments';
const RSC_SEGMENT_SUFFIX = '.segment.rsc';
const RSC_SUFFIX = '.rsc';
const ACTION_SUFFIX = '.action';
const NEXT_DATA_SUFFIX = '.json';
const NEXT_META_SUFFIX = '.meta';
const NEXT_BODY_SUFFIX = '.body';
const NEXT_CACHE_TAGS_HEADER = 'x-next-cache-tags';
const NEXT_CACHE_SOFT_TAGS_HEADER = 'x-next-cache-soft-tags';
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = 'x-next-revalidated-tags';
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = 'x-next-revalidate-tag-token';
const NEXT_RESUME_HEADER = 'next-resume';
const NEXT_CACHE_TAG_MAX_ITEMS = 64;
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = '_N_T_';
const CACHE_ONE_YEAR = 31536000;
const INFINITE_CACHE = 0xfffffffe;
const MIDDLEWARE_FILENAME = 'middleware';
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = 'instrumentation';
const PAGES_DIR_ALIAS = 'private-next-pages';
const DOT_NEXT_ALIAS = 'private-dot-next';
const ROOT_DIR_ALIAS = 'private-next-root-dir';
const APP_DIR_ALIAS = 'private-next-app-dir';
const RSC_MOD_REF_PROXY_ALIAS = 'private-next-rsc-mod-ref-proxy';
const RSC_ACTION_VALIDATE_ALIAS = 'private-next-rsc-action-validate';
const RSC_ACTION_PROXY_ALIAS = 'private-next-rsc-server-reference';
const RSC_CACHE_WRAPPER_ALIAS = 'private-next-rsc-cache-wrapper';
const RSC_ACTION_ENCRYPTION_ALIAS = 'private-next-rsc-action-encryption';
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = 'private-next-rsc-action-client-wrapper';
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = 'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?';
const GSSP_NO_RETURNED_VALUE = 'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?';
const UNSTABLE_REVALIDATE_RENAME_ERROR = 'The `unstable_revalidate` property is available for general use.\n' + 'Please use `revalidate` instead.';
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    'app',
    'pages',
    'components',
    'lib',
    'src'
];
const SERVER_RUNTIME = {
    edge: 'edge',
    experimentalEdge: 'experimental-edge',
    nodejs: 'nodejs'
};
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: 'shared',
    /**
   * The layer for server-only runtime and picking up `react-server` export conditions.
   * Including app router RSC pages and app router custom routes.
   */ reactServerComponents: 'rsc',
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: 'ssr',
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: 'action-browser',
    /**
   * The layer for the API routes.
   */ api: 'api',
    /**
   * The layer for the middleware code.
   */ middleware: 'middleware',
    /**
   * The layer for the instrumentation hooks.
   */ instrument: 'instrument',
    /**
   * The layer for assets on the edge.
   */ edgeAsset: 'edge-asset',
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: 'app-pages-browser',
    /**
   * The server bundle layer for metadata routes.
   */ appMetadataRoute: 'app-metadata-route'
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        builtinReact: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute
        ],
        serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
            // pages api
            WEBPACK_LAYERS_NAMES.api
        ],
        clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument
        ],
        appPages: [
            // app router pages and layouts
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: '__next_edge_ssr_entry__',
    metadata: '__next_metadata__',
    metadataRoute: '__next_metadata_route__',
    metadataImageMeta: '__next_metadata_image_meta__'
};
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "fromNodeOutgoingHttpHeaders": (()=>fromNodeOutgoingHttpHeaders),
    "normalizeNextQueryParam": (()=>normalizeNextQueryParam),
    "splitCookiesString": (()=>splitCookiesString),
    "toNodeOutgoingHttpHeaders": (()=>toNodeOutgoingHttpHeaders),
    "validateURL": (()=>validateURL)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)");
;
function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === 'undefined') continue;
            if (typeof v === 'number') {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== '=' && ch !== ';' && ch !== ',';
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ',') {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === '=') {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === 'set-cookie') {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
}
function normalizeNextQueryParam(key, onKeyNormalized) {
    const prefixes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_QUERY_PARAM_PREFIX"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_INTERCEPTION_MARKER_PREFIX"]
    ];
    for (const prefix of prefixes){
        if (key !== prefix && key.startsWith(prefix)) {
            const normalizedKey = key.substring(prefix.length);
            onKeyNormalized(normalizedKey);
        }
    }
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "NextFetchEvent": (()=>NextFetchEvent),
    "getWaitUntilPromiseFromEvent": (()=>getWaitUntilPromiseFromEvent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)");
;
const responseSymbol = Symbol('response');
const passThroughSymbol = Symbol('passThrough');
const waitUntilSymbol = Symbol('waitUntil');
class FetchEvent {
    constructor(_request, waitUntil){
        this[passThroughSymbol] = false;
        this[waitUntilSymbol] = waitUntil ? {
            kind: 'external',
            function: waitUntil
        } : {
            kind: 'internal',
            promises: []
        };
    }
    // TODO: is this dead code? NextFetchEvent never lets this get called
    respondWith(response) {
        if (!this[responseSymbol]) {
            this[responseSymbol] = Promise.resolve(response);
        }
    }
    // TODO: is this dead code? passThroughSymbol is unused
    passThroughOnException() {
        this[passThroughSymbol] = true;
    }
    waitUntil(promise) {
        if (this[waitUntilSymbol].kind === 'external') {
            // if we received an external waitUntil, we delegate to it
            // TODO(after): this will make us not go through `getServerError(error, 'edge-server')` in `sandbox`
            const waitUntil = this[waitUntilSymbol].function;
            return waitUntil(promise);
        } else {
            // if we didn't receive an external waitUntil, we make it work on our own
            // (and expect the caller to do something with the promises)
            this[waitUntilSymbol].promises.push(promise);
        }
    }
}
function getWaitUntilPromiseFromEvent(event) {
    return event[waitUntilSymbol].kind === 'internal' ? Promise.all(event[waitUntilSymbol].promises).then(()=>{}) : undefined;
}
class NextFetchEvent extends FetchEvent {
    constructor(params){
        var _params_context;
        super(params.request, (_params_context = params.context) == null ? void 0 : _params_context.waitUntil);
        this.sourcePage = params.page;
    }
    /**
   * @deprecated The `request` is now the first parameter and the API is now async.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ get request() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
    /**
   * @deprecated Using `respondWith` is no longer needed.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ respondWith() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
} //# sourceMappingURL=fetch-event.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "detectDomainLocale": (()=>detectDomainLocale)
});
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(':', 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ __turbopack_esm__({
    "removeTrailingSlash": (()=>removeTrailingSlash)
});
function removeTrailingSlash(route) {
    return route.replace(/\/$/, '') || '/';
} //# sourceMappingURL=remove-trailing-slash.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ __turbopack_esm__({
    "parsePath": (()=>parsePath)
});
function parsePath(path) {
    const hashIndex = path.indexOf('#');
    const queryIndex = path.indexOf('?');
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : '',
            hash: hashIndex > -1 ? path.slice(hashIndex) : ''
        };
    }
    return {
        pathname: path,
        query: '',
        hash: ''
    };
} //# sourceMappingURL=parse-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "addPathPrefix": (()=>addPathPrefix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)");
;
function addPathPrefix(path, prefix) {
    if (!path.startsWith('/') || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "addPathSuffix": (()=>addPathSuffix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)");
;
function addPathSuffix(path, suffix) {
    if (!path.startsWith('/') || !suffix) {
        return path;
    }
    const { pathname, query, hash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "pathHasPrefix": (()=>pathHasPrefix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)");
;
function pathHasPrefix(path, prefix) {
    if (typeof path !== 'string') {
        return false;
    }
    const { pathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return pathname === prefix || pathname.startsWith(prefix + '/');
} //# sourceMappingURL=path-has-prefix.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "addLocale": (()=>addLocale)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)");
;
;
function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(lower, '/api')) return path;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathPrefix"])(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "formatNextPathnameInfo": (()=>formatNextPathnameInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js [middleware] (ecmascript)");
;
;
;
;
function formatNextPathnameInfo(info) {
    let pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addLocale"])(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(pathname);
    }
    if (info.buildId) {
        pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathSuffix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathPrefix"])(pathname, "/_next/data/" + info.buildId), info.pathname === '/' ? 'index.json' : '.json');
    }
    pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathPrefix"])(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith('/') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathSuffix"])(pathname, '/') : pathname : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/get-hostname.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Takes an object with a hostname property (like a parsed URL) and some
 * headers that may contain Host and returns the preferred hostname.
 * @param parsed An object containing a hostname property.
 * @param headers A dictionary with headers containing a `host`.
 */ __turbopack_esm__({
    "getHostname": (()=>getHostname)
});
function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(':', 1)[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * For a pathname that may include a locale from a list of locales, it
 * removes the locale from the pathname returning it alongside with the
 * detected locale.
 *
 * @param pathname A pathname that may include a locale.
 * @param locales A list of locales.
 * @returns The detected locale and pathname without locale
 */ __turbopack_esm__({
    "normalizeLocalePath": (()=>normalizeLocalePath)
});
function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split('/');
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join('/') || '/';
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "removePathPrefix": (()=>removePathPrefix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)");
;
function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith('/')) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getNextPathnameInfo": (()=>getNextPathnameInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)");
;
;
;
function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname,
        trailingSlash: pathname !== '/' ? pathname.endsWith('/') : trailingSlash
    };
    if (basePath && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(info.pathname, basePath)) {
        info.pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removePathPrefix"])(info.pathname, basePath);
        info.basePath = basePath;
    }
    let pathnameNoDataPrefix = info.pathname;
    if (info.pathname.startsWith('/_next/data/') && info.pathname.endsWith('.json')) {
        const paths = info.pathname.replace(/^\/_next\/data\//, '').replace(/\.json$/, '').split('/');
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== 'index' ? "/" + paths.slice(1).join('/') : '/';
        // update pathname with normalized if enabled although
        // we use normalized to populate locale info still
        if (options.parseData === true) {
            info.pathname = pathnameNoDataPrefix;
        }
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeLocalePath"])(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
        if (!result.detectedLocale && info.buildId) {
            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeLocalePath"])(pathnameNoDataPrefix, i18n.locales);
            if (result.detectedLocale) {
                info.locale = result.detectedLocale;
            }
        }
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "NextURL": (()=>NextURL)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$detect$2d$domain$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$format$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$get$2d$hostname$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/get-hostname.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js [middleware] (ecmascript)");
;
;
;
;
const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, 'localhost'), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, 'localhost'));
}
const Internal = Symbol('NextURLInternal');
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === 'object' && 'pathname' in baseOrOpts || typeof baseOrOpts === 'string') {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ''
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
        const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getNextPathnameInfo"])(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$get$2d$hostname$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getHostname"])(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$detect$2d$domain$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["detectDomainLocale"])((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? '';
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$format$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["formatNextPathnameInfo"])({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? '';
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith('/') ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
} //# sourceMappingURL=next-url.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "partitioned" in c && c.partitioned && "Partitioned",
        "priority" in c && c.priority && `Priority=${c.priority}`
    ].filter(Boolean);
    const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
    return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure, partitioned, priority } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase(),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        },
        ...priority && {
            priority: parsePriority(priority)
        },
        ...partitioned && {
            partitioned: true
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = [
    "low",
    "medium",
    "high"
];
function parsePriority(string) {
    string = string.toLowerCase();
    return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, path, domain] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0].path,
            args[0].domain
        ];
        return this.set({
            name,
            path,
            domain,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    RequestCookies,
    ResponseCookies,
    parseCookie,
    parseSetCookie,
    stringifyCookie
});
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
 //# sourceMappingURL=cookies.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/request.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "INTERNALS": (()=>INTERNALS),
    "NextRequest": (()=>NextRequest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
;
;
;
;
const INTERNALS = Symbol('internal request');
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== 'string' && 'url' in input ? input.url : String(input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["validateURL"])(url);
        if (input instanceof Request) super(input, init);
        else super(url, init);
        const nextUrl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](url, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toNodeOutgoingHttpHeaders"])(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](this.headers),
            nextUrl,
            url: process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE ? url : nextUrl.toString()
        };
    }
    [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
            cookies: this.cookies,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RemovedPageError"]();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RemovedUAError"]();
    }
    get url() {
        return this[INTERNALS].url;
    }
} //# sourceMappingURL=request.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ReflectAdapter": (()=>ReflectAdapter)
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "NextResponse": (()=>NextResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
;
;
;
;
;
const INTERNALS = Symbol('internal response');
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error('request.headers must be an instance of Headers');
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set('x-middleware-request-' + key, value);
            keys.push(key);
        }
        headers.set('x-middleware-override-headers', keys.join(','));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        const headers = this.headers;
        const cookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](headers);
        const cookiesProxy = new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'delete':
                    case 'set':
                        {
                            return (...args)=>{
                                const result = Reflect.apply(target[prop], target, args);
                                const newHeaders = new Headers(headers);
                                if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"]) {
                                    headers.set('x-middleware-set-cookie', result.getAll().map((cookie)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["stringifyCookie"])(cookie)).join(','));
                                }
                                handleMiddlewareField(init, newHeaders);
                                return result;
                            };
                        }
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
        this[INTERNALS] = {
            cookies: cookiesProxy,
            url: init.url ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](init.url, {
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toNodeOutgoingHttpHeaders"])(headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    static json(body, init) {
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === 'number' ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === 'object' ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set('Location', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["validateURL"])(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set('x-middleware-rewrite', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["validateURL"])(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set('x-middleware-next', '1');
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
} //# sourceMappingURL=response.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Given a URL as a string and a base URL it will make the URL relative
 * if the parsed protocol and host is the same as the one in the base
 * URL. Otherwise it returns the same URL string.
 */ __turbopack_esm__({
    "relativizeURL": (()=>relativizeURL)
});
function relativizeURL(url, base) {
    const baseURL = typeof base === 'string' ? new URL(base) : base;
    const relative = new URL(url, base);
    const origin = baseURL.protocol + "//" + baseURL.host;
    return relative.protocol + "//" + relative.host === origin ? relative.toString().replace(origin, '') : relative.toString();
} //# sourceMappingURL=relativize-url.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ACTION_HEADER": (()=>ACTION_HEADER),
    "FLIGHT_HEADERS": (()=>FLIGHT_HEADERS),
    "NEXT_DID_POSTPONE_HEADER": (()=>NEXT_DID_POSTPONE_HEADER),
    "NEXT_HMR_REFRESH_HEADER": (()=>NEXT_HMR_REFRESH_HEADER),
    "NEXT_IS_PRERENDER_HEADER": (()=>NEXT_IS_PRERENDER_HEADER),
    "NEXT_ROUTER_PREFETCH_HEADER": (()=>NEXT_ROUTER_PREFETCH_HEADER),
    "NEXT_ROUTER_SEGMENT_PREFETCH_HEADER": (()=>NEXT_ROUTER_SEGMENT_PREFETCH_HEADER),
    "NEXT_ROUTER_STALE_TIME_HEADER": (()=>NEXT_ROUTER_STALE_TIME_HEADER),
    "NEXT_ROUTER_STATE_TREE_HEADER": (()=>NEXT_ROUTER_STATE_TREE_HEADER),
    "NEXT_RSC_UNION_QUERY": (()=>NEXT_RSC_UNION_QUERY),
    "NEXT_URL": (()=>NEXT_URL),
    "RSC_CONTENT_TYPE_HEADER": (()=>RSC_CONTENT_TYPE_HEADER),
    "RSC_HEADER": (()=>RSC_HEADER)
});
const RSC_HEADER = 'RSC';
const ACTION_HEADER = 'Next-Action';
const NEXT_ROUTER_STATE_TREE_HEADER = 'Next-Router-State-Tree';
const NEXT_ROUTER_PREFETCH_HEADER = 'Next-Router-Prefetch';
const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'Next-Router-Segment-Prefetch';
const NEXT_HMR_REFRESH_HEADER = 'Next-HMR-Refresh';
const NEXT_URL = 'Next-Url';
const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
const FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
];
const NEXT_RSC_UNION_QUERY = '_rsc';
const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender'; //# sourceMappingURL=app-router-headers.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/internal-utils.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "stripInternalQueries": (()=>stripInternalQueries),
    "stripInternalSearchParams": (()=>stripInternalSearchParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)");
;
const INTERNAL_QUERY_NAMES = [
    '__nextFallback',
    '__nextLocale',
    '__nextInferredLocaleFromDefault',
    '__nextDefaultLocale',
    '__nextIsNotFound',
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_RSC_UNION_QUERY"]
];
const EDGE_EXTENDED_INTERNAL_QUERY_NAMES = [
    '__nextDataReq'
];
function stripInternalQueries(query) {
    for (const name of INTERNAL_QUERY_NAMES){
        delete query[name];
    }
}
function stripInternalSearchParams(url, isEdge) {
    const isStringUrl = typeof url === 'string';
    const instance = isStringUrl ? new URL(url) : url;
    for (const name of INTERNAL_QUERY_NAMES){
        instance.searchParams.delete(name);
    }
    if (isEdge) {
        for (const name of EDGE_EXTENDED_INTERNAL_QUERY_NAMES){
            instance.searchParams.delete(name);
        }
    }
    return isStringUrl ? instance.toString() : instance;
} //# sourceMappingURL=internal-utils.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ __turbopack_esm__({
    "ensureLeadingSlash": (()=>ensureLeadingSlash)
});
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/segment.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DEFAULT_SEGMENT_KEY": (()=>DEFAULT_SEGMENT_KEY),
    "PAGE_SEGMENT_KEY": (()=>PAGE_SEGMENT_KEY),
    "addSearchParamsIfPageSegment": (()=>addSearchParamsIfPageSegment),
    "isGroupSegment": (()=>isGroupSegment)
});
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__'; //# sourceMappingURL=segment.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "normalizeAppPath": (()=>normalizeAppPath),
    "normalizeRscURL": (()=>normalizeRscURL)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/segment.js [middleware] (ecmascript)");
;
;
function normalizeAppPath(route) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ensureLeadingSlash"])(route.split('/').reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isGroupSegment"])(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ''));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
} //# sourceMappingURL=app-paths.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "HeadersAdapter": (()=>HeadersAdapter),
    "ReadonlyHeadersError": (()=>ReadonlyHeadersError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [middleware] (ecmascript)");
;
class ReadonlyHeadersError extends Error {
    constructor(){
        super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'append':
                    case 'delete':
                    case 'set':
                        return ReadonlyHeadersError.callable;
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === 'string') {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== 'undefined') return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== 'undefined';
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/async-local-storage.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "bindSnapshot": (()=>bindSnapshot),
    "createAsyncLocalStorage": (()=>createAsyncLocalStorage),
    "createSnapshot": (()=>createSnapshot)
});
const sharedAsyncLocalStorageNotAvailableError = new Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available');
class FakeAsyncLocalStorage {
    disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    static bind(fn) {
        return fn;
    }
}
const maybeGlobalAsyncLocalStorage = typeof globalThis !== 'undefined' && globalThis.AsyncLocalStorage;
function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}
function bindSnapshot(fn) {
    if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.bind(fn);
    }
    return FakeAsyncLocalStorage.bind(fn);
}
function createSnapshot() {
    if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.snapshot();
    }
    return function(fn, ...args) {
        return fn(...args);
    };
} //# sourceMappingURL=async-local-storage.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "workAsyncStorage": (()=>workAsyncStorage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/async-local-storage.js [middleware] (ecmascript)");
;
const workAsyncStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createAsyncLocalStorage"])(); //# sourceMappingURL=work-async-storage-instance.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// Share the instance module in the next-shared layer
__turbopack_esm__({});
;
;
 //# sourceMappingURL=work-async-storage.external.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "workUnitAsyncStorage": (()=>workUnitAsyncStorage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/async-local-storage.js [middleware] (ecmascript)");
;
const workUnitAsyncStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createAsyncLocalStorage"])(); //# sourceMappingURL=work-unit-async-storage-instance.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// Share the instance module in the next-shared layer
__turbopack_esm__({
    "getExpectedRequestStore": (()=>getExpectedRequestStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [middleware] (ecmascript)");
;
;
function getExpectedRequestStore(callingExpression) {
    const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workUnitAsyncStorage"].getStore();
    if (workUnitStore) {
        if (workUnitStore.type === 'request') {
            return workUnitStore;
        }
        if (workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-ppr' || workUnitStore.type === 'prerender-legacy') {
            // This should not happen because we should have checked it already.
            throw new Error(`\`${callingExpression}\` cannot be called inside a prerender. This is a bug in Next.js.`);
        }
        if (workUnitStore.type === 'cache') {
            throw new Error(`\`${callingExpression}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`);
        } else if (workUnitStore.type === 'unstable-cache') {
            throw new Error(`\`${callingExpression}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
        }
    }
    throw new Error(`\`${callingExpression}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`);
} //# sourceMappingURL=work-unit-async-storage.external.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "MutableRequestCookiesAdapter": (()=>MutableRequestCookiesAdapter),
    "ReadonlyRequestCookiesError": (()=>ReadonlyRequestCookiesError),
    "RequestCookiesAdapter": (()=>RequestCookiesAdapter),
    "appendMutableCookies": (()=>appendMutableCookies),
    "areCookiesMutableInCurrentPhase": (()=>areCookiesMutableInCurrentPhase),
    "getModifiedCookieValues": (()=>getModifiedCookieValues),
    "responseCookiesToRequestCookies": (()=>responseCookiesToRequestCookies),
    "wrapWithMutableAccessCheck": (()=>wrapWithMutableAccessCheck)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <locals>");
;
;
;
;
;
class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super('Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options');
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'clear':
                    case 'delete':
                    case 'set':
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for('next.mutated.cookies');
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    const resCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](new Headers());
        for (const cookie of cookies.getAll()){
            responseCookies.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            // TODO-APP: change method of getting workStore
            const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workAsyncStorage"].getStore();
            if (workStore) {
                workStore.pathWasRevalidated = true;
            }
            const allCookies = responseCookies.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        const wrappedCookies = new Proxy(responseCookies, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case 'delete':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case 'set':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.set(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
        return wrappedCookies;
    }
}
function wrapWithMutableAccessCheck(responseCookies) {
    const wrappedCookies = new Proxy(responseCookies, {
        get (target, prop, receiver) {
            switch(prop){
                case 'delete':
                    return function(...args) {
                        ensureCookiesAreStillMutable('cookies().delete');
                        target.delete(...args);
                        return wrappedCookies;
                    };
                case 'set':
                    return function(...args) {
                        ensureCookiesAreStillMutable('cookies().set');
                        target.set(...args);
                        return wrappedCookies;
                    };
                default:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
            }
        }
    });
    return wrappedCookies;
}
function areCookiesMutableInCurrentPhase(requestStore) {
    return requestStore.phase === 'action';
}
/** Ensure that cookies() starts throwing on mutation
 * if we changed phases and can no longer mutate.
 *
 * This can happen when going:
 *   'render' -> 'after'
 *   'action' -> 'render'
 * */ function ensureCookiesAreStillMutable(callingExpression) {
    const requestStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getExpectedRequestStore"])(callingExpression);
    if (!areCookiesMutableInCurrentPhase(requestStore)) {
        // TODO: maybe we can give a more precise error message based on callingExpression?
        throw new ReadonlyRequestCookiesError();
    }
}
function responseCookiesToRequestCookies(responseCookies) {
    const requestCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](new Headers());
    for (const cookie of responseCookies.getAll()){
        requestCookies.set(cookie);
    }
    return requestCookies;
} //# sourceMappingURL=request-cookies.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Contains predefined constants for the trace span name in next/server.
 *
 * Currently, next/server/tracer is internal implementation only for tracking
 * next.js's implementation only with known span names defined here.
 **/ // eslint typescript has a bug with TS enums
/* eslint-disable no-shadow */ __turbopack_esm__({
    "AppRenderSpan": (()=>AppRenderSpan),
    "AppRouteRouteHandlersSpan": (()=>AppRouteRouteHandlersSpan),
    "BaseServerSpan": (()=>BaseServerSpan),
    "LoadComponentsSpan": (()=>LoadComponentsSpan),
    "LogSpanAllowList": (()=>LogSpanAllowList),
    "MiddlewareSpan": (()=>MiddlewareSpan),
    "NextNodeServerSpan": (()=>NextNodeServerSpan),
    "NextServerSpan": (()=>NextServerSpan),
    "NextVanillaSpanAllowlist": (()=>NextVanillaSpanAllowlist),
    "NodeSpan": (()=>NodeSpan),
    "RenderSpan": (()=>RenderSpan),
    "ResolveMetadataSpan": (()=>ResolveMetadataSpan),
    "RouterSpan": (()=>RouterSpan),
    "StartServerSpan": (()=>StartServerSpan)
});
var BaseServerSpan;
(function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
})(BaseServerSpan || (BaseServerSpan = {}));
var LoadComponentsSpan;
(function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
})(LoadComponentsSpan || (LoadComponentsSpan = {}));
var NextServerSpan;
(function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
})(NextServerSpan || (NextServerSpan = {}));
var NextNodeServerSpan;
(function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["createComponentTree"] = "NextNodeServer.createComponentTree";
    NextNodeServerSpan["clientComponentLoading"] = "NextNodeServer.clientComponentLoading";
    NextNodeServerSpan["getLayoutOrPageModule"] = "NextNodeServer.getLayoutOrPageModule";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["startResponse"] = "NextNodeServer.startResponse";
    // nested inner span, does not require parent scope name
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
    NextNodeServerSpan["internalFetch"] = "internalFetch";
})(NextNodeServerSpan || (NextNodeServerSpan = {}));
var StartServerSpan;
(function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
})(StartServerSpan || (StartServerSpan = {}));
var RenderSpan;
(function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
})(RenderSpan || (RenderSpan = {}));
var AppRenderSpan;
(function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
})(AppRenderSpan || (AppRenderSpan = {}));
var RouterSpan;
(function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
})(RouterSpan || (RouterSpan = {}));
var NodeSpan;
(function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
})(NodeSpan || (NodeSpan = {}));
var AppRouteRouteHandlersSpan;
(function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
})(AppRouteRouteHandlersSpan || (AppRouteRouteHandlersSpan = {}));
var ResolveMetadataSpan;
(function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
    ResolveMetadataSpan["generateViewport"] = "ResolveMetadata.generateViewport";
})(ResolveMetadataSpan || (ResolveMetadataSpan = {}));
var MiddlewareSpan;
(function(MiddlewareSpan) {
    MiddlewareSpan["execute"] = "Middleware.execute";
})(MiddlewareSpan || (MiddlewareSpan = {}));
const NextVanillaSpanAllowlist = [
    "Middleware.execute",
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "ResolveMetadata.generateMetadata",
    "ResolveMetadata.generateViewport",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.findPageComponents",
    "NextNodeServer.getLayoutOrPageModule",
    "NextNodeServer.startResponse",
    "NextNodeServer.clientComponentLoading"
];
const LogSpanAllowList = [
    "NextNodeServer.findPageComponents",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.clientComponentLoading"
];
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/is-thenable.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Check to see if a value is Thenable.
 *
 * @param promise the maybe-thenable value
 * @returns true if the value is thenable
 */ __turbopack_esm__({
    "isThenable": (()=>isThenable)
});
function isThenable(promise) {
    return promise !== null && typeof promise === 'object' && 'then' in promise && typeof promise.then === 'function';
} //# sourceMappingURL=is-thenable.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/@opentelemetry/api/index.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
(()=>{
    "use strict";
    var e = {
        491: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ContextAPI = void 0;
            const n = r(223);
            const a = r(172);
            const o = r(930);
            const i = "context";
            const c = new n.NoopContextManager;
            class ContextAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new ContextAPI;
                    }
                    return this._instance;
                }
                setGlobalContextManager(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                active() {
                    return this._getContextManager().active();
                }
                with(e, t, r, ...n) {
                    return this._getContextManager().with(e, t, r, ...n);
                }
                bind(e, t) {
                    return this._getContextManager().bind(e, t);
                }
                _getContextManager() {
                    return (0, a.getGlobal)(i) || c;
                }
                disable() {
                    this._getContextManager().disable();
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.ContextAPI = ContextAPI;
        },
        930: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagAPI = void 0;
            const n = r(56);
            const a = r(912);
            const o = r(957);
            const i = r(172);
            const c = "diag";
            class DiagAPI {
                constructor(){
                    function _logProxy(e) {
                        return function(...t) {
                            const r = (0, i.getGlobal)("diag");
                            if (!r) return;
                            return r[e](...t);
                        };
                    }
                    const e = this;
                    const setLogger = (t, r = {
                        logLevel: o.DiagLogLevel.INFO
                    })=>{
                        var n, c, s;
                        if (t === e) {
                            const t = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                            e.error((n = t.stack) !== null && n !== void 0 ? n : t.message);
                            return false;
                        }
                        if (typeof r === "number") {
                            r = {
                                logLevel: r
                            };
                        }
                        const u = (0, i.getGlobal)("diag");
                        const l = (0, a.createLogLevelDiagLogger)((c = r.logLevel) !== null && c !== void 0 ? c : o.DiagLogLevel.INFO, t);
                        if (u && !r.suppressOverrideMessage) {
                            const e = (s = (new Error).stack) !== null && s !== void 0 ? s : "<failed to generate stacktrace>";
                            u.warn(`Current logger will be overwritten from ${e}`);
                            l.warn(`Current logger will overwrite one already registered from ${e}`);
                        }
                        return (0, i.registerGlobal)("diag", l, e, true);
                    };
                    e.setLogger = setLogger;
                    e.disable = ()=>{
                        (0, i.unregisterGlobal)(c, e);
                    };
                    e.createComponentLogger = (e)=>new n.DiagComponentLogger(e);
                    e.verbose = _logProxy("verbose");
                    e.debug = _logProxy("debug");
                    e.info = _logProxy("info");
                    e.warn = _logProxy("warn");
                    e.error = _logProxy("error");
                }
                static instance() {
                    if (!this._instance) {
                        this._instance = new DiagAPI;
                    }
                    return this._instance;
                }
            }
            t.DiagAPI = DiagAPI;
        },
        653: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.MetricsAPI = void 0;
            const n = r(660);
            const a = r(172);
            const o = r(930);
            const i = "metrics";
            class MetricsAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new MetricsAPI;
                    }
                    return this._instance;
                }
                setGlobalMeterProvider(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                getMeterProvider() {
                    return (0, a.getGlobal)(i) || n.NOOP_METER_PROVIDER;
                }
                getMeter(e, t, r) {
                    return this.getMeterProvider().getMeter(e, t, r);
                }
                disable() {
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.MetricsAPI = MetricsAPI;
        },
        181: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.PropagationAPI = void 0;
            const n = r(172);
            const a = r(874);
            const o = r(194);
            const i = r(277);
            const c = r(369);
            const s = r(930);
            const u = "propagation";
            const l = new a.NoopTextMapPropagator;
            class PropagationAPI {
                constructor(){
                    this.createBaggage = c.createBaggage;
                    this.getBaggage = i.getBaggage;
                    this.getActiveBaggage = i.getActiveBaggage;
                    this.setBaggage = i.setBaggage;
                    this.deleteBaggage = i.deleteBaggage;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new PropagationAPI;
                    }
                    return this._instance;
                }
                setGlobalPropagator(e) {
                    return (0, n.registerGlobal)(u, e, s.DiagAPI.instance());
                }
                inject(e, t, r = o.defaultTextMapSetter) {
                    return this._getGlobalPropagator().inject(e, t, r);
                }
                extract(e, t, r = o.defaultTextMapGetter) {
                    return this._getGlobalPropagator().extract(e, t, r);
                }
                fields() {
                    return this._getGlobalPropagator().fields();
                }
                disable() {
                    (0, n.unregisterGlobal)(u, s.DiagAPI.instance());
                }
                _getGlobalPropagator() {
                    return (0, n.getGlobal)(u) || l;
                }
            }
            t.PropagationAPI = PropagationAPI;
        },
        997: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceAPI = void 0;
            const n = r(172);
            const a = r(846);
            const o = r(139);
            const i = r(607);
            const c = r(930);
            const s = "trace";
            class TraceAPI {
                constructor(){
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                    this.wrapSpanContext = o.wrapSpanContext;
                    this.isSpanContextValid = o.isSpanContextValid;
                    this.deleteSpan = i.deleteSpan;
                    this.getSpan = i.getSpan;
                    this.getActiveSpan = i.getActiveSpan;
                    this.getSpanContext = i.getSpanContext;
                    this.setSpan = i.setSpan;
                    this.setSpanContext = i.setSpanContext;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new TraceAPI;
                    }
                    return this._instance;
                }
                setGlobalTracerProvider(e) {
                    const t = (0, n.registerGlobal)(s, this._proxyTracerProvider, c.DiagAPI.instance());
                    if (t) {
                        this._proxyTracerProvider.setDelegate(e);
                    }
                    return t;
                }
                getTracerProvider() {
                    return (0, n.getGlobal)(s) || this._proxyTracerProvider;
                }
                getTracer(e, t) {
                    return this.getTracerProvider().getTracer(e, t);
                }
                disable() {
                    (0, n.unregisterGlobal)(s, c.DiagAPI.instance());
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                }
            }
            t.TraceAPI = TraceAPI;
        },
        277: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.deleteBaggage = t.setBaggage = t.getActiveBaggage = t.getBaggage = void 0;
            const n = r(491);
            const a = r(780);
            const o = (0, a.createContextKey)("OpenTelemetry Baggage Key");
            function getBaggage(e) {
                return e.getValue(o) || undefined;
            }
            t.getBaggage = getBaggage;
            function getActiveBaggage() {
                return getBaggage(n.ContextAPI.getInstance().active());
            }
            t.getActiveBaggage = getActiveBaggage;
            function setBaggage(e, t) {
                return e.setValue(o, t);
            }
            t.setBaggage = setBaggage;
            function deleteBaggage(e) {
                return e.deleteValue(o);
            }
            t.deleteBaggage = deleteBaggage;
        },
        993: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BaggageImpl = void 0;
            class BaggageImpl {
                constructor(e){
                    this._entries = e ? new Map(e) : new Map;
                }
                getEntry(e) {
                    const t = this._entries.get(e);
                    if (!t) {
                        return undefined;
                    }
                    return Object.assign({}, t);
                }
                getAllEntries() {
                    return Array.from(this._entries.entries()).map(([e, t])=>[
                            e,
                            t
                        ]);
                }
                setEntry(e, t) {
                    const r = new BaggageImpl(this._entries);
                    r._entries.set(e, t);
                    return r;
                }
                removeEntry(e) {
                    const t = new BaggageImpl(this._entries);
                    t._entries.delete(e);
                    return t;
                }
                removeEntries(...e) {
                    const t = new BaggageImpl(this._entries);
                    for (const r of e){
                        t._entries.delete(r);
                    }
                    return t;
                }
                clear() {
                    return new BaggageImpl;
                }
            }
            t.BaggageImpl = BaggageImpl;
        },
        830: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataSymbol = void 0;
            t.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
        },
        369: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataFromString = t.createBaggage = void 0;
            const n = r(930);
            const a = r(993);
            const o = r(830);
            const i = n.DiagAPI.instance();
            function createBaggage(e = {}) {
                return new a.BaggageImpl(new Map(Object.entries(e)));
            }
            t.createBaggage = createBaggage;
            function baggageEntryMetadataFromString(e) {
                if (typeof e !== "string") {
                    i.error(`Cannot create baggage metadata from unknown type: ${typeof e}`);
                    e = "";
                }
                return {
                    __TYPE__: o.baggageEntryMetadataSymbol,
                    toString () {
                        return e;
                    }
                };
            }
            t.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
        },
        67: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.context = void 0;
            const n = r(491);
            t.context = n.ContextAPI.getInstance();
        },
        223: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopContextManager = void 0;
            const n = r(780);
            class NoopContextManager {
                active() {
                    return n.ROOT_CONTEXT;
                }
                with(e, t, r, ...n) {
                    return t.call(r, ...n);
                }
                bind(e, t) {
                    return t;
                }
                enable() {
                    return this;
                }
                disable() {
                    return this;
                }
            }
            t.NoopContextManager = NoopContextManager;
        },
        780: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ROOT_CONTEXT = t.createContextKey = void 0;
            function createContextKey(e) {
                return Symbol.for(e);
            }
            t.createContextKey = createContextKey;
            class BaseContext {
                constructor(e){
                    const t = this;
                    t._currentContext = e ? new Map(e) : new Map;
                    t.getValue = (e)=>t._currentContext.get(e);
                    t.setValue = (e, r)=>{
                        const n = new BaseContext(t._currentContext);
                        n._currentContext.set(e, r);
                        return n;
                    };
                    t.deleteValue = (e)=>{
                        const r = new BaseContext(t._currentContext);
                        r._currentContext.delete(e);
                        return r;
                    };
                }
            }
            t.ROOT_CONTEXT = new BaseContext;
        },
        506: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.diag = void 0;
            const n = r(930);
            t.diag = n.DiagAPI.instance();
        },
        56: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagComponentLogger = void 0;
            const n = r(172);
            class DiagComponentLogger {
                constructor(e){
                    this._namespace = e.namespace || "DiagComponentLogger";
                }
                debug(...e) {
                    return logProxy("debug", this._namespace, e);
                }
                error(...e) {
                    return logProxy("error", this._namespace, e);
                }
                info(...e) {
                    return logProxy("info", this._namespace, e);
                }
                warn(...e) {
                    return logProxy("warn", this._namespace, e);
                }
                verbose(...e) {
                    return logProxy("verbose", this._namespace, e);
                }
            }
            t.DiagComponentLogger = DiagComponentLogger;
            function logProxy(e, t, r) {
                const a = (0, n.getGlobal)("diag");
                if (!a) {
                    return;
                }
                r.unshift(t);
                return a[e](...r);
            }
        },
        972: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagConsoleLogger = void 0;
            const r = [
                {
                    n: "error",
                    c: "error"
                },
                {
                    n: "warn",
                    c: "warn"
                },
                {
                    n: "info",
                    c: "info"
                },
                {
                    n: "debug",
                    c: "debug"
                },
                {
                    n: "verbose",
                    c: "trace"
                }
            ];
            class DiagConsoleLogger {
                constructor(){
                    function _consoleFunc(e) {
                        return function(...t) {
                            if (console) {
                                let r = console[e];
                                if (typeof r !== "function") {
                                    r = console.log;
                                }
                                if (typeof r === "function") {
                                    return r.apply(console, t);
                                }
                            }
                        };
                    }
                    for(let e = 0; e < r.length; e++){
                        this[r[e].n] = _consoleFunc(r[e].c);
                    }
                }
            }
            t.DiagConsoleLogger = DiagConsoleLogger;
        },
        912: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createLogLevelDiagLogger = void 0;
            const n = r(957);
            function createLogLevelDiagLogger(e, t) {
                if (e < n.DiagLogLevel.NONE) {
                    e = n.DiagLogLevel.NONE;
                } else if (e > n.DiagLogLevel.ALL) {
                    e = n.DiagLogLevel.ALL;
                }
                t = t || {};
                function _filterFunc(r, n) {
                    const a = t[r];
                    if (typeof a === "function" && e >= n) {
                        return a.bind(t);
                    }
                    return function() {};
                }
                return {
                    error: _filterFunc("error", n.DiagLogLevel.ERROR),
                    warn: _filterFunc("warn", n.DiagLogLevel.WARN),
                    info: _filterFunc("info", n.DiagLogLevel.INFO),
                    debug: _filterFunc("debug", n.DiagLogLevel.DEBUG),
                    verbose: _filterFunc("verbose", n.DiagLogLevel.VERBOSE)
                };
            }
            t.createLogLevelDiagLogger = createLogLevelDiagLogger;
        },
        957: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagLogLevel = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["ERROR"] = 30] = "ERROR";
                e[e["WARN"] = 50] = "WARN";
                e[e["INFO"] = 60] = "INFO";
                e[e["DEBUG"] = 70] = "DEBUG";
                e[e["VERBOSE"] = 80] = "VERBOSE";
                e[e["ALL"] = 9999] = "ALL";
            })(r = t.DiagLogLevel || (t.DiagLogLevel = {}));
        },
        172: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.unregisterGlobal = t.getGlobal = t.registerGlobal = void 0;
            const n = r(200);
            const a = r(521);
            const o = r(130);
            const i = a.VERSION.split(".")[0];
            const c = Symbol.for(`opentelemetry.js.api.${i}`);
            const s = n._globalThis;
            function registerGlobal(e, t, r, n = false) {
                var o;
                const i = s[c] = (o = s[c]) !== null && o !== void 0 ? o : {
                    version: a.VERSION
                };
                if (!n && i[e]) {
                    const t = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                if (i.version !== a.VERSION) {
                    const t = new Error(`@opentelemetry/api: Registration of version v${i.version} for ${e} does not match previously registered API v${a.VERSION}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                i[e] = t;
                r.debug(`@opentelemetry/api: Registered a global for ${e} v${a.VERSION}.`);
                return true;
            }
            t.registerGlobal = registerGlobal;
            function getGlobal(e) {
                var t, r;
                const n = (t = s[c]) === null || t === void 0 ? void 0 : t.version;
                if (!n || !(0, o.isCompatible)(n)) {
                    return;
                }
                return (r = s[c]) === null || r === void 0 ? void 0 : r[e];
            }
            t.getGlobal = getGlobal;
            function unregisterGlobal(e, t) {
                t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${a.VERSION}.`);
                const r = s[c];
                if (r) {
                    delete r[e];
                }
            }
            t.unregisterGlobal = unregisterGlobal;
        },
        130: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.isCompatible = t._makeCompatibilityCheck = void 0;
            const n = r(521);
            const a = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
            function _makeCompatibilityCheck(e) {
                const t = new Set([
                    e
                ]);
                const r = new Set;
                const n = e.match(a);
                if (!n) {
                    return ()=>false;
                }
                const o = {
                    major: +n[1],
                    minor: +n[2],
                    patch: +n[3],
                    prerelease: n[4]
                };
                if (o.prerelease != null) {
                    return function isExactmatch(t) {
                        return t === e;
                    };
                }
                function _reject(e) {
                    r.add(e);
                    return false;
                }
                function _accept(e) {
                    t.add(e);
                    return true;
                }
                return function isCompatible(e) {
                    if (t.has(e)) {
                        return true;
                    }
                    if (r.has(e)) {
                        return false;
                    }
                    const n = e.match(a);
                    if (!n) {
                        return _reject(e);
                    }
                    const i = {
                        major: +n[1],
                        minor: +n[2],
                        patch: +n[3],
                        prerelease: n[4]
                    };
                    if (i.prerelease != null) {
                        return _reject(e);
                    }
                    if (o.major !== i.major) {
                        return _reject(e);
                    }
                    if (o.major === 0) {
                        if (o.minor === i.minor && o.patch <= i.patch) {
                            return _accept(e);
                        }
                        return _reject(e);
                    }
                    if (o.minor <= i.minor) {
                        return _accept(e);
                    }
                    return _reject(e);
                };
            }
            t._makeCompatibilityCheck = _makeCompatibilityCheck;
            t.isCompatible = _makeCompatibilityCheck(n.VERSION);
        },
        886: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.metrics = void 0;
            const n = r(653);
            t.metrics = n.MetricsAPI.getInstance();
        },
        901: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ValueType = void 0;
            var r;
            (function(e) {
                e[e["INT"] = 0] = "INT";
                e[e["DOUBLE"] = 1] = "DOUBLE";
            })(r = t.ValueType || (t.ValueType = {}));
        },
        102: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createNoopMeter = t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t.NOOP_OBSERVABLE_GAUGE_METRIC = t.NOOP_OBSERVABLE_COUNTER_METRIC = t.NOOP_UP_DOWN_COUNTER_METRIC = t.NOOP_HISTOGRAM_METRIC = t.NOOP_COUNTER_METRIC = t.NOOP_METER = t.NoopObservableUpDownCounterMetric = t.NoopObservableGaugeMetric = t.NoopObservableCounterMetric = t.NoopObservableMetric = t.NoopHistogramMetric = t.NoopUpDownCounterMetric = t.NoopCounterMetric = t.NoopMetric = t.NoopMeter = void 0;
            class NoopMeter {
                constructor(){}
                createHistogram(e, r) {
                    return t.NOOP_HISTOGRAM_METRIC;
                }
                createCounter(e, r) {
                    return t.NOOP_COUNTER_METRIC;
                }
                createUpDownCounter(e, r) {
                    return t.NOOP_UP_DOWN_COUNTER_METRIC;
                }
                createObservableGauge(e, r) {
                    return t.NOOP_OBSERVABLE_GAUGE_METRIC;
                }
                createObservableCounter(e, r) {
                    return t.NOOP_OBSERVABLE_COUNTER_METRIC;
                }
                createObservableUpDownCounter(e, r) {
                    return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
                }
                addBatchObservableCallback(e, t) {}
                removeBatchObservableCallback(e) {}
            }
            t.NoopMeter = NoopMeter;
            class NoopMetric {
            }
            t.NoopMetric = NoopMetric;
            class NoopCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopCounterMetric = NoopCounterMetric;
            class NoopUpDownCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
            class NoopHistogramMetric extends NoopMetric {
                record(e, t) {}
            }
            t.NoopHistogramMetric = NoopHistogramMetric;
            class NoopObservableMetric {
                addCallback(e) {}
                removeCallback(e) {}
            }
            t.NoopObservableMetric = NoopObservableMetric;
            class NoopObservableCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableCounterMetric = NoopObservableCounterMetric;
            class NoopObservableGaugeMetric extends NoopObservableMetric {
            }
            t.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
            class NoopObservableUpDownCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
            t.NOOP_METER = new NoopMeter;
            t.NOOP_COUNTER_METRIC = new NoopCounterMetric;
            t.NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric;
            t.NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric;
            t.NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric;
            t.NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric;
            t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric;
            function createNoopMeter() {
                return t.NOOP_METER;
            }
            t.createNoopMeter = createNoopMeter;
        },
        660: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NOOP_METER_PROVIDER = t.NoopMeterProvider = void 0;
            const n = r(102);
            class NoopMeterProvider {
                getMeter(e, t, r) {
                    return n.NOOP_METER;
                }
            }
            t.NoopMeterProvider = NoopMeterProvider;
            t.NOOP_METER_PROVIDER = new NoopMeterProvider;
        },
        200: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(46), t);
        },
        651: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t._globalThis = void 0;
            t._globalThis = typeof globalThis === "object" ? globalThis : global;
        },
        46: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(651), t);
        },
        939: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.propagation = void 0;
            const n = r(181);
            t.propagation = n.PropagationAPI.getInstance();
        },
        874: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTextMapPropagator = void 0;
            class NoopTextMapPropagator {
                inject(e, t) {}
                extract(e, t) {
                    return e;
                }
                fields() {
                    return [];
                }
            }
            t.NoopTextMapPropagator = NoopTextMapPropagator;
        },
        194: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.defaultTextMapSetter = t.defaultTextMapGetter = void 0;
            t.defaultTextMapGetter = {
                get (e, t) {
                    if (e == null) {
                        return undefined;
                    }
                    return e[t];
                },
                keys (e) {
                    if (e == null) {
                        return [];
                    }
                    return Object.keys(e);
                }
            };
            t.defaultTextMapSetter = {
                set (e, t, r) {
                    if (e == null) {
                        return;
                    }
                    e[t] = r;
                }
            };
        },
        845: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.trace = void 0;
            const n = r(997);
            t.trace = n.TraceAPI.getInstance();
        },
        403: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NonRecordingSpan = void 0;
            const n = r(476);
            class NonRecordingSpan {
                constructor(e = n.INVALID_SPAN_CONTEXT){
                    this._spanContext = e;
                }
                spanContext() {
                    return this._spanContext;
                }
                setAttribute(e, t) {
                    return this;
                }
                setAttributes(e) {
                    return this;
                }
                addEvent(e, t) {
                    return this;
                }
                setStatus(e) {
                    return this;
                }
                updateName(e) {
                    return this;
                }
                end(e) {}
                isRecording() {
                    return false;
                }
                recordException(e, t) {}
            }
            t.NonRecordingSpan = NonRecordingSpan;
        },
        614: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracer = void 0;
            const n = r(491);
            const a = r(607);
            const o = r(403);
            const i = r(139);
            const c = n.ContextAPI.getInstance();
            class NoopTracer {
                startSpan(e, t, r = c.active()) {
                    const n = Boolean(t === null || t === void 0 ? void 0 : t.root);
                    if (n) {
                        return new o.NonRecordingSpan;
                    }
                    const s = r && (0, a.getSpanContext)(r);
                    if (isSpanContext(s) && (0, i.isSpanContextValid)(s)) {
                        return new o.NonRecordingSpan(s);
                    } else {
                        return new o.NonRecordingSpan;
                    }
                }
                startActiveSpan(e, t, r, n) {
                    let o;
                    let i;
                    let s;
                    if (arguments.length < 2) {
                        return;
                    } else if (arguments.length === 2) {
                        s = t;
                    } else if (arguments.length === 3) {
                        o = t;
                        s = r;
                    } else {
                        o = t;
                        i = r;
                        s = n;
                    }
                    const u = i !== null && i !== void 0 ? i : c.active();
                    const l = this.startSpan(e, o, u);
                    const g = (0, a.setSpan)(u, l);
                    return c.with(g, s, undefined, l);
                }
            }
            t.NoopTracer = NoopTracer;
            function isSpanContext(e) {
                return typeof e === "object" && typeof e["spanId"] === "string" && typeof e["traceId"] === "string" && typeof e["traceFlags"] === "number";
            }
        },
        124: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracerProvider = void 0;
            const n = r(614);
            class NoopTracerProvider {
                getTracer(e, t, r) {
                    return new n.NoopTracer;
                }
            }
            t.NoopTracerProvider = NoopTracerProvider;
        },
        125: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracer = void 0;
            const n = r(614);
            const a = new n.NoopTracer;
            class ProxyTracer {
                constructor(e, t, r, n){
                    this._provider = e;
                    this.name = t;
                    this.version = r;
                    this.options = n;
                }
                startSpan(e, t, r) {
                    return this._getTracer().startSpan(e, t, r);
                }
                startActiveSpan(e, t, r, n) {
                    const a = this._getTracer();
                    return Reflect.apply(a.startActiveSpan, a, arguments);
                }
                _getTracer() {
                    if (this._delegate) {
                        return this._delegate;
                    }
                    const e = this._provider.getDelegateTracer(this.name, this.version, this.options);
                    if (!e) {
                        return a;
                    }
                    this._delegate = e;
                    return this._delegate;
                }
            }
            t.ProxyTracer = ProxyTracer;
        },
        846: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracerProvider = void 0;
            const n = r(125);
            const a = r(124);
            const o = new a.NoopTracerProvider;
            class ProxyTracerProvider {
                getTracer(e, t, r) {
                    var a;
                    return (a = this.getDelegateTracer(e, t, r)) !== null && a !== void 0 ? a : new n.ProxyTracer(this, e, t, r);
                }
                getDelegate() {
                    var e;
                    return (e = this._delegate) !== null && e !== void 0 ? e : o;
                }
                setDelegate(e) {
                    this._delegate = e;
                }
                getDelegateTracer(e, t, r) {
                    var n;
                    return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(e, t, r);
                }
            }
            t.ProxyTracerProvider = ProxyTracerProvider;
        },
        996: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SamplingDecision = void 0;
            var r;
            (function(e) {
                e[e["NOT_RECORD"] = 0] = "NOT_RECORD";
                e[e["RECORD"] = 1] = "RECORD";
                e[e["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
            })(r = t.SamplingDecision || (t.SamplingDecision = {}));
        },
        607: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getSpanContext = t.setSpanContext = t.deleteSpan = t.setSpan = t.getActiveSpan = t.getSpan = void 0;
            const n = r(780);
            const a = r(403);
            const o = r(491);
            const i = (0, n.createContextKey)("OpenTelemetry Context Key SPAN");
            function getSpan(e) {
                return e.getValue(i) || undefined;
            }
            t.getSpan = getSpan;
            function getActiveSpan() {
                return getSpan(o.ContextAPI.getInstance().active());
            }
            t.getActiveSpan = getActiveSpan;
            function setSpan(e, t) {
                return e.setValue(i, t);
            }
            t.setSpan = setSpan;
            function deleteSpan(e) {
                return e.deleteValue(i);
            }
            t.deleteSpan = deleteSpan;
            function setSpanContext(e, t) {
                return setSpan(e, new a.NonRecordingSpan(t));
            }
            t.setSpanContext = setSpanContext;
            function getSpanContext(e) {
                var t;
                return (t = getSpan(e)) === null || t === void 0 ? void 0 : t.spanContext();
            }
            t.getSpanContext = getSpanContext;
        },
        325: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceStateImpl = void 0;
            const n = r(564);
            const a = 32;
            const o = 512;
            const i = ",";
            const c = "=";
            class TraceStateImpl {
                constructor(e){
                    this._internalState = new Map;
                    if (e) this._parse(e);
                }
                set(e, t) {
                    const r = this._clone();
                    if (r._internalState.has(e)) {
                        r._internalState.delete(e);
                    }
                    r._internalState.set(e, t);
                    return r;
                }
                unset(e) {
                    const t = this._clone();
                    t._internalState.delete(e);
                    return t;
                }
                get(e) {
                    return this._internalState.get(e);
                }
                serialize() {
                    return this._keys().reduce((e, t)=>{
                        e.push(t + c + this.get(t));
                        return e;
                    }, []).join(i);
                }
                _parse(e) {
                    if (e.length > o) return;
                    this._internalState = e.split(i).reverse().reduce((e, t)=>{
                        const r = t.trim();
                        const a = r.indexOf(c);
                        if (a !== -1) {
                            const o = r.slice(0, a);
                            const i = r.slice(a + 1, t.length);
                            if ((0, n.validateKey)(o) && (0, n.validateValue)(i)) {
                                e.set(o, i);
                            } else {}
                        }
                        return e;
                    }, new Map);
                    if (this._internalState.size > a) {
                        this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, a));
                    }
                }
                _keys() {
                    return Array.from(this._internalState.keys()).reverse();
                }
                _clone() {
                    const e = new TraceStateImpl;
                    e._internalState = new Map(this._internalState);
                    return e;
                }
            }
            t.TraceStateImpl = TraceStateImpl;
        },
        564: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.validateValue = t.validateKey = void 0;
            const r = "[_0-9a-z-*/]";
            const n = `[a-z]${r}{0,255}`;
            const a = `[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`;
            const o = new RegExp(`^(?:${n}|${a})$`);
            const i = /^[ -~]{0,255}[!-~]$/;
            const c = /,|=/;
            function validateKey(e) {
                return o.test(e);
            }
            t.validateKey = validateKey;
            function validateValue(e) {
                return i.test(e) && !c.test(e);
            }
            t.validateValue = validateValue;
        },
        98: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createTraceState = void 0;
            const n = r(325);
            function createTraceState(e) {
                return new n.TraceStateImpl(e);
            }
            t.createTraceState = createTraceState;
        },
        476: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.INVALID_SPAN_CONTEXT = t.INVALID_TRACEID = t.INVALID_SPANID = void 0;
            const n = r(475);
            t.INVALID_SPANID = "0000000000000000";
            t.INVALID_TRACEID = "00000000000000000000000000000000";
            t.INVALID_SPAN_CONTEXT = {
                traceId: t.INVALID_TRACEID,
                spanId: t.INVALID_SPANID,
                traceFlags: n.TraceFlags.NONE
            };
        },
        357: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanKind = void 0;
            var r;
            (function(e) {
                e[e["INTERNAL"] = 0] = "INTERNAL";
                e[e["SERVER"] = 1] = "SERVER";
                e[e["CLIENT"] = 2] = "CLIENT";
                e[e["PRODUCER"] = 3] = "PRODUCER";
                e[e["CONSUMER"] = 4] = "CONSUMER";
            })(r = t.SpanKind || (t.SpanKind = {}));
        },
        139: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.wrapSpanContext = t.isSpanContextValid = t.isValidSpanId = t.isValidTraceId = void 0;
            const n = r(476);
            const a = r(403);
            const o = /^([0-9a-f]{32})$/i;
            const i = /^[0-9a-f]{16}$/i;
            function isValidTraceId(e) {
                return o.test(e) && e !== n.INVALID_TRACEID;
            }
            t.isValidTraceId = isValidTraceId;
            function isValidSpanId(e) {
                return i.test(e) && e !== n.INVALID_SPANID;
            }
            t.isValidSpanId = isValidSpanId;
            function isSpanContextValid(e) {
                return isValidTraceId(e.traceId) && isValidSpanId(e.spanId);
            }
            t.isSpanContextValid = isSpanContextValid;
            function wrapSpanContext(e) {
                return new a.NonRecordingSpan(e);
            }
            t.wrapSpanContext = wrapSpanContext;
        },
        847: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanStatusCode = void 0;
            var r;
            (function(e) {
                e[e["UNSET"] = 0] = "UNSET";
                e[e["OK"] = 1] = "OK";
                e[e["ERROR"] = 2] = "ERROR";
            })(r = t.SpanStatusCode || (t.SpanStatusCode = {}));
        },
        475: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceFlags = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["SAMPLED"] = 1] = "SAMPLED";
            })(r = t.TraceFlags || (t.TraceFlags = {}));
        },
        521: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.VERSION = void 0;
            t.VERSION = "1.6.0";
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var a = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r].call(a.exports, a, a.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var r = {};
    (()=>{
        var e = r;
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        e.trace = e.propagation = e.metrics = e.diag = e.context = e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = e.isValidSpanId = e.isValidTraceId = e.isSpanContextValid = e.createTraceState = e.TraceFlags = e.SpanStatusCode = e.SpanKind = e.SamplingDecision = e.ProxyTracerProvider = e.ProxyTracer = e.defaultTextMapSetter = e.defaultTextMapGetter = e.ValueType = e.createNoopMeter = e.DiagLogLevel = e.DiagConsoleLogger = e.ROOT_CONTEXT = e.createContextKey = e.baggageEntryMetadataFromString = void 0;
        var t = __nccwpck_require__(369);
        Object.defineProperty(e, "baggageEntryMetadataFromString", {
            enumerable: true,
            get: function() {
                return t.baggageEntryMetadataFromString;
            }
        });
        var n = __nccwpck_require__(780);
        Object.defineProperty(e, "createContextKey", {
            enumerable: true,
            get: function() {
                return n.createContextKey;
            }
        });
        Object.defineProperty(e, "ROOT_CONTEXT", {
            enumerable: true,
            get: function() {
                return n.ROOT_CONTEXT;
            }
        });
        var a = __nccwpck_require__(972);
        Object.defineProperty(e, "DiagConsoleLogger", {
            enumerable: true,
            get: function() {
                return a.DiagConsoleLogger;
            }
        });
        var o = __nccwpck_require__(957);
        Object.defineProperty(e, "DiagLogLevel", {
            enumerable: true,
            get: function() {
                return o.DiagLogLevel;
            }
        });
        var i = __nccwpck_require__(102);
        Object.defineProperty(e, "createNoopMeter", {
            enumerable: true,
            get: function() {
                return i.createNoopMeter;
            }
        });
        var c = __nccwpck_require__(901);
        Object.defineProperty(e, "ValueType", {
            enumerable: true,
            get: function() {
                return c.ValueType;
            }
        });
        var s = __nccwpck_require__(194);
        Object.defineProperty(e, "defaultTextMapGetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapGetter;
            }
        });
        Object.defineProperty(e, "defaultTextMapSetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapSetter;
            }
        });
        var u = __nccwpck_require__(125);
        Object.defineProperty(e, "ProxyTracer", {
            enumerable: true,
            get: function() {
                return u.ProxyTracer;
            }
        });
        var l = __nccwpck_require__(846);
        Object.defineProperty(e, "ProxyTracerProvider", {
            enumerable: true,
            get: function() {
                return l.ProxyTracerProvider;
            }
        });
        var g = __nccwpck_require__(996);
        Object.defineProperty(e, "SamplingDecision", {
            enumerable: true,
            get: function() {
                return g.SamplingDecision;
            }
        });
        var p = __nccwpck_require__(357);
        Object.defineProperty(e, "SpanKind", {
            enumerable: true,
            get: function() {
                return p.SpanKind;
            }
        });
        var d = __nccwpck_require__(847);
        Object.defineProperty(e, "SpanStatusCode", {
            enumerable: true,
            get: function() {
                return d.SpanStatusCode;
            }
        });
        var _ = __nccwpck_require__(475);
        Object.defineProperty(e, "TraceFlags", {
            enumerable: true,
            get: function() {
                return _.TraceFlags;
            }
        });
        var f = __nccwpck_require__(98);
        Object.defineProperty(e, "createTraceState", {
            enumerable: true,
            get: function() {
                return f.createTraceState;
            }
        });
        var b = __nccwpck_require__(139);
        Object.defineProperty(e, "isSpanContextValid", {
            enumerable: true,
            get: function() {
                return b.isSpanContextValid;
            }
        });
        Object.defineProperty(e, "isValidTraceId", {
            enumerable: true,
            get: function() {
                return b.isValidTraceId;
            }
        });
        Object.defineProperty(e, "isValidSpanId", {
            enumerable: true,
            get: function() {
                return b.isValidSpanId;
            }
        });
        var v = __nccwpck_require__(476);
        Object.defineProperty(e, "INVALID_SPANID", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPANID;
            }
        });
        Object.defineProperty(e, "INVALID_TRACEID", {
            enumerable: true,
            get: function() {
                return v.INVALID_TRACEID;
            }
        });
        Object.defineProperty(e, "INVALID_SPAN_CONTEXT", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPAN_CONTEXT;
            }
        });
        const O = __nccwpck_require__(67);
        Object.defineProperty(e, "context", {
            enumerable: true,
            get: function() {
                return O.context;
            }
        });
        const P = __nccwpck_require__(506);
        Object.defineProperty(e, "diag", {
            enumerable: true,
            get: function() {
                return P.diag;
            }
        });
        const N = __nccwpck_require__(886);
        Object.defineProperty(e, "metrics", {
            enumerable: true,
            get: function() {
                return N.metrics;
            }
        });
        const S = __nccwpck_require__(939);
        Object.defineProperty(e, "propagation", {
            enumerable: true,
            get: function() {
                return S.propagation;
            }
        });
        const C = __nccwpck_require__(845);
        Object.defineProperty(e, "trace", {
            enumerable: true,
            get: function() {
                return C.trace;
            }
        });
        e["default"] = {
            context: O.context,
            diag: P.diag,
            metrics: N.metrics,
            propagation: S.propagation,
            trace: C.trace
        };
    })();
    module.exports = r;
})();
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/lib/trace/tracer.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "BubbledError": (()=>BubbledError),
    "SpanKind": (()=>SpanKind),
    "SpanStatusCode": (()=>SpanStatusCode),
    "getTracer": (()=>getTracer),
    "isBubbledError": (()=>isBubbledError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/is-thenable.js [middleware] (ecmascript)");
;
;
let api;
// we want to allow users to use their own version of @opentelemetry/api if they
// want to, so we try to require it first, and if it fails we fall back to the
// version that is bundled with Next.js
// this is because @opentelemetry/api has to be synced with the version of
// @opentelemetry/tracing that is used, and we don't want to force users to use
// the version that is bundled with Next.js.
// the API is ~stable, so this should be fine
if ("TURBOPACK compile-time truthy", 1) {
    api = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/@opentelemetry/api/index.js [middleware] (ecmascript)");
} else {
    "TURBOPACK unreachable";
}
const { context, propagation, trace, SpanStatusCode, SpanKind, ROOT_CONTEXT } = api;
class BubbledError extends Error {
    constructor(bubble, result){
        super();
        this.bubble = bubble;
        this.result = result;
    }
}
function isBubbledError(error) {
    if (typeof error !== 'object' || error === null) return false;
    return error instanceof BubbledError;
}
const closeSpanWithError = (span, error)=>{
    if (isBubbledError(error) && error.bubble) {
        span.setAttribute('next.bubble', true);
    } else {
        if (error) {
            span.recordException(error);
        }
        span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error == null ? void 0 : error.message
        });
    }
    span.end();
};
/** we use this map to propagate attributes from nested spans to the top span */ const rootSpanAttributesStore = new Map();
const rootSpanIdKey = api.createContextKey('next.rootSpanId');
let lastSpanId = 0;
const getSpanId = ()=>lastSpanId++;
const clientTraceDataSetter = {
    set (carrier, key, value) {
        carrier.push({
            key,
            value
        });
    }
};
class NextTracerImpl {
    /**
   * Returns an instance to the trace with configured name.
   * Since wrap / trace can be defined in any place prior to actual trace subscriber initialization,
   * This should be lazily evaluated.
   */ getTracerInstance() {
        return trace.getTracer('next.js', '0.0.1');
    }
    getContext() {
        return context;
    }
    getTracePropagationData() {
        const activeContext = context.active();
        const entries = [];
        propagation.inject(activeContext, entries, clientTraceDataSetter);
        return entries;
    }
    getActiveScopeSpan() {
        return trace.getSpan(context == null ? void 0 : context.active());
    }
    withPropagatedContext(carrier, fn, getter) {
        const activeContext = context.active();
        if (trace.getSpanContext(activeContext)) {
            // Active span is already set, too late to propagate.
            return fn();
        }
        const remoteContext = propagation.extract(activeContext, carrier, getter);
        return context.with(remoteContext, fn);
    }
    trace(...args) {
        var _trace_getSpanContext;
        const [type, fnOrOptions, fnOrEmpty] = args;
        // coerce options form overload
        const { fn, options } = typeof fnOrOptions === 'function' ? {
            fn: fnOrOptions,
            options: {}
        } : {
            fn: fnOrEmpty,
            options: {
                ...fnOrOptions
            }
        };
        const spanName = options.spanName ?? type;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].includes(type) && process.env.NEXT_OTEL_VERBOSE !== '1' || options.hideSpan) {
            return fn();
        }
        // Trying to get active scoped span to assign parent. If option specifies parent span manually, will try to use it.
        let spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        let isRootSpan = false;
        if (!spanContext) {
            spanContext = (context == null ? void 0 : context.active()) ?? ROOT_CONTEXT;
            isRootSpan = true;
        } else if ((_trace_getSpanContext = trace.getSpanContext(spanContext)) == null ? void 0 : _trace_getSpanContext.isRemote) {
            isRootSpan = true;
        }
        const spanId = getSpanId();
        options.attributes = {
            'next.span_name': spanName,
            'next.span_type': type,
            ...options.attributes
        };
        return context.with(spanContext.setValue(rootSpanIdKey, spanId), ()=>this.getTracerInstance().startActiveSpan(spanName, options, (span)=>{
                const startTime = 'performance' in globalThis && 'measure' in performance ? globalThis.performance.now() : undefined;
                const onCleanup = ()=>{
                    rootSpanAttributesStore.delete(spanId);
                    if (startTime && process.env.NEXT_OTEL_PERFORMANCE_PREFIX && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LogSpanAllowList"].includes(type || '')) {
                        performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(type.split('.').pop() || '').replace(/[A-Z]/g, (match)=>'-' + match.toLowerCase())}`, {
                            start: startTime,
                            end: performance.now()
                        });
                    }
                };
                if (isRootSpan) {
                    rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
                }
                try {
                    if (fn.length > 1) {
                        return fn(span, (err)=>closeSpanWithError(span, err));
                    }
                    const result = fn(span);
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isThenable"])(result)) {
                        // If there's error make sure it throws
                        return result.then((res)=>{
                            span.end();
                            // Need to pass down the promise result,
                            // it could be react stream response with error { error, stream }
                            return res;
                        }).catch((err)=>{
                            closeSpanWithError(span, err);
                            throw err;
                        }).finally(onCleanup);
                    } else {
                        span.end();
                        onCleanup();
                    }
                    return result;
                } catch (err) {
                    closeSpanWithError(span, err);
                    onCleanup();
                    throw err;
                }
            }));
    }
    wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
            args[0],
            {},
            args[1]
        ];
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].includes(name) && process.env.NEXT_OTEL_VERBOSE !== '1') {
            return fn;
        }
        return function() {
            let optionsObj = options;
            if (typeof optionsObj === 'function' && typeof fn === 'function') {
                optionsObj = optionsObj.apply(this, arguments);
            }
            const lastArgId = arguments.length - 1;
            const cb = arguments[lastArgId];
            if (typeof cb === 'function') {
                const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
                return tracer.trace(name, optionsObj, (_span, done)=>{
                    arguments[lastArgId] = function(err) {
                        done == null ? void 0 : done(err);
                        return scopeBoundCb.apply(this, arguments);
                    };
                    return fn.apply(this, arguments);
                });
            } else {
                return tracer.trace(name, optionsObj, ()=>fn.apply(this, arguments));
            }
        };
    }
    startSpan(...args) {
        const [type, options] = args;
        const spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        return this.getTracerInstance().startSpan(type, options, spanContext);
    }
    getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined;
        return spanContext;
    }
    getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
    }
    setRootSpanAttribute(key, value) {
        const spanId = context.active().getValue(rootSpanIdKey);
        const attributes = rootSpanAttributesStore.get(spanId);
        if (attributes) {
            attributes.set(key, value);
        }
    }
}
const getTracer = (()=>{
    const tracer = new NextTracerImpl();
    return ()=>tracer;
})();
;
 //# sourceMappingURL=tracer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/cookie/index.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/api-utils/index.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ApiError": (()=>ApiError),
    "COOKIE_NAME_PRERENDER_BYPASS": (()=>COOKIE_NAME_PRERENDER_BYPASS),
    "COOKIE_NAME_PRERENDER_DATA": (()=>COOKIE_NAME_PRERENDER_DATA),
    "RESPONSE_LIMIT_DEFAULT": (()=>RESPONSE_LIMIT_DEFAULT),
    "SYMBOL_CLEARED_COOKIES": (()=>SYMBOL_CLEARED_COOKIES),
    "SYMBOL_PREVIEW_DATA": (()=>SYMBOL_PREVIEW_DATA),
    "checkIsOnDemandRevalidate": (()=>checkIsOnDemandRevalidate),
    "clearPreviewData": (()=>clearPreviewData),
    "redirect": (()=>redirect),
    "sendError": (()=>sendError),
    "sendStatusCode": (()=>sendStatusCode),
    "setLazyProp": (()=>setLazyProp),
    "wrapApiHandler": (()=>wrapApiHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/lib/trace/tracer.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)");
;
;
;
;
function wrapApiHandler(page, handler) {
    return (...args)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])().setRootSpanAttribute('next.route', page);
        // Call API route method
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NodeSpan"].runHandler, {
            spanName: `executing api route (pages) ${page}`
        }, ()=>handler(...args));
    };
}
function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === 'string') {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== 'number' || typeof url !== 'string') {
        throw new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`);
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(req.headers);
    const previewModeId = headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_HEADER"]);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER"]);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/cookie/index.js [middleware] (ecmascript)");
    const previous = res.getHeader('Set-Cookie');
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === 'string' ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
class ApiError extends Error {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/async-storage/draft-mode-provider.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DraftModeProvider": (()=>DraftModeProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/api-utils/index.js [middleware] (ecmascript)");
;
class DraftModeProvider {
    constructor(previewProps, req, cookies, mutableCookies){
        var _cookies_get;
        // The logic for draftMode() is very similar to tryGetPreviewData()
        // but Draft Mode does not have any data associated with it.
        const isOnDemandRevalidate = previewProps && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["checkIsOnDemandRevalidate"])(req, previewProps).isOnDemandRevalidate;
        const cookieValue = (_cookies_get = cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["COOKIE_NAME_PRERENDER_BYPASS"])) == null ? void 0 : _cookies_get.value;
        this.isEnabled = Boolean(!isOnDemandRevalidate && cookieValue && previewProps && (cookieValue === previewProps.previewModeId || // In dev mode, the cookie can be actual hash value preview id but the preview props can still be `development-id`.
        ("TURBOPACK compile-time value", "development") !== 'production' && previewProps.previewModeId === 'development-id'));
        this._previewModeId = previewProps == null ? void 0 : previewProps.previewModeId;
        this._mutableCookies = mutableCookies;
    }
    enable() {
        if (!this._previewModeId) {
            throw new Error('Invariant: previewProps missing previewModeId this should never happen');
        }
        this._mutableCookies.set({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["COOKIE_NAME_PRERENDER_BYPASS"],
            value: this._previewModeId,
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/'
        });
    }
    disable() {
        // To delete a cookie, set `expires` to a date in the past:
        // https://tools.ietf.org/html/rfc6265#section-4.1.1
        // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
        this._mutableCookies.set({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["COOKIE_NAME_PRERENDER_BYPASS"],
            value: '',
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            expires: new Date(0)
        });
    }
} //# sourceMappingURL=draft-mode-provider.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/async-storage/request-store.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createRequestStoreForAPI": (()=>createRequestStoreForAPI),
    "createRequestStoreForRender": (()=>createRequestStoreForRender),
    "synchronizeMutableCookies": (()=>synchronizeMutableCookies)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$draft$2d$mode$2d$provider$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/async-storage/draft-mode-provider.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
;
;
;
;
;
;
function getHeaders(headers) {
    const cleaned = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(headers);
    for (const header of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["FLIGHT_HEADERS"]){
        cleaned.delete(header.toLowerCase());
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].seal(cleaned);
}
function getMutableCookies(headers, onUpdateCookies) {
    const cookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(headers));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["MutableRequestCookiesAdapter"].wrap(cookies, onUpdateCookies);
}
/**
 * If middleware set cookies in this request (indicated by `x-middleware-set-cookie`),
 * then merge those into the existing cookie object, so that when `cookies()` is accessed
 * it's able to read the newly set cookies.
 */ function mergeMiddlewareCookies(req, existingCookies) {
    if ('x-middleware-set-cookie' in req.headers && typeof req.headers['x-middleware-set-cookie'] === 'string') {
        const setCookieValue = req.headers['x-middleware-set-cookie'];
        const responseHeaders = new Headers();
        for (const cookie of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["splitCookiesString"])(setCookieValue)){
            responseHeaders.append('set-cookie', cookie);
        }
        const responseCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](responseHeaders);
        // Transfer cookies from ResponseCookies to RequestCookies
        for (const cookie of responseCookies.getAll()){
            existingCookies.set(cookie);
        }
    }
}
function createRequestStoreForRender(req, res, url, implicitTags, onUpdateCookies, previewProps, isHmrRefresh, serverComponentsHmrCache) {
    return createRequestStoreImpl('render', req, res, url, implicitTags, onUpdateCookies, previewProps, isHmrRefresh, serverComponentsHmrCache);
}
function createRequestStoreForAPI(req, url, implicitTags, onUpdateCookies, previewProps) {
    return createRequestStoreImpl('action', req, undefined, url, implicitTags, onUpdateCookies, previewProps, false, undefined);
}
function createRequestStoreImpl(phase, req, res, url, implicitTags, onUpdateCookies, previewProps, isHmrRefresh, serverComponentsHmrCache) {
    function defaultOnUpdateCookies(cookies) {
        if (res) {
            res.setHeader('Set-Cookie', cookies);
        }
    }
    const cache = {};
    return {
        type: 'request',
        phase,
        implicitTags: implicitTags ?? [],
        // Rather than just using the whole `url` here, we pull the parts we want
        // to ensure we don't use parts of the URL that we shouldn't. This also
        // lets us avoid requiring an empty string for `search` in the type.
        url: {
            pathname: url.pathname,
            search: url.search ?? ''
        },
        get headers () {
            if (!cache.headers) {
                // Seal the headers object that'll freeze out any methods that could
                // mutate the underlying data.
                cache.headers = getHeaders(req.headers);
            }
            return cache.headers;
        },
        get cookies () {
            if (!cache.cookies) {
                // if middleware is setting cookie(s), then include those in
                // the initial cached cookies so they can be read in render
                const requestCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(req.headers));
                mergeMiddlewareCookies(req, requestCookies);
                // Seal the cookies object that'll freeze out any methods that could
                // mutate the underlying data.
                cache.cookies = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookiesAdapter"].seal(requestCookies);
            }
            return cache.cookies;
        },
        set cookies (value){
            cache.cookies = value;
        },
        get mutableCookies () {
            if (!cache.mutableCookies) {
                const mutableCookies = getMutableCookies(req.headers, onUpdateCookies || (res ? defaultOnUpdateCookies : undefined));
                mergeMiddlewareCookies(req, mutableCookies);
                cache.mutableCookies = mutableCookies;
            }
            return cache.mutableCookies;
        },
        get userspaceMutableCookies () {
            if (!cache.userspaceMutableCookies) {
                const userspaceMutableCookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["wrapWithMutableAccessCheck"])(this.mutableCookies);
                cache.userspaceMutableCookies = userspaceMutableCookies;
            }
            return cache.userspaceMutableCookies;
        },
        get draftMode () {
            if (!cache.draftMode) {
                cache.draftMode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$draft$2d$mode$2d$provider$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DraftModeProvider"](previewProps, req, this.cookies, this.mutableCookies);
            }
            return cache.draftMode;
        },
        isHmrRefresh,
        serverComponentsHmrCache: serverComponentsHmrCache || globalThis.__serverComponentsHmrCache
    };
}
function synchronizeMutableCookies(store) {
    // TODO: does this need to update headers as well?
    store.cookies = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookiesAdapter"].seal((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["responseCookiesToRequestCookies"])(store.mutableCookies));
} //# sourceMappingURL=request-store.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/p-queue/index.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
(()=>{
    "use strict";
    var e = {
        993: (e)=>{
            var t = Object.prototype.hasOwnProperty, n = "~";
            function Events() {}
            if (Object.create) {
                Events.prototype = Object.create(null);
                if (!(new Events).__proto__) n = false;
            }
            function EE(e, t, n) {
                this.fn = e;
                this.context = t;
                this.once = n || false;
            }
            function addListener(e, t, r, i, s) {
                if (typeof r !== "function") {
                    throw new TypeError("The listener must be a function");
                }
                var o = new EE(r, i || e, s), u = n ? n + t : t;
                if (!e._events[u]) e._events[u] = o, e._eventsCount++;
                else if (!e._events[u].fn) e._events[u].push(o);
                else e._events[u] = [
                    e._events[u],
                    o
                ];
                return e;
            }
            function clearEvent(e, t) {
                if (--e._eventsCount === 0) e._events = new Events;
                else delete e._events[t];
            }
            function EventEmitter() {
                this._events = new Events;
                this._eventsCount = 0;
            }
            EventEmitter.prototype.eventNames = function eventNames() {
                var e = [], r, i;
                if (this._eventsCount === 0) return e;
                for(i in r = this._events){
                    if (t.call(r, i)) e.push(n ? i.slice(1) : i);
                }
                if (Object.getOwnPropertySymbols) {
                    return e.concat(Object.getOwnPropertySymbols(r));
                }
                return e;
            };
            EventEmitter.prototype.listeners = function listeners(e) {
                var t = n ? n + e : e, r = this._events[t];
                if (!r) return [];
                if (r.fn) return [
                    r.fn
                ];
                for(var i = 0, s = r.length, o = new Array(s); i < s; i++){
                    o[i] = r[i].fn;
                }
                return o;
            };
            EventEmitter.prototype.listenerCount = function listenerCount(e) {
                var t = n ? n + e : e, r = this._events[t];
                if (!r) return 0;
                if (r.fn) return 1;
                return r.length;
            };
            EventEmitter.prototype.emit = function emit(e, t, r, i, s, o) {
                var u = n ? n + e : e;
                if (!this._events[u]) return false;
                var a = this._events[u], l = arguments.length, c, h;
                if (a.fn) {
                    if (a.once) this.removeListener(e, a.fn, undefined, true);
                    switch(l){
                        case 1:
                            return a.fn.call(a.context), true;
                        case 2:
                            return a.fn.call(a.context, t), true;
                        case 3:
                            return a.fn.call(a.context, t, r), true;
                        case 4:
                            return a.fn.call(a.context, t, r, i), true;
                        case 5:
                            return a.fn.call(a.context, t, r, i, s), true;
                        case 6:
                            return a.fn.call(a.context, t, r, i, s, o), true;
                    }
                    for(h = 1, c = new Array(l - 1); h < l; h++){
                        c[h - 1] = arguments[h];
                    }
                    a.fn.apply(a.context, c);
                } else {
                    var _ = a.length, f;
                    for(h = 0; h < _; h++){
                        if (a[h].once) this.removeListener(e, a[h].fn, undefined, true);
                        switch(l){
                            case 1:
                                a[h].fn.call(a[h].context);
                                break;
                            case 2:
                                a[h].fn.call(a[h].context, t);
                                break;
                            case 3:
                                a[h].fn.call(a[h].context, t, r);
                                break;
                            case 4:
                                a[h].fn.call(a[h].context, t, r, i);
                                break;
                            default:
                                if (!c) for(f = 1, c = new Array(l - 1); f < l; f++){
                                    c[f - 1] = arguments[f];
                                }
                                a[h].fn.apply(a[h].context, c);
                        }
                    }
                }
                return true;
            };
            EventEmitter.prototype.on = function on(e, t, n) {
                return addListener(this, e, t, n, false);
            };
            EventEmitter.prototype.once = function once(e, t, n) {
                return addListener(this, e, t, n, true);
            };
            EventEmitter.prototype.removeListener = function removeListener(e, t, r, i) {
                var s = n ? n + e : e;
                if (!this._events[s]) return this;
                if (!t) {
                    clearEvent(this, s);
                    return this;
                }
                var o = this._events[s];
                if (o.fn) {
                    if (o.fn === t && (!i || o.once) && (!r || o.context === r)) {
                        clearEvent(this, s);
                    }
                } else {
                    for(var u = 0, a = [], l = o.length; u < l; u++){
                        if (o[u].fn !== t || i && !o[u].once || r && o[u].context !== r) {
                            a.push(o[u]);
                        }
                    }
                    if (a.length) this._events[s] = a.length === 1 ? a[0] : a;
                    else clearEvent(this, s);
                }
                return this;
            };
            EventEmitter.prototype.removeAllListeners = function removeAllListeners(e) {
                var t;
                if (e) {
                    t = n ? n + e : e;
                    if (this._events[t]) clearEvent(this, t);
                } else {
                    this._events = new Events;
                    this._eventsCount = 0;
                }
                return this;
            };
            EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
            EventEmitter.prototype.addListener = EventEmitter.prototype.on;
            EventEmitter.prefixed = n;
            EventEmitter.EventEmitter = EventEmitter;
            if ("TURBOPACK compile-time truthy", 1) {
                e.exports = EventEmitter;
            }
        },
        213: (e)=>{
            e.exports = (e, t)=>{
                t = t || (()=>{});
                return e.then((e)=>new Promise((e)=>{
                        e(t());
                    }).then(()=>e), (e)=>new Promise((e)=>{
                        e(t());
                    }).then(()=>{
                        throw e;
                    }));
            };
        },
        574: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            function lowerBound(e, t, n) {
                let r = 0;
                let i = e.length;
                while(i > 0){
                    const s = i / 2 | 0;
                    let o = r + s;
                    if (n(e[o], t) <= 0) {
                        r = ++o;
                        i -= s + 1;
                    } else {
                        i = s;
                    }
                }
                return r;
            }
            t["default"] = lowerBound;
        },
        821: (e, t, n)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            const r = n(574);
            class PriorityQueue {
                constructor(){
                    this._queue = [];
                }
                enqueue(e, t) {
                    t = Object.assign({
                        priority: 0
                    }, t);
                    const n = {
                        priority: t.priority,
                        run: e
                    };
                    if (this.size && this._queue[this.size - 1].priority >= t.priority) {
                        this._queue.push(n);
                        return;
                    }
                    const i = r.default(this._queue, n, (e, t)=>t.priority - e.priority);
                    this._queue.splice(i, 0, n);
                }
                dequeue() {
                    const e = this._queue.shift();
                    return e === null || e === void 0 ? void 0 : e.run;
                }
                filter(e) {
                    return this._queue.filter((t)=>t.priority === e.priority).map((e)=>e.run);
                }
                get size() {
                    return this._queue.length;
                }
            }
            t["default"] = PriorityQueue;
        },
        816: (e, t, n)=>{
            const r = n(213);
            class TimeoutError extends Error {
                constructor(e){
                    super(e);
                    this.name = "TimeoutError";
                }
            }
            const pTimeout = (e, t, n)=>new Promise((i, s)=>{
                    if (typeof t !== "number" || t < 0) {
                        throw new TypeError("Expected `milliseconds` to be a positive number");
                    }
                    if (t === Infinity) {
                        i(e);
                        return;
                    }
                    const o = setTimeout(()=>{
                        if (typeof n === "function") {
                            try {
                                i(n());
                            } catch (e) {
                                s(e);
                            }
                            return;
                        }
                        const r = typeof n === "string" ? n : `Promise timed out after ${t} milliseconds`;
                        const o = n instanceof Error ? n : new TimeoutError(r);
                        if (typeof e.cancel === "function") {
                            e.cancel();
                        }
                        s(o);
                    }, t);
                    r(e.then(i, s), ()=>{
                        clearTimeout(o);
                    });
                });
            e.exports = pTimeout;
            e.exports["default"] = pTimeout;
            e.exports.TimeoutError = TimeoutError;
        }
    };
    var t = {};
    function __nccwpck_require__(n) {
        var r = t[n];
        if (r !== undefined) {
            return r.exports;
        }
        var i = t[n] = {
            exports: {}
        };
        var s = true;
        try {
            e[n](i, i.exports, __nccwpck_require__);
            s = false;
        } finally{
            if (s) delete t[n];
        }
        return i.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var n = {};
    (()=>{
        var e = n;
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        const t = __nccwpck_require__(993);
        const r = __nccwpck_require__(816);
        const i = __nccwpck_require__(821);
        const empty = ()=>{};
        const s = new r.TimeoutError;
        class PQueue extends t {
            constructor(e){
                var t, n, r, s;
                super();
                this._intervalCount = 0;
                this._intervalEnd = 0;
                this._pendingCount = 0;
                this._resolveEmpty = empty;
                this._resolveIdle = empty;
                e = Object.assign({
                    carryoverConcurrencyCount: false,
                    intervalCap: Infinity,
                    interval: 0,
                    concurrency: Infinity,
                    autoStart: true,
                    queueClass: i.default
                }, e);
                if (!(typeof e.intervalCap === "number" && e.intervalCap >= 1)) {
                    throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${(n = (t = e.intervalCap) === null || t === void 0 ? void 0 : t.toString()) !== null && n !== void 0 ? n : ""}\` (${typeof e.intervalCap})`);
                }
                if (e.interval === undefined || !(Number.isFinite(e.interval) && e.interval >= 0)) {
                    throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${(s = (r = e.interval) === null || r === void 0 ? void 0 : r.toString()) !== null && s !== void 0 ? s : ""}\` (${typeof e.interval})`);
                }
                this._carryoverConcurrencyCount = e.carryoverConcurrencyCount;
                this._isIntervalIgnored = e.intervalCap === Infinity || e.interval === 0;
                this._intervalCap = e.intervalCap;
                this._interval = e.interval;
                this._queue = new e.queueClass;
                this._queueClass = e.queueClass;
                this.concurrency = e.concurrency;
                this._timeout = e.timeout;
                this._throwOnTimeout = e.throwOnTimeout === true;
                this._isPaused = e.autoStart === false;
            }
            get _doesIntervalAllowAnother() {
                return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
            }
            get _doesConcurrentAllowAnother() {
                return this._pendingCount < this._concurrency;
            }
            _next() {
                this._pendingCount--;
                this._tryToStartAnother();
                this.emit("next");
            }
            _resolvePromises() {
                this._resolveEmpty();
                this._resolveEmpty = empty;
                if (this._pendingCount === 0) {
                    this._resolveIdle();
                    this._resolveIdle = empty;
                    this.emit("idle");
                }
            }
            _onResumeInterval() {
                this._onInterval();
                this._initializeIntervalIfNeeded();
                this._timeoutId = undefined;
            }
            _isIntervalPaused() {
                const e = Date.now();
                if (this._intervalId === undefined) {
                    const t = this._intervalEnd - e;
                    if (t < 0) {
                        this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
                    } else {
                        if (this._timeoutId === undefined) {
                            this._timeoutId = setTimeout(()=>{
                                this._onResumeInterval();
                            }, t);
                        }
                        return true;
                    }
                }
                return false;
            }
            _tryToStartAnother() {
                if (this._queue.size === 0) {
                    if (this._intervalId) {
                        clearInterval(this._intervalId);
                    }
                    this._intervalId = undefined;
                    this._resolvePromises();
                    return false;
                }
                if (!this._isPaused) {
                    const e = !this._isIntervalPaused();
                    if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
                        const t = this._queue.dequeue();
                        if (!t) {
                            return false;
                        }
                        this.emit("active");
                        t();
                        if (e) {
                            this._initializeIntervalIfNeeded();
                        }
                        return true;
                    }
                }
                return false;
            }
            _initializeIntervalIfNeeded() {
                if (this._isIntervalIgnored || this._intervalId !== undefined) {
                    return;
                }
                this._intervalId = setInterval(()=>{
                    this._onInterval();
                }, this._interval);
                this._intervalEnd = Date.now() + this._interval;
            }
            _onInterval() {
                if (this._intervalCount === 0 && this._pendingCount === 0 && this._intervalId) {
                    clearInterval(this._intervalId);
                    this._intervalId = undefined;
                }
                this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
                this._processQueue();
            }
            _processQueue() {
                while(this._tryToStartAnother()){}
            }
            get concurrency() {
                return this._concurrency;
            }
            set concurrency(e) {
                if (!(typeof e === "number" && e >= 1)) {
                    throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${e}\` (${typeof e})`);
                }
                this._concurrency = e;
                this._processQueue();
            }
            async add(e, t = {}) {
                return new Promise((n, i)=>{
                    const run = async ()=>{
                        this._pendingCount++;
                        this._intervalCount++;
                        try {
                            const o = this._timeout === undefined && t.timeout === undefined ? e() : r.default(Promise.resolve(e()), t.timeout === undefined ? this._timeout : t.timeout, ()=>{
                                if (t.throwOnTimeout === undefined ? this._throwOnTimeout : t.throwOnTimeout) {
                                    i(s);
                                }
                                return undefined;
                            });
                            n(await o);
                        } catch (e) {
                            i(e);
                        }
                        this._next();
                    };
                    this._queue.enqueue(run, t);
                    this._tryToStartAnother();
                    this.emit("add");
                });
            }
            async addAll(e, t) {
                return Promise.all(e.map(async (e)=>this.add(e, t)));
            }
            start() {
                if (!this._isPaused) {
                    return this;
                }
                this._isPaused = false;
                this._processQueue();
                return this;
            }
            pause() {
                this._isPaused = true;
            }
            clear() {
                this._queue = new this._queueClass;
            }
            async onEmpty() {
                if (this._queue.size === 0) {
                    return;
                }
                return new Promise((e)=>{
                    const t = this._resolveEmpty;
                    this._resolveEmpty = ()=>{
                        t();
                        e();
                    };
                });
            }
            async onIdle() {
                if (this._pendingCount === 0 && this._queue.size === 0) {
                    return;
                }
                return new Promise((e)=>{
                    const t = this._resolveIdle;
                    this._resolveIdle = ()=>{
                        t();
                        e();
                    };
                });
            }
            get size() {
                return this._queue.size;
            }
            sizeBy(e) {
                return this._queue.filter(e).length;
            }
            get pending() {
                return this._pendingCount;
            }
            get isPaused() {
                return this._isPaused;
            }
            get timeout() {
                return this._timeout;
            }
            set timeout(e) {
                this._timeout = e;
            }
        }
        e["default"] = PQueue;
    })();
    module.exports = n;
})();
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/invariant-error.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "InvariantError": (()=>InvariantError)
});
class InvariantError extends Error {
    constructor(message, options){
        super("Invariant: " + (message.endsWith('.') ? message : message + '.') + " This is a bug in Next.js.", options);
        this.name = 'InvariantError';
    }
} //# sourceMappingURL=invariant-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/after/revalidation-utils.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/** Run a callback, and execute any *new* revalidations added during its runtime. */ __turbopack_esm__({
    "withExecuteRevalidates": (()=>withExecuteRevalidates)
});
async function withExecuteRevalidates(store, callback) {
    if (!store) {
        return callback();
    }
    // If we executed any revalidates during the request, then we don't want to execute them again.
    // save the state so we can check if anything changed after we're done running callbacks.
    const savedRevalidationState = cloneRevalidationState(store);
    try {
        return await callback();
    } finally{
        // Check if we have any new revalidates, and if so, wait until they are all resolved.
        const newRevalidates = diffRevalidationState(savedRevalidationState, cloneRevalidationState(store));
        await executeRevalidates(store, newRevalidates);
    }
}
function cloneRevalidationState(store) {
    return {
        revalidatedTags: store.revalidatedTags ? [
            ...store.revalidatedTags
        ] : [],
        pendingRevalidates: {
            ...store.pendingRevalidates
        },
        pendingRevalidateWrites: store.pendingRevalidateWrites ? [
            ...store.pendingRevalidateWrites
        ] : []
    };
}
function diffRevalidationState(prev, curr) {
    const prevTags = new Set(prev.revalidatedTags);
    const prevRevalidateWrites = new Set(prev.pendingRevalidateWrites);
    return {
        revalidatedTags: curr.revalidatedTags.filter((tag)=>!prevTags.has(tag)),
        pendingRevalidates: Object.fromEntries(Object.entries(curr.pendingRevalidates).filter(([key])=>!(key in prev.pendingRevalidates))),
        pendingRevalidateWrites: curr.pendingRevalidateWrites.filter((promise)=>!prevRevalidateWrites.has(promise))
    };
}
async function executeRevalidates(workStore, { revalidatedTags, pendingRevalidates, pendingRevalidateWrites }) {
    var _workStore_incrementalCache;
    return Promise.all([
        (_workStore_incrementalCache = workStore.incrementalCache) == null ? void 0 : _workStore_incrementalCache.revalidateTag(revalidatedTags),
        ...Object.values(pendingRevalidates),
        ...pendingRevalidateWrites
    ]);
} //# sourceMappingURL=revalidation-utils.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/after/after-context.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "AfterContext": (()=>AfterContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$p$2d$queue$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/p-queue/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/invariant-error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/is-thenable.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$revalidation$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/after/revalidation-utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/async-local-storage.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript)");
;
;
;
;
;
;
;
class AfterContext {
    constructor({ waitUntil, onClose, onTaskError }){
        this.workUnitStores = new Set();
        this.waitUntil = waitUntil;
        this.onClose = onClose;
        this.onTaskError = onTaskError;
        this.callbackQueue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$p$2d$queue$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]();
        this.callbackQueue.pause();
    }
    after(task) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isThenable"])(task)) {
            if (!this.waitUntil) {
                errorWaitUntilNotAvailable();
            }
            this.waitUntil(task.catch((error)=>this.reportTaskError(error)));
        } else if (typeof task === 'function') {
            // TODO(after): implement tracing
            this.addCallback(task);
        } else {
            throw new Error('`unstable_after()`: Argument must be a promise or a function');
        }
    }
    addCallback(callback) {
        // if something is wrong, throw synchronously, bubbling up to the `unstable_after` callsite.
        if (!this.waitUntil) {
            errorWaitUntilNotAvailable();
        }
        if (!this.onClose) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["InvariantError"]('unstable_after: Missing `onClose` implementation');
        }
        const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workUnitAsyncStorage"].getStore();
        if (!workUnitStore) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["InvariantError"]('Missing workUnitStore in AfterContext.addCallback');
        }
        this.workUnitStores.add(workUnitStore);
        // this should only happen once.
        if (!this.runCallbacksOnClosePromise) {
            this.runCallbacksOnClosePromise = this.runCallbacksOnClose();
            this.waitUntil(this.runCallbacksOnClosePromise);
        }
        // Bind the callback to the current execution context (i.e. preserve all currently available ALS-es).
        // We do this because we want all of these to be equivalent in every regard except timing:
        //   after(() => x())
        //   after(x())
        //   await x()
        const wrappedCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["bindSnapshot"])(async ()=>{
            try {
                await callback();
            } catch (error) {
                this.reportTaskError(error);
            }
        });
        this.callbackQueue.add(wrappedCallback);
    }
    async runCallbacksOnClose() {
        await new Promise((resolve)=>this.onClose(resolve));
        return this.runCallbacks();
    }
    async runCallbacks() {
        if (this.callbackQueue.size === 0) return;
        for (const workUnitStore of this.workUnitStores){
            workUnitStore.phase = 'after';
        }
        const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workAsyncStorage"].getStore();
        if (!workStore) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["InvariantError"]('Missing workStore in AfterContext.runCallbacks');
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$revalidation$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["withExecuteRevalidates"])(workStore, ()=>{
            this.callbackQueue.start();
            return this.callbackQueue.onIdle();
        });
    }
    reportTaskError(error) {
        // TODO(after): this is fine for now, but will need better intergration with our error reporting.
        // TODO(after): should we log this if we have a onTaskError callback?
        console.error('An error occurred in a function passed to `unstable_after()`:', error);
        if (this.onTaskError) {
            // this is very defensive, but we really don't want anything to blow up in an error handler
            try {
                this.onTaskError == null ? void 0 : this.onTaskError.call(this, error);
            } catch (handlerError) {
                console.error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["InvariantError"]('`onTaskError` threw while handling an error thrown from an `unstable_after` task', {
                    cause: handlerError
                }));
            }
        }
    }
}
function errorWaitUntilNotAvailable() {
    throw new Error('`unstable_after()` will not work correctly, because `waitUntil` is not available in the current environment.');
} //# sourceMappingURL=after-context.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/async-storage/with-work-store.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "withWorkStore": (()=>withWorkStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$after$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/after/after-context.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [middleware] (ecmascript)");
;
;
const withWorkStore = (storage, { page, fallbackRouteParams, renderOpts, requestEndedState, isPrefetchRequest }, callback)=>{
    /**
   * Rules of Static & Dynamic HTML:
   *
   *    1.) We must generate static HTML unless the caller explicitly opts
   *        in to dynamic HTML support.
   *
   *    2.) If dynamic HTML support is requested, we must honor that request
   *        or throw an error. It is the sole responsibility of the caller to
   *        ensure they aren't e.g. requesting dynamic HTML for an AMP page.
   *
   *    3.) If the request is in draft mode, we must generate dynamic HTML.
   *
   *    4.) If the request is a server action, we must generate dynamic HTML.
   *
   * These rules help ensure that other existing features like request caching,
   * coalescing, and ISR continue working as intended.
   */ const isStaticGeneration = !renderOpts.supportsDynamicResponse && !renderOpts.isDraftMode && !renderOpts.isServerAction;
    const store = {
        isStaticGeneration,
        page,
        fallbackRouteParams,
        route: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeAppPath"])(page),
        incrementalCache: // so that it can access the fs cache without mocks
        renderOpts.incrementalCache || globalThis.__incrementalCache,
        cacheLifeProfiles: renderOpts.cacheLifeProfiles,
        isRevalidate: renderOpts.isRevalidate,
        isPrerendering: renderOpts.nextExport,
        fetchCache: renderOpts.fetchCache,
        isOnDemandRevalidate: renderOpts.isOnDemandRevalidate,
        isDraftMode: renderOpts.isDraftMode,
        requestEndedState,
        isPrefetchRequest,
        buildId: renderOpts.buildId,
        reactLoadableManifest: (renderOpts == null ? void 0 : renderOpts.reactLoadableManifest) || {},
        assetPrefix: (renderOpts == null ? void 0 : renderOpts.assetPrefix) || '',
        afterContext: createAfterContext(renderOpts)
    };
    // TODO: remove this when we resolve accessing the store outside the execution context
    renderOpts.store = store;
    return storage.run(store, callback, store);
};
function createAfterContext(renderOpts) {
    var _renderOpts_experimental;
    const isAfterEnabled = (renderOpts == null ? void 0 : (_renderOpts_experimental = renderOpts.experimental) == null ? void 0 : _renderOpts_experimental.after) ?? false;
    if (!isAfterEnabled) {
        return undefined;
    }
    const { waitUntil, onClose, onAfterTaskError } = renderOpts;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$after$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["AfterContext"]({
        waitUntil,
        onClose,
        onTaskError: onAfterTaskError
    });
} //# sourceMappingURL=with-work-store.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/web-on-close.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/** Monitor when the consumer finishes reading the response body.
that's as close as we can get to `res.on('close')` using web APIs.
*/ __turbopack_esm__({
    "CloseController": (()=>CloseController),
    "trackBodyConsumed": (()=>trackBodyConsumed),
    "trackStreamConsumed": (()=>trackStreamConsumed)
});
function trackBodyConsumed(body, onEnd) {
    if (typeof body === 'string') {
        const generator = async function* generate() {
            const encoder = new TextEncoder();
            yield encoder.encode(body);
            onEnd();
        };
        // @ts-expect-error BodyInit typings doesn't seem to include AsyncIterables even though it's supported in practice
        return generator();
    } else {
        return trackStreamConsumed(body, onEnd);
    }
}
function trackStreamConsumed(stream, onEnd) {
    const closePassThrough = new TransformStream({
        flush: ()=>{
            return onEnd();
        }
    });
    return stream.pipeThrough(closePassThrough);
}
class CloseController {
    onClose(callback) {
        if (this.isClosed) {
            throw new Error('Cannot subscribe to a closed CloseController');
        }
        this.target.addEventListener('close', callback);
        this.listeners++;
    }
    dispatchClose() {
        if (this.isClosed) {
            throw new Error('Cannot close a CloseController multiple times');
        }
        if (this.listeners > 0) {
            this.target.dispatchEvent(new Event('close'));
        }
        this.isClosed = true;
    }
    constructor(){
        this.target = new EventTarget();
        this.listeners = 0;
        this.isClosed = false;
    }
} //# sourceMappingURL=web-on-close.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/get-edge-preview-props.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * In edge runtime, these props directly accessed from environment variables.
 *   - local: env vars will be injected through edge-runtime as runtime env vars
 *   - deployment: env vars will be replaced by edge build pipeline
 */ __turbopack_esm__({
    "getEdgePreviewProps": (()=>getEdgePreviewProps)
});
function getEdgePreviewProps() {
    return {
        previewModeId: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 'development-id',
        previewModeSigningKey: process.env.__NEXT_PREVIEW_MODE_SIGNING_KEY || '',
        previewModeEncryptionKey: process.env.__NEXT_PREVIEW_MODE_ENCRYPTION_KEY || ''
    };
} //# sourceMappingURL=get-edge-preview-props.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/after/builtin-request-context.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createLocalRequestContext": (()=>createLocalRequestContext),
    "getBuiltinRequestContext": (()=>getBuiltinRequestContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/async-local-storage.js [middleware] (ecmascript)");
;
function getBuiltinRequestContext() {
    const _globalThis = globalThis;
    const ctx = _globalThis[NEXT_REQUEST_CONTEXT_SYMBOL] ?? _globalThis[VERCEL_REQUEST_CONTEXT_SYMBOL];
    return ctx == null ? void 0 : ctx.get();
}
/** This should be considered unstable until `unstable_after` is stablized. */ const NEXT_REQUEST_CONTEXT_SYMBOL = Symbol.for('@next/request-context');
// TODO(after): this is a temporary workaround.
// Remove this when vercel builder is updated to provide '@next/request-context'.
const VERCEL_REQUEST_CONTEXT_SYMBOL = Symbol.for('@vercel/request-context');
function createLocalRequestContext() {
    const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createAsyncLocalStorage"])();
    return {
        get: ()=>storage.getStore(),
        run: (value, callback)=>storage.run(value, callback)
    };
} //# sourceMappingURL=builtin-request-context.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/experimental/testmode/context.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getTestReqInfo: null,
    withRequest: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getTestReqInfo: function() {
        return getTestReqInfo;
    },
    withRequest: function() {
        return withRequest;
    }
});
const _nodeasync_hooks = __turbopack_require__("[externals]/ [external] (node:async_hooks, cjs)");
const testStorage = new _nodeasync_hooks.AsyncLocalStorage();
function extractTestInfoFromRequest(req, reader) {
    const proxyPortHeader = reader.header(req, 'next-test-proxy-port');
    if (!proxyPortHeader) {
        return undefined;
    }
    const url = reader.url(req);
    const proxyPort = Number(proxyPortHeader);
    const testData = reader.header(req, 'next-test-data') || '';
    return {
        url,
        proxyPort,
        testData
    };
}
function withRequest(req, reader, fn) {
    const testReqInfo = extractTestInfoFromRequest(req, reader);
    if (!testReqInfo) {
        return fn();
    }
    return testStorage.run(testReqInfo, fn);
}
function getTestReqInfo(req, reader) {
    const testReqInfo = testStorage.getStore();
    if (testReqInfo) {
        return testReqInfo;
    }
    if (req && reader) {
        return extractTestInfoFromRequest(req, reader);
    }
    return undefined;
} //# sourceMappingURL=context.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/experimental/testmode/fetch.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (node:buffer, cjs)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    handleFetch: null,
    interceptFetch: null,
    reader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleFetch: function() {
        return handleFetch;
    },
    interceptFetch: function() {
        return interceptFetch;
    },
    reader: function() {
        return reader;
    }
});
const _context = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/experimental/testmode/context.js [middleware] (ecmascript)");
const reader = {
    url (req) {
        return req.url;
    },
    header (req, name) {
        return req.headers.get(name);
    }
};
function getTestStack() {
    let stack = (new Error().stack ?? '').split('\n');
    // Skip the first line and find first non-empty line.
    for(let i = 1; i < stack.length; i++){
        if (stack[i].length > 0) {
            stack = stack.slice(i);
            break;
        }
    }
    // Filter out franmework lines.
    stack = stack.filter((f)=>!f.includes('/next/dist/'));
    // At most 5 lines.
    stack = stack.slice(0, 5);
    // Cleanup some internal info and trim.
    stack = stack.map((s)=>s.replace('webpack-internal:///(rsc)/', '').trim());
    return stack.join('    ');
}
async function buildProxyRequest(testData, request) {
    const { url, method, headers, body, cache, credentials, integrity, mode, redirect, referrer, referrerPolicy } = request;
    return {
        testData,
        api: 'fetch',
        request: {
            url,
            method,
            headers: [
                ...Array.from(headers),
                [
                    'next-test-stack',
                    getTestStack()
                ]
            ],
            body: body ? __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(await request.arrayBuffer()).toString('base64') : null,
            cache,
            credentials,
            integrity,
            mode,
            redirect,
            referrer,
            referrerPolicy
        }
    };
}
function buildResponse(proxyResponse) {
    const { status, headers, body } = proxyResponse.response;
    return new Response(body ? __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(body, 'base64') : null, {
        status,
        headers: new Headers(headers)
    });
}
async function handleFetch(originalFetch, request) {
    const testInfo = (0, _context.getTestReqInfo)(request, reader);
    if (!testInfo) {
        // Passthrough non-test requests.
        return originalFetch(request);
    }
    const { testData, proxyPort } = testInfo;
    const proxyRequest = await buildProxyRequest(testData, request);
    const resp = await originalFetch(`http://localhost:${proxyPort}`, {
        method: 'POST',
        body: JSON.stringify(proxyRequest),
        next: {
            // @ts-ignore
            internal: true
        }
    });
    if (!resp.ok) {
        throw new Error(`Proxy request failed: ${resp.status}`);
    }
    const proxyResponse = await resp.json();
    const { api } = proxyResponse;
    switch(api){
        case 'continue':
            return originalFetch(request);
        case 'abort':
        case 'unhandled':
            throw new Error(`Proxy request aborted [${request.method} ${request.url}]`);
        default:
            break;
    }
    return buildResponse(proxyResponse);
}
function interceptFetch(originalFetch) {
    global.fetch = function testFetch(input, init) {
        var _init_next;
        // Passthrough internal requests.
        // @ts-ignore
        if (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next.internal) {
            return originalFetch(input, init);
        }
        return handleFetch(originalFetch, new Request(input, init));
    };
    return ()=>{
        global.fetch = originalFetch;
    };
} //# sourceMappingURL=fetch.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/experimental/testmode/server-edge.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    interceptTestApis: null,
    wrapRequestHandler: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    interceptTestApis: function() {
        return interceptTestApis;
    },
    wrapRequestHandler: function() {
        return wrapRequestHandler;
    }
});
const _context = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/experimental/testmode/context.js [middleware] (ecmascript)");
const _fetch = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/experimental/testmode/fetch.js [middleware] (ecmascript)");
function interceptTestApis() {
    return (0, _fetch.interceptFetch)(global.fetch);
}
function wrapRequestHandler(handler) {
    return (req, fn)=>(0, _context.withRequest)(req, _fetch.reader, ()=>handler(req, fn));
} //# sourceMappingURL=server-edge.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/adapter.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "NextRequestHint": (()=>NextRequestHint),
    "adapter": (()=>adapter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$fetch$2d$event$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/request.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$relativize$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$internal$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/internal-utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$globals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/globals.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$request$2d$store$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/async-storage/request-store.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$with$2d$work$2d$store$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/async-storage/with-work-store.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/lib/trace/tracer.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$web$2d$on$2d$close$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/web-on-close.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$get$2d$edge$2d$preview$2d$props$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/get-edge-preview-props.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$builtin$2d$request$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/after/builtin-request-context.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [middleware] (ecmascript)");
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
;
;
class NextRequestHint extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextRequest"] {
    constructor(params){
        super(params.input, params.init);
        this.sourcePage = params.page;
    }
    get request() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
    respondWith() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
    waitUntil() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
}
const headersGetter = {
    keys: (headers)=>Array.from(headers.keys()),
    get: (headers, key)=>headers.get(key) ?? undefined
};
let propagator = (request, fn)=>{
    const tracer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])();
    return tracer.withPropagatedContext(request.headers, fn, headersGetter);
};
let testApisIntercepted = false;
function ensureTestApisIntercepted() {
    if (!testApisIntercepted) {
        testApisIntercepted = true;
        if (process.env.NEXT_PRIVATE_TEST_PROXY === 'true') {
            const { interceptTestApis, wrapRequestHandler } = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/experimental/testmode/server-edge.js [middleware] (ecmascript)");
            interceptTestApis();
            propagator = wrapRequestHandler(propagator);
        }
    }
}
async function adapter(params) {
    var _getBuiltinRequestContext;
    ensureTestApisIntercepted();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$globals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ensureInstrumentationRegistered"])();
    // TODO-APP: use explicit marker for this
    const isEdgeRendering = typeof self.__BUILD_MANIFEST !== 'undefined';
    params.request.url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeRscURL"])(params.request.url);
    const requestUrl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](params.request.url, {
        headers: params.request.headers,
        nextConfig: params.request.nextConfig
    });
    // Iterator uses an index to keep track of the current iteration. Because of deleting and appending below we can't just use the iterator.
    // Instead we use the keys before iteration.
    const keys = [
        ...requestUrl.searchParams.keys()
    ];
    for (const key of keys){
        const value = requestUrl.searchParams.getAll(key);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeNextQueryParam"])(key, (normalizedKey)=>{
            requestUrl.searchParams.delete(normalizedKey);
            for (const val of value){
                requestUrl.searchParams.append(normalizedKey, val);
            }
            requestUrl.searchParams.delete(key);
        });
    }
    // Ensure users only see page requests, never data requests.
    const buildId = requestUrl.buildId;
    requestUrl.buildId = '';
    const isNextDataRequest = params.request.headers['x-nextjs-data'];
    if (isNextDataRequest && requestUrl.pathname === '/index') {
        requestUrl.pathname = '/';
    }
    const requestHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["fromNodeOutgoingHttpHeaders"])(params.request.headers);
    const flightHeaders = new Map();
    // Headers should only be stripped for middleware
    if (!isEdgeRendering) {
        for (const header of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["FLIGHT_HEADERS"]){
            const key = header.toLowerCase();
            const value = requestHeaders.get(key);
            if (value) {
                flightHeaders.set(key, value);
                requestHeaders.delete(key);
            }
        }
    }
    const normalizeUrl = process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE ? new URL(params.request.url) : requestUrl;
    const request = new NextRequestHint({
        page: params.page,
        // Strip internal query parameters off the request.
        input: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$internal$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["stripInternalSearchParams"])(normalizeUrl, true).toString(),
        init: {
            body: params.request.body,
            headers: requestHeaders,
            method: params.request.method,
            nextConfig: params.request.nextConfig,
            signal: params.request.signal
        }
    });
    /**
   * This allows to identify the request as a data request. The user doesn't
   * need to know about this property neither use it. We add it for testing
   * purposes.
   */ if (isNextDataRequest) {
        Object.defineProperty(request, '__isData', {
            enumerable: false,
            value: true
        });
    }
    if (!globalThis.__incrementalCache && params.IncrementalCache) {
        globalThis.__incrementalCache = new params.IncrementalCache({
            appDir: true,
            fetchCache: true,
            minimalMode: ("TURBOPACK compile-time value", "development") !== 'development',
            fetchCacheKeyPrefix: ("TURBOPACK compile-time value", ""),
            dev: ("TURBOPACK compile-time value", "development") === 'development',
            requestHeaders: params.request.headers,
            requestProtocol: 'https',
            getPrerenderManifest: ()=>{
                return {
                    version: -1,
                    routes: {},
                    dynamicRoutes: {},
                    notFoundRoutes: [],
                    preview: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$get$2d$edge$2d$preview$2d$props$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getEdgePreviewProps"])()
                };
            }
        });
    }
    // if we're in an edge runtime sandbox, we should use the waitUntil
    // that we receive from the enclosing NextServer
    const outerWaitUntil = params.request.waitUntil ?? ((_getBuiltinRequestContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$builtin$2d$request$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getBuiltinRequestContext"])()) == null ? void 0 : _getBuiltinRequestContext.waitUntil);
    const event = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$fetch$2d$event$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextFetchEvent"]({
        request,
        page: params.page,
        context: outerWaitUntil ? {
            waitUntil: outerWaitUntil
        } : undefined
    });
    let response;
    let cookiesFromResponse;
    response = await propagator(request, ()=>{
        // we only care to make async storage available for middleware
        const isMiddleware = params.page === '/middleware' || params.page === '/src/middleware';
        if (isMiddleware) {
            var _params_request_nextConfig_experimental, _params_request_nextConfig;
            // if we're in an edge function, we only get a subset of `nextConfig` (no `experimental`),
            // so we have to inject it via DefinePlugin.
            // in `next start` this will be passed normally (see `NextNodeServer.runMiddleware`).
            const isAfterEnabled = ((_params_request_nextConfig = params.request.nextConfig) == null ? void 0 : (_params_request_nextConfig_experimental = _params_request_nextConfig.experimental) == null ? void 0 : _params_request_nextConfig_experimental.after) ?? !!("TURBOPACK compile-time value", false);
            let waitUntil = undefined;
            let closeController = undefined;
            if (isAfterEnabled) {
                waitUntil = event.waitUntil.bind(event);
                closeController = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$web$2d$on$2d$close$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CloseController"]();
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["MiddlewareSpan"].execute, {
                spanName: `middleware ${request.method} ${request.nextUrl.pathname}`,
                attributes: {
                    'http.target': request.nextUrl.pathname,
                    'http.method': request.method
                }
            }, async ()=>{
                try {
                    var _params_request_nextConfig_experimental, _params_request_nextConfig;
                    const onUpdateCookies = (cookies)=>{
                        cookiesFromResponse = cookies;
                    };
                    const previewProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$get$2d$edge$2d$preview$2d$props$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getEdgePreviewProps"])();
                    const requestStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$request$2d$store$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRequestStoreForAPI"])(request, request.nextUrl, undefined, onUpdateCookies, previewProps);
                    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$with$2d$work$2d$store$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["withWorkStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workAsyncStorage"], {
                        page: '/',
                        fallbackRouteParams: null,
                        renderOpts: {
                            cacheLifeProfiles: (_params_request_nextConfig = params.request.nextConfig) == null ? void 0 : (_params_request_nextConfig_experimental = _params_request_nextConfig.experimental) == null ? void 0 : _params_request_nextConfig_experimental.cacheLife,
                            experimental: {
                                after: isAfterEnabled,
                                isRoutePPREnabled: false,
                                dynamicIO: false
                            },
                            buildId: buildId ?? '',
                            supportsDynamicResponse: true,
                            waitUntil,
                            onClose: closeController ? closeController.onClose.bind(closeController) : undefined
                        },
                        requestEndedState: {
                            ended: false
                        },
                        isPrefetchRequest: request.headers.has(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_ROUTER_PREFETCH_HEADER"])
                    }, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workUnitAsyncStorage"].run(requestStore, params.handler, request, event));
                } finally{
                    // middleware cannot stream, so we can consider the response closed
                    // as soon as the handler returns.
                    if (closeController) {
                        // we can delay running it until a bit later --
                        // if it's needed, we'll have a `waitUntil` lock anyway.
                        setTimeout(()=>{
                            closeController.dispatchClose();
                        }, 0);
                    }
                }
            });
        }
        return params.handler(request, event);
    });
    // check if response is a Response object
    if (response && !(response instanceof Response)) {
        throw new TypeError('Expected an instance of Response to be returned');
    }
    if (response && cookiesFromResponse) {
        response.headers.set('set-cookie', cookiesFromResponse);
    }
    /**
   * For rewrites we must always include the locale in the final pathname
   * so we re-create the NextURL forcing it to include it when the it is
   * an internal rewrite. Also we make sure the outgoing rewrite URL is
   * a data URL if the request was a data request.
   */ const rewrite = response == null ? void 0 : response.headers.get('x-middleware-rewrite');
    if (response && rewrite && !isEdgeRendering) {
        const rewriteUrl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](rewrite, {
            forceLocale: true,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        if (!process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE) {
            if (rewriteUrl.host === request.nextUrl.host) {
                rewriteUrl.buildId = buildId || rewriteUrl.buildId;
                response.headers.set('x-middleware-rewrite', String(rewriteUrl));
            }
        }
        /**
     * When the request is a data request we must show if there was a rewrite
     * with an internal header so the client knows which component to load
     * from the data request.
     */ const relativizedRewrite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$relativize$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["relativizeURL"])(String(rewriteUrl), String(requestUrl));
        if (isNextDataRequest && // if the rewrite is external and external rewrite
        // resolving config is enabled don't add this header
        // so the upstream app can set it instead
        !(("TURBOPACK compile-time value", false) && relativizedRewrite.match(/http(s)?:\/\//))) {
            response.headers.set('x-nextjs-rewrite', relativizedRewrite);
        }
    }
    /**
   * For redirects we will not include the locale in case when it is the
   * default and we must also make sure the outgoing URL is a data one if
   * the incoming request was a data request.
   */ const redirect = response == null ? void 0 : response.headers.get('Location');
    if (response && redirect && !isEdgeRendering) {
        const redirectURL = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](redirect, {
            forceLocale: false,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        /**
     * Responses created from redirects have immutable headers so we have
     * to clone the response to be able to modify it.
     */ response = new Response(response.body, response);
        if (!process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE) {
            if (redirectURL.host === request.nextUrl.host) {
                redirectURL.buildId = buildId || redirectURL.buildId;
                response.headers.set('Location', String(redirectURL));
            }
        }
        /**
     * When the request is a data request we can't use the location header as
     * it may end up with CORS error. Instead we map to an internal header so
     * the client knows the destination.
     */ if (isNextDataRequest) {
            response.headers.delete('Location');
            response.headers.set('x-nextjs-redirect', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$relativize$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["relativizeURL"])(String(redirectURL), String(requestUrl)));
        }
    }
    const finalResponse = response ? response : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    // Flight headers are not overridable / removable so they are applied at the end.
    const middlewareOverrideHeaders = finalResponse.headers.get('x-middleware-override-headers');
    const overwrittenHeaders = [];
    if (middlewareOverrideHeaders) {
        for (const [key, value] of flightHeaders){
            finalResponse.headers.set(`x-middleware-request-${key}`, value);
            overwrittenHeaders.push(key);
        }
        if (overwrittenHeaders.length > 0) {
            finalResponse.headers.set('x-middleware-override-headers', middlewareOverrideHeaders + ',' + overwrittenHeaders.join(','));
        }
    }
    return {
        response: finalResponse,
        waitUntil: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$fetch$2d$event$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getWaitUntilPromiseFromEvent"])(event) ?? Promise.resolve(),
        fetchMetrics: request.fetchMetrics
    };
} //# sourceMappingURL=adapter.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/image-response.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * @deprecated ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead.
 * Migration with codemods: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#next-og-import
 */ __turbopack_esm__({
    "ImageResponse": (()=>ImageResponse)
});
function ImageResponse() {
    throw new Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead');
} //# sourceMappingURL=image-response.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/ua-parser-js/ua-parser.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
(()=>{
    var i = {
        226: function(i, e) {
            (function(o, a) {
                "use strict";
                var r = "1.0.35", t = "", n = "?", s = "function", b = "undefined", w = "object", l = "string", d = "major", c = "model", u = "name", p = "type", m = "vendor", f = "version", h = "architecture", v = "console", g = "mobile", k = "tablet", x = "smarttv", _ = "wearable", y = "embedded", q = 350;
                var T = "Amazon", S = "Apple", z = "ASUS", N = "BlackBerry", A = "Browser", C = "Chrome", E = "Edge", O = "Firefox", U = "Google", j = "Huawei", P = "LG", R = "Microsoft", M = "Motorola", B = "Opera", V = "Samsung", D = "Sharp", I = "Sony", W = "Viera", F = "Xiaomi", G = "Zebra", H = "Facebook", L = "Chromium OS", Z = "Mac OS";
                var extend = function(i, e) {
                    var o = {};
                    for(var a in i){
                        if (e[a] && e[a].length % 2 === 0) {
                            o[a] = e[a].concat(i[a]);
                        } else {
                            o[a] = i[a];
                        }
                    }
                    return o;
                }, enumerize = function(i) {
                    var e = {};
                    for(var o = 0; o < i.length; o++){
                        e[i[o].toUpperCase()] = i[o];
                    }
                    return e;
                }, has = function(i, e) {
                    return typeof i === l ? lowerize(e).indexOf(lowerize(i)) !== -1 : false;
                }, lowerize = function(i) {
                    return i.toLowerCase();
                }, majorize = function(i) {
                    return typeof i === l ? i.replace(/[^\d\.]/g, t).split(".")[0] : a;
                }, trim = function(i, e) {
                    if (typeof i === l) {
                        i = i.replace(/^\s\s*/, t);
                        return typeof e === b ? i : i.substring(0, q);
                    }
                };
                var rgxMapper = function(i, e) {
                    var o = 0, r, t, n, b, l, d;
                    while(o < e.length && !l){
                        var c = e[o], u = e[o + 1];
                        r = t = 0;
                        while(r < c.length && !l){
                            if (!c[r]) {
                                break;
                            }
                            l = c[r++].exec(i);
                            if (!!l) {
                                for(n = 0; n < u.length; n++){
                                    d = l[++t];
                                    b = u[n];
                                    if (typeof b === w && b.length > 0) {
                                        if (b.length === 2) {
                                            if (typeof b[1] == s) {
                                                this[b[0]] = b[1].call(this, d);
                                            } else {
                                                this[b[0]] = b[1];
                                            }
                                        } else if (b.length === 3) {
                                            if (typeof b[1] === s && !(b[1].exec && b[1].test)) {
                                                this[b[0]] = d ? b[1].call(this, d, b[2]) : a;
                                            } else {
                                                this[b[0]] = d ? d.replace(b[1], b[2]) : a;
                                            }
                                        } else if (b.length === 4) {
                                            this[b[0]] = d ? b[3].call(this, d.replace(b[1], b[2])) : a;
                                        }
                                    } else {
                                        this[b] = d ? d : a;
                                    }
                                }
                            }
                        }
                        o += 2;
                    }
                }, strMapper = function(i, e) {
                    for(var o in e){
                        if (typeof e[o] === w && e[o].length > 0) {
                            for(var r = 0; r < e[o].length; r++){
                                if (has(e[o][r], i)) {
                                    return o === n ? a : o;
                                }
                            }
                        } else if (has(e[o], i)) {
                            return o === n ? a : o;
                        }
                    }
                    return i;
                };
                var $ = {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }, X = {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: [
                        "NT 5.1",
                        "NT 5.2"
                    ],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: [
                        "NT 6.4",
                        "NT 10.0"
                    ],
                    RT: "ARM"
                };
                var K = {
                    browser: [
                        [
                            /\b(?:crmo|crios)\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Chrome"
                            ]
                        ],
                        [
                            /edg(?:e|ios|a)?\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Edge"
                            ]
                        ],
                        [
                            /(opera mini)\/([-\w\.]+)/i,
                            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /opios[\/ ]+([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B + " Mini"
                            ]
                        ],
                        [
                            /\bopr\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B
                            ]
                        ],
                        [
                            /(kindle)\/([\w\.]+)/i,
                            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                            /(?:ms|\()(ie) ([\w\.]+)/i,
                            /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                            /(heytap|ovi)browser\/([\d\.]+)/i,
                            /(weibo)__([\d\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "UC" + A
                            ]
                        ],
                        [
                            /microm.+\bqbcore\/([\w\.]+)/i,
                            /\bqbcore\/([\w\.]+).+microm/i
                        ],
                        [
                            f,
                            [
                                u,
                                "WeChat(Win) Desktop"
                            ]
                        ],
                        [
                            /micromessenger\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "WeChat"
                            ]
                        ],
                        [
                            /konqueror\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Konqueror"
                            ]
                        ],
                        [
                            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
                        ],
                        [
                            f,
                            [
                                u,
                                "IE"
                            ]
                        ],
                        [
                            /ya(?:search)?browser\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Yandex"
                            ]
                        ],
                        [
                            /(avast|avg)\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                /(.+)/,
                                "$1 Secure " + A
                            ],
                            f
                        ],
                        [
                            /\bfocus\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                O + " Focus"
                            ]
                        ],
                        [
                            /\bopt\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B + " Touch"
                            ]
                        ],
                        [
                            /coc_coc\w+\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Coc Coc"
                            ]
                        ],
                        [
                            /dolfin\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Dolphin"
                            ]
                        ],
                        [
                            /coast\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B + " Coast"
                            ]
                        ],
                        [
                            /miuibrowser\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "MIUI " + A
                            ]
                        ],
                        [
                            /fxios\/([-\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                O
                            ]
                        ],
                        [
                            /\bqihu|(qi?ho?o?|360)browser/i
                        ],
                        [
                            [
                                u,
                                "360 " + A
                            ]
                        ],
                        [
                            /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                /(.+)/,
                                "$1 " + A
                            ],
                            f
                        ],
                        [
                            /(comodo_dragon)\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                /_/g,
                                " "
                            ],
                            f
                        ],
                        [
                            /(electron)\/([\w\.]+) safari/i,
                            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(metasr)[\/ ]?([\w\.]+)/i,
                            /(lbbrowser)/i,
                            /\[(linkedin)app\]/i
                        ],
                        [
                            u
                        ],
                        [
                            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
                        ],
                        [
                            [
                                u,
                                H
                            ],
                            f
                        ],
                        [
                            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                            /safari (line)\/([\w\.]+)/i,
                            /\b(line)\/([\w\.]+)\/iab/i,
                            /(chromium|instagram)[\/ ]([-\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /\bgsa\/([\w\.]+) .*safari\//i
                        ],
                        [
                            f,
                            [
                                u,
                                "GSA"
                            ]
                        ],
                        [
                            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "TikTok"
                            ]
                        ],
                        [
                            /headlesschrome(?:\/([\w\.]+)| )/i
                        ],
                        [
                            f,
                            [
                                u,
                                C + " Headless"
                            ]
                        ],
                        [
                            / wv\).+(chrome)\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                C + " WebView"
                            ],
                            f
                        ],
                        [
                            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Android " + A
                            ]
                        ],
                        [
                            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Mobile Safari"
                            ]
                        ],
                        [
                            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
                        ],
                        [
                            f,
                            u
                        ],
                        [
                            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
                        ],
                        [
                            u,
                            [
                                f,
                                strMapper,
                                $
                            ]
                        ],
                        [
                            /(webkit|khtml)\/([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(navigator|netscape\d?)\/([-\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                "Netscape"
                            ],
                            f
                        ],
                        [
                            /mobile vr; rv:([\w\.]+)\).+firefox/i
                        ],
                        [
                            f,
                            [
                                u,
                                O + " Reality"
                            ]
                        ],
                        [
                            /ekiohf.+(flow)\/([\w\.]+)/i,
                            /(swiftfox)/i,
                            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                            /(firefox)\/([\w\.]+)/i,
                            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                            /(links) \(([\w\.]+)/i,
                            /panasonic;(viera)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(cobalt)\/([\w\.]+)/i
                        ],
                        [
                            u,
                            [
                                f,
                                /master.|lts./,
                                ""
                            ]
                        ]
                    ],
                    cpu: [
                        [
                            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
                        ],
                        [
                            [
                                h,
                                "amd64"
                            ]
                        ],
                        [
                            /(ia32(?=;))/i
                        ],
                        [
                            [
                                h,
                                lowerize
                            ]
                        ],
                        [
                            /((?:i[346]|x)86)[;\)]/i
                        ],
                        [
                            [
                                h,
                                "ia32"
                            ]
                        ],
                        [
                            /\b(aarch64|arm(v?8e?l?|_?64))\b/i
                        ],
                        [
                            [
                                h,
                                "arm64"
                            ]
                        ],
                        [
                            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
                        ],
                        [
                            [
                                h,
                                "armhf"
                            ]
                        ],
                        [
                            /windows (ce|mobile); ppc;/i
                        ],
                        [
                            [
                                h,
                                "arm"
                            ]
                        ],
                        [
                            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
                        ],
                        [
                            [
                                h,
                                /ower/,
                                t,
                                lowerize
                            ]
                        ],
                        [
                            /(sun4\w)[;\)]/i
                        ],
                        [
                            [
                                h,
                                "sparc"
                            ]
                        ],
                        [
                            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                        ],
                        [
                            [
                                h,
                                lowerize
                            ]
                        ]
                    ],
                    device: [
                        [
                            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
                        ],
                        [
                            c,
                            [
                                m,
                                V
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                            /samsung[- ]([-\w]+)/i,
                            /sec-(sgh\w+)/i
                        ],
                        [
                            c,
                            [
                                m,
                                V
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\((ipad);[-\w\),; ]+apple/i,
                            /applecoremedia\/[\w\.]+ \((ipad)/i,
                            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(macintosh);/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ]
                        ],
                        [
                            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
                        ],
                        [
                            c,
                            [
                                m,
                                D
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
                        ],
                        [
                            c,
                            [
                                m,
                                j
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(?:huawei|honor)([-\w ]+)[;\)]/i,
                            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
                        ],
                        [
                            c,
                            [
                                m,
                                j
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(poco[\w ]+)(?: bui|\))/i,
                            /\b; (\w+) build\/hm\1/i,
                            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
                        ],
                        [
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                m,
                                F
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
                        ],
                        [
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                m,
                                F
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /; (\w+) bui.+ oppo/i,
                            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "OPPO"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /vivo (\w+)(?: bui|\))/i,
                            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Vivo"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(rmx[12]\d{3})(?: bui|;|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Realme"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                            /\bmot(?:orola)?[- ](\w*)/i,
                            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
                        ],
                        [
                            c,
                            [
                                m,
                                M
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
                        ],
                        [
                            c,
                            [
                                m,
                                M
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
                        ],
                        [
                            c,
                            [
                                m,
                                P
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                            /\blg-?([\d\w]+) bui/i
                        ],
                        [
                            c,
                            [
                                m,
                                P
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(ideatab[-\w ]+)/i,
                            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Lenovo"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(?:maemo|nokia).*(n900|lumia \d+)/i,
                            /nokia[-_ ]?([-\w\.]*)/i
                        ],
                        [
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                m,
                                "Nokia"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(pixel c)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
                        ],
                        [
                            c,
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /sony tablet [ps]/i,
                            /\b(?:sony)?sgp\w+(?: bui|\))/i
                        ],
                        [
                            [
                                c,
                                "Xperia Tablet"
                            ],
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            / (kb2005|in20[12]5|be20[12][59])\b/i,
                            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                "OnePlus"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(alexa)webm/i,
                            /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                            /(kf[a-z]+)( bui|\)).+silk\//i
                        ],
                        [
                            c,
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
                        ],
                        [
                            [
                                c,
                                /(.+)/g,
                                "Fire Phone $1"
                            ],
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(playbook);[-\w\),; ]+(rim)/i
                        ],
                        [
                            c,
                            m,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((?:bb[a-f]|st[hv])100-\d)/i,
                            /\(bb10; (\w+)/i
                        ],
                        [
                            c,
                            [
                                m,
                                N
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
                        ],
                        [
                            c,
                            [
                                m,
                                z
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                z
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(nexus 9)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "HTC"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
                        ],
                        [
                            m,
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Acer"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid.+; (m[1-5] note) bui/i,
                            /\bmz-([-\w]{2,})/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Meizu"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                            /(hp) ([\w ]+\w)/i,
                            /(asus)-?(\w+)/i,
                            /(microsoft); (lumia[\w ]+)/i,
                            /(lenovo)[-_ ]?([-\w]+)/i,
                            /(jolla)/i,
                            /(oppo) ?([\w ]+) bui/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(kobo)\s(ereader|touch)/i,
                            /(archos) (gamepad2?)/i,
                            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                            /(kindle)\/([\w\.]+)/i,
                            /(nook)[\w ]+build\/(\w+)/i,
                            /(dell) (strea[kpr\d ]*[\dko])/i,
                            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                            /(trinity)[- ]*(t\d{3}) bui/i,
                            /(gigaset)[- ]+(q\w{1,9}) bui/i,
                            /(vodafone) ([\w ]+)(?:\)| bui)/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(surface duo)/i
                        ],
                        [
                            c,
                            [
                                m,
                                R
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid [\d\.]+; (fp\du?)(?: b|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Fairphone"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(u304aa)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "AT&T"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\bsie-(\w*)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Siemens"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(rct\w+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "RCA"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(venue[\d ]{2,7}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Dell"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(q(?:mv|ta)\w+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Verizon"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Barnes & Noble"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(tm\d{3}\w+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "NuVision"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(k88) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "ZTE"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(nx\d{3}j) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "ZTE"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(gen\d{3}) b.+49h/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Swiss"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(zur\d{3}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Swiss"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((zeki)?tb.*\b) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Zeki"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b([yr]\d{2}) b/i,
                            /\b(dragon[- ]+touch |dt)(\w{5}) b/i
                        ],
                        [
                            [
                                m,
                                "Dragon Touch"
                            ],
                            c,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(ns-?\w{0,9}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Insignia"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((nxa|next)-?\w{0,9}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "NextBook"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
                        ],
                        [
                            [
                                m,
                                "Voice"
                            ],
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(lvtel\-)?(v1[12]) b/i
                        ],
                        [
                            [
                                m,
                                "LvTel"
                            ],
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(ph-1) /i
                        ],
                        [
                            c,
                            [
                                m,
                                "Essential"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(v(100md|700na|7011|917g).*\b) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Envizen"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(trio[-\w\. ]+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "MachSpeed"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\btu_(1491) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Rotor"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(shield[\w ]+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Nvidia"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(sprint) (\w+)/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(kin\.[onetw]{3})/i
                        ],
                        [
                            [
                                c,
                                /\./g,
                                " "
                            ],
                            [
                                m,
                                R
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                G
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                G
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /smart-tv.+(samsung)/i
                        ],
                        [
                            m,
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /hbbtv.+maple;(\d+)/i
                        ],
                        [
                            [
                                c,
                                /^/,
                                "SmartTV"
                            ],
                            [
                                m,
                                V
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
                        ],
                        [
                            [
                                m,
                                P
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(apple) ?tv/i
                        ],
                        [
                            m,
                            [
                                c,
                                S + " TV"
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /crkey/i
                        ],
                        [
                            [
                                c,
                                C + "cast"
                            ],
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /droid.+aft(\w)( bui|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /\(dtv[\);].+(aquos)/i,
                            /(aquos-tv[\w ]+)\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                D
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(bravia[\w ]+)( bui|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(mitv-\w{5}) bui/i
                        ],
                        [
                            c,
                            [
                                m,
                                F
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /Hbbtv.*(technisat) (.*);/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
                        ],
                        [
                            [
                                m,
                                trim
                            ],
                            [
                                c,
                                trim
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
                        ],
                        [
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(ouya)/i,
                            /(nintendo) ([wids3utch]+)/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /droid.+; (shield) bui/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Nvidia"
                            ],
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /(playstation [345portablevi]+)/i
                        ],
                        [
                            c,
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /\b(xbox(?: one)?(?!; xbox))[\); ]/i
                        ],
                        [
                            c,
                            [
                                m,
                                R
                            ],
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /((pebble))app/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /droid.+; (glass) \d/i
                        ],
                        [
                            c,
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /droid.+; (wt63?0{2,3})\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                G
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /(quest( 2| pro)?)/i
                        ],
                        [
                            c,
                            [
                                m,
                                H
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
                        ],
                        [
                            m,
                            [
                                p,
                                y
                            ]
                        ],
                        [
                            /(aeobc)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                y
                            ]
                        ],
                        [
                            /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i
                        ],
                        [
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
                        ],
                        [
                            c,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
                        ],
                        [
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
                        ],
                        [
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(android[-\w\. ]{0,9});.+buil/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Generic"
                            ]
                        ]
                    ],
                    engine: [
                        [
                            /windows.+ edge\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                E + "HTML"
                            ]
                        ],
                        [
                            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Blink"
                            ]
                        ],
                        [
                            /(presto)\/([\w\.]+)/i,
                            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                            /ekioh(flow)\/([\w\.]+)/i,
                            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                            /(icab)[\/ ]([23]\.[\d\.]+)/i,
                            /\b(libweb)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /rv\:([\w\.]{1,9})\b.+(gecko)/i
                        ],
                        [
                            f,
                            u
                        ]
                    ],
                    os: [
                        [
                            /microsoft (windows) (vista|xp)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(windows) nt 6\.2; (arm)/i,
                            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
                        ],
                        [
                            u,
                            [
                                f,
                                strMapper,
                                X
                            ]
                        ],
                        [
                            /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
                        ],
                        [
                            [
                                u,
                                "Windows"
                            ],
                            [
                                f,
                                strMapper,
                                X
                            ]
                        ],
                        [
                            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                            /ios;fbsv\/([\d\.]+)/i,
                            /cfnetwork\/.+darwin/i
                        ],
                        [
                            [
                                f,
                                /_/g,
                                "."
                            ],
                            [
                                u,
                                "iOS"
                            ]
                        ],
                        [
                            /(mac os x) ?([\w\. ]*)/i,
                            /(macintosh|mac_powerpc\b)(?!.+haiku)/i
                        ],
                        [
                            [
                                u,
                                Z
                            ],
                            [
                                f,
                                /_/g,
                                "."
                            ]
                        ],
                        [
                            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
                        ],
                        [
                            f,
                            u
                        ],
                        [
                            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                            /(blackberry)\w*\/([\w\.]*)/i,
                            /(tizen|kaios)[\/ ]([\w\.]+)/i,
                            /\((series40);/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /\(bb(10);/i
                        ],
                        [
                            f,
                            [
                                u,
                                N
                            ]
                        ],
                        [
                            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Symbian"
                            ]
                        ],
                        [
                            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                O + " OS"
                            ]
                        ],
                        [
                            /web0s;.+rt(tv)/i,
                            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "webOS"
                            ]
                        ],
                        [
                            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "watchOS"
                            ]
                        ],
                        [
                            /crkey\/([\d\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                C + "cast"
                            ]
                        ],
                        [
                            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
                        ],
                        [
                            [
                                u,
                                L
                            ],
                            f
                        ],
                        [
                            /panasonic;(viera)/i,
                            /(netrange)mmh/i,
                            /(nettv)\/(\d+\.[\w\.]+)/i,
                            /(nintendo|playstation) ([wids345portablevuch]+)/i,
                            /(xbox); +xbox ([^\);]+)/i,
                            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                            /(mint)[\/\(\) ]?(\w*)/i,
                            /(mageia|vectorlinux)[; ]/i,
                            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                            /(hurd|linux) ?([\w\.]*)/i,
                            /(gnu) ?([\w\.]*)/i,
                            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                            /(haiku) (\w+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(sunos) ?([\w\.\d]*)/i
                        ],
                        [
                            [
                                u,
                                "Solaris"
                            ],
                            f
                        ],
                        [
                            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                            /(unix) ?([\w\.]*)/i
                        ],
                        [
                            u,
                            f
                        ]
                    ]
                };
                var UAParser = function(i, e) {
                    if (typeof i === w) {
                        e = i;
                        i = a;
                    }
                    if (!(this instanceof UAParser)) {
                        return new UAParser(i, e).getResult();
                    }
                    var r = typeof o !== b && o.navigator ? o.navigator : a;
                    var n = i || (r && r.userAgent ? r.userAgent : t);
                    var v = r && r.userAgentData ? r.userAgentData : a;
                    var x = e ? extend(K, e) : K;
                    var _ = r && r.userAgent == n;
                    this.getBrowser = function() {
                        var i = {};
                        i[u] = a;
                        i[f] = a;
                        rgxMapper.call(i, n, x.browser);
                        i[d] = majorize(i[f]);
                        if (_ && r && r.brave && typeof r.brave.isBrave == s) {
                            i[u] = "Brave";
                        }
                        return i;
                    };
                    this.getCPU = function() {
                        var i = {};
                        i[h] = a;
                        rgxMapper.call(i, n, x.cpu);
                        return i;
                    };
                    this.getDevice = function() {
                        var i = {};
                        i[m] = a;
                        i[c] = a;
                        i[p] = a;
                        rgxMapper.call(i, n, x.device);
                        if (_ && !i[p] && v && v.mobile) {
                            i[p] = g;
                        }
                        if (_ && i[c] == "Macintosh" && r && typeof r.standalone !== b && r.maxTouchPoints && r.maxTouchPoints > 2) {
                            i[c] = "iPad";
                            i[p] = k;
                        }
                        return i;
                    };
                    this.getEngine = function() {
                        var i = {};
                        i[u] = a;
                        i[f] = a;
                        rgxMapper.call(i, n, x.engine);
                        return i;
                    };
                    this.getOS = function() {
                        var i = {};
                        i[u] = a;
                        i[f] = a;
                        rgxMapper.call(i, n, x.os);
                        if (_ && !i[u] && v && v.platform != "Unknown") {
                            i[u] = v.platform.replace(/chrome os/i, L).replace(/macos/i, Z);
                        }
                        return i;
                    };
                    this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        };
                    };
                    this.getUA = function() {
                        return n;
                    };
                    this.setUA = function(i) {
                        n = typeof i === l && i.length > q ? trim(i, q) : i;
                        return this;
                    };
                    this.setUA(n);
                    return this;
                };
                UAParser.VERSION = r;
                UAParser.BROWSER = enumerize([
                    u,
                    f,
                    d
                ]);
                UAParser.CPU = enumerize([
                    h
                ]);
                UAParser.DEVICE = enumerize([
                    c,
                    m,
                    p,
                    v,
                    g,
                    x,
                    k,
                    _,
                    y
                ]);
                UAParser.ENGINE = UAParser.OS = enumerize([
                    u,
                    f
                ]);
                if (typeof e !== b) {
                    if ("object" !== b && i.exports) {
                        e = i.exports = UAParser;
                    }
                    e.UAParser = UAParser;
                } else {
                    if (typeof define === s && define.amd) {
                        ((r)=>r !== undefined && __turbopack_export_value__(r))(function() {
                            return UAParser;
                        }(__turbopack_require__, exports, module));
                    } else if (typeof o !== b) {
                        o.UAParser = UAParser;
                    }
                }
                var Q = typeof o !== b && (o.jQuery || o.Zepto);
                if (Q && !Q.ua) {
                    var Y = new UAParser;
                    Q.ua = Y.getResult();
                    Q.ua.get = function() {
                        return Y.getUA();
                    };
                    Q.ua.set = function(i) {
                        Y.setUA(i);
                        var e = Y.getResult();
                        for(var o in e){
                            Q.ua[o] = e[o];
                        }
                    };
                }
            })(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : this);
        }
    };
    var e = {};
    function __nccwpck_require__(o) {
        var a = e[o];
        if (a !== undefined) {
            return a.exports;
        }
        var r = e[o] = {
            exports: {}
        };
        var t = true;
        try {
            i[o].call(r.exports, r, r.exports, __nccwpck_require__);
            t = false;
        } finally{
            if (t) delete e[o];
        }
        return r.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var o = __nccwpck_require__(226);
    module.exports = o;
})();
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/user-agent.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "isBot": (()=>isBot),
    "userAgent": (()=>userAgent),
    "userAgentFromString": (()=>userAgentFromString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$ua$2d$parser$2d$js$2f$ua$2d$parser$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/ua-parser-js/ua-parser.js [middleware] (ecmascript)");
;
function isBot(input) {
    return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(input);
}
function userAgentFromString(input) {
    return {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$ua$2d$parser$2d$js$2f$ua$2d$parser$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(input),
        isBot: input === undefined ? false : isBot(input)
    };
}
function userAgent({ headers }) {
    return userAgentFromString(headers.get('user-agent') || undefined);
} //# sourceMappingURL=user-agent.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/url-pattern.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "URLPattern": (()=>GlobalURLPattern)
});
const GlobalURLPattern = typeof URLPattern === 'undefined' ? undefined : URLPattern;
;
 //# sourceMappingURL=url-pattern.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/after/after.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "unstable_after": (()=>unstable_after)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript)");
;
function unstable_after(task) {
    const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workAsyncStorage"].getStore();
    if (!workStore) {
        // TODO(after): the linked docs page talks about *dynamic* APIs, which unstable_after soon won't be anymore
        throw new Error('`unstable_after` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context');
    }
    const { afterContext } = workStore;
    if (!afterContext) {
        throw new Error('`unstable_after` must be explicitly enabled by setting `experimental.after: true` in your next.config.js.');
    }
    return afterContext.after(task);
} //# sourceMappingURL=after.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/after/index.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/after/index.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$after$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/after/after.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/after/index.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/react-experimental/cjs/react.react-server.development.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
/**
 * @license React
 * react.react-server.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE$1 ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.ref;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, _ref, self, source, owner, props, debugStack, debugTask) {
        _ref = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== _ref ? _ref : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(oldElement.type, newKey, null, void 0, void 0, oldElement._owner, oldElement.props, oldElement._debugStack, oldElement._debugTask);
        newKey._store.validated = oldElement._store.validated;
        return newKey;
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
        var escaperLookup = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + key.replace(/[=:]/g, function(match) {
            return escaperLookup[match];
        });
    }
    function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
    }
    function noop$1() {}
    function resolveThenable(thenable) {
        switch(thenable.status){
            case "fulfilled":
                return thenable.value;
            case "rejected":
                throw thenable.reason;
            default:
                switch("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
                    "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                }, function(error) {
                    "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                })), thenable.status){
                    case "fulfilled":
                        return thenable.value;
                    case "rejected":
                        throw thenable.reason;
                }
        }
        throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = !1;
        if (null === children) invokeCallback = !0;
        else switch(type){
            case "bigint":
            case "string":
            case "number":
                invokeCallback = !0;
                break;
            case "object":
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = !0;
                        break;
                    case REACT_LAZY_TYPE:
                        return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
                }
        }
        if (invokeCallback) {
            invokeCallback = children;
            callback = callback(invokeCallback);
            var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
            isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
                return c;
            })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
            return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children)) for(var i = 0; i < children.length; i++)nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if (i = getIteratorFn(children), "function" === typeof i) for(i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0), children = i.call(children), i = 0; !(nameSoFar = children.next()).done;)nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if ("object" === type) {
            if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
            array = String(children);
            throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
        }
        return invokeCallback;
    }
    function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher;
    }
    function lazyInitializer(payload) {
        if (-1 === payload._status) {
            var ctor = payload._result;
            ctor = ctor();
            ctor.then(function(moduleObject) {
                if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
            }, function(error) {
                if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
            });
            -1 === payload._status && (payload._status = 0, payload._result = ctor);
        }
        if (1 === payload._status) return ctor = payload._result, void 0 === ctor && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", ctor), "default" in ctor || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", ctor), ctor.default;
        throw payload._result;
    }
    function createCacheRoot() {
        return new WeakMap();
    }
    function createCacheNode() {
        return {
            s: 0,
            v: void 0,
            o: null,
            p: null
        };
    }
    function noop() {}
    function cleanup(entryValue) {
        var entry = TaintRegistryValues.get(entryValue);
        void 0 !== entry && (TaintRegistryPendingRequests.forEach(function(requestQueue) {
            requestQueue.push(entryValue);
            entry.count++;
        }), 1 === entry.count ? TaintRegistryValues.delete(entryValue) : entry.count--);
    }
    var TaintRegistryObjects$1 = new WeakMap(), TaintRegistryValues$1 = new Map(), TaintRegistryByteLengths$1 = new Set(), TaintRegistryPendingRequests$1 = new Set(), ReactSharedInternals = {
        H: null,
        A: null
    };
    ReactSharedInternals.TaintRegistryObjects = TaintRegistryObjects$1;
    ReactSharedInternals.TaintRegistryValues = TaintRegistryValues$1;
    ReactSharedInternals.TaintRegistryByteLengths = TaintRegistryByteLengths$1;
    ReactSharedInternals.TaintRegistryPendingRequests = TaintRegistryPendingRequests$1;
    ReactSharedInternals.getCurrentStack = null;
    var isArrayImpl = Array.isArray, REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy");
    TaintRegistryObjects$1 = Symbol.for("react.debug_trace_mode");
    var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), REACT_POSTPONE_TYPE = Symbol.for("react.postpone"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
    new ("function" === typeof WeakMap ? WeakMap : Map)();
    var createTask = console.createTask ? console.createTask : function() {
        return null;
    }, specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var didWarnAboutMaps = !1, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
            var event;
        } else if ("object" === typeof process && "function" === typeof ("TURBOPACK compile-time value", false)) {
            ("TURBOPACK compile-time value", false)("uncaughtException", error);
            return;
        }
        console.error(error);
    };
    TaintRegistryValues$1 = Object.getPrototypeOf;
    var TaintRegistryObjects = ReactSharedInternals.TaintRegistryObjects, TaintRegistryValues = ReactSharedInternals.TaintRegistryValues, TaintRegistryByteLengths = ReactSharedInternals.TaintRegistryByteLengths, TaintRegistryPendingRequests = ReactSharedInternals.TaintRegistryPendingRequests, TypedArrayConstructor = TaintRegistryValues$1(Uint32Array.prototype).constructor, finalizationRegistry = "function" === typeof FinalizationRegistry ? new FinalizationRegistry(cleanup) : null;
    exports.Children = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
                forEachFunc.apply(this, arguments);
            }, forEachContext);
        },
        count: function(children) {
            var n = 0;
            mapChildren(children, function() {
                n++;
            });
            return n;
        },
        toArray: function(children) {
            return mapChildren(children, function(child) {
                return child;
            }) || [];
        },
        only: function(children) {
            if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
            return children;
        }
    };
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.cache = function(fn) {
        return function() {
            var dispatcher = ReactSharedInternals.A;
            if (!dispatcher) return fn.apply(null, arguments);
            var fnMap = dispatcher.getCacheForType(createCacheRoot);
            dispatcher = fnMap.get(fn);
            void 0 === dispatcher && (dispatcher = createCacheNode(), fnMap.set(fn, dispatcher));
            fnMap = 0;
            for(var l = arguments.length; fnMap < l; fnMap++){
                var arg = arguments[fnMap];
                if ("function" === typeof arg || "object" === typeof arg && null !== arg) {
                    var objectCache = dispatcher.o;
                    null === objectCache && (dispatcher.o = objectCache = new WeakMap());
                    dispatcher = objectCache.get(arg);
                    void 0 === dispatcher && (dispatcher = createCacheNode(), objectCache.set(arg, dispatcher));
                } else objectCache = dispatcher.p, null === objectCache && (dispatcher.p = objectCache = new Map()), dispatcher = objectCache.get(arg), void 0 === dispatcher && (dispatcher = createCacheNode(), objectCache.set(arg, dispatcher));
            }
            if (1 === dispatcher.s) return dispatcher.v;
            if (2 === dispatcher.s) throw dispatcher.v;
            try {
                var result = fn.apply(null, arguments);
                fnMap = dispatcher;
                fnMap.s = 1;
                return fnMap.v = result;
            } catch (error) {
                throw result = dispatcher, result.s = 2, result.v = error, error;
            }
        };
    };
    exports.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
    };
    exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) for(propName in hasValidRef(config) && (owner = getOwner()), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)!hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
            for(var childArray = Array(propName), i = 0; i < propName; i++)childArray[i] = arguments[i + 2];
            props.children = childArray;
        }
        props = ReactElement(element.type, key, null, void 0, void 0, owner, props, element._debugStack, element._debugTask);
        for(key = 2; key < arguments.length; key++)owner = arguments[key], isValidElement(owner) && owner._store && (owner._store.validated = 1);
        return props;
    };
    exports.createElement = function(type, config, children) {
        for(var i = 2; i < arguments.length; i++){
            var node = arguments[i];
            isValidElement(node) && node._store && (node._store.validated = 1);
        }
        i = {};
        node = null;
        if (null != config) for(propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidRef(config), hasValidKey(config) && (checkKeyStringCoercion(config.key), node = "" + config.key), config)hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
            for(var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)childArray[_i] = arguments[_i + 2];
            Object.freeze && Object.freeze(childArray);
            i.children = childArray;
        }
        if (type && type.defaultProps) for(propName in childrenLength = type.defaultProps, childrenLength)void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        if (node) {
            var propName = "function" === typeof type ? type.displayName || type.name || "Unknown" : type;
            node && defineKeyPropWarningGetter(i, propName);
        }
        return ReactElement(type, node, null, void 0, void 0, getOwner(), i, Error("react-stack-top-frame"), createTask(getTaskName(type)));
    };
    exports.createRef = function() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    };
    exports.experimental_taintObjectReference = function(message, object) {
        if ("string" === typeof object || "bigint" === typeof object) throw Error("Only objects or functions can be passed to taintObjectReference. Try taintUniqueValue instead.");
        if (null === object || "object" !== typeof object && "function" !== typeof object) throw Error("Only objects or functions can be passed to taintObjectReference.");
        TaintRegistryObjects.set(object, "" + (message || "A tainted value was attempted to be serialized to a Client Component or Action closure. This would leak it to the client."));
    };
    exports.experimental_taintUniqueValue = function(message, lifetime, value) {
        message = "" + (message || "A tainted value was attempted to be serialized to a Client Component or Action closure. This would leak it to the client.");
        if (null === lifetime || "object" !== typeof lifetime && "function" !== typeof lifetime) throw Error("To taint a value, a lifetime must be defined by passing an object that holds the value.");
        if ("string" !== typeof value && "bigint" !== typeof value) if (value instanceof TypedArrayConstructor || value instanceof DataView) TaintRegistryByteLengths.add(value.byteLength), value = String.fromCharCode.apply(String, new Uint8Array(value.buffer, value.byteOffset, value.byteLength));
        else {
            message = null === value ? "null" : typeof value;
            if ("object" === message || "function" === message) throw Error("taintUniqueValue cannot taint objects or functions. Try taintObjectReference instead.");
            throw Error("Cannot taint a " + message + " because the value is too general and not unique enough to block globally.");
        }
        var existingEntry = TaintRegistryValues.get(value);
        void 0 === existingEntry ? TaintRegistryValues.set(value, {
            message: message,
            count: 1
        }) : existingEntry.count++;
        null !== finalizationRegistry && finalizationRegistry.register(lifetime, value);
    };
    exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" !== typeof render ? console.error("forwardRef requires a render function but was given %s.", null === render ? "null" : typeof render) : 0 !== render.length && 2 !== render.length && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
        null != render && null != render.defaultProps && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        }, ownName;
        Object.defineProperty(elementType, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                render.name || render.displayName || (Object.defineProperty(render, "name", {
                    value: name
                }), render.displayName = name);
            }
        });
        return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
        return {
            $$typeof: REACT_LAZY_TYPE,
            _payload: {
                _status: -1,
                _result: ctor
            },
            _init: lazyInitializer
        };
    };
    exports.memo = function(type, compare) {
        "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) || console.error("memo: The first argument must be a component. Instead received: %s", null === type ? "null" : typeof type);
        compare = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                type.name || type.displayName || (Object.defineProperty(type, "name", {
                    value: name
                }), type.displayName = name);
            }
        });
        return compare;
    };
    exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        ReactSharedInternals.T = currentTransition;
        currentTransition._updatedFibers = new Set();
        try {
            var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
            null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
            "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
        } catch (error) {
            reportGlobalError(error);
        } finally{
            null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), ReactSharedInternals.T = prevTransition;
        }
    };
    exports.unstable_DebugTracingMode = TaintRegistryObjects$1;
    exports.unstable_SuspenseList = REACT_SUSPENSE_TYPE;
    exports.unstable_getCacheForType = function(resourceType) {
        var dispatcher = ReactSharedInternals.A;
        return dispatcher ? dispatcher.getCacheForType(resourceType) : resourceType();
    };
    exports.unstable_postpone = function(reason) {
        reason = Error(reason);
        reason.$$typeof = REACT_POSTPONE_TYPE;
        throw reason;
    };
    exports.use = function(usable) {
        return resolveDispatcher().use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useId = function() {
        return resolveDispatcher().useId();
    };
    exports.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
    };
    exports.version = "19.0.0-experimental-603e6108-20241029";
}();
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/react-experimental/react.react-server.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/react-experimental/cjs/react.react-server.development.js [middleware] (ecmascript)");
}
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/client/components/hooks-server-context.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DynamicServerError": (()=>DynamicServerError),
    "isDynamicServerError": (()=>isDynamicServerError)
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super("Dynamic server usage: " + description);
        this.description = description;
        this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
} //# sourceMappingURL=hooks-server-context.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/client/components/static-generation-bailout.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "StaticGenBailoutError": (()=>StaticGenBailoutError),
    "isStaticGenBailoutError": (()=>isStaticGenBailoutError)
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args);
        this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
} //# sourceMappingURL=static-generation-bailout.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * This function constructs a promise that will never resolve. This is primarily
 * useful for dynamicIO where we use promise resolution timing to determine which
 * parts of a render can be included in a prerender.
 *
 * @internal
 */ __turbopack_esm__({
    "makeHangingPromise": (()=>makeHangingPromise)
});
function makeHangingPromise(signal, expression) {
    const hangingPromise = new Promise((_, reject)=>{
        signal.addEventListener('abort', ()=>{
            reject(new Error(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`unstable_after\`, or similar functions you may observe this error and you should handle it in that context.`));
        }, {
            once: true
        });
    });
    // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
    // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
    // your own promise out of it you'll need to ensure you handle the error when it rejects.
    hangingPromise.catch(ignoreReject);
    return hangingPromise;
}
function ignoreReject() {} //# sourceMappingURL=dynamic-rendering-utils.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/lib/metadata/metadata-constants.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "METADATA_BOUNDARY_NAME": (()=>METADATA_BOUNDARY_NAME),
    "OUTLET_BOUNDARY_NAME": (()=>OUTLET_BOUNDARY_NAME),
    "VIEWPORT_BOUNDARY_NAME": (()=>VIEWPORT_BOUNDARY_NAME)
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__'; //# sourceMappingURL=metadata-constants.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ // Once postpone is in stable we should switch to importing the postpone export directly
__turbopack_esm__({
    "Postpone": (()=>Postpone),
    "abortAndThrowOnSynchronousRequestDataAccess": (()=>abortAndThrowOnSynchronousRequestDataAccess),
    "abortOnSynchronousPlatformIOAccess": (()=>abortOnSynchronousPlatformIOAccess),
    "accessedDynamicData": (()=>accessedDynamicData),
    "annotateDynamicAccess": (()=>annotateDynamicAccess),
    "consumeDynamicAccess": (()=>consumeDynamicAccess),
    "createDynamicTrackingState": (()=>createDynamicTrackingState),
    "createDynamicValidationState": (()=>createDynamicValidationState),
    "createPostponedAbortSignal": (()=>createPostponedAbortSignal),
    "formatDynamicAPIAccesses": (()=>formatDynamicAPIAccesses),
    "getFirstDynamicReason": (()=>getFirstDynamicReason),
    "isDynamicPostpone": (()=>isDynamicPostpone),
    "isPrerenderInterruptedError": (()=>isPrerenderInterruptedError),
    "markCurrentScopeAsDynamic": (()=>markCurrentScopeAsDynamic),
    "postponeWithTracking": (()=>postponeWithTracking),
    "throwIfDisallowedDynamic": (()=>throwIfDisallowedDynamic),
    "throwToInterruptStaticGeneration": (()=>throwToInterruptStaticGeneration),
    "trackAllowedDynamicAccess": (()=>trackAllowedDynamicAccess),
    "trackDynamicDataInDynamicRender": (()=>trackDynamicDataInDynamicRender),
    "trackFallbackParamAccessed": (()=>trackFallbackParamAccessed),
    "trackSynchronousPlatformIOAccessInDev": (()=>trackSynchronousPlatformIOAccessInDev),
    "trackSynchronousRequestDataAccessInDev": (()=>trackSynchronousRequestDataAccessInDev),
    "useDynamicRouteParams": (()=>useDynamicRouteParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$react$2e$react$2d$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/react-experimental/react.react-server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/client/components/hooks-server-context.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/client/components/static-generation-bailout.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/lib/metadata/metadata-constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript)");
;
;
;
;
;
;
;
const hasPostpone = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$react$2e$react$2d$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicExpression: undefined,
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspendedDynamic: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasSyncDynamicErrors: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
            // forbidden inside a cache scope.
            return;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
    }
    if (workUnitStore) {
        if (workUnitStore.type === 'prerender-ppr') {
            postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
        } else if (workUnitStore.type === 'prerender-legacy') {
            workUnitStore.revalidate = 0;
            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
            const err = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DynamicServerError"](`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
        } else if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore && workUnitStore.type === 'request') {
            workUnitStore.usedDynamic = true;
        }
    }
}
function trackFallbackParamAccessed(store, expression) {
    const prerenderStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workUnitAsyncStorage"].getStore();
    if (!prerenderStore || prerenderStore.type !== 'prerender-ppr') return;
    postponeWithTracking(store.route, expression, prerenderStore.dynamicTracking);
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DynamicServerError"](`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(_store, workUnitStore) {
    if (workUnitStore) {
        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
            // forbidden inside a cache scope.
            return;
        }
        if (workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-legacy') {
            workUnitStore.revalidate = 0;
        }
        if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore.type === 'request') {
            workUnitStore.usedDynamic = true;
        }
    }
}
// Despite it's name we don't actually abort unless we have a controller to call abort on
// There are times when we let a prerender run long to discover caches where we want the semantics
// of tracking dynamic access without terminating the prerender early
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicExpression = expression;
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
    return abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
}
function trackSynchronousPlatformIOAccessInDev(requestStore) {
    // We don't actually have a controller to abort but we do the semantic equivalent by
    // advancing the request store out of prerender mode
    requestStore.prerenderPhase = false;
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicExpression = expression;
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            if (prerenderStore.validating === true) {
                // We always log Request Access in dev at the point of calling the function
                // So we mark the dynamic validation as not requiring it to be printed
                dynamicTracking.syncDynamicLogged = true;
            }
        }
    }
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
const trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
function Postpone({ reason, route }) {
    const prerenderStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workUnitAsyncStorage"].getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$react$2e$react$2d$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js');
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = new Error(message);
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`);
    }
}
function createPostponedAbortSignal(reason) {
    assertPostpone();
    const controller = new AbortController();
    // We get our hands on a postpone instance by calling postpone and catching the throw
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$react$2e$react$2d$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].unstable_postpone(reason);
    } catch (x) {
        controller.abort(x);
    }
    return controller.signal;
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    if ("TURBOPACK compile-time truthy", 1) {
        const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workAsyncStorage"].getStore();
        if (workStore && workStore.isStaticGeneration && workStore.fallbackRouteParams && workStore.fallbackRouteParams.size > 0) {
            // There are fallback route params, we should track these as dynamic
            // accesses.
            const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workUnitAsyncStorage"].getStore();
            if (workUnitStore) {
                // We're prerendering with dynamicIO or PPR or both
                if (workUnitStore.type === 'prerender') {
                    // We are in a prerender with dynamicIO semantics
                    // We are going to hang here and never resolve. This will cause the currently
                    // rendering component to effectively be a dynamic hole
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$react$2e$react$2d$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, expression));
                } else if (workUnitStore.type === 'prerender-ppr') {
                    // We're prerendering with PPR
                    postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                } else if (workUnitStore.type === 'prerender-legacy') {
                    throwToInterruptStaticGeneration(expression, workStore, workUnitStore);
                }
            }
        }
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
const hasMetadataRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["METADATA_BOUNDARY_NAME"]}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["VIEWPORT_BOUNDARY_NAME"]}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["OUTLET_BOUNDARY_NAME"]}[\\n\\s]`);
function trackAllowedDynamicAccess(route, componentStack, dynamicValidation, serverDynamic, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        dynamicValidation.hasSuspendedDynamic = true;
        return;
    } else if (serverDynamic.syncDynamicErrorWithStack || clientDynamic.syncDynamicErrorWithStack) {
        dynamicValidation.hasSyncDynamicErrors = true;
        return;
    } else {
        const message = `Route "${route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
        const error = createErrorWithComponentStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
function createErrorWithComponentStack(message, componentStack) {
    const error = new Error(message);
    error.stack = 'Error: ' + message + componentStack;
    return error;
}
function throwIfDisallowedDynamic(route, dynamicValidation, serverDynamic, clientDynamic) {
    let syncError;
    let syncExpression;
    let syncLogged;
    if (serverDynamic.syncDynamicErrorWithStack) {
        syncError = serverDynamic.syncDynamicErrorWithStack;
        syncExpression = serverDynamic.syncDynamicExpression;
        syncLogged = serverDynamic.syncDynamicLogged === true;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        syncError = clientDynamic.syncDynamicErrorWithStack;
        syncExpression = clientDynamic.syncDynamicExpression;
        syncLogged = clientDynamic.syncDynamicLogged === true;
    } else {
        syncError = null;
        syncExpression = undefined;
        syncLogged = false;
    }
    if (dynamicValidation.hasSyncDynamicErrors && syncError) {
        if (!syncLogged) {
            // In dev we already log errors about sync dynamic access. But during builds we need to ensure
            // the offending sync error is logged before we exit the build
            console.error(syncError);
        }
        // The actual error should have been logged when the sync access ocurred
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"]();
    }
    const dynamicErrors = dynamicValidation.dynamicErrors;
    if (dynamicErrors.length) {
        for(let i = 0; i < dynamicErrors.length; i++){
            console.error(dynamicErrors[i]);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"]();
    }
    if (!dynamicValidation.hasSuspendedDynamic) {
        if (dynamicValidation.hasDynamicMetadata) {
            if (syncError) {
                console.error(syncError);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route "${route}" has a \`generateMetadata\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`);
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route "${route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`);
        } else if (dynamicValidation.hasDynamicViewport) {
            if (syncError) {
                console.error(syncError);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route "${route}" has a \`generateViewport\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`);
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route "${route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`);
        }
    }
} //# sourceMappingURL=dynamic-rendering.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/request/connection.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "connection": (()=>connection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/client/components/static-generation-bailout.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [middleware] (ecmascript)");
;
;
;
;
;
function connection() {
    const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workAsyncStorage"].getStore();
    const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workUnitAsyncStorage"].getStore();
    if (workStore) {
        if (workStore.forceStatic) {
            // When using forceStatic we override all other logic and always just return an empty
            // headers object without tracking
            return Promise.resolve(undefined);
        }
        if (workUnitStore) {
            if (workUnitStore.type === 'cache') {
                throw new Error(`Route ${workStore.route} used "connection" inside "use cache". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`);
            } else if (workUnitStore.type === 'unstable-cache') {
                throw new Error(`Route ${workStore.route} used "connection" inside a function cached with "unstable_cache(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
            } else if (workUnitStore.phase === 'after') {
                throw new Error(`Route ${workStore.route} used "connection" inside "unstable_after(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but "unstable_after(...)" executes after the request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/unstable_after`);
            }
        }
        if (workStore.dynamicShouldError) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`connection\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
        }
        if (workUnitStore) {
            if (workUnitStore.type === 'prerender') {
                // dynamicIO Prerender
                // We return a promise that never resolves to allow the prender to stall at this point
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, '`connection()`');
            } else if (workUnitStore.type === 'prerender-ppr') {
                // PPR Prerender (no dynamicIO)
                // We use React's postpone API to interrupt rendering here to create a dynamic hole
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["postponeWithTracking"])(workStore.route, 'connection', workUnitStore.dynamicTracking);
            } else if (workUnitStore.type === 'prerender-legacy') {
                // Legacy Prerender
                // We throw an error here to interrupt prerendering to mark the route as dynamic
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["throwToInterruptStaticGeneration"])('connection', workStore, workUnitStore);
            }
        }
        // We fall through to the dynamic context below but we still track dynamic access
        // because in dev we can still error for things like using headers inside a cache context
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["trackDynamicDataInDynamicRender"])(workStore, workUnitStore);
    }
    return Promise.resolve(undefined);
} //# sourceMappingURL=connection.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/exports/index.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// Alias index file of next/server for edge runtime for tree-shaking purpose
__turbopack_esm__({});
;
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/exports/index.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$image$2d$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/image-response.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/request.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$user$2d$agent$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/user-agent.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$url$2d$pattern$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/url-pattern.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/after/index.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$connection$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/request/connection.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/exports/index.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
 //# sourceMappingURL=server.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/exports/index.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/bcryptjs@2.4.3/node_modules/bcryptjs/dist [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
__turbopack_export_namespace__(__import_unsupported(`crypto`));
}}),
"[project]/node_modules/.pnpm/bcryptjs@2.4.3/node_modules/bcryptjs/dist/bcrypt.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
/*
 Copyright (c) 2012 Nevins Bartolomeo <nevins.bartolomeo@gmail.com>
 Copyright (c) 2012 Shane Girish <shaneGirish@gmail.com>
 Copyright (c) 2014 Daniel Wirtz <dcode@dcode.io>

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.
 3. The name of the author may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /**
 * @license bcrypt.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/bcrypt.js for details
 */ (function(global, factory) {
    /* AMD */ if (typeof define === 'function' && define["amd"]) ((r)=>r !== undefined && __turbopack_export_value__(r))(factory());
    else if (("TURBOPACK compile-time value", "function") === 'function' && ("TURBOPACK compile-time value", "object") === "object" && module && module["exports"]) module["exports"] = factory();
    else (global["dcodeIO"] = global["dcodeIO"] || {})["bcrypt"] = factory();
})(this, function() {
    "use strict";
    /**
     * bcrypt namespace.
     * @type {Object.<string,*>}
     */ var bcrypt = {};
    /**
     * The random implementation to use as a fallback.
     * @type {?function(number):!Array.<number>}
     * @inner
     */ var randomFallback = null;
    /**
     * Generates cryptographically secure random bytes.
     * @function
     * @param {number} len Bytes length
     * @returns {!Array.<number>} Random bytes
     * @throws {Error} If no random implementation is available
     * @inner
     */ function random(len) {
        /* node */ if (("TURBOPACK compile-time value", "object") !== 'undefined' && module && module['exports']) try {
            return __turbopack_require__("[project]/node_modules/.pnpm/bcryptjs@2.4.3/node_modules/bcryptjs/dist [middleware] (ecmascript)")['randomBytes'](len);
        } catch (e) {}
        /* WCA */ try {
            var a;
            (self['crypto'] || self['msCrypto'])['getRandomValues'](a = new Uint32Array(len));
            return Array.prototype.slice.call(a);
        } catch (e) {}
        /* fallback */ if (!randomFallback) throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");
        return randomFallback(len);
    }
    // Test if any secure randomness source is available
    var randomAvailable = false;
    try {
        random(1);
        randomAvailable = true;
    } catch (e) {}
    // Default fallback, if any
    randomFallback = null;
    /**
     * Sets the pseudo random number generator to use as a fallback if neither node's `crypto` module nor the Web Crypto
     *  API is available. Please note: It is highly important that the PRNG used is cryptographically secure and that it
     *  is seeded properly!
     * @param {?function(number):!Array.<number>} random Function taking the number of bytes to generate as its
     *  sole argument, returning the corresponding array of cryptographically secure random byte values.
     * @see http://nodejs.org/api/crypto.html
     * @see http://www.w3.org/TR/WebCryptoAPI/
     */ bcrypt.setRandomFallback = function(random) {
        randomFallback = random;
    };
    /**
     * Synchronously generates a salt.
     * @param {number=} rounds Number of rounds to use, defaults to 10 if omitted
     * @param {number=} seed_length Not supported.
     * @returns {string} Resulting salt
     * @throws {Error} If a random fallback is required but not set
     * @expose
     */ bcrypt.genSaltSync = function(rounds, seed_length) {
        rounds = rounds || GENSALT_DEFAULT_LOG2_ROUNDS;
        if (typeof rounds !== 'number') throw Error("Illegal arguments: " + typeof rounds + ", " + typeof seed_length);
        if (rounds < 4) rounds = 4;
        else if (rounds > 31) rounds = 31;
        var salt = [];
        salt.push("$2a$");
        if (rounds < 10) salt.push("0");
        salt.push(rounds.toString());
        salt.push('$');
        salt.push(base64_encode(random(BCRYPT_SALT_LEN), BCRYPT_SALT_LEN)); // May throw
        return salt.join('');
    };
    /**
     * Asynchronously generates a salt.
     * @param {(number|function(Error, string=))=} rounds Number of rounds to use, defaults to 10 if omitted
     * @param {(number|function(Error, string=))=} seed_length Not supported.
     * @param {function(Error, string=)=} callback Callback receiving the error, if any, and the resulting salt
     * @returns {!Promise} If `callback` has been omitted
     * @throws {Error} If `callback` is present but not a function
     * @expose
     */ bcrypt.genSalt = function(rounds, seed_length, callback) {
        if (typeof seed_length === 'function') callback = seed_length, seed_length = undefined; // Not supported.
        if (typeof rounds === 'function') callback = rounds, rounds = undefined;
        if (typeof rounds === 'undefined') rounds = GENSALT_DEFAULT_LOG2_ROUNDS;
        else if (typeof rounds !== 'number') throw Error("illegal arguments: " + typeof rounds);
        function _async(callback) {
            nextTick(function() {
                try {
                    callback(null, bcrypt.genSaltSync(rounds));
                } catch (err) {
                    callback(err);
                }
            });
        }
        if (callback) {
            if (typeof callback !== 'function') throw Error("Illegal callback: " + typeof callback);
            _async(callback);
        } else return new Promise(function(resolve, reject) {
            _async(function(err, res) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });
    };
    /**
     * Synchronously generates a hash for the given string.
     * @param {string} s String to hash
     * @param {(number|string)=} salt Salt length to generate or salt to use, default to 10
     * @returns {string} Resulting hash
     * @expose
     */ bcrypt.hashSync = function(s, salt) {
        if (typeof salt === 'undefined') salt = GENSALT_DEFAULT_LOG2_ROUNDS;
        if (typeof salt === 'number') salt = bcrypt.genSaltSync(salt);
        if (typeof s !== 'string' || typeof salt !== 'string') throw Error("Illegal arguments: " + typeof s + ', ' + typeof salt);
        return _hash(s, salt);
    };
    /**
     * Asynchronously generates a hash for the given string.
     * @param {string} s String to hash
     * @param {number|string} salt Salt length to generate or salt to use
     * @param {function(Error, string=)=} callback Callback receiving the error, if any, and the resulting hash
     * @param {function(number)=} progressCallback Callback successively called with the percentage of rounds completed
     *  (0.0 - 1.0), maximally once per `MAX_EXECUTION_TIME = 100` ms.
     * @returns {!Promise} If `callback` has been omitted
     * @throws {Error} If `callback` is present but not a function
     * @expose
     */ bcrypt.hash = function(s, salt, callback, progressCallback) {
        function _async(callback) {
            if (typeof s === 'string' && typeof salt === 'number') bcrypt.genSalt(salt, function(err, salt) {
                _hash(s, salt, callback, progressCallback);
            });
            else if (typeof s === 'string' && typeof salt === 'string') _hash(s, salt, callback, progressCallback);
            else nextTick(callback.bind(this, Error("Illegal arguments: " + typeof s + ', ' + typeof salt)));
        }
        if (callback) {
            if (typeof callback !== 'function') throw Error("Illegal callback: " + typeof callback);
            _async(callback);
        } else return new Promise(function(resolve, reject) {
            _async(function(err, res) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });
    };
    /**
     * Compares two strings of the same length in constant time.
     * @param {string} known Must be of the correct length
     * @param {string} unknown Must be the same length as `known`
     * @returns {boolean}
     * @inner
     */ function safeStringCompare(known, unknown) {
        var right = 0, wrong = 0;
        for(var i = 0, k = known.length; i < k; ++i){
            if (known.charCodeAt(i) === unknown.charCodeAt(i)) ++right;
            else ++wrong;
        }
        // Prevent removal of unused variables (never true, actually)
        if (right < 0) return false;
        return wrong === 0;
    }
    /**
     * Synchronously tests a string against a hash.
     * @param {string} s String to compare
     * @param {string} hash Hash to test against
     * @returns {boolean} true if matching, otherwise false
     * @throws {Error} If an argument is illegal
     * @expose
     */ bcrypt.compareSync = function(s, hash) {
        if (typeof s !== "string" || typeof hash !== "string") throw Error("Illegal arguments: " + typeof s + ', ' + typeof hash);
        if (hash.length !== 60) return false;
        return safeStringCompare(bcrypt.hashSync(s, hash.substr(0, hash.length - 31)), hash);
    };
    /**
     * Asynchronously compares the given data against the given hash.
     * @param {string} s Data to compare
     * @param {string} hash Data to be compared to
     * @param {function(Error, boolean)=} callback Callback receiving the error, if any, otherwise the result
     * @param {function(number)=} progressCallback Callback successively called with the percentage of rounds completed
     *  (0.0 - 1.0), maximally once per `MAX_EXECUTION_TIME = 100` ms.
     * @returns {!Promise} If `callback` has been omitted
     * @throws {Error} If `callback` is present but not a function
     * @expose
     */ bcrypt.compare = function(s, hash, callback, progressCallback) {
        function _async(callback) {
            if (typeof s !== "string" || typeof hash !== "string") {
                nextTick(callback.bind(this, Error("Illegal arguments: " + typeof s + ', ' + typeof hash)));
                return;
            }
            if (hash.length !== 60) {
                nextTick(callback.bind(this, null, false));
                return;
            }
            bcrypt.hash(s, hash.substr(0, 29), function(err, comp) {
                if (err) callback(err);
                else callback(null, safeStringCompare(comp, hash));
            }, progressCallback);
        }
        if (callback) {
            if (typeof callback !== 'function') throw Error("Illegal callback: " + typeof callback);
            _async(callback);
        } else return new Promise(function(resolve, reject) {
            _async(function(err, res) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });
    };
    /**
     * Gets the number of rounds used to encrypt the specified hash.
     * @param {string} hash Hash to extract the used number of rounds from
     * @returns {number} Number of rounds used
     * @throws {Error} If `hash` is not a string
     * @expose
     */ bcrypt.getRounds = function(hash) {
        if (typeof hash !== "string") throw Error("Illegal arguments: " + typeof hash);
        return parseInt(hash.split("$")[2], 10);
    };
    /**
     * Gets the salt portion from a hash. Does not validate the hash.
     * @param {string} hash Hash to extract the salt from
     * @returns {string} Extracted salt part
     * @throws {Error} If `hash` is not a string or otherwise invalid
     * @expose
     */ bcrypt.getSalt = function(hash) {
        if (typeof hash !== 'string') throw Error("Illegal arguments: " + typeof hash);
        if (hash.length !== 60) throw Error("Illegal hash length: " + hash.length + " != 60");
        return hash.substring(0, 29);
    };
    /**
     * Continues with the callback on the next tick.
     * @function
     * @param {function(...[*])} callback Callback to execute
     * @inner
     */ var nextTick = typeof process !== 'undefined' && process && typeof process.nextTick === 'function' ? typeof setImmediate === 'function' ? setImmediate : process.nextTick : setTimeout;
    /**
     * Converts a JavaScript string to UTF8 bytes.
     * @param {string} str String
     * @returns {!Array.<number>} UTF8 bytes
     * @inner
     */ function stringToBytes(str) {
        var out = [], i = 0;
        utfx.encodeUTF16toUTF8(function() {
            if (i >= str.length) return null;
            return str.charCodeAt(i++);
        }, function(b) {
            out.push(b);
        });
        return out;
    }
    // A base64 implementation for the bcrypt algorithm. This is partly non-standard.
    /**
     * bcrypt's own non-standard base64 dictionary.
     * @type {!Array.<string>}
     * @const
     * @inner
     **/ var BASE64_CODE = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split('');
    /**
     * @type {!Array.<number>}
     * @const
     * @inner
     **/ var BASE64_INDEX = [
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        0,
        1,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        -1,
        -1,
        -1,
        -1,
        -1
    ];
    /**
     * @type {!function(...number):string}
     * @inner
     */ var stringFromCharCode = String.fromCharCode;
    /**
     * Encodes a byte array to base64 with up to len bytes of input.
     * @param {!Array.<number>} b Byte array
     * @param {number} len Maximum input length
     * @returns {string}
     * @inner
     */ function base64_encode(b, len) {
        var off = 0, rs = [], c1, c2;
        if (len <= 0 || len > b.length) throw Error("Illegal len: " + len);
        while(off < len){
            c1 = b[off++] & 0xff;
            rs.push(BASE64_CODE[c1 >> 2 & 0x3f]);
            c1 = (c1 & 0x03) << 4;
            if (off >= len) {
                rs.push(BASE64_CODE[c1 & 0x3f]);
                break;
            }
            c2 = b[off++] & 0xff;
            c1 |= c2 >> 4 & 0x0f;
            rs.push(BASE64_CODE[c1 & 0x3f]);
            c1 = (c2 & 0x0f) << 2;
            if (off >= len) {
                rs.push(BASE64_CODE[c1 & 0x3f]);
                break;
            }
            c2 = b[off++] & 0xff;
            c1 |= c2 >> 6 & 0x03;
            rs.push(BASE64_CODE[c1 & 0x3f]);
            rs.push(BASE64_CODE[c2 & 0x3f]);
        }
        return rs.join('');
    }
    /**
     * Decodes a base64 encoded string to up to len bytes of output.
     * @param {string} s String to decode
     * @param {number} len Maximum output length
     * @returns {!Array.<number>}
     * @inner
     */ function base64_decode(s, len) {
        var off = 0, slen = s.length, olen = 0, rs = [], c1, c2, c3, c4, o, code;
        if (len <= 0) throw Error("Illegal len: " + len);
        while(off < slen - 1 && olen < len){
            code = s.charCodeAt(off++);
            c1 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
            code = s.charCodeAt(off++);
            c2 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
            if (c1 == -1 || c2 == -1) break;
            o = c1 << 2 >>> 0;
            o |= (c2 & 0x30) >> 4;
            rs.push(stringFromCharCode(o));
            if (++olen >= len || off >= slen) break;
            code = s.charCodeAt(off++);
            c3 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
            if (c3 == -1) break;
            o = (c2 & 0x0f) << 4 >>> 0;
            o |= (c3 & 0x3c) >> 2;
            rs.push(stringFromCharCode(o));
            if (++olen >= len || off >= slen) break;
            code = s.charCodeAt(off++);
            c4 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
            o = (c3 & 0x03) << 6 >>> 0;
            o |= c4;
            rs.push(stringFromCharCode(o));
            ++olen;
        }
        var res = [];
        for(off = 0; off < olen; off++)res.push(rs[off].charCodeAt(0));
        return res;
    }
    /**
     * utfx-embeddable (c) 2014 Daniel Wirtz <dcode@dcode.io>
     * Released under the Apache License, Version 2.0
     * see: https://github.com/dcodeIO/utfx for details
     */ var utfx = function() {
        "use strict";
        /**
         * utfx namespace.
         * @inner
         * @type {!Object.<string,*>}
         */ var utfx = {};
        /**
         * Maximum valid code point.
         * @type {number}
         * @const
         */ utfx.MAX_CODEPOINT = 0x10FFFF;
        /**
         * Encodes UTF8 code points to UTF8 bytes.
         * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
         *  respectively `null` if there are no more code points left or a single numeric code point.
         * @param {!function(number)} dst Bytes destination as a function successively called with the next byte
         */ utfx.encodeUTF8 = function(src, dst) {
            var cp = null;
            if (typeof src === 'number') cp = src, src = function() {
                return null;
            };
            while(cp !== null || (cp = src()) !== null){
                if (cp < 0x80) dst(cp & 0x7F);
                else if (cp < 0x800) dst(cp >> 6 & 0x1F | 0xC0), dst(cp & 0x3F | 0x80);
                else if (cp < 0x10000) dst(cp >> 12 & 0x0F | 0xE0), dst(cp >> 6 & 0x3F | 0x80), dst(cp & 0x3F | 0x80);
                else dst(cp >> 18 & 0x07 | 0xF0), dst(cp >> 12 & 0x3F | 0x80), dst(cp >> 6 & 0x3F | 0x80), dst(cp & 0x3F | 0x80);
                cp = null;
            }
        };
        /**
         * Decodes UTF8 bytes to UTF8 code points.
         * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
         *  are no more bytes left.
         * @param {!function(number)} dst Code points destination as a function successively called with each decoded code point.
         * @throws {RangeError} If a starting byte is invalid in UTF8
         * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the
         *  remaining bytes.
         */ utfx.decodeUTF8 = function(src, dst) {
            var a, b, c, d, fail = function(b) {
                b = b.slice(0, b.indexOf(null));
                var err = Error(b.toString());
                err.name = "TruncatedError";
                err['bytes'] = b;
                throw err;
            };
            while((a = src()) !== null){
                if ((a & 0x80) === 0) dst(a);
                else if ((a & 0xE0) === 0xC0) (b = src()) === null && fail([
                    a,
                    b
                ]), dst((a & 0x1F) << 6 | b & 0x3F);
                else if ((a & 0xF0) === 0xE0) ((b = src()) === null || (c = src()) === null) && fail([
                    a,
                    b,
                    c
                ]), dst((a & 0x0F) << 12 | (b & 0x3F) << 6 | c & 0x3F);
                else if ((a & 0xF8) === 0xF0) ((b = src()) === null || (c = src()) === null || (d = src()) === null) && fail([
                    a,
                    b,
                    c,
                    d
                ]), dst((a & 0x07) << 18 | (b & 0x3F) << 12 | (c & 0x3F) << 6 | d & 0x3F);
                else throw RangeError("Illegal starting byte: " + a);
            }
        };
        /**
         * Converts UTF16 characters to UTF8 code points.
         * @param {!function():number|null} src Characters source as a function returning the next char code respectively
         *  `null` if there are no more characters left.
         * @param {!function(number)} dst Code points destination as a function successively called with each converted code
         *  point.
         */ utfx.UTF16toUTF8 = function(src, dst) {
            var c1, c2 = null;
            while(true){
                if ((c1 = c2 !== null ? c2 : src()) === null) break;
                if (c1 >= 0xD800 && c1 <= 0xDFFF) {
                    if ((c2 = src()) !== null) {
                        if (c2 >= 0xDC00 && c2 <= 0xDFFF) {
                            dst((c1 - 0xD800) * 0x400 + c2 - 0xDC00 + 0x10000);
                            c2 = null;
                            continue;
                        }
                    }
                }
                dst(c1);
            }
            if (c2 !== null) dst(c2);
        };
        /**
         * Converts UTF8 code points to UTF16 characters.
         * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
         *  respectively `null` if there are no more code points left or a single numeric code point.
         * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
         * @throws {RangeError} If a code point is out of range
         */ utfx.UTF8toUTF16 = function(src, dst) {
            var cp = null;
            if (typeof src === 'number') cp = src, src = function() {
                return null;
            };
            while(cp !== null || (cp = src()) !== null){
                if (cp <= 0xFFFF) dst(cp);
                else cp -= 0x10000, dst((cp >> 10) + 0xD800), dst(cp % 0x400 + 0xDC00);
                cp = null;
            }
        };
        /**
         * Converts and encodes UTF16 characters to UTF8 bytes.
         * @param {!function():number|null} src Characters source as a function returning the next char code respectively `null`
         *  if there are no more characters left.
         * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
         */ utfx.encodeUTF16toUTF8 = function(src, dst) {
            utfx.UTF16toUTF8(src, function(cp) {
                utfx.encodeUTF8(cp, dst);
            });
        };
        /**
         * Decodes and converts UTF8 bytes to UTF16 characters.
         * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
         *  are no more bytes left.
         * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
         * @throws {RangeError} If a starting byte is invalid in UTF8
         * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the remaining bytes.
         */ utfx.decodeUTF8toUTF16 = function(src, dst) {
            utfx.decodeUTF8(src, function(cp) {
                utfx.UTF8toUTF16(cp, dst);
            });
        };
        /**
         * Calculates the byte length of an UTF8 code point.
         * @param {number} cp UTF8 code point
         * @returns {number} Byte length
         */ utfx.calculateCodePoint = function(cp) {
            return cp < 0x80 ? 1 : cp < 0x800 ? 2 : cp < 0x10000 ? 3 : 4;
        };
        /**
         * Calculates the number of UTF8 bytes required to store UTF8 code points.
         * @param {(!function():number|null)} src Code points source as a function returning the next code point respectively
         *  `null` if there are no more code points left.
         * @returns {number} The number of UTF8 bytes required
         */ utfx.calculateUTF8 = function(src) {
            var cp, l = 0;
            while((cp = src()) !== null)l += utfx.calculateCodePoint(cp);
            return l;
        };
        /**
         * Calculates the number of UTF8 code points respectively UTF8 bytes required to store UTF16 char codes.
         * @param {(!function():number|null)} src Characters source as a function returning the next char code respectively
         *  `null` if there are no more characters left.
         * @returns {!Array.<number>} The number of UTF8 code points at index 0 and the number of UTF8 bytes required at index 1.
         */ utfx.calculateUTF16asUTF8 = function(src) {
            var n = 0, l = 0;
            utfx.UTF16toUTF8(src, function(cp) {
                ++n;
                l += utfx.calculateCodePoint(cp);
            });
            return [
                n,
                l
            ];
        };
        return utfx;
    }();
    Date.now = Date.now || function() {
        return +new Date;
    };
    /**
     * @type {number}
     * @const
     * @inner
     */ var BCRYPT_SALT_LEN = 16;
    /**
     * @type {number}
     * @const
     * @inner
     */ var GENSALT_DEFAULT_LOG2_ROUNDS = 10;
    /**
     * @type {number}
     * @const
     * @inner
     */ var BLOWFISH_NUM_ROUNDS = 16;
    /**
     * @type {number}
     * @const
     * @inner
     */ var MAX_EXECUTION_TIME = 100;
    /**
     * @type {Array.<number>}
     * @const
     * @inner
     */ var P_ORIG = [
        0x243f6a88,
        0x85a308d3,
        0x13198a2e,
        0x03707344,
        0xa4093822,
        0x299f31d0,
        0x082efa98,
        0xec4e6c89,
        0x452821e6,
        0x38d01377,
        0xbe5466cf,
        0x34e90c6c,
        0xc0ac29b7,
        0xc97c50dd,
        0x3f84d5b5,
        0xb5470917,
        0x9216d5d9,
        0x8979fb1b
    ];
    /**
     * @type {Array.<number>}
     * @const
     * @inner
     */ var S_ORIG = [
        0xd1310ba6,
        0x98dfb5ac,
        0x2ffd72db,
        0xd01adfb7,
        0xb8e1afed,
        0x6a267e96,
        0xba7c9045,
        0xf12c7f99,
        0x24a19947,
        0xb3916cf7,
        0x0801f2e2,
        0x858efc16,
        0x636920d8,
        0x71574e69,
        0xa458fea3,
        0xf4933d7e,
        0x0d95748f,
        0x728eb658,
        0x718bcd58,
        0x82154aee,
        0x7b54a41d,
        0xc25a59b5,
        0x9c30d539,
        0x2af26013,
        0xc5d1b023,
        0x286085f0,
        0xca417918,
        0xb8db38ef,
        0x8e79dcb0,
        0x603a180e,
        0x6c9e0e8b,
        0xb01e8a3e,
        0xd71577c1,
        0xbd314b27,
        0x78af2fda,
        0x55605c60,
        0xe65525f3,
        0xaa55ab94,
        0x57489862,
        0x63e81440,
        0x55ca396a,
        0x2aab10b6,
        0xb4cc5c34,
        0x1141e8ce,
        0xa15486af,
        0x7c72e993,
        0xb3ee1411,
        0x636fbc2a,
        0x2ba9c55d,
        0x741831f6,
        0xce5c3e16,
        0x9b87931e,
        0xafd6ba33,
        0x6c24cf5c,
        0x7a325381,
        0x28958677,
        0x3b8f4898,
        0x6b4bb9af,
        0xc4bfe81b,
        0x66282193,
        0x61d809cc,
        0xfb21a991,
        0x487cac60,
        0x5dec8032,
        0xef845d5d,
        0xe98575b1,
        0xdc262302,
        0xeb651b88,
        0x23893e81,
        0xd396acc5,
        0x0f6d6ff3,
        0x83f44239,
        0x2e0b4482,
        0xa4842004,
        0x69c8f04a,
        0x9e1f9b5e,
        0x21c66842,
        0xf6e96c9a,
        0x670c9c61,
        0xabd388f0,
        0x6a51a0d2,
        0xd8542f68,
        0x960fa728,
        0xab5133a3,
        0x6eef0b6c,
        0x137a3be4,
        0xba3bf050,
        0x7efb2a98,
        0xa1f1651d,
        0x39af0176,
        0x66ca593e,
        0x82430e88,
        0x8cee8619,
        0x456f9fb4,
        0x7d84a5c3,
        0x3b8b5ebe,
        0xe06f75d8,
        0x85c12073,
        0x401a449f,
        0x56c16aa6,
        0x4ed3aa62,
        0x363f7706,
        0x1bfedf72,
        0x429b023d,
        0x37d0d724,
        0xd00a1248,
        0xdb0fead3,
        0x49f1c09b,
        0x075372c9,
        0x80991b7b,
        0x25d479d8,
        0xf6e8def7,
        0xe3fe501a,
        0xb6794c3b,
        0x976ce0bd,
        0x04c006ba,
        0xc1a94fb6,
        0x409f60c4,
        0x5e5c9ec2,
        0x196a2463,
        0x68fb6faf,
        0x3e6c53b5,
        0x1339b2eb,
        0x3b52ec6f,
        0x6dfc511f,
        0x9b30952c,
        0xcc814544,
        0xaf5ebd09,
        0xbee3d004,
        0xde334afd,
        0x660f2807,
        0x192e4bb3,
        0xc0cba857,
        0x45c8740f,
        0xd20b5f39,
        0xb9d3fbdb,
        0x5579c0bd,
        0x1a60320a,
        0xd6a100c6,
        0x402c7279,
        0x679f25fe,
        0xfb1fa3cc,
        0x8ea5e9f8,
        0xdb3222f8,
        0x3c7516df,
        0xfd616b15,
        0x2f501ec8,
        0xad0552ab,
        0x323db5fa,
        0xfd238760,
        0x53317b48,
        0x3e00df82,
        0x9e5c57bb,
        0xca6f8ca0,
        0x1a87562e,
        0xdf1769db,
        0xd542a8f6,
        0x287effc3,
        0xac6732c6,
        0x8c4f5573,
        0x695b27b0,
        0xbbca58c8,
        0xe1ffa35d,
        0xb8f011a0,
        0x10fa3d98,
        0xfd2183b8,
        0x4afcb56c,
        0x2dd1d35b,
        0x9a53e479,
        0xb6f84565,
        0xd28e49bc,
        0x4bfb9790,
        0xe1ddf2da,
        0xa4cb7e33,
        0x62fb1341,
        0xcee4c6e8,
        0xef20cada,
        0x36774c01,
        0xd07e9efe,
        0x2bf11fb4,
        0x95dbda4d,
        0xae909198,
        0xeaad8e71,
        0x6b93d5a0,
        0xd08ed1d0,
        0xafc725e0,
        0x8e3c5b2f,
        0x8e7594b7,
        0x8ff6e2fb,
        0xf2122b64,
        0x8888b812,
        0x900df01c,
        0x4fad5ea0,
        0x688fc31c,
        0xd1cff191,
        0xb3a8c1ad,
        0x2f2f2218,
        0xbe0e1777,
        0xea752dfe,
        0x8b021fa1,
        0xe5a0cc0f,
        0xb56f74e8,
        0x18acf3d6,
        0xce89e299,
        0xb4a84fe0,
        0xfd13e0b7,
        0x7cc43b81,
        0xd2ada8d9,
        0x165fa266,
        0x80957705,
        0x93cc7314,
        0x211a1477,
        0xe6ad2065,
        0x77b5fa86,
        0xc75442f5,
        0xfb9d35cf,
        0xebcdaf0c,
        0x7b3e89a0,
        0xd6411bd3,
        0xae1e7e49,
        0x00250e2d,
        0x2071b35e,
        0x226800bb,
        0x57b8e0af,
        0x2464369b,
        0xf009b91e,
        0x5563911d,
        0x59dfa6aa,
        0x78c14389,
        0xd95a537f,
        0x207d5ba2,
        0x02e5b9c5,
        0x83260376,
        0x6295cfa9,
        0x11c81968,
        0x4e734a41,
        0xb3472dca,
        0x7b14a94a,
        0x1b510052,
        0x9a532915,
        0xd60f573f,
        0xbc9bc6e4,
        0x2b60a476,
        0x81e67400,
        0x08ba6fb5,
        0x571be91f,
        0xf296ec6b,
        0x2a0dd915,
        0xb6636521,
        0xe7b9f9b6,
        0xff34052e,
        0xc5855664,
        0x53b02d5d,
        0xa99f8fa1,
        0x08ba4799,
        0x6e85076a,
        0x4b7a70e9,
        0xb5b32944,
        0xdb75092e,
        0xc4192623,
        0xad6ea6b0,
        0x49a7df7d,
        0x9cee60b8,
        0x8fedb266,
        0xecaa8c71,
        0x699a17ff,
        0x5664526c,
        0xc2b19ee1,
        0x193602a5,
        0x75094c29,
        0xa0591340,
        0xe4183a3e,
        0x3f54989a,
        0x5b429d65,
        0x6b8fe4d6,
        0x99f73fd6,
        0xa1d29c07,
        0xefe830f5,
        0x4d2d38e6,
        0xf0255dc1,
        0x4cdd2086,
        0x8470eb26,
        0x6382e9c6,
        0x021ecc5e,
        0x09686b3f,
        0x3ebaefc9,
        0x3c971814,
        0x6b6a70a1,
        0x687f3584,
        0x52a0e286,
        0xb79c5305,
        0xaa500737,
        0x3e07841c,
        0x7fdeae5c,
        0x8e7d44ec,
        0x5716f2b8,
        0xb03ada37,
        0xf0500c0d,
        0xf01c1f04,
        0x0200b3ff,
        0xae0cf51a,
        0x3cb574b2,
        0x25837a58,
        0xdc0921bd,
        0xd19113f9,
        0x7ca92ff6,
        0x94324773,
        0x22f54701,
        0x3ae5e581,
        0x37c2dadc,
        0xc8b57634,
        0x9af3dda7,
        0xa9446146,
        0x0fd0030e,
        0xecc8c73e,
        0xa4751e41,
        0xe238cd99,
        0x3bea0e2f,
        0x3280bba1,
        0x183eb331,
        0x4e548b38,
        0x4f6db908,
        0x6f420d03,
        0xf60a04bf,
        0x2cb81290,
        0x24977c79,
        0x5679b072,
        0xbcaf89af,
        0xde9a771f,
        0xd9930810,
        0xb38bae12,
        0xdccf3f2e,
        0x5512721f,
        0x2e6b7124,
        0x501adde6,
        0x9f84cd87,
        0x7a584718,
        0x7408da17,
        0xbc9f9abc,
        0xe94b7d8c,
        0xec7aec3a,
        0xdb851dfa,
        0x63094366,
        0xc464c3d2,
        0xef1c1847,
        0x3215d908,
        0xdd433b37,
        0x24c2ba16,
        0x12a14d43,
        0x2a65c451,
        0x50940002,
        0x133ae4dd,
        0x71dff89e,
        0x10314e55,
        0x81ac77d6,
        0x5f11199b,
        0x043556f1,
        0xd7a3c76b,
        0x3c11183b,
        0x5924a509,
        0xf28fe6ed,
        0x97f1fbfa,
        0x9ebabf2c,
        0x1e153c6e,
        0x86e34570,
        0xeae96fb1,
        0x860e5e0a,
        0x5a3e2ab3,
        0x771fe71c,
        0x4e3d06fa,
        0x2965dcb9,
        0x99e71d0f,
        0x803e89d6,
        0x5266c825,
        0x2e4cc978,
        0x9c10b36a,
        0xc6150eba,
        0x94e2ea78,
        0xa5fc3c53,
        0x1e0a2df4,
        0xf2f74ea7,
        0x361d2b3d,
        0x1939260f,
        0x19c27960,
        0x5223a708,
        0xf71312b6,
        0xebadfe6e,
        0xeac31f66,
        0xe3bc4595,
        0xa67bc883,
        0xb17f37d1,
        0x018cff28,
        0xc332ddef,
        0xbe6c5aa5,
        0x65582185,
        0x68ab9802,
        0xeecea50f,
        0xdb2f953b,
        0x2aef7dad,
        0x5b6e2f84,
        0x1521b628,
        0x29076170,
        0xecdd4775,
        0x619f1510,
        0x13cca830,
        0xeb61bd96,
        0x0334fe1e,
        0xaa0363cf,
        0xb5735c90,
        0x4c70a239,
        0xd59e9e0b,
        0xcbaade14,
        0xeecc86bc,
        0x60622ca7,
        0x9cab5cab,
        0xb2f3846e,
        0x648b1eaf,
        0x19bdf0ca,
        0xa02369b9,
        0x655abb50,
        0x40685a32,
        0x3c2ab4b3,
        0x319ee9d5,
        0xc021b8f7,
        0x9b540b19,
        0x875fa099,
        0x95f7997e,
        0x623d7da8,
        0xf837889a,
        0x97e32d77,
        0x11ed935f,
        0x16681281,
        0x0e358829,
        0xc7e61fd6,
        0x96dedfa1,
        0x7858ba99,
        0x57f584a5,
        0x1b227263,
        0x9b83c3ff,
        0x1ac24696,
        0xcdb30aeb,
        0x532e3054,
        0x8fd948e4,
        0x6dbc3128,
        0x58ebf2ef,
        0x34c6ffea,
        0xfe28ed61,
        0xee7c3c73,
        0x5d4a14d9,
        0xe864b7e3,
        0x42105d14,
        0x203e13e0,
        0x45eee2b6,
        0xa3aaabea,
        0xdb6c4f15,
        0xfacb4fd0,
        0xc742f442,
        0xef6abbb5,
        0x654f3b1d,
        0x41cd2105,
        0xd81e799e,
        0x86854dc7,
        0xe44b476a,
        0x3d816250,
        0xcf62a1f2,
        0x5b8d2646,
        0xfc8883a0,
        0xc1c7b6a3,
        0x7f1524c3,
        0x69cb7492,
        0x47848a0b,
        0x5692b285,
        0x095bbf00,
        0xad19489d,
        0x1462b174,
        0x23820e00,
        0x58428d2a,
        0x0c55f5ea,
        0x1dadf43e,
        0x233f7061,
        0x3372f092,
        0x8d937e41,
        0xd65fecf1,
        0x6c223bdb,
        0x7cde3759,
        0xcbee7460,
        0x4085f2a7,
        0xce77326e,
        0xa6078084,
        0x19f8509e,
        0xe8efd855,
        0x61d99735,
        0xa969a7aa,
        0xc50c06c2,
        0x5a04abfc,
        0x800bcadc,
        0x9e447a2e,
        0xc3453484,
        0xfdd56705,
        0x0e1e9ec9,
        0xdb73dbd3,
        0x105588cd,
        0x675fda79,
        0xe3674340,
        0xc5c43465,
        0x713e38d8,
        0x3d28f89e,
        0xf16dff20,
        0x153e21e7,
        0x8fb03d4a,
        0xe6e39f2b,
        0xdb83adf7,
        0xe93d5a68,
        0x948140f7,
        0xf64c261c,
        0x94692934,
        0x411520f7,
        0x7602d4f7,
        0xbcf46b2e,
        0xd4a20068,
        0xd4082471,
        0x3320f46a,
        0x43b7d4b7,
        0x500061af,
        0x1e39f62e,
        0x97244546,
        0x14214f74,
        0xbf8b8840,
        0x4d95fc1d,
        0x96b591af,
        0x70f4ddd3,
        0x66a02f45,
        0xbfbc09ec,
        0x03bd9785,
        0x7fac6dd0,
        0x31cb8504,
        0x96eb27b3,
        0x55fd3941,
        0xda2547e6,
        0xabca0a9a,
        0x28507825,
        0x530429f4,
        0x0a2c86da,
        0xe9b66dfb,
        0x68dc1462,
        0xd7486900,
        0x680ec0a4,
        0x27a18dee,
        0x4f3ffea2,
        0xe887ad8c,
        0xb58ce006,
        0x7af4d6b6,
        0xaace1e7c,
        0xd3375fec,
        0xce78a399,
        0x406b2a42,
        0x20fe9e35,
        0xd9f385b9,
        0xee39d7ab,
        0x3b124e8b,
        0x1dc9faf7,
        0x4b6d1856,
        0x26a36631,
        0xeae397b2,
        0x3a6efa74,
        0xdd5b4332,
        0x6841e7f7,
        0xca7820fb,
        0xfb0af54e,
        0xd8feb397,
        0x454056ac,
        0xba489527,
        0x55533a3a,
        0x20838d87,
        0xfe6ba9b7,
        0xd096954b,
        0x55a867bc,
        0xa1159a58,
        0xcca92963,
        0x99e1db33,
        0xa62a4a56,
        0x3f3125f9,
        0x5ef47e1c,
        0x9029317c,
        0xfdf8e802,
        0x04272f70,
        0x80bb155c,
        0x05282ce3,
        0x95c11548,
        0xe4c66d22,
        0x48c1133f,
        0xc70f86dc,
        0x07f9c9ee,
        0x41041f0f,
        0x404779a4,
        0x5d886e17,
        0x325f51eb,
        0xd59bc0d1,
        0xf2bcc18f,
        0x41113564,
        0x257b7834,
        0x602a9c60,
        0xdff8e8a3,
        0x1f636c1b,
        0x0e12b4c2,
        0x02e1329e,
        0xaf664fd1,
        0xcad18115,
        0x6b2395e0,
        0x333e92e1,
        0x3b240b62,
        0xeebeb922,
        0x85b2a20e,
        0xe6ba0d99,
        0xde720c8c,
        0x2da2f728,
        0xd0127845,
        0x95b794fd,
        0x647d0862,
        0xe7ccf5f0,
        0x5449a36f,
        0x877d48fa,
        0xc39dfd27,
        0xf33e8d1e,
        0x0a476341,
        0x992eff74,
        0x3a6f6eab,
        0xf4f8fd37,
        0xa812dc60,
        0xa1ebddf8,
        0x991be14c,
        0xdb6e6b0d,
        0xc67b5510,
        0x6d672c37,
        0x2765d43b,
        0xdcd0e804,
        0xf1290dc7,
        0xcc00ffa3,
        0xb5390f92,
        0x690fed0b,
        0x667b9ffb,
        0xcedb7d9c,
        0xa091cf0b,
        0xd9155ea3,
        0xbb132f88,
        0x515bad24,
        0x7b9479bf,
        0x763bd6eb,
        0x37392eb3,
        0xcc115979,
        0x8026e297,
        0xf42e312d,
        0x6842ada7,
        0xc66a2b3b,
        0x12754ccc,
        0x782ef11c,
        0x6a124237,
        0xb79251e7,
        0x06a1bbe6,
        0x4bfb6350,
        0x1a6b1018,
        0x11caedfa,
        0x3d25bdd8,
        0xe2e1c3c9,
        0x44421659,
        0x0a121386,
        0xd90cec6e,
        0xd5abea2a,
        0x64af674e,
        0xda86a85f,
        0xbebfe988,
        0x64e4c3fe,
        0x9dbc8057,
        0xf0f7c086,
        0x60787bf8,
        0x6003604d,
        0xd1fd8346,
        0xf6381fb0,
        0x7745ae04,
        0xd736fccc,
        0x83426b33,
        0xf01eab71,
        0xb0804187,
        0x3c005e5f,
        0x77a057be,
        0xbde8ae24,
        0x55464299,
        0xbf582e61,
        0x4e58f48f,
        0xf2ddfda2,
        0xf474ef38,
        0x8789bdc2,
        0x5366f9c3,
        0xc8b38e74,
        0xb475f255,
        0x46fcd9b9,
        0x7aeb2661,
        0x8b1ddf84,
        0x846a0e79,
        0x915f95e2,
        0x466e598e,
        0x20b45770,
        0x8cd55591,
        0xc902de4c,
        0xb90bace1,
        0xbb8205d0,
        0x11a86248,
        0x7574a99e,
        0xb77f19b6,
        0xe0a9dc09,
        0x662d09a1,
        0xc4324633,
        0xe85a1f02,
        0x09f0be8c,
        0x4a99a025,
        0x1d6efe10,
        0x1ab93d1d,
        0x0ba5a4df,
        0xa186f20f,
        0x2868f169,
        0xdcb7da83,
        0x573906fe,
        0xa1e2ce9b,
        0x4fcd7f52,
        0x50115e01,
        0xa70683fa,
        0xa002b5c4,
        0x0de6d027,
        0x9af88c27,
        0x773f8641,
        0xc3604c06,
        0x61a806b5,
        0xf0177a28,
        0xc0f586e0,
        0x006058aa,
        0x30dc7d62,
        0x11e69ed7,
        0x2338ea63,
        0x53c2dd94,
        0xc2c21634,
        0xbbcbee56,
        0x90bcb6de,
        0xebfc7da1,
        0xce591d76,
        0x6f05e409,
        0x4b7c0188,
        0x39720a3d,
        0x7c927c24,
        0x86e3725f,
        0x724d9db9,
        0x1ac15bb4,
        0xd39eb8fc,
        0xed545578,
        0x08fca5b5,
        0xd83d7cd3,
        0x4dad0fc4,
        0x1e50ef5e,
        0xb161e6f8,
        0xa28514d9,
        0x6c51133c,
        0x6fd5c7e7,
        0x56e14ec4,
        0x362abfce,
        0xddc6c837,
        0xd79a3234,
        0x92638212,
        0x670efa8e,
        0x406000e0,
        0x3a39ce37,
        0xd3faf5cf,
        0xabc27737,
        0x5ac52d1b,
        0x5cb0679e,
        0x4fa33742,
        0xd3822740,
        0x99bc9bbe,
        0xd5118e9d,
        0xbf0f7315,
        0xd62d1c7e,
        0xc700c47b,
        0xb78c1b6b,
        0x21a19045,
        0xb26eb1be,
        0x6a366eb4,
        0x5748ab2f,
        0xbc946e79,
        0xc6a376d2,
        0x6549c2c8,
        0x530ff8ee,
        0x468dde7d,
        0xd5730a1d,
        0x4cd04dc6,
        0x2939bbdb,
        0xa9ba4650,
        0xac9526e8,
        0xbe5ee304,
        0xa1fad5f0,
        0x6a2d519a,
        0x63ef8ce2,
        0x9a86ee22,
        0xc089c2b8,
        0x43242ef6,
        0xa51e03aa,
        0x9cf2d0a4,
        0x83c061ba,
        0x9be96a4d,
        0x8fe51550,
        0xba645bd6,
        0x2826a2f9,
        0xa73a3ae1,
        0x4ba99586,
        0xef5562e9,
        0xc72fefd3,
        0xf752f7da,
        0x3f046f69,
        0x77fa0a59,
        0x80e4a915,
        0x87b08601,
        0x9b09e6ad,
        0x3b3ee593,
        0xe990fd5a,
        0x9e34d797,
        0x2cf0b7d9,
        0x022b8b51,
        0x96d5ac3a,
        0x017da67d,
        0xd1cf3ed6,
        0x7c7d2d28,
        0x1f9f25cf,
        0xadf2b89b,
        0x5ad6b472,
        0x5a88f54c,
        0xe029ac71,
        0xe019a5e6,
        0x47b0acfd,
        0xed93fa9b,
        0xe8d3c48d,
        0x283b57cc,
        0xf8d56629,
        0x79132e28,
        0x785f0191,
        0xed756055,
        0xf7960e44,
        0xe3d35e8c,
        0x15056dd4,
        0x88f46dba,
        0x03a16125,
        0x0564f0bd,
        0xc3eb9e15,
        0x3c9057a2,
        0x97271aec,
        0xa93a072a,
        0x1b3f6d9b,
        0x1e6321f5,
        0xf59c66fb,
        0x26dcf319,
        0x7533d928,
        0xb155fdf5,
        0x03563482,
        0x8aba3cbb,
        0x28517711,
        0xc20ad9f8,
        0xabcc5167,
        0xccad925f,
        0x4de81751,
        0x3830dc8e,
        0x379d5862,
        0x9320f991,
        0xea7a90c2,
        0xfb3e7bce,
        0x5121ce64,
        0x774fbe32,
        0xa8b6e37e,
        0xc3293d46,
        0x48de5369,
        0x6413e680,
        0xa2ae0810,
        0xdd6db224,
        0x69852dfd,
        0x09072166,
        0xb39a460a,
        0x6445c0dd,
        0x586cdecf,
        0x1c20c8ae,
        0x5bbef7dd,
        0x1b588d40,
        0xccd2017f,
        0x6bb4e3bb,
        0xdda26a7e,
        0x3a59ff45,
        0x3e350a44,
        0xbcb4cdd5,
        0x72eacea8,
        0xfa6484bb,
        0x8d6612ae,
        0xbf3c6f47,
        0xd29be463,
        0x542f5d9e,
        0xaec2771b,
        0xf64e6370,
        0x740e0d8d,
        0xe75b1357,
        0xf8721671,
        0xaf537d5d,
        0x4040cb08,
        0x4eb4e2cc,
        0x34d2466a,
        0x0115af84,
        0xe1b00428,
        0x95983a1d,
        0x06b89fb4,
        0xce6ea048,
        0x6f3f3b82,
        0x3520ab82,
        0x011a1d4b,
        0x277227f8,
        0x611560b1,
        0xe7933fdc,
        0xbb3a792b,
        0x344525bd,
        0xa08839e1,
        0x51ce794b,
        0x2f32c9b7,
        0xa01fbac9,
        0xe01cc87e,
        0xbcc7d1f6,
        0xcf0111c3,
        0xa1e8aac7,
        0x1a908749,
        0xd44fbd9a,
        0xd0dadecb,
        0xd50ada38,
        0x0339c32a,
        0xc6913667,
        0x8df9317c,
        0xe0b12b4f,
        0xf79e59b7,
        0x43f5bb3a,
        0xf2d519ff,
        0x27d9459c,
        0xbf97222c,
        0x15e6fc2a,
        0x0f91fc71,
        0x9b941525,
        0xfae59361,
        0xceb69ceb,
        0xc2a86459,
        0x12baa8d1,
        0xb6c1075e,
        0xe3056a0c,
        0x10d25065,
        0xcb03a442,
        0xe0ec6e0e,
        0x1698db3b,
        0x4c98a0be,
        0x3278e964,
        0x9f1f9532,
        0xe0d392df,
        0xd3a0342b,
        0x8971f21e,
        0x1b0a7441,
        0x4ba3348c,
        0xc5be7120,
        0xc37632d8,
        0xdf359f8d,
        0x9b992f2e,
        0xe60b6f47,
        0x0fe3f11d,
        0xe54cda54,
        0x1edad891,
        0xce6279cf,
        0xcd3e7e6f,
        0x1618b166,
        0xfd2c1d05,
        0x848fd2c5,
        0xf6fb2299,
        0xf523f357,
        0xa6327623,
        0x93a83531,
        0x56cccd02,
        0xacf08162,
        0x5a75ebb5,
        0x6e163697,
        0x88d273cc,
        0xde966292,
        0x81b949d0,
        0x4c50901b,
        0x71c65614,
        0xe6c6c7bd,
        0x327a140a,
        0x45e1d006,
        0xc3f27b9a,
        0xc9aa53fd,
        0x62a80f00,
        0xbb25bfe2,
        0x35bdd2f6,
        0x71126905,
        0xb2040222,
        0xb6cbcf7c,
        0xcd769c2b,
        0x53113ec0,
        0x1640e3d3,
        0x38abbd60,
        0x2547adf0,
        0xba38209c,
        0xf746ce76,
        0x77afa1c5,
        0x20756060,
        0x85cbfe4e,
        0x8ae88dd8,
        0x7aaaf9b0,
        0x4cf9aa7e,
        0x1948c25c,
        0x02fb8a8c,
        0x01c36ae4,
        0xd6ebe1f9,
        0x90d4f869,
        0xa65cdea0,
        0x3f09252d,
        0xc208e69f,
        0xb74e6132,
        0xce77e25b,
        0x578fdfe3,
        0x3ac372e6
    ];
    /**
     * @type {Array.<number>}
     * @const
     * @inner
     */ var C_ORIG = [
        0x4f727068,
        0x65616e42,
        0x65686f6c,
        0x64657253,
        0x63727944,
        0x6f756274
    ];
    /**
     * @param {Array.<number>} lr
     * @param {number} off
     * @param {Array.<number>} P
     * @param {Array.<number>} S
     * @returns {Array.<number>}
     * @inner
     */ function _encipher(lr, off, P, S) {
        var n, l = lr[off], r = lr[off + 1];
        l ^= P[0];
        /*
        for (var i=0, k=BLOWFISH_NUM_ROUNDS-2; i<=k;)
            // Feistel substitution on left word
            n  = S[l >>> 24],
            n += S[0x100 | ((l >> 16) & 0xff)],
            n ^= S[0x200 | ((l >> 8) & 0xff)],
            n += S[0x300 | (l & 0xff)],
            r ^= n ^ P[++i],
            // Feistel substitution on right word
            n  = S[r >>> 24],
            n += S[0x100 | ((r >> 16) & 0xff)],
            n ^= S[0x200 | ((r >> 8) & 0xff)],
            n += S[0x300 | (r & 0xff)],
            l ^= n ^ P[++i];
        */ //The following is an unrolled version of the above loop.
        //Iteration 0
        n = S[l >>> 24];
        n += S[0x100 | l >> 16 & 0xff];
        n ^= S[0x200 | l >> 8 & 0xff];
        n += S[0x300 | l & 0xff];
        r ^= n ^ P[1];
        n = S[r >>> 24];
        n += S[0x100 | r >> 16 & 0xff];
        n ^= S[0x200 | r >> 8 & 0xff];
        n += S[0x300 | r & 0xff];
        l ^= n ^ P[2];
        //Iteration 1
        n = S[l >>> 24];
        n += S[0x100 | l >> 16 & 0xff];
        n ^= S[0x200 | l >> 8 & 0xff];
        n += S[0x300 | l & 0xff];
        r ^= n ^ P[3];
        n = S[r >>> 24];
        n += S[0x100 | r >> 16 & 0xff];
        n ^= S[0x200 | r >> 8 & 0xff];
        n += S[0x300 | r & 0xff];
        l ^= n ^ P[4];
        //Iteration 2
        n = S[l >>> 24];
        n += S[0x100 | l >> 16 & 0xff];
        n ^= S[0x200 | l >> 8 & 0xff];
        n += S[0x300 | l & 0xff];
        r ^= n ^ P[5];
        n = S[r >>> 24];
        n += S[0x100 | r >> 16 & 0xff];
        n ^= S[0x200 | r >> 8 & 0xff];
        n += S[0x300 | r & 0xff];
        l ^= n ^ P[6];
        //Iteration 3
        n = S[l >>> 24];
        n += S[0x100 | l >> 16 & 0xff];
        n ^= S[0x200 | l >> 8 & 0xff];
        n += S[0x300 | l & 0xff];
        r ^= n ^ P[7];
        n = S[r >>> 24];
        n += S[0x100 | r >> 16 & 0xff];
        n ^= S[0x200 | r >> 8 & 0xff];
        n += S[0x300 | r & 0xff];
        l ^= n ^ P[8];
        //Iteration 4
        n = S[l >>> 24];
        n += S[0x100 | l >> 16 & 0xff];
        n ^= S[0x200 | l >> 8 & 0xff];
        n += S[0x300 | l & 0xff];
        r ^= n ^ P[9];
        n = S[r >>> 24];
        n += S[0x100 | r >> 16 & 0xff];
        n ^= S[0x200 | r >> 8 & 0xff];
        n += S[0x300 | r & 0xff];
        l ^= n ^ P[10];
        //Iteration 5
        n = S[l >>> 24];
        n += S[0x100 | l >> 16 & 0xff];
        n ^= S[0x200 | l >> 8 & 0xff];
        n += S[0x300 | l & 0xff];
        r ^= n ^ P[11];
        n = S[r >>> 24];
        n += S[0x100 | r >> 16 & 0xff];
        n ^= S[0x200 | r >> 8 & 0xff];
        n += S[0x300 | r & 0xff];
        l ^= n ^ P[12];
        //Iteration 6
        n = S[l >>> 24];
        n += S[0x100 | l >> 16 & 0xff];
        n ^= S[0x200 | l >> 8 & 0xff];
        n += S[0x300 | l & 0xff];
        r ^= n ^ P[13];
        n = S[r >>> 24];
        n += S[0x100 | r >> 16 & 0xff];
        n ^= S[0x200 | r >> 8 & 0xff];
        n += S[0x300 | r & 0xff];
        l ^= n ^ P[14];
        //Iteration 7
        n = S[l >>> 24];
        n += S[0x100 | l >> 16 & 0xff];
        n ^= S[0x200 | l >> 8 & 0xff];
        n += S[0x300 | l & 0xff];
        r ^= n ^ P[15];
        n = S[r >>> 24];
        n += S[0x100 | r >> 16 & 0xff];
        n ^= S[0x200 | r >> 8 & 0xff];
        n += S[0x300 | r & 0xff];
        l ^= n ^ P[16];
        lr[off] = r ^ P[BLOWFISH_NUM_ROUNDS + 1];
        lr[off + 1] = l;
        return lr;
    }
    /**
     * @param {Array.<number>} data
     * @param {number} offp
     * @returns {{key: number, offp: number}}
     * @inner
     */ function _streamtoword(data, offp) {
        for(var i = 0, word = 0; i < 4; ++i)word = word << 8 | data[offp] & 0xff, offp = (offp + 1) % data.length;
        return {
            key: word,
            offp: offp
        };
    }
    /**
     * @param {Array.<number>} key
     * @param {Array.<number>} P
     * @param {Array.<number>} S
     * @inner
     */ function _key(key, P, S) {
        var offset = 0, lr = [
            0,
            0
        ], plen = P.length, slen = S.length, sw;
        for(var i = 0; i < plen; i++)sw = _streamtoword(key, offset), offset = sw.offp, P[i] = P[i] ^ sw.key;
        for(i = 0; i < plen; i += 2)lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
        for(i = 0; i < slen; i += 2)lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
    }
    /**
     * Expensive key schedule Blowfish.
     * @param {Array.<number>} data
     * @param {Array.<number>} key
     * @param {Array.<number>} P
     * @param {Array.<number>} S
     * @inner
     */ function _ekskey(data, key, P, S) {
        var offp = 0, lr = [
            0,
            0
        ], plen = P.length, slen = S.length, sw;
        for(var i = 0; i < plen; i++)sw = _streamtoword(key, offp), offp = sw.offp, P[i] = P[i] ^ sw.key;
        offp = 0;
        for(i = 0; i < plen; i += 2)sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
        for(i = 0; i < slen; i += 2)sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
    }
    /**
     * Internaly crypts a string.
     * @param {Array.<number>} b Bytes to crypt
     * @param {Array.<number>} salt Salt bytes to use
     * @param {number} rounds Number of rounds
     * @param {function(Error, Array.<number>=)=} callback Callback receiving the error, if any, and the resulting bytes. If
     *  omitted, the operation will be performed synchronously.
     *  @param {function(number)=} progressCallback Callback called with the current progress
     * @returns {!Array.<number>|undefined} Resulting bytes if callback has been omitted, otherwise `undefined`
     * @inner
     */ function _crypt(b, salt, rounds, callback, progressCallback) {
        var cdata = C_ORIG.slice(), clen = cdata.length, err;
        // Validate
        if (rounds < 4 || rounds > 31) {
            err = Error("Illegal number of rounds (4-31): " + rounds);
            if (callback) {
                nextTick(callback.bind(this, err));
                return;
            } else throw err;
        }
        if (salt.length !== BCRYPT_SALT_LEN) {
            err = Error("Illegal salt length: " + salt.length + " != " + BCRYPT_SALT_LEN);
            if (callback) {
                nextTick(callback.bind(this, err));
                return;
            } else throw err;
        }
        rounds = 1 << rounds >>> 0;
        var P, S, i = 0, j;
        //Use typed arrays when available - huge speedup!
        if (Int32Array) {
            P = new Int32Array(P_ORIG);
            S = new Int32Array(S_ORIG);
        } else {
            P = P_ORIG.slice();
            S = S_ORIG.slice();
        }
        _ekskey(salt, b, P, S);
        /**
         * Calcualtes the next round.
         * @returns {Array.<number>|undefined} Resulting array if callback has been omitted, otherwise `undefined`
         * @inner
         */ function next() {
            if (progressCallback) progressCallback(i / rounds);
            if (i < rounds) {
                var start = Date.now();
                for(; i < rounds;){
                    i = i + 1;
                    _key(b, P, S);
                    _key(salt, P, S);
                    if (Date.now() - start > MAX_EXECUTION_TIME) break;
                }
            } else {
                for(i = 0; i < 64; i++)for(j = 0; j < clen >> 1; j++)_encipher(cdata, j << 1, P, S);
                var ret = [];
                for(i = 0; i < clen; i++)ret.push((cdata[i] >> 24 & 0xff) >>> 0), ret.push((cdata[i] >> 16 & 0xff) >>> 0), ret.push((cdata[i] >> 8 & 0xff) >>> 0), ret.push((cdata[i] & 0xff) >>> 0);
                if (callback) {
                    callback(null, ret);
                    return;
                } else return ret;
            }
            if (callback) nextTick(next);
        }
        // Async
        if (typeof callback !== 'undefined') {
            next();
        // Sync
        } else {
            var res;
            while(true)if (typeof (res = next()) !== 'undefined') return res || [];
        }
    }
    /**
     * Internally hashes a string.
     * @param {string} s String to hash
     * @param {?string} salt Salt to use, actually never null
     * @param {function(Error, string=)=} callback Callback receiving the error, if any, and the resulting hash. If omitted,
     *  hashing is perormed synchronously.
     *  @param {function(number)=} progressCallback Callback called with the current progress
     * @returns {string|undefined} Resulting hash if callback has been omitted, otherwise `undefined`
     * @inner
     */ function _hash(s, salt, callback, progressCallback) {
        var err;
        if (typeof s !== 'string' || typeof salt !== 'string') {
            err = Error("Invalid string / salt: Not a string");
            if (callback) {
                nextTick(callback.bind(this, err));
                return;
            } else throw err;
        }
        // Validate the salt
        var minor, offset;
        if (salt.charAt(0) !== '$' || salt.charAt(1) !== '2') {
            err = Error("Invalid salt version: " + salt.substring(0, 2));
            if (callback) {
                nextTick(callback.bind(this, err));
                return;
            } else throw err;
        }
        if (salt.charAt(2) === '$') minor = String.fromCharCode(0), offset = 3;
        else {
            minor = salt.charAt(2);
            if (minor !== 'a' && minor !== 'b' && minor !== 'y' || salt.charAt(3) !== '$') {
                err = Error("Invalid salt revision: " + salt.substring(2, 4));
                if (callback) {
                    nextTick(callback.bind(this, err));
                    return;
                } else throw err;
            }
            offset = 4;
        }
        // Extract number of rounds
        if (salt.charAt(offset + 2) > '$') {
            err = Error("Missing salt rounds");
            if (callback) {
                nextTick(callback.bind(this, err));
                return;
            } else throw err;
        }
        var r1 = parseInt(salt.substring(offset, offset + 1), 10) * 10, r2 = parseInt(salt.substring(offset + 1, offset + 2), 10), rounds = r1 + r2, real_salt = salt.substring(offset + 3, offset + 25);
        s += minor >= 'a' ? "\x00" : "";
        var passwordb = stringToBytes(s), saltb = base64_decode(real_salt, BCRYPT_SALT_LEN);
        /**
         * Finishes hashing.
         * @param {Array.<number>} bytes Byte array
         * @returns {string}
         * @inner
         */ function finish(bytes) {
            var res = [];
            res.push("$2");
            if (minor >= 'a') res.push(minor);
            res.push("$");
            if (rounds < 10) res.push("0");
            res.push(rounds.toString());
            res.push("$");
            res.push(base64_encode(saltb, saltb.length));
            res.push(base64_encode(bytes, C_ORIG.length * 4 - 1));
            return res.join('');
        }
        // Sync
        if (typeof callback == 'undefined') return finish(_crypt(passwordb, saltb, rounds));
        else {
            _crypt(passwordb, saltb, rounds, function(err, bytes) {
                if (err) callback(err, null);
                else callback(null, finish(bytes));
            }, progressCallback);
        }
    }
    /**
     * Encodes a byte array to base64 with up to len bytes of input, using the custom bcrypt alphabet.
     * @function
     * @param {!Array.<number>} b Byte array
     * @param {number} len Maximum input length
     * @returns {string}
     * @expose
     */ bcrypt.encodeBase64 = base64_encode;
    /**
     * Decodes a base64 encoded string to up to len bytes of output, using the custom bcrypt alphabet.
     * @function
     * @param {string} s String to decode
     * @param {number} len Maximum output length
     * @returns {!Array.<number>}
     * @expose
     */ bcrypt.decodeBase64 = base64_decode;
    return bcrypt;
});
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/create-deduped-by-callsite-server-error-logger.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createDedupedByCallsiteServerErrorLoggerDev": (()=>createDedupedByCallsiteServerErrorLoggerDev)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$react$2e$react$2d$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/react-experimental/react.react-server.js [middleware] (ecmascript)");
;
const errorRef = {
    current: null
};
// React.cache is currently only available in canary/experimental React channels.
const cache = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$react$2e$react$2d$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.cache === 'function' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$react$2e$react$2d$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.cache : (fn)=>fn;
// When Dynamic IO is enabled, we record these as errors so that they
// are captured by the dev overlay as it's more critical to fix these
// when enabled.
const logErrorOrWarn = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : console.warn;
// We don't want to dedupe across requests.
// The developer might've just attempted to fix the warning so we should warn again if it still happens.
const flushCurrentErrorIfNew = cache((key)=>{
    try {
        logErrorOrWarn(errorRef.current);
    } finally{
        errorRef.current = null;
    }
});
function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
    return function logDedupedError(...args) {
        const message = getMessage(...args);
        if ("TURBOPACK compile-time truthy", 1) {
            var _stack;
            const callStackFrames = (_stack = new Error().stack) == null ? void 0 : _stack.split('\n');
            if (callStackFrames === undefined || callStackFrames.length < 4) {
                logErrorOrWarn(message);
            } else {
                // Error:
                //   logDedupedError
                //   asyncApiBeingAccessedSynchronously
                //   <userland callsite>
                // TODO: This breaks if sourcemaps with ignore lists are enabled.
                const key = callStackFrames[4];
                errorRef.current = message;
                flushCurrentErrorIfNew(key);
            }
        } else {
            "TURBOPACK unreachable";
        }
    };
} //# sourceMappingURL=create-deduped-by-callsite-server-error-logger.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/lib/scheduler.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Schedules a function to be called on the next tick after the other promises
 * have been resolved.
 *
 * @param cb the function to schedule
 */ __turbopack_esm__({
    "atLeastOneTask": (()=>atLeastOneTask),
    "scheduleImmediate": (()=>scheduleImmediate),
    "scheduleOnNextTick": (()=>scheduleOnNextTick),
    "waitAtLeastOneReactRenderTask": (()=>waitAtLeastOneReactRenderTask)
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            setTimeout(cb, 0);
        } else {
            "TURBOPACK unreachable";
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        setTimeout(cb, 0);
    } else {
        "TURBOPACK unreachable";
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time truthy", 1) {
        return new Promise((r)=>setTimeout(r, 0));
    } else {
        "TURBOPACK unreachable";
    }
} //# sourceMappingURL=scheduler.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/request/cookies.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "cookies": (()=>cookies)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/client/components/static-generation-bailout.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/create-deduped-by-callsite-server-error-logger.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/lib/scheduler.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
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
function cookies() {
    const callingExpression = 'cookies';
    const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workAsyncStorage"].getStore();
    const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workUnitAsyncStorage"].getStore();
    if (workStore) {
        if (workStore.forceStatic) {
            // When using forceStatic we override all other logic and always just return an empty
            // cookies object without tracking
            const underlyingCookies = createEmptyCookies();
            return makeUntrackedExoticCookies(underlyingCookies);
        }
        if (workUnitStore) {
            if (workUnitStore.type === 'cache') {
                throw new Error(`Route ${workStore.route} used "cookies" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "cookies" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`);
            } else if (workUnitStore.type === 'unstable-cache') {
                throw new Error(`Route ${workStore.route} used "cookies" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "cookies" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
            } else if (workUnitStore.phase === 'after') {
                throw new Error(`Route ${workStore.route} used "cookies" inside "unstable_after(...)". This is not supported. If you need this data inside an "unstable_after" callback, use "cookies" outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/unstable_after`);
            }
        }
        if (workStore.dynamicShouldError) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`cookies\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
        }
        if (workUnitStore) {
            if (workUnitStore.type === 'prerender') {
                // dynamicIO Prerender
                // We don't track dynamic access here because access will be tracked when you access
                // one of the properties of the cookies object.
                return makeDynamicallyTrackedExoticCookies(workStore.route, workUnitStore);
            } else if (workUnitStore.type === 'prerender-ppr') {
                // PPR Prerender (no dynamicIO)
                // We are prerendering with PPR. We need track dynamic access here eagerly
                // to keep continuity with how cookies has worked in PPR without dynamicIO.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["postponeWithTracking"])(workStore.route, callingExpression, workUnitStore.dynamicTracking);
            } else if (workUnitStore.type === 'prerender-legacy') {
                // Legacy Prerender
                // We track dynamic access here so we don't need to wrap the cookies in
                // individual property access tracking.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["throwToInterruptStaticGeneration"])(callingExpression, workStore, workUnitStore);
            }
        }
        // We fall through to the dynamic context below but we still track dynamic access
        // because in dev we can still error for things like using cookies inside a cache context
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["trackDynamicDataInDynamicRender"])(workStore, workUnitStore);
    }
    // cookies is being called in a dynamic context
    const requestStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getExpectedRequestStore"])(callingExpression);
    let underlyingCookies;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["areCookiesMutableInCurrentPhase"])(requestStore)) {
        // We can't conditionally return different types here based on the context.
        // To avoid confusion, we always return the readonly type here.
        underlyingCookies = requestStore.userspaceMutableCookies;
    } else {
        underlyingCookies = requestStore.cookies;
    }
    if (("TURBOPACK compile-time value", "development") === 'development' && !(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
        return makeUntrackedExoticCookiesWithDevWarnings(underlyingCookies, workStore == null ? void 0 : workStore.route);
    } else {
        return makeUntrackedExoticCookies(underlyingCookies);
    }
}
function createEmptyCookies() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookiesAdapter"].seal(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](new Headers({})));
}
const CachedCookies = new WeakMap();
function makeDynamicallyTrackedExoticCookies(route, prerenderStore) {
    const cachedPromise = CachedCookies.get(prerenderStore);
    if (cachedPromise) {
        return cachedPromise;
    }
    const promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["makeHangingPromise"])(prerenderStore.renderSignal, '`cookies()`');
    CachedCookies.set(prerenderStore, promise);
    Object.defineProperties(promise, {
        [Symbol.iterator]: {
            value: function() {
                const expression = '`cookies()[Symbol.iterator]()`';
                const error = createCookiesAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        },
        size: {
            get () {
                const expression = '`cookies().size`';
                const error = createCookiesAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        },
        get: {
            value: function get() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().get()`';
                } else {
                    expression = `\`cookies().get(${describeNameArg(arguments[0])})\``;
                }
                const error = createCookiesAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        },
        getAll: {
            value: function getAll() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().getAll()`';
                } else {
                    expression = `\`cookies().getAll(${describeNameArg(arguments[0])})\``;
                }
                const error = createCookiesAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        },
        has: {
            value: function has() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().has()`';
                } else {
                    expression = `\`cookies().has(${describeNameArg(arguments[0])})\``;
                }
                const error = createCookiesAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        },
        set: {
            value: function set() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().set()`';
                } else {
                    const arg = arguments[0];
                    if (arg) {
                        expression = `\`cookies().set(${describeNameArg(arg)}, ...)\``;
                    } else {
                        expression = '`cookies().set(...)`';
                    }
                }
                const error = createCookiesAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        },
        delete: {
            value: function() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().delete()`';
                } else if (arguments.length === 1) {
                    expression = `\`cookies().delete(${describeNameArg(arguments[0])})\``;
                } else {
                    expression = `\`cookies().delete(${describeNameArg(arguments[0])}, ...)\``;
                }
                const error = createCookiesAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        },
        clear: {
            value: function clear() {
                const expression = '`cookies().clear()`';
                const error = createCookiesAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        },
        toString: {
            value: function toString() {
                const expression = '`cookies().toString()`';
                const error = createCookiesAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        }
    });
    return promise;
}
function makeUntrackedExoticCookies(underlyingCookies) {
    const cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
        return cachedCookies;
    }
    const promise = Promise.resolve(underlyingCookies);
    CachedCookies.set(underlyingCookies, promise);
    Object.defineProperties(promise, {
        [Symbol.iterator]: {
            value: underlyingCookies[Symbol.iterator] ? underlyingCookies[Symbol.iterator].bind(underlyingCookies) : // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
            // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
            // has extra properties not available on RequestCookie instances.
            polyfilledResponseCookiesIterator.bind(underlyingCookies)
        },
        size: {
            get () {
                return underlyingCookies.size;
            }
        },
        get: {
            value: underlyingCookies.get.bind(underlyingCookies)
        },
        getAll: {
            value: underlyingCookies.getAll.bind(underlyingCookies)
        },
        has: {
            value: underlyingCookies.has.bind(underlyingCookies)
        },
        set: {
            value: underlyingCookies.set.bind(underlyingCookies)
        },
        delete: {
            value: underlyingCookies.delete.bind(underlyingCookies)
        },
        clear: {
            value: typeof underlyingCookies.clear === 'function' ? underlyingCookies.clear.bind(underlyingCookies) : // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
            // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
            // has extra properties not available on RequestCookie instances.
            polyfilledResponseCookiesClear.bind(underlyingCookies, promise)
        },
        toString: {
            value: underlyingCookies.toString.bind(underlyingCookies)
        }
    });
    return promise;
}
function makeUntrackedExoticCookiesWithDevWarnings(underlyingCookies, route) {
    const cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
        return cachedCookies;
    }
    const promise = new Promise((resolve)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["scheduleImmediate"])(()=>resolve(underlyingCookies)));
    CachedCookies.set(underlyingCookies, promise);
    Object.defineProperties(promise, {
        [Symbol.iterator]: {
            value: function() {
                const expression = '`...cookies()` or similar iteration';
                syncIODev(route, expression);
                return underlyingCookies[Symbol.iterator] ? underlyingCookies[Symbol.iterator].apply(underlyingCookies, arguments) : // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
                // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
                // has extra properties not available on RequestCookie instances.
                polyfilledResponseCookiesIterator.call(underlyingCookies);
            },
            writable: false
        },
        size: {
            get () {
                const expression = '`cookies().size`';
                syncIODev(route, expression);
                return underlyingCookies.size;
            }
        },
        get: {
            value: function get() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().get()`';
                } else {
                    expression = `\`cookies().get(${describeNameArg(arguments[0])})\``;
                }
                syncIODev(route, expression);
                return underlyingCookies.get.apply(underlyingCookies, arguments);
            },
            writable: false
        },
        getAll: {
            value: function getAll() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().getAll()`';
                } else {
                    expression = `\`cookies().getAll(${describeNameArg(arguments[0])})\``;
                }
                syncIODev(route, expression);
                return underlyingCookies.getAll.apply(underlyingCookies, arguments);
            },
            writable: false
        },
        has: {
            value: function get() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().has()`';
                } else {
                    expression = `\`cookies().has(${describeNameArg(arguments[0])})\``;
                }
                syncIODev(route, expression);
                return underlyingCookies.has.apply(underlyingCookies, arguments);
            },
            writable: false
        },
        set: {
            value: function set() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().set()`';
                } else {
                    const arg = arguments[0];
                    if (arg) {
                        expression = `\`cookies().set(${describeNameArg(arg)}, ...)\``;
                    } else {
                        expression = '`cookies().set(...)`';
                    }
                }
                syncIODev(route, expression);
                return underlyingCookies.set.apply(underlyingCookies, arguments);
            },
            writable: false
        },
        delete: {
            value: function() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().delete()`';
                } else if (arguments.length === 1) {
                    expression = `\`cookies().delete(${describeNameArg(arguments[0])})\``;
                } else {
                    expression = `\`cookies().delete(${describeNameArg(arguments[0])}, ...)\``;
                }
                syncIODev(route, expression);
                return underlyingCookies.delete.apply(underlyingCookies, arguments);
            },
            writable: false
        },
        clear: {
            value: function clear() {
                const expression = '`cookies().clear()`';
                syncIODev(route, expression);
                // @ts-ignore clear is defined in RequestCookies implementation but not in the type
                return typeof underlyingCookies.clear === 'function' ? underlyingCookies.clear.apply(underlyingCookies, arguments) : // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
                // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
                // has extra properties not available on RequestCookie instances.
                polyfilledResponseCookiesClear.call(underlyingCookies, promise);
            },
            writable: false
        },
        toString: {
            value: function toString() {
                const expression = '`cookies().toString()` or implicit casting';
                syncIODev(route, expression);
                return underlyingCookies.toString.apply(underlyingCookies, arguments);
            },
            writable: false
        }
    });
    return promise;
}
function describeNameArg(arg) {
    return typeof arg === 'object' && arg !== null && typeof arg.name === 'string' ? `'${arg.name}'` : typeof arg === 'string' ? `'${arg}'` : '...';
}
function syncIODev(route, expression) {
    const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workUnitAsyncStorage"].getStore();
    if (workUnitStore && workUnitStore.type === 'request' && workUnitStore.prerenderPhase === true) {
        // When we're rendering dynamically in dev we need to advance out of the
        // Prerender environment when we read Request data synchronously
        const requestStore = workUnitStore;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["trackSynchronousRequestDataAccessInDev"])(requestStore);
    }
    // In all cases we warn normally
    warnForSyncAccess(route, expression);
}
const noop = ()=>{};
const warnForSyncAccess = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createDedupedByCallsiteServerErrorLoggerDev"])(createCookiesAccessError);
function createCookiesAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return new Error(`${prefix}used ${expression}. ` + `\`cookies()\` should be awaited before using its value. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function polyfilledResponseCookiesIterator() {
    return this.getAll().map((c)=>[
            c.name,
            c
        ]).values();
}
function polyfilledResponseCookiesClear(returnable) {
    for (const cookie of this.getAll()){
        this.delete(cookie.name);
    }
    return returnable;
} //# sourceMappingURL=cookies.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/request/headers.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "headers": (()=>headers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/client/components/static-generation-bailout.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/create-deduped-by-callsite-server-error-logger.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/lib/scheduler.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
function headers() {
    const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workAsyncStorage"].getStore();
    const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workUnitAsyncStorage"].getStore();
    if (workStore) {
        if (workStore.forceStatic) {
            // When using forceStatic we override all other logic and always just return an empty
            // headers object without tracking
            const underlyingHeaders = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].seal(new Headers({}));
            return makeUntrackedExoticHeaders(underlyingHeaders);
        }
        if (workUnitStore) {
            if (workUnitStore.type === 'cache') {
                throw new Error(`Route ${workStore.route} used "headers" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`);
            } else if (workUnitStore.type === 'unstable-cache') {
                throw new Error(`Route ${workStore.route} used "headers" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
            } else if (workUnitStore.phase === 'after') {
                throw new Error(`Route ${workStore.route} used "headers" inside "unstable_after(...)". This is not supported. If you need this data inside an "unstable_after" callback, use "headers" outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/unstable_after`);
            }
        }
        if (workStore.dynamicShouldError) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`headers\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
        }
        if (workUnitStore) {
            if (workUnitStore.type === 'prerender') {
                // dynamicIO Prerender
                // We don't track dynamic access here because access will be tracked when you access
                // one of the properties of the headers object.
                return makeDynamicallyTrackedExoticHeaders(workStore.route, workUnitStore);
            } else if (workUnitStore.type === 'prerender-ppr') {
                // PPR Prerender (no dynamicIO)
                // We are prerendering with PPR. We need track dynamic access here eagerly
                // to keep continuity with how headers has worked in PPR without dynamicIO.
                // TODO consider switching the semantic to throw on property access instead
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["postponeWithTracking"])(workStore.route, 'headers', workUnitStore.dynamicTracking);
            } else if (workUnitStore.type === 'prerender-legacy') {
                // Legacy Prerender
                // We are in a legacy static generation mode while prerendering
                // We track dynamic access here so we don't need to wrap the headers in
                // individual property access tracking.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["throwToInterruptStaticGeneration"])('headers', workStore, workUnitStore);
            }
        }
        // We fall through to the dynamic context below but we still track dynamic access
        // because in dev we can still error for things like using headers inside a cache context
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["trackDynamicDataInDynamicRender"])(workStore, workUnitStore);
    }
    const requestStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getExpectedRequestStore"])('headers');
    if (("TURBOPACK compile-time value", "development") === 'development' && !(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
        return makeUntrackedExoticHeadersWithDevWarnings(requestStore.headers, workStore == null ? void 0 : workStore.route);
    } else {
        return makeUntrackedExoticHeaders(requestStore.headers);
    }
}
const CachedHeaders = new WeakMap();
function makeDynamicallyTrackedExoticHeaders(route, prerenderStore) {
    const cachedHeaders = CachedHeaders.get(prerenderStore);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["makeHangingPromise"])(prerenderStore.renderSignal, '`headers()`');
    CachedHeaders.set(prerenderStore, promise);
    Object.defineProperties(promise, {
        append: {
            value: function append() {
                const expression = `\`headers().append(${describeNameArg(arguments[0])}, ...)\``;
                const error = createHeadersAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        },
        delete: {
            value: function _delete() {
                const expression = `\`headers().delete(${describeNameArg(arguments[0])})\``;
                const error = createHeadersAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        },
        get: {
            value: function get() {
                const expression = `\`headers().get(${describeNameArg(arguments[0])})\``;
                const error = createHeadersAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        },
        has: {
            value: function has() {
                const expression = `\`headers().has(${describeNameArg(arguments[0])})\``;
                const error = createHeadersAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        },
        set: {
            value: function set() {
                const expression = `\`headers().set(${describeNameArg(arguments[0])}, ...)\``;
                const error = createHeadersAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        },
        getSetCookie: {
            value: function getSetCookie() {
                const expression = '`headers().getSetCookie()`';
                const error = createHeadersAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        },
        forEach: {
            value: function forEach() {
                const expression = '`headers().forEach(...)`';
                const error = createHeadersAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        },
        keys: {
            value: function keys() {
                const expression = '`headers().keys()`';
                const error = createHeadersAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        },
        values: {
            value: function values() {
                const expression = '`headers().values()`';
                const error = createHeadersAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        },
        entries: {
            value: function entries() {
                const expression = '`headers().entries()`';
                const error = createHeadersAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        },
        [Symbol.iterator]: {
            value: function() {
                const expression = '`headers()[Symbol.iterator]()`';
                const error = createHeadersAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
        }
    });
    return promise;
}
function makeUntrackedExoticHeaders(underlyingHeaders) {
    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = Promise.resolve(underlyingHeaders);
    CachedHeaders.set(underlyingHeaders, promise);
    Object.defineProperties(promise, {
        append: {
            value: underlyingHeaders.append.bind(underlyingHeaders)
        },
        delete: {
            value: underlyingHeaders.delete.bind(underlyingHeaders)
        },
        get: {
            value: underlyingHeaders.get.bind(underlyingHeaders)
        },
        has: {
            value: underlyingHeaders.has.bind(underlyingHeaders)
        },
        set: {
            value: underlyingHeaders.set.bind(underlyingHeaders)
        },
        getSetCookie: {
            value: underlyingHeaders.getSetCookie.bind(underlyingHeaders)
        },
        forEach: {
            value: underlyingHeaders.forEach.bind(underlyingHeaders)
        },
        keys: {
            value: underlyingHeaders.keys.bind(underlyingHeaders)
        },
        values: {
            value: underlyingHeaders.values.bind(underlyingHeaders)
        },
        entries: {
            value: underlyingHeaders.entries.bind(underlyingHeaders)
        },
        [Symbol.iterator]: {
            value: underlyingHeaders[Symbol.iterator].bind(underlyingHeaders)
        }
    });
    return promise;
}
function makeUntrackedExoticHeadersWithDevWarnings(underlyingHeaders, route) {
    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = new Promise((resolve)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["scheduleImmediate"])(()=>resolve(underlyingHeaders)));
    CachedHeaders.set(underlyingHeaders, promise);
    Object.defineProperties(promise, {
        append: {
            value: function append() {
                const expression = `\`headers().append(${describeNameArg(arguments[0])}, ...)\``;
                syncIODev(route, expression);
                return underlyingHeaders.append.apply(underlyingHeaders, arguments);
            }
        },
        delete: {
            value: function _delete() {
                const expression = `\`headers().delete(${describeNameArg(arguments[0])})\``;
                syncIODev(route, expression);
                return underlyingHeaders.delete.apply(underlyingHeaders, arguments);
            }
        },
        get: {
            value: function get() {
                const expression = `\`headers().get(${describeNameArg(arguments[0])})\``;
                syncIODev(route, expression);
                return underlyingHeaders.get.apply(underlyingHeaders, arguments);
            }
        },
        has: {
            value: function has() {
                const expression = `\`headers().has(${describeNameArg(arguments[0])})\``;
                syncIODev(route, expression);
                return underlyingHeaders.has.apply(underlyingHeaders, arguments);
            }
        },
        set: {
            value: function set() {
                const expression = `\`headers().set(${describeNameArg(arguments[0])}, ...)\``;
                syncIODev(route, expression);
                return underlyingHeaders.set.apply(underlyingHeaders, arguments);
            }
        },
        getSetCookie: {
            value: function getSetCookie() {
                const expression = '`headers().getSetCookie()`';
                syncIODev(route, expression);
                return underlyingHeaders.getSetCookie.apply(underlyingHeaders, arguments);
            }
        },
        forEach: {
            value: function forEach() {
                const expression = '`headers().forEach(...)`';
                syncIODev(route, expression);
                return underlyingHeaders.forEach.apply(underlyingHeaders, arguments);
            }
        },
        keys: {
            value: function keys() {
                const expression = '`headers().keys()`';
                syncIODev(route, expression);
                return underlyingHeaders.keys.apply(underlyingHeaders, arguments);
            }
        },
        values: {
            value: function values() {
                const expression = '`headers().values()`';
                syncIODev(route, expression);
                return underlyingHeaders.values.apply(underlyingHeaders, arguments);
            }
        },
        entries: {
            value: function entries() {
                const expression = '`headers().entries()`';
                syncIODev(route, expression);
                return underlyingHeaders.entries.apply(underlyingHeaders, arguments);
            }
        },
        [Symbol.iterator]: {
            value: function() {
                const expression = '`...headers()` or similar iteration';
                syncIODev(route, expression);
                return underlyingHeaders[Symbol.iterator].apply(underlyingHeaders, arguments);
            }
        }
    });
    return promise;
}
function describeNameArg(arg) {
    return typeof arg === 'string' ? `'${arg}'` : '...';
}
function syncIODev(route, expression) {
    const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workUnitAsyncStorage"].getStore();
    if (workUnitStore && workUnitStore.type === 'request' && workUnitStore.prerenderPhase === true) {
        // When we're rendering dynamically in dev we need to advance out of the
        // Prerender environment when we read Request data synchronously
        const requestStore = workUnitStore;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["trackSynchronousRequestDataAccessInDev"])(requestStore);
    }
    // In all cases we warn normally
    warnForSyncAccess(route, expression);
}
const noop = ()=>{};
const warnForSyncAccess = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createDedupedByCallsiteServerErrorLoggerDev"])(createHeadersAccessError);
function createHeadersAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return new Error(`${prefix}used ${expression}. ` + `\`headers()\` should be awaited before using its value. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
} //# sourceMappingURL=headers.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/request/draft-mode.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "draftMode": (()=>draftMode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/create-deduped-by-callsite-server-error-logger.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/client/components/static-generation-bailout.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/client/components/hooks-server-context.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <locals>");
;
;
;
;
;
;
;
function draftMode() {
    const callingExpression = 'draftMode';
    const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workAsyncStorage"].getStore();
    const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workUnitAsyncStorage"].getStore();
    if (workUnitStore) {
        if (workStore && workUnitStore.phase === 'after') {
            throw new Error(`Route ${workStore.route} used "draftMode" inside "unstable_after(...)". This is not supported, because "unstable_after(...)" runs after the request is finished and cannot affect the response. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/unstable_after`);
        }
        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache' || workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-ppr' || workUnitStore.type === 'prerender-legacy') {
            // Return empty draft mode
            if (("TURBOPACK compile-time value", "development") === 'development' && !(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
                const route = workStore == null ? void 0 : workStore.route;
                return createExoticDraftModeWithDevWarnings(null, route);
            } else {
                return createExoticDraftMode(null);
            }
        }
    }
    const requestStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getExpectedRequestStore"])(callingExpression);
    const cachedDraftMode = CachedDraftModes.get(requestStore.draftMode);
    if (cachedDraftMode) {
        return cachedDraftMode;
    }
    let promise;
    if (("TURBOPACK compile-time value", "development") === 'development' && !(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
        const route = workStore == null ? void 0 : workStore.route;
        promise = createExoticDraftModeWithDevWarnings(requestStore.draftMode, route);
    } else {
        promise = createExoticDraftMode(requestStore.draftMode);
    }
    CachedDraftModes.set(requestStore.draftMode, promise);
    return promise;
}
const CachedDraftModes = new WeakMap();
function createExoticDraftMode(underlyingProvider) {
    const instance = new DraftMode(underlyingProvider);
    const promise = Promise.resolve(instance);
    Object.defineProperty(promise, 'isEnabled', {
        get () {
            return instance.isEnabled;
        },
        set (newValue) {
            Object.defineProperty(promise, 'isEnabled', {
                value: newValue,
                writable: true,
                enumerable: true
            });
        },
        enumerable: true,
        configurable: true
    });
    promise.enable = instance.enable.bind(instance);
    promise.disable = instance.disable.bind(instance);
    return promise;
}
function createExoticDraftModeWithDevWarnings(underlyingProvider, route) {
    const instance = new DraftMode(underlyingProvider);
    const promise = Promise.resolve(instance);
    Object.defineProperty(promise, 'isEnabled', {
        get () {
            const expression = '`draftMode().isEnabled`';
            syncIODev(route, expression);
            return instance.isEnabled;
        },
        set (newValue) {
            Object.defineProperty(promise, 'isEnabled', {
                value: newValue,
                writable: true,
                enumerable: true
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(promise, 'enable', {
        value: function get() {
            const expression = '`draftMode().enable()`';
            syncIODev(route, expression);
            return instance.enable.apply(instance, arguments);
        }
    });
    Object.defineProperty(promise, 'disable', {
        value: function get() {
            const expression = '`draftMode().disable()`';
            syncIODev(route, expression);
            return instance.disable.apply(instance, arguments);
        }
    });
    return promise;
}
class DraftMode {
    constructor(provider){
        this._provider = provider;
    }
    get isEnabled() {
        if (this._provider !== null) {
            return this._provider.isEnabled;
        }
        return false;
    }
    enable() {
        // We we have a store we want to track dynamic data access to ensure we
        // don't statically generate routes that manipulate draft mode.
        trackDynamicDraftMode('draftMode().enable()');
        if (this._provider !== null) {
            this._provider.enable();
        }
    }
    disable() {
        trackDynamicDraftMode('draftMode().disable()');
        if (this._provider !== null) {
            this._provider.disable();
        }
    }
}
function syncIODev(route, expression) {
    const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workUnitAsyncStorage"].getStore();
    if (workUnitStore && workUnitStore.type === 'request' && workUnitStore.prerenderPhase === true) {
        // When we're rendering dynamically in dev we need to advance out of the
        // Prerender environment when we read Request data synchronously
        const requestStore = workUnitStore;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["trackSynchronousRequestDataAccessInDev"])(requestStore);
    }
    // In all cases we warn normally
    warnForSyncAccess(route, expression);
}
const noop = ()=>{};
const warnForSyncAccess = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createDedupedByCallsiteServerErrorLoggerDev"])(createDraftModeAccessError);
function createDraftModeAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return new Error(`${prefix}used ${expression}. ` + `\`draftMode()\` should be awaited before using its value. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function trackDynamicDraftMode(expression) {
    const store = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workAsyncStorage"].getStore();
    const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workUnitAsyncStorage"].getStore();
    if (store) {
        // We we have a store we want to track dynamic data access to ensure we
        // don't statically generate routes that manipulate draft mode.
        if (workUnitStore) {
            if (workUnitStore.type === 'cache') {
                throw new Error(`Route ${store.route} used "${expression}" inside "use cache". The enabled status of draftMode can be read in caches but you must not enable or disable draftMode inside a cache. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`);
            } else if (workUnitStore.type === 'unstable-cache') {
                throw new Error(`Route ${store.route} used "${expression}" inside a function cached with "unstable_cache(...)". The enabled status of draftMode can be read in caches but you must not enable or disable draftMode inside a cache. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
            }
        }
        if (store.dynamicShouldError) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
        }
        if (workUnitStore) {
            if (workUnitStore.type === 'prerender') {
                // dynamicIO Prerender
                const error = new Error(`Route ${store.route} used ${expression} without first calling \`await connection()\`. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-headers`);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(store.route, expression, error, workUnitStore);
            } else if (workUnitStore.type === 'prerender-ppr') {
                // PPR Prerender
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["postponeWithTracking"])(store.route, expression, workUnitStore.dynamicTracking);
            } else if (workUnitStore.type === 'prerender-legacy') {
                // legacy Prerender
                workUnitStore.revalidate = 0;
                const err = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DynamicServerError"](`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
                store.dynamicUsageDescription = expression;
                store.dynamicUsageStack = err.stack;
                throw err;
            } else if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore && workUnitStore.type === 'request') {
                workUnitStore.usedDynamic = true;
            }
        }
    }
} //# sourceMappingURL=draft-mode.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/api/headers.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
 //# sourceMappingURL=headers.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/api/headers.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/request/cookies.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/request/headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$draft$2d$mode$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/request/draft-mode.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/api/headers.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/util/errors.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "JOSEAlgNotAllowed": (()=>JOSEAlgNotAllowed),
    "JOSEError": (()=>JOSEError),
    "JOSENotSupported": (()=>JOSENotSupported),
    "JWEDecryptionFailed": (()=>JWEDecryptionFailed),
    "JWEInvalid": (()=>JWEInvalid),
    "JWKInvalid": (()=>JWKInvalid),
    "JWKSInvalid": (()=>JWKSInvalid),
    "JWKSMultipleMatchingKeys": (()=>JWKSMultipleMatchingKeys),
    "JWKSNoMatchingKey": (()=>JWKSNoMatchingKey),
    "JWKSTimeout": (()=>JWKSTimeout),
    "JWSInvalid": (()=>JWSInvalid),
    "JWSSignatureVerificationFailed": (()=>JWSSignatureVerificationFailed),
    "JWTClaimValidationFailed": (()=>JWTClaimValidationFailed),
    "JWTExpired": (()=>JWTExpired),
    "JWTInvalid": (()=>JWTInvalid)
});
class JOSEError extends Error {
    constructor(message, options){
        super(message, options);
        this.code = 'ERR_JOSE_GENERIC';
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
    }
}
JOSEError.code = 'ERR_JOSE_GENERIC';
class JWTClaimValidationFailed extends JOSEError {
    constructor(message, payload, claim = 'unspecified', reason = 'unspecified'){
        super(message, {
            cause: {
                claim,
                reason,
                payload
            }
        });
        this.code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
    }
}
JWTClaimValidationFailed.code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
class JWTExpired extends JOSEError {
    constructor(message, payload, claim = 'unspecified', reason = 'unspecified'){
        super(message, {
            cause: {
                claim,
                reason,
                payload
            }
        });
        this.code = 'ERR_JWT_EXPIRED';
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
    }
}
JWTExpired.code = 'ERR_JWT_EXPIRED';
class JOSEAlgNotAllowed extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JOSE_ALG_NOT_ALLOWED';
    }
}
JOSEAlgNotAllowed.code = 'ERR_JOSE_ALG_NOT_ALLOWED';
class JOSENotSupported extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JOSE_NOT_SUPPORTED';
    }
}
JOSENotSupported.code = 'ERR_JOSE_NOT_SUPPORTED';
class JWEDecryptionFailed extends JOSEError {
    constructor(message = 'decryption operation failed', options){
        super(message, options);
        this.code = 'ERR_JWE_DECRYPTION_FAILED';
    }
}
JWEDecryptionFailed.code = 'ERR_JWE_DECRYPTION_FAILED';
class JWEInvalid extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWE_INVALID';
    }
}
JWEInvalid.code = 'ERR_JWE_INVALID';
class JWSInvalid extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWS_INVALID';
    }
}
JWSInvalid.code = 'ERR_JWS_INVALID';
class JWTInvalid extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWT_INVALID';
    }
}
JWTInvalid.code = 'ERR_JWT_INVALID';
class JWKInvalid extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWK_INVALID';
    }
}
JWKInvalid.code = 'ERR_JWK_INVALID';
class JWKSInvalid extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWKS_INVALID';
    }
}
JWKSInvalid.code = 'ERR_JWKS_INVALID';
class JWKSNoMatchingKey extends JOSEError {
    constructor(message = 'no applicable key found in the JSON Web Key Set', options){
        super(message, options);
        this.code = 'ERR_JWKS_NO_MATCHING_KEY';
    }
}
JWKSNoMatchingKey.code = 'ERR_JWKS_NO_MATCHING_KEY';
class JWKSMultipleMatchingKeys extends JOSEError {
    constructor(message = 'multiple matching keys found in the JSON Web Key Set', options){
        super(message, options);
        this.code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
    }
}
Symbol.asyncIterator;
JWKSMultipleMatchingKeys.code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
class JWKSTimeout extends JOSEError {
    constructor(message = 'request timed out', options){
        super(message, options);
        this.code = 'ERR_JWKS_TIMEOUT';
    }
}
JWKSTimeout.code = 'ERR_JWKS_TIMEOUT';
class JWSSignatureVerificationFailed extends JOSEError {
    constructor(message = 'signature verification failed', options){
        super(message, options);
        this.code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
    }
}
JWSSignatureVerificationFailed.code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/is_disjoint.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const isDisjoint = (...headers)=>{
    const sources = headers.filter(Boolean);
    if (sources.length === 0 || sources.length === 1) {
        return true;
    }
    let acc;
    for (const header of sources){
        const parameters = Object.keys(header);
        if (!acc || acc.size === 0) {
            acc = new Set(parameters);
            continue;
        }
        for (const parameter of parameters){
            if (acc.has(parameter)) {
                return false;
            }
            acc.add(parameter);
        }
    }
    return true;
};
const __TURBOPACK__default__export__ = isDisjoint;
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/validate_crit.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/util/errors.js [middleware] (ecmascript)");
;
function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
    if (joseHeader.crit !== undefined && protectedHeader?.crit === undefined) {
        throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
    }
    if (!protectedHeader || protectedHeader.crit === undefined) {
        return new Set();
    }
    if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input)=>typeof input !== 'string' || input.length === 0)) {
        throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    }
    let recognized;
    if (recognizedOption !== undefined) {
        recognized = new Map([
            ...Object.entries(recognizedOption),
            ...recognizedDefault.entries()
        ]);
    } else {
        recognized = recognizedDefault;
    }
    for (const parameter of protectedHeader.crit){
        if (!recognized.has(parameter)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JOSENotSupported"](`Extension Header Parameter "${parameter}" is not recognized`);
        }
        if (joseHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" is missing`);
        }
        if (recognized.get(parameter) && protectedHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
        }
    }
    return new Set(protectedHeader.crit);
}
const __TURBOPACK__default__export__ = validateCrit;
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/is_object.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>isObject)
});
function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}
function isObject(input) {
    if (!isObjectLike(input) || Object.prototype.toString.call(input) !== '[object Object]') {
        return false;
    }
    if (Object.getPrototypeOf(input) === null) {
        return true;
    }
    let proto = input;
    while(Object.getPrototypeOf(proto) !== null){
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(input) === proto;
}
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/is_jwk.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "isJWK": (()=>isJWK),
    "isPrivateJWK": (()=>isPrivateJWK),
    "isPublicJWK": (()=>isPublicJWK),
    "isSecretJWK": (()=>isSecretJWK)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_object$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/is_object.js [middleware] (ecmascript)");
;
function isJWK(key) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_object$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(key) && typeof key.kty === 'string';
}
function isPrivateJWK(key) {
    return key.kty !== 'oct' && typeof key.d === 'string';
}
function isPublicJWK(key) {
    return key.kty !== 'oct' && typeof key.d === 'undefined';
}
function isSecretJWK(key) {
    return isJWK(key) && key.kty === 'oct' && typeof key.k === 'string';
}
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/webcrypto.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "isCryptoKey": (()=>isCryptoKey)
});
const __TURBOPACK__default__export__ = crypto;
const isCryptoKey = (key)=>key instanceof CryptoKey;
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/is_key_like.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "types": (()=>types)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$webcrypto$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/webcrypto.js [middleware] (ecmascript)");
;
const __TURBOPACK__default__export__ = (key)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$webcrypto$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isCryptoKey"])(key)) {
        return true;
    }
    return key?.[Symbol.toStringTag] === 'KeyObject';
};
const types = [
    'CryptoKey'
];
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/invalid_key_input.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "withAlg": (()=>withAlg)
});
function message(msg, actual, ...types) {
    types = types.filter(Boolean);
    if (types.length > 2) {
        const last = types.pop();
        msg += `one of type ${types.join(', ')}, or ${last}.`;
    } else if (types.length === 2) {
        msg += `one of type ${types[0]} or ${types[1]}.`;
    } else {
        msg += `of type ${types[0]}.`;
    }
    if (actual == null) {
        msg += ` Received ${actual}`;
    } else if (typeof actual === 'function' && actual.name) {
        msg += ` Received function ${actual.name}`;
    } else if (typeof actual === 'object' && actual != null) {
        if (actual.constructor?.name) {
            msg += ` Received an instance of ${actual.constructor.name}`;
        }
    }
    return msg;
}
const __TURBOPACK__default__export__ = (actual, ...types)=>{
    return message('Key must be ', actual, ...types);
};
function withAlg(alg, actual, ...types) {
    return message(`Key for the ${alg} algorithm must be `, actual, ...types);
}
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/check_key_type.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "checkKeyTypeWithJwk": (()=>checkKeyTypeWithJwk),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_jwk$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/is_jwk.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$is_key_like$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/is_key_like.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$invalid_key_input$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/invalid_key_input.js [middleware] (ecmascript)");
;
;
;
const tag = (key)=>key?.[Symbol.toStringTag];
const jwkMatchesOp = (alg, key, usage)=>{
    if (key.use !== undefined && key.use !== 'sig') {
        throw new TypeError('Invalid key for this operation, when present its use must be sig');
    }
    if (key.key_ops !== undefined && key.key_ops.includes?.(usage) !== true) {
        throw new TypeError(`Invalid key for this operation, when present its key_ops must include ${usage}`);
    }
    if (key.alg !== undefined && key.alg !== alg) {
        throw new TypeError(`Invalid key for this operation, when present its alg must be ${alg}`);
    }
    return true;
};
const symmetricTypeCheck = (alg, key, usage, allowJwk)=>{
    if (key instanceof Uint8Array) return;
    if (allowJwk && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_jwk$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.isJWK(key)) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_jwk$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.isSecretJWK(key) && jwkMatchesOp(alg, key, usage)) return;
        throw new TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`);
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$is_key_like$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(key)) {
        throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$invalid_key_input$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["withAlg"])(alg, key, ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$is_key_like$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["types"], 'Uint8Array', allowJwk ? 'JSON Web Key' : null));
    }
    if (key.type !== 'secret') {
        throw new TypeError(`${tag(key)} instances for symmetric algorithms must be of type "secret"`);
    }
};
const asymmetricTypeCheck = (alg, key, usage, allowJwk)=>{
    if (allowJwk && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_jwk$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.isJWK(key)) {
        switch(usage){
            case 'sign':
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_jwk$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.isPrivateJWK(key) && jwkMatchesOp(alg, key, usage)) return;
                throw new TypeError(`JSON Web Key for this operation be a private JWK`);
            case 'verify':
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_jwk$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.isPublicJWK(key) && jwkMatchesOp(alg, key, usage)) return;
                throw new TypeError(`JSON Web Key for this operation be a public JWK`);
        }
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$is_key_like$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(key)) {
        throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$invalid_key_input$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["withAlg"])(alg, key, ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$is_key_like$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["types"], allowJwk ? 'JSON Web Key' : null));
    }
    if (key.type === 'secret') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithms must not be of type "secret"`);
    }
    if (usage === 'sign' && key.type === 'public') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm signing must be of type "private"`);
    }
    if (usage === 'decrypt' && key.type === 'public') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm decryption must be of type "private"`);
    }
    if (key.algorithm && usage === 'verify' && key.type === 'private') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm verifying must be of type "public"`);
    }
    if (key.algorithm && usage === 'encrypt' && key.type === 'private') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm encryption must be of type "public"`);
    }
};
function checkKeyType(allowJwk, alg, key, usage) {
    const symmetric = alg.startsWith('HS') || alg === 'dir' || alg.startsWith('PBES2') || /^A\d{3}(?:GCM)?KW$/.test(alg);
    if (symmetric) {
        symmetricTypeCheck(alg, key, usage, allowJwk);
    } else {
        asymmetricTypeCheck(alg, key, usage, allowJwk);
    }
}
const __TURBOPACK__default__export__ = checkKeyType.bind(undefined, false);
const checkKeyTypeWithJwk = checkKeyType.bind(undefined, true);
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/digest.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$webcrypto$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/webcrypto.js [middleware] (ecmascript)");
;
const digest = async (algorithm, data)=>{
    const subtleDigest = `SHA-${algorithm.slice(-3)}`;
    return new Uint8Array(await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$webcrypto$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].subtle.digest(subtleDigest, data));
};
const __TURBOPACK__default__export__ = digest;
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/buffer_utils.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "concat": (()=>concat),
    "concatKdf": (()=>concatKdf),
    "decoder": (()=>decoder),
    "encoder": (()=>encoder),
    "lengthAndInput": (()=>lengthAndInput),
    "p2s": (()=>p2s),
    "uint32be": (()=>uint32be),
    "uint64be": (()=>uint64be)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$digest$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/digest.js [middleware] (ecmascript)");
;
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const MAX_INT32 = 2 ** 32;
function concat(...buffers) {
    const size = buffers.reduce((acc, { length })=>acc + length, 0);
    const buf = new Uint8Array(size);
    let i = 0;
    for (const buffer of buffers){
        buf.set(buffer, i);
        i += buffer.length;
    }
    return buf;
}
function p2s(alg, p2sInput) {
    return concat(encoder.encode(alg), new Uint8Array([
        0
    ]), p2sInput);
}
function writeUInt32BE(buf, value, offset) {
    if (value < 0 || value >= MAX_INT32) {
        throw new RangeError(`value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`);
    }
    buf.set([
        value >>> 24,
        value >>> 16,
        value >>> 8,
        value & 0xff
    ], offset);
}
function uint64be(value) {
    const high = Math.floor(value / MAX_INT32);
    const low = value % MAX_INT32;
    const buf = new Uint8Array(8);
    writeUInt32BE(buf, high, 0);
    writeUInt32BE(buf, low, 4);
    return buf;
}
function uint32be(value) {
    const buf = new Uint8Array(4);
    writeUInt32BE(buf, value);
    return buf;
}
function lengthAndInput(input) {
    return concat(uint32be(input.length), input);
}
async function concatKdf(secret, bits, value) {
    const iterations = Math.ceil((bits >> 3) / 32);
    const res = new Uint8Array(iterations * 32);
    for(let iter = 0; iter < iterations; iter++){
        const buf = new Uint8Array(4 + secret.length + value.length);
        buf.set(uint32be(iter + 1));
        buf.set(secret, 4);
        buf.set(value, 4 + secret.length);
        res.set(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$digest$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])('sha256', buf), iter * 32);
    }
    return res.slice(0, bits >> 3);
}
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/base64url.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "decode": (()=>decode),
    "decodeBase64": (()=>decodeBase64),
    "encode": (()=>encode),
    "encodeBase64": (()=>encodeBase64)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/buffer_utils.js [middleware] (ecmascript)");
;
const encodeBase64 = (input)=>{
    let unencoded = input;
    if (typeof unencoded === 'string') {
        unencoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["encoder"].encode(unencoded);
    }
    const CHUNK_SIZE = 0x8000;
    const arr = [];
    for(let i = 0; i < unencoded.length; i += CHUNK_SIZE){
        arr.push(String.fromCharCode.apply(null, unencoded.subarray(i, i + CHUNK_SIZE)));
    }
    return btoa(arr.join(''));
};
const encode = (input)=>{
    return encodeBase64(input).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
};
const decodeBase64 = (encoded)=>{
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for(let i = 0; i < binary.length; i++){
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
};
const decode = (input)=>{
    let encoded = input;
    if (encoded instanceof Uint8Array) {
        encoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["decoder"].decode(encoded);
    }
    encoded = encoded.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
    try {
        return decodeBase64(encoded);
    } catch  {
        throw new TypeError('The input to be decoded is not correctly encoded.');
    }
};
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/jwk_to_key.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$webcrypto$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/webcrypto.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/util/errors.js [middleware] (ecmascript)");
;
;
function subtleMapping(jwk) {
    let algorithm;
    let keyUsages;
    switch(jwk.kty){
        case 'RSA':
            {
                switch(jwk.alg){
                    case 'PS256':
                    case 'PS384':
                    case 'PS512':
                        algorithm = {
                            name: 'RSA-PSS',
                            hash: `SHA-${jwk.alg.slice(-3)}`
                        };
                        keyUsages = jwk.d ? [
                            'sign'
                        ] : [
                            'verify'
                        ];
                        break;
                    case 'RS256':
                    case 'RS384':
                    case 'RS512':
                        algorithm = {
                            name: 'RSASSA-PKCS1-v1_5',
                            hash: `SHA-${jwk.alg.slice(-3)}`
                        };
                        keyUsages = jwk.d ? [
                            'sign'
                        ] : [
                            'verify'
                        ];
                        break;
                    case 'RSA-OAEP':
                    case 'RSA-OAEP-256':
                    case 'RSA-OAEP-384':
                    case 'RSA-OAEP-512':
                        algorithm = {
                            name: 'RSA-OAEP',
                            hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
                        };
                        keyUsages = jwk.d ? [
                            'decrypt',
                            'unwrapKey'
                        ] : [
                            'encrypt',
                            'wrapKey'
                        ];
                        break;
                    default:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
                }
                break;
            }
        case 'EC':
            {
                switch(jwk.alg){
                    case 'ES256':
                        algorithm = {
                            name: 'ECDSA',
                            namedCurve: 'P-256'
                        };
                        keyUsages = jwk.d ? [
                            'sign'
                        ] : [
                            'verify'
                        ];
                        break;
                    case 'ES384':
                        algorithm = {
                            name: 'ECDSA',
                            namedCurve: 'P-384'
                        };
                        keyUsages = jwk.d ? [
                            'sign'
                        ] : [
                            'verify'
                        ];
                        break;
                    case 'ES512':
                        algorithm = {
                            name: 'ECDSA',
                            namedCurve: 'P-521'
                        };
                        keyUsages = jwk.d ? [
                            'sign'
                        ] : [
                            'verify'
                        ];
                        break;
                    case 'ECDH-ES':
                    case 'ECDH-ES+A128KW':
                    case 'ECDH-ES+A192KW':
                    case 'ECDH-ES+A256KW':
                        algorithm = {
                            name: 'ECDH',
                            namedCurve: jwk.crv
                        };
                        keyUsages = jwk.d ? [
                            'deriveBits'
                        ] : [];
                        break;
                    default:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
                }
                break;
            }
        case 'OKP':
            {
                switch(jwk.alg){
                    case 'EdDSA':
                        algorithm = {
                            name: jwk.crv
                        };
                        keyUsages = jwk.d ? [
                            'sign'
                        ] : [
                            'verify'
                        ];
                        break;
                    case 'ECDH-ES':
                    case 'ECDH-ES+A128KW':
                    case 'ECDH-ES+A192KW':
                    case 'ECDH-ES+A256KW':
                        algorithm = {
                            name: jwk.crv
                        };
                        keyUsages = jwk.d ? [
                            'deriveBits'
                        ] : [];
                        break;
                    default:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
                }
                break;
            }
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
    }
    return {
        algorithm,
        keyUsages
    };
}
const parse = async (jwk)=>{
    if (!jwk.alg) {
        throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
    }
    const { algorithm, keyUsages } = subtleMapping(jwk);
    const rest = [
        algorithm,
        jwk.ext ?? false,
        jwk.key_ops ?? keyUsages
    ];
    const keyData = {
        ...jwk
    };
    delete keyData.alg;
    delete keyData.use;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$webcrypto$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].subtle.importKey('jwk', keyData, ...rest);
};
const __TURBOPACK__default__export__ = parse;
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/normalize_key.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$base64url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/base64url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$jwk_to_key$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/jwk_to_key.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_jwk$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/is_jwk.js [middleware] (ecmascript)");
;
;
;
const exportKeyValue = (k)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$base64url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["decode"])(k);
let privCache;
let pubCache;
const isKeyObject = (key)=>{
    return key?.[Symbol.toStringTag] === 'KeyObject';
};
const importAndCache = async (cache, key, jwk, alg, freeze = false)=>{
    let cached = cache.get(key);
    if (cached?.[alg]) {
        return cached[alg];
    }
    const cryptoKey = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$jwk_to_key$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])({
        ...jwk,
        alg
    });
    if (freeze) Object.freeze(key);
    if (!cached) {
        cache.set(key, {
            [alg]: cryptoKey
        });
    } else {
        cached[alg] = cryptoKey;
    }
    return cryptoKey;
};
const normalizePublicKey = (key, alg)=>{
    if (isKeyObject(key)) {
        let jwk = key.export({
            format: 'jwk'
        });
        delete jwk.d;
        delete jwk.dp;
        delete jwk.dq;
        delete jwk.p;
        delete jwk.q;
        delete jwk.qi;
        if (jwk.k) {
            return exportKeyValue(jwk.k);
        }
        pubCache || (pubCache = new WeakMap());
        return importAndCache(pubCache, key, jwk, alg);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_jwk$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isJWK"])(key)) {
        if (key.k) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$base64url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["decode"])(key.k);
        pubCache || (pubCache = new WeakMap());
        const cryptoKey = importAndCache(pubCache, key, key, alg, true);
        return cryptoKey;
    }
    return key;
};
const normalizePrivateKey = (key, alg)=>{
    if (isKeyObject(key)) {
        let jwk = key.export({
            format: 'jwk'
        });
        if (jwk.k) {
            return exportKeyValue(jwk.k);
        }
        privCache || (privCache = new WeakMap());
        return importAndCache(privCache, key, jwk, alg);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_jwk$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isJWK"])(key)) {
        if (key.k) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$base64url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["decode"])(key.k);
        privCache || (privCache = new WeakMap());
        const cryptoKey = importAndCache(privCache, key, key, alg, true);
        return cryptoKey;
    }
    return key;
};
const __TURBOPACK__default__export__ = {
    normalizePublicKey,
    normalizePrivateKey
};
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/crypto_key.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "checkEncCryptoKey": (()=>checkEncCryptoKey),
    "checkSigCryptoKey": (()=>checkSigCryptoKey)
});
function unusable(name, prop = 'algorithm.name') {
    return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm(algorithm, name) {
    return algorithm.name === name;
}
function getHashLength(hash) {
    return parseInt(hash.name.slice(4), 10);
}
function getNamedCurve(alg) {
    switch(alg){
        case 'ES256':
            return 'P-256';
        case 'ES384':
            return 'P-384';
        case 'ES512':
            return 'P-521';
        default:
            throw new Error('unreachable');
    }
}
function checkUsage(key, usages) {
    if (usages.length && !usages.some((expected)=>key.usages.includes(expected))) {
        let msg = 'CryptoKey does not support this operation, its usages must include ';
        if (usages.length > 2) {
            const last = usages.pop();
            msg += `one of ${usages.join(', ')}, or ${last}.`;
        } else if (usages.length === 2) {
            msg += `one of ${usages[0]} or ${usages[1]}.`;
        } else {
            msg += `${usages[0]}.`;
        }
        throw new TypeError(msg);
    }
}
function checkSigCryptoKey(key, alg, ...usages) {
    switch(alg){
        case 'HS256':
        case 'HS384':
        case 'HS512':
            {
                if (!isAlgorithm(key.algorithm, 'HMAC')) throw unusable('HMAC');
                const expected = parseInt(alg.slice(2), 10);
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        case 'RS256':
        case 'RS384':
        case 'RS512':
            {
                if (!isAlgorithm(key.algorithm, 'RSASSA-PKCS1-v1_5')) throw unusable('RSASSA-PKCS1-v1_5');
                const expected = parseInt(alg.slice(2), 10);
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        case 'PS256':
        case 'PS384':
        case 'PS512':
            {
                if (!isAlgorithm(key.algorithm, 'RSA-PSS')) throw unusable('RSA-PSS');
                const expected = parseInt(alg.slice(2), 10);
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        case 'EdDSA':
            {
                if (key.algorithm.name !== 'Ed25519' && key.algorithm.name !== 'Ed448') {
                    throw unusable('Ed25519 or Ed448');
                }
                break;
            }
        case 'ES256':
        case 'ES384':
        case 'ES512':
            {
                if (!isAlgorithm(key.algorithm, 'ECDSA')) throw unusable('ECDSA');
                const expected = getNamedCurve(alg);
                const actual = key.algorithm.namedCurve;
                if (actual !== expected) throw unusable(expected, 'algorithm.namedCurve');
                break;
            }
        default:
            throw new TypeError('CryptoKey does not support this operation');
    }
    checkUsage(key, usages);
}
function checkEncCryptoKey(key, alg, ...usages) {
    switch(alg){
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM':
            {
                if (!isAlgorithm(key.algorithm, 'AES-GCM')) throw unusable('AES-GCM');
                const expected = parseInt(alg.slice(1, 4), 10);
                const actual = key.algorithm.length;
                if (actual !== expected) throw unusable(expected, 'algorithm.length');
                break;
            }
        case 'A128KW':
        case 'A192KW':
        case 'A256KW':
            {
                if (!isAlgorithm(key.algorithm, 'AES-KW')) throw unusable('AES-KW');
                const expected = parseInt(alg.slice(1, 4), 10);
                const actual = key.algorithm.length;
                if (actual !== expected) throw unusable(expected, 'algorithm.length');
                break;
            }
        case 'ECDH':
            {
                switch(key.algorithm.name){
                    case 'ECDH':
                    case 'X25519':
                    case 'X448':
                        break;
                    default:
                        throw unusable('ECDH, X25519, or X448');
                }
                break;
            }
        case 'PBES2-HS256+A128KW':
        case 'PBES2-HS384+A192KW':
        case 'PBES2-HS512+A256KW':
            if (!isAlgorithm(key.algorithm, 'PBKDF2')) throw unusable('PBKDF2');
            break;
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
            {
                if (!isAlgorithm(key.algorithm, 'RSA-OAEP')) throw unusable('RSA-OAEP');
                const expected = parseInt(alg.slice(9), 10) || 1;
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        default:
            throw new TypeError('CryptoKey does not support this operation');
    }
    checkUsage(key, usages);
}
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/get_sign_verify_key.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>getCryptoKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$normalize_key$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/normalize_key.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$webcrypto$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/webcrypto.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$invalid_key_input$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/invalid_key_input.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$is_key_like$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/is_key_like.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$crypto_key$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/crypto_key.js [middleware] (ecmascript)");
;
;
;
;
;
async function getCryptoKey(alg, key, usage) {
    if (usage === 'sign') {
        key = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$normalize_key$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].normalizePrivateKey(key, alg);
    }
    if (usage === 'verify') {
        key = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$normalize_key$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].normalizePublicKey(key, alg);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$webcrypto$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isCryptoKey"])(key)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$crypto_key$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["checkSigCryptoKey"])(key, alg, usage);
        return key;
    }
    if (key instanceof Uint8Array) {
        if (!alg.startsWith('HS')) {
            throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$invalid_key_input$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(key, ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$is_key_like$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["types"]));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$webcrypto$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].subtle.importKey('raw', key, {
            hash: `SHA-${alg.slice(-3)}`,
            name: 'HMAC'
        }, false, [
            usage
        ]);
    }
    throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$invalid_key_input$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(key, ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$is_key_like$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["types"], 'Uint8Array', 'JSON Web Key'));
}
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/check_key_length.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = (alg, key)=>{
    if (alg.startsWith('RS') || alg.startsWith('PS')) {
        const { modulusLength } = key.algorithm;
        if (typeof modulusLength !== 'number' || modulusLength < 2048) {
            throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
        }
    }
};
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/subtle_dsa.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>subtleDsa)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/util/errors.js [middleware] (ecmascript)");
;
function subtleDsa(alg, algorithm) {
    const hash = `SHA-${alg.slice(-3)}`;
    switch(alg){
        case 'HS256':
        case 'HS384':
        case 'HS512':
            return {
                hash,
                name: 'HMAC'
            };
        case 'PS256':
        case 'PS384':
        case 'PS512':
            return {
                hash,
                name: 'RSA-PSS',
                saltLength: alg.slice(-3) >> 3
            };
        case 'RS256':
        case 'RS384':
        case 'RS512':
            return {
                hash,
                name: 'RSASSA-PKCS1-v1_5'
            };
        case 'ES256':
        case 'ES384':
        case 'ES512':
            return {
                hash,
                name: 'ECDSA',
                namedCurve: algorithm.namedCurve
            };
        case 'EdDSA':
            return {
                name: algorithm.name
            };
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JOSENotSupported"](`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
}
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/sign.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$get_sign_verify_key$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/get_sign_verify_key.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$check_key_length$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/check_key_length.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$webcrypto$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/webcrypto.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$subtle_dsa$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/subtle_dsa.js [middleware] (ecmascript)");
;
;
;
;
const sign = async (alg, key, data)=>{
    const cryptoKey = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$get_sign_verify_key$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(alg, key, 'sign');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$check_key_length$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(alg, cryptoKey);
    const signature = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$webcrypto$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].subtle.sign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$subtle_dsa$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(alg, cryptoKey.algorithm), cryptoKey, data);
    return new Uint8Array(signature);
};
const __TURBOPACK__default__export__ = sign;
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/jws/flattened/sign.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "FlattenedSign": (()=>FlattenedSign)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/util/errors.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_disjoint$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/is_disjoint.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$validate_crit$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/validate_crit.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$check_key_type$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/check_key_type.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/buffer_utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$base64url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/base64url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$sign$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/sign.js [middleware] (ecmascript)");
;
;
;
;
;
;
;
class FlattenedSign {
    constructor(payload){
        if (!(payload instanceof Uint8Array)) {
            throw new TypeError('payload must be an instance of Uint8Array');
        }
        this._payload = payload;
    }
    setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this._protectedHeader = protectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
            throw new TypeError('setUnprotectedHeader can only be called once');
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
    }
    async sign(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('either setProtectedHeader or setUnprotectedHeader must be called before #sign()');
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_disjoint$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(this._protectedHeader, this._unprotectedHeader)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');
        }
        const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader
        };
        const extensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$validate_crit$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"], new Map([
            [
                'b64',
                true
            ]
        ]), options?.crit, this._protectedHeader, joseHeader);
        let b64 = true;
        if (extensions.has('b64')) {
            b64 = this._protectedHeader.b64;
            if (typeof b64 !== 'boolean') {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
            }
        }
        const { alg } = joseHeader;
        if (typeof alg !== 'string' || !alg) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$check_key_type$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["checkKeyTypeWithJwk"])(alg, key, 'sign');
        let payload = this._payload;
        if (b64) {
            payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["encoder"].encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$base64url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["encode"])(payload));
        }
        let protectedHeader;
        if (this._protectedHeader) {
            protectedHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["encoder"].encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$base64url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["encode"])(JSON.stringify(this._protectedHeader)));
        } else {
            protectedHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["encoder"].encode('');
        }
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["concat"])(protectedHeader, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["encoder"].encode('.'), payload);
        const signature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$sign$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(alg, key, data);
        const jws = {
            signature: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$base64url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["encode"])(signature),
            payload: ''
        };
        if (b64) {
            jws.payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["decoder"].decode(payload);
        }
        if (this._unprotectedHeader) {
            jws.header = this._unprotectedHeader;
        }
        if (this._protectedHeader) {
            jws.protected = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["decoder"].decode(protectedHeader);
        }
        return jws;
    }
}
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/jws/compact/sign.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "CompactSign": (()=>CompactSign)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jws$2f$flattened$2f$sign$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/jws/flattened/sign.js [middleware] (ecmascript)");
;
class CompactSign {
    constructor(payload){
        this._flattened = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jws$2f$flattened$2f$sign$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["FlattenedSign"](payload);
    }
    setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
    }
    async sign(key, options) {
        const jws = await this._flattened.sign(key, options);
        if (jws.payload === undefined) {
            throw new TypeError('use the flattened module for creating JWS with b64: false');
        }
        return `${jws.protected}.${jws.payload}.${jws.signature}`;
    }
}
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/epoch.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = (date)=>Math.floor(date.getTime() / 1000);
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/secs.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const minute = 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
const year = day * 365.25;
const REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
const __TURBOPACK__default__export__ = (str)=>{
    const matched = REGEX.exec(str);
    if (!matched || matched[4] && matched[1]) {
        throw new TypeError('Invalid time period format');
    }
    const value = parseFloat(matched[2]);
    const unit = matched[3].toLowerCase();
    let numericDate;
    switch(unit){
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
        case 's':
            numericDate = Math.round(value);
            break;
        case 'minute':
        case 'minutes':
        case 'min':
        case 'mins':
        case 'm':
            numericDate = Math.round(value * minute);
            break;
        case 'hour':
        case 'hours':
        case 'hr':
        case 'hrs':
        case 'h':
            numericDate = Math.round(value * hour);
            break;
        case 'day':
        case 'days':
        case 'd':
            numericDate = Math.round(value * day);
            break;
        case 'week':
        case 'weeks':
        case 'w':
            numericDate = Math.round(value * week);
            break;
        default:
            numericDate = Math.round(value * year);
            break;
    }
    if (matched[1] === '-' || matched[4] === 'ago') {
        return -numericDate;
    }
    return numericDate;
};
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/jwt/produce.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ProduceJWT": (()=>ProduceJWT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_object$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/is_object.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$epoch$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/epoch.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$secs$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/secs.js [middleware] (ecmascript)");
;
;
;
function validateInput(label, input) {
    if (!Number.isFinite(input)) {
        throw new TypeError(`Invalid ${label} input`);
    }
    return input;
}
class ProduceJWT {
    constructor(payload = {}){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_object$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(payload)) {
            throw new TypeError('JWT Claims Set MUST be an object');
        }
        this._payload = payload;
    }
    setIssuer(issuer) {
        this._payload = {
            ...this._payload,
            iss: issuer
        };
        return this;
    }
    setSubject(subject) {
        this._payload = {
            ...this._payload,
            sub: subject
        };
        return this;
    }
    setAudience(audience) {
        this._payload = {
            ...this._payload,
            aud: audience
        };
        return this;
    }
    setJti(jwtId) {
        this._payload = {
            ...this._payload,
            jti: jwtId
        };
        return this;
    }
    setNotBefore(input) {
        if (typeof input === 'number') {
            this._payload = {
                ...this._payload,
                nbf: validateInput('setNotBefore', input)
            };
        } else if (input instanceof Date) {
            this._payload = {
                ...this._payload,
                nbf: validateInput('setNotBefore', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$epoch$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(input))
            };
        } else {
            this._payload = {
                ...this._payload,
                nbf: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$epoch$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(new Date()) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$secs$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(input)
            };
        }
        return this;
    }
    setExpirationTime(input) {
        if (typeof input === 'number') {
            this._payload = {
                ...this._payload,
                exp: validateInput('setExpirationTime', input)
            };
        } else if (input instanceof Date) {
            this._payload = {
                ...this._payload,
                exp: validateInput('setExpirationTime', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$epoch$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(input))
            };
        } else {
            this._payload = {
                ...this._payload,
                exp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$epoch$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(new Date()) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$secs$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(input)
            };
        }
        return this;
    }
    setIssuedAt(input) {
        if (typeof input === 'undefined') {
            this._payload = {
                ...this._payload,
                iat: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$epoch$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(new Date())
            };
        } else if (input instanceof Date) {
            this._payload = {
                ...this._payload,
                iat: validateInput('setIssuedAt', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$epoch$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(input))
            };
        } else if (typeof input === 'string') {
            this._payload = {
                ...this._payload,
                iat: validateInput('setIssuedAt', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$epoch$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(new Date()) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$secs$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(input))
            };
        } else {
            this._payload = {
                ...this._payload,
                iat: validateInput('setIssuedAt', input)
            };
        }
        return this;
    }
}
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/jwt/sign.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "SignJWT": (()=>SignJWT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jws$2f$compact$2f$sign$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/jws/compact/sign.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/buffer_utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/util/errors.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$produce$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/jwt/produce.js [middleware] (ecmascript)");
;
;
;
;
class SignJWT extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$produce$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ProduceJWT"] {
    setProtectedHeader(protectedHeader) {
        this._protectedHeader = protectedHeader;
        return this;
    }
    async sign(key, options) {
        const sig = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jws$2f$compact$2f$sign$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CompactSign"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["encoder"].encode(JSON.stringify(this._payload)));
        sig.setProtectedHeader(this._protectedHeader);
        if (Array.isArray(this._protectedHeader?.crit) && this._protectedHeader.crit.includes('b64') && this._protectedHeader.b64 === false) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWTInvalid"]('JWTs MUST NOT use unencoded payload');
        }
        return sig.sign(key, options);
    }
}
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/validate_algorithms.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const validateAlgorithms = (option, algorithms)=>{
    if (algorithms !== undefined && (!Array.isArray(algorithms) || algorithms.some((s)=>typeof s !== 'string'))) {
        throw new TypeError(`"${option}" option must be an array of strings`);
    }
    if (!algorithms) {
        return undefined;
    }
    return new Set(algorithms);
};
const __TURBOPACK__default__export__ = validateAlgorithms;
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/format_pem.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = (b64, descriptor)=>{
    const newlined = (b64.match(/.{1,64}/g) || []).join('\n');
    return `-----BEGIN ${descriptor}-----\n${newlined}\n-----END ${descriptor}-----`;
};
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/asn1.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "fromPKCS8": (()=>fromPKCS8),
    "fromSPKI": (()=>fromSPKI),
    "fromX509": (()=>fromX509),
    "toPKCS8": (()=>toPKCS8),
    "toSPKI": (()=>toSPKI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$webcrypto$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/webcrypto.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$invalid_key_input$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/invalid_key_input.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$is_key_like$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/is_key_like.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$format_pem$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/format_pem.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$base64url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/base64url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/util/errors.js [middleware] (ecmascript)");
;
;
;
;
;
;
const genericExport = async (keyType, keyFormat, key)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$webcrypto$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isCryptoKey"])(key)) {
        throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$invalid_key_input$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(key, ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$is_key_like$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["types"]));
    }
    if (!key.extractable) {
        throw new TypeError('CryptoKey is not extractable');
    }
    if (key.type !== keyType) {
        throw new TypeError(`key is not a ${keyType} key`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$format_pem$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$base64url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["encodeBase64"])(new Uint8Array(await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$webcrypto$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].subtle.exportKey(keyFormat, key))), `${keyType.toUpperCase()} KEY`);
};
const toSPKI = (key)=>{
    return genericExport('public', 'spki', key);
};
const toPKCS8 = (key)=>{
    return genericExport('private', 'pkcs8', key);
};
const findOid = (keyData, oid, from = 0)=>{
    if (from === 0) {
        oid.unshift(oid.length);
        oid.unshift(0x06);
    }
    const i = keyData.indexOf(oid[0], from);
    if (i === -1) return false;
    const sub = keyData.subarray(i, i + oid.length);
    if (sub.length !== oid.length) return false;
    return sub.every((value, index)=>value === oid[index]) || findOid(keyData, oid, i + 1);
};
const getNamedCurve = (keyData)=>{
    switch(true){
        case findOid(keyData, [
            0x2a,
            0x86,
            0x48,
            0xce,
            0x3d,
            0x03,
            0x01,
            0x07
        ]):
            return 'P-256';
        case findOid(keyData, [
            0x2b,
            0x81,
            0x04,
            0x00,
            0x22
        ]):
            return 'P-384';
        case findOid(keyData, [
            0x2b,
            0x81,
            0x04,
            0x00,
            0x23
        ]):
            return 'P-521';
        case findOid(keyData, [
            0x2b,
            0x65,
            0x6e
        ]):
            return 'X25519';
        case findOid(keyData, [
            0x2b,
            0x65,
            0x6f
        ]):
            return 'X448';
        case findOid(keyData, [
            0x2b,
            0x65,
            0x70
        ]):
            return 'Ed25519';
        case findOid(keyData, [
            0x2b,
            0x65,
            0x71
        ]):
            return 'Ed448';
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Invalid or unsupported EC Key Curve or OKP Key Sub Type');
    }
};
const genericImport = async (replace, keyFormat, pem, alg, options)=>{
    let algorithm;
    let keyUsages;
    const keyData = new Uint8Array(atob(pem.replace(replace, '')).split('').map((c)=>c.charCodeAt(0)));
    const isPublic = keyFormat === 'spki';
    switch(alg){
        case 'PS256':
        case 'PS384':
        case 'PS512':
            algorithm = {
                name: 'RSA-PSS',
                hash: `SHA-${alg.slice(-3)}`
            };
            keyUsages = isPublic ? [
                'verify'
            ] : [
                'sign'
            ];
            break;
        case 'RS256':
        case 'RS384':
        case 'RS512':
            algorithm = {
                name: 'RSASSA-PKCS1-v1_5',
                hash: `SHA-${alg.slice(-3)}`
            };
            keyUsages = isPublic ? [
                'verify'
            ] : [
                'sign'
            ];
            break;
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
            algorithm = {
                name: 'RSA-OAEP',
                hash: `SHA-${parseInt(alg.slice(-3), 10) || 1}`
            };
            keyUsages = isPublic ? [
                'encrypt',
                'wrapKey'
            ] : [
                'decrypt',
                'unwrapKey'
            ];
            break;
        case 'ES256':
            algorithm = {
                name: 'ECDSA',
                namedCurve: 'P-256'
            };
            keyUsages = isPublic ? [
                'verify'
            ] : [
                'sign'
            ];
            break;
        case 'ES384':
            algorithm = {
                name: 'ECDSA',
                namedCurve: 'P-384'
            };
            keyUsages = isPublic ? [
                'verify'
            ] : [
                'sign'
            ];
            break;
        case 'ES512':
            algorithm = {
                name: 'ECDSA',
                namedCurve: 'P-521'
            };
            keyUsages = isPublic ? [
                'verify'
            ] : [
                'sign'
            ];
            break;
        case 'ECDH-ES':
        case 'ECDH-ES+A128KW':
        case 'ECDH-ES+A192KW':
        case 'ECDH-ES+A256KW':
            {
                const namedCurve = getNamedCurve(keyData);
                algorithm = namedCurve.startsWith('P-') ? {
                    name: 'ECDH',
                    namedCurve
                } : {
                    name: namedCurve
                };
                keyUsages = isPublic ? [] : [
                    'deriveBits'
                ];
                break;
            }
        case 'EdDSA':
            algorithm = {
                name: getNamedCurve(keyData)
            };
            keyUsages = isPublic ? [
                'verify'
            ] : [
                'sign'
            ];
            break;
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Invalid or unsupported "alg" (Algorithm) value');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$webcrypto$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].subtle.importKey(keyFormat, keyData, algorithm, options?.extractable ?? false, keyUsages);
};
const fromPKCS8 = (pem, alg, options)=>{
    return genericImport(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, 'pkcs8', pem, alg, options);
};
const fromSPKI = (pem, alg, options)=>{
    return genericImport(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, 'spki', pem, alg, options);
};
function getElement(seq) {
    const result = [];
    let next = 0;
    while(next < seq.length){
        const nextPart = parseElement(seq.subarray(next));
        result.push(nextPart);
        next += nextPart.byteLength;
    }
    return result;
}
function parseElement(bytes) {
    let position = 0;
    let tag = bytes[0] & 0x1f;
    position++;
    if (tag === 0x1f) {
        tag = 0;
        while(bytes[position] >= 0x80){
            tag = tag * 128 + bytes[position] - 0x80;
            position++;
        }
        tag = tag * 128 + bytes[position] - 0x80;
        position++;
    }
    let length = 0;
    if (bytes[position] < 0x80) {
        length = bytes[position];
        position++;
    } else if (length === 0x80) {
        length = 0;
        while(bytes[position + length] !== 0 || bytes[position + length + 1] !== 0){
            if (length > bytes.byteLength) {
                throw new TypeError('invalid indefinite form length');
            }
            length++;
        }
        const byteLength = position + length + 2;
        return {
            byteLength,
            contents: bytes.subarray(position, position + length),
            raw: bytes.subarray(0, byteLength)
        };
    } else {
        const numberOfDigits = bytes[position] & 0x7f;
        position++;
        length = 0;
        for(let i = 0; i < numberOfDigits; i++){
            length = length * 256 + bytes[position];
            position++;
        }
    }
    const byteLength = position + length;
    return {
        byteLength,
        contents: bytes.subarray(position, byteLength),
        raw: bytes.subarray(0, byteLength)
    };
}
function spkiFromX509(buf) {
    const tbsCertificate = getElement(getElement(parseElement(buf).contents)[0].contents);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$base64url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["encodeBase64"])(tbsCertificate[tbsCertificate[0].raw[0] === 0xa0 ? 6 : 5].raw);
}
function getSPKI(x509) {
    const pem = x509.replace(/(?:-----(?:BEGIN|END) CERTIFICATE-----|\s)/g, '');
    const raw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$base64url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["decodeBase64"])(pem);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$format_pem$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(spkiFromX509(raw), 'PUBLIC KEY');
}
const fromX509 = (pem, alg, options)=>{
    let spki;
    try {
        spki = getSPKI(pem);
    } catch (cause) {
        throw new TypeError('Failed to parse the X.509 certificate', {
            cause
        });
    }
    return fromSPKI(spki, alg, options);
};
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/key/import.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "importJWK": (()=>importJWK),
    "importPKCS8": (()=>importPKCS8),
    "importSPKI": (()=>importSPKI),
    "importX509": (()=>importX509)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$asn1$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/asn1.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_object$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/is_object.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$base64url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/base64url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/util/errors.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$jwk_to_key$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/jwk_to_key.js [middleware] (ecmascript)");
;
;
;
;
;
async function importSPKI(spki, alg, options) {
    if (typeof spki !== 'string' || spki.indexOf('-----BEGIN PUBLIC KEY-----') !== 0) {
        throw new TypeError('"spki" must be SPKI formatted string');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$asn1$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["fromSPKI"])(spki, alg, options);
}
async function importX509(x509, alg, options) {
    if (typeof x509 !== 'string' || x509.indexOf('-----BEGIN CERTIFICATE-----') !== 0) {
        throw new TypeError('"x509" must be X.509 formatted string');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$asn1$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["fromX509"])(x509, alg, options);
}
async function importPKCS8(pkcs8, alg, options) {
    if (typeof pkcs8 !== 'string' || pkcs8.indexOf('-----BEGIN PRIVATE KEY-----') !== 0) {
        throw new TypeError('"pkcs8" must be PKCS#8 formatted string');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$asn1$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["fromPKCS8"])(pkcs8, alg, options);
}
async function importJWK(jwk, alg) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_object$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(jwk)) {
        throw new TypeError('JWK must be an object');
    }
    alg || (alg = jwk.alg);
    switch(jwk.kty){
        case 'oct':
            if (typeof jwk.k !== 'string' || !jwk.k) {
                throw new TypeError('missing "k" (Key Value) Parameter value');
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$base64url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["decode"])(jwk.k);
        case 'RSA':
            if (jwk.oth !== undefined) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JOSENotSupported"]('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
            }
        case 'EC':
        case 'OKP':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$jwk_to_key$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])({
                ...jwk,
                alg
            });
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Unsupported "kty" (Key Type) Parameter value');
    }
}
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/verify.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$get_sign_verify_key$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/get_sign_verify_key.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$check_key_length$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/check_key_length.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$subtle_dsa$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/subtle_dsa.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$webcrypto$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/webcrypto.js [middleware] (ecmascript)");
;
;
;
;
const verify = async (alg, key, signature, data)=>{
    const cryptoKey = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$get_sign_verify_key$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(alg, key, 'verify');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$check_key_length$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(alg, cryptoKey);
    const algorithm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$subtle_dsa$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(alg, cryptoKey.algorithm);
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$webcrypto$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].subtle.verify(algorithm, cryptoKey, signature, data);
    } catch  {
        return false;
    }
};
const __TURBOPACK__default__export__ = verify;
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/jws/flattened/verify.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "flattenedVerify": (()=>flattenedVerify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_object$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/is_object.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/util/errors.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$base64url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/base64url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/buffer_utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_disjoint$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/is_disjoint.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$validate_crit$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/validate_crit.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$validate_algorithms$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/validate_algorithms.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$check_key_type$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/check_key_type.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_jwk$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/is_jwk.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$key$2f$import$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/key/import.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$verify$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/runtime/verify.js [middleware] (ecmascript)");
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
async function flattenedVerify(jws, key, options) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_object$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(jws)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('Flattened JWS must be an object');
    }
    if (jws.protected === undefined && jws.header === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('Flattened JWS must have either of the "protected" or "header" members');
    }
    if (jws.protected !== undefined && typeof jws.protected !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Protected Header incorrect type');
    }
    if (jws.payload === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Payload missing');
    }
    if (typeof jws.signature !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Signature missing or incorrect type');
    }
    if (jws.header !== undefined && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_object$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(jws.header)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Unprotected Header incorrect type');
    }
    let parsedProt = {};
    if (jws.protected) {
        try {
            const protectedHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$base64url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["decode"])(jws.protected);
            parsedProt = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["decoder"].decode(protectedHeader));
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Protected Header is invalid');
        }
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_disjoint$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(parsedProt, jws.header)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');
    }
    const joseHeader = {
        ...parsedProt,
        ...jws.header
    };
    const extensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$validate_crit$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"], new Map([
        [
            'b64',
            true
        ]
    ]), options?.crit, parsedProt, joseHeader);
    let b64 = true;
    if (extensions.has('b64')) {
        b64 = parsedProt.b64;
        if (typeof b64 !== 'boolean') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
        }
    }
    const { alg } = joseHeader;
    if (typeof alg !== 'string' || !alg) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    }
    const algorithms = options && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$validate_algorithms$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])('algorithms', options.algorithms);
    if (algorithms && !algorithms.has(alg)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JOSEAlgNotAllowed"]('"alg" (Algorithm) Header Parameter value not allowed');
    }
    if (b64) {
        if (typeof jws.payload !== 'string') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Payload must be a string');
        }
    } else if (typeof jws.payload !== 'string' && !(jws.payload instanceof Uint8Array)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Payload must be a string or an Uint8Array instance');
    }
    let resolvedKey = false;
    if (typeof key === 'function') {
        key = await key(parsedProt, jws);
        resolvedKey = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$check_key_type$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["checkKeyTypeWithJwk"])(alg, key, 'verify');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_jwk$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isJWK"])(key)) {
            key = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$key$2f$import$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["importJWK"])(key, alg);
        }
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$check_key_type$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["checkKeyTypeWithJwk"])(alg, key, 'verify');
    }
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["concat"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["encoder"].encode(jws.protected ?? ''), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["encoder"].encode('.'), typeof jws.payload === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["encoder"].encode(jws.payload) : jws.payload);
    let signature;
    try {
        signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$base64url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["decode"])(jws.signature);
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('Failed to base64url decode the signature');
    }
    const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$verify$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(alg, key, signature, data);
    if (!verified) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSSignatureVerificationFailed"]();
    }
    let payload;
    if (b64) {
        try {
            payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$runtime$2f$base64url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["decode"])(jws.payload);
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('Failed to base64url decode the payload');
        }
    } else if (typeof jws.payload === 'string') {
        payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["encoder"].encode(jws.payload);
    } else {
        payload = jws.payload;
    }
    const result = {
        payload
    };
    if (jws.protected !== undefined) {
        result.protectedHeader = parsedProt;
    }
    if (jws.header !== undefined) {
        result.unprotectedHeader = jws.header;
    }
    if (resolvedKey) {
        return {
            ...result,
            key
        };
    }
    return result;
}
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/jws/compact/verify.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "compactVerify": (()=>compactVerify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/buffer_utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/util/errors.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jws$2f$flattened$2f$verify$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/jws/flattened/verify.js [middleware] (ecmascript)");
;
;
;
async function compactVerify(jws, key, options) {
    if (jws instanceof Uint8Array) {
        jws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["decoder"].decode(jws);
    }
    if (typeof jws !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('Compact JWS must be a string or Uint8Array');
    }
    const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split('.');
    if (length !== 3) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWSInvalid"]('Invalid Compact JWS');
    }
    const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jws$2f$flattened$2f$verify$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["flattenedVerify"])({
        payload,
        protected: protectedHeader,
        signature
    }, key, options);
    const result = {
        payload: verified.payload,
        protectedHeader: verified.protectedHeader
    };
    if (typeof key === 'function') {
        return {
            ...result,
            key: verified.key
        };
    }
    return result;
}
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/jwt_claims_set.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/buffer_utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_object$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/is_object.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/util/errors.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$secs$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/secs.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$epoch$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/epoch.js [middleware] (ecmascript)");
;
;
;
;
;
const normalizeTyp = (value)=>value.toLowerCase().replace(/^application\//, '');
const checkAudiencePresence = (audPayload, audOption)=>{
    if (typeof audPayload === 'string') {
        return audOption.includes(audPayload);
    }
    if (Array.isArray(audPayload)) {
        return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
    }
    return false;
};
const __TURBOPACK__default__export__ = (protectedHeader, encodedPayload, options = {})=>{
    let payload;
    try {
        payload = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$buffer_utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["decoder"].decode(encodedPayload));
    } catch  {}
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$is_object$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(payload)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWTInvalid"]('JWT Claims Set must be a top-level JSON object');
    }
    const { typ } = options;
    if (typ && (typeof protectedHeader.typ !== 'string' || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "typ" JWT header value', payload, 'typ', 'check_failed');
    }
    const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
    const presenceCheck = [
        ...requiredClaims
    ];
    if (maxTokenAge !== undefined) presenceCheck.push('iat');
    if (audience !== undefined) presenceCheck.push('aud');
    if (subject !== undefined) presenceCheck.push('sub');
    if (issuer !== undefined) presenceCheck.push('iss');
    for (const claim of new Set(presenceCheck.reverse())){
        if (!(claim in payload)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"](`missing required "${claim}" claim`, payload, claim, 'missing');
        }
    }
    if (issuer && !(Array.isArray(issuer) ? issuer : [
        issuer
    ]).includes(payload.iss)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "iss" claim value', payload, 'iss', 'check_failed');
    }
    if (subject && payload.sub !== subject) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "sub" claim value', payload, 'sub', 'check_failed');
    }
    if (audience && !checkAudiencePresence(payload.aud, typeof audience === 'string' ? [
        audience
    ] : audience)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "aud" claim value', payload, 'aud', 'check_failed');
    }
    let tolerance;
    switch(typeof options.clockTolerance){
        case 'string':
            tolerance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$secs$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(options.clockTolerance);
            break;
        case 'number':
            tolerance = options.clockTolerance;
            break;
        case 'undefined':
            tolerance = 0;
            break;
        default:
            throw new TypeError('Invalid clockTolerance option type');
    }
    const { currentDate } = options;
    const now = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$epoch$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(currentDate || new Date());
    if ((payload.iat !== undefined || maxTokenAge) && typeof payload.iat !== 'number') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"iat" claim must be a number', payload, 'iat', 'invalid');
    }
    if (payload.nbf !== undefined) {
        if (typeof payload.nbf !== 'number') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"nbf" claim must be a number', payload, 'nbf', 'invalid');
        }
        if (payload.nbf > now + tolerance) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"nbf" claim timestamp check failed', payload, 'nbf', 'check_failed');
        }
    }
    if (payload.exp !== undefined) {
        if (typeof payload.exp !== 'number') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"exp" claim must be a number', payload, 'exp', 'invalid');
        }
        if (payload.exp <= now - tolerance) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWTExpired"]('"exp" claim timestamp check failed', payload, 'exp', 'check_failed');
        }
    }
    if (maxTokenAge) {
        const age = now - payload.iat;
        const max = typeof maxTokenAge === 'number' ? maxTokenAge : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$secs$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(maxTokenAge);
        if (age - tolerance > max) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWTExpired"]('"iat" claim timestamp check failed (too far in the past)', payload, 'iat', 'check_failed');
        }
        if (age < 0 - tolerance) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"iat" claim timestamp check failed (it should be in the past)', payload, 'iat', 'check_failed');
        }
    }
    return payload;
};
}}),
"[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/jwt/verify.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "jwtVerify": (()=>jwtVerify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jws$2f$compact$2f$verify$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/jws/compact/verify.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/util/errors.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$jwt_claims_set$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/lib/jwt_claims_set.js [middleware] (ecmascript)");
;
;
;
async function jwtVerify(jwt, key, options) {
    const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jws$2f$compact$2f$verify$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["compactVerify"])(jwt, key, options);
    if (verified.protectedHeader.crit?.includes('b64') && verified.protectedHeader.b64 === false) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["JWTInvalid"]('JWTs MUST NOT use unencoded payload');
    }
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$lib$2f$jwt_claims_set$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(verified.protectedHeader, verified.payload, options);
    const result = {
        payload,
        protectedHeader: verified.protectedHeader
    };
    if (typeof key === 'function') {
        return {
            ...result,
            key: verified.key
        };
    }
    return result;
}
}}),
"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/build/templates/middleware.js { INNER_MIDDLEWARE_MODULE => \"[project]/middleware.ts [middleware] (ecmascript)\" } [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>nHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$globals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/globals.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$adapter$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/server/web/adapter.js [middleware] (ecmascript)");
// Import the userland code.
var __TURBOPACK__imported__module__$5b$project$5d2f$middleware$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/middleware.ts [middleware] (ecmascript)");
;
;
;
;
const mod = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$middleware$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__
};
const handler = mod.middleware || mod.default;
const page = "/middleware";
if (typeof handler !== 'function') {
    throw new Error(`The Middleware "${page}" must export a \`middleware\` or a \`default\` function`);
}
// Middleware will only sent out the FetchEvent to next server,
// so load instrumentation module here and track the error inside middleware module.
function errorHandledHandler(fn) {
    return async (...args)=>{
        try {
            return await fn(...args);
        } catch (err) {
            const req = args[0];
            const url = new URL(req.url);
            const resource = url.pathname + url.search;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$globals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["edgeInstrumentationOnRequestError"])(err, {
                path: resource,
                method: req.method,
                headers: Object.fromEntries(req.headers.entries())
            }, {
                routerKind: 'Pages Router',
                routePath: '/middleware',
                routeType: 'middleware',
                revalidateReason: undefined
            });
            throw err;
        }
    };
}
function nHandler(opts) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3$2d$canary$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$dkiyaki7a3oudpcqgaijwkqvsa$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$adapter$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["adapter"])({
        ...opts,
        page,
        handler: errorHandledHandler(handler)
    });
} //# sourceMappingURL=middleware.js.map
}}),
"[project]/edge-wrapper.js { MODULE => \"[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/build/templates/middleware.js { INNER_MIDDLEWARE_MODULE => \\\"[project]/middleware.ts [middleware] (ecmascript)\\\" } [middleware] (ecmascript)\" } [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
self._ENTRIES ||= {};
self._ENTRIES["middleware_middleware"] = Promise.resolve().then(()=>__turbopack_import__('[project]/node_modules/.pnpm/next@15.0.3-canary.3_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__dkiyaki7a3oudpcqgaijwkqvsa/node_modules/next/dist/esm/build/templates/middleware.js { INNER_MIDDLEWARE_MODULE => "[project]/middleware.ts [middleware] (ecmascript)" } [middleware] (ecmascript)'));
}}),
}]);

//# sourceMappingURL=_5545c8._.js.map