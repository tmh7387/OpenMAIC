module.exports = [
"[project]/lib/utils/create-selectors.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/prosemirror/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-commands@1.7.1/node_modules/prosemirror-commands/dist/index.js [app-ssr] (ecmascript)");
;
const isList = (node, schema)=>{
    return node.type === schema.nodes.bullet_list || node.type === schema.nodes.ordered_list;
};
const autoSelectAll = (view)=>{
    const { empty } = view.state.selection;
    if (empty) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectAll"])(view.state, view.dispatch);
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
"[project]/lib/store/canvas.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCanvasStore",
    ()=>useCanvasStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$create$2d$selectors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/create-selectors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prosemirror/utils.ts [app-ssr] (ecmascript)");
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
    richTextAttrs: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultRichTextAttrs"],
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
const useCanvasStoreBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
const useCanvasStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$create$2d$selectors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelectors"])(useCanvasStoreBase);
}),
"[project]/lib/utils/database.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearDatabase",
    ()=>clearDatabase,
    "db",
    ()=>db,
    "deleteStageWithRelatedData",
    ()=>deleteStageWithRelatedData,
    "exportDatabase",
    ()=>exportDatabase,
    "getDatabaseStats",
    ()=>getDatabaseStats,
    "getGeneratedAgentsByStageId",
    ()=>getGeneratedAgentsByStageId,
    "getScenesByStageId",
    ()=>getScenesByStageId,
    "importDatabase",
    ()=>importDatabase,
    "initDatabase",
    ()=>initDatabase,
    "mediaFileKey",
    ()=>mediaFileKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dexie$40$4$2e$3$2e$0$2f$node_modules$2f$dexie$2f$import$2d$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/dexie@4.3.0/node_modules/dexie/import-wrapper.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-ssr] (ecmascript)");
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('Database');
function mediaFileKey(stageId, elementId) {
    return `${stageId}:${elementId}`;
}
// ==================== Database Definition ====================
const DATABASE_NAME = 'MAIC-Database';
const _DATABASE_VERSION = 8;
/**
 * MAIC Database Instance
 */ class MAICDatabase extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dexie$40$4$2e$3$2e$0$2f$node_modules$2f$dexie$2f$import$2d$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    // Table definitions
    stages;
    scenes;
    audioFiles;
    imageFiles;
    snapshots;
    chatSessions;
    playbackState;
    stageOutlines;
    mediaFiles;
    generatedAgents;
    constructor(){
        super(DATABASE_NAME);
        // Version 1: Initial schema
        this.version(1).stores({
            stages: 'id, updatedAt',
            scenes: 'id, stageId, order, [stageId+order]',
            audioFiles: 'id, createdAt',
            imageFiles: 'id, createdAt',
            snapshots: '++id'
        });
        // Version 2: Remove unused tables
        this.version(2).stores({
            stages: 'id, updatedAt',
            scenes: 'id, stageId, order, [stageId+order]',
            audioFiles: 'id, createdAt',
            imageFiles: 'id, createdAt',
            snapshots: '++id',
            // Delete removed tables
            messages: null,
            participants: null,
            discussions: null,
            sceneSnapshots: null
        });
        // Version 3: Add chatSessions and playbackState tables
        this.version(3).stores({
            stages: 'id, updatedAt',
            scenes: 'id, stageId, order, [stageId+order]',
            audioFiles: 'id, createdAt',
            imageFiles: 'id, createdAt',
            snapshots: '++id',
            chatSessions: 'id, stageId, [stageId+createdAt]',
            playbackState: 'stageId'
        });
        // Version 4: Add stageOutlines table for resume-on-refresh
        this.version(4).stores({
            stages: 'id, updatedAt',
            scenes: 'id, stageId, order, [stageId+order]',
            audioFiles: 'id, createdAt',
            imageFiles: 'id, createdAt',
            snapshots: '++id',
            chatSessions: 'id, stageId, [stageId+createdAt]',
            playbackState: 'stageId',
            stageOutlines: 'stageId'
        });
        // Version 5: Add mediaFiles table for async media generation
        this.version(5).stores({
            stages: 'id, updatedAt',
            scenes: 'id, stageId, order, [stageId+order]',
            audioFiles: 'id, createdAt',
            imageFiles: 'id, createdAt',
            snapshots: '++id',
            chatSessions: 'id, stageId, [stageId+createdAt]',
            playbackState: 'stageId',
            stageOutlines: 'stageId',
            mediaFiles: 'id, stageId, [stageId+type]'
        });
        // Version 6: Fix mediaFiles primary key — use compound key stageId:elementId
        // to prevent cross-course collisions (gen_img_1 is NOT globally unique)
        this.version(6).stores({
            stages: 'id, updatedAt',
            scenes: 'id, stageId, order, [stageId+order]',
            audioFiles: 'id, createdAt',
            imageFiles: 'id, createdAt',
            snapshots: '++id',
            chatSessions: 'id, stageId, [stageId+createdAt]',
            playbackState: 'stageId',
            stageOutlines: 'stageId',
            mediaFiles: 'id, stageId, [stageId+type]'
        }).upgrade(async (tx)=>{
            const table = tx.table('mediaFiles');
            const allRecords = await table.toArray();
            for (const rec of allRecords){
                const newKey = `${rec.stageId}:${rec.id}`;
                // Skip if already migrated (idempotent)
                if (rec.id.includes(':')) continue;
                await table.delete(rec.id);
                await table.put({
                    ...rec,
                    id: newKey
                });
            }
        });
        // Version 7: Add ossKey fields to mediaFiles and audioFiles for OSS storage plugin
        // Non-indexed optional fields — Dexie handles these transparently.
        this.version(7).stores({
            stages: 'id, updatedAt',
            scenes: 'id, stageId, order, [stageId+order]',
            audioFiles: 'id, createdAt',
            imageFiles: 'id, createdAt',
            snapshots: '++id',
            chatSessions: 'id, stageId, [stageId+createdAt]',
            playbackState: 'stageId',
            stageOutlines: 'stageId',
            mediaFiles: 'id, stageId, [stageId+type]'
        });
        // Version 8: Add generatedAgents table for AI-generated agent profiles
        this.version(8).stores({
            stages: 'id, updatedAt',
            scenes: 'id, stageId, order, [stageId+order]',
            audioFiles: 'id, createdAt',
            imageFiles: 'id, createdAt',
            snapshots: '++id',
            chatSessions: 'id, stageId, [stageId+createdAt]',
            playbackState: 'stageId',
            stageOutlines: 'stageId',
            mediaFiles: 'id, stageId, [stageId+type]',
            generatedAgents: 'id, stageId'
        });
    }
}
const db = new MAICDatabase();
async function initDatabase() {
    try {
        await db.open();
        // Request persistent storage to prevent browser from evicting IndexedDB
        // under storage pressure (large media blobs can trigger LRU cleanup)
        void navigator.storage?.persist?.();
        log.info('Database initialized successfully');
    } catch (error) {
        log.error('Failed to initialize database:', error);
        throw error;
    }
}
async function clearDatabase() {
    await db.delete();
    log.info('Database cleared');
}
async function exportDatabase() {
    return {
        stages: await db.stages.toArray(),
        scenes: await db.scenes.toArray(),
        chatSessions: await db.chatSessions.toArray(),
        playbackState: await db.playbackState.toArray()
    };
}
async function importDatabase(data) {
    await db.transaction('rw', [
        db.stages,
        db.scenes,
        db.chatSessions,
        db.playbackState
    ], async ()=>{
        if (data.stages) await db.stages.bulkPut(data.stages);
        if (data.scenes) await db.scenes.bulkPut(data.scenes);
        if (data.chatSessions) await db.chatSessions.bulkPut(data.chatSessions);
        if (data.playbackState) await db.playbackState.bulkPut(data.playbackState);
    });
    log.info('Database imported successfully');
}
async function getScenesByStageId(stageId) {
    return db.scenes.where('stageId').equals(stageId).sortBy('order');
}
async function deleteStageWithRelatedData(stageId) {
    await db.transaction('rw', [
        db.stages,
        db.scenes,
        db.chatSessions,
        db.playbackState,
        db.stageOutlines,
        db.mediaFiles,
        db.generatedAgents
    ], async ()=>{
        await db.stages.delete(stageId);
        await db.scenes.where('stageId').equals(stageId).delete();
        await db.chatSessions.where('stageId').equals(stageId).delete();
        await db.playbackState.delete(stageId);
        await db.stageOutlines.delete(stageId);
        await db.mediaFiles.where('stageId').equals(stageId).delete();
        await db.generatedAgents.where('stageId').equals(stageId).delete();
    });
}
async function getGeneratedAgentsByStageId(stageId) {
    return db.generatedAgents.where('stageId').equals(stageId).toArray();
}
async function getDatabaseStats() {
    return {
        stages: await db.stages.count(),
        scenes: await db.scenes.count(),
        audioFiles: await db.audioFiles.count(),
        imageFiles: await db.imageFiles.count(),
        snapshots: await db.snapshots.count(),
        chatSessions: await db.chatSessions.count(),
        playbackState: await db.playbackState.count(),
        stageOutlines: await db.stageOutlines.count(),
        mediaFiles: await db.mediaFiles.count(),
        generatedAgents: await db.generatedAgents.count()
    };
}
}),
"[project]/lib/store/stage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PENDING_SCENE_ID",
    ()=>PENDING_SCENE_ID,
    "useStageStore",
    ()=>useStageStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$create$2d$selectors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/create-selectors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-ssr] (ecmascript)");
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('StageStore');
const PENDING_SCENE_ID = '__pending__';
// ==================== Debounce Helper ====================
/**
 * Debounce function to limit how often a function is called
 * @param func Function to debounce
 * @param delay Delay in milliseconds
 */ function debounce(func, delay) {
    let timeoutId = null;
    return (...args)=>{
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(()=>{
            func(...args);
            timeoutId = null;
        }, delay);
    };
}
const useStageStoreBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((set, get)=>({
        // Initial state
        stage: null,
        scenes: [],
        currentSceneId: null,
        chats: [],
        mode: 'playback',
        toolbarState: 'ai',
        generatingOutlines: [],
        outlines: [],
        generationEpoch: 0,
        generationStatus: 'idle',
        currentGeneratingOrder: -1,
        failedOutlines: [],
        // Actions
        setStage: (stage)=>{
            set((s)=>({
                    stage,
                    scenes: [],
                    currentSceneId: null,
                    chats: [],
                    generationEpoch: s.generationEpoch + 1
                }));
            debouncedSave();
        },
        setScenes: (scenes)=>{
            set({
                scenes
            });
            // Auto-select first scene if no current scene
            if (!get().currentSceneId && scenes.length > 0) {
                set({
                    currentSceneId: scenes[0].id
                });
            }
            debouncedSave();
        },
        addScene: (scene)=>{
            const currentStage = get().stage;
            // Ignore scenes from different stages (prevents race condition during generation)
            if (!currentStage || scene.stageId !== currentStage.id) {
                log.warn(`Ignoring scene "${scene.title}" - stageId mismatch (scene: ${scene.stageId}, current: ${currentStage?.id})`);
                return;
            }
            const scenes = [
                ...get().scenes,
                scene
            ];
            // Remove the matching outline from generatingOutlines (match by order)
            const generatingOutlines = get().generatingOutlines.filter((o)=>o.order !== scene.order);
            // Auto-switch from pending page to the newly generated scene
            const shouldSwitch = get().currentSceneId === PENDING_SCENE_ID;
            set({
                scenes,
                generatingOutlines,
                ...shouldSwitch ? {
                    currentSceneId: scene.id
                } : {}
            });
            debouncedSave();
        },
        updateScene: (sceneId, updates)=>{
            const scenes = get().scenes.map((scene)=>scene.id === sceneId ? {
                    ...scene,
                    ...updates
                } : scene);
            set({
                scenes
            });
            debouncedSave();
        },
        deleteScene: (sceneId)=>{
            const scenes = get().scenes.filter((scene)=>scene.id !== sceneId);
            const currentSceneId = get().currentSceneId;
            // If deleted scene was current, select next or previous
            if (currentSceneId === sceneId) {
                const index = get().getSceneIndex(sceneId);
                const newIndex = index < scenes.length ? index : scenes.length - 1;
                set({
                    scenes,
                    currentSceneId: scenes[newIndex]?.id || null
                });
            } else {
                set({
                    scenes
                });
            }
            debouncedSave();
        },
        setCurrentSceneId: (sceneId)=>{
            set({
                currentSceneId: sceneId
            });
            debouncedSave();
        },
        setChats: (chats)=>{
            set({
                chats
            });
            debouncedSave();
        },
        setMode: (mode)=>set({
                mode
            }),
        setToolbarState: (toolbarState)=>set({
                toolbarState
            }),
        setGeneratingOutlines: (generatingOutlines)=>set({
                generatingOutlines
            }),
        setOutlines: (outlines)=>{
            set({
                outlines
            });
            // Persist outlines to IndexedDB
            const stageId = get().stage?.id;
            if (stageId) {
                __turbopack_context__.A("[project]/lib/utils/database.ts [app-ssr] (ecmascript, async loader)").then(({ db })=>{
                    db.stageOutlines.put({
                        stageId,
                        outlines,
                        createdAt: Date.now(),
                        updatedAt: Date.now()
                    });
                });
            }
        },
        setGenerationStatus: (generationStatus)=>set({
                generationStatus
            }),
        setCurrentGeneratingOrder: (currentGeneratingOrder)=>set({
                currentGeneratingOrder
            }),
        bumpGenerationEpoch: ()=>set((s)=>({
                    generationEpoch: s.generationEpoch + 1
                })),
        addFailedOutline: (outline)=>{
            const existed = get().failedOutlines.some((o)=>o.id === outline.id);
            if (existed) return;
            set({
                failedOutlines: [
                    ...get().failedOutlines,
                    outline
                ]
            });
        },
        clearFailedOutlines: ()=>set({
                failedOutlines: []
            }),
        retryFailedOutline: (outlineId)=>{
            set({
                failedOutlines: get().failedOutlines.filter((o)=>o.id !== outlineId)
            });
        },
        // Getters
        getCurrentScene: ()=>{
            const { scenes, currentSceneId } = get();
            if (!currentSceneId) return null;
            return scenes.find((s)=>s.id === currentSceneId) || null;
        },
        getSceneById: (sceneId)=>{
            return get().scenes.find((s)=>s.id === sceneId) || null;
        },
        getSceneIndex: (sceneId)=>{
            return get().scenes.findIndex((s)=>s.id === sceneId);
        },
        // Storage methods
        saveToStorage: async ()=>{
            const { stage, scenes, currentSceneId, chats } = get();
            if (!stage?.id) {
                log.warn('Cannot save: stage.id is required');
                return;
            }
            try {
                const { saveStageData } = await __turbopack_context__.A("[project]/lib/utils/stage-storage.ts [app-ssr] (ecmascript, async loader)");
                await saveStageData(stage.id, {
                    stage,
                    scenes,
                    currentSceneId,
                    chats
                });
            } catch (error) {
                log.error('Failed to save to storage:', error);
            }
        },
        loadFromStorage: async (stageId)=>{
            try {
                // Skip IndexedDB load if the store already has this stage with scenes
                // (e.g. navigated from generation-preview with fresh in-memory data)
                const currentState = get();
                if (currentState.stage?.id === stageId && currentState.scenes.length > 0) {
                    log.info('Stage already loaded in memory, skipping IndexedDB load:', stageId);
                    return;
                }
                const { loadStageData } = await __turbopack_context__.A("[project]/lib/utils/stage-storage.ts [app-ssr] (ecmascript, async loader)");
                const data = await loadStageData(stageId);
                // Load outlines for resume-on-refresh
                const { db } = await __turbopack_context__.A("[project]/lib/utils/database.ts [app-ssr] (ecmascript, async loader)");
                const outlinesRecord = await db.stageOutlines.get(stageId);
                const outlines = outlinesRecord?.outlines || [];
                if (data) {
                    set({
                        stage: data.stage,
                        scenes: data.scenes,
                        currentSceneId: data.currentSceneId,
                        chats: data.chats,
                        outlines,
                        // Compute generatingOutlines from persisted outlines minus completed scenes
                        generatingOutlines: outlines.filter((o)=>!data.scenes.some((s)=>s.order === o.order))
                    });
                    log.info('Loaded from storage:', stageId);
                } else {
                    log.warn('No data found for stage:', stageId);
                }
            } catch (error) {
                log.error('Failed to load from storage:', error);
                throw error;
            }
        },
        clearStore: ()=>{
            set((s)=>({
                    stage: null,
                    scenes: [],
                    currentSceneId: null,
                    chats: [],
                    outlines: [],
                    generationEpoch: s.generationEpoch + 1,
                    generationStatus: 'idle',
                    currentGeneratingOrder: -1,
                    failedOutlines: [],
                    generatingOutlines: []
                }));
            log.info('Store cleared');
        }
    }));
const useStageStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$create$2d$selectors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelectors"])(useStageStoreBase);
// ==================== Debounced Save ====================
/**
 * Debounced version of saveToStorage to prevent excessive writes
 * Waits 500ms after the last change before saving
 */ const debouncedSave = debounce(()=>{
    useStageStore.getState().saveToStorage();
}, 500);
}),
"[project]/lib/store/snapshot.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSnapshotStore",
    ()=>useSnapshotStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/database.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/stage.ts [app-ssr] (ecmascript)");
;
;
;
const useSnapshotStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        // Initial state
        snapshotCursor: -1,
        snapshotLength: 0,
        // Computed properties
        canUndo: ()=>get().snapshotCursor > 0,
        canRedo: ()=>get().snapshotCursor < get().snapshotLength - 1,
        // Actions
        setSnapshotCursor: (cursor)=>set({
                snapshotCursor: cursor
            }),
        setSnapshotLength: (length)=>set({
                snapshotLength: length
            }),
        /**
   * Initialize snapshot database with current state
   */ initSnapshotDatabase: async ()=>{
            const stageStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStageStore"].getState();
            const newFirstSnapshot = {
                index: stageStore.getSceneIndex(stageStore.currentSceneId || ''),
                slides: JSON.parse(JSON.stringify(stageStore.scenes))
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].snapshots.add(newFirstSnapshot);
            set({
                snapshotCursor: 0,
                snapshotLength: 1
            });
        },
        /**
   * Add a new snapshot to the history
   * Handles snapshot length limit and cursor position
   */ addSnapshot: async ()=>{
            const stageStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStageStore"].getState();
            const { snapshotCursor } = get();
            // Get all snapshot IDs from IndexedDB
            const allKeys = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].snapshots.orderBy('id').keys();
            let needDeleteKeys = [];
            // If cursor is not at the end, delete all snapshots after cursor
            // This happens when user undoes multiple times then performs a new action
            if (snapshotCursor >= 0 && snapshotCursor < allKeys.length - 1) {
                needDeleteKeys = allKeys.slice(snapshotCursor + 1);
            }
            // Add new snapshot
            const snapshot = {
                index: stageStore.getSceneIndex(stageStore.currentSceneId || ''),
                slides: JSON.parse(JSON.stringify(stageStore.scenes))
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].snapshots.add(snapshot);
            // Calculate new snapshot length
            let snapshotLength = allKeys.length - needDeleteKeys.length + 1;
            // Enforce snapshot length limit
            const snapshotLengthLimit = 20;
            if (snapshotLength > snapshotLengthLimit) {
                needDeleteKeys.push(allKeys[0]);
                snapshotLength--;
            }
            // Maintain page focus after undo: set the second-to-last snapshot's index to current scene
            // https://github.com/pipipi-pikachu/PPTist/issues/27
            if (snapshotLength >= 2) {
                const currentSceneIndex = stageStore.getSceneIndex(stageStore.currentSceneId || '');
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].snapshots.update(allKeys[snapshotLength - 2], {
                    index: currentSceneIndex
                });
            }
            // Delete obsolete snapshots
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].snapshots.bulkDelete(needDeleteKeys);
            set({
                snapshotCursor: snapshotLength - 1,
                snapshotLength
            });
        },
        /**
   * Undo: restore previous snapshot
   */ undo: async ()=>{
            const { snapshotCursor } = get();
            if (snapshotCursor <= 0) return;
            const stageStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStageStore"].getState();
            const newSnapshotCursor = snapshotCursor - 1;
            const snapshots = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].snapshots.orderBy('id').toArray();
            const snapshot = snapshots[newSnapshotCursor];
            const { index, slides } = snapshot;
            const sceneIndex = index > slides.length - 1 ? slides.length - 1 : index;
            // Restore scenes and current scene
            stageStore.setScenes(slides); // Type assertion needed due to Slide vs Scene difference
            if (slides[sceneIndex]) {
                stageStore.setCurrentSceneId(slides[sceneIndex].id);
            }
            set({
                snapshotCursor: newSnapshotCursor
            });
        },
        /**
   * Redo: restore next snapshot
   */ redo: async ()=>{
            const { snapshotCursor, snapshotLength } = get();
            if (snapshotCursor >= snapshotLength - 1) return;
            const stageStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStageStore"].getState();
            const newSnapshotCursor = snapshotCursor + 1;
            const snapshots = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].snapshots.orderBy('id').toArray();
            const snapshot = snapshots[newSnapshotCursor];
            const { index, slides } = snapshot;
            const sceneIndex = index > slides.length - 1 ? slides.length - 1 : index;
            // Restore scenes and current scene
            stageStore.setScenes(slides); // Type assertion needed due to Slide vs Scene difference
            if (slides[sceneIndex]) {
                stageStore.setCurrentSceneId(slides[sceneIndex].id);
            }
            set({
                snapshotCursor: newSnapshotCursor
            });
        }
    }));
}),
"[project]/lib/store/keyboard.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKeyboardStore",
    ()=>useKeyboardStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useKeyboardStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        // Initial state
        ctrlKeyState: false,
        shiftKeyState: false,
        spaceKeyState: false,
        // Getters
        ctrlOrShiftKeyActive: ()=>{
            const state = get();
            return state.ctrlKeyState || state.shiftKeyState;
        },
        // Actions
        setCtrlKeyState: (active)=>set({
                ctrlKeyState: active
            }),
        setShiftKeyState: (active)=>set({
                shiftKeyState: active
            }),
        setSpaceKeyState: (active)=>set({
                spaceKeyState: active
            })
    }));
}),
"[project]/lib/contexts/scene-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SceneProvider",
    ()=>SceneProvider,
    "useSceneData",
    ()=>useSceneData,
    "useSceneSelector",
    ()=>useSceneSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/stage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$11$2e$1$2e$4$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/immer@11.1.4/node_modules/immer/dist/immer.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const SceneContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function SceneProvider({ children }) {
    // Subscribe to current scene
    const currentScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStageStore"])((state)=>{
        if (!state.currentSceneId) return null;
        return state.scenes.find((s)=>s.id === state.currentSceneId) || null;
    });
    const updateScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStageStore"])((state)=>state.updateScene);
    const sceneId = currentScene?.id || '';
    const sceneType = currentScene?.type || 'slide';
    const sceneData = currentScene?.content || null;
    // Listeners for scene data changes
    const listenersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Subscribe function for child components
    const subscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((callback)=>{
        listenersRef.current.add(callback);
        return ()=>{
            listenersRef.current.delete(callback);
        };
    }, []);
    // Get current snapshot
    const getSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        return sceneData;
    }, [
        sceneData
    ]);
    // Notify all listeners when sceneData changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        listenersRef.current.forEach((listener)=>listener());
    }, [
        sceneData
    ]);
    // Update scene data with Immer
    const updateSceneData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((updater)=>{
        if (!currentScene) return;
        const newContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$11$2e$1$2e$4$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["produce"])(currentScene.content, updater);
        updateScene(currentScene.id, {
            content: newContent
        });
    }, [
        currentScene,
        updateScene
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            sceneId,
            sceneType,
            sceneData,
            updateSceneData,
            subscribe,
            getSnapshot
        }), [
        sceneId,
        sceneType,
        sceneData,
        updateSceneData,
        subscribe,
        getSnapshot
    ]);
    // Don't render anything if there's no scene - let parent component handle this
    if (!currentScene) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/contexts/scene-context.tsx",
        lineNumber: 102,
        columnNumber: 10
    }, this);
}
function useSceneData() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SceneContext);
    if (!context) {
        throw new Error('useSceneData must be used within SceneProvider');
    }
    return context;
}
function useSceneSelector(selector) {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SceneContext);
    if (!context) {
        throw new Error('useSceneSelector must be used within SceneProvider');
    }
    const { subscribe, getSnapshot } = context;
    // Cache selector and previous result
    const selectorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(selector);
    const snapshotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    // Update selector ref
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        selectorRef.current = selector;
    }, [
        selector
    ]);
    // Use useSyncExternalStore for precise subscription
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, ()=>{
        const snapshot = getSnapshot();
        const newValue = selectorRef.current(snapshot);
        // Shallow comparison optimization: if value hasn't changed, return previous reference
        if (snapshotRef.current !== undefined && shallowEqual(snapshotRef.current, newValue)) {
            return snapshotRef.current;
        }
        snapshotRef.current = newValue;
        return newValue;
    }, ()=>{
        // SSR fallback
        const snapshot = getSnapshot();
        return selectorRef.current(snapshot);
    });
}
/**
 * Shallow comparison function
 * Used to optimize re-renders in useSceneSelector
 */ function shallowEqual(a, b) {
    if (Object.is(a, b)) {
        return true;
    }
    if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
        return false;
    }
    const objA = a;
    const objB = b;
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    for (const key of keysA){
        if (!Object.prototype.hasOwnProperty.call(objB, key) || !Object.is(objA[key], objB[key])) {
            return false;
        }
    }
    return true;
}
}),
"[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Core stores
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/snapshot.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/keyboard.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/stage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/settings.ts [app-ssr] (ecmascript)");
// Scene Context API (for extensible scene types)
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contexts/scene-context.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/lib/utils/cn.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$5$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.5.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$5$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/lib/utils/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/cn.ts [app-ssr] (ecmascript)");
;
}),
"[project]/lib/hooks/use-slide-background-style.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSlideBackgroundStyle",
    ()=>useSlideBackgroundStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useSlideBackgroundStyle(background) {
    const backgroundStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!background) return {
            backgroundColor: '#fff'
        };
        const { type, color, image, gradient } = background;
        // Solid color background
        if (type === 'solid') return {
            backgroundColor: color
        };
        // Image background mode
        // Includes: background image, background size, whether to repeat
        if (type === 'image' && image) {
            const { src, size } = image;
            if (!src) return {
                backgroundColor: '#fff'
            };
            if (size === 'repeat') {
                return {
                    backgroundImage: `url(${src})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'contain'
                };
            }
            return {
                backgroundImage: `url(${src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: size || 'cover'
            };
        }
        // Gradient background
        if (type === 'gradient' && gradient) {
            const { type, colors, rotate } = gradient;
            const list = colors.map((item)=>`${item.color} ${item.pos}%`);
            if (type === 'radial') {
                return {
                    backgroundImage: `radial-gradient(${list.join(',')})`
                };
            }
            return {
                backgroundImage: `linear-gradient(${rotate}deg, ${list.join(',')})`
            };
        }
        return {
            backgroundColor: '#fff'
        };
    }, [
        background
    ]);
    return {
        backgroundStyle
    };
}
}),
"[project]/lib/types/slides.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElementTypes",
    ()=>ElementTypes,
    "ShapePathFormulasKeys",
    ()=>ShapePathFormulasKeys
]);
var ShapePathFormulasKeys = /*#__PURE__*/ function(ShapePathFormulasKeys) {
    ShapePathFormulasKeys["ROUND_RECT"] = "roundRect";
    ShapePathFormulasKeys["ROUND_RECT_DIAGONAL"] = "roundRectDiagonal";
    ShapePathFormulasKeys["ROUND_RECT_SINGLE"] = "roundRectSingle";
    ShapePathFormulasKeys["ROUND_RECT_SAMESIDE"] = "roundRectSameSide";
    ShapePathFormulasKeys["CUT_RECT_DIAGONAL"] = "cutRectDiagonal";
    ShapePathFormulasKeys["CUT_RECT_SINGLE"] = "cutRectSingle";
    ShapePathFormulasKeys["CUT_RECT_SAMESIDE"] = "cutRectSameSide";
    ShapePathFormulasKeys["CUT_ROUND_RECT"] = "cutRoundRect";
    ShapePathFormulasKeys["MESSAGE"] = "message";
    ShapePathFormulasKeys["ROUND_MESSAGE"] = "roundMessage";
    ShapePathFormulasKeys["L"] = "L";
    ShapePathFormulasKeys["RING_RECT"] = "ringRect";
    ShapePathFormulasKeys["PLUS"] = "plus";
    ShapePathFormulasKeys["TRIANGLE"] = "triangle";
    ShapePathFormulasKeys["PARALLELOGRAM_LEFT"] = "parallelogramLeft";
    ShapePathFormulasKeys["PARALLELOGRAM_RIGHT"] = "parallelogramRight";
    ShapePathFormulasKeys["TRAPEZOID"] = "trapezoid";
    ShapePathFormulasKeys["BULLET"] = "bullet";
    ShapePathFormulasKeys["INDICATOR"] = "indicator";
    ShapePathFormulasKeys["DONUT"] = "donut";
    ShapePathFormulasKeys["DIAGSTRIPE"] = "diagStripe";
    return ShapePathFormulasKeys;
}({});
var ElementTypes = /*#__PURE__*/ function(ElementTypes) {
    ElementTypes["TEXT"] = "text";
    ElementTypes["IMAGE"] = "image";
    ElementTypes["SHAPE"] = "shape";
    ElementTypes["LINE"] = "line";
    ElementTypes["CHART"] = "chart";
    ElementTypes["TABLE"] = "table";
    ElementTypes["LATEX"] = "latex";
    ElementTypes["VIDEO"] = "video";
    ElementTypes["AUDIO"] = "audio";
    return ElementTypes;
}({});
}),
"[project]/lib/store/media-generation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMediaPlaceholder",
    ()=>isMediaPlaceholder,
    "useMediaGenerationStore",
    ()=>useMediaGenerationStore
]);
/**
 * Media Generation Store
 *
 * Tracks per-element media generation status (pending → generating → done/failed).
 * Drives skeleton loading in slide renderer components.
 * Persistence is handled by IndexedDB (mediaFiles table), not Zustand middleware.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/database.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-ssr] (ecmascript)");
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('MediaGenerationStore');
function isMediaPlaceholder(src) {
    return /^gen_(img|vid)_[\w-]+$/i.test(src);
}
const useMediaGenerationStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((set, get)=>({
        tasks: {},
        enqueueTasks: (stageId, requests)=>{
            const newTasks = {};
            for (const req of requests){
                // Skip if already tracked
                if (get().tasks[req.elementId]) continue;
                newTasks[req.elementId] = {
                    elementId: req.elementId,
                    type: req.type,
                    status: 'pending',
                    prompt: req.prompt,
                    params: {
                        aspectRatio: req.aspectRatio,
                        style: req.style
                    },
                    retryCount: 0,
                    stageId
                };
            }
            if (Object.keys(newTasks).length > 0) {
                set((s)=>({
                        tasks: {
                            ...s.tasks,
                            ...newTasks
                        }
                    }));
            }
        },
        markGenerating: (elementId)=>set((s)=>{
                const task = s.tasks[elementId];
                if (!task) return s;
                return {
                    tasks: {
                        ...s.tasks,
                        [elementId]: {
                            ...task,
                            status: 'generating'
                        }
                    }
                };
            }),
        markDone: (elementId, objectUrl, poster)=>set((s)=>{
                const task = s.tasks[elementId];
                if (!task) return s;
                return {
                    tasks: {
                        ...s.tasks,
                        [elementId]: {
                            ...task,
                            status: 'done',
                            objectUrl,
                            poster,
                            error: undefined
                        }
                    }
                };
            }),
        markFailed: (elementId, error, errorCode)=>set((s)=>{
                const task = s.tasks[elementId];
                if (!task) return s;
                return {
                    tasks: {
                        ...s.tasks,
                        [elementId]: {
                            ...task,
                            status: 'failed',
                            error,
                            errorCode
                        }
                    }
                };
            }),
        markPendingForRetry: (elementId)=>set((s)=>{
                const task = s.tasks[elementId];
                if (!task) return s;
                return {
                    tasks: {
                        ...s.tasks,
                        [elementId]: {
                            ...task,
                            status: 'pending',
                            error: undefined,
                            errorCode: undefined,
                            retryCount: task.retryCount + 1
                        }
                    }
                };
            }),
        getTask: (elementId)=>get().tasks[elementId],
        isReady: (elementId)=>get().tasks[elementId]?.status === 'done',
        restoreFromDB: async (stageId)=>{
            try {
                const records = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].mediaFiles.where('stageId').equals(stageId).toArray();
                const restored = {};
                for (const rec of records){
                    // Extract elementId from compound key (stageId:elementId)
                    const elementId = rec.id.includes(':') ? rec.id.split(':').slice(1).join(':') : rec.id;
                    const params = JSON.parse(rec.params || '{}');
                    if (rec.error) {
                        // Restore as failed task (persisted non-retryable error)
                        restored[elementId] = {
                            elementId,
                            type: rec.type,
                            status: 'failed',
                            prompt: rec.prompt,
                            params,
                            error: rec.error,
                            errorCode: rec.errorCode,
                            retryCount: 0,
                            stageId
                        };
                    } else {
                        // Re-wrap blob with stored mimeType — IndexedDB may drop Blob.type
                        const blob = rec.blob.type ? rec.blob : new Blob([
                            rec.blob
                        ], {
                            type: rec.mimeType
                        });
                        const objectUrl = URL.createObjectURL(blob);
                        const poster = rec.poster ? URL.createObjectURL(rec.poster) : undefined;
                        restored[elementId] = {
                            elementId,
                            type: rec.type,
                            status: 'done',
                            prompt: rec.prompt,
                            params,
                            objectUrl,
                            poster,
                            retryCount: 0,
                            stageId
                        };
                    }
                }
                if (Object.keys(restored).length > 0) {
                    set((s)=>({
                            tasks: {
                                ...s.tasks,
                                ...restored
                            }
                        }));
                }
            } catch (err) {
                log.error('Failed to restore from DB:', err);
            }
        },
        clearStage: (stageId)=>set((s)=>{
                const remaining = {};
                for (const [id, task] of Object.entries(s.tasks)){
                    if (task.stageId !== stageId) {
                        remaining[id] = task;
                    } else if (task.objectUrl) {
                        URL.revokeObjectURL(task.objectUrl);
                        if (task.poster) URL.revokeObjectURL(task.poster);
                    }
                }
                return {
                    tasks: remaining
                };
            }),
        revokeObjectUrls: ()=>{
            const tasks = get().tasks;
            for (const task of Object.values(tasks)){
                if (task.objectUrl) URL.revokeObjectURL(task.objectUrl);
                if (task.poster) URL.revokeObjectURL(task.poster);
            }
        }
    }));
}),
"[project]/lib/contexts/media-stage-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaStageProvider",
    ()=>MediaStageProvider,
    "useMediaStageId",
    ()=>useMediaStageId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
/**
 * Provides the current stageId to media-aware components (BaseImageElement, BaseVideoElement).
 *
 * When set, these components subscribe to the media generation store and only use
 * tasks whose stageId matches (preventing cross-course contamination).
 * When undefined (e.g. homepage thumbnails), store subscription is skipped entirely.
 */ const MediaStageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const MediaStageProvider = MediaStageContext.Provider;
