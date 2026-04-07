(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/compiled/https-browserify/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    var r = {
        528: function(r, e, t) {
            var o = t(685);
            var a = t(310);
            var i = r.exports;
            for(var n in o){
                if (o.hasOwnProperty(n)) i[n] = o[n];
            }
            i.request = function(r, e) {
                r = validateParams(r);
                return o.request.call(this, r, e);
            };
            i.get = function(r, e) {
                r = validateParams(r);
                return o.get.call(this, r, e);
            };
            function validateParams(r) {
                if (typeof r === "string") {
                    r = a.parse(r);
                }
                if (!r.protocol) {
                    r.protocol = "https:";
                }
                if (r.protocol !== "https:") {
                    throw new Error('Protocol "' + r.protocol + '" not supported. Expected "https:"');
                }
                return r;
            }
        },
        685: function(r) {
            "use strict";
            r.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/compiled/stream-http/index.js [app-client] (ecmascript)");
        },
        310: function(r) {
            "use strict";
            r.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/compiled/native-url/index.js [app-client] (ecmascript)");
        }
    };
    var e = {};
    function __nccwpck_require__(t) {
        var o = e[t];
        if (o !== undefined) {
            return o.exports;
        }
        var a = e[t] = {
            exports: {}
        };
        var i = true;
        try {
            r[t](a, a.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete e[t];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/compiled/https-browserify") + "/";
    var t = __nccwpck_require__(528);
    module.exports = t;
})();
}),
]);

//# sourceMappingURL=109d2_next_dist_compiled_https-browserify_index_94b5e49a.js.map