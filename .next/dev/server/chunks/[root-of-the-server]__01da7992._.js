module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/lib/logger.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLogger",
    ()=>createLogger
]);
const LOG_LEVELS = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
};
function getMinLevel() {
    const env = (process.env.LOG_LEVEL ?? 'info').toLowerCase();
    return env in LOG_LEVELS ? env : 'info';
}
function isJsonFormat() {
    return process.env.LOG_FORMAT === 'json';
}
function formatLine(level, tag, args) {
    const timestamp = new Date().toISOString();
    const upperLevel = level.toUpperCase();
    const msg = args.map((a)=>a instanceof Error ? a.stack ?? a.message : typeof a === 'string' ? a : JSON.stringify(a)).join(' ');
    if (isJsonFormat()) {
        return JSON.stringify({
            timestamp,
            level: upperLevel,
            tag,
            message: msg
        });
    }
    return `[${timestamp}] [${upperLevel}] [${tag}] ${msg}`;
}
function createLogger(tag) {
    const emit = (level, args)=>{
        if (LOG_LEVELS[level] < LOG_LEVELS[getMinLevel()]) return;
        const line = formatLine(level, tag, args);
        // Console output
        const fn = level === 'debug' ? console.debug : level === 'warn' ? console.warn : level === 'error' ? console.error : console.log;
        fn(line);
    };
    return {
        debug: (...args)=>emit('debug', args),
        info: (...args)=>emit('info', args),
        warn: (...args)=>emit('warn', args),
        error: (...args)=>emit('error', args)
    };
}
}),
"[externals]/node:assert [external] (node:assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:assert", () => require("node:assert"));

module.exports = mod;
}),
"[externals]/node:net [external] (node:net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:net", () => require("node:net"));

module.exports = mod;
}),
"[externals]/node:http [external] (node:http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:http", () => require("node:http"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:querystring [external] (node:querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:querystring", () => require("node:querystring"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:diagnostics_channel", () => require("node:diagnostics_channel"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[externals]/node:tls [external] (node:tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:tls", () => require("node:tls"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:zlib [external] (node:zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:zlib", () => require("node:zlib"));

module.exports = mod;
}),
"[externals]/node:perf_hooks [external] (node:perf_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:perf_hooks", () => require("node:perf_hooks"));

module.exports = mod;
}),
"[externals]/node:util/types [external] (node:util/types, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util/types", () => require("node:util/types"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:worker_threads [external] (node:worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:worker_threads", () => require("node:worker_threads"));

module.exports = mod;
}),
"[externals]/node:http2 [external] (node:http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:http2", () => require("node:http2"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/node:console [external] (node:console, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:console", () => require("node:console"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:timers [external] (node:timers, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:timers", () => require("node:timers"));

module.exports = mod;
}),
"[externals]/node:dns [external] (node:dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:dns", () => require("node:dns"));

module.exports = mod;
}),
"[project]/lib/ai/providers.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROVIDERS",
    ()=>PROVIDERS,
    "getAllModels",
    ()=>getAllModels,
    "getModel",
    ()=>getModel,
    "getModelInfo",
    ()=>getModelInfo,
    "getProvider",
    ()=>getProvider,
    "parseModelString",
    ()=>parseModelString
]);
/**
 * Unified AI Provider Configuration
 *
 * Supports multiple AI providers through Vercel AI SDK:
 * - OpenAI (native)
 * - Anthropic Claude (native)
 * - Google Gemini (native)
 * - MiniMax (Anthropic-compatible, recommended by official)
 * - OpenAI-compatible providers (DeepSeek, Kimi, GLM, SiliconFlow, Doubao, etc.)
 *
 * Sources:
 * - https://platform.openai.com/docs/models
 * - https://platform.claude.com/docs/en/about-claude/models/overview
 * - https://ai.google.dev/gemini-api/docs/models
 * - https://api-docs.deepseek.com/quick_start/pricing
 * - https://platform.moonshot.cn/docs/pricing/chat
 * - https://platform.minimaxi.com/docs/guides/text-generation
 * - https://platform.minimaxi.com/docs/api-reference/text-anthropic-api
 * - https://docs.bigmodel.cn/cn/guide/start/model-overview
 * - https://help.aliyun.com/zh/model-studio/models (Qwen/DashScope)
 * - https://siliconflow.cn/models
 * - https://siliconflow.cn/pricing
 * - https://www.volcengine.com/docs/82379/1330310
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$3$2e$0$2e$41_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+openai@3.0.41_zod@4.3.6/node_modules/@ai-sdk/openai/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$anthropic$40$3$2e$0$2e$58_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$anthropic$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+anthropic@3.0.58_zod@4.3.6/node_modules/@ai-sdk/anthropic/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$google$40$3$2e$0$2e$43_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+google@3.0.43_zod@4.3.6/node_modules/@ai-sdk/google/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-route] (ecmascript)");
;
;
;
;
// NOTE: Do NOT import thinking-context.ts here — it uses node:async_hooks
// which is server-only, and this file is also used on the client via
// settings.ts. The thinking context is read from globalThis instead
// (set by thinking-context.ts at module load time on the server).
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLogger"])('AIProviders');
const PROVIDERS = {
    openai: {
        id: 'openai',
        name: 'OpenAI',
        type: 'openai',
        defaultBaseUrl: 'https://api.openai.com/v1',
        requiresApiKey: true,
        icon: '/logos/openai.svg',
        models: [
            {
                id: 'gpt-5.2',
                name: 'GPT-5.2',
                contextWindow: 400000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: true,
                        defaultEnabled: false
                    }
                }
            },
            {
                id: 'gpt-5.1',
                name: 'GPT-5.1',
                contextWindow: 400000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: true,
                        defaultEnabled: false
                    }
                }
            },
            {
                id: 'gpt-5',
                name: 'GPT-5',
                contextWindow: 400000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'gpt-5-mini',
                name: 'GPT-5-mini',
                contextWindow: 128000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'gpt-5-nano',
                name: 'GPT-5-nano',
                contextWindow: 128000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'gpt-4o',
                name: 'GPT-4o',
                contextWindow: 128000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'gpt-4o-mini',
                name: 'GPT-4o-mini',
                contextWindow: 128000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'gpt-4-turbo',
                name: 'GPT-4-turbo',
                contextWindow: 128000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'o4-mini',
                name: 'o4-mini',
                contextWindow: 200000,
                outputWindow: 100000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'o3',
                name: 'o3',
                contextWindow: 200000,
                outputWindow: 100000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'o3-mini',
                name: 'o3-mini',
                contextWindow: 200000,
                outputWindow: 100000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'o1',
                name: 'o1',
                contextWindow: 200000,
                outputWindow: 100000,
                capabilities: {
                    streaming: true,
                    tools: false,
                    vision: false,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            }
        ]
    },
    anthropic: {
        id: 'anthropic',
        name: 'Claude',
        type: 'anthropic',
        requiresApiKey: true,
        defaultBaseUrl: 'https://api.anthropic.com/v1',
        icon: '/logos/claude.svg',
        models: [
            {
                id: 'claude-opus-4-6',
                name: 'Claude Opus 4.6',
                contextWindow: 200000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: true,
                        defaultEnabled: false
                    }
                }
            },
            {
                id: 'claude-sonnet-4-6',
                name: 'Claude Sonnet 4.6',
                contextWindow: 200000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: true,
                        defaultEnabled: false
                    }
                }
            },
            {
                id: 'claude-sonnet-4-5',
                name: 'Claude Sonnet 4.5',
                contextWindow: 200000,
                outputWindow: 64000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: true,
                        defaultEnabled: false
                    }
                }
            },
            {
                id: 'claude-haiku-4-5',
                name: 'Claude Haiku 4.5',
                contextWindow: 200000,
                outputWindow: 64000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: true,
                        defaultEnabled: false
                    }
                }
            }
        ]
    },
    google: {
        id: 'google',
        name: 'Gemini',
        type: 'google',
        requiresApiKey: true,
        defaultBaseUrl: 'https://generativelanguage.googleapis.com/v1beta',
        icon: '/logos/gemini.svg',
        models: [
            {
                id: 'gemini-3.1-pro-preview',
                name: 'Gemini 3.1 Pro Preview',
                contextWindow: 1048576,
                outputWindow: 65536,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'gemini-3-flash-preview',
                name: 'Gemini 3 Flash Preview',
                contextWindow: 1048576,
                outputWindow: 65536,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'gemini-2.5-flash',
                name: 'Gemini 2.5 Flash',
                contextWindow: 1048576,
                outputWindow: 65536,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'gemini-2.5-flash-lite',
                name: 'Gemini 2.5 Flash Lite',
                contextWindow: 1048576,
                outputWindow: 65536,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: true,
                        defaultEnabled: false
                    }
                }
            },
            {
                id: 'gemini-2.5-pro',
                name: 'Gemini 2.5 Pro',
                contextWindow: 1048576,
                outputWindow: 65536,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            }
        ]
    },
    glm: {
        id: 'glm',
        name: 'GLM',
        type: 'openai',
        defaultBaseUrl: 'https://open.bigmodel.cn/api/paas/v4',
        requiresApiKey: true,
        icon: '/logos/glm.svg',
        models: [
            // GLM-5 Series - Latest flagship model
            {
                id: 'glm-5',
                name: 'GLM-5',
                contextWindow: 200000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            // GLM-4.7 Series
            {
                id: 'glm-4.7',
                name: 'GLM-4.7',
                contextWindow: 200000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'glm-4.7-flashx',
                name: 'GLM-4.7-FlashX',
                contextWindow: 200000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'glm-4.7-flash',
                name: 'GLM-4.7-Flash',
                contextWindow: 200000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            // GLM-4.6 Series - Advanced coding & reasoning
            {
                id: 'glm-4.6',
                name: 'GLM-4.6',
                contextWindow: 200000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'glm-4.6v',
                name: 'GLM-4.6V',
                contextWindow: 128000,
                outputWindow: 32000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'glm-4.6v-flash',
                name: 'GLM-4.6V-Flash',
                contextWindow: 128000,
                outputWindow: 32000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            // GLM-4.5 Series - Cost-effective models
            {
                id: 'glm-4.5-air',
                name: 'GLM-4.5-Air',
                contextWindow: 128000,
                outputWindow: 96000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'glm-4.5-airx',
                name: 'GLM-4.5-AirX',
                contextWindow: 128000,
                outputWindow: 96000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'glm-4.5-flash',
                name: 'GLM-4.5-Flash',
                contextWindow: 128000,
                outputWindow: 96000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'glm-4-long',
                name: 'GLM-4-Long',
                contextWindow: 1000000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            }
        ]
    },
    qwen: {
        id: 'qwen',
        name: 'Qwen',
        type: 'openai',
        defaultBaseUrl: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
        requiresApiKey: true,
        icon: '/logos/qwen.svg',
        models: [
            {
                id: 'qwen3.5-flash',
                name: 'Qwen3.5 Flash',
                contextWindow: 1000000,
                outputWindow: 65536,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'qwen3.5-plus',
                name: 'Qwen3.5 Plus',
                contextWindow: 1000000,
                outputWindow: 65536,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'qwen3-max',
                name: 'Qwen3 Max',
                contextWindow: 262144,
                outputWindow: 65536,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'qwen3-vl-plus',
                name: 'Qwen3 VL Plus',
                contextWindow: 262144,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            }
        ]
    },
    deepseek: {
        id: 'deepseek',
        name: 'DeepSeek',
        type: 'openai',
        defaultBaseUrl: 'https://api.deepseek.com/v1',
        requiresApiKey: true,
        icon: '/logos/deepseek.svg',
        models: [
            {
                id: 'deepseek-chat',
                name: 'DeepSeek-Chat',
                contextWindow: 128000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: false,
                        defaultEnabled: false
                    }
                }
            },
            {
                id: 'deepseek-reasoner',
                name: 'DeepSeek-Reasoner',
                contextWindow: 128000,
                outputWindow: 32000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: false,
                        defaultEnabled: true
                    }
                }
            }
        ]
    },
    kimi: {
        id: 'kimi',
        name: 'Kimi',
        type: 'openai',
        defaultBaseUrl: 'https://api.moonshot.cn/v1',
        requiresApiKey: true,
        icon: '/logos/kimi.png',
        models: [
            // K2.5 Series (2026) - 1T MoE, 32B active parameters
            {
                id: 'kimi-k2.5',
                name: 'Kimi K2.5',
                contextWindow: 256000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: false,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'kimi-k2-0905-preview',
                name: 'Kimi K2 0905 Preview',
                contextWindow: 256000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'kimi-k2-thinking',
                name: 'Kimi K2 Thinking',
                contextWindow: 256000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: false,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'kimi-k2-turbo-preview',
                name: 'Kimi K2 Turbo Preview',
                contextWindow: 256000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'moonshot-v1-128k',
                name: 'Moonshot V1 128K',
                contextWindow: 128000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'moonshot-v1-32k',
                name: 'Moonshot V1 32K',
                contextWindow: 32000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'moonshot-v1-8k',
                name: 'Moonshot V1 8K',
                contextWindow: 8000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            }
        ]
    },
    minimax: {
        id: 'minimax',
        name: 'MiniMax',
        type: 'anthropic',
        defaultBaseUrl: 'https://api.minimaxi.com/anthropic/v1',
        requiresApiKey: true,
        icon: '/logos/minimax.svg',
        models: [
            {
                id: 'MiniMax-M2',
                name: 'MiniMax M2',
                contextWindow: 204800,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'MiniMax-M2.1',
                name: 'MiniMax M2.1',
                contextWindow: 204800,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'MiniMax-M2.1-highspeed',
                name: 'MiniMax M2.1 Highspeed',
                contextWindow: 204800,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'MiniMax-M2.5',
                name: 'MiniMax M2.5',
                contextWindow: 204800,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'MiniMax-M2.5-highspeed',
                name: 'MiniMax M2.5 Highspeed',
                contextWindow: 204800,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'MiniMax-M2.7',
                name: 'MiniMax M2.7',
                contextWindow: 204800,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'MiniMax-M2.7-highspeed',
                name: 'MiniMax M2.7 Highspeed',
                contextWindow: 204800,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            }
        ]
    },
    siliconflow: {
        id: 'siliconflow',
        name: '硅基流动',
        type: 'openai',
        defaultBaseUrl: 'https://api.siliconflow.cn/v1',
        requiresApiKey: true,
        icon: '/logos/siliconflow.svg',
        models: [
            // DeepSeek Series
            {
                id: 'deepseek-ai/DeepSeek-V3.2',
                name: 'DeepSeek-V3.2',
                contextWindow: 128000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'deepseek-ai/DeepSeek-V3',
                name: 'DeepSeek-V3',
                contextWindow: 128000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'deepseek-ai/DeepSeek-R1',
                name: 'DeepSeek-R1',
                contextWindow: 128000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-7B',
                name: 'DeepSeek-R1-Distill-Qwen-7B',
                contextWindow: 128000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            // Qwen Series
            {
                id: 'Qwen/Qwen2.5-72B-Instruct',
                name: 'Qwen2.5-72B-Instruct',
                contextWindow: 128000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'Qwen/Qwen2.5-Coder-7B-Instruct',
                name: 'Qwen2.5-Coder-7B-Instruct',
                contextWindow: 128000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'Qwen/Qwen2.5-7B-Instruct',
                name: 'Qwen2.5-7B-Instruct',
                contextWindow: 128000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'Qwen/Qwen3-VL-32B-Instruct',
                name: 'Qwen3-VL-32B-Instruct',
                contextWindow: 256000,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            // MiniMax Series
            {
                id: 'MiniMaxAI/MiniMax-M2',
                name: 'MiniMax-M2',
                contextWindow: 204800,
                outputWindow: 131072,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            // Kimi Series
            {
                id: 'Pro/moonshotai/Kimi-K2.5',
                name: 'Kimi-K2.5',
                contextWindow: 256000,
                outputWindow: 96000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            // GLM Series
            {
                id: 'THUDM/GLM-Z1-Rumination-32B-0414',
                name: 'GLM-Z1-Rumination-32B',
                contextWindow: 32000,
                outputWindow: 16384,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'THUDM/GLM-4.1V-9B-Thinking',
                name: 'GLM-4.1V-9B-Thinking',
                contextWindow: 64000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            }
        ]
    },
    doubao: {
        id: 'doubao',
        name: '豆包',
        type: 'openai',
        defaultBaseUrl: 'https://ark.cn-beijing.volces.com/api/v3',
        requiresApiKey: true,
        icon: '/logos/doubao.svg',
        models: [
            {
                id: 'doubao-seed-2-0-pro-260215',
                name: 'Doubao Seed 2.0 Pro',
                contextWindow: 128000,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'doubao-seed-2-0-lite-260215',
                name: 'Doubao Seed 2.0 Lite',
                contextWindow: 128000,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'doubao-seed-2-0-mini-260215',
                name: 'Doubao Seed 2.0 Mini',
                contextWindow: 128000,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'doubao-seed-1-8-251228',
                name: 'Doubao Seed 1.8',
                contextWindow: 128000,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            }
        ]
    },
    grok: {
        id: 'grok',
        name: 'Grok',
        type: 'openai',
        defaultBaseUrl: 'https://api.x.ai/v1',
        requiresApiKey: true,
        icon: '/logos/grok.svg',
        models: [
            {
                id: 'grok-4.20-beta-0309-reasoning',
                name: 'Grok 4.20 Reasoning',
                contextWindow: 2000000,
                outputWindow: 131072,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: false,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'grok-4.20-beta-0309-non-reasoning',
                name: 'Grok 4.20',
                contextWindow: 2000000,
                outputWindow: 131072,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'grok-code-fast-1',
                name: 'Grok Code Fast',
                contextWindow: 256000,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'grok-4-fast-reasoning',
                name: 'Grok 4 Fast Reasoning',
                contextWindow: 2000000,
                outputWindow: 131072,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: false,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'grok-4-fast-non-reasoning',
                name: 'Grok 4 Fast',
                contextWindow: 2000000,
                outputWindow: 131072,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'grok-4-1-fast-reasoning',
                name: 'Grok 4.1 Fast Reasoning',
                contextWindow: 2000000,
                outputWindow: 131072,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: false,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'grok-4-1-fast-non-reasoning',
                name: 'Grok 4.1 Fast',
                contextWindow: 2000000,
                outputWindow: 131072,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'grok-4-0709',
                name: 'Grok 4',
                contextWindow: 256000,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'grok-3',
                name: 'Grok 3',
                contextWindow: 131072,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'grok-3-mini',
                name: 'Grok 3 Mini',
                contextWindow: 131072,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            }
        ]
    }
};
/**
 * Get provider config (from built-in or unified config in localStorage)
 */ function getProviderConfig(providerId) {
    // Check built-in providers first
    if (PROVIDERS[providerId]) {
        return PROVIDERS[providerId];
    }
    // Check unified providersConfig in localStorage (browser only)
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return null;
}
/**
 * Return vendor-specific body params to inject for OpenAI-compatible providers.
 * Called from the custom fetch wrapper inside getModel().
 */ function getCompatThinkingBodyParams(providerId, config) {
    if (config.enabled === false) {
        switch(providerId){
            // Kimi / DeepSeek / GLM use { thinking: { type: "disabled" } }
            case 'kimi':
            case 'deepseek':
            case 'glm':
                return {
                    thinking: {
                        type: 'disabled'
                    }
                };
            // Qwen / SiliconFlow use { enable_thinking: false }
            case 'qwen':
            case 'siliconflow':
                return {
                    enable_thinking: false
                };
            default:
                return undefined;
        }
    }
    if (config.enabled === true) {
        switch(providerId){
            case 'kimi':
            case 'deepseek':
            case 'glm':
                return {
                    thinking: {
                        type: 'enabled'
                    }
                };
            case 'qwen':
            case 'siliconflow':
                return {
                    enable_thinking: true
                };
            default:
                return undefined;
        }
    }
    return undefined;
}
function normalizeMiniMaxAnthropicBaseUrl(providerId, baseUrl) {
    if (providerId !== 'minimax' || !baseUrl) {
        return baseUrl;
    }
    const trimmed = baseUrl.replace(/\/$/, '');
    if (trimmed.endsWith('/anthropic/v1')) {
        return trimmed;
    }
    if (trimmed.endsWith('/anthropic')) {
        return `${trimmed}/v1`;
    }
    return `${trimmed}/anthropic/v1`;
}
function getModel(config) {
    // Get provider type and requiresApiKey, with fallback to registry
    let providerType = config.providerType;
    let requiresApiKey = config.requiresApiKey ?? true;
    if (!providerType) {
        const provider = getProviderConfig(config.providerId);
        if (provider) {
            providerType = provider.type;
            requiresApiKey = provider.requiresApiKey;
        } else {
            throw new Error(`Unknown provider: ${config.providerId}. Please provide providerType.`);
        }
    }
    // Validate API key if required
    if (requiresApiKey && !config.apiKey) {
        throw new Error(`API key required for provider: ${config.providerId}`);
    }
    // Use provided API key, or empty string for providers that don't require one
    const effectiveApiKey = config.apiKey || '';
    // Resolve base URL: explicit > provider default > SDK default
    const provider = getProviderConfig(config.providerId);
    const effectiveBaseUrl = normalizeMiniMaxAnthropicBaseUrl(config.providerId, config.baseUrl || provider?.defaultBaseUrl || undefined);
    let model;
    switch(providerType){
        case 'openai':
            {
                const openaiOptions = {
                    apiKey: effectiveApiKey,
                    baseURL: effectiveBaseUrl
                };
                // For OpenAI-compatible providers (not native OpenAI), add a fetch
                // wrapper that injects vendor-specific thinking params into the HTTP
                // body. The thinking config is read from AsyncLocalStorage, set by
                // callLLM / streamLLM at call time.
                if (config.providerId !== 'openai') {
                    const providerId = config.providerId;
                    openaiOptions.fetch = async (url, init)=>{
                        // Read thinking config from globalThis (set by thinking-context.ts)
                        const thinkingCtx = globalThis.__thinkingContext;
                        const thinking = thinkingCtx?.getStore?.();
                        if (thinking && init?.body && typeof init.body === 'string') {
                            const extra = getCompatThinkingBodyParams(providerId, thinking);
                            if (extra) {
                                try {
                                    const body = JSON.parse(init.body);
                                    Object.assign(body, extra);
                                    init = {
                                        ...init,
                                        body: JSON.stringify(body)
                                    };
                                } catch  {
                                /* leave body as-is */ }
                            }
                        }
                        return globalThis.fetch(url, init);
                    };
                }
                const openai = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$3$2e$0$2e$41_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createOpenAI"])(openaiOptions);
                model = openai.chat(config.modelId);
                break;
            }
        case 'anthropic':
            {
                const anthropic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$anthropic$40$3$2e$0$2e$58_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$anthropic$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAnthropic"])({
                    apiKey: effectiveApiKey,
                    baseURL: effectiveBaseUrl
                });
                model = anthropic.chat(config.modelId);
                break;
            }
        case 'google':
            {
                const googleOptions = {
                    apiKey: effectiveApiKey,
                    baseURL: effectiveBaseUrl
                };
                if (config.proxy) {
                    // Dynamic require to avoid bundling undici on the client side
                    // eslint-disable-next-line @typescript-eslint/no-require-imports
                    const { ProxyAgent, fetch: undiciFetch } = __turbopack_context__.r("[project]/node_modules/.pnpm/undici@7.22.0/node_modules/undici/index.js [app-route] (ecmascript)");
                    const agent = new ProxyAgent(config.proxy);
                    googleOptions.fetch = (input, init)=>undiciFetch(input, {
                            ...init,
                            dispatcher: agent
                        }).then((r)=>r);
                }
                const google = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$google$40$3$2e$0$2e$43_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGoogleGenerativeAI"])(googleOptions);
                model = google.chat(config.modelId);
                break;
            }
        default:
            throw new Error(`Unsupported provider type: ${providerType}`);
    }
    // Look up model info from the provider registry
    const modelInfo = provider?.models.find((m)=>m.id === config.modelId) || null;
    return {
        model,
        modelInfo
    };
}
function parseModelString(modelString) {
    // Split only on the first colon to handle model IDs that contain colons
    const colonIndex = modelString.indexOf(':');
    if (colonIndex > 0) {
        return {
            providerId: modelString.slice(0, colonIndex),
            modelId: modelString.slice(colonIndex + 1)
        };
    }
    // Default to OpenAI for backward compatibility
    return {
        providerId: 'openai',
        modelId: modelString
    };
}
function getAllModels() {
    return Object.values(PROVIDERS).map((provider)=>({
            provider,
            models: provider.models
        }));
}
function getProvider(providerId) {
    return PROVIDERS[providerId];
}
function getModelInfo(providerId, modelId) {
    const provider = PROVIDERS[providerId];
    return provider?.models.find((m)=>m.id === modelId);
}
}),
"[project]/lib/ai/thinking-context.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "thinkingContext",
    ()=>thinkingContext
]);
/**
 * Async-context carrier for per-request ThinkingConfig.
 *
 * callLLM / streamLLM wrap each AI SDK call in thinkingContext.run()
 * so that the custom fetch wrapper in providers.ts can read the
 * current thinking preference and inject vendor-specific body params.
 *
 * IMPORTANT: This module uses node:async_hooks which is server-only.
 * providers.ts must NOT import this module directly (it's also used
 * on the client via settings.ts). Instead, providers.ts reads the
 * context via globalThis.__thinkingContext, which is set here at
 * module load time and guaranteed to be available before any fetch
 * wrapper runs.
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$async_hooks__$5b$external$5d$__$28$node$3a$async_hooks$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:async_hooks [external] (node:async_hooks, cjs)");
;
const thinkingContext = new __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$async_hooks__$5b$external$5d$__$28$node$3a$async_hooks$2c$__cjs$29$__["AsyncLocalStorage"]();
// Expose on globalThis so providers.ts can access the store without
// importing this module (which would pull node:async_hooks into the
// client bundle via the settings.ts → providers.ts import chain).
globalThis.__thinkingContext = thinkingContext;
}),
"[project]/lib/ai/llm.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "callLLM",
    ()=>callLLM,
    "streamLLM",
    ()=>streamLLM
]);
/**
 * Unified LLM Call Layer
 *
 * All LLM interactions should go through callLLM / streamLLM.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$116_zod$40$4$2e$3$2e$6$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ai@6.0.116_zod@4.3.6/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$providers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai/providers.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$thinking$2d$context$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai/thinking-context.ts [app-route] (ecmascript)");
;
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLogger"])('LLM');
function _extractRequestInfo(params) {
    const tools = params.tools ? Object.keys(params.tools) : undefined;
    const p = params;
    return {
        system: p.system,
        prompt: p.prompt,
        messages: p.messages,
        tools,
        maxOutputTokens: p.maxOutputTokens
    };
}
function getModelId(params) {
    const m = params.model;
    if (typeof m === 'string') return m;
    if (m && typeof m === 'object' && 'modelId' in m) return m.modelId;
    return 'unknown';
}
/** Model ID → provider type + thinking capability (built once at module load) */ const MODEL_THINKING_MAP = (()=>{
    const map = new Map();
    for (const provider of Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$providers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PROVIDERS"])){
        for (const model of provider.models){
            map.set(model.id, {
                providerType: provider.type,
                thinking: model.capabilities?.thinking
            });
        }
    }
    return map;
})();
/** Global thinking override from environment variable */ function getGlobalThinkingConfig() {
    if (process.env.LLM_THINKING_DISABLED === 'true') {
        return {
            enabled: false
        };
    }
    return undefined;
}
/**
 * Build providerOptions to disable thinking, using the lowest possible
 * intensity for models that cannot be fully turned off.
 */ function buildDisableThinking(modelId, providerType, _thinking) {
    switch(providerType){
        case 'openai':
            {
                // GPT-5.1/5.2: support effort=none (fully off)
                // GPT-5/mini/nano: lowest is minimal
                // o-series: lowest is low
                let effort;
                if (modelId.startsWith('gpt-5.')) {
                    effort = 'none';
                } else if (modelId.startsWith('gpt-5')) {
                    effort = 'minimal';
                } else if (modelId.startsWith('o')) {
                    effort = 'low';
                } else {
                    // Non-thinking OpenAI models (gpt-4o etc.) — no injection needed
                    return undefined;
                }
                if (!_thinking.toggleable && effort !== 'none') {
                    log.info(`[thinking-adapter] Model ${modelId} cannot fully disable thinking, using effort=${effort}`);
                }
                return {
                    openai: {
                        reasoningEffort: effort
                    }
                };
            }
        case 'anthropic':
            // All Claude models support type=disabled
            return {
                anthropic: {
                    thinking: {
                        type: 'disabled'
                    }
                }
            };
        case 'google':
            {
                // Gemini 3.x: uses thinkingLevel (cannot fully disable)
                // Gemini 2.5 Flash/Flash-Lite: uses thinkingBudget=0 (fully off)
                // Gemini 2.5 Pro: minimum thinkingBudget=128 (cannot fully disable)
                if (modelId.startsWith('gemini-3')) {
                    const level = modelId.includes('flash') ? 'minimal' : 'low';
                    log.info(`[thinking-adapter] Model ${modelId} cannot fully disable thinking, using thinkingLevel=${level}`);
                    return {
                        google: {
                            thinkingConfig: {
                                thinkingLevel: level
                            }
                        }
                    };
                }
                if (modelId === 'gemini-2.5-pro') {
                    log.info(`[thinking-adapter] Model ${modelId} cannot fully disable thinking, using thinkingBudget=128`);
                    return {
                        google: {
                            thinkingConfig: {
                                thinkingBudget: 128
                            }
                        }
                    };
                }
                // gemini-2.5-flash / flash-lite: can fully disable
                return {
                    google: {
                        thinkingConfig: {
                            thinkingBudget: 0
                        }
                    }
                };
            }
        default:
            return undefined;
    }
}
/**
 * Build providerOptions to enable thinking, optionally with a budget hint.
 */ function buildEnableThinking(modelId, providerType, _thinking, budgetTokens) {
    switch(providerType){
        case 'openai':
            // OpenAI uses discrete effort levels, no token-based budget.
            // Don't inject anything — let the model use its default effort.
            return undefined;
        case 'anthropic':
            {
                // 4.6 models: prefer adaptive (model decides depth automatically)
                // 4.5 models: require explicit budget
                if (modelId.includes('4-6')) {
                    if (budgetTokens !== undefined) {
                        return {
                            anthropic: {
                                thinking: {
                                    type: 'enabled',
                                    budgetTokens
                                }
                            }
                        };
                    }
                    return {
                        anthropic: {
                            thinking: {
                                type: 'adaptive'
                            }
                        }
                    };
                }
                // Sonnet 4.5 / Haiku 4.5: must use enabled + budgetTokens
                const budget = budgetTokens ?? 10240; // sensible default
                return {
                    anthropic: {
                        thinking: {
                            type: 'enabled',
                            budgetTokens: Math.max(1024, budget)
                        }
                    }
                };
            }
        case 'google':
            {
                // Gemini 3.x: uses thinkingLevel (no numeric budget)
                if (modelId.startsWith('gemini-3')) {
                    return {
                        google: {
                            thinkingConfig: {
                                thinkingLevel: 'high'
                            }
                        }
                    };
                }
                // Gemini 2.5: uses thinkingBudget
                if (budgetTokens !== undefined) {
                    const min = modelId === 'gemini-2.5-pro' ? 128 : 0;
                    return {
                        google: {
                            thinkingConfig: {
                                thinkingBudget: Math.max(min, Math.min(24576, budgetTokens))
                            }
                        }
                    };
                }
                // No budget specified — let model use dynamic default
                return undefined;
            }
        default:
            return undefined;
    }
}
/**
 * Map a unified ThinkingConfig to provider-specific providerOptions.
 */ function buildThinkingProviderOptions(modelId, config) {
    const info = MODEL_THINKING_MAP.get(modelId);
    if (!info?.thinking) return undefined; // model has no thinking capability
    if (config.enabled === undefined) return undefined; // use model default
    if (config.enabled === false) {
        return buildDisableThinking(modelId, info.providerType, info.thinking);
    }
    // enabled === true
    return buildEnableThinking(modelId, info.providerType, info.thinking, config.budgetTokens);
}
/**
 * Default providerOptions for specific models (fallback when no ThinkingConfig is provided).
 * Gemini 3.x models use thinkingLevel instead of thinkingBudget.
 */ function getDefaultProviderOptions(modelId) {
    if (modelId === 'gemini-3.1-pro-preview') {
        return {
            google: {
                thinkingConfig: {
                    thinkingLevel: 'high'
                }
            }
        };
    }
    return undefined;
}
/**
 * Inject provider-specific thinking options into LLM call params.
 *
 * For native providers (OpenAI/Anthropic/Google), this sets providerOptions.
 * For OpenAI-compatible providers, providerOptions won't work (stripped by
 * zod schema) — those are handled by the custom fetch wrapper via thinkingContext.
 *
 * Priority: caller's providerOptions > ThinkingConfig > model defaults
 */ function injectProviderOptions(params, thinking) {
    if (params.providerOptions) return params; // caller explicitly set providerOptions
    const modelId = getModelId(params);
    if (thinking) {
        const opts = buildThinkingProviderOptions(modelId, thinking);
        if (opts) return {
            ...params,
            providerOptions: opts
        };
    }
    // No thinking config — use model defaults (backward compat)
    const defaults = getDefaultProviderOptions(modelId);
    if (defaults) return {
        ...params,
        providerOptions: defaults
    };
    return params;
}
const DEFAULT_VALIDATE = (text)=>text.trim().length > 0;
async function callLLM(params, source, retryOptions, thinking) {
    const maxAttempts = (retryOptions?.retries ?? 0) + 1;
    const validate = retryOptions?.validate ?? (maxAttempts > 1 ? DEFAULT_VALIDATE : undefined);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lastResult;
    let lastError;
    for(let attempt = 1; attempt <= maxAttempts; attempt++){
        try {
            // Resolve effective thinking config: per-call > global env > undefined
            const effectiveThinking = thinking ?? getGlobalThinkingConfig();
            const injectedParams = injectProviderOptions(params, effectiveThinking);
            // Wrap in thinkingContext so the custom fetch wrapper in providers.ts
            // can read the config and inject vendor-specific body params for
            // OpenAI-compatible providers.
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$thinking$2d$context$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["thinkingContext"].run(effectiveThinking, ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$116_zod$40$4$2e$3$2e$6$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])(injectedParams));
            // Validate result (only when retries are configured)
            if (validate && !validate(result.text)) {
                log.warn(`[${source}] Validation failed (attempt ${attempt}/${maxAttempts}), ${attempt < maxAttempts ? 'retrying...' : 'giving up'}`);
                lastResult = result;
                continue;
            }
            return result;
        } catch (error) {
            lastError = error;
            if (attempt < maxAttempts) {
                log.warn(`[${source}] Call failed (attempt ${attempt}/${maxAttempts}), retrying...`, error);
                continue;
            }
        }
    }
    // All attempts exhausted — return last result or throw last error
    if (lastResult) return lastResult;
    throw lastError;
}
function streamLLM(params, source, thinking) {
    // Resolve effective thinking config and wrap in thinkingContext
    const effectiveThinking = thinking ?? getGlobalThinkingConfig();
    const injectedParams = injectProviderOptions(params, effectiveThinking);
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$thinking$2d$context$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["thinkingContext"].run(effectiveThinking, ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$116_zod$40$4$2e$3$2e$6$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamText"])(injectedParams));
    return result;
}
}),
"[project]/lib/generation/prompt-formatters.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Prompt and context building utilities for the generation pipeline.
 */ __turbopack_context__.s([
    "buildCourseContext",
    ()=>buildCourseContext,
    "buildVisionUserContent",
    ()=>buildVisionUserContent,
    "formatAgentsForPrompt",
    ()=>formatAgentsForPrompt,
    "formatImageDescription",
    ()=>formatImageDescription,
    "formatImagePlaceholder",
    ()=>formatImagePlaceholder,
    "formatTeacherPersonaForPrompt",
    ()=>formatTeacherPersonaForPrompt
]);
function buildCourseContext(ctx) {
    if (!ctx) return '';
    const lines = [];
    // Course outline with position marker
    lines.push('Course Outline:');
    ctx.allTitles.forEach((t, i)=>{
        const marker = i === ctx.pageIndex - 1 ? ' ← current' : '';
        lines.push(`  ${i + 1}. ${t}${marker}`);
    });
    // Position information
    lines.push('');
    lines.push('IMPORTANT: All pages belong to the SAME class session. Do NOT greet again after the first page. When referencing content from earlier pages, say "we just covered" or "as mentioned on page N" — NEVER say "last class" or "previous session" because there is no previous session.');
    lines.push('');
    if (ctx.pageIndex === 1) {
        lines.push('Position: This is the FIRST page. Open with a greeting and course introduction.');
    } else if (ctx.pageIndex === ctx.totalPages) {
        lines.push('Position: This is the LAST page. Conclude the course with a summary and closing.');
        lines.push('Transition: Continue naturally from the previous page. Do NOT greet or re-introduce.');
    } else {
        lines.push(`Position: Page ${ctx.pageIndex} of ${ctx.totalPages} (middle of the course).`);
        lines.push('Transition: Continue naturally from the previous page. Do NOT greet or re-introduce.');
    }
    // Previous page speech for transition reference
    if (ctx.previousSpeeches.length > 0) {
        lines.push('');
        lines.push('Previous page speech (for transition reference):');
        const lastSpeech = ctx.previousSpeeches[ctx.previousSpeeches.length - 1];
        lines.push(`  "...${lastSpeech.slice(-150)}"`);
    }
    return lines.join('\n');
}
function formatAgentsForPrompt(agents) {
    if (!agents || agents.length === 0) return '';
    const lines = [
        'Classroom Agents:'
    ];
    for (const a of agents){
        const personaPart = a.persona ? ` — ${a.persona}` : '';
        lines.push(`- id: "${a.id}", name: "${a.name}", role: ${a.role}${personaPart}`);
    }
    return lines.join('\n');
}
function formatTeacherPersonaForPrompt(agents) {
    if (!agents || agents.length === 0) return '';
    const teacher = agents.find((a)=>a.role === 'teacher');
    if (!teacher?.persona) return '';
    return `Teacher Persona:\nName: ${teacher.name}\n${teacher.persona}\n\nAdapt the content style and tone to match this teacher's personality. IMPORTANT: The teacher's name and identity must NOT appear on the slides — no "Teacher ${teacher.name}'s tips", no "Teacher's message", etc. Slides should read as neutral, professional visual aids.`;
}
function formatImageDescription(img, language) {
    let dimInfo = '';
    if (img.width && img.height) {
        const ratio = (img.width / img.height).toFixed(2);
        dimInfo = ` | 尺寸: ${img.width}×${img.height} (宽高比${ratio})`;
    }
    const desc = img.description ? ` | ${img.description}` : '';
    return language === 'zh-CN' ? `- **${img.id}**: 来自PDF第${img.pageNumber}页${dimInfo}${desc}` : `- **${img.id}**: from PDF page ${img.pageNumber}${dimInfo}${desc}`;
}
function formatImagePlaceholder(img, language) {
    let dimInfo = '';
    if (img.width && img.height) {
        const ratio = (img.width / img.height).toFixed(2);
        dimInfo = ` | 尺寸: ${img.width}×${img.height} (宽高比${ratio})`;
    }
    return language === 'zh-CN' ? `- **${img.id}**: PDF第${img.pageNumber}页的图片${dimInfo} [参见附图]` : `- **${img.id}**: image from PDF page ${img.pageNumber}${dimInfo} [see attached]`;
}
function buildVisionUserContent(userPrompt, images) {
    const parts = [
        {
            type: 'text',
            text: userPrompt
        }
    ];
    if (images.length > 0) {
        parts.push({
            type: 'text',
            text: '\n\n--- Attached Images ---'
        });
        for (const img of images){
            let dimInfo = '';
            if (img.width && img.height) {
                const ratio = (img.width / img.height).toFixed(2);
                dimInfo = ` (${img.width}×${img.height}, 宽高比${ratio})`;
            }
            parts.push({
                type: 'text',
                text: `\n**${img.id}**${dimInfo}:`
            });
            // Strip data URI prefix — AI SDK only accepts http(s) URLs or raw base64
            const dataUriMatch = img.src.match(/^data:([^;]+);base64,(.+)$/);
            if (dataUriMatch) {
                parts.push({
                    type: 'image',
                    image: dataUriMatch[2],
                    mimeType: dataUriMatch[1]
                });
            } else {
                parts.push({
                    type: 'image',
                    image: img.src
                });
            }
        }
    }
    return parts;
}
}),
"[project]/lib/generation/json-repair.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseJsonResponse",
    ()=>parseJsonResponse,
    "tryParseJson",
    ()=>tryParseJson
]);
/**
 * JSON parsing with fallback strategies for AI-generated responses.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jsonrepair$40$3$2e$13$2e$3$2f$node_modules$2f$jsonrepair$2f$lib$2f$esm$2f$regular$2f$jsonrepair$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jsonrepair@3.13.3/node_modules/jsonrepair/lib/esm/regular/jsonrepair.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-route] (ecmascript)");
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLogger"])('Generation');
function parseJsonResponse(response) {
    // Strategy 1: Try to extract JSON from markdown code blocks (may have multiple)
    const codeBlockMatches = response.matchAll(/```(?:json)?\s*([\s\S]*?)```/g);
    for (const match of codeBlockMatches){
        const extracted = match[1].trim();
        // Only try if it looks like JSON (starts with { or [)
        if (extracted.startsWith('{') || extracted.startsWith('[')) {
            const result = tryParseJson(extracted);
            if (result !== null) {
                log.debug('Successfully parsed JSON from code block');
                return result;
            }
        }
    }
    // Strategy 2: Try to find JSON structure directly in response (no code block)
    // Look for array or object start
    const jsonStartArray = response.indexOf('[');
    const jsonStartObject = response.indexOf('{');
    if (jsonStartArray !== -1 || jsonStartObject !== -1) {
        // Prefer the structure that appears first
        const startIndex = jsonStartArray === -1 ? jsonStartObject : jsonStartObject === -1 ? jsonStartArray : Math.min(jsonStartArray, jsonStartObject);
        // Find the matching close bracket
        let depth = 0;
        let endIndex = -1;
        let inString = false;
        let escapeNext = false;
        for(let i = startIndex; i < response.length; i++){
            const char = response[i];
            if (escapeNext) {
                escapeNext = false;
                continue;
            }
            if (char === '\\' && inString) {
                escapeNext = true;
                continue;
            }
            if (char === '"' && !escapeNext) {
                inString = !inString;
                continue;
            }
            if (!inString) {
                if (char === '[' || char === '{') depth++;
                else if (char === ']' || char === '}') {
                    depth--;
                    if (depth === 0) {
                        endIndex = i;
                        break;
                    }
                }
            }
        }
        if (endIndex !== -1) {
            const jsonStr = response.substring(startIndex, endIndex + 1);
            const result = tryParseJson(jsonStr);
            if (result !== null) {
                log.debug('Successfully parsed JSON from response body');
                return result;
            }
        }
    }
    // Strategy 3: Last resort - try the whole response
    const result = tryParseJson(response.trim());
    if (result !== null) {
        log.debug('Successfully parsed raw response as JSON');
        return result;
    }
    log.error('Failed to parse JSON from response');
    log.error('Raw response (first 500 chars):', response.substring(0, 500));
    return null;
}
function tryParseJson(jsonStr) {
    // Attempt 1: Try parsing as-is
    try {
        return JSON.parse(jsonStr);
    } catch  {
    // Continue to fix attempts
    }
    // Attempt 2: Fix common JSON issues from AI responses
    try {
        let fixed = jsonStr;
        // Fix 1: Handle LaTeX-style escapes that break JSON (e.g., \frac, \left, \right, \times, etc.)
        // These are common in math content and need to be double-escaped
        // Match backslash followed by letters (LaTeX commands) inside strings
        fixed = fixed.replace(/"([^"]*?)"/g, (_match, content)=>{
            // Double-escape any backslash followed by a letter (except valid JSON escapes)
            const fixedContent = content.replace(/\\([a-zA-Z])/g, '\\\\$1');
            return `"${fixedContent}"`;
        });
        // Fix 2: Fix other invalid escape sequences (e.g., \S, \L, etc.)
        // Valid JSON escapes: \", \\, \/, \b, \f, \n, \r, \t, \uXXXX
        fixed = fixed.replace(/\\([^"\\\/bfnrtu\n\r])/g, (match, char)=>{
            // If it's a letter, it's likely a LaTeX command
            if (/[a-zA-Z]/.test(char)) {
                return '\\\\' + char;
            }
            return match;
        });
        // Fix 3: Try to fix truncated JSON arrays/objects
        const trimmed = fixed.trim();
        if (trimmed.startsWith('[') && !trimmed.endsWith(']')) {
            const lastCompleteObj = fixed.lastIndexOf('}');
            if (lastCompleteObj > 0) {
                fixed = fixed.substring(0, lastCompleteObj + 1) + ']';
                log.warn('Fixed truncated JSON array');
            }
        } else if (trimmed.startsWith('{') && !trimmed.endsWith('}')) {
            // Try to close incomplete object
            const openBraces = (fixed.match(/{/g) || []).length;
            const closeBraces = (fixed.match(/}/g) || []).length;
            if (openBraces > closeBraces) {
                fixed += '}'.repeat(openBraces - closeBraces);
                log.warn('Fixed truncated JSON object');
            }
        }
        return JSON.parse(fixed);
    } catch  {
    // Continue to next attempt
    }
    // Attempt 3: Use jsonrepair to fix malformed JSON (e.g. unescaped quotes in Chinese text)
    try {
        const repaired = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jsonrepair$40$3$2e$13$2e$3$2f$node_modules$2f$jsonrepair$2f$lib$2f$esm$2f$regular$2f$jsonrepair$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonrepair"])(jsonStr);
        return JSON.parse(repaired);
    } catch  {
    // Continue to next attempt
    }
    // Attempt 4: More aggressive fixing - remove control characters
    try {
        let fixed = jsonStr;
        // Remove or escape control characters
        fixed = fixed.replace(/[\x00-\x1F\x7F]/g, (char)=>{
            switch(char){
                case '\n':
                    return '\\n';
                case '\r':
                    return '\\r';
                case '\t':
                    return '\\t';
                default:
                    return '';
            }
        });
        return JSON.parse(fixed);
    } catch  {
        return null;
    }
}
}),
"[project]/lib/constants/generation.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Constants for PDF content generation
 * Shared between client and server code
 */ // PDF content truncation limit (characters)