function useMediaStageId() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(MediaStageContext);
}
}),
"[project]/lib/media/media-orchestrator.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateMediaForOutlines",
    ()=>generateMediaForOutlines,
    "retryMediaTask",
    ()=>retryMediaTask
]);
/**
 * Media Generation Orchestrator
 *
 * Dispatches media generation API calls for all mediaGenerations across outlines.
 * Runs entirely on the frontend — calls /api/generate/image and /api/generate/video,
 * fetches result blobs, stores in IndexedDB, and updates the Zustand store.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/media-generation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/settings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/database.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-ssr] (ecmascript)");
;
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('MediaOrchestrator');
/** Error with a structured errorCode from the API */ class MediaApiError extends Error {
    errorCode;
    constructor(message, errorCode){
        super(message);
        this.errorCode = errorCode;
    }
}
async function generateMediaForOutlines(outlines, stageId, abortSignal) {
    const settings = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    const store = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState();
    // Collect all media requests
    const allRequests = [];
    for (const outline of outlines){
        if (!outline.mediaGenerations) continue;
        for (const mg of outline.mediaGenerations){
            // Filter by enabled flags
            if (mg.type === 'image' && !settings.imageGenerationEnabled) continue;
            if (mg.type === 'video' && !settings.videoGenerationEnabled) continue;
            // Skip already completed or permanently failed (restored from DB)
            const existing = store.getTask(mg.elementId);
            if (existing?.status === 'done' || existing?.status === 'failed') continue;
            allRequests.push(mg);
        }
    }
    if (allRequests.length === 0) return;
    // Enqueue all as pending
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState().enqueueTasks(stageId, allRequests);
    // Process requests serially — image/video APIs have limited concurrency
    for (const req of allRequests){
        if (abortSignal?.aborted) break;
        await generateSingleMedia(req, stageId, abortSignal);
    }
}
async function retryMediaTask(elementId) {
    const store = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState();
    const task = store.getTask(elementId);
    if (!task || task.status !== 'failed') return;
    // Check if the corresponding generation type is still enabled in global settings
    const settings = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    if (task.type === 'image' && !settings.imageGenerationEnabled) {
        store.markFailed(elementId, 'Generation disabled', 'GENERATION_DISABLED');
        return;
    }
    if (task.type === 'video' && !settings.videoGenerationEnabled) {
        store.markFailed(elementId, 'Generation disabled', 'GENERATION_DISABLED');
        return;
    }
    // Remove persisted failure record from DB so a fresh result can be written
    const dbKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mediaFileKey"])(task.stageId, elementId);
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].mediaFiles.delete(dbKey).catch(()=>{});
    store.markPendingForRetry(elementId);
    await generateSingleMedia({
        type: task.type,
        prompt: task.prompt,
        elementId: task.elementId,
        aspectRatio: task.params.aspectRatio,
        style: task.params.style
    }, task.stageId);
}
// ==================== Internal ====================
async function generateSingleMedia(req, stageId, abortSignal) {
    const store = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState();
    store.markGenerating(req.elementId);
    try {
        let resultUrl;
        let posterUrl;
        let mimeType;
        if (req.type === 'image') {
            const result = await callImageApi(req, abortSignal);
            resultUrl = result.url;
            mimeType = 'image/png';
        } else {
            const result = await callVideoApi(req, abortSignal);
            resultUrl = result.url;
            posterUrl = result.poster;
            mimeType = 'video/mp4';
        }
        if (abortSignal?.aborted) return;
        // Fetch blob from URL
        const blob = await fetchAsBlob(resultUrl);
        const posterBlob = posterUrl ? await fetchAsBlob(posterUrl).catch(()=>undefined) : undefined;
        // Store in IndexedDB
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].mediaFiles.put({
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mediaFileKey"])(stageId, req.elementId),
            stageId,
            type: req.type,
            blob,
            mimeType,
            size: blob.size,
            poster: posterBlob,
            prompt: req.prompt,
            params: JSON.stringify({
                aspectRatio: req.aspectRatio,
                style: req.style
            }),
            createdAt: Date.now()
        });
        // Update store with object URL
        const objectUrl = URL.createObjectURL(blob);
        const posterObjectUrl = posterBlob ? URL.createObjectURL(posterBlob) : undefined;
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState().markDone(req.elementId, objectUrl, posterObjectUrl);
    } catch (err) {
        if (abortSignal?.aborted) return;
        const message = err instanceof Error ? err.message : String(err);
        const errorCode = err instanceof MediaApiError ? err.errorCode : undefined;
        log.error(`Failed ${req.elementId}:`, message);
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState().markFailed(req.elementId, message, errorCode);
        // Persist non-retryable failures to IndexedDB so they survive page refresh
        if (errorCode) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].mediaFiles.put({
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mediaFileKey"])(stageId, req.elementId),
                stageId,
                type: req.type,
                blob: new Blob(),
                mimeType: req.type === 'image' ? 'image/png' : 'video/mp4',
                size: 0,
                prompt: req.prompt,
                params: JSON.stringify({
                    aspectRatio: req.aspectRatio,
                    style: req.style
                }),
                error: message,
                errorCode,
                createdAt: Date.now()
            }).catch(()=>{}); // best-effort
        }
    }
}
async function callImageApi(req, abortSignal) {
    const settings = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    const providerConfig = settings.imageProvidersConfig?.[settings.imageProviderId];
    const response = await fetch('/api/generate/image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-image-provider': settings.imageProviderId || '',
            'x-image-model': settings.imageModelId || '',
            'x-api-key': providerConfig?.apiKey || '',
            'x-base-url': providerConfig?.baseUrl || ''
        },
        body: JSON.stringify({
            prompt: req.prompt,
            aspectRatio: req.aspectRatio,
            style: req.style
        }),
        signal: abortSignal
    });
    if (!response.ok) {
        const data = await response.json().catch(()=>({}));
        throw new MediaApiError(data.error || `Image API returned ${response.status}`, data.errorCode);
    }
    const data = await response.json();
    if (!data.success) throw new MediaApiError(data.error || 'Image generation failed', data.errorCode);
    // Result may have url or base64
    const url = data.result?.url || (data.result?.base64 ? `data:image/png;base64,${data.result.base64}` : '');
    if (!url) throw new Error('No image URL in response');
    return {
        url
    };
}
async function callVideoApi(req, abortSignal) {
    const settings = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    const providerConfig = settings.videoProvidersConfig?.[settings.videoProviderId];
    const response = await fetch('/api/generate/video', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-video-provider': settings.videoProviderId || '',
            'x-video-model': settings.videoModelId || '',
            'x-api-key': providerConfig?.apiKey || '',
            'x-base-url': providerConfig?.baseUrl || ''
        },
        body: JSON.stringify({
            prompt: req.prompt,
            aspectRatio: req.aspectRatio
        }),
        signal: abortSignal
    });
    if (!response.ok) {
        const data = await response.json().catch(()=>({}));
        throw new MediaApiError(data.error || `Video API returned ${response.status}`, data.errorCode);
    }
    const data = await response.json();
    if (!data.success) throw new MediaApiError(data.error || 'Video generation failed', data.errorCode);
    const url = data.result?.url;
    if (!url) throw new Error('No video URL in response');
    return {
        url,
        poster: data.result?.poster
    };
}
async function fetchAsBlob(url) {
    // For data URLs, convert directly
    if (url.startsWith('data:')) {
        const res = await fetch(url);
        return res.blob();
    }
    // For remote URLs, proxy through our server to bypass CORS restrictions
    if (url.startsWith('http://') || url.startsWith('https://')) {
        const res = await fetch('/api/proxy-media', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url
            })
        });
        if (!res.ok) {
            const data = await res.json().catch(()=>({}));
            throw new Error(data.error || `Proxy fetch failed: ${res.status}`);
        }
        return res.blob();
    }
    // Relative URLs (shouldn't happen, but handle gracefully)
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch blob: ${res.status}`);
    return res.blob();
}
}),
"[project]/lib/utils/element.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createElementIdMap",
    ()=>createElementIdMap,
    "createSlideIdMap",
    ()=>createSlideIdMap,
    "getElementListRange",
    ()=>getElementListRange,
    "getElementRange",
    ()=>getElementRange,
    "getLineElementLength",
    ()=>getLineElementLength,
    "getLineElementPath",
    ()=>getLineElementPath,
    "getRectRotatedOffset",
    ()=>getRectRotatedOffset,
    "getRectRotatedRange",
    ()=>getRectRotatedRange,
    "getTableSubThemeColor",
    ()=>getTableSubThemeColor,
    "isElementInViewport",
    ()=>isElementInViewport,
    "uniqAlignLines",
    ()=>uniqAlignLines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tinycolor2@1.6.0/node_modules/tinycolor2/esm/tinycolor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/index.js [app-ssr] (ecmascript) <locals>");
;
;
const getRectRotatedRange = (element)=>{
    const { left, top, width, height, rotate = 0 } = element;
    const radius = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2;
    const auxiliaryAngle = Math.atan(height / width) * 180 / Math.PI;
    const tlbraRadian = (180 - rotate - auxiliaryAngle) * Math.PI / 180;
    const trblaRadian = (auxiliaryAngle - rotate) * Math.PI / 180;
    const middleLeft = left + width / 2;
    const middleTop = top + height / 2;
    const xAxis = [
        middleLeft + radius * Math.cos(tlbraRadian),
        middleLeft + radius * Math.cos(trblaRadian),
        middleLeft - radius * Math.cos(tlbraRadian),
        middleLeft - radius * Math.cos(trblaRadian)
    ];
    const yAxis = [
        middleTop - radius * Math.sin(tlbraRadian),
        middleTop - radius * Math.sin(trblaRadian),
        middleTop + radius * Math.sin(tlbraRadian),
        middleTop + radius * Math.sin(trblaRadian)
    ];
    return {
        xRange: [
            Math.min(...xAxis),
            Math.max(...xAxis)
        ],
        yRange: [
            Math.min(...yAxis),
            Math.max(...yAxis)
        ]
    };
};
const getRectRotatedOffset = (element)=>{
    const { xRange: originXRange, yRange: originYRange } = getRectRotatedRange({
        left: element.left,
        top: element.top,
        width: element.width,
        height: element.height,
        rotate: 0
    });
    const { xRange: rotatedXRange, yRange: rotatedYRange } = getRectRotatedRange({
        left: element.left,
        top: element.top,
        width: element.width,
        height: element.height,
        rotate: element.rotate
    });
    return {
        offsetX: rotatedXRange[0] - originXRange[0],
        offsetY: rotatedYRange[0] - originYRange[0]
    };
};
const getElementRange = (element)=>{
    let minX, maxX, minY, maxY;
    if (element.type === 'line') {
        minX = element.left;
        maxX = element.left + Math.max(element.start[0], element.end[0]);
        minY = element.top;
        maxY = element.top + Math.max(element.start[1], element.end[1]);
    } else if ('rotate' in element && element.rotate) {
        const { left, top, width, height, rotate } = element;
        const { xRange, yRange } = getRectRotatedRange({
            left,
            top,
            width,
            height,
            rotate
        });
        minX = xRange[0];
        maxX = xRange[1];
        minY = yRange[0];
        maxY = yRange[1];
    } else {
        minX = element.left;
        maxX = element.left + element.width;
        minY = element.top;
        maxY = element.top + element.height;
    }
    return {
        minX,
        maxX,
        minY,
        maxY
    };
};
const getElementListRange = (elementList)=>{
    const leftValues = [];
    const topValues = [];
    const rightValues = [];
    const bottomValues = [];
    elementList.forEach((element)=>{
        const { minX, maxX, minY, maxY } = getElementRange(element);
        leftValues.push(minX);
        topValues.push(minY);
        rightValues.push(maxX);
        bottomValues.push(maxY);
    });
    const minX = Math.min(...leftValues);
    const maxX = Math.max(...rightValues);
    const minY = Math.min(...topValues);
    const maxY = Math.max(...bottomValues);
    return {
        minX,
        maxX,
        minY,
        maxY
    };
};
const getLineElementLength = (element)=>{
    const deltaX = element.end[0] - element.start[0];
    const deltaY = element.end[1] - element.start[1];
    const len = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    return len;
};
const uniqAlignLines = (lines)=>{
    const uniqLines = [];
    lines.forEach((line)=>{
        const index = uniqLines.findIndex((_line)=>_line.value === line.value);
        if (index === -1) uniqLines.push(line);
        else {
            const uniqLine = uniqLines[index];
            const rangeMin = Math.min(uniqLine.range[0], line.range[0]);
            const rangeMax = Math.max(uniqLine.range[1], line.range[1]);
            const range = [
                rangeMin,
                rangeMax
            ];
            const _line = {
                value: line.value,
                range
            };
            uniqLines[index] = _line;
        }
    });
    return uniqLines;
};
const createSlideIdMap = (slides)=>{
    const slideIdMap = {};
    for (const slide of slides){
        slideIdMap[slide.id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(10);
    }
    return slideIdMap;
};
const createElementIdMap = (elements)=>{
    const groupIdMap = {};
    const elIdMap = {};
    for (const element of elements){
        const groupId = element.groupId;
        if (groupId && !groupIdMap[groupId]) {
            groupIdMap[groupId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(10);
        }
        elIdMap[element.id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(10);
    }
    return {
        groupIdMap,
        elIdMap
    };
};
const getTableSubThemeColor = (themeColor)=>{
    const rgba = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(themeColor);
    return [
        rgba.setAlpha(0.3).toRgbString(),
        rgba.setAlpha(0.1).toRgbString()
    ];
};
const getLineElementPath = (element)=>{
    // Defensive: ensure start and end are arrays
    const startArr = Array.isArray(element.start) ? element.start : [
        0,
        0
    ];
    const endArr = Array.isArray(element.end) ? element.end : [
        100,
        100
    ];
    const start = startArr.join(',');
    const end = endArr.join(',');
    if (element.broken) {
        const mid = element.broken.join(',');
        return `M${start} L${mid} L${end}`;
    } else if (element.broken2) {
        const { minX, maxX, minY, maxY } = getElementRange(element);
        if (maxX - minX >= maxY - minY) return `M${start} L${element.broken2[0]},${startArr[1]} L${element.broken2[0]},${endArr[1]} ${end}`;
        return `M${start} L${startArr[0]},${element.broken2[1]} L${endArr[0]},${element.broken2[1]} ${end}`;
    } else if (element.curve) {
        const mid = element.curve.join(',');
        return `M${start} Q${mid} ${end}`;
    } else if (element.cubic) {
        const [c1, c2] = element.cubic;
        const p1 = c1.join(',');
        const p2 = c2.join(',');
        return `M${start} C${p1} ${p2} ${end}`;
    }
    return `M${start} L${end}`;
};
const isElementInViewport = (element, parent)=>{
    const elementRect = element.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    return elementRect.top >= parentRect.top && elementRect.bottom <= parentRect.bottom;
};
}),
"[project]/lib/audio/browser-tts-preview.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureVoicesLoaded",
    ()=>ensureVoicesLoaded,
    "isBrowserTTSAbortError",
    ()=>isBrowserTTSAbortError,
    "playBrowserTTSPreview",
    ()=>playBrowserTTSPreview,
    "resolveBrowserVoice",
    ()=>resolveBrowserVoice
]);
'use client';
const VOICES_LOAD_TIMEOUT_MS = 2000;
const PREVIEW_TIMEOUT_MS = 30000;
const CJK_LANG_THRESHOLD = 0.3;
function createAbortError() {
    const error = new Error('Browser TTS preview canceled');
    error.name = 'AbortError';
    return error;
}
function inferPreviewLang(text) {
    const cjkCount = (text.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g) || []).length;
    const ratio = text.length > 0 ? cjkCount / text.length : 0;
    return ratio > CJK_LANG_THRESHOLD ? 'zh-CN' : 'en-US';
}
function isBrowserTTSAbortError(error) {
    return error instanceof Error && error.name === 'AbortError';
}
async function ensureVoicesLoaded() {
    if ("TURBOPACK compile-time truthy", 1) {
        return [];
    }
    //TURBOPACK unreachable
    ;
    const initialVoices = undefined;
}
function resolveBrowserVoice(voices, voiceNameOrLang, text) {
    const target = voiceNameOrLang.trim();
    const matchedVoice = target && target !== 'default' ? voices.find((voice)=>voice.voiceURI === target || voice.name === target || voice.lang === target) || null : null;
    return {
        voice: matchedVoice,
        lang: matchedVoice?.lang || inferPreviewLang(text)
    };
}
function playBrowserTTSPreview(options) {
    const synth = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            promise: Promise.reject(new Error('Browser does not support Speech Synthesis API')),
            cancel: ()=>{}
        };
    }
    //TURBOPACK unreachable
    ;
    let settled;
    let started;
    let canceled;
    let timeoutId;
    let rejectPromise;
    const settleResolve = undefined;
    const settleReject = undefined;
    const promise = undefined;
    const cancel = undefined;
}
}),
"[project]/lib/audio/use-tts-preview.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTTSPreview",
    ()=>useTTSPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2f$browser$2d$tts$2d$preview$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audio/browser-tts-preview.ts [app-ssr] (ecmascript)");
'use client';
;
;
function useTTSPreview() {
    const [previewing, setPreviewing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const cancelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const requestIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioUrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** Cancel in-flight work and release resources (no state update). */ const cleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        requestIdRef.current += 1;
        cancelRef.current?.();
        cancelRef.current = null;
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }
        if (audioUrlRef.current) {
            URL.revokeObjectURL(audioUrlRef.current);
            audioUrlRef.current = null;
        }
    }, []);
    /** Cancel any active preview and reset the previewing flag. */ const stopPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        cleanup();
        setPreviewing(false);
    }, [
        cleanup
    ]);
    // Cleanup on unmount (skip state update to avoid React warnings).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>cleanup, [
        cleanup
    ]);
    /**
   * Start a TTS preview.
   * Abort errors are swallowed; all other errors are re-thrown for the caller.
   */ const startPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (options)=>{
        cleanup();
        const requestId = ++requestIdRef.current;
        const isStale = ()=>requestIdRef.current !== requestId;
        setPreviewing(true);
        try {
            if (options.providerId === 'browser-native-tts') {
                if ("TURBOPACK compile-time truthy", 1) {
                    throw new Error('Browser does not support Speech Synthesis API');
                }
                const voices = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2f$browser$2d$tts$2d$preview$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureVoicesLoaded"])();
                if (isStale()) return;
                if (voices.length === 0) {
                    throw new Error('No browser TTS voices available');
                }
                const controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2f$browser$2d$tts$2d$preview$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playBrowserTTSPreview"])({
                    text: options.text,
                    voice: options.voice,
                    rate: options.speed,
                    voices
                });
                cancelRef.current = controller.cancel;
                await controller.promise;
                if (!isStale()) {
                    cancelRef.current = null;
                    setPreviewing(false);
                }
                return;
            }
            // API-based TTS
            const body = {
                text: options.text,
                audioId: 'preview',
                ttsProviderId: options.providerId,
                ttsModelId: options.modelId,
                ttsVoice: options.voice,
                ttsSpeed: options.speed
            };
            if (options.apiKey?.trim()) body.ttsApiKey = options.apiKey;
            if (options.baseUrl?.trim()) body.ttsBaseUrl = options.baseUrl;
            const res = await fetch('/api/generate/tts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            if (isStale()) return;
            const data = await res.json().catch(()=>({
                    error: res.statusText
                }));
            if (isStale()) return;
            if (!res.ok || !data.base64) {
                throw new Error(data.error || 'TTS preview failed');
            }
            // Decode base64 → Blob → Object URL
            const binaryStr = atob(data.base64);
            const bytes = new Uint8Array(binaryStr.length);
            for(let i = 0; i < binaryStr.length; i++)bytes[i] = binaryStr.charCodeAt(i);
            const blob = new Blob([
                bytes
            ], {
                type: `audio/${data.format || 'mp3'}`
            });
            if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
            const url = URL.createObjectURL(blob);
            audioUrlRef.current = url;
            const audio = new Audio(url);
            audioRef.current = audio;
            audio.onended = ()=>{
                if (!isStale()) {
                    audioRef.current = null;
                    setPreviewing(false);
                }
            };
            audio.onerror = ()=>{
                if (!isStale()) {
                    audioRef.current = null;
                    setPreviewing(false);
                }
            };
            await audio.play();
        } catch (error) {
            if (!isStale()) {
                cancelRef.current = null;
                setPreviewing(false);
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2f$browser$2d$tts$2d$preview$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowserTTSAbortError"])(error)) {
                throw error;
            }
        }
    }, [
        cleanup
    ]);
    return {
        previewing,
        startPreview,
        stopPreview
    };
}
}),
"[project]/lib/export/html-parser/tags.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "childlessTags",
    ()=>childlessTags,
    "closingTagAncestorBreakers",
    ()=>closingTagAncestorBreakers,
    "closingTags",
    ()=>closingTags,
    "voidTags",
    ()=>voidTags
]);
const childlessTags = [
    'style',
    'script',
    'template'
];
const closingTags = [
    'html',
    'head',
    'body',
    'p',
    'dt',
    'dd',
    'li',
    'option',
    'thead',
    'th',
    'tbody',
    'tr',
    'td',
    'tfoot',
    'colgroup'
];
const closingTagAncestorBreakers = {
    li: [
        'ul',
        'ol',
        'menu'
    ],
    dt: [
        'dl'
    ],
    dd: [
        'dl'
    ],
    tbody: [
        'table'
    ],
    thead: [
        'table'
    ],
    tfoot: [
        'table'
    ],
    tr: [
        'table'
    ],
    td: [
        'table'
    ]
};
const voidTags = [
    '!doctype',
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
];
}),
"[project]/lib/export/html-parser/lexer.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lexer",
    ()=>lexer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$html$2d$parser$2f$tags$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/export/html-parser/tags.ts [app-ssr] (ecmascript)");
;
const jumpPosition = (state, end)=>{
    const len = end - state.position;
    movePositopn(state, len);
};
const movePositopn = (state, len)=>{
    state.position = state.position + len;
};
const findTextEnd = (str, index)=>{
    const isEnd = false;
    while(!isEnd){
        const textEnd = str.indexOf('<', index);
        if (textEnd === -1) {
            return textEnd;
        }
        const char = str.charAt(textEnd + 1);
        if (char === '/' || char === '!' || /[A-Za-z0-9]/.test(char)) {
            return textEnd;
        }
        index = textEnd + 1;
    }
    return -1;
};
const lexText = (state)=>{
    const { str } = state;
    let textEnd = findTextEnd(str, state.position);
    if (textEnd === state.position) return;
    if (textEnd === -1) {
        textEnd = str.length;
    }
    const content = str.slice(state.position, textEnd);
    jumpPosition(state, textEnd);
    state.tokens.push({
        type: 'text',
        content
    });
};
const lexComment = (state)=>{
    const { str } = state;
    movePositopn(state, 4);
    let contentEnd = str.indexOf('-->', state.position);
    let commentEnd = contentEnd + 3;
    if (contentEnd === -1) {
        contentEnd = commentEnd = str.length;
    }
    const content = str.slice(state.position, contentEnd);
    jumpPosition(state, commentEnd);
    state.tokens.push({
        type: 'comment',
        content
    });
};
const lexTagName = (state)=>{
    const { str } = state;
    const len = str.length;
    let start = state.position;
    while(start < len){
        const char = str.charAt(start);
        const isTagChar = !(/\s/.test(char) || char === '/' || char === '>');
        if (isTagChar) break;
        start++;
    }
    let end = start + 1;
    while(end < len){
        const char = str.charAt(end);
        const isTagChar = !(/\s/.test(char) || char === '/' || char === '>');
        if (!isTagChar) break;
        end++;
    }
    jumpPosition(state, end);
    const tagName = str.slice(start, end);
    state.tokens.push({
        type: 'tag',
        content: tagName
    });
    return tagName;
};
const lexTagAttributes = (state)=>{
    const { str, tokens } = state;
    let cursor = state.position;
    let quote = null;
    let wordBegin = cursor;
    const words = [];
    const len = str.length;
    while(cursor < len){
        const char = str.charAt(cursor);
        if (quote) {
            const isQuoteEnd = char === quote;
            if (isQuoteEnd) quote = null;
            cursor++;
            continue;
        }
        const isTagEnd = char === '/' || char === '>';
        if (isTagEnd) {
            if (cursor !== wordBegin) words.push(str.slice(wordBegin, cursor));
            break;
        }
        const isWordEnd = /\s/.test(char);
        if (isWordEnd) {
            if (cursor !== wordBegin) words.push(str.slice(wordBegin, cursor));
            wordBegin = cursor + 1;
            cursor++;
            continue;
        }
        const isQuoteStart = char === "'" || char === '"';
        if (isQuoteStart) {
            quote = char;
            cursor++;
            continue;
        }
        cursor++;
    }
    jumpPosition(state, cursor);
    const type = 'attribute';
    for(let i = 0; i < words.length; i++){
        const word = words[i];
        const isNotPair = word.indexOf('=') === -1;
        if (isNotPair) {
            const secondWord = words[i + 1];
            if (secondWord && secondWord.startsWith('=')) {
                if (secondWord.length > 1) {
                    const newWord = word + secondWord;
                    tokens.push({
                        type,
                        content: newWord
                    });
                    i += 1;
                    continue;
                }
                const thirdWord = words[i + 2];
                i += 1;
                if (thirdWord) {
                    const newWord = word + '=' + thirdWord;
                    tokens.push({
                        type,
                        content: newWord
                    });
                    i += 1;
                    continue;
                }
            }
        }
        if (word.endsWith('=')) {
            const secondWord = words[i + 1];
            if (secondWord && secondWord.indexOf('=') === -1) {
                const newWord = word + secondWord;
                tokens.push({
                    type,
                    content: newWord
                });
                i += 1;
                continue;
            }
            const newWord = word.slice(0, -1);
            tokens.push({
                type,
                content: newWord
            });
            continue;
        }
        tokens.push({
            type,
            content: word
        });
    }
};
const lexSkipTag = (tagName, state)=>{
    const { str, tokens } = state;
    const safeTagName = tagName.toLowerCase();
    const len = str.length;
    let index = state.position;
    while(index < len){
        const nextTag = str.indexOf('</', index);
        if (nextTag === -1) {
            lexText(state);
            break;
        }
        const tagState = {
            str,
            position: state.position,
            tokens: []
        };
        jumpPosition(tagState, nextTag);
        const name = lexTag(tagState);
        if (safeTagName !== name.toLowerCase()) {
            index = tagState.position;
            continue;
        }
        if (nextTag !== state.position) {
            const textStart = state.position;
            jumpPosition(state, nextTag);
            tokens.push({
                type: 'text',
                content: str.slice(textStart, nextTag)
            });
        }
        tokens.push(...tagState.tokens);
        jumpPosition(state, tagState.position);
        break;
    }
};
const lexTag = (state)=>{
    const { str } = state;
    const secondChar = str.charAt(state.position + 1);
    const tagStartClose = secondChar === '/';
    movePositopn(state, tagStartClose ? 2 : 1);
    state.tokens.push({
        type: 'tag-start',
        close: tagStartClose
    });
    const tagName = lexTagName(state);
    lexTagAttributes(state);
    const firstChar = str.charAt(state.position);
    const tagEndClose = firstChar === '/';
    movePositopn(state, tagEndClose ? 2 : 1);
    state.tokens.push({
        type: 'tag-end',
        close: tagEndClose
    });
    return tagName;
};
const lex = (state)=>{
    const str = state.str;
    const len = str.length;
    while(state.position < len){
        const start = state.position;
        lexText(state);
        if (state.position === start) {
            const isComment = str.startsWith('!--', start + 1);
            if (isComment) lexComment(state);
            else {
                const tagName = lexTag(state);
                const safeTag = tagName.toLowerCase();
                if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$html$2d$parser$2f$tags$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["childlessTags"].includes(safeTag)) lexSkipTag(tagName, state);
            }
        }
    }
};
const lexer = (str)=>{
    const state = {
        str,
        position: 0,
        tokens: []
    };
    lex(state);
    return state.tokens;
};
}),
"[project]/lib/export/html-parser/parser.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasTerminalParent",
    ()=>hasTerminalParent,
    "parse",
    ()=>parse,
    "parser",
    ()=>parser,
    "rewindStack",
    ()=>rewindStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$html$2d$parser$2f$tags$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/export/html-parser/tags.ts [app-ssr] (ecmascript)");
;
const parser = (tokens)=>{
    const root = {
        tagName: null,
        children: []
    };
    const state = {
        tokens,
        cursor: 0,
        stack: [
            root
        ]
    };
    parse(state);
    return root.children;
};
const hasTerminalParent = (tagName, stack)=>{
    const tagParents = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$html$2d$parser$2f$tags$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closingTagAncestorBreakers"][tagName];
    if (tagParents) {
        let currentIndex = stack.length - 1;
        while(currentIndex >= 0){
            const parentTagName = stack[currentIndex].tagName;
            if (parentTagName === tagName) break;
            if (parentTagName && tagParents.includes(parentTagName)) return true;
            currentIndex--;
        }
    }
    return false;
};
const rewindStack = (stack, newLength)=>{
    stack.splice(newLength);
};
const parse = (state)=>{
    const { stack, tokens } = state;
    let { cursor } = state;
    let nodes = stack[stack.length - 1].children;
    const len = tokens.length;
    while(cursor < len){
        const token = tokens[cursor];
        if (token.type !== 'tag-start') {
            nodes.push(token);
            cursor++;
            continue;
        }
        const tagToken = tokens[++cursor];
        cursor++;
        const tagName = tagToken.content.toLowerCase();
        if (token.close) {
            let index = stack.length;
            let shouldRewind = false;
            while(--index > -1){
                if (stack[index].tagName === tagName) {
                    shouldRewind = true;
                    break;
                }
            }
            while(cursor < len){
                if (tokens[cursor].type !== 'tag-end') break;
                cursor++;
            }
            if (shouldRewind) {
                rewindStack(stack, index);
                break;
            } else continue;
        }
        const isClosingTag = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$html$2d$parser$2f$tags$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closingTags"].includes(tagName);
        let shouldRewindToAutoClose = isClosingTag;
        if (shouldRewindToAutoClose) {
            shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
        }
        if (shouldRewindToAutoClose) {
            let currentIndex = stack.length - 1;
            while(currentIndex > 0){
                if (tagName === stack[currentIndex].tagName) {
                    rewindStack(stack, currentIndex);
                    const previousIndex = currentIndex - 1;
                    nodes = stack[previousIndex].children;
                    break;
                }
                currentIndex = currentIndex - 1;
            }
        }
        const attributes = [];
        let tagEndToken;
        while(cursor < len){
            const _token = tokens[cursor];
            if (_token.type === 'tag-end') {
                tagEndToken = _token;
                break;
            }
            attributes.push(_token.content);
            cursor++;
        }
        if (!tagEndToken) break;
        cursor++;
        const children = [];
        const elementNode = {
            type: 'element',
            tagName: tagToken.content,
            attributes,
            children
        };
        nodes.push(elementNode);
        const hasChildren = !(tagEndToken.close || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$html$2d$parser$2f$tags$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voidTags"].includes(tagName));
        if (hasChildren) {
            stack.push({
                tagName,
                children
            });
            const innerState = {
                tokens,
                cursor,
                stack
            };
            parse(innerState);
            cursor = innerState.cursor;
        }
    }
    state.cursor = cursor;
};
}),
"[project]/lib/export/html-parser/format.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "format",
    ()=>format,
    "splitHead",
    ()=>splitHead
]);
const splitHead = (str, sep)=>{
    const idx = str.indexOf(sep);
    if (idx === -1) return [
        str
    ];
    return [
        str.slice(0, idx),
        str.slice(idx + sep.length)
    ];
};
const unquote = (str)=>{
    const car = str.charAt(0);
    const end = str.length - 1;
    const isQuoteStart = car === '"' || car === "'";
    if (isQuoteStart && car === str.charAt(end)) {
        return str.slice(1, end);
    }
    return str;
};
const formatAttributes = (attributes)=>{
    return attributes.map((attribute)=>{
        const parts = splitHead(attribute.trim(), '=');
        const key = parts[0];
        const value = typeof parts[1] === 'string' ? unquote(parts[1]) : null;
        return {
            key,
            value
        };
    });
};
const format = (nodes)=>{
    return nodes.map((node)=>{
        if (node.type === 'element') {
            const children = format(node.children);
            const item = {
                type: 'element',
                tagName: node.tagName.toLowerCase(),
                attributes: formatAttributes(node.attributes),
                children
            };
            return item;
        }
        const item = {
            type: node.type,
            content: node.content
        };
        return item;
    });
};
}),
"[project]/lib/export/html-parser/stringify.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatAttributes",
    ()=>formatAttributes,
    "toHTML",
    ()=>toHTML
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$html$2d$parser$2f$tags$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/export/html-parser/tags.ts [app-ssr] (ecmascript)");
;
const formatAttributes = (attributes)=>{
    return attributes.reduce((attrs, attribute)=>{
        const { key, value } = attribute;
        if (value === null) return `${attrs} ${key}`;
        if (key === 'style' && !value) return '';
        const quoteEscape = value.indexOf("'") !== -1;
        const quote = quoteEscape ? '"' : "'";
        return `${attrs} ${key}=${quote}${value}${quote}`;
    }, '');
};
const toHTML = (tree)=>{
    const htmlStrings = tree.map((node)=>{
        if (node.type === 'text') return node.content;
        if (node.type === 'comment') return `<!--${node.content}-->`;
        const { tagName, attributes, children } = node;
        const isSelfClosing = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$html$2d$parser$2f$tags$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voidTags"].includes(tagName.toLowerCase());
        if (isSelfClosing) return `<${tagName}${formatAttributes(attributes)}>`;
        return `<${tagName}${formatAttributes(attributes)}>${toHTML(children)}</${tagName}>`;
    });
    return htmlStrings.join('');
};
}),
"[project]/lib/export/html-parser/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toAST",
    ()=>toAST
]);
// Reference: https://github.com/andrejewski/himalaya — rewritten in TypeScript with simplified functionality
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$html$2d$parser$2f$lexer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/export/html-parser/lexer.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$html$2d$parser$2f$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/export/html-parser/parser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$html$2d$parser$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/export/html-parser/format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$html$2d$parser$2f$stringify$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/export/html-parser/stringify.ts [app-ssr] (ecmascript)");
;
;
;
;
const toAST = (str)=>{
    const tokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$html$2d$parser$2f$lexer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lexer"])(str);
    const nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$html$2d$parser$2f$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parser"])(tokens);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$html$2d$parser$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(nodes);
};
;
}),
"[project]/lib/export/svg-path-parser.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSvgPathRange",
    ()=>getSvgPathRange,
    "parseSvgPath",
    ()=>parseSvgPath,
    "toPoints",
    ()=>toPoints
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$svg$2d$pathdata$40$8$2e$0$2e$0$2f$node_modules$2f$svg$2d$pathdata$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/svg-pathdata@8.0.0/node_modules/svg-pathdata/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$svg$2d$pathdata$40$8$2e$0$2e$0$2f$node_modules$2f$svg$2d$pathdata$2f$dist$2f$SVGPathData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/svg-pathdata@8.0.0/node_modules/svg-pathdata/dist/SVGPathData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$svg$2d$arc$2d$to$2d$cubic$2d$bezier$40$3$2e$2$2e$0$2f$node_modules$2f$svg$2d$arc$2d$to$2d$cubic$2d$bezier$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/svg-arc-to-cubic-bezier@3.2.0/node_modules/svg-arc-to-cubic-bezier/modules/index.js [app-ssr] (ecmascript)");
;
;
const typeMap = {
    1: 'Z',
    2: 'M',
    4: 'H',
    8: 'V',
    16: 'L',
    32: 'C',
    64: 'S',
    128: 'Q',
    256: 'T',
    512: 'A'
};
const parseSvgPath = (d)=>{
    const pathData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$svg$2d$pathdata$40$8$2e$0$2e$0$2f$node_modules$2f$svg$2d$pathdata$2f$dist$2f$SVGPathData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SVGPathData"](d);
    const ret = pathData.commands.map((item)=>{
        return {
            ...item,
            type: typeMap[item.type]
        };
    });
    return ret;
};
const toPoints = (d)=>{
    const pathData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$svg$2d$pathdata$40$8$2e$0$2e$0$2f$node_modules$2f$svg$2d$pathdata$2f$dist$2f$SVGPathData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SVGPathData"](d);
    const points = [];
    for (const item of pathData.commands){
        const type = typeMap[item.type];
        if (item.type === 2 || item.type === 16) {
            points.push({
                x: item.x,
                y: item.y,
                relative: item.relative,
                type
            });
        }
        if (item.type === 32) {
            points.push({
                x: item.x,
                y: item.y,
                curve: {
                    type: 'cubic',
                    x1: item.x1,
                    y1: item.y1,
                    x2: item.x2,
                    y2: item.y2
                },
                relative: item.relative,
                type
            });
        } else if (item.type === 128) {
            points.push({
                x: item.x,
                y: item.y,
                curve: {
                    type: 'quadratic',
                    x1: item.x1,
                    y1: item.y1
                },
                relative: item.relative,
                type
            });
        } else if (item.type === 512) {
            const lastPoint = points[points.length - 1];
            if (![
                'M',
                'L',
                'Q',
                'C'
            ].includes(lastPoint.type)) continue;
            const cubicBezierPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$svg$2d$arc$2d$to$2d$cubic$2d$bezier$40$3$2e$2$2e$0$2f$node_modules$2f$svg$2d$arc$2d$to$2d$cubic$2d$bezier$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                px: lastPoint.x,
                py: lastPoint.y,
                cx: item.x,
                cy: item.y,
                rx: item.rX,
                ry: item.rY,
                xAxisRotation: item.xRot,
                largeArcFlag: item.lArcFlag,
                sweepFlag: item.sweepFlag
            });
            for (const cbPoint of cubicBezierPoints){
                points.push({
                    x: cbPoint.x,
                    y: cbPoint.y,
                    curve: {
                        type: 'cubic',
                        x1: cbPoint.x1,
                        y1: cbPoint.y1,
                        x2: cbPoint.x2,
                        y2: cbPoint.y2
                    },
                    relative: false,
                    type: 'C'
                });
            }
        } else if (item.type === 1) {
            points.push({
                close: true,
                type
            });
        } else continue;
    }
    return points;
};
const getSvgPathRange = (path)=>{
    try {
        const pathData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$svg$2d$pathdata$40$8$2e$0$2e$0$2f$node_modules$2f$svg$2d$pathdata$2f$dist$2f$SVGPathData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SVGPathData"](path);
        const xList = [];
        const yList = [];
        for (const item of pathData.commands){
            const x = 'x' in item ? item.x : 0;
            const y = 'y' in item ? item.y : 0;
            xList.push(x);
            yList.push(y);
        }
        return {
            minX: Math.min(...xList),
            minY: Math.min(...yList),
            maxX: Math.max(...xList),
            maxY: Math.max(...yList)
        };
    } catch  {
        return {
            minX: 0,
            minY: 0,
            maxX: 0,
            maxY: 0
        };
    }
};
}),
"[project]/lib/export/svg2base64.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "svg2Base64",
    ()=>svg2Base64
]);
// Convert SVG to base64 image. Reference: https://github.com/scriptex/svg64
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const PREFIX = 'data:image/svg+xml;base64,';
const utf8Encode = (string)=>{
    string = string.replace(/\r\n/g, '\n');
    let utftext = '';
    for(let n = 0; n < string.length; n++){
        const c = string.charCodeAt(n);
        if (c < 128) {
            utftext += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
            utftext += String.fromCharCode(c >> 6 | 192);
            utftext += String.fromCharCode(c & 63 | 128);
        } else {
            utftext += String.fromCharCode(c >> 12 | 224);
            utftext += String.fromCharCode(c >> 6 & 63 | 128);
            utftext += String.fromCharCode(c & 63 | 128);
        }
    }
    return utftext;
};
const encode = (input)=>{
    let output = '';
    let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    let i = 0;
    input = utf8Encode(input);
    while(i < input.length){
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;
        if (isNaN(chr2)) enc3 = enc4 = 64;
        else if (isNaN(chr3)) enc4 = 64;
        output = output + characters.charAt(enc1) + characters.charAt(enc2) + characters.charAt(enc3) + characters.charAt(enc4);
    }
    return output;
};
const svg2Base64 = (element)=>{
    const XMLS = new XMLSerializer();
    const svg = XMLS.serializeToString(element);
    return PREFIX + encode(svg);
};
}),
"[project]/lib/export/latex-to-omml.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "latexToOmml",
    ()=>latexToOmml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$temml$40$0$2e$13$2e$1$2f$node_modules$2f$temml$2f$dist$2f$temml$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/temml@0.13.1/node_modules/temml/dist/temml.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$mathml2omml$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/mathml2omml/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-ssr] (ecmascript)");
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('LatexToOmml');
/**
 * Strip MathML elements unsupported by mathml2omml (e.g. `<mpadded>`),
 * replacing them with their inner content.
 */ function stripUnsupportedMathML(mathml) {
    const unsupported = [
        'mpadded'
    ];
    let result = mathml;
    for (const tag of unsupported){
        result = result.replace(new RegExp(`<${tag}[^>]*>`, 'g'), '');
        result = result.replace(new RegExp(`</${tag}>`, 'g'), '');
    }
    return result;
}
/**
 * Build <a:rPr> for math runs. PowerPoint requires Cambria Math font.
 * @param szHundredths - font size in hundredths of a point (e.g. 1200 = 12pt). Omit for no sz.
 */ function buildMathRPr(szHundredths) {
    const szAttr = szHundredths ? ` sz="${szHundredths}"` : '';
    return `<a:rPr lang="en-US" i="1"${szAttr}>` + '<a:latin typeface="Cambria Math" panose="02040503050406030204" charset="0"/>' + '<a:cs typeface="Cambria Math" panose="02040503050406030204" charset="0"/>' + '</a:rPr>';
}
/**
 * Post-process OMML for PPTX compatibility:
 * 1. Strip xmlns:w (wordprocessingml is DOCX-only, not valid in PPTX)
 * 2. Strip redundant xmlns:m (already declared at <p:sld> level)
 * 3. Inject <a:rPr> with Cambria Math font (and optional sz) into <m:r> and <m:ctrlPr>
 */ function postProcessOmml(omml, szHundredths) {
    let result = omml;
    const rpr = buildMathRPr(szHundredths);
    // Strip DOCX-only xmlns:w and redundant xmlns:m from <m:oMath>
    result = result.replace(/ xmlns:w="[^"]*"/g, '');
    result = result.replace(/ xmlns:m="[^"]*"/g, '');
    // Insert <a:rPr> before <m:t> inside <m:r> (only if not already present)
    result = result.replace(/<m:r>(\s*)<m:t/g, `<m:r>$1${rpr}$1<m:t`);
    // Fill empty <m:ctrlPr/> with <a:rPr>
    result = result.replace(/<m:ctrlPr\/>/g, `<m:ctrlPr>${rpr}</m:ctrlPr>`);
    // Fill empty <m:ctrlPr></m:ctrlPr> with <a:rPr>
    result = result.replace(/<m:ctrlPr><\/m:ctrlPr>/g, `<m:ctrlPr>${rpr}</m:ctrlPr>`);
    return result;
}
function latexToOmml(latex, fontSize) {
    try {
        const mathml = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$temml$40$0$2e$13$2e$1$2f$node_modules$2f$temml$2f$dist$2f$temml$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].renderToString(latex);
        const cleaned = stripUnsupportedMathML(mathml);
        const omml = String((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$mathml2omml$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mml2omml"])(cleaned));
        const szHundredths = fontSize ? Math.round(fontSize * 100) : undefined;
        return postProcessOmml(omml, szHundredths);
    } catch  {
        log.warn(`Failed to convert: "${latex}"`);
        return null;
    }
}
}),
"[project]/lib/export/use-export-pptx.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useExportPPTX",
    ()=>useExportPPTX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$pptxgenjs$2f$dist$2f$pptxgen$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/pptxgenjs/dist/pptxgen.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tinycolor2@1.6.0/node_modules/tinycolor2/esm/tinycolor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$file$2d$saver$40$2$2e$0$2e$5$2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/file-saver@2.0.5/node_modules/file-saver/dist/FileSaver.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/sonner@2.0.7_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/stage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/media-generation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/element.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$html$2d$parser$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/export/html-parser/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$svg$2d$path$2d$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/export/svg-path-parser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$svg2base64$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/export/svg2base64.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$latex$2d$to$2d$omml$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/export/latex-to-omml.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-ssr] (ecmascript)");
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
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('ExportPPTX');
const DEFAULT_FONT_SIZE = 16;
const DEFAULT_FONT_FAMILY = 'Microsoft YaHei';
// ── Color formatting ──
function formatColor(_color) {
    if (!_color) {
        return {
            alpha: 0,
            color: '#000000'
        };
    }
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_color);
    const alpha = c.getAlpha();
    const color = alpha === 0 ? '#ffffff' : c.setAlpha(1).toHexString();
    return {
        alpha,
        color
    };
}
// ── HTML → pptxgenjs TextProps ──
function formatHTML(html, ratioPx2Pt) {
    const ast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$html$2d$parser$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toAST"])(html);
    let bulletFlag = false;
    let indent = 0;
    const slices = [];
    const parse = (obj, baseStyleObj = {})=>{
        for (const item of obj){
            const isBlockTag = 'tagName' in item && [
                'div',
                'li',
                'p'
            ].includes(item.tagName);
            if (isBlockTag && slices.length) {
                const lastSlice = slices[slices.length - 1];
                if (!lastSlice.options) lastSlice.options = {};
                lastSlice.options.breakLine = true;
            }
            const styleObj = {
                ...baseStyleObj
            };
            const styleAttr = 'attributes' in item ? item.attributes.find((attr)=>attr.key === 'style') : null;
            if (styleAttr && styleAttr.value) {
                const styleArr = styleAttr.value.split(';');
                for (const styleItem of styleArr){
                    const match = styleItem.match(/([^:]+):\s*(.+)/);
                    if (match) {
                        const [key, value] = [
                            match[1].trim(),
                            match[2].trim()
                        ];
                        if (key && value) styleObj[key] = value;
                    }
                }
            }
            if ('tagName' in item) {
                if (item.tagName === 'em') styleObj['font-style'] = 'italic';
                if (item.tagName === 'strong') styleObj['font-weight'] = 'bold';
                if (item.tagName === 'sup') styleObj['vertical-align'] = 'super';
                if (item.tagName === 'sub') styleObj['vertical-align'] = 'sub';
                if (item.tagName === 'a') {
                    const attr = item.attributes.find((a)=>a.key === 'href');
                    styleObj['href'] = attr?.value || '';
                }
                if (item.tagName === 'ul') styleObj['list-type'] = 'ul';
                if (item.tagName === 'ol') styleObj['list-type'] = 'ol';
                if (item.tagName === 'li') bulletFlag = true;
                if (item.tagName === 'p') {
                    if ('attributes' in item) {
                        const dataIndentAttr = item.attributes.find((a)=>a.key === 'data-indent');
                        if (dataIndentAttr && dataIndentAttr.value) indent = +dataIndentAttr.value;
                    }
                }
            }
            if ('tagName' in item && item.tagName === 'br') {
                slices.push({
                    text: '',
                    options: {
                        breakLine: true
                    }
                });
            } else if ('content' in item) {
                const text = item.content.replace(/&nbsp;/g, ' ').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&').replace(/\n/g, '');
                const options = {};
                if (styleObj['font-size']) {
                    options.fontSize = parseInt(styleObj['font-size']) / ratioPx2Pt;
                }
                if (styleObj['color']) {
                    options.color = formatColor(styleObj['color']).color;
                }
                if (styleObj['background-color']) {
                    options.highlight = formatColor(styleObj['background-color']).color;
                }
                if (styleObj['text-decoration-line']) {
                    if (styleObj['text-decoration-line'].indexOf('underline') !== -1) {
                        options.underline = {
                            color: options.color || '#000000',
                            style: 'sng'
                        };
                    }
                    if (styleObj['text-decoration-line'].indexOf('line-through') !== -1) {
                        options.strike = 'sngStrike';
                    }
                }
                if (styleObj['text-decoration']) {
                    if (styleObj['text-decoration'].indexOf('underline') !== -1) {
                        options.underline = {
                            color: options.color || '#000000',
                            style: 'sng'
                        };
                    }
                    if (styleObj['text-decoration'].indexOf('line-through') !== -1) {
                        options.strike = 'sngStrike';
                    }
                }
                if (styleObj['vertical-align']) {
                    if (styleObj['vertical-align'] === 'super') options.superscript = true;
                    if (styleObj['vertical-align'] === 'sub') options.subscript = true;
                }
                if (styleObj['text-align']) options.align = styleObj['text-align'];
                if (styleObj['font-weight']) options.bold = styleObj['font-weight'] === 'bold';
                if (styleObj['font-style']) options.italic = styleObj['font-style'] === 'italic';
                if (styleObj['font-family']) options.fontFace = styleObj['font-family'];
                if (styleObj['href']) options.hyperlink = {
                    url: styleObj['href']
                };
                if (bulletFlag && styleObj['list-type'] === 'ol') {
                    options.bullet = {
                        type: 'number',
                        indent: (options.fontSize || DEFAULT_FONT_SIZE) * 1.25
                    };
                    options.paraSpaceBefore = 0.1;
                    bulletFlag = false;
                }
                if (bulletFlag && styleObj['list-type'] === 'ul') {
                    options.bullet = {
                        indent: (options.fontSize || DEFAULT_FONT_SIZE) * 1.25
                    };
                    options.paraSpaceBefore = 0.1;
                    bulletFlag = false;
                }
                if (indent) {
                    options.indentLevel = indent;
                    indent = 0;
                }
                slices.push({
                    text,
                    options
                });
            } else if ('children' in item) parse(item.children, styleObj);
        }
    };
    parse(ast);
    return slices;
}
function formatPoints(points, ratioPx2Inch, scale = {
    x: 1,
    y: 1
}) {
    return points.map((point)=>{
        if (point.close !== undefined) {
            return {
                close: true
            };
        } else if (point.type === 'M') {
            return {
                x: point.x / ratioPx2Inch * scale.x,
                y: point.y / ratioPx2Inch * scale.y,
                moveTo: true
            };
        } else if (point.curve) {
            if (point.curve.type === 'cubic') {
                return {
                    x: point.x / ratioPx2Inch * scale.x,
                    y: point.y / ratioPx2Inch * scale.y,
                    curve: {
                        type: 'cubic',
                        x1: point.curve.x1 / ratioPx2Inch * scale.x,
                        y1: point.curve.y1 / ratioPx2Inch * scale.y,
                        x2: point.curve.x2 / ratioPx2Inch * scale.x,
                        y2: point.curve.y2 / ratioPx2Inch * scale.y
                    }
                };
            } else if (point.curve.type === 'quadratic') {
                return {
                    x: point.x / ratioPx2Inch * scale.x,
                    y: point.y / ratioPx2Inch * scale.y,
                    curve: {
                        type: 'quadratic',
                        x1: point.curve.x1 / ratioPx2Inch * scale.x,
                        y1: point.curve.y1 / ratioPx2Inch * scale.y
                    }
                };
            }
        }
        return {
            x: point.x / ratioPx2Inch * scale.x,
            y: point.y / ratioPx2Inch * scale.y
        };
    });
}
// ── Shadow config ──
function getShadowOption(shadow, ratioPx2Pt) {
    const c = formatColor(shadow.color);
    const { h, v } = shadow;
    let offset = 4;
    let angle = 45;
    if (h === 0 && v === 0) {
        offset = 4;
        angle = 45;
    } else if (h === 0) {
        if (v > 0) {
            offset = v;
            angle = 90;
        } else {
            offset = -v;
            angle = 270;
        }
    } else if (v === 0) {
        if (h > 0) {
            offset = h;
            angle = 1;
        } else {
            offset = -h;
            angle = 180;
        }
    } else if (h > 0 && v > 0) {
        offset = Math.max(h, v);
        angle = 45;
    } else if (h > 0 && v < 0) {
        offset = Math.max(h, -v);
        angle = 315;
    } else if (h < 0 && v > 0) {
        offset = Math.max(-h, v);
        angle = 135;
    } else if (h < 0 && v < 0) {
        offset = Math.max(-h, -v);
        angle = 225;
    }
    return {
        type: 'outer',
        color: c.color.replace('#', ''),
        opacity: c.alpha,
        blur: shadow.blur / ratioPx2Pt,
        offset,
        angle
    };
}
// ── Outline config ──
const dashTypeMap = {
    solid: 'solid',
    dashed: 'dash',
    dotted: 'sysDot'
};
function getOutlineOption(outline, ratioPx2Pt) {
    const c = formatColor(outline?.color || '#000000');
    return {
        color: c.color,
        transparency: (1 - c.alpha) * 100,
        width: (outline.width || 1) / ratioPx2Pt,
        dashType: outline.style ? dashTypeMap[outline.style] : 'solid'
    };
}
// ── Link config ──
function getLinkOption(link, slides) {
    const { type, target } = link;
    if (type === 'web') return {
        url: target
    };
    if (type === 'slide') {
        const index = slides.findIndex((slide)=>slide.id === target);
        if (index !== -1) return {
            slide: index + 1
        };
    }
    return null;
}
// ── Image helpers ──
function isBase64Image(url) {
    return /^data:image\/[^;]+;base64,/.test(url);
}
function isSVGImage(url) {
    return /^data:image\/svg\+xml;base64,/.test(url) || /\.svg$/.test(url);
}
// ── Main export hook ──
// ── Build PPTX blob (reused by single-export and resource pack) ──
/**
 * Extract speaker notes text from a scene's actions.
 * Concatenates speech text and action labels into plain text.
 */ function buildSpeakerNotes(scene) {
    if (!scene.actions || scene.actions.length === 0) return '';
    const parts = [];
    for (const action of scene.actions){
        if (action.type === 'speech') {
            parts.push(action.text);
        }
    }
    return parts.join('\n');
}
async function buildPptxBlob(slides, slideScenes, viewportRatio, viewportSize, ratioPx2Inch, ratioPx2Pt) {
    const pptx = new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$pptxgenjs$2f$dist$2f$pptxgen$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
    // Set layout based on aspect ratio
    if (viewportRatio === 0.625) pptx.layout = 'LAYOUT_16x10';
    else if (viewportRatio === 0.75) pptx.layout = 'LAYOUT_4x3';
    else pptx.layout = 'LAYOUT_16x9';
    for(let slideIdx = 0; slideIdx < slides.length; slideIdx++){
        const slide = slides[slideIdx];
        const pptxSlide = pptx.addSlide();
        // ── Speaker Notes ──
        const scene = slideScenes[slideIdx];
        if (scene) {
            const notes = buildSpeakerNotes(scene);
            if (notes) pptxSlide.addNotes(notes);
        }
        // ── Background ──
        if (slide.background) {
            const bg = slide.background;
            if (bg.type === 'image' && bg.image) {
                if (isSVGImage(bg.image.src)) {
                    pptxSlide.addImage({
                        data: bg.image.src,
                        x: 0,
                        y: 0,
                        w: viewportSize / ratioPx2Inch,
                        h: viewportSize * viewportRatio / ratioPx2Inch
                    });
                } else if (isBase64Image(bg.image.src)) {
                    pptxSlide.background = {
                        data: bg.image.src
                    };
                } else {
                    pptxSlide.background = {
                        path: bg.image.src
                    };
                }
            } else if (bg.type === 'solid' && bg.color) {
                const c = formatColor(bg.color);
                pptxSlide.background = {
                    color: c.color,
                    transparency: (1 - c.alpha) * 100
                };
            } else if (bg.type === 'gradient' && bg.gradient) {
                const colors = bg.gradient.colors;
                const color1 = colors[0].color;
                const color2 = colors[colors.length - 1].color;
                const mixed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].mix(color1, color2).toHexString();
                const c = formatColor(mixed);
                pptxSlide.background = {
                    color: c.color,
                    transparency: (1 - c.alpha) * 100
                };
            }
        }
        if (!slide.elements) continue;
        // ── Elements ──
        for (const el of slide.elements){
            // ── TEXT ──
            if (el.type === 'text') {
                const textProps = formatHTML(el.content, ratioPx2Pt);
                const options = {
                    x: el.left / ratioPx2Inch,
                    y: el.top / ratioPx2Inch,
                    w: el.width / ratioPx2Inch,
                    h: el.height / ratioPx2Inch,
                    fontSize: DEFAULT_FONT_SIZE / ratioPx2Pt,
                    fontFace: el.defaultFontName || DEFAULT_FONT_FAMILY,
                    color: '#000000',
                    valign: 'top',
                    margin: 10 / ratioPx2Pt,
                    paraSpaceBefore: 5 / ratioPx2Pt,
                    lineSpacingMultiple: 1.5 / 1.25,
                    autoFit: true
                };
                if (el.rotate) options.rotate = el.rotate;
                if (el.wordSpace) options.charSpacing = el.wordSpace / ratioPx2Pt;
                if (el.lineHeight) options.lineSpacingMultiple = el.lineHeight / 1.25;
                if (el.fill) {
                    const c = formatColor(el.fill);
                    const opacity = el.opacity === undefined ? 1 : el.opacity;
                    options.fill = {
                        color: c.color,
                        transparency: (1 - c.alpha * opacity) * 100
                    };
                }
                if (el.defaultColor) options.color = formatColor(el.defaultColor).color;
                if (el.defaultFontName) options.fontFace = el.defaultFontName;
                if (el.shadow) options.shadow = getShadowOption(el.shadow, ratioPx2Pt);
                if (el.outline?.width) options.line = getOutlineOption(el.outline, ratioPx2Pt);
                if (el.opacity !== undefined) options.transparency = (1 - el.opacity) * 100;
                if (el.paragraphSpace !== undefined) options.paraSpaceBefore = el.paragraphSpace / ratioPx2Pt;
                if (el.vertical) options.vert = 'eaVert';
                pptxSlide.addText(textProps, options);
            } else if (el.type === 'image') {
                // Resolve placeholder src → actual image data
                let resolvedSrc = el.src;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMediaPlaceholder"])(el.src)) {
                    const task = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState().tasks[el.src];
                    if (task?.status === 'done' && task.objectUrl) {
                        resolvedSrc = task.objectUrl;
                    } else {
                        continue; // Media not ready, skip
                    }
                }
                // Fetch and convert to base64 for embedding in PPTX
                // (blob: URLs and remote URLs won't work in offline PPTX)
                if (!isBase64Image(resolvedSrc)) {
                    try {
                        const resp = await fetch(resolvedSrc);
                        const blob = await resp.blob();
                        resolvedSrc = await new Promise((resolve, reject)=>{
                            const reader = new FileReader();
                            reader.onloadend = ()=>resolve(reader.result);
                            reader.onerror = reject;
                            reader.readAsDataURL(blob);
                        });
                    } catch  {
                        log.warn('Failed to convert image to base64, skipping element');
                        continue;
                    }
                }
                const options = {
                    x: el.left / ratioPx2Inch,
                    y: el.top / ratioPx2Inch,
                    w: el.width / ratioPx2Inch,
                    h: el.height / ratioPx2Inch
                };
                if (isBase64Image(resolvedSrc)) options.data = resolvedSrc;
                else options.path = resolvedSrc;
                if (el.flipH) options.flipH = el.flipH;
                if (el.flipV) options.flipV = el.flipV;
                if (el.rotate) options.rotate = el.rotate;
                if (el.link) {
                    const linkOption = getLinkOption(el.link, slides);
                    if (linkOption) options.hyperlink = linkOption;
                }
                if (el.filters?.opacity) options.transparency = 100 - parseInt(el.filters.opacity);
                if (el.clip) {
                    if (el.clip.shape === 'ellipse') options.rounding = true;
                    const [start, end] = el.clip.range;
                    const [startX, startY] = start;
                    const [endX, endY] = end;
                    const originW = el.width / ((endX - startX) / ratioPx2Inch);
                    const originH = el.height / ((endY - startY) / ratioPx2Inch);
                    options.w = originW / ratioPx2Inch;
                    options.h = originH / ratioPx2Inch;
                    options.sizing = {
                        type: 'crop',
                        x: startX / ratioPx2Inch * originW / ratioPx2Inch,
                        y: startY / ratioPx2Inch * originH / ratioPx2Inch,
                        w: (endX - startX) / ratioPx2Inch * originW / ratioPx2Inch,
                        h: (endY - startY) / ratioPx2Inch * originH / ratioPx2Inch
                    };
                }
                pptxSlide.addImage(options);
            } else if (el.type === 'shape') {
                if (el.special) {
                    // Special shapes: render as SVG image
                    // Create a temporary SVG element from the path
                    const svgNS = 'http://www.w3.org/2000/svg';
                    const svg = document.createElementNS(svgNS, 'svg');
                    svg.setAttribute('xmlns', svgNS);
                    svg.setAttribute('viewBox', `0 0 ${el.viewBox[0]} ${el.viewBox[1]}`);
                    svg.setAttribute('width', String(el.width));
                    svg.setAttribute('height', String(el.height));
                    const path = document.createElementNS(svgNS, 'path');
                    path.setAttribute('d', el.path);
                    path.setAttribute('fill', el.fill || 'none');
                    if (el.outline?.color) {
                        path.setAttribute('stroke', el.outline.color);
                        path.setAttribute('stroke-width', String(el.outline.width || 1));
                    }
                    svg.appendChild(path);
                    const base64SVG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$svg2base64$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svg2Base64"])(svg);
                    const imgOptions = {
                        data: base64SVG,
                        x: el.left / ratioPx2Inch,
                        y: el.top / ratioPx2Inch,
                        w: el.width / ratioPx2Inch,
                        h: el.height / ratioPx2Inch
                    };
                    if (el.rotate) imgOptions.rotate = el.rotate;
                    if (el.flipH) imgOptions.flipH = el.flipH;
                    if (el.flipV) imgOptions.flipV = el.flipV;
                    if (el.link) {
                        const linkOption = getLinkOption(el.link, slides);
                        if (linkOption) imgOptions.hyperlink = linkOption;
                    }
                    pptxSlide.addImage(imgOptions);
                } else {
                    const scale = {
                        x: el.width / el.viewBox[0],
                        y: el.height / el.viewBox[1]
                    };
                    const points = formatPoints((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$svg$2d$path$2d$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPoints"])(el.path), ratioPx2Inch, scale);
                    let fillColor = formatColor(el.fill);
                    if (el.gradient) {
                        const colors = el.gradient.colors;
                        const color1 = colors[0].color;
                        const color2 = colors[colors.length - 1].color;
                        const mixed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].mix(color1, color2).toHexString();
                        fillColor = formatColor(mixed);
                    }
                    if (el.pattern) fillColor = formatColor('#00000000');
                    const opacity = el.opacity === undefined ? 1 : el.opacity;
                    const shapeOptions = {
                        x: el.left / ratioPx2Inch,
                        y: el.top / ratioPx2Inch,
                        w: el.width / ratioPx2Inch,
                        h: el.height / ratioPx2Inch,
                        fill: {
                            color: fillColor.color,
                            transparency: (1 - fillColor.alpha * opacity) * 100
                        },
                        points
                    };
                    if (el.flipH) shapeOptions.flipH = el.flipH;
                    if (el.flipV) shapeOptions.flipV = el.flipV;
                    if (el.shadow) shapeOptions.shadow = getShadowOption(el.shadow, ratioPx2Pt);
                    if (el.outline?.width) shapeOptions.line = getOutlineOption(el.outline, ratioPx2Pt);
                    if (el.rotate) shapeOptions.rotate = el.rotate;
                    if (el.link) {
                        const linkOption = getLinkOption(el.link, slides);
                        if (linkOption) shapeOptions.hyperlink = linkOption;
                    }
                    pptxSlide.addShape('custGeom', shapeOptions);
                }
                // Shape text overlay
                if (el.text) {
                    const textProps = formatHTML(el.text.content, ratioPx2Pt);
                    const textOptions = {
                        x: el.left / ratioPx2Inch,
                        y: el.top / ratioPx2Inch,
                        w: el.width / ratioPx2Inch,
                        h: el.height / ratioPx2Inch,
                        fontSize: DEFAULT_FONT_SIZE / ratioPx2Pt,
                        fontFace: DEFAULT_FONT_FAMILY,
                        color: '#000000',
                        paraSpaceBefore: 5 / ratioPx2Pt,
                        valign: el.text.align
                    };
                    if (el.rotate) textOptions.rotate = el.rotate;
                    if (el.text.defaultColor) textOptions.color = formatColor(el.text.defaultColor).color;
                    if (el.text.defaultFontName) textOptions.fontFace = el.text.defaultFontName;
                    pptxSlide.addText(textProps, textOptions);
                }
                // Pattern overlay
                if (el.pattern) {
                    const patternOptions = {
                        x: el.left / ratioPx2Inch,
                        y: el.top / ratioPx2Inch,
                        w: el.width / ratioPx2Inch,
                        h: el.height / ratioPx2Inch
                    };
                    if (isBase64Image(el.pattern)) patternOptions.data = el.pattern;
                    else patternOptions.path = el.pattern;
                    if (el.flipH) patternOptions.flipH = el.flipH;
                    if (el.flipV) patternOptions.flipV = el.flipV;
                    if (el.rotate) patternOptions.rotate = el.rotate;
                    if (el.link) {
                        const linkOption = getLinkOption(el.link, slides);
                        if (linkOption) patternOptions.hyperlink = linkOption;
                    }
                    pptxSlide.addImage(patternOptions);
                }
            } else if (el.type === 'line') {
                const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLineElementPath"])(el);
                const points = formatPoints((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$svg$2d$path$2d$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPoints"])(path), ratioPx2Inch);
                const { minX, maxX, minY, maxY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementRange"])(el);
                const c = formatColor(el.color);
                const lineOptions = {
                    x: el.left / ratioPx2Inch,
                    y: el.top / ratioPx2Inch,
                    w: (maxX - minX) / ratioPx2Inch,
                    h: (maxY - minY) / ratioPx2Inch,
                    line: {
                        color: c.color,
                        transparency: (1 - c.alpha) * 100,
                        width: el.width / ratioPx2Pt,
                        dashType: dashTypeMap[el.style],
                        beginArrowType: el.points[0] ? 'arrow' : 'none',
                        endArrowType: el.points[1] ? 'arrow' : 'none'
                    },
                    points
                };
                if (el.shadow) lineOptions.shadow = getShadowOption(el.shadow, ratioPx2Pt);
                pptxSlide.addShape('custGeom', lineOptions);
            } else if (el.type === 'chart') {
                const chartData = [];
                for(let i = 0; i < el.data.series.length; i++){
                    const item = el.data.series[i];
                    chartData.push({
                        name: `Series ${i + 1}`,
                        labels: el.data.labels,
                        values: item
                    });
                }
                let chartColors = [];
                if (el.themeColors.length === 10) {
                    chartColors = el.themeColors.map((c)=>formatColor(c).color);
                } else if (el.themeColors.length === 1) {
                    chartColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(el.themeColors[0]).analogous(10).map((c)=>formatColor(c.toHexString()).color);
                } else {
                    const len = el.themeColors.length;
                    const supplement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(el.themeColors[len - 1]).analogous(10 + 1 - len).map((c)=>c.toHexString());
                    chartColors = [
                        ...el.themeColors.slice(0, len - 1),
                        ...supplement
                    ].map((c)=>formatColor(c).color);
                }
                const chartOptions = {
                    x: el.left / ratioPx2Inch,
                    y: el.top / ratioPx2Inch,
                    w: el.width / ratioPx2Inch,
                    h: el.height / ratioPx2Inch,
                    chartColors: el.chartType === 'pie' || el.chartType === 'ring' ? chartColors : chartColors.slice(0, el.data.series.length)
                };
                const textColor = formatColor(el.textColor || '#000000').color;
                chartOptions.catAxisLabelColor = textColor;
                chartOptions.valAxisLabelColor = textColor;
                const fontSize = 14 / ratioPx2Pt;
                chartOptions.catAxisLabelFontSize = fontSize;
                chartOptions.valAxisLabelFontSize = fontSize;
                if (el.fill || el.outline) {
                    const plotArea = {};
                    if (el.fill) plotArea.fill = {
                        color: formatColor(el.fill).color
                    };
                    if (el.outline) {
                        plotArea.border = {
                            pt: el.outline.width / ratioPx2Pt,
                            color: formatColor(el.outline.color).color
                        };
                    }
                    chartOptions.plotArea = plotArea;
                }
                if (el.data.series.length > 1 && el.chartType !== 'scatter' || el.chartType === 'pie' || el.chartType === 'ring') {
                    chartOptions.showLegend = true;
                    chartOptions.legendPos = 'b';
                    chartOptions.legendColor = textColor;
                    chartOptions.legendFontSize = fontSize;
                }
                let type = pptx.ChartType.bar;
                if (el.chartType === 'bar') {
                    type = pptx.ChartType.bar;
                    chartOptions.barDir = 'col';
                    if (el.options?.stack) chartOptions.barGrouping = 'stacked';
                } else if (el.chartType === 'column') {
                    type = pptx.ChartType.bar;
                    chartOptions.barDir = 'bar';
                    if (el.options?.stack) chartOptions.barGrouping = 'stacked';
                } else if (el.chartType === 'line') {
                    type = pptx.ChartType.line;
                    if (el.options?.lineSmooth) chartOptions.lineSmooth = true;
                } else if (el.chartType === 'area') {
                    type = pptx.ChartType.area;
                } else if (el.chartType === 'radar') {
                    type = pptx.ChartType.radar;
                } else if (el.chartType === 'scatter') {
                    type = pptx.ChartType.scatter;
                    chartOptions.lineSize = 0;
                } else if (el.chartType === 'pie') {
                    type = pptx.ChartType.pie;
                } else if (el.chartType === 'ring') {
                    type = pptx.ChartType.doughnut;
                    chartOptions.holeSize = 60;
                }
                pptxSlide.addChart(type, chartData, chartOptions);
            } else if (el.type === 'table') {
                const hiddenCells = [];
                for(let i = 0; i < el.data.length; i++){
                    const rowData = el.data[i];
                    for(let j = 0; j < rowData.length; j++){
                        const cell = rowData[j];
                        if (cell.colspan > 1 || cell.rowspan > 1) {
                            for(let row = i; row < i + cell.rowspan; row++){
                                for(let col = row === i ? j + 1 : j; col < j + cell.colspan; col++){
                                    hiddenCells.push(`${row}_${col}`);
                                }
                            }
                        }
                    }
                }
                const tableData = [];
                const theme = el.theme;
                let themeColor = null;
                let subThemeColors = [];
                if (theme) {
                    themeColor = formatColor(theme.color);
                    subThemeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTableSubThemeColor"])(theme.color).map((item)=>formatColor(item));
                }
                for(let i = 0; i < el.data.length; i++){
                    const row = el.data[i];
                    const _row = [];
                    for(let j = 0; j < row.length; j++){
                        const cell = row[j];
                        const cellOptions = {
                            colspan: cell.colspan,
                            rowspan: cell.rowspan,
                            bold: cell.style?.bold || false,
                            italic: cell.style?.em || false,
                            underline: {
                                style: cell.style?.underline ? 'sng' : 'none'
                            },
                            align: cell.style?.align || 'left',
                            valign: 'middle',
                            fontFace: cell.style?.fontname || DEFAULT_FONT_FAMILY,
                            fontSize: (cell.style?.fontsize ? parseInt(cell.style.fontsize) : 14) / ratioPx2Pt
                        };
                        if (theme && themeColor) {
                            let c;
                            if (i % 2 === 0) c = subThemeColors[1];
                            else c = subThemeColors[0];
                            if (theme.rowHeader && i === 0) c = themeColor;
                            else if (theme.rowFooter && i === el.data.length - 1) c = themeColor;
                            else if (theme.colHeader && j === 0) c = themeColor;
                            else if (theme.colFooter && j === row.length - 1) c = themeColor;
                            cellOptions.fill = {
                                color: c.color,
                                transparency: (1 - c.alpha) * 100
                            };
                        }
                        if (cell.style?.backcolor) {
                            const c = formatColor(cell.style.backcolor);
                            cellOptions.fill = {
                                color: c.color,
                                transparency: (1 - c.alpha) * 100
                            };
                        }
                        if (cell.style?.color) cellOptions.color = formatColor(cell.style.color).color;
                        if (!hiddenCells.includes(`${i}_${j}`)) {
                            _row.push({
                                text: cell.text,
                                options: cellOptions
                            });
                        }
                    }
                    if (_row.length) tableData.push(_row);
                }
                const tableOptions = {
                    x: el.left / ratioPx2Inch,
                    y: el.top / ratioPx2Inch,
                    w: el.width / ratioPx2Inch,
                    h: el.height / ratioPx2Inch,
                    colW: el.colWidths.map((item)=>el.width * item / ratioPx2Inch)
                };
                if (el.theme) tableOptions.fill = {
                    color: '#ffffff'
                };
                if (el.outline.width && el.outline.color) {
                    tableOptions.border = {
                        type: el.outline.style === 'solid' ? 'solid' : 'dash',
                        pt: el.outline.width / ratioPx2Pt,
                        color: formatColor(el.outline.color).color
                    };
                }
                pptxSlide.addTable(tableData, tableOptions);
            } else if (el.type === 'latex') {
                // Try native OMML formula first (editable in PowerPoint)
                // Estimate line count from \\ line breaks to compute a fitting font size.
                // Formula rendered height ≈ lines * 1.5 * fontSize, so fontSize ≈ boxHeight / (lines * 1.5)
                const lineBreaks = (el.latex?.match(/\\\\/g) || []).length;
                const lines = lineBreaks + 1;
                const boxHeightPt = el.height / ratioPx2Pt;
                const fontSize = Math.round(boxHeightPt / (lines * 3));
                const omml = el.latex ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$latex$2d$to$2d$omml$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["latexToOmml"])(el.latex, fontSize) : null;
                if (omml) {
                    pptxSlide.addFormula({
                        omml,
                        x: el.left / ratioPx2Inch,
                        y: el.top / ratioPx2Inch,
                        w: el.width / ratioPx2Inch,
                        h: el.height / ratioPx2Inch,
                        fontSize,
                        align: el.align
                    });
                } else if (el.path) {
                    // Fallback: render as SVG image (non-editable)
                    const range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$svg$2d$path$2d$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSvgPathRange"])(el.path);
                    const sw = el.strokeWidth || 0;
                    const vbX = range.minX - sw;
                    const vbY = range.minY - sw;
                    const vbW = range.maxX - range.minX + sw * 2;
                    const vbH = range.maxY - range.minY + sw * 2;
                    const svgNS = 'http://www.w3.org/2000/svg';
                    const svg = document.createElementNS(svgNS, 'svg');
                    svg.setAttribute('xmlns', svgNS);
                    svg.setAttribute('width', String(el.width));
                    svg.setAttribute('height', String(el.height));
                    svg.setAttribute('viewBox', `${vbX} ${vbY} ${vbW} ${vbH}`);
                    svg.setAttribute('stroke', el.color || '#000000');
                    svg.setAttribute('stroke-width', String(sw));
                    svg.setAttribute('fill', 'none');
                    svg.setAttribute('stroke-linecap', 'round');
                    svg.setAttribute('stroke-linejoin', 'round');
                    const path = document.createElementNS(svgNS, 'path');
                    path.setAttribute('d', el.path);
                    svg.appendChild(path);
                    const base64SVG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$svg2base64$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svg2Base64"])(svg);
                    if (!base64SVG) continue;
                    const latexOptions = {
                        data: base64SVG,
                        x: el.left / ratioPx2Inch,
                        y: el.top / ratioPx2Inch,
                        w: el.width / ratioPx2Inch,
                        h: el.height / ratioPx2Inch
                    };
                    if (el.link) {
                        const linkOption = getLinkOption(el.link, slides);
                        if (linkOption) latexOptions.hyperlink = linkOption;
                    }
                    pptxSlide.addImage(latexOptions);
                }
            } else if (el.type === 'video' || el.type === 'audio') {
                // Resolve placeholder src → blob URL from media generation store
                let resolvedSrc = el.src;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMediaPlaceholder"])(el.src)) {
                    const task = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState().tasks[el.src];
                    if (task?.status === 'done' && task.objectUrl) {
                        resolvedSrc = task.objectUrl;
                    } else {
                        continue; // Media not ready, skip
                    }
                }
                // Fetch blob and convert to base64 for embedding in PPTX
                // (blob: URLs and remote URLs won't work in offline PPTX)
                try {
                    const resp = await fetch(resolvedSrc);
                    const blob = await resp.blob();
                    const base64 = await new Promise((resolve, reject)=>{
                        const reader = new FileReader();
                        reader.onloadend = ()=>resolve(reader.result);
                        reader.onerror = reject;
                        reader.readAsDataURL(blob);
                    });
                    const mediaOptions = {
                        x: el.left / ratioPx2Inch,
                        y: el.top / ratioPx2Inch,
                        w: el.width / ratioPx2Inch,
                        h: el.height / ratioPx2Inch,
                        data: base64,
                        type: el.type
                    };
                    // Determine file extension
                    const extMatch = resolvedSrc.match(/\.([a-zA-Z0-9]+)(?:[?#]|$)/);
                    if (extMatch && extMatch[1]) mediaOptions.extn = extMatch[1];
                    else if (el.ext) mediaOptions.extn = el.ext;
                    else mediaOptions.extn = el.type === 'video' ? 'mp4' : 'mp3';
                    // Generate cover image for video
                    if (el.type === 'video') {
                        let coverBase64;
                        // 1. Try poster from element or media generation store
                        let posterUrl = 'poster' in el && el.poster ? el.poster : undefined;
                        if (!posterUrl && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMediaPlaceholder"])(el.src)) {
                            const task = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState().tasks[el.src];
                            if (task?.poster) posterUrl = task.poster;
                        }
                        if (posterUrl) {
                            try {
                                const posterResp = await fetch(posterUrl);
                                const posterBlob = await posterResp.blob();
                                coverBase64 = await new Promise((resolve, reject)=>{
                                    const reader = new FileReader();
                                    reader.onloadend = ()=>resolve(reader.result);
                                    reader.onerror = reject;
                                    reader.readAsDataURL(posterBlob);
                                });
                            } catch  {
                            // Poster fetch failed, fall through to video frame capture
                            }
                        }
                        // 2. Fallback: capture first frame from video via canvas
                        if (!coverBase64) {
                            try {
                                coverBase64 = await new Promise((resolve, reject)=>{
                                    const video = document.createElement('video');
                                    video.crossOrigin = 'anonymous';
                                    video.muted = true;
                                    video.preload = 'auto';
                                    video.onloadeddata = ()=>{
                                        video.currentTime = 0;
                                    };
                                    video.onseeked = ()=>{
                                        try {
                                            const canvas = document.createElement('canvas');
                                            canvas.width = video.videoWidth || el.width;
                                            canvas.height = video.videoHeight || el.height;
                                            const ctx = canvas.getContext('2d');
                                            if (ctx) {
                                                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                                                resolve(canvas.toDataURL('image/png'));
                                            } else {
                                                reject(new Error('No canvas context'));
                                            }
                                            video.src = ''; // Release
                                        } catch (e) {
                                            reject(e);
                                        }
                                    };
                                    video.onerror = ()=>reject(new Error('Video load failed'));
                                    // Timeout to avoid hanging
                                    setTimeout(()=>reject(new Error('Video frame capture timeout')), 10000);
                                    video.src = resolvedSrc;
                                });
                            } catch  {
                            // Frame capture also failed, video will use default play button
                            }
                        }
                        if (coverBase64) mediaOptions.cover = coverBase64;
                    }
                    pptxSlide.addMedia(mediaOptions);
                } catch (err) {
                    log.warn(`Failed to embed ${el.type} element:`, err);
                }
            }
        }
    }
    return await pptx.write({
        outputType: 'blob'
    });
}
function useExportPPTX() {
    const [exporting, setExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const exportingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const scenes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStageStore"])((s)=>s.scenes);
    const stage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStageStore"])((s)=>s.stage);
    const viewportSize = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.viewportSize();
    const viewportRatio = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.viewportRatio();
    const ratioPx2Inch = 96 * (viewportSize / 960);
    const ratioPx2Pt = 96 / 72 * (viewportSize / 960);
    const slideScenes = scenes.filter((s)=>s.content.type === 'slide');
    const slides = slideScenes.map((s)=>s.content.canvas);
    // Shared guard + state wrapper for export actions
    const withExportGuard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((action)=>{
        if (exportingRef.current || slides.length === 0) return;
        exportingRef.current = true;
        setExporting(true);
        setTimeout(async ()=>{
            try {
                await action();
            } catch (err) {
                log.error('Export failed:', err);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(t('export.exportFailed'));
            } finally{
                exportingRef.current = false;
                setExporting(false);
            }
        }, 100);
    }, [
        slides.length,
        t
    ]);
    // ── Export PPTX only ──
    const exportPPTX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        withExportGuard(async ()=>{
            const fileName = stage?.name || 'slides';
            const blob = await buildPptxBlob(slides, slideScenes, viewportRatio, viewportSize, ratioPx2Inch, ratioPx2Pt);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$file$2d$saver$40$2$2e$0$2e$5$2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAs"])(blob, `${fileName}.pptx`);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(t('export.exportSuccess'));
        });
    }, [
        withExportGuard,
        slides,
        slideScenes,
        stage,
        viewportSize,
        viewportRatio,
        ratioPx2Inch,
        ratioPx2Pt,
        t
    ]);
    // ── Export Resource Pack (PPTX + interactive HTML pages as ZIP) ──
    const exportResourcePack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        withExportGuard(async ()=>{
            const JSZip = (await __turbopack_context__.A("[project]/node_modules/.pnpm/jszip@3.10.1/node_modules/jszip/lib/index.js [app-ssr] (ecmascript, async loader)")).default;
            const zip = new JSZip();
            const fileName = stage?.name || 'slides';
            // 1. Generate PPTX
            const pptxBlob = await buildPptxBlob(slides, slideScenes, viewportRatio, viewportSize, ratioPx2Inch, ratioPx2Pt);
            zip.file(`${fileName}.pptx`, pptxBlob);
            // 2. Add interactive HTML pages
            let interactiveIndex = 0;
            for (const scene of scenes){
                if (scene.content.type === 'interactive' && scene.content.html) {
                    interactiveIndex++;
                    const safeName = scene.title.replace(/[\\/:*?"<>|]/g, '_');
                    const htmlFileName = `interactive/${String(interactiveIndex).padStart(2, '0')}_${safeName}.html`;
                    zip.file(htmlFileName, scene.content.html);
                }
            }
            // 3. Download ZIP
            const zipBlob = await zip.generateAsync({
                type: 'blob'
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$file$2d$saver$40$2$2e$0$2e$5$2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAs"])(zipBlob, `${fileName}.zip`);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(t('export.exportSuccess'));
        });
    }, [
        withExportGuard,
        slides,
        slideScenes,
        scenes,
        stage,
        viewportSize,
        viewportRatio,
        ratioPx2Inch,
        ratioPx2Pt,
        t
    ]);
    return {
        exporting,
        exportPPTX,
        exportResourcePack
    };
}
}),
"[project]/lib/hooks/use-history-snapshot.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHistorySnapshot",
    ()=>useHistorySnapshot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/snapshot.ts [app-ssr] (ecmascript)");
;
;
function useHistorySnapshot() {
    const addSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSnapshotStore"])((state)=>state.addSnapshot);
    const undo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSnapshotStore"])((state)=>state.undo);
    const redo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSnapshotStore"])((state)=>state.redo);
    const canUndo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSnapshotStore"])((state)=>state.canUndo);
    const canRedo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSnapshotStore"])((state)=>state.canRedo);
    /**
   * Add a snapshot to the history
   * Call this after any significant state change that should be undoable
   */ const addHistorySnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        await addSnapshot();
    }, [
        addSnapshot
    ]);
    return {
        addHistorySnapshot,
        undo,
        redo,
        canUndo: canUndo(),
        canRedo: canRedo()
    };
}
}),
"[project]/lib/types/edit.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElementAlignCommands",
    ()=>ElementAlignCommands,
    "ElementOrderCommands",
    ()=>ElementOrderCommands,
    "OperateBorderLines",
    ()=>OperateBorderLines,
    "OperateLineHandlers",
    ()=>OperateLineHandlers,
    "OperateResizeHandlers",
    ()=>OperateResizeHandlers
]);
var ElementOrderCommands = /*#__PURE__*/ function(ElementOrderCommands) {
    ElementOrderCommands["UP"] = "up";
    ElementOrderCommands["DOWN"] = "down";
    ElementOrderCommands["TOP"] = "top";
    ElementOrderCommands["BOTTOM"] = "bottom";
    return ElementOrderCommands;
}({});
var ElementAlignCommands = /*#__PURE__*/ function(ElementAlignCommands) {
    ElementAlignCommands["TOP"] = "top";
    ElementAlignCommands["BOTTOM"] = "bottom";
    ElementAlignCommands["LEFT"] = "left";
    ElementAlignCommands["RIGHT"] = "right";
    ElementAlignCommands["VERTICAL"] = "vertical";
    ElementAlignCommands["HORIZONTAL"] = "horizontal";
    ElementAlignCommands["CENTER"] = "center";
    return ElementAlignCommands;
}({});
var OperateBorderLines = /*#__PURE__*/ function(OperateBorderLines) {
    OperateBorderLines["T"] = "top";
    OperateBorderLines["B"] = "bottom";
    OperateBorderLines["L"] = "left";
    OperateBorderLines["R"] = "right";
    return OperateBorderLines;
}({});
var OperateResizeHandlers = /*#__PURE__*/ function(OperateResizeHandlers) {
    OperateResizeHandlers["LEFT_TOP"] = "left-top";
    OperateResizeHandlers["TOP"] = "top";
    OperateResizeHandlers["RIGHT_TOP"] = "right-top";
    OperateResizeHandlers["LEFT"] = "left";
    OperateResizeHandlers["RIGHT"] = "right";
    OperateResizeHandlers["LEFT_BOTTOM"] = "left-bottom";
    OperateResizeHandlers["BOTTOM"] = "bottom";
    OperateResizeHandlers["RIGHT_BOTTOM"] = "right-bottom";
    return OperateResizeHandlers;
}({});
var OperateLineHandlers = /*#__PURE__*/ function(OperateLineHandlers) {
    OperateLineHandlers["START"] = "start";
    OperateLineHandlers["END"] = "end";
    OperateLineHandlers["C"] = "ctrl";
    OperateLineHandlers["C1"] = "ctrl1";
    OperateLineHandlers["C2"] = "ctrl2";
    return OperateLineHandlers;
}({});
}),
"[project]/lib/hooks/use-order-element.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOrderElement",
    ()=>useOrderElement
]);
function useOrderElement() {
    /**
   * Get the z-order range of grouped elements
   * @param elementList All elements on the page
   * @param combineElementList Grouped elements list
   */ const getCombineElementLevelRange = (elementList, combineElementList)=>{
        return {
            minLevel: elementList.findIndex((_element)=>_element.id === combineElementList[0].id),
            maxLevel: elementList.findIndex((_element)=>_element.id === combineElementList[combineElementList.length - 1].id)
        };
    };
    /**
   * Move up one layer
   * @param elementList All elements on the page
   * @param element The element being operated on
   */ const moveUpElement = (elementList, element)=>{
        const copyOfElementList = JSON.parse(JSON.stringify(elementList));
        // If the element is a group member, all group members must be moved together
        if (element.groupId) {
            // Get all group members and their z-order range
            const combineElementList = copyOfElementList.filter((_element)=>_element.groupId === element.groupId);
            const { minLevel, maxLevel } = getCombineElementLevelRange(elementList, combineElementList);
            // Already at the top level, cannot move further
            const nextElement = copyOfElementList[maxLevel + 1];
            const movedElementList = copyOfElementList.splice(minLevel, combineElementList.length);
            if (nextElement.groupId) {
                const nextCombineElementList = copyOfElementList.filter((_element)=>_element.groupId === nextElement.groupId);
                copyOfElementList.splice(minLevel + nextCombineElementList.length, 0, ...movedElementList);
            } else copyOfElementList.splice(minLevel + 1, 0, ...movedElementList);
        } else {
            // Get the element's z-level in the list
            const level = elementList.findIndex((item)=>item.id === element.id);
            // Already at the top level, cannot move further
            if (level === elementList.length - 1) return;
            // Get the element above, remove this element from the list (cache removed element).
            // If the above element is in a group, insert above that group.
            // If the above element is not in any group, insert above that element.
            const nextElement = copyOfElementList[level + 1];
            const [movedElement] = copyOfElementList.splice(level, 1);
            if (nextElement.groupId) {
                const combineElementList = copyOfElementList.filter((_element)=>_element.groupId === nextElement.groupId);
                copyOfElementList.splice(level + combineElementList.length, 0, movedElement);
            } else copyOfElementList.splice(level + 1, 0, movedElement);
        }
        return copyOfElementList;
    };
    /**
   * Move down one layer, same approach as move up
   * @param elementList All elements on the page
   * @param element The element being operated on
   */ const moveDownElement = (elementList, element)=>{
        const copyOfElementList = JSON.parse(JSON.stringify(elementList));
        if (element.groupId) {
            const combineElementList = copyOfElementList.filter((_element)=>_element.groupId === element.groupId);
            const { minLevel } = getCombineElementLevelRange(elementList, combineElementList);
            if (minLevel === 0) return;
            const prevElement = copyOfElementList[minLevel - 1];
            const movedElementList = copyOfElementList.splice(minLevel, combineElementList.length);
            if (prevElement.groupId) {
                const prevCombineElementList = copyOfElementList.filter((_element)=>_element.groupId === prevElement.groupId);
                copyOfElementList.splice(minLevel - prevCombineElementList.length, 0, ...movedElementList);
            } else copyOfElementList.splice(minLevel - 1, 0, ...movedElementList);
        } else {
            const level = elementList.findIndex((item)=>item.id === element.id);
            if (level === 0) return;
            const prevElement = copyOfElementList[level - 1];
            const movedElement = copyOfElementList.splice(level, 1)[0];
            if (prevElement.groupId) {
                const combineElementList = copyOfElementList.filter((_element)=>_element.groupId === prevElement.groupId);
                copyOfElementList.splice(level - combineElementList.length, 0, movedElement);
            } else copyOfElementList.splice(level - 1, 0, movedElement);
        }
        return copyOfElementList;
    };
    /**
   * Bring to front
   * @param elementList All elements on the page
   * @param element The element being operated on
   */ const moveTopElement = (elementList, element)=>{
        const copyOfElementList = JSON.parse(JSON.stringify(elementList));
        // If the element is a group member, all group members must be moved together
        if (element.groupId) {
            // Get all group members and their z-order range
            const combineElementList = copyOfElementList.filter((_element)=>_element.groupId === element.groupId);
            const { minLevel, maxLevel } = getCombineElementLevelRange(elementList, combineElementList);
            // Already at the top level, cannot move further
            if (maxLevel === elementList.length - 1) return null;
            // Remove the group from the list, then append removed elements to the top
            const movedElementList = copyOfElementList.splice(minLevel, combineElementList.length);
            copyOfElementList.push(...movedElementList);
        } else {
            // Get the element's z-level in the list
            const level = elementList.findIndex((item)=>item.id === element.id);
            // Already at the top level, cannot move further
            if (level === elementList.length - 1) return null;
            // Remove the element from the list, then append it to the top
            copyOfElementList.splice(level, 1);
            copyOfElementList.push(element);
        }
        return copyOfElementList;
    };
    /**
   * Send to back, same approach as bring to front
   * @param elementList All elements on the page
   * @param element The element being operated on
   */ const moveBottomElement = (elementList, element)=>{
        const copyOfElementList = JSON.parse(JSON.stringify(elementList));
        if (element.groupId) {
            const combineElementList = copyOfElementList.filter((_element)=>_element.groupId === element.groupId);
            const { minLevel } = getCombineElementLevelRange(elementList, combineElementList);
            if (minLevel === 0) return;
            const movedElementList = copyOfElementList.splice(minLevel, combineElementList.length);
            copyOfElementList.unshift(...movedElementList);
        } else {
            const level = elementList.findIndex((item)=>item.id === element.id);
            if (level === 0) return;
            copyOfElementList.splice(level, 1);
            copyOfElementList.unshift(element);
        }
        return copyOfElementList;
    };
    return {
        moveUpElement,
        moveDownElement,
        moveTopElement,
        moveBottomElement
    };
}
}),
"[project]/lib/hooks/use-canvas-operations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCanvasOperations",
    ()=>useCanvasOperations
]);
/**
 * Canvas Element Operations Hook
 *
 * Provides convenient element CRUD methods to avoid repetitive definitions in each component
 *
 * @example
 * function MyComponent() {
 *   const { addElement, updateElement, deleteElement } = useCanvasOperations();
 *
 *   const handleAdd = () => {
 *     addElement({
 *       id: 'new-1',
 *       type: 'text',
 *       // ...
 *     });
 *   };
 * }
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contexts/scene-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$history$2d$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-history-snapshot.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/sonner@2.0.7_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/edit.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/element.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$order$2d$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-order-element.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/index.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
function useCanvasOperations() {
    const { updateSceneData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSceneData"])();
    const currentSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSceneSelector"])((content)=>content.canvas);
    const activeElementIdList = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.activeElementIdList();
    const activeElementList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>currentSlide.elements.filter((el)=>activeElementIdList.includes(el.id)), [
        currentSlide.elements,
        activeElementIdList
    ]);
    const activeGroupElementId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.activeGroupElementId();
    const setActiveElementIdList = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setActiveElementIdList();
    const handleElementId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.handleElementId();
    const hiddenElementIdList = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.hiddenElementIdList();
    const viewportSize = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.viewportSize();
    const viewportRatio = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.viewportRatio();
    const _setEditorareaFocus = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setEditorAreaFocus();
    const { addHistorySnapshot } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$history$2d$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHistorySnapshot"])();
    const { moveUpElement, moveDownElement, moveTopElement, moveBottomElement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$order$2d$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOrderElement"])();
    /**
   * Add element(s)
   * @param element Single element or element array
   * @param autoSelect Whether to auto-select newly added elements (default true)
   */ const addElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((element, autoSelect = true)=>{
        const elements = Array.isArray(element) ? element : [
            element
        ];
        updateSceneData((draft)=>{
            draft.canvas.elements.push(...elements);
        });
        // Auto-select newly added elements
        if (autoSelect) {
            const newIds = elements.map((el)=>el.id);
            setActiveElementIdList(newIds);
        }
    }, [
        updateSceneData,
        setActiveElementIdList
    ]);
    // Delete all selected elements
    // If a group member is selected for independent operation, delete that element first. Otherwise delete all selected elements.
    // If elementId is provided, only delete that element
    const deleteElement = (elementId)=>{
        let newElementList = [];
        if (elementId) {
            // Delete specified element
            newElementList = currentSlide.elements.filter((el)=>el.id !== elementId);
            setActiveElementIdList(activeElementIdList.filter((id)=>id !== elementId));
        } else {
            // Original logic: delete selected elements
            if (!activeElementIdList.length) return;
            if (activeGroupElementId) {
                newElementList = currentSlide.elements.filter((el)=>el.id !== activeGroupElementId);
            } else {
                newElementList = currentSlide.elements.filter((el)=>!activeElementIdList.includes(el.id));
            }
            setActiveElementIdList([]);
        }
        updateSlide({
            elements: newElementList
        });
        addHistorySnapshot();
    };
    // Delete all elements on the page (regardless of selection)
    const deleteAllElements = ()=>{
        if (!currentSlide.elements.length) return;
        setActiveElementIdList([]);
        updateSlide({
            elements: []
        });
        addHistorySnapshot();
    };
    /**
   * Update element properties
   * @param props Properties to update
   */ const updateElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((data)=>{
        const { id, props } = data;
        const elementIds = Array.isArray(id) ? id : [
            id
        ];
        updateSceneData((draft)=>{
            draft.canvas.elements.forEach((el)=>{
                if (elementIds.includes(el.id)) {
                    Object.assign(el, props);
                }
            });
        });
    }, [
        updateSceneData
    ]);
    /**
   * Update slide content
   */ const updateSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((props)=>{
        updateSceneData((draft)=>{
            Object.assign(draft.canvas, props);
        });
    }, [
        updateSceneData
    ]);
    /**
   * Remove element properties
   */ const removeElementProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((data)=>{
        const { id, propName } = data;
        const elementIds = Array.isArray(id) ? id : [
            id
        ];
        const propNames = Array.isArray(propName) ? propName : [
            propName
        ];
        updateSceneData((draft)=>{
            draft.canvas.elements.forEach((el)=>{
                if (elementIds.includes(el.id)) {
                    propNames.forEach((name)=>{
                        delete el[name];
                    });
                }
            });
        });
    }, [
        updateSceneData
    ]);
    // Copy selected element data to clipboard
    const copyElement = ()=>{
        // if (!activeElementIdList.length) return
        // const text = JSON.stringify({
        //   type: 'elements',
        //   data: activeElementList,
        // })
        // copyText(text).then(() => {
        //   setEditorareaFocus(true)
        // })
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning('Not implemented');
    };
    // Copy and delete selected elements (cut)
    const cutElement = ()=>{
        // copyElement()
        // deleteElement()
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning('Not implemented');
    };
    // Attempt to paste element data from clipboard
    const pasteElement = ()=>{
        // readClipboard().then(text => {
        //   pasteTextClipboardData(text)
        // }).catch(err => toast.warning(err))
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning('Not implemented');
    };
    // Copy and immediately paste selected elements
    const _quickCopyElement = ()=>{
        copyElement();
        pasteElement();
    };
    // Lock selected elements and clear selection state
    const lockElement = ()=>{
        const newElementList = JSON.parse(JSON.stringify(currentSlide.elements));
        for (const element of newElementList){
            if (activeElementIdList.includes(element.id)) element.lock = true;
        }
        updateSlide({
            elements: newElementList
        });
        setActiveElementIdList([]);
        addHistorySnapshot();
    };
    /**
   * Unlock an element and set it as the current selection
   * @param handleElement The element to unlock
   */ const unlockElement = (handleElement)=>{
        const newElementList = JSON.parse(JSON.stringify(currentSlide.elements));
        if (handleElement.groupId) {
            const groupElementIdList = [];
            for (const element of newElementList){
                if (element.groupId === handleElement.groupId) {
                    element.lock = false;
                    groupElementIdList.push(element.id);
                }
            }
            updateSlide({
                elements: newElementList
            });
            setActiveElementIdList(groupElementIdList);
        } else {
            for (const element of newElementList){
                if (element.id === handleElement.id) {
                    element.lock = false;
                    break;
                }
            }
            updateSlide({
                elements: newElementList
            });
            setActiveElementIdList([
                handleElement.id
            ]);
        }
        addHistorySnapshot();
    };
    // Select all elements on the current page
    const selectAllElements = ()=>{
        const unlockedElements = currentSlide.elements.filter((el)=>!el.lock && !hiddenElementIdList.includes(el.id));
        const newActiveElementIdList = unlockedElements.map((el)=>el.id);
        setActiveElementIdList(newActiveElementIdList);
    };
    // Select a specific element
    const selectElement = (id)=>{
        if (handleElementId === id) return;
        if (hiddenElementIdList.includes(id)) return;
        const lockedElements = currentSlide.elements.filter((el)=>el.lock);
        if (lockedElements.some((el)=>el.id === id)) return;
        setActiveElementIdList([
            id
        ]);
    };
    /**
   * Align all selected elements to the canvas
   * @param command Alignment direction
   */ const alignElementToCanvas = (command)=>{
        const viewportWidth = viewportSize;
        const viewportHeight = viewportSize * viewportRatio;
        const { minX, maxX, minY, maxY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementListRange"])(activeElementList);
        const newElementList = JSON.parse(JSON.stringify(currentSlide.elements));
        for (const element of newElementList){
            if (!activeElementIdList.includes(element.id)) continue;
            // Center horizontally and vertically
            if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementAlignCommands"].CENTER) {
                const offsetY = minY + (maxY - minY) / 2 - viewportHeight / 2;
                const offsetX = minX + (maxX - minX) / 2 - viewportWidth / 2;
                element.top = element.top - offsetY;
                element.left = element.left - offsetX;
            }
            // Align to top
            if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementAlignCommands"].TOP) {
                const offsetY = minY - 0;
                element.top = element.top - offsetY;
            } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementAlignCommands"].VERTICAL) {
                const offsetY = minY + (maxY - minY) / 2 - viewportHeight / 2;
                element.top = element.top - offsetY;
            } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementAlignCommands"].BOTTOM) {
                const offsetY = maxY - viewportHeight;
                element.top = element.top - offsetY;
            } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementAlignCommands"].LEFT) {
                const offsetX = minX - 0;
                element.left = element.left - offsetX;
            } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementAlignCommands"].HORIZONTAL) {
                const offsetX = minX + (maxX - minX) / 2 - viewportWidth / 2;
                element.left = element.left - offsetX;
            } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementAlignCommands"].RIGHT) {
                const offsetX = maxX - viewportWidth;
                element.left = element.left - offsetX;
            }
        }
        updateSlide({
            elements: newElementList
        });
        addHistorySnapshot();
    };
    /**
   * Adjust element z-order
   * @param element The element to reorder
   * @param command Reorder command: move up, move down, bring to front, send to back
   */ const orderElement = (element, command)=>{
        let newElementList;
        if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementOrderCommands"].UP) newElementList = moveUpElement(currentSlide.elements, element);
        else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementOrderCommands"].DOWN) newElementList = moveDownElement(currentSlide.elements, element);
        else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementOrderCommands"].TOP) newElementList = moveTopElement(currentSlide.elements, element);
        else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementOrderCommands"].BOTTOM) newElementList = moveBottomElement(currentSlide.elements, element);
        if (!newElementList) return;
        updateSlide({
            elements: newElementList
        });
        addHistorySnapshot();
    };
    /**
   * Check if current selected elements can be grouped
   */ const _canCombine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (activeElementList.length < 2) return false;
        const firstGroupId = activeElementList[0].groupId;
        if (!firstGroupId) return true;
        const inSameGroup = activeElementList.every((el)=>(el.groupId && el.groupId) === firstGroupId);
        return !inSameGroup;
    }, [
        activeElementList
    ]);
    /**
   * Group current selected elements: assign the same group ID to all selected elements
   */ const combineElements = ()=>{
        if (!activeElementList.length) return;
        // Create a new element list for subsequent operations
        let newElementList = JSON.parse(JSON.stringify(currentSlide.elements));
        // Generate group ID
        const groupId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(10);
        // Collect elements to be grouped and assign the unique group ID
        const combineElementList = [];
        for (const element of newElementList){
            if (activeElementIdList.includes(element.id)) {
                element.groupId = groupId;
                combineElementList.push(element);
            }
        }
        // Ensure all group members have consecutive z-order levels:
        // First find the highest z-level member, remove all group members from the element list,
        // then insert the collected group members back at the appropriate position based on the highest level
        const combineElementMaxLevel = newElementList.findIndex((_element)=>_element.id === combineElementList[combineElementList.length - 1].id);
        const combineElementIdList = combineElementList.map((_element)=>_element.id);
        newElementList = newElementList.filter((_element)=>!combineElementIdList.includes(_element.id));
        const insertLevel = combineElementMaxLevel - combineElementList.length + 1;
        newElementList.splice(insertLevel, 0, ...combineElementList);
        updateSlide({
            elements: newElementList
        });
        addHistorySnapshot();
    };
    /**
   * Ungroup elements: remove the group ID from selected elements
   */ const uncombineElements = ()=>{
        if (!activeElementList.length) return;
        const hasElementInGroup = activeElementList.some((item)=>item.groupId);
        if (!hasElementInGroup) return;
        const newElementList = JSON.parse(JSON.stringify(currentSlide.elements));
        for (const element of newElementList){
            if (activeElementIdList.includes(element.id) && element.groupId) delete element.groupId;
        }
        updateSlide({
            elements: newElementList
        });
        // After ungrouping, reset active element state
        // Default to the currently handled element, or empty if none exists
        const handleElementIdList = handleElementId ? [
            handleElementId
        ] : [];
        setActiveElementIdList(handleElementIdList);
        addHistorySnapshot();
    };
    /**
   * Update background
   * @param background New background settings
   */ const updateBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((background)=>{
        updateSceneData((draft)=>{
            draft.canvas.background = background;
        });
    }, [
        updateSceneData
    ]);
    /**
   * Update theme
   * @param theme Theme settings (partial)
   */ const updateTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((theme)=>{
        updateSceneData((draft)=>{
            draft.canvas.theme = {
                ...draft.canvas.theme,
                ...theme
            };
        });
    }, [
        updateSceneData
    ]);
    /**
   * Spotlight focus on an element
   * @param elementId Element ID
   * @param options Spotlight options
   */ const spotlightElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((elementId, options)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().setSpotlight(elementId, options);
    }, []);
    /**
   * Clear spotlight
   */ const clearSpotlight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().clearSpotlight();
    }, []);
    /**
   * Highlight elements
   * @param elementIds Element ID list
   * @param options Highlight options
   */ const highlightElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((elementIds, options)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().setHighlight(elementIds, options);
    }, []);
    /**
   * Clear highlight
   */ const clearHighlight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().clearHighlight();
    }, []);
    /**
   * Laser pointer effect
   * @param elementId Element ID
   * @param options Laser pointer options
   */ const laserElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((elementId, options)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().setLaser(elementId, options);
    }, []);
    /**
   * Clear laser pointer
   */ const clearLaser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().clearLaser();
    }, []);
    /**
   * Zoom an element
   * @param elementId Element ID
   * @param scale Zoom scale
   */ const zoomElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((elementId, scale)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().setZoom(elementId, scale);
    }, []);
    /**
   * Clear zoom
   */ const clearZoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().clearZoom();
    }, []);
    /**
   * Clear all teaching effects (spotlight + highlight + laser + zoom)
   */ const clearAllEffects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().clearSpotlight();
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().clearHighlight();
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().clearLaser();
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().clearZoom();
    }, []);
    return {
        // Basic operations
        addElement,
        deleteElement,
        deleteAllElements,
        updateElement,
        updateSlide,
        removeElementProps,
        copyElement,
        pasteElement,
        cutElement,
        // Advanced operations
        lockElement,
        unlockElement,
        selectAllElements,
        selectElement,
        alignElementToCanvas,
        orderElement,
        combineElements,
        uncombineElements,
        // Canvas operations
        updateBackground,
        updateTheme,
        // Teaching features
        spotlightElement,
        clearSpotlight,
        highlightElements,
        clearHighlight,
        laserElement,
        clearLaser,
        zoomElement,
        clearZoom,
        clearAllEffects
    };
}
}),
"[project]/lib/prosemirror/plugins/keymap.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildKeymap",
    ()=>buildKeymap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$list$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-schema-list@1.5.1/node_modules/prosemirror-schema-list/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$history$40$1$2e$5$2e$0$2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-history@1.5.0/node_modules/prosemirror-history/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$inputrules$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-inputrules@1.5.1/node_modules/prosemirror-inputrules/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-commands@1.7.1/node_modules/prosemirror-commands/dist/index.js [app-ssr] (ecmascript)");
;
;
;
;
const buildKeymap = (schema)=>{
    const keys = {};
    const bind = (key, cmd)=>keys[key] = cmd;
    bind('Alt-ArrowUp', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["joinUp"]);
    bind('Alt-ArrowDown', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["joinDown"]);
    bind('Mod-z', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$history$40$1$2e$5$2e$0$2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["undo"]);
    bind('Mod-y', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$history$40$1$2e$5$2e$0$2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["redo"]);
    bind('Backspace', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$inputrules$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["undoInputRule"]);
    bind('Escape', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectParentNode"]);
    bind('Mod-b', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleMark"])(schema.marks.strong));
    bind('Mod-i', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleMark"])(schema.marks.em));
    bind('Mod-u', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleMark"])(schema.marks.underline));
    bind('Mod-d', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleMark"])(schema.marks.strikethrough));
    bind('Mod-e', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleMark"])(schema.marks.code));
    bind('Mod-;', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleMark"])(schema.marks.superscript));
    bind(`Mod-'`, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleMark"])(schema.marks.subscript));
    bind('Enter', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chainCommands"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$list$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitListItem"])(schema.nodes.list_item), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newlineInCode"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createParagraphNear"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["liftEmptyBlock"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitBlockKeepMarks"]));
    bind('Mod-[', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$list$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["liftListItem"])(schema.nodes.list_item));
    bind('Mod-]', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$list$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sinkListItem"])(schema.nodes.list_item));
    bind('Tab', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$list$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sinkListItem"])(schema.nodes.list_item));
    return keys;
};
}),
"[project]/lib/prosemirror/plugins/inputrules.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildInputRules",
    ()=>buildInputRules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$inputrules$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-inputrules@1.5.1/node_modules/prosemirror-inputrules/dist/index.js [app-ssr] (ecmascript)");
