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
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

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
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
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
"[project]/lib/constants/agent-defaults.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Shared constants for agent profile generation.
 *
 * Used by both the client-side agent-profiles API route and the
 * server-side classroom-generation pipeline to keep colors / avatars in sync.
 */ /** Color palette cycled for generated agents */ __turbopack_context__.s([
    "AGENT_COLOR_PALETTE",
    ()=>AGENT_COLOR_PALETTE,
    "AGENT_DEFAULT_AVATARS",
    ()=>AGENT_DEFAULT_AVATARS
]);
const AGENT_COLOR_PALETTE = [
    '#3b82f6',
    '#10b981',
    '#f59e0b',
    '#ec4899',
    '#06b6d4',
    '#8b5cf6',
    '#f97316',
    '#14b8a6',
    '#e11d48',
    '#6366f1',
    '#84cc16',
    '#a855f7'
];
const AGENT_DEFAULT_AVATARS = [
    '/avatars/teacher.png',
    '/avatars/assist.png',
    '/avatars/curious.png',
    '/avatars/thinker.png',
    '/avatars/note-taker.png',
    '/avatars/teacher-2.png',
    '/avatars/assist-2.png',
    '/avatars/curious-2.png',
    '/avatars/thinker-2.png',
    '/avatars/note-taker-2.png'
];
}),
"[project]/app/api/generate/agent-profiles/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Agent Profiles Generation API
 *
 * Generates agent profiles (teacher, assistant, student) for a course stage
 * based on stage info and scene outlines.
 */ __turbopack_context__.s([
    "POST",
    ()=>POST,
    "maxDuration",
    ()=>maxDuration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$llm$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai/llm.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/api-response.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$resolve$2d$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/resolve-model.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$agent$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/agent-defaults.ts [app-route] (ecmascript)");
;
;
;
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLogger"])('Agent Profiles API');
const maxDuration = 120;
function stripCodeFences(text) {
    let cleaned = text.trim();
    // Remove markdown code fences (```json ... ``` or ``` ... ```)
    if (cleaned.startsWith('```')) {
        cleaned = cleaned.replace(/^```(?:json)?\s*\n?/, '').replace(/\n?```\s*$/, '');
    }
    return cleaned.trim();
}
async function POST(req) {
    let stageName;
    let modelString;
    try {
        const body = await req.json();
        const { stageInfo, sceneOutlines, language, availableAvatars, avatarDescriptions, availableVoices } = body;
        stageName = stageInfo?.name;
        // ── Validate required fields ──
        if (!stageInfo?.name) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('MISSING_REQUIRED_FIELD', 400, 'stageInfo.name is required');
        }
        if (!language) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('MISSING_REQUIRED_FIELD', 400, 'language is required');
        }
        if (!availableAvatars || availableAvatars.length === 0) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('MISSING_REQUIRED_FIELD', 400, 'availableAvatars is required and must not be empty');
        }
        // ── Model resolution from request headers ──
        const { model: languageModel, modelString: _modelString } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$resolve$2d$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveModelFromHeaders"])(req);
        modelString = _modelString;
        // ── Build prompt ──
        const sceneSummary = sceneOutlines?.length ? sceneOutlines.map((s, i)=>`${i + 1}. ${s.title}${s.description ? ` — ${s.description}` : ''}`).join('\n') : null;
        const systemPrompt = `You are an expert instructional designer. Generate agent profiles for a multi-agent classroom simulation. Decide the appropriate number of agents (typically 3-5) based on the course content and complexity. Return ONLY valid JSON, no markdown or explanation.`;
        // Build voice list for prompt (if available)
        const voiceListStr = availableVoices && availableVoices.length > 0 ? JSON.stringify(availableVoices.map((v)=>({
                id: `${v.providerId}::${v.voiceId}`,
                name: v.voiceName
            }))) : '';
        const voicePrompt = voiceListStr ? `- Each agent should be assigned a voice that matches their persona from this list: ${voiceListStr}
  - Pick a voice that suits the agent's personality and role (e.g. authoritative voice for teacher, lively voice for energetic student)
  - Try to use different voices for each agent` : '';
        const voiceJsonField = voiceListStr ? ',\n      "voice": "string (voice id from available list, e.g. \'qwen-tts::Cherry\')"' : '';
        const userPrompt = `Generate agent profiles for the following course:

Course name: ${stageInfo.name}
${stageInfo.description ? `Course description: ${stageInfo.description}` : ''}
${sceneSummary ? `\nScene outlines:\n${sceneSummary}\n` : ''}
Requirements:
- Decide the appropriate number of agents based on the course content (typically 3-5)
- Exactly 1 agent must have role "teacher", the rest can be "assistant" or "student"
- Priority values: teacher=10 (highest), assistant=7, student=4-6
- Each agent needs: name, role, persona (2-3 sentences describing personality and teaching/learning style)
- Names and personas must be in language: ${language}
- Each agent must be assigned one avatar from this list: ${JSON.stringify(avatarDescriptions && avatarDescriptions.length > 0 ? avatarDescriptions.map((a)=>({
                path: a.path,
                description: a.desc
            })) : availableAvatars)}
  - Pick an avatar that visually matches the agent's personality and role
  - Try to use different avatars for each agent
  - Use the "path" value as the avatar field in the output
- Each agent must be assigned one color from this list: ${JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$agent$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGENT_COLOR_PALETTE"])}
  - Each agent must have a different color
${voicePrompt}

Return a JSON object with this exact structure:
{
  "agents": [
    {
      "name": "string",
      "role": "teacher" | "assistant" | "student",
      "persona": "string (2-3 sentences)",
      "avatar": "string (from available list)",
      "color": "string (hex color from palette)",
      "priority": number (10 for teacher, 7 for assistant, 4-6 for student)${voiceJsonField}
    }
  ]
}`;
        log.info(`Generating agent profiles for "${stageInfo.name}" [model=${modelString}]`);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$llm$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["callLLM"])({
            model: languageModel,
            system: systemPrompt,
            prompt: userPrompt
        }, 'agent-profiles');
        // ── Parse LLM response ──
        const rawText = stripCodeFences(result.text);
        let parsed;
        try {
            parsed = JSON.parse(rawText);
        } catch  {
            log.error('Failed to parse LLM response as JSON:', rawText.substring(0, 500));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('PARSE_FAILED', 500, 'Failed to parse agent profiles from LLM response');
        }
        // ── Validate parsed structure ──
        if (!parsed.agents || !Array.isArray(parsed.agents) || parsed.agents.length < 2) {
            log.error(`Expected at least 2 agents, got ${parsed.agents?.length ?? 0}`);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('GENERATION_FAILED', 500, `Expected at least 2 agents but LLM returned ${parsed.agents?.length ?? 0}`);
        }
        const teacherCount = parsed.agents.filter((a)=>a.role === 'teacher').length;
        if (teacherCount !== 1) {
            log.error(`Expected exactly 1 teacher, got ${teacherCount}`);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('GENERATION_FAILED', 500, `Expected exactly 1 teacher but LLM returned ${teacherCount}`);
        }
        // ── Build output with IDs ──
        const agents = parsed.agents.map((agent, index)=>{
            // Parse voice "providerId::voiceId" format
            let voiceConfig;
            if (agent.voice && agent.voice.includes('::')) {
                const [providerId, voiceId] = agent.voice.split('::');
                if (providerId && voiceId) {
                    voiceConfig = {
                        providerId,
                        voiceId
                    };
                }
            }
            return {
                id: `gen-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(8)}`,
                name: agent.name,
                role: agent.role,
                persona: agent.persona,
                avatar: agent.avatar || availableAvatars[index % availableAvatars.length],
                color: agent.color || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$agent$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGENT_COLOR_PALETTE"][index % __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$agent$2d$defaults$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGENT_COLOR_PALETTE"].length],
                priority: agent.priority ?? (agent.role === 'teacher' ? 10 : agent.role === 'assistant' ? 7 : 5),
                ...voiceConfig ? {
                    voiceConfig
                } : {}
            };
        });
        log.info(`Successfully generated ${agents.length} agent profiles for "${stageInfo.name}"`);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiSuccess"])({
            agents
        });
    } catch (error) {
        log.error(`Agent profiles generation failed [stage="${stageName ?? 'unknown'}", model=${modelString ?? 'unknown'}]:`, error);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('INTERNAL_ERROR', 500, error instanceof Error ? error.message : String(error));
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__60825dd8._.js.map