(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/classroom/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClassroomDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/stage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$theme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-theme.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/stage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$image$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/image-storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$scene$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-scene-generator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/media-generation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$whiteboard$2d$history$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/whiteboard-history.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$media$2d$stage$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contexts/media-stage-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$media$2f$media$2d$orchestrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/media/media-orchestrator.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLogger"])('Classroom');
function ClassroomDetailPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const classroomId = params?.id;
    const { loadFromStorage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStageStore"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const generationStartedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const { generateRemaining, retrySingleOutline, stop } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$scene$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSceneGenerator"])({
        onComplete: {
            "ClassroomDetailPage.useSceneGenerator": ()=>{
                log.info('[Classroom] All scenes generated');
            }
        }["ClassroomDetailPage.useSceneGenerator"]
    });
    const loadClassroom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ClassroomDetailPage.useCallback[loadClassroom]": async ()=>{
            try {
                await loadFromStorage(classroomId);
                // If IndexedDB had no data, try server-side storage (API-generated classrooms)
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStageStore"].getState().stage) {
                    log.info('No IndexedDB data, trying server-side storage for:', classroomId);
                    try {
                        const res = await fetch(`/api/classroom?id=${encodeURIComponent(classroomId)}`);
                        if (res.ok) {
                            const json = await res.json();
                            if (json.success && json.classroom) {
                                const { stage, scenes } = json.classroom;
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStageStore"].getState().setStage(stage);
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStageStore"].setState({
                                    scenes,
                                    currentSceneId: scenes[0]?.id ?? null
                                });
                                log.info('Loaded from server-side storage:', classroomId);
                                // Hydrate server-generated agents into IndexedDB + registry
                                if (stage.generatedAgentConfigs?.length) {
                                    const { saveGeneratedAgents } = await __turbopack_context__.A("[project]/lib/orchestration/registry/store.ts [app-client] (ecmascript, async loader)");
                                    const { useSettingsStore } = await __turbopack_context__.A("[project]/lib/store/settings.ts [app-client] (ecmascript, async loader)");
                                    const agentIds = await saveGeneratedAgents(stage.id, stage.generatedAgentConfigs);
                                    useSettingsStore.getState().setSelectedAgentIds(agentIds);
                                    log.info('Hydrated server-generated agents:', agentIds);
                                }
                            }
                        }
                    } catch (fetchErr) {
                        log.warn('Server-side storage fetch failed:', fetchErr);
                    }
                }
                // Restore completed media generation tasks from IndexedDB
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState().restoreFromDB(classroomId);
                // Restore agents for this stage
                const { loadGeneratedAgentsForStage, useAgentRegistry } = await __turbopack_context__.A("[project]/lib/orchestration/registry/store.ts [app-client] (ecmascript, async loader)");
                const generatedAgentIds = await loadGeneratedAgentsForStage(classroomId);
                const { useSettingsStore } = await __turbopack_context__.A("[project]/lib/store/settings.ts [app-client] (ecmascript, async loader)");
                if (generatedAgentIds.length > 0) {
                    // Auto mode — use generated agents from IndexedDB
                    useSettingsStore.getState().setAgentMode('auto');
                    useSettingsStore.getState().setSelectedAgentIds(generatedAgentIds);
                } else {
                    // Preset mode — restore agent IDs saved in the stage at creation time.
                    // Filter out any stale generated IDs that may have been persisted before
                    // the bleed-fix, so they don't resolve against a leftover registry entry.
                    const stage = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStageStore"].getState().stage;
                    const stageAgentIds = stage?.agentIds;
                    const registry = useAgentRegistry.getState();
                    const cleanIds = stageAgentIds?.filter({
                        "ClassroomDetailPage.useCallback[loadClassroom]": (id)=>{
                            const a = registry.getAgent(id);
                            return a && !a.isGenerated;
                        }
                    }["ClassroomDetailPage.useCallback[loadClassroom]"]);
                    useSettingsStore.getState().setAgentMode('preset');
                    useSettingsStore.getState().setSelectedAgentIds(cleanIds && cleanIds.length > 0 ? cleanIds : [
                        'default-1',
                        'default-2',
                        'default-3'
                    ]);
                }
            } catch (error) {
                log.error('Failed to load classroom:', error);
                setError(error instanceof Error ? error.message : 'Failed to load classroom');
            } finally{
                setLoading(false);
            }
        }
    }["ClassroomDetailPage.useCallback[loadClassroom]"], [
        classroomId,
        loadFromStorage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClassroomDetailPage.useEffect": ()=>{
            // Reset loading state on course switch to unmount Stage during transition,
            // preventing stale data from syncing back to the new course
            setLoading(true);
            setError(null);
            generationStartedRef.current = false;
            // Clear previous classroom's media tasks to prevent cross-classroom contamination.
            // Placeholder IDs (gen_img_1, gen_vid_1) are NOT globally unique across stages,
            // so stale tasks from a previous classroom would shadow the new one's.
            const mediaStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState();
            mediaStore.revokeObjectUrls();
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].setState({
                tasks: {}
            });
            // Clear whiteboard history to prevent snapshots from a previous course leaking in.
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$whiteboard$2d$history$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWhiteboardHistoryStore"].getState().clearHistory();
            loadClassroom();
            // Cancel ongoing generation when classroomId changes or component unmounts
            return ({
                "ClassroomDetailPage.useEffect": ()=>{
                    stop();
                }
            })["ClassroomDetailPage.useEffect"];
        }
    }["ClassroomDetailPage.useEffect"], [
        classroomId,
        loadClassroom,
        stop
    ]);
    // Auto-resume generation for pending outlines
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClassroomDetailPage.useEffect": ()=>{
            if (loading || error || generationStartedRef.current) return;
            const state = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStageStore"].getState();
            const { outlines, scenes, stage } = state;
            // Check if there are pending outlines
            const completedOrders = new Set(scenes.map({
                "ClassroomDetailPage.useEffect": (s)=>s.order
            }["ClassroomDetailPage.useEffect"]));
            const hasPending = outlines.some({
                "ClassroomDetailPage.useEffect.hasPending": (o)=>!completedOrders.has(o.order)
            }["ClassroomDetailPage.useEffect.hasPending"]);
            if (hasPending && stage) {
                generationStartedRef.current = true;
                // Load generation params from sessionStorage (stored by generation-preview before navigating)
                const genParamsStr = sessionStorage.getItem('generationParams');
                const params = genParamsStr ? JSON.parse(genParamsStr) : {};
                // Reconstruct imageMapping from IndexedDB using pdfImages storageIds
                const storageIds = (params.pdfImages || []).map({
                    "ClassroomDetailPage.useEffect.storageIds": (img)=>img.storageId
                }["ClassroomDetailPage.useEffect.storageIds"]).filter(Boolean);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$image$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadImageMapping"])(storageIds).then({
                    "ClassroomDetailPage.useEffect": (imageMapping)=>{
                        generateRemaining({
                            pdfImages: params.pdfImages,
                            imageMapping,
                            stageInfo: {
                                name: stage.name || '',
                                description: stage.description,
                                language: stage.language,
                                style: stage.style
                            },
                            agents: params.agents,
                            userProfile: params.userProfile
                        });
                    }
                }["ClassroomDetailPage.useEffect"]);
            } else if (outlines.length > 0 && stage) {
                // All scenes are generated, but some media may not have finished.
                // Resume media generation for any tasks not yet in IndexedDB.
                // generateMediaForOutlines skips already-completed tasks automatically.
                generationStartedRef.current = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$media$2f$media$2d$orchestrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateMediaForOutlines"])(outlines, stage.id).catch({
                    "ClassroomDetailPage.useEffect": (err)=>{
                        log.warn('[Classroom] Media generation resume error:', err);
                    }
                }["ClassroomDetailPage.useEffect"]);
            }
        }
    }["ClassroomDetailPage.useEffect"], [
        loading,
        error,
        generateRemaining
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$theme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$media$2d$stage$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStageProvider"], {
            value: classroomId,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen flex flex-col overflow-hidden",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-900",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-muted-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Loading classroom..."
                        }, void 0, false, {
                            fileName: "[project]/app/classroom/[id]/page.tsx",
                            lineNumber: 187,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/classroom/[id]/page.tsx",
                        lineNumber: 186,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/classroom/[id]/page.tsx",
                    lineNumber: 185,
                    columnNumber: 13
                }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-900",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-destructive mb-4",
                                children: [
                                    "Error: ",
                                    error
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/classroom/[id]/page.tsx",
                                lineNumber: 193,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setError(null);
                                    setLoading(true);
                                    loadClassroom();
                                },
                                className: "px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",
                                children: "Retry"
                            }, void 0, false, {
                                fileName: "[project]/app/classroom/[id]/page.tsx",
                                lineNumber: 194,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/classroom/[id]/page.tsx",
                        lineNumber: 192,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/classroom/[id]/page.tsx",
                    lineNumber: 191,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stage"], {
                    onRetryOutline: retrySingleOutline
                }, void 0, false, {
                    fileName: "[project]/app/classroom/[id]/page.tsx",
                    lineNumber: 207,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/classroom/[id]/page.tsx",
                lineNumber: 183,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/classroom/[id]/page.tsx",
            lineNumber: 182,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/classroom/[id]/page.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
_s(ClassroomDetailPage, "S+txV/Lvo/uFLWOiA7lpLjHuLuQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStageStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$scene$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSceneGenerator"]
    ];
});
_c = ClassroomDetailPage;
var _c;
__turbopack_context__.k.register(_c, "ClassroomDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_classroom_%5Bid%5D_page_tsx_6c1fc8d3._.js.map