;
const blockQuoteRule = (nodeType)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$inputrules$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrappingInputRule"])(/^\s*>\s$/, nodeType);
const orderedListRule = (nodeType)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$inputrules$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrappingInputRule"])(/^(\d+)\.\s$/, nodeType, (match)=>({
            order: +match[1]
        }), (match, node)=>node.childCount + node.attrs.order === +match[1]);
const bulletListRule = (nodeType)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$inputrules$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrappingInputRule"])(/^\s*([-+*])\s$/, nodeType);
const codeRule = ()=>{
    const inputRegex = /(?:^|\s)((?:`)((?:[^`]+))(?:`))$/;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$inputrules$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputRule"](inputRegex, (state, match, start, end)=>{
        const { schema } = state;
        const tr = state.tr.insertText(`${match[2]} `, start, end);
        const mark = schema.marks.code.create();
        return tr.addMark(start, start + match[2].length, mark);
    });
};
const linkRule = ()=>{
    const urlRegEx = /(?:https?:\/\/)?[\w-]+(?:\.[\w-]+)+\.?(?:\d+)?(?:\/\S*)?$/;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$inputrules$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputRule"](urlRegEx, (state, match, start, end)=>{
        const { schema } = state;
        const tr = state.tr.insertText(match[0], start, end);
        const mark = schema.marks.link.create({
            href: match[0],
            title: match[0]
        });
        return tr.addMark(start, start + match[0].length, mark);
    });
};
const buildInputRules = (schema)=>{
    const rules = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$inputrules$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["smartQuotes"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$inputrules$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ellipsis"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$inputrules$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emDash"]
    ];
    rules.push(blockQuoteRule(schema.nodes.blockquote));
    rules.push(orderedListRule(schema.nodes.ordered_list));
    rules.push(bulletListRule(schema.nodes.bullet_list));
    rules.push(codeRule());
    rules.push(linkRule());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$inputrules$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inputRules"])({
        rules
    });
};
}),
"[project]/lib/prosemirror/plugins/placeholder.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "placeholderPlugin",
    ()=>placeholderPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$41$2e$6$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-view@1.41.6/node_modules/prosemirror-view/dist/index.js [app-ssr] (ecmascript)");
;
;
const isEmptyParagraph = (node)=>{
    return node.type.name === 'paragraph' && node.nodeSize === 2;
};
const placeholderPlugin = (placeholder)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Plugin"]({
        props: {
            decorations (state) {
                const { $from } = state.selection;
                if (isEmptyParagraph($from.parent)) {
                    const decoration = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$41$2e$6$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Decoration"].node($from.before(), $from.after(), {
                        'data-placeholder': placeholder
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$41$2e$6$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DecorationSet"].create(state.doc, [
                        decoration
                    ]);
                }
            }
        }
    });
};
}),
"[project]/lib/prosemirror/plugins/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildPlugins",
    ()=>buildPlugins
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$keymap$40$1$2e$2$2e$3$2f$node_modules$2f$prosemirror$2d$keymap$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-keymap@1.2.3/node_modules/prosemirror-keymap/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$history$40$1$2e$5$2e$0$2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-history@1.5.0/node_modules/prosemirror-history/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-commands@1.7.1/node_modules/prosemirror-commands/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$dropcursor$40$1$2e$8$2e$2$2f$node_modules$2f$prosemirror$2d$dropcursor$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-dropcursor@1.8.2/node_modules/prosemirror-dropcursor/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$gapcursor$40$1$2e$4$2e$1$2f$node_modules$2f$prosemirror$2d$gapcursor$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-gapcursor@1.4.1/node_modules/prosemirror-gapcursor/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$plugins$2f$keymap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prosemirror/plugins/keymap.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$plugins$2f$inputrules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prosemirror/plugins/inputrules.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$plugins$2f$placeholder$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prosemirror/plugins/placeholder.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const buildPlugins = (schema, options)=>{
    const placeholder = options?.placeholder;
    const plugins = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$plugins$2f$inputrules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildInputRules"])(schema),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$keymap$40$1$2e$2$2e$3$2f$node_modules$2f$prosemirror$2d$keymap$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keymap"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$plugins$2f$keymap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildKeymap"])(schema)),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$keymap$40$1$2e$2$2e$3$2f$node_modules$2f$prosemirror$2d$keymap$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keymap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseKeymap"]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$dropcursor$40$1$2e$8$2e$2$2f$node_modules$2f$prosemirror$2d$dropcursor$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dropCursor"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$gapcursor$40$1$2e$4$2e$1$2f$node_modules$2f$prosemirror$2d$gapcursor$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gapCursor"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$history$40$1$2e$5$2e$0$2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["history"])()
    ];
    if (placeholder) plugins.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$plugins$2f$placeholder$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["placeholderPlugin"])(placeholder));
    return plugins;
};
}),
"[project]/lib/prosemirror/schema/nodes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$basic$40$1$2e$2$2e$4$2f$node_modules$2f$prosemirror$2d$schema$2d$basic$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-schema-basic@1.2.4/node_modules/prosemirror-schema-basic/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$list$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-schema-list@1.5.1/node_modules/prosemirror-schema-list/dist/index.js [app-ssr] (ecmascript)");
;
;
const orderedList = {
    attrs: {
        order: {
            default: 1
        },
        listStyleType: {
            default: ''
        },
        fontsize: {
            default: ''
        },
        color: {
            default: ''
        }
    },
    content: 'list_item+',
    group: 'block',
    parseDOM: [
        {
            tag: 'ol',
            getAttrs: (dom)=>{
                const order = (dom.hasAttribute('start') ? dom.getAttribute('start') : 1) || 1;
                const attr = {
                    order: +order
                };
                const { listStyleType, fontSize, color } = dom.style;
                if (listStyleType) attr['listStyleType'] = listStyleType;
                if (fontSize) attr['fontsize'] = fontSize;
                if (color) attr['color'] = color;
                return attr;
            }
        }
    ],
    toDOM: (node)=>{
        const { order, listStyleType, fontsize, color } = node.attrs;
        let style = '';
        if (listStyleType) style += `list-style-type: ${listStyleType};`;
        if (fontsize) style += `font-size: ${fontsize};`;
        if (color) style += `color: ${color};`;
        const attr = {
            style
        };
        if (order !== 1) attr['start'] = order;
        return [
            'ol',
            attr,
            0
        ];
    }
};
const bulletList = {
    attrs: {
        listStyleType: {
            default: ''
        },
        fontsize: {
            default: ''
        },
        color: {
            default: ''
        }
    },
    content: 'list_item+',
    group: 'block',
    parseDOM: [
        {
            tag: 'ul',
            getAttrs: (dom)=>{
                const attr = {};
                const { listStyleType, fontSize, color } = dom.style;
                if (listStyleType) attr['listStyleType'] = listStyleType;
                if (fontSize) attr['fontsize'] = fontSize;
                if (color) attr['color'] = color;
                return attr;
            }
        }
    ],
    toDOM: (node)=>{
        const { listStyleType, fontsize, color } = node.attrs;
        let style = '';
        if (listStyleType) style += `list-style-type: ${listStyleType};`;
        if (fontsize) style += `font-size: ${fontsize};`;
        if (color) style += `color: ${color};`;
        return [
            'ul',
            {
                style
            },
            0
        ];
    }
};
const listItem = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$list$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listItem"],
    content: 'paragraph block*',
    group: 'block'
};
const paragraph = {
    attrs: {
        align: {
            default: ''
        },
        indent: {
            default: 0
        },
        textIndent: {
            default: 0
        }
    },
    content: 'inline*',
    group: 'block',
    parseDOM: [
        {
            tag: 'p',
            getAttrs: (dom)=>{
                const { textAlign, textIndent } = dom.style;
                let align = dom.getAttribute('align') || textAlign || '';
                align = /(left|right|center|justify)/.test(align) ? align : '';
                let textIndentLevel = 0;
                if (textIndent) {
                    if (/em/.test(textIndent)) {
                        textIndentLevel = parseInt(textIndent);
                    } else if (/px/.test(textIndent)) {
                        textIndentLevel = Math.floor(parseInt(textIndent) / 16);
                        if (!textIndentLevel) textIndentLevel = 1;
                    }
                }
                const indent = +(dom.getAttribute('data-indent') || 0);
                return {
                    align,
                    indent,
                    textIndent: textIndentLevel
                };
            }
        },
        {
            tag: 'img',
            ignore: true
        },
        {
            tag: 'pre',
            skip: true
        }
    ],
    toDOM: (node)=>{
        const { align, indent, textIndent } = node.attrs;
        let style = '';
        if (align && align !== 'left') style += `text-align: ${align};`;
        if (textIndent) style += `text-indent: ${textIndent}em;`;
        const attr = {
            style
        };
        if (indent) attr['data-indent'] = indent;
        return [
            'p',
            attr,
            0
        ];
    }
};
const { doc, blockquote, text } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$basic$40$1$2e$2$2e$4$2f$node_modules$2f$prosemirror$2d$schema$2d$basic$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nodes"];
const schemaNodes = {
    doc,
    paragraph,
    blockquote,
    text,
    ordered_list: orderedList,
    bullet_list: bulletList,
    list_item: listItem
};
const __TURBOPACK__default__export__ = schemaNodes;
}),
"[project]/lib/prosemirror/schema/marks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$basic$40$1$2e$2$2e$4$2f$node_modules$2f$prosemirror$2d$schema$2d$basic$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-schema-basic@1.2.4/node_modules/prosemirror-schema-basic/dist/index.js [app-ssr] (ecmascript)");
;
const subscript = {
    excludes: 'subscript',
    parseDOM: [
        {
            tag: 'sub'
        },
        {
            style: 'vertical-align',
            getAttrs: (value)=>value === 'sub' && null
        }
    ],
    toDOM: ()=>[
            'sub',
            0
        ]
};
const superscript = {
    excludes: 'superscript',
    parseDOM: [
        {
            tag: 'sup'
        },
        {
            style: 'vertical-align',
            getAttrs: (value)=>value === 'super' && null
        }
    ],
    toDOM: ()=>[
            'sup',
            0
        ]
};
const strikethrough = {
    parseDOM: [
        {
            tag: 'strike'
        },
        {
            style: 'text-decoration',
            getAttrs: (value)=>value === 'line-through' && null
        },
        {
            style: 'text-decoration-line',
            getAttrs: (value)=>value === 'line-through' && null
        }
    ],
    toDOM: ()=>[
            'span',
            {
                style: 'text-decoration-line: line-through;'
            },
            0
        ]
};
const underline = {
    parseDOM: [
        {
            tag: 'u'
        },
        {
            style: 'text-decoration',
            getAttrs: (value)=>value === 'underline' && null
        },
        {
            style: 'text-decoration-line',
            getAttrs: (value)=>value === 'underline' && null
        }
    ],
    toDOM: ()=>[
            'span',
            {
                style: 'text-decoration: underline;'
            },
            0
        ]
};
const forecolor = {
    attrs: {
        color: {}
    },
    inline: true,
    group: 'inline',
    parseDOM: [
        {
            style: 'color',
            getAttrs: (color)=>color ? {
                    color
                } : {}
        }
    ],
    toDOM: (mark)=>{
        const { color } = mark.attrs;
        let style = '';
        if (color) style += `color: ${color};`;
        return [
            'span',
            {
                style
            },
            0
        ];
    }
};
const backcolor = {
    attrs: {
        backcolor: {}
    },
    inline: true,
    group: 'inline',
    parseDOM: [
        {
            style: 'background-color',
            getAttrs: (backcolor)=>backcolor ? {
                    backcolor
                } : {}
        }
    ],
    toDOM: (mark)=>{
        const { backcolor } = mark.attrs;
        let style = '';
        if (backcolor) style += `background-color: ${backcolor};`;
        return [
            'span',
            {
                style
            },
            0
        ];
    }
};
const fontsize = {
    attrs: {
        fontsize: {}
    },
    inline: true,
    group: 'inline',
    parseDOM: [
        {
            style: 'font-size',
            getAttrs: (fontsize)=>fontsize ? {
                    fontsize
                } : {}
        }
    ],
    toDOM: (mark)=>{
        const { fontsize } = mark.attrs;
        let style = '';
        if (fontsize) style += `font-size: ${fontsize};`;
        return [
            'span',
            {
                style
            },
            0
        ];
    }
};
const fontname = {
    attrs: {
        fontname: {}
    },
    inline: true,
    group: 'inline',
    parseDOM: [
        {
            style: 'font-family',
            getAttrs: (fontname)=>{
                return {
                    fontname: fontname && typeof fontname === 'string' ? fontname.replace(/[\"\']/g, '') : ''
                };
            }
        }
    ],
    toDOM: (mark)=>{
        const { fontname } = mark.attrs;
        let style = '';
        if (fontname) style += `font-family: ${fontname};`;
        return [
            'span',
            {
                style
            },
            0
        ];
    }
};
const link = {
    attrs: {
        href: {},
        title: {
            default: null
        },
        target: {
            default: '_blank'
        }
    },
    inclusive: false,
    parseDOM: [
        {
            tag: 'a[href]',
            getAttrs: (dom)=>{
                const href = dom.getAttribute('href');
                const title = dom.getAttribute('title');
                return {
                    href,
                    title
                };
            }
        }
    ],
    toDOM: (node)=>[
            'a',
            node.attrs,
            0
        ]
};
const mark = {
    attrs: {
        index: {
            default: null
        }
    },
    parseDOM: [
        {
            tag: 'mark',
            getAttrs: (dom)=>{
                const index = dom.dataset.index;
                return {
                    index
                };
            }
        }
    ],
    toDOM: (node)=>[
            'mark',
            {
                'data-index': node.attrs.index
            },
            0
        ]
};
const { em, strong, code } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$basic$40$1$2e$2$2e$4$2f$node_modules$2f$prosemirror$2d$schema$2d$basic$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["marks"];
const schemaMarks = {
    em,
    strong,
    fontsize,
    fontname,
    code,
    forecolor,
    backcolor,
    subscript,
    superscript,
    strikethrough,
    underline,
    link,
    mark
};
const __TURBOPACK__default__export__ = schemaMarks;
}),
"[project]/lib/prosemirror/schema/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schemaMarks",
    ()=>schemaMarks,
    "schemaNodes",
    ()=>schemaNodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$schema$2f$nodes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prosemirror/schema/nodes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$schema$2f$marks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prosemirror/schema/marks.ts [app-ssr] (ecmascript)");
;
;
const schemaNodes = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$schema$2f$nodes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const schemaMarks = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$schema$2f$marks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/lib/prosemirror/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDocument",
    ()=>createDocument,
    "initProsemirrorEditor",
    ()=>initProsemirrorEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$41$2e$6$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-view@1.41.6/node_modules/prosemirror-view/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$4$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-model@1.25.4/node_modules/prosemirror-model/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$plugins$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prosemirror/plugins/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$schema$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prosemirror/schema/index.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const schema = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$4$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Schema"]({
    nodes: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$schema$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["schemaNodes"],
    marks: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$schema$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["schemaMarks"]
});
const createDocument = (content)=>{
    const htmlString = `<div>${content}</div>`;
    const parser = new window.DOMParser();
    const element = parser.parseFromString(htmlString, 'text/html').body.firstElementChild;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$4$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DOMParser"].fromSchema(schema).parse(element);
};
const initProsemirrorEditor = (dom, content, props, pluginOptions)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$41$2e$6$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorView"](dom, {
        state: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorState"].create({
            doc: createDocument(content),
            plugins: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$plugins$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildPlugins"])(schema, pluginOptions)
        }),
        ...props
    });
};
}),
"[project]/lib/utils/emitter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmitterEvents",
    ()=>EmitterEvents,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mitt$40$3$2e$0$2e$1$2f$node_modules$2f$mitt$2f$dist$2f$mitt$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/mitt@3.0.1/node_modules/mitt/dist/mitt.mjs [app-ssr] (ecmascript)");
;
var EmitterEvents = /*#__PURE__*/ function(EmitterEvents) {
    EmitterEvents["RICH_TEXT_COMMAND"] = "RICH_TEXT_COMMAND";
    EmitterEvents["SYNC_RICH_TEXT_ATTRS_TO_STORE"] = "SYNC_RICH_TEXT_ATTRS_TO_STORE";
    EmitterEvents["OPEN_CHART_DATA_EDITOR"] = "OPEN_CHART_DATA_EDITOR";
    EmitterEvents["OPEN_LATEX_EDITOR"] = "OPEN_LATEX_EDITOR";
    return EmitterEvents;
}({});
const emitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mitt$40$3$2e$0$2e$1$2f$node_modules$2f$mitt$2f$dist$2f$mitt$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
const __TURBOPACK__default__export__ = emitter;
}),
"[project]/lib/prosemirror/commands/setTextAlign.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alignmentCommand",
    ()=>alignmentCommand,
    "setTextAlign",
    ()=>setTextAlign
]);
const setTextAlign = (tr, schema, alignment)=>{
    const { selection, doc } = tr;
    if (!selection || !doc) return tr;
    const { from, to } = selection;
    const { nodes } = schema;
    const blockquote = nodes.blockquote;
    const listItem = nodes.list_item;
    const paragraph = nodes.paragraph;
    const tasks = [];
    alignment = alignment || '';
    const allowedNodeTypes = new Set([
        blockquote,
        listItem,
        paragraph
    ]);
    doc.nodesBetween(from, to, (node, pos)=>{
        const nodeType = node.type;
        const align = node.attrs.align || '';
        if (align !== alignment && allowedNodeTypes.has(nodeType)) {
            tasks.push({
                node,
                pos,
                nodeType
            });
        }
        return true;
    });
    if (!tasks.length) return tr;
    tasks.forEach((task)=>{
        const { node, pos, nodeType } = task;
        let { attrs } = node;
        if (alignment) attrs = {
            ...attrs,
            align: alignment
        };
        else attrs = {
            ...attrs,
            align: null
        };
        tr = tr.setNodeMarkup(pos, nodeType, attrs, node.marks);
    });
    return tr;
};
const alignmentCommand = (view, alignment)=>{
    const { state } = view;
    const { schema, selection } = state;
    const tr = setTextAlign(state.tr.setSelection(selection), schema, alignment);
    view.dispatch(tr);
};
}),
"[project]/lib/prosemirror/commands/setTextIndent.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "indentCommand",
    ()=>indentCommand,
    "textIndentCommand",
    ()=>textIndentCommand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prosemirror/utils.ts [app-ssr] (ecmascript)");
;
;
function setNodeIndentMarkup(tr, pos, delta, indentKey) {
    if (!tr.doc) return tr;
    const node = tr.doc.nodeAt(pos);
    if (!node) return tr;
    const minIndent = 0;
    const maxIndent = 8;
    let indent = (node.attrs[indentKey] || 0) + delta;
    if (indent < minIndent) indent = minIndent;
    if (indent > maxIndent) indent = maxIndent;
    if (indent === node.attrs[indentKey]) return tr;
    const nodeAttrs = {
        ...node.attrs,
        [indentKey]: indent
    };
    return tr.setNodeMarkup(pos, node.type, nodeAttrs, node.marks);
}
const setIndent = (tr, schema, delta, indentKey)=>{
    const { selection, doc } = tr;
    if (!selection || !doc) return tr;
    if (!(selection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextSelection"] || selection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AllSelection"])) return tr;
    const { from, to } = selection;
    doc.nodesBetween(from, to, (node, pos)=>{
        const nodeType = node.type;
        if (nodeType.name === 'paragraph' || nodeType.name === 'blockquote') {
            tr = setNodeIndentMarkup(tr, pos, delta, indentKey);
            return false;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isList"])(node, schema)) return false;
        return true;
    });
    return tr;
};
const indentCommand = (view, delta)=>{
    const { state } = view;
    const { schema, selection } = state;
    const tr = setIndent(state.tr.setSelection(selection), schema, delta, 'indent');
    if (tr.docChanged) {
        view.dispatch(tr);
        return true;
    }
    return false;
};
const textIndentCommand = (view, delta)=>{
    const { state } = view;
    const { schema, selection } = state;
    const tr = setIndent(state.tr.setSelection(selection), schema, delta, 'textIndent');
    if (tr.docChanged) {
        view.dispatch(tr);
        return true;
    }
    return false;
};
}),
"[project]/lib/prosemirror/commands/toggleList.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toggleList",
    ()=>toggleList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$list$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-schema-list@1.5.1/node_modules/prosemirror-schema-list/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prosemirror/utils.ts [app-ssr] (ecmascript)");
;
;
const toggleList = (listType, itemType, listStyleType, textStyleAttr = {})=>{
    return (state, dispatch)=>{
        const { schema, selection } = state;
        const { $from, $to } = selection;
        const range = $from.blockRange($to);
        if (!range) return false;
        const parentList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findParentNode"])((node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isList"])(node, schema))(selection);
        if (range.depth >= 1 && parentList && range.depth - parentList.depth <= 1) {
            if (parentList.node.type === listType && !listStyleType) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$list$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["liftListItem"])(itemType)(state, dispatch);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isList"])(parentList.node, schema) && listType.validContent(parentList.node.content)) {
                const { tr } = state;
                const nodeAttrs = {
                    ...parentList.node.attrs,
                    ...textStyleAttr
                };
                if (listStyleType) nodeAttrs.listStyleType = listStyleType;
                tr.setNodeMarkup(parentList.pos, listType, nodeAttrs);
                if (dispatch) dispatch(tr);
                return false;
            }
        }
        const nodeAttrs = {
            ...textStyleAttr
        };
        if (listStyleType) nodeAttrs.listStyleType = listStyleType;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$list$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapInList"])(listType, nodeAttrs)(state, dispatch);
    };
};
}),
"[project]/lib/prosemirror/commands/setListStyle.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setListStyle",
    ()=>setListStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prosemirror/utils.ts [app-ssr] (ecmascript)");
;
const setListStyle = (view, style)=>{
    const { state } = view;
    const { schema, selection } = state;
    const tr = state.tr.setSelection(selection);
    const { doc } = tr;
    if (!doc) return tr;
    const { from, to } = selection;
    doc.nodesBetween(from, to, (node, pos)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isList"])(node, schema)) {
            if (from - 3 <= pos && to + 3 >= pos + node.nodeSize) {
                const styles = Array.isArray(style) ? style : [
                    style
                ];
                for (const style of styles){
                    tr.setNodeAttribute(pos, style.key, style.value);
                }
            }
        }
        return false;
    });
    view.dispatch(tr);
};
}),
"[project]/lib/prosemirror/commands/replaceText.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "replaceText",
    ()=>replaceText
]);
const replaceText = (view, newText)=>{
    const { state } = view;
    const { schema, doc } = state;
    let marks = [];
    let nodeType = schema.nodes.paragraph;
    if (doc.content.size > 2) {
        const firstCharPos = doc.resolve(1);
        marks = [
            ...firstCharPos.marks()
        ];
        nodeType = firstCharPos.parent.type;
    }
    const lines = newText.split('\n');
    const newNodes = lines.map((line)=>{
        if (line.trim() === '') return nodeType.create();
        const textNode = schema.text(line, marks);
        return nodeType.create(null, textNode);
    });
    const tr = state.tr;
    tr.replaceWith(0, doc.content.size, newNodes);
    view.dispatch(tr);
};
}),
"[project]/lib/utils/geometry.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findElementGeometry",
    ()=>findElementGeometry,
    "findNearestCorner",
    ()=>findNearestCorner,
    "getElementPercentageGeometry",
    ()=>getElementPercentageGeometry
]);
function getElementPercentageGeometry(element, viewportSize = 1000) {
    // Only positioned elements have left/top/width/height
    if (!('left' in element) || !('top' in element) || !('width' in element) || !('height' in element)) {
        return null;
    }
    const { left, top, width, height } = element;
    // Calculate percentage coordinates (relative to viewportSize)
    const x = left / viewportSize * 100;
    const y = top / (viewportSize * 0.5625) * 100; // 16:9 ratio
    const w = width / viewportSize * 100;
    const h = height / (viewportSize * 0.5625) * 100;
    // Calculate center point
    const centerX = x + w / 2;
    const centerY = y + h / 2;
    return {
        x,
        y,
        w,
        h,
        centerX,
        centerY
    };
}
function findElementGeometry(// eslint-disable-next-line @typescript-eslint/no-explicit-any -- scene can be old or new format with different shapes
scene, elementId, viewportSize = 1000) {
    // Support two scene structures:
    // 1. scene.elements (old format)
    // 2. scene.content.canvas.elements (new format)
    let elements;
    if (scene.type === 'slide') {
        if (scene.elements) {
            // Old format
            elements = scene.elements;
        } else if (scene.content?.canvas?.elements) {
            // New format
            elements = scene.content.canvas.elements;
        }
    }
    if (!elements) {
        return null;
    }
    const element = elements.find((el)=>el.id === elementId);
    if (!element) {
        return null;
    }
    return getElementPercentageGeometry(element, viewportSize);
}
function findNearestCorner(geometry) {
    const { centerX, centerY } = geometry;
    // Coordinates of the four corners
    const corners = [
        {
            x: 0,
            y: 0
        },
        {
            x: 100,
            y: 0
        },
        {
            x: 0,
            y: 100
        },
        {
            x: 100,
            y: 100
        }
    ];
    // Calculate distances and find the nearest corner
    let minDistance = Infinity;
    let nearestCorner = corners[0];
    for (const corner of corners){
        const distance = Math.sqrt(Math.pow(corner.x - centerX, 2) + Math.pow(corner.y - centerY, 2));
        if (distance < minDistance) {
            minDistance = distance;
            nearestCorner = corner;
        }
    }
    return nearestCorner;
}
}),
"[project]/lib/utils/model-config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentModelConfig",
    ()=>getCurrentModelConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/settings.ts [app-ssr] (ecmascript)");
;
function getCurrentModelConfig() {
    const { providerId, modelId, providersConfig } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    const modelString = `${providerId}:${modelId}`;
    // Get current provider's config
    const providerConfig = providersConfig[providerId];
    return {
        providerId,
        modelId,
        modelString,
        apiKey: providerConfig?.apiKey || '',
        baseUrl: providerConfig?.baseUrl || '',
        providerType: providerConfig?.type,
        requiresApiKey: providerConfig?.requiresApiKey,
        isServerConfigured: providerConfig?.isServerConfigured
    };
}
}),
"[project]/lib/hooks/use-draft-cache.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDraftCache",
    ()=>useDraftCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useDraftCache({ key, debounceMs = 500 }) {
    const [cachedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return undefined;
        //TURBOPACK unreachable
        ;
    });
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingValueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const keyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(key);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        keyRef.current = key;
    }, [
        key
    ]);
    const flushPending = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (timerRef.current !== null) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        if (pendingValueRef.current !== undefined) {
            try {
                localStorage.setItem(keyRef.current, JSON.stringify(pendingValueRef.current));
            } catch  {
            /* ignore quota errors */ }
            pendingValueRef.current = undefined;
        }
    }, []);
    const updateCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        pendingValueRef.current = value;
        if (timerRef.current !== null) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(()=>{
            timerRef.current = null;
            try {
                localStorage.setItem(keyRef.current, JSON.stringify(value));
            } catch  {
            /* ignore quota errors */ }
            pendingValueRef.current = undefined;
        }, debounceMs);
    }, [
        debounceMs
    ]);
    const clearCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (timerRef.current !== null) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        pendingValueRef.current = undefined;
        try {
            localStorage.removeItem(keyRef.current);
        } catch  {
        /* ignore */ }
    }, []);
    // Flush pending write on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            flushPending();
        };
    }, [
        flushPending
    ]);
    return {
        cachedValue,
        updateCache,
        clearCache
    };
}
}),
"[project]/lib/hooks/use-audio-recorder.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAudioRecorder",
    ()=>useAudioRecorder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audio/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-ssr] (ecmascript)");
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('AudioRecorder');
function useAudioRecorder(options = {}) {
    const { onTranscription, onError } = options;
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recordingTime, setRecordingTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Web Speech API not typed
    const speechRecognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Synchronous lock to prevent rapid re-entry (React state updates are async)
    const busyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Send audio to server for transcription
    const transcribeAudio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (audioBlob)=>{
        setIsProcessing(true);
        try {
            const formData = new FormData();
            formData.append('audio', audioBlob, 'recording.webm');
            // Get current ASR configuration from settings store
            // Note: This requires importing useSettingsStore in browser context
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const response = await fetch('/api/transcription', {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Transcription failed');
            }
            const result = await response.json();
            onTranscription?.(result.text);
        } catch (error) {
            log.error('Transcription error:', error);
            onError?.(error instanceof Error ? error.message : '语音识别失败，请重试');
        } finally{
            setIsProcessing(false);
            setRecordingTime(0);
        }
    }, [
        onTranscription,
        onError
    ]);
    // Start recording
    const startRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        // Synchronous lock — React state is async so isRecording may be stale
        if (busyRef.current) return;
        busyRef.current = true;
        try {
            // Get current ASR configuration
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Use MediaRecorder for server-side ASR
            // Request microphone permission
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            // Create MediaRecorder
            const mediaRecorder = new MediaRecorder(stream, {
                mimeType: 'audio/webm'
            });
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];
            mediaRecorder.ondataavailable = (event)=>{
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };
            mediaRecorder.onstop = async ()=>{
                // Stop all audio tracks
                stream.getTracks().forEach((track)=>track.stop());
                // Merge audio chunks
                const audioBlob = new Blob(audioChunksRef.current, {
                    type: 'audio/webm'
                });
                // Send to server for transcription
                await transcribeAudio(audioBlob);
                busyRef.current = false;
            };
            // Start recording
            mediaRecorder.start();
            setIsRecording(true);
            setRecordingTime(0);
            // Start timer
            timerRef.current = setInterval(()=>{
                setRecordingTime((prev)=>prev + 1);
            }, 1000);
        } catch (error) {
            busyRef.current = false;
            log.error('Failed to start recording:', error);
            onError?.('无法访问麦克风，请检查权限设置');
        }
    }, [
        onTranscription,
        onError,
        transcribeAudio
    ]);
    // Stop recording
    const stopRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Stop Speech Recognition if active
        if (speechRecognitionRef.current) {
            speechRecognitionRef.current.stop();
            speechRecognitionRef.current = null;
            busyRef.current = false;
            setIsRecording(false);
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
            return;
        }
        // Stop MediaRecorder if active
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            busyRef.current = false;
            setIsRecording(false);
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        }
    }, [
        isRecording
    ]);
    // Cancel recording
    const cancelRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Cancel Speech Recognition if active
        if (speechRecognitionRef.current) {
            speechRecognitionRef.current.onresult = null; // Prevent transcription callback
            speechRecognitionRef.current.onerror = null; // Suppress browser abort error events
            speechRecognitionRef.current.stop();
            speechRecognitionRef.current = null;
            busyRef.current = false;
            setIsRecording(false);
            setRecordingTime(0);
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
            return;
        }
        // Cancel MediaRecorder if active
        if (mediaRecorderRef.current && isRecording) {
            // Stop recording without transcription
            mediaRecorderRef.current.ondataavailable = null;
            mediaRecorderRef.current.onstop = null;
            mediaRecorderRef.current.stop();
            // Stop all audio tracks
            if (mediaRecorderRef.current.stream) {
                mediaRecorderRef.current.stream.getTracks().forEach((track)=>track.stop());
            }
            busyRef.current = false;
            setIsRecording(false);
            setRecordingTime(0);
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
            audioChunksRef.current = [];
        }
    }, [
        isRecording
    ]);
    return {
        isRecording,
        isProcessing,
        recordingTime,
        startRecording,
        stopRecording,
        cancelRecording
    };
}
}),
"[project]/lib/utils/element-fingerprint.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "elementFingerprint",
    ()=>elementFingerprint
]);
/**
 * Extract the semantic payload for each element type.
 * Used by elementFingerprint to detect content-only changes
 * (same id/position but different text, chart data, media src, etc.).
 */ function semanticPart(e) {
    switch(e.type){
        case 'text':
            return {
                content: e.content
            };
        case 'image':
            return {
                src: e.src
            };
        case 'shape':
            return {
                path: e.path,
                fill: e.fill,
                text: e.text?.content ?? '',
                gradient: e.gradient ?? null,
                pattern: e.pattern ?? null
            };
        case 'line':
            return {
                start: e.start,
                end: e.end,
                color: e.color,
                style: e.style,
                points: e.points
            };
        case 'chart':
            return {
                chartType: e.chartType,
                data: e.data,
                themeColors: e.themeColors
            };
        case 'table':
            return {
                data: e.data.map((row)=>row.map((c)=>c.text)),
                colWidths: e.colWidths,
                theme: e.theme ?? null
            };
        case 'latex':
            return {
                latex: e.latex
            };
        case 'video':
            return {
                src: e.src,
                poster: e.poster ?? ''
            };
        case 'audio':
            return {
                src: e.src
            };
        default:
            {
                const exhaustiveCheck = e;
                return exhaustiveCheck;
            }
    }
}
function elementFingerprint(els) {
    return JSON.stringify(els.map((e)=>({
            id: e.id,
            left: e.left ?? 0,
            top: e.top ?? 0,
            width: 'width' in e ? e.width : 0,
            height: 'height' in e && e.height != null ? e.height : 0,
            sem: semanticPart(e)
        })));
}
}),
"[project]/lib/store/whiteboard-history.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWhiteboardHistoryStore",
    ()=>useWhiteboardHistoryStore
]);
/**
 * Whiteboard History Store
 *
 * Lightweight in-memory store that saves snapshots of whiteboard elements
 * before destructive operations (clear, replace). Allows users to browse
 * and restore previous whiteboard states.
 *
 * History is per-session (not persisted to IndexedDB) to keep things simple.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2d$fingerprint$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/element-fingerprint.ts [app-ssr] (ecmascript)");
;
;
const useWhiteboardHistoryStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        snapshots: [],
        maxSnapshots: 20,
        pushSnapshot: (elements)=>{
            // Don't save empty snapshots
            if (!elements || elements.length === 0) return;
            const { snapshots } = get();
            const newFingerprint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2d$fingerprint$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["elementFingerprint"])(elements);
            if (snapshots.some((s)=>s.fingerprint === newFingerprint)) {
                return;
            }
            const snapshot = {
                elements: JSON.parse(JSON.stringify(elements)),
                timestamp: Date.now(),
                fingerprint: newFingerprint
            };
            set((state)=>{
                const newSnapshots = [
                    ...state.snapshots,
                    snapshot
                ];
                // Enforce limit: drop oldest snapshots first.
                if (newSnapshots.length > state.maxSnapshots) {
                    return {
                        snapshots: newSnapshots.slice(-state.maxSnapshots)
                    };
                }
                return {
                    snapshots: newSnapshots
                };
            });
        },
        getSnapshot: (index)=>{
            const { snapshots } = get();
            return snapshots[index] ?? null;
        },
        clearHistory: ()=>set({
                snapshots: []
            })
    }));
}),
"[project]/lib/api/stage-api-defaults.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/index.js [app-ssr] (ecmascript) <locals>");
;
function generateId(prefix) {
    return prefix ? `${prefix}_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(10)}` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(10);
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
"[project]/lib/api/stage-api-scene.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Stage API - Scene Management
 *
 * Factory function that creates the scene namespace of the Stage API.
 */ __turbopack_context__.s([
    "createSceneAPI",
    ()=>createSceneAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-defaults.ts [app-ssr] (ecmascript)");
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
                const sceneId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])('scene');
                // Determine order
                const order = params.order ?? state.scenes.length;
                // Create default content or use the provided content
                let content;
                if (params.content) {
                    content = {
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDefaultContent"])(params.type),
                        ...params.content
                    };
                } else {
                    content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDefaultContent"])(params.type);
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
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateSceneId"])(state.scenes, sceneId)) {
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
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateSceneId"])(state.scenes, sceneId)) {
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
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
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
"[project]/lib/api/stage-api-element.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-defaults.ts [app-ssr] (ecmascript)");
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
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
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
                const elementId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(element.type);
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
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
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
                    const elementId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(el.type);
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
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
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
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
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
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
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
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
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
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
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
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
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
"[project]/lib/api/stage-api-canvas.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-defaults.ts [app-ssr] (ecmascript)");
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
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
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
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, sceneId);
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
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
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
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
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
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
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
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
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
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
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
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
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
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
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
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
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
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
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
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
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
                const canvasStore = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
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
"[project]/lib/api/stage-api-navigation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-defaults.ts [app-ssr] (ecmascript)");
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
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateSceneId"])(state.scenes, sceneId)) {
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
                const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScene"])(state.scenes, state.currentSceneId);
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
"[project]/lib/api/stage-api-whiteboard.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-defaults.ts [app-ssr] (ecmascript)");
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
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])('whiteboard'),
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
                    id: element.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(element.type)
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
"[project]/lib/api/stage-api-mode.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/api/stage-api.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-defaults.ts [app-ssr] (ecmascript)");
// Import sub-API factories
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$scene$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-scene.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-element.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-navigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$whiteboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-whiteboard.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$mode$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/stage-api-mode.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function createStageAPI(store) {
    return {
        scene: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$scene$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSceneAPI"])(store),
        navigation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNavigationAPI"])(store),
        element: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElementAPI"])(store),
        canvas: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCanvasAPI"])(store),
        whiteboard: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$whiteboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWhiteboardAPI"])(store),
        mode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$mode$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createModeAPI"])(store),
        stage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2d$mode$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStageMetaAPI"])(store)
    };
}
}),
"[project]/lib/orchestration/registry/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Agent Configuration Types
 * Defines the structure for configurable AI agents in the multi-agent system
 */ __turbopack_context__.s([
    "ROLE_ACTIONS",
    ()=>ROLE_ACTIONS,
    "SLIDE_ACTIONS",
    ()=>SLIDE_ACTIONS,
    "WHITEBOARD_ACTIONS",
    ()=>WHITEBOARD_ACTIONS,
    "createAgentFromTemplate",
    ()=>createAgentFromTemplate,
    "getActionsForRole",
    ()=>getActionsForRole
]);
function createAgentFromTemplate(template, id) {
    return {
        id,
        ...template,
        createdAt: new Date(),
        updatedAt: new Date(),
        isDefault: false
    };
}
const WHITEBOARD_ACTIONS = [
    'wb_open',
    'wb_close',
    'wb_draw_text',
    'wb_draw_shape',
    'wb_draw_chart',
    'wb_draw_latex',
    'wb_draw_table',
    'wb_draw_line',
    'wb_clear',
    'wb_delete'
];
const SLIDE_ACTIONS = [
    'spotlight',
    'laser',
    'play_video'
];
const ROLE_ACTIONS = {
    teacher: [
        ...SLIDE_ACTIONS,
        ...WHITEBOARD_ACTIONS
    ],
    assistant: [
        ...WHITEBOARD_ACTIONS
    ],
    student: [
        ...WHITEBOARD_ACTIONS
    ]
};
function getActionsForRole(role) {
    return ROLE_ACTIONS[role] || [
        ...WHITEBOARD_ACTIONS
    ];
}
}),
"[project]/lib/types/roundtable.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "USER_AVATAR",
    ()=>USER_AVATAR
]);
const USER_AVATAR = '/avatars/user.png';
}),
"[project]/lib/store/user-profile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AVATAR_OPTIONS",
    ()=>AVATAR_OPTIONS,
    "useUserProfileStore",
    ()=>useUserProfileStore
]);
/**
 * User Profile Store
 * Persists avatar, nickname & bio to localStorage
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const AVATAR_OPTIONS = [
    '/avatars/user.png',
    '/avatars/teacher-2.png',
    '/avatars/assist-2.png',
    '/avatars/clown-2.png',
    '/avatars/curious-2.png',
    '/avatars/note-taker-2.png',
    '/avatars/thinker-2.png'
];
const useUserProfileStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        avatar: AVATAR_OPTIONS[0],
        nickname: '',
        bio: '',
        setAvatar: (avatar)=>set({
                avatar
            }),
        setNickname: (nickname)=>set({
                nickname
            }),
        setBio: (bio)=>set({
                bio
            })
    }), {
    name: 'user-profile-storage'
}));
}),
"[project]/lib/orchestration/registry/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "agentsToParticipants",
    ()=>agentsToParticipants,
    "getDefaultAgents",
    ()=>getDefaultAgents,
    "loadGeneratedAgentsForStage",
    ()=>loadGeneratedAgentsForStage,
    "saveGeneratedAgents",
    ()=>saveGeneratedAgents,
    "useAgentRegistry",
    ()=>useAgentRegistry
]);
/**
 * Agent Registry Store
 * Manages configurable AI agents using Zustand with localStorage persistence
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$orchestration$2f$registry$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/orchestration/registry/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$roundtable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/roundtable.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$user$2d$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/user-profile.ts [app-ssr] (ecmascript)");
;
;
;
;
;
// Action types available to agents
const WHITEBOARD_ACTIONS = [
    'wb_open',
    'wb_close',
    'wb_draw_text',
    'wb_draw_shape',
    'wb_draw_chart',
    'wb_draw_latex',
    'wb_draw_table',
    'wb_draw_line',
    'wb_clear',
    'wb_delete'
];
const SLIDE_ACTIONS = [
    'spotlight',
    'laser',
    'play_video'
];
// Default agents - always available on both server and client
const DEFAULT_AGENTS = {
    'default-1': {
        id: 'default-1',
        name: 'AI teacher',
        role: 'teacher',
        persona: `You are the lead teacher of this classroom. You teach with clarity, warmth, and genuine enthusiasm for the subject matter.

