module.exports = [
"[project]/lib/utils/chat-storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Chat Storage - Persist chat sessions to IndexedDB
 *
 * Independent from stage/scene storage cycle.
 * Handles serialization, truncation, and batch writes.
 */ __turbopack_context__.s([
    "deleteChatSessions",
    ()=>deleteChatSessions,
    "loadChatSessions",
    ()=>loadChatSessions,
    "saveChatSessions",
    ()=>saveChatSessions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/database.ts [app-ssr] (ecmascript)");
;
/** Maximum messages per session to avoid IndexedDB bloat */ const MAX_MESSAGES_PER_SESSION = 200;
async function saveChatSessions(stageId, sessions) {
    if (!sessions || sessions.length === 0) {
        // Delete all sessions for this stage if empty
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].chatSessions.where('stageId').equals(stageId).delete();
        return;
    }
    const records = sessions.map((session)=>({
            id: session.id,
            stageId,
            type: session.type,
            title: session.title,
            // Mark active sessions as interrupted (streaming context lost on refresh)
            status: session.status === 'active' ? 'interrupted' : session.status,
            // Truncate messages and strip non-serializable data
            messages: session.messages.slice(-MAX_MESSAGES_PER_SESSION),
            config: session.config,
            toolCalls: session.toolCalls,
            pendingToolCalls: [],
            createdAt: session.createdAt,
            updatedAt: session.updatedAt,
            sceneId: session.sceneId,
            lastActionIndex: session.lastActionIndex
        }));
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].transaction('rw', __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].chatSessions, async ()=>{
        // Delete old sessions for this stage, then bulk insert new ones
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].chatSessions.where('stageId').equals(stageId).delete();
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].chatSessions.bulkPut(records);
    });
}
async function loadChatSessions(stageId) {
    const records = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].chatSessions.where('stageId').equals(stageId).sortBy('createdAt');
    return records.map((record)=>({
            id: record.id,
            type: record.type,
            title: record.title,
            status: record.status,
            messages: record.messages,
            config: record.config,
            toolCalls: record.toolCalls,
            pendingToolCalls: record.pendingToolCalls,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
            sceneId: record.sceneId,
            lastActionIndex: record.lastActionIndex
        }));
}
async function deleteChatSessions(stageId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].chatSessions.where('stageId').equals(stageId).delete();
}
}),
"[project]/lib/utils/playback-storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearPlaybackState",
    ()=>clearPlaybackState,
    "loadPlaybackState",
    ()=>loadPlaybackState,
    "savePlaybackState",
    ()=>savePlaybackState
]);
/**
 * Playback Storage - Persist playback engine state to IndexedDB
 *
 * Stores minimal state needed to resume playback from a breakpoint:
 * position (sceneIndex + actionIndex) and consumed discussions.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/database.ts [app-ssr] (ecmascript)");
;
async function savePlaybackState(stageId, snapshot) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].playbackState.put({
        stageId,
        sceneIndex: snapshot.sceneIndex,
        actionIndex: snapshot.actionIndex,
        consumedDiscussions: snapshot.consumedDiscussions,
        sceneId: snapshot.sceneId,
        updatedAt: Date.now()
    });
}
async function loadPlaybackState(stageId) {
    const record = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].playbackState.get(stageId);
    if (!record) return null;
    return {
        sceneIndex: record.sceneIndex,
        actionIndex: record.actionIndex,
        consumedDiscussions: record.consumedDiscussions,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sceneId: record.sceneId
    };
}
async function clearPlaybackState(stageId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].playbackState.delete(stageId);
}
}),
"[project]/lib/utils/stage-storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Stage Storage Manager
 *
 * Manages multiple stage data in IndexedDB
 * Each stage has its own storage key based on stageId
 */ __turbopack_context__.s([
    "deleteStageData",
    ()=>deleteStageData,
    "getFirstSlideByStages",
    ()=>getFirstSlideByStages,
    "listStages",
    ()=>listStages,
    "loadStageData",
    ()=>loadStageData,
    "renameStage",
    ()=>renameStage,
    "saveStageData",
    ()=>saveStageData,
    "stageExists",
    ()=>stageExists
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/database.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$chat$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/chat-storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$playback$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/playback-storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-ssr] (ecmascript)");
;
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('StageStorage');
async function saveStageData(stageId, data) {
    try {
        const now = Date.now();
        // Save to stages table
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].stages.put({
            id: stageId,
            name: data.stage.name || 'Untitled Stage',
            description: data.stage.description,
            createdAt: data.stage.createdAt || now,
            updatedAt: now,
            language: data.stage.language,
            style: data.stage.style,
            currentSceneId: data.currentSceneId || undefined,
            agentIds: data.stage.agentIds
        });
        // Delete old scenes first to avoid orphaned data
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].scenes.where('stageId').equals(stageId).delete();
        // Save new scenes
        if (data.scenes && data.scenes.length > 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].scenes.bulkPut(data.scenes.map((scene, index)=>({
                    ...scene,
                    stageId,
                    order: scene.order ?? index,
                    createdAt: scene.createdAt || now,
                    updatedAt: scene.updatedAt || now
                })));
        }
        // Save chat sessions to independent table
        if (data.chats) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$chat$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveChatSessions"])(stageId, data.chats);
        }
        log.info(`Saved stage: ${stageId}`);
    } catch (error) {
        log.error('Failed to save stage:', error);
        throw error;
    }
}
async function loadStageData(stageId) {
    try {
        // Load stage
        const stage = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].stages.get(stageId);
        if (!stage) {
            log.info(`Stage not found: ${stageId}`);
            return null;
        }
        // Load scenes
        const scenes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].scenes.where('stageId').equals(stageId).sortBy('order');
        // Load chat sessions from independent table
        const chats = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$chat$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadChatSessions"])(stageId);
        log.info(`Loaded stage: ${stageId}, scenes: ${scenes.length}, chats: ${chats.length}`);
        return {
            stage,
            scenes,
            currentSceneId: stage.currentSceneId || scenes[0]?.id || null,
            chats
        };
    } catch (error) {
        log.error('Failed to load stage:', error);
        return null;
    }
}
async function deleteStageData(stageId) {
    try {
        // Delete stage
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].stages.delete(stageId);
        // Delete scenes
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].scenes.where('stageId').equals(stageId).delete();
        // Delete chat sessions and playback state
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$chat$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteChatSessions"])(stageId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$playback$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearPlaybackState"])(stageId);
        log.info(`Deleted stage: ${stageId}`);
    } catch (error) {
        log.error('Failed to delete stage:', error);
        throw error;
    }
}
async function listStages() {
    try {
        const stages = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].stages.orderBy('updatedAt').reverse().toArray();
        const stageList = await Promise.all(stages.map(async (stage)=>{
            const sceneCount = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].scenes.where('stageId').equals(stage.id).count();
            return {
                id: stage.id,
                name: stage.name,
                description: stage.description,
                sceneCount,
                createdAt: stage.createdAt,
                updatedAt: stage.updatedAt
            };
        }));
        return stageList;
    } catch (error) {
        log.error('Failed to list stages:', error);
        return [];
    }
}
async function getFirstSlideByStages(stageIds) {
    const result = {};
    try {
        await Promise.all(stageIds.map(async (stageId)=>{
            const scenes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].scenes.where('stageId').equals(stageId).sortBy('order');
            const firstSlide = scenes.find((s)=>s.content?.type === 'slide');
            if (firstSlide && firstSlide.content.type === 'slide') {
                const slide = structuredClone(firstSlide.content.canvas);
                // Resolve gen_img_* placeholders from mediaFiles
                const placeholderEls = slide.elements.filter(// eslint-disable-next-line @typescript-eslint/no-explicit-any
                (el)=>el.type === 'image' && /^gen_(img|vid)_[\w-]+$/i.test(el.src));
                if (placeholderEls.length > 0) {
                    const mediaRecords = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].mediaFiles.where('stageId').equals(stageId).toArray();
                    const mediaMap = new Map(mediaRecords.map((r)=>{
                        // Key format: stageId:elementId → extract elementId
                        const elementId = r.id.includes(':') ? r.id.split(':').slice(1).join(':') : r.id;
                        return [
                            elementId,
                            r.blob
                        ];
                    }));
                    for (const el of placeholderEls){
                        const blob = mediaMap.get(el.src);
                        if (blob) {
                            el.src = URL.createObjectURL(blob);
                        } else {
                            // Clear unresolved placeholder so BaseImageElement won't subscribe
                            // to the global media store (which may have stale data from another course)
                            el.src = '';
                        }
                    }
                }
                result[stageId] = slide;
            }
        }));
    } catch (error) {
        log.error('Failed to load thumbnails:', error);
    }
    return result;
}
async function renameStage(stageId, newName) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].stages.update(stageId, {
            name: newName,
            updatedAt: Date.now()
        });
        log.info(`Renamed stage ${stageId} to "${newName}"`);
    } catch (error) {
        log.error('Failed to rename stage:', error);
        throw error;
    }
}
async function stageExists(stageId) {
    try {
        const stage = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].stages.get(stageId);
        return !!stage;
    } catch (error) {
        log.error('Failed to check stage existence:', error);
        return false;
    }
}
}),
];

//# sourceMappingURL=lib_utils_02da3fc0._.js.map