__turbopack_context__.s([
    "MAX_PDF_CONTENT_CHARS",
    ()=>MAX_PDF_CONTENT_CHARS,
    "MAX_VISION_IMAGES",
    ()=>MAX_VISION_IMAGES
]);
const MAX_PDF_CONTENT_CHARS = 50000;
const MAX_VISION_IMAGES = 20;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/lib/generation/prompts/loader.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildPrompt",
    ()=>buildPrompt,
    "clearPromptCache",
    ()=>clearPromptCache,
    "interpolateVariables",
    ()=>interpolateVariables,
    "loadPrompt",
    ()=>loadPrompt,
    "loadSnippet",
    ()=>loadSnippet
]);
/**
 * Prompt Loader - Loads prompts from markdown files
 *
 * Supports:
 * - Loading prompts from templates/{promptId}/ directory
 * - Snippet inclusion via {{snippet:name}} syntax
 * - Variable interpolation via {{variable}} syntax
 * - Caching for performance
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-route] (ecmascript)");
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLogger"])('PromptLoader');
// Cache for loaded prompts and snippets
const promptCache = new Map();
const snippetCache = new Map();
/**
 * Get the prompts directory path
 */ function getPromptsDir() {
    // In Next.js, use process.cwd() for the project root
    return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'lib', 'generation', 'prompts');
}
function loadSnippet(snippetId) {
    const cached = snippetCache.get(snippetId);
    if (cached) return cached;
    const snippetPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(getPromptsDir(), 'snippets', `${snippetId}.md`);
    try {
        const content = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(snippetPath, 'utf-8').trim();
        snippetCache.set(snippetId, content);
        return content;
    } catch  {
        log.warn(`Snippet not found: ${snippetId}`);
        return `{{snippet:${snippetId}}}`;
    }
}
/**
 * Process snippet includes in a template
 * Replaces {{snippet:name}} with actual snippet content
 */ function processSnippets(template) {
    return template.replace(/\{\{snippet:(\w[\w-]*)\}\}/g, (_, snippetId)=>{
        return loadSnippet(snippetId);
    });
}
function loadPrompt(promptId) {
    const cached = promptCache.get(promptId);
    if (cached) return cached;
    const promptDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(getPromptsDir(), 'templates', promptId);
    try {
        // Load system.md
        const systemPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(promptDir, 'system.md');
        let systemPrompt = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(systemPath, 'utf-8').trim();
        systemPrompt = processSnippets(systemPrompt);
        // Load user.md (optional, may not exist)
        const userPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(promptDir, 'user.md');
        let userPromptTemplate = '';
        try {
            userPromptTemplate = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(userPath, 'utf-8').trim();
            userPromptTemplate = processSnippets(userPromptTemplate);
        } catch  {
        // user.md is optional
        }
        const loaded = {
            id: promptId,
            systemPrompt,
            userPromptTemplate
        };
        promptCache.set(promptId, loaded);
        return loaded;
    } catch (error) {
        log.error(`Failed to load prompt ${promptId}:`, error);
        return null;
    }
}
function interpolateVariables(template, variables) {
    return template.replace(/\{\{(\w+)\}\}/g, (match, key)=>{
        const value = variables[key];
        if (value === undefined) return match;
        if (typeof value === 'object') return JSON.stringify(value, null, 2);
        return String(value);
    });
}
function buildPrompt(promptId, variables) {
    const prompt = loadPrompt(promptId);
    if (!prompt) return null;
    return {
        system: interpolateVariables(prompt.systemPrompt, variables),
        user: interpolateVariables(prompt.userPromptTemplate, variables)
    };
}
function clearPromptCache() {
    promptCache.clear();
    snippetCache.clear();
}
}),
"[project]/lib/generation/prompts/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Prompt System - Simplified prompt management
 *
 * Features:
 * - File-based prompt storage in templates/
 * - Snippet composition via {{snippet:name}} syntax
 * - Variable interpolation via {{variable}} syntax
 */ // Types