Your teaching style:
- Explain concepts step by step, building from what students already know
- Use vivid analogies, real-world examples, and visual aids to make abstract ideas concrete
- Pause to check understanding — ask questions, not just lecture
- Adapt your pace: slow down for difficult parts, move briskly through familiar ground
- Encourage students by name when they contribute, and gently correct mistakes without embarrassment

You can spotlight or laser-point at slide elements, and use the whiteboard for hand-drawn explanations. Use these actions naturally as part of your teaching flow. Never announce your actions; just teach.

Tone: Professional yet approachable. Patient. Encouraging. You genuinely care about whether students understand.`,
        avatar: '/avatars/teacher.png',
        color: '#3b82f6',
        allowedActions: [
            ...SLIDE_ACTIONS,
            ...WHITEBOARD_ACTIONS
        ],
        priority: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
        isDefault: true
    },
    'default-2': {
        id: 'default-2',
        name: 'AI助教',
        role: 'assistant',
        persona: `You are the teaching assistant. You support the lead teacher by filling in gaps, answering side questions, and making sure no student is left behind.

Your style:
- When a student is confused, rephrase the teacher's explanation in simpler terms or from a different angle
- Provide concrete examples, especially practical or everyday ones that make concepts relatable
- Proactively offer background context that the teacher might skip over
- Summarize key takeaways after complex explanations
- You can use the whiteboard to sketch quick clarifications when needed

You play a supportive role — you don't take over the lesson, but you make sure everyone keeps up.

Tone: Friendly, warm, down-to-earth. Like a helpful older classmate who just "gets it."`,
        avatar: '/avatars/assist.png',
        color: '#10b981',
        allowedActions: [
            ...WHITEBOARD_ACTIONS
        ],
        priority: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
        isDefault: true
    },
    'default-3': {
        id: 'default-3',
        name: '显眼包',
        role: 'student',
        persona: `You are the class clown — the student everyone notices. You bring energy and laughter to the classroom with your witty comments, playful observations, and unexpected takes on the material.

Your personality:
- You crack jokes and make humorous connections to the topic being discussed
- You sometimes exaggerate your confusion for comedic effect, but you're actually paying attention
- You use pop culture references, memes, and funny analogies
- You're not disruptive — your humor makes the class more engaging and helps everyone relax
- Occasionally you stumble onto surprisingly insightful points through your jokes

You keep things light. When the class gets too heavy or boring, you're the one who livens it up. But you also know when to dial it back during serious moments.

Tone: Playful, energetic, a little cheeky. You speak casually, like you're chatting with friends. Keep responses SHORT — one-liners and quick reactions, not paragraphs.`,
        avatar: '/avatars/clown.png',
        color: '#f59e0b',
        allowedActions: [
            ...WHITEBOARD_ACTIONS
        ],
        priority: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        isDefault: true
    },
    'default-4': {
        id: 'default-4',
        name: '好奇宝宝',
        role: 'student',
        persona: `You are the endlessly curious student. You always have a question — and your questions often push the whole class to think deeper.

Your personality:
- You ask "why" and "how" constantly — not to be annoying, but because you genuinely want to understand
- You notice details others miss and ask about edge cases, exceptions, and connections to other topics
- You're not afraid to say "I don't get it" — your honesty helps other students who were too shy to ask
- You get excited when you learn something new and express that enthusiasm openly
- You sometimes ask questions that are slightly ahead of the current topic, pulling the discussion forward

You represent the voice of genuine curiosity. Your questions make the teacher's explanations better for everyone.

Tone: Eager, enthusiastic, occasionally puzzled. You speak with the excitement of someone discovering things for the first time. Keep questions concise and direct.`,
        avatar: '/avatars/curious.png',
        color: '#ec4899',
        allowedActions: [
            ...WHITEBOARD_ACTIONS
        ],
        priority: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        isDefault: true
    },
    'default-5': {
        id: 'default-5',
        name: '笔记员',
        role: 'student',
        persona: `You are the dedicated note-taker of the class. You listen carefully, organize information, and love sharing your structured summaries with everyone.

Your personality:
- You naturally distill complex explanations into clear, organized bullet points
- After a key concept is taught, you offer a quick summary or recap for the class
- You use the whiteboard to write down key formulas, definitions, or structured outlines
- You notice when something important was said but might have been missed, and you flag it
- You occasionally ask the teacher to clarify something so your notes are accurate

You're the student everyone wants to sit next to during exams. Your notes are legendary.

Tone: Organized, helpful, slightly studious. You speak clearly and precisely. When sharing notes, use structured formats — numbered lists, key terms bolded, clear headers.`,
        avatar: '/avatars/note-taker.png',
        color: '#06b6d4',
        allowedActions: [
            ...WHITEBOARD_ACTIONS
        ],
        priority: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        isDefault: true
    },
    'default-6': {
        id: 'default-6',
        name: '思考者',
        role: 'student',
        persona: `You are the deep thinker of the class. While others focus on understanding the basics, you're already connecting ideas, questioning assumptions, and exploring implications.

Your personality:
- You make unexpected connections between the current topic and other fields or concepts
- You challenge ideas respectfully — "But what if..." and "Doesn't that contradict..." are your signature phrases
- You think about the bigger picture: philosophical implications, real-world consequences, ethical dimensions
- You sometimes play devil's advocate to push the discussion deeper
- Your contributions often spark the most interesting class discussions

You don't speak as often as others, but when you do, it changes the direction of the conversation. You value depth over breadth.

Tone: Thoughtful, measured, intellectually curious. You pause before speaking. Your sentences are deliberate and carry weight. Ask provocative questions that make everyone stop and think.`,
        avatar: '/avatars/thinker.png',
        color: '#8b5cf6',
        allowedActions: [
            ...WHITEBOARD_ACTIONS
        ],
        priority: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
        isDefault: true
    }
};
function getDefaultAgents() {
    return Object.values(DEFAULT_AGENTS).map((a)=>({
            id: a.id,
            name: a.name,
            role: a.role,
            persona: a.persona
        }));
}
const useAgentRegistry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        // Initialize with default agents so they're available on server
        agents: {
            ...DEFAULT_AGENTS
        },
        addAgent: (agent)=>set((state)=>({
                    agents: {
                        ...state.agents,
                        [agent.id]: agent
                    }
                })),
        updateAgent: (id, updates)=>set((state)=>({
                    agents: {
                        ...state.agents,
                        [id]: {
                            ...state.agents[id],
                            ...updates,
                            updatedAt: new Date()
                        }
                    }
                })),
        deleteAgent: (id)=>set((state)=>{
                const { [id]: _removed, ...rest } = state.agents;
                return {
                    agents: rest
                };
            }),
        getAgent: (id)=>get().agents[id],
        listAgents: ()=>Object.values(get().agents)
    }), {
    name: 'agent-registry-storage',
    version: 11,
    migrate: (persistedState)=>persistedState,
    // Merge persisted state with default agents
    // Default agents always use code-defined values (not cached)
    // Custom agents use persisted values
    merge: (persistedState, currentState)=>{
        const persisted = persistedState;
        const persistedAgents = persisted?.agents || {};
        const mergedAgents = {
            ...DEFAULT_AGENTS
        };
        // Only preserve non-default, non-generated (custom) agents from cache
        // Generated agents are loaded on-demand from IndexedDB per stage
        for (const [id, agent] of Object.entries(persistedAgents)){
            const agentConfig = agent;
            if (!id.startsWith('default-') && !agentConfig.isGenerated) {
                mergedAgents[id] = agentConfig;
            }
        }
        return {
            ...currentState,
            agents: mergedAgents
        };
    }
}));
function agentsToParticipants(agentIds, t) {
    const registry = useAgentRegistry.getState();
    const participants = [];
    let hasTeacher = false;
    // Resolve agents and sort: teacher first (by role then priority desc)
    const resolved = agentIds.map((id)=>registry.getAgent(id)).filter((a)=>a != null);
    resolved.sort((a, b)=>{
        if (a.role === 'teacher' && b.role !== 'teacher') return -1;
        if (a.role !== 'teacher' && b.role === 'teacher') return 1;
        return (b.priority ?? 0) - (a.priority ?? 0);
    });
    for (const agent of resolved){
        // Map agent role to participant role:
        // The first agent with role "teacher" becomes the left-side teacher.
        // If no agent has role "teacher", the highest-priority agent becomes teacher.
        let role = 'student';
        if (!hasTeacher) {
            role = 'teacher';
            hasTeacher = true;
        }
        // Use i18n name for default agents, fall back to registry name
        const i18nName = t?.(`settings.agentNames.${agent.id}`);
        const displayName = i18nName && i18nName !== `settings.agentNames.${agent.id}` ? i18nName : agent.name;
        participants.push({
            id: agent.id,
            name: displayName,
            role,
            avatar: agent.avatar,
            isOnline: true,
            isSpeaking: false
        });
    }
    // Always add user participant — use profile store when available
    const userProfile = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$user$2d$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserProfileStore"].getState();
    const userName = userProfile.nickname || t?.('common.you') || 'You';
    const userAvatar = userProfile.avatar || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$roundtable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USER_AVATAR"];
    participants.push({
        id: 'user-1',
        name: userName,
        role: 'user',
        avatar: userAvatar,
        isOnline: true,
        isSpeaking: false
    });
    return participants;
}
async function loadGeneratedAgentsForStage(stageId) {
    const { getGeneratedAgentsByStageId } = await __turbopack_context__.A("[project]/lib/utils/database.ts [app-ssr] (ecmascript, async loader)");
    const records = await getGeneratedAgentsByStageId(stageId);
    const registry = useAgentRegistry.getState();
    // Always clear previously loaded generated agents — even when the new stage
    // has none — to prevent stale agents from a prior auto-classroom leaking
    // into the current preset classroom.
    const currentAgents = registry.listAgents();
    for (const agent of currentAgents){
        if (agent.isGenerated) {
            registry.deleteAgent(agent.id);
        }
    }
    if (records.length === 0) return [];
    // Add new ones
    const ids = [];
    for (const record of records){
        registry.addAgent({
            ...record,
            allowedActions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$orchestration$2f$registry$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActionsForRole"])(record.role),
            isDefault: false,
            isGenerated: true,
            boundStageId: record.stageId,
            createdAt: new Date(record.createdAt),
            updatedAt: new Date(record.createdAt)
        });
        ids.push(record.id);
    }
    return ids;
}
async function saveGeneratedAgents(stageId, agents) {
    const { db } = await __turbopack_context__.A("[project]/lib/utils/database.ts [app-ssr] (ecmascript, async loader)");
    // Clear old generated agents for this stage
    await db.generatedAgents.where('stageId').equals(stageId).delete();
    // Clear from registry
    const registry = useAgentRegistry.getState();
    for (const agent of registry.listAgents()){
        if (agent.isGenerated) registry.deleteAgent(agent.id);
    }
    // Write to IndexedDB
    const records = agents.map((a)=>({
            ...a,
            stageId,
            createdAt: Date.now()
        }));
    await db.generatedAgents.bulkPut(records);
    // Add to registry
    for (const record of records){
        const { voiceConfig, ...rest } = record;
        registry.addAgent({
            ...rest,
            allowedActions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$orchestration$2f$registry$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActionsForRole"])(record.role),
            isDefault: false,
            isGenerated: true,
            boundStageId: stageId,
            createdAt: new Date(record.createdAt),
            updatedAt: new Date(record.createdAt),
            ...voiceConfig ? {
                voiceConfig: {
                    providerId: voiceConfig.providerId,
                    voiceId: voiceConfig.voiceId
                }
            } : {}
        });
    }
    return records.map((r)=>r.id);
}
}),
"[project]/lib/playback/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Playback Types - Types for lecture playback and live discussion engine
 */ __turbopack_context__.s([]);