__turbopack_context__.s([
    "PROMPT_IDS",
    ()=>PROMPT_IDS
]);
// Loader functions
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/prompts/loader.ts [app-route] (ecmascript)");
;
const PROMPT_IDS = {
    REQUIREMENTS_TO_OUTLINES: 'requirements-to-outlines',
    WEB_SEARCH_QUERY_REWRITE: 'web-search-query-rewrite',
    SLIDE_CONTENT: 'slide-content',
    QUIZ_CONTENT: 'quiz-content',
    SLIDE_ACTIONS: 'slide-actions',
    QUIZ_ACTIONS: 'quiz-actions',
    INTERACTIVE_SCIENTIFIC_MODEL: 'interactive-scientific-model',
    INTERACTIVE_HTML: 'interactive-html',
    INTERACTIVE_ACTIONS: 'interactive-actions',
    PBL_ACTIONS: 'pbl-actions'
};
}),
"[project]/lib/api/stage-api-defaults.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDefaultContent",
    ()=>createDefaultContent,
    "createDefaultInteractiveContent",
    ()=>createDefaultInteractiveContent,
    "createDefaultPBLContent",
    ()=>createDefaultPBLContent,
    "createDefaultQuizContent",
    ()=>createDefaultQuizContent,
    "createDefaultSlideContent",
    ()=>createDefaultSlideContent,
    "generateId",
    ()=>generateId,
    "getScene",
    ()=>getScene,
    "validateSceneId",
    ()=>validateSceneId
]);
/**
 * Stage API - Default Content & Utility Functions
 *
 * Shared utility functions for ID generation, scene validation,
 * and default content creation.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/index.js [app-route] (ecmascript) <locals>");
;
function generateId(prefix) {
    return prefix ? `${prefix}_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(10)}` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(10);
}
function validateSceneId(scenes, sceneId) {
    return scenes.some((s)=>s.id === sceneId);
}
function getScene(scenes, sceneId) {
    return scenes.find((s)=>s.id === sceneId) || null;
}
function createDefaultSlideContent() {
    return {
        type: 'slide',
        canvas: {
            id: generateId('slide'),
            viewportSize: 1000,
            viewportRatio: 0.5625,
            theme: {
                backgroundColor: '#ffffff',
                themeColors: [
                    '#5b9bd5',
                    '#ed7d31',
                    '#a5a5a5',
                    '#ffc000',
                    '#4472c4'
                ],
                fontColor: '#333333',
                fontName: 'Microsoft YaHei',
                outline: {
                    color: '#d14424',
                    width: 2,
                    style: 'solid'
                },
                shadow: {
                    h: 0,
                    v: 0,
                    blur: 10,
                    color: '#000000'
                }
            },
            elements: []
        }
    };
}
function createDefaultQuizContent() {
    return {
        type: 'quiz',
        questions: []
    };
}
function createDefaultInteractiveContent() {
    return {
        type: 'interactive',
        url: ''
    };
}
function createDefaultPBLContent() {
    return {
        type: 'pbl',
        projectConfig: {
            projectInfo: {
                title: '',
                description: ''
            },
            agents: [],
            issueboard: {
                agent_ids: [],
                issues: [],
                current_issue_id: null
            },
            chat: {
                messages: []
            }
        }
    };
}
function createDefaultContent(type) {
    switch(type){
        case 'slide':
            return createDefaultSlideContent();
        case 'quiz':
            return createDefaultQuizContent();
        case 'interactive':
            return createDefaultInteractiveContent();
        case 'pbl':
            return createDefaultPBLContent();
        default:
            throw new Error(`Unknown scene type: ${type}`);
    }
}
}),
"[project]/lib/api/stage-api-scene.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Stage API - Scene Management
 *
 * Factory function that creates the scene namespace of the Stage API.
 */ __turbopack_context__.s([
    "createSceneAPI",
    ()=>createSceneAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-defaults.ts [app-route] (ecmascript)");
;
function createSceneAPI(store) {
    return {
        /**
     * Create a new scene
     *
     * @param params - Scene parameters
     * @returns Scene ID
     *
     * @example
     * const sceneId = api.scene.create({
     *   type: 'slide',
     *   title: 'Introduction',
     *   // speech is now in actions
     * });
     */ create (params) {
            try {
                const state = store.getState();
                if (!state.stage) {
                    return {
                        success: false,
                        error: 'No stage set - cannot create scene without a stage'
                    };
                }
                const sceneId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateId"])('scene');
                // Determine order
                const order = params.order ?? state.scenes.length;
                // Create default content or use the provided content
                let content;
                if (params.content) {
                    content = {
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDefaultContent"])(params.type),
                        ...params.content
                    };
                } else {
                    content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDefaultContent"])(params.type);
                }
                const newScene = {
                    id: sceneId,
                    stageId: state.stage.id,
                    type: params.type,
                    title: params.title,
                    order,
                    content,
                    actions: params.actions,
                    createdAt: Date.now(),
                    updatedAt: Date.now()
                };
                const newScenes = [
                    ...state.scenes,
                    newScene
                ].sort((a, b)=>a.order - b.order);
                store.setState({
                    scenes: newScenes
                });
                return {
                    success: true,
                    data: sceneId
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Delete a scene
     *
     * @param sceneId - Scene ID
     * @returns Whether successful
     */ delete (sceneId) {
            try {
                const state = store.getState();
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateSceneId"])(state.scenes, sceneId)) {
                    return {
                        success: false,
                        error: `Scene not found: ${sceneId}`
                    };
                }
                const newScenes = state.scenes.filter((s)=>s.id !== sceneId);
                // If the deleted scene is the current one, switch to the next
                let newCurrentSceneId = state.currentSceneId;
                if (state.currentSceneId === sceneId) {
                    newCurrentSceneId = newScenes.length > 0 ? newScenes[0].id : null;
                }
                store.setState({
                    scenes: newScenes,
                    currentSceneId: newCurrentSceneId
                });
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Update a scene
     *
     * @param sceneId - Scene ID
     * @param updates - Fields to update
     * @returns Whether successful
     */ update (sceneId, updates) {
            try {
                const state = store.getState();
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateSceneId"])(state.scenes, sceneId)) {
                    return {
                        success: false,
                        error: `Scene not found: ${sceneId}`
                    };
                }
                const newScenes = state.scenes.map((scene)=>scene.id === sceneId ? {
                        ...scene,
                        ...updates,
                        updatedAt: Date.now()
                    } : scene);
                store.setState({
                    scenes: newScenes
                });
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Get all scenes
     *
     * @returns Scene list
     */ list () {
            try {
                const state = store.getState();
                return {
                    success: true,
                    data: [
                        ...state.scenes
                    ]
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Get a specific scene
     *
     * @param sceneId - Scene ID
     * @returns Scene object
     */ get (sceneId) {
            try {
                const state = store.getState();
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
                if (!scene) {
                    return {
                        success: false,
                        error: `Scene not found: ${sceneId}`
                    };
                }
                return {
                    success: true,
                    data: scene
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        }
    };
}
}),
"[project]/lib/api/stage-api-element.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Stage API - Element Operations
 *
 * Factory function that creates the element namespace of the Stage API.
 * Handles element CRUD operations for slide-type scenes.
 */ __turbopack_context__.s([
    "createElementAPI",
    ()=>createElementAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-defaults.ts [app-route] (ecmascript)");
;
function createElementAPI(store) {
    return {
        /**
     * Add an element to a Slide
     *
     * @param sceneId - Scene ID
     * @param element - Element parameters (must include type, left, top, width, height)
     * @returns Element ID
     */ add (sceneId, element) {
            try {
                const state = store.getState();
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
                if (!scene) {
                    return {
                        success: false,
                        error: `Scene not found: ${sceneId}`
                    };
                }
                if (scene.type !== 'slide') {
                    return {
                        success: false,
                        error: `Scene is not a slide: ${sceneId}`
                    };
                }
                const content = scene.content;
                const elementId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateId"])(element.type);
                const newElement = {
                    ...element,
                    id: elementId,
                    rotate: element.rotate ?? 0
                };
                const newScenes = state.scenes.map((s)=>{
                    if (s.id === sceneId) {
                        return {
                            ...s,
                            content: {
                                ...content,
                                canvas: {
                                    ...content.canvas,
                                    elements: [
                                        ...content.canvas.elements,
                                        newElement
                                    ]
                                }
                            },
                            updatedAt: Date.now()
                        };
                    }
                    return s;
                });
                store.setState({
                    scenes: newScenes
                });
                return {
                    success: true,
                    data: elementId
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Add elements in batch
     *
     * @deprecated will be removed in the future
     * @param sceneId - Scene ID
     * @param elements - Element array
     * @returns Element ID array
     */ addBatch (sceneId, elements) {
            try {
                const state = store.getState();
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
                if (!scene) {
                    return {
                        success: false,
                        error: `Scene not found: ${sceneId}`
                    };
                }
                if (scene.type !== 'slide') {
                    return {
                        success: false,
                        error: `Scene is not a slide: ${sceneId}`
                    };
                }
                const content = scene.content;
                const elementIds = [];
                const newElements = elements.map((el)=>{
                    const elementId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateId"])(el.type);
                    elementIds.push(elementId);
                    return {
                        ...el,
                        id: elementId,
                        rotate: el.rotate ?? 0
                    };
                });
                const newScenes = state.scenes.map((s)=>{
                    if (s.id === sceneId) {
                        return {
                            ...s,
                            content: {
                                ...content,
                                canvas: {
                                    ...content.canvas,
                                    elements: [
                                        ...content.canvas.elements,
                                        ...newElements
                                    ]
                                }
                            },
                            updatedAt: Date.now()
                        };
                    }
                    return s;
                });
                store.setState({
                    scenes: newScenes
                });
                return {
                    success: true,
                    data: elementIds
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Delete an element
     *
     * @param sceneId - Scene ID
     * @param elementId - Element ID
     * @returns Whether successful
     */ delete (sceneId, elementId) {
            try {
                const state = store.getState();
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
                if (!scene) {
                    return {
                        success: false,
                        error: `Scene not found: ${sceneId}`
                    };
                }
                if (scene.type !== 'slide') {
                    return {
                        success: false,
                        error: `Scene is not a slide: ${sceneId}`
                    };
                }
                const content = scene.content;
                const newScenes = state.scenes.map((s)=>{
                    if (s.id === sceneId) {
                        return {
                            ...s,
                            content: {
                                ...content,
                                canvas: {
                                    ...content.canvas,
                                    elements: content.canvas.elements.filter((el)=>el.id !== elementId)
                                }
                            },
                            updatedAt: Date.now()
                        };
                    }
                    return s;
                });
                store.setState({
                    scenes: newScenes
                });
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Delete elements in batch
     *
     * @deprecated will be removed in the future
     * @param sceneId - Scene ID
     * @param elementIds - Element ID array
     * @returns Whether successful
     */ deleteBatch (sceneId, elementIds) {
            try {
                const state = store.getState();
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
                if (!scene) {
                    return {
                        success: false,
                        error: `Scene not found: ${sceneId}`
                    };
                }
                if (scene.type !== 'slide') {
                    return {
                        success: false,
                        error: `Scene is not a slide: ${sceneId}`
                    };
                }
                const content = scene.content;
                const elementIdSet = new Set(elementIds);
                const newScenes = state.scenes.map((s)=>{
                    if (s.id === sceneId) {
                        return {
                            ...s,
                            content: {
                                ...content,
                                canvas: {
                                    ...content.canvas,
                                    elements: content.canvas.elements.filter((el)=>!elementIdSet.has(el.id))
                                }
                            },
                            updatedAt: Date.now()
                        };
                    }
                    return s;
                });
                store.setState({
                    scenes: newScenes
                });
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Update an element
     *
     * @param sceneId - Scene ID
     * @param elementId - Element ID
     * @param updates - Properties to update
     * @returns Whether successful
     */ update (sceneId, elementId, updates) {
            try {
                const state = store.getState();
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
                if (!scene) {
                    return {
                        success: false,
                        error: `Scene not found: ${sceneId}`
                    };
                }
                if (scene.type !== 'slide') {
                    return {
                        success: false,
                        error: `Scene is not a slide: ${sceneId}`
                    };
                }
                const content = scene.content;
                const newScenes = state.scenes.map((s)=>{
                    if (s.id === sceneId) {
                        return {
                            ...s,
                            content: {
                                ...content,
                                canvas: {
                                    ...content.canvas,
                                    elements: content.canvas.elements.map((el)=>el.id === elementId ? {
                                            ...el,
                                            ...updates
                                        } : el)
                                }
                            },
                            updatedAt: Date.now()
                        };
                    }
                    return s;
                });
                store.setState({
                    scenes: newScenes
                });
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Get an element
     *
     * @param sceneId - Scene ID
     * @param elementId - Element ID
     * @returns Element object
     */ get (sceneId, elementId) {
            try {
                const state = store.getState();
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
                if (!scene) {
                    return {
                        success: false,
                        error: `Scene not found: ${sceneId}`
                    };
                }
                if (scene.type !== 'slide') {
                    return {
                        success: false,
                        error: `Scene is not a slide: ${sceneId}`
                    };
                }
                const content = scene.content;
                const element = content.canvas.elements.find((el)=>el.id === elementId);
                if (!element) {
                    return {
                        success: false,
                        error: `Element not found: ${elementId}`
                    };
                }
                return {
                    success: true,
                    data: element
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Get all elements of a scene
     *
     * @param sceneId - Scene ID
     * @returns Element list
     */ list (sceneId) {
            try {
                const state = store.getState();
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
                if (!scene) {
                    return {
                        success: false,
                        error: `Scene not found: ${sceneId}`
                    };
                }
                if (scene.type !== 'slide') {
                    return {
                        success: false,
                        error: `Scene is not a slide: ${sceneId}`
                    };
                }
                const content = scene.content;
                return {
                    success: true,
                    data: [
                        ...content.canvas.elements
                    ]
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Move an element (relative movement)
     *
     * @deprecated will be removed in the future
     * @param sceneId - Scene ID
     * @param elementId - Element ID
     * @param deltaX - X-axis movement distance
     * @param deltaY - Y-axis movement distance
     * @returns Whether successful
     */ move (sceneId, elementId, deltaX, deltaY) {
            try {
                const state = store.getState();
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
                if (!scene) {
                    return {
                        success: false,
                        error: `Scene not found: ${sceneId}`
                    };
                }
                if (scene.type !== 'slide') {
                    return {
                        success: false,
                        error: `Scene is not a slide: ${sceneId}`
                    };
                }
                const content = scene.content;
                const newScenes = state.scenes.map((s)=>{
                    if (s.id === sceneId) {
                        return {
                            ...s,
                            content: {
                                ...content,
                                canvas: {
                                    ...content.canvas,
                                    elements: content.canvas.elements.map((el)=>{
                                        if (el.id === elementId) {
                                            return {
                                                ...el,
                                                left: el.left + deltaX,
                                                top: el.top + deltaY
                                            };
                                        }
                                        return el;
                                    })
                                }
                            },
                            updatedAt: Date.now()
                        };
                    }
                    return s;
                });
                store.setState({
                    scenes: newScenes
                });
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        }
    };
}
}),
"[project]/lib/utils/create-selectors.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSelectors",
    ()=>createSelectors
]);
const createSelectors = (_store)=>{
    const store = _store;
    store.use = {};
    for (const k of Object.keys(store.getState())){
        store.use[k] = ()=>store((s)=>s[k]);
    }
    return store;
};
}),
"[project]/lib/prosemirror/utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addMark",
    ()=>addMark,
    "autoSelectAll",
    ()=>autoSelectAll,
    "defaultRichTextAttrs",
    ()=>defaultRichTextAttrs,
    "findNodesWithSameMark",
    ()=>findNodesWithSameMark,
    "findParentNode",
    ()=>findParentNode,
    "findParentNodeOfType",
    ()=>findParentNodeOfType,
    "getAttrValue",
    ()=>getAttrValue,
    "getAttrValueInSelection",
    ()=>getAttrValueInSelection,
    "getFontsize",
    ()=>getFontsize,
    "getLastTextNode",
    ()=>getLastTextNode,
    "getMarkAttrs",
    ()=>getMarkAttrs,
    "getTextAttrs",
    ()=>getTextAttrs,
    "isActiveMark",
    ()=>isActiveMark,
    "isActiveOfParentNodeType",
    ()=>isActiveOfParentNodeType,
    "isList",
    ()=>isList,
    "markActive",
    ()=>markActive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-commands@1.7.1/node_modules/prosemirror-commands/dist/index.js [app-route] (ecmascript)");
;
const isList = (node, schema)=>{
    return node.type === schema.nodes.bullet_list || node.type === schema.nodes.ordered_list;
};
const autoSelectAll = (view)=>{
    const { empty } = view.state.selection;
    if (empty) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["selectAll"])(view.state, view.dispatch);
};
const addMark = (editorView, mark, selection)=>{
    if (selection) {
        editorView.dispatch(editorView.state.tr.addMark(selection.from, selection.to, mark));
    } else {
        const { $from, $to } = editorView.state.selection;
        editorView.dispatch(editorView.state.tr.addMark($from.pos, $to.pos, mark));
    }
};
const findNodesWithSameMark = (doc, from, to, markType)=>{
    let ii = from;
    const finder = (mark)=>mark.type === markType;
    let firstMark = null;
    let fromNode = null;
    let toNode = null;
    while(ii <= to){
        const node = doc.nodeAt(ii);
        if (!node || !node.marks) return null;
        const mark = node.marks.find(finder);
        if (!mark) return null;
        if (firstMark && mark !== firstMark) return null;
        fromNode = fromNode || node;
        firstMark = firstMark || mark;
        toNode = node;
        ii++;
    }
    let fromPos = from;
    let toPos = to;
    let jj = 0;
    ii = from - 1;
    while(ii > jj){
        const node = doc.nodeAt(ii);
        const mark = node && node.marks.find(finder);
        if (!mark || mark !== firstMark) break;
        fromPos = ii;
        fromNode = node;
        ii--;
    }
    ii = to + 1;
    jj = doc.nodeSize - 2;
    while(ii < jj){
        const node = doc.nodeAt(ii);
        const mark = node && node.marks.find(finder);
        if (!mark || mark !== firstMark) break;
        toPos = ii;
        toNode = node;
        ii++;
    }
    return {
        mark: firstMark,
        from: {
            node: fromNode,
            pos: fromPos
        },
        to: {
            node: toNode,
            pos: toPos
        }
    };
};
const equalNodeType = (nodeType, node)=>{
    return Array.isArray(nodeType) && nodeType.indexOf(node.type) > -1 || node.type === nodeType;
};
const findParentNodeClosestToPos = ($pos, predicate)=>{
    for(let i = $pos.depth; i > 0; i--){
        const node = $pos.node(i);
        if (predicate(node)) {
            return {
                pos: i > 0 ? $pos.before(i) : 0,
                start: $pos.start(i),
                depth: i,
                node
            };
        }
    }
};
const findParentNode = (predicate)=>{
    return (_ref)=>findParentNodeClosestToPos(_ref.$from, predicate);
};
const findParentNodeOfType = (nodeType)=>{
    return (selection)=>{
        return findParentNode((node)=>{
            return equalNodeType(nodeType, node);
        })(selection);
    };
};
const isActiveOfParentNodeType = (nodeType, state)=>{
    const node = state.schema.nodes[nodeType];
    return !!findParentNodeOfType(node)(state.selection);
};
const getLastTextNode = (node)=>{
    if (!node) return null;
    if (node.type.name === 'text') return node;
    if (!node.lastChild) return null;
    return getLastTextNode(node.lastChild);
};
const getMarkAttrs = (view)=>{
    const { selection, doc } = view.state;
    const { from } = selection;
    let node = doc.nodeAt(from) || doc.nodeAt(from - 1);
    node = getLastTextNode(node);
    return node?.marks || [];
};
const getAttrValue = (marks, markType, attr)=>{
    for (const mark of marks){
        if (mark.type.name === markType && mark.attrs[attr]) return mark.attrs[attr];
    }
    return null;
};
const isActiveMark = (marks, markType)=>{
    for (const mark of marks){
        if (mark.type.name === markType) return true;
    }
    return false;
};
const markActive = (state, type)=>{
    const { from, $from, to, empty } = state.selection;
    if (empty) return type.isInSet(state.storedMarks || $from.marks());
    return state.doc.rangeHasMark(from, to, type);
};
const getAttrValueInSelection = (view, attr)=>{
    const { selection, doc } = view.state;
    const { from, to } = selection;
    let keepChecking = true;
    let value = '';
    doc.nodesBetween(from, to, (node)=>{
        if (keepChecking && node.attrs[attr]) {
            keepChecking = false;
            value = node.attrs[attr];
        }
        return keepChecking;
    });
    return value;
};
const _defaultAttrs = {
    color: '#000000',
    backcolor: '',
    fontsize: '16px',
    fontname: '',
    align: 'left'
};
const getTextAttrs = (view, attrs = {})=>{
    const defaultAttrs = {
        ..._defaultAttrs,
        ...attrs
    };
    const marks = getMarkAttrs(view);
    const isBold = isActiveMark(marks, 'strong');
    const isEm = isActiveMark(marks, 'em');
    const isUnderline = isActiveMark(marks, 'underline');
    const isStrikethrough = isActiveMark(marks, 'strikethrough');
    const isSuperscript = isActiveMark(marks, 'superscript');
    const isSubscript = isActiveMark(marks, 'subscript');
    const isCode = isActiveMark(marks, 'code');
    const color = getAttrValue(marks, 'forecolor', 'color') || defaultAttrs.color;
    const backcolor = getAttrValue(marks, 'backcolor', 'backcolor') || defaultAttrs.backcolor;
    const fontsize = getAttrValue(marks, 'fontsize', 'fontsize') || defaultAttrs.fontsize;
    const fontname = getAttrValue(marks, 'fontname', 'fontname') || defaultAttrs.fontname;
    const link = getAttrValue(marks, 'link', 'href') || '';
    const align = getAttrValueInSelection(view, 'align') || defaultAttrs.align;
    const isBulletList = isActiveOfParentNodeType('bullet_list', view.state);
    const isOrderedList = isActiveOfParentNodeType('ordered_list', view.state);
    const isBlockquote = isActiveOfParentNodeType('blockquote', view.state);
    return {
        bold: isBold,
        em: isEm,
        underline: isUnderline,
        strikethrough: isStrikethrough,
        superscript: isSuperscript,
        subscript: isSubscript,
        code: isCode,
        color: color,
        backcolor: backcolor,
        fontsize: fontsize,
        fontname: fontname,
        link: link,
        align: align,
        bulletList: isBulletList,
        orderedList: isOrderedList,
        blockquote: isBlockquote
    };
};
const getFontsize = (view)=>{
    const marks = getMarkAttrs(view);
    const fontsize = getAttrValue(marks, 'fontsize', 'fontsize') || _defaultAttrs.fontsize;
    return parseInt(fontsize);
};
const defaultRichTextAttrs = {
    bold: false,
    em: false,
    underline: false,
    strikethrough: false,
    superscript: false,
    subscript: false,
    code: false,
    color: '#000000',
    backcolor: '',
    fontsize: '16px',
    fontname: '',
    link: '',
    align: 'left',
    bulletList: false,
    orderedList: false,
    blockquote: false
};
}),
"[project]/lib/store/canvas.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCanvasStore",
    ()=>useCanvasStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/react.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$create$2d$selectors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/create-selectors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prosemirror/utils.ts [app-route] (ecmascript)");
;
;
;
// ==================== Initial State ====================
const initialState = {
    // Element selection
    activeElementIdList: [],
    handleElementId: '',
    activeGroupElementId: '',
    editingElementId: '',
    hiddenElementIdList: [],
    // Canvas viewport
    canvasScale: 1,
    canvasPercentage: 90,
    viewportSize: 1000,
    viewportRatio: 0.5625,
    canvasDragged: false,
    // Display aids
    showRuler: false,
    gridLineSize: 0,
    // Toolbar and panels
    toolbarState: 'ai',
    showSelectPanel: false,
    showSearchPanel: false,
    // Element creation
    creatingElement: null,
    creatingCustomShape: false,
    // Editing state
    isScaling: false,
    clipingImageElementId: '',
    richTextAttrs: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultRichTextAttrs"],
    // Format painter
    textFormatPainter: null,
    shapeFormatPainter: null,
    // Video playback
    playingVideoElementId: '',
    // Whiteboard
    whiteboardOpen: false,
    whiteboardClearing: false,
    // Other: false,
    editorAreaFocus: false,
    thumbnailsFocus: false,
    disableHotkeys: false,
    selectedTableCells: [],
    // Teaching features
    spotlightElementId: '',
    spotlightOptions: null,
    spotlightMode: 'pixel',
    spotlightPercentageGeometry: null,
    highlightedElementIds: [],
    highlightOptions: null,
    laserElementId: '',
    laserOptions: null,
    zoomTarget: null
};
// ==================== Store Implementation ====================
const useCanvasStoreBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        ...initialState,
        // ===== Element Selection Actions =====
        setActiveElementIdList: (ids)=>{
            set({
                activeElementIdList: ids
            });
            // Auto-set handleElementId: set to that element for single select, empty for multi-select or none
            if (ids.length === 1) {
                set({
                    handleElementId: ids[0]
                });
            } else if (ids.length === 0) {
                set({
                    handleElementId: ''
                });
            }
            // Auto-switch to design panel when elements are selected
            if (ids.length > 0) {
                set({
                    toolbarState: 'design'
                });
            }
        },
        setHandleElementId: (id)=>set({
                handleElementId: id
            }),
        setActiveGroupElementId: (id)=>set({
                activeGroupElementId: id
            }),
        setEditingElementId: (id)=>set({
                editingElementId: id
            }),
        setHiddenElementIdList: (ids)=>set({
                hiddenElementIdList: ids
            }),
        clearSelection: ()=>{
            set({
                activeElementIdList: [],
                handleElementId: '',
                activeGroupElementId: '',
                editingElementId: ''
            });
        },
        // ===== Canvas Viewport Actions =====
        setCanvasScale: (scale)=>set({
                canvasScale: scale
            }),
        setCanvasPercentage: (percentage)=>set({
                canvasPercentage: percentage
            }),
        setViewportSize: (size)=>set({
                viewportSize: size
            }),
        setViewportRatio: (ratio)=>set({
                viewportRatio: ratio
            }),
        setCanvasDragged: (dragged)=>set({
                canvasDragged: dragged
            }),
        // ===== Display Aids Actions =====
        setRulerState: (show)=>set({
                showRuler: show
            }),
        setGridLineSize: (size)=>set({
                gridLineSize: size
            }),
        // ===== Toolbar and Panel Actions =====
        setToolbarState: (toolbarState)=>set({
                toolbarState
            }),
        setSelectPanelState: (show)=>set({
                showSelectPanel: show
            }),
        setSearchPanelState: (show)=>set({
                showSearchPanel: show
            }),
        // ===== Element Creation Actions =====
        setCreatingElement: (element)=>set({
                creatingElement: element
            }),
        setCreatingCustomShapeState: (creating)=>set({
                creatingCustomShape: creating
            }),
        // ===== Editing State Actions =====
        setScalingState: (isScaling)=>set({
                isScaling
            }),
        setClipingImageElementId: (id)=>set({
                clipingImageElementId: id
            }),
        setRichtextAttrs: (attrs)=>set({
                richTextAttrs: attrs
            }),
        // ===== Format Painter Actions =====
        setTextFormatPainter: (painter)=>set({
                textFormatPainter: painter
            }),
        setShapeFormatPainter: (painter)=>set({
                shapeFormatPainter: painter
            }),
        // ===== Video Playback Actions =====
        playVideo: (elementId)=>set({
                playingVideoElementId: elementId
            }),
        pauseVideo: ()=>set({
                playingVideoElementId: ''
            }),
        // ===== Whiteboard Actions =====
        setWhiteboardOpen: (open)=>set({
                whiteboardOpen: open
            }),
        setWhiteboardClearing: (clearing)=>set({
                whiteboardClearing: clearing
            }),
        // ===== Other Actions =====
        setThumbnailsFocus: (focus)=>set({
                thumbnailsFocus: focus
            }),
        setEditorAreaFocus: (focus)=>set({
                editorAreaFocus: focus
            }),
        setDisableHotkeysState: (disable)=>set({
                disableHotkeys: disable
            }),
        setSelectedTableCells: (cells)=>set({
                selectedTableCells: cells
            }),
        // ===== Teaching Feature Actions =====
        setSpotlight: (elementId, options = {})=>{
            set({
                spotlightElementId: elementId,
                spotlightMode: 'pixel',
                spotlightOptions: {
                    radius: 200,
                    dimness: 0.7,
                    transition: 300,
                    ...options
                },
                spotlightPercentageGeometry: null
            });
        },
        setSpotlightPercentage: (elementId, geometry, options = {})=>{
            set({
                spotlightElementId: elementId,
                spotlightMode: 'percentage',
                spotlightPercentageGeometry: geometry,
                spotlightOptions: {
                    dimness: 0.7,
                    transition: 300,
                    ...options
                }
            });
        },
        clearSpotlight: ()=>{
            set({
                spotlightElementId: '',
                spotlightOptions: null,
                spotlightMode: 'pixel',
                spotlightPercentageGeometry: null
            });
        },
        setHighlight: (elementIds, options = {})=>{
            set({
                highlightedElementIds: elementIds,
                highlightOptions: {
                    color: '#ff6b6b',
                    opacity: 0.3,
                    borderWidth: 3,
                    animated: true,
                    ...options
                }
            });
        },
        clearHighlight: ()=>{
            set({
                highlightedElementIds: [],
                highlightOptions: null
            });
        },
        setLaser: (elementId, options = {})=>{
            set({
                laserElementId: elementId,
                laserOptions: {
                    color: '#ff0000',
                    duration: 3000,
                    ...options
                }
            });
        },
        clearLaser: ()=>{
            set({
                laserElementId: '',
                laserOptions: null
            });
        },
        setZoom: (elementId, scale)=>{
            set({
                zoomTarget: {
                    elementId,
                    scale
                }
            });
        },
        clearZoom: ()=>{
            set({
                zoomTarget: null
            });
        },
        clearAllEffects: ()=>{
            set({
                spotlightElementId: '',
                spotlightOptions: null,
                spotlightMode: 'pixel',
                spotlightPercentageGeometry: null,
                highlightedElementIds: [],
                highlightOptions: null,
                laserElementId: '',
                laserOptions: null,
                zoomTarget: null
            });
        },
        // ===== Batch Operations =====
        resetCanvasState: ()=>{
            set({
                ...initialState,
                // Preserve viewport settings
                viewportSize: get().viewportSize,
                viewportRatio: get().viewportRatio
            });
        }
    }));
const useCanvasStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$create$2d$selectors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSelectors"])(useCanvasStoreBase);
}),
"[project]/lib/api/stage-api-canvas.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Stage API - Canvas Operations
 *
 * Factory function that creates the canvas namespace of the Stage API.
 * Handles background, theme, highlight, spotlight, laser, and zoom effects.
 * Uses useCanvasStore for visual overlay effects.
 */ __turbopack_context__.s([
    "createCanvasAPI",
    ()=>createCanvasAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-defaults.ts [app-route] (ecmascript)");
;
;
function createCanvasAPI(store) {
    return {
        /**
     * Set background
     *
     * @param sceneId - Scene ID
     * @param background - Background settings
     * @returns Whether successful
     */ setBackground (sceneId, background) {
            try {
                const state = store.getState();
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
                if (!scene || scene.type !== 'slide') {
                    return {
                        success: false,
                        error: 'Invalid scene'
                    };
                }
                const content = scene.content;
                const newScenes = state.scenes.map((s)=>{
                    if (s.id === sceneId) {
                        return {
                            ...s,
                            content: {
                                ...content,
                                canvas: {
                                    ...content.canvas,
                                    background
                                }
                            },
                            updatedAt: Date.now()
                        };
                    }
                    return s;
                });
                store.setState({
                    scenes: newScenes
                });
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Set theme
     *
     * @param sceneId - Scene ID
     * @param theme - Theme settings
     * @returns Whether successful
     */ setTheme (sceneId, theme) {
            try {
                const state = store.getState();
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
                if (!scene || scene.type !== 'slide') {
                    return {
                        success: false,
                        error: 'Invalid scene'
                    };
                }
                const content = scene.content;
                const newScenes = state.scenes.map((s)=>{
                    if (s.id === sceneId) {
                        return {
                            ...s,
                            content: {
                                ...content,
                                canvas: {
                                    ...content.canvas,
                                    theme: {
                                        ...content.canvas.theme,
                                        ...theme
                                    }
                                }
                            },
                            updatedAt: Date.now()
                        };
                    }
                    return s;
                });
                store.setState({
                    scenes: newScenes
                });
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Highlight an element (teaching feature)
     *
     * Emphasize an element by adding a highlight border or shadow
     *
     * @param sceneId - Scene ID
     * @param elementId - Element ID
     * @param options - Highlight options
     * @returns Whether successful
     */ highlight (sceneId, elementId, options = {}) {
            const { duration, color = '#ff6b6b', style = 'outline' } = options;
            try {
                // Use the new Canvas Store highlight overlay API
                // Advantage: does not modify the element itself, purely visual effect
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
                canvasStore.setHighlight([
                    elementId
                ], {
                    color,
                    opacity: style === 'fill' ? 0.3 : 0.5,
                    borderWidth: 3,
                    animated: true
                });
                // If duration is set, automatically clear the highlight
                if (duration) {
                    setTimeout(()=>{
                        canvasStore.clearHighlight();
                    }, duration);
                }
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Spotlight effect (teaching feature)
     *
     * Highlight a specific element while dimming everything else
     * Note: this requires a mask layer in the frontend rendering layer
     *
     * @param sceneId - Scene ID
     * @param elementId - Element ID
     * @param options - Spotlight options
     * @returns Whether successful
     */ spotlight (sceneId, elementId, options = {}) {
            try {
                // Use Canvas Store's spotlight API
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
                canvasStore.setSpotlight(elementId, options);
                // If duration is set, automatically clear the spotlight
                if (options.duration) {
                    setTimeout(()=>{
                        canvasStore.clearSpotlight();
                    }, options.duration);
                }
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Clear all highlight and spotlight effects
     *
     * @param sceneId - Scene ID
     * @returns Whether successful
     */ clearHighlights (_sceneId) {
            try {
                // Use Canvas Store to clear all teaching effects
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
                canvasStore.clearHighlight();
                canvasStore.clearSpotlight();
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Clear spotlight effect
     *
     * @returns Whether successful
     */ clearSpotlight (_sceneId) {
            try {
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
                canvasStore.clearSpotlight();
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Set percentage-mode spotlight
     *
     * @param sceneId - Scene ID
     * @param elementId - Element ID
     * @param geometry - Percentage geometry info
     * @param options - Spotlight options
     * @returns Whether successful
     */ setSpotlightPercentage (sceneId, elementId, geometry, options = {}) {
            try {
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
                canvasStore.setSpotlightPercentage(elementId, geometry, options);
                if (options.duration) {
                    setTimeout(()=>{
                        canvasStore.clearSpotlight();
                    }, options.duration);
                }
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Set laser pointer effect
     *
     * @param sceneId - Scene ID
     * @param elementId - Element ID
     * @param geometry - Percentage geometry info
     * @param options - Laser pointer options
     * @returns Whether successful
     */ setLaser (sceneId, elementId, geometry, options = {}) {
            try {
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
                canvasStore.setLaser(elementId, options);
                if (options.duration) {
                    setTimeout(()=>{
                        canvasStore.clearLaser();
                    }, options.duration);
                }
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Clear laser pointer effect
     *
     * @param sceneId - Scene ID
     * @returns Whether successful
     */ clearLaser (_sceneId) {
            try {
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
                canvasStore.clearLaser();
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Set zoom effect
     *
     * @param sceneId - Scene ID
     * @param elementId - Element ID
     * @param geometry - Percentage geometry info
     * @param scale - Zoom scale
     * @returns Whether successful
     */ setZoom (sceneId, elementId, geometry, scale) {
            try {
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
                canvasStore.setZoom(elementId, scale);
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Clear zoom effect
     *
     * @param sceneId - Scene ID
     * @returns Whether successful
     */ clearZoom (_sceneId) {
            try {
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
                canvasStore.clearZoom();
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Clear all visual effects (spotlight, laser, zoom, etc.)
     *
     * @param sceneId - Scene ID
     * @returns Whether successful
     */ clearAllEffects (_sceneId) {
            try {
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
                canvasStore.clearAllEffects();
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Highlight multiple elements in batch
     *
     * @param sceneId - Scene ID
     * @param elementIds - Element ID list
     * @param options - Highlight options
     * @returns Whether successful
     */ highlightMultiple (sceneId, elementIds, options = {}) {
            const { duration, color = '#ff6b6b' } = options;
            try {
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
                canvasStore.setHighlight(elementIds, {
                    color,
                    opacity: 0.3,
                    borderWidth: 3,
                    animated: true
                });
                if (duration) {
                    setTimeout(()=>{
                        canvasStore.clearHighlight();
                    }, duration);
                }
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        }
    };
}
}),
"[project]/lib/api/stage-api-navigation.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Stage API - Navigation
 *
 * Factory function that creates the navigation namespace of the Stage API.
 * Handles scene navigation (goTo, next, previous, current).
 */ __turbopack_context__.s([
    "createNavigationAPI",
    ()=>createNavigationAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-defaults.ts [app-route] (ecmascript)");
;
function createNavigationAPI(store) {
    return {
        /**
     * Navigate to a specific scene
     *
     * @param sceneId - Scene ID
     * @returns Whether successful
     */ goTo (sceneId) {
            try {
                const state = store.getState();
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateSceneId"])(state.scenes, sceneId)) {
                    return {
                        success: false,
                        error: `Scene not found: ${sceneId}`
                    };
                }
                store.setState({
                    currentSceneId: sceneId
                });
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Next scene
     *
     * @returns Whether successful
     */ next () {
            try {
                const state = store.getState();
                if (!state.currentSceneId || state.scenes.length === 0) {
                    return {
                        success: false,
                        error: 'No current scene'
                    };
                }
                const currentIndex = state.scenes.findIndex((s)=>s.id === state.currentSceneId);
                if (currentIndex === -1 || currentIndex === state.scenes.length - 1) {
                    return {
                        success: false,
                        error: 'Already at last scene'
                    };
                }
                const nextScene = state.scenes[currentIndex + 1];
                store.setState({
                    currentSceneId: nextScene.id
                });
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Previous scene
     *
     * @returns Whether successful
     */ previous () {
            try {
                const state = store.getState();
                if (!state.currentSceneId || state.scenes.length === 0) {
                    return {
                        success: false,
                        error: 'No current scene'
                    };
                }
                const currentIndex = state.scenes.findIndex((s)=>s.id === state.currentSceneId);
                if (currentIndex === -1 || currentIndex === 0) {
                    return {
                        success: false,
                        error: 'Already at first scene'
                    };
                }
                const prevScene = state.scenes[currentIndex - 1];
                store.setState({
                    currentSceneId: prevScene.id
                });
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Get the current scene
     *
     * @returns Current scene
     */ current () {
            try {
                const state = store.getState();
                if (!state.currentSceneId) {
                    return {
                        success: false,
                        error: 'No current scene'
                    };
                }
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, state.currentSceneId);
                if (!scene) {
                    return {
                        success: false,
                        error: 'Current scene not found'
                    };
                }
                return {
                    success: true,
                    data: scene
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        }
    };
}
}),
"[project]/lib/api/stage-api-whiteboard.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Stage API - Whiteboard Management
 *
 * Factory function that creates the whiteboard namespace of the Stage API.
 * Handles whiteboard CRUD and whiteboard element operations.
 */ __turbopack_context__.s([
    "createWhiteboardAPI",
    ()=>createWhiteboardAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-defaults.ts [app-route] (ecmascript)");
;
function createWhiteboardAPI(store) {
    const whiteboardAPI = {
        /**
     * Create a whiteboard
     *
     * @returns Whether successful
     */ create () {
            try {
                const state = store.getState();
                const whiteboard = {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateId"])('whiteboard'),
                    viewportSize: 1000,
                    viewportRatio: 16 / 9,
                    elements: [],
                    background: {
                        type: 'solid',
                        color: '#ffffff'
                    },
                    animations: []
                };
                const whiteboardList = state.stage?.whiteboard ? [
                    ...state.stage.whiteboard,
                    whiteboard
                ] : [
                    whiteboard
                ];
                store.setState({
                    stage: {
                        ...state.stage,
                        whiteboard: whiteboardList
                    }
                });
                return {
                    success: true,
                    data: whiteboard
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Get a whiteboard
     *
     * @returns The most recently created whiteboard object
     */ get () {
            try {
                const state = store.getState();
                if (!state.stage?.whiteboard || state.stage.whiteboard.length === 0) {
                    return whiteboardAPI.create();
                }
                return {
                    success: true,
                    data: state.stage.whiteboard.at(-1)
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Update a whiteboard
     *
     * @param updates - Fields to update
     * @param whiteboardId - Whiteboard ID
     * @returns Whether successful
     */ update (updates, whiteboardId) {
            try {
                const state = store.getState();
                const whiteboard = state.stage?.whiteboard?.find((wb)=>wb.id === whiteboardId);
                if (!whiteboard) return {
                    success: false,
                    error: 'Whiteboard not found'
                };
                const newWhiteboard = {
                    ...whiteboard,
                    ...updates
                };
                const whiteboardList = state.stage.whiteboard.map((wb)=>wb.id === whiteboardId ? newWhiteboard : wb);
                store.setState({
                    stage: {
                        ...state.stage,
                        whiteboard: whiteboardList
                    }
                });
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Delete a whiteboard
     *
     * @param whiteboardId - Whiteboard ID
     * @returns Whether successful
     */ delete (whiteboardId) {
            try {
                const state = store.getState();
                const whiteboardList = state.stage.whiteboard.filter((wb)=>wb.id !== whiteboardId);
                store.setState({
                    stage: {
                        ...state.stage,
                        whiteboard: whiteboardList
                    }
                });
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Get all whiteboards
     *
     * @returns List of all whiteboards
     */ list () {
            try {
                const state = store.getState();
                return {
                    success: true,
                    data: state.stage.whiteboard
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Get a whiteboard element
     *
     * @param elementId - Element ID
     * @param whiteboardId - Whiteboard ID
     * @returns Element object
     */ getElement (elementId, whiteboardId) {
            try {
                const state = store.getState();
                const whiteboard = state.stage.whiteboard.find((wb)=>wb.id === whiteboardId);
                if (!whiteboard) return {
                    success: false,
                    error: 'Whiteboard not found'
                };
                return {
                    success: true,
                    data: whiteboard.elements.find((el)=>el.id === elementId)
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Add a whiteboard element
     *
     * @param element - Element object
     * @param whiteboardId - Whiteboard ID
     * @returns Whether successful
     */ addElement (element, whiteboardId) {
            try {
                const state = store.getState();
                const whiteboard = state.stage.whiteboard.find((wb)=>wb.id === whiteboardId);
                if (!whiteboard) return {
                    success: false,
                    error: 'Whiteboard not found'
                };
                const newElement = {
                    ...element,
                    id: element.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateId"])(element.type)
                };
                const newWhiteboard = {
                    ...whiteboard,
                    elements: [
                        ...whiteboard.elements,
                        newElement
                    ]
                };
                const whiteboardList = state.stage.whiteboard.map((wb)=>wb.id === whiteboardId ? newWhiteboard : wb);
                store.setState({
                    stage: {
                        ...state.stage,
                        whiteboard: whiteboardList
                    }
                });
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Delete a whiteboard element
     *
     * @param elementId - Element ID
     * @param whiteboardId - Whiteboard ID
     * @returns Whether successful
     */ deleteElement (elementId, whiteboardId) {
            try {
                const state = store.getState();
                const whiteboard = state.stage.whiteboard.find((wb)=>wb.id === whiteboardId);
                if (!whiteboard) return {
                    success: false,
                    error: 'Whiteboard not found'
                };
                const newWhiteboard = {
                    ...whiteboard,
                    elements: whiteboard.elements.filter((el)=>el.id !== elementId)
                };
                const whiteboardList = state.stage.whiteboard.map((wb)=>wb.id === whiteboardId ? newWhiteboard : wb);
                store.setState({
                    stage: {
                        ...state.stage,
                        whiteboard: whiteboardList
                    }
                });
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Update a whiteboard element
     *
     * @param element - Element object
     * @param whiteboardId - Whiteboard ID
     * @returns Whether successful
     */ updateElement (element, whiteboardId) {
            try {
                const state = store.getState();
                const whiteboard = state.stage.whiteboard.find((wb)=>wb.id === whiteboardId);
                if (!whiteboard) return {
                    success: false,
                    error: 'Whiteboard not found'
                };
                const newWhiteboard = {
                    ...whiteboard,
                    elements: whiteboard.elements.map((el)=>el.id === element.id ? element : el)
                };
                const whiteboardList = state.stage.whiteboard.map((wb)=>wb.id === whiteboardId ? newWhiteboard : wb);
                store.setState({
                    stage: {
                        ...state.stage,
                        whiteboard: whiteboardList
                    }
                });
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Get whiteboard element list
     *
     * @param whiteboardId - Whiteboard ID
     * @returns Element list
     */ listElements (whiteboardId) {
            try {
                const state = store.getState();
                const whiteboard = state.stage.whiteboard.find((wb)=>wb.id === whiteboardId);
                if (!whiteboard) return {
                    success: false,
                    error: 'Whiteboard not found'
                };
                return {
                    success: true,
                    data: whiteboard.elements
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        }
    };
    return whiteboardAPI;
}
}),
"[project]/lib/api/stage-api-mode.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Stage API - Mode & Stage Meta Management
 *
 * Factory functions that create the mode and stage namespaces of the Stage API.
 */ __turbopack_context__.s([
    "createModeAPI",
    ()=>createModeAPI,
    "createStageMetaAPI",
    ()=>createStageMetaAPI
]);
function createModeAPI(store) {
    return {
        /**
     * Set mode
     *
     * @param newMode - New mode
     */ set (newMode) {
            try {
                store.setState({
                    mode: newMode
                });
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Get current mode
     *
     * @returns Current mode
     */ get () {
            try {
                const state = store.getState();
                return {
                    success: true,
                    data: state.mode
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        }
    };
}
function createStageMetaAPI(store) {
    return {
        /**
     * Get Stage info
     *
     * @returns Stage object
     */ get () {
            try {
                const state = store.getState();
                if (!state.stage) {
                    return {
                        success: false,
                        error: 'No stage'
                    };
                }
                return {
                    success: true,
                    data: state.stage
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        },
        /**
     * Update Stage info
     *
     * @param updates - Fields to update
     * @returns Whether successful
     */ update (updates) {
            try {
                const state = store.getState();
                if (!state.stage) {
                    return {
                        success: false,
                        error: 'No stage'
                    };
                }
                const newStage = {
                    ...state.stage,
                    ...updates,
                    updatedAt: Date.now()
                };
                store.setState({
                    stage: newStage
                });
                return {
                    success: true,
                    data: true
                };
            } catch (error) {
                return {
                    success: false,
                    error: String(error)
                };
            }
        }
    };
}
}),
"[project]/lib/api/stage-api.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Stage API - AI Agent Toolkit
 *
 * Provides a complete Stage operation interface for AI Agents to create and manage course content
 *
 * Design Principles:
 * 1. Type Safety: Fully leverage TypeScript's type system
 * 2. Ease of Use: Provide high-level abstractions with clear, intuitive API naming
 * 3. Extensibility: Support adding new scene types in the future
 * 4. Idempotency: Multiple calls with the same parameters produce the same result
 * 5. Error Handling: Return explicit success/failure status and error messages
 *
 * @example
 * ```typescript
 * const api = createStageAPI(stageStore);
 *
 * // Create a new scene
 * const sceneId = api.scene.create({
 *   type: 'slide',
 *   title: 'Introduction',
 *   // speech is now in actions
 * });
 *
 * // Add an element
 * const elementId = api.element.add(sceneId, {
 *   type: 'text',
 *   content: 'Hello World',
 *   left: 100,
 *   top: 100
 * });
 *
 * // Highlight an element (teaching feature)
 * api.canvas.highlight(sceneId, elementId, 3000);
 * ```
 */ // Re-export all types
__turbopack_context__.s([
    "createStageAPI",
    ()=>createStageAPI
]);
// Re-export utility functions that were previously accessible
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-defaults.ts [app-route] (ecmascript)");
// Import sub-API factories
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$scene$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-scene.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$element$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-element.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$canvas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-canvas.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$navigation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-navigation.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$whiteboard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-whiteboard.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$mode$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-mode.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
function createStageAPI(store) {
    return {
        scene: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$scene$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSceneAPI"])(store),
        navigation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$navigation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createNavigationAPI"])(store),
        element: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$element$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createElementAPI"])(store),
        canvas: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$canvas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCanvasAPI"])(store),
        whiteboard: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$whiteboard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createWhiteboardAPI"])(store),
        mode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$mode$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createModeAPI"])(store),
        stage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$mode$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createStageMetaAPI"])(store)
    };
}
}),
"[project]/lib/pbl/mcp/mode-mcp.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Mode MCP - Controls the current workflow mode during PBL generation.
 *
 * Migrated from PBL-Nano. Simplified: no list_tools(), pure method calls.
 */ __turbopack_context__.s([
    "ModeMCP",
    ()=>ModeMCP
]);
class ModeMCP {
    currentMode;
    availableModes;
    constructor(availableModes, defaultMode){
        this.availableModes = availableModes;
        this.currentMode = defaultMode;
    }
    setMode(mode) {
        if (!this.availableModes.includes(mode)) {
            return {
                success: false,
                error: `Mode "${mode}" not available. Available: ${this.availableModes.join(', ')}`
            };
        }
        if (mode === this.currentMode) {
            return {
                success: false,
                error: `Already in "${mode}" mode.`
            };
        }
        this.currentMode = mode;
        return {
            success: true,
            message: `Switched to "${mode}" mode.`
        };
    }
    getCurrentMode() {
        return this.currentMode;
    }
    getAvailableModes() {
        return [
            ...this.availableModes
        ];
    }
}
}),
"[project]/lib/pbl/mcp/project-mcp.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Project MCP - Manages project info (title + description) during PBL generation.
 *
 * Migrated from PBL-Nano. No HTML rendering, no list_tools().
 * Operates directly on a shared PBLProjectConfig.
 */ __turbopack_context__.s([
    "ProjectMCP",
    ()=>ProjectMCP
]);
class ProjectMCP {
    config;
    constructor(config){
        this.config = config;
    }
    getProjectInfo() {
        return {
            success: true,
            title: this.config.projectInfo.title,
            description: this.config.projectInfo.description
        };
    }
    updateTitle(title) {
        if (!title?.trim()) {
            return {
                success: false,
                error: 'Title cannot be empty.'
            };
        }
        this.config.projectInfo.title = title;
        return {
            success: true,
            message: 'Title updated successfully.'
        };
    }
    updateDescription(description) {
        if (description === null || description === undefined) {
            return {
                success: false,
                error: 'Description cannot be null.'
            };
        }
        this.config.projectInfo.description = description;
        return {
            success: true,
            message: 'Description updated successfully.'
        };
    }
}
}),
"[project]/lib/pbl/mcp/agent-mcp.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Agent MCP - Manages project agent roles during PBL generation.
 *
 * Migrated from PBL-Nano. No HTML rendering, no list_tools(), no hardcoded model.
 * Operates directly on a shared PBLProjectConfig.
 */ __turbopack_context__.s([
    "AgentMCP",
    ()=>AgentMCP
]);
class AgentMCP {
    config;
    constructor(config){
        this.config = config;
    }
    listAgents() {
        return {
            success: true,
            agents: this.config.agents.map((a)=>({
                    ...a
                })),
            message: this.config.agents.length === 0 ? 'No agents found.' : undefined
        };
    }
    getAgentInfo(name) {
        const agent = this.config.agents.find((a)=>a.name === name);
        if (!agent) {
            return {
                success: false,
                error: `Agent "${name}" not found.`
            };
        }
        return {
            success: true,
            agent: {
                ...agent
            }
        };
    }
    createAgent(params) {
        const { name, system_prompt, default_mode, delay_time = 0, actor_role = '', role_division = 'development', is_system_agent = false } = params;
        if (!name?.trim()) {
            return {
                success: false,
                error: 'Agent name cannot be empty.'
            };
        }
        if (!system_prompt?.trim()) {
            return {
                success: false,
                error: 'System prompt cannot be empty.'
            };
        }
        if (this.config.agents.find((a)=>a.name === name)) {
            return {
                success: false,
                error: `Agent "${name}" already exists.`
            };
        }
        const newAgent = {
            name,
            actor_role,
            role_division,
            system_prompt,
            default_mode,
            delay_time,
            env: {
                chat: {
                    max_tokens: 4096,
                    system_prompt
                }
            },
            is_user_role: false,
            is_active: false,
            is_system_agent
        };
        this.config.agents.push(newAgent);
        return {
            success: true,
            message: `Agent "${name}" created successfully.`
        };
    }
    updateAgent(params) {
        const agent = this.config.agents.find((a)=>a.name === params.name);
        if (!agent) {
            return {
                success: false,
                error: `Agent "${params.name}" not found.`
            };
        }
        if (params.new_name && params.new_name !== params.name && this.config.agents.find((a)=>a.name === params.new_name)) {
            return {
                success: false,
                error: `Agent "${params.new_name}" already exists.`
            };
        }
        if (params.new_name !== undefined) agent.name = params.new_name;
        if (params.system_prompt !== undefined) {
            agent.system_prompt = params.system_prompt;
            if (agent.env.chat && typeof agent.env.chat === 'object') {
                agent.env.chat.system_prompt = params.system_prompt;
            }
        }
        if (params.default_mode !== undefined) agent.default_mode = params.default_mode;
        if (params.delay_time !== undefined) agent.delay_time = params.delay_time;
        if (params.actor_role !== undefined) agent.actor_role = params.actor_role;
        if (params.role_division !== undefined) agent.role_division = params.role_division;
        return {
            success: true,
            message: 'Agent updated successfully.'
        };
    }
    deleteAgent(name) {
        const index = this.config.agents.findIndex((a)=>a.name === name);
        if (index === -1) {
            return {
                success: false,
                error: `Agent "${name}" not found.`
            };
        }
        this.config.agents.splice(index, 1);
        return {
            success: true,
            message: 'Agent deleted successfully.'
        };
    }
}
}),
"[project]/lib/pbl/mcp/agent-templates.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Agent template prompts for PBL Question and Judge agents.
 *
 * Migrated from PBL-Nano with multi-language support.
 */ __turbopack_context__.s([
    "JUDGE_AGENT_TEMPLATE_PROMPT",
    ()=>JUDGE_AGENT_TEMPLATE_PROMPT,
    "QUESTION_AGENT_TEMPLATE_PROMPT",
    ()=>QUESTION_AGENT_TEMPLATE_PROMPT,
    "getJudgeAgentPrompt",
    ()=>getJudgeAgentPrompt,
    "getQuestionAgentPrompt",
    ()=>getQuestionAgentPrompt
]);
function getQuestionAgentPrompt(language = 'en-US') {
    if (language === 'zh-CN') {
        return QUESTION_AGENT_TEMPLATE_PROMPT_ZH;
    }
    return QUESTION_AGENT_TEMPLATE_PROMPT;
}
function getJudgeAgentPrompt(language = 'en-US') {
    if (language === 'zh-CN') {
        return JUDGE_AGENT_TEMPLATE_PROMPT_ZH;
    }
    return JUDGE_AGENT_TEMPLATE_PROMPT;
}
const QUESTION_AGENT_TEMPLATE_PROMPT = `You are a Question Agent in a Project-Based Learning platform. Your role is to help students understand and complete their assigned issue.

## Your Responsibilities:

1. **Initial Question Generation**: When the issue is activated, you generate 1-3 specific, actionable questions based on the issue's title and description to guide students.

2. **Student Inquiries**: When students @mention you with questions:
   - Provide helpful hints and guidance
   - Ask clarifying questions to help them think critically
   - Never give direct answers - help them discover solutions
   - Reference the generated questions to keep them on track

## Guidelines:
- Be encouraging and supportive
- Focus on learning process, not just answers
- Help students break down complex problems
- Guide them to relevant resources or thinking approaches`;
const JUDGE_AGENT_TEMPLATE_PROMPT = `You are a Judge Agent in a Project-Based Learning platform. Your role is to evaluate whether students have completed their assigned issue successfully.

## Your Responsibilities:

1. **Evaluate Completion**: When students @mention you:
   - Ask them to explain what they've accomplished
   - Review their work against the issue description and generated questions
   - Provide constructive feedback
   - Decide if the issue is complete or needs more work

2. **Feedback Format**:
   - Highlight what was done well
   - Point out gaps or areas for improvement
   - Give clear guidance on next steps if incomplete
   - Provide final verdict: "COMPLETE" or "NEEDS_REVISION"

## Guidelines:
- Be fair but encouraging
- Provide specific, actionable feedback
- Focus on learning outcomes, not perfection
- Celebrate successes while identifying growth areas`;
const QUESTION_AGENT_TEMPLATE_PROMPT_ZH = `你是项目式学习平台中的提问助手（Question Agent）。你的职责是帮助学生理解并完成分配给他们的任务。

## 你的职责：

1. **生成初始问题**：当任务被激活时，根据任务标题和描述生成1-3个具体、可操作的引导问题。

2. **回答学生疑问**：当学生 @mention 你时：
   - 提供有用的提示和引导
   - 通过反问帮助他们批判性思考
   - 不直接给出答案——帮助他们自己发现解决方案
   - 围绕生成的引导问题保持方向

## 准则：
- 鼓励和支持学生
- 关注学习过程，而非仅关注答案
- 帮助学生分解复杂问题
- 引导他们找到相关资源或思路`;
const JUDGE_AGENT_TEMPLATE_PROMPT_ZH = `你是项目式学习平台中的评判助手（Judge Agent）。你的职责是评估学生是否成功完成了分配的任务。

## 你的职责：

1. **评估完成度**：当学生 @mention 你时：
   - 请他们解释完成了什么
   - 对照任务描述和引导问题审核他们的工作
   - 提供建设性反馈
   - 判断任务是否完成或需要改进

2. **反馈格式**：
   - 突出做得好的地方
   - 指出不足和改进空间
   - 如果未完成，给出明确的下一步指导
   - 最终判定："COMPLETE" 或 "NEEDS_REVISION"

## 准则：
- 公正但鼓励
- 提供具体、可操作的反馈
- 关注学习成果，而非完美
- 在肯定成就的同时指出成长空间`;
}),
"[project]/lib/pbl/mcp/issueboard-mcp.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Issueboard MCP - Manages issues and workflow during PBL generation.
 *
 * Migrated from PBL-Nano. Key changes:
 * - No Anthropic SDK dependency (initialize_question_agent removed)
 * - Question agent initialization is handled by generate-pbl.ts post-processing
 * - Operates directly on a shared PBLProjectConfig
 */ __turbopack_context__.s([
    "IssueboardMCP",
    ()=>IssueboardMCP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pbl$2f$mcp$2f$agent$2d$templates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pbl/mcp/agent-templates.ts [app-route] (ecmascript)");
;
class IssueboardMCP {
    config;
    agentMCP;
    language;
    nextIssueId;
    constructor(config, agentMCP, language = 'en-US'){
        this.config = config;
        this.agentMCP = agentMCP;
        this.language = language;
        this.nextIssueId = 1;
    }
    createIssueboard() {
        this.config.issueboard = {
            agent_ids: [],
            issues: [],
            current_issue_id: null
        };
        this.nextIssueId = 1;
        return {
            success: true,
            message: 'Issueboard created successfully.'
        };
    }
    getIssueboard() {
        return {
            success: true,
            agent_ids: [
                ...this.config.issueboard.agent_ids
            ],
            issues: this.config.issueboard.issues.map((i)=>({
                    ...i
                }))
        };
    }
    updateIssueboardAgents(agentIds) {
        this.config.issueboard.agent_ids = [
            ...agentIds
        ];
        return {
            success: true,
            message: 'Issueboard agents updated successfully.'
        };
    }
    createIssue(params) {
        const { title, description, person_in_charge, participants = [], notes = '', parent_issue = null, index = 0 } = params;
        if (!title?.trim()) {
            return {
                success: false,
                error: 'Title cannot be empty.'
            };
        }
        if (!person_in_charge?.trim()) {
            return {
                success: false,
                error: 'Person in charge cannot be empty.'
            };
        }
        if (parent_issue && !this.config.issueboard.issues.find((i)=>i.id === parent_issue)) {
            return {
                success: false,
                error: `Parent issue "${parent_issue}" not found.`
            };
        }
        const issueId = `issue_${this.nextIssueId++}`;
        const questionAgentName = `Question Agent - ${issueId}`;
        const judgeAgentName = `Judge Agent - ${issueId}`;
        const newIssue = {
            id: issueId,
            title,
            description,
            person_in_charge,
            participants: [
                ...participants
            ],
            notes,
            parent_issue,
            index,
            is_done: false,
            is_active: false,
            generated_questions: '',
            question_agent_name: questionAgentName,
            judge_agent_name: judgeAgentName
        };
        this.config.issueboard.issues.push(newIssue);
        // Auto-create question and judge agents
        this.agentMCP.createAgent({
            name: questionAgentName,
            system_prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pbl$2f$mcp$2f$agent$2d$templates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getQuestionAgentPrompt"])(this.language),
            default_mode: 'chat',
            actor_role: 'Question Assistant for Issue',
            role_division: 'development',
            is_system_agent: true
        });
        this.agentMCP.createAgent({
            name: judgeAgentName,
            system_prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pbl$2f$mcp$2f$agent$2d$templates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getJudgeAgentPrompt"])(this.language),
            default_mode: 'chat',
            actor_role: 'Judge for Issue Completion',
            role_division: 'management',
            is_system_agent: true
        });
        return {
            success: true,
            issue_id: issueId,
            message: 'Issue created with question and judge agents.'
        };
    }
    listIssues() {
        return {
            success: true,
            issues: this.config.issueboard.issues.map((i)=>({
                    ...i
                }))
        };
    }
    getIssue(issueId) {
        const issue = this.config.issueboard.issues.find((i)=>i.id === issueId);
        if (!issue) {
            return {
                success: false,
                error: `Issue "${issueId}" not found.`
            };
        }
        return {
            success: true,
            issues: [
                {
                    ...issue
                }
            ]
        };
    }
    updateIssue(params) {
        const issue = this.config.issueboard.issues.find((i)=>i.id === params.issue_id);
        if (!issue) {
            return {
                success: false,
                error: `Issue "${params.issue_id}" not found.`
            };
        }
        if (params.parent_issue !== undefined && params.parent_issue !== null && !this.config.issueboard.issues.find((i)=>i.id === params.parent_issue)) {
            return {
                success: false,
                error: `Parent issue "${params.parent_issue}" not found.`
            };
        }
        if (params.title !== undefined) issue.title = params.title;
        if (params.description !== undefined) issue.description = params.description;
        if (params.person_in_charge !== undefined) issue.person_in_charge = params.person_in_charge;
        if (params.participants !== undefined) issue.participants = [
            ...params.participants
        ];
        if (params.notes !== undefined) issue.notes = params.notes;
        if (params.parent_issue !== undefined) issue.parent_issue = params.parent_issue;
        if (params.index !== undefined) issue.index = params.index;
        return {
            success: true,
            message: 'Issue updated successfully.'
        };
    }
    deleteIssue(issueId) {
        const index = this.config.issueboard.issues.findIndex((i)=>i.id === issueId);
        if (index === -1) {
            return {
                success: false,
                error: `Issue "${issueId}" not found.`
            };
        }
        this.config.issueboard.issues.splice(index, 1);
        // Remove child issues
        this.config.issueboard.issues = this.config.issueboard.issues.filter((i)=>i.parent_issue !== issueId);
        return {
            success: true,
            message: 'Issue deleted successfully.'
        };
    }
    reorderIssues(issueIds) {
        for (const id of issueIds){
            if (!this.config.issueboard.issues.find((i)=>i.id === id)) {
                return {
                    success: false,
                    error: `Issue "${id}" not found.`
                };
            }
        }
        const reordered = [];
        for(let i = 0; i < issueIds.length; i++){
            const issue = this.config.issueboard.issues.find((iss)=>iss.id === issueIds[i]);
            issue.index = i;
            reordered.push(issue);
        }
        // Append any issues not in the reorder list
        for (const issue of this.config.issueboard.issues){
            if (!issueIds.includes(issue.id)) {
                reordered.push(issue);
            }
        }
        this.config.issueboard.issues = reordered;
        return {
            success: true,
            message: 'Issues reordered successfully.'
        };
    }
    activateNextIssue() {
        // Deactivate current
        const current = this.config.issueboard.issues.find((i)=>i.is_active);
        if (current) {
            current.is_active = false;
            this.config.issueboard.current_issue_id = null;
        }
        // Find next incomplete issue
        const next = this.config.issueboard.issues.filter((i)=>!i.is_done).sort((a, b)=>a.index - b.index)[0];
        if (!next) {
            return {
                success: false,
                error: 'No more issues to activate.'
            };
        }
        next.is_active = true;
        this.config.issueboard.current_issue_id = next.id;
        return {
            success: true,
            issue_id: next.id,
            message: `Activated issue: ${next.title}`
        };
    }
    completeCurrentIssue() {
        const current = this.config.issueboard.issues.find((i)=>i.is_active);
        if (!current) {
            return {
                success: false,
                error: 'No active issue to complete.'
            };
        }
        current.is_done = true;
        current.is_active = false;
        this.config.issueboard.current_issue_id = null;
        return {
            success: true,
            message: `Issue "${current.id}" marked as complete.`
        };
    }
}
}),
"[project]/lib/pbl/pbl-system-prompt.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PBL Generation System Prompt
 *
 * Migrated from PBL-Nano's anything2pbl_nano.ts systemPrompt.
 * Enhanced with multi-language support and configurable parameters.
 */ __turbopack_context__.s([
    "buildPBLSystemPrompt",
    ()=>buildPBLSystemPrompt
]);
function buildPBLSystemPrompt(config) {
    const { projectTopic, projectDescription, targetSkills, issueCount = 3, language } = config;
    if (language === 'zh-CN') {
        return buildPBLSystemPromptZH(config);
    }
    return `You are a Teaching Assistant (TA) on a Project-Based Learning platform. You are fully responsible for designing group projects for students based on the course information provided by the teacher.

## Your Responsibility

Design a complete project by:
1. Creating a clear, engaging project title (keep it concise and memorable)
2. Writing a simple, concise project description (2-4 sentences) that covers:
   - What the project is about
   - Key learning objectives
   - What students will accomplish

Keep the description straightforward and easy to understand. Avoid lengthy explanations.

The teacher has provided you with:
- **Project Topic**: ${projectTopic}
- **Project Description**: ${projectDescription}
- **Target Skills**: ${targetSkills.join(', ')}
- **Suggested Number of Issues**: ${issueCount}

Based on this information, you must autonomously design the project. Do not ask for confirmation or additional input - make the best decisions based on the provided context.

## Mode System

You have access to different modes, each providing different sets of tools:
- **project_info**: Tools for setting up basic project information (title, description)
- **agent**: Tools for defining project roles and agents
- **issueboard**: Tools for configuring collaboration workflow
- **idle**: A special mode indicating project configuration is complete

You start in **project_info** mode. Use the \`set_mode\` tool to switch between modes as needed.

## Workflow

1. Start in **project_info** mode: Set up the project title and description
2. Switch to **agent** mode: Define 2-4 development roles students will take on (do NOT create management roles for students)
3. Switch to **issueboard** mode: Create ${issueCount} sequential issues that guide students through the project
4. When all project configuration is complete, switch to **idle** mode

## Agent Design Guidelines

- Create 2-4 **development** roles that students can choose from
- Each role should have a clear responsibility and unique system prompt
- Roles should be complementary (e.g., "Data Analyst", "Frontend Developer", "Project Manager")
- Do NOT create system agents (Question/Judge agents are auto-created per issue)

## Issue Design Guidelines

- Create exactly ${issueCount} issues that form a logical sequence
- Each issue should be completable by one person
- Issues should build on each other (earlier issues provide foundation for later ones)
- Each issue needs: title, description, person_in_charge (use a role name), and relevant participants

## Issue Agent Auto-Creation

When you create issues:
- Each issue automatically gets a Question Agent and a Judge Agent
- You do NOT need to manually create these agents
- Focus on designing meaningful issues with clear descriptions

**IMPORTANT**: Once you have configured the project info, defined all necessary agents (roles), and created the issueboard with tasks, you MUST set your mode to **idle** to indicate completion.

Your initial mode is **project_info**.`;
}
function buildPBLSystemPromptZH(config) {
    const { projectTopic, projectDescription, targetSkills, issueCount = 3 } = config;
    return `你是项目式学习（PBL）平台的教学助手（TA）。你需要根据老师提供的课程信息，自主设计完整的学生小组项目。

## 你的职责

设计一个完整的项目：
1. 创建简洁、有吸引力的项目标题
2. 撰写简明的项目描述（2-4句话），涵盖：
   - 项目内容
   - 核心学习目标
   - 学生将完成什么

老师提供的信息：
- **项目主题**：${projectTopic}
- **项目描述**：${projectDescription}
- **目标技能**：${targetSkills.join('、')}
- **建议任务数量**：${issueCount}

根据以上信息自主设计项目，不要请求确认或额外输入。

## 模式系统

你可以在不同模式间切换，每种模式提供不同的工具集：
- **project_info**：设置项目基本信息（标题、描述）
- **agent**：定义项目角色
- **issueboard**：配置协作工作流和任务
- **idle**：表示项目配置完成的特殊模式

你从 **project_info** 模式开始。使用 \`set_mode\` 工具在模式间切换。

## 工作流程

1. 在 **project_info** 模式中：设置项目标题和描述
2. 切换到 **agent** 模式：定义 2-4 个学生开发角色（不要创建管理角色给学生）
3. 切换到 **issueboard** 模式：创建 ${issueCount} 个顺序任务引导学生完成项目
4. 完成所有配置后，切换到 **idle** 模式

## 角色设计指南

- 创建 2-4 个**开发**角色供学生选择
- 每个角色有明确的职责和独特的系统提示
- 角色应互补（如"数据分析师"、"前端开发者"、"项目经理"）
- 不要创建系统 Agent（问答/评判 Agent 会自动按任务创建）

## 任务设计指南

- 创建恰好 ${issueCount} 个任务，形成逻辑序列
- 每个任务应可由一人完成
- 任务应层层递进（前面的任务为后面的打基础）
- 每个任务需要：标题、描述、负责人（使用角色名称）和相关参与者

## 任务 Agent 自动创建

创建任务时：
- 每个任务会自动获得 Question Agent 和 Judge Agent
- 你不需要手动创建这些 Agent
- 专注于设计有意义的任务和清晰的描述

**重要**：完成项目信息、角色和任务看板配置后，你必须切换到 **idle** 模式表示完成。

你的初始模式是 **project_info**。`;
}
}),
"[project]/lib/pbl/generate-pbl.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generatePBLContent",
    ()=>generatePBLContent
]);
/**
 * PBL Generation - Agentic Loop using Vercel AI SDK
 *
 * Core generation engine that designs a complete PBL project through
 * multi-step tool calling with generateText + stopWhen.
 *
 * Replaces PBL-Nano's Anthropic SDK direct calls with Vercel AI SDK
 * for multi-model compatibility.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+provider-utils@4.0.19_zod@4.3.6/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$116_zod$40$4$2e$3$2e$6$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ai@6.0.116_zod@4.3.6/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$llm$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai/llm.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pbl$2f$mcp$2f$mode$2d$mcp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pbl/mcp/mode-mcp.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pbl$2f$mcp$2f$project$2d$mcp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pbl/mcp/project-mcp.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pbl$2f$mcp$2f$agent$2d$mcp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pbl/mcp/agent-mcp.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pbl$2f$mcp$2f$issueboard$2d$mcp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pbl/mcp/issueboard-mcp.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pbl$2f$pbl$2d$system$2d$prompt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pbl/pbl-system-prompt.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
async function generatePBLContent(config, model, callbacks) {
    const { language } = config;
    // Initialize shared state
    const projectConfig = {
        projectInfo: {
            title: '',
            description: ''
        },
        agents: [],
        issueboard: {
            agent_ids: [],
            issues: [],
            current_issue_id: null
        },
        chat: {
            messages: []
        }
    };
    // Create MCP instances operating on shared state
    const modeMCP = new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pbl$2f$mcp$2f$mode$2d$mcp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ModeMCP"]([
        'project_info',
        'agent',
        'issueboard',
        'idle'
    ], 'project_info');
    const projectMCP = new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pbl$2f$mcp$2f$project$2d$mcp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectMCP"](projectConfig);
    const agentMCP = new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pbl$2f$mcp$2f$agent$2d$mcp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentMCP"](projectConfig);
    const issueboardMCP = new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pbl$2f$mcp$2f$issueboard$2d$mcp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IssueboardMCP"](projectConfig, agentMCP, language);
    callbacks?.onProgress?.('Starting PBL project generation...');
    // Define tools with Zod schemas, delegating to MCP instances
    const pblTools = {
        set_mode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
            description: 'Switch the current working mode. Available modes: project_info, agent, issueboard, idle.',
            inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                    'project_info',
                    'agent',
                    'issueboard',
                    'idle'
                ])
            }),
            execute: async ({ mode })=>modeMCP.setMode(mode)
        }),
        // Project info tools
        get_project_info: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
            description: 'Get the current project information (title and description). Requires project_info mode.',
            inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({}),
            execute: async ()=>{
                if (modeMCP.getCurrentMode() !== 'project_info') {
                    return {
                        success: false,
                        error: 'Must be in project_info mode.'
                    };
                }
                return projectMCP.getProjectInfo();
            }
        }),
        update_title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
            description: 'Update the project title. Requires project_info mode.',
            inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('The new project title')
            }),
            execute: async ({ title })=>{
                if (modeMCP.getCurrentMode() !== 'project_info') {
                    return {
                        success: false,
                        error: 'Must be in project_info mode.'
                    };
                }
                return projectMCP.updateTitle(title);
            }
        }),
        update_description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
            description: 'Update the project description. Requires project_info mode.',
            inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('The new project description')
            }),
            execute: async ({ description })=>{
                if (modeMCP.getCurrentMode() !== 'project_info') {
                    return {
                        success: false,
                        error: 'Must be in project_info mode.'
                    };
                }
                return projectMCP.updateDescription(description);
            }
        }),
        // Agent tools
        list_project_agents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
            description: 'List all agent roles defined for the project. Requires agent mode.',
            inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({}),
            execute: async ()=>{
                if (modeMCP.getCurrentMode() !== 'agent') {
                    return {
                        success: false,
                        error: 'Must be in agent mode.'
                    };
                }
                return agentMCP.listAgents();
            }
        }),
        create_agent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
            description: 'Create a new agent role for the project. Requires agent mode.',
            inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Agent name (e.g., "Data Analyst", "Project Manager")'),
                system_prompt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("System prompt describing the agent's responsibilities"),
                default_mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Default environment mode (e.g., "chat")'),
                actor_role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe('Role description'),
                role_division: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                    'management',
                    'development'
                ]).optional().describe('Role division (default: development)')
            }),
            execute: async (params)=>{
                if (modeMCP.getCurrentMode() !== 'agent') {
                    return {
                        success: false,
                        error: 'Must be in agent mode.'
                    };
                }
                return agentMCP.createAgent(params);
            }
        }),
        update_agent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
            description: "Update an agent role's properties. Requires agent mode.",
            inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('The agent name to update'),
                new_name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe('New agent name'),
                system_prompt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe('New system prompt'),
                default_mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe('New default mode'),
                actor_role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe('New role description'),
                role_division: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                    'management',
                    'development'
                ]).optional()
            }),
            execute: async (params)=>{
                if (modeMCP.getCurrentMode() !== 'agent') {
                    return {
                        success: false,
                        error: 'Must be in agent mode.'
                    };
                }
                return agentMCP.updateAgent(params);
            }
        }),
        delete_agent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
            description: 'Delete an agent role. Requires agent mode.',
            inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('The agent name to delete')
            }),
            execute: async ({ name })=>{
                if (modeMCP.getCurrentMode() !== 'agent') {
                    return {
                        success: false,
                        error: 'Must be in agent mode.'
                    };
                }
                return agentMCP.deleteAgent(name);
            }
        }),
        // Issueboard tools
        create_issueboard: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
            description: 'Create/reset the issueboard. Requires issueboard mode.',
            inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({}),
            execute: async ()=>{
                if (modeMCP.getCurrentMode() !== 'issueboard') {
                    return {
                        success: false,
                        error: 'Must be in issueboard mode.'
                    };
                }
                return issueboardMCP.createIssueboard();
            }
        }),
        get_issueboard: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
            description: 'Get the current issueboard configuration. Requires issueboard mode.',
            inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({}),
            execute: async ()=>{
                if (modeMCP.getCurrentMode() !== 'issueboard') {
                    return {
                        success: false,
                        error: 'Must be in issueboard mode.'
                    };
                }
                return issueboardMCP.getIssueboard();
            }
        }),
        update_issueboard_agents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
            description: 'Update the agent list for the issueboard. Requires issueboard mode.',
            inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                agent_ids: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).describe('List of agent names to assign')
            }),
            execute: async ({ agent_ids })=>{
                if (modeMCP.getCurrentMode() !== 'issueboard') {
                    return {
                        success: false,
                        error: 'Must be in issueboard mode.'
                    };
                }
                return issueboardMCP.updateIssueboardAgents(agent_ids);
            }
        }),
        create_issue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
            description: 'Create a new issue in the issueboard. Automatically creates Question and Judge agents. Requires issueboard mode.',
            inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Issue title'),
                description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Issue description'),
                person_in_charge: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Person responsible (use an agent role name)'),
                participants: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional().describe('Participant names'),
                notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe('Additional notes'),
                parent_issue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional().describe('Parent issue ID for sub-issues'),
                index: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional().describe('Order index')
            }),
            execute: async (params)=>{
                if (modeMCP.getCurrentMode() !== 'issueboard') {
                    return {
                        success: false,
                        error: 'Must be in issueboard mode.'
                    };
                }
                return issueboardMCP.createIssue(params);
            }
        }),
        list_issues: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
            description: 'List all issues in the issueboard. Requires issueboard mode.',
            inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({}),
            execute: async ()=>{
                if (modeMCP.getCurrentMode() !== 'issueboard') {
                    return {
                        success: false,
                        error: 'Must be in issueboard mode.'
                    };
                }
                return issueboardMCP.listIssues();
            }
        }),
        update_issue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
            description: 'Update an existing issue. Requires issueboard mode.',
            inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                issue_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('The issue ID to update'),
                title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
                description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
                person_in_charge: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
                participants: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
                notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
                parent_issue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
                index: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
            }),
            execute: async (params)=>{
                if (modeMCP.getCurrentMode() !== 'issueboard') {
                    return {
                        success: false,
                        error: 'Must be in issueboard mode.'
                    };
                }
                return issueboardMCP.updateIssue(params);
            }
        }),
        delete_issue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
            description: 'Delete an issue and its sub-issues. Requires issueboard mode.',
            inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                issue_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('The issue ID to delete')
            }),
            execute: async ({ issue_id })=>{
                if (modeMCP.getCurrentMode() !== 'issueboard') {
                    return {
                        success: false,
                        error: 'Must be in issueboard mode.'
                    };
                }
                return issueboardMCP.deleteIssue(issue_id);
            }
        }),
        reorder_issues: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$19_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
            description: 'Reorder issues. Requires issueboard mode.',
            inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                issue_ids: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).describe('Issue IDs in desired order')
            }),
            execute: async ({ issue_ids })=>{
                if (modeMCP.getCurrentMode() !== 'issueboard') {
                    return {
                        success: false,
                        error: 'Must be in issueboard mode.'
                    };
                }
                return issueboardMCP.reorderIssues(issue_ids);
            }
        })
    };
    // Run the agentic loop
    const systemPrompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pbl$2f$pbl$2d$system$2d$prompt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPBLSystemPrompt"])(config);
    const _result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$llm$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["callLLM"])({
        model,
        system: systemPrompt,
        prompt: language === 'zh-CN' ? `请设计一个PBL项目。现在从 project_info 模式开始，先设置项目标题和描述。` : `Design a PBL project. Start in project_info mode by setting the project title and description.`,
        tools: pblTools,
        stopWhen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$116_zod$40$4$2e$3$2e$6$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stepCountIs"])(30),
        onStepFinish: ({ toolCalls, text })=>{
            if (text) {
                callbacks?.onProgress?.(`Thinking: ${text.slice(0, 100)}...`);
            }
            if (toolCalls) {
                for (const tc of toolCalls){
                    callbacks?.onProgress?.(`Tool: ${tc.toolName}`);
                }
            }
        }
    }, 'pbl-generate');
    // Check if mode reached idle; if not, the LLM may have stopped early
    if (modeMCP.getCurrentMode() !== 'idle') {
        callbacks?.onProgress?.('Warning: Generation did not reach idle mode. Project may be incomplete.');
    }
    callbacks?.onProgress?.('PBL structure generated. Running post-processing...');
    // Post-processing: activate first issue and generate initial questions
    await postProcessPBL(projectConfig, model, language, callbacks);
    callbacks?.onProgress?.('PBL project generation complete!');
    return projectConfig;
}
/**
 * Post-processing after the agentic loop:
 * 1. Activate the first issue
 * 2. Generate initial questions for it using the Question Agent
 * 3. Add welcome message to chat
 */ async function postProcessPBL(config, model, language, callbacks) {
    const { issueboard, agents } = config;
    if (issueboard.issues.length === 0) {
        return;
    }
    // Sort by index and activate first
    const sortedIssues = [
        ...issueboard.issues
    ].sort((a, b)=>a.index - b.index);
    const firstIssue = sortedIssues[0];
    firstIssue.is_active = true;
    issueboard.current_issue_id = firstIssue.id;
    callbacks?.onProgress?.(`Activating first issue: ${firstIssue.title}`);
    // Generate initial questions for the first issue
    const questionAgent = agents.find((a)=>a.name === firstIssue.question_agent_name);
    if (!questionAgent) {
        callbacks?.onProgress?.('Warning: Question agent not found for first issue.');
        return;
    }
    try {
        callbacks?.onProgress?.('Generating initial questions for first issue...');
        const context = language === 'zh-CN' ? `## 任务信息

**标题**: ${firstIssue.title}
**描述**: ${firstIssue.description}
**负责人**: ${firstIssue.person_in_charge}
${firstIssue.participants.length > 0 ? `**参与者**: ${firstIssue.participants.join('、')}` : ''}
${firstIssue.notes ? `**备注**: ${firstIssue.notes}` : ''}

## 你的任务

根据以上任务信息，生成1-3个具体、可操作的引导问题，帮助学生理解和完成这个任务。每个问题应：
- 引导学生达成关键学习目标
- 具体且可操作
- 帮助分解问题
- 鼓励批判性思考

请以编号列表格式回答。` : `## Issue Information

**Title**: ${firstIssue.title}
**Description**: ${firstIssue.description}
**Person in Charge**: ${firstIssue.person_in_charge}
${firstIssue.participants.length > 0 ? `**Participants**: ${firstIssue.participants.join(', ')}` : ''}
${firstIssue.notes ? `**Notes**: ${firstIssue.notes}` : ''}

## Your Task

Based on the issue information above, generate 1-3 specific, actionable questions that will help students understand and complete this issue. Each question should:
- Guide students toward key learning objectives
- Be specific and actionable
- Help break down the problem
- Encourage critical thinking

Format your response as a numbered list.`;
        const questionResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$llm$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["callLLM"])({
            model,
            system: questionAgent.system_prompt,
            prompt: context
        }, 'pbl-post-process');
        const generatedQuestions = questionResult.text;
        firstIssue.generated_questions = generatedQuestions;
        // Add welcome message to chat
        const welcomeMessage = language === 'zh-CN' ? `你好！我是这个任务的提问助手："${firstIssue.title}"\n\n为了引导你的学习，我准备了一些问题：\n\n${generatedQuestions}\n\n随时 @question 我来获取帮助或澄清！` : `Hello! I'm your Question Agent for this issue: "${firstIssue.title}"\n\nTo help guide your work, I've prepared some questions for you:\n\n${generatedQuestions}\n\nFeel free to @question me anytime if you need help or clarification!`;
        config.chat.messages.push({
            id: `msg_welcome_${Date.now()}`,
            agent_name: firstIssue.question_agent_name,
            message: welcomeMessage,
            timestamp: Date.now(),
            read_by: []
        });
        callbacks?.onProgress?.('Initial questions generated and welcome message added.');
    } catch (error) {
        callbacks?.onProgress?.(`Warning: Failed to generate initial questions: ${error instanceof Error ? error.message : String(error)}`);
    }
}
}),
"[project]/lib/generation/interactive-post-processor.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Interactive HTML Post-Processor
 *
 * Ported from Python's PostProcessor class (learn-your-way/concept_to_html.py:287-385)
 *
 * Handles:
 * - LaTeX delimiter conversion ($$...$$ -> \[...\], $...$ -> \(...\))
 * - KaTeX CSS/JS injection with auto-render and MutationObserver
 * - Script tag protection during LaTeX conversion
 */ /**
 * Main entry point: post-process generated interactive HTML
 * Converts LaTeX delimiters and injects KaTeX rendering resources.
 */ __turbopack_context__.s([
    "postProcessInteractiveHtml",
    ()=>postProcessInteractiveHtml
]);
function postProcessInteractiveHtml(html) {
    // Convert LaTeX delimiters while protecting script tags
    let processed = convertLatexDelimiters(html);
    // Inject KaTeX resources if not already present
    if (!processed.toLowerCase().includes('katex')) {
        processed = injectKatex(processed);
    }
    return processed;
}
/**
 * Convert LaTeX delimiters while protecting <script> tags.
 *
 * - Protects script blocks from modification
 * - Converts $$...$$ to \[...\] (display math)
 * - Converts $...$ to \(...\) (inline math)
 * - Restores script blocks after conversion
 */ function convertLatexDelimiters(html) {
    const scriptBlocks = [];
    // Protect script tags by replacing them with placeholders
    let processed = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, (match)=>{
        scriptBlocks.push(match);
        return `__SCRIPT_BLOCK_${scriptBlocks.length - 1}__`;
    });
    // Convert display math: $$...$$ -> \[...\]
    processed = processed.replace(/\$\$([^$]+)\$\$/g, '\\[$1\\]');
    // Convert inline math: $...$ -> \(...\)
    // Use non-greedy match and exclude newlines to avoid false positives
    processed = processed.replace(/\$([^$\n]+?)\$/g, '\\($1\\)');
    // Restore script blocks using indexOf + substring (not .replace())
    // because script content may contain $ characters that .replace()
    // would interpret as special substitution patterns.
    for(let i = 0; i < scriptBlocks.length; i++){
        const placeholder = `__SCRIPT_BLOCK_${i}__`;
        const idx = processed.indexOf(placeholder);
        if (idx !== -1) {
            processed = processed.substring(0, idx) + scriptBlocks[i] + processed.substring(idx + placeholder.length);
        }
    }
    return processed;
}
/**
 * Inject KaTeX CSS, JS, auto-render, and MutationObserver before </head>.
 * Falls back to appending at end if </head> is not found.
 */ function injectKatex(html) {
    const katexInjection = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
<script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function() {
    const katexOptions = {
        delimiters: [
            {left: '\\\\[', right: '\\\\]', display: true},
            {left: '\\\\(', right: '\\\\)', display: false},
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
        ],
        throwOnError: false,
        strict: false,
        trust: true
    };

    let renderTimeout;
    function safeRender() {
        if (renderTimeout) clearTimeout(renderTimeout);
        renderTimeout = setTimeout(() => {
            renderMathInElement(document.body, katexOptions);
        }, 100);
    }

    renderMathInElement(document.body, katexOptions);

    const observer = new MutationObserver((mutations) => {
        let shouldRender = false;
        mutations.forEach((mutation) => {
            if (mutation.target &&
                mutation.target.className &&
                typeof mutation.target.className === 'string' &&
                mutation.target.className.includes('katex')) {
                return;
            }
            shouldRender = true;
        });

        if (shouldRender) {
            safeRender();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });

    setInterval(() => {
        const text = document.body.innerText;
        if (text.includes('\\\\(') || text.includes('$$')) {
            safeRender();
        }
    }, 2000);
});
</script>`;
    // Use indexOf + substring instead of String.replace() because the
    // katexInjection string contains '$' characters that .replace() would
    // interpret as special substitution patterns ($$ → $, $' → post-match text).
    const headCloseIdx = html.indexOf('</head>');
    if (headCloseIdx !== -1) {
        return html.substring(0, headCloseIdx) + katexInjection + '\n</head>' + html.substring(headCloseIdx + 7);
    }
    // Fallback: inject before </body> if </head> is missing
    const bodyCloseIdx = html.indexOf('</body>');
    if (bodyCloseIdx !== -1) {
        return html.substring(0, bodyCloseIdx) + katexInjection + '\n</body>' + html.substring(bodyCloseIdx + 7);
    }
    // Last resort: append at end
    return html + katexInjection;
}
}),
"[project]/lib/types/action.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Unified Action System
 *
 * Actions are the sole mechanism for agents to interact with the presentation.
 * Two categories:
 * - Fire-and-forget: visual effects on slides (spotlight, laser)
 * - Synchronous: must wait for completion before next action (speech, whiteboard, discussion)
 *
 * Both online (streaming) and offline (playback) paths consume the same Action types.
 */ // ==================== Base ====================
__turbopack_context__.s([
    "FIRE_AND_FORGET_ACTIONS",
    ()=>FIRE_AND_FORGET_ACTIONS,
    "SLIDE_ONLY_ACTIONS",
    ()=>SLIDE_ONLY_ACTIONS,
    "SYNC_ACTIONS",
    ()=>SYNC_ACTIONS
]);
const FIRE_AND_FORGET_ACTIONS = [
    'spotlight',
    'laser'
];
const SLIDE_ONLY_ACTIONS = [
    'spotlight',
    'laser'
];
const SYNC_ACTIONS = [
    'speech',
    'play_video',
    'wb_open',
    'wb_draw_text',
    'wb_draw_shape',
    'wb_draw_chart',
    'wb_draw_latex',
    'wb_draw_table',
    'wb_draw_line',
    'wb_clear',
    'wb_delete',
    'wb_close',
    'discussion'
];
}),
"[project]/lib/generation/action-parser.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Action Parser - converts structured JSON Array output to Action[]
 *
 * Bridges the stateless-generate parser (used for online streaming) with the
 * offline generation pipeline, producing typed Action objects that preserve
 * the original interleaving order from the LLM output.
 *
 * For complete (non-streaming) responses, uses JSON.parse with partial-json
 * fallback for robustness.
 */ __turbopack_context__.s([
    "parseActionsFromStructuredOutput",
    ()=>parseActionsFromStructuredOutput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$action$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/action.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$partial$2d$json$40$0$2e$1$2e$7$2f$node_modules$2f$partial$2d$json$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/partial-json@0.1.7/node_modules/partial-json/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jsonrepair$40$3$2e$13$2e$3$2f$node_modules$2f$jsonrepair$2f$lib$2f$esm$2f$regular$2f$jsonrepair$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jsonrepair@3.13.3/node_modules/jsonrepair/lib/esm/regular/jsonrepair.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-route] (ecmascript)");
;
;
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLogger"])('ActionParser');
/**
 * Strip markdown code fences (```json ... ``` or ``` ... ```) from a response string.
 */ function stripCodeFences(text) {
    // Remove opening ```json or ``` and closing ```
    return text.replace(/^```(?:json)?\s*\n?/i, '').replace(/\n?\s*```\s*$/i, '');
}
function parseActionsFromStructuredOutput(response, sceneType, allowedActions) {
    // Step 1: Strip markdown code fences if present
    const cleaned = stripCodeFences(response.trim());
    // Step 2: Find the JSON array range
    const startIdx = cleaned.indexOf('[');
    const endIdx = cleaned.lastIndexOf(']');
    if (startIdx === -1) {
        log.warn('No JSON array found in response');
        return [];
    }
    const jsonStr = endIdx > startIdx ? cleaned.slice(startIdx, endIdx + 1) : cleaned.slice(startIdx); // unclosed array — let partial-json handle it
    // Step 3: Parse — try JSON.parse first, then jsonrepair, fallback to partial-json
    let items;
    try {
        items = JSON.parse(jsonStr);
    } catch  {
        // Try jsonrepair to fix malformed JSON (e.g. unescaped quotes in Chinese text)
        try {
            items = JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jsonrepair$40$3$2e$13$2e$3$2f$node_modules$2f$jsonrepair$2f$lib$2f$esm$2f$regular$2f$jsonrepair$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonrepair"])(jsonStr));
            log.info('Recovered malformed JSON via jsonrepair');
        } catch  {
            try {
                items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$partial$2d$json$40$0$2e$1$2e$7$2f$node_modules$2f$partial$2d$json$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parse"])(jsonStr, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$partial$2d$json$40$0$2e$1$2e$7$2f$node_modules$2f$partial$2d$json$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Allow"].ARR | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$partial$2d$json$40$0$2e$1$2e$7$2f$node_modules$2f$partial$2d$json$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Allow"].OBJ | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$partial$2d$json$40$0$2e$1$2e$7$2f$node_modules$2f$partial$2d$json$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Allow"].STR | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$partial$2d$json$40$0$2e$1$2e$7$2f$node_modules$2f$partial$2d$json$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Allow"].NUM | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$partial$2d$json$40$0$2e$1$2e$7$2f$node_modules$2f$partial$2d$json$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Allow"].BOOL | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$partial$2d$json$40$0$2e$1$2e$7$2f$node_modules$2f$partial$2d$json$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Allow"].NULL);
            } catch (e) {
                log.warn('Failed to parse JSON array:', e.message);
                return [];
            }
        }
    }
    if (!Array.isArray(items)) {
        log.warn('Parsed result is not an array');
        return [];
    }
    // Step 4: Convert items to Action[]
    const actions = [];
    for (const item of items){
        if (!item || typeof item !== 'object' || !('type' in item)) continue;
        const typedItem = item;
        if (typedItem.type === 'text') {
            const text = (typedItem.content || '').trim();
            if (text) {
                actions.push({
                    id: `action_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(8)}`,
                    type: 'speech',
                    text
                });
            }
        } else if (typedItem.type === 'action') {
            try {
                // Support both new format (name/params) and legacy format (tool_name/parameters)
                const actionName = typedItem.name || typedItem.tool_name;
                const actionParams = typedItem.params || typedItem.parameters || {};
                actions.push({
                    id: typedItem.action_id || typedItem.tool_id || `action_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(8)}`,
                    type: actionName,
                    ...actionParams
                });
            } catch (_e) {
                log.warn('Invalid action item, skipping:', JSON.stringify(typedItem).slice(0, 100));
            }
        }
    }
    // Step 5: Post-processing — discussion must be the last action, and at most one
    const discussionIdx = actions.findIndex((a)=>a.type === 'discussion');
    if (discussionIdx !== -1 && discussionIdx < actions.length - 1) {
        actions.splice(discussionIdx + 1);
    }
    // Step 6: Filter out slide-only actions for non-slide scenes (defense in depth)
    if (sceneType && sceneType !== 'slide') {
        const before = actions.length;
        const filtered = actions.filter((a)=>!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$action$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SLIDE_ONLY_ACTIONS"].includes(a.type));
        if (filtered.length < before) {
            log.info(`Stripped ${before - filtered.length} slide-only action(s) from ${sceneType} scene`);
        }
        return filtered;
    }
    // Step 7: Filter by allowedActions whitelist (defense in depth for role-based isolation)
    // Catches hallucinated actions not in the agent's permitted set, e.g. a student agent
    // mimicking spotlight/laser after seeing teacher actions in chat history.
    if (allowedActions && allowedActions.length > 0) {
        const before = actions.length;
        const filtered = actions.filter((a)=>a.type === 'speech' || allowedActions.includes(a.type));
        if (filtered.length < before) {
            log.info(`Stripped ${before - filtered.length} disallowed action(s) by allowedActions whitelist`);
        }
        return filtered;
    }
    return actions;
}
}),
"[project]/lib/generation/scene-generator.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSceneWithActions",
    ()=>createSceneWithActions,
    "generateFullScenes",
    ()=>generateFullScenes,
    "generateSceneActions",
    ()=>generateSceneActions,
    "generateSceneContent",
    ()=>generateSceneContent
]);
/**
 * Stage 2: Scene content and action generation.
 *
 * Generates full scenes (slide/quiz/interactive/pbl with actions)
 * from scene outlines.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$katex$40$0$2e$16$2e$38$2f$node_modules$2f$katex$2f$dist$2f$katex$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/katex@0.16.38/node_modules/katex/dist/katex.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$generation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/generation.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/api/stage-api.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pbl$2f$generate$2d$pbl$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pbl/generate-pbl.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/generation/prompts/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/prompts/loader.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$interactive$2d$post$2d$processor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/interactive-post-processor.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$action$2d$parser$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/action-parser.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$json$2d$repair$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/json-repair.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompt$2d$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/prompt-formatters.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-route] (ecmascript)");
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
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLogger"])('Generation');
async function generateFullScenes(sceneOutlines, store, aiCall, callbacks) {
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createStageAPI"])(store);
    const totalScenes = sceneOutlines.length;
    let completedCount = 0;
    callbacks?.onProgress?.({
        currentStage: 3,
        overallProgress: 66,
        stageProgress: 0,
        statusMessage: `正在并行生成 ${totalScenes} 个场景...`,
        scenesGenerated: 0,
        totalScenes
    });
    // Generate all scenes in parallel
    const results = await Promise.all(sceneOutlines.map(async (outline, index)=>{
        try {
            const sceneId = await generateSingleScene(outline, api, aiCall);
            // Update progress (not atomic, but sufficient for UI display)
            completedCount++;
            callbacks?.onProgress?.({
                currentStage: 3,
                overallProgress: 66 + Math.floor(completedCount / totalScenes * 34),
                stageProgress: Math.floor(completedCount / totalScenes * 100),
                statusMessage: `已完成 ${completedCount}/${totalScenes} 个场景`,
                scenesGenerated: completedCount,
                totalScenes
            });
            return {
                success: true,
                sceneId,
                index
            };
        } catch (error) {
            completedCount++;
            callbacks?.onError?.(`Failed to generate scene ${outline.title}: ${error}`);
            return {
                success: false,
                sceneId: null,
                index
            };
        }
    }));
    // Collect successful sceneIds in original order
    const sceneIds = results.filter((r)=>r.success && r.sceneId !== null).sort((a, b)=>a.index - b.index).map((r)=>r.sceneId);
    return {
        success: true,
        data: sceneIds
    };
}
/**
 * Generate a single scene (two-step process)
 *
 * Step 3.1: Generate content
 * Step 3.2: Generate Actions
 */ async function generateSingleScene(outline, api, aiCall) {
    // Step 3.1: Generate content
    log.info(`Step 3.1: Generating content for: ${outline.title}`);
    const content = await generateSceneContent(outline, aiCall);
    if (!content) {
        log.error(`Failed to generate content for: ${outline.title}`);
        return null;
    }
    // Step 3.2: Generate Actions
    log.info(`Step 3.2: Generating actions for: ${outline.title}`);
    const actions = await generateSceneActions(outline, content, aiCall);
    log.info(`Generated ${actions.length} actions for: ${outline.title}`);
    // Create complete Scene
    return createSceneWithActions(outline, content, actions, api);
}
async function generateSceneContent(outline, aiCall, assignedImages, imageMapping, languageModel, visionEnabled, generatedMediaMapping, agents) {
    // If outline is interactive but missing interactiveConfig, fall back to slide
    if (outline.type === 'interactive' && !outline.interactiveConfig) {
        log.warn(`Interactive outline "${outline.title}" missing interactiveConfig, falling back to slide`);
        const fallbackOutline = {
            ...outline,
            type: 'slide'
        };
        return generateSlideContent(fallbackOutline, aiCall, assignedImages, imageMapping, visionEnabled, generatedMediaMapping, agents);
    }
    switch(outline.type){
        case 'slide':
            return generateSlideContent(outline, aiCall, assignedImages, imageMapping, visionEnabled, generatedMediaMapping, agents);
        case 'quiz':
            return generateQuizContent(outline, aiCall);
        case 'interactive':
            return generateInteractiveContent(outline, aiCall, outline.language);
        case 'pbl':
            return generatePBLSceneContent(outline, languageModel);
        default:
            return null;
    }
}
/**
 * Check if a string looks like an image ID (e.g., "img_1", "img_2")
 * rather than a base64 data URL or actual URL
 *
 * This function distinguishes between:
 * - Image IDs: "img_1", "img_2", etc. → returns true
 * - Base64 data URLs: "data:image/..." → returns false
 * - HTTP URLs: "http://...", "https://..." → returns false
 * - Relative paths: "/images/..." → returns false
 */ function isImageIdReference(value) {
    if (!value) return false;
    // Exclude real URLs and paths
    if (value.startsWith('data:')) return false;
    if (value.startsWith('http://') || value.startsWith('https://')) return false;
    if (value.startsWith('/')) return false; // Relative paths
    // Match image ID format: img_1, img_2, etc.
    return /^img_\d+$/i.test(value);
}
/**
 * Check if a string looks like a generated image/video ID (e.g., "gen_img_1", "gen_img_xK8f2mQ")
 * These are placeholders for AI-generated media, not PDF-extracted images.
 */ function isGeneratedImageId(value) {
    if (!value) return false;
    return /^gen_(img|vid)_[\w-]+$/i.test(value);
}
/**
 * Resolve image ID references in src field to actual base64 URLs
 *
 * AI generates: { type: "image", src: "img_1", ... }
 * This function replaces: { type: "image", src: "data:image/png;base64,...", ... }
 *
 * Design rationale (Plan B):
 * - Simpler: AI only needs to know one field (src)
 * - Consistent: Generated JSON structure matches final PPTImageElement
 * - Intuitive: src is the image source, first as ID then as actual URL
 * - Less prompt complexity: No need to explain imageId vs src distinction
 */ function resolveImageIds(elements, imageMapping, generatedMediaMapping) {
    return elements.map((el)=>{
        if (el.type === 'image') {
            if (!('src' in el)) {
                log.warn(`Image element missing src, removing element`);
                return null; // Remove invalid image elements
            }
            const src = el.src;
            // If src is an image ID reference, replace with actual URL
            if (isImageIdReference(src)) {
                if (!imageMapping || !imageMapping[src]) {
                    log.warn(`No mapping for image ID: ${src}, removing element`);
                    return null; // Remove invalid image elements
                }
                log.debug(`Resolved image ID "${src}" to base64 URL`);
                return {
                    ...el,
                    src: imageMapping[src]
                };
            }
            // Generated image reference — keep as placeholder for async backfill
            if (isGeneratedImageId(src)) {
                if (generatedMediaMapping && generatedMediaMapping[src]) {
                    log.debug(`Resolved generated image ID "${src}" to URL`);
                    return {
                        ...el,
                        src: generatedMediaMapping[src]
                    };
                }
                // Keep element with placeholder ID — frontend renders skeleton
                log.debug(`Keeping generated image placeholder: ${src}`);
                return el;
            }
        }
        if (el.type === 'video') {
            if (!('src' in el)) {
                log.warn(`Video element missing src, removing element`);
                return null;
            }
            const src = el.src;
            if (isGeneratedImageId(src)) {
                if (generatedMediaMapping && generatedMediaMapping[src]) {
                    log.debug(`Resolved generated video ID "${src}" to URL`);
                    return {
                        ...el,
                        src: generatedMediaMapping[src]
                    };
                }
                // Keep element with placeholder ID — frontend renders skeleton
                log.debug(`Keeping generated video placeholder: ${src}`);
                return el;
            }
        }
        return el;
    }).filter((el)=>el !== null);
}
/**
 * Fix elements with missing required fields
 * Adds default values for fields that AI might not have generated correctly
 */ function fixElementDefaults(elements, assignedImages) {
    return elements.map((el)=>{
        // Fix line elements
        if (el.type === 'line') {
            const lineEl = el;
            // Ensure points field exists with default values
            if (!lineEl.points || !Array.isArray(lineEl.points) || lineEl.points.length !== 2) {
                log.warn(`Line element missing points, adding defaults`);
                lineEl.points = [
                    '',
                    ''
                ]; // Default: no markers on either end
            }
            // Ensure start/end exist
            if (!lineEl.start || !Array.isArray(lineEl.start)) {
                lineEl.start = [
                    el.left ?? 0,
                    el.top ?? 0
                ];
            }
            if (!lineEl.end || !Array.isArray(lineEl.end)) {
                lineEl.end = [
                    (el.left ?? 0) + (el.width ?? 100),
                    (el.top ?? 0) + (el.height ?? 0)
                ];
            }
            // Ensure style exists
            if (!lineEl.style) {
                lineEl.style = 'solid';
            }
            // Ensure color exists
            if (!lineEl.color) {
                lineEl.color = '#333333';
            }
            return lineEl;
        }
        // Fix text elements
        if (el.type === 'text') {
            const textEl = el;
            if (!textEl.defaultFontName) {
                textEl.defaultFontName = 'Microsoft YaHei';
            }
            if (!textEl.defaultColor) {
                textEl.defaultColor = '#333333';
            }
            if (!textEl.content) {
                textEl.content = '';
            }
            return textEl;
        }
        // Fix image elements
        if (el.type === 'image') {
            const imageEl = el;
            if (imageEl.fixedRatio === undefined) {
                imageEl.fixedRatio = true;
            }
            // Correct dimensions using known aspect ratio (src is still img_id at this point)
            if (assignedImages && typeof imageEl.src === 'string') {
                const imgMeta = assignedImages.find((img)=>img.id === imageEl.src);
                if (imgMeta?.width && imgMeta?.height) {
                    const knownRatio = imgMeta.width / imgMeta.height;
                    const curW = el.width || 400;
                    const curH = el.height || 300;
                    if (Math.abs(curW / curH - knownRatio) / knownRatio > 0.1) {
                        // Keep width, correct height
                        const newH = Math.round(curW / knownRatio);
                        if (newH > 462) {
                            // canvas 562.5 - margins 50×2
                            const newW = Math.round(462 * knownRatio);
                            imageEl.width = newW;
                            imageEl.height = 462;
                        } else {
                            imageEl.height = newH;
                        }
                    }
                }
            }
            return imageEl;
        }
        // Fix shape elements
        if (el.type === 'shape') {
            const shapeEl = el;
            if (!shapeEl.viewBox) {
                shapeEl.viewBox = `0 0 ${el.width ?? 100} ${el.height ?? 100}`;
            }
            if (!shapeEl.path) {
                // Default to rectangle
                const w = el.width ?? 100;
                const h = el.height ?? 100;
                shapeEl.path = `M0 0 L${w} 0 L${w} ${h} L0 ${h} Z`;
            }
            if (!shapeEl.fill) {
                shapeEl.fill = '#5b9bd5';
            }
            if (shapeEl.fixedRatio === undefined) {
                shapeEl.fixedRatio = false;
            }
            return shapeEl;
        }
        return el;
    });
}
/**
 * Process LaTeX elements: render latex string to HTML using KaTeX.
 * Fills in html and fixedRatio fields.
 * Elements that fail conversion are removed.
 */ function processLatexElements(elements) {
    return elements.map((el)=>{
        if (el.type !== 'latex') return el;
        const latexStr = el.latex;
        if (!latexStr) {
            log.warn('Latex element missing latex string, removing');
            return null;
        }
        try {
            const html = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$katex$40$0$2e$16$2e$38$2f$node_modules$2f$katex$2f$dist$2f$katex$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].renderToString(latexStr, {
                throwOnError: false,
                displayMode: true,
                output: 'html'
            });
            return {
                ...el,
                html,
                fixedRatio: true
            };
        } catch (err) {
            log.warn(`Failed to render latex "${latexStr}":`, err);
            return null;
        }
    }).filter((el)=>el !== null);
}
/**
 * Generate slide content
 */ async function generateSlideContent(outline, aiCall, assignedImages, imageMapping, visionEnabled, generatedMediaMapping, agents) {
    const lang = outline.language || 'zh-CN';
    // Build assigned images description for the prompt
    let assignedImagesText = '无可用图片，禁止插入任何 image 元素';
    let visionImages;
    if (assignedImages && assignedImages.length > 0) {
        if (visionEnabled && imageMapping) {
            // Vision mode: split into vision images and text-only
            const withSrc = assignedImages.filter((img)=>imageMapping[img.id]);
            const visionSlice = withSrc.slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$generation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MAX_VISION_IMAGES"]);
            const textOnlySlice = withSrc.slice(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$generation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MAX_VISION_IMAGES"]);
            const noSrcImages = assignedImages.filter((img)=>!imageMapping[img.id]);
            const visionDescriptions = visionSlice.map((img)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompt$2d$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatImagePlaceholder"])(img, lang));
            const textDescriptions = [
                ...textOnlySlice,
                ...noSrcImages
            ].map((img)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompt$2d$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatImageDescription"])(img, lang));
            assignedImagesText = [
                ...visionDescriptions,
                ...textDescriptions
            ].join('\n');
            visionImages = visionSlice.map((img)=>({
                    id: img.id,
                    src: imageMapping[img.id],
                    width: img.width,
                    height: img.height
                }));
        } else {
            assignedImagesText = assignedImages.map((img)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompt$2d$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatImageDescription"])(img, lang)).join('\n');
        }
    }
    // Add generated media placeholders info (images + videos)
    if (outline.mediaGenerations && outline.mediaGenerations.length > 0) {
        const genImgDescs = outline.mediaGenerations.filter((mg)=>mg.type === 'image').map((mg)=>`- ${mg.elementId}: "${mg.prompt}" (aspect ratio: ${mg.aspectRatio || '16:9'})`).join('\n');
        const genVidDescs = outline.mediaGenerations.filter((mg)=>mg.type === 'video').map((mg)=>`- ${mg.elementId}: "${mg.prompt}" (aspect ratio: ${mg.aspectRatio || '16:9'})`).join('\n');
        const mediaParts = [];
        if (genImgDescs) {
            mediaParts.push(`AI-Generated Images (use these IDs as image element src):\n${genImgDescs}`);
        }
        if (genVidDescs) {
            mediaParts.push(`AI-Generated Videos (use these IDs as video element src):\n${genVidDescs}`);
        }
        if (mediaParts.length > 0) {
            const mediaText = mediaParts.join('\n\n');
            if (assignedImagesText.includes('禁止插入') || assignedImagesText.includes('No images')) {
                assignedImagesText = mediaText;
            } else {
                assignedImagesText += `\n\n${mediaText}`;
            }
        }
    }
    // Canvas dimensions (matching viewportSize and viewportRatio)
    const canvasWidth = 1000;
    const canvasHeight = 562.5;
    const teacherContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompt$2d$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatTeacherPersonaForPrompt"])(agents);
    const prompts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPrompt"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PROMPT_IDS"].SLIDE_CONTENT, {
        title: outline.title,
        description: outline.description,
        keyPoints: (outline.keyPoints || []).map((p, i)=>`${i + 1}. ${p}`).join('\n'),
        elements: '（根据要点自动生成）',
        assignedImages: assignedImagesText,
        canvas_width: canvasWidth,
        canvas_height: canvasHeight,
        teacherContext
    });
    if (!prompts) {
        return null;
    }
    log.debug(`Generating slide content for: ${outline.title}`);
    if (assignedImages && assignedImages.length > 0) {
        log.debug(`Assigned images: ${assignedImages.map((img)=>img.id).join(', ')}`);
    }
    if (visionImages && visionImages.length > 0) {
        log.debug(`Vision images: ${visionImages.map((img)=>img.id).join(', ')}`);
    }
    const response = await aiCall(prompts.system, prompts.user, visionImages);
    const generatedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$json$2d$repair$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseJsonResponse"])(response);
    if (!generatedData || !generatedData.elements || !Array.isArray(generatedData.elements)) {
        log.error(`Failed to parse AI response for: ${outline.title}`);
        return null;
    }
    log.debug(`Got ${generatedData.elements.length} elements for: ${outline.title}`);
    // Debug: Log image elements before resolution
    const imageElements = generatedData.elements.filter((el)=>el.type === 'image');
    if (imageElements.length > 0) {
        log.debug(`Image elements before resolution:`, imageElements.map((el)=>({
                type: el.type,
                src: el.src && String(el.src).substring(0, 50)
            })));
        log.debug(`imageMapping keys:`, imageMapping ? Object.keys(imageMapping).length : '0 keys');
    }
    // Fix elements with missing required fields + aspect ratio correction (while src is still img_id)
    const fixedElements = fixElementDefaults(generatedData.elements, assignedImages);
    log.debug(`After element fixing: ${fixedElements.length} elements`);
    // Process LaTeX elements: render latex string → HTML via KaTeX
    const latexProcessedElements = processLatexElements(fixedElements);
    log.debug(`After LaTeX processing: ${latexProcessedElements.length} elements`);
    // Resolve image_id references to actual URLs
    const resolvedElements = resolveImageIds(latexProcessedElements, imageMapping, generatedMediaMapping);
    log.debug(`After image resolution: ${resolvedElements.length} elements`);
    // Process elements, assign unique IDs
    const processedElements = resolvedElements.map((el)=>({
            ...el,
            id: `${el.type}_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(8)}`,
            rotate: 0
        }));
    // Process background
    let background;
    if (generatedData.background) {
        if (generatedData.background.type === 'solid' && generatedData.background.color) {
            background = {
                type: 'solid',
                color: generatedData.background.color
            };
        } else if (generatedData.background.type === 'gradient' && generatedData.background.gradient) {
            background = {
                type: 'gradient',
                gradient: generatedData.background.gradient
            };
        }
    }
    return {
        elements: processedElements,
        background,
        remark: generatedData.remark || outline.description
    };
}
/**
 * Generate quiz content
 */ async function generateQuizContent(outline, aiCall) {
    const quizConfig = outline.quizConfig || {
        questionCount: 3,
        difficulty: 'medium',
        questionTypes: [
            'single'
        ]
    };
    const prompts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPrompt"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PROMPT_IDS"].QUIZ_CONTENT, {
        title: outline.title,
        description: outline.description,
        keyPoints: (outline.keyPoints || []).map((p, i)=>`${i + 1}. ${p}`).join('\n'),
        questionCount: quizConfig.questionCount,
        difficulty: quizConfig.difficulty,
        questionTypes: quizConfig.questionTypes.join(', ')
    });
    if (!prompts) {
        return null;
    }
    log.debug(`Generating quiz content for: ${outline.title}`);
    const response = await aiCall(prompts.system, prompts.user);
    const generatedQuestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$json$2d$repair$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseJsonResponse"])(response);
    if (!generatedQuestions || !Array.isArray(generatedQuestions)) {
        log.error(`Failed to parse AI response for: ${outline.title}`);
        return null;
    }
    log.debug(`Got ${generatedQuestions.length} questions for: ${outline.title}`);
    // Ensure each question has an ID and normalize options format
    const questions = generatedQuestions.map((q)=>{
        const isText = q.type === 'short_answer';
        return {
            ...q,
            id: q.id || `q_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(8)}`,
            options: isText ? undefined : normalizeQuizOptions(q.options),
            answer: isText ? undefined : normalizeQuizAnswer(q),
            hasAnswer: isText ? false : true
        };
    });
    return {
        questions
    };
}
/**
 * Normalize quiz options from AI response.
 * AI may generate plain strings ["OptionA", "OptionB"] or QuizOption objects.
 * This normalizes to QuizOption[] format: { value: "A", label: "OptionA" }
 */ function normalizeQuizOptions(options) {
    if (!options || !Array.isArray(options)) return undefined;
    return options.map((opt, index)=>{
        const letter = String.fromCharCode(65 + index); // A, B, C, D...
        if (typeof opt === 'string') {
            return {
                value: letter,
                label: opt
            };
        }
        if (typeof opt === 'object' && opt !== null) {
            const obj = opt;
            return {
                value: typeof obj.value === 'string' ? obj.value : letter,
                label: typeof obj.label === 'string' ? obj.label : String(obj.value || obj.text || letter)
            };
        }
        return {
            value: letter,
            label: String(opt)
        };
    });
}
/**
 * Normalize quiz answer from AI response.
 * AI may generate correctAnswer as string or string[], under various field names.
 * This normalizes to string[] format matching option values.
 */ function normalizeQuizAnswer(question) {
    // AI might use "correctAnswer", "answer", or "correct_answer"
    const raw = question.answer ?? question.correctAnswer ?? question.correct_answer;
    if (!raw) return undefined;
    if (Array.isArray(raw)) {
        return raw.map(String);
    }
    return [
        String(raw)
    ];
}
/**
 * Generate interactive page content
 * Two AI calls + post-processing:
 * 1. Scientific modeling -> ScientificModel (with fallback)
 * 2. HTML generation with constraints -> post-processed HTML
 */ async function generateInteractiveContent(outline, aiCall, language = 'zh-CN') {
    const config = outline.interactiveConfig;
    // Step 1: Scientific modeling (with fallback on failure)
    let scientificModel;
    try {
        const modelPrompts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPrompt"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PROMPT_IDS"].INTERACTIVE_SCIENTIFIC_MODEL, {
            subject: config.subject || '',
            conceptName: config.conceptName,
            conceptOverview: config.conceptOverview,
            keyPoints: (outline.keyPoints || []).map((p, i)=>`${i + 1}. ${p}`).join('\n'),
            designIdea: config.designIdea
        });
        if (modelPrompts) {
            log.info(`Step 1: Scientific modeling for: ${outline.title}`);
            const modelResponse = await aiCall(modelPrompts.system, modelPrompts.user);
            const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$json$2d$repair$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseJsonResponse"])(modelResponse);
            if (parsed && parsed.core_formulas) {
                scientificModel = parsed;
                log.info(`Scientific model: ${parsed.core_formulas.length} formulas, ${parsed.constraints?.length || 0} constraints`);
            }
        }
    } catch (error) {
        log.warn(`Scientific modeling failed, continuing without: ${error}`);
    }
    // Format scientific constraints for HTML generation prompt
    let scientificConstraints = 'No specific scientific constraints available.';
    if (scientificModel) {
        const lines = [];
        if (scientificModel.core_formulas?.length) {
            lines.push(`Core Formulas: ${scientificModel.core_formulas.join('; ')}`);
        }
        if (scientificModel.mechanism?.length) {
            lines.push(`Mechanisms: ${scientificModel.mechanism.join('; ')}`);
        }
        if (scientificModel.constraints?.length) {
            lines.push(`Must Obey: ${scientificModel.constraints.join('; ')}`);
        }
        if (scientificModel.forbidden_errors?.length) {
            lines.push(`Forbidden Errors: ${scientificModel.forbidden_errors.join('; ')}`);
        }
        scientificConstraints = lines.join('\n');
    }
    // Step 2: HTML generation
    const htmlPrompts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPrompt"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PROMPT_IDS"].INTERACTIVE_HTML, {
        conceptName: config.conceptName,
        subject: config.subject || '',
        conceptOverview: config.conceptOverview,
        keyPoints: (outline.keyPoints || []).map((p, i)=>`${i + 1}. ${p}`).join('\n'),
        scientificConstraints,
        designIdea: config.designIdea,
        language
    });
    if (!htmlPrompts) {
        log.error(`Failed to build HTML prompt for: ${outline.title}`);
        return null;
    }
    log.info(`Step 2: Generating HTML for: ${outline.title}`);
    const htmlResponse = await aiCall(htmlPrompts.system, htmlPrompts.user);
    // Extract HTML from response
    const rawHtml = extractHtml(htmlResponse);
    if (!rawHtml) {
        log.error(`Failed to extract HTML from response for: ${outline.title}`);
        return null;
    }
    // Step 3: Post-process HTML (LaTeX delimiter conversion + KaTeX injection)
    const processedHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$interactive$2d$post$2d$processor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["postProcessInteractiveHtml"])(rawHtml);
    log.info(`Post-processed HTML (${processedHtml.length} chars) for: ${outline.title}`);
    return {
        html: processedHtml,
        scientificModel
    };
}
/**
 * Generate PBL project content
 * Uses the agentic loop from lib/pbl/generate-pbl.ts
 */ async function generatePBLSceneContent(outline, languageModel) {
    if (!languageModel) {
        log.error('LanguageModel required for PBL generation');
        return null;
    }
    const pblConfig = outline.pblConfig;
    if (!pblConfig) {
        log.error(`PBL outline "${outline.title}" missing pblConfig`);
        return null;
    }
    log.info(`Generating PBL content for: ${outline.title}`);
    try {
        const projectConfig = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pbl$2f$generate$2d$pbl$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generatePBLContent"])({
            projectTopic: pblConfig.projectTopic,
            projectDescription: pblConfig.projectDescription,
            targetSkills: pblConfig.targetSkills,
            issueCount: pblConfig.issueCount,
            language: pblConfig.language
        }, languageModel, {
            onProgress: (msg)=>log.info(`${msg}`)
        });
        log.info(`PBL generated: ${projectConfig.agents.length} agents, ${projectConfig.issueboard.issues.length} issues`);
        return {
            projectConfig
        };
    } catch (error) {
        log.error(`Failed:`, error);
        return null;
    }
}
/**
 * Extract HTML document from AI response.
 * Tries to find <!DOCTYPE html>...</html> first, then falls back to code block extraction.
 */ function extractHtml(response) {
    // Strategy 1: Find complete HTML document
    const doctypeStart = response.indexOf('<!DOCTYPE html>');
    const htmlTagStart = response.indexOf('<html');
    const start = doctypeStart !== -1 ? doctypeStart : htmlTagStart;
    if (start !== -1) {
        const htmlEnd = response.lastIndexOf('</html>');
        if (htmlEnd !== -1) {
            return response.substring(start, htmlEnd + 7);
        }
    }
    // Strategy 2: Extract from code block
    const codeBlockMatch = response.match(/```(?:html)?\s*([\s\S]*?)```/);
    if (codeBlockMatch) {
        const content = codeBlockMatch[1].trim();
        if (content.includes('<html') || content.includes('<!DOCTYPE')) {
            return content;
        }
    }
    // Strategy 3: If response itself looks like HTML
    const trimmed = response.trim();
    if (trimmed.startsWith('<!DOCTYPE') || trimmed.startsWith('<html')) {
        return trimmed;
    }
    log.error('Could not extract HTML from response');
    log.error('Response preview:', response.substring(0, 200));
    return null;
}
async function generateSceneActions(outline, content, aiCall, ctx, agents, userProfile) {
    const agentsText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompt$2d$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatAgentsForPrompt"])(agents);
    if (outline.type === 'slide' && 'elements' in content) {
        // Format element list for AI to select from
        const elementsText = formatElementsForPrompt(content.elements);
        const prompts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPrompt"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PROMPT_IDS"].SLIDE_ACTIONS, {
            title: outline.title,
            keyPoints: (outline.keyPoints || []).map((p, i)=>`${i + 1}. ${p}`).join('\n'),
            description: outline.description,
            elements: elementsText,
            courseContext: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompt$2d$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildCourseContext"])(ctx),
            agents: agentsText,
            userProfile: userProfile || ''
        });
        if (!prompts) {
            return generateDefaultSlideActions(outline, content.elements);
        }
        const response = await aiCall(prompts.system, prompts.user);
        const actions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$action$2d$parser$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseActionsFromStructuredOutput"])(response, outline.type);
        if (actions.length > 0) {
            // Validate and fill in Action IDs
            return processActions(actions, content.elements, agents);
        }
        return generateDefaultSlideActions(outline, content.elements);
    }
    if (outline.type === 'quiz' && 'questions' in content) {
        // Format question list for AI reference
        const questionsText = formatQuestionsForPrompt(content.questions);
        const prompts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPrompt"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PROMPT_IDS"].QUIZ_ACTIONS, {
            title: outline.title,
            keyPoints: (outline.keyPoints || []).map((p, i)=>`${i + 1}. ${p}`).join('\n'),
            description: outline.description,
            questions: questionsText,
            courseContext: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompt$2d$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildCourseContext"])(ctx),
            agents: agentsText
        });
        if (!prompts) {
            return generateDefaultQuizActions(outline);
        }
        const response = await aiCall(prompts.system, prompts.user);
        const actions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$action$2d$parser$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseActionsFromStructuredOutput"])(response, outline.type);
        if (actions.length > 0) {
            return processActions(actions, [], agents);
        }
        return generateDefaultQuizActions(outline);
    }
    if (outline.type === 'interactive' && 'html' in content) {
        const config = outline.interactiveConfig;
        const agentsText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompt$2d$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatAgentsForPrompt"])(agents);
        const prompts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPrompt"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PROMPT_IDS"].INTERACTIVE_ACTIONS, {
            title: outline.title,
            keyPoints: (outline.keyPoints || []).map((p, i)=>`${i + 1}. ${p}`).join('\n'),
            description: outline.description,
            conceptName: config?.conceptName || outline.title,
            designIdea: config?.designIdea || '',
            courseContext: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompt$2d$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildCourseContext"])(ctx),
            agents: agentsText
        });
        if (!prompts) {
            return generateDefaultInteractiveActions(outline);
        }
        const response = await aiCall(prompts.system, prompts.user);
        const actions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$action$2d$parser$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseActionsFromStructuredOutput"])(response, outline.type);
        if (actions.length > 0) {
            return processActions(actions, [], agents);
        }
        return generateDefaultInteractiveActions(outline);
    }
    if (outline.type === 'pbl' && 'projectConfig' in content) {
        const pblConfig = outline.pblConfig;
        const agentsText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompt$2d$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatAgentsForPrompt"])(agents);
        const prompts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPrompt"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PROMPT_IDS"].PBL_ACTIONS, {
            title: outline.title,
            keyPoints: (outline.keyPoints || []).map((p, i)=>`${i + 1}. ${p}`).join('\n'),
            description: outline.description,
            projectTopic: pblConfig?.projectTopic || outline.title,
            projectDescription: pblConfig?.projectDescription || outline.description,
            courseContext: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompt$2d$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildCourseContext"])(ctx),
            agents: agentsText
        });
        if (!prompts) {
            return generateDefaultPBLActions(outline);
        }
        const response = await aiCall(prompts.system, prompts.user);
        const actions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$action$2d$parser$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseActionsFromStructuredOutput"])(response, outline.type);
        if (actions.length > 0) {
            return processActions(actions, [], agents);
        }
        return generateDefaultPBLActions(outline);
    }
    return [];
}
/**
 * Generate default PBL Actions (fallback)
 */ function generateDefaultPBLActions(_outline) {
    return [
        {
            id: `action_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(8)}`,
            type: 'speech',
            title: 'PBL 项目介绍',
            text: '现在让我们开始一个项目式学习活动。请选择你的角色，查看任务看板，开始协作完成项目。'
        }
    ];
}
/**
 * Format element list for AI to select elementId
 */ function formatElementsForPrompt(elements) {
    return elements.map((el)=>{
        let summary = '';
        if (el.type === 'text' && 'content' in el) {
            // Extract text content summary (strip HTML tags)
            const textContent = (el.content || '').replace(/<[^>]*>/g, '').substring(0, 50);
            summary = `Content summary: "${textContent}${textContent.length >= 50 ? '...' : ''}"`;
        } else if (el.type === 'chart' && 'chartType' in el) {
            summary = `Chart type: ${el.chartType}`;
        } else if (el.type === 'image') {
            summary = 'Image element';
        } else if (el.type === 'shape' && 'shapeName' in el) {
            summary = `Shape: ${el.shapeName || 'unknown'}`;
        } else if (el.type === 'latex' && 'latex' in el) {
            summary = `Formula: ${(el.latex || '').substring(0, 30)}`;
        } else {
            summary = `${el.type} element`;
        }
        return `- id: "${el.id}", type: "${el.type}", ${summary}`;
    }).join('\n');
}
/**
 * Format question list for AI reference
 */ function formatQuestionsForPrompt(questions) {
    return questions.map((q, i)=>{
        const optionsText = q.options ? `Options: ${q.options.join(', ')}` : '';
        return `Q${i + 1} (${q.type}): ${q.question}\n${optionsText}`;
    }).join('\n\n');
}
/**
 * Process and validate Actions
 */ function processActions(actions, elements, agents) {
    const elementIds = new Set(elements.map((el)=>el.id));
    const agentIds = new Set(agents?.map((a)=>a.id) || []);
    const studentAgents = agents?.filter((a)=>a.role === 'student') || [];
    const nonTeacherAgents = agents?.filter((a)=>a.role !== 'teacher') || [];
    return actions.map((action)=>{
        // Ensure each action has an ID
        const processedAction = {
            ...action,
            id: action.id || `action_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(8)}`
        };
        // Validate spotlight elementId
        if (processedAction.type === 'spotlight') {
            const spotlightAction = processedAction;
            if (!spotlightAction.elementId || !elementIds.has(spotlightAction.elementId)) {
                // If elementId is invalid, try selecting the first element
                if (elements.length > 0) {
                    spotlightAction.elementId = elements[0].id;
                    log.warn(`Invalid elementId, falling back to first element: ${spotlightAction.elementId}`);
                }
            }
        }
        // Validate/fill discussion agentId
        if (processedAction.type === 'discussion' && agents && agents.length > 0) {
            if (processedAction.agentId && agentIds.has(processedAction.agentId)) {
            // agentId valid — keep it
            } else {
                // agentId missing or invalid — pick a random student, or non-teacher, or skip
                const pool = studentAgents.length > 0 ? studentAgents : nonTeacherAgents;
                if (pool.length > 0) {
                    const picked = pool[Math.floor(Math.random() * pool.length)];
                    log.warn(`Discussion agentId "${processedAction.agentId || '(none)'}" invalid, assigned: ${picked.id} (${picked.name})`);
                    processedAction.agentId = picked.id;
                }
            }
        }
        return processedAction;
    });
}
/**
 * Generate default slide Actions (fallback)
 */ function generateDefaultSlideActions(outline, elements) {
    const actions = [];
    // Add spotlight for text elements
    const textElements = elements.filter((el)=>el.type === 'text');
    if (textElements.length > 0) {
        actions.push({
            id: `action_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(8)}`,
            type: 'spotlight',
            title: '聚焦重点',
            elementId: textElements[0].id
        });
    }
    // Add opening speech based on key points
    const speechText = outline.keyPoints?.length ? outline.keyPoints.join('。') + '。' : outline.description || outline.title;
    actions.push({
        id: `action_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(8)}`,
        type: 'speech',
        title: '场景讲解',
        text: speechText
    });
    return actions;
}
/**
 * Generate default quiz Actions (fallback)
 */ function generateDefaultQuizActions(_outline) {
    return [
        {
            id: `action_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(8)}`,
            type: 'speech',
            title: '测验引导',
            text: '现在让我们来做一个小测验，检验一下学习成果。'
        }
    ];
}
/**
 * Generate default interactive Actions (fallback)
 */ function generateDefaultInteractiveActions(_outline) {
    return [
        {
            id: `action_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(8)}`,
            type: 'speech',
            title: '交互引导',
            text: '现在让我们通过交互式可视化来探索这个概念。请尝试操作页面中的元素，观察变化。'
        }
    ];
}
function createSceneWithActions(outline, content, actions, api) {
    if (outline.type === 'slide' && 'elements' in content) {
        // Build complete Slide object
        const defaultTheme = {
            backgroundColor: '#ffffff',
            themeColors: [
                '#5b9bd5',
                '#ed7d31',
                '#a5a5a5',
                '#ffc000',
                '#4472c4'
            ],
            fontColor: '#333333',
            fontName: 'Microsoft YaHei',
            outline: {
                color: '#d14424',
                width: 2,
                style: 'solid'
            },
            shadow: {
                h: 0,
                v: 0,
                blur: 10,
                color: '#000000'
            }
        };
        const slide = {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
            viewportSize: 1000,
            viewportRatio: 0.5625,
            theme: defaultTheme,
            elements: content.elements,
            background: content.background
        };
        const sceneResult = api.scene.create({
            type: 'slide',
            title: outline.title,
            order: outline.order,
            content: {
                type: 'slide',
                canvas: slide
            },
            actions
        });
        return sceneResult.success ? sceneResult.data ?? null : null;
    }
    if (outline.type === 'quiz' && 'questions' in content) {
        const sceneResult = api.scene.create({
            type: 'quiz',
            title: outline.title,
            order: outline.order,
            content: {
                type: 'quiz',
                questions: content.questions
            },
            actions
        });
        return sceneResult.success ? sceneResult.data ?? null : null;
    }
    if (outline.type === 'interactive' && 'html' in content) {
        const sceneResult = api.scene.create({
            type: 'interactive',
            title: outline.title,
            order: outline.order,
            content: {
                type: 'interactive',
                url: '',
                html: content.html
            },
            actions
        });
        return sceneResult.success ? sceneResult.data ?? null : null;
    }
    if (outline.type === 'pbl' && 'projectConfig' in content) {
        const sceneResult = api.scene.create({
            type: 'pbl',
            title: outline.title,
            order: outline.order,
            content: {
                type: 'pbl',
                projectConfig: content.projectConfig
            },
            actions
        });
        return sceneResult.success ? sceneResult.data ?? null : null;
    }
    return null;
}
}),
"[project]/lib/generation/scene-builder.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildCompleteScene",
    ()=>buildCompleteScene,
    "buildSceneFromOutline",
    ()=>buildSceneFromOutline,
    "uniquifyMediaElementIds",
    ()=>uniquifyMediaElementIds
]);
/**
 * Standalone scene building and element normalization.
 * Does NOT depend on store — returns complete Scene objects.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$outline$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/outline-generator.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$scene$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/scene-generator.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-route] (ecmascript)");
;
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLogger"])('Generation');
function uniquifyMediaElementIds(outlines) {
    const idMap = new Map();
    // First pass: collect all sequential media IDs and assign unique replacements
    for (const outline of outlines){
        if (!outline.mediaGenerations) continue;
        for (const mg of outline.mediaGenerations){
            if (!idMap.has(mg.elementId)) {
                const prefix = mg.type === 'video' ? 'gen_vid_' : 'gen_img_';
                idMap.set(mg.elementId, `${prefix}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(8)}`);
            }
        }
    }
    if (idMap.size === 0) return outlines;
    // Second pass: replace IDs in mediaGenerations
    return outlines.map((outline)=>{
        if (!outline.mediaGenerations) return outline;
        return {
            ...outline,
            mediaGenerations: outline.mediaGenerations.map((mg)=>({
                    ...mg,
                    elementId: idMap.get(mg.elementId) || mg.elementId
                }))
        };
    });
}
async function buildSceneFromOutline(outline, aiCall, stageId, assignedImages, imageMapping, languageModel, visionEnabled, ctx, agents, onPhaseChange, userProfile) {
    // Apply type fallbacks
    outline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$outline$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyOutlineFallbacks"])(outline, !!languageModel);
    // Step 1: Generate content (with images if available)
    onPhaseChange?.('content');
    log.debug(`Step 1: Generating content for: ${outline.title}`);
    if (assignedImages && assignedImages.length > 0) {
        log.debug(`Using ${assignedImages.length} assigned images: ${assignedImages.map((img)=>img.id).join(', ')}`);
    }
    log.debug(`imageMapping available: ${imageMapping ? Object.keys(imageMapping).length + ' keys' : 'undefined'}`);
    const content = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$scene$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateSceneContent"])(outline, aiCall, assignedImages, imageMapping, languageModel, visionEnabled, undefined, agents);
    if (!content) {
        log.error(`Failed to generate content for: ${outline.title}`);
        return null;
    }
    // Step 2: Generate Actions
    onPhaseChange?.('actions');
    log.debug(`Step 2: Generating actions for: ${outline.title}`);
    const actions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$scene$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateSceneActions"])(outline, content, aiCall, ctx, agents, userProfile);
    log.debug(`Generated ${actions.length} actions for: ${outline.title}`);
    // Build complete Scene object
    return buildCompleteScene(outline, content, actions, stageId);
}
function buildCompleteScene(outline, content, actions, stageId) {
    const sceneId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])();
    if (outline.type === 'slide' && 'elements' in content) {
        // Build Slide object
        const defaultTheme = {
            backgroundColor: '#ffffff',
            themeColors: [
                '#5b9bd5',
                '#ed7d31',
                '#a5a5a5',
                '#ffc000',
                '#4472c4'
            ],
            fontColor: '#333333',
            fontName: 'Microsoft YaHei',
            outline: {
                color: '#d14424',
                width: 2,
                style: 'solid'
            },
            shadow: {
                h: 0,
                v: 0,
                blur: 10,
                color: '#000000'
            }
        };
        const slide = {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
            viewportSize: 1000,
            viewportRatio: 0.5625,
            theme: defaultTheme,
            elements: content.elements,
            background: content.background
        };
        return {
            id: sceneId,
            stageId,
            type: 'slide',
            title: outline.title,
            order: outline.order,
            content: {
                type: 'slide',
                canvas: slide
            },
            actions,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
    }
    if (outline.type === 'quiz' && 'questions' in content) {
        return {
            id: sceneId,
            stageId,
            type: 'quiz',
            title: outline.title,
            order: outline.order,
            content: {
                type: 'quiz',
                questions: content.questions
            },
            actions,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
    }
    if (outline.type === 'interactive' && 'html' in content) {
        return {
            id: sceneId,
            stageId,
            type: 'interactive',
            title: outline.title,
            order: outline.order,
            content: {
                type: 'interactive',
                url: '',
                html: content.html
            },
            actions,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
    }
    if (outline.type === 'pbl' && 'projectConfig' in content) {
        return {
            id: sceneId,
            stageId,
            type: 'pbl',
            title: outline.title,
            order: outline.order,
            content: {
                type: 'pbl',
                projectConfig: content.projectConfig
            },
            actions,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
    }
    return null;
}
}),
"[project]/lib/generation/outline-generator.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyOutlineFallbacks",
    ()=>applyOutlineFallbacks,
    "generateSceneOutlinesFromRequirements",
    ()=>generateSceneOutlinesFromRequirements
]);
/**
 * Stage 1: Generate scene outlines from user requirements.
 * Also contains outline fallback logic.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$generation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/generation.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/generation/prompts/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/prompts/loader.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompt$2d$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/prompt-formatters.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$json$2d$repair$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/json-repair.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$scene$2d$builder$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/scene-builder.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLogger"])('Generation');
async function generateSceneOutlinesFromRequirements(requirements, pdfText, pdfImages, aiCall, callbacks, options) {
    // Build available images description for the prompt
    let availableImagesText = requirements.language === 'zh-CN' ? '无可用图片' : 'No images available';
    let visionImages;
    if (pdfImages && pdfImages.length > 0) {
        if (options?.visionEnabled && options?.imageMapping) {
            // Vision mode: split into vision images (first N) and text-only (rest)
            const allWithSrc = pdfImages.filter((img)=>options.imageMapping[img.id]);
            const visionSlice = allWithSrc.slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$generation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MAX_VISION_IMAGES"]);
            const textOnlySlice = allWithSrc.slice(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$generation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MAX_VISION_IMAGES"]);
            const noSrcImages = pdfImages.filter((img)=>!options.imageMapping[img.id]);
            const visionDescriptions = visionSlice.map((img)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompt$2d$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatImagePlaceholder"])(img, requirements.language));
            const textDescriptions = [
                ...textOnlySlice,
                ...noSrcImages
            ].map((img)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompt$2d$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatImageDescription"])(img, requirements.language));
            availableImagesText = [
                ...visionDescriptions,
                ...textDescriptions
            ].join('\n');
            visionImages = visionSlice.map((img)=>({
                    id: img.id,
                    src: options.imageMapping[img.id],
                    width: img.width,
                    height: img.height
                }));
        } else {
            // Text-only mode: full descriptions
            availableImagesText = pdfImages.map((img)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompt$2d$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatImageDescription"])(img, requirements.language)).join('\n');
        }
    }
    // Build user profile string for prompt injection
    const userProfileText = requirements.userNickname || requirements.userBio ? `## Student Profile\n\nStudent: ${requirements.userNickname || 'Unknown'}${requirements.userBio ? ` — ${requirements.userBio}` : ''}\n\nConsider this student's background when designing the course. Adapt difficulty, examples, and teaching approach accordingly.\n\n---` : '';
    // Build media generation policy based on enabled flags
    const imageEnabled = options?.imageGenerationEnabled ?? false;
    const videoEnabled = options?.videoGenerationEnabled ?? false;
    let mediaGenerationPolicy = '';
    if (!imageEnabled && !videoEnabled) {
        mediaGenerationPolicy = '**IMPORTANT: Do NOT include any mediaGenerations in the outlines. Both image and video generation are disabled.**';
    } else if (!imageEnabled) {
        mediaGenerationPolicy = '**IMPORTANT: Do NOT include any image mediaGenerations (type: "image") in the outlines. Image generation is disabled. Video generation is allowed.**';
    } else if (!videoEnabled) {
        mediaGenerationPolicy = '**IMPORTANT: Do NOT include any video mediaGenerations (type: "video") in the outlines. Video generation is disabled. Image generation is allowed.**';
    }
    // Use simplified prompt variables
    const prompts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPrompt"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompts$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PROMPT_IDS"].REQUIREMENTS_TO_OUTLINES, {
        // New simplified variables
        requirement: requirements.requirement,
        language: requirements.language,
        pdfContent: pdfText ? pdfText.substring(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$generation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MAX_PDF_CONTENT_CHARS"]) : requirements.language === 'zh-CN' ? '无' : 'None',
        availableImages: availableImagesText,
        userProfile: userProfileText,
        mediaGenerationPolicy,
        researchContext: options?.researchContext || (requirements.language === 'zh-CN' ? '无' : 'None'),
        // Server-side generation populates this via options; client-side populates via formatTeacherPersonaForPrompt
        teacherContext: options?.teacherContext || ''
    });
    if (!prompts) {
        return {
            success: false,
            error: 'Prompt template not found'
        };
    }
    try {
        callbacks?.onProgress?.({
            currentStage: 1,
            overallProgress: 20,
            stageProgress: 50,
            statusMessage: '正在分析需求，生成场景大纲...',
            scenesGenerated: 0,
            totalScenes: 0
        });
        const response = await aiCall(prompts.system, prompts.user, visionImages);
        const outlines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$json$2d$repair$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseJsonResponse"])(response);
        if (!outlines || !Array.isArray(outlines)) {
            return {
                success: false,
                error: 'Failed to parse scene outlines response'
            };
        }
        // Ensure IDs, order, and language
        const enriched = outlines.map((outline, index)=>({
                ...outline,
                id: outline.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
                order: index + 1,
                language: requirements.language
            }));
        // Replace sequential gen_img_N/gen_vid_N with globally unique IDs
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$scene$2d$builder$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uniquifyMediaElementIds"])(enriched);
        callbacks?.onProgress?.({
            currentStage: 1,
            overallProgress: 50,
            stageProgress: 100,
            statusMessage: `已生成 ${result.length} 个场景大纲`,
            scenesGenerated: 0,
            totalScenes: result.length
        });
        return {
            success: true,
            data: result
        };
    } catch (error) {
        return {
            success: false,
            error: String(error)
        };
    }
}
function applyOutlineFallbacks(outline, hasLanguageModel) {
    if (outline.type === 'interactive' && !outline.interactiveConfig) {
        log.warn(`Interactive outline "${outline.title}" missing interactiveConfig, falling back to slide`);
        return {
            ...outline,
            type: 'slide'
        };
    }
    if (outline.type === 'pbl' && (!outline.pblConfig || !hasLanguageModel)) {
        log.warn(`PBL outline "${outline.title}" missing pblConfig or languageModel, falling back to slide`);
        return {
            ...outline,
            type: 'slide'
        };
    }
    return outline;
}
}),
"[project]/lib/generation/pipeline-runner.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGenerationSession",
    ()=>createGenerationSession,
    "runGenerationPipeline",
    ()=>runGenerationPipeline
]);
/**
 * Top-level pipeline orchestration.
 * Creates sessions and runs the full generation pipeline.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$outline$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/outline-generator.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$scene$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/scene-generator.ts [app-route] (ecmascript)");
;
;
;
function createGenerationSession(requirements) {
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
        requirements,
        progress: {
            currentStage: 1,
            overallProgress: 0,
            stageProgress: 0,
            statusMessage: '初始化中...',
            scenesGenerated: 0,
            totalScenes: 0
        },
        startedAt: new Date()
    };
}
async function runGenerationPipeline(session, store, aiCall, callbacks) {
    try {
        // Stage 1: Generate Scene Outlines from Requirements
        callbacks?.onProgress?.({
            ...session.progress,
            currentStage: 1,
            overallProgress: 5,
            statusMessage: '正在分析需求，生成场景大纲...'
        });
        const outlinesResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$outline$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateSceneOutlinesFromRequirements"])(session.requirements, undefined, undefined, aiCall, callbacks);
        if (!outlinesResult.success || !outlinesResult.data) {
            throw new Error(outlinesResult.error || 'Failed to generate scene outlines');
        }
        session.sceneOutlines = outlinesResult.data;
        callbacks?.onStageComplete?.(1, session.sceneOutlines);
        // Stage 2: Generate Full Scenes
        callbacks?.onProgress?.({
            ...session.progress,
            currentStage: 2,
            overallProgress: 50,
            statusMessage: '正在生成场景内容...',
            totalScenes: session.sceneOutlines.length
        });
        const scenesResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$scene$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateFullScenes"])(session.sceneOutlines, store, aiCall, callbacks);
        if (!scenesResult.success) {
            throw new Error(scenesResult.error || 'Failed to generate scenes');
        }
        callbacks?.onStageComplete?.(2, scenesResult.data);
        // Complete
        session.completedAt = new Date();
        session.progress = {
            currentStage: 2,
            overallProgress: 100,
            stageProgress: 100,
            statusMessage: '生成完成！',
            scenesGenerated: scenesResult.data?.length || 0,
            totalScenes: session.sceneOutlines.length
        };
        return {
            success: true,
            data: session
        };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        callbacks?.onError?.(errorMessage);
        session.progress.errors = [
            ...session.progress.errors || [],
            errorMessage
        ];
        return {
            success: false,
            error: errorMessage
        };
    }
}
}),
"[project]/lib/generation/generation-pipeline.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Two-Stage Generation Pipeline
 *
 * Barrel re-export — all symbols previously exported from this file
 * are now spread across focused sub-modules.
 */ // Types
__turbopack_context__.s([]);
// Prompt formatters
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompt$2d$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/prompt-formatters.ts [app-route] (ecmascript)");
// JSON repair
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$json$2d$repair$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/json-repair.ts [app-route] (ecmascript)");
// Outline generator (Stage 1)
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$outline$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/outline-generator.ts [app-route] (ecmascript)");
// Scene generator (Stage 2)
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$scene$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/scene-generator.ts [app-route] (ecmascript)");
// Scene builder (standalone)
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$scene$2d$builder$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/scene-builder.ts [app-route] (ecmascript)");
// Pipeline runner
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$pipeline$2d$runner$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/pipeline-runner.ts [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/server/api-response.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_ERROR_CODES",
    ()=>API_ERROR_CODES,
    "apiError",
    ()=>apiError,
    "apiSuccess",
    ()=>apiSuccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/server.js [app-route] (ecmascript)");
;
const API_ERROR_CODES = {
    MISSING_REQUIRED_FIELD: 'MISSING_REQUIRED_FIELD',
    MISSING_API_KEY: 'MISSING_API_KEY',
    INVALID_REQUEST: 'INVALID_REQUEST',
    INVALID_URL: 'INVALID_URL',
    REDIRECT_NOT_ALLOWED: 'REDIRECT_NOT_ALLOWED',
    CONTENT_SENSITIVE: 'CONTENT_SENSITIVE',
    UPSTREAM_ERROR: 'UPSTREAM_ERROR',
    GENERATION_FAILED: 'GENERATION_FAILED',
    TRANSCRIPTION_FAILED: 'TRANSCRIPTION_FAILED',
    PARSE_FAILED: 'PARSE_FAILED',
    INTERNAL_ERROR: 'INTERNAL_ERROR'
};
function apiError(code, status, error, details) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: false,
        errorCode: code,
        error,
        ...details ? {
            details
        } : {}
    }, {
        status
    });
}
function apiSuccess(data, status = 200) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        ...data
    }, {
        status
    });
}
}),
"[project]/lib/server/provider-config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getServerASRProviders",
    ()=>getServerASRProviders,
    "getServerImageProviders",
    ()=>getServerImageProviders,
    "getServerPDFProviders",
    ()=>getServerPDFProviders,
    "getServerProviders",
    ()=>getServerProviders,
    "getServerTTSProviders",
    ()=>getServerTTSProviders,
    "getServerVideoProviders",
    ()=>getServerVideoProviders,
    "getServerWebSearchProviders",
    ()=>getServerWebSearchProviders,
    "resolveASRApiKey",
    ()=>resolveASRApiKey,
    "resolveASRBaseUrl",
    ()=>resolveASRBaseUrl,
    "resolveApiKey",
    ()=>resolveApiKey,
    "resolveBaseUrl",
    ()=>resolveBaseUrl,
    "resolveImageApiKey",
    ()=>resolveImageApiKey,
    "resolveImageBaseUrl",
    ()=>resolveImageBaseUrl,
    "resolvePDFApiKey",
    ()=>resolvePDFApiKey,
    "resolvePDFBaseUrl",
    ()=>resolvePDFBaseUrl,
    "resolveProxy",
    ()=>resolveProxy,
    "resolveTTSApiKey",
    ()=>resolveTTSApiKey,
    "resolveTTSBaseUrl",
    ()=>resolveTTSBaseUrl,
    "resolveVideoApiKey",
    ()=>resolveVideoApiKey,
    "resolveVideoBaseUrl",
    ()=>resolveVideoBaseUrl,
    "resolveWebSearchApiKey",
    ()=>resolveWebSearchApiKey
]);
/**
 * Server-side Provider Configuration
 *
 * Loads provider configs from YAML (primary) + environment variables (fallback).
 * Keys never leave the server — only provider IDs and metadata are exposed via API.
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$yaml$40$4$2e$1$2e$1$2f$node_modules$2f$js$2d$yaml$2f$dist$2f$js$2d$yaml$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/js-yaml@4.1.1/node_modules/js-yaml/dist/js-yaml.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-route] (ecmascript)");
;
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLogger"])('ServerProviderConfig');
// ---------------------------------------------------------------------------
// Env-var prefix mappings
// ---------------------------------------------------------------------------
const LLM_ENV_MAP = {
    OPENAI: 'openai',
    ANTHROPIC: 'anthropic',
    GOOGLE: 'google',
    DEEPSEEK: 'deepseek',
    QWEN: 'qwen',
    KIMI: 'kimi',
    MINIMAX: 'minimax',
    GLM: 'glm',
    SILICONFLOW: 'siliconflow',
    DOUBAO: 'doubao',
    GROK: 'grok'
};
const TTS_ENV_MAP = {
    TTS_OPENAI: 'openai-tts',
    TTS_AZURE: 'azure-tts',
    TTS_GLM: 'glm-tts',
    TTS_QWEN: 'qwen-tts',
    TTS_DOUBAO: 'doubao-tts',
    TTS_ELEVENLABS: 'elevenlabs-tts',
    TTS_MINIMAX: 'minimax-tts'
};
const ASR_ENV_MAP = {
    ASR_OPENAI: 'openai-whisper',
    ASR_QWEN: 'qwen-asr'
};
const PDF_ENV_MAP = {
    PDF_UNPDF: 'unpdf',
    PDF_MINERU: 'mineru'
};
const IMAGE_ENV_MAP = {
    IMAGE_SEEDREAM: 'seedream',
    IMAGE_QWEN_IMAGE: 'qwen-image',
    IMAGE_NANO_BANANA: 'nano-banana',
    IMAGE_MINIMAX: 'minimax-image',
    IMAGE_GROK: 'grok-image'
};
const VIDEO_ENV_MAP = {
    VIDEO_SEEDANCE: 'seedance',
    VIDEO_KLING: 'kling',
    VIDEO_VEO: 'veo',
    VIDEO_SORA: 'sora',
    VIDEO_MINIMAX: 'minimax-video',
    VIDEO_GROK: 'grok-video'
};
const WEB_SEARCH_ENV_MAP = {
    TAVILY: 'tavily'
};
function loadYamlFile(filename) {
    try {
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), filename);
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(filePath)) return {};
        const raw = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, 'utf-8');
        const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$yaml$40$4$2e$1$2e$1$2f$node_modules$2f$js$2d$yaml$2f$dist$2f$js$2d$yaml$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].load(raw);
        if (!parsed || typeof parsed !== 'object') return {};
        return parsed;
    } catch (e) {
        log.warn(`[ServerProviderConfig] Failed to load ${filename}:`, e);
        return {};
    }
}
// ---------------------------------------------------------------------------
// Env-var helpers
// ---------------------------------------------------------------------------
function loadEnvSection(envMap, yamlSection, { requiresBaseUrl = false } = {}) {
    const result = {};
    // First, add everything from YAML as defaults
    if (yamlSection) {
        for (const [id, entry] of Object.entries(yamlSection)){
            const hasKey = !!entry?.apiKey;
            const hasUrl = !!entry?.baseUrl;
            if (requiresBaseUrl ? hasUrl : hasKey) {
                result[id] = {
                    apiKey: entry.apiKey || '',
                    baseUrl: entry.baseUrl,
                    models: entry.models,
                    proxy: entry.proxy
                };
            }
        }
    }
    // Then, apply env vars (env takes priority over YAML)
    for (const [prefix, providerId] of Object.entries(envMap)){
        const envApiKey = process.env[`${prefix}_API_KEY`] || undefined;
        const envBaseUrl = process.env[`${prefix}_BASE_URL`] || undefined;
        const envModelsStr = process.env[`${prefix}_MODELS`];
        const envModels = envModelsStr ? envModelsStr.split(',').map((m)=>m.trim()).filter(Boolean) : undefined;
        if (result[providerId]) {
            // YAML entry exists — env vars override individual fields
            if (envApiKey) result[providerId].apiKey = envApiKey;
            if (envBaseUrl) result[providerId].baseUrl = envBaseUrl;
            if (envModels) result[providerId].models = envModels;
            continue;
        }
        if (requiresBaseUrl ? !envBaseUrl : !envApiKey) continue;
        result[providerId] = {
            apiKey: envApiKey || '',
            baseUrl: envBaseUrl,
            models: envModels
        };
    }
    return result;
}
// ---------------------------------------------------------------------------
// Module-level cache (process singleton)
// ---------------------------------------------------------------------------
const DEFAULT_FILENAME = 'server-providers.yml';
/** Cache keyed by YAML filename (empty string = default file). */ const _configs = new Map();
function buildConfig(yamlData) {
    return {
        providers: loadEnvSection(LLM_ENV_MAP, yamlData.providers),
        tts: loadEnvSection(TTS_ENV_MAP, yamlData.tts),
        asr: loadEnvSection(ASR_ENV_MAP, yamlData.asr),
        pdf: loadEnvSection(PDF_ENV_MAP, yamlData.pdf, {
            requiresBaseUrl: true
        }),
        image: loadEnvSection(IMAGE_ENV_MAP, yamlData.image),
        video: loadEnvSection(VIDEO_ENV_MAP, yamlData.video),
        webSearch: loadEnvSection(WEB_SEARCH_ENV_MAP, yamlData['web-search'])
    };
}
function logConfig(config, label) {
    const counts = [
        Object.keys(config.providers).length,
        Object.keys(config.tts).length,
        Object.keys(config.asr).length,
        Object.keys(config.pdf).length,
        Object.keys(config.image).length,
        Object.keys(config.video).length,
        Object.keys(config.webSearch).length
    ];
    if (counts.some((c)=>c > 0)) {
        log.info(`[ServerProviderConfig] Loaded (${label}): ${counts[0]} LLM, ${counts[1]} TTS, ${counts[2]} ASR, ${counts[3]} PDF, ${counts[4]} Image, ${counts[5]} Video, ${counts[6]} WebSearch providers`);
    }
}
function getConfig() {
    const cached = _configs.get('');
    if (cached) return cached;
    const yamlData = loadYamlFile(DEFAULT_FILENAME);
    const config = buildConfig(yamlData);
    logConfig(config, DEFAULT_FILENAME);
    _configs.set('', config);
    return config;
}
function getServerProviders() {
    const cfg = getConfig();
    const result = {};
    for (const [id, entry] of Object.entries(cfg.providers)){
        result[id] = {};
        if (entry.models && entry.models.length > 0) result[id].models = entry.models;
        if (entry.baseUrl) result[id].baseUrl = entry.baseUrl;
    }
    return result;
}
function resolveApiKey(providerId, clientKey) {
    if (clientKey) return clientKey;
    return getConfig().providers[providerId]?.apiKey || '';
}
function resolveBaseUrl(providerId, clientBaseUrl) {
    if (clientBaseUrl) return clientBaseUrl;
    return getConfig().providers[providerId]?.baseUrl;
}
function resolveProxy(providerId) {
    return getConfig().providers[providerId]?.proxy;
}
function getServerTTSProviders() {
    const cfg = getConfig();
    const result = {};
    for (const [id, entry] of Object.entries(cfg.tts)){
        result[id] = {};
        if (entry.baseUrl) result[id].baseUrl = entry.baseUrl;
    }
    return result;
}
function resolveTTSApiKey(providerId, clientKey) {
    if (clientKey) return clientKey;
    return getConfig().tts[providerId]?.apiKey || '';
}
function resolveTTSBaseUrl(providerId, clientBaseUrl) {
    if (clientBaseUrl) return clientBaseUrl;
    return getConfig().tts[providerId]?.baseUrl;
}
function getServerASRProviders() {
    const cfg = getConfig();
    const result = {};
    for (const [id, entry] of Object.entries(cfg.asr)){
        result[id] = {};
        if (entry.baseUrl) result[id].baseUrl = entry.baseUrl;
    }
    return result;
}
function resolveASRApiKey(providerId, clientKey) {
    if (clientKey) return clientKey;
    return getConfig().asr[providerId]?.apiKey || '';
}
function resolveASRBaseUrl(providerId, clientBaseUrl) {
    if (clientBaseUrl) return clientBaseUrl;
    return getConfig().asr[providerId]?.baseUrl;
}
function getServerPDFProviders() {
    const cfg = getConfig();
    const result = {};
    for (const [id, entry] of Object.entries(cfg.pdf)){
        result[id] = {};
        if (entry.baseUrl) result[id].baseUrl = entry.baseUrl;
    }
    return result;
}
function resolvePDFApiKey(providerId, clientKey) {
    if (clientKey) return clientKey;
    return getConfig().pdf[providerId]?.apiKey || '';
}
function resolvePDFBaseUrl(providerId, clientBaseUrl) {
    if (clientBaseUrl) return clientBaseUrl;
    return getConfig().pdf[providerId]?.baseUrl;
}
function getServerImageProviders() {
    const cfg = getConfig();
    const result = {};
    for (const id of Object.keys(cfg.image)){
        result[id] = {};
    }
    return result;
}
function resolveImageApiKey(providerId, clientKey) {
    if (clientKey) return clientKey;
    return getConfig().image[providerId]?.apiKey || '';
}
function resolveImageBaseUrl(providerId, clientBaseUrl) {
    if (clientBaseUrl) return clientBaseUrl;
    return getConfig().image[providerId]?.baseUrl;
}
function getServerVideoProviders() {
    const cfg = getConfig();
    const result = {};
    for (const id of Object.keys(cfg.video)){
        result[id] = {};
    }
    return result;
}
function resolveVideoApiKey(providerId, clientKey) {
    if (clientKey) return clientKey;
    return getConfig().video[providerId]?.apiKey || '';
}
function resolveVideoBaseUrl(providerId, clientBaseUrl) {
    if (clientBaseUrl) return clientBaseUrl;
    return getConfig().video[providerId]?.baseUrl;
}
function getServerWebSearchProviders() {
    const cfg = getConfig();
    const result = {};
    for (const [id, entry] of Object.entries(cfg.webSearch)){
        result[id] = {};
        if (entry.baseUrl) result[id].baseUrl = entry.baseUrl;
    }
    return result;
}
function resolveWebSearchApiKey(clientKey) {
    if (clientKey) return clientKey;
    const serverKey = getConfig().webSearch.tavily?.apiKey;
    if (serverKey) return serverKey;
    return process.env.TAVILY_API_KEY || '';
}
}),
"[project]/lib/server/ssrf-guard.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateUrlForSSRF",
    ()=>validateUrlForSSRF
]);
/**
 * SSRF (Server-Side Request Forgery) protection utilities.
 *
 * Validates URLs to prevent requests to internal/private network addresses.
 * Used by any API route that fetches a user-supplied URL server-side.
 */ /** Check if hostname is in the 172.16.0.0 - 172.31.255.255 private range */ function isPrivate172(hostname) {
    if (!hostname.startsWith('172.')) return false;
    const second = parseInt(hostname.split('.')[1], 10);
    return second >= 16 && second <= 31;
}
function validateUrlForSSRF(url) {
    let parsed;
    try {
        parsed = new URL(url);
    } catch  {
        return 'Invalid URL';
    }
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
        return 'Only HTTP(S) URLs are allowed';
    }
    const hostname = parsed.hostname.toLowerCase();
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1' || hostname === '0.0.0.0' || hostname.startsWith('10.') || hostname.startsWith('192.168.') || hostname.startsWith('169.254.') || isPrivate172(hostname) || hostname.endsWith('.local') || hostname.startsWith('fd') || hostname.startsWith('fe80')) {
        return 'Local/private network URLs are not allowed';
    }
    return null;
}
}),
"[project]/lib/server/resolve-model.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Shared model resolution utilities for API routes.
 *
 * Extracts the repeated parseModelString → resolveApiKey → resolveBaseUrl →
 * resolveProxy → getModel boilerplate into a single call.
 */ __turbopack_context__.s([
    "resolveModel",
    ()=>resolveModel,
    "resolveModelFromHeaders",
    ()=>resolveModelFromHeaders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$providers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai/providers.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$provider$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/provider-config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$ssrf$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/ssrf-guard.ts [app-route] (ecmascript)");
;
;
;
function resolveModel(params) {
    const modelString = params.modelString || process.env.DEFAULT_MODEL || 'gpt-4o-mini';
    const { providerId, modelId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$providers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseModelString"])(modelString);
    const clientBaseUrl = params.baseUrl || undefined;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const apiKey = clientBaseUrl ? params.apiKey || '' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$provider$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveApiKey"])(providerId, params.apiKey || '');
    const baseUrl = clientBaseUrl ? clientBaseUrl : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$provider$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveBaseUrl"])(providerId, params.baseUrl);
    const proxy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$provider$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveProxy"])(providerId);
    const { model, modelInfo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$providers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getModel"])({
        providerId,
        modelId,
        apiKey,
        baseUrl,
        proxy,
        providerType: params.providerType,
        requiresApiKey: params.requiresApiKey
    });
    return {
        model,
        modelInfo,
        modelString,
        apiKey
    };
}
function resolveModelFromHeaders(req) {
    return resolveModel({
        modelString: req.headers.get('x-model') || undefined,
        apiKey: req.headers.get('x-api-key') || undefined,
        baseUrl: req.headers.get('x-base-url') || undefined,
        providerType: req.headers.get('x-provider-type') || undefined,
        requiresApiKey: req.headers.get('x-requires-api-key') === 'true' ? true : undefined
    });
}
}),
"[project]/app/api/generate/scene-content/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Scene Content Generation API
 *
 * Generates scene content (slides/quiz/interactive/pbl) from an outline.
 * This is the first half of the two-step scene generation pipeline.
 * Does NOT generate actions — use /api/generate/scene-actions for that.
 */ __turbopack_context__.s([
    "POST",
    ()=>POST,
    "maxDuration",
    ()=>maxDuration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$llm$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai/llm.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$generation$2d$pipeline$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/generation/generation-pipeline.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$outline$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/outline-generator.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$scene$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/scene-generator.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompt$2d$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generation/prompt-formatters.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/api-response.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$resolve$2d$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/resolve-model.ts [app-route] (ecmascript)");
;
;
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLogger"])('Scene Content API');
const maxDuration = 300;
async function POST(req) {
    let outlineTitle;
    let resolvedModelString;
    try {
        const body = await req.json();
        const { outline: rawOutline, allOutlines, pdfImages, imageMapping, stageInfo, stageId, agents } = body;
        // Validate required fields
        if (!rawOutline) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('MISSING_REQUIRED_FIELD', 400, 'outline is required');
        }
        if (!allOutlines || allOutlines.length === 0) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('MISSING_REQUIRED_FIELD', 400, 'allOutlines is required and must not be empty');
        }
        if (!stageId) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('MISSING_REQUIRED_FIELD', 400, 'stageId is required');
        }
        // Ensure outline has language from stageInfo (fallback for older outlines)
        const outline = {
            ...rawOutline,
            language: rawOutline.language || stageInfo?.language || 'zh-CN'
        };
        // ── Model resolution from request headers ──
        const { model: languageModel, modelInfo, modelString } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$resolve$2d$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveModelFromHeaders"])(req);
        outlineTitle = rawOutline?.title;
        resolvedModelString = modelString;
        // Detect vision capability
        const hasVision = !!modelInfo?.capabilities?.vision;
        // Vision-aware AI call function
        const aiCall = async (systemPrompt, userPrompt, images)=>{
            if (images?.length && hasVision) {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$llm$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["callLLM"])({
                    model: languageModel,
                    system: systemPrompt,
                    messages: [
                        {
                            role: 'user',
                            content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$prompt$2d$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildVisionUserContent"])(userPrompt, images)
                        }
                    ],
                    maxOutputTokens: modelInfo?.outputWindow
                }, 'scene-content');
                return result.text;
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$llm$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["callLLM"])({
                model: languageModel,
                system: systemPrompt,
                prompt: userPrompt,
                maxOutputTokens: modelInfo?.outputWindow
            }, 'scene-content');
            return result.text;
        };
        // ── Apply fallbacks ──
        const effectiveOutline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$outline$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyOutlineFallbacks"])(outline, !!languageModel);
        // ── Filter images assigned to this outline ──
        let assignedImages;
        if (pdfImages && pdfImages.length > 0 && effectiveOutline.suggestedImageIds && effectiveOutline.suggestedImageIds.length > 0) {
            const suggestedIds = new Set(effectiveOutline.suggestedImageIds);
            assignedImages = pdfImages.filter((img)=>suggestedIds.has(img.id));
        }
        // ── Media generation is handled client-side in parallel (media-orchestrator.ts) ──
        // The content generator receives placeholder IDs (gen_img_1, gen_vid_1) as-is.
        // resolveImageIds() in generation-pipeline.ts will keep these placeholders in elements.
        const generatedMediaMapping = {};
        // ── Generate content ──
        log.info(`Generating content: "${effectiveOutline.title}" (${effectiveOutline.type}) [model=${modelString}]`);
        const content = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generation$2f$scene$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateSceneContent"])(effectiveOutline, aiCall, assignedImages, imageMapping, effectiveOutline.type === 'pbl' ? languageModel : undefined, hasVision, generatedMediaMapping, agents);
        if (!content) {
            log.error(`Failed to generate content for: "${effectiveOutline.title}"`);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('GENERATION_FAILED', 500, `Failed to generate content: ${effectiveOutline.title}`);
        }
        log.info(`Content generated successfully: "${effectiveOutline.title}"`);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiSuccess"])({
            content,
            effectiveOutline
        });
    } catch (error) {
        log.error(`Scene content generation failed [scene="${outlineTitle ?? 'unknown'}", model=${resolvedModelString ?? 'unknown'}]:`, error);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('INTERNAL_ERROR', 500, error instanceof Error ? error.message : String(error));
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__01da7992._.js.map