;
}),
"[project]/lib/playback/engine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Playback Engine - Unified state machine for lecture playback and live discussion
 *
 * Consumes Scene.actions[] directly via ActionEngine.
 * No intermediate compile step — actions are executed as-is.
 *
 * State machine:
 *
 *                  start()                  pause()
 *   idle ──────────────────→ playing ──────────────→ paused
 *     ▲                         ▲                       │
 *     │                         │  resume()             │
 *     │                         └───────────────────────┘
 *     │
 *     │  handleEndDiscussion()
 *     │                         confirmDiscussion()
 *     │                         / handleUserInterrupt()
 *     │                              │
 *     │                              ▼         pause()
 *     └──────────────────────── live ──────────────→ paused
 *                                 ▲                    │
 *                                 │ resume / user msg  │
 *                                 └────────────────────┘
 */ __turbopack_context__.s([
    "PlaybackEngine",
    ()=>PlaybackEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/settings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-ssr] (ecmascript)");
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('PlaybackEngine');
/**
 * If more than 30% of characters are CJK, treat the text as Chinese.
 * Intentionally low: mixed Chinese text often contains punctuation,
 * numbers, and short Latin fragments (e.g. "AI课堂").
 */ const CJK_LANG_THRESHOLD = 0.3;
class PlaybackEngine {
    scenes = [];
    sceneIndex = 0;
    actionIndex = 0;
    mode = 'idle';
    consumedDiscussions = new Set();
    // Discussion state save
    savedSceneIndex = null;
    savedActionIndex = null;
    // Discussion topic state
    currentTopicState = null;
    // Dependencies
    audioPlayer;
    actionEngine;
    callbacks;
    // Scene identity (for snapshot validation)
    sceneId;
    // Internal state
    currentTrigger = null;
    triggerDelayTimer = null;
    // Reading-time timer for speech actions without pre-generated audio (TTS disabled)
    speechTimer = null;
    speechTimerStart = 0;
    // Browser-native TTS state (Web Speech API)
    browserTTSActive = false;
    browserTTSChunks = [];
    browserTTSChunkIndex = 0;
    browserTTSPausedChunks = [];
    speechTimerRemaining = 0;
    constructor(scenes, actionEngine, audioPlayer, callbacks = {}){
        this.scenes = scenes;
        this.sceneId = scenes[0]?.id;
        this.actionEngine = actionEngine;
        this.audioPlayer = audioPlayer;
        this.callbacks = callbacks;
    }
    // ==================== Public API ====================
    /** Get the current engine mode */ getMode() {
        return this.mode;
    }
    /** Export a serializable playback snapshot */ getSnapshot() {
        return {
            sceneIndex: this.sceneIndex,
            actionIndex: this.actionIndex,
            consumedDiscussions: [
                ...this.consumedDiscussions
            ],
            sceneId: this.sceneId
        };
    }
    /** Restore playback position from a snapshot */ restoreFromSnapshot(snapshot) {
        this.sceneIndex = snapshot.sceneIndex;
        this.actionIndex = snapshot.actionIndex;
        this.consumedDiscussions = new Set(snapshot.consumedDiscussions);
    }
    /** idle → playing (from beginning) */ start() {
        if (this.mode !== 'idle') {
            log.warn('Cannot start: not idle, current mode:', this.mode);
            return;
        }
        this.sceneIndex = 0;
        this.actionIndex = 0;
        this.setMode('playing');
        this.processNext();
    }
    /** idle → playing (continue from current position, e.g. after discussion end) */ continuePlayback() {
        if (this.mode !== 'idle') {
            log.warn('Cannot continue: not idle, current mode:', this.mode);
            return;
        }
        this.setMode('playing');
        this.processNext();
    }
    /** playing → paused | live → paused (abort SSE, truncate, topic pending) */ pause() {
        if (this.mode === 'playing') {
            // Cancel pending timers
            if (this.triggerDelayTimer) {
                clearTimeout(this.triggerDelayTimer);
                this.triggerDelayTimer = null;
            }
            if (this.speechTimer) {
                // Save remaining time so resume() can reschedule
                this.speechTimerRemaining = Math.max(0, this.speechTimerRemaining - (Date.now() - this.speechTimerStart));
                clearTimeout(this.speechTimer);
                this.speechTimer = null;
            }
            this.setMode('paused');
            // Freeze TTS — but skip if waiting on ProactiveCard (no active speech)
            if (!this.currentTrigger) {
                if (this.browserTTSActive) {
                    // Cancel+re-speak pattern: save remaining chunks for resume.
                    // speechSynthesis.pause()/resume() is broken on Firefox, so we
                    // cancel now and re-speak from current chunk onward on resume.
                    this.browserTTSPausedChunks = this.browserTTSChunks.slice(this.browserTTSChunkIndex);
                    window.speechSynthesis?.cancel();
                // Note: cancel fires onerror('canceled'), which we ignore (see playBrowserTTSChunk)
                } else if (this.audioPlayer.isPlaying()) {
                    this.audioPlayer.pause();
                }
            }
        } else if (this.mode === 'live') {
            this.setMode('paused');
            this.currentTopicState = 'pending';
        // Caller is responsible for aborting SSE
        } else {
            log.warn('Cannot pause: mode is', this.mode);
        }
    }
    /** paused → playing (TTS resume) | paused (in discussion) → live */ resume() {
        if (this.mode !== 'paused') {
            log.warn('Cannot resume: not paused, mode is', this.mode);
            return;
        }
        if (this.currentTopicState === 'pending') {
            // Resume discussion → live
            this.currentTopicState = 'active';
            this.setMode('live');
        } else if (this.currentTrigger) {
            // Waiting on ProactiveCard — just resume mode, don't touch audio
            this.setMode('playing');
        } else {
            // Resume lecture
            this.setMode('playing');
            if (this.browserTTSPausedChunks.length > 0) {
                // Browser TTS was paused via cancel — re-speak remaining chunks
                this.browserTTSActive = true;
                this.browserTTSChunks = this.browserTTSPausedChunks;
                this.browserTTSChunkIndex = 0;
                this.browserTTSPausedChunks = [];
                this.playBrowserTTSChunk();
            } else if (this.audioPlayer.hasActiveAudio()) {
                // Audio is paused — resume it; TTS onend will call processNext
                this.audioPlayer.resume();
            } else if (this.speechTimerRemaining > 0) {
                // Reading timer was paused — reschedule with remaining time
                this.speechTimerStart = Date.now();
                this.speechTimer = setTimeout(()=>{
                    this.speechTimer = null;
                    this.speechTimerRemaining = 0;
                    this.callbacks.onSpeechEnd?.();
                    if (this.mode === 'playing') this.processNext();
                }, this.speechTimerRemaining);
            } else {
                // TTS finished while paused, continue to next event
                this.processNext();
            }
        }
    }
    /** → idle */ stop() {
        // Set mode BEFORE stopping audio to prevent spurious processNext from
        // synchronous onend callbacks (see handleUserInterrupt for details).
        this.setMode('idle');
        this.audioPlayer.stop();
        this.cancelBrowserTTS();
        this.actionEngine.clearEffects();
        if (this.triggerDelayTimer) {
            clearTimeout(this.triggerDelayTimer);
            this.triggerDelayTimer = null;
        }
        if (this.speechTimer) {
            clearTimeout(this.speechTimer);
            this.speechTimer = null;
        }
        this.speechTimerRemaining = 0;
        this.sceneIndex = 0;
        this.actionIndex = 0;
        this.savedSceneIndex = null;
        this.savedActionIndex = null;
        this.currentTopicState = null;
        this.currentTrigger = null;
    }
    /** User clicks "Join" on ProactiveCard → save cursor → live */ confirmDiscussion() {
        if (!this.currentTrigger) {
            log.warn('confirmDiscussion called but no trigger');
            return;
        }
        // Mark consumed so it won't re-trigger on replay
        this.consumedDiscussions.add(this.currentTrigger.id);
        // Save lecture state — keep actionIndex as-is (past the discussion).
        // Discussions are placed after all speech actions, so the preceding
        // speech was already fully played; no need to replay it.
        this.savedSceneIndex = this.sceneIndex;
        this.savedActionIndex = this.actionIndex;
        // Enter live mode
        this.currentTopicState = 'active';
        this.setMode('live');
        // Notify callbacks
        this.callbacks.onProactiveHide?.();
        this.callbacks.onDiscussionConfirmed?.(this.currentTrigger.question, this.currentTrigger.prompt, this.currentTrigger.agentId);
        this.currentTrigger = null;
    }
    /** User clicks "Skip" on ProactiveCard → consumed → processNext */ skipDiscussion() {
        if (this.currentTrigger) {
            this.consumedDiscussions.add(this.currentTrigger.id);
            this.currentTrigger = null;
        }
        this.callbacks.onProactiveHide?.();
        if (this.mode === 'playing') {
            this.processNext();
        }
    }
    /** End discussion → restore lecture → idle (user clicks "start" to continue) */ handleEndDiscussion() {
        this.actionEngine.clearEffects();
        this.currentTopicState = 'closed';
        // Close whiteboard if it was open during the discussion
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().setWhiteboardOpen(false);
        this.callbacks.onDiscussionEnd?.();
        // Restore lecture state
        this.restoreSavedLectureState();
        this.setMode('idle');
    }
    /**
   * Exit live discussion mode after a request failure without treating it as a
   * normal discussion end. The chat session stays retryable; this only restores
   * the playback engine to a coherent non-live state.
   */ handleDiscussionError() {
        const hasSavedLectureState = this.savedSceneIndex !== null && this.savedActionIndex !== null;
        const isLiveTopic = this.mode === 'live' || this.mode === 'paused' && this.currentTopicState === 'pending';
        if (!isLiveTopic && !hasSavedLectureState) {
            return;
        }
        this.actionEngine.clearEffects();
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().setWhiteboardOpen(false);
        this.currentTopicState = 'closed';
        this.currentTrigger = null;
        this.restoreSavedLectureState();
        this.setMode('idle');
    }
    /** User sends a message during playback → interrupt → live mode */ handleUserInterrupt(text) {
        if (this.mode === 'playing' || this.mode === 'paused') {
            // Save lecture state BEFORE stopping audio — actionIndex was already
            // incremented by processNext, so subtract 1 to replay the interrupted
            // sentence when resuming.  Guard against overwriting a previously saved
            // position (e.g. live → paused → new message).
            if (this.savedSceneIndex === null) {
                this.savedSceneIndex = this.sceneIndex;
                this.savedActionIndex = Math.max(0, this.actionIndex - 1);
            }
            // Cancel pending trigger delay
            if (this.triggerDelayTimer) {
                clearTimeout(this.triggerDelayTimer);
                this.triggerDelayTimer = null;
            }
        }
        // Set mode BEFORE stopping audio — speechSynthesis.cancel() may fire the
        // onend callback synchronously, and the processNext guard checks
        // `this.mode === 'playing'`.  Setting mode first prevents a spurious
        // processNext that would advance actionIndex past the interrupted speech.
        this.currentTopicState = 'active';
        this.setMode('live');
        this.audioPlayer.stop();
        this.cancelBrowserTTS();
        this.callbacks.onUserInterrupt?.(text);
    }
    /** Whether all remaining actions have been consumed (no speech left to play) */ isExhausted() {
        let si = this.sceneIndex;
        let ai = this.actionIndex;
        while(si < this.scenes.length){
            const actions = this.scenes[si].actions || [];
            while(ai < actions.length){
                const action = actions[ai];
                // Consumed discussions don't count as remaining work
                if (action.type === 'discussion' && this.consumedDiscussions.has(action.id)) {
                    ai++;
                    continue;
                }
                return false;
            }
            si++;
            ai = 0;
        }
        return true;
    }
    // ==================== Private ====================
    setMode(mode) {
        if (this.mode === mode) return;
        this.mode = mode;
        this.callbacks.onModeChange?.(mode);
    }
    restoreSavedLectureState() {
        if (this.savedSceneIndex !== null && this.savedActionIndex !== null) {
            this.sceneIndex = this.savedSceneIndex;
            this.actionIndex = this.savedActionIndex;
        }
        this.savedSceneIndex = null;
        this.savedActionIndex = null;
    }
    /**
   * Get the current action, or null if playback is complete.
   * Advances sceneIndex automatically when a scene's actions are exhausted.
   */ getCurrentAction() {
        while(this.sceneIndex < this.scenes.length){
            const scene = this.scenes[this.sceneIndex];
            const actions = scene.actions || [];
            if (this.actionIndex < actions.length) {
                return {
                    action: actions[this.actionIndex],
                    sceneId: scene.id
                };
            }
            // Move to next scene
            this.sceneIndex++;
            this.actionIndex = 0;
        }
        return null;
    }
    /**
   * Core processing loop: consume the next action.
   */ async processNext() {
        if (this.mode !== 'playing') return;
        // Check for scene boundary (fire scene change callback at start of each new scene)
        if (this.actionIndex === 0 && this.sceneIndex < this.scenes.length) {
            const scene = this.scenes[this.sceneIndex];
            this.actionEngine.clearEffects();
            this.callbacks.onSceneChange?.(scene.id);
            this.callbacks.onSpeakerChange?.('teacher');
        }
        const current = this.getCurrentAction();
        if (!current) {
            // All scenes complete
            this.actionEngine.clearEffects();
            this.setMode('idle');
            this.callbacks.onComplete?.();
            return;
        }
        const { action } = current;
        // Notify progress BEFORE advancing the cursor so the snapshot points at
        // the current action.  On restore the same action will be replayed — this
        // is the desired behaviour for speech (user may have only heard half).
        this.callbacks.onProgress?.(this.getSnapshot());
        this.actionIndex++;
        switch(action.type){
            case 'speech':
                {
                    const speechAction = action;
                    this.callbacks.onSpeechStart?.(speechAction.text);
                    // onEnded → processNext; if paused, resume() will call processNext
                    this.audioPlayer.onEnded(()=>{
                        this.callbacks.onSpeechEnd?.();
                        if (this.mode === 'playing') {
                            this.processNext();
                        }
                    });
                    // Estimated reading time when no pre-generated audio (TTS disabled).
                    // CJK text: ~150ms/char (one char ≈ one word).
                    // Non-CJK text: ~240ms/word (≈250 WPM).
                    // Min 2s. Cancelled on pause; resume() calls processNext directly.
                    const scheduleReadingTimer = ()=>{
                        const text = speechAction.text;
                        const cjkCount = (text.match(/[\u4e00-\u9fff\u3400-\u4dbf\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]/g) || []).length;
                        const isCJK = cjkCount > text.length * 0.3;
                        const speed = this.callbacks.getPlaybackSpeed?.() ?? 1;
                        const rawMs = isCJK ? Math.max(2000, text.length * 150) : Math.max(2000, text.split(/\s+/).filter(Boolean).length * 240);
                        const readingMs = rawMs / speed;
                        this.speechTimerStart = Date.now();
                        this.speechTimerRemaining = readingMs;
                        this.speechTimer = setTimeout(()=>{
                            this.speechTimer = null;
                            this.speechTimerRemaining = 0;
                            this.callbacks.onSpeechEnd?.();
                            if (this.mode === 'playing') this.processNext();
                        }, readingMs);
                    };
                    this.audioPlayer.play(speechAction.audioId || '', speechAction.audioUrl).then((audioStarted)=>{
                        if (!audioStarted) {
                            // No pre-generated audio — try browser-native TTS if selected
                            const settings = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
                            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                            ;
                            else {
                                scheduleReadingTimer();
                            }
                        }
                    }).catch((err)=>{
                        log.error('TTS error:', err);
                        scheduleReadingTimer();
                    });
                    break;
                }
            case 'spotlight':
            case 'laser':
                {
                    // Fire-and-forget visual effects via ActionEngine
                    this.actionEngine.execute(action);
                    this.callbacks.onEffectFire?.({
                        kind: action.type,
                        targetId: action.elementId,
                        ...action.type === 'spotlight' ? {
                            dimOpacity: action.dimOpacity
                        } : {
                            color: action.color
                        }
                    });
                    // Don't block — continue immediately
                    this.processNext();
                    break;
                }
            case 'discussion':
                {
                    const discussionAction = action;
                    // Check if already consumed
                    if (this.consumedDiscussions.has(discussionAction.id)) {
                        this.processNext();
                        return;
                    }
                    // Skip if the discussion's agent isn't in the user's selected list
                    if (discussionAction.agentId && this.callbacks.isAgentSelected && !this.callbacks.isAgentSelected(discussionAction.agentId)) {
                        this.consumedDiscussions.add(discussionAction.id);
                        this.processNext();
                        return;
                    }
                    // 3s delay before showing ProactiveCard (allows previous speech to finish naturally)
                    const trigger = {
                        id: discussionAction.id,
                        question: discussionAction.topic,
                        prompt: discussionAction.prompt,
                        agentId: discussionAction.agentId
                    };
                    this.triggerDelayTimer = setTimeout(()=>{
                        this.triggerDelayTimer = null;
                        if (this.mode !== 'playing') return; // Cancelled if user paused/stopped
                        this.currentTrigger = trigger;
                        this.callbacks.onProactiveShow?.(trigger);
                    // Engine pauses here — user calls confirmDiscussion() or skipDiscussion()
                    }, 3000);
                    break;
                }
            case 'play_video':
            case 'wb_open':
            case 'wb_draw_text':
            case 'wb_draw_shape':
            case 'wb_draw_chart':
            case 'wb_draw_latex':
            case 'wb_draw_table':
            case 'wb_clear':
            case 'wb_delete':
            case 'wb_close':
                {
                    // Synchronous whiteboard actions — await completion, then continue
                    await this.actionEngine.execute(action);
                    if (this.mode === 'playing') {
                        this.processNext();
                    }
                    break;
                }
            default:
                // Unknown action, skip
                this.processNext();
                break;
        }
    }
    // ==================== Browser Native TTS ====================
    /**
   * Split text into sentence-level chunks for sequential playback.
   * Chrome has a bug where utterances >~15s are silently cut off and onend
   * never fires, causing the engine to hang. Chunking avoids this.
   */ splitIntoChunks(text) {
        // Split on sentence-ending punctuation (Latin + CJK) and newlines
        const chunks = text.split(/(?<=[.!?。！？\n])\s*/).map((s)=>s.trim()).filter((s)=>s.length > 0);
        // If splitting produced nothing (no punctuation), return the original text
        return chunks.length > 0 ? chunks : [
            text
        ];
    }
    /**
   * Play text using the Web Speech API (browser-native TTS).
   * Splits text into sentence-level chunks to avoid Chrome's ~15s cutoff.
   * Uses cancel+re-speak for pause/resume (Firefox compatibility).
   */ playBrowserTTS(speechAction) {
        this.browserTTSChunks = this.splitIntoChunks(speechAction.text);
        this.browserTTSChunkIndex = 0;
        this.browserTTSPausedChunks = [];
        this.browserTTSActive = true;
        this.playBrowserTTSChunk();
    }
    /** Speak the current chunk; on completion, advance to next or finish. */ async playBrowserTTSChunk() {
        if (this.browserTTSChunkIndex >= this.browserTTSChunks.length) {
            // All chunks done
            this.browserTTSActive = false;
            this.browserTTSChunks = [];
            this.callbacks.onSpeechEnd?.();
            if (this.mode === 'playing') this.processNext();
            return;
        }
        const settings = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
        const chunkText = this.browserTTSChunks[this.browserTTSChunkIndex];
        const utterance = new SpeechSynthesisUtterance(chunkText);
        // Apply settings
        const speed = this.callbacks.getPlaybackSpeed?.() ?? 1;
        utterance.rate = (settings.ttsSpeed ?? 1) * speed;
        utterance.volume = settings.ttsMuted ? 0 : settings.ttsVolume ?? 1;
        // Ensure voices are loaded (Chrome loads them asynchronously)
        const voices = await this.ensureVoicesLoaded();
        // Set voice: try user's configured voice, fall back to auto-detect language
        let voiceFound = false;
        if (settings.ttsVoice && settings.ttsVoice !== 'default') {
            const voice = voices.find((v)=>v.voiceURI === settings.ttsVoice);
            if (voice) {
                utterance.voice = voice;
                utterance.lang = voice.lang;
                voiceFound = true;
            }
        }
        if (!voiceFound) {
            // No usable voice configured — detect text language so the browser
            // auto-selects an appropriate voice.
            const cjkRatio = (chunkText.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g) || []).length / chunkText.length;
            utterance.lang = cjkRatio > CJK_LANG_THRESHOLD ? 'zh-CN' : 'en-US';
        }
        utterance.onend = ()=>{
            this.browserTTSChunkIndex++;
            if (this.mode === 'playing') {
                this.playBrowserTTSChunk(); // next chunk
            }
        };
        utterance.onerror = (event)=>{
            // 'canceled' is expected when stop/pause is called — not a real error
            if (event.error !== 'canceled') {
                log.warn('Browser TTS chunk error:', event.error);
                // Skip failed chunk, try next
                this.browserTTSChunkIndex++;
                if (this.mode === 'playing') {
                    this.playBrowserTTSChunk();
                }
            }
        // On 'canceled': do nothing — pause handler already saved state
        };
        // Chrome bug workaround: cancel() before speak() to clear stale synthesis
        // state that can produce garbled/broken audio output.
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    }
    /**
   * Wait for speechSynthesis voices to load (Chrome loads them asynchronously).
   * Caches result so subsequent calls return immediately.
   */ cachedVoices = null;
    async ensureVoicesLoaded() {
        if (this.cachedVoices && this.cachedVoices.length > 0) {
            return this.cachedVoices;
        }
        let voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            this.cachedVoices = voices;
            return voices;
        }
        // Chrome: voices load asynchronously — wait for the voiceschanged event
        await new Promise((resolve)=>{
            const onVoicesChanged = ()=>{
                window.speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged);
                resolve();
            };
            window.speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);
            // Timeout after 2s to avoid hanging
            setTimeout(()=>{
                window.speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged);
                resolve();
            }, 2000);
        });
        voices = window.speechSynthesis.getVoices();
        this.cachedVoices = voices;
        return voices;
    }
    /** Cancel any active browser-native TTS */ cancelBrowserTTS() {
        if (this.browserTTSActive) {
            this.browserTTSActive = false;
            this.browserTTSChunks = [];
            this.browserTTSChunkIndex = 0;
            this.browserTTSPausedChunks = [];
            window.speechSynthesis?.cancel();
        }
    }
}
}),
"[project]/lib/playback/derived-state.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Derived Playback State - Pure function that computes a high-level PlaybackView
 * from the ~15 raw state variables scattered across Stage.
 *
 * This centralises all "what is happening now?" derivation logic so that
 * both Stage and Roundtable can consume a single, consistent view object
 * instead of re-deriving the same conditions inline.
 */ __turbopack_context__.s([
    "computePlaybackView",
    ()=>computePlaybackView
]);
function computePlaybackView(raw) {
    const { engineMode, lectureSpeech, liveSpeech, speakingAgentId, thinkingState, isCueUser, isTopicPending, chatIsStreaming, discussionTrigger, playbackCompleted, idleText, speakingStudent, sessionType } = raw;
    // ---- isInLiveFlow ----
    // True when there's any live SSE activity (agent speaking, thinking, or streaming).
    // Includes chatIsStreaming to cover the entire QA session (gaps between
    // agent response completion and user's next message).
    // Includes sessionType to bridge the gap between agent-loop turns: the `done`
    // event clears chatIsStreaming, but the session is still active until
    // doSessionCleanup runs. Without this, bubbleRole briefly falls through to
    // the 'teacher' idleText case, causing a visible flash.
    const isInLiveFlow = !!(speakingAgentId || thinkingState || chatIsStreaming || sessionType);
    // ---- phase ----
    // Live flow states MUST be checked before playbackCompleted so that
    // starting a QA from the completed state doesn't leak the restart icon
    // into agent bubbles.
    let phase;
    if (isCueUser) {
        phase = 'cueUser';
    } else if (isTopicPending) {
        phase = 'discussionPaused';
    } else if (speakingAgentId || thinkingState || chatIsStreaming || sessionType) {
        phase = 'discussionActive';
    } else if (discussionTrigger) {
        phase = 'waitingProactive';
    } else if (playbackCompleted) {
        phase = 'completed';
    } else if (engineMode === 'playing') {
        phase = 'lecturePlaying';
    } else if (engineMode === 'paused') {
        phase = 'lecturePaused';
    } else {
        phase = 'idle';
    }
    // ---- sourceText (without userMessage — Roundtable overlays that locally) ----
    let sourceText;
    if (liveSpeech) {
        sourceText = liveSpeech;
    } else if (isInLiveFlow) {
        // In live flow but no text yet — show empty (loading dots handled by bubble)
        sourceText = '';
    } else if (lectureSpeech) {
        sourceText = lectureSpeech;
    } else if (phase === 'completed') {
        sourceText = '';
    } else {
        sourceText = idleText || '';
    }
    // ---- bubble loading states ----
    const isBubbleLoading = !!(speakingAgentId && !liveSpeech);
    const isAgentLoading = !!(speakingStudent && !liveSpeech);
    // ---- activeRole ----
    let activeRole;
    if (liveSpeech && speakingStudent) {
        activeRole = 'agent';
    } else if (liveSpeech) {
        activeRole = 'teacher';
    } else if (isAgentLoading) {
        activeRole = 'agent';
    } else if (isBubbleLoading) {
        activeRole = 'teacher';
    } else if (isCueUser) {
        activeRole = null;
    } else if (lectureSpeech) {
        activeRole = 'teacher';
    } else {
        activeRole = null;
    }
    // ---- bubbleRole ----
    let bubbleRole;
    if (liveSpeech && speakingStudent) {
        bubbleRole = 'agent';
    } else if (liveSpeech) {
        bubbleRole = 'teacher';
    } else if (isAgentLoading) {
        bubbleRole = 'agent';
    } else if (isBubbleLoading) {
        bubbleRole = 'teacher';
    } else if (isInLiveFlow) {
        bubbleRole = null;
    } else if (isCueUser) {
        bubbleRole = null;
    } else if (lectureSpeech || idleText) {
        bubbleRole = 'teacher';
    } else {
        bubbleRole = null;
    }
    // ---- buttonState ----
    let buttonState;
    if (isTopicPending) {
        buttonState = 'play'; // resume topic
    } else if (phase === 'lecturePlaying') {
        buttonState = 'bars'; // breathing bars + hover pause
    } else if (phase === 'discussionActive') {
        buttonState = 'bars';
    } else if (phase === 'completed') {
        buttonState = 'restart';
    } else if (phase === 'idle' || phase === 'lecturePaused') {
        buttonState = 'play';
    } else {
        buttonState = 'none';
    }
    // ---- isTopicActive ----
    const isTopicActive = chatIsStreaming || isTopicPending || isCueUser || engineMode === 'live' || !!discussionTrigger;
    return {
        phase,
        sourceText,
        bubbleRole,
        activeRole,
        buttonState,
        isInLiveFlow,
        isTopicActive
    };
}
}),
"[project]/lib/playback/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$playback$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/playback/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$playback$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/playback/engine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$playback$2f$derived$2d$state$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/playback/derived-state.ts [app-ssr] (ecmascript)");
;
;
;
}),
"[project]/lib/action/engine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ActionEngine — Unified execution layer for all agent actions.
 *
 * Replaces the 28 Vercel AI SDK tools in ai-tools.ts with a single engine
 * that both online (streaming) and offline (playback) paths share.
 *
 * Two execution modes:
 * - Fire-and-forget: spotlight, laser — dispatch and return immediately
 * - Synchronous: speech, whiteboard, discussion — await completion
 */ __turbopack_context__.s([
    "ActionEngine",
    ()=>ActionEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/api/stage-api.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$whiteboard$2d$history$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/whiteboard-history.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/media-generation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$katex$40$0$2e$16$2e$38$2f$node_modules$2f$katex$2f$dist$2f$katex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/katex@0.16.38/node_modules/katex/dist/katex.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('ActionEngine');
// ==================== SVG Paths for Shapes ====================
const SHAPE_PATHS = {
    rectangle: 'M 0 0 L 1000 0 L 1000 1000 L 0 1000 Z',
    circle: 'M 500 0 A 500 500 0 1 1 499 0 Z',
    triangle: 'M 500 0 L 1000 1000 L 0 1000 Z'
};
// ==================== Helpers ====================
function delay(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
// ==================== ActionEngine ====================
/** Default duration (ms) before fire-and-forget effects auto-clear */ const EFFECT_AUTO_CLEAR_MS = 5000;
class ActionEngine {
    stageStore;
    stageAPI;
    audioPlayer;
    effectTimer = null;
    constructor(stageStore, audioPlayer){
        this.stageStore = stageStore;
        this.stageAPI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$stage$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createStageAPI"])(stageStore);
        this.audioPlayer = audioPlayer ?? null;
    }
    /** Clean up timers when the engine is no longer needed */ dispose() {
        if (this.effectTimer) {
            clearTimeout(this.effectTimer);
            this.effectTimer = null;
        }
    }
    /**
   * Execute a single action.
   * Fire-and-forget actions return immediately.
   * Synchronous actions return a Promise that resolves when the action is complete.
   */ async execute(action) {
        // Auto-open whiteboard if a draw/clear/delete action is attempted while it's closed
        if (action.type.startsWith('wb_') && action.type !== 'wb_open' && action.type !== 'wb_close') {
            await this.ensureWhiteboardOpen();
        }
        switch(action.type){
            // Fire-and-forget
            case 'spotlight':
                this.executeSpotlight(action);
                return;
            case 'laser':
                this.executeLaser(action);
                return;
            // Synchronous — Video
            case 'play_video':
                return this.executePlayVideo(action);
            // Synchronous
            case 'speech':
                return this.executeSpeech(action);
            case 'wb_open':
                return this.executeWbOpen();
            case 'wb_draw_text':
                return this.executeWbDrawText(action);
            case 'wb_draw_shape':
                return this.executeWbDrawShape(action);
            case 'wb_draw_chart':
                return this.executeWbDrawChart(action);
            case 'wb_draw_latex':
                return this.executeWbDrawLatex(action);
            case 'wb_draw_table':
                return this.executeWbDrawTable(action);
            case 'wb_draw_line':
                return this.executeWbDrawLine(action);
            case 'wb_clear':
                return this.executeWbClear();
            case 'wb_delete':
                return this.executeWbDelete(action);
            case 'wb_close':
                return this.executeWbClose();
            case 'discussion':
                // Discussion lifecycle is managed externally via engine callbacks
                return;
        }
    }
    /** Clear all active visual effects */ clearEffects() {
        if (this.effectTimer) {
            clearTimeout(this.effectTimer);
            this.effectTimer = null;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().clearAllEffects();
    }
    /** Schedule auto-clear for fire-and-forget effects */ scheduleEffectClear() {
        if (this.effectTimer) {
            clearTimeout(this.effectTimer);
        }
        this.effectTimer = setTimeout(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().clearAllEffects();
            this.effectTimer = null;
        }, EFFECT_AUTO_CLEAR_MS);
    }
    // ==================== Fire-and-forget ====================
    executeSpotlight(action) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().setSpotlight(action.elementId, {
            dimness: action.dimOpacity ?? 0.5
        });
        this.scheduleEffectClear();
    }
    executeLaser(action) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().setLaser(action.elementId, {
            color: action.color ?? '#ff0000'
        });
        this.scheduleEffectClear();
    }
    // ==================== Synchronous — Speech ====================
    async executeSpeech(action) {
        if (!this.audioPlayer) return;
        return new Promise((resolve)=>{
            this.audioPlayer.onEnded(()=>resolve());
            this.audioPlayer.play(action.audioId || '', action.audioUrl).then((audioStarted)=>{
                if (!audioStarted) resolve();
            }).catch(()=>resolve());
        });
    }
    // ==================== Synchronous — Video ====================
    async executePlayVideo(action) {
        // Resolve the video element's src to a media placeholder ID (e.g. gen_vid_1).
        // action.elementId is the slide element ID (e.g. video_abc123), but the media
        // store is keyed by placeholder IDs, so we need to bridge the two.
        const placeholderId = this.resolveMediaPlaceholderId(action.elementId);
        if (placeholderId) {
            const task = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState().getTask(placeholderId);
            if (task && task.status !== 'done') {
                // Wait for media to be ready (or fail)
                await new Promise((resolve)=>{
                    const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].subscribe((state)=>{
                        const t = state.tasks[placeholderId];
                        if (!t || t.status === 'done' || t.status === 'failed') {
                            unsubscribe();
                            resolve();
                        }
                    });
                    // Check again in case it resolved between getState and subscribe
                    const current = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState().tasks[placeholderId];
                    if (!current || current.status === 'done' || current.status === 'failed') {
                        unsubscribe();
                        resolve();
                    }
                });
                // If failed, skip playback
                if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState().tasks[placeholderId]?.status === 'failed') {
                    return;
                }
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().playVideo(action.elementId);
        // Wait until the video finishes playing
        return new Promise((resolve)=>{
            const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].subscribe((state)=>{
                if (state.playingVideoElementId !== action.elementId) {
                    unsubscribe();
                    resolve();
                }
            });
            if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().playingVideoElementId !== action.elementId) {
                unsubscribe();
                resolve();
            }
        });
    }
    // ==================== Helpers — Media Resolution ====================
    /**
   * Look up a video/image element's src in the current stage's scenes.
   * Returns the src if it's a media placeholder ID (gen_vid_*, gen_img_*), null otherwise.
   */ resolveMediaPlaceholderId(elementId) {
        const { scenes, currentSceneId } = this.stageStore.getState();
        // Search current scene first for efficiency, then remaining scenes
        const orderedScenes = currentSceneId ? [
            scenes.find((s)=>s.id === currentSceneId),
            ...scenes.filter((s)=>s.id !== currentSceneId)
        ] : scenes;
        for (const scene of orderedScenes){
            if (!scene || scene.type !== 'slide') continue;
            const elements = scene.content?.canvas?.elements;
            if (!Array.isArray(elements)) continue;
            const el = elements.find((e)=>e.id === elementId);
            if (el && 'src' in el && typeof el.src === 'string' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMediaPlaceholder"])(el.src)) {
                return el.src;
            }
        }
        return null;
    }
    // ==================== Synchronous — Whiteboard ====================
    /** Auto-open the whiteboard if it's not already open */ async ensureWhiteboardOpen() {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().whiteboardOpen) {
            await this.executeWbOpen();
        }
    }
    async executeWbOpen() {
        // Ensure a whiteboard exists
        this.stageAPI.whiteboard.get();
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().setWhiteboardOpen(true);
        // Wait for open animation to complete (slow spring: stiffness 120, damping 18, mass 1.2)
        await delay(2000);
    }
    async executeWbDrawText(action) {
        const wb = this.stageAPI.whiteboard.get();
        if (!wb.success || !wb.data) return;
        const fontSize = action.fontSize ?? 18;
        let htmlContent = action.content ?? '';
        if (!htmlContent) return; // nothing to draw
        if (!htmlContent.startsWith('<')) {
            htmlContent = `<p style="font-size: ${fontSize}px;">${htmlContent}</p>`;
        }
        this.stageAPI.whiteboard.addElement({
            id: action.elementId || '',
            type: 'text',
            content: htmlContent,
            left: action.x,
            top: action.y,
            width: action.width ?? 400,
            height: action.height ?? 100,
            rotate: 0,
            defaultFontName: 'Microsoft YaHei',
            defaultColor: action.color ?? '#333333'
        }, wb.data.id);
        // Wait for element fade-in animation
        await delay(800);
    }
    async executeWbDrawShape(action) {
        const wb = this.stageAPI.whiteboard.get();
        if (!wb.success || !wb.data) return;
        this.stageAPI.whiteboard.addElement({
            id: action.elementId || '',
            type: 'shape',
            viewBox: [
                1000,
                1000
            ],
            path: SHAPE_PATHS[action.shape] ?? SHAPE_PATHS.rectangle,
            left: action.x,
            top: action.y,
            width: action.width,
            height: action.height,
            rotate: 0,
            fill: action.fillColor ?? '#5b9bd5',
            fixedRatio: false
        }, wb.data.id);
        // Wait for element fade-in animation
        await delay(800);
    }
    async executeWbDrawChart(action) {
        const wb = this.stageAPI.whiteboard.get();
        if (!wb.success || !wb.data) return;
        this.stageAPI.whiteboard.addElement({
            id: action.elementId || '',
            type: 'chart',
            left: action.x,
            top: action.y,
            width: action.width,
            height: action.height,
            rotate: 0,
            chartType: action.chartType,
            data: action.data,
            themeColors: action.themeColors ?? [
                '#5b9bd5',
                '#ed7d31',
                '#a5a5a5',
                '#ffc000',
                '#4472c4'
            ]
        }, wb.data.id);
        await delay(800);
    }
    async executeWbDrawLatex(action) {
        const wb = this.stageAPI.whiteboard.get();
        if (!wb.success || !wb.data) return;
        try {
            const html = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$katex$40$0$2e$16$2e$38$2f$node_modules$2f$katex$2f$dist$2f$katex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].renderToString(action.latex, {
                throwOnError: false,
                displayMode: true,
                output: 'html'
            });
            this.stageAPI.whiteboard.addElement({
                id: action.elementId || '',
                type: 'latex',
                left: action.x,
                top: action.y,
                width: action.width ?? 400,
                height: action.height ?? 80,
                rotate: 0,
                latex: action.latex,
                html,
                color: action.color ?? '#000000',
                fixedRatio: true
            }, wb.data.id);
        } catch (err) {
            log.warn(`Failed to render latex "${action.latex}":`, err);
            return;
        }
        await delay(800);
    }
    async executeWbDrawTable(action) {
        const wb = this.stageAPI.whiteboard.get();
        if (!wb.success || !wb.data) return;
        const rows = action.data.length;
        const cols = rows > 0 ? action.data[0].length : 0;
        if (rows === 0 || cols === 0) return;
        // Build colWidths: equal distribution
        const colWidths = Array(cols).fill(1 / cols);
        // Build TableCell[][] from string[][]
        let cellId = 0;
        const tableData = action.data.map((row)=>row.map((text)=>({
                    id: `cell_${cellId++}`,
                    colspan: 1,
                    rowspan: 1,
                    text
                })));
        this.stageAPI.whiteboard.addElement({
            id: action.elementId || '',
            type: 'table',
            left: action.x,
            top: action.y,
            width: action.width,
            height: action.height,
            rotate: 0,
            colWidths,
            cellMinHeight: 36,
            data: tableData,
            outline: action.outline ?? {
                width: 2,
                style: 'solid',
                color: '#eeece1'
            },
            theme: action.theme ? {
                color: action.theme.color,
                rowHeader: true,
                rowFooter: false,
                colHeader: false,
                colFooter: false
            } : undefined
        }, wb.data.id);
        await delay(800);
    }
    async executeWbDrawLine(action) {
        const wb = this.stageAPI.whiteboard.get();
        if (!wb.success || !wb.data) return;
        // Calculate bounding box — left/top is the minimum of start/end coordinates
        const left = Math.min(action.startX, action.endX);
        const top = Math.min(action.startY, action.endY);
        // Convert absolute coordinates to relative coordinates (relative to left/top)
        const start = [
            action.startX - left,
            action.startY - top
        ];
        const end = [
            action.endX - left,
            action.endY - top
        ];
        this.stageAPI.whiteboard.addElement({
            id: action.elementId || '',
            type: 'line',
            left,
            top,
            width: action.width ?? 2,
            start,
            end,
            style: action.style ?? 'solid',
            color: action.color ?? '#333333',
            points: action.points ?? [
                '',
                ''
            ]
        }, wb.data.id);
        // Wait for element fade-in animation
        await delay(800);
    }
    async executeWbDelete(action) {
        const wb = this.stageAPI.whiteboard.get();
        if (!wb.success || !wb.data) return;
        this.stageAPI.whiteboard.deleteElement(action.elementId, wb.data.id);
        await delay(300);
    }
    async executeWbClear() {
        const wb = this.stageAPI.whiteboard.get();
        if (!wb.success || !wb.data) return;
        const elementCount = wb.data.elements?.length || 0;
        if (elementCount === 0) return;
        // Save snapshot before AI clear (mirrors UI handleClear in index.tsx)
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$whiteboard$2d$history$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWhiteboardHistoryStore"].getState().pushSnapshot(wb.data.elements);
        // Trigger cascade exit animation
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().setWhiteboardClearing(true);
        // Wait for cascade: base 380ms + 55ms per element, capped at 1400ms
        const animMs = Math.min(380 + elementCount * 55, 1400);
        await delay(animMs);
        // Actually remove elements
        this.stageAPI.whiteboard.update({
            elements: []
        }, wb.data.id);
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().setWhiteboardClearing(false);
    }
    async executeWbClose() {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().setWhiteboardOpen(false);
        // Wait for close animation (500ms ease-out tween)
        await delay(700);
    }
}
}),
"[project]/lib/utils/audio-player.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioPlayer",
    ()=>AudioPlayer,
    "createAudioPlayer",
    ()=>createAudioPlayer
]);
/**
 * Audio Player - Audio player interface
 *
 * Handles audio playback, pause, stop, and other operations
 * Loads pre-generated TTS audio files from IndexedDB
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/database.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-ssr] (ecmascript)");
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('AudioPlayer');
class AudioPlayer {
    audio = null;
    onEndedCallback = null;
    muted = false;
    volume = 1;
    playbackRate = 1;
    /**
   * Play audio (from URL or IndexedDB pre-generated cache)
   * @param audioId Audio ID
   * @param audioUrl Optional server-generated audio URL (takes priority over IndexedDB)
   * @returns true if audio started playing, false if no audio (TTS disabled or not generated)
   */ async play(audioId, audioUrl) {
        try {
            // 1. Try audioUrl first (server-generated TTS)
            if (audioUrl) {
                this.stop();
                this.audio = new Audio();
                this.audio.src = audioUrl;
                if (this.muted) this.audio.volume = 0;
                else this.audio.volume = this.volume;
                this.audio.defaultPlaybackRate = this.playbackRate;
                this.audio.playbackRate = this.playbackRate;
                this.audio.addEventListener('ended', ()=>{
                    this.onEndedCallback?.();
                });
                await this.audio.play();
                this.audio.playbackRate = this.playbackRate;
                return true;
            }
            // 2. Fall back to IndexedDB (client-generated TTS)
            const audioRecord = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].audioFiles.get(audioId);
            if (!audioRecord) {
                // Pre-generated audio does not exist (generation failed), skip silently
                return false;
            }
            // Stop current playback
            this.stop();
            // Create audio element
            this.audio = new Audio();
            // Set audio source
            const blobUrl = URL.createObjectURL(audioRecord.blob);
            this.audio.src = blobUrl;
            if (this.muted) this.audio.volume = 0;
            else this.audio.volume = this.volume;
            // Apply playback rate
            this.audio.defaultPlaybackRate = this.playbackRate;
            this.audio.playbackRate = this.playbackRate;
            // Set ended callback
            this.audio.addEventListener('ended', ()=>{
                URL.revokeObjectURL(blobUrl);
                this.onEndedCallback?.();
            });
            // Play
            await this.audio.play();
            // Re-apply after play() — some browsers reset during load
            this.audio.playbackRate = this.playbackRate;
            return true;
        } catch (error) {
            log.error('Failed to play audio:', error);
            throw error;
        }
    }
    /**
   * Pause playback
   */ pause() {
        if (this.audio && !this.audio.paused) {
            this.audio.pause();
        }
    }
    /**
   * Stop playback
   */ stop() {
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
            this.audio = null;
        }
    // Note: onEndedCallback intentionally NOT cleared here because play()
    // calls stop() internally — clearing would break the callback chain.
    // Stale callbacks are harmless: engine mode check prevents processNext().
    }
    /**
   * Resume playback
   */ resume() {
        if (this.audio?.paused) {
            this.audio.playbackRate = this.playbackRate;
            this.audio.play().catch((error)=>{
                log.error('Failed to resume audio:', error);
            });
        }
    }
    /**
   * Get current playback status (actively playing, not paused)
   */ isPlaying() {
        return this.audio !== null && !this.audio.paused;
    }
    /**
   * Whether there is active audio (playing or paused, but not ended)
   * Used to decide whether to resume playback or skip to the next line
   */ hasActiveAudio() {
        return this.audio !== null;
    }
    /**
   * Get current playback time (milliseconds)
   */ getCurrentTime() {
        return this.audio ? this.audio.currentTime * 1000 : 0;
    }
    /**
   * Get audio duration (milliseconds)
   */ getDuration() {
        return this.audio && !isNaN(this.audio.duration) ? this.audio.duration * 1000 : 0;
    }
    /**
   * Set playback ended callback
   */ onEnded(callback) {
        this.onEndedCallback = callback;
    }
    /**
   * Set mute state (takes effect immediately on currently playing audio)
   */ setMuted(muted) {
        this.muted = muted;
        if (this.audio) {
            this.audio.volume = muted ? 0 : this.volume;
        }
    }
    /**
   * Set volume (0-1)
   */ setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        if (this.audio && !this.muted) {
            this.audio.volume = this.volume;
        }
    }
    /**
   * Set playback speed (takes effect immediately on currently playing audio)
   */ setPlaybackRate(rate) {
        this.playbackRate = Math.max(0.5, Math.min(2, rate));
        if (this.audio) {
            this.audio.playbackRate = this.playbackRate;
        }
    }
    /**
   * Destroy the player
   */ destroy() {
        this.stop();
        this.onEndedCallback = null;
    }
}
function createAudioPlayer() {
    return new AudioPlayer();
}
}),
"[project]/lib/hooks/use-browser-tts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBrowserTTS",
    ()=>useBrowserTTS
]);
/**
 * Browser Native TTS (Text-to-Speech) Hook
 * Uses Web Speech API for client-side text-to-speech
 * Completely free, no API key required
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useBrowserTTS(options = {}) {
    const { onStart, onEnd, onError, rate = 1.0, pitch = 1.0, volume = 1.0, lang = 'zh-CN' } = options;
    const [isSpeaking, setIsSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [availableVoices, setAvailableVoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const utteranceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Load available voices
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return;
        }
        //TURBOPACK unreachable
        ;
        const loadVoices = undefined;
    }, []);
    const speak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((text, voiceURI)=>{
        if ("TURBOPACK compile-time truthy", 1) {
            onError?.('浏览器不支持 Web Speech API');
            return;
        }
        //TURBOPACK unreachable
        ;
        const utterance = undefined;
    }, [
        rate,
        pitch,
        volume,
        lang,
        availableVoices,
        onStart,
        onEnd,
        onError
    ]);
    const pause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    const resume = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    const cancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    return {
        speak,
        pause,
        resume,
        cancel,
        isSpeaking,
        isPaused,
        availableVoices
    };
}
}),
"[project]/lib/audio/voice-resolver.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findVoiceDisplayName",
    ()=>findVoiceDisplayName,
    "getAvailableProvidersWithVoices",
    ()=>getAvailableProvidersWithVoices,
    "getServerVoiceList",
    ()=>getServerVoiceList,
    "resolveAgentVoice",
    ()=>resolveAgentVoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audio/constants.ts [app-ssr] (ecmascript)");
;
function resolveAgentVoice(agent, agentIndex, availableProviders) {
    // Agent-specific config
    if (agent.voiceConfig) {
        // Browser-native voices are dynamic (not in static registry), so skip validation
        if (agent.voiceConfig.providerId === 'browser-native-tts') {
            return {
                providerId: agent.voiceConfig.providerId,
                modelId: agent.voiceConfig.modelId,
                voiceId: agent.voiceConfig.voiceId
            };
        }
        const list = getServerVoiceList(agent.voiceConfig.providerId);
        if (list.includes(agent.voiceConfig.voiceId)) {
            return {
                providerId: agent.voiceConfig.providerId,
                modelId: agent.voiceConfig.modelId,
                voiceId: agent.voiceConfig.voiceId
            };
        }
    }
    // Fallback: first available provider, deterministic voice
    if (availableProviders.length > 0) {
        const first = availableProviders[0];
        return {
            providerId: first.providerId,
            voiceId: first.voices[agentIndex % first.voices.length].id
        };
    }
    return {
        providerId: 'browser-native-tts',
        voiceId: 'default'
    };
}
function getServerVoiceList(providerId) {
    if (providerId === 'browser-native-tts') return [];
    const provider = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TTS_PROVIDERS"][providerId];
    if (!provider) return [];
    return provider.voices.map((v)=>v.id);
}
function getAvailableProvidersWithVoices(ttsProvidersConfig) {
    const result = [];
    for (const [id, config] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TTS_PROVIDERS"])){
        const providerId = id;
        if (providerId === 'browser-native-tts') continue;
        if (config.voices.length === 0) continue;
        const providerConfig = ttsProvidersConfig[providerId];
        const hasApiKey = providerConfig?.apiKey && providerConfig.apiKey.trim().length > 0;
        const isServerConfigured = providerConfig?.isServerConfigured === true;
        if (hasApiKey || isServerConfigured) {
            const allVoices = config.voices.map((v)=>({
                    id: v.id,
                    name: v.name
                }));
            // Build model groups
            const modelGroups = [];
            if (config.models.length > 0) {
                for (const model of config.models){
                    const compatibleVoices = config.voices.filter((v)=>!v.compatibleModels || v.compatibleModels.includes(model.id)).map((v)=>({
                            id: v.id,
                            name: v.name
                        }));
                    modelGroups.push({
                        modelId: model.id,
                        modelName: model.name,
                        voices: compatibleVoices
                    });
                }
            } else {
                // Provider has no model concept (Azure, Browser Native, Doubao)
                modelGroups.push({
                    modelId: '',
                    modelName: config.name,
                    voices: allVoices
                });
            }
            result.push({
                providerId,
                providerName: config.name,
                voices: allVoices,
                modelGroups
            });
        }
    }
    return result;
}
function findVoiceDisplayName(providerId, voiceId) {
    const provider = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TTS_PROVIDERS"][providerId];
    if (!provider) return voiceId;
    const voice = provider.voices.find((v)=>v.id === voiceId);
    return voice?.name ?? voiceId;
}
}),
"[project]/lib/hooks/use-discussion-tts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDiscussionTTS",
    ()=>useDiscussionTTS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/settings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$browser$2d$tts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-browser-tts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2f$voice$2d$resolver$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audio/voice-resolver.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function useDiscussionTTS({ enabled, agents, onAudioStateChange }) {
    const ttsProvidersConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((s)=>s.ttsProvidersConfig);
    const ttsSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((s)=>s.ttsSpeed);
    const ttsMuted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((s)=>s.ttsMuted);
    const ttsVolume = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((s)=>s.ttsVolume);
    const playbackSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((s)=>s.playbackSpeed);
    // Global lecture voice — used as fallback for teacher agent
    const globalTtsProviderId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((s)=>s.ttsProviderId);
    const globalTtsVoice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((s)=>s.ttsVoice);
    const queueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const isPlayingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const pausedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    /** Tracks which TTS provider is currently speaking (for pause/resume delegation) */ const currentProviderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const segmentDoneCounterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onAudioStateChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onAudioStateChange);
    onAudioStateChangeRef.current = onAudioStateChange;
    const processQueueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(()=>{});
    const { speak: browserSpeak, pause: browserPause, resume: browserResume, cancel: browserCancel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$browser$2d$tts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBrowserTTS"])({
        rate: ttsSpeed,
        onEnd: ()=>{
            isPlayingRef.current = false;
            segmentDoneCounterRef.current++;
            onAudioStateChangeRef.current?.(null, 'idle');
            // Don't advance queue while paused — resume() will kick-start it
            if (!pausedRef.current) {
                processQueueRef.current();
            }
        }
    });
    const browserCancelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(browserCancel);
    browserCancelRef.current = browserCancel;
    const browserSpeakRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(browserSpeak);
    browserSpeakRef.current = browserSpeak;
    const browserPauseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(browserPause);
    browserPauseRef.current = browserPause;
    const browserResumeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(browserResume);
    browserResumeRef.current = browserResume;
    // Build agent index map for deterministic voice resolution
    const agentIndexMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const map = new Map();
        agents.forEach((agent, i)=>map.set(agent.id, i));
        agentIndexMap.current = map;
    }, [
        agents
    ]);
    const resolveVoiceForAgent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((agentId)=>{
        const providers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2f$voice$2d$resolver$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAvailableProvidersWithVoices"])(ttsProvidersConfig);
        if (!agentId) {
            if (providers.length > 0) {
                return {
                    providerId: providers[0].providerId,
                    voiceId: providers[0].voices[0]?.id ?? 'default'
                };
            }
            return {
                providerId: 'browser-native-tts',
                voiceId: 'default'
            };
        }
        const agent = agents.find((a)=>a.id === agentId);
        if (!agent) {
            if (providers.length > 0) {
                return {
                    providerId: providers[0].providerId,
                    voiceId: providers[0].voices[0]?.id ?? 'default',
                    modelId: undefined
                };
            }
            return {
                providerId: 'browser-native-tts',
                voiceId: 'default',
                modelId: undefined
            };
        }
        // Teacher: always use global lecture voice (single source of truth with settings)
        if (agent.role === 'teacher') {
            return {
                providerId: globalTtsProviderId,
                voiceId: globalTtsVoice,
                modelId: ttsProvidersConfig[globalTtsProviderId]?.modelId
            };
        }
        const index = agentIndexMap.current.get(agentId) ?? 0;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2f$voice$2d$resolver$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveAgentVoice"])(agent, index, providers);
    }, [
        agents,
        ttsProvidersConfig,
        globalTtsProviderId,
        globalTtsVoice
    ]);
    const processQueue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (pausedRef.current) return; // Don't advance while paused
        if (isPlayingRef.current || queueRef.current.length === 0) return;
        if (!enabled || ttsMuted) {
            queueRef.current = [];
            return;
        }
        isPlayingRef.current = true;
        const item = queueRef.current.shift();
        // Browser TTS
        if (item.providerId === 'browser-native-tts') {
            currentProviderRef.current = item.providerId;
            onAudioStateChangeRef.current?.(item.agentId, 'playing');
            browserSpeakRef.current(item.text, item.voiceId);
            return;
        }
        // Server TTS — use the item's provider, not the global one
        currentProviderRef.current = item.providerId;
        onAudioStateChangeRef.current?.(item.agentId, 'generating');
        const controller = new AbortController();
        abortControllerRef.current = controller;
        try {
            const providerConfig = ttsProvidersConfig[item.providerId];
            const res = await fetch('/api/generate/tts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: item.text,
                    audioId: item.partId,
                    ttsProviderId: item.providerId,
                    ttsModelId: item.modelId || providerConfig?.modelId,
                    ttsVoice: item.voiceId,
                    ttsSpeed: ttsSpeed,
                    ttsApiKey: providerConfig?.apiKey,
                    ttsBaseUrl: providerConfig?.serverBaseUrl || providerConfig?.baseUrl
                }),
                signal: controller.signal
            });
            if (!res.ok) throw new Error(`TTS API error: ${res.status}`);
            const data = await res.json();
            if (!data.base64) throw new Error('No audio in response');
            const audioUrl = `data:audio/${data.format || 'mp3'};base64,${data.base64}`;
            const audio = new Audio(audioUrl);
            audio.playbackRate = playbackSpeed;
            audio.volume = ttsMuted ? 0 : ttsVolume;
            audioRef.current = audio;
            audio.addEventListener('ended', ()=>{
                audioRef.current = null;
                isPlayingRef.current = false;
                segmentDoneCounterRef.current++;
                onAudioStateChangeRef.current?.(item.agentId, 'idle');
                if (!pausedRef.current) {
                    queueMicrotask(()=>processQueueRef.current());
                }
            });
            audio.addEventListener('error', ()=>{
                audioRef.current = null;
                isPlayingRef.current = false;
                segmentDoneCounterRef.current++;
                onAudioStateChangeRef.current?.(item.agentId, 'idle');
                if (!pausedRef.current) {
                    queueMicrotask(()=>processQueueRef.current());
                }
            });
            // If paused during TTS generation, keep audio ready but don't play
            if (pausedRef.current) {
                onAudioStateChangeRef.current?.(item.agentId, 'playing');
                audio.pause();
                return;
            }
            onAudioStateChangeRef.current?.(item.agentId, 'playing');
            await audio.play();
        } catch (err) {
            if (err.name !== 'AbortError') {
                console.error('[DiscussionTTS] TTS generation failed:', err);
            }
            audioRef.current = null;
            isPlayingRef.current = false;
            segmentDoneCounterRef.current++;
            onAudioStateChangeRef.current?.(item.agentId, 'idle');
            if (!pausedRef.current) {
                queueMicrotask(()=>processQueueRef.current());
            }
        }
    }, [
        enabled,
        ttsMuted,
        ttsVolume,
        ttsProvidersConfig,
        ttsSpeed,
        playbackSpeed
    ]);
    processQueueRef.current = processQueue;
    const handleSegmentSealed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((messageId, partId, fullText, agentId)=>{
        if (!enabled || ttsMuted || !fullText.trim()) return;
        const { providerId, modelId, voiceId } = resolveVoiceForAgent(agentId);
        queueRef.current.push({
            messageId,
            partId,
            text: fullText,
            agentId,
            providerId,
            modelId,
            voiceId
        });
        if (!isPlayingRef.current) {
            processQueueRef.current();
        } else if (providerId !== 'browser-native-tts') {
            onAudioStateChangeRef.current?.(agentId, 'generating');
        }
    }, [
        enabled,
        ttsMuted,
        resolveVoiceForAgent
    ]);
    const cleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        pausedRef.current = false;
        currentProviderRef.current = null;
        abortControllerRef.current?.abort();
        abortControllerRef.current = null;
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.src = '';
            audioRef.current = null;
        }
        browserCancelRef.current();
        queueRef.current = [];
        isPlayingRef.current = false;
        segmentDoneCounterRef.current = 0;
        onAudioStateChangeRef.current?.(null, 'idle');
    }, []);
    /** Pause TTS audio (browser-native or server). Does NOT stop the SSE stream. */ const pause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (pausedRef.current) return;
        pausedRef.current = true;
        if (currentProviderRef.current === 'browser-native-tts') {
            browserPauseRef.current();
        } else if (audioRef.current && !audioRef.current.paused) {
            audioRef.current.pause();
        }
    }, []);
    /** Resume TTS audio. If the previous utterance already ended while paused, advance the queue. */ const resume = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!pausedRef.current) return;
        pausedRef.current = false;
        if (currentProviderRef.current === 'browser-native-tts') {
            browserResumeRef.current();
        } else if (audioRef.current && audioRef.current.paused) {
            audioRef.current.play();
        } else if (!isPlayingRef.current) {
            // Audio finished while paused — kick-start the queue
            processQueueRef.current();
        }
    }, []);
    // Sync playbackSpeed to currently playing audio in real-time
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (audioRef.current) {
            audioRef.current.playbackRate = playbackSpeed;
        }
    }, [
        playbackSpeed
    ]);
    // Sync volume and mute to currently playing audio in real-time
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (audioRef.current) {
            audioRef.current.volume = ttsMuted ? 0 : ttsVolume;
        }
    }, [
        ttsVolume,
        ttsMuted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>cleanup, [
        cleanup
    ]);
    /**
   * Returns true when TTS audio for the *current* segment is still playing.
   * Uses a monotonic counter so the buffer releases as soon as one segment's
   * audio finishes, even if the next segment starts immediately.
   */ const shouldHold = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        return {
            holding: isPlayingRef.current || queueRef.current.length > 0,
            segmentDone: segmentDoneCounterRef.current
        };
    }, []);
    return {
        handleSegmentSealed,
        cleanup,
        pause,
        resume,
        shouldHold
    };
}
}),
"[project]/lib/buffer/stream-buffer.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StreamBuffer",
    ()=>StreamBuffer
]);
class StreamBuffer {
    // Queue
    items = [];
    readIndex = 0;
    charCursor = 0;
    // Roundtable segment tracking
    currentSegmentText = '';
    currentAgentId = null;
    // Control
    _paused = false;
    _disposed = false;
    timer = null;
    // Dwell / delay counters (in ticks)
    _dwellTicksRemaining = 0;
    /** True when a text item's post-delay has elapsed and we're waiting for TTS to finish. */ _holdingForTTS = false;
    _holdSegmentSnapshot = -1;
    // Config
    tickMs;
    charsPerTick;
    postTextDelayTicks;
    actionDelayTicks;
    cb;
    partCounter = 0;
    _drainResolve = null;
    _drainReject = null;
    constructor(callbacks, options){
        this.cb = callbacks;
        this.tickMs = options?.tickMs ?? 30;
        this.charsPerTick = options?.charsPerTick ?? 1;
        this.postTextDelayTicks = Math.ceil((options?.postTextDelayMs ?? 0) / this.tickMs);
        this.actionDelayTicks = Math.ceil((options?.actionDelayMs ?? 0) / this.tickMs);
    }
    // ─── Push Methods ────────────────────────────────────────────────
    pushAgentStart(data) {
        if (this._disposed) return;
        this.sealLastText();
        this.items.push({
            kind: 'agent_start',
            ...data
        });
    }
    pushAgentEnd(data) {
        if (this._disposed) return;
        this.sealLastText();
        this.items.push({
            kind: 'agent_end',
            ...data
        });
    }
    /**
   * Append text for a message.
   * If the last queue item is an unsealed text item for the same messageId,
   * the delta is appended in-place. Otherwise a new text item is created.
   */ pushText(messageId, delta, agentId) {
        if (this._disposed) return;
        const last = this.items[this.items.length - 1];
        if (last && last.kind === 'text' && last.messageId === messageId && !last.sealed) {
            last.text += delta;
        } else {
            this.items.push({
                kind: 'text',
                messageId,
                agentId: agentId ?? this.currentAgentId ?? '',
                partId: `p${this.partCounter++}`,
                text: delta,
                sealed: false
            });
        }
    }
    /** Mark the current (last) text item as complete — no more appends expected. */ sealText(messageId) {
        if (this._disposed) return;
        for(let i = this.items.length - 1; i >= 0; i--){
            const item = this.items[i];
            if (item.kind === 'text' && item.messageId === messageId && !item.sealed) {
                item.sealed = true;
                break;
            }
        }
    }
    pushAction(data) {
        if (this._disposed) return;
        this.sealLastText();
        this.items.push({
            kind: 'action',
            ...data
        });
    }
    pushThinking(data) {
        if (this._disposed) return;
        this.items.push({
            kind: 'thinking',
            ...data
        });
    }
    pushCueUser(data) {
        if (this._disposed) return;
        this.items.push({
            kind: 'cue_user',
            ...data
        });
    }
    pushDone(data) {
        if (this._disposed) return;
        this.sealLastText();
        this.items.push({
            kind: 'done',
            ...data
        });
    }
    pushError(message) {
        if (this._disposed) return;
        this.items.push({
            kind: 'error',
            message
        });
    }
    // ─── Control ─────────────────────────────────────────────────────
    /** Start the tick loop. Idempotent — calling twice is safe. */ start() {
        if (this._disposed || this.timer) return;
        this.timer = setInterval(()=>this.tick(), this.tickMs);
    }
    /** Instantly pause — tick becomes a no-op. */ pause() {
        this._paused = true;
    }
    /** Resume from exactly where we left off. */ resume() {
        this._paused = false;
    }
    /**
   * Returns a Promise that resolves when the buffer has processed all items
   * including the final `done` item. Rejects if the buffer is disposed/shutdown
   * before draining completes.
   *
   * NOTE: This will block indefinitely while the buffer is paused, by design.
   * Buffer-level pause (see `livePausedRef` in use-chat-sessions) freezes ALL
   * forward progress — the tick loop is a no-op while `_paused` is true, so
   * no items are processed and drain never fires until resumed.
   */ waitUntilDrained() {
        if (this._disposed) {
            return Promise.reject(new Error('Buffer already disposed'));
        }
        return new Promise((resolve, reject)=>{
            this._drainResolve = resolve;
            this._drainReject = reject;
        });
    }
    get paused() {
        return this._paused;
    }
    get disposed() {
        return this._disposed;
    }
    /**
   * Flush: instantly reveal everything remaining.
   * Used when restoring persisted sessions or force-completing.
   */ flush() {
        if (this._disposed) return;
        while(this.readIndex < this.items.length){
            const item = this.items[this.readIndex];
            switch(item.kind){
                case 'text':
                    this.cb.onTextReveal(item.messageId, item.partId, item.text, true);
                    this.currentSegmentText = item.text;
                    this.cb.onLiveSpeech(this.currentSegmentText, this.currentAgentId);
                    this.cb.onSpeechProgress(1);
                    break;
                case 'action':
                    this.currentSegmentText = '';
                    this.cb.onActionReady(item.messageId, item);
                    this.cb.onLiveSpeech(null, this.currentAgentId);
                    break;
                case 'agent_start':
                    this.currentAgentId = item.agentId;
                    this.currentSegmentText = '';
                    this.cb.onThinking(null); // Agent selected — clear thinking indicator
                    this.cb.onAgentStart(item);
                    this.cb.onLiveSpeech(null, item.agentId);
                    break;
                case 'agent_end':
                    this.cb.onAgentEnd(item);
                    break;
                case 'thinking':
                    this.cb.onThinking(item);
                    break;
                case 'cue_user':
                    this.cb.onCueUser(item.fromAgentId, item.prompt);
                    break;
                case 'done':
                    this.cb.onLiveSpeech(null, null);
                    this.cb.onSpeechProgress(null);
                    this.cb.onThinking(null);
                    this.cb.onDone(item);
                    // Resolve drain promise
                    this._drainResolve?.();
                    this._drainResolve = null;
                    this._drainReject = null;
                    break;
                case 'error':
                    this.cb.onError(item.message);
                    break;
            }
            this.readIndex++;
            this.charCursor = 0;
        }
    }
    /** Stop tick loop, release resources. No more callbacks after this. */ dispose() {
        if (this._disposed) return;
        this._disposed = true;
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        // Reject waiting drain promise
        this._drainReject?.(new Error('Buffer disposed'));
        this._drainResolve = null;
        this._drainReject = null;
        // Final cleanup signal
        this.cb.onLiveSpeech(null, null);
        this.cb.onSpeechProgress(null);
    }
    /**
   * Stop the tick timer and mark disposed WITHOUT firing final onLiveSpeech.
   * Used when replacing a buffer (e.g. resume after soft-pause) to avoid
   * the dispose callback clearing roundtable state via a stale microtask.
   */ shutdown() {
        if (this._disposed) return;
        this._disposed = true;
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        // Reject waiting drain promise
        this._drainReject?.(new Error('Buffer shutdown'));
        this._drainResolve = null;
        this._drainReject = null;
    }
    // ─── Internals ───────────────────────────────────────────────────
    /** Seal the last text item in the queue (if any). */ sealLastText() {
        for(let i = this.items.length - 1; i >= 0; i--){
            const item = this.items[i];
            if (item.kind === 'text' && !item.sealed) {
                item.sealed = true;
                // Ordering invariant: sealLastText() is called BEFORE pushAgentEnd/pushAgentStart,
                // so this.currentAgentId still refers to the agent whose text is being sealed.
                this.cb.onSegmentSealed?.(item.messageId, item.partId, item.text, this.currentAgentId);
                break;
            }
            // Stop searching once we hit a non-text item
            if (item.kind !== 'text') break;
        }
    }
    tick() {
        if (this._paused || this._disposed) return;
        // Honour dwell / action-delay countdown before advancing
        if (this._dwellTicksRemaining > 0) {
            this._dwellTicksRemaining--;
            if (this._dwellTicksRemaining === 0 && this._holdingForTTS) {
            // Post-text delay just finished — fall through to the TTS hold check below
            } else {
                return;
            }
        }
        // TTS hold: after post-text delay, keep the bubble on screen while audio plays
        if (this._holdingForTTS) {
            const result = this.cb.shouldHoldAfterReveal?.();
            if (result) {
                if (typeof result === 'object') {
                    if (!result.holding) {
                        // TTS queue empty — release
                        this._holdingForTTS = false;
                        this._holdSegmentSnapshot = -1;
                        this.advanceNonText();
                        return;
                    }
                    if (result.segmentDone !== this._holdSegmentSnapshot) {
                        // A segment just finished — release even if next segment is starting
                        this._holdingForTTS = false;
                        this._holdSegmentSnapshot = -1;
                        this.advanceNonText();
                        return;
                    }
                    return; // Same segment still playing — stay on current item
                }
                // Boolean form (legacy): hold as long as true
                return;
            }
            this._holdingForTTS = false;
            this._holdSegmentSnapshot = -1;
            // TTS done — continue to process next item
            this.advanceNonText();
            return;
        }
        const item = this.items[this.readIndex];
        if (!item) return; // Queue empty or caught up — wait
        switch(item.kind){
            case 'text':
                {
                    // Advance character cursor
                    this.charCursor = Math.min(this.charCursor + this.charsPerTick, item.text.length);
                    const revealed = item.text.slice(0, this.charCursor);
                    const fullyRevealed = this.charCursor >= item.text.length;
                    const isComplete = fullyRevealed && item.sealed;
                    // Update chat area
                    this.cb.onTextReveal(item.messageId, item.partId, revealed, isComplete);
                    // Update roundtable (current segment only).
                    // Use this.currentAgentId (set when tick processes agent_start) rather than
                    // item.agentId — push-time race means item.agentId can carry a stale value
                    // from the previous agent when SSE pushes outpace the tick loop.
                    this.currentSegmentText = revealed;
                    this.cb.onLiveSpeech(this.currentSegmentText, this.currentAgentId);
                    this.cb.onSpeechProgress(item.text.length > 0 ? this.charCursor / item.text.length : 1);
                    // Advance to next item if fully revealed and sealed
                    if (isComplete) {
                        this.readIndex++;
                        this.charCursor = 0;
                        // Fixed pause after text finishes — gives the reader a breathing gap
                        // before the next action or agent turn fires.
                        if (this.postTextDelayTicks > 0) {
                            this._dwellTicksRemaining = this.postTextDelayTicks;
                            // If TTS hold callback exists, mark that we need to check it after delay
                            if (this.cb.shouldHoldAfterReveal) {
                                this._holdingForTTS = true;
                                const snap = this.cb.shouldHoldAfterReveal();
                                this._holdSegmentSnapshot = typeof snap === 'object' ? snap.segmentDone : -1;
                            }
                            return; // next tick will count down, then advanceNonText
                        }
                        // No post-text delay — check TTS hold immediately
                        {
                            const result = this.cb.shouldHoldAfterReveal?.();
                            if (result) {
                                this._holdingForTTS = true;
                                this._holdSegmentSnapshot = typeof result === 'object' ? result.segmentDone : -1;
                                return; // TTS still playing — hold here
                            }
                        }
                        // Process any immediately-advanceable items in the same tick
                        // (e.g. action badges right after text)
                        this.advanceNonText();
                    }
                    break;
                }
            // Non-text items are processed immediately
            case 'agent_start':
                this.currentAgentId = item.agentId;
                this.currentSegmentText = '';
                this.cb.onThinking(null); // Agent selected — clear thinking indicator
                this.cb.onAgentStart(item);
                this.cb.onLiveSpeech(null, item.agentId);
                this.readIndex++;
                this.charCursor = 0;
                this.advanceNonText();
                break;
            case 'agent_end':
                this.cb.onAgentEnd(item);
                this.readIndex++;
                this.charCursor = 0;
                this.advanceNonText();
                break;
            case 'action':
                this.currentSegmentText = '';
                this.cb.onActionReady(item.messageId, item);
                this.cb.onLiveSpeech(null, this.currentAgentId);
                this.readIndex++;
                this.charCursor = 0;
                // Delay after action so animations have time to play out
                if (this.actionDelayTicks > 0) {
                    this._dwellTicksRemaining = this.actionDelayTicks;
                    return;
                }
                this.advanceNonText();
                break;
            case 'thinking':
                this.cb.onThinking(item);
                this.readIndex++;
                this.charCursor = 0;
                this.advanceNonText();
                break;
            case 'cue_user':
                this.cb.onCueUser(item.fromAgentId, item.prompt);
                this.readIndex++;
                this.charCursor = 0;
                this.advanceNonText();
                break;
            case 'done':
                this.cb.onLiveSpeech(null, null);
                this.cb.onSpeechProgress(null);
                this.cb.onThinking(null);
                this.cb.onDone(item);
                this.readIndex++;
                this.charCursor = 0;
                // Stop the timer — nothing more to process
                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }
                // Resolve drain promise
                this._drainResolve?.();
                this._drainResolve = null;
                this._drainReject = null;
                break;
            case 'error':
                this.cb.onError(item.message);
                this.readIndex++;
                this.charCursor = 0;
                this.advanceNonText();
                break;
        }
    }
    /**
   * After processing a non-text item, keep advancing through consecutive
   * non-text items in the same tick. Stop when we hit a text item or
   * the end of the queue — the next tick will handle the text item
   * (so we don't skip the character-by-character reveal).
   *
   * Also stops when an action triggers a delay so its animation can play.
   */ advanceNonText() {
        while(this.readIndex < this.items.length){
            const next = this.items[this.readIndex];
            if (next.kind === 'text') break; // Let the next tick handle text
            switch(next.kind){
                case 'agent_start':
                    this.currentAgentId = next.agentId;
                    this.currentSegmentText = '';
                    this.cb.onThinking(null); // Agent selected — clear thinking indicator
                    this.cb.onAgentStart(next);
                    this.cb.onLiveSpeech(null, next.agentId);
                    break;
                case 'agent_end':
                    this.cb.onAgentEnd(next);
                    break;
                case 'action':
                    this.currentSegmentText = '';
                    this.cb.onActionReady(next.messageId, next);
                    this.cb.onLiveSpeech(null, this.currentAgentId);
                    this.readIndex++;
                    this.charCursor = 0;
                    // Pause after action to let animation play
                    if (this.actionDelayTicks > 0) {
                        this._dwellTicksRemaining = this.actionDelayTicks;
                        return; // resume on next tick after countdown
                    }
                    continue; // no delay — keep advancing
                case 'thinking':
                    this.cb.onThinking(next);
                    break;
                case 'cue_user':
                    this.cb.onCueUser(next.fromAgentId, next.prompt);
                    break;
                case 'done':
                    this.cb.onLiveSpeech(null, null);
                    this.cb.onSpeechProgress(null);
                    this.cb.onThinking(null);
                    this.cb.onDone(next);
                    this.readIndex++;
                    this.charCursor = 0;
                    if (this.timer) {
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                    // Resolve drain promise
                    this._drainResolve?.();
                    this._drainResolve = null;
                    this._drainReject = null;
                    return; // done — stop advancing
                case 'error':
                    this.cb.onError(next.message);
                    break;
            }
            this.readIndex++;
            this.charCursor = 0;
        }
    }
}
}),
"[project]/lib/utils/image-storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cleanupOldImages",
    ()=>cleanupOldImages,
    "cleanupSessionImages",
    ()=>cleanupSessionImages,
    "getImageStorageSize",
    ()=>getImageStorageSize,
    "loadImageMapping",
    ()=>loadImageMapping,
    "loadPdfBlob",
    ()=>loadPdfBlob,
    "storeImages",
    ()=>storeImages,
    "storePdfBlob",
    ()=>storePdfBlob
]);
/**
 * Image Storage Utilities
 *
 * Store PDF images in IndexedDB to avoid sessionStorage 5MB limit.
 * Images are stored as Blobs for efficient storage.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/database.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-ssr] (ecmascript)");
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('ImageStorage');
/**
 * Convert base64 data URL to Blob
 */ function base64ToBlob(base64DataUrl) {
    const parts = base64DataUrl.split(',');
    const mimeMatch = parts[0].match(/:(.*?);/);
    const mimeType = mimeMatch ? mimeMatch[1] : 'image/png';
    const base64Data = parts[1];
    const byteString = atob(base64Data);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for(let i = 0; i < byteString.length; i++){
        uint8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([
        uint8Array
    ], {
        type: mimeType
    });
}
/**
 * Convert Blob to base64 data URL
 */ async function blobToBase64(blob) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onloadend = ()=>resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}
async function storeImages(images) {
    const sessionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(10);
    const storedIds = [];
    for (const img of images){
        try {
            const blob = base64ToBlob(img.src);
            const mimeMatch = img.src.match(/data:(.*?);/);
            const mimeType = mimeMatch ? mimeMatch[1] : 'image/png';
            // Use session-prefixed ID to allow cleanup
            const storageId = `session_${sessionId}_${img.id}`;
            const record = {
                id: storageId,
                blob,
                filename: `${img.id}.png`,
                mimeType,
                size: blob.size,
                createdAt: Date.now()
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].imageFiles.put(record);
            storedIds.push(storageId);
        } catch (error) {
            log.error(`Failed to store image ${img.id}:`, error);
        }
    }
    return storedIds;
}
async function loadImageMapping(imageIds) {
    const mapping = {};
    for (const storageId of imageIds){
        try {
            const record = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].imageFiles.get(storageId);
            if (record) {
                const base64 = await blobToBase64(record.blob);
                // Extract original ID (img_1) from storage ID (session_xxx_img_1)
                const originalId = storageId.replace(/^session_[^_]+_/, '');
                mapping[originalId] = base64;
            }
        } catch (error) {
            log.error(`Failed to load image ${storageId}:`, error);
        }
    }
    return mapping;
}
async function cleanupSessionImages(sessionId) {
    try {
        const prefix = `session_${sessionId}_`;
        const allImages = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].imageFiles.toArray();
        const toDelete = allImages.filter((img)=>img.id.startsWith(prefix));
        for (const img of toDelete){
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].imageFiles.delete(img.id);
        }
        log.info(`Cleaned up ${toDelete.length} images for session ${sessionId}`);
    } catch (error) {
        log.error('Failed to cleanup session images:', error);
    }
}
async function cleanupOldImages(hoursOld = 24) {
    try {
        const cutoff = Date.now() - hoursOld * 60 * 60 * 1000;
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].imageFiles.where('createdAt').below(cutoff).delete();
        log.info(`Cleaned up images older than ${hoursOld} hours`);
    } catch (error) {
        log.error('Failed to cleanup old images:', error);
    }
}
async function getImageStorageSize() {
    const images = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].imageFiles.toArray();
    return images.reduce((total, img)=>total + img.size, 0);
}
async function storePdfBlob(file) {
    const storageKey = `pdf_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(10)}`;
    const blob = new Blob([
        await file.arrayBuffer()
    ], {
        type: file.type || 'application/pdf'
    });
    const record = {
        id: storageKey,
        blob,
        filename: file.name,
        mimeType: file.type || 'application/pdf',
        size: blob.size,
        createdAt: Date.now()
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].imageFiles.put(record);
    return storageKey;
}
async function loadPdfBlob(key) {
    const record = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].imageFiles.get(key);
    return record?.blob ?? null;
}
}),
"[project]/lib/audio/tts-utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Shared TTS utilities used by both client-side and server-side generation.
 */ __turbopack_context__.s([
    "TTS_MAX_TEXT_LENGTH",
    ()=>TTS_MAX_TEXT_LENGTH,
    "splitLongSpeechActions",
    ()=>splitLongSpeechActions,
    "splitLongSpeechText",
    ()=>splitLongSpeechText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-ssr] (ecmascript)");
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('TTS');
const TTS_MAX_TEXT_LENGTH = {
    'glm-tts': 1024
};
function splitLongSpeechText(text, maxLength) {
    const normalized = text.trim();
    if (!normalized || normalized.length <= maxLength) return [
        normalized
    ];
    const units = normalized.split(/(?<=[。！？!?；;：:\n])/u).map((part)=>part.trim()).filter(Boolean);
    const chunks = [];
    let current = '';
    const pushChunk = (value)=>{
        const trimmed = value.trim();
        if (trimmed) chunks.push(trimmed);
    };
    const appendUnit = (unit)=>{
        if (!current) {
            current = unit;
            return;
        }
        if ((current + unit).length <= maxLength) {
            current += unit;
            return;
        }
        pushChunk(current);
        current = unit;
    };
    const hardSplitUnit = (unit)=>{
        const parts = unit.split(/(?<=[，,、])/u).filter(Boolean);
        if (parts.length > 1) {
            for (const part of parts){
                if (part.length <= maxLength) appendUnit(part);
                else hardSplitUnit(part);
            }
            return;
        }
        let start = 0;
        while(start < unit.length){
            appendUnit(unit.slice(start, start + maxLength));
            start += maxLength;
        }
    };
    for (const unit of units.length > 0 ? units : [
        normalized
    ]){
        if (unit.length <= maxLength) appendUnit(unit);
        else hardSplitUnit(unit);
    }
    pushChunk(current);
    return chunks;
}
function splitLongSpeechActions(actions, providerId) {
    const maxLength = TTS_MAX_TEXT_LENGTH[providerId];
    if (!maxLength) return actions;
    let didSplit = false;
    const nextActions = actions.flatMap((action)=>{
        if (action.type !== 'speech' || !action.text || action.text.length <= maxLength) return [
            action
        ];
        const chunks = splitLongSpeechText(action.text, maxLength);
        if (chunks.length <= 1) return [
            action
        ];
        didSplit = true;
        const { audioId: _audioId, ...baseAction } = action;
        log.info(`Split speech for ${providerId}: action=${action.id}, len=${action.text.length}, chunks=${chunks.length}`);
        return chunks.map((chunk, i)=>({
                ...baseAction,
                id: `${action.id}_tts_${i + 1}`,
                text: chunk
            }));
    });
    return didSplit ? nextActions : actions;
}
}),
"[project]/lib/hooks/use-scene-generator.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateAndStoreTTS",
    ()=>generateAndStoreTTS,
    "useSceneGenerator",
    ()=>useSceneGenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/stage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$model$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/model-config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/settings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/database.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2f$tts$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audio/tts-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$media$2f$media$2d$orchestrator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/media/media-orchestrator.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('SceneGenerator');
function getApiHeaders() {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$model$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentModelConfig"])();
    const settings = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    const imageProviderConfig = settings.imageProvidersConfig?.[settings.imageProviderId];
    const videoProviderConfig = settings.videoProvidersConfig?.[settings.videoProviderId];
    return {
        'Content-Type': 'application/json',
        'x-model': config.modelString || '',
        'x-api-key': config.apiKey || '',
        'x-base-url': config.baseUrl || '',
        'x-provider-type': config.providerType || '',
        'x-requires-api-key': String(config.requiresApiKey ?? false),
        // Image generation provider
        'x-image-provider': settings.imageProviderId || '',
        'x-image-model': settings.imageModelId || '',
        'x-image-api-key': imageProviderConfig?.apiKey || '',
        'x-image-base-url': imageProviderConfig?.baseUrl || '',
        // Video generation provider
        'x-video-provider': settings.videoProviderId || '',
        'x-video-model': settings.videoModelId || '',
        'x-video-api-key': videoProviderConfig?.apiKey || '',
        'x-video-base-url': videoProviderConfig?.baseUrl || '',
        // Media generation toggles
        'x-image-generation-enabled': String(settings.imageGenerationEnabled ?? false),
        'x-video-generation-enabled': String(settings.videoGenerationEnabled ?? false)
    };
}
/** Call POST /api/generate/scene-content (step 1) */ async function fetchSceneContent(params, signal) {
    const response = await fetch('/api/generate/scene-content', {
        method: 'POST',
        headers: getApiHeaders(),
        body: JSON.stringify(params),
        signal
    });
    if (!response.ok) {
        const data = await response.json().catch(()=>({
                error: 'Request failed'
            }));
        return {
            success: false,
            error: data.error || `HTTP ${response.status}`
        };
    }
    return response.json();
}
/** Call POST /api/generate/scene-actions (step 2) */ async function fetchSceneActions(params, signal) {
    const response = await fetch('/api/generate/scene-actions', {
        method: 'POST',
        headers: getApiHeaders(),
        body: JSON.stringify(params),
        signal
    });
    if (!response.ok) {
        const data = await response.json().catch(()=>({
                error: 'Request failed'
            }));
        return {
            success: false,
            error: data.error || `HTTP ${response.status}`
        };
    }
    return response.json();
}
async function generateAndStoreTTS(audioId, text, signal) {
    const settings = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    if (settings.ttsProviderId === 'browser-native-tts') return;
    const ttsProviderConfig = settings.ttsProvidersConfig?.[settings.ttsProviderId];
    const response = await fetch('/api/generate/tts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text,
            audioId,
            ttsProviderId: settings.ttsProviderId,
            ttsModelId: ttsProviderConfig?.modelId,
            ttsVoice: settings.ttsVoice,
            ttsSpeed: settings.ttsSpeed,
            ttsApiKey: ttsProviderConfig?.apiKey || undefined,
            ttsBaseUrl: ttsProviderConfig?.baseUrl || undefined
        }),
        signal
    });
    const data = await response.json().catch(()=>({
            success: false,
            error: response.statusText || 'Invalid TTS response'
        }));
    if (!response.ok || !data.success || !data.base64 || !data.format) {
        const err = new Error(data.details || data.error || `TTS request failed: HTTP ${response.status}`);
        log.warn('TTS failed for', audioId, ':', err);
        throw err;
    }
    const binary = atob(data.base64);
    const bytes = new Uint8Array(binary.length);
    for(let i = 0; i < binary.length; i++){
        bytes[i] = binary.charCodeAt(i);
    }
    const blob = new Blob([
        bytes
    ], {
        type: `audio/${data.format}`
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].audioFiles.put({
        id: audioId,
        blob,
        format: data.format,
        createdAt: Date.now()
    });
}
/** Generate TTS for all speech actions in a scene. Returns result. */ async function generateTTSForScene(scene, signal) {
    const providerId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState().ttsProviderId;
    scene.actions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2f$tts$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitLongSpeechActions"])(scene.actions || [], providerId);
    const speechActions = scene.actions.filter((a)=>a.type === 'speech' && !!a.text);
    if (speechActions.length === 0) return {
        success: true,
        failedCount: 0
    };
    let failedCount = 0;
    let lastError;
    for (const action of speechActions){
        const audioId = `tts_${action.id}`;
        action.audioId = audioId;
        try {
            await generateAndStoreTTS(audioId, action.text, signal);
        } catch (error) {
            failedCount++;
            lastError = error instanceof Error ? error.message : `TTS failed for action ${action.id}`;
            log.warn('TTS generation failed:', {
                providerId,
                actionId: action.id,
                textLength: action.text.length,
                error: lastError
            });
        }
    }
    return {
        success: failedCount === 0,
        failedCount,
        error: lastError
    };
}
function useSceneGenerator(options = {}) {
    const abortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const generatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const mediaAbortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fetchAbortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastParamsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const generateRemainingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const store = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$stage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStageStore"];
    const generateRemaining = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (params)=>{
        lastParamsRef.current = params;
        if (generatingRef.current) return;
        generatingRef.current = true;
        abortRef.current = false;
        const removeGeneratingOutline = (outlineId)=>{
            const current = store.getState().generatingOutlines;
            if (!current.some((o)=>o.id === outlineId)) return;
            store.getState().setGeneratingOutlines(current.filter((o)=>o.id !== outlineId));
        };
        // Create a new AbortController for this generation run
        fetchAbortRef.current = new AbortController();
        const signal = fetchAbortRef.current.signal;
        const state = store.getState();
        const { outlines, scenes, stage } = state;
        const startEpoch = state.generationEpoch;
        if (!stage || outlines.length === 0) {
            generatingRef.current = false;
            return;
        }
        store.getState().setGenerationStatus('generating');
        // Determine pending outlines
        const completedOrders = new Set(scenes.map((s)=>s.order));
        const pending = outlines.filter((o)=>!completedOrders.has(o.order)).sort((a, b)=>a.order - b.order);
        if (pending.length === 0) {
            store.getState().setGenerationStatus('completed');
            store.getState().setGeneratingOutlines([]);
            options.onComplete?.();
            generatingRef.current = false;
            return;
        }
        store.getState().setGeneratingOutlines(pending);
        // Launch media generation in parallel — does not block content/action generation
        mediaAbortRef.current = new AbortController();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$media$2f$media$2d$orchestrator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateMediaForOutlines"])(outlines, stage.id, mediaAbortRef.current.signal).catch((err)=>{
            log.warn('Media generation error:', err);
        });
        // Get previousSpeeches from last completed scene
        let previousSpeeches = [];
        const sortedScenes = [
            ...scenes
        ].sort((a, b)=>a.order - b.order);
        if (sortedScenes.length > 0) {
            const lastScene = sortedScenes[sortedScenes.length - 1];
            previousSpeeches = (lastScene.actions || []).filter((a)=>a.type === 'speech').map((a)=>a.text);
        }
        // Serial generation loop — two-step per outline
        try {
            let pausedByFailureOrAbort = false;
            for (const outline of pending){
                if (abortRef.current || store.getState().generationEpoch !== startEpoch) {
                    store.getState().setGenerationStatus('paused');
                    pausedByFailureOrAbort = true;
                    break;
                }
                store.getState().setCurrentGeneratingOrder(outline.order);
                // Step 1: Generate content
                options.onPhaseChange?.('content', outline);
                const contentResult = await fetchSceneContent({
                    outline,
                    allOutlines: outlines,
                    stageId: stage.id,
                    pdfImages: params.pdfImages,
                    imageMapping: params.imageMapping,
                    stageInfo: params.stageInfo,
                    agents: params.agents
                }, signal);
                if (!contentResult.success || !contentResult.content) {
                    if (abortRef.current || store.getState().generationEpoch !== startEpoch) {
                        pausedByFailureOrAbort = true;
                        break;
                    }
                    store.getState().addFailedOutline(outline);
                    options.onSceneFailed?.(outline, contentResult.error || 'Content generation failed');
                    store.getState().setGenerationStatus('paused');
                    pausedByFailureOrAbort = true;
                    break;
                }
                if (abortRef.current || store.getState().generationEpoch !== startEpoch) {
                    store.getState().setGenerationStatus('paused');
                    pausedByFailureOrAbort = true;
                    break;
                }
                // Step 2: Generate actions + assemble scene
                options.onPhaseChange?.('actions', outline);
                const actionsResult = await fetchSceneActions({
                    outline: contentResult.effectiveOutline || outline,
                    allOutlines: outlines,
                    content: contentResult.content,
                    stageId: stage.id,
                    agents: params.agents,
                    previousSpeeches,
                    userProfile: params.userProfile
                }, signal);
                if (actionsResult.success && actionsResult.scene) {
                    const scene = actionsResult.scene;
                    const settings = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
                    // TTS generation — failure means the whole scene fails
                    if (settings.ttsEnabled && settings.ttsProviderId !== 'browser-native-tts') {
                        const ttsResult = await generateTTSForScene(scene, signal);
                        if (!ttsResult.success) {
                            if (abortRef.current || store.getState().generationEpoch !== startEpoch) {
                                pausedByFailureOrAbort = true;
                                break;
                            }
                            store.getState().addFailedOutline(outline);
                            options.onSceneFailed?.(outline, ttsResult.error || 'TTS generation failed');
                            store.getState().setGenerationStatus('paused');
                            pausedByFailureOrAbort = true;
                            break;
                        }
                    }
                    // Epoch changed — stage switched, discard this scene
                    if (store.getState().generationEpoch !== startEpoch) {
                        pausedByFailureOrAbort = true;
                        break;
                    }
                    removeGeneratingOutline(outline.id);
                    store.getState().addScene(scene);
                    options.onSceneGenerated?.(scene, outline.order);
                    previousSpeeches = actionsResult.previousSpeeches || [];
                } else {
                    if (abortRef.current || store.getState().generationEpoch !== startEpoch) {
                        pausedByFailureOrAbort = true;
                        break;
                    }
                    store.getState().addFailedOutline(outline);
                    options.onSceneFailed?.(outline, actionsResult.error || 'Actions generation failed');
                    store.getState().setGenerationStatus('paused');
                    pausedByFailureOrAbort = true;
                    break;
                }
            }
            if (!abortRef.current && !pausedByFailureOrAbort) {
                store.getState().setGenerationStatus('completed');
                store.getState().setGeneratingOutlines([]);
                options.onComplete?.();
            }
        } catch (err) {
            // AbortError is expected when stop() is called — don't treat as failure
            if (err instanceof DOMException && err.name === 'AbortError') {
                log.info('Generation aborted');
                store.getState().setGenerationStatus('paused');
            } else {
                throw err;
            }
        } finally{
            generatingRef.current = false;
            fetchAbortRef.current = null;
        }
    }, [
        options,
        store
    ]);
    // Keep ref in sync so retrySingleOutline can call it
    generateRemainingRef.current = generateRemaining;
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        abortRef.current = true;
        store.getState().bumpGenerationEpoch();
        fetchAbortRef.current?.abort();
        mediaAbortRef.current?.abort();
    }, [
        store
    ]);
    const isGenerating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>generatingRef.current, []);
    /** Retry a single failed outline from scratch (content → actions → TTS). */ const retrySingleOutline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (outlineId)=>{
        const state = store.getState();
        const outline = state.failedOutlines.find((o)=>o.id === outlineId);
        const params = lastParamsRef.current;
        if (!outline || !state.stage || !params) return;
        const removeGeneratingOutline = ()=>{
            const current = store.getState().generatingOutlines;
            if (!current.some((o)=>o.id === outlineId)) return;
            store.getState().setGeneratingOutlines(current.filter((o)=>o.id !== outlineId));
        };
        // Remove from failed list and mark as generating
        store.getState().retryFailedOutline(outlineId);
        store.getState().setGenerationStatus('generating');
        const currentGenerating = store.getState().generatingOutlines;
        if (!currentGenerating.some((o)=>o.id === outline.id)) {
            store.getState().setGeneratingOutlines([
                ...currentGenerating,
                outline
            ]);
        }
        const abortController = new AbortController();
        const signal = abortController.signal;
        try {
            // Step 1: Content
            const contentResult = await fetchSceneContent({
                outline,
                allOutlines: state.outlines,
                stageId: state.stage.id,
                pdfImages: params.pdfImages,
                imageMapping: params.imageMapping,
                stageInfo: params.stageInfo,
                agents: params.agents
            }, signal);
            if (!contentResult.success || !contentResult.content) {
                store.getState().addFailedOutline(outline);
                return;
            }
            // Step 2: Actions
            const sortedScenes = [
                ...store.getState().scenes
            ].sort((a, b)=>a.order - b.order);
            const lastScene = sortedScenes[sortedScenes.length - 1];
            const previousSpeeches = lastScene ? (lastScene.actions || []).filter((a)=>a.type === 'speech').map((a)=>a.text) : [];
            const actionsResult = await fetchSceneActions({
                outline: contentResult.effectiveOutline || outline,
                allOutlines: state.outlines,
                content: contentResult.content,
                stageId: state.stage.id,
                agents: params.agents,
                previousSpeeches,
                userProfile: params.userProfile
            }, signal);
            if (!actionsResult.success || !actionsResult.scene) {
                store.getState().addFailedOutline(outline);
                return;
            }
            // Step 3: TTS
            const settings = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
            if (settings.ttsEnabled && settings.ttsProviderId !== 'browser-native-tts') {
                const ttsResult = await generateTTSForScene(actionsResult.scene, signal);
                if (!ttsResult.success) {
                    store.getState().addFailedOutline(outline);
                    return;
                }
            }
            removeGeneratingOutline();
            store.getState().addScene(actionsResult.scene);
            // Resume remaining generation if there are pending outlines
            if (store.getState().generatingOutlines.length > 0 && lastParamsRef.current) {
                generateRemainingRef.current?.(lastParamsRef.current);
            }
        } catch (err) {
            if (!(err instanceof DOMException && err.name === 'AbortError')) {
                store.getState().addFailedOutline(outline);
            }
        }
    }, [
        store
    ]);
    return {
        generateRemaining,
        retrySingleOutline,
        stop,
        isGenerating
    };
}
}),
];

//# sourceMappingURL=lib_a280f05a._.